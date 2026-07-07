export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  outcome: string;
};

// TODO: replace these with your real projects. Keep the shape (slug/role/
// stack/problem/solution/outcome) so /work/[slug] has real case-study content.
export const featuredProjects: Project[] = [
  {
    slug: "conversion-landing-system",
    title: "Conversion-focused Landing System",
    summary:
      "A modular page system designed for speed, strong messaging hierarchy, and measurable conversion gains.",
    tags: ["Next.js", "SEO", "A/B Testing"],
    role: "TODO: your role on this project",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    problem: "TODO: what problem was this project solving?",
    solution: "TODO: what did you build and how?",
    outcome: "TODO: what was the measurable result?",
  },
  {
    slug: "performance-content-hub",
    title: "Performance Content Hub",
    summary:
      "A content architecture built for discoverability, internal linking, and technical excellence across devices.",
    tags: ["Node.js", "Core Web Vitals", "Information Architecture"],
    role: "TODO: your role on this project",
    stack: ["Node.js", "Express", "PostgreSQL"],
    problem: "TODO: what problem was this project solving?",
    solution: "TODO: what did you build and how?",
    outcome: "TODO: what was the measurable result?",
  },
  {
    slug: "brand-narrative-portfolio",
    title: "Brand Narrative Portfolio",
    summary:
      "A highly visual portfolio experience with motion and structure tuned for clarity and storytelling.",
    tags: ["PHP", "Design Systems", "Frontend Engineering"],
    role: "TODO: your role on this project",
    stack: ["PHP", "MySQL", "JavaScript"],
    problem: "TODO: what problem was this project solving?",
    solution: "TODO: what did you build and how?",
    outcome: "TODO: what was the measurable result?",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PHP", "REST APIs"],
  },
  {
    title: "SEO & AEO",
    skills: [
      "Technical SEO architecture",
      "AEO-focused content structuring",
      "Structured data / JSON-LD",
      "Core Web Vitals optimization",
    ],
  },
];

export const capabilities = [
  "Full-stack web app development (React/Next.js + Node/Express or PHP)",
  "Technical SEO and AEO-focused content architecture",
  "Performance-tuned, accessible frontend builds",
  "API design and integration",
] as const;
