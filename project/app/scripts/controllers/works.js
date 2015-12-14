'use strict';

angular.module('lilivicApp')
  .controller('WorksCtrl', function ($rootScope, $scope, $routeParams, $modal, $window, i18n) {
    i18n.init($scope);

    $scope.currentSection = $routeParams.section;

    switch ($scope.currentSection) {
      case 'draw':
        $scope.currentSectionImageCount = 21;
        break;
      case 'wall':
        $scope.currentSectionImageCount = 20;
        break;
    }

    $scope.open = function (image) {
      if ($window.innerWidth > 768) {
        $modal.open({
          animation: true,
          templateUrl: 'workModalContent.html',
          controller: 'WorkModalCtrl',
          size: 'lg',
          resolve: {
            image: function () {
              return image;
            },
            imageCount: function () {
              return $scope.currentSectionImageCount;
            },
            imageNumber: function () {
              return image.substring(image.lastIndexOf('_') + 1, image.lastIndexOf('.'));
            }
          }
        });
      }
    };

    $scope.isCurrentSection = function (section) {
      return $scope.currentSection === section;
    };

    $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
  })
  .controller('WorkModalCtrl', function ($scope, $modalInstance, image, imageCount, imageNumber) {
    $scope.image = image;
    $scope.imageCount = imageCount;
    $scope.imageNumber = imageNumber;

    $scope.previous = function () {
      $scope.imageNumber--;
      if ($scope.imageNumber <= 0) {
        $scope.imageNumber = $scope.imageCount;
      }
      $scope.updateImage();
    };

    $scope.next = function () {
      $scope.imageNumber++;
      if ($scope.imageNumber > $scope.imageCount) {
        $scope.imageNumber = 1;
      }
      $scope.updateImage();
    };

    $scope.updateImage = function () {
      var prefix = image.substring(0, image.lastIndexOf('_') + 1);
      $scope.image = prefix + $scope.imageNumber + '.jpg';
    };

    $scope.dismiss = function () {
      $modalInstance.dismiss('cancel');
    };
  });
