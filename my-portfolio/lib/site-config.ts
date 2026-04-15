export const siteConfig = {
  name: "Your Portfolio",
  description:
    "Personal portfolio showcasing selected work, design direction, and technical capabilities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_US",
  creator: "Your Name",
  geo: {
    defaultRegion: "global",
    targetRegions: ["global", "emea", "na", "apac"],
  },
} as const;

export const locationPages = [
  { slug: "london", name: "London" },
  { slug: "dubai", name: "Dubai" },
  { slug: "lagos", name: "Lagos" },
] as const;

export function absoluteUrl(pathname = "/") {
  const normalizedPathname = pathname.startsWith("/")
    ? pathname
    : `/${pathname}`;
  return new URL(normalizedPathname, siteConfig.url).toString();
}
