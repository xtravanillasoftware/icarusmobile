import UIKit
import WebKit

class ViewController: UIViewController, WKScriptMessageHandler {
    var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let config = WKWebViewConfiguration()
        config.userContentController.add(self, name: "iOS")
        
        webView = WKWebView(frame: self.view.frame, configuration: config)
        webView.load(URLRequest(url: URL(string: "file:///path/to/your/index.html")!))
        self.view.addSubview(webView)
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if message.name == "iOS" {
            // Handle native calls from JavaScript
            print(message.body)
        }
    }
}
