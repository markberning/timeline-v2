// Term index for the in-narrative glossary popups. Flattens ISM_GROUPS into a
// lookup keyed by lowercased term, and a single word-boundary regex that the reader
// uses to find -ism terms in prose. When a term appears twice (Phenomenology and
// Existentialism each have a full entry and a short recap in the 20th-century group),
// the FIRST occurrence wins — and the full entries come first in ISM_GROUPS, so the
// lookup always points at the substantial card, never the recap.

import { ISM_GROUPS, type IsmEntry } from './isms-data'
import { ismSlug } from './slug'

export interface IsmLookupEntry extends IsmEntry {
  slug: string
}

const lookup = new Map<string, IsmLookupEntry>()
for (const g of ISM_GROUPS) {
  for (const e of g.entries) {
    const key = e.term.toLowerCase()
    if (!lookup.has(key)) lookup.set(key, { ...e, slug: ismSlug(e.term) })
  }
}

export const ISM_LOOKUP = lookup
export function ismByTerm(raw: string): IsmLookupEntry | undefined {
  return lookup.get(raw.toLowerCase())
}

// Terms longest-first so multi-word / hyphenated terms win over their substrings
// ("Post-structuralism" before "Structuralism", "Virtue Ethics" before any sub-word).
const TERMS = [...lookup.keys()]
  .map(k => lookup.get(k)!.term)
  .sort((a, b) => b.length - a.length)

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// Match a whole term, not a fragment inside a larger word. Plain \b boundaries (no
// lookbehind — older iOS Safari throws on that and would break the whole reader) keep
// "materialist" from tripping the "Materialism" entry while still catching possessives
// ("Stoicism's") and multi-word / hyphenated terms.
export const ISM_RE = new RegExp(
  `\\b(${TERMS.map(escapeRe).join('|')})\\b`,
  'gi',
)
