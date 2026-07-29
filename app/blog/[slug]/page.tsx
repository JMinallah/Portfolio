import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavMinimal from "@/components/NavMinimal";
import FooterMinimal from "@/components/FooterMinimal";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPostBySlug(slug);

  return {
    title: metadata.title,
    description: metadata.summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: metadata.title,
      description: metadata.summary,
      url: absoluteUrl(`/blog/${slug}`),
      publishedTime: metadata.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let Content, metadata;
  try {
    ({ Content, metadata } = await getPostBySlug(slug));
  } catch {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.summary,
    datePublished: metadata.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    url: absoluteUrl(`/blog/${slug}`),
  };

  return (
    <div>
      <NavMinimal
        brand={siteConfig.name}
        items={[
          { href: "/#about", label: "About" },
          { href: "/#projects", label: "Projects" },
          { href: "/#writing", label: "Writing" },
          { href: "/#contact", label: "Contact" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/blog"
          className="text-sm font-medium text-umber-500 hover:text-umber-900"
        >
          ← Back to writing
        </Link>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-umber-900 md:text-4xl">
          {metadata.title}
        </h1>
        <p className="mt-2 text-sm text-umber-500">
          {new Date(metadata.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="prose prose-umber mt-10 max-w-none">
          <Content />
        </div>
      </main>
      <FooterMinimal name={siteConfig.name} email={siteConfig.email} />
    </div>
  );
}
