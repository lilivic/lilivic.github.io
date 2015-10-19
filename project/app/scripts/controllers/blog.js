'use strict';

angular.module('lilivicApp').controller('BlogCtrl', function ($rootScope) {

  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
