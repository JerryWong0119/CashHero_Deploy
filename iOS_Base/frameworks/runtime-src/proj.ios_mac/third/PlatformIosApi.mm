//
//  PlatformIosApi.m
//  我要打拉米
//
//  Created by AndyHu on 2018/4/18.
//

#import "PlatformIosApi.h"

#import <Foundation/Foundation.h>
#import <CoreLocation/CoreLocation.h>
#import <AdSupport/ASIdentifierManager.h>
#import <StoreKit/StoreKit.h>

//#import "locationtool.h"
#import "JsTool.h"
//#import "WeChatSDK.h"
#import "fbSDK/FacebookMgr.h"
#import "ApplePay/PaymentController.h"
#import "commUtils/SFHFKeychainUtils.h"
#import "commUtils/DeviceInfo.h"

#import "RootViewController.h"

//#import "KochavaTracker.h"
//#import "TradPlusADManager.h"

#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"

#ifndef Header_h
#define AppStoreInfoLocalFilePath [NSString stringWithFormat:@"%@/%@/", [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) lastObject],@"EACEF35FE363A75A"]

#endif

static PlatformIosApi *sharePlatformIosApi=NULL;

@implementation PlatformIosApi 

@synthesize AAAA_deviceToken_BBBB;

//获取单利对象
+ (id)getInstant {
    if (!sharePlatformIosApi) {
        sharePlatformIosApi = [[PlatformIosApi alloc] init];
    }
    return sharePlatformIosApi;
}

- (instancetype) init{
    [super init];
    
    self.orientation = UIInterfaceOrientationMaskPortrait;
    return self;
}

+ (RootViewController*)getRootViewController {
    return (RootViewController*)[UIApplication sharedApplication].keyWindow.rootViewController;
}

- (void)setUrlData:(NSString *)str {
    if (self.AAAA_openAppUrlDataStr_BBBB) {
        [self.AAAA_openAppUrlDataStr_BBBB release];
        self.AAAA_openAppUrlDataStr_BBBB = NULL;
    }
    
    if (str && str.length > 0) {
        self.AAAA_openAppUrlDataStr_BBBB = [[NSString alloc] initWithString:str];
    }
}

+ (NSString *) getUMChannelIdx {
    return [NSBundle mainBundle].infoDictionary[@"UMengChannel"];
}

+ (NSString *) getAppVersion {
    return [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
}

+ (NSString *) getOpenAppUrlDataString {
    NSString *tempUrlDataStr = [[PlatformIosApi getInstant] AAAA_openAppUrlDataStr_BBBB];
    if (tempUrlDataStr && tempUrlDataStr.length > 0) {
        [[PlatformIosApi getInstant] setUrlData:NULL];
        return tempUrlDataStr;
    }
    return @"";
}

+ (NSString *) getTxtFromClipboard {
    UIPasteboard* pboard= [UIPasteboard generalPasteboard];
    if (pboard.string !=NULL) {
        return pboard.string;
    }
    return @"";
}

+ (void) setTxtToClipboard:(NSString *) AAAA_txtStr_BBBB {
    UIPasteboard *pasteboard = [UIPasteboard generalPasteboard];
    pasteboard.string = AAAA_txtStr_BBBB;
}

//+ (void) openGPSSetting {
//    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:UIApplicationOpenSettingsURLString]];
//}

//+ (int) isOpenGPS {
//    int isOPen = 0;
//    if ([CLLocationManager locationServicesEnabled] && [CLLocationManager authorizationStatus] != kCLAuthorizationStatusDenied) {
//        isOPen = 1;
//    }
//    return isOPen;
//}

+ (void) openURL:(NSString *) url {
    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:url] options:[NSDictionary dictionary] completionHandler:^(BOOL success){
        
    }];
}

+ (float) getBatteyLevel {
    [[UIDevice currentDevice] setBatteryMonitoringEnabled:YES];
    return [[UIDevice currentDevice] batteryLevel];
}

+ (void) startLocation {
//    [LocationTool location];
}

+(bool) openRating {
    if (@available(iOS 10.3, *)) {
       [SKStoreReviewController requestReview];
        return true;
    }
    else {
        NSLog(@"系统版本太低");
        [PlatformIosApi openURL:@"https://itunes.apple.com/app/id1515088862"];
    }
    return false;
}

+ (void) fbSdkLogin {
    [AAAA_FacebookMgr_BBBB AAAA_sdkLogin_BBBB];
}

+ (void) fbSdkLoginOut {
    [AAAA_FacebookMgr_BBBB AAAA_sdkLoginOut_BBBB];
}

+ (void) fbSdkShare:(NSString *)strJsData {
    [AAAA_FacebookMgr_BBBB AAAA_sdkShare_BBBB:strJsData];
}

//打开fb
+ (bool) OpenFB:(NSString *)strJsData {
    [AAAA_FacebookMgr_BBBB AAAA_openFBApp_BBBB:strJsData];
    return true;
}

//IAP pay
//strJsData {Pid:"com.xxx.coin6","OrderId":"234242432423423423"}
+ (void) IosZF:(NSString *)jsonStr {
    NSError *error;
    NSData *aData = [jsonStr dataUsingEncoding: NSUTF8StringEncoding];
    NSMutableDictionary *dict = [NSJSONSerialization JSONObjectWithData:aData options:NSJSONReadingMutableLeaves error:&error];
    if(dict != nil){
        NSMutableString *order_id = [dict objectForKey:@"OrderId"];
        if (order_id.intValue > 0){
            NSMutableString *pid = [dict objectForKey:@"Pid"];
            AAAA_PaymentController_BBBB *payController = [[AAAA_PaymentController_BBBB alloc] AAAA_initWithPid_BBBB:pid OrderId:order_id];
            [payController AAAA_purchaseFunc_BBBB];
        }
    }
}

//尝试补单
+ (void) IosZFReplacement:(NSString *)jsonStr {
    NSFileManager *fileManager = [NSFileManager defaultManager];
    if ([fileManager fileExistsAtPath:AppStoreInfoLocalFilePath]) {//如果在改路下不存在文件，说明就没有保存验证失败后的购买凭证，也就是说发送凭证成功。
        
        //存在购买凭证，说明发送凭证失败，再次发起验证
        AAAA_PaymentController_BBBB *payController = [[AAAA_PaymentController_BBBB alloc] init];
        [payController AAAA_sendFailedIapFiles_BBBB];
    }
}

//IAP支付回调 strJsData {Flag:1,"OrderId":"234242432423423423"} 支付结果: 1,2 成功, 3失败，订单id
+ (void) IosZFResult:(NSString *)jsonStr {
    NSError *error;
    NSData *aData = [jsonStr dataUsingEncoding: NSUTF8StringEncoding];
    NSMutableDictionary *dict = [NSJSONSerialization JSONObjectWithData:aData options:NSJSONReadingMutableLeaves error:&error];
    if(dict != nil){
        NSMutableString *order_id = [dict objectForKey:@"OrderId"];
        NSMutableString *flag = [dict objectForKey:@"Flag"];
        if (order_id.intValue > 0 && (flag.intValue==1 || flag.intValue==2)){
            NSFileManager *fileManager = [NSFileManager defaultManager];
            if ([fileManager fileExistsAtPath:AppStoreInfoLocalFilePath]) {//如果在改路下不存在文件，说明就没有保存验证失败后的购买凭证，也就是说发送凭证成功。
                //存在此订单对应的购买凭证，说明发送凭证失败，再次发起验证
                AAAA_PaymentController_BBBB *payController = [[AAAA_PaymentController_BBBB alloc] init];
                [payController AAAA_sendFailedIapFiles_BBBB];
            }
        }
    }
}

//复制内容
+ (void) copy:(NSString *) str {
    UIPasteboard *pasteboard = [UIPasteboard generalPasteboard];
    pasteboard.string = str;
    
    NSDictionary *sedic = @{@"result":@"1",@"cbName":@"copyCallback"};
    NSString* jsString = nil;
    NSError* error;
    NSData* jsonData = [NSJSONSerialization dataWithJSONObject:sedic options:NSJSONWritingPrettyPrinted error:&error];
    
    jsString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    NSString* resStr = [NSString stringWithFormat:@"cc.vv.PlatformApiMgr.trigerCallback(%@)",jsString];
    std::string callStr = [resStr UTF8String];
    se::ScriptEngine::getInstance()->evalString(callStr.c_str());
}

//从粘贴板上获取
+ (void) paste {
    UIPasteboard *pasteboard = [UIPasteboard generalPasteboard];
    NSDictionary *sedic = nil;
    if(pasteboard != NULL) {
        NSString* pNsStr= pasteboard.string;
        if(pNsStr != NULL) {
            sedic = @{@"result":pNsStr,@"cbName":@"pasteCallback"};
            pasteboard.string = @"";
        } else {
            sedic = @{@"result":@"",@"cbName":@"pasteCallback"};
        }
    } else {
        sedic = @{@"result":@"",@"cbName":@"pasteCallback"};
    }
    NSString* jsString = nil;
    NSError* error;
    NSData* jsonData = [NSJSONSerialization dataWithJSONObject:sedic options:NSJSONWritingPrettyPrinted error:&error];
    
    jsString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    NSString* resStr = [NSString stringWithFormat:@"cc.vv.PlatformApiMgr.trigerCallback(%@)",jsString];
    std::string callStr = [resStr UTF8String];
    se::ScriptEngine::getInstance()->evalString(callStr.c_str());
}



+ (bool) SaveToAlumb:(NSString *)strJsData {
    UIImage* img = [UIImage imageNamed:strJsData];
    PlatformIosApi* insObj = [[PlatformIosApi alloc] init];
	UIImageWriteToSavedPhotosAlbum(img, insObj, @selector(image:didFinishSavingWithError:contextInfo:), (__bridge void *)insObj);
    
    return true;

}

- (void)image:(UIImage *)image didFinishSavingWithError:(NSError *)error contextInfo:(void *)contextInfo
{
    NSLog(@"image = %@, error = %@, contextInfo = %@", image, error, contextInfo);
}

/*
//是否安装微信App
+ (bool) installWXApp {
    return [[WeChatSDK getInstance] installWXApp];
}

//打开微信App
+ (bool) openWXApp{
    bool res;
    [[WeChatSDK getInstance] openWxApp];
    return res;
}

//微信登录
+(void)wxLogin{
    [[WeChatSDK getInstance] login];
}

//微信分享
+(void)wxShare:(NSString *)strJsData{
    [[WeChatSDK getInstance] SDKShare:strJsData];
}
*/

+(NSString *)getDeviceId{
    //从钥匙串中获取唯一设备标识
    NSString* kDeviceIdentifier =  @"kDeviceIdentifier";
    NSString * deviceIdentifier = [AAAA_SFHFKeychainUtils_BBBB AAAA_getPasswordForUsername_BBBB:kDeviceIdentifier andServiceName:[[NSBundle mainBundle] bundleIdentifier] error:nil];
    if (deviceIdentifier) {
        //如果钥匙串中存在唯一标识，则直接返回
        return deviceIdentifier;
    }
    //获取IDFA
    NSString *IDFA = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    //判断IDFA是否为空
    BOOL isEmpty = [[IDFA stringByReplacingOccurrencesOfString:@"-" withString:@""] stringByReplacingOccurrencesOfString:@"0" withString:@""].length;
    if (isEmpty) {
        //不为空，将IDFA作为唯一标识
        deviceIdentifier = IDFA;
    }
    else {
        //为空，获取UUID作为唯一标识
        deviceIdentifier = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
    }
    //保存唯一设备标识,如已存在则不进行任何处理
    [AAAA_SFHFKeychainUtils_BBBB AAAA_storeUsername_BBBB:kDeviceIdentifier andPassword:deviceIdentifier forServiceName:[[NSBundle mainBundle]bundleIdentifier] updateExisting:NO error:nil];
    //返回唯一标识
    return deviceIdentifier;
}

+(NSString *)getDeviceOpSysVision{
    return [AAAA_DeviceInfo_BBBB AAAA_getSystemVision_BBBB];
}

+(NSString *)getDeviceBrand{
    return [AAAA_DeviceInfo_BBBB AAAA_getPhoneModelName_BBBB];
}

// 获取iosbundleId
+(NSString*) getAPPBundleId
{
    NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
    NSString *app_BundleId = [infoDictionary objectForKey:@"CFBundleIdentifier"];
    return app_BundleId;
}

//获取deviceToken设备令牌
+(NSString*) getDeviceToken
{
    return [[PlatformIosApi getInstant] AAAA_deviceToken_BBBB];
}

//手机震动
+(void) phoneShock{
    [AAAA_DeviceInfo_BBBB AAAA_deviceShock_BBBB];
}

+ (void) setAppIconBadgeNumber:(NSString *) strJsData {
    NSError *error;
    NSData *aData = [strJsData dataUsingEncoding: NSUTF8StringEncoding];
    NSMutableDictionary *dict = [NSJSONSerialization JSONObjectWithData:aData options:NSJSONReadingMutableLeaves error:&error];
    if(dict != nil){
        [UIApplication sharedApplication].applicationIconBadgeNumber = (NSInteger)[dict objectForKey:@"badgeNum"];
    }
}

+ (void) appleSignIn {
    [[PlatformIosApi getRootViewController] doAppleLogin];
}

//ko打点
+ (void)KoTrackEvent:(NSString *)data{
//    NSData *jsonData = [data dataUsingEncoding:NSUTF8StringEncoding];
//    NSError *error = nullptr;
//    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData options:NSJSONReadingMutableContainers error:&error];
//    if(error) {
//        NSLog(@"json解析失败：%@",error);
//        return ;
//    }
//    NSString* eventName = [dic objectForKey:@"EventName"];
//    NSString* eventKey = [dic objectForKey:@"EventKey"];
//    NSString* eventValue = [dic objectForKey:@"EventValue"];
//    NSString* eventType = [dic objectForKey:@"EventType"];
//    if(eventType){
//        //定义标准事件
//        //暂时没有用到todo
//    }
//    else{
//        //自定义事件
//        NSData *valueData = [eventValue dataUsingEncoding:NSUTF8StringEncoding];
//        NSError *err = nullptr;
//        NSDictionary *valeDis = [NSJSONSerialization JSONObjectWithData:valueData options:NSJSONReadingMutableContainers error:&err];
//        if(!err){
//            [KochavaTracker.shared sendEventWithNameString:eventName infoDictionary:valeDis];
//        }
//
//    }
}

+(NSString*) getKoTrackUUID{
    return @"";
}

//adMob激励广告
+ (void) loadAdMobRewardAd {
    [[PlatformIosApi getRootViewController] loadAdmobAwardAd];
}

//加载TradPlus视频广告
+ (void)loadTradPlusRewardedVideo:(NSString *)adUnitId
{
//    TradPlusADManager *manager = [TradPlusADManager sharedInstance];
//    [manager loadRewardVideo:adUnitId];
   
}

//显示TradPlus视频广告
+ (void)showTradPlusRewardedVideo:(NSString *)adUnitId
{
//    TradPlusADManager *manager = [TradPlusADManager sharedInstance];
//    [manager showRewardVideo:adUnitId];
}

+ (void)setOrientation:(NSString*)dir {
    [[UIDevice currentDevice] setValue:[NSNumber numberWithInteger:UIDeviceOrientationUnknown] forKey:@"orientation"];
    if ([dir isEqualToString:@"portrait"]) {
        [[PlatformIosApi getInstant] setOrientation:UIInterfaceOrientationMaskPortrait];
        [[UIDevice currentDevice] setValue:[NSNumber numberWithInteger:UIInterfaceOrientationPortrait] forKey:@"orientation"];
    } else if ([dir isEqualToString:@"landscape"]) {
        [[PlatformIosApi getInstant] setOrientation:UIInterfaceOrientationMaskLandscape];
        [[UIDevice currentDevice] setValue:[NSNumber numberWithInteger:UIInterfaceOrientationLandscapeRight] forKey:@"orientation"];
    }
}

@end
