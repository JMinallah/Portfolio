import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ViewTransition } from "react";
import { BookPage } from "@/components/BookPage";
import { absoluteUrl } from "@/lib/site-config";
import { featuredProjects } from "@/lib/portfolio-data";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((entry) => entry.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: absoluteUrl(`/work/${slug}`),
    },
  };
}

export default async function CaseStudyPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((entry) => entry.slug === slug);

  if (!project) notFound();

  const sections = [
    { label: "Problem", body: project.problem },
    { label: "Solution", body: project.solution },
    { label: "Outcome", body: project.outcome },
  ];

  return (
    <BookPage>
      <Link
        href="/work"
        transitionTypes={["close-project"]}
        className="text-sm font-medium text-stone-500 hover:text-forest"
      >
        ← All work
      </Link>

      <ViewTransition name={`project-${project.slug}`} share="project-morph">
        <h1 className="mt-5 w-fit text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
          {project.title}
        </h1>
      </ViewTransition>
      <p className="mt-4 text-base leading-relaxed text-stone-600">
        {project.summary}
      </p>

      <dl className="mt-8 grid gap-6 border-y border-forest/10 py-6 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-widest text-stone-500">
            Role
          </dt>
          <dd className="mt-1.5 text-sm text-stone-700">{project.role}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-widest text-stone-500">
            Stack
          </dt>
          <dd className="mt-1.5 text-sm text-stone-700">
            {project.stack.join(" · ")}
          </dd>
        </div>
      </dl>

      <dl className="mt-8 space-y-8">
        {sections.map((section) => (
          <div key={section.label}>
            <dt className="text-xs font-semibold uppercase tracking-widest text-stone-500">
              {section.label}
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-stone-700">
              {section.body}
            </dd>
          </div>
        ))}
      </dl>
    </BookPage>
  );
}
