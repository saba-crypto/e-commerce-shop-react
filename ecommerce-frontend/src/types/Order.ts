import type { Product } from "./product";
export type OrderData = {
  orderId: string;
  orderDate: string;
  orderPriceCents: number;
  products: Product[];
};
