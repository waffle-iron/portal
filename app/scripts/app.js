'use strict';

angular
	.module("auApp", ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	        $urlRouterProvider.otherwise('/');

	        $stateProvider
	        	.state('login' , {
	        		url: '/',
	        		templateUrl: 'app/views/login.html',
							controller: 'logCtrl'
	        	})
						.state('profile-01' , {
							url: '/profile-01',
							templateUrl: 'app/views/profile-01.html'
						});
	        }])
