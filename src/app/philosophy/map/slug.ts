// Shared slug for glossary anchors — used by the map page (section + entry ids)
// and by the in-narrative term popups (deep-link to /philosophy/map#<slug>).
export function ismSlug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}
