import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

export type PostMetadata = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type Post = {
  slug: string;
  metadata: PostMetadata;
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => {
      const { metadata } = (await import(`@/content/blog/${slug}.mdx`)) as {
        metadata: PostMetadata;
      };
      return { slug, metadata };
    })
  );

  return posts.sort(
    (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export async function getPostBySlug(slug: string) {
  const { default: Content, metadata } = (await import(
    `@/content/blog/${slug}.mdx`
  )) as {
    default: ComponentType;
    metadata: PostMetadata;
  };

  return { Content, metadata };
}
