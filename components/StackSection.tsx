import type { ReactNode } from "react";
import { Cat, type CatVariant } from "@/components/Cat";

type StackSectionProps = {
  children: ReactNode;
  zIndex: number;
  id?: string;
  className?: string;
  waveColorClassName?: string;
  mascotVariant?: CatVariant;
  mascotSide?: "left" | "right";
  /** Contact's cat sits inside the section's own (dark) content instead of up in the margin. */
  mascotInContent?: boolean;
};

export function StackSection({
  children,
  zIndex,
  id,
  className = "",
  waveColorClassName,
  mascotVariant,
  mascotSide = "right",
  mascotInContent = false,
}: StackSectionProps) {
  return (
    <>
      {/* A sticky element's own offsetTop/getBoundingClientRect reflects its
          current (scroll-shifted) paint position in this browser, not its
          true flow position, so it can't be used as a stable scroll target.
          This zero-height, non-sticky marker sits at the same document
          offset and stays stable regardless of scroll position. */}
      {id ? <span id={id} className="block h-0" /> : null}
      <div className="sticky top-0 h-screen" style={{ zIndex }}>
        {waveColorClassName ? (
          // The svg's own fill has a hard bottom edge somewhere (wherever the
          // path closes), and `drop-shadow` casts a shadow off every alpha
          // edge, not just the curved one. Rather than chase that edge
          // further away, this wrapper physically clips it off: the svg
          // inside is much taller than this box, so only the curved top
          // portion (and its shadow) ever falls within the visible window.
          <div className="pointer-events-none absolute inset-x-0 -top-[18px] h-[48px] overflow-hidden">
            <svg
              className={`h-[160px] w-full drop-shadow-[0_4px_5px_rgba(30,19,12,0.18)] ${waveColorClassName}`}
              viewBox="0 0 1440 160"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,18 C120,27 240,9 360,18 C480,27 600,9 720,18 C840,27 960,9 1080,18 C1200,27 1320,9 1440,18 L1440,160 L0,160 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ) : null}
        {mascotVariant ? (
          <div
            className={
              mascotInContent
                ? mascotSide === "left"
                  ? "pointer-events-none absolute left-[6%] top-24 z-10"
                  : "pointer-events-none absolute right-[6%] top-24 z-10"
                : mascotSide === "left"
                  ? "pointer-events-none absolute left-[6%] -top-[64px] z-10"
                  : "pointer-events-none absolute right-[6%] -top-[64px] z-10"
            }
          >
            <Cat
              id={id ?? String(zIndex)}
              variant={mascotVariant}
              className="h-[72px] w-[72px] drop-shadow-[0_8px_12px_rgba(30,19,12,0.22)]"
            />
          </div>
        ) : null}
        <div className={`flex h-full flex-col overflow-hidden ${className}`}>
          {children}
        </div>
      </div>
    </>
  );
}
