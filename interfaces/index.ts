export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;  
  },
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description?: string;
  reviews?: any
}


export interface Review {
  name: string;
  avatar: string;
  rating:number;
  comment: string
  date: string;
}