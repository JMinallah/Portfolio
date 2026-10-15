import type { Metadata } from "next";
import Link from "next/link";
import { BookPage } from "@/components/BookPage";
import { transitionTypesFor } from "@/lib/book";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: `${absoluteUrl("/")}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  jobTitle: "Full-stack developer",
  // TODO: add your real social profile URLs
  sameAs: [],
};

export default function Home() {
  return (
    <BookPage cover="front">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <p className="cover-label">Portfolio</p>

      {/* TODO: replace with your photo, e.g. <Image src="/me.jpg" … className="rounded-full" /> */}
      <div
        aria-hidden="true"
        className="cover-photo mt-6 flex h-24 w-24 items-center justify-center rounded-full bg-forest/5 font-serif text-3xl text-forest ring-1 ring-forest/40 ring-offset-4 ring-offset-transparent sm:mt-8 sm:h-32 sm:w-32 sm:text-4xl spread:h-36 spread:w-36"
      >
        JM
      </div>

      <h1 className="mt-6 max-w-sm font-serif text-3xl font-semibold leading-tight text-forest text-balance sm:text-4xl">
        {siteConfig.name}
      </h1>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-forest/75">
        Full-stack developer
      </p>
      <p className="cover-extra mt-5 max-w-xs text-sm leading-relaxed text-forest/75">
        Fast, discoverable web apps, with technical SEO and AEO built in from
        the first line of code.
      </p>

      <Link
        href="/work"
        transitionTypes={transitionTypesFor("/", "/work")}
        className="mt-7 rounded-full bg-forest px-6 py-3 text-sm font-medium text-champagne transition hover:brightness-125"
      >
        Open the book →
      </Link>
      <p className="cover-extra mt-4 text-xs text-forest/70">
        Swipe, or use the ← → keys, to turn pages.
      </p>
    </BookPage>
  );
}
