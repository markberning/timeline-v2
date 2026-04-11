export interface NarrativeChapter {
  number: number
  title: string
  slug: string
  summary: string
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

export interface TimelineNarrative {
  id: string
  label: string
  accentColor: string
  chapters: NarrativeChapter[]
  events: TlEvent[]
  spans: TlSpan[]
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
