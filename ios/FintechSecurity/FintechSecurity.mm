#import "FintechSecurity.h"
#import <UIKit/UIKit.h>

@implementation FintechSecurity

RCT_EXPORT_MODULE(FintechSecurity)

- (NSString *)getIdentifier {
    NSString *identifier = [[UIDevice currentDevice].identifierForVendor UUIDString];
    return identifier ?: @"UNKNOWN_IOS_ID";
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params {
    return std::make_shared<facebook::react::NativeFintechSecuritySpecJSI>(params);
}

@end