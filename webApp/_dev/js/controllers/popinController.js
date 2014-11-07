////////////////////////////////////////////////////////////////////
// Popin controller
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("popinController", ["$scope", "growl", function ($scope, growl) {
        $scope.save = function() {
            growl.success("Stuff saved !");
            $scope.closeThisDialog();
        }
    }]);

});