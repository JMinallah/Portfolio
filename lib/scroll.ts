// Sections on the home page use `position: sticky` to create the stacked
// overlap effect. Once scrolled past, a sticky element stays visually
// pinned at the top of the viewport, so `getBoundingClientRect()` (and
// therefore `scrollIntoView()`) reports it as "already in view" no matter
// how far past it the page has scrolled. `offsetTop` reflects the
// element's true normal-flow position and isn't affected by that pin, so
// walk the offsetParent chain to get an absolute scroll target instead.
export function scrollToId(id: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(id);
  if (!target) return false;

  let top = 0;
  let el: HTMLElement | null = target;
  while (el) {
    top += el.offsetTop;
    el = el.offsetParent as HTMLElement | null;
  }

  window.scrollTo({ top, behavior });
  return true;
}
