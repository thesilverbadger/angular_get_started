(function () {

    var app = angular.module("githubViewer", []);

    var MainController = function ($scope, $http) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
        }

        var onError = function () {
            $scope.error = "Could not fetch user";
        }

        $http.get("https://api.github.com/users/thesilverbadger")
            .then(onUserComplete, onError);
    }

    app.controller("MainController", ["$scope", "$http", MainController]);

} ());