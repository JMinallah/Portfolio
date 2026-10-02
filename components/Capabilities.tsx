import { capabilities } from "@/lib/portfolio-data";

export function Capabilities() {
  return (
    <section className="h-full rounded-2xl border border-stone-200 bg-white p-5">
      <h2 className="text-lg font-semibold tracking-tight text-forest">
        Capabilities
      </h2>
      <ul className="mt-3 space-y-2">
        {capabilities.map((item) => (
          <li
            key={item}
            className="rounded-lg bg-stone-100 px-3 py-2 text-xs leading-snug text-stone-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
