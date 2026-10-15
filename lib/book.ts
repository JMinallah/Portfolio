// The site reads like a book: the front cover (Home), one page per tab, then
// the back cover. The order here decides which way a page turns when moving
// between them.
export const bookPages = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/end", label: "Back cover" },
] as const;

// The back cover is reached by turning past Contact, not from the tabs.
export const tabs = bookPages.slice(0, -1);

const lastPage = bookPages.length - 1;

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

  const types = [toIndex > fromIndex ? "flip-forward" : "flip-back"];
  // Opening or closing the book: on the spread, the single cover slides
  // between the middle of the screen and its side of the spine.
  if ([fromIndex, toIndex].some((i) => i === 0 || i === lastPage)) {
    types.push("cover");
  }
  return types;
}
