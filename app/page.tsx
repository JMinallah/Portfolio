import type { Metadata } from "next";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import FooterMinimal from "@/components/FooterMinimal";
import { Hero } from "@/components/Hero";
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
    <div className="flex min-h-full flex-col bg-champagne">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <Hero />
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div id="about" className="lg:col-span-5">
            <About />
          </div>
          <div id="projects" className="lg:col-span-7">
            <FeaturedProjects />
          </div>
          <div id="capabilities" className="lg:col-span-6">
            <Capabilities />
          </div>
          <div id="contact" className="lg:col-span-6">
            <Contact />
          </div>
        </div>
      </main>
      <FooterMinimal name={siteConfig.name} email={siteConfig.email} />
    </div>
  );
}
