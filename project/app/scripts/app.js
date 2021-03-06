'use strict';

/**
 * @ngdoc overview
 * @name lilivicApp
 * @description
 * # lilivicApp
 *
 * Main module of the application.
 */


var constants = {
  EVENTS: {
    VIEW_CHANGE: 'viewChange'
  }
};

console.log(constants);

angular
  .module('lilivicApp', [
    'ngRoute',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/works/:section', {
        templateUrl: 'views/works.html',
        controller: 'WorksCtrl',
        controllerAs: 'works'
      })
      .when('/shop/:section', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'shop'
      })
      .when('/media/:section', {
        templateUrl: 'views/media.html',
        controller: 'MediaCtrl',
        controllerAs: 'media'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
