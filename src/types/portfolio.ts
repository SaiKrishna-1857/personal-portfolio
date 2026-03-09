export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  title: string;
  location: string;
  duration: string;
  logo: string;
  bullets: string[];
};

export type ProjectItem = {
  title: string;
  image: string;
  description: string;
  highlights?: string[];
  link: string;
  tags: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  date: string;
  logo: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type SocialItem = {
  label: string;
  href: string;
};
