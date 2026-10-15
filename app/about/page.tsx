import type { Metadata } from "next";
import { BookPage } from "@/components/BookPage";
import { skillGroups } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "About",
  description: "Background, skills and the way I work.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <BookPage>
      <h1 className="text-sm font-semibold uppercase tracking-widest text-stone-500">
        About
      </h1>
      {/* TODO: replace with your real bio */}
      <p className="mt-6 text-lg leading-relaxed text-forest sm:text-xl">
        I&apos;m a full-stack developer who builds web applications with
        React/Next.js on the frontend and Node/Express or PHP on the backend,
        with technical SEO and AEO expertise baked in so what gets built is
        fast, structured, and discoverable.
      </p>

      <dl className="mt-10 divide-y divide-forest/10 border-t border-forest/10">
        {skillGroups.map((group) => (
          <div key={group.title} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <dt className="text-sm font-semibold text-forest">{group.title}</dt>
            <dd className="text-sm leading-relaxed text-stone-600">
              {group.skills.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </BookPage>
  );
}
