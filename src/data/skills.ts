import type { Skill } from "../types";

export const skills: Skill[] = [
  // Backend
  { name: "Node.js", category: "Backend", proficiency: 95 },
  { name: "TypeScript", category: "Backend", proficiency: 90 },
  { name: "NestJS", category: "Backend", proficiency: 85 },
  { name: "Express", category: "Backend", proficiency: 95 },
  { name: "PHP", category: "Backend", proficiency: 75 },
  { name: "Laravel", category: "Backend", proficiency: 80 },

  // Database
  { name: "MongoDB", category: "Database", proficiency: 90 },
  { name: "MySQL", category: "Database", proficiency: 85 },
  { name: "PostgreSQL", category: "Database", proficiency: 75 },

  // Frontend
  { name: "React", category: "Frontend", proficiency: 80 },
  { name: "Next.js", category: "Frontend", proficiency: 70 },
  { name: "HTML/CSS", category: "Frontend", proficiency: 85 },

  // DevOps
  { name: "Docker", category: "DevOps", proficiency: 75 },
  { name: "CI/CD", category: "DevOps", proficiency: 80 },
  { name: "Git", category: "DevOps", proficiency: 90 },
  { name: "Linux", category: "DevOps", proficiency: 80 },

  // Architecture
  { name: "Microservices", category: "Architecture", proficiency: 90 },
  { name: "Modular Architecture", category: "Architecture", proficiency: 90 },
  { name: "REST API Design", category: "Architecture", proficiency: 95 },

  // Practices
  { name: "Security Hardening", category: "Practices", proficiency: 85 },
  { name: "Unit Testing", category: "Practices", proficiency: 85 },
  { name: "Integration Testing", category: "Practices", proficiency: 80 },
  { name: "SOLID Principles", category: "Practices", proficiency: 85 },
];
