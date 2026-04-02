export type NavItem = {
  label: string;
  href: string;
};

export type HeroImage = {
  slug: string;
  src: string;
  alt: string;
  title: string;
};

export type FilterItem = {
  label: string;
  active?: boolean;
};

export type ClientLogo = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  image: string;
  alt: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  highlight?: boolean;
};

export type Service = {
  icon: "workflow" | "code" | "ai" | "integration";
  title: string;
  description: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  year: string;
  description?: string;
  tone?: "dark" | "warm" | "neutral";
  showArrow?: boolean;
};

export type CaseStudyBlock = {
  title: string;
  body: string;
  imagePosition: "left" | "right";
  tone?: "dark" | "warm" | "neutral";
  image?: string;
  imageAlt?: string;
};

export type CaseStudyMetaRow = {
  label: string;
  value: string | string[];
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  categoryLabel?: string;
  intro: string;
  year: string;
  industry: string[];
  tools?: string[];
  heroTone?: "dark" | "warm" | "neutral";
  contactHref: string;
  ctaLabel?: string;
  ctaDisabled?: boolean;
  previewImage?: string;
  previewImageAlt?: string;
  heroImage?: string;
  heroImageAlt?: string;
  metaRows: CaseStudyMetaRow[];
  blocks: CaseStudyBlock[];
  outcome: string;
  outcomeImage?: string;
  outcomeImageAlt?: string;
  relatedSlugs: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type AboutCareerItem = {
  role: string;
  company: string;
  period: string;
  logoSrc: string;
  logoAlt?: string;
};

export type AboutSkillItem = {
  title: string;
  icon: "workflow" | "code" | "ai" | "integration";
};

export type AboutTestimonial = {
  rating: string;
  text: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "All Projects", href: "/all-works" },
  { label: "Contact", href: "/contact" },
];

export const heroImages: HeroImage[] = [
  {
    slug: "quoting-system",
    src: "/images/case-studies/quoting-system/preview.avif",
    alt: "Quoting System cover",
    title: "Quoting System",
  },
  {
    slug: "gamifying-collaborative-learning",
    src: "/images/case-studies/gamifying-collaborative-learning/preview.avif",
    alt: "Gamifying Collaborative Learning cover",
    title: "Collaborative Learning",
  },
  {
    slug: "regionally",
    src: "/images/case-studies/regionally/preview.avif",
    alt: "Regionally cover",
    title: "Regionally!",
  },
  {
    slug: "automated-lead-sales-system",
    src: "/images/case-studies/automated-lead-sales-system/preview.avif",
    alt: "Automated Lead & Sales System cover",
    title: "Automated Lead & Sales",
  },
  {
    slug: "ai-lead-generation-with-n8n",
    src: "/images/case-studies/ai-lead-generation-with-n8n/preview.jpg",
    alt: "AI Lead Generation with n8n cover",
    title: "AI Lead Generation",
  },
  {
    slug: "hr-consulting-website-framer",
    src: "/images/case-studies/hr-consulting-website-framer/preview.avif",
    alt: "HR Consulting Website in Framer cover",
    title: "HR Consulting Website",
  },
];

export const filters: FilterItem[] = [
  { label: "All work", active: true },
  { label: "Web" },
  { label: "Branding" },
  { label: "Product" },
  { label: "Strategy" },
];

export const clientLogos: ClientLogo[] = [
  { id: "starseed", src: "/images/clients/star.avif", alt: "Starseed", width: 128, height: 56 },
  { id: "unse", src: "/images/clients/unse.png", alt: "UNSE", width: 128, height: 56 },
  { id: "syncro", src: "/images/clients/syncro.png", alt: "Syncro", width: 128, height: 56 },
  { id: "techled", src: "/images/clients/tech.avif", alt: "Techled", width: 128, height: 56 },
  { id: "latinled", src: "/images/clients/latin.avif", alt: "Latinled", width: 128, height: 56 },
  { id: "grecko", src: "/images/clients/grecko.jpg", alt: "Grecko", width: 128, height: 56 },
  { id: "id", src: "/images/clients/id.jpg", alt: "ID", width: 128, height: 56 },
];

export const projects: Project[] = [
  {
    slug: "quoting-system",
    title: "Quoting System",
    year: "2025",
    category: "Automation",
    image: "/images/case-studies/quoting-system/preview.avif",
    alt: "Quoting system workflow project preview",
  },
  {
    slug: "gamifying-collaborative-learning",
    title: "Gamifying Collaborative Learning",
    year: "2025",
    category: "Web Platform",
    image: "/images/case-studies/gamifying-collaborative-learning/preview.avif",
    alt: "Collaborative learning platform project preview",
  },
  {
    slug: "regionally",
    title: "Regionally!",
    year: "2026",
    category: "E-commerce",
    image: "/images/case-studies/regionally/preview.avif",
    alt: "Regionally e-commerce project preview",
  },
  {
    slug: "automated-lead-sales-system",
    title: "Automated Lead & Sales System",
    year: "2025",
    category: "Software",
    image: "/images/case-studies/automated-lead-sales-system/preview.avif",
    alt: "Automated lead and sales system project preview",
  },
  {
    slug: "ai-lead-generation-with-n8n",
    title: "AI Lead Generation with n8n",
    year: "2025",
    category: "Automation",
    image: "/images/case-studies/ai-lead-generation-with-n8n/preview.jpg",
    alt: "AI lead generation with n8n project preview",
  },
];

export const stats: Stat[] = [
  { value: "100%", label: "Client Satisfaction Rate" },
  { value: "7+", label: "Projects Completed" },
  { value: "5+", label: "Years of Experience" },
];

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Discovery",
    description:
      "I start by understanding the business problem, analyzing processes and identifying opportunities for improvement.",
    highlight: true,
  },
  {
    id: "02",
    title: "Architecture",
    description:
      "I design the system architecture, defining integrations, data flows, and technologies needed for scalable execution.",
    highlight: true,
  },
  {
    id: "03",
    title: "Development",
    description:
      "I develop and connect systems, creating automations and intelligent workflows that reduce manual work.",
  },
  {
    id: "04",
    title: "Optimization",
    description:
      "I continuously improve the solution through testing, monitoring, and refinement to ensure long-term performance.",
  },
];

export const services: Service[] = [
  {
    icon: "workflow",
    title: "Automation & Workflow Engineering",
    description:
      "Designing automated workflows that connect tools, eliminate repetitive tasks, and streamline business operations.",
  },
  {
    icon: "code",
    title: "Custom Web & Software Development",
    description:
      "Developing modern web applications, internal tools, and digital platforms tailored to business needs.",
  },
  {
    icon: "ai",
    title: "AI Solutions & Intelligent Systems",
    description:
      "Building AI-powered solutions such as agents, chatbots, and data-driven systems that improve decision making.",
  },
  {
    icon: "integration",
    title: "System Integration & Architecture",
    description:
      "Connecting APIs, platforms, and databases to create scalable infrastructures where systems work together.",
  },
];

export const footerLinks: NavItem[] = [
  { label: "Projects", href: "/all-works" },
  { label: "Resume", href: "/about" },
  { label: "About me", href: "/about" },
];

export const allWorks: WorkItem[] = [
  {
    slug: "quoting-system",
    title: "Quoting System",
    year: "2025",
    description: "Internal quoting platform for scalable LED project estimates.",
    tone: "dark",
    showArrow: true,
  },
  {
    slug: "gamifying-collaborative-learning",
    title: "Gamifying Collaborative Learning",
    year: "2025",
    description: "Interactive education product focused on collaborative experiences.",
    tone: "warm",
    showArrow: true,
  },
  {
    slug: "hr-consulting-website-framer",
    title: "HR Consulting Website in Framer",
    year: "2026",
    description: "Positioning and conversion-focused website for an HR studio.",
    tone: "warm",
  },
  {
    slug: "regionally",
    title: "Regionally!",
    year: "2026",
    description: "Marketplace product concept with commerce-first user journeys.",
    tone: "neutral",
  },
  {
    slug: "automated-lead-sales-system",
    title: "Automated Lead & Sales System",
    year: "2025",
    description: "An automation architecture connecting CRM, communication channels, and internal tools.",
    tone: "dark",
    showArrow: true,
  },
  {
    slug: "ai-lead-generation-with-n8n",
    title: "AI Lead Generation with n8n",
    year: "2025",
    description: "Automated lead scraping, enrichment, and AI-driven outreach pipeline.",
    tone: "dark",
    showArrow: true,
  },
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "quoting-system",
    title: "Quoting System",
    categoryLabel: "Software development",
    intro:
      "Development of an internal quoting platform built to simplify the creation of complex LED display project estimates. As part of the development team, we expanded system modules, improved the interface, and optimized product configuration workflows. The platform connects product data, pricing logic, and sales processes into a single system, allowing teams to generate accurate project estimates faster while maintaining scalability for future product catalogs and integrations.",
    year: "2025",
    industry: ["Sales", "Automation"],
    tools: ["php", "codeigniter", "figma"],
    heroTone: "dark",
    contactHref: "/contact",
    ctaLabel: "Contact",
    previewImage: "/images/case-studies/quoting-system/preview.avif",
    previewImageAlt: "Quoting system preview cover",
    heroImage: "/images/case-studies/quoting-system/hero.avif",
    heroImageAlt: "Quoting system architecture board",
    metaRows: [
      { label: "Title", value: "Quoting System" },
      { label: "Industry", value: ["Sales", "Automation"] },
      { label: "Date", value: "2025" },
    ],
    blocks: [
      {
        title: "Challenge",
        body:
          "As LED projects became more complex, generating quotes manually started slowing down the sales process. Product configurations, panel specifications, structures, processors, and logistics needed to be calculated together. The challenge was to build a system capable of organizing product data, automating calculations, and allowing the sales team to quickly generate professional estimates. Working within an existing system, the goal was to expand modules, improve usability, and support a growing catalog of LED products while keeping the quoting workflow simple and efficient.",
        imagePosition: "left",
        tone: "dark",
        image: "/images/case-studies/quoting-system/challenge.avif",
        imageAlt: "Challenge stage placeholder for quoting system",
      },
      {
        title: "Approach",
        body:
          "Working collaboratively with the development team, we expanded the platform by improving multiple modules and refining the interface to make the quoting process more intuitive. We redesigned parts of the UI, improved product database structures, and implemented logic to handle different panel configurations, processors, structures, and project variables. The development followed a practical iterative workflow, continuously improving features while aligning with real sales processes.",
        imagePosition: "right",
        tone: "neutral",
        image: "/images/case-studies/quoting-system/approach.avif",
        imageAlt: "Approach stage placeholder for quoting system",
      },
    ],
    outcome:
      "The result was a more scalable quoting platform capable of handling complex LED project configurations. The improvements made it easier for sales teams to create structured estimates while reducing manual work and potential errors. By expanding system modules and improving the user experience, the platform now connects product data, project configuration, and pricing logic in a unified workflow. This project demonstrated how internal tools can significantly improve operational efficiency when designed around real business processes.",
    outcomeImage: "/images/case-studies/quoting-system/result.avif",
    outcomeImageAlt: "Final result view of quoting system project",
    relatedSlugs: ["gamifying-collaborative-learning", "automated-lead-sales-system"],
  },
  {
    slug: "gamifying-collaborative-learning",
    title: "Gamifying Collaborative Learning",
    categoryLabel: "Software development",
    intro:
      "This project explores the integration of gamification within COLLAB, a collaborative learning platform used at the Universidad Nacional de Santiago del Estero. The objective was to increase student engagement and participation in collaborative activities by introducing game-inspired mechanics such as points, ranks, and leaderboards.",
    year: "2025",
    industry: ["Education", "Product"],
    tools: ["html", "css", "javascript", "php", "sql", "figma"],
    heroTone: "warm",
    contactHref: "https://chat.fce.unse.edu.ar/chat/web/index.php",
    ctaLabel: "See live site",
    previewImage: "/images/case-studies/gamifying-collaborative-learning/preview.avif",
    previewImageAlt: "Gamifying collaborative learning preview cover",
    heroImage: "/images/case-studies/gamifying-collaborative-learning/hero.avif",
    heroImageAlt: "COLLAB gamification platform main view",
    metaRows: [
      { label: "Title", value: "Gamifying Collaborative Learning" },
      { label: "Industry", value: ["Education", "Product"] },
      { label: "Date", value: "2025" },
    ],
    blocks: [
      {
        title: "Challenge",
        body:
          "During my final degree project, I worked on COLLAB, a platform designed to support computer-supported collaborative learning at the Universidad Nacional de Santiago del Estero. While the platform enabled communication and teamwork, student participation often declined over time. Collaborative activities existed, but there were few mechanisms to sustain motivation and engagement. The challenge was to design a solution capable of increasing participation without altering the pedagogical structure of the platform. Over a six-month development period, the goal became integrating gamification mechanics that could encourage more active interaction within learning activities.",
        imagePosition: "left",
        tone: "warm",
        image: "/images/case-studies/gamifying-collaborative-learning/challenge.avif",
        imageAlt: "Challenge stage of gamifying collaborative learning project",
      },
      {
        title: "Approach",
        body:
          "To design the experience, I used the Gamification Model Canvas (GMC) to identify player types, motivations, behaviors, and reward systems aligned with educational objectives. Development followed the Open Unified Process (OpenUP), enabling iterative development and continuous refinement of the features. The gamification module was implemented using PHP, Yii2, MySQL, JavaScript, and Bootstrap, integrating directly with the existing COLLAB architecture. New mechanics such as points, ranks, interactive events, challenges, and leaderboards were introduced to encourage participation while preserving collaborative learning dynamics.",
        imagePosition: "right",
        tone: "dark",
        image: "/images/case-studies/gamifying-collaborative-learning/approach.avif",
        imageAlt: "Approach stage of gamifying collaborative learning project",
      },
    ],
    outcome:
      "The final implementation added a gamified layer that transformed collaborative activities into a more engaging learning experience. During the pilot test, platform analytics showed an increase in student participation, while motivation indicators improved according to the Instructional Materials Motivation Survey (IMMS). Although the experiment was limited in duration, the results demonstrated the potential of gamification to enhance engagement in collaborative learning platforms, providing valuable insights for future iterations and educational technology research.",
    outcomeImage: "/images/case-studies/gamifying-collaborative-learning/result.avif",
    outcomeImageAlt: "Final implementation of gamified collaborative learning module",
    relatedSlugs: ["quoting-system", "hr-consulting-website-framer"],
  },
  {
    slug: "hr-consulting-website-framer",
    title: "HR Consulting Website in Framer",
    categoryLabel: "Software development",
    intro:
      "Design and development of a modern HR consulting website built in Framer, focused on clear service presentation, professional branding, and lead generation for startups and growing businesses across LATAM.",
    year: "2026",
    industry: ["HR", "Web"],
    tools: ["framer"],
    heroTone: "warm",
    contactHref: "/contact",
    ctaLabel: "Contact",
    previewImage: "/images/case-studies/hr-consulting-website-framer/preview.avif",
    previewImageAlt: "HR consulting website preview cover",
    heroImage: "/images/case-studies/hr-consulting-website-framer/hero.avif",
    heroImageAlt: "HR consulting website hero visual",
    metaRows: [
      { label: "Title", value: "HR Consulting Website in Framer" },
      { label: "Industry", value: ["HR", "Web"] },
      { label: "Date", value: "2026" },
    ],
    blocks: [
      {
        title: "Challenge",
        body:
          "Many HR consultancies struggle to present their services clearly online. Their websites often feel outdated, generic, and fail to communicate value to growing companies and startups. The challenge was to design a modern consulting website that communicates professionalism while remaining approachable for small and medium-sized businesses across LATAM. The site needed to clearly present HR consulting services, generate leads, and build trust through a clean visual identity and structured information architecture.",
        imagePosition: "left",
        tone: "neutral",
        image: "/images/case-studies/hr-consulting-website-framer/challenge.webp",
        imageAlt: "Challenge stage of HR consulting website project",
      },
      {
        title: "Approach",
        body:
          "I designed the website using Framer, focusing on clarity, visual hierarchy, and conversion-oriented design. The layout emphasizes simple navigation, service clarity, and subtle interactions to guide users through the consulting offerings. From a business perspective, I applied a service-driven structure, where each section communicates value first and services second.",
        imagePosition: "right",
        tone: "warm",
        image: "/images/case-studies/hr-consulting-website-framer/approach.webp",
        imageAlt: "Approach stage of HR consulting website project",
      },
    ],
    outcome:
      "The result is a modern consulting website designed to communicate expertise while remaining accessible to startups and SMEs. The site clearly presents HR services, improves trust through structured information, and provides a strong foundation for lead generation.",
    outcomeImage: "/images/case-studies/hr-consulting-website-framer/result.webp",
    outcomeImageAlt: "Final result of HR consulting website project",
    relatedSlugs: ["regionally", "gamifying-collaborative-learning"],
  },
  {
    slug: "regionally",
    title: "Regionally!",
    categoryLabel: "Software development",
    intro:
      "A mobile-first web store platform designed for regional businesses that want to quickly launch their online presence and start selling digitally. The platform focuses on simplicity, speed, and usability, allowing local stores to organize products, showcase categories, and provide customers with a smooth shopping experience directly from their phones.",
    year: "2026",
    industry: ["E-commerce / Retail"],
    tools: ["node.js", "next.js", "figma"],
    heroTone: "neutral",
    contactHref: "/all-works/regionally",
    ctaLabel: "See live site (Soon)",
    ctaDisabled: true,
    previewImage: "/images/case-studies/regionally/preview.avif",
    previewImageAlt: "Regionally preview cover",
    heroImage: "/images/case-studies/regionally/hero.avif",
    heroImageAlt: "Regionally mobile-first storefront hero",
    metaRows: [
      { label: "Title", value: "Regionally!" },
      { label: "Industry", value: "E-commerce / Retail" },
      { label: "Date", value: "2026" },
    ],
    blocks: [
      {
        title: "Challenge",
        body:
          "Small regional stores often struggle to compete in the digital space. Most solutions are either too complex, too expensive, or not optimized for mobile-first users. The goal of this project was to design a simple and scalable mobile web store that allows local businesses to showcase their products, manage categories, and receive orders easily. The platform needed to provide a smooth purchasing experience while keeping the interface intuitive for both customers and store owners.",
        imagePosition: "left",
        tone: "neutral",
        image: "/images/case-studies/regionally/challenge.avif",
        imageAlt: "Challenge stage for Regionally project",
      },
      {
        title: "Approach",
        body:
          "The platform was built using Next.js to create a fast, responsive, and SEO-friendly frontend experience. The interface focuses on clear product categories, large product cards, and a frictionless checkout flow optimized for mobile devices. For the backend, a SaaS architecture was designed using a Node.js microservice API with a multi-tenant commerce engine, allowing multiple regional stores to operate on the same platform while maintaining independent catalogs, orders, and configurations.",
        imagePosition: "right",
        tone: "dark",
        image: "/images/case-studies/regionally/approach.avif",
        imageAlt: "Approach stage for Regionally project",
      },
    ],
    outcome:
      "The result is a lightweight and scalable mobile-first e-commerce platform tailored for regional businesses. Stores can quickly launch their online presence, organize products by categories, and provide customers with a modern shopping experience without the complexity of traditional e-commerce systems. This approach enables local stores to digitize their sales channels and reach customers directly from their phones.",
    outcomeImage: "/images/case-studies/regionally/result.avif",
    outcomeImageAlt: "Final result of Regionally platform",
    relatedSlugs: ["automated-lead-sales-system", "hr-consulting-website-framer"],
  },
  {
    slug: "automated-lead-sales-system",
    title: "Automated Lead & Sales System",
    categoryLabel: "Software development",
    intro:
      "An automation architecture connecting CRM, communication channels, and internal tools.",
    year: "2025",
    industry: ["Software & Technology"],
    tools: ["n8n", "excel", "python"],
    heroTone: "dark",
    contactHref: "/contact",
    ctaLabel: "Contact",
    previewImage: "/images/case-studies/automated-lead-sales-system/preview.avif",
    previewImageAlt: "Automated lead and sales system preview cover",
    heroImage: "/images/case-studies/automated-lead-sales-system/hero.avif",
    heroImageAlt: "Automated lead and sales system overview",
    metaRows: [
      { label: "Title", value: "Automated Lead & Sales System" },
      { label: "Industry", value: "Software & Technology" },
      { label: "Date", value: "2025" },
    ],
    blocks: [
      {
        title: "Challenge",
        body:
          "As the volume of inbound leads grew, managing them manually became inefficient and error-prone. Sales conversations, follow-ups, and deal tracking were spread across multiple tools without a clear automated flow. The challenge was to design a centralized system capable of capturing leads, organizing conversations, and synchronizing data between platforms while keeping the process scalable. The goal was not only technical integration but also creating a structured business workflow where marketing, sales, and automation could operate together with minimal manual intervention.",
        imagePosition: "left",
        tone: "dark",
        image: "/images/case-studies/automated-lead-sales-system/challenge.avif",
        imageAlt: "Challenge stage of automated lead and sales project",
      },
      {
        title: "Approach",
        body:
          "To solve this, I designed an automation architecture connecting CRM, communication channels, and internal tools. Using APIs and workflow automation, the system captures leads, stores them in a structured database, and synchronizes them with the sales pipeline. Automated processes manage follow-ups, notifications, and lead classification. The development combined backend logic, database design, and integration layers to ensure reliability and scalability.",
        imagePosition: "right",
        tone: "neutral",
        image: "/images/case-studies/automated-lead-sales-system/approach.avif",
        imageAlt: "Approach stage of automated lead and sales project",
      },
    ],
    outcome:
      "The result was a scalable automation system that reduced manual work for the sales team and improved lead visibility across the organization. Leads now flow automatically from acquisition channels into the CRM, triggering structured follow-ups and internal notifications. From a business perspective, the system established a repeatable sales process where data drives decisions and teams operate with clearer insights. The architecture also allows new integrations and automation layers to be added as the company grows.",
    outcomeImage: "/images/case-studies/automated-lead-sales-system/result.avif",
    outcomeImageAlt: "Outcome view of automated lead and sales system",
    relatedSlugs: ["quoting-system", "regionally"],
  },
  {
    slug: "ai-lead-generation-with-n8n",
    title: "AI Lead Generation with n8n",
    categoryLabel: "Software development",
    intro:
      "Designed and implemented a fully automated lead generation and engagement system using n8n. The solution combines data scraping, enrichment, and AI-driven communication to create a scalable pipeline that captures, qualifies, and responds to potential clients without manual intervention.",
    year: "2025",
    industry: ["Software & Technology"],
    tools: ["n8n", "apify", "firecrawl"],
    heroTone: "dark",
    contactHref: "/contact",
    ctaLabel: "Contact",
    previewImage: "/images/case-studies/ai-lead-generation-with-n8n/preview.jpg",
    previewImageAlt: "AI Lead Generation with n8n preview cover",
    heroImage: "/images/case-studies/ai-lead-generation-with-n8n/hero.jpg",
    heroImageAlt: "AI Lead Generation with n8n hero visual",
    metaRows: [
      { label: "Title", value: "AI Lead Generation with n8n" },
      { label: "Industry", value: ["Software &", "Technology"] },
      { label: "Date", value: "2025" },
    ],
    blocks: [
      {
        title: "Challenge",
        body:
          "As lead acquisition scaled, manually finding businesses, extracting contact information, and following up became inefficient and time-consuming. The main challenge was to automate the discovery of potential clients from Google Maps, enrich that data with real contact details, and ensure consistent, timely outreach. Additionally, managing responses and maintaining conversations required a system capable of handling interactions autonomously.",
        imagePosition: "left",
        tone: "dark",
        image: "/images/case-studies/ai-lead-generation-with-n8n/challenge.jpg",
        imageAlt: "Challenge stage of AI lead generation project",
      },
      {
        title: "Approach",
        body:
          "Built a two-part automation system using n8n workflows. The first flow performs Google Maps scraping, extracting business data and visiting websites to collect email addresses, followed by automated outreach via Gmail. The second flow acts as an AI-powered reply agent, handling inbound responses, maintaining conversations, and assisting in lead qualification, creating a continuous and scalable sales loop.",
        imagePosition: "right",
        tone: "neutral",
        image: "/images/case-studies/ai-lead-generation-with-n8n/approach.jpg",
        imageAlt: "Approach stage of AI lead generation project",
      },
    ],
    outcome:
      "The result was a fully automated lead generation engine. Manual workload was drastically reduced while increasing outreach volume. Sales conversations became faster, consistent, and scalable.",
    outcomeImage: "/images/case-studies/ai-lead-generation-with-n8n/result.jpg",
    outcomeImageAlt: "Outcome view of AI lead generation with n8n",
    relatedSlugs: ["automated-lead-sales-system", "quoting-system"],
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projectCaseStudies.find((project) => project.slug === slug);
}

export const faqItems: FaqItem[] = [
  {
    question: "How do we get started?",
    answer:
      "We start with a quick discovery call to understand your goals, audience, and requirements. From there, we define the scope, timeline, and next steps to kick off the project smoothly.",
  },
  {
    question: "Can you redesign my existing website or app?",
    answer:
      "Absolutely. We can audit your current product, identify improvement areas, and redesign it to enhance user experience, performance, and visual impact while keeping what already works.",
  },
  {
    question: "Do you also handle development or just design?",
    answer:
      "We handle both. From UX/UI design to full development, we deliver complete, scalable solutions ready to launch and grow.",
  },
  {
    question: "What tools do you use for design?",
    answer:
      "We typically use Figma for design and prototyping, along with modern tools depending on the project. Our stack is flexible and tailored to your needs.",
  },
  {
    question: "Can I request additional revisions?",
    answer:
      "Yes, revisions are part of our process. We collaborate closely with you and refine the work until it aligns perfectly with your vision.",
  },
];

export const aboutCareerItems: AboutCareerItem[] = [
  {
    role: "Workflow Automation - WordPress Developer - IT Support",
    company: "Techledwall",
    period: "Feb 24 - Present",
    logoSrc: "/images/clients/tech.avif",
    logoAlt: "Techled",
  },
  {
    role: "Founder",
    company: "Starseed",
    period: "Jan 3 - Present",
    logoSrc: "/images/clients/star.avif",
    logoAlt: "Starseed",
  },
  {
    role: "Automation & WordPress Developer",
    company: "Grecko",
    period: "Feb 24 - Dec 24",
    logoSrc: "/images/clients/grecko-logo.svg",
    logoAlt: "Grecko",
  },
  {
    role: "Automation & WordPress Developer",
    company: "Latinled",
    period: "May 25 - Present",
    logoSrc: "/images/clients/latinled-career.jpg",
    logoAlt: "Latinled",
  },
  {
    role: "System Analyst",
    company: "National University",
    period: "Jun 24 - Jul 26",
    logoSrc: "/images/clients/unse.png",
    logoAlt: "National University",
  },
  {
    role: "WordPress Developer - IT",
    company: "ITD",
    period: "Jan 23 - Sep 23",
    logoSrc: "/images/clients/id.jpg",
    logoAlt: "ITD",
  },
];

export const aboutSkillItems: AboutSkillItem[] = [
  { title: "Workflow Automation", icon: "workflow" },
  { title: "Web & Software Development", icon: "code" },
  { title: "AI Solutions", icon: "ai" },
  { title: "System Integration", icon: "integration" },
];

export const aboutTestimonials: AboutTestimonial[] = [
  { rating: "4.8", text: "Running a small business is challenging, but the design process felt smooth and completely hassle-free." },
  { rating: "4.8", text: "The final direction truly captured the vision and the quality of execution exceeded expectations." },
  { rating: "5.0", text: "Great communication, clear process, and high-end outcomes from concept to final delivery." },
];

