export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeImage?: string;
  afterImage: string;
  duration: string;
  materials: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
