"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pageIndex, tabs, transitionTypesFor } from "@/lib/book";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const current = pageIndex(pathname);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="on-ground px-4 pb-5 pt-7 text-center sm:pb-8 sm:pt-12"
    >
      <Link
        href="/"
        transitionTypes={transitionTypesFor(pathname, "/")}
        className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl"
      >
        {siteConfig.name}
      </Link>

      <nav aria-label="Main" className="mt-4">
        <ul className="flex items-center justify-center gap-5 text-sm sm:gap-7">
          {tabs.map((tab, i) => {
            const isActive = current === i;
            return (
              <li key={tab.href}>
                <Link
                  href={tab.href}
                  transitionTypes={transitionTypesFor(pathname, tab.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 font-medium transition-colors ${
                    isActive
                      ? "text-paper"
                      : "text-paper/75 hover:text-paper"
                  }`}
                >
                  {tab.label}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      style={{ viewTransitionName: "tab-indicator" }}
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-paper"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
