"use client";

import {
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  useRef,
  useState,
} from "react";
import { otherProjects } from "@/lib/portfolio-data";

const SWIPE_DISTANCE = 40;

// Smaller work as a fanned deck of index cards: the front card faces the
// reader, its neighbours fan away in 3D. Adapted from the rooms deck on the
// Whistling Acacia demo, as text-only cards.
export function MoreWorkDeck() {
  const [active, setActive] = useState(0);
  const pointerX = useRef<number | null>(null);
  const count = otherProjects.length;
  const go = (i: number) => setActive((i + count) % count);

  // Left/right move the deck while it has focus, instead of turning the page.
  const onKeyDown = (event: KeyboardEvent) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    go(active + step);
  };

  const onPointerDown = (event: PointerEvent) => {
    pointerX.current = event.clientX;
  };
  const onPointerUp = (event: PointerEvent) => {
    if (pointerX.current === null) return;
    const dx = event.clientX - pointerX.current;
    pointerX.current = null;
    if (Math.abs(dx) > SWIPE_DISTANCE) go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <div
      data-own-gestures
      role="group"
      aria-roledescription="carousel"
      aria-label="More work"
      onKeyDown={onKeyDown}
      className="mt-5"
    >
      <div
        className="deck touch-pan-y select-none"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {otherProjects.map((project, i) => {
          // Shortest way round, so the deck fans out on both sides.
          let offset = i - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          const distance = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <article
              key={project.title}
              aria-hidden={!isActive}
              inert={!isActive}
              onClick={isActive ? undefined : () => go(i)}
              className={`deck-card ${isActive ? "is-active" : ""}`}
              style={
                {
                  "--offset": offset,
                  "--distance": distance,
                  zIndex: 10 - distance,
                } as CSSProperties
              }
            >
              <h3 className="font-serif text-base font-semibold leading-snug text-forest">
                {project.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-stone-600">
                {project.line}
              </p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-2 text-xs font-semibold text-forest underline-offset-4 hover:underline"
                >
                  Visit ↗
                </a>
              ) : null}
            </article>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(active - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/20 text-forest transition hover:bg-forest hover:text-champagne focus-visible:outline-2 focus-visible:outline-forest"
        >
          <span aria-hidden="true">←</span>
          <span className="sr-only">Previous project</span>
        </button>
        <p className="min-w-12 text-center text-xs tabular-nums text-stone-500" aria-live="polite">
          {active + 1} / {count}
        </p>
        <button
          type="button"
          onClick={() => go(active + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/20 text-forest transition hover:bg-forest hover:text-champagne focus-visible:outline-2 focus-visible:outline-forest"
        >
          <span aria-hidden="true">→</span>
          <span className="sr-only">Next project</span>
        </button>
      </div>
    </div>
  );
}
