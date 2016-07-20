'use strict';

angular.module('yciwyeoApp', [
  'yciwyeoApp.auth',
  'yciwyeoApp.admin',
  'yciwyeoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
