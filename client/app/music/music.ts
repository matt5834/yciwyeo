'use strict';

angular.module('yciwyeoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/music', {
        template: '<music></music>'
      });
  });
