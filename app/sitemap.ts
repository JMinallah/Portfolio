import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { featuredProjects } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...["/work", "/about", "/contact"].map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const workRoutes: MetadataRoute.Sitemap = featuredProjects.map((project) => ({
    url: absoluteUrl(`/work/${project.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...coreRoutes, ...workRoutes];
}
