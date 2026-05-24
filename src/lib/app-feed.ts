// The app home's discovery feed — a balanced random sample of real things to
// read across the threads: civilizations, wars, battles, theatres, off-field
// turning points, art eras / movements / artists. Every item links to a page
// that exists and carries a real blurb (no fabricated copy). Music joins once
// it has content. Sampling round-robins the threads so the mix stays varied
// even though the civ pool dwarfs the others.

import { SORTED_CIVS } from '@/lib/chronology-data'
import { REGION_LABELS, type TlKind } from '@/lib/navigator-tls'
import { CIV_BLURBS } from '@/lib/civ-blurbs'
import { getCivEmblemPath } from '@/lib/civ-icons'
import { WAR_EVENTS } from '@/components/mode/war-front-door'
import { MAJORS, THEMES, THEATRE_NAV } from '@/lib/civil-war-roster'
import { ART_ERAS } from '@/lib/art-data'
import { ART_MOVEMENT_CONTENT, ART_ARTIST_CONTENT } from '@/lib/art-content'

export interface FeedItem {
  kind: TlKind
  type: string   // category label shown in the card eyebrow (color = thread)
  title: string
  blurb: string
  href: string
  soon?: boolean // a teaser for content not built yet (badged, lands on the door)
  icon?: string  // a specific emblem (per-civ); falls back to the thread emblem
  chapter?: boolean // a civ-chapter card — its title (the chapter name) wraps in full
}

// TEMP teasers for the not-yet-built threads. Clearly badged "Soon" and they
// land on the vertical's coming-soon door — placeholders, not fake content.
// Music has no real content yet; Art is barely started, so a few extra movements
// and works tease what's coming. Delete these as the real content lands.
const MUSIC_SOON: FeedItem[] = [
  { kind: 'music', type: 'Music era', title: 'Baroque', blurb: 'Ornament, counterpoint, and Bach quietly running the numbers.', href: '/music', soon: true, icon: '/music-icons/baroque.webp' },
  { kind: 'music', type: 'Music era', title: 'Classical', blurb: 'Balance and clarity — Mozart and Haydn make it look easy.', href: '/music', soon: true, icon: '/music-icons/classical.webp' },
  { kind: 'music', type: 'Music era', title: 'Romantic', blurb: 'Bigger orchestras, bigger feelings, Beethoven kicking the door open.', href: '/music', soon: true, icon: '/music-icons/romantic.webp' },
  { kind: 'music', type: 'Music form', title: 'Opera', blurb: 'Theatre that decided plain talking was for amateurs.', href: '/music', soon: true, icon: '/music-icons/opera.webp' },
  { kind: 'music', type: 'Genre', title: 'Jazz', blurb: 'America’s one wholly original art form, reinvented nightly.', href: '/music', soon: true, icon: '/music-icons/jazz.webp' },
  { kind: 'music', type: 'Genre', title: 'The Blues', blurb: 'Three chords, the truth, and the root of nearly everything after.', href: '/music', soon: true, icon: '/music-icons/blues.webp' },
  { kind: 'music', type: 'Genre', title: 'Rock', blurb: 'Took the blues, plugged it in, and turned it all the way up.', href: '/music', soon: true, icon: '/music-icons/rock.webp' },
  { kind: 'music', type: 'Genre', title: 'Hip-Hop', blurb: 'From a Bronx rec room to the planet’s dominant sound in forty years.', href: '/music', soon: true, icon: '/music-icons/hiphop.webp' },
]
const ART_SOON: FeedItem[] = [
  { kind: 'art', type: 'Art movement', title: 'Impressionism', blurb: 'Painting the light instead of the thing — and scandalizing the Salon.', href: '/art', soon: true },
  { kind: 'art', type: 'Art movement', title: 'Surrealism', blurb: 'Dreams, melting clocks, and at least two competing manifestos.', href: '/art', soon: true },
  { kind: 'art', type: 'Art movement', title: 'Abstract Expressionism', blurb: 'New York decides the painting is the event, not the picture.', href: '/art', soon: true },
  { kind: 'art', type: 'Artwork', title: 'The Starry Night', blurb: 'Van Gogh’s night sky from a sanatorium window, swirling.', href: '/art', soon: true },
  { kind: 'art', type: 'Artwork', title: 'Guernica', blurb: 'Picasso’s scream at a bombed Basque town, in black and white.', href: '/art', soon: true },
]

const THEATRE_BLURB: Record<string, string> = {
  east: 'Richmond, Washington, and the ninety blood-soaked miles between them.',
  west: 'Rivers and railroads — the theatre that actually won the war.',
  tmis: 'The sprawling, half-remembered war west of the big river.',
  naval: 'Blockade, ironclads, and the slow strangling of Southern ports.',
  offfield: 'Emancipation, politics, the home front — the war away from the guns.',
}
const THEATRE_LABEL: Record<string, string> = { east: 'Eastern', west: 'Western', tmis: 'Trans-Miss', naval: 'Naval', offfield: 'Off the field' }

function civPool(): FeedItem[] {
  return SORTED_CIVS
    .filter(c => c.hasContent)
    .map(c => ({ kind: 'civ' as const, type: 'Civilization', title: c.label, blurb: CIV_BLURBS[c.id] ?? c.subtitle ?? '', href: `/civ/${c.id}`, icon: getCivEmblemPath(c.id) ?? undefined }))
    .filter(i => i.blurb)
}

function warPool(): FeedItem[] {
  // Everything under the Civil War (theatres, battles, off-field themes) carries
  // the war's own icon — only the 12 WAR_EVENTS get their distinct emblem.
  const ACW_ICON = '/war-icons/cw.webp'
  const wars: FeedItem[] = WAR_EVENTS.map(w => ({ kind: 'war', type: 'War', title: w.name, blurb: w.hook, href: w.href ?? '/war', icon: `/war-icons/${w.id}.webp` }))
  const theatres: FeedItem[] = THEATRE_NAV.map(t => ({ kind: 'war', type: 'Theatre', title: t.label, blurb: THEATRE_BLURB[t.id] ?? '', href: t.href, icon: ACW_ICON }))
  const battles: FeedItem[] = MAJORS.filter(b => b.href).map(b => ({ kind: 'war', type: `${THEATRE_LABEL[b.theatre]} battle`, title: b.name, blurb: `${b.place} · ${b.mo} ${b.year}`, href: b.href!, icon: ACW_ICON }))
  const themes: FeedItem[] = THEMES.filter(t => t.href).map(t => ({ kind: 'war', type: 'Off the field', title: t.name, blurb: t.hook, href: t.href!, icon: ACW_ICON }))
  return [...wars, ...theatres, ...battles, ...themes].filter(i => i.blurb)
}

function artPool(): FeedItem[] {
  const eras: FeedItem[] = ART_ERAS.map(e => ({ kind: 'art', type: 'Art era', title: e.name, blurb: e.hook, href: `/art/${e.id}`, icon: `/art-icons/${e.id}.webp` }))
  const movements: FeedItem[] = Object.values(ART_MOVEMENT_CONTENT).map(m => ({ kind: 'art', type: 'Art movement', title: m.name, blurb: m.hook, href: `/art/${m.eraId}/${m.id}` }))
  const artists: FeedItem[] = Object.values(ART_ARTIST_CONTENT).map(a => ({ kind: 'art', type: 'Artist', title: a.name, blurb: a.hook, href: `/art/artist/${a.id}` }))
  return [...eras, ...movements, ...artists, ...ART_SOON].filter(i => i.blurb)
}

function musicPool(): FeedItem[] {
  return [...MUSIC_SOON]
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * A balanced random sample: round-robin across the threads so each draw mixes
 * civilizations, wars, and art rather than drowning in the (much larger) civ
 * pool. Random each call — invoked client-side only, so no hydration drift.
 */
export function sampleFeed(n = 8, chapters: FeedItem[] = []): FeedItem[] {
  // chapters are built server-side (their data is fs-only) and passed in as a
  // ready-made pool; they ride as their own lane so they're always in the mix.
  const pools = [shuffle(civPool()), shuffle(chapters), shuffle(warPool()), shuffle(artPool()), shuffle(musicPool())]
  const out: FeedItem[] = []
  let i = 0
  while (out.length < n && pools.some(p => p.length)) {
    const p = pools[i % pools.length]
    const next = p.shift()
    if (next) out.push(next)
    i++
  }
  return out
}
