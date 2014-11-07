/////////////////////////////////////////////////////////////////////
// Github controller
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("githubController", ["$scope","$q","$routeParams", "Repositories", function ($scope, $q, $routeParams, Repositories) {
        var promises = [];
        $scope.githubUser = $routeParams.anId;
        var promise = Repositories.all($scope.githubUser).then(function(repos) {
            $scope.theRepos = repos;
        });
        promises.push(promise);

        $q.all(promises).then(function() {
            $scope.$parent.status = "ready";
        });
    }]);

});