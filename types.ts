export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  serviceRating?: number;
  foodRating?: number;
}

export interface BusinessInfo {
  name: string;
  hindiName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  plusCode: string;
  timings: string;
  phone: string;
  whatsapp: string;
  rating: number;
  reviewCount: number;
  googleMapUrl: string;
  socials: {
    instagram: string;
    facebook: string;
  };
}
