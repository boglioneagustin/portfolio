import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { getProjectBySlugEs, heroImagesEs } from "@/lib/data-es";
import { getToolLabel } from "@/lib/tool-label";
import {
  SiCodeigniter,
  SiCss,
  SiFigma,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";

const carouselItems = heroImagesEs.map((item) => ({
  slug: item.slug,
  src: item.src,
  alt: item.alt,
  title: item.title,
  tools: getProjectBySlugEs(item.slug)?.tools ?? [],
}));
const marqueeItems = [...carouselItems, ...carouselItems];

function ToolGlyph({ tool }: { tool: string }) {
  const key = tool.toLowerCase();

  if (key === "php") return <SiPhp aria-hidden="true" className="text-[14px] text-[#777bb3]" />;
  if (key === "codeigniter") return <SiCodeigniter aria-hidden="true" className="text-[14px] text-[#ee4623]" />;
  if (key === "figma") return <SiFigma aria-hidden="true" className="text-[13px] text-[#f24e1e]" />;
  if (key === "framer") return <SiFramer aria-hidden="true" className="text-[13px] text-[#111111]" />;
  if (key === "next.js" || key === "nextjs") return <SiNextdotjs aria-hidden="true" className="text-[13px] text-[#111111]" />;
  if (key === "node.js" || key === "nodejs") return <SiNodedotjs aria-hidden="true" className="text-[13px] text-[#5fa04e]" />;
  if (key === "n8n") return <SiN8N aria-hidden="true" className="text-[13px] text-[#ea4b71]" />;
  if (key === "apify")
    return (
      <Image
        src="/images/tools/apify.png"
        alt=""
        width={14}
        height={14}
        aria-hidden="true"
        className="h-[14px] w-[14px] object-contain"
      />
    );
  if (key === "firecrawl")
    return (
      <Image
        src="/images/tools/firecrawl.png"
        alt=""
        width={14}
        height={14}
        aria-hidden="true"
        className="h-[14px] w-[14px] object-contain"
      />
    );
  if (key === "excel" || key === "microsoft excel") return <RiFileExcel2Fill aria-hidden="true" className="text-[13px] text-[#1d6f42]" />;
  if (key === "html") return <SiHtml5 aria-hidden="true" className="text-[13px] text-[#e34f26]" />;
  if (key === "css") return <SiCss aria-hidden="true" className="text-[13px] text-[#1572b6]" />;
  if (key === "javascript" || key === "js") return <SiJavascript aria-hidden="true" className="text-[13px] text-[#f7df1e]" />;
  if (key === "sql" || key === "mysql") return <SiMysql aria-hidden="true" className="text-[13px] text-[#00758f]" />;
  if (key === "react") return <SiReact aria-hidden="true" className="text-[13px] text-[#61dafb]" />;
  if (key === "typescript") return <SiTypescript aria-hidden="true" className="text-[13px] text-[#3178c6]" />;
  if (key === "python") return <SiPython aria-hidden="true" className="text-[13px] text-[#3776ab]" />;

  return <span className="text-[9px] font-semibold uppercase tracking-[0.04em] text-[#66666d]">{tool.slice(0, 2)}</span>;
}

export default function HeroSectionEs() {
  return (
    <section className="pt-12 sm:pt-20 lg:pt-24">
      <Container>
        <div className="grid gap-9 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div className="reveal-up">
            <div className="relative w-fit">
              <h1 className="reveal-text pr-16 text-[64px] font-medium leading-[0.92] tracking-[-0.03em] text-[#141418] sm:pr-20 sm:text-[84px] lg:pr-24 lg:text-[96px]">
                <span className="relative inline-block">
                  Agustin
                  <span className="group absolute left-[calc(100%+30px)] top-[6px] z-[30] sm:left-[calc(100%+12px)] sm:top-[10px] lg:left-[calc(100%+14px)] lg:top-[12px]">
                    <span className="absolute left-[24px] top-[24px] hidden h-9 w-9 items-center justify-center rounded-[12px] border border-black/5 bg-white text-[16px] text-[#111111] opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-[240ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-[44px] group-hover:-translate-y-[30px] group-hover:opacity-100 sm:inline-flex">
                      <SiFramer aria-hidden="true" />
                    </span>
                    <span className="absolute left-[24px] top-[24px] hidden h-9 w-9 items-center justify-center rounded-[12px] border border-black/5 bg-white text-[16px] text-[#f2552c] opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all delay-75 duration-[240ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[54px] group-hover:opacity-100 sm:inline-flex">
                      <SiFigma aria-hidden="true" />
                    </span>
                    <span className="absolute left-[24px] top-[24px] hidden h-9 w-9 items-center justify-center rounded-[12px] border border-black/5 bg-white text-[16px] text-[#111111] opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all delay-100 duration-[240ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[44px] group-hover:-translate-y-[30px] group-hover:opacity-100 sm:inline-flex">
                      <SiNextdotjs aria-hidden="true" />
                    </span>
                    <span className="relative z-10 inline-block h-[72px] w-[72px] overflow-hidden rounded-[20px] border border-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-transform duration-200 ease-in-out group-hover:-translate-y-[1px] sm:h-[82px] sm:w-[82px] sm:rounded-[22px]">
                      <Image src="/images/avatar/me.avif" alt="Icono de Agustin A." fill className="object-cover" sizes="82px" priority />
                    </span>
                  </span>
                </span>
                <br />
                Boglione.
              </h1>
            </div>
          </div>

          <div className="reveal-up reveal-delay-1 max-w-[560px] lg:justify-self-end">
            <p className="reveal-text mb-4 flex flex-wrap items-center gap-3 text-[#5f5f63]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[14px] font-medium leading-none text-[#3f3f45] shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                <span className="text-[#f05a2a]">&#9733;</span>
                <span>4.9 / 5</span>
              </span>
              <span className="text-[14px] font-normal text-[#727276]">Ayude a 7+ negocios y contando</span>
            </p>
            <p className="reveal-text reveal-delay-1 text-[20px] font-normal leading-[1.5] text-[#3f3f45]">
              Ingeniero de software full-stack (Lic. en Ciencias de la Computacion) con 4+ anos de experiencia creando
              sistemas web y de automatizacion escalables.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#contacto" className="btn-primary inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[16px] font-medium text-white sm:px-9 sm:py-4">
                <span>Iniciar Proyecto</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#proyectos" className="button-soft rounded-full bg-[#f8f8f7] px-7 py-3.5 text-[16px] font-medium text-[#2f2f34] sm:px-8 sm:py-4">
                Ver Proyectos
              </a>
            </div>
          </div>
        </div>

        <div className="reveal-up reveal-delay-2 mt-14">
          <div className="hero-marquee relative">
            <div className="overflow-hidden rounded-[24px]">
              <div className="hero-marquee-track flex w-max gap-4">
                {marqueeItems.map((item, index) => (
                  <Link
                    key={`${item.title}-${index}`}
                    href={`/es/all-works/${item.slug}`}
                    className="hero-card group relative h-[350px] w-[240px] shrink-0 rounded-[24px] bg-[#d6d6d4] sm:h-[392px] sm:w-[272px]"
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                      <div className="absolute inset-0">
                        <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="272px" />
                      </div>
                    </div>
                    {item.tools.length > 0 ? (
                      <div className="pointer-events-auto absolute left-3 top-4 z-[4] flex items-center gap-1.5 opacity-0 transition-all duration-200 ease-out group-hover:opacity-100">
                        {item.tools.map((tool) => (
                          <span
                            key={tool}
                            aria-label={getToolLabel(tool)}
                            data-tool-label={getToolLabel(tool)}
                            className="tool-icon-chip inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_5px_12px_rgba(0,0,0,0.12)]"
                          >
                            <ToolGlyph tool={tool} />
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <span className="absolute bottom-2.5 right-2.5 text-[10px] leading-none text-white/90">*</span>
                    <div className="absolute bottom-3 left-3 translate-y-1 rounded-full bg-white/95 px-4 py-2 text-[14px] font-medium leading-none text-[#2b2b2f] opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
