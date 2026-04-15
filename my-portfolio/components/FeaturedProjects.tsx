import { featuredProjects } from "@/lib/portfolio-data";

export function FeaturedProjects() {
  return (
    <section id="projects" className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          Featured Projects
        </h2>
        <a className="text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#">
          See all
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className="reveal-card rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
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
            <a
              href={project.href}
              className="mt-5 inline-flex text-sm font-medium text-zinc-800 hover:text-zinc-950"
            >
              Explore case study
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
