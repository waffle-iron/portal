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
	        }])
