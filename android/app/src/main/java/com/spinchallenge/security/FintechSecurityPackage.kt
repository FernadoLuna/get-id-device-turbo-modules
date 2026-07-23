package com.spinchallenge.security // 👈 CORREGIDO

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class FintechSecurityPackage : TurboReactPackage() {

    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return if (name == FintechSecurityModule.NAME) {
            FintechSecurityModule(reactContext)
        } else {
            null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            val moduleInfos: MutableMap<String, ReactModuleInfo> = HashMap()
            moduleInfos[FintechSecurityModule.NAME] = ReactModuleInfo(
                FintechSecurityModule.NAME,
                FintechSecurityModule.NAME,
                false, // canOverrideExistingModule
                false, // needsEagerInit
                false, // hasConstants
                true   // isTurboModule
            )
            moduleInfos
        }
    }
}