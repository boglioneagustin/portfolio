import type { Metadata } from "next";
import AboutCareerSectionEs from "@/components/sections/AboutCareerSectionEs";
import AboutContactSectionEs from "@/components/sections/AboutContactSectionEs";
import AboutHeroSectionEs from "@/components/sections/AboutHeroSectionEs";
import AboutSkillsSectionEs from "@/components/sections/AboutSkillsSectionEs";

export const metadata: Metadata = {
  title: "Sobre mi | Boglione Agustin | Portfolio",
  description:
    "Conoce el perfil profesional de Boglione Agustin: experiencia, historial laboral y habilidades clave en automatizacion, desarrollo de software e integracion de sistemas.",
  alternates: {
    canonical: "/es/about",
    languages: {
      en: "/about",
      es: "/es/about",
    },
  },
};

export default function AboutEsPage() {
  return (
    <main className="min-h-screen pb-10">
      <AboutHeroSectionEs />
      <AboutCareerSectionEs />
      <AboutSkillsSectionEs />
      <AboutContactSectionEs />
    </main>
  );
}
