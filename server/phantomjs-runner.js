var system = require("system");
var url = system.args[1] || "";
var config = require("./config.json");

if(url.length > 0) {
    var start = new Date().getTime();
    var page = require("webpage").create();  
    page.open(url, function (status) {

        if (status == "success") {
            var delay;
            var checker = (function() {
                console.log(new Date());
                var html = page.evaluate(function () {
                    var body = document.getElementsByTagName("body")[0];
                    if(body.getAttribute("data-status") == "ready") {
                        return document.getElementsByTagName("html")[0].outerHTML;
                    }
                });
                if(html) {
                    clearTimeout(delay);
                    console.log(html);
                    phantom.exit();
                }
                if (new Date().getTime() - start > config.timeoutInSecs*1000) {
                    clearTimeout(delay);
                    phantom.exit();
                    // alert
                }
            });
            delay = setInterval(checker, 100);
        }
    });
}
