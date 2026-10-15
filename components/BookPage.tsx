import { ViewTransition } from "react";

// One page of the book. Which animation plays depends on the transition type
// attached to the navigation (see lib/book.ts and globals.css).
export function BookPage({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "flip-forward": "flip-under",
        "flip-back": "flip-in",
        "open-project": "page-reveal",
        "close-project": "page-reveal",
        default: "none",
      }}
      exit={{
        "flip-forward": "flip-out",
        "flip-back": "flip-stay",
        "open-project": "page-hold",
        "close-project": "page-hold",
        default: "none",
      }}
      default="none"
    >
      <div className="book-page min-h-[26rem] px-6 py-10 sm:px-12 sm:py-14">
        {children}
      </div>
    </ViewTransition>
  );
}
