import { featuredProjects } from "@/lib/portfolio-data";

export function FeaturedProjects() {
  return (
    <section className="h-full rounded-2xl border border-stone-200 bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-forest">
          Featured Projects
        </h2>
        <a className="text-xs font-medium text-stone-500 hover:text-forest" href="#">
          See all
        </a>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-stone-200 bg-stone-50 p-4 transition hover:border-stone-400"
          >
            <h3 className="text-sm font-semibold text-forest">{project.title}</h3>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-600">
              {project.summary}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 2).map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-stone-700"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={`/work/${project.slug}`}
              className="mt-3 inline-flex text-xs font-medium text-forest hover:underline"
            >
              Case study →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
