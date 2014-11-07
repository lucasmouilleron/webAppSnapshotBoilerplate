/////////////////////////////////////////////////////////////////////
// App
/////////////////////////////////////////////////////////////////////
define(["angular", "filters/index", "services/index", "directives/index", "controllers/index", "angularRoute", "angularAnimate", "angularLoadBar", "angularGrowl", "angularDialog", "angularSweetAlert"], function (angular, filters, services, directives, controllers) {

    /////////////////////////////////////////////////////////////////////
    var app = angular.module("app", ["app.filters","app.services","app.directives","app.controllers", "ngRoute", "ngAnimate", "angular-loading-bar", "angular-growl", "ngDialog","oitozero.ngSweetAlert"]);

    /////////////////////////////////////////////////////////////////////
    app.config(["growlProvider", function(growlProvider) {
        growlProvider.globalTimeToLive(5000);
        growlProvider.globalDisableCountDown(true);
        growlProvider.globalPosition("bottom-right");
        growlProvider.onlyUniqueMessages(false);
    }]);

    /////////////////////////////////////////////////////////////////////
    app.config(["$locationProvider", function($location) {
        $location.hashPrefix("!");
    }]);

    /////////////////////////////////////////////////////////////////////
    app.run(["$rootScope", "$timeout", "$window", function ($rootScope, $timeout, $window) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $timeout(function () {
                $window.scrollTo(0,0);
            }, 500);
        });
    }]);

    /////////////////////////////////////////////////////////////////////
    // Some other top level app opeations

    return app;
    
});