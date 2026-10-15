import type { StaticImageData } from "next/image";
import flowboardBoard from "@/public/images/work/flowboard-board.webp";
import flowboardOrder from "@/public/images/work/flowboard-order.webp";
import rydrHome from "@/public/images/work/rydr-home.webp";
import scaleupHome from "@/public/images/work/scaleup-home.webp";
import veloraDashboard from "@/public/images/work/velora-dashboard.webp";
import veloraMission from "@/public/images/work/velora-mission.webp";
import yosyncFeature from "@/public/images/work/yosync-feature.webp";
import yosyncHome from "@/public/images/work/yosync-home.webp";

export type ProjectStatus = "Live" | "In review" | "In progress" | "Reworking";

export type Screenshot = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** One line for the work list: what it is and who it's for. */
  summary: string;
  status: ProjectStatus;
  /** A short distinction shown beside the status, e.g. a hackathon prize. */
  award?: string;
  team: "Solo" | "Team";
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  screenshots: [Screenshot, ...Screenshot[]];
  problem: string;
  /** What I did, one point per entry. */
  work: string[];
  result: string;
};

// Case studies drafted from each project's repository, commit history and
// docs. Anything about motivation or outcome is worth a read-through by Jovia.
export const featuredProjects: Project[] = [
  {
    slug: "velora",
    title: "Velora",
    summary:
      "An AI agent that plans big life changes, like moving abroad or starting university, as missions with tasks, deadlines and documents.",
    status: "In progress",
    team: "Solo",
    role: "Everything: product, design, full stack development and the AI agent",
    stack: ["Next.js", "TypeScript", "MongoDB", "Auth.js", "Gemini", "Tailwind CSS", "Playwright"],
    links: [],
    screenshots: [
      {
        src: veloraDashboard,
        alt: "Velora dashboard listing upcoming tasks across three missions",
        caption: "The dashboard: upcoming tasks across every mission.",
      },
      {
        src: veloraMission,
        alt: "A Velora mission page for relocating from Kampala to Berlin, with tasks and recent activity",
        caption: "A mission, with its tasks, deadlines and activity log.",
      },
    ],
    problem:
      "Moving abroad, changing careers or starting university means dozens of linked tasks, deadlines and documents, usually scattered across notes, emails and spreadsheets. Velora started as a hackathon build. Its AI agent ran on an external cloud service, and when the credits ran out, the agent was lost with them.",
    work: [
      "Rebuilt Velora from the ground up with the agent running inside the app, under version control, on free tier infrastructure (Vercel, MongoDB Atlas and Cloudflare R2).",
      "Designed it to be trusted: the agent can only change things through typed tools, risky actions need the user's confirmation, and every change is recorded and can be undone.",
      "Locked down the API: requests without a session are refused, and requests for someone else's data get a plain \"not found\".",
      "Made every feature work with the AI switched off, and wrote browser tests that prove it.",
      "Set up CI that runs secret scanning, linting, type checks, unit and browser tests, and evaluations of the agent's answers on every change.",
    ],
    result:
      "In progress and launching shortly. Missions, tasks, the timeline and documents work today; the screenshots are from a local build with the AI switched off.",
  },
  {
    slug: "flowboard",
    title: "FlowBoard",
    summary:
      "A Shopify app that turns a store's orders into a drag and drop board, with the team's own stages, right inside the Shopify admin.",
    status: "In review",
    team: "Solo",
    role: "Everything: design, full stack development and the App Store submission",
    stack: ["React Router", "TypeScript", "Shopify App Bridge", "Prisma", "PostgreSQL", "dnd-kit"],
    links: [],
    screenshots: [
      {
        src: flowboardBoard,
        alt: "FlowBoard board view in the Shopify admin, with orders as cards across stages",
        caption: "The board: each order is a card that moves through the store's own stages.",
      },
      {
        src: flowboardOrder,
        alt: "A FlowBoard order page with stage, due date, checklist, notes and activity",
        caption: "An order page with its checklist, notes and activity.",
      },
    ],
    problem:
      "Shopify's order list is just a list. Small teams that pack, make or customise orders end up tracking who is doing what, and what stage each order is at, in spreadsheets or group chats.",
    work: [
      "Built a drag and drop board with the merchant's own stages, plus table and calendar views.",
      "Gave every order its own page with notes, checklists, comments, due dates and custom fields, and added a team roster.",
      "Added automations that move orders between stages, a Shopify Flow trigger, CSV export, and a panel and bulk action inside Shopify's own order pages.",
      "Set up billing through Shopify: Basic and Pro plans, each with a free 14 day trial.",
      "Prepared it for App Store review: an access log for customer data, nightly encrypted database backups, privacy policies and an incident log.",
    ],
    result: "Submitted to the Shopify App Store and currently in review.",
  },
  {
    slug: "yosync",
    title: "Yosync",
    summary:
      "A Shopify app that keeps a store's orders and products in sync with Notion, with no CSV exports or scripts.",
    status: "Reworking",
    team: "Solo",
    role: "Everything: design, full stack development and the App Store listing",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Shopify API", "Notion API"],
    links: [],
    screenshots: [
      {
        src: yosyncFeature,
        alt: "Shopify products synced into a Notion database by Yosync",
        caption: "Products from Shopify, kept up to date in Notion.",
      },
      {
        src: yosyncHome,
        alt: "Yosync's dashboard in the Shopify admin showing connection status and sync activity",
        caption: "The dashboard: both connections and recent sync runs.",
      },
    ],
    problem:
      "Merchants who run their business from Notion copy orders and products over by hand or with CSV exports, which are out of date the moment they're made.",
    work: [
      "Built both login flows, for Shopify and for Notion, and a sync engine that combines real time webhooks with a scheduler that runs every 15 minutes.",
      "Found and closed a real security hole: the Notion connection step didn't check who was asking, so anyone who knew a store's address could take over its Notion connection. Fixed with session checks and a signed login state.",
      "Fixed silent data loss: syncs only fetched the first 100 records, so busy stores could lose changes. Added proper paging, and a retry so a capped run tries again instead of skipping records.",
      "Stopped one failing request from crashing the server for every store by handling errors in every route.",
      "Added billing through Shopify ($19 a month after a 14 day trial) and wrote the App Store listing.",
    ],
    result:
      "I'm now reworking Yosync as a custom app, installed directly for individual stores.",
  },
  {
    slug: "scaleup",
    title: "ScaleUp Build",
    summary:
      "The website for ScaleUp Build, a technology company helping early stage startups and founders grow, with an application form and product waitlist.",
    status: "Live",
    team: "Team",
    role: "Frontend developer in a team of four",
    stack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    links: [
      { label: "Visit the site", href: "https://scaleup-website-frontend.vercel.app" },
      { label: "Code", href: "https://github.com/Scaleup-Build/scaleup-website-frontend" },
    ],
    screenshots: [
      {
        src: scaleupHome,
        alt: "ScaleUp Build home page: Building Products, People, and Possibilities Together",
      },
    ],
    problem:
      "ScaleUp Build needed a site that explains what the company does and lets founders apply to join, sign up for product launches and read about the team.",
    work: [
      "Set up the front end with Tailwind CSS and built the core pages: home, about, products, team, testimonials, FAQ and contact.",
      "Built the application form with validation, clear error messages, a thank you screen and a redirect once it's sent.",
      "Connected the site to the backend API for waitlist signups and notifications, with proper error handling.",
      "Kept the layout responsive and consistent across pages, and kept team and content details up to date as the company grew.",
    ],
    result:
      "Live, with the application form and waitlist connected to ScaleUp's backend.",
  },
  {
    slug: "rydr",
    title: "Rydr",
    summary:
      "Peer to peer ride sharing on Polkadot, where payment sits in a smart contract escrow until the ride is done. Built for a Polkadot hackathon, where it won a prize.",
    status: "Live",
    award: "Prize winner",
    team: "Team",
    role: "Frontend developer in a team of two",
    stack: ["React", "Vite", "Tailwind CSS", "ethers.js", "Polkadot wallets", "Mapbox", "Appwrite"],
    links: [
      { label: "Try it", href: "https://rydr-gamma.vercel.app" },
      { label: "Code", href: "https://github.com/andamagodwin/rydr-frontend" },
    ],
    screenshots: [
      {
        src: rydrHome,
        alt: "Rydr home page: Ride Together, Earn Together, with Find a Ride and Offer a Ride buttons",
      },
    ],
    problem:
      "Ride sharing platforms take a cut and hold the money in between. Rydr explores trustless rides: driver and passenger pay each other directly, with a smart contract holding the fare until the ride is complete.",
    work: [
      "Set up the React project, its colours and routing.",
      "Built Find a Ride: search, a map with the rider's location, filters, and available rides loaded from the database.",
      "Built the step by step Offer a Ride flow with validation and illustrations, and the payment step.",
      "Added the mobile menu, error handling across the app, and the Vercel deployment.",
    ],
    result:
      "Won a prize at the Polkadot hackathon. It's deployed on Polkadot's Moonbase Alpha test network and live to try.",
  },
];

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/** "I", "II", … for each featured project, in the order they're listed. */
export function chapterNumber(slug: string) {
  return romanNumerals[featuredProjects.findIndex((p) => p.slug === slug)] ?? "";
}

export type OtherProject = {
  title: string;
  line: string;
  href?: string;
};

// Smaller or earlier work, listed without a case study.
export const otherProjects: OtherProject[] = [
  {
    title: "Whistling Acacia Guesthouse",
    line: "A concept site showing small Kampala guesthouses how a fast, mobile first page turns visitors into WhatsApp enquiries.",
    href: "https://whistling-acacia-demo.vercel.app",
  },
  {
    title: "Modu",
    line: "The landing page for Modu, which builds mobile apps from a prompt. I built its animations, theme switching and layout.",
    href: "https://getmodu.cloud",
  },
  {
    title: "Nagly",
    line: "A voice first Android task manager that nags you, gently or not, about overdue tasks. Kotlin and Jetpack Compose.",
  },
  {
    title: "Stepsy",
    line: "Short, guided daily lessons for learning practical AI skills.",
    href: "https://ai-challenge-xi.vercel.app",
  },
  {
    title: "Aion Pharmacy",
    line: "A pharmacy management web app built with Laravel in a team of two.",
  },
  {
    title: "HESFB Loan Navigator",
    line: "An AI chatbot, built for the USAII Global AI Hackathon 2026, that helps Ugandan students check whether they may qualify for a government student loan. I built the part that asks the questions.",
    href: "https://github.com/victory-pixel/hesfb-navigator",
  },
];

export const aboutBio = [
  "I'm Jovia, a full stack developer based in Kampala, Uganda. I build fast, accessible web apps that solve real problems for real people, from Shopify apps that run a store's orders to an AI agent that helps people plan big life changes.",
  "I enjoy modern JavaScript on the front end and well documented APIs on the back end, and I care about code quality, security and shipping things people actually enjoy using.",
  "Outside of development, I explore design trends, read productivity books and work on my communication skills. When it's time to recharge, you'll probably find me laughing at anything with humour, or watching anime and pretending it's purely for narrative research.",
];

export type Experience = {
  role: string;
  organisation: string;
  kind?: "Volunteer" | "Internship";
  period?: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    organisation: "ScaleUp Build",
    kind: "Volunteer",
    period: "Since 2026",
    description:
      "Building the company website with the design team: accessible, responsive pages, the founder application form and the product waitlist.",
  },
  {
    role: "Frontend Engineering Intern",
    organisation: "True Minds Innovation",
    kind: "Internship",
    period: "Feb to Apr 2026",
    description:
      "A frontend engineering internship building React interfaces, completed with a certificate.",
  },
  {
    role: "Content Creator",
    organisation: "KOICA Uganda",
    kind: "Volunteer",
    description: "Made videos and Canva designs as a volunteer.",
  },
];

export const education = {
  course: "Software Engineering",
  institution: "Makerere University",
  // Update each academic year.
  year: "Third year",
};

export const epigraph =
  "Good software is like a well made book: you never notice the binding, only the story.";

export type IndexEntry = {
  term: string;
  /** Chapters (featured project slugs) where this skill was used. */
  chapters?: string[];
  /** Smaller projects, without their own chapter, that used it. */
  also?: string[];
};

// The About page's index: every skill, pointing to the chapters that show it
// in use. Skills without a project behind them are listed on their own.
// Kept in alphabetical order.
export const skillIndex: IndexEntry[] = [
  { term: "AEO content structuring" },
  { term: "AI agents and tool calling", chapters: ["velora"] },
  { term: "Appwrite", chapters: ["rydr"] },
  { term: "Auth.js", chapters: ["velora"] },
  { term: "CI/CD (GitHub Actions)", chapters: ["velora", "flowboard"] },
  { term: "Core Web Vitals optimization" },
  { term: "Docker", chapters: ["yosync"] },
  { term: "Express", chapters: ["yosync"] },
  { term: "Figma" },
  { term: "Git & GitHub" },
  { term: "HTML & CSS" },
  { term: "Java" },
  { term: "JavaScript", chapters: ["scaleup", "rydr"] },
  { term: "Jetpack Compose", also: ["Nagly"] },
  { term: "Kotlin", also: ["Nagly"] },
  { term: "LangChain" },
  { term: "Linux" },
  { term: "LLM integration (Gemini, Claude, GPT)", chapters: ["velora"] },
  { term: "Machine learning" },
  { term: "Mapbox", chapters: ["rydr"] },
  { term: "MongoDB", chapters: ["velora"] },
  { term: "MySQL" },
  { term: "Next.js", chapters: ["velora"], also: ["Whistling Acacia"] },
  { term: "Node.js", chapters: ["yosync"] },
  { term: "Notion API", chapters: ["yosync"] },
  { term: "PHP & Laravel", also: ["Aion Pharmacy"] },
  { term: "Polkadot & ethers.js", chapters: ["rydr"] },
  { term: "PostgreSQL", chapters: ["flowboard", "yosync"] },
  { term: "Prisma", chapters: ["flowboard"] },
  { term: "Prompt engineering", chapters: ["velora"] },
  { term: "Python", also: ["HESFB Navigator"] },
  { term: "React", chapters: ["flowboard", "scaleup", "rydr"], also: ["Modu"] },
  { term: "REST APIs", chapters: ["yosync"] },
  { term: "Shopify apps", chapters: ["flowboard", "yosync"] },
  { term: "Structured data / JSON-LD" },
  { term: "Tailwind CSS", chapters: ["velora", "scaleup", "rydr"] },
  { term: "Technical SEO architecture" },
  { term: "TypeScript", chapters: ["velora", "flowboard", "yosync"] },
  { term: "Vector databases" },
  { term: "Vercel", chapters: ["velora", "rydr"] },
  { term: "Vitest & Playwright", chapters: ["velora", "yosync"] },
];
