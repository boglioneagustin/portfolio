import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailSection from "@/components/sections/ProjectDetailSection";
import { getProjectBySlug, projectCaseStudies } from "@/lib/data";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Agustin A. Boglione`,
    description: project.intro,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-10">
      <ProjectDetailSection project={project} />
    </main>
  );
}
