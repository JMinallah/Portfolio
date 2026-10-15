"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SEEN_KEY = "book-tip-seen";
const SHOW_AFTER_MS = 900; // let the page turn finish first
const HIDE_AFTER_MS = 7000;

function alreadySeen() {
  try {
    return localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    localStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Storage blocked (private mode etc.): the tip may show again; harmless.
  }
}

// A one-time hint on how to move through the book, shown the first time a
// visitor reaches an inside page (usually right after "Open the book").
export function BookTip() {
  const pathname = usePathname();
  const [text, setText] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const onCover = pathname === "/" || pathname === "/end";

  useEffect(() => {
    if (onCover || text !== null || alreadySeen()) return;
    markSeen();
    const touch = window.matchMedia("(hover: none)").matches;
    const show = window.setTimeout(() => {
      setText(
        touch
          ? "Swipe to turn pages, or use the tabs above."
          : "Use ← → to turn pages, or the tabs above."
      );
      setVisible(true);
    }, SHOW_AFTER_MS);
    return () => window.clearTimeout(show);
  }, [onCover, text]);

  useEffect(() => {
    if (!visible) return;
    const hide = window.setTimeout(() => setVisible(false), HIDE_AFTER_MS);
    return () => window.clearTimeout(hide);
  }, [visible]);

  if (text === null) return null;

  return (
    <div
      role="status"
      className={`book-tip fixed inset-x-0 z-50 flex justify-center px-4 transition-opacity duration-500 motion-reduce:transition-none ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <p className="flex items-center gap-3 rounded-full bg-paper py-2 pl-4 pr-2 text-sm text-forest shadow-[0_10px_30px_-12px_rgb(0_0_0/0.6)]">
        {text}
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="rounded-full bg-forest px-3 py-1 text-xs font-semibold text-champagne transition hover:brightness-125"
        >
          Got it
        </button>
      </p>
    </div>
  );
}
