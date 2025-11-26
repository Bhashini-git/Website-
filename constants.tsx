import React from 'react';
import { Home, Armchair, PenTool, Hammer, Monitor, Building2, Coffee } from 'lucide-react';
import { Service, Project, Testimonial, BlogPost } from './types';

export const COMPANY_PHONE = "+91 98765 43210";
export const COMPANY_EMAIL = "design@merakiample.com";
export const COMPANY_ADDRESS = "123, Luxury Lane, Design District, Metropolis";

export const SERVICES: Service[] = [
  {
    id: 'res',
    title: 'Residential Interiors',
    description: 'Transforming houses into personalized sanctuaries with precision planning and aesthetic mastery.',
    image: 'https://picsum.photos/800/600?random=1',
    features: ['Luxury Bedrooms', 'Modern Living Rooms', 'Smart Wardrobes', 'False Ceilings']
  },
  {
    id: 'mod-kit',
    title: 'Modular Kitchens',
    description: 'Ergonomic, stylish, and highly functional culinary spaces tailored to your cooking habits.',
    image: 'https://picsum.photos/800/600?random=2',
    features: ['L-Shaped & Island', 'High-Gloss Finishes', 'Hettich Fittings', 'Space Optimization']
  },
  {
    id: 'comm',
    title: 'Commercial Interiors',
    description: 'Creating productive and brand-centric environments for offices, showrooms, and retail spaces.',
    image: 'https://picsum.photos/800/600?random=3',
    features: ['Office Layouts', 'Retail Showrooms', 'Restaurant Ambiance', 'Reception Areas']
  },
  {
    id: 'cnc',
    title: 'Custom CNC & Woodwork',
    description: 'Intricate designs and precise cutting for partitions, wall panels, and bespoke furniture.',
    image: 'https://picsum.photos/800/600?random=4',
    features: ['Jali Partitions', '3D Wall Panels', 'Custom Furniture', 'Laser Precision']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'The Azure Residence',
    category: 'Residential',
    location: 'Skyline Towers, Metro City',
    description: 'A complete 3BHK transformation focusing on minimalist aesthetics and maximize storage.',
    beforeImage: 'https://picsum.photos/800/600?random=5',
    afterImage: 'https://picsum.photos/800/600?random=6',
    duration: '4 Months',
    materials: ['Teak Wood', 'Italian Marble', 'PU Finish']
  },
  {
    id: 'p2',
    title: 'TechSpace Office',
    category: 'Commercial',
    location: 'Business Bay',
    description: 'Open-plan office design to foster collaboration, featuring biophilic elements.',
    beforeImage: 'https://picsum.photos/800/600?random=7',
    afterImage: 'https://picsum.photos/800/600?random=8',
    duration: '2 Months',
    materials: ['Glass', 'Aluminum', 'Acoustic Panels']
  },
  {
    id: 'p3',
    title: 'Zen Culinary Studio',
    category: 'Kitchen',
    location: 'Greenwood Estate',
    description: 'A chef-grade modular kitchen with automated fittings and matte black finishes.',
    afterImage: 'https://picsum.photos/800/600?random=9',
    duration: '6 Weeks',
    materials: ['Acrylic', 'Quartz Stone', 'Brass Accents']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'Homeowner',
    text: 'Meraki Ample transformed our chaotic space into a dream home. The 3D visualization was spot on with the final result.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Rahul Verma',
    role: 'CEO, TechStart',
    text: 'Professional, on-time, and high quality. The CNC work in our reception area is a conversation starter.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Dr. Alok Gupta',
    role: 'Clinic Owner',
    text: 'Excellent use of space and lighting. They understood the functional needs of my clinic perfectly.',
    rating: 4
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'How to Choose the Right Kitchen Layout',
    excerpt: 'L-shaped, U-shaped, or Island? Discover which layout maximizes efficiency for your home.',
    date: 'Oct 12, 2025',
    image: 'https://picsum.photos/800/600?random=10'
  },
  {
    id: 'b2',
    title: 'Best Wardrobe Designs for 2025',
    excerpt: 'From walk-ins to sliding doors, explore the latest trends in storage solutions.',
    date: 'Sep 28, 2025',
    image: 'https://picsum.photos/800/600?random=11'
  },
  {
    id: 'b3',
    title: 'The Psychology of Color in Interiors',
    excerpt: 'Why Ash Grey and White creates a sense of calm and precision in modern homes.',
    date: 'Sep 15, 2025',
    image: 'https://picsum.photos/800/600?random=12'
  }
];
