import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-3xl font-semibold leading-tight text-forest sm:text-4xl md:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base">
        A focused body of work across design, development, and digital strategy.
        Built for clarity, speed, and measurable outcomes.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-champagne transition hover:brightness-125"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border-2 border-forest px-5 py-2.5 text-sm font-medium text-forest transition hover:bg-forest hover:text-champagne"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
