export type SubscriptionProperty = {
  description: string;
  includes: boolean;
  id: string;
};

export type Subscription = {
  id: string;
  priceCents: number;
  description: string;
  properties: SubscriptionProperty[];
};
