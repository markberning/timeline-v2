import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import type { TimelineNarrative, NarrativeChapter } from './types'

const CONTENT_DIR = join(process.cwd(), 'content')

const cache = new Map<string, TimelineNarrative>()

function loadNarrative(id: string): TimelineNarrative {
  if (cache.has(id)) return cache.get(id)!
  const raw = readFileSync(join(CONTENT_DIR, `${id}.json`), 'utf-8')
  const data: TimelineNarrative = JSON.parse(raw)
  cache.set(id, data)
  return data
}

export function getAllNarrativeIds(): string[] {
  return readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.json') && !f.startsWith('.'))
    .map(f => f.replace('.json', ''))
}

export function getNarrative(id: string): TimelineNarrative {
  return loadNarrative(id)
}

export interface ChapterWithNav {
  chapter: NarrativeChapter
  narrative: { id: string; label: string; accentColor: string }
  prevChapter: { slug: string; title: string } | null
  nextChapter: { slug: string; title: string } | null
}

export function getChapter(civilizationId: string, chapterSlug: string): ChapterWithNav | null {
  const narrative = loadNarrative(civilizationId)
  const idx = narrative.chapters.findIndex(ch => ch.slug === chapterSlug)
  if (idx === -1) return null

  return {
    chapter: narrative.chapters[idx],
    narrative: { id: narrative.id, label: narrative.label, accentColor: narrative.accentColor },
    prevChapter: idx > 0
      ? { slug: narrative.chapters[idx - 1].slug, title: narrative.chapters[idx - 1].title }
      : null,
    nextChapter: idx < narrative.chapters.length - 1
      ? { slug: narrative.chapters[idx + 1].slug, title: narrative.chapters[idx + 1].title }
      : null,
  }
}
