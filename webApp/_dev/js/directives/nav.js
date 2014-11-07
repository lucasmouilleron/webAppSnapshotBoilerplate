/////////////////////////////////////////////////////////////////////
// Nav directive
/////////////////////////////////////////////////////////////////////
define(["./module", "jquery"], function (directives) {

     /////////////////////////////////////////////////////////////////////
     directives.directive("customNav", ["$location", "ngDialog", "SweetAlert", "growl", function($location, ngDialog, SweetAlert, growl) {

        function link($scope, $element, $attrs) {

            $(".nav a").on("touchend", function(){
                $(".btn-navbar").click();
                $(".navbar-toggle").click()
            });

            $scope.routeIs = function(routeName) {
                return $location.path().indexOf(routeName) == 0;
            };        

            $scope.alert = function() {
                SweetAlert.swal({
                    title: "Are you sure?",
                    text: "Your will not be able to recover this imaginary file!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!"
                }, 
                function(){ 
                    growl.error("Stuff deleted !");
                });
            };

            $scope.test = "Settings";
            $scope.popin = function() {
                ngDialog.open({
                    template: "_dev/js/views/popin.html",
                    controller:  "popinController",
                    showClose: false,
                    closeByEscape: false,
                    closeByDocument: false,
                    scope : $scope
                });
            }
        }

        return {
            link: link,
            templateUrl: "_dev/js/views/nav.html"
        }
    }]);

});