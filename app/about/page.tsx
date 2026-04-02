import type { Metadata } from "next";
import AboutCareerSection from "@/components/sections/AboutCareerSection";
import AboutContactSection from "@/components/sections/AboutContactSection";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import AboutSkillsSection from "@/components/sections/AboutSkillsSection";

export const metadata: Metadata = {
  title: "About | Boglione Agustin | Portfolio",
  description:
    "Discover Boglione Agustin's professional background, career history, and core skills in AI automation, software development, and system integration.",
  alternates: {
    canonical: "/about",
    languages: {
      en: "/about",
      es: "/es/about",
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-10">
      <AboutHeroSection />
      <AboutCareerSection />
      <AboutSkillsSection />
      <AboutContactSection />
    </main>
  );
}
