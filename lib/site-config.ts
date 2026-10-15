export const siteConfig = {
  name: "Jovia Minallah Matata",
  description:
    "Full-stack developer (Next.js, Node/Express, PHP) building fast, technically sound web apps — with SEO/AEO expertise baked in.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_US",
  creator: "Jovia Minallah Matata",
  // Shown on the site and where contact-form submissions are sent.
  email: "joviaminallah@gmail.com",
  location: { city: "Kampala", country: "Uganda", countryCode: "UG" },
  // Drop the PDF into public/ with this name; the "Download CV" links appear
  // on the next build once the file exists.
  cvFile: "Jovia-Minallah-Matata-CV.pdf",
  socials: [
    { label: "GitHub", handle: "JMinallah", href: "https://github.com/JMinallah" },
    {
      label: "LinkedIn",
      handle: "Jovia Minallah Matata",
      href: "https://www.linkedin.com/in/jovia-minallah-matata",
    },
    { label: "X", handle: "@JoviaMinallah", href: "https://x.com/JoviaMinallah" },
  ],
} as const;

export function absoluteUrl(pathname = "/") {
  const normalizedPathname = pathname.startsWith("/")
    ? pathname
    : `/${pathname}`;
  return new URL(normalizedPathname, siteConfig.url).toString();
}
