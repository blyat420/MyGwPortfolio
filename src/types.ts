export type ProjectCategory = 'all' | 'ui-ux' | '3d-art' | 'creative-dev';

export interface ProjectMedia {
  id: string;
  url: string;
  caption: string;
  type: 'image' | 'render' | 'ui-screen';
  aspectRatio?: string;
}

export interface ProjectItem {
  id: string; // 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6'
  slug: string;
  title: string;
  subtitle: string;
  category: 'ui-ux' | '3d-art' | 'creative-dev';
  categoryLabel: string;
  year: string;
  client?: string;
  role: string;
  tools: string[];
  accentColor: string;
  glowColor: string;
  thumbnail: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  gallery: ProjectMedia[];
  liveUrl?: string;
  demoUrl?: string;
  figmaUrl?: string;
  hasInteractiveDemo?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  projectMentioned: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; iconName?: string }[];
}
