/////////////////////////////////////////////////////////////////////
// RequireJs config
/////////////////////////////////////////////////////////////////////
require.config({
    baseUrl: "_dev/js",
    paths: {
        "jquery": "libs/vendor/jquery/dist/jquery",
        "bootstrap": "libs/vendor/bootstrap/dist/js/bootstrap.min",
        "console": "libs/vendor/console/console.min",
        "throbber": "libs/vendor/throbber.js/throbber",
        "tools": "libs/tools",
        "angular": "libs/vendor/angular/angular",
        "angularRoute": "libs/vendor/angular-route/angular-route",
        "angularAnimate": "libs/vendor/angular-animate/angular-animate",
        "angularLoadBar": "libs/vendor/angular-loading-bar/build/loading-bar",
        "angularGrowl": "libs/vendor/angular-growl-v2/build/angular-growl",
        "angularDialog": "libs/vendor/ngDialog/js/ngDialog",
        "angularSweetAlert": "libs/vendor/angular-sweetalert/SweetAlert",
        "SweetAlert": "libs/vendor/sweetalert/lib/sweet-alert",
        "text": "libs/vendor/requirejs-text/text",
        "domReady": "libs/vendor/requirejs-domready/domReady",
    },
    shim: {
        "bootstrap": ["jquery"],
        "throbber": ["jquery"],
        "tools": ["jquery", "console"],
        "angular" : {"exports" : "angular"},
        "angularRoute": ["angular"],
        "angularAnimate": ["angular"],
        "angularLoadBar": ["angular"],
        "angularGrowl": ["angular"],
        "angularDialog": ["angular"],
        "angularSweetAlert": ["angular", "SweetAlert"]
    },
    priority: ["angular"]
});

/////////////////////////////////////////////////////////////////////
// RequireJs entry point
/////////////////////////////////////////////////////////////////////
require(["angular", "domReady", "app", "routes", "bootstrap"], function (angular, domReady) {

    domReady(function() {
        angular.bootstrap(document, ["app"]);
    });

});