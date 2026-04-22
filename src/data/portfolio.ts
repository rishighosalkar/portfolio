import type { NavItem, SkillCategory, Project, Experience, BlogPost } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "C#" },
      { name: ".NET Core" },
      { name: "ASP.NET Web API" },
      { name: "Entity Framework Core" },
      { name: "SQL Server" },
      { name: "PostgreSQL" },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "AWS (Lambda, S3, SQS, SNS)" },
      { name: "Docker" },
      { name: "CI/CD Pipelines" },
      { name: "Azure DevOps" },
    ],
  },
  {
    title: "Architecture & Patterns",
    icon: "blocks",
    skills: [
      { name: "Microservices" },
      { name: "CQRS" },
      { name: "Event-Driven Architecture" },
      { name: "Design Patterns" },
      { name: "Domain-Driven Design" },
      { name: "System Design" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "order-processing",
    title: "Distributed Order Processing System",
    description:
      "A high-throughput, event-driven order processing platform built with microservices architecture. Handles order lifecycle from placement to fulfillment with saga-based distributed transactions.",
    techStack: [".NET", "C#", "RabbitMQ", "PostgreSQL", "Docker", "Redis"],
    github: "https://github.com/rushikeshghosalkar",
    highlights: [
      "Saga pattern for distributed transaction management",
      "Event sourcing with CQRS for order state management",
      "Redis caching layer reducing DB load by 60%",
      "Containerized microservices with Docker Compose",
    ],
    category: [".NET", "Microservices"],
  },
  {
    id: "nlp-analyzer",
    title: "NLP Text Analysis Engine",
    description:
      "An intelligent text analysis application leveraging NLP techniques for sentiment analysis, entity extraction, and document summarization.",
    techStack: ["Python", ".NET", "React", "TypeScript", "AWS Lambda"],
    github: "https://github.com/rushikeshghosalkar",
    highlights: [
      "Real-time sentiment analysis pipeline",
      "REST API with .NET backend orchestration",
      "React dashboard with interactive visualizations",
      "Serverless processing with AWS Lambda",
    ],
    category: ["AI", ".NET", "React"],
  },
  {
    id: "ecommerce-platform",
    title: "Microservices E-Commerce Platform",
    description:
      "A scalable e-commerce backend demonstrating clean architecture principles with independently deployable services for catalog, cart, identity, and payment.",
    techStack: [".NET", "React", "AWS", "SQL Server", "Docker", "MediatR"],
    github: "https://github.com/rushikeshghosalkar",
    highlights: [
      "Clean Architecture with CQRS using MediatR",
      "API Gateway pattern with Ocelot",
      "JWT-based authentication & authorization",
      "Automated CI/CD with GitHub Actions",
    ],
    category: [".NET", "React", "Microservices"],
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    description:
      "A SignalR-powered real-time messaging application with group chats, typing indicators, and message persistence.",
    techStack: [".NET", "SignalR", "React", "TypeScript", "Redis"],
    github: "https://github.com/rushikeshghosalkar",
    highlights: [
      "WebSocket communication via SignalR",
      "Redis pub/sub for horizontal scaling",
      "React frontend with optimistic UI updates",
      "Message history with infinite scroll",
    ],
    category: [".NET", "React"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Cornerstone OnDemand",
    role: ".NET Full Stack Developer",
    period: "Present",
    description:
      "Building and maintaining enterprise-scale talent management solutions serving millions of users globally. Working across the full stack with .NET backend services and modern frontend technologies.",
    achievements: [
      "Developed microservices handling 10K+ requests/min with .NET and AWS",
      "Led migration of legacy monolith modules to event-driven microservices",
      "Implemented CQRS pattern reducing query response times by 40%",
      "Built React-based admin dashboards improving internal team productivity",
      "Collaborated with cross-functional teams across global offices",
    ],
    techStack: ["C#", ".NET", "React", "TypeScript", "AWS", "SQL Server"],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Saga Pattern in Microservices",
    description: "Deep dive into orchestrating distributed transactions using the Saga pattern with practical .NET examples.",
    url: "https://medium.com/@rushikeshghosalkar",
    tags: ["Microservices", ".NET"],
  },
  {
    title: "CQRS: Beyond the Basics",
    description: "Implementing Command Query Responsibility Segregation with MediatR and Event Sourcing in production systems.",
    url: "https://medium.com/@rushikeshghosalkar",
    tags: ["Architecture", "CQRS"],
  },
  {
    title: "Strangler Fig Pattern",
    description: "A practical guide to incrementally migrating legacy monoliths to microservices without downtime.",
    url: "https://medium.com/@rushikeshghosalkar",
    tags: ["Microservices", "Migration"],
  },
  {
    title: "System Design: URL Shortener",
    description: "Designing a scalable URL shortening service — from requirements gathering to database sharding strategies.",
    url: "https://medium.com/@rushikeshghosalkar",
    tags: ["System Design"],
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/rushikeshghosalkar",
  linkedin: "https://linkedin.com/in/rushikeshghosalkar",
  medium: "https://medium.com/@rushikeshghosalkar",
  email: "rushikesh.ghosalkar@example.com",
};

export const PROJECT_FILTERS = ["All", ".NET", "React", "AI", "Microservices"];
