import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SiCss,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMake,
  SiN8N,
  SiOpenai,
  SiReact,
  SiSalesforce,
  SiZapier,
  SiPython,
} from "react-icons/si";
import { HiOutlineBolt, HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineSignal } from "react-icons/hi2";
import { getToolLabel } from "@/lib/tool-label";

type ServiceIcon = "workflow" | "code" | "ai" | "integration";

type SkillSurprisePanelProps = {
  icon: ServiceIcon;
  tools: readonly string[];
  ctaLabel?: string;
  contactHref?: string;
};

const iconByService = {
  workflow: HiOutlineBolt,
  code: HiOutlineCodeBracket,
  ai: HiOutlineCpuChip,
  integration: HiOutlineSignal,
} as const;

function ToolGlyph({ tool }: { tool: string }) {
  const key = tool.toLowerCase();

  if (key === "n8n") return <SiN8N aria-hidden="true" className="text-[14px] text-[#ea4b71]" />;
  if (key === "zapier" || key === "zappier") return <SiZapier aria-hidden="true" className="text-[14px] text-[#ff4f00]" />;
  if (key === "make") return <SiMake aria-hidden="true" className="text-[14px] text-[#6b7cff]" />;
  if (key === "laravel") return <SiLaravel aria-hidden="true" className="text-[14px] text-[#ff2d20]" />;
  if (key === "react") return <SiReact aria-hidden="true" className="text-[14px] text-[#61dafb]" />;
  if (key === "html") return <SiHtml5 aria-hidden="true" className="text-[14px] text-[#e34f26]" />;
  if (key === "css") return <SiCss aria-hidden="true" className="text-[14px] text-[#1572b6]" />;
  if (key === "javascript" || key === "js") return <SiJavascript aria-hidden="true" className="text-[14px] text-[#f7df1e]" />;
  if (key === "python" || key === "phyton") return <SiPython aria-hidden="true" className="text-[14px] text-[#3776ab]" />;
  if (key === "chatgpt") return <SiOpenai aria-hidden="true" className="text-[14px] text-[#111111]" />;
  if (key === "gemini") return <SiGooglegemini aria-hidden="true" className="text-[14px] text-[#4f46e5]" />;
  if (key === "salesforce" || key === "saleforce") return <SiSalesforce aria-hidden="true" className="text-[14px] text-[#00a1e0]" />;
  if (key === "pipedrive")
    return (
      <Image
        src="/images/tools/pipedrive.png"
        alt=""
        width={14}
        height={14}
        aria-hidden="true"
        className="h-[14px] w-[14px] object-contain"
      />
    );

  return <span className="text-[9px] font-semibold uppercase tracking-[0.04em] text-[#66666d]">{tool.slice(0, 2)}</span>;
}

function getOrbit(total: number): Array<{ x: string; y: string }> {
  if (total <= 1) return [{ x: "0px", y: "-86px" }];
  if (total === 2) return [{ x: "-44px", y: "-74px" }, { x: "44px", y: "-74px" }];
  if (total === 3) return [{ x: "-70px", y: "-62px" }, { x: "0px", y: "-94px" }, { x: "70px", y: "-62px" }];
  if (total === 4) {
    return [
      { x: "-92px", y: "-48px" },
      { x: "-32px", y: "-84px" },
      { x: "32px", y: "-84px" },
      { x: "92px", y: "-48px" },
    ];
  }
  return [
    { x: "-110px", y: "-38px" },
    { x: "-56px", y: "-82px" },
    { x: "0px", y: "-98px" },
    { x: "56px", y: "-82px" },
    { x: "110px", y: "-38px" },
  ];
}

export default function SkillSurprisePanel({
  icon,
  tools,
  ctaLabel = "Get in touch",
  contactHref = "/contact",
}: SkillSurprisePanelProps) {
  const ServiceIcon = iconByService[icon];
  const orbit = getOrbit(Math.min(tools.length, 5));

  return (
    <Link
      href={contactHref}
      className="skill-surprise-panel group relative block h-[210px] rounded-[14px] border border-white/70"
      aria-label={ctaLabel}
    >
      <div className="skill-surprise-core">
        <ServiceIcon className="skill-surprise-main-icon" aria-hidden="true" />
        <span className="skill-surprise-cta">{ctaLabel}</span>
      </div>

      {tools.slice(0, 5).map((tool, index) => {
        const pos = orbit[index] ?? orbit[orbit.length - 1];
        const style = {
          "--tool-x": pos.x,
          "--tool-y": pos.y,
          transitionDelay: `${70 + index * 50}ms`,
        } as CSSProperties;

        return (
          <span
            key={`${tool}-${index}`}
            style={style}
            aria-label={getToolLabel(tool)}
            data-tool-label={getToolLabel(tool)}
            className="tool-icon-chip skill-tool-orbit inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_6px_14px_rgba(0,0,0,0.14)]"
          >
            <ToolGlyph tool={tool} />
          </span>
        );
      })}
    </Link>
  );
}
