'use strict';

angular.module('lilivicApp').service('i18n', function () {

  var dictionary = {
    en: {
      about: 'Bio',
      blog: 'Blog',
      shop: 'Shop',
      soon: 'Soon',
      works: 'Gallery',
      works_card: 'Cards',
      works_draw: 'Draws',
      works_shape: 'Shapes',
      works_wall: 'Walls'
    },
    pt: {
      about: 'Bio',
      blog: 'Blog',
      shop: 'Shop',
      soon: 'Em breve',
      works: 'Galeria',
      works_card: 'Cartões',
      works_draw: 'Ilustrações',
      works_shape: 'Shapes',
      works_wall: 'Murais'
    }
  };

  var currentLanguage = null;
  if (navigator.language.startsWith('pt')) {
    currentLanguage = 'pt';
  } else {
    currentLanguage = 'en';
  }

  return {
    getMessage: function (key) {
      return dictionary[currentLanguage][key];
    },
    init: function (scope) {
      scope.getMessage = this.getMessage;
      scope.setLanguage = this.setLanguage;
    },
    setLanguage: function (language) {
      currentLanguage = language;
    },
    getLanguage: function () {
      return currentLanguage;
    }
  };

});
