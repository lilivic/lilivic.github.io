'use strict';

angular.module('lilivicApp').controller('ShopCtrl', function ($rootScope) {


  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
