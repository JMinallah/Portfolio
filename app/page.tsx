import type { Metadata } from "next";
import Link from "next/link";
import { BookPage } from "@/components/BookPage";
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
    <BookPage
      centered
      left={
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          {/* TODO: replace with your photo, e.g. <Image src="/me.jpg" … className="rounded-full" /> */}
          <div
            aria-hidden="true"
            className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-forest text-3xl font-semibold text-champagne sm:h-32 sm:w-32 spread:h-56 spread:w-56 spread:text-5xl"
          >
            JM
          </div>
        </>
      }
      right={
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-md text-2xl font-semibold leading-snug tracking-tight text-forest sm:text-3xl">
            Hi, I build fast, discoverable web apps.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-stone-600">
            Full-stack developer working across React, Next.js, Node and PHP,
            with technical SEO and AEO built in from the first line of code.
          </p>

          <Link
            href="/work"
            transitionTypes={["flip-forward"]}
            className="mt-8 rounded-full bg-forest px-6 py-3 text-sm font-medium text-champagne transition hover:brightness-125"
          >
            Open the book →
          </Link>
          <p className="mt-4 text-xs text-stone-500">
            Swipe, or use the ← → keys, to turn pages.
          </p>
        </div>
      }
    />
  );
}
