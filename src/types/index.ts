export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "Full-time" | "Contract" | "Program";
  bullets: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  category: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number;
}

export type SkillCategory =
  | "Backend"
  | "Database"
  | "Frontend"
  | "DevOps"
  | "Architecture"
  | "Practices";

export interface SocialLink {
  platform: string;
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface Stat {
  value: string;
  label: string;
}
