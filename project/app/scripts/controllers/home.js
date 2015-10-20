'use strict';

angular.module('lilivicApp').controller('HomeCtrl', function ($rootScope, $scope, $timeout) {

  $scope.coverClass = 'hide';
  $scope.coverCounter = 0;

  var fadeOutEnd = function () {
    $scope.coverClass = 'hide';
    $timeout(fadeInStart(), 100);
  };
  var fadeOutStart = function () {
    $scope.coverClass = 'fade_out_animation home_cover_background_' + $scope.coverCounter;
    $timeout(fadeOutEnd, 950);
  };

  var fadeInStart = function () {
    $scope.coverClass = 'hide';
    $scope.coverCounter++;
    if ($scope.coverCounter === 8) {
      $scope.coverCounter = 1;
    }
    $scope.coverClass = 'fade_in_animation home_cover_background_' + $scope.coverCounter;

    $timeout(fadeOutStart, 10000);
  };

  $timeout(fadeInStart, 100);

  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
