import Link from "next/link";
import { ViewTransition } from "react";
import { featuredProjects } from "@/lib/portfolio-data";

type ProjectListProps = {
  // On a case study the list sits beside the open project, so the open
  // project's heading owns the shared transition name instead of the list.
  activeSlug?: string;
};

export function ProjectList({ activeSlug }: ProjectListProps) {
  const Heading = activeSlug ? "h2" : "h1";
  const Title = activeSlug ? "h3" : "h2";

  return (
    <>
      <Heading className="text-sm font-semibold uppercase tracking-widest text-stone-500">
        Selected work
      </Heading>

      <ol className="mt-6 divide-y divide-forest/10">
        {featuredProjects.map((project) => {
          const isActive = project.slug === activeSlug;
          const title = (
            <Title className="w-fit text-lg font-semibold tracking-tight text-forest sm:text-xl">
              {project.title}
            </Title>
          );

          return (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                transitionTypes={["open-project"]}
                aria-current={isActive ? "page" : undefined}
                className={`group -mx-3 flex items-center gap-6 rounded-lg px-3 py-6 transition-colors ${
                  isActive ? "bg-forest/5" : ""
                }`}
              >
                <div className="min-w-0 flex-1">
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
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    {project.summary}
                  </p>
                  <p className="mt-2 text-xs font-medium text-stone-500">
                    {project.tags.join(" · ")}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className={`text-xl transition group-hover:translate-x-1 group-hover:text-forest ${
                    isActive ? "text-forest" : "text-forest/40"
                  }`}
                >
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
