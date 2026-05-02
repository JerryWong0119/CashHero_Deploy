//
//定义设备相关的接口，通用
//

#ifndef DeviceInfo_h
#define DeviceInfo_h

@interface AAAA_DeviceInfo_BBBB : NSObject {
    
}
//获取单利对象
+ (id)AAAA_getInstant_BBBB;

//获取系统版本号：12.0.1
+ (NSString *) AAAA_getSystemVision_BBBB;

//获取手机模型：iphone6
+ (NSString *) AAAA_getPhoneModelName_BBBB;

//获取手机模型code iphone10,1
+ (NSString *) AAAA_getPhoneModeCode_BBBB;

//手机震动
+ (void) AAAA_deviceShock_BBBB;

@end

#endif
