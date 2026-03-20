import Link from "next/link";
import Container from "@/components/layout/Container";
import WorkCard from "@/components/ui/WorkCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { allWorksEs } from "@/lib/data-es";

export default function ProjectsSectionEs() {
  const featuredWorks = allWorksEs.filter((item) =>
    ["quoting-system", "gamifying-collaborative-learning", "regionally", "ai-lead-generation-with-n8n"].includes(item.slug)
  );

  return (
    <section id="proyectos" className="pt-20 sm:pt-24">
      <Container>
        <div className="reveal-up">
          <SectionTitle
            tag="Proyectos"
            title="Disenado, construido y lanzado"
            description="Proyectos seleccionados que reflejan mi enfoque en diseno, desarrollo y ejecucion."
          />
        </div>
        <div className="reveal-up reveal-delay-1 mt-7 text-center">
          <Link
            href="/es/all-works"
            className="button-soft inline-flex items-center gap-2 rounded-full bg-[#f8f8f7] px-7 py-3.5 text-base font-medium text-[#2a2a2a]"
          >
            <span>Ver todos los proyectos</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[#ef6a3a]">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {featuredWorks.map((work, index) => (
            <div
              key={work.slug}
              className={
                index === 0
                  ? "reveal-up"
                  : index === 1
                    ? "reveal-up reveal-delay-1"
                    : index === 2
                      ? "reveal-up reveal-delay-2"
                      : "reveal-up reveal-delay-3"
              }
            >
              <WorkCard work={work} hrefPrefix="/es/all-works" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
