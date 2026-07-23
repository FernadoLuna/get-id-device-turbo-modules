import Foundation
import UIKit

@objc(FintechSecurityImpl)
public class FintechSecurityImpl: NSObject {
    @objc
    public func getIdentifier() -> String {
        return UIDevice.current.identifierForVendor?.uuidString ?? "UNKNOWN_IOS_ID"
    }
}