//
//  PaymentController.m
//  GoldPlayPro-mobile
//
//  Created by raft c on 2018/5/25.
//

#import <Foundation/Foundation.h>
#import "PaymentController.h"
//#include "scripting/js-bindings/jswrapper/jsc/ScriptEngine.hpp"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"
#include "JsTool.h"

@interface AAAA_PaymentController_BBBB ()

@end

@implementation AAAA_PaymentController_BBBB

static bool hasAddObersver = NO;

- (id)AAAA_initWithPid_BBBB:(NSString*) pid OrderId:(NSString*) order_id
{
    self = [super init];
    if (self) {
        // Custom initialization
        [self AAAA_initProductId_BBBB:pid];
        [self AAAA_initOrderId_BBBB:order_id];
        if (!hasAddObersver) {
            hasAddObersver = YES;
            // 监听购买结果
            [[SKPaymentQueue defaultQueue] addTransactionObserver:self];
        }
    }
    return self;
}
- (void)AAAA_initOrderId_BBBB:(NSString*) order_id
{
    self.AAAA_orderId_BBBB = order_id;
    
    NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
    [userDefaults setObject:order_id forKey:@"orderid"];
    [userDefaults synchronize];
}

- (void)AAAA_initProductId_BBBB:(NSString*) productIdStr
{
    self.AAAA_productID_BBBB = productIdStr;
}

- (void)AAAA_purchaseFunc_BBBB{
    NSString *product = self.AAAA_productID_BBBB;
    if([SKPaymentQueue canMakePayments]){
        [self requestProductData:product];
        NSLog(@"允许程序内付费");
    }else{
        NSLog(@"不允许程序内付费");
    }
}

//尝试发送之前失败的凭证
- (void) AAAA_sendFailedIapFiles_BBBB {
    NSFileManager *fileManager = [NSFileManager defaultManager];
    NSError *error = nil;
    //搜索该目录下的所有文件和目录
    NSArray *cacheFileNameArray = [fileManager contentsOfDirectoryAtPath:AppStoreInfoLocalFilePath error:&error];
    if (error == nil)
    {
        for (NSString *name in cacheFileNameArray)
        {
            if ([name hasSuffix:@".plist"])//如果有plist后缀的文件，说明就是存储的购买凭证
            {
                NSString *filePath = [NSString stringWithFormat:@"%@/%@", AppStoreInfoLocalFilePath, name];
                [self sendAppStoreRequestBuyPlist:filePath];
            }
        }
    }
    else
    {
        NSLog(@"AppStoreInfoLocalFilePath error:%@", [error domain]);
    }
}

//重新发送凭证内容到后端
-(void)sendAppStoreRequestBuyPlist:(NSString *)plistPath
{
    NSDictionary *dic = [NSDictionary dictionaryWithContentsOfFile:plistPath];
    NSString *orderid = [dic objectForKey:@"orderid"];
    NSString *receipt = [dic objectForKey:@"receipt"];
    
    NSDictionary *sedic = @{@"receipt":receipt,@"orderid":orderid,@"cbName":@"paySdkReplacementCallback"};
    NSString* jsString = nil;
    NSError* error;
    NSData* jsonData = [NSJSONSerialization dataWithJSONObject:sedic options:NSJSONWritingPrettyPrinted error:&error];
    
    jsString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    NSString* resStr = [NSString stringWithFormat:@"cc.vv.PlatformApiMgr.trigerCallback(%@)",jsString];
    std::string callStr = [resStr UTF8String];
    se::ScriptEngine::getInstance()->evalString(callStr.c_str());
}

//验证成功就从plist中移除凭证
-(void)AAAA_sendAppStoreRequestSucceededWithData_BBBB:(NSString *)orderId
{
    NSString *filePath = [NSString stringWithFormat:@"%@/%@.plist", AppStoreInfoLocalFilePath, orderId];
    NSFileManager *fileManager = [NSFileManager defaultManager];
    if ([fileManager fileExistsAtPath:filePath])
    {
        [fileManager removeItemAtPath:filePath error:nil];
    }
}

//请求商品
- (void)requestProductData:(NSString *)type{
    NSLog(@"-------------请求对应的产品信息----------------");
    NSArray *product = [[NSArray alloc] initWithObjects:type, nil];
    
    NSSet *nsset = [NSSet setWithArray:product];
    SKProductsRequest *request = [[SKProductsRequest alloc] initWithProductIdentifiers:nsset];
    request.delegate = self;
    [request start];
    [product release];
}

//收到产品返回信息
- (void)productsRequest:(SKProductsRequest *)request didReceiveResponse:(SKProductsResponse *)response{
    
    NSLog(@"--------------收到产品反馈消息---------------------");
    NSArray *product = response.products;
    if([product count] == 0){
        NSLog(@"--------------没有商品------------------");
        return;
    }
    
    NSLog(@"productID:%@", response.invalidProductIdentifiers);
    NSLog(@"产品付费数量:%d",[product count]);
    
    SKProduct *payInfoPorduct = nil;
    for (SKProduct *pro in product) {
        NSLog(@"%@", [pro description]);
        NSLog(@"%@", [pro localizedTitle]);
        NSLog(@"%@", [pro localizedDescription]);
        NSLog(@"%@", [pro price]);
        NSLog(@"%@", [pro productIdentifier]);
        
        if([pro.productIdentifier isEqualToString:self.AAAA_productID_BBBB]){
            payInfoPorduct = pro;
        }
    }
    
    if(!payInfoPorduct)
    {
        return;
    }
    
//    NSLog(@"发送购买请求");
    
    if (floor(NSFoundationVersionNumber) < NSFoundationVersionNumber_iOS_5_0)
    {
//        NSLog(@"pay_it less 5.0");
        SKPayment* payment = [SKPayment paymentWithProduct:payInfoPorduct];
        [[SKPaymentQueue defaultQueue] addPayment:payment];
    }
    else
    {
//        NSLog(@"pay_it 5.0+");
        
        SKMutablePayment* payment = [SKMutablePayment paymentWithProduct:payInfoPorduct];
        payment.quantity = [product count];
        [[SKPaymentQueue defaultQueue] addPayment:payment];
    }
    [request autorelease];
}

- (void)requestProUpgradeProductData
{
//    NSLog(@"------请求升级数据---------");
    NSSet *productIdentifiers = [NSSet setWithObject:@"com.productid"];
    SKProductsRequest* productsRequest = [[SKProductsRequest alloc] initWithProductIdentifiers:productIdentifiers];
    productsRequest.delegate = self;
    [productsRequest start];
    
}

//请求失败
- (void)request:(SKRequest *)request didFailWithError:(NSError *)error{
    NSLog(@"------------------错误-----------------:%@", error);
    UIAlertView *alerView =  [[UIAlertView alloc] initWithTitle:NSLocalizedString(@"Alert",NULL) message:[error localizedDescription]
                                                       delegate:nil cancelButtonTitle:NSLocalizedString(@"Close",nil) otherButtonTitles:nil];
    [alerView show];
    [alerView release];
}

- (void)requestDidFinish:(SKRequest *)request{
    NSLog(@"------------反馈信息结束-----------------");
}

-(void) PurchasedTransaction: (SKPaymentTransaction *)transaction{
    NSLog(@"-----PurchasedTransaction----");
    NSArray *transactions =[[NSArray alloc] initWithObjects:transaction, nil];
    [self paymentQueue:[SKPaymentQueue defaultQueue] updatedTransactions:transactions];
    [transactions release];
}

//监听购买结果
- (void)paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray *)transaction{
    for(SKPaymentTransaction *tran in transaction){
        
        switch (tran.transactionState) {
            case SKPaymentTransactionStatePurchased:
                NSLog(@"交易完成");
                [self completeTransaction:tran];
                [[SKPaymentQueue defaultQueue] finishTransaction:tran];
                break;
            case SKPaymentTransactionStatePurchasing:
                NSLog(@"商品添加进列表");
                break;
            case SKPaymentTransactionStateRestored:
                NSLog(@"已经购买过商品");
                [self restoreTransaction:tran];
                [[SKPaymentQueue defaultQueue] finishTransaction:tran];
                break;
            case SKPaymentTransactionStateFailed:
                NSLog(@"交易失败");
                [self failedTransaction:tran];
                [[SKPaymentQueue defaultQueue] finishTransaction:tran];
                break;
            default:
                [[SKPaymentQueue defaultQueue] finishTransaction:tran];
                break;
        }
    }
}

//交易结束
- (void)completeTransaction:(SKPaymentTransaction *)transaction{
    NSLog(@"交易结束");
    NSLog(@"transactionIdentifier = %@", transaction.transactionIdentifier);
    // Remove the transaction from the payment queue.
    
    NSUserDefaults *userDefaultes = [NSUserDefaults standardUserDefaults];
    NSString *orderid = [userDefaultes stringForKey:@"orderid"];
    NSString * productIdentifier = transaction.payment.productIdentifier;
    if ([productIdentifier length] > 0) {
        NSString *receipt = nil;
        NSBundle *bundle = [NSBundle mainBundle];
        if([bundle respondsToSelector:@selector(appStoreReceiptURL)]) {
            NSURL * receiptUrl = [bundle performSelector:@selector(appStoreReceiptURL)];
            NSData *receiptData=[NSData dataWithContentsOfURL:receiptUrl];
            receipt=[receiptData base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithLineFeed];//转化为base64字符串
        }
        NSLog(@" completeTransaction orderid: %@", orderid);
        if(orderid!=nil) {
            NSDictionary* dic = @{@"receipt":receipt,@"orderid":orderid,@"cbName":@"paySdkCallback"};
            NSString* jsString = nil;
            NSError* error;
            NSData* jsonData = [NSJSONSerialization dataWithJSONObject:dic options:NSJSONWritingPrettyPrinted error:&error];
            
            jsString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
            NSString* resStr = [NSString stringWithFormat:@"cc.vv.PlatformApiMgr.trigerCallback(%@)",jsString];
            std::string callStr = [resStr UTF8String];
            se::ScriptEngine::getInstance()->evalString(callStr.c_str());

            [[SKPaymentQueue defaultQueue] finishTransaction: transaction];
        }else {
            UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:nil message:@"Unsuccessful Purchase \nPlease try again" delegate:self cancelButtonTitle:@"CANCEL" otherButtonTitles:@"RETRY", nil];
            [alertView show];
        }
        [self saveReceipt:receipt OrderId:orderid];
    }
}

//将orderid,receipt 写入本地， 待js返回后 再删除
-(void)saveReceipt:(NSString *)receipt OrderId:(NSString *) orderid {
    NSString *savedPath = [NSString stringWithFormat:@"%@%@.plist", AppStoreInfoLocalFilePath, orderid];
    
    NSDictionary *dic =[ NSDictionary dictionaryWithObjectsAndKeys:
                        receipt, @"receipt",
                        orderid, @"orderid",
                        nil];
    [dic writeToFile:savedPath atomically:YES];
}

#pragma mark - 设置弹出提示语
- (void)setupAlertController:(NSString *) msg {
    /*UIAlertView *wxshow = [[UIAlertView alloc] initWithTitle:@"温馨提示" message:msg delegate:nil cancelButtonTitle:nil otherButtonTitles:@"确定", nil];
    [wxshow show];*/
    
    NSMutableDictionary* dic = [NSMutableDictionary dictionary];
    [dic setObject:msg forKey:@"msg"];
    [dic setObject:@"0" forKey:@"code"];
    [JsTool AAAA_sendToJsPlatformApiCbName_BBBB:@"PaymentErrorCallback" params:dic];
}

- (void) failedTransaction: (SKPaymentTransaction *)transaction{
    if (transaction.error.code != SKErrorPaymentCancelled)
    {
    }
    switch (transaction.error.code) {
        case SKErrorUnknown:
            NSLog(@"SKErrorUnknown");
            [self setupAlertController: @"Unsuccessful Purchase \nUnknown error"];
            break;
        case SKErrorClientInvalid:
            NSLog(@"SKErrorClientInvalid");
            [self setupAlertController: @"Unsuccessful Purchase \nVerification failed"];
            break;
        case SKErrorPaymentCancelled:
            NSLog(@"SKErrorPaymentCancelled");
            [self setupAlertController: @"Purchase Cancelled"];
            break;
        case SKErrorPaymentInvalid:
            [self setupAlertController: @"Unsuccessful Purchase \niTunes Store verification failed"];
            NSLog(@"SKErrorPaymentInvalid");
            break;
        case SKErrorPaymentNotAllowed:
            [self setupAlertController: @"Unsuccessful Purchase \nCannot connect to iTunes Store"];
            NSLog(@"SKErrorPaymentNotAllowed");
            break;
        case SKErrorStoreProductNotAvailable:
            [self setupAlertController: @"Unsuccessful Purchase \nThe product cannot be purchased"];
            NSLog(@"SKErrorStoreProductNotAvailable");
            break;
        default:
            break;
    }
    [[SKPaymentQueue defaultQueue] finishTransaction: transaction];
}

- (void) restoreTransaction: (SKPaymentTransaction *)transaction
{
    
}

#pragma mark connection delegate
- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data
{
    NSLog(@"%@",  [[[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding] autorelease]);
}

- (void)connectionDidFinishLoading:(NSURLConnection *)connection{
    
}

- (void)connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response{
    switch([(NSHTTPURLResponse *)response statusCode]) {
        case 200:
        case 206:
            break;
        case 304:
            break;
        case 400:
            break;
        case 404:
            break;
        case 416:
            break;
        case 403:
            break;
        case 401:
        case 500:
            break;
        default:
            break;
    }
}

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error {
    NSLog(@"test");
}

- (void)dealloc{
    [[SKPaymentQueue defaultQueue] removeTransactionObserver:self];
    [super dealloc];
}

@end

