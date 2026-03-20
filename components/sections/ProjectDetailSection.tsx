import Image from "next/image";
import Link from "next/link";
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
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import WorkCard from "@/components/ui/WorkCard";
import type { ProjectCaseStudy } from "@/lib/data";
import { allWorks } from "@/lib/data";
import { getToolLabel } from "@/lib/tool-label";

type ProjectDetailSectionProps = {
  project: ProjectCaseStudy;
};

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ToolLogo({ tool }: { tool: string }) {
  const key = tool.toLowerCase();

  if (key === "php") {
    return <SiPhp aria-hidden="true" className="text-[20px] text-[#777bb3]" />;
  }

  if (key === "codeigniter") {
    return <SiCodeigniter aria-hidden="true" className="text-[20px] text-[#ee4623]" />;
  }

  if (key === "figma") {
    return <SiFigma aria-hidden="true" className="text-[19px] text-[#f24e1e]" />;
  }

  if (key === "framer") {
    return <SiFramer aria-hidden="true" className="text-[19px] text-[#111111]" />;
  }

  if (key === "next.js" || key === "nextjs") {
    return <SiNextdotjs aria-hidden="true" className="text-[18px] text-[#111111]" />;
  }

  if (key === "node.js" || key === "nodejs") {
    return <SiNodedotjs aria-hidden="true" className="text-[18px] text-[#5fa04e]" />;
  }

  if (key === "n8n") {
    return <SiN8N aria-hidden="true" className="text-[18px] text-[#ea4b71]" />;
  }
  if (key === "apify") {
    return (
      <Image
        src="/images/tools/apify.png"
        alt=""
        width={18}
        height={18}
        aria-hidden="true"
        className="h-[18px] w-[18px] object-contain"
      />
    );
  }
  if (key === "firecrawl") {
    return (
      <Image
        src="/images/tools/firecrawl.png"
        alt=""
        width={18}
        height={18}
        aria-hidden="true"
        className="h-[18px] w-[18px] object-contain"
      />
    );
  }

  if (key === "excel" || key === "microsoft excel") {
    return <RiFileExcel2Fill aria-hidden="true" className="text-[19px] text-[#1d6f42]" />;
  }

  if (key === "html") {
    return <SiHtml5 aria-hidden="true" className="text-[19px] text-[#e34f26]" />;
  }

  if (key === "css") {
    return <SiCss aria-hidden="true" className="text-[19px] text-[#1572b6]" />;
  }

  if (key === "javascript" || key === "js") {
    return <SiJavascript aria-hidden="true" className="text-[19px] text-[#f7df1e]" />;
  }

  if (key === "sql" || key === "mysql") {
    return <SiMysql aria-hidden="true" className="text-[19px] text-[#00758f]" />;
  }

  if (key === "react") {
    return <SiReact aria-hidden="true" className="text-[19px] text-[#61dafb]" />;
  }

  if (key === "typescript") {
    return <SiTypescript aria-hidden="true" className="text-[19px] text-[#3178c6]" />;
  }

  if (key === "python") {
    return <SiPython aria-hidden="true" className="text-[19px] text-[#3776ab]" />;
  }

  return <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#66666d]">{tool.slice(0, 2)}</span>;
}

function placeholderToneClass(tone?: "dark" | "warm" | "neutral") {
  if (tone === "warm") {
    return "bg-[linear-gradient(125deg,#2a1f1a_0%,#5d3b2d_42%,#241c20_100%)]";
  }

  if (tone === "neutral") {
    return "bg-[linear-gradient(125deg,#d6d6d2_0%,#ccccca_48%,#e2e2de_100%)]";
  }

  return "bg-[linear-gradient(125deg,#0f141d_0%,#1a2432_48%,#0f141d_100%)]";
}

function CaseMedia({
  tone,
  className,
  imageSrc,
  imageAlt,
  sizes,
}: {
  tone?: "dark" | "warm" | "neutral";
  className: string;
  imageSrc?: string;
  imageAlt?: string;
  sizes: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[32px] ${placeholderToneClass(tone)} ${className}`}>
      {imageSrc ? (
        <Image src={imageSrc} alt={imageAlt ?? "Project image"} fill className="object-cover" sizes={sizes} />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.24),transparent_38%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_34%,rgba(255,255,255,0.14)_48%,transparent_66%)] opacity-55" />
        </>
      )}
    </div>
  );
}

export default function ProjectDetailSection({ project }: ProjectDetailSectionProps) {
  const relatedProjects = allWorks.filter((item) => project.relatedSlugs.includes(item.slug)).slice(0, 2);
  const ctaLabel = project.ctaLabel ?? "Contact";
  const isExternalCta = /^https?:\/\//i.test(project.contactHref);
  const isDisabledCta = Boolean(project.ctaDisabled);
  const industryTag = project.industry.join(" / ");

  return (
    <section className="pt-6 sm:pt-10">
      <Container>
        <div className="reveal-up mx-auto max-w-[900px] text-center">
          <div className="mb-4">
            <span className="reveal-text inline-flex rounded-full bg-[#f8f8f7] px-6 py-2.5 text-[14px] font-medium leading-[1.2] text-[#f2552c] sm:text-[16px]">
              {industryTag}
            </span>
          </div>
          <h1 className="reveal-text reveal-delay-1 text-[42px] font-medium leading-[1.1] tracking-[0] text-[#27272a] sm:text-[64px]">{project.title}</h1>
          <p className="reveal-text reveal-delay-2 mx-auto mt-6 max-w-[900px] text-center text-[18px] font-normal leading-[1.35] tracking-[0] text-[#27272a] sm:mt-7 sm:text-[20px] sm:leading-[1.3]">
            {project.intro}
          </p>
          {isDisabledCta ? (
            <span
              aria-disabled="true"
              className="button-soft mt-8 inline-flex cursor-not-allowed items-center gap-3 rounded-full bg-[#f8f8f7] px-7 py-3.5 text-[16px] font-medium text-[#2f2f34] opacity-95 sm:mt-9 sm:px-10 sm:py-4"
            >
              <span>{ctaLabel}</span>
              <span className="text-[#ef6a3a]">
                <ArrowRight />
              </span>
            </span>
          ) : isExternalCta ? (
            <a
              href={project.contactHref}
              target="_blank"
              rel="noreferrer noopener"
              className="button-soft mt-8 inline-flex items-center gap-3 rounded-full bg-[#f8f8f7] px-7 py-3.5 text-[16px] font-medium text-[#2f2f34] sm:mt-9 sm:px-10 sm:py-4"
            >
              <span>{ctaLabel}</span>
              <span className="text-[#ef6a3a]">
                <ArrowRight />
              </span>
            </a>
          ) : (
            <Link
              href={project.contactHref}
              className="button-soft mt-8 inline-flex items-center gap-3 rounded-full bg-[#f8f8f7] px-7 py-3.5 text-[16px] font-medium text-[#2f2f34] sm:mt-9 sm:px-10 sm:py-4"
            >
              <span>{ctaLabel}</span>
              <span className="text-[#ef6a3a]">
                <ArrowRight />
              </span>
            </Link>
          )}
        </div>

        <div className="reveal-up reveal-delay-1 mt-12">
          <CaseMedia
            tone={project.heroTone}
            className="aspect-[16/10] w-full sm:aspect-[16/9]"
            imageSrc={project.heroImage}
            imageAlt={project.heroImageAlt}
            sizes="(min-width: 1280px) 1200px, (min-width: 1024px) 92vw, 100vw"
          />
        </div>

        <div className="reveal-up reveal-delay-2 mt-10 sm:mt-12">
          <dl className="divide-y divide-black/7">
            {project.metaRows.map((row) => (
              <div key={row.label} className="grid grid-cols-1 gap-2 py-4 text-left md:grid-cols-[1fr_260px] md:items-start md:gap-3 md:py-5">
                <dt className="text-[18px] font-normal leading-[1.3] tracking-[0] text-[#91919a] sm:text-[20px]">{row.label}</dt>
                <dd className="text-[18px] font-medium leading-[1.3] tracking-[0] text-[#27272a] sm:text-[20px]">
                  {Array.isArray(row.value) ? (
                    <span className="block">
                      {row.value.map((part, index) => (
                        <span key={part} className="block">
                          {part}
                          {index < row.value.length - 1 ? <br /> : null}
                        </span>
                      ))}
                    </span>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}

            {project.tools && project.tools.length > 0 ? (
              <div className="grid grid-cols-1 gap-2 py-4 text-left md:grid-cols-[1fr_260px] md:items-center md:gap-3 md:py-5">
                <dt className="text-[18px] font-normal leading-[1.3] tracking-[0] text-[#91919a] sm:text-[20px]">Tools</dt>
                <dd>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        aria-label={getToolLabel(tool)}
                        data-tool-label={getToolLabel(tool)}
                        className="tool-icon-chip inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_5px_14px_rgba(0,0,0,0.08)] sm:h-10 sm:w-10"
                      >
                        <ToolLogo tool={tool} />
                      </span>
                    ))}
                  </div>
                </dd>
              </div>
            ) : null}
          </dl>
        </div>

        <div className="mt-14 space-y-14 sm:mt-20 sm:space-y-20">
          {project.blocks.map((block, index) => {
            const media = (
              <CaseMedia
                tone={block.tone}
                className="aspect-[4/5] w-full sm:aspect-[5/6]"
                imageSrc={block.image}
                imageAlt={block.imageAlt}
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
            );
            const text = (
              <div>
                <h2 className="text-[34px] font-medium leading-[1.2] tracking-[0] text-[#27272a] sm:text-[40px] sm:leading-[1.3]">{block.title}</h2>
                <p className="mt-4 text-left text-[18px] font-normal leading-[1.35] tracking-[0] text-[#27272a] sm:mt-5 sm:text-[20px] sm:leading-[1.3]">
                  {block.body}
                </p>
              </div>
            );

            return (
              <div key={block.title} className={index === 0 ? "reveal-up" : "reveal-up reveal-delay-1"}>
                <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
                  {block.imagePosition === "left" ? (
                    <>
                      {media}
                      {text}
                    </>
                  ) : (
                    <>
                      {text}
                      {media}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal-up mt-14 sm:mt-20">
          <p className="text-left text-[20px] font-normal leading-[1.35] tracking-[0] text-[#27272a] sm:text-[24px] sm:leading-[1.3]">
            {project.outcome}
          </p>
        </div>

        <div className="reveal-up reveal-delay-1 mt-10 sm:mt-12">
          <CaseMedia
            tone="neutral"
            className="aspect-[16/10] w-full sm:aspect-[16/9]"
            imageSrc={project.outcomeImage}
            imageAlt={project.outcomeImageAlt}
            sizes="(min-width: 1280px) 1200px, (min-width: 1024px) 92vw, 100vw"
          />
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="reveal-up">
            <SectionTitle
              tag="Projects"
              title={
                <>
                  Explore more
                  <br />
                  like this one
                </>
              }
            />
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {relatedProjects.map((work, index) => (
              <div key={work.slug} className={index === 0 ? "reveal-up" : "reveal-up reveal-delay-1"}>
                <WorkCard work={work} />
              </div>
            ))}
          </div>

          <div className="reveal-up reveal-delay-2 mt-10 text-center">
            <p className="section-description mx-auto max-w-[760px] text-[18px] leading-[1.35] sm:text-[24px] sm:leading-[1.3]">
              Selected projects that reflect my approach to design, development, and execution.
            </p>
            <Link
              href="/all-works"
              className="button-soft mt-8 inline-flex items-center gap-2 rounded-full bg-[#f8f8f7] px-8 py-4 text-[16px] font-medium text-[#2a2a2a]"
            >
              <span>View All Projects</span>
              <span className="text-[#ef6a3a]">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
