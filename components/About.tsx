import { skillGroups } from "@/lib/portfolio-data";

export function About() {
  return (
    <section className="mx-auto flex h-full w-full max-w-6xl flex-col justify-start px-4 pt-28 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          About
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.1fr_1.4fr]">
        <div>
          {/* TODO: replace with your real bio */}
          <p className="text-base leading-relaxed text-zinc-600">
            I&apos;m a full-stack developer who builds web applications with
            React/Next.js on the frontend and Node/Express or PHP on the
            backend. Alongside engineering, I bring technical SEO and
            AEO expertise to make sure what gets built is fast, structured,
            and actually discoverable.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-zinc-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
