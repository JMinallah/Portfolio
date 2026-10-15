import type { Metadata } from "next";
import { BookPage } from "@/components/BookPage";
import { cvHref } from "@/lib/cv";
import {
  aboutBio,
  education,
  experience,
  skillGroups,
} from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience, skills and the way I work.",
  alternates: {
    canonical: "/about",
  },
};

const sectionLabel =
  "text-sm font-semibold uppercase tracking-widest text-stone-500";

export default function AboutPage() {
  const cv = cvHref();

  return (
    <BookPage
      left={
        <>
          <h1 className={sectionLabel}>About</h1>
          <div className="mt-6 space-y-4">
            {aboutBio.map((paragraph, i) => (
              <p
                key={paragraph}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-forest sm:text-xl"
                    : "text-base leading-relaxed text-stone-700"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className={`${sectionLabel} mt-10`}>Experience</h2>
          <ol className="mt-4 divide-y divide-forest/10 border-t border-forest/10">
            {experience.map((job) => (
              <li key={`${job.role}-${job.organisation}`} className="py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-base font-semibold text-forest">
                    {job.role} · {job.organisation}
                  </h3>
                  <p className="text-sm text-stone-500">
                    {[job.kind, job.period].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {job.description}
                </p>
              </li>
            ))}
          </ol>

          {cv ? (
            <a
              href={cv}
              download
              className="mt-6 inline-block rounded-full border border-forest/30 px-5 py-2 text-sm font-medium text-forest transition hover:bg-forest hover:text-champagne"
            >
              Download CV ↓
            </a>
          ) : null}
        </>
      }
      right={
        <>
          <h2 className={sectionLabel}>Skills</h2>
          <dl className="mt-6 divide-y divide-forest/10 border-t border-forest/10">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6"
              >
                <dt className="text-sm font-semibold text-forest">{group.title}</dt>
                <dd className="text-sm leading-relaxed text-stone-600">
                  {group.skills.join(", ")}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className={`${sectionLabel} mt-10`}>Education</h2>
          <p className="mt-4 text-base text-forest">
            <span className="font-semibold">{education.course}</span>
            <span className="text-stone-600">
              {" "}
              · {education.institution} · {education.year}
            </span>
          </p>
        </>
      }
    />
  );
}
