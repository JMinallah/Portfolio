"use client";

import Image from "next/image";
import Link from "next/link";
import { useContents } from "@/components/ContentsContext";
import { chapterNumber, featuredProjects } from "@/lib/portfolio-data";

// The right-hand page beside the contents (spread only): an illustration
// plate showing the chapter being pointed at. Every plate is stacked in one
// frame and cross-fades, so changing chapters never moves anything.
export function ContentsPlate() {
  const contents = useContents();
  const shownSlug = contents?.shown ?? featuredProjects[0].slug;
  const shown = featuredProjects.find((p) => p.slug === shownSlug) ?? featuredProjects[0];
  const numeral = chapterNumber(shown.slug);

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="plate relative aspect-[16/10] w-full">
        {featuredProjects.map((project) => {
          const isShown = project.slug === shown.slug;
          return (
            <div
              key={project.slug}
              aria-hidden={!isShown}
              className={`plate-mount absolute inset-0 transition-opacity duration-300 motion-reduce:transition-none ${
                isShown ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[2px]">
                <Image
                  src={project.screenshots[0].src}
                  alt={project.screenshots[0].alt}
                  fill
                  sizes="(min-width: 1200px) 480px, 0px"
                  placeholder="blur"
                  className="object-cover object-top"
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-stone-600">
        <span className="font-serif font-semibold text-forest">
          Fig. {numeral}. {shown.title}
        </span>
      </p>
      <Link
        href={`/work/${shown.slug}`}
        transitionTypes={["open-project"]}
        className="mt-3 w-fit text-sm font-semibold text-forest underline-offset-4 hover:underline"
      >
        Read chapter {numeral} →
      </Link>
    </div>
  );
}
