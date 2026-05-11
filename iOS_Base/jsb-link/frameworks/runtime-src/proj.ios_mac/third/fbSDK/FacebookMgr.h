//
//  FacebookMgr.h
//  fb相关接口
//
//  Created by ljm on 2018/5/16.
//

#ifndef FACEBOOKMGR_H
#define FACEBOOKMGR_H

#import <FBSDKShareKit/FBSDKShareKit.h>

@interface AAAA_FacebookMgr_BBBB : NSObject <FBSDKSharingDelegate>

//sdk登录
+ (void) AAAA_sdkLogin_BBBB;

//sdk登出
+ (void) AAAA_sdkLoginOut_BBBB;

//sdk分享
+ (void) AAAA_sdkShare_BBBB:(NSString *)strData;

//打开facebook
+ (void) AAAA_openFBApp_BBBB:(NSString *)strData;

//获取根视图
- (UIViewController*) AAAA_getPresentedViewController_BBBB;

//发送分享结果
- (void) AAAA_sendShareResult_BBBB:(NSString *)strData;

//
- (NSDictionary *)AAAA_dictionaryWithJsonString_BBBB:(NSString *)jsonString;

@end

#endif /* FACEBOOKMGR_H */
