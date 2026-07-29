"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Layers, Mail, PenLine, User, type LucideIcon } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

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
  { href: "#capabilities", label: "Capabilities" },
  { href: "/blog", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

const navIcons: Record<string, LucideIcon> = {
  About: User,
  Projects: Briefcase,
  Capabilities: Layers,
  Writing: PenLine,
  Contact: Mail,
};

function NavIcon({ label }: { label: string }) {
  const Icon = navIcons[label];
  if (!Icon) return null;

  return <Icon className="h-4 w-4 shrink-0 text-umber-500" strokeWidth={1.75} aria-hidden="true" />;
}

export default function NavMinimal({
  brand = "Your Portfolio",
  items = defaultItems,
}: NavMinimalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  // Next.js's <Link> skips sticky/fixed-positioned elements when locating a
  // hash scroll target, and every section here is `position: sticky` by
  // design. When the target is already on the current page, scroll to it
  // ourselves instead of relying on Link's built-in (and here, broken)
  // hash-scroll behavior.
  function handleItemClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setIsOpen(false);

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex);
    const isSamePage = path === "" || path === pathname;
    if (!isSamePage) return;

    const id = href.slice(hashIndex + 1);
    if (!scrollToId(id)) return;

    event.preventDefault();
    window.history.pushState(null, "", href.slice(hashIndex));
  }

  return (
    <header className="sticky top-0 z-[100] border-b border-umber-900/10 bg-umber-50/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-5 sm:px-10 lg:px-12">
        <Link
          href="/#name"
          className="py-1 text-sm font-semibold uppercase tracking-[0.16em] text-umber-900"
          onClick={(event) => handleItemClick(event, "/#name")}
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
          <div className="absolute inset-0 rounded-full bg-umber-100/0 transition-colors duration-200 group-hover:bg-umber-100"></div>
          <span className="sr-only">Toggle menu</span>
          <span className="relative flex flex-col items-end gap-1">
            <span className="block h-[2px] w-5 rounded-full bg-umber-800" />
            <span className="block h-[2px] w-3 rounded-full bg-umber-800" />
          </span>
        </button>

        {isOpen ? (
          <div
            ref={menuRef}
            id="mobile-nav"
            className="absolute right-8 top-full z-40 mt-3 w-max overflow-hidden rounded-xl border border-umber-900/10 bg-umber-50/95 backdrop-blur-xl sm:right-10 lg:right-12"
          >
            <ul className="space-y-0.5 p-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 whitespace-nowrap rounded-lg px-5 py-1.5 text-base text-umber-700 transition-colors hover:bg-umber-100 hover:text-umber-950"
                    onClick={(event) => handleItemClick(event, item.href)}
                  >
                    <NavIcon label={item.label} />
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
