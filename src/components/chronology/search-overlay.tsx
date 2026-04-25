'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

const REGION_COLORS: Record<string, string> = {
  'near-east': '#d97706',
  'africa': '#b44d3b',
  'asia': '#7c3aed',
  'europe': '#1d4ed8',
  'americas': '#047857',
}

interface SearchEntry {
  tlId: string
  label: string
  region: string
  chapters: { number: number; title: string; sentences: string[] }[]
}

interface SearchResult {
  tlId: string
  label: string
  region: string
  chapters: {
    number: number
    title: string
    matches: string[] // matched sentences
  }[]
}

let indexCache: SearchEntry[] | null = null

async function loadIndex(): Promise<SearchEntry[]> {
  if (indexCache) return indexCache
  const res = await fetch('/search-index.json')
  indexCache = await res.json()
  return indexCache!
}

function searchIndex(index: SearchEntry[], query: string, limit = 150): SearchResult[] {
  const q = query.toLowerCase()
  const results: SearchResult[] = []
  let total = 0

  for (const entry of index) {
    if (total >= limit) break
    const chapMatches: SearchResult['chapters'] = []

    for (const ch of entry.chapters) {
      if (total >= limit) break
      const matches: string[] = []
      for (const sentence of ch.sentences) {
        if (total >= limit) break
        if (sentence.toLowerCase().includes(q)) {
          matches.push(sentence)
          total++
        }
      }
      if (matches.length > 0) {
        chapMatches.push({ number: ch.number, title: ch.title, matches })
      }
    }

    if (chapMatches.length > 0) {
      results.push({ tlId: entry.tlId, label: entry.label, region: entry.region, chapters: chapMatches })
    }
  }

  return results
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return <>{text}</>

  // Show a window around the match (~120 chars)
  const windowSize = 60
  let start = Math.max(0, idx - windowSize)
  let end = Math.min(text.length, idx + query.length + windowSize)

  // Snap to word boundaries
  if (start > 0) {
    const spaceIdx = text.indexOf(' ', start)
    if (spaceIdx !== -1 && spaceIdx < idx) start = spaceIdx + 1
  }
  if (end < text.length) {
    const spaceIdx = text.lastIndexOf(' ', end)
    if (spaceIdx > idx + query.length) end = spaceIdx
  }

  const snippet = (start > 0 ? '...' : '') + text.slice(start, end) + (end < text.length ? '...' : '')
  const matchStart = snippet.toLowerCase().indexOf(query.toLowerCase())
  if (matchStart === -1) return <>{snippet}</>

  return (
    <>
      {snippet.slice(0, matchStart)}
      <strong className="text-foreground">{snippet.slice(matchStart, matchStart + query.length)}</strong>
      {snippet.slice(matchStart + query.length)}
    </>
  )
}

interface SearchOverlayProps {
  onClose: () => void
}

export function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [index, setIndex] = useState<SearchEntry[] | null>(null)
  const [loading, setLoading] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Load index on mount
  useEffect(() => {
    loadIndex().then(idx => {
      setIndex(idx)
      setLoading(false)
    })
  }, [])

  // Focus input on mount
  useEffect(() => {
    requestAnimationFrame(() => inputRef.current?.focus())
  }, [])

  // Debounced search
  useEffect(() => {
    if (!index) return
    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (query.trim().length < 2) {
      setResults([])
      return
    }

    debounceRef.current = setTimeout(() => {
      setResults(searchIndex(index, query.trim()))
    }, 200)

    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [query, index])

  // Close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const totalMatches = useMemo(() =>
    results.reduce((sum, r) => sum + r.chapters.reduce((s, c) => s + c.matches.length, 0), 0),
    [results]
  )

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col">
      {/* Search header */}
      <div className="shrink-0 px-4 pt-4 pb-3 border-b border-foreground/10">
        <div className="flex items-center gap-3">
          <button
            className="shrink-0 opacity-40 cursor-pointer p-1"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search all civilizations..."
            className="flex-1 bg-transparent text-[16px] font-[family-name:var(--font-lora)] italic outline-none placeholder:text-foreground/30"
          />
          {query && (
            <button
              className="shrink-0 opacity-40 cursor-pointer p-1"
              onClick={() => setQuery('')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
        {query.trim().length >= 2 && !loading && (
          <div className="text-[11px] text-foreground/40 mt-2">
            {totalMatches === 0
              ? 'No results'
              : `${totalMatches} match${totalMatches !== 1 ? 'es' : ''} across ${results.length} civ${results.length !== 1 ? 's' : ''}`
            }
          </div>
        )}
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        {loading && (
          <div className="text-[13px] text-foreground/40 text-center mt-8">Loading search index...</div>
        )}

        {!loading && query.trim().length < 2 && (
          <div className="text-[13px] text-foreground/40 text-center mt-8">
            Search for people, places, events, concepts...
          </div>
        )}

        {results.map(result => {
          const color = REGION_COLORS[result.region] ?? '#6b7280'
          return (
            <div key={result.tlId} className="mb-5">
              {/* Civ header */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                <span className="text-[13px] font-bold" style={{ color }}>
                  {result.label}
                </span>
              </div>

              {/* Chapter results */}
              {result.chapters.map(ch => (
                <div key={ch.number} className="ml-4 mb-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/40 mb-1">
                    Ch {ch.number} · {ch.title}
                  </div>
                  {ch.matches.map((sentence, i) => (
                    <button
                      key={i}
                      className="block w-full text-left py-1.5 text-[13px] leading-snug text-foreground/65 border-b border-foreground/5 last:border-b-0 cursor-pointer"
                      onClick={() => {
                        // Pass a unique snippet from this sentence so the reader finds the exact paragraph
                        const snippet = sentence.slice(0, 60).trim()
                        window.location.href = `/${result.tlId}/?chapter=${ch.number}&highlight=${encodeURIComponent(query.trim())}&snippet=${encodeURIComponent(snippet)}`
                      }}
                    >
                      <HighlightedText text={sentence} query={query.trim()} />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
