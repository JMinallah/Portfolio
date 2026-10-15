"use client";

import Link from "next/link";
import { ViewTransition } from "react";
import { useContents } from "@/components/ContentsContext";
import { MoreWorkDeck } from "@/components/MoreWorkDeck";
import { ProjectStatus } from "@/components/ProjectStatus";
import { chapterNumber, featuredProjects } from "@/lib/portfolio-data";

type ProjectListProps = {
  // On a case study the contents sit beside the open chapter, so the open
  // chapter's heading owns the shared transition name instead of the list,
  // and the list stays short (no "More work" deck).
  activeSlug?: string;
};

// The picture beside the contents only exists on the two-page spread, and
// only a real mouse should change it (a tap is a click, not a preview).
function spreadIsOpen() {
  return window.matchMedia("(min-width: 1200px)").matches;
}


// The Work page as a book's table of contents: each featured project is a
// chapter, and smaller work sits in a deck of cards under "More work".
export function ProjectList({ activeSlug }: ProjectListProps) {
  const contents = useContents();
  const Heading = activeSlug ? "h2" : "h1";
  const Title = activeSlug ? "h3" : "h2";

  return (
    <>
      <Heading className="text-sm font-semibold uppercase tracking-widest text-stone-500">
        Contents
      </Heading>
      {activeSlug ? null : (
        <p className="mt-2 text-sm text-stone-500">
          Choose a chapter to read the full story.
        </p>
      )}

      <ol className="mt-6">
        {featuredProjects.map((project) => {
          const isActive = project.slug === activeSlug;
          const title = (
            <Title className="font-serif text-lg font-semibold leading-snug text-forest decoration-forest/40 underline-offset-4 group-hover:underline group-focus-visible:underline sm:text-xl">
              {project.title}
            </Title>
          );

          return (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                transitionTypes={["open-project"]}
                aria-current={isActive ? "page" : undefined}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse" && spreadIsOpen()) {
                    contents?.show(project.slug);
                  }
                }}
                onFocus={() => {
                  if (spreadIsOpen()) contents?.show(project.slug);
                }}
                className={`group -mx-3 flex items-baseline gap-3 rounded-lg px-3 py-3 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-forest/40 ${
                  isActive ? "bg-forest/5" : "hover:bg-forest/[0.03]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="w-7 shrink-0 font-serif text-sm font-semibold text-stone-400 sm:text-base"
                >
                  {chapterNumber(project.slug)}
                </span>
                {activeSlug ? (
                  title
                ) : (
                  <ViewTransition
                    name={`project-${project.slug}`}
                    share="project-morph"
                  >
                    {title}
                  </ViewTransition>
                )}
                <span
                  aria-hidden="true"
                  className="min-w-3 flex-1 border-b border-dotted border-forest/30 transition-colors group-hover:border-forest/60"
                />
                <ProjectStatus project={project} showTeam={false} />
              </Link>
            </li>
          );
        })}
      </ol>

      {activeSlug ? null : (
        <section aria-labelledby="more-work" className="mt-10">
          <h2
            id="more-work"
            className="text-sm font-semibold uppercase tracking-widest text-stone-500"
          >
            More work
          </h2>
          <MoreWorkDeck />
        </section>
      )}
    </>
  );
}
