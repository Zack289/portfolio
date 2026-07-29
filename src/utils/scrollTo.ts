const HEADER_OFFSET = 80; // px — roughly the fixed navbar's height, adjust if yours differs

export function scrollToSection(id: string): void {
  const el = document.querySelector(id.startsWith("#") ? id : `#${id}`);
  if (!el) return;

  // window.scrollTo instead of el.scrollIntoView — some real mobile browsers
  // (not desktop devtools emulation) silently drop scrollIntoView when it's
  // called in the same tick as another layout change, like the mobile menu closing
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}