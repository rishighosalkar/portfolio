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
    github: "https://github.com/rishighosalkar",
    highlights: [
      "Saga pattern for distributed transaction management",
      "Event sourcing with CQRS for order state management",
      "Redis caching layer reducing DB load by 60%",
      "Containerized microservices with Docker Compose",
    ],
    category: [".NET", "Microservices"],
  },
  {
    id: "chunkstream",
    title: "ChunkStream — Large File Uploads to S3",
    description:
      "A resilient, chunked file upload system for handling large files to AWS S3. Splits files into configurable chunks, uploads in parallel with retry logic, and reassembles on the server side.",
    techStack: [".NET", "C#", "AWS S3", "React", "TypeScript"],
    github: "https://github.com/rishighosalkar",
    highlights: [
      "Multipart chunked uploads with configurable chunk size",
      "Parallel upload with automatic retry on failure",
      "Server-side reassembly and S3 multipart upload API integration",
      "Progress tracking and resumable upload support",
    ],
    category: [".NET", "React", "AWS"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Cornerstone OnDemand — Mumbai, India",
    role: "Software Engineer",
    period: "Oct 2024 – Present",
    description:
      "Building serverless data pipelines and microservices for enterprise talent management at scale.",
    achievements: [
      "Designed and implemented serverless AWS Lambda functions in .NET to replicate and rehydrate DynamoDB Streams into S3, enabling reliable disaster recovery and distributed data pipelines",
      "Built and enhanced microservice-based REST APIs using ASP.NET Core and C#, improving scalability and maintainability across production services",
      "Designed custom ASP.NET Core middleware for distributed tracing and runtime request instrumentation, reducing mean-time-to-resolve production issues",
      "Identified and remediated Docker image and open-source security vulnerabilities, strengthening cloud-native application security posture",
      "Analyzed and resolved SAST/SCA-reported vulnerabilities (Black Duck) by upgrading vulnerable transitive dependencies and enforcing secure package management",
      "Performed root cause analysis on production-critical client incidents and implemented permanent fixes, reducing recurring issue rate",
      "Collaborated in Agile/Scrum teams — decomposing epics, estimating stories, and consistently delivering sprint commitments",
    ],
    techStack: ["C#", ".NET", "AWS Lambda", "DynamoDB", "S3", "Docker", "ASP.NET Core"],
  },
  {
    company: "Diebold Nixdorf — Mumbai, India",
    role: "Software Development Engineer",
    period: "Apr 2024 – Oct 2024",
    description:
      "Developed test automation frameworks for ATM and POS systems with a focus on concurrency and performance.",
    achievements: [
      "Developed a multithreaded test automation framework for ATM and POS systems using .NET Core and C#, enabling concurrent execution and supporting performance-critical test scenarios",
      "Optimised application responsiveness and throughput under high-concurrency workloads, improving overall system reliability and execution efficiency",
    ],
    techStack: ["C#", ".NET Core", "Multithreading", "Test Automation"],
  },
  {
    company: "Accenture — Mumbai, India",
    role: "Software Engineering Analyst",
    period: "Aug 2021 – Apr 2024",
    description:
      "Designed and maintained RESTful APIs and microservices for enterprise-scale clients across distributed architectures.",
    achievements: [
      "Designed, developed, and maintained RESTful APIs using ASP.NET Core and C# within distributed microservices architectures",
      "Implemented rate limiting and in-memory/distributed caching strategies, significantly improving API scalability and reducing latency",
      "Built secure APIs with OAuth2-based authentication and authorization, ensuring regulatory compliance",
      "Designed and optimised Oracle SQL stored procedures, improving backend data processing efficiency",
      "Enhanced frontend performance and state management using React and Redux, reducing render latency",
      "Mentored junior developers on SOLID principles, clean architecture, and code review best practices",
    ],
    techStack: ["C#", "ASP.NET Core", "React", "Redux", "Oracle SQL", "OAuth2"],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Saga Pattern in Microservices",
    description: "Deep dive into orchestrating distributed transactions using the Saga pattern with practical .NET examples.",
    url: "https://medium.com/@rushikeshghosalkar023",
    tags: ["Microservices", ".NET"],
  },
  {
    title: "CQRS: Beyond the Basics",
    description: "Implementing Command Query Responsibility Segregation with MediatR and Event Sourcing in production systems.",
    url: "https://medium.com/@rushikeshghosalkar023",
    tags: ["Architecture", "CQRS"],
  },
  {
    title: "Strangler Fig Pattern",
    description: "A practical guide to incrementally migrating legacy monoliths to microservices without downtime.",
    url: "https://medium.com/@rushikeshghosalkar023",
    tags: ["Microservices", "Migration"],
  },
  {
    title: "System Design: URL Shortener",
    description: "Designing a scalable URL shortening service — from requirements gathering to database sharding strategies.",
    url: "https://medium.com/@rushikeshghosalkar023",
    tags: ["System Design"],
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/rishighosalkar",
  linkedin: "https://linkedin.com/in/rushikesh-ghosalkar-4a364819a",
  medium: "https://medium.com/@rushikeshghosalkar023",
  email: "rushikeshghosalkar023@gmail.com",
};

export const PROJECT_FILTERS = ["All", ".NET", "React", "AWS", "Microservices"];
