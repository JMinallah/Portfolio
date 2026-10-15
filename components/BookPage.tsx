import { ViewTransition } from "react";

type BookPageProps =
  | {
      left: React.ReactNode;
      right: React.ReactNode;
      // On narrow screens both halves stack on one sheet; this hides one.
      single?: "left" | "right";
      centered?: boolean;
      cover?: never;
      children?: never;
    }
  | {
      // A cover is a single page at every width. The front cover is a
      // right-hand page (spine on its left), the back cover a left-hand one.
      cover: "front" | "back";
      children: React.ReactNode;
      left?: never;
      right?: never;
      single?: never;
      centered?: never;
    };

// One page of the book. Narrow screens get a single sheet; from 1200px wide it
// opens into a two-page spread (see .book in globals.css). Which animation
// plays depends on the navigation's transition type (lib/book.ts).
export function BookPage(props: BookPageProps) {
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
      {props.cover ? (
        <div className="book" data-cover={props.cover} data-centered>
          <section
            className={`leaf ${props.cover === "front" ? "leaf-right" : "leaf-left"}`}
          >
            <div className="cover-frame">{props.children}</div>
          </section>
        </div>
      ) : (
        <div
          className="book"
          data-single={props.single}
          data-centered={props.centered || undefined}
        >
          <section className="leaf leaf-left">{props.left}</section>
          <section className="leaf leaf-right">{props.right}</section>
        </div>
      )}
    </ViewTransition>
  );
}
