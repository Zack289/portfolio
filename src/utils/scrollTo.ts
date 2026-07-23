export function scrollToSection(id: string): void {
  const el = document.querySelector(id.startsWith("#") ? id : `#${id}`);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
