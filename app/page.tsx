import type { Metadata } from "next";
import Link from "next/link";
import FooterMinimal from "@/components/FooterMinimal";
import NavMinimal from "@/components/NavMinimal";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { About } from "@/components/About";
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
      <main className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <Hero />
        <FeaturedProjects />
        <Capabilities />
        <About />

        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Writing
            </h2>
            <Link
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
              href="/blog"
            >
              See all
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {post.metadata.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {post.metadata.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <FooterMinimal name={siteConfig.name} email={siteConfig.email} />
    </div>
  );
}
