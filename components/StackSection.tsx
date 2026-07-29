import type { ReactNode } from "react";

type StackSectionProps = {
  children: ReactNode;
  zIndex: number;
  id?: string;
  className?: string;
  waveColorClassName?: string;
};

export function StackSection({
  children,
  zIndex,
  id,
  className = "",
  waveColorClassName,
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
          <svg
            className={`pointer-events-none absolute inset-x-0 -top-[18px] h-[36px] w-full ${waveColorClassName}`}
            viewBox="0 0 1440 72"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,36 C120,54 240,18 360,36 C480,54 600,18 720,36 C840,54 960,18 1080,36 C1200,54 1320,18 1440,36 L1440,72 L0,72 Z"
              fill="currentColor"
            />
          </svg>
        ) : null}
        <div className={`flex h-full flex-col overflow-hidden ${className}`}>
          {children}
        </div>
      </div>
    </>
  );
}
