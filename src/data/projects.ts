import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Multitenant Microfinance Platform",
    description:
      "A scalable microfinance banking application with modular architecture enabling tenant isolation and shared service layers for core banking operations.",
    techStack: ["Node.js", "Express", "MongoDB", "Modular Architecture"],
    features: [
      "Multi-tenant client isolation with shared services",
      "Core banking: account management, loan processing, transactions",
      "Modular code structure for easy tenant onboarding",
      "Scalable infrastructure for growing financial operations",
    ],
    category: "Fintech",
  },
  {
    title: "Corporate Fintech Platform",
    description:
      "B2B financial services platform targeting the corporate market with RESTful API architecture for corporate account management and financial services.",
    techStack: ["Node.js", "Express", "RESTful APIs", "TypeScript"],
    features: [
      "B2B financial services and corporate account management",
      "Production-ready backend delivered in two-month sprint",
      "Established coding standards and team workflows",
      "Scalable API architecture for corporate clients",
    ],
    category: "Fintech",
  },
  {
    title: "Tax Automation System",
    description:
      "Government tax automation software that streamlined operations, improved compliance, and contributed to increased governmental revenue collection.",
    techStack: ["Node.js", "TypeScript", "Microservices", "PostgreSQL"],
    features: [
      "Resolved critical security vulnerability (70% security boost)",
      "Tax automation for government compliance",
      "Led team of 5 engineers in architecture and delivery",
      "Recovered mission-critical government database",
    ],
    category: "Government",
  },
  {
    title: "Real-Time Booking Engine",
    description:
      "High-traffic booking platform with real-time availability tracking, automated scheduling, and third-party integrations for payments and notifications.",
    techStack: ["Node.js", "Real-time Systems", "API Integration", "Redis"],
    features: [
      "Real-time booking and availability tracking",
      "Automated scheduling for high-traffic scenarios",
      "Payment processing and push notification integration",
      "Optimized for heavy concurrent load",
    ],
    category: "SaaS",
  },
  {
    title: "Real Estate Management Platform",
    description:
      "Scalable backend powering real estate transactions, property management workflows, and secure third-party platform integrations.",
    techStack: ["Node.js", "Express", "Mocha", "Security Protocols"],
    features: [
      "Real estate transaction processing and property management",
      "Secure APIs for third-party platform integration",
      "Data security protocols for sensitive property data",
      "SOLID principles and comprehensive unit testing",
    ],
    category: "Real Estate",
  },
  {
    title: "Loan Fintech Application",
    description:
      "End-to-end loan lifecycle management platform handling loan requests, disbursement, and repayment workflows with multi-platform support.",
    techStack: ["Laravel", "PHP", "JavaScript", "MySQL"],
    features: [
      "Complete loan lifecycle: request, disbursement, repayment",
      "Mobile and web platform integration via RESTful APIs",
      "High-availability architecture with optimized queries",
      "HR management module with automated candidate shortlisting",
    ],
    category: "Fintech",
  },
];
