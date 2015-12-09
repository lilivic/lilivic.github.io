'use strict';

angular.module('lilivicApp').service('i18n', function () {

  var dictionary = {
    en: {
      about: 'Bio',
      blog: 'Blog',
      shop: 'Shop',
      soon: 'Soon',
      works: 'Gallery'
    },
    pt: {
      about: 'Bio',
      blog: 'Blog',
      shop: 'Shop',
      soon: 'Em breve',
      works: 'Galeria'
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
