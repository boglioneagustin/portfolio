import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FilterSection from "@/components/sections/FilterSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServiceSection from "@/components/sections/ServiceSection";
import StatsSection from "@/components/sections/StatsSection";

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
