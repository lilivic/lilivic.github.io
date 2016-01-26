'use strict';

angular.module('lilivicApp').service('i18n', function () {

  var dictionary = {
    en: {
      about: 'Bio',
      about_text: 'Soon about me...',
      blog: 'Blog',
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
      works: 'Gallery',
      works_card: 'Cards',
      works_draw: 'Draws',
      works_shape: 'Shapes',
      works_wall: 'Walls'
    },
    pt: {
      about: 'Bio',
      about_text: 'Sou a Aline Victor, uma artista brasileira, arquiteta de formação, pós graduada em gestão ' +
      'ambiental, com muitos anos de trabalho paisagístico na bagagem. Para mim faz um enorme sentido toda essa ' +
      'interligação: como arquiteta urbanista, aprendi a compreender o todo e discernir sobre como minha ' +
      'criatividade pode trabalhar a favor das pessoas, em diferentes escalas - seja a obra de uma residência ou o ' +
      'planejamento de um bairro. Como gestora ambiental, aprendi a aplicar estratégia organizacional ao meu ' +
      'processo e a buscar novas tecnologias que atendam aos novos projetos. E dentro da arquitetura está o ' +
      'paisagismo, uma área tão incrível e muitas vezes negligenciada da formação: a arte de criar espaços ' +
      'utilizando a natureza como protagonista - e de quebra, aproveitando todas as características inerentes à ' +
      'natureza, como o fornecimento de sombras, amenização das temperaturas, etc... A auto-intitulação como ' +
      'artista surgiu recentemente, quando dei mais um passo em minha carreira e resolvi trazer a tona e tornar meu ' +
      'carro-chefe toda a criatividade que minha formação sempre me exigiu. Não tornei-me artista; sempre o fui, ' +
      'desde o momento que fiz meu primeiro risco como arquiteta-urbanista-paisagista. Ser artista é a base de toda ' +
      'minha formação. É utilizar meu conhecimento técnico e minha sensibilidade para criar espaços e objetos que ' +
      'atendam às necessidades das pessoas ao mesmo tempo em que sejam repletos de beleza e valor. A Lilivic Gallery ' +
      'é o meu estúdio de arte, onde desenvolvo trabalhos criativos para diversos públicos, pois a arte é intrínseca ' +
      'à nossa vida e pode (e deve!) permear todos os cantos do nosso dia-a-dia.   Na aba "Galeria" vocês podem ' +
      'acompanhar meu trabalho artístico e o processo do desenvolvimento da linguagem para cada projeto. Apesar de ' +
      'todos possuírem a "minha" linguagem, cada projeto é tratado com muito carinho e de forma individual, afinal, ' +
      'para mim, o mais importante do trabalho é que ele atenda aos desejos do cliente e seja mais do que um ' +
      'trabalho bonito: tem que ter significado e valor para quem o possui. O processo de aprendizado como artista ' +
      'é intenso e constante: novas técnicas, novos materiais, novos desafios, novas formas de trazer a beleza para ' +
      'situações muitos diversas - desde uma prancha de surf até paredes de uma instituição beneficente. Acredito ' +
      'que não exista nada mais belo em meu trabalho que isso: o estímulo constante pelo aprendizado e por formas de ' +
      'transformar, todos os dias, as vidas das pessoas em através da arte',
      blog: 'Blog',
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
