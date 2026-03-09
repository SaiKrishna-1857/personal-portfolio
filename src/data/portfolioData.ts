import resumeFile from "../assets/SaiKrishna-Sangeetha-Resume.pdf";
import profileImage from "../assets/profilePicture.jpg";
import ceburuLogo from "../assets/ceburuLogo.png";
import agwiseLogo from "../assets/agwise-logo.png";
import ucfLogo from "../assets/ucf-main-logo.png";
import freshworksLogo from "../assets/freshworks-logo-white.png";
import sastraLogo from "../assets/sastra-logo.png";
import chatbotImage from "../assets/ChatBot.png";
import deepNnImage from "../assets/deep-nn.png";
import nlpProjectImage from "../assets/nlp-project.png";
import cacheSimulatorImage from "../assets/cache-simulator.png";
import onlineWorkersImage from "../assets/CV-project.png";
import { EducationItem, ExperienceItem, MetricItem, NavItem, ProjectItem, SkillCategory, SocialItem } from "../types/portfolio";

export const navItems: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "Summary", href: "#summary" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Papers", href: "#papers" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const metrics: MetricItem[] = [
  { value: "6+", label: "Years of full-stack SaaS engineering experience" },
  { value: "React + Python", label: "Core stack across frontend architecture and platform APIs" },
  { value: "Distributed Systems", label: "Focus area: observability, async pipelines, and cloud-native delivery" },
];

export const professionalSummary: string[] = [
  "Senior Full-Stack Developer with 6+ years building production SaaS platforms using React, TypeScript, Python (Django/FastAPI), and AWS.",
  "I lead end-to-end delivery across frontend architecture, backend/platform APIs, and distributed cloud systems for high-scale products.",
  "Targeting Senior Full-Stack roles where I can drive system design, ship customer-facing features, and own reliability/performance in production.",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    items: [
      "React.js",
      "TypeScript",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "React Flow",
    ],
  },
  {
    title: "Backend Engineering",
    items: ["Python", "Django", "FastAPI", "Golang", "GraphQL", "Microservices", "Redis", "Celery"],
  },
  {
    title: "AI/Data Systems",
    items: [
      "Anomaly Detection Pipelines",
      "Isolation Forest",
      "Semantic Autoencoders",
      "LLM-based Automation",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CodePipeline",
      "Kafka",
      "Temporal",
    ],
  },
  {
    title: "Observability",
    items: [
      "Open Telemetry",
      "Elasticsearch",
      "Kibana",
      "Fluent Bit",
      "Prometheus",
    ],
  },
  {
    title: "Data, Security & Reliability",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLAlchemy",
      "OAuth 2.0",
      "JWT",
      "SAML",
      "RBAC",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Ceburu Systems Inc.",
    title: "Senior Software Developer",
    location: "Pleasanton, CA (Remote)",
    duration: "Oct 2024 - Present",
    logo: ceburuLogo,
    bullets: [
      "Architected a distributed observability platform for logs, metrics, traces, and network telemetry with OpenTelemetry, Kafka, Logstash, and Elasticsearch.",
      "Built Go-based edge telemetry agents (Linux/Windows) with secure enrollment, version control, and health monitoring.",
      "Delivered high-throughput streaming pipelines for millions of telemetry events/day with replay and backpressure control.",
      "Implemented AI anomaly detection pipelines on S3 log data using Isolation Forest and semantic autoencoder models.",
      "Shipped React + React Flow service topology visualization for real-time dependency mapping.",
      "Built Django + Elasticsearch DSL analytics APIs with KQL-style search and distributed query execution.",
      "Implemented multi-tenant RBAC and enterprise IPAM workflows for secure network/resource control.",
      "Integrated ServiceNow pipelines via REST/Webhooks and reduced manual ops effort by 40%.",
      "Led a team of 5 engineers across architecture, code reviews, and multi-release delivery.",
    ],
  },
  {
    company: "AgWise LLC",
    title: "Senior Software Developer",
    location: "St. Petersburg, FL",
    duration: "Mar 2024 - Sep 2024",
    logo: agwiseLogo,
    bullets: [
      "Led full-stack development of a cloud-native AgTech platform using React, Django, and MySQL.",
      "Architected ingestion pipelines for soil/tissue/agronomic inputs enabling automated recommendation workflows.",
      "Designed serverless ETL pipelines with AWS Lambda + Step Functions, increasing platform revenue by 30%.",
      "Migrated REST endpoints to GraphQL and reduced average response latency by up to 85%.",
      "Built responsive React interfaces with Redux/Router and improved maintainability/performance.",
      "Integrated Stripe and Mapbox for subscription workflows and location-aware analytics.",
      "Implemented Docker/Kubernetes deployments with AWS CodePipeline for reliable zero-downtime releases.",
      "Improved load performance by 25% through query tuning, caching, and state-management optimization.",
    ],
  },
  {
    company: "University of Central Florida (CECS)",
    title: "Graduate Research Assistant",
    location: "Orlando, FL",
    duration: "Jan 2024 - May 2024",
    logo: ucfLogo,
    bullets: [
      "Built responsive real-time React interfaces with dynamic search and optimized GraphQL data fetching.",
      "Conducted JML research under Prof. Gary T. Leavens on formal specifications and runtime assertion checking.",
    ],
  },
  {
    company: "Freshworks Inc.",
    title: "Software Development Engineer",
    location: "Chennai, India",
    duration: "Jan 2019 - Jul 2022",
    logo: freshworksLogo,
    bullets: [
      "Engineered scalable backend services for a high-traffic multi-tenant HR SaaS platform using Python, Django, REST APIs, and Redis.",
      "Designed and deployed 45+ serverless APIs with AWS Lambda + API Gateway for elastic scaling and high availability.",
      "Architected event-driven microservices using Kafka for candidate updates, onboarding, and notification workflows.",
      "Implemented fault-tolerant async pipelines using Redis-backed job queues for imports, notifications, and reporting.",
      "Refactored monolith services into modular microservices, improving maintainability and observability.",
      "Designed AWS EC2/S3/CloudFront infrastructure to support 10x peak traffic growth.",
      "Improved frontend responsiveness by 40% through lazy loading, client-side caching, and background processing.",
      "Built data-intensive HR analytics dashboards with incremental rendering and async API orchestration.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "GPT-Powered Chatbot",
    image: chatbotImage,
    description:
      "Built a full-stack AI chatbot with React + FastAPI, prompt orchestration, response streaming, Redis caching, and PostgreSQL persistence.",
    highlights: [
      "Integrated OpenAI GPT models with conversation history management and prompt structuring.",
      "Implemented Redis-based caching and session handling for lower latency and concurrency support.",
      "Designed asynchronous backend workflows to support high-volume chat interactions.",
    ],
    link: "https://github.com/SaiKrishna-1857/GPT-Powered-ChatBot",
    tags: ["React", "FastAPI", "OpenAI", "Redis", "PostgreSQL"],
  },
  {
    title: "Online Workers Hiring System",
    image: onlineWorkersImage,
    description:
      "Designed and implemented a workforce management platform for onboarding, job postings, task delegation, and role-based workflow tracking.",
    highlights: [
      "Built modular frontend components and dynamic forms for real-time job assignment workflows.",
      "Implemented secure authentication and role-based access for administrators and workforce teams.",
    ],
    link: "https://github.com/SaiKrishna-1857",
    tags: ["Web App", "RBAC", "Workflow Automation"],
  },
  {
    title: "Deep Neural Network Compression",
    image: deepNnImage,
    description:
      "Developed a CNN compression framework with explainability-guided pruning and transfer learning, reducing model size by 90% while maintaining 83% accuracy.",
    highlights: [
      "Evaluated pruning strategies across multiple CNN architectures for performance-efficiency tradeoffs.",
      "Enabled deployment of deep learning models on resource-constrained edge devices.",
    ],
    link: "https://github.com/SaiKrishna-1857/ML-Deep-Neural-Networks",
    tags: ["Deep Learning", "CNN", "Model Compression"],
  },
  {
    title: "Abusive Comments Identification",
    image: nlpProjectImage,
    description:
      "Built a multilingual abusive-content classifier using BERT (MURIL) with preprocessing pipelines and achieved 81% classification accuracy.",
    highlights: [
      "Designed multilingual text normalization and tokenization pipelines to improve model quality.",
      "Enabled automated moderation workflows across multilingual social media datasets.",
    ],
    link: "https://github.com/SaiKrishna-1857/NLP-Abusive-Comments-Identification",
    tags: ["NLP", "BERT", "MURIL"],
  },
  {
    title: "Cache Simulator",
    image: cacheSimulatorImage,
    description:
      "Developed a configurable cache simulator for L1 sizing and associativity analysis; reduced miss rate by 45% and improved access time by 30%.",
    highlights: [
      "Implemented multiple cache replacement policies and analyzed their impact on AAT.",
      "Identified Optimal Replacement as most effective for 32KB cache configuration.",
    ],
    link: "https://github.com/SaiKrishna-1857/Cache-Simulator",
    tags: ["Systems", "Performance", "Java"],
  },
];

export const education: EducationItem[] = [
  {
    school: "University of Central Florida",
    degree: "M.S. in Computer Science",
    location: "Orlando, FL, USA",
    date: "May 2024",
    logo: ucfLogo,
  },
  {
    school: "SASTRA University",
    degree: "B.Tech in Information Technology",
    location: "Thanjavur, Tamil Nadu, India",
    date: "May 2019",
    logo: sastraLogo,
  },
];

export const certifications: string[] = [
  "Angular Certification (HackerRank) - 2024",
  "AWS Certified Solutions Architect - Associate - 2023",
  "Responsive Web Design (freeCodeCamp) - 2023",
  "Agile Project Management & Agile Project Delivery (Udemy) - 2021",
  "Java (Intermediate) Certification (HackerRank) - 2020",
];

export const systemDesignItems: string[] = [
  "Distributed log processing pipelines",
  "Event-driven microservices architecture",
  "AI-driven anomaly detection systems",
  "Multi-tenant SaaS platform architecture",
  "Observability platforms and telemetry pipelines",
];

export const publishedPapers: { title: string; summary: string }[] = [
  {
    title: "Various Dynamic Programming Methods to Solve Optimization Problems",
    summary:
      "Explores optimization techniques including Longest Common Subsequence and Floyd-Warshall, with focus on optimal substructure and overlapping subproblems.",
  },
];

export const achievements: string[] = [
  'Awarded "Will it Make the Boat Go Faster" at Freshworks.',
  "Awarded Annual Sprint Champion 2020 at Freshworks.",
  "Top 5 in Freshworks Hackathon.",
  "First place in Business Idea Presentation at SASTRA University E-Cell.",
];

export const socialLinks: SocialItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saikrishna-sangeetha" },
  { label: "GitHub", href: "https://github.com/SaiKrishna-1857" },
  { label: "Email", href: "mailto:saikrishna.sangeetha@gmail.com" },
];

export const assets = {
  resumeFile,
  profileImage,
};
