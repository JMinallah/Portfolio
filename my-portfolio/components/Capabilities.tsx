import { capabilities } from "@/lib/portfolio-data";

export function Capabilities() {
  return (
    <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-900 p-8 text-zinc-100 md:p-10">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Core Capabilities
      </h2>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {capabilities.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-zinc-700/80 bg-zinc-800/70 px-4 py-3 text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
