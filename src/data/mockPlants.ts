import type { Plant } from '../types/plant';

export const mockPlants: Plant[] = [
  {
    id: '1',
    commonName: 'Camomila',
    scientificName: 'Matricaria chamomilla',
    imageUrl: 'https://picsum.photos/seed/camomila/120/150',
    properties: [
      'Calmante e ansiolítico',
      'Anti-inflamatório',
      'Antiespasmódico digestivo',
      'Cicatrizante tópico',
    ],
    sideEffects: [
      'Reações alérgicas em alérgicos a asteráceas',
      'Sonolência em doses elevadas',
      'Interação com anticoagulantes',
    ],
    description:
      'A camomila é uma das plantas medicinais mais antigas e populares do mundo. Rica em flavonoides como a apigenina, é amplamente utilizada para tratar ansiedade, insônia leve, cólicas e inflamações gastrointestinais.',
    origin: 'Europa e Ásia Ocidental; amplamente cultivada no Brasil',
    preparation:
      'Infusão: 1 colher de chá das flores secas em 150 ml de água quente por 5–10 minutos. Tomar 2 a 3 xícaras por dia.',
  },
  {
    id: '2',
    commonName: 'Hortelã-pimenta',
    scientificName: 'Mentha piperita',
    imageUrl: 'https://picsum.photos/seed/hortela/120/150',
    properties: [
      'Digestiva e carminativa',
      'Analgésico local (mentol)',
      'Antiespasmódico',
      'Antimicrobiano',
    ],
    sideEffects: [
      'Irritação da mucosa gástrica em excesso',
      'Contraindicada para crianças menores de 2 anos (mentol)',
      'Pirose em pacientes com refluxo',
    ],
    description:
      'A hortelã-pimenta é valorizada pelo alto teor de mentol em suas folhas. Atua na digestão, alivia náuseas, cefaleia tensional e congestão nasal. O óleo essencial é amplamente utilizado em formulações farmacêuticas e cosméticas.',
    origin: 'Híbrido natural originário da Europa; cultivado mundialmente',
    preparation:
      'Infusão: 5 a 7 folhas frescas ou 1 colher de sopa de folhas secas em 200 ml de água quente por 10 minutos. Inalar o vapor para descongestionamento.',
  },
  {
    id: '3',
    commonName: 'Erva-cidreira',
    scientificName: 'Melissa officinalis',
    imageUrl: 'https://picsum.photos/seed/cidreira/120/150',
    properties: [
      'Ansiolítico e sedativo leve',
      'Antiviral (herpes labial)',
      'Carminativo',
      'Antioxidante',
    ],
    sideEffects: [
      'Sonolência em doses altas',
      'Pode reduzir absorção da tiroxina',
      'Interação com medicamentos sedativos',
    ],
    description:
      'A erva-cidreira, com seu aroma suave de limão, é tradicional no tratamento de ansiedade, insônia e distúrbios digestivos. Estudos indicam ação antiviral contra o vírus herpes simplex em aplicação tópica.',
    origin: 'Europa e Mediterrâneo; amplamente cultivada no Brasil',
    preparation:
      'Infusão: 2 colheres de sopa de folhas frescas em 200 ml de água quente por 10 minutos. Tomar 1 xícara à noite antes de dormir.',
  },
  {
    id: '4',
    commonName: 'Gengibre',
    scientificName: 'Zingiber officinale',
    imageUrl: 'https://picsum.photos/seed/gengibre/120/150',
    properties: [
      'Antiemético (náuseas e enjoos)',
      'Anti-inflamatório potente',
      'Termogênico',
      'Imunomodulador',
    ],
    sideEffects: [
      'Irritação gástrica em estômago vazio',
      'Aumenta risco de sangramento em anticoagulados',
      'Contraindicado em cálculos biliares',
    ],
    description:
      'O gengibre é um rizoma com ampla utilização medicinal e culinária. Seus compostos ativos, gingeróis e shogaóis, conferem potente ação anti-inflamatória e antiemética. Indicado para enjoos de gravidez, enjoo de movimento e suporte imunológico.',
    origin: 'Sudeste Asiático; amplamente cultivado em regiões tropicais',
    preparation:
      'Decocção: fatiar 2 cm do rizoma fresco em 300 ml de água, ferver por 10 minutos. Adicionar mel e limão. Tomar 2 xícaras ao dia.',
  },
  {
    id: '5',
    commonName: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    imageUrl: 'https://picsum.photos/seed/aloevera/120/150',
    properties: [
      'Cicatrizante e emoliente',
      'Anti-inflamatório tópico',
      'Hidratante cutâneo',
      'Laxante suave (látex)',
    ],
    sideEffects: [
      'Látex: irritante intestinal forte, contraindicado em gravidez',
      'Reações alérgicas de contato em pele sensível',
      'Uso interno prolongado pode causar hipocalemia',
    ],
    description:
      'O aloe vera é uma suculenta com gel translúcido rico em mucopolissacarídeos, vitaminas e minerais. Amplamente usado em queimaduras, irritações cutâneas e cuidados com a pele. O uso interno do gel (sem látex) tem propriedades digestivas e imunomoduladoras.',
    origin: 'Península Arábica; cultivado em todo o mundo',
    preparation:
      'Tópico: aplicar o gel fresco diretamente na área afetada 2–3 vezes ao dia. Interno: 30 ml do gel puro (sem látex) diluído em água, uma vez ao dia.',
  },
  {
    id: '6',
    commonName: 'Lavanda',
    scientificName: 'Lavandula angustifolia',
    imageUrl: 'https://picsum.photos/seed/lavanda/120/150',
    properties: [
      'Ansiolítico e relaxante',
      'Antibacteriano e antifúngico',
      'Analgésico suave',
      'Cicatrizante tópico',
    ],
    sideEffects: [
      'Leve sonolência em aromaterapia intensa',
      'Raro: irritação cutânea em pele sensível',
      'Óleo essencial puro pode ser tóxico se ingerido',
    ],
    description:
      'A lavanda é conhecida mundialmente por seu aroma floral e propriedades calmantes. O linalol e o acetato de linalilo são os principais componentes bioativos. Muito utilizada em aromaterapia para ansiedade, insônia e cefaleia.',
    origin: 'Mediterrâneo; amplamente cultivada na Europa e Brasil',
    preparation:
      'Aromaterapia: 5–8 gotas de óleo essencial no difusor. Infusão: 1 colher de chá de flores secas em 200 ml de água quente por 10 minutos.',
  },
  {
    id: '7',
    commonName: 'Equinácea',
    scientificName: 'Echinacea purpurea',
    imageUrl: 'https://picsum.photos/seed/echinacea/120/150',
    properties: [
      'Imunoestimulante',
      'Antiviral (resfriados e gripes)',
      'Anti-inflamatório',
      'Cicatrizante',
    ],
    sideEffects: [
      'Contraindicada em doenças autoimunes',
      'Uso contínuo acima de 8 semanas pode reduzir eficácia',
      'Reações alérgicas em alérgicos a asteráceas',
    ],
    description:
      'A equinácea é amplamente estudada por sua capacidade de estimular o sistema imunológico. Reduz a duração e a gravidade de resfriados e infecções do trato respiratório superior. Age principalmente ativando macrófagos e linfócitos T.',
    origin: 'América do Norte; cultivada mundialmente',
    preparation:
      'Tintura: 2,5 ml diluídos em água, 3 vezes ao dia por no máximo 8 semanas. Cápsula: 300–500 mg do extrato seco, conforme orientação profissional.',
  },
  {
    id: '8',
    commonName: 'Valeriana',
    scientificName: 'Valeriana officinalis',
    imageUrl: 'https://picsum.photos/seed/valeriana/120/150',
    properties: [
      'Sedativo e hipnótico suave',
      'Ansiolítico',
      'Antiespasmódico muscular',
      'Reduz latência do sono',
    ],
    sideEffects: [
      'Sonolência residual pela manhã',
      'Náuseas e desconforto gástrico',
      'Potencializa efeitos de sedativos e álcool',
    ],
    description:
      'A valeriana é uma das plantas sedativas mais estudadas. O ácido valerênico atua nos receptores GABA, promovendo relaxamento e melhora na qualidade do sono. Indicada para insônia leve, ansiedade e tensão muscular.',
    origin: 'Europa e Ásia; cultivada amplamente',
    preparation:
      'Infusão: 1 colher de chá da raiz seca em 200 ml de água quente por 10 minutos. Tomar 30–60 minutos antes de dormir.',
  },
];

export function searchPlants(query: string): Plant[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return mockPlants.filter(
    (p) =>
      p.commonName.toLowerCase().includes(q) ||
      p.scientificName.toLowerCase().includes(q) ||
      p.properties.some((prop) => prop.toLowerCase().includes(q))
  );
}
