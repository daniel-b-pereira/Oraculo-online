let arcanosMaiores = [
  {
      numero: 0,
      nome: "O Louco",
      descricao: "Um jovem despreocupado à beira de um precipício.",
      elemento: "Ar",
      significado: "Novos começos, jornada, liberdade, ingenuidade.",
      interpretacoes: ["Inspiração", "Mudança", "Risco", "Falta de planejamento"]
  },
  {
      numero: 1,
      nome: "O Mago",
      descricao: "Um homem dominando elementos, com uma vara mágica.",
      elemento: "Fogo",
      significado: "Criação, poder pessoal, manifestação, inteligência.",
      interpretacoes: ["Autoconfiança", "Habilidade", "Manipulação"]
  },
  {
      numero: 2,
      nome: "A Sacerdotisa",
      descricao: "Uma mulher sentada diante de dois pilares, com um véu cobrindo o rosto.",
      elemento: "Água",
      significado: "Intuição, mistério, subconsciente, sabedoria ancestral.",
      interpretacoes: ["Segredos", "Conhecimento oculto", "Intuição feminina"]
  },
  {
      numero: 3,
      nome: "A Imperatriz",
      descricao: "Uma mulher grávida, cercada por natureza.",
      elemento: "Terra",
      significado: "Fertilidade, criação, abundância, nutrição.",
      interpretacoes: ["Maternidade", "Beleza", "Sensualidade", "Natureza"]
  },
  {
      numero: 4,
      nome: "O Imperador",
      descricao: "Um homem sentado em um trono, com um cetro e um globo.",
      elemento: "Terra",
      significado: "Autoridade, estrutura, estabilidade, controle.",
      interpretacoes: ["Pai", "Lei", "Ordem", "Tradição"]
  },
  {
      numero: 5,
      nome: "O Hierofante",
      descricao: "Um homem religioso sentado em um trono, abençoando.",
      elemento: "Terra",
      significado: "Tradição, espiritualidade, crenças, instituições.",
      interpretacoes: ["Mentor", "Religião", "Conformidade", "Doutrina"]
  },
  {
      numero: 6,
      nome: "Os Enamorados",
      descricao: "Um homem e uma mulher diante de um anjo, escolhendo um caminho.",
      elemento: "Ar",
      significado: "Amor, união, escolhas, relacionamentos.",
      interpretacoes: ["Decisões importantes", "Parcerias", "Atração", "Compromisso"]
  },
  {
      numero: 7,
      nome: "O Carro",
      descricao: "Um homem conduzindo uma carruagem puxada por dois animais.",
      elemento: "Fogo",
      significado: "Controle, força de vontade, conquista, direção.",
      interpretacoes: ["Sucesso", "Ambição", "Conflitos internos", "Triunfo"]
  },
  {
      numero: 8,
      nome: "A Força",
      descricao: "Uma mulher domina um leão.",
      elemento: "Fogo",
      significado: "Força interior, coragem, perseverança, controle emocional.",
      interpretacoes: ["Poder pessoal", "Autocontrole", "Graça sob pressão"]
  },
  {
      numero: 9,
      nome: "O Eremita",
      descricao: "Um ancião com uma lanterna, caminhando sozinho.",
      elemento: "Terra",
      significado: "Sabedoria interior, introspecção, isolamento, autoconhecimento.",
      interpretacoes: ["Solitude", "Guia espiritual", "Sabedoria ancestral"]
  },
  {
      numero: 10,
      nome: "A Roda da Fortuna",
      descricao: "Uma roda gigante girando, com figuras humanas.",
      elemento: "Ar",
      significado: "Mudança, destino, ciclos, sorte, azar.",
      interpretacoes: ["Inesperado", "Karma", "Oportunidades", "Reversos"]
  },
  {
    numero: 11,
    nome: "Justiça",
    descricao: "Uma figura feminina cega, segurando uma espada e uma balança.",
    elemento: "Ar",
    significado: "Justiça, equilíbrio, lei, karma, causa e efeito.",
    interpretacoes: ["Verdade", "Equilíbrio", "Decisões justas", "Consequências"]
},
{
    numero: 12,
    nome: "O Enforcado",
    descricao: "Um homem pendurado de cabeça para baixo em uma árvore.",
    elemento: "Água",
    significado: "Sacrifício, mudança de perspectiva, transformação, renascimento.",
    interpretacoes: ["Novas perspectivas", "Rendição", "Mudanças necessárias", "Sacrifício"]
},
{
    numero: 13,
    nome: "A Morte",
    descricao: "Um esqueleto montado em um cavalo, segurando uma foice.",
    elemento: "Água",
    significado: "Fim de um ciclo, transformação, renovação, mudança radical.",
    interpretacoes: ["Fim", "Recomeço", "Mudanças inevitáveis", "Transformação"]
},
{
    numero: 14,
    nome: "Temperança",
    descricao: "Um anjo misturando dois líquidos em um cálice.",
    elemento: "Fogo",
    significado: "Equilíbrio, moderação, harmonia, transformação alquímica.",
    interpretacoes: ["Balanceamento", "Paciência", "União de opostos", "Transmutação"]
},
{
    numero: 15,
    nome: "O Diabo",
    descricao: "Um demônio com chifres, segurando correntes.",
    elemento: "Fogo",
    significado: "Tentação, vícios, apegos, subconsciente, sombras.",
    interpretacoes: ["Adicções", "Medos", "Forças obscuras", "Poder pessoal"]
},
{
    numero: 16,
    nome: "A Torre",
    descricao: "Uma torre sendo atingida por um raio.",
    elemento: "Fogo",
    significado: "Mudança repentina, catástrofe, despertar, libertação.",
    interpretacoes: ["Destruição", "Recomeço", "Revelação", "Liberdade"]
},
{
    numero: 17,
    nome: "A Estrela",
    descricao: "Uma mulher nua despejando água de duas jarras em um lago.",
    elemento: "Água",
    significado: "Esperança, renovação, inspiração, fé.",
    interpretacoes: ["Cura", "Renovação", "Beleza", "Guias espirituais"]
},
{
    numero: 18,
    nome: "A Lua",
    descricao: "Uma mulher caminhando entre dois cães, com a lua ao fundo.",
    elemento: "Água",
    significado: "Intuição, subconsciente, ilusões, emoções, medos.",
    interpretacoes: ["Sonhos", "Inconsciente", "Medos", "Ilusões"]
},
{
  numero: 19,
  nome: "O Sol",
  descricao: "Uma criança em um carro, com um girassol.",
  elemento: "Fogo",
  significado: "Felicidade, sucesso, vitalidade, positividade.",
  interpretacoes: ["Vitória", "Alegria", "Iluminação", "Realização"]
},
{
  numero: 20,
  nome: "O Julgamento",
  descricao: "Um anjo tocando uma trombeta, enquanto pessoas emergem de túmulos.",
  elemento: "Ar",
  significado: "Renovação, renascimento, despertar espiritual, autoanálise.",
  interpretacoes: ["Segunda chance", "Transformação", "Consciência", "Julgamento interior"]
},
{
  numero: 21,
  nome: "O Mundo",
  descricao: "Uma mulher nua dentro de uma coroa de louros, segurando um bastão e um cetro.",
  elemento: "Terra",
  significado: "Completude, realização, sucesso, ciclos, viagens.",
  interpretacoes: ["Conquista", "Universo", "Ciclo completo", "Realização"]
}
];