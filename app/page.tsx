import type { Metadata } from "next";
import type { ReactNode } from "react";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import FooterMinimal from "@/components/FooterMinimal";
import { Hero } from "@/components/Hero";
import NavMinimal from "@/components/NavMinimal";
import { ScrollToHash } from "@/components/ScrollToHash";
import { StackSection } from "@/components/StackSection";
import { Writing } from "@/components/Writing";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type SectionConfig = {
  zIndex: number;
  id?: string;
  className: string;
  waveColorClassName?: string;
  content: ReactNode;
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

export default async function Home() {
  const posts = await getAllPosts();

  const sections: SectionConfig[] = [
    {
      zIndex: 10,
      id: "name",
      className: "bg-umber-50",
      content: <Hero />,
    },
    {
      zIndex: 20,
      id: "about",
      className: "bg-umber-50",
      waveColorClassName: "text-umber-50",
      content: <About />,
    },
    {
      zIndex: 30,
      id: "projects",
      className: "bg-umber-50",
      waveColorClassName: "text-umber-50",
      content: <FeaturedProjects />,
    },
    {
      zIndex: 40,
      id: "capabilities",
      className: "bg-umber-50",
      waveColorClassName: "text-umber-50",
      content: <Capabilities />,
    },
    {
      zIndex: 50,
      id: "writing",
      className: "bg-umber-50",
      waveColorClassName: "text-umber-50",
      content: <Writing posts={posts} />,
    },
    {
      zIndex: 60,
      id: "contact",
      className: "bg-umber-950 text-umber-50",
      waveColorClassName: "text-umber-950",
      content: <Contact />,
    },
  ];

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
          >
            {section.content}
          </StackSection>
        ))}
      </main>
      <FooterMinimal name={siteConfig.name} email={siteConfig.email} />
    </div>
  );
}
