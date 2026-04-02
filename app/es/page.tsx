import type { Metadata } from "next";
import ContactSectionEs from "@/components/sections/ContactSectionEs";
import ExperienceSectionEs from "@/components/sections/ExperienceSectionEs";
import FilterSectionEs from "@/components/sections/FilterSectionEs";
import HeroSectionEs from "@/components/sections/HeroSectionEs";
import ProjectsSectionEs from "@/components/sections/ProjectsSectionEs";
import ServiceSectionEs from "@/components/sections/ServiceSectionEs";
import StatsSectionEs from "@/components/sections/StatsSectionEs";

export const metadata: Metadata = {
  title: "Boglione Agustin | Portfolio",
  description:
    "Especialista en IA y automatizacion que construye sistemas web escalables, flujos automatizados y soluciones de software a medida para empresas en crecimiento.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
};

export default function HomeEsPage() {
  return (
    <main className="min-h-screen pb-5">
      <HeroSectionEs />
      <ExperienceSectionEs />
      <FilterSectionEs />
      <ProjectsSectionEs />
      <StatsSectionEs />
      <ServiceSectionEs />
      <ContactSectionEs />
    </main>
  );
}
