'use strict';

angular.module('lilivicApp').service('i18n', function () {

  var dictionary = {
    en: {
      about: 'Bio',
      dimensions: 'Dimensions',
      footnote: 'Copyright © 2016 · ',
      media: 'Media',
      media_blog: 'Blog',
      media_clipping: 'Clipping',
      powered_by: 'Powered By',
      shop: 'Shop',
      shop_bags: 'Bags',
      shop_bags_description: '?',
      shop_bodies: 'Baby bodies',
      shop_bodies_description: '?',
      shop_cushion_covers: 'Cushion covers',
      shop_cushion_covers_description: '?',
      shop_mugs: 'Mugs',
      shop_mugs_description: '?',
      shop_phone_covers: 'Phone covers',
      shop_phone_covers_description: '?',
      shop_post_cards: 'Post cards',
      shop_post_cards_description: '?',
      shop_posters: 'Posters',
      shop_posters_description: '?',
      shop_shirts: 'T shirts',
      shop_shirts_description: '?',
      soon: 'Soon',
      technique: 'Technique',
      works: 'Gallery',
      works_card: 'Cards',
      works_draw: 'Draws',
      works_shape: 'Shapes',
      works_wall: 'Walls'
    },
    pt: {
      about: 'Bio',
      dimensions: 'Dimensões',
      footnote: '2016 · Todos os direitos reservados · ',
      media: 'Mídia',
      media_blog: 'Blog',
      media_clipping: 'Clipping',
      shop: 'Shop',
      shop_bags: 'Bolsas',
      shop_bags_description: 'Bolsas em Córdoba com alça em cadarço de algodão preto e impressão frente e verso. No modelo tote bag, com 40x43x5cm, não têm forro/fecho e são super resistentes.',
      shop_bodies: 'Macacões de bebê',
      shop_bodies_description: 'Macacão de bebê 100% algodão, super macio, confortável e impresso com a alta tecnologia DTG de impressão direta sobre tecido com toque zero.',
      shop_cushion_covers: 'Capas de almofada',
      shop_cushion_covers_description: 'Capa de Almofada estampada digitalmente dos dois lados com cores vibrantes em alta qualidade. Com zíper invisível em um tecido macio e anti-alérgico, está disponível em dois tamanhos; 40x40cm e 50x50cm.',
      shop_mugs: 'Canecas',
      shop_mugs_description: 'Caneca em cerâmica premium com alça anti-térmica e capacidade para 300ml. Pode comportar sua bebida favorita ou organizar e decorar seus ambientes.',
      shop_phone_covers: 'Capas de celulares',
      shop_phone_covers_description: 'Capas para diversos modelos em policarbonato rígido, com acabamento fosco e toque aveludado. Com impressão total (nas laterais também), não arranha e ainda protege seu celular.',
      shop_post_cards: 'Cartões postais',
      shop_post_cards_description: 'Cartões postais de 10x15cm em papel couché fosco e impressão frontal. Chegam para você em pacotes de 4 ou 8 unidades e dão um toque de arte a sua mensagem especial.',
      shop_posters: 'Pôsters',
      shop_posters_description: 'Poster em Fine Art com impressão de altíssima qualidade no papel algodão Hahnemühle de 200gsm, levemente texturizado. Com durabilidade de museus e toque aveludado, está disponível em 3 tamanhos diferentes; A4, A3 e A2.',
      shop_shirts: 'Camisetas',
      shop_shirts_description: 'Camiseta Baby Long 100% algodão, em malha estonada ou quality, modelagem especial mais acinturada e comprida e impressão direta sobre o tecido, garantindo conforto e caimento perfeito. Ah, não desbota nem encolhe!',
      powered_by: 'Uma invenção',
      soon: 'Em breve',
      technique: 'Técnica',
      works: 'Galeria',
      works_card: 'Cartões',
      works_draw: 'Ilustrações',
      works_shape: 'Shapes',
      works_wall: 'Murais'
    }
  };

  var currentLanguage = null;
  if (navigator.language.indexOf('pt') > -1) {
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
      scope.isEnglishSet = this.isEnglishSet;
      scope.isPortugueseSet = this.isPortugueseSet;
    },
    setLanguage: function (language) {
      currentLanguage = language;
    },
    getLanguage: function () {
      return currentLanguage;
    },
    isEnglishSet: function () {
      return currentLanguage === 'en';
    },
    isPortugueseSet: function () {
      return currentLanguage === 'pt';
    }
  };
});
