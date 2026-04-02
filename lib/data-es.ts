import type {
  AboutCareerItem,
  AboutSkillItem,
  FaqItem,
  HeroImage,
  NavItem,
  ProcessStep,
  ProjectCaseStudy,
  Service,
  Stat,
  WorkItem,
} from "@/lib/data";
import { clientLogos, getProjectBySlug } from "@/lib/data";

export { clientLogos };

export const navItemsEs: NavItem[] = [
  { label: "Sobre mi", href: "/es/about" },
  { label: "Proyectos", href: "/es/all-works" },
  { label: "Contacto", href: "/es/contact" },
];

export const footerLinksEs: NavItem[] = [
  { label: "Proyectos", href: "/es/all-works" },
  { label: "CV", href: "/es/about" },
  { label: "Sobre mi", href: "/es/about" },
];

export const heroImagesEs: HeroImage[] = [
  {
    slug: "quoting-system",
    src: "/images/case-studies/quoting-system/preview.avif",
    alt: "Portada del sistema de cotizaciones",
    title: "Sistema de Cotizaciones",
  },
  {
    slug: "gamifying-collaborative-learning",
    src: "/images/case-studies/gamifying-collaborative-learning/preview.avif",
    alt: "Portada de aprendizaje colaborativo",
    title: "Aprendizaje Colaborativo",
  },
  {
    slug: "regionally",
    src: "/images/case-studies/regionally/preview.avif",
    alt: "Portada de Regionally",
    title: "Regionally!",
  },
  {
    slug: "automated-lead-sales-system",
    src: "/images/case-studies/automated-lead-sales-system/preview.avif",
    alt: "Portada de automatizacion de leads",
    title: "Automatizacion de Leads",
  },
  {
    slug: "ai-lead-generation-with-n8n",
    src: "/images/case-studies/ai-lead-generation-with-n8n/preview.jpg",
    alt: "Portada de generacion de leads con IA",
    title: "Leads IA con n8n",
  },
  {
    slug: "hr-consulting-website-framer",
    src: "/images/case-studies/hr-consulting-website-framer/preview.avif",
    alt: "Portada del sitio HR",
    title: "Sitio HR en Framer",
  },
];

export const allWorksEs: WorkItem[] = [
  {
    slug: "quoting-system",
    title: "Sistema de Cotizaciones",
    year: "2025",
    description: "Plataforma interna para cotizar proyectos LED complejos.",
    tone: "dark",
    showArrow: true,
  },
  {
    slug: "gamifying-collaborative-learning",
    title: "Gamificando el Aprendizaje Colaborativo",
    year: "2025",
    description: "Producto educativo para mejorar participacion y colaboracion.",
    tone: "warm",
    showArrow: true,
  },
  {
    slug: "hr-consulting-website-framer",
    title: "Sitio de Consultoria HR en Framer",
    year: "2026",
    description: "Website orientado a posicionamiento y generacion de leads.",
    tone: "warm",
  },
  {
    slug: "regionally",
    title: "Regionally!",
    year: "2026",
    description: "Plataforma e-commerce mobile-first para comercios regionales.",
    tone: "neutral",
  },
  {
    slug: "automated-lead-sales-system",
    title: "Sistema Automatizado de Leads y Ventas",
    year: "2025",
    description: "Arquitectura de automatizacion conectando CRM y canales.",
    tone: "dark",
    showArrow: true,
  },
  {
    slug: "ai-lead-generation-with-n8n",
    title: "Generacion de Leads con IA en n8n",
    year: "2025",
    description: "Pipeline automatizado de scraping, enriquecimiento y outreach con IA.",
    tone: "dark",
    showArrow: true,
  },
];

export const statsEs: Stat[] = [
  { value: "100%", label: "Tasa de Satisfaccion" },
  { value: "7+", label: "Proyectos Completados" },
  { value: "5+", label: "Anos de Experiencia" },
];

export const processStepsEs: ProcessStep[] = [
  {
    id: "01",
    title: "Descubrimiento",
    description:
      "Empiezo entendiendo el problema de negocio, analizando procesos e identificando oportunidades de mejora.",
    highlight: true,
  },
  {
    id: "02",
    title: "Arquitectura",
    description:
      "Defino arquitectura, integraciones, flujos de datos y tecnologias para una ejecucion escalable.",
    highlight: true,
  },
  {
    id: "03",
    title: "Desarrollo",
    description:
      "Construyo y conecto sistemas, creando automatizaciones y flujos inteligentes que reducen trabajo manual.",
  },
  {
    id: "04",
    title: "Optimizacion",
    description:
      "Refino la solucion con pruebas, monitoreo y mejora continua para asegurar rendimiento a largo plazo.",
  },
];

export const servicesEs: Service[] = [
  {
    icon: "workflow",
    title: "Automatizacion y Workflow Engineering",
    description:
      "Diseno workflows automatizados que conectan herramientas, eliminan tareas repetitivas y optimizan operaciones.",
  },
  {
    icon: "code",
    title: "Desarrollo Web y Software a Medida",
    description:
      "Desarrollo aplicaciones web modernas, herramientas internas y plataformas digitales adaptadas al negocio.",
  },
  {
    icon: "ai",
    title: "Soluciones IA y Sistemas Inteligentes",
    description:
      "Construyo soluciones con IA como agentes, chatbots y sistemas orientados a datos para mejorar decisiones.",
  },
  {
    icon: "integration",
    title: "Integracion de Sistemas y Arquitectura",
    description:
      "Conecto APIs, plataformas y bases de datos para crear infraestructuras escalables donde todo trabaja en conjunto.",
  },
];

export const faqItemsEs: FaqItem[] = [
  {
    question: "Como empezamos?",
    answer:
      "Empezamos con una llamada de descubrimiento rapida para entender tus objetivos, audiencia y requerimientos. Desde ahi definimos alcance, tiempos y proximos pasos para iniciar el proyecto de forma fluida.",
  },
  {
    question: "Podes redisenar mi sitio web o app actual?",
    answer:
      "Absolutamente. Podemos auditar tu producto actual, identificar areas de mejora y redisenarlo para mejorar experiencia de usuario, rendimiento e impacto visual, manteniendo lo que ya funciona.",
  },
  {
    question: "Tambien haces desarrollo o solo diseno?",
    answer:
      "Hacemos ambos. Desde diseno UX/UI hasta desarrollo completo, entregamos soluciones escalables listas para lanzar y crecer.",
  },
  {
    question: "Que herramientas usan para diseno?",
    answer:
      "Usamos principalmente Figma para diseno y prototipado, junto con herramientas modernas segun el proyecto. Nuestro stack es flexible y se adapta a tus necesidades.",
  },
  {
    question: "Puedo pedir revisiones adicionales?",
    answer:
      "Si, las revisiones son parte del proceso. Colaboramos de cerca con vos y refinamos el trabajo hasta que quede alineado con tu vision.",
  },
];

export const aboutCareerItemsEs: AboutCareerItem[] = [
  {
    role: "Workflow Automation - WordPress Developer - IT Support",
    company: "Techledwall",
    period: "Feb 24 - Presente",
    logoSrc: "/images/clients/tech.avif",
    logoAlt: "Techled",
  },
  {
    role: "Founder",
    company: "Starseed",
    period: "Jan 3 - Presente",
    logoSrc: "/images/clients/star.avif",
    logoAlt: "Starseed",
  },
  {
    role: "Automation & WordPress Developer",
    company: "Grecko",
    period: "Feb 24 - Dic 24",
    logoSrc: "/images/clients/grecko-logo.svg",
    logoAlt: "Grecko",
  },
  {
    role: "Automation & WordPress Developer",
    company: "Latinled",
    period: "May 25 - Presente",
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

export const aboutSkillItemsEs: AboutSkillItem[] = [
  { title: "Workflow Automation", icon: "workflow" },
  { title: "Web & Software Development", icon: "code" },
  { title: "AI Solutions", icon: "ai" },
  { title: "System Integration", icon: "integration" },
];

const quoting = getProjectBySlug("quoting-system");
const collab = getProjectBySlug("gamifying-collaborative-learning");
const hr = getProjectBySlug("hr-consulting-website-framer");
const regionally = getProjectBySlug("regionally");
const automated = getProjectBySlug("automated-lead-sales-system");
const aiLeadGeneration = getProjectBySlug("ai-lead-generation-with-n8n");

if (!quoting || !collab || !hr || !regionally || !automated || !aiLeadGeneration) {
  throw new Error("Missing base project data for Spanish locale.");
}

export const projectCaseStudiesEs: ProjectCaseStudy[] = [
  {
    ...quoting,
    title: "Sistema de Cotizaciones",
    categoryLabel: "Desarrollo de software",
    intro:
      "Desarrollo de una plataforma interna de cotizacion para simplificar estimaciones complejas de proyectos LED. Se mejoraron modulos del sistema, la interfaz y los flujos de configuracion de producto para generar presupuestos mas rapidos y precisos.",
    industry: ["Automatizacion de Ventas"],
    ctaLabel: "Contacto",
    metaRows: [
      { label: "Titulo", value: "Sistema de Cotizaciones" },
      { label: "Industria", value: ["Automatizacion", "Ventas"] },
      { label: "Fecha", value: "2025" },
    ],
    blocks: [
      {
        ...quoting.blocks[0],
        title: "Desafio",
        body:
          "A medida que los proyectos LED crecian en complejidad, cotizar manualmente comenzo a frenar el proceso comercial. El reto fue construir un sistema capaz de organizar datos de producto, automatizar calculos y permitir al equipo comercial generar propuestas profesionales en menor tiempo.",
      },
      {
        ...quoting.blocks[1],
        title: "Enfoque",
        body:
          "Trabajando junto al equipo de desarrollo, ampliamos modulos clave y refinamos la interfaz para volver el proceso mas intuitivo. Mejoramos estructura de base de datos y logica de configuracion para paneles, procesadores, estructuras y variables de proyecto.",
      },
    ],
    outcome:
      "El resultado fue una plataforma mas escalable para cotizaciones LED complejas, reduciendo trabajo manual y errores. Hoy conecta datos de producto, configuracion de proyecto y logica de precios en un flujo unificado.",
  },
  {
    ...collab,
    title: "Gamificando el Aprendizaje Colaborativo",
    categoryLabel: "Desarrollo de software",
    intro:
      "Proyecto enfocado en integrar gamificacion dentro de COLLAB, una plataforma de aprendizaje colaborativo, para aumentar participacion y engagement estudiantil mediante puntos, rangos y rankings.",
    industry: ["Educacion", "Producto"],
    ctaLabel: "Ver sitio en vivo",
    metaRows: [
      { label: "Titulo", value: "Gamificando el Aprendizaje Colaborativo" },
      { label: "Industria", value: ["Educacion", "Producto"] },
      { label: "Fecha", value: "2025" },
    ],
    blocks: [
      {
        ...collab.blocks[0],
        title: "Desafio",
        body:
          "Aunque la plataforma permitia colaboracion, la participacion tendia a bajar con el tiempo. El desafio fue incrementar motivacion sin alterar la estructura pedagogica base, incorporando mecanicas que fomentaran una interaccion sostenida.",
      },
      {
        ...collab.blocks[1],
        title: "Enfoque",
        body:
          "Se utilizo el Gamification Model Canvas y un proceso iterativo con OpenUP para definir motivadores, comportamientos y recompensas. Se implementaron puntos, rangos, desafios y leaderboards sobre la arquitectura existente de COLLAB.",
      },
    ],
    outcome:
      "La implementacion agrego una capa gamificada que volvio las actividades colaborativas mas atractivas. En pruebas piloto se observo mayor participacion y mejores indicadores de motivacion.",
  },
  {
    ...hr,
    title: "Sitio de Consultoria HR en Framer",
    categoryLabel: "Desarrollo de software",
    intro:
      "Diseno y desarrollo de un sitio moderno para consultoria HR en Framer, orientado a claridad de servicios, identidad profesional y generacion de leads para startups y empresas en crecimiento.",
    industry: ["HR", "Web"],
    ctaLabel: "Contacto",
    metaRows: [
      { label: "Titulo", value: "Sitio de Consultoria HR en Framer" },
      { label: "Industria", value: ["HR", "Web"] },
      { label: "Fecha", value: "2026" },
    ],
    blocks: [
      {
        ...hr.blocks[0],
        title: "Desafio",
        body:
          "Muchas consultoras HR tienen sitios poco claros, desactualizados y genericos. El desafio fue crear una experiencia digital profesional y cercana, capaz de comunicar valor y generar confianza en startups y pymes.",
      },
      {
        ...hr.blocks[1],
        title: "Enfoque",
        body:
          "Se priorizo jerarquia visual, claridad de navegacion y estructura orientada a conversion. Cada seccion comunica primero valor de negocio y luego detalle de servicio, guiando al usuario en un recorrido simple.",
      },
    ],
    outcome:
      "El resultado es un sitio moderno que comunica expertise y mejora la conversion comercial, con una base solida para captacion de leads en LATAM.",
  },
  {
    ...regionally,
    title: "Regionally!",
    categoryLabel: "Desarrollo de software",
    intro:
      "Plataforma mobile-first para comercios regionales que necesitan lanzar su presencia online y vender de forma simple, rapida y escalable.",
    industry: ["E-commerce / Retail"],
    ctaLabel: "Ver sitio en vivo (Pronto)",
    metaRows: [
      { label: "Titulo", value: "Regionally!" },
      { label: "Industria", value: "E-commerce / Retail" },
      { label: "Fecha", value: "2026" },
    ],
    blocks: [
      {
        ...regionally.blocks[0],
        title: "Desafio",
        body:
          "Los comercios regionales suelen encontrar soluciones digitales complejas o costosas. El reto fue crear una tienda web intuitiva, optimizada para mobile, que facilite carga de productos, categorias y toma de pedidos.",
      },
      {
        ...regionally.blocks[1],
        title: "Enfoque",
        body:
          "Se construyo frontend en Next.js para velocidad y SEO, con experiencia centrada en categorias claras, cards de producto grandes y checkout sin friccion. Se planteo una arquitectura SaaS multi-tenant para escalar multiples tiendas.",
      },
    ],
    outcome:
      "El resultado es una plataforma liviana y escalable que permite a negocios regionales digitalizar ventas y llegar mejor a sus clientes desde el celular.",
  },
  {
    ...automated,
    title: "Sistema Automatizado de Leads y Ventas",
    categoryLabel: "Desarrollo de software",
    intro:
      "Arquitectura de automatizacion que conecta CRM, canales de comunicacion y herramientas internas para ordenar y escalar el proceso comercial.",
    industry: ["Software y Tecnologia"],
    ctaLabel: "Contacto",
    metaRows: [
      { label: "Titulo", value: "Sistema Automatizado de Leads y Ventas" },
      { label: "Industria", value: "Software y Tecnologia" },
      { label: "Fecha", value: "2025" },
    ],
    blocks: [
      {
        ...automated.blocks[0],
        title: "Desafio",
        body:
          "Con el crecimiento de leads, la gestion manual se volvio ineficiente y propensa a errores. El desafio fue centralizar captura, clasificacion y seguimiento en un flujo automatizado y escalable.",
      },
      {
        ...automated.blocks[1],
        title: "Enfoque",
        body:
          "Se diseno una arquitectura conectando CRM, APIs y herramientas internas. Los workflows automatizan seguimiento, notificaciones y clasificacion, sincronizando datos entre adquisicion y pipeline comercial.",
      },
    ],
    outcome:
      "El sistema redujo trabajo manual, mejoro visibilidad de leads y establecio un proceso comercial repetible basado en datos, listo para nuevas integraciones.",
  },
  {
    ...aiLeadGeneration,
    title: "Generacion de Leads con IA en n8n",
    categoryLabel: "Desarrollo de software",
    intro:
      "Disene e implemente un sistema completamente automatizado de generacion e interaccion de leads con n8n. La solucion combina scraping, enriquecimiento de datos y comunicacion impulsada por IA para crear un pipeline escalable que captura, califica y responde potenciales clientes sin intervencion manual.",
    industry: ["Software y Tecnologia"],
    ctaLabel: "Contacto",
    metaRows: [
      { label: "Titulo", value: "Generacion de Leads con IA en n8n" },
      { label: "Industria", value: ["Software y", "Tecnologia"] },
      { label: "Fecha", value: "2025" },
    ],
    blocks: [
      {
        ...aiLeadGeneration.blocks[0],
        title: "Desafio",
        body:
          "A medida que la adquisicion de leads escalo, encontrar negocios manualmente, extraer contactos y hacer seguimiento se volvio ineficiente y demandante. El desafio principal fue automatizar el descubrimiento de clientes potenciales desde Google Maps, enriquecer esa data con contactos reales y asegurar outreach consistente y oportuno. Ademas, gestionar respuestas y sostener conversaciones requirio un sistema capaz de operar de forma autonoma.",
      },
      {
        ...aiLeadGeneration.blocks[1],
        title: "Enfoque",
        body:
          "Construimos un sistema en dos flujos usando n8n. El primero realiza scraping en Google Maps, extrae datos de negocio y visita sitios para obtener correos, seguido de outreach automatizado via Gmail. El segundo funciona como un agente de respuesta con IA, gestionando mensajes entrantes, manteniendo conversaciones y ayudando en la calificacion de leads, creando un loop comercial continuo y escalable.",
      },
    ],
    outcome:
      "El resultado fue un motor de generacion de leads totalmente automatizado. Se redujo drasticamente el trabajo manual mientras aumento el volumen de outreach. Las conversaciones comerciales se volvieron mas rapidas, consistentes y escalables.",
  },
];

export function getProjectBySlugEs(slug: string): ProjectCaseStudy | undefined {
  return projectCaseStudiesEs.find((project) => project.slug === slug);
}
