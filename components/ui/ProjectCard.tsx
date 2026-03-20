import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-hover-card overflow-hidden rounded-[28px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <Link href={`/all-works/${project.slug}`} className="group block focus-visible:outline-none">
        <div className="media-scale relative aspect-[5/6] overflow-hidden">
          <Image src={project.image} alt={project.alt} fill className="object-cover" sizes="(min-width: 768px) 48vw, 100vw" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/55 bg-white px-5 py-2.5 text-[13px] font-medium text-[#27272a] shadow-[0_6px_16px_rgba(0,0,0,0.10)]">
              <span>{project.title}</span>
              <span className="text-[#a1a1aa]">/</span>
              <span className="text-[#5f5f66]">{project.year}</span>
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
