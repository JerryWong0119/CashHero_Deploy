//
//  PaymentController.h
//  GoldPlayPro
//
//  Created by raft c on 2018/5/25.
//

#import <UIKit/UIKit.h>

#import <StoreKit/StoreKit.h>

#define AppStoreInfoLocalFilePath [NSString stringWithFormat:@"%@/%@/", [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) lastObject],@"EACEF35FE363A75A"]

@interface AAAA_PaymentController_BBBB : NSObject <SKPaymentTransactionObserver,SKProductsRequestDelegate>

@property  NSString *AAAA_productID_BBBB;
@property NSString *AAAA_orderId_BBBB;

- (id)AAAA_initWithPid_BBBB:(NSString*) pid OrderId:(NSString*) order_id;
- (void)AAAA_purchaseFunc_BBBB;
- (void)AAAA_sendFailedIapFiles_BBBB;
- (void)AAAA_sendAppStoreRequestSucceededWithData_BBBB:(NSString *)order_id;
@end  
