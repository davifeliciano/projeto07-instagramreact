export const profiles = [
  {
    username: "amelie",
    src: "assets/profile_pics/amelie.jpg",
  },
  {
    username: "davifeliciano",
    src: "assets/profile_pics/davifeliciano.jpg",
  },
  {
    username: "fume",
    src: "assets/profile_pics/fume.jpg",
  },
  {
    username: "leopoldo",
    src: "assets/profile_pics/leopoldo.jpg",
  },
  {
    username: "mafu",
    src: "assets/profile_pics/mafu.jpg",
  },
  {
    username: "timoteo",
    src: "assets/profile_pics/timoteo.jpg",
  },
  {
    username: "tita",
    src: "assets/profile_pics/tita.jpg",
  },
  {
    username: "zubu",
    src: "assets/profile_pics/zubu.jpg",
  },
];

export const posts = [
  {
    id: 1,
    type: "image",
    src: "assets/posts/amelie.jpg",
    author: "amelie",
    whoLiked: "davifeliciano",
    likeAmount: 101523,
    commentAmount: 439,
    description: "Pense num lugar confortável 😺",
    comments: [
      {
        author: "davifeliciano",
        content: "Tu devia descer da casa de vez em quando 😆",
      },
      {
        author: "zubu",
        content: "Se eu subo lá, quebro altas telha 😁",
      },
    ],
  },
  {
    id: 2,
    type: "image",
    src: "assets/posts/davifeliciano.jpg",
    author: "davifeliciano",
    whoLiked: "leopoldo",
    likeAmount: 12,
    commentAmount: 0,
    description: "La Grande Roue de Montréal 🎡",
    comments: [],
  },
  {
    id: 3,
    type: "image",
    src: "assets/posts/fume.jpg",
    author: "fume",
    whoLiked: "mafu",
    likeAmount: 90579,
    commentAmount: 23002,
    description: "Voltando da caçada aos passaros do lote 🐦☠️",
    comments: [
      {
        author: "belanrodrigues",
        content: "😠😠😠 Não chega nem perto da @jurema",
      },
      {
        author: "janaina",
        content: "Aprendendo com a melhor 🤣",
      },
    ],
  },
  {
    id: 4,
    type: "image",
    src: "assets/posts/leopoldo.jpg",
    author: "leopoldo",
    whoLiked: "davifeliciano",
    likeAmount: 121901,
    commentAmount: 50437,
    description:
      "Só relaxando no meu #dayoff depois de correr atrás de uns gato ontem 😺🏃🐶",
    comments: [
      {
        author: "biafeliciano",
        content: "😍❤️",
      },
      { author: "davifeliciano", content: "É noes parcero 👊" },
    ],
  },
  {
    id: 5,
    type: "video",
    src: ["assets/posts/leopoldo.mp4", "assets/posts/leopoldo.ogv"],
    author: "leopoldo",
    whoLiked: "fume",
    likeAmount: 145872,
    commentAmount: 25342,
    description:
      "Brincando com meu brother @branquinho 🥊👊 Só não sei se ele tava curtindo a brincadeira. Senti umas unhadas...",
    comments: [
      {
        author: "fume",
        content: "Leão e Leopardo - Entre Tapas e Beijos 🎵❤️",
      },
      {
        author: "branquinho",
        content: "Se tu não chupasse tanto minha orelha, não apanhava tanto 😠",
      },
    ],
  },
  {
    id: 6,
    type: "image",
    src: "assets/posts/mafu.jpg",
    author: "mafu",
    whoLiked: "fume",
    likeAmount: 70427,
    commentAmount: 355,
    description: "Eu e minha mãe @zubu depois de um rolê de skate 🛹",
    comments: [
      {
        author: "timoteo",
        content: "Nem chama 😒",
      },
      {
        author: "tita",
        content: "Essa nova geração de gatos... Tem pique pra tudo!",
      },
    ],
  },
  {
    id: 7,
    type: "image",
    src: "assets/posts/timoteo.jpg",
    author: "timoteo",
    whoLiked: "tita",
    likeAmount: 64620,
    commentAmount: 355,
    description: "Só relaxando no meu #dayoff depois de apanhar ontem 🥊",
    comments: [
      {
        author: "fume",
        content: "Chega perto da minha casa de novo pra tu ver 👺",
      },
      {
        author: "leopoldo",
        content:
          "Sempre que vejo os gatos que te batem eu corro atrás 👊 É noes!",
      },
    ],
  },
  {
    id: 8,
    type: "image",
    src: "assets/posts/tita.jpg",
    author: "tita",
    whoLiked: "davifeliciano",
    likeAmount: 35852,
    commentAmount: 44478,
    description:
      "Eu mamando no início de 2007, então já to beirando meus 17 anos 👵 #tbt",
    comments: [
      {
        author: "branquinha",
        content: "Vou sempre cuidar de você mãe @tita ❤️",
      },
      {
        author: "davifeliciano",
        content: "A primeira ninhada! Hoje estamos com uns 16 gatos 😹😹😹",
      },
    ],
  },
  {
    id: 9,
    type: "image",
    src: "assets/posts/zubu.jpg",
    author: "zubu",
    whoLiked: "mafu",
    likeAmount: 99159,
    commentAmount: 812,
    description: "Acho que tô precisando emagrecer 🙃",
    comments: [
      {
        author: "davifeliciano",
        content: "Famosa #gatabarril",
      },
      {
        author: "zubu",
        content: "Calado @davifeliciano 😠 São só 4kg!",
      },
    ],
  },
];

export const stories = [
  "davifeliciano",
  "zubu",
  "mafu",
  "timoteo",
  "amelie",
  "leopoldo",
  "tita",
  "fume",
];

export const suggestions = [
  { username: "timoteo", whySuggested: "Novo no Instagram" },
  { username: "tita", whySuggested: "Novo no Instagram" },
  { username: "amelie", whySuggested: "Segue você" },
  { username: "fume", whySuggested: "Segue você" },
  { username: "mafu", whySuggested: "Segue você" },
];
