export interface LinkInfo {
  label: string;
  url: string;
}

export interface Basics {
  name: string;
  title: string;
  summary: string;
  location: string;
  fullAddress: string;
  email: string;
  phone: string;
  openTo: string[];
  links: LinkInfo[];
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  duration: string;
  location: string;
  bullets: string[];
}

export interface Achievement {
  id: string;
  metric: string;
  text: string;
  context: string;
  category: "wins" | "metrics" | "leadership" | "delivery";
}

export interface Project {
  title: string;
  stack: string[];
  bullets: string[];
  links: LinkInfo[];
  location?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  bullets: string[];
}

export interface ResumeData {
  basics: Basics;
  experience: Experience[];
  achievements: Achievement[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  certifications: string[];
  awards: string[];
  extra: string[];
}
