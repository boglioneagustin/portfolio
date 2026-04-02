import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailSectionEs from "@/components/sections/ProjectDetailSectionEs";
import { getProjectBySlugEs, projectCaseStudiesEs } from "@/lib/data-es";

type ProjectDetailEsPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectCaseStudiesEs.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailEsPageProps): Metadata {
  const project = getProjectBySlugEs(params.slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} | Agustin A. Boglione`,
    description: project.intro,
  };
}

export default function ProjectDetailEsPage({ params }: ProjectDetailEsPageProps) {
  const project = getProjectBySlugEs(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-10">
      <ProjectDetailSectionEs project={project} />
    </main>
  );
}
