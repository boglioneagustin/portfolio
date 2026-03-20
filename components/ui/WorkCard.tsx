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
import { getProjectBySlug, type WorkItem } from "@/lib/data";
import { getToolLabel } from "@/lib/tool-label";

type WorkCardProps = {
  work: WorkItem;
  hrefPrefix?: string;
};

function ToolGlyph({ tool }: { tool: string }) {
  const key = tool.toLowerCase();

  if (key === "php") return <SiPhp aria-hidden="true" className="text-[15px] text-[#777bb3]" />;
  if (key === "codeigniter") return <SiCodeigniter aria-hidden="true" className="text-[15px] text-[#ee4623]" />;
  if (key === "figma") return <SiFigma aria-hidden="true" className="text-[14px] text-[#f24e1e]" />;
  if (key === "framer") return <SiFramer aria-hidden="true" className="text-[14px] text-[#111111]" />;
  if (key === "next.js" || key === "nextjs") return <SiNextdotjs aria-hidden="true" className="text-[14px] text-[#111111]" />;
  if (key === "node.js" || key === "nodejs") return <SiNodedotjs aria-hidden="true" className="text-[14px] text-[#5fa04e]" />;
  if (key === "n8n") return <SiN8N aria-hidden="true" className="text-[14px] text-[#ea4b71]" />;
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
  if (key === "excel" || key === "microsoft excel") return <RiFileExcel2Fill aria-hidden="true" className="text-[14px] text-[#1d6f42]" />;
  if (key === "html") return <SiHtml5 aria-hidden="true" className="text-[14px] text-[#e34f26]" />;
  if (key === "css") return <SiCss aria-hidden="true" className="text-[14px] text-[#1572b6]" />;
  if (key === "javascript" || key === "js") return <SiJavascript aria-hidden="true" className="text-[14px] text-[#f7df1e]" />;
  if (key === "sql" || key === "mysql") return <SiMysql aria-hidden="true" className="text-[14px] text-[#00758f]" />;
  if (key === "react") return <SiReact aria-hidden="true" className="text-[14px] text-[#61dafb]" />;
  if (key === "typescript") return <SiTypescript aria-hidden="true" className="text-[14px] text-[#3178c6]" />;
  if (key === "python") return <SiPython aria-hidden="true" className="text-[14px] text-[#3776ab]" />;

  return <span className="text-[9px] font-semibold uppercase tracking-[0.04em] text-[#66666d]">{tool.slice(0, 2)}</span>;
}

export default function WorkCard({ work, hrefPrefix = "/all-works" }: WorkCardProps) {
  const caseStudy = getProjectBySlug(work.slug);

  return (
    <article className="project-hover-card overflow-hidden rounded-[28px] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.04)]">
      <Link href={`${hrefPrefix}/${work.slug}`} className="group block focus-visible:outline-none">
        <div className="media-scale relative aspect-[6/5] overflow-hidden bg-[#d7d7d4]">
          {caseStudy?.previewImage || caseStudy?.heroImage ? (
            <Image
              src={caseStudy?.previewImage ?? caseStudy?.heroImage ?? ""}
              alt={caseStudy?.previewImageAlt ?? caseStudy?.heroImageAlt ?? `${work.title} cover`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 48vw, 100vw"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,#10141b_0%,#1b2637_52%,#0f141c_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.35),transparent_42%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_32%,rgba(255,255,255,0.16)_48%,transparent_66%)] opacity-50" />
            </>
          )}

          {caseStudy?.tools && caseStudy.tools.length > 0 ? (
            <div className="absolute left-4 top-4 z-[2] flex items-center gap-1.5">
              {caseStudy.tools.map((tool) => (
                <span
                  key={tool}
                  aria-label={getToolLabel(tool)}
                  data-tool-label={getToolLabel(tool)}
                  className="tool-icon-chip inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_6px_14px_rgba(0,0,0,0.14)] [&:nth-child(n+4)]:hidden sm:[&:nth-child(n+4)]:inline-flex"
                >
                  <ToolGlyph tool={tool} />
                </span>
              ))}
            </div>
          ) : null}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />

          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3">
            <div className="inline-flex max-w-[calc(100%-64px)] items-center gap-2.5 rounded-full border border-white/55 bg-white px-4 py-2.5 text-[13px] font-medium text-[#27272a] shadow-[0_6px_16px_rgba(0,0,0,0.10)] sm:max-w-none sm:gap-3 sm:px-5">
              <span className="truncate">{work.title}</span>
              <span className="text-[#a1a1aa]">/</span>
              <span className="text-[#5f5f66]">{work.year}</span>
            </div>

            <span className="project-hover-arrow pointer-events-none grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-white text-[#ef5d30] shadow-[0_6px_16px_rgba(0,0,0,0.10)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 12H18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M12 6L18 12L12 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
