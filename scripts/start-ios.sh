#!/bin/bash

# Navigate to the iOS directory
cd ios || exit

# Boot the simulator
xcrun simctl boot 'iPhone 11 Pro Max'

# Clean the previous build
xcodebuild clean -workspace IcarusMobileApp/IcarusMobileApp.xcodeproj/project.xcworkspace -scheme IcarusMobileApp -destination 'platform=iOS Simulator,name=iPhone 11 Pro Max,OS=latest'

# Build the app with a specified derived data path
xcodebuild -workspace IcarusMobileApp/IcarusMobileApp.xcodeproj/project.xcworkspace -scheme IcarusMobileApp -destination 'platform=iOS Simulator,name=iPhone 11 Pro Max,OS=latest' -derivedDataPath build/Debug-iphonesimulator build

# Locate the built app
if [ -d "build/Debug-iphonesimulator/Build/Products/Debug-iphonesimulator/IcarusMobileApp.app" ]; then
    # Install the app on the simulator
    xcrun simctl install "iPhone 11 Pro Max" build/Debug-iphonesimulator/Build/Products/Debug-iphonesimulator/IcarusMobileApp.app
    
    # Launch the app on the simulator
    xcrun simctl launch "iPhone 11 Pro Max" xtravanillasoftware.IcarusMobileApp
else
    echo "Error: Application bundle not found. Please check the build output."
fi
