import type { NavItem } from "../types";

export const SECTION_IDS = {
  HERO: "hero",
  ABOUT: "about",
  SKILLS: "skills",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: `#${SECTION_IDS.ABOUT}` },
  { label: "Skills", href: `#${SECTION_IDS.SKILLS}` },
  { label: "Experience", href: `#${SECTION_IDS.EXPERIENCE}` },
  { label: "Projects", href: `#${SECTION_IDS.PROJECTS}` },
  { label: "Contact", href: `#${SECTION_IDS.CONTACT}` },
];

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/owoeye1321",
  LINKEDIN: "https://linkedin.com/in/owoeye-samuel",
  EMAIL: "mailto:Owoeye1321@gmail.com",
} as const;

export const THEME_KEY = "portfolio-theme";
