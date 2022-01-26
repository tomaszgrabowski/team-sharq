export type Ability = {
  name: string;
  text: string;
  type: string;
};

export type Attack = {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
};

export type Weakness = {
  type: string;
  value: string;
};

export type Resistance = {
  type: string;
  value: string;
};

export type Legalities = {
  unlimited: string;
  expanded: string;
  standard: string;
};

export type Images = {
  symbol: string;
  logo: string;
};

export type Set = {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Images;
};

export type Legalities2 = {
  unlimited: string;
  expanded: string;
  standard: string;
};

export type Images2 = {
  small: string;
  large: string;
};

export type Holofoil = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
};

export type ReverseHolofoil = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow?: number;
};

export type Normal = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
};

export type firstEditionHolofoil = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow?: number;
};

export type UnlimitedHolofoil = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow?: number;
};

export type Prices = {
  holofoil: Holofoil;
  reverseHolofoil: ReverseHolofoil;
  normal: Normal;
  firstEditionHolofoil: firstEditionHolofoil;
  unlimitedHolofoil: UnlimitedHolofoil;
};

export type Tcgplayer = {
  url: string;
  updatedAt: string;
  prices: Prices;
};

export type Prices2 = {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
  reverseHoloSell?: number;
};

export type Cardmarket = {
  url: string;
  updatedAt: string;
  prices: Prices2;
};

export type Datum = {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Ability[];
  attacks: Attack[];
  weaknesses: Weakness[];
  resistances: Resistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities2;
  images: Images2;
  tcgplayer: Tcgplayer;
  cardmarket: Cardmarket;
  evolvesTo: string[];
  flavorText: string;
  rules: string[];
  regulationMark: string;
};

export type ApiResponse = {
  data: Datum[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
};
