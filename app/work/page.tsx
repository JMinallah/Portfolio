import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { BookPage } from "@/components/BookPage";
import { featuredProjects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <BookPage>
      <h1 className="text-sm font-semibold uppercase tracking-widest text-stone-500">
        Selected work
      </h1>

      <ol className="mt-6 divide-y divide-forest/10">
        {featuredProjects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              transitionTypes={["open-project"]}
              className="group flex items-center gap-6 py-6"
            >
              <div className="min-w-0 flex-1">
                <ViewTransition name={`project-${project.slug}`} share="project-morph">
                  <h2 className="w-fit text-lg font-semibold tracking-tight text-forest sm:text-xl">
                    {project.title}
                  </h2>
                </ViewTransition>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                  {project.summary}
                </p>
                <p className="mt-2 text-xs font-medium text-stone-500">
                  {project.tags.join(" · ")}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="text-xl text-forest/40 transition group-hover:translate-x-1 group-hover:text-forest"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </BookPage>
  );
}
