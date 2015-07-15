'use strict';

/**
 * @ngdoc overview
 * @name lilivicApp
 * @description
 * # lilivicApp
 *
 * Main module of the application.
 */
angular
  .module('lilivicApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/grid', {
        templateUrl: 'views/grid.html',
        controller: 'GridCtrl',
        controllerAs: 'grid'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
