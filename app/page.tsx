import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FilterSection from "@/components/sections/FilterSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServiceSection from "@/components/sections/ServiceSection";
import StatsSection from "@/components/sections/StatsSection";

export const metadata: Metadata = {
  title: "Boglione Agustin | Portfolio",
  description:
    "AI and automation specialist building scalable web systems, workflow automation, and custom software solutions for startups and growing teams.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen pb-5">
      <HeroSection />
      <ExperienceSection />
      <FilterSection />
      <ProjectsSection />
      <StatsSection />
      <ServiceSection />
      <ContactSection />
    </main>
  );
}
