'use strict';

angular.module('lilivicApp').controller('WorksCtrl', function ($rootScope) {
  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
