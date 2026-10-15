import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookPage } from "@/components/BookPage";
import { transitionTypesFor } from "@/lib/book";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import portrait from "@/public/images/mypic.png";

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
  image: absoluteUrl("/images/mypic.png"),
  email: `mailto:${siteConfig.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: siteConfig.location.countryCode,
  },
  sameAs: siteConfig.socials.map((social) => social.href),
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

      <div className="cover-photo relative mt-6 h-24 w-24 overflow-hidden rounded-full ring-1 ring-forest/40 ring-offset-4 ring-offset-transparent sm:mt-8 sm:h-32 sm:w-32 spread:h-36 spread:w-36">
        <Image
          src={portrait}
          alt={`Portrait of ${siteConfig.name}`}
          fill
          sizes="(min-width: 1200px) 144px, (min-width: 640px) 128px, 96px"
          placeholder="blur"
          preload
          className="object-cover object-[55%_35%]"
        />
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
