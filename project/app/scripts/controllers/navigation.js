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

angular.module('lilivicApp').controller('NavigationCtrl', function ($scope) {
  $scope.setI18n = function (label) {
    $scope.label = labels[label];
  };
  $scope.setI18n('pt_BR');
});
