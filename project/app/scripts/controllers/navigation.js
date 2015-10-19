'use strict';

var labels = {
  en: {
    about: 'Bio',
    blog: 'Blog',
    shop: 'Shop',
    soon: 'Soon',
    works: 'Gallery'
  },
  pt_BR: {
    about: 'Bio',
    blog: 'Blog',
    shop: 'Shop',
    soon: 'Em breve',
    works: 'Galeria'
  }
};

angular.module('lilivicApp').controller('NavigationCtrl', function ($scope, $location) {
  $scope.currentI18n = 'pt_BR';

  $scope.setI18n = function (label) {
    $scope.currentI18n = label;
    $scope.label = labels[$scope.currentI18n];
  };

  $scope.setI18n($scope.currentI18n);

  $scope.labelLinkClass = function (label) {
    var itemClass = '';
    if (label === $scope.currentI18n) {
      itemClass += 'selected';
    }
    return itemClass;
  };

  $scope.viewLinkClass = function (link) {
    var itemClass = '';
    if ('/' + link === $location.path()) {
      itemClass += 'selected';
    }
    return itemClass;
  };

});
