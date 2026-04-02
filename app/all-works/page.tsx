import type { Metadata } from "next";
import AllWorksSection from "@/components/sections/AllWorksSection";

export const metadata: Metadata = {
  title: "All Projects | Boglione Agustin | Portfolio",
  description:
    "Explore all projects and case studies by Boglione Agustin, including workflow automation, AI lead generation, product design, and custom software builds.",
  alternates: {
    canonical: "/all-works",
    languages: {
      en: "/all-works",
      es: "/es/all-works",
    },
  },
};

export default function AllWorksPage() {
  return (
    <main className="min-h-screen pb-10">
      <AllWorksSection />
    </main>
  );
}
