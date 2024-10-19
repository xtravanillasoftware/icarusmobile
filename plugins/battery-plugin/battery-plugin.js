function getBatteryLevel() {
  return new Promise((resolve, reject) => {
    if (window.Android) {
      const level = window.Android.getBatteryLevel();
      resolve(level);
    } else if (window.webkit && window.webkit.messageHandlers.iOS) {
      window.webkit.messageHandlers.iOS.postMessage("getBatteryLevel");
      resolve("Fetching battery level...");
    } else {
      reject("Battery API not available");
    }
  });
}
