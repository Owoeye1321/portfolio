import type { Profile, Stat } from "../types";
import { SOCIAL_LINKS } from "../utils/constants";

export const profile: Profile = {
  name: "Samuel Owoeye",
  title: "Backend Engineer",
  summary:
    "Backend engineer with 4+ years of experience building scalable server-side applications across fintech, microfinance, government, and real estate domains. I have a proven track record of leading engineering teams, architecting multitenant systems, and securing critical infrastructure. I specialize in Node.js, TypeScript, and modular/microservices architecture with a strong focus on performance optimization and security hardening.",
  email: "Owoeye1321@gmail.com",
  phone: "+2349153464158",
  location: "Ikeja, Lagos, Nigeria",
  socialLinks: [
    { platform: "GitHub", url: SOCIAL_LINKS.GITHUB },
    { platform: "LinkedIn", url: SOCIAL_LINKS.LINKEDIN },
    { platform: "Email", url: SOCIAL_LINKS.EMAIL },
  ],
};

export const stats: Stat[] = [
  { value: "4+", label: "Years Experience" },
  { value: "7+", label: "Companies" },
  { value: "5+", label: "Engineers Led" },
  { value: "70%", label: "Security Boost" },
];

export const domains = [
  "Fintech",
  "Government",
  "Real Estate",
  "Microfinance",
];
