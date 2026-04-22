export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
  highlights: string[];
  category: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface BlogPost {
  title: string;
  description: string;
  url?: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
