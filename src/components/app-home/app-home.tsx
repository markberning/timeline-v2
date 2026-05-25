'use client'

// The app root — the home for the whole of Stuff Happened. A brand header, the
// four threads (Civilizations / Wars / Art / Music) as a launcher, and an "On
// This Day" feed that pulls dated anniversaries from across the threads. Each
// thread links to its own home; the verticals keep their own breadcrumb bars.
// Phone-width column centered on desktop, matching the Civ home's framing.

import { useState, useEffect } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { SearchOverlay } from '@/components/chronology/search-overlay'
import { TL_KIND_LABELS, type TlKind } from '@/lib/navigator-tls'
import { sampleFeed, type FeedItem } from '@/lib/app-feed'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 38%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 11%, transparent)'
const CHIP = 'color-mix(in srgb, var(--foreground) 6%, transparent)'

function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${a})`
}

const ACCENT: Record<TlKind, string> = { civ: '#d97706', war: '#b44d3b', art: '#7c3aed', music: '#1d4ed8' }
const STONE = '#8a7a66' // neutral accent for the home's own controls

// Trim a long blurb to a word boundary so it fits the compact tile.
function short(s: string, max = 92): string {
  if (s.length <= max) return s
  const cut = s.slice(0, max)
  const i = cut.lastIndexOf(' ')
  return cut.slice(0, i > max * 0.6 ? i : max).replace(/[,;:—–\s]+$/, '') + '…'
}

interface Thread {
  kind: TlKind
  tag: string
  href: string
  live: boolean
}
const THREADS: Thread[] = [
  { kind: 'civ', tag: 'Every culture that ever was.', href: '/civ', live: true },
  { kind: 'war', tag: 'Every conflict we couldn’t put down.', href: '/war', live: true },
  { kind: 'art', tag: 'Forty thousand years of making things.', href: '/art', live: true },
  { kind: 'music', tag: 'What we listened to, in order.', href: '/music', live: false },
]

// Gemini-generated flat emblems (public/thread-icons/{kind}.webp) — one per
// thread, each in its accent color. See scripts/gen-thread-icons.mjs.
function ThreadEmblem({ kind, size }: { kind: TlKind; size: number }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/thread-icons/${kind}.webp`} alt="" loading="lazy" style={{ width: size, height: size, objectFit: 'contain' }} />
}

const clampN = (n: number): React.CSSProperties => ({ display: '-webkit-box', WebkitLineClamp: n, WebkitBoxOrient: 'vertical', overflow: 'hidden' })

function Eyebrow({ e, color, size }: { e: FeedItem; color: string; size: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5, minWidth: 0 }}>
      <span style={{ fontFamily: SANS, fontSize: size, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>{e.type}</span>
      {e.soon && <span style={{ flexShrink: 0, fontFamily: SANS, fontSize: size - 1, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase', color, background: alpha(color, 0.14), padding: '1px 5px', borderRadius: 999 }}>Soon</span>}
    </div>
  )
}

function Card({ e, horizontal }: { e: FeedItem; horizontal?: boolean }) {
  const color = ACCENT[e.kind]
  // Every feed icon is tinted to its thread colour: use the emblem (per-item or
  // the thread fallback) as a mask filled with the accent — so all civ emblems
  // read orange, wars rust, etc., regardless of the source artwork's colour.
  const iconSrc = e.icon ?? `/thread-icons/${e.kind}.webp`
  const sz = horizontal ? 50 : 38
  const emblem = (
    <span aria-hidden style={{
      display: 'block', width: sz, height: sz, backgroundColor: color,
      WebkitMaskImage: `url("${iconSrc}")`, maskImage: `url("${iconSrc}")`,
      WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center', maskPosition: 'center',
      WebkitMaskSize: 'contain', maskSize: 'contain',
    }} />
  )

  // 1-column: the original horizontal card — emblem left, roomier text right.
  if (horizontal) {
    return (
      <a href={e.href} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', background: CHIP, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ width: 88, flexShrink: 0, alignSelf: 'stretch', minHeight: 78, background: alpha(color, 0.16), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{emblem}</div>
        <div style={{ flex: 1, minWidth: 0, padding: '10px 13px' }}>
          <Eyebrow e={e} color={color} size={10.5} />
          <div style={{ fontFamily: SERIF, fontSize: 17, color: INK, lineHeight: 1.15, marginTop: 3, ...(e.chapter ? {} : clampN(2)) }}>{e.title}</div>
          <div style={{ fontFamily: SANS, fontSize: 12.5, lineHeight: 1.45, color: MUTED, marginTop: 4, ...clampN(2) }}>{e.blurb}</div>
        </div>
      </a>
    )
  }

  // 2 / 3-column: compact vertical tile.
  return (
    <a href={e.href} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', background: CHIP, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ height: 60, background: alpha(color, 0.16), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{emblem}</div>
      <div style={{ flex: 1, minWidth: 0, padding: '7px 8px 9px' }}>
        <Eyebrow e={e} color={color} size={8.5} />
        <div style={{ fontFamily: SERIF, fontSize: 13.5, color: INK, lineHeight: 1.16, marginTop: 2, ...(e.chapter ? {} : clampN(3)) }}>{e.title}</div>
        <div style={{ fontFamily: SANS, fontSize: 10.5, lineHeight: 1.4, color: MUTED, marginTop: 3, ...clampN(4) }}>{short(e.blurb)}</div>
      </div>
    </a>
  )
}

export function AppHome({ chapters = [] }: { chapters?: FeedItem[] }) {
  // The feed is a random sample drawn client-side only (it uses Math.random and
  // the page is statically exported), so it mounts after hydration — no drift.
  // `chapters` come prebuilt from the server (their data is fs-only).
  const [feed, setFeed] = useState<FeedItem[]>([])
  useEffect(() => { setFeed(sampleFeed(18, chapters)) }, [chapters])
  const [searchOpen, setSearchOpen] = useState(false)

  // 1 / 2 / 3-column layout, remembered across visits
  const [cols, setCols] = useState(3)
  useEffect(() => { const s = localStorage.getItem('home-cols'); if (s) setCols(Math.min(3, Math.max(1, parseInt(s, 10) || 3))) }, [])
  const chooseCols = (n: number) => { setCols(n); localStorage.setItem('home-cols', String(n)) }

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', justifyContent: 'center', background: 'var(--background)', backgroundImage: `radial-gradient(120% 60% at 50% 0%, color-mix(in srgb, var(--foreground) 5%, transparent), transparent 60%)` }}>
      <div style={{ width: '100%', maxWidth: 440, minHeight: '100dvh', background: 'var(--background)', borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, boxShadow: '0 0 40px rgba(0,0,0,0.04)' }}>
        {/* brand header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, padding: '16px 16px 12px' }}>
          <div style={{ minWidth: 0 }}>
            <h1 style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 600, color: INK, lineHeight: 1.0, margin: 0, letterSpacing: -0.3 }}>Stuff Happened</h1>
            <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 14, color: MUTED, marginTop: 6 }}>The story of everything, in four threads.</div>
          </div>
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
            <button onClick={() => setSearchOpen(true)} aria-label="Search" style={{ appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer', color: MUTED, padding: 4, display: 'flex' }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>
            <DarkModeToggle />
          </div>
        </div>

        {/* four threads */}
        <div>
          {THREADS.map(t => {
            const color = ACCENT[t.kind]
            const row = (
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 16px 16px 0', borderTop: `1px solid ${BORDER}`, position: 'relative' }}>
                <div style={{ width: 4, alignSelf: 'stretch', flexShrink: 0, background: color }} />
                <span style={{ flexShrink: 0, paddingLeft: 4 }}><ThreadEmblem kind={t.kind} size={32} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontFamily: SERIF, fontSize: 21, color: INK, lineHeight: 1.1 }}>{TL_KIND_LABELS[t.kind]}</span>
                    {!t.live && <span style={{ fontFamily: SANS, fontSize: 8.5, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', color, background: alpha(color, 0.14), padding: '1px 6px', borderRadius: 999 }}>Soon</span>}
                  </div>
                  <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13.5, color: MUTED, marginTop: 2 }}>{t.tag}</div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: 16 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </div>
            )
            return <a key={t.kind} href={t.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{row}</a>
          })}
        </div>

        {/* discovery feed — a balanced random sample across the threads. Mounts
            after hydration (random + static export), so it's gated on the feed */}
        {feed.length > 0 && (
          <div style={{ borderTop: `8px solid ${CHIP}`, padding: '14px 16px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 10 }}>
              <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color: FAINT }}>Wander in</span>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {/* 1 / 2 / 3-column segmented control — "Cols" label so it doesn't
                    read as pagination */}
                <div style={{ display: 'inline-flex', alignItems: 'center', border: `1px solid ${BORDER}`, borderRadius: 999, overflow: 'hidden' }}>
                  <span style={{ fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: FAINT, padding: '0 8px', borderRight: `1px solid ${BORDER}`, alignSelf: 'stretch', display: 'inline-flex', alignItems: 'center' }}>Cols</span>
                  {[1, 2, 3].map(n => {
                    const on = cols === n
                    return (
                      <button key={n} onClick={() => chooseCols(n)} aria-label={`${n} column${n > 1 ? 's' : ''}`} aria-pressed={on} style={{ appearance: 'none', border: 'none', cursor: 'pointer', width: 26, height: 24, background: on ? STONE : 'transparent', color: on ? '#fff' : MUTED, fontFamily: SANS, fontSize: 11, fontWeight: 700, lineHeight: 1 }}>{n}</button>
                    )
                  })}
                </div>
                <button onClick={() => setFeed(sampleFeed(18, chapters))} aria-label="Shuffle" style={{ appearance: 'none', border: `1px solid ${BORDER}`, background: CHIP, cursor: 'pointer', color: MUTED, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 999, fontFamily: SANS, fontSize: 10.5, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /></svg>
                  Shuffle
                </button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: cols === 1 ? 10 : 8 }}>
              {feed.map((e, i) => <Card key={i} e={e} horizontal={cols === 1} />)}
            </div>
          </div>
        )}
      </div>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
