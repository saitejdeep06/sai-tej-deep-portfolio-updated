export type ProjectCategory = "AI" | "Full Stack" | "Real-Time" | "Data" | "Web";

export type FeaturedProject = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  categories: ProjectCategory[];
  stack: string[];
  features: string[];
  architecture: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ai-resume-builder",
    number: "01",
    title: "AI Resume Builder & Job Matcher",
    subtitle: "AI-powered career intelligence platform",
    description:
      "An AI-powered platform for creating resumes, receiving intelligent feedback, identifying skill gaps and matching candidates with job opportunities.",
    overview:
      "The platform combines a modern Next.js interface with a FastAPI backend, PostgreSQL persistence and AI-powered workflows. Resume information can be analyzed to generate feedback, identify missing skills and calculate job matching insights.",
    categories: ["AI", "Full Stack"],
    stack: [
      "Next.js",
      "FastAPI",
      "OpenAI API",
      "PostgreSQL",
      "LangChain",
      "FAISS",
      "Tailwind CSS",
      "Docker",
      "AWS EC2",
      "Nginx",
      "GitHub Actions",
    ],
    features: [
      "Resume upload and editing",
      "AI resume feedback",
      "Skill-gap analysis",
      "Job matching scores",
      "RAG-powered resume workflows",
      "JWT authentication and RBAC",
      "Candidate and recruiter access",
      "Rate limiting",
    ],
    architecture: [
      "Next.js frontend → FastAPI application layer",
      "FastAPI → PostgreSQL for application data",
      "Resume content → LangChain / FAISS retrieval workflow",
      "OpenAI API → AI feedback and matching intelligence",
      "Docker → application containerization",
      "AWS EC2 + Nginx → deployment layer",
      "GitHub Actions → CI/CD workflow",
    ],
  },
  {
    id: "ai-knowledge-assistant",
    number: "02",
    title: "AI Chat Assistant with Knowledge Base",
    subtitle: "Conversational enterprise knowledge system",
    description:
      "A knowledge-base assistant that allows users to upload documents and interact with company information through AI-powered conversations.",
    overview:
      "The application combines document ingestion, embeddings, vector search, conversational memory and streaming responses to create a practical company knowledge assistant.",
    categories: ["AI", "Real-Time", "Full Stack"],
    stack: [
      "React.js",
      "Node.js",
      "OpenAI API",
      "LangChain",
      "MongoDB",
      "Redis",
      "Socket.io",
      "AWS S3",
    ],
    features: [
      "PDF and DOCX uploads",
      "Company knowledge base",
      "Document chunking",
      "OpenAI embeddings",
      "MongoDB Atlas Vector Search",
      "Streaming AI responses",
      "Conversation memory",
      "Chat history",
      "Source citations",
    ],
    architecture: [
      "React frontend → Node.js backend",
      "Documents → AWS S3 storage",
      "Documents → chunking and embedding pipeline",
      "Embeddings → MongoDB Atlas Vector Search",
      "OpenAI API → conversational generation",
      "Redis → conversation memory",
      "Socket.io → real-time communication",
    ],
  },
  {
    id: "ai-ecommerce",
    number: "03",
    title: "AI-Powered E-Commerce Platform",
    subtitle: "Intelligent commerce and recommendation platform",
    description:
      "A full-stack e-commerce platform combining AI recommendations, semantic search, natural-language product discovery, payments and analytics.",
    overview:
      "The platform connects a Next.js storefront with Django REST services, PostgreSQL, Redis and AI capabilities to create a personalized shopping experience.",
    categories: ["AI", "Full Stack", "Web"],
    stack: [
      "Next.js",
      "Django REST",
      "PostgreSQL",
      "Redis",
      "OpenAI API",
      "Stripe",
      "Docker",
      "AWS",
    ],
    features: [
      "AI product recommendations",
      "Collaborative filtering",
      "Semantic product search",
      "Natural-language search",
      "GPT-4 function calling",
      "PostgreSQL full-text search",
      "Stripe payments and webhooks",
      "JWT authentication",
      "Google OAuth2",
      "Redis shopping cart",
      "Admin analytics",
    ],
    architecture: [
      "Next.js storefront → Django REST API",
      "Django → PostgreSQL application data",
      "Redis → cart and fast-access data",
      "OpenAI API → intelligent search and recommendations",
      "Stripe → payments and webhook processing",
      "AWS + Docker → deployment infrastructure",
    ],
  },
  {
    id: "ai-doctor",
    number: "04",
    title: "AI Doctor",
    subtitle: "Symptom checker and telemedicine portal",
    description:
      "A healthcare application combining AI-assisted symptom analysis, appointment scheduling and real-time doctor consultations.",
    overview:
      "The platform connects patients, doctors and administrators through role-based access, AI-assisted workflows, appointment management and browser-based consultations.",
    categories: ["AI", "Full Stack", "Real-Time"],
    stack: [
      "Next.js",
      "FastAPI",
      "OpenAI API",
      "WebRTC",
      "PostgreSQL",
      "Twilio",
      "Celery",
      "Redis",
    ],
    features: [
      "AI-assisted symptom checker",
      "Structured AI outputs",
      "Appointment scheduling",
      "WebRTC consultations",
      "PeerJS communication",
      "Twilio audio fallback",
      "Automated reminders",
      "Email notifications",
      "Prescription PDF generation",
      "Patient / doctor / admin roles",
    ],
    architecture: [
      "Next.js → FastAPI application layer",
      "FastAPI → PostgreSQL",
      "OpenAI API → structured symptom analysis",
      "WebRTC / PeerJS → browser consultations",
      "Twilio → communication fallback",
      "Celery + Redis → background jobs and reminders",
    ],
  },
  {
    id: "real-time-analytics",
    number: "05",
    title: "Real-Time AI Analytics Dashboard",
    subtitle: "Streaming analytics and AI insight platform",
    description:
      "A multi-tenant analytics platform that combines event streaming, live visualizations, AI summaries and report generation.",
    overview:
      "The system processes CSV and JSON data through a streaming architecture and exposes live analytics through interactive dashboards, AI-generated summaries and reporting tools.",
    categories: ["AI", "Real-Time", "Data"],
    stack: [
      "React.js",
      "FastAPI",
      "Apache Kafka",
      "OpenAI API",
      "PostgreSQL",
      "D3.js",
      "Kubernetes",
    ],
    features: [
      "Multi-tenant analytics",
      "CSV and JSON uploads",
      "AI executive summaries",
      "Trend forecasting",
      "Kafka event streaming",
      "Live D3.js charts",
      "Drag-and-drop report builder",
      "PDF exports",
      "Excel exports",
    ],
    architecture: [
      "React dashboard → FastAPI services",
      "Data ingestion → Kafka event stream",
      "FastAPI → PostgreSQL persistence",
      "Kafka → real-time analytics pipeline",
      "D3.js → live data visualization",
      "OpenAI API → executive summaries",
      "Kubernetes → container orchestration",
    ],
  },
];
