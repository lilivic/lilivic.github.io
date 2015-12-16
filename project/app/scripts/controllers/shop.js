'use strict';

angular.module('lilivicApp').controller('ShopCtrl', function ($rootScope, $scope, $routeParams, i18n) {
  i18n.init($scope);

  $scope.currentSection = $routeParams.section;

  $scope.isShopUnavailable = function (language) {
    return $scope.getLanguage() === language;
  };

  $scope.isCurrentSection = function (section, language) {
    return $scope.currentSection === section && $scope.getLanguage() === language;
  };

  $rootScope.$broadcast(constants.EVENTS.VIEW_CHANGE);
});
