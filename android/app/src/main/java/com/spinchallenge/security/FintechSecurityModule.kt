package com.spinchallenge.security

import android.provider.Settings
import com.facebook.fbreact.specs.NativeFintechSecuritySpec
import com.facebook.react.bridge.ReactApplicationContext

class FintechSecurityModule(reactContext: ReactApplicationContext) :
    NativeFintechSecuritySpec(reactContext) {

    override fun getName(): String = NAME

    override fun getIdentifier(): String {
        val context = reactApplicationContext
        val androidId = Settings.Secure.getString(
            context.contentResolver,
            Settings.Secure.ANDROID_ID
        )
        return androidId ?: "UNKNOWN_ANDROID_ID"
    }

    companion object {
        const val NAME = "FintechSecurity"
    }
}