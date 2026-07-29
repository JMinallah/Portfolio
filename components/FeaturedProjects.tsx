import { featuredProjects } from "@/lib/portfolio-data";

export function FeaturedProjects() {
  return (
    <section className="mx-auto flex h-full w-full max-w-6xl flex-col justify-start px-4 pt-28 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-umber-900 md:text-3xl">
          Featured Projects
        </h2>
        <a className="text-sm font-medium text-umber-600 hover:text-umber-900" href="#">
          See all
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className="reveal-card rounded-2xl border border-umber-200 bg-umber-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <h3 className="text-lg font-semibold text-umber-900">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-umber-600">
              {project.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-umber-100 px-2.5 py-1 text-xs font-medium text-umber-700"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={`/work/${project.slug}`}
              className="mt-5 inline-flex text-sm font-medium text-umber-800 hover:text-umber-950"
            >
              Explore case study
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
