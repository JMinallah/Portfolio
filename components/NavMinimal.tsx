"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type NavMinimalProps = {
  brand?: string;
  items?: NavItem[];
};

const defaultItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "/blog", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function NavMinimal({
  brand = "Your Portfolio",
  items = defaultItems,
}: NavMinimalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-[100] border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-5 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="py-1 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-900"
        >
          {brand}
        </Link>

        <button
          type="button"
          className="group relative flex h-10 w-10 items-center justify-center rounded-full focus:outline-none"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="absolute inset-0 rounded-full bg-zinc-100/0 transition-colors duration-200 group-hover:bg-zinc-100"></div>
          <span className="sr-only">Toggle menu</span>
          <span className="relative flex flex-col items-end gap-1">
            <span className="block h-[2px] w-5 rounded-full bg-zinc-800" />
            <span className="block h-[2px] w-3 rounded-full bg-zinc-800" />
          </span>
        </button>

        {isOpen ? (
          <div
            ref={menuRef}
            id="mobile-nav"
            className="absolute right-8 top-full z-40 mt-3 w-max overflow-hidden rounded-xl border border-black/10 bg-white/95 backdrop-blur-xl sm:right-10 lg:right-12"
          >
            <ul className="space-y-0.5 p-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block whitespace-nowrap rounded-lg px-5 py-1.5 text-base text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
