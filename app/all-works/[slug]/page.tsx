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
      title: "Project Not Found | Boglione Agustin | Portfolio",
      description: "The requested project could not be found in the portfolio.",
    };
  }

  return {
    title: `${project.title} | Boglione Agustin | Portfolio`,
    description: project.intro,
    alternates: {
      canonical: `/all-works/${project.slug}`,
      languages: {
        en: `/all-works/${project.slug}`,
        es: `/es/all-works/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.title} | Boglione Agustin | Portfolio`,
      description: project.intro,
      url: `https://boglioneagustin.com/all-works/${project.slug}`,
      type: "article",
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
