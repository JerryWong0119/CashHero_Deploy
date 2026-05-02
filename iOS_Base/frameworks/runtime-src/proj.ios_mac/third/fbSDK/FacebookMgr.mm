//
//  FacebookMgr.h
//  fb相关接口
//
//  Created by ljm on 2018/5/16.
//

#import <Foundation/Foundation.h>
#import "FacebookMgr.h"
#import <FBSDKCoreKit/FBSDKCoreKit.h>

#import <FBSDKLoginKit/FBSDKLoginKit.h>

#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"

@implementation AAAA_FacebookMgr_BBBB



+ (void) AAAA_sdkLogin_BBBB {
    if([FBSDKAccessToken currentAccessToken]) {
        //已经登录了，直接冷启动
        FBSDKAccessToken* token = [FBSDKAccessToken currentAccessToken];
        NSString* strUid = [token userID];
        NSString* strToke = [token tokenString];
        NSDictionary* dic = @{@"result":@"1",@"token":strToke,@"uid":strUid,@"cbName":@"fbLoginCb"};
        NSString* jsString = nil;
        NSError* error = nullptr;
        NSData* jsonData = [NSJSONSerialization dataWithJSONObject:dic options:NSJSONWritingPrettyPrinted error:&error];
        if(!jsonData){
            
        }
        else{
            jsString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
            NSString* resStr = [NSString stringWithFormat:@"cc.vv.PlatformApiMgr.trigerCallback(%@)",jsString];
            std::string callStr = [resStr UTF8String];
            se::ScriptEngine::getInstance()->evalString(callStr.c_str());
        }    }
    else{
        //新的登录
        FBSDKLoginManager *login = [[FBSDKLoginManager alloc] init];
        [login logInWithPermissions:@[@"public_profile"]
                     fromViewController:self
                                handler:^(FBSDKLoginManagerLoginResult *result, NSError *error) {
                                    if (error || result.isCancelled) {
                                     //登录失败或取消
                                        NSString* code = @"-2";
                                        if(result.isCancelled){
                                            code = @"-1";
                                        }
                                        NSDictionary* dic = @{@"result":code,@"cbName":@"fbLoginCb"};
                                        NSString* jsString = nil;
                                        NSError* error = nullptr;
                                        NSData* jsonData = [NSJSONSerialization dataWithJSONObject:dic options:NSJSONWritingPrettyPrinted error:&error];
                                        if(!jsonData){
                                            
                                        }
                                        else{
                                            jsString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
                                            NSString* resStr = [NSString stringWithFormat:@"cc.vv.PlatformApiMgr.trigerCallback(%@)",jsString];
                                            std::string callStr = [resStr UTF8String];
                                            se::ScriptEngine::getInstance()->evalString(callStr.c_str());
                                        }
                                        
                                    }
                                    else{
                                        //登录成功
                                        FBSDKAccessToken* token = result.token;
                                        NSString* strUid = [token userID];
                                        NSString* strToke = [token tokenString];
                                        
                                        
                                        FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                                                                      initWithGraphPath:result.token.userID
                                                                      parameters:@{@"fields":@"id,name,email,age_range,first_name,last_name,link,gender,locale,picture,timezone,updated_time,verified"}
                                                                      HTTPMethod:@"GET"];
                                        [request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection, id result, NSError *error) {
                                                NSLog(@"%@",result);
                                            if (!error) {
                                                NSDictionary* resultDic = result;
                                                
                                                    NSDictionary* dic = @{
                                                        @"result":@"1",
                                                        @"token":strToke,
                                                        @"uid":strUid,
                                                        @"cbName":@"fbLoginCb",
                                                        @"name":[resultDic objectForKey:@"name"],
                                                        @"first_name":[resultDic objectForKey:@"first_name"],
                                                        @"last_name":[resultDic objectForKey:@"last_name"],
                                                        @"headUrl":[[[resultDic objectForKey:@"picture"] objectForKey:@"data"] objectForKey:@"url"]
                                                    };
                                                    NSString* jsString = nil;
                                                    NSError* error = nullptr;
                                                    NSData* jsonData = [NSJSONSerialization dataWithJSONObject:dic options:NSJSONWritingPrettyPrinted error:&error];
                                                    if(!jsonData){
                                                        
                                                    }
                                                    else{
                                                        jsString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
                                                        NSString* resStr = [NSString stringWithFormat:@"cc.vv.PlatformApiMgr.trigerCallback(%@)",jsString];
                                                        std::string callStr = [resStr UTF8String];
                                                        se::ScriptEngine::getInstance()->evalString(callStr.c_str());
                                                    }
                                            }
                                            else {
                                                NSDictionary* dic = @{@"result":@"0",@"token":strToke,@"uid":strUid,@"cbName":@"fbLoginCb"};
                                                NSString* jsString = nil;
                                                NSError* error = nullptr;
                                                NSData* jsonData = [NSJSONSerialization dataWithJSONObject:dic options:NSJSONWritingPrettyPrinted error:&error];
                                                if(!jsonData){
                                                    
                                                }
                                                else{
                                                    jsString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
                                                    NSString* resStr = [NSString stringWithFormat:@"cc.vv.PlatformApiMgr.trigerCallback(%@)",jsString];
                                                    std::string callStr = [resStr UTF8String];
                                                    se::ScriptEngine::getInstance()->evalString(callStr.c_str());
                                                }
                                            }
                                        }];
                                    }
                                    
                                }];
    }
}


//fb 登出
+ (void) AAAA_sdkLoginOut_BBBB {
    FBSDKLoginManager *login = [[FBSDKLoginManager alloc] init];
    [login logOut];
}

//fb 分享
+ (void) AAAA_sdkShare_BBBB:(NSString*) strData {
    NSData *jsonData = [strData dataUsingEncoding:NSUTF8StringEncoding];
    NSError *error = nullptr;
    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData options:NSJSONReadingMutableContainers error:&error];
    if(error) {
        NSLog(@"json解析失败：%@",error);
        return ;
    }
    int shareType = [[dic objectForKey:@"shareType"] intValue];
    if(shareType == 1){
        //链接分享
        NSString* strUrl = [dic objectForKey:@"linkUrl"];
        NSString* strQuote = [dic objectForKey:@"content"];
        FBSDKShareLinkContent * content = [[FBSDKShareLinkContent alloc] init];
        content.contentURL = [NSURL URLWithString:strUrl];
		if(strQuote){
			content.quote = strQuote;
		}
        
        AAAA_FacebookMgr_BBBB* instanceObj = [[AAAA_FacebookMgr_BBBB alloc] init];
        UIViewController* topVC = [instanceObj AAAA_getPresentedViewController_BBBB];
        [FBSDKShareDialog showFromViewController:topVC withContent:content delegate:instanceObj];
        }
    else if(shareType == 2){
        //图片分享
        NSString* strImgPath = [dic objectForKey:@"imagePath"];
        
    }
    
}

//打开fb
+ (void) AAAA_openFBApp_BBBB:(NSString*) strData {
	 NSData *jsonData = [strData dataUsingEncoding:NSUTF8StringEncoding];
    NSError *error = nullptr;
    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData options:NSJSONReadingMutableContainers error:&error];
    if(error) {
       NSLog(@"json解析失败：%@",error);
       return ;
    }
    BOOL isInstalled = [[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:@"fb://"]] ;
	if (isInstalled) {
		//直接跳转app
		NSString* fbId = [dic objectForKey:@"fbId"];
        NSString* preUrl = @"fb://profile/";
        NSString* strUrl = [NSString stringWithFormat:@"%@%@",preUrl,fbId];
		NSURL *facebookURL = [NSURL URLWithString:strUrl];
        if ([[[UIDevice currentDevice] systemVersion] floatValue] < 10.0) {
            [[UIApplication sharedApplication] openURL:facebookURL];
        }
        else {
            [[UIApplication sharedApplication] openURL:facebookURL options:NULL completionHandler:^(BOOL success){
                
            }];
        }
	}
	else {
		//用浏览器打开
		NSString* fbAccount = [dic objectForKey:@"fbAccount"];
        NSString* strUrl = [NSString stringWithFormat:@"https://www.facebook.com/%@",fbAccount];
		NSURL *facebookURL = [NSURL URLWithString:strUrl];
		if ([[[UIDevice currentDevice] systemVersion] floatValue] < 10.0) {
            [[UIApplication sharedApplication] openURL:facebookURL];
        }
        else {
            [[UIApplication sharedApplication] openURL:facebookURL options:NULL completionHandler:^(BOOL success){
                
            }];
        }
	}
}

- (UIViewController *)AAAA_getPresentedViewController_BBBB
{
    UIViewController *appRootVC = [UIApplication sharedApplication].keyWindow.rootViewController;
    UIViewController *topVC = appRootVC;
    if (topVC.presentedViewController) {
        topVC = topVC.presentedViewController;
    }
    
    return topVC;
}

- (void) AAAA_sendShareResult_BBBB:(NSString*) strData{
	NSDictionary* dic = @{@"result":strData,@"cbName":@"shareSdkCallback"};
	NSString* jsString = nil;
	NSError* error = nullptr;
	NSData* jsonData = [NSJSONSerialization dataWithJSONObject:dic options:NSJSONWritingPrettyPrinted error:&error];
	if(!jsonData){
		
	}
	else{
		jsString = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
		NSString* resStr = [NSString stringWithFormat:@"cc.vv.PlatformApiMgr.trigerCallback(%@)",jsString];
		std::string callStr = [resStr UTF8String];
		se::ScriptEngine::getInstance()->evalString(callStr.c_str());
	}
}

//
- (NSDictionary *)AAAA_dictionaryWithJsonString_BBBB:(NSString *)jsonString {
    if (jsonString == nil) {
        return nil;
    }
    
    NSData *jsonData = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
    NSError *err;
    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData
                                                        options:NSJSONReadingMutableContainers
                                                          error:&err];
    if(err) {
        NSLog(@"json解析失败：%@",err);
        return nil;
    }
    return dic;
}

#pragma mark - FBSDKSharingDelegate

- (void)sharer:(id<FBSDKSharing>)sharer didCompleteWithResults:(NSDictionary *)results
{
    NSLog(@"completed share:%@", results);
	AAAA_FacebookMgr_BBBB* instanceObj = [[AAAA_FacebookMgr_BBBB alloc] init];
    [instanceObj AAAA_sendShareResult_BBBB:@"1"];
}

- (void)sharer:(id<FBSDKSharing>)sharer didFailWithError:(NSError *)error
{
	NSLog(@"sharing error:%@", error);
	
    AAAA_FacebookMgr_BBBB* instanceObj = [[AAAA_FacebookMgr_BBBB alloc] init];
    [instanceObj AAAA_sendShareResult_BBBB:@"-2"];
	
    
    //NSString *message = error.userInfo[FBSDKErrorLocalizedDescriptionKey] ?:
    //@"There was a problem sharing, please try again later.";
    //NSString *title = error.userInfo[FBSDKErrorLocalizedTitleKey] ?: @"Oops!";
    
    //[[[UIAlertView alloc] initWithTitle:title message:message delegate:nil cancelButtonTitle:@"OK" otherButtonTitles:nil] show];
}

- (void)sharerDidCancel:(id<FBSDKSharing>)sharer
{
    NSLog(@"share cancelled");
	
	AAAA_FacebookMgr_BBBB* instanceObj = [[AAAA_FacebookMgr_BBBB alloc] init];
    [instanceObj AAAA_sendShareResult_BBBB:@"-1"];
}@end
