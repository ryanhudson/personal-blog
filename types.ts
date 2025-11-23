export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Markdown content
  tags: string[];
  coverImage?: string;
  readTime: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}