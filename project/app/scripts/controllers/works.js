'use strict';

angular.module('lilivicApp').controller('WorksCtrl', function ($rootScope, $scope, $modal, i18n) {
  i18n.init($scope);

  $scope.open = function (image) {
    $modal.open({
      animation: true,
      templateUrl: 'workModalContent.html',
      resolve: {
        image: function () {
          return image;
        }
      }
    });
  };

  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
