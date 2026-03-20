import ContactSectionEs from "@/components/sections/ContactSectionEs";
import ExperienceSectionEs from "@/components/sections/ExperienceSectionEs";
import FilterSectionEs from "@/components/sections/FilterSectionEs";
import HeroSectionEs from "@/components/sections/HeroSectionEs";
import ProjectsSectionEs from "@/components/sections/ProjectsSectionEs";
import ServiceSectionEs from "@/components/sections/ServiceSectionEs";
import StatsSectionEs from "@/components/sections/StatsSectionEs";

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
