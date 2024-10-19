import Foundation
import WebKit

class WebAppBridge: NSObject, WKScriptMessageHandler {
    let webView: WKWebView

    init(webView: WKWebView) {
        self.webView = webView
        super.init()
        self.webView.configuration.userContentController.add(self, name: "nativeBridge")
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if message.name == "nativeBridge" {
            // Handle messages from the web app
            // Example: let data = message.body as? String
        }
    }

    func sendToWebApp(message: String) {
        let script = "window.dispatchEvent(new CustomEvent('nativeMessage', { detail: '\(message)' }))"
        webView.evaluateJavaScript(script, completionHandler: nil)
    }
}
