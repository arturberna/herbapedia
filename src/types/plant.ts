export interface Plant {
  id: string;
  commonName: string;
  scientificName: string;
  imageUrl: string;
  properties: string[];
  sideEffects: string[];
  description: string;
  origin: string;
  preparation: string;
  sourceUrl?: string;
}
