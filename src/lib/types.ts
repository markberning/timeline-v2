export interface ChapterIntroCast {
  name: string
  note: string
}

/**
 * Forward-looking orienting frame shown at the top of an open chapter,
 * before the prose. Deliberately lighter than the chapter itself — it
 * primes the reader so the dense inline-defined prose lands on prepared
 * ground. Authored in narratives/{tlId}.intros.json (sidecar, like
 * summaries). `bridge` is omitted for Chapter 1 (there is no "before").
 */
export interface ChapterIntro {
  bridge?: string // "Where we are" — story-so-far bridge from the prior chapter (ch2+)
  setup: string // "The setup" — the situation as the chapter opens + what's at stake (no outcome spoilers)
  cast: ChapterIntroCast[] // "Who & what to watch" — short nameplates, not full definitions
  takeaway: string // "By the end" — one sentence, the comprehension payoff
}

export interface NarrativeChapter {
  number: number
  title: string
  subtitle?: string
  slug: string
  summary: string
  summaryBullets?: string[]
  intro?: ChapterIntro
  dateRange: string
  contentHtml: string
  eventIds: string[]
}

export interface EventDetail {
  label: string
  text: string
}

export interface TlEvent {
  id: string
  label: string
  year: number
  endYear?: number
  description: string
  wikiSlug: string
  commonsFile?: string
  thumbnailUrl?: string
  imageCaption?: string
  wikiExtract?: string
  details?: EventDetail[]
  tier: number
  category: string
}

export interface TlSpan {
  id: string
  label: string
  startYear: number
  endYear: number
}

export interface GlossaryEntry {
  term: string
  wikiSlug: string // a real Wikipedia slug, OR an opaque `def:<slug>` token for authored-blurb entries
  type: string
  wikiExtract?: string
  thumbnailUrl?: string
  definition?: string // authored house-voice blurb (events-style); shown instead of wikiExtract
}

export interface CrossLink {
  id: string
  matchText: string
  sourceChapter: number
  targetTl: string
  targetChapter: number
  targetLabel: string
  targetChapterTitle: string
  targetColorLight: string
  targetColorDark: string
  blurb: string
}

export interface TimelineNarrative {
  id: string
  label: string
  accentColor: string
  chapters: NarrativeChapter[]
  events: TlEvent[]
  spans: TlSpan[]
  glossary?: GlossaryEntry[]
  crossLinks?: CrossLink[]
  mapCommonsFile?: string
}

export interface ChainEntry {
  timelineId: string
  label: string
  hasNarrative: boolean
  transition?: string
}

export interface TlChain {
  id: string
  label: string
  entries: ChainEntry[]
}

export interface ChapterSummary {
  chapter: number
  title: string
  summary: string
  dateRange: string
}
