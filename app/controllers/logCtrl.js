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

      var username = angular.element(document.querySelector('username')).value;
      var password = angular.element(document.querySelector('password')).value;

}])
