// The site reads like a book: the cover, then one page per tab. The order
// here decides which way a page turns when moving between them.
export const bookPages = [
  { href: "/", label: "Cover" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const tabs = bookPages.slice(1);

export function pageIndex(pathname: string) {
  if (pathname === "/") return 0;
  return bookPages.findIndex(
    (page) =>
      page.href !== "/" &&
      (pathname === page.href || pathname.startsWith(`${page.href}/`))
  );
}

// Transition types consumed by <BookPage> and the CSS in globals.css.
export function transitionTypesFor(from: string, to: string): string[] {
  const fromIndex = pageIndex(from);
  const toIndex = pageIndex(to);

  if (fromIndex === toIndex) {
    return from.startsWith("/work/") && to === "/work" ? ["close-project"] : [];
  }
  return [toIndex > fromIndex ? "flip-forward" : "flip-back"];
}
