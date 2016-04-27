"use strict";

var app = angular.module('auApp');

app.service("loginService", function ($http, $q){
    var deferred = $q.defer();
    $http.get('app/data/user.json').then(function (response){
        deferred.resolve(response.data);
    });

    this.getuser = function () {
        return deferred.promise;
    }
})

  .controller('logCtrl', ['$scope', 'loginService', function($scope, loginService, $timeout, $window, $location) {

      var promise = loginService.getuser();
      promise.then(function (data){
          $scope.user = data.user
      });


      if (username == $scope.user[0] && password == $scope.password[0]) {
        $location.path('/profile-01');
      } else if (username == $scope.user[1] && password == $scope.password[1]) {
        $location.path('/profile-02');
      } else if (username == $scope.user[2] && password2 == $scope.password[2]) {
        $location.path('/profile-03');
      } else if (username == $scope.user[3] && password3 == password[3]) {
        $location.path('/profile-04');
      } else if (username == $scope.user[4] && password4 == $scope.password[4]) {
        $location.path('/profile-05');
      } else {
        $location.path('/login');
      }
}])
