//
//  PlatformIosApi.h
//  我要打拉米
//
//  Created by AndyHu on 2018/4/18.
//

#ifndef PlatformIosApi_h
#define PlatformIosApi_h

@interface PlatformIosApi : NSObject {
}
@property (assign) NSString * AAAA_openAppUrlDataStr_BBBB;
@property (nonatomic,strong) NSString *AAAA_deviceToken_BBBB;
@property (assign) UIInterfaceOrientationMask orientation;

//获取单利对象
+ (id)getInstant;
- (void)setUrlData:(NSString *)str;

//获取U盟渠道号
+ (NSString *) getUMChannelIdx;

//获取App版本号
+ (NSString *) getAppVersion;
//获得开启App的url数据
+ (NSString *) getOpenAppUrlDataString;
//获取剪切板文本（粘贴）
+ (NSString *) getTxtFromClipboard;
//设置剪切板文本（复制）
+ (void) setTxtToClipboard:(NSString *) AAAA_txtStr_BBBB;
//打开GPS设置
//+ (void) openGPSSetting;
//是否开启GPS
//+ (int) isOpenGPS;
//打开URL
+ (void) openURL:(NSString *) url;
//获取电量等级
+ (float) getBatteyLevel;
//获取位置
+ (void) startLocation;

//fb登录
+ (void) fbSdkLogin;
//fb登出
+ (void) fbSdkLoginOut;
//fb分享
+ (void) fbSdkShare:(NSString *) strJsData;
//打开Fb
+ (bool) OpenFB:(NSString *) strJsData;

//支付
+ (void) IosZF:(NSString *)jsonStr;
//支付结果
+ (void) IosZFResult:(NSString *)jsonStr; //strJsData {Flag:1,"OrderId":"234242432423423423"} 支付结果: 1,2 成功, 3失败，订单id
//支付补单
+ (void) IosZFReplacement:(NSString *)jsonStr; //尝试补单

+ (void) copy:(NSString *) str;
+ (void) paste;

//保存图片到相册
//strJsData:是游戏中的图片路径
+ (bool) SaveToAlumb:(NSString *) strJsData;

//// 是否安装了微信app
//+ (bool) installWXApp;
// 打开微信app
//+ (bool) openWXApp;
// 微信登录
//+ (void) wxLogin;
// 微信分享
//+ (void) wxShare:(NSString *) strJsData;

//获取设备唯一标识
+ (NSString* ) getDeviceId;


//获取系统版本号12.0.1
+ (NSString *) getDeviceOpSysVision;

//获取手机模型名称iphone6
+ (NSString *) getDeviceBrand;
//获取bundleid
+(NSString*) getAPPBundleId;
//获取deviceToken设备令牌
+(NSString*) getDeviceToken;
//手机震动一下
+(void) phoneShock;
//开启评分
+(bool) openRating;

//苹果登录
+ (void) appleSignIn;
//设置推送的app的icon上的红色提示数字
+ (void) setAppIconBadgeNumber:(NSString *) strJsData;

//ko打点
+ (void) KoTrackEvent:(NSString *)data;
+ (NSString*) getKoTrackUUID;
//adMob激励广告
+ (void) loadAdMobRewardAd;

//加载TradPlus视频广告
+ (void)loadTradPlusRewardedVideo:(NSString *)adUnitId;
//显示TradPlus视频广告
+ (void)showTradPlusRewardedVideo:(NSString *)adUnitId;

//设置方向
+ (void)setOrientation:(NSString*)dir;

@end

#endif /* PlatformIosApi_h */
