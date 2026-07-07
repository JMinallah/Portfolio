export const siteConfig = {
  // TODO: replace with your real name/handle
  name: "Your Name",
  description:
    "Full-stack developer (Next.js, Node/Express, PHP) building fast, technically sound web apps — with SEO/AEO expertise baked in.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_US",
  // TODO: replace with your real name
  creator: "Your Name",
  // TODO: replace with the email you want contact-form submissions sent to
  email: "hello@example.com",
} as const;

export function absoluteUrl(pathname = "/") {
  const normalizedPathname = pathname.startsWith("/")
    ? pathname
    : `/${pathname}`;
  return new URL(normalizedPathname, siteConfig.url).toString();
}
