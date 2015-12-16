'use strict';

angular.module('lilivicApp').service('i18n', function () {

  var dictionary = {
    en: {
      about: 'Bio',
      blog: 'Blog',
      powered_by: 'Powered By',
      shop: 'Shop',
      shop_bags: 'Bags',
      shop_bags_description: '?',
      shop_bodies: 'Baby bodies',
      shop_cushion_covers: 'Cushion covers',
      shop_mugs: 'Mugs',
      shop_post_cards: 'Post cards',
      shop_posters: 'Posters',
      shop_phone_covers: 'Phone covers',
      shop_shirts: 'T shirts',
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
      shop_bags: 'Bolsas',
      shop_bags_description: 'Bolsas em Córdoba com alça em cadarço de algodão preto e impressão frente e verso. No modelo tote bag, com 40x43x5cm, não têm forro/fecho e são super resistentes.',
      shop_bodies: 'Macacões de bebê',
      shop_bodies_description: 'Macacão de bebê 100% algodão, super macio, confortável e impresso com a alta tecnologia DTG de impressão direta sobre tecido com toque zero.',
      shop_cushion_covers: 'Capas de almofada',
      shop_mugs: 'Canecas',
      shop_phone_covers: 'Capas de celulares',
      shop_posters: 'Pôsters',
      shop_post_cards: 'Cartões postais',
      shop_shirts: 'Camisetas',
      shop_shirts_description:'Camiseta Baby Long 100% algodão, em malha estonada ou quality, modelagem especial mais acinturada e comprida e impressão direta sobre o tecido, garantindo conforto e caimento perfeito. Ah, não desbota nem encolhe!',
      powered_by: 'Uma invenção',
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
      scope.getLanguage = this.getLanguage;
    },
    setLanguage: function (language) {
      currentLanguage = language;
    },
    getLanguage: function () {
      return currentLanguage;
    }
  };

});
