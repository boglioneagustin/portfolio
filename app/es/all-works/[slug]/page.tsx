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
      title: "Proyecto no encontrado | Boglione Agustin | Portfolio",
      description: "El proyecto solicitado no se encontro en el portfolio.",
    };
  }

  return {
    title: `${project.title} | Boglione Agustin | Portfolio`,
    description: project.intro,
    alternates: {
      canonical: `/es/all-works/${project.slug}`,
      languages: {
        en: `/all-works/${project.slug}`,
        es: `/es/all-works/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.title} | Boglione Agustin | Portfolio`,
      description: project.intro,
      url: `https://boglioneagustin.com/es/all-works/${project.slug}`,
      type: "article",
      locale: "es_AR",
      images: project.previewImage
        ? [{ url: project.previewImage, alt: project.previewImageAlt ?? project.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Boglione Agustin | Portfolio`,
      description: project.intro,
      images: project.previewImage ? [project.previewImage] : undefined,
    },
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
