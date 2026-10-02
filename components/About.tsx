import { skillGroups } from "@/lib/portfolio-data";

export function About() {
  const skills = skillGroups.flatMap((group) => group.skills);

  return (
    <section className="h-full rounded-2xl border border-stone-200 bg-white p-5">
      <h2 className="text-lg font-semibold tracking-tight text-forest">
        About
      </h2>
      {/* TODO: replace with your real bio */}
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        I&apos;m a full-stack developer who builds web applications with
        React/Next.js on the frontend and Node/Express or PHP on the
        backend, with technical SEO and AEO expertise baked in so what
        gets built is fast, structured, and discoverable.
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
