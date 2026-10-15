import { ViewTransition } from "react";

type BookPageProps = {
  left: React.ReactNode;
  right: React.ReactNode;
  // On narrow screens both halves stack on one sheet; this hides one of them.
  single?: "left" | "right";
  centered?: boolean;
};

// One page of the book. Narrow screens get a single sheet; from 1200px wide it
// opens into a two-page spread (see .book in globals.css). Which animation
// plays depends on the navigation's transition type (lib/book.ts).
export function BookPage({ left, right, single, centered }: BookPageProps) {
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
      <div
        className="book"
        data-single={single}
        data-centered={centered || undefined}
      >
        <section className="leaf leaf-left">{left}</section>
        <section className="leaf leaf-right">{right}</section>
      </div>
    </ViewTransition>
  );
}
