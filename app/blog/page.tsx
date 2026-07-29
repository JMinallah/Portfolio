import type { Metadata } from "next";
import Link from "next/link";
import NavMinimal from "@/components/NavMinimal";
import FooterMinimal from "@/components/FooterMinimal";
import { siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
  description: `Articles on frontend/backend engineering and SEO/AEO from ${siteConfig.name}.`,
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <NavMinimal
        brand={siteConfig.name}
        items={[
          { href: "/#about", label: "About" },
          { href: "/#projects", label: "Projects" },
          { href: "/#capabilities", label: "Capabilities" },
          { href: "/#writing", label: "Writing" },
          { href: "/#contact", label: "Contact" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-umber-900 md:text-4xl">
          Writing
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-umber-600">
          Notes on engineering and on making things findable.
        </p>

        <div className="mt-10 grid gap-5">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-umber-200 bg-umber-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-lg font-semibold text-umber-900">
                  {post.metadata.title}
                </h2>
                <p className="mt-2 text-sm text-umber-500">
                  {new Date(post.metadata.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-umber-600">
                  {post.metadata.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {post.metadata.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-umber-100 px-2.5 py-1 text-xs font-medium text-umber-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <FooterMinimal name={siteConfig.name} email={siteConfig.email} />
    </div>
  );
}
