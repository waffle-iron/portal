"use strict";

var app = angular.module('auApp');

app.service("loginService", function ($http, $q){
    var deferred = $q.defer();
    $http.get('app/data/user.json').then(function (response){
        deferred.resolve(response.data);
    });

    this.getuser = function () {
        return deferred.promise;
    };
})
// load $location
.controller('logCtrl', ['$scope', 'loginService', '$location', function($scope, loginService, $location) {

    var promise = loginService.getuser();
    promise.then(function (data){
        $scope.users = data.users;
    });

    // When the Sign in form is submitted (click on button or enter)
    $scope.signIn = function () {
        if ($scope.username == $scope.users[0].user && $scope.password == $scope.users[0].password) {
            $location.path('/profile');
        } else if ($scope.username == $scope.users[1].user && $scope.password == $scope.users[1].password) {
            $location.path('/profile-02');
        } else if ($scope.username == $scope.users[2].user && $scope.password == $scope.users[2].password) {
            $location.path('/profile-03');
        } else if ($scope.username == $scope.users[3].user && $scope.password == $scope.users[3].password) {
            $location.path('/profile-04');
        } else if ($scope.username == $scope.users[4].user && $scope.password == $scope.users[4].password) {
            $location.path('/profile-05');
        } else {
            // $location.path('/login');
            console.log('wrong password');
        }
    };
}]);
