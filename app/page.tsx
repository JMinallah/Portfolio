import type { Metadata } from "next";
import FooterMinimal from "@/components/FooterMinimal";
import NavMinimal from "@/components/NavMinimal";
import { StackSection } from "@/components/StackSection";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { About } from "@/components/About";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/blog";

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
  const posts = (await getAllPosts()).slice(0, 2);

  return (
    <div>
      <NavMinimal
        brand={siteConfig.name}
        items={[
          { href: "#projects", label: "Projects" },
          { href: "#about", label: "About" },
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
        <StackSection zIndex={10} className="bg-white">
          <Hero />
        </StackSection>
        <StackSection zIndex={20} id="projects" className="bg-zinc-50">
          <FeaturedProjects />
        </StackSection>
        <StackSection zIndex={30} className="bg-zinc-900 text-zinc-100">
          <Capabilities />
        </StackSection>
        <StackSection zIndex={40} id="about" className="bg-white">
          <About />
        </StackSection>
        <StackSection zIndex={50} className="bg-zinc-50">
          <Writing posts={posts} />
        </StackSection>
        <StackSection zIndex={60} id="contact" className="bg-white">
          <Contact />
        </StackSection>
      </main>
      <FooterMinimal name={siteConfig.name} email={siteConfig.email} />
    </div>
  );
}
