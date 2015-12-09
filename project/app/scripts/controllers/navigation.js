'use strict';

angular.module('lilivicApp').controller('NavigationCtrl', function ($scope, $location, i18n) {

  i18n.init($scope);

  $scope.labelLinkClass = function (label) {
    var itemClass = '';
    if (label === i18n.getLanguage()) {
      itemClass += 'selected';
    }
    return itemClass;
  };

  $scope.viewLinkClass = function (location) {
    var itemClass = '';
    if ($scope.isCurrentLocation(location)) {
      itemClass += 'selected';
    }
    return itemClass;
  };

  $scope.isCurrentLocation = function (location) {
    return $location.path().indexOf(location) > -1;
  };

});
