'use strict';

angular.module('lilivicApp').controller('WorksCtrl', function ($rootScope, $scope) {
  $scope.interval = 30000;
  $scope.noWrapSlides = false;
  $scope.slides = [];
  $scope.imageQuantity = 9;

  for (var i = 1; i < $scope.imageQuantity + 1; i++) {
    $scope.slides.push({
      image: '/images/works/' + i + '.jpg'
    });
  }

  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);

});
