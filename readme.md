icarus-mobile/
├── android/
│ ├── app/
│ │ ├── src/
│ │ │ ├── main/
│ │ │ │ ├── java/com/icarusmobileapp/
│ │ │ │ │ ├── MainActivity.java # Main Android activity with WebView
│ │ │ │ │ ├── WebAppInterface.java # JavaScript interface for native code
│ │ │ │ ├── res/
│ │ │ │ │ ├── layout/
│ │ │ │ │ │ ├── activity_main.xml # Layout file for the WebView
│ │ │ │ ├── AndroidManifest.xml # Android manifest file
│ │ │ ├── build.gradle # Android build configuration
│ ├── gradle/
│ ├── settings.gradle
├── ios/
│ ├── IcarusMobileApp/
│ │ ├── AppDelegate.swift # iOS entry point
│ │ ├── ViewController.swift # Main view controller with WebView
│ │ ├── WebAppBridge.swift # JavaScript-native bridge for iOS
│ │ ├── Main.storyboard # iOS UI definition (if using Storyboard)
│ ├── Info.plist # iOS configuration file
│ ├── Podfile # iOS dependencies configuration
├── www/
│ ├── index.html # Main web page (entry point)
│ ├── js/
│ │ ├── app.js # Main JavaScript for web app
│ │ ├── bridge.js # JS bridge to communicate with native
│ ├── css/
│ │ ├── style.css # Web app styles
├── plugins/
│ ├── battery-plugin/
│ │ ├── android/
│ │ │ ├── BatteryPlugin.java # Battery plugin for Android
│ │ ├── ios/
│ │ │ ├── BatteryPlugin.swift # Battery plugin for iOS
│ │ ├── battery-plugin.js # JavaScript interface for battery plugin
├── scripts/
│ ├── build.js # Build script to bundle web assets
├── package.json # Node project configuration (npm/yarn)
├── README.md # Project description and instructions
