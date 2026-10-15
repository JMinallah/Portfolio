import type { Metadata } from "next";
import Link from "next/link";
import { BookPage } from "@/components/BookPage";
import { transitionTypesFor } from "@/lib/book";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The end",
  description: "Thanks for reading. Get in touch about your project.",
  alternates: {
    canonical: "/end",
  },
  // A closing page; Contact and Home carry the content worth indexing.
  robots: { index: false, follow: true },
};

export default function BackCoverPage() {
  return (
    <BookPage cover="back">
      <p className="cover-label">The end</p>

      <h1 className="mt-8 max-w-sm font-serif text-3xl font-semibold leading-tight text-forest text-balance sm:text-4xl">
        Thanks for reading
      </h1>
      <p className="mt-5 max-w-xs text-sm leading-relaxed text-forest/75">
        Have a project in mind, or just want to say hello? I&apos;d love to
        hear from you.
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-4 break-all font-serif text-xl text-forest underline-offset-4 hover:underline"
      >
        {siteConfig.email}
      </a>
      {/* TODO: add social links (GitHub, LinkedIn) here once siteConfig has them */}

      <Link
        href="/"
        transitionTypes={transitionTypesFor("/end", "/")}
        className="mt-10 rounded-full border border-forest/40 px-5 py-2.5 text-sm font-medium text-forest transition hover:bg-forest hover:text-champagne"
      >
        ← Back to the start
      </Link>

      <p className="cover-extra mt-10 max-w-xs text-[11px] leading-relaxed text-forest/70">
        Set in IBM Plex Sans and IBM Plex Serif. Built with Next.js. Forest
        floor photo by Dimitri Yakymuk, public domain.
      </p>
    </BookPage>
  );
}
