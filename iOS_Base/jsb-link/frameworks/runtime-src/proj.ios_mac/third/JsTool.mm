//
//  JsTool.mm
//  JS工具，主要负责沟通JS，调用JS函数
//
//  Created by AndyHu on 2018/6/14.
//
#include "cocos2d.h"
#include "JsTool.h"

//#include "scripting/js-bindings/jswrapper/jsc/ScriptEngine.hpp"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"

USING_NS_CC;

namespace sex {
    int sVal;
};

@implementation JsTool

+ (void) AAAA_callJsFunc_BBBB:(NSString *)funcName targetObj:(NSString *)objPath params:(NSDictionary *)dic {
    NSError* error;
    
    NSData* jsonData = [NSJSONSerialization dataWithJSONObject:dic options:NSJSONWritingPrettyPrinted error:&error];
    if(jsonData){
        NSString* resStr = [NSString stringWithFormat:@"%@.%@(%@)",objPath, funcName, [[[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding] autorelease]];
        if (!se::ScriptEngine::getInstance()->evalString([resStr UTF8String])) {
            NSLog(@"Call Error: %@", resStr);
        }
    }
    else {
        NSLog(@"JsTool.callFunc Error: %@", error.description);
    }
}

+ (void) AAAA_sendToJsPlatformApiCbName_BBBB:(NSString *)cbName params:(NSMutableDictionary *)dic {
    [dic setObject:cbName forKey:@"cbName"];
    [JsTool AAAA_callJsFunc_BBBB:@"trigerCallback" targetObj:@"cc.vv.PlatformApiMgr" params:dic];
}


@end
