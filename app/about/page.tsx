import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookPage } from "@/components/BookPage";
import { transitionTypesFor } from "@/lib/book";
import { cvHref } from "@/lib/cv";
import {
  aboutBio,
  chapterNumber,
  education,
  epigraph,
  experience,
  featuredProjects,
  skillIndex,
  type IndexEntry,
} from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site-config";
import portrait from "@/public/images/mypic.png";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience, skills and the way I work.",
  alternates: {
    canonical: "/about",
  },
};

const sectionLabel =
  "font-serif text-sm font-semibold uppercase tracking-[0.18em] text-stone-500";

const rise = (n: number) => ({ "--rise": n }) as React.CSSProperties;

// Group the index under its first letters, as at the back of a book.
function byLetter(entries: IndexEntry[]) {
  const groups = new Map<string, IndexEntry[]>();
  for (const entry of entries) {
    const letter = entry.term[0].toUpperCase();
    groups.set(letter, [...(groups.get(letter) ?? []), entry]);
  }
  return [...groups.entries()];
}

function IndexReferences({ entry }: { entry: IndexEntry }) {
  const chapters = (entry.chapters ?? []).map((slug) => ({
    slug,
    numeral: chapterNumber(slug),
    title: featuredProjects.find((p) => p.slug === slug)?.title ?? slug,
  }));
  const parts: React.ReactNode[] = [
    ...chapters.map((chapter) => (
      <Link
        key={chapter.slug}
        href={`/work/${chapter.slug}`}
        transitionTypes={transitionTypesFor("/about", `/work/${chapter.slug}`)}
        aria-label={`Chapter ${chapter.numeral}: ${chapter.title}`}
        title={chapter.title}
        className="font-serif font-semibold text-forest underline-offset-4 hover:underline"
      >
        {chapter.numeral}
      </Link>
    )),
    ...(entry.also ?? []).map((name) => (
      <span key={name} className="italic text-stone-500">
        {name}
      </span>
    )),
  ];
  return (
    <span className="shrink-0 text-right text-sm">
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 ? ", " : null}
          {part}
        </span>
      ))}
    </span>
  );
}

export default function AboutPage() {
  const cv = cvHref();

  return (
    <BookPage
      left={
        <>
          <h1 className={sectionLabel}>About the author</h1>

          <blockquote className="rise ml-auto mt-6 max-w-xs text-right" style={rise(0)}>
            <p className="font-serif text-base italic leading-relaxed text-stone-600">
              {epigraph}
            </p>
          </blockquote>

          <div className="rise mt-8 flex items-center gap-5" style={rise(1)}>
            <div className="plate-mount w-24 shrink-0 sm:w-28">
              <Image
                src={portrait}
                alt={`Portrait of ${siteConfig.name}`}
                sizes="112px"
                placeholder="blur"
                className="aspect-[4/5] w-full rounded-[2px] object-cover object-[55%_30%]"
              />
            </div>
            <div className="min-w-0">
              <p className="font-serif text-xl font-semibold leading-snug text-forest sm:text-2xl">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Full stack developer · {siteConfig.location.city},{" "}
                {siteConfig.location.country}
              </p>
              <p className="mt-0.5 text-sm text-stone-500">
                {education.course}, {education.institution} · {education.year}
              </p>
            </div>
          </div>

          <div className="rise mt-8 space-y-4" style={rise(2)}>
            {aboutBio.map((paragraph, i) => (
              <p
                key={paragraph}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-forest"
                    : "text-base leading-relaxed text-stone-700"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {cv ? (
            <a
              href={cv}
              download
              className="rise mt-8 inline-block rounded-full border border-forest/30 px-5 py-2 text-sm font-medium text-forest transition hover:bg-forest hover:text-champagne"
              style={rise(3)}
            >
              Download CV ↓
            </a>
          ) : null}
        </>
      }
      right={
        <>
          <section aria-labelledby="chronology" className="rise" style={rise(2)}>
            <h2 id="chronology" className={sectionLabel}>
              Chronology
            </h2>
            <ol className="mt-5 space-y-5">
              {experience.map((job) => (
                <li
                  key={`${job.role}-${job.organisation}`}
                  className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4"
                >
                  <p className="pt-0.5 font-serif text-sm text-stone-500">
                    {job.period}
                  </p>
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-forest">
                      {job.role} · {job.organisation}
                    </h3>
                    {job.kind ? (
                      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                        {job.kind}
                      </p>
                    ) : null}
                    <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                      {job.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="index" className="rise mt-12" style={rise(3)}>
            <h2 id="index" className={sectionLabel}>
              Index
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Skills, with the chapters that show them in use.
            </p>
            <div className="mt-5 gap-x-8 sm:columns-2 spread:columns-1">
              {byLetter(skillIndex).map(([letter, entries]) => (
                <div key={letter} className="mb-4 break-inside-avoid">
                  <p
                    aria-hidden="true"
                    className="font-serif text-sm font-semibold text-terracotta"
                  >
                    {letter}
                  </p>
                  <ul className="mt-1 space-y-1">
                    {entries.map((entry) => {
                      const hasRefs = Boolean(entry.chapters?.length || entry.also?.length);
                      return (
                        <li key={entry.term} className="flex items-baseline gap-2 text-sm">
                          <span className="text-stone-700">{entry.term}</span>
                          {hasRefs ? (
                            <>
                              <span
                                aria-hidden="true"
                                className="min-w-3 flex-1 border-b border-dotted border-forest/25"
                              />
                              <IndexReferences entry={entry} />
                            </>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </>
      }
    />
  );
}
