import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-start overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl" />

      <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
        Portfolio
      </p>
      <h1 className="reveal-delay-1 mt-4 max-w-3xl text-4xl font-semibold leading-tight text-zinc-900 md:text-6xl lg:text-7xl">
        {siteConfig.name}
      </h1>
      <p className="reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
        A focused body of work across design, development, and digital strategy.
        Built for clarity, speed, and measurable outcomes.
      </p>

      <div className="reveal-delay-3 mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
        >
          View projects
        </a>
        <a
          href="/blog"
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-900"
        >
          Read writing
        </a>
      </div>
    </section>
  );
}
