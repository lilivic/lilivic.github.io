'use strict';

angular.module('lilivicApp').controller('HomeCtrl', function ($rootScope, $scope, $timeout) {

  $scope.panelClass = 'hide';

  var callback = function () {
    $scope.panelClass = 'fade_in_animation home_cover_background_1';
  };
  $timeout(callback, 3000);

  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
