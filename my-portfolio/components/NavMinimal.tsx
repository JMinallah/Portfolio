"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type NavMinimalProps = {
  brand?: string;
  items?: NavItem[];
};

const defaultItems: NavItem[] = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function NavMinimal({
  brand = "Your Portfolio",
  items = defaultItems,
}: NavMinimalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 sm:top-5">
      <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex w-full max-w-4xl items-center justify-between rounded-full border border-black/10 bg-white/80 px-6 py-4 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-900"
          >
            {brand}
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-600 transition-colors duration-200 hover:text-zinc-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full focus:outline-none md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            onTouchStart={(e) => {
              e.preventDefault();
              setIsOpen((prev) => !prev);
            }}
          >
            <div className="absolute inset-0 rounded-full bg-zinc-100/0 transition-colors duration-200 group-hover:bg-zinc-100"></div>
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="relative h-5 w-5 text-zinc-800"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <span className="relative flex flex-col items-end gap-1.5">
                <span className="block h-[1.5px] w-5 rounded-full bg-zinc-800 transition-transform duration-200" />
                <span className="block h-[1.5px] w-3.5 rounded-full bg-zinc-800 transition-transform duration-200" />
                <span className="block h-[1.5px] w-4.5 rounded-full bg-zinc-800 transition-transform duration-200" />
              </span>
            )}
          </button>
        </nav>

        {isOpen ? (
          <div
            id="mobile-nav"
            className="absolute right-0 top-[calc(100%+1rem)] z-50 w-[min(20rem,calc(100vw-2rem))] overflow-hidden border border-black/10 bg-white/90 shadow-2xl shadow-black/10 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col p-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-4 py-3 text-base text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
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
