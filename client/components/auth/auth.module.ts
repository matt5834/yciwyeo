'use strict';

angular.module('yciwyeoApp.auth', [
  'yciwyeoApp.constants',
  'yciwyeoApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
