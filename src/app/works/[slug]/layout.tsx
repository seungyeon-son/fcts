import type { Metadata } from "next";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Work",
      alternates: { canonical: `/works/${slug}` },
    };
  }

  const cleanTitle = project.title.replace(/\n/g, " ").trim();
  const title = `${project.subtitle} - ${cleanTitle}`;
  const description =
    project.cardDesc ?? project.heroContext ?? `${project.subtitle} UX 디자인 프로젝트 케이스 by FCTS.`;

  return {
    title,
    description,
    keywords: [project.subtitle, project.category, ...project.tags, "FCTS", "UX 케이스 스터디"],
    alternates: { canonical: `/works/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/works/${project.slug}`,
      images: project.coverImage ? [{ url: project.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function WorkDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
