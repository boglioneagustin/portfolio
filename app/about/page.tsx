import AboutCareerSection from "@/components/sections/AboutCareerSection";
import AboutContactSection from "@/components/sections/AboutContactSection";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import AboutSkillsSection from "@/components/sections/AboutSkillsSection";

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
