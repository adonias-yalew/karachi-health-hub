import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  fullDescription?: string;
  benefits?: string[];
  duration?: string;
  price?: string;
}

export interface TeamMember {
  img: string;
  name: string;
  role: string;
  bio?: string;
  specialties?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image?: string;
  rating?: number;
}

export interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Condition {
  icon: LucideIcon;
  label: string;
}

export interface ProcessStep {
  step: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  featured: boolean;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  whatsapp?: string;
  mapUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  date: string;
  author: string;
  tags: string[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
  notes: string;
}
