/**
 * ====================================================================
 * BELATTO LANCHES - CENTRAL DE CONFIGURAÇÕES EDITÁVEIS
 * ====================================================================
 * Todas as informações comerciais, endereços, telefones, links de
 * pedido, horários de atendimento e produtos estão centralizados aqui.
 * 
 * Regra Oficial de Nomenclatura e UX:
 * - BELATTO LOJA: "Você vem até a gente." (Atendimento presencial, consumo no local e retirada)
 * - BELATTO DELIVERY: "A gente chega até você." (Delivery, pedidos online e retirada)
 * 
 * Cores: VERMELHO BELATTO + PRETO + BRANCO (paleta exclusiva)
 * Sem caracteres proibidos: sem "&" (usar sempre "e") e sem travessão "-"
 * ====================================================================
 */

const BELATTO_CONFIG = {
  brand: {
    name: "Belatto Lanches",
    tagline: "O sabor marcante de Cuiabá no seu momento.",
    slogan: "Fecha com um Belatto.",
    city: "Cuiabá, MT",
    instagramUrl: "https://www.instagram.com/belattolanches/",
    instagramHandle: "@belattolanches",
    developerName: "Innovary Mídia",
    developerUrl: "https://www.innovarymidia.com.br/"
  },

  // 1. BELATTO LOJA: Atendimento presencial, consumo no local e retirada
  belattoLoja: {
    id: "belatto-loja",
    badge: "VOCÊ VEM ATÉ A GENTE",
    title: "BELATTO LOJA",
    headline: "Quer sentar, relaxar e curtir o ambiente? A casa é sua.",
    description: "Na Belatto Loja você aproveita nosso salão climatizado, curte com os amigos, consome no local ou faz sua retirada direta no balcão.",
    modalities: [
      "Atendimento presencial",
      "Consumo no local",
      "Retirada no balcão"
    ],
    address: {
      street: "Av. Presidente Getúlio Vargas, 800A",
      neighborhood: "Centro Norte",
      city: "Cuiabá, MT",
      formatted: "Av. Presidente Getúlio Vargas, 800A, Centro Norte, Cuiabá, MT",
      reference: "Próximo à Praça 8 de Abril"
    },
    phone: "(65) 99683-8193",
    phoneTel: "+5565996838193",
    whatsappUrl: "https://wa.me/5565996838193?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Belatto%20Loja.",
    mapsUrl: "https://maps.google.com/?q=Av.+Presidente+Get%C3%BAlio+Vargas,+800A,+Centro+Norte,+Cuiab%C3%A1,+MT",
    hoursSummary: "Quinta a terça, das 18h às 02h",
    closedNotice: "Quarta-feira: FECHADO",
    schedule: [
      { days: "Quinta a terça", hours: "18h às 02h", open: true },
      { days: "Quarta-feira", hours: "FECHADO", open: false }
    ],
    features: [
      "Salão confortável e climatizado para reunir a galera",
      "Atendimento nas mesas com lanche saindo na hora da chapa",
      "Retirada rápida no balcão para levar para onde quiser",
      "Bebidas geladas e porções para compartilhar"
    ],
    alertNotice: "Esta unidade conta com mesas para consumo presencial e também realiza retirada no balcão. Para pedir de onde estiver e receber em casa, escolha a Belatto Delivery.",
    heroImage: "assets/belatto-loja-fachada-real.png"
  },

  // 2. BELATTO DELIVERY: Delivery, pedidos online e retirada
  belattoDelivery: {
    id: "belatto-delivery",
    badge: "A GENTE CHEGA ATÉ VOCÊ",
    title: "BELATTO DELIVERY",
    headline: "Aquela fome bateu? A gente leva até você.",
    description: "Para quem quer pedir de onde estiver. Faça seu pedido online e receba seu Belatto quentinho com embalagem térmica exclusiva, ou faça seu pedido para retirada rápida.",
    modalities: [
      "Delivery em toda Cuiabá",
      "Pedidos online",
      "Retirada"
    ],
    address: {
      street: "Av. São Sebastião, 2124",
      neighborhood: "Popular",
      city: "Cuiabá, MT",
      formatted: "Av. São Sebastião, 2124, Popular, Cuiabá, MT",
      reference: "Base de expedição rápida e retirada"
    },
    phone: "(65) 3023-0496",
    phoneTel: "+556530230496",
    whatsappUrl: "https://wa.me/556530230496?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20meu%20pedido%20no%20Belatto%20Delivery.",
    siteUrl: "https://belattolanches.mandarpedido.com/mobile/home",
    ifoodUrl: "https://www.ifood.com.br/delivery/cuiaba-mt/belatto-lanches-popular",
    hoursSummary: "Terça a domingo, das 18h às 23h",
    closedNotice: "Segunda-feira: FECHADO",
    schedule: [
      { days: "Terça a domingo", hours: "18h às 23h", open: true },
      { days: "Segunda-feira", hours: "FECHADO", open: false }
    ],
    features: [
      "Operação ágil focada em entrega rápida e retirada",
      "Embalagens térmicas especiais com lacre de segurança oficial",
      "Acompanhamento em tempo real pelo site oficial ou iFood",
      "Entrega expressa nas principais regiões de Cuiabá"
    ],
    alertNotice: "Esta unidade é focada em delivery e pedidos para entrega ou retirada. Para atendimento com mesas e consumo no local, escolha a Belatto Loja.",
    heroImage: "assets/belatto-sacola-delivery.jpg"
  },

  // CARDÁPIO DE PRODUTOS REAIS CONFIRMADOS COM FOTOGRAFIAS REAIS DO BELATTO
  products: [
    {
      id: "baguncinha-tradicional",
      number: "01",
      name: "O Tradicional Baguncinha",
      category: "Mais Pedidos",
      categoryKey: "populares",
      image: "assets/belatto-baguncinha-real-1.jpg",
      description: "Pão macio selado na chapa, burger bovino suculento, muçarela derretida, presunto, ovo frito no ponto, bacon em pedaços crocantes, salsicha, salada fresca e a inconfundível maionese verde da casa.",
      badge: "ÍCONE DE CUIABÁ",
      tag: "O Favorito da Galera"
    },
    {
      id: "belatto-xbacon-especial",
      number: "02",
      name: "Belatto X-Bacon na Chapa",
      category: "Hambúrgueres",
      categoryKey: "burgers",
      image: "assets/belatto-xbacon-real.jpg",
      description: "Burger grelhado na chapa, camada generosa de bacon crocante bem tostadinho, muçarela derretida, tomate fresco e alface crocante no pão especial selado na manteiga.",
      badge: "CHEF PICK",
      tag: "Artesanal da Casa"
    },
    {
      id: "hot-dog-prensado",
      number: "03",
      name: "Hot Dog Especial Prensado",
      category: "Prensados e Dogs",
      categoryKey: "dogs",
      image: "assets/hotdog.jpg",
      description: "Pão artesanal prensado na chapa bem tostadinho por fora, recheado com queijo muçarela derretido, duas salsichas, molho caseiro e batata palha fininha.",
      badge: "CROCANTE",
      tag: "Tradição na Chapa"
    },
    {
      id: "batata-cheddar-bacon",
      number: "04",
      name: "Batata Frita Cheddar e Bacon",
      category: "Porções",
      categoryKey: "porcoes",
      image: "assets/porcao-fritas.jpg",
      description: "Batatas sequinhas e crocantes, cobertas com cheddar cremoso legítimo e finalizadas com farofa crocante de bacon defumado.",
      badge: "COMPARTILHAR",
      tag: "Para a Galera"
    },
    {
      id: "x-file-belatto",
      number: "05",
      name: "X-Filé na Chapa Belatto",
      category: "Lanches Especiais",
      categoryKey: "burgers",
      image: "assets/chapa-preparo.jpg",
      description: "Iscas nobres de filé mignon grelhadas na hora com cebola na chapa, queijo muçarela abundante, tomate e pão especial dourado.",
      badge: "ESPECIALIDADE",
      tag: "Carne Nobre"
    },
    {
      id: "combos-bebidas",
      number: "06",
      name: "Combos e Bebidas Geladas",
      category: "Bebidas",
      categoryKey: "bebidas",
      image: "assets/delivery-pack.jpg",
      description: "Refrigerantes lata trincando de gelados, sucos e combos completos embalados especialmente com a sacola lacrada oficial Belatto.",
      badge: "REFRESCANTE",
      tag: "Acompanhamento"
    }
  ],

  // SEÇÃO "BELATTO NOS MOMENTOS" (CONCEITO DO DESIGN SYSTEM)
  moments: [
    {
      id: "balada",
      title: "Balada foi intensa?",
      action: "Pega um Belatto.",
      description: "A energia acabou na pista? Reúna os amigos na Belatto Loja ou faça seu pedido de onde estiver.",
      image: "assets/belatto-lifestyle-balada.jpg"
    },
    {
      id: "show",
      title: "Cantou todas no show?",
      action: "Passa no Belatto.",
      description: "A voz se foi e a fome apertou. O lanche prensado na chapa e o chopp gelado esperam por você até tarde.",
      image: "assets/belatto-lifestyle-show.jpg"
    },
    {
      id: "serie",
      title: "Episódio novo da série?",
      action: "Assiste com Belatto.",
      description: "Sofá, cobertor, streaming na tela e a sacola térmica do Belatto Delivery chegando quentinha.",
      image: "assets/belatto-story-serie.jpg"
    },
    {
      id: "trabalho",
      title: "Dia puxado no trabalho?",
      action: "Melhora com um Belatto.",
      description: "Depois de horas de correria, nada supera a primeira mordida em um lanche de verdade bem recheado.",
      image: "assets/belatto-story-trabalho.jpg"
    }
  ],

  // PILARES "O JEITO BELATTO" (CONFIRMADOS NO DESIGN SYSTEM)
  pillars: [
    {
      icon: "🔥",
      title: "Chapa Quente e Pão Macio",
      description: "Preparo artesanal na chapa com selamento impecável que preserva a suculência e o aroma irresistível."
    },
    {
      icon: "🥩",
      title: "O Legítimo Baguncinha",
      description: "Respeito à identidade gastronômica de Cuiabá: ovo, bacon, muçarela derretida, carne saborosa e a maionese verde autoral."
    },
    {
      icon: "🌿",
      title: "A Clássica Maionese Verde",
      description: "Receita autoral fresca preparada artesanalmente todos os dias com ervas finas e aquele toque que todo mundo ama."
    },
    {
      icon: "📦",
      title: "Embalagem Térmica com Lacre",
      description: "Caixas estruturadas e sacolas lacradas oficiais para o lanche chegar com a temperatura certa e a batata crocante."
    }
  ],

  // FAQ FOCADO EM ELIMINAR DÚVIDAS OPERACIONAIS
  faq: [
    {
      question: "Qual a diferença entre a Belatto Loja e a Belatto Delivery?",
      answer: "A <strong>Belatto Loja</strong> (Av. Presidente Getúlio Vargas, 800A) é o nosso espaço com salão climatizado para você sentar, curtir com os amigos, consumir no local e também fazer sua retirada no balcão. A <strong>Belatto Delivery</strong> (Av. São Sebastião, 2124) é uma operação dedicada a pedidos online para entrega em toda a cidade e pedidos para retirada rápida."
    },
    {
      question: "Qual unidade atende presencialmente com mesas e salão?",
      answer: "Apenas a <strong>Belatto Loja</strong> na Av. Presidente Getúlio Vargas, 800A, Centro Norte. Lá você encontra ambiente aconchegante, mesas climatizadas e atendimento completo."
    },
    {
      question: "Posso retirar meu pedido em ambas as unidades?",
      answer: "Sim! A retirada é possível tanto na <strong>Belatto Loja</strong> (no Centro Norte) quanto na <strong>Belatto Delivery</strong> (no bairro Popular)."
    },
    {
      question: "Como faço para receber o pedido em minha casa?",
      answer: "Para delivery, faça seu pedido através dos canais da <strong>Belatto Delivery</strong>: pelo site oficial (<a href='https://belattolanches.mandarpedido.com/mobile/home' target='_blank' rel='noopener'>belattolanches.mandarpedido.com</a>), pelo aplicativo iFood ou pelo WhatsApp comercial (65) 3023-0496."
    },
    {
      question: "Qual o horário de funcionamento da Belatto Loja?",
      answer: "<strong>Belatto Loja:</strong> de quinta a terça, das 18h às 02h da madrugada. Às quartas-feiras a loja é <strong>FECHADA</strong>."
    },
    {
      question: "Qual o horário de funcionamento da Belatto Delivery?",
      answer: "<strong>Belatto Delivery:</strong> de terça a domingo, das 18h às 23h. Às segundas-feiras o delivery é <strong>FECHADO</strong>."
    },
    {
      question: "Quais são os telefones de contato de cada operação?",
      answer: "<strong>Belatto Loja:</strong> (65) 99683-8193 (Ligação e WhatsApp de atendimento presencial e retirada).<br><strong>Belatto Delivery:</strong> (65) 3023-0496 (Central de pedidos, entrega e retirada)."
    },
    {
      question: "Onde encontro o cardápio com preços e opções?",
      answer: "Você pode conferir nossos lanches nesta página ou acessar o cardápio interativo completo com preços atualizados no nosso site de pedidos oficial."
    }
  ]
};

// Disponibiliza globalmente
window.BELATTO_CONFIG = BELATTO_CONFIG;
