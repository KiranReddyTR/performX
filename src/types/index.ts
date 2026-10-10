export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  category: string;
  challenge: string;
  strategy: string;
  results: string;
  metrics: Metric[];
  services: string[];
  featured: boolean;
  imageColor: string; // brand gradient color for placeholder
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
  verified: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  tools: string[];
  icon: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}
