export const coffees = [
  {
    id: 1,
    name: "Café Serrano",
    notes: "Chocolate e castanhas",
    roast: "Torra média",
    region: "Serra da Mantiqueira – MG",
    process: "Natural",
    score: 84,
    price: 54.9,
    img: "../../src/img/cafe_serrano.png",
  },
  {
    id: 2,
    name: "Café Mantiqueira",
    notes: "Caramelo e frutas secas",
    roast: "Torra média clara",
    region: "Serra da Mantiqueira – MG",
    process: "Lavado",
    score: 86,
    price: 59.9,
    img: "../../src/img/cafe_mantiquera.png",
  },
  {
    id: 3,
    name: "Café Chapada",
    notes: "Frutas amarelas",
    roast: "Torra clara",
    region: "Chapada Diamantina – BA",
    process: "Natural",
    score: 88,
    price: 64.9,
    img: "../../src/img/cafe_chapada.png",
  },
  {
    id: 4,
    name: "Café Mogiana",
    notes: "Chocolate amargo",
    roast: "Torra escura",
    region: "Mogiana – SP",
    process: "Despolpado",
    score: 85,
    price: 52.9,
    img: "../../src/img/cafe_mogiana.png",
  },
  {
    id: 5,
    name: "Café Vulcânico",
    notes: "Frutas vermelhas",
    roast: "Torra clara",
    region: "Sul de Minas – MG",
    process: "Natural",
    score: 90,
    price: 66.9,
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&q=80",
  },
  {
    id: 6,
    name: "Café Orgânico",
    notes: "Mel e amêndoas",
    roast: "Torra média",
    region: "Cerrado Mineiro – MG",
    process: "Honey",
    score: 87,
    price: 58.9,
    img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=300&q=80",
  },
  {
    id: 7,
    name: "Café Reserva",
    notes: "Chocolate e vinho",
    roast: "Torra escura",
    region: "Mogiana – SP",
    process: "Natural",
    score: 92,
    price: 74.9,
    img: "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=300&q=80",
  },
  {
    id: 8,
    name: "Café Descafeinado",
    notes: "Chocolate ao leite",
    roast: "Torra média",
    region: "Serra da Mantiqueira – MG",
    process: "Swiss Water",
    score: 82,
    price: 56.9,
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80",
  },
];

export const plans = [
  {
    id: "bronze",
    label: "PLANO",
    name: "Bronze",
    icon: "☕",
    features: ["1 café especial por mês", "Frete grátis", "Conteúdo exclusivo"],
    price: 54.9,
    featured: false,
  },
  {
    id: "prata",
    label: "PLANO",
    name: "Prata",
    icon: "☕",
    features: [
      "2 cafés especiais por mês",
      "Frete grátis",
      "Brinde exclusivo",
      "Conteúdo exclusivo",
    ],
    price: 94.9,
    featured: true,
  },
  {
    id: "gold",
    label: "PLANO",
    name: "Gold",
    icon: "☕",
    features: [
      "Cafés exclusivos",
      "Brinde premium",
      "Curso online incluso",
      "Conteúdo exclusivo",
    ],
    price: 149.9,
    featured: false,
  },
];

export const courses = [
  {
    id: 1,
    name: "Introdução à Degustação de Café",
    level: "Iniciante",
    duration: "4 semanas",
    instructor: "Marcelo Santos",
    description:
      "Aprenda os fundamentos da degustação de café e desenvolva seu paladar especializado.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&q=80",
    price: 299.9,
  },
  {
    id: 2,
    name: "Barista Profissional",
    level: "Intermediário",
    duration: "8 semanas",
    instructor: "Ana Carolina",
    description:
      "Domine as técnicas de preparo de espresso, cappuccino e latte arte com qualidade profissional.",
    img: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=300&q=80",
    price: 499.9,
  },
  {
    id: 3,
    name: "Torrefação Artesanal",
    level: "Avançado",
    duration: "12 semanas",
    instructor: "João Pedro",
    description:
      "Técnicas completas de torrefação, desde seleção de grãos até cupping profissional.",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&q=80",
    price: 799.9,
  },
  {
    id: 4,
    name: "Especialista em Café Filter",
    level: "Intermediário",
    duration: "6 semanas",
    instructor: "Lucia Ferreira",
    description:
      "Domine métodos como V60, Chemex, AeroPress e alcance a perfeição em cada xícara.",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&q=80",
    price: 399.9,
  },
  {
    id: 5,
    name: "Origem e Terroir do Café",
    level: "Iniciante",
    duration: "5 semanas",
    instructor: "Daniela Moura",
    description:
      "Explore as diferentes regiões produtoras, características regionais e notas de sabor únicas.",
    img: "https://images.unsplash.com/photo-1559821543-cd4628902d4a?w=300&q=80",
    price: 349.9,
  },
  {
    id: 6,
    name: "Gestão de Café Specialty",
    level: "Avançado",
    duration: "10 semanas",
    instructor: "Roberto Alves",
    description:
      "Negócio, qualidade e sustentabilidade na cadeia de café specialty de ponta a ponta.",
    img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=300&q=80",
    price: 699.9,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "A Jornada do Café: Da Planta ao Seu Copo",
    category: "Origem",
    date: "15 de Maio, 2026",
    excerpt:
      "Descubra como o café viaja desde plantações em altitude até sua xícara, passando por processos cuidadosos de colheita e processamento.",
    img: "https://images.unsplash.com/photo-1447933601403-0c6688726566?w=600&q=80",
    author: "Marcelo Santos",
    quote:
      "O segredo do café especial está no cuidado a cada etapa: do solo ao torrefador, cada detalhe altera a experiência.",
    sections: [
      {
        title: "Do pé à secagem",
        text: "No campo, a colheita seletiva garante que apenas os frutos maduros sejam processados. Esse cuidado inicial define a clareza e a doçura do café. Os produtores, muitas vezes de forma manual e cuidadosa, selecionam apenas os frutos que atingiram o pico de maturação, deixando os verdes para futuras colheitas. Após a colheita, os frutos são transportados para o galpão de processamento, onde começam a passar por uma serie de transformações. O tempo entre a colheita e o processamento é crítico: quanto menos tempo passar, melhor será a qualidade final do café.",
      },
      {
        title: "Altitudes e terroirs",
        text: "Regiões mais altas resultam em grãos com maior acidez e complexidade aromática. No Brasil, a Serra da Mantiqueira, localizada entre Minas Gerais e São Paulo, produz cafés com notas de fruta vermelha e chocolate. O Cerrado Mineiro, situado em altitudes entre 800 e 1.200 metros, entrega grãos com doçura natural e corpo mais estruturado. Já a Chapada Diamantina, na Bahia, é conhecida por cafés florais e leves. A altitude influencia diretamente o clima, a umidade do solo e a velocidade de maturação dos frutos, criando perfis únicos em cada região.",
      },
      {
        title: "Processamento artesanal",
        text: "O método natural ou lavado impacta diretamente as notas finais. No processamento natural, o fruto é seco inteiro ao sol, mantendo toda a mucilagem. Esse contato prolonga resulta em cafés com notas frutadas intensas, maior doçura e corpo mais encorpado. No método lavado, o fruto é descascado imediatamente e o café passa por tanques de fermentação e lavagem. Isso remove a mucilagem, resultando em cafés mais limpos, com acidez mais evidente e leveza característica. Existe também o método honey, intermediário, onde o café mantém parte da mucilagem durante a secagem.",
      },
      {
        title: "Da torra ao seu copo",
        text: "No torrefador, o tempo e a temperatura são ajustados para valorizar o melhor de cada lote. Isso faz do café uma bebida única a cada xícara. Um torrefador experiente acompanha cada etapa do processo: ouve o 'crack' dos grãos, observa a mudança de cor e controla a temperatura interna. O primeiro crack, quando o grão se expande e faz barulho, marca o início da torra média. O segundo crack indica o início da torra escura. A precisão nesse processo determina se as notas de aroma se desenvolvem perfeitamente ou se perdem.",
      },
    ],
    tips: [
      "Procure comprar grãos frescos e descartar embalagens que não preservem o aroma.",
      "Moa o café pouco antes do preparo para perder menos notas aromáticas.",
      "Anote sua experiência para identificar perfis de sabor que mais agradam seu paladar.",
    ],
  },
  {
    id: 2,
    title: "Entenda as Diferentes Toras de Café",
    category: "Técnica",
    date: "12 de Maio, 2026",
    excerpt:
      "Explore os níveis de torra - clara, média e escura - e como cada um afeta o sabor e as características do seu café.",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
    author: "João Pedro",
    quote:
      "A torra não apenas colore o grão; ela revela camadas de aroma que podem transformar sua xícara de café.",
    sections: [
      {
        title: "Torra clara",
        text: "Valoriza acidez e notas frutadas. Cafés de torra clara costumam ser mais brilhantes e delicados, com final limpo e perfis florais. Essa torra interrompe o processo pouco depois do primeiro crack, preservando muitos dos sabores originais do grão. Você perceberá notas cítricas, florais, e às vezes até sabores herbáceos. A torra clara é perfeita para explorar as características específicas de um terroir, pois o sabor regional fica muito evidente.",
      },
      {
        title: "Torra média",
        text: "Oferece equilíbrio entre acidez, doçura e corpo. Essa é a escolha mais versátil para diversos métodos de preparo. A torra média chega até pouco antes do segundo crack, permitindo que os açúcares caramelizem levemente. O resultado é uma bebida mais redonda, com acidez moderada e notas de caramelo, damasco ou chocolate. É a torra mais popular mundialmente porque funciona bem em máquinas espresso, prensas francesas e métodos filtro.",
      },
      {
        title: "Torra escura",
        text: "Entrega sabores mais caramelizados e amargos, além de um corpo maior. É ideal para quem prefere cafés intensos e próximos do estilo espresso. A torra escura vai além do segundo crack, desenvolvendo sabores profundos de chocolate amargo, nozes e até um leve sabor de fumaça. O corpo fica mais denso e oleoso, criando aquela sensação conhecida como 'mouthfeel'. Tradicionalmente, a torra escura também reduz a acidez, tornando a bebida mais suave no estômago para pessoas sensíveis.",
      },
      {
        title: "Escolhendo a sua torra",
        text: "Experimente diferentes torras em pequenas quantidades para definir o seu perfil favorito. Torra e método de preparo caminham juntos. A melhor forma de explorar é comprar três pequenas porções do mesmo café em torras diferentes e fazer uma degustação comparativa. Você aprenderá rapidamente qual torra revela melhor os sabores que mais aprecia.",
      },
    ],
    tips: [
      "Para V60, escolha grãos de torra clara a média.",
      "Espresso funciona bem com torra média a escura.",
      "Se quiser suavidade extra, prefira cafés com perfil de doçura natural.",
    ],
  },
  {
    id: 3,
    title: "Cappuccino vs Latte: Qual é a Diferença?",
    category: "Educação",
    date: "10 de Maio, 2026",
    excerpt:
      "Entenda as diferenças fundamentais entre estas duas bebidas populares e quando pedir cada uma.",
    img: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&q=80",
    author: "Ana Carolina",
    quote:
      "A beleza de cada bebida está na proporção entre café e leite: um pequeno ajuste muda totalmente a sensação na xícara.",
    sections: [
      {
        title: "Proporção de leite",
        text: "No cappuccino tradicional italiano, a proporção clássica é de 1 shot de espresso (30ml), 1 parte de leite vaporizado (30ml) e 1 parte de espuma de leite (30ml). Isso cria uma bebida equilibrada onde o sabor do café ainda é bem perceptível. No latte, a proporção muda drasticamente: 1 shot de espresso (30ml) para 3 a 4 partes de leite vaporizado (90-120ml), com apenas uma fina camada de espuma no topo. Essa diferença fundamental cria bebidas completamente diferentes, mesmo usando os mesmos ingredientes.",
      },
      {
        title: "Textura e sensação",
        text: "O cappuccino é cremoso e aerado, com sensação de corpo mais densa. A espuma dá uma textura leve e volumosa na boca, enquanto o leite vaporizado contribui com cremosidade. O latte é mais sedoso, perfeito para quem quer um café menos intenso. A textura é mais lisa e aveludada, sem aquela aeração do cappuccino. Quando você bebe um cappuccino, há diferentes texturas: primeiro a espuma, depois o leite cremoso, depois o café. No latte, é mais homogêneo.",
      },
      {
        title: "Quando escolher cada um",
        text: "Peça um cappuccino se quiser uma bebida rica e estruturada, geralmente melhor apreciado no início da manhã quando você deseja um café mais forte. O cappuccino combina bem com um biscoito ou pastel. Prefira o latte quando quiser um café mais confortável e fácil de beber, ideal para qualquer hora do dia, inclusive após refeições. Muitas pessoas também usam o latte como base para bebidas saborizadas sem perder completamente o café.",
      },
      {
        title: "Personalização",
        text: "Adicione canela, cacau, essência de baunilha ou xarope de caramelo para criar variações que combinam com o seu gosto. O cappuccino pode receber um polvilho de chocolate em pó no topo. O latte é particularmente versátil para infusões, aceitando bem mel, xaropes, e até leites alternativos como de amêndoa ou aveia. Experimente pedir um 'macchiato', que é um cappuccino com menos espuma, para encontrar seu ponto ideal.",
      },
    ],
    tips: [
      "Mantenha o leite cremoso, sem exagerar na espuma para não perder a doçura natural.",
      "Use um bom espresso como base para que o sabor do café não se perca.",
    ],
  },
  {
    id: 4,
    title: "Como Preparar Café Filter em Casa",
    category: "Receita",
    date: "8 de Maio, 2026",
    excerpt:
      "Passo a passo detalhado para fazer café filter perfeito usando V60, Chemex ou AeroPress na sua cozinha.",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    author: "Lucia Ferreira",
    quote:
      "O café filter é sobre calma e atenção: quando cada gota cai, ela revela o sabor do grão com clareza.",
    sections: [
      {
        title: "Mão na massa",
        text: "Escolha uma moagem média a fina, dependendo do método. Para V60 e Chemex, a moagem deve ser mais uniforme; para AeroPress, um pouco mais grossa. A moagem é absolutamente crítica: grãos muito grossos deixam o café fraco e aquoso (subextração), enquanto grãos muito finos deixam amargo e entupem o filtro. Invista em um bom moedor de rebites ou de disco, não use moedor de lâminas que esquenta o café. O tamanho ideal para V60 é como areia fina; para Chemex, um pouco mais grosso; para AeroPress, como açúcar refinado.",
      },
      {
        title: "O bloom",
        text: 'Molhe o café recém-moído com um pouco de água quente e espere 30 segundos. Esse processo libera gases e prepara o pó para uma extração mais uniforme. Use água entre 92-96°C e despeje quantidade equivalente ao dobro do peso do café (se usar 15g, despeje 30ml). Observe o café "florescer" - essa reação entre a água quente e os gases presos no grão é fundamental. Muitos especialistas consideram o bloom a etapa mais importante de todo o processo, pois garante que a extração seja equilibrada do início ao fim.',
      },
      {
        title: "Fluxo de água",
        text: "Despeje a água em movimentos circulares e constantes, controlando a quantidade e o tempo para evitar subextração ou amargor. Use a técnica dos 'draws' ou 'pours': divida a água restante em 2 a 4 vertidas, esperando alguns segundos entre cada uma para manter o fluxo constante. O tempo total deve ser entre 2:30 e 4:00 minutos, dependendo do método. Usar uma balança de precisão ajuda enormemente a replicar o mesmo resultado em cada preparo.",
      },
      {
        title: "A prova final",
        text: "Deguste em pequenos goles para perceber notas de fruta, chocolate ou mel. Ajuste moagem e tempo nas próximas vezes até chegar ao seu ponto. Mantenha notas sobre o que funcionou: moagem, peso do café, temperatura da água, tempo de preparo. Depois de alguns preparos, você desenvolverá intuição e conseguirá prever como pequenas mudanças afetarão o resultado. Este é o verdadeiro caminho para dominar a arte do café filter.",
      },
    ],
    tips: [
      "Use água entre 92°C e 96°C para extrair o melhor do grão.",
      "Mantenha a balança e o temporizador à mão para repetir resultados consistentes.",
      "Lave o filtro com água quente antes de preparar para evitar sabores de papel.",
    ],
  },
  {
    id: 5,
    title: "Os Benefícios do Café Para a Saúde",
    category: "Saúde",
    date: "5 de Maio, 2026",
    excerpt:
      "Descubra os benefícios comprovados cientificamente do consumo moderado de café para seu bem-estar.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    author: "Daniela Moura",
    quote:
      "Quando consumido com moderação, o café é um aliado para concentração e uma rotina mais ativa.",
    sections: [
      {
        title: "Antioxidantes naturais",
        text: "O café é rico em compostos que ajudam a proteger as células do estresse oxidativo e contribuem para uma sensação geral de vitalidade. Estudos científicos identificaram mais de 1.000 bioativos no café, sendo os principais o ácido clorogênico e o ácido cafeico. Estes compostos podem reduzir inflamação no corpo e fortalecer o sistema imunológico. Curiosamente, cafés de torra escura perdem alguns antioxidantes no processo, portanto cafés de torra clara a média oferecem maior quantidade desses beneficiosos compostos.",
      },
      {
        title: "Energia sem exagero",
        text: "Uma xícara bem dosada pode melhorar foco e disposição sem causar ansiedade. Horários certos fazem toda a diferença. A cafeína atinge o pico de concentração no sangue cerca de 30-60 minutos após o consumo e tem meia-vida de 5-6 horas. Isso significa que uma xícara às 15h ainda pode afetar seu sono à noite. O ideal é consumir café entre 9h-12h e 13h-15h, aproveitando os picos naturais de energia do corpo.",
      },
      {
        title: "Benefícios para o cérebro",
        text: "Estudos associam o consumo controlado de café à melhora da memória de curto prazo e à proteção contra declínios cognitivos. Pesquisas sugerem que a cafeína pode reduzir o risco de Alzheimer e Parkinson quando consumida regularmente em quantidades moderadas. A cafeína funciona bloqueando os receptores de adenosina no cérebro, a substância responsável pela sonolência, criando sensação de alerta e melhorando a velocidade de processamento mental.",
      },
      {
        title: "Moderação",
        text: "O ideal é manter o consumo em torno de duas a três xícaras por dia, ajustando conforme sua sensibilidade à cafeína. A Organização Mundial de Saúde recomenda um máximo de 400mg de cafeína diária para adultos saudáveis (uma xícara de café tem entre 80-100mg). Gestantes, pessoas com problemas cardíacos ou ansiedade devem consultar um médico. Ouça seu corpo: se notar taquicardia, tremores ou insônia, reduza o consumo.",
      },
    ],
    tips: [
      "Prefira café puro ou bebidas com pouco açúcar para aproveitar melhor os benefícios.",
      "Beba água entre as xícaras para equilibrar a hidratação.",
      "Evite o consumo muito tarde para não prejudicar o sono.",
    ],
  },
  {
    id: 6,
    title: "Café Specialty: O Que Torna um Café Especial?",
    category: "Origem",
    date: "2 de Maio, 2026",
    excerpt:
      'Aprenda o que qualifica um café como "specialty" e os critérios de qualidade que os diferencia dos cafés comuns.',
    img: "https://images.unsplash.com/photo-1559821543-cd4628902d4a?w=600&q=80",
    author: "Roberto Alves",
    quote:
      "O café specialty é uma celebração da qualidade, desde a fazenda até o momento em que ele chega à sua xícara.",
    sections: [
      {
        title: "Critérios de avaliação",
        text: "Cafés specialty passam por provas rigorosas de cupping. Apenas grãos com pontuação alta e sem defeitos sensoriais ganham essa classificação. Uma bebida é considerada specialty quando recebe pontuação de 80 ou mais em uma escala de 100 pontos da Specialty Coffee Association. O cupping envolve vários provadores experientes que avaliam aroma, acidez, corpo, sabor, amargor, final e harmonia geral. Nenhum defeito sensorial é tolerado em grãos specialty.",
      },
      {
        title: "Transparência na cadeia",
        text: "Além da xícara, o specialty valoriza a história do produtor, as práticas sustentáveis e a rastreabilidade do grão. Uma boa torrefadora specialty será capaz de contar exatamente de qual fazenda em qual município o café veio, qual produtor cultivou, em que altitude e qual processamento foi utilizado. Muitos cafés specialty também têm rastreamento blockchain para garantir total transparência.",
      },
      {
        title: "Notas sensoriais",
        text: "Atenção aos aromas: frutado, floral, chocolate e doce se tornam mais evidentes quando o café é preparado com cuidado. Cafés specialty revelam aromas complexos - você pode detectar notas de morango, framboesa, lichia, jasmim ou até chocolate branco. Essas nuances são resultado de toda a cadeia: variedade do grão, altitude, clima, processamento e torra adequada. Quanto melhor o café, mais camadas de aroma você descobrirá em diferentes temperaturas de degustação.",
      },
      {
        title: "Como reconhecer",
        text: 'Busque torrefações que informem origem, altitude e método de processamento. Essa transparência é um bom sinal de qualidade. Um café specialty declarará: "Café natural, 1.200 metros, fazenda X, colheita 2025". Procure também por certificações como Direct Trade ou Fair Trade, que indicam relacionamento ético com produtores. Torrefadores pequenos, artesanais, geralmente oferecem melhor qualidade que grandes marcas commodity.',
      },
    ],
    tips: [
      "Leia as descrições dos grãos para conhecer a origem e o processo.",
      "Escolha cafés de micro lotes para experimentar perfis mais específicos.",
      "Participe de degustações para treinar seu paladar e identificar diferenças sutis.",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Juliana Martins",
    rating: 5,
    comment:
      "Os melhores cafés que já provei! A qualidade dos grãos é incrível e o atendimento é impecável. Virei cliente fiel do clube!",
    avatar: "J",
  },
  {
    id: 2,
    name: "Carlos Souza",
    rating: 5,
    comment:
      "A experiência de degustação foi transformadora. Os cursos online são excelentes e aprendi técnicas que uso todos os dias.",
    avatar: "C",
  },
  {
    id: 3,
    name: "Marina Santos",
    rating: 5,
    comment:
      "Meu kit de café chegou rápido e bem embalado. A variedade é impressionante e cada grão tem sua própria história.",
    avatar: "M",
  },
  {
    id: 4,
    name: "Roberto Alves",
    rating: 5,
    comment:
      "Café specialty de verdade! Conseguem trazer grãos exclusivos que não encontro em lugar nenhum. Muito satisfeito.",
    avatar: "R",
  },
  {
    id: 5,
    name: "Ana Costa",
    rating: 5,
    comment:
      "O atendimento é personalizado e eles realmente entendem de café. A assinatura mensal é um tesouro para quem ama café.",
    avatar: "A",
  },
  {
    id: 6,
    name: "Felipe Oliveira",
    rating: 5,
    comment:
      "Workshop online sobre latte art foi incrível! Instrutor muito didático. Recomendo para quem quer aprender de verdade.",
    avatar: "F",
  },
  {
    id: 7,
    name: "Beatriz Silva",
    rating: 5,
    comment:
      "A qualidade é consistente. Já tentei vários cafés e todos superaram minhas expectativas. Voltei a apreciar café como nunca.",
    avatar: "B",
  },
  {
    id: 8,
    name: "Lucas Pereira",
    rating: 5,
    comment:
      "Excelente rapport entre preço e qualidade. O Blog tem conteúdo muito rico. Virei fã da marca!",
    avatar: "L",
  },
  {
    id: 9,
    name: "Fernanda Rocha",
    rating: 5,
    comment:
      "Montei meu kit personalizado e ficou perfeito! Chegou em 3 dias. Já é a segunda vez que compro.",
    avatar: "F",
  },
];
