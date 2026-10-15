import {
  siClaude,
  siExpress,
  siGit,
  siJavascript,
  siLangchain,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

const technologies = [
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siPhp,
  siPython,
  siPostgresql,
  siMysql,
  siLangchain,
  siClaude,
  siGit,
];

export function SiteFooter() {
  return (
    <footer style={{ viewTransitionName: "tech-strip" }} className="mt-2 sm:mt-6">
      <div className="tech-strip overflow-hidden py-5 sm:py-6">
        {/* The list is rendered twice so the loop is seamless. */}
        <ul aria-label="Technologies I use" className="tech-track flex w-max">
          {[...technologies, ...technologies].map((icon, i) => {
            const isCopy = i >= technologies.length;
            return (
              <li
                key={`${icon.slug}-${i}`}
                aria-hidden={isCopy || undefined}
                className="group relative px-5 text-forest/60 transition-colors hover:text-forest sm:px-7"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-current"
                >
                  <title>{icon.title}</title>
                  <path d={icon.path} />
                </svg>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium text-forest opacity-0 transition-opacity group-hover:opacity-100"
                >
                  {icon.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

    </footer>
  );
}
