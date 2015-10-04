'use strict';

angular.module('lilivicApp').controller('NavigationCtrl', function ($scope) {

  var pt_BR = {
    about: 'Sobre',
    blog: 'Blog',
    contact: 'Contato',
    shop: 'Shop',
    soon: 'em breve',
    works: 'Trabalho'
  };

  $scope.label = pt_BR;

});
