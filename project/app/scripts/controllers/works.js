'use strict';

angular.module('lilivicApp')
  .controller('WorksCtrl', function ($rootScope, $scope, $routeParams, $modal, i18n) {
    i18n.init($scope);

    $scope.currentSection = $routeParams.section;

    $scope.open = function (image) {
      $modal.open({
        animation: true,
        templateUrl: 'workModalContent.html',
        controller: 'WorkModalCtrl',
        size: 'lg',
        resolve: {
          image: function () {
            return image;
          }
        }
      });
    };

    $scope.isCurrentSection = function (section) {
      return $scope.currentSection === section;
    };

    $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
  })
  .controller('WorkModalCtrl', function ($scope, $modalInstance, image) {
    $scope.image = image;
  });
