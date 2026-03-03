export const PRICING_PLANS = [
  { id: 'starter', name: 'Starter', headshotCount: 40,  priceId: process.env.STRIPE_STARTER_PRICE_ID! },
  { id: 'pro',     name: 'Pro',     headshotCount: 120, priceId: process.env.STRIPE_PRO_PRICE_ID! },
  { id: 'team',    name: 'Team',    headshotCount: 300, priceId: process.env.STRIPE_TEAM_PRICE_ID! },
];
export type PricingPlan = typeof PRICING_PLANS[number];
