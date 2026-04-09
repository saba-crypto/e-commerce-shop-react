export type Product = {
  id: string;
  name: string;
  priceCents: number;
  gameDev: string;
  releaseDate: string;
  rating: number;
  image: string;
  type: string;
  //optional, mostly for orders
  quantity?: number;
  arrivalDate?: string;
  progressBarPercentage?: number;
  deliveryDays?: number;
};
