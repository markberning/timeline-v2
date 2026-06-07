// Shared cast-arc name lookup. A battle dossier lists commanders by display name,
// with many spelling variants across pages; each war keeps a hand-verified
// name→arc-id table (EXACT — a wrong link is worse than none, and same-surname
// pairs must never collide). The normalize-then-lookup logic is identical for every
// war, so it lives here once; each war's commander registry calls makeCastLookup
// with its own table, and the WarConfig exposes the result as `castIdForName`.

export function makeCastLookup(byName: Record<string, string>): (name: string) => string | undefined {
  return (name: string) => {
    const key = name
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\s+/g, ' ')
      .trim()
    return byName[key]
  }
}
