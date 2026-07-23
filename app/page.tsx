import type { Metadata } from "next";
import FooterMinimal from "@/components/FooterMinimal";
import NavMinimal from "@/components/NavMinimal";
import { StackSection } from "@/components/StackSection";
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

const sections = [
  { zIndex: 10, className: "bg-white", title: siteConfig.name },
  { zIndex: 20, id: "about", className: "bg-zinc-50", title: "About" },
  { zIndex: 30, id: "projects", className: "bg-white", title: "Projects" },
  { zIndex: 40, className: "bg-zinc-900 text-zinc-100", title: "Capabilities" },
  { zIndex: 50, className: "bg-zinc-50", title: "Writing" },
  { zIndex: 60, id: "contact", className: "bg-white", title: "Contact" },
];

export default function Home() {
  return (
    <div>
      <NavMinimal
        brand={siteConfig.name}
        items={[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "/blog", label: "Writing" },
          { href: "#contact", label: "Contact" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main>
        {sections.map((section) => (
          <StackSection
            key={section.zIndex}
            zIndex={section.zIndex}
            id={section.id}
            className={section.className}
          >
            <div className="mx-auto flex h-full w-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                {section.title}
              </h2>
            </div>
          </StackSection>
        ))}
      </main>
      <FooterMinimal name={siteConfig.name} email={siteConfig.email} />
    </div>
  );
}
