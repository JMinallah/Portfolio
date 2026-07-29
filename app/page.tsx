import type { Metadata } from "next";
import type { CatVariant } from "@/components/Cat";
import FooterMinimal from "@/components/FooterMinimal";
import NavMinimal from "@/components/NavMinimal";
import { ScrollToHash } from "@/components/ScrollToHash";
import { StackSection } from "@/components/StackSection";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type SectionConfig = {
  zIndex: number;
  id?: string;
  className: string;
  waveColorClassName?: string;
  mascotVariant?: CatVariant;
  mascotSide?: "left" | "right";
  mascotInContent?: boolean;
  title: string;
};

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

const sections: SectionConfig[] = [
  {
    zIndex: 10,
    id: "name",
    className: "bg-umber-50",
    title: siteConfig.name,
  },
  {
    zIndex: 20,
    id: "about",
    className: "bg-umber-50",
    waveColorClassName: "text-umber-50",
    mascotVariant: "caramel",
    title: "About",
  },
  {
    zIndex: 30,
    id: "projects",
    className: "bg-umber-50",
    waveColorClassName: "text-umber-50",
    title: "Projects",
  },
  {
    zIndex: 40,
    id: "capabilities",
    className: "bg-umber-50",
    waveColorClassName: "text-umber-50",
    mascotVariant: "caramel",
    mascotSide: "left",
    title: "Capabilities",
  },
  {
    zIndex: 50,
    id: "writing",
    className: "bg-umber-50",
    waveColorClassName: "text-umber-50",
    title: "Writing",
  },
  {
    zIndex: 60,
    id: "contact",
    className: "bg-umber-950 text-umber-50",
    waveColorClassName: "text-umber-950",
    mascotVariant: "gold",
    mascotInContent: true,
    title: "Contact",
  },
];

export default function Home() {
  return (
    <div>
      <ScrollToHash />
      <NavMinimal
        brand={siteConfig.name}
        items={[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#capabilities", label: "Capabilities" },
          { href: "#writing", label: "Writing" },
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
            waveColorClassName={section.waveColorClassName}
            mascotVariant={section.mascotVariant}
            mascotSide={section.mascotSide}
            mascotInContent={section.mascotInContent}
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
