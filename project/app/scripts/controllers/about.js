'use strict';

angular.module('lilivicApp').controller('AboutCtrl', function ($rootScope) {

  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
