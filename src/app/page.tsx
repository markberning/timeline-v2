// App root — the home for the whole app: brand + the four threads
// (Civilizations / Wars / Art / Music) + a discovery feed. The Civ home
// (timeline/chains) lives at /civ; the legacy ModeShell home is at /classic.
//
// Chapter feed items are built here (server) because their source data is
// fs-only; a build-time random subset is embedded and the client shuffles
// within it alongside the other (static-data) threads.
import { AppHome } from '@/components/app-home/app-home'
import { getAllNarrativeIds, getNarrative } from '@/lib/data'
import type { FeedItem } from '@/lib/app-feed'

// Summary bullets carry inline link HTML and run long; strip tags + entities to
// plain text, collapse whitespace, and truncate at a word boundary for the card.
function clean(s: string): string {
  const text = s
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&mdash;/g, '—').replace(/&ndash;/g, '–')
    .replace(/&rsquo;/g, '’').replace(/&lsquo;/g, '‘').replace(/&rdquo;/g, '”').replace(/&ldquo;/g, '“').replace(/&hellip;/g, '…')
    .replace(/\s+/g, ' ').trim()
  // generous cap (the card 2-line-clamps the display); mainly keeps the embedded
  // payload from carrying 400-char bullets
  if (text.length <= 180) return text
  const cut = text.slice(0, 180)
  const lastSpace = cut.lastIndexOf(' ')
  return cut.slice(0, lastSpace > 120 ? lastSpace : 180).replace(/[,;:—–\s]+$/, '') + '…'
}

function chapterSeeds(): FeedItem[] {
  const out: FeedItem[] = []
  for (const id of getAllNarrativeIds()) {
    let n
    try { n = getNarrative(id) } catch { continue }
    for (const c of n.chapters) {
      const blurb = clean(c.intro?.takeaway ?? c.subtitle ?? c.summaryBullets?.[0] ?? '')
      if (!blurb) continue
      out.push({ kind: 'civ', type: `${n.label} · Ch ${c.number}`, title: c.title, blurb, href: `/${id}?chapter=${c.number}` })
    }
  }
  // Embed a build-time random subset to keep the payload small; the client still
  // shuffles within it each visit. (Re-rolls per build.)
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out.slice(0, 160)
}

export default function Home() {
  return <AppHome chapters={chapterSeeds()} />
}
