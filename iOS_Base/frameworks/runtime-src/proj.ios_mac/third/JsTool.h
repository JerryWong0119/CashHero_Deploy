//
//  JsTool.h
//  GoldPlayPro-mobile
//
//  Created by AndyHu on 2018/6/14.
//

#ifndef JsTool_h
#define JsTool_h

@interface JsTool : NSObject

//调用js中的函数 objPath: cc.vv.PlatformApi  func: trigerCallback
+ (void) AAAA_callJsFunc_BBBB:(NSString *)funcName targetObj:(NSString *)objPath params:(NSDictionary *)dic;

//用户PlatformApi的回调
+ (void) AAAA_sendToJsPlatformApiCbName_BBBB:(NSString *)cbName params:(NSMutableDictionary *)dic;

@end

#endif /* JsTool_h */
