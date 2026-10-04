export interface Restaurant {
  name: string;
  marathiName: string;
  tagline: string;
  address: string;
  phone: string;
  phoneLink: string;
  googleMapsUrl: string;
  rating: number;
  reviewCount: number;
}

export interface Dish {
  name: string;
  tag: string;
  category: string;
}

export interface MenuItem {
  name: string;
  category: string;
}

export interface Feature {
  title: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
