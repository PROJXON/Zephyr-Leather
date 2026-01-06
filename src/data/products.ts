export type Product = {
  id: string; // your internal id / slug
  name: string;
  description: string;
  currency: "USD";
  stripePriceId: string; // Stripe Price ID (price_...)
};

export const products: Product[] = [
  {
    id: "leather-holster",
    name: "Leather Holster",
    description: "Premium leather holster for everyday carry.",
    currency: "USD",
    stripePriceId: "price_1SfL7KRez90EgJxfW4PMKOJl", // paste from Stripe
  },
  {
    id: "sunglasses-case",
    name: "Leather Sunglasses Case",
    description: "Durable leather case to protect your sunglasses.",
    currency: "USD",
    stripePriceId: "price_1SfL8lRez90EgJxfU2c1BqVG", // paste from Stripe
  },
  {
    id: "zlc-jacket",
    name: "ZLC Jacket",
    description: "Premium leather jacket.",
    currency: "USD",
    stripePriceId: "price_1Sf9NvRez90EgJxf1ryBkbAw",
  },
];

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);
