export type Project = {
  title: string;
  summary: string;
  tags: string[];
  href: string;
};

export type WritingPost = {
  title: string;
  summary: string;
  href: string;
  date: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Conversion-focused Landing System",
    summary:
      "A modular page system designed for speed, strong messaging hierarchy, and measurable conversion gains.",
    tags: ["Next.js", "SEO", "A/B Testing"],
    href: "#",
  },
  {
    title: "Performance Content Hub",
    summary:
      "A content architecture built for discoverability, internal linking, and technical excellence across devices.",
    tags: ["Content Design", "Core Web Vitals", "Information Architecture"],
    href: "#",
  },
  {
    title: "Brand Narrative Portfolio",
    summary:
      "A highly visual portfolio experience with motion and structure tuned for clarity and storytelling.",
    tags: ["Design Systems", "Animation", "Frontend Engineering"],
    href: "#",
  },
];

export const writingPreview: WritingPost[] = [
  {
    title: "Designing Portfolio Pages That Rank and Convert",
    summary:
      "Framework for balancing aesthetic quality with search intent, crawlability, and clear business outcomes.",
    href: "#",
    date: "2026-04-01",
  },
  {
    title: "Shipping Motion Without Hurting Performance",
    summary:
      "Practical approach to animation budgets, perceived speed, and meaningful transitions in modern web apps.",
    href: "#",
    date: "2026-03-20",
  },
];

export const capabilities = [
  "Technical SEO architecture",
  "AEO-focused content structuring",
  "Conversion-centered UX and copy systems",
  "High-performance Next.js frontend builds",
] as const;
