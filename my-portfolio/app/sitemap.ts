import type { MetadataRoute } from "next";
import { absoluteUrl, locationPages } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const geoRoutes: MetadataRoute.Sitemap = locationPages.map((location) => ({
    url: absoluteUrl(`/locations/${location.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...coreRoutes, ...geoRoutes];
}
