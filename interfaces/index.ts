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
}

export interface Description extends PropertyProps {
  description: string;
}


export interface reviews{
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date?: string;
}