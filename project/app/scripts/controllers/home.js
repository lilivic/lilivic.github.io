'use strict';

angular.module('lilivicApp').controller('HomeCtrl', function ($rootScope) {
  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
