import { Product } from '../types/product.ts';

export const smartWatch: Product = {
  name: "Classy Modern Smart watch",
  model: "Forerunner 290XT",
  originalPrice: 99.00,
  price: 79.00,
  type: "Watch",
  modelNumber: "Forerunner 290XT",
  reviews: 2,
  rating: 4.5,
  description: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
  colors: [
    { name: "Purple", hex: "#8B5CF6", image: "lg-a 3.png" },
    { name: "Cyan", hex: "#1FCEC9", image: "cyan.png" },
    { name: "White", hex: "#4B97D3", image: "blue.png" },
    { name: "Black", hex: "#000", image: "black.png" },
  ],
  sizes: [
    { label: "S", price: 69.00 },
    { label: "M", price: 79.00 },
    { label: "L", price: 89.00 },
    { label: "XL", price: 99.00 },
  ],
};

