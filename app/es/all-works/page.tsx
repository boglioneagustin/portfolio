import type { Metadata } from "next";
import AllWorksSectionEs from "@/components/sections/AllWorksSectionEs";

export const metadata: Metadata = {
  title: "Todos los proyectos | Boglione Agustin | Portfolio",
  description:
    "Explora todos los proyectos y casos de estudio de Boglione Agustin: automatizacion, generacion de leads con IA, plataformas web y desarrollo de productos digitales.",
  alternates: {
    canonical: "/es/all-works",
    languages: {
      en: "/all-works",
      es: "/es/all-works",
    },
  },
};

export default function AllWorksEsPage() {
  return (
    <main className="min-h-screen pb-10">
      <AllWorksSectionEs />
    </main>
  );
}
