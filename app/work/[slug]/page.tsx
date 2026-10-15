import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ViewTransition } from "react";
import { BookPage } from "@/components/BookPage";
import { ProjectList } from "@/components/ProjectList";
import { ProjectStatus } from "@/components/ProjectStatus";
import { absoluteUrl } from "@/lib/site-config";
import {
  chapterNumber,
  featuredProjects,
  type Screenshot,
} from "@/lib/portfolio-data";

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
      images: [{ url: project.screenshots[0].src.src, alt: project.screenshots[0].alt }],
    },
  };
}

const sectionLabel =
  "font-serif text-sm font-semibold uppercase tracking-[0.18em] text-stone-500";

// The page is at most ~600px wide: half the spread, or the single sheet.
const screenshotSizes = "(min-width: 1200px) 560px, (min-width: 800px) 680px, 100vw";

function Figure({
  shot,
  number,
  rise,
}: {
  shot: Screenshot;
  number: number;
  rise: number;
}) {
  return (
    <figure className="rise mt-8" style={{ "--rise": rise } as React.CSSProperties}>
      <div className="plate-mount">
        <Image
          src={shot.src}
          alt={shot.alt}
          sizes={screenshotSizes}
          placeholder="blur"
          preload={number === 1}
          className="h-auto w-full rounded-[2px]"
        />
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-stone-500">
        <span className="font-serif font-semibold text-stone-600">Fig. {number}.</span>{" "}
        {shot.caption ?? shot.alt}
      </figcaption>
    </figure>
  );
}

export default async function CaseStudyPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const index = featuredProjects.findIndex((entry) => entry.slug === slug);
  const project = featuredProjects[index];

  if (!project) notFound();

  const next = featuredProjects[index + 1];
  const numeral = chapterNumber(project.slug);

  return (
    <BookPage
      single="right"
      left={<ProjectList activeSlug={project.slug} />}
      right={
        <article>
          <Link
            href="/work"
            transitionTypes={["close-project"]}
            className="text-sm font-medium text-stone-500 hover:text-forest"
          >
            ← Contents
          </Link>

          <div
            className="rise mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2"
            style={{ "--rise": 0 } as React.CSSProperties}
          >
            <p className={sectionLabel}>Chapter {numeral}</p>
            <ProjectStatus project={project} />
          </div>
          <ViewTransition
            name={`project-${project.slug}`}
            share="project-morph"
          >
            <h1 className="mt-3 w-fit font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              {project.title}
            </h1>
          </ViewTransition>
          <div
            aria-hidden="true"
            className="rise mt-5 h-px w-12 bg-forest/40"
            style={{ "--rise": 1 } as React.CSSProperties}
          />
          <p className="rise mt-5 text-lg leading-relaxed text-stone-700" style={{ "--rise": 1 } as React.CSSProperties}>
            {project.summary}
          </p>

          <Figure
            shot={project.screenshots[0]}
            number={1}
            rise={2}
          />

          {/* Margin notes: the facts a reader checks at a glance. */}
          <dl
            className="rise mt-8 space-y-4 border-l-2 border-terracotta/40 pl-5"
            style={{ "--rise": 3 } as React.CSSProperties}
          >
            <div>
              <dt className={sectionLabel}>Role</dt>
              <dd className="mt-1 text-sm leading-relaxed text-stone-700">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className={sectionLabel}>Built with</dt>
              <dd className="mt-1 text-sm leading-relaxed text-stone-700">
                {project.stack.join(" · ")}
              </dd>
            </div>
            {project.links.length > 0 ? (
              <div>
                <dt className="sr-only">Links</dt>
                <dd className="flex flex-wrap gap-3 pt-1">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-forest/25 px-4 py-1.5 text-sm font-medium text-forest transition hover:bg-forest hover:text-champagne"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>

          <section aria-labelledby="problem" className="rise mt-10" style={{ "--rise": 4 } as React.CSSProperties}>
            <h2 id="problem" className={sectionLabel}>
              The problem
            </h2>
            <p className="drop-cap mt-3 text-base leading-relaxed text-stone-700">
              {project.problem}
            </p>
          </section>

          <section aria-labelledby="work" className="rise mt-10" style={{ "--rise": 5 } as React.CSSProperties}>
            <h2 id="work" className={sectionLabel}>
              What I did
            </h2>
            <ul className="mt-3 space-y-3">
              {project.work.map((point) => (
                <li
                  key={point}
                  className="relative pl-5 text-base leading-relaxed text-stone-700 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-forest/40"
                >
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="result" className="rise mt-10" style={{ "--rise": 6 } as React.CSSProperties}>
            <h2 id="result" className={sectionLabel}>
              The result
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-700">
              {project.result}
            </p>
          </section>

          {project.screenshots.slice(1).map((shot, i) => (
            <Figure key={shot.alt} shot={shot} number={i + 2} rise={7} />
          ))}

          {/* On the spread the contents beside this page already list the
              next chapter, so this only shows on the single sheet. */}
          <nav
            aria-label="Chapters"
            className="rise mt-12 border-t border-forest/10 pt-6 spread:hidden"
            style={{ "--rise": 8 } as React.CSSProperties}
          >
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                transitionTypes={["open-project"]}
                className="font-serif text-lg font-semibold text-forest underline-offset-4 hover:underline"
              >
                Next chapter: {next.title} →
              </Link>
            ) : (
              <Link
                href="/work"
                transitionTypes={["close-project"]}
                className="font-serif text-lg font-semibold text-forest underline-offset-4 hover:underline"
              >
                ← Back to the contents
              </Link>
            )}
          </nav>
        </article>
      }
    />
  );
}
