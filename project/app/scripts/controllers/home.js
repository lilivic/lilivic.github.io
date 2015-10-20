'use strict';

angular.module('lilivicApp').controller('HomeCtrl', function ($rootScope, $scope, $timeout) {

  $scope.panelClass = 'hide';

  var callback = function () {
    //$scope.panelClass = 'animation_test';
  };
  $timeout(callback, 3000);

  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
