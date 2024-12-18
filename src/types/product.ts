export interface Product {
    name: string;
    model: string;
    originalPrice: number;
    price: number;
    description: string;
    type: string;
    modelNumber: string;
    reviews: number;
    rating: number;
    colors: {
      name: string;
      hex: string;
      image: string;
    }[];
    sizes: {
      label: string;
      price: number;
    }[];
  }
  
  