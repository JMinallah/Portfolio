"use client";

import { useEffect } from "react";
import { scrollToId } from "@/lib/scroll";

export function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    requestAnimationFrame(() => scrollToId(hash.slice(1)));
  }, []);

  return null;
}
