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
      className="px-4 pb-8 pt-10 text-center sm:pt-14"
    >
      <Link
        href="/"
        transitionTypes={transitionTypesFor(pathname, "/")}
        className="text-2xl font-semibold tracking-tight text-forest sm:text-3xl"
      >
        {siteConfig.name}
      </Link>

      <nav aria-label="Main" className="mt-4">
        <ul className="flex items-center justify-center gap-3 text-sm sm:gap-4">
          {tabs.map((tab, i) => {
            const isActive = current === i + 1;
            return (
              <li key={tab.href} className="flex items-center gap-3 sm:gap-4">
                {i > 0 ? (
                  <span aria-hidden="true" className="text-forest/30">
                    ·
                  </span>
                ) : null}
                <Link
                  href={tab.href}
                  transitionTypes={transitionTypesFor(pathname, tab.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-1 font-medium transition-colors ${
                    isActive
                      ? "text-forest"
                      : "text-forest/55 hover:text-forest"
                  }`}
                >
                  {tab.label}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      style={{ viewTransitionName: "tab-indicator" }}
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-forest"
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
