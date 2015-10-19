'use strict';

angular.module('lilivicApp').controller('GlobalStateCtrl', function ($scope, $location, $timeout) {

  $scope.bodyClass = '';
  $scope.homeClassCounter = 1;

  var homeTimeoutFunction = function () {
    $scope.homeClassCounter++;
    if ($scope.homeClassCounter === 7) {
      $scope.homeClassCounter = 1;
    }
    $scope.bodyClass = 'home_background_' + $scope.homeClassCounter;
    $scope.timeout = $timeout($scope.timeoutFunction, 10000);
  };

  var blankBackground = function () {
    $scope.bodyClass = 'blank_background';
  };

  $scope.timeoutFunction = blankBackground();
  $scope.timeout = $timeout($scope.timeoutFunction, 100);

  $scope.$on(constants.EVENTS.VIEW_CHANGE, function () {
    $timeout.cancel($scope.timeout);
    switch ($location.path()) {
      case "/home":
        $scope.timeoutFunction = homeTimeoutFunction;
        $scope.timeout = $timeout($scope.timeoutFunction, 100);
        break;
      default :
        $scope.timeoutFunction = blankBackground;
        $scope.timeout = $timeout($scope.timeoutFunction, 100);
    }
  });

});
