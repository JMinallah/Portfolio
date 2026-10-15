"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { bookPages, pageIndex, transitionTypesFor } from "@/lib/book";

const SWIPE_DISTANCE = 60;

// Turn pages with the arrow keys or a horizontal swipe.
export function BookControls() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function turn(step: 1 | -1) {
      // From a case study, "back" returns to the project list.
      const target =
        step === -1 && pathname.startsWith("/work/")
          ? "/work"
          : bookPages[pageIndex(pathname) + step]?.href;
      if (!target) return;
      router.push(target, {
        transitionTypes: transitionTypesFor(pathname, target),
      });
    }

    function isTyping(target: EventTarget | null) {
      return (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
      );
    }

    // Widgets with their own left/right gestures (e.g. the More work deck)
    // mark themselves so swipes inside them don't turn the page.
    function hasOwnGestures(target: EventTarget | null) {
      return target instanceof Element && target.closest("[data-own-gestures]") !== null;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.defaultPrevented || isTyping(event.target)) return;
      if (event.key === "ArrowRight") turn(1);
      if (event.key === "ArrowLeft") turn(-1);
    }

    let start: { x: number; y: number } | null = null;

    function onTouchStart(event: TouchEvent) {
      if (
        event.touches.length !== 1 ||
        isTyping(event.target) ||
        hasOwnGestures(event.target)
      ) {
        start = null;
        return;
      }
      start = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }

    function onTouchEnd(event: TouchEvent) {
      if (!start) return;
      const dx = event.changedTouches[0].clientX - start.x;
      const dy = event.changedTouches[0].clientY - start.y;
      start = null;
      if (Math.abs(dx) < SWIPE_DISTANCE || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      turn(dx < 0 ? 1 : -1);
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [pathname, router]);

  return null;
}
