import type { Project } from "@/lib/portfolio-data";

const dotColor: Record<Project["status"], string> = {
  Live: "bg-emerald-600",
  "In review": "bg-terracotta",
  "In progress": "bg-amber-500",
  Reworking: "bg-stone-400",
};

export function ProjectStatus({
  project,
  showTeam = true,
}: {
  project: Project;
  showTeam?: boolean;
}) {
  const extras = [project.award, showTeam ? project.team : null].filter(Boolean);
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wider text-stone-600">
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dotColor[project.status]}`} />
      {project.status}
      {extras.map((extra) => (
        <span key={extra} className="contents">
          <span aria-hidden="true" className="text-stone-400">
            ·
          </span>
          {extra}
        </span>
      ))}
    </span>
  );
}
