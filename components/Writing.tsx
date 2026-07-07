import Link from "next/link";
import type { Post } from "@/lib/blog";

type WritingProps = {
  posts: Post[];
};

export function Writing({ posts }: WritingProps) {
  return (
    <section className="mx-auto flex h-full w-full max-w-6xl flex-col justify-start px-4 pt-28 sm:px-6 lg:px-8">
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
  );
}
