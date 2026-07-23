#import "FintechSecurity.h"
#import <UIKit/UIKit.h>

@implementation FintechSecurity

RCT_EXPORT_MODULE(FintechSecurity)

- (void)getIdentifier:(RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject {
    NSString *identifier = [[UIDevice currentDevice].identifierForVendor UUIDString];
    resolve(identifier ?: @"UNKNOWN_IOS_ID");
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params {
    return std::make_shared<facebook::react::NativeFintechSecuritySpecJSI>(params);
}

@end