import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavMinimal from "@/components/NavMinimal";
import FooterMinimal from "@/components/FooterMinimal";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
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

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((entry) => entry.slug === slug);

  if (!project) notFound();

  return (
    <div>
      <NavMinimal
        brand={siteConfig.name}
        items={[
          { href: "/#projects", label: "Projects" },
          { href: "/#about", label: "About" },
          { href: "/blog", label: "Writing" },
          { href: "/#contact", label: "Contact" },
        ]}
      />
      <main className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/#projects"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          ← Back to projects
        </Link>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700"
            >
              {tag}
            </li>
          ))}
        </ul>

        <dl className="mt-10 space-y-8">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Role
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-zinc-700">
              {project.role}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Stack
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-zinc-700">
              {project.stack.join(", ")}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Problem
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-zinc-700">
              {project.problem}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Solution
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-zinc-700">
              {project.solution}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Outcome
            </dt>
            <dd className="mt-2 text-base leading-relaxed text-zinc-700">
              {project.outcome}
            </dd>
          </div>
        </dl>
      </main>
      <FooterMinimal name={siteConfig.name} email={siteConfig.email} />
    </div>
  );
}
