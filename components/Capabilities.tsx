import { capabilities } from "@/lib/portfolio-data";

export function Capabilities() {
  return (
    <section className="mx-auto flex h-full w-full max-w-6xl flex-col justify-start px-4 pt-28 sm:px-6 lg:px-8">
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
