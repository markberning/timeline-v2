'use client'

// The app root — the home for the whole of Stuff Happened. A brand header, the
// four threads (Civilizations / Wars / Art / Music) as a launcher, and an "On
// This Day" feed that pulls dated anniversaries from across the threads. Each
// thread links to its own home; the verticals keep their own breadcrumb bars.
// Phone-width column centered on desktop, matching the Civ home's framing.

import { useState, useEffect } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
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

function ThreadIcon({ kind, color }: { kind: TlKind; color: string }) {
  const c = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (kind === 'civ') return <svg {...c}><path d="M3 21h18" /><path d="M5 21V9l7-5 7 5v12" /><path d="M9 21v-6h6v6" /></svg>
  if (kind === 'war') return <svg {...c}><path d="M12 3l9 9-9 9-9-9z" /></svg>
  if (kind === 'art') return <svg {...c}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M21 16l-5-5L5 20" /></svg>
  return <svg {...c}><circle cx="7" cy="18" r="2.6" /><circle cx="18" cy="15" r="2.6" /><path d="M9.6 18V6l10.4-2v11" /></svg>
}

function Card({ e }: { e: FeedItem }) {
  const color = ACCENT[e.kind]
  return (
    <a href={e.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div style={{ display: 'flex', background: CHIP, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ width: 88, flexShrink: 0, alignSelf: 'stretch', minHeight: 78, background: alpha(color, 0.16), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ opacity: 0.5 }}><ThreadIcon kind={e.kind} color={color} /></span>
        </div>
        <div style={{ flex: 1, minWidth: 0, padding: '10px 13px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontFamily: SANS, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color }}>{e.type}</span>
            {e.soon && <span style={{ fontFamily: SANS, fontSize: 8, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color, background: alpha(color, 0.14), padding: '1px 5px', borderRadius: 999 }}>Soon</span>}
          </div>
          <div style={{ fontFamily: SERIF, fontSize: 17, color: INK, lineHeight: 1.15, marginTop: 3 }}>{e.title}</div>
          <div style={{ fontFamily: SANS, fontSize: 12.5, lineHeight: 1.45, color: MUTED, marginTop: 4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{e.blurb}</div>
        </div>
      </div>
    </a>
  )
}

export function AppHome({ chapters = [] }: { chapters?: FeedItem[] }) {
  // The feed is a random sample drawn client-side only (it uses Math.random and
  // the page is statically exported), so it mounts after hydration — no drift.
  // `chapters` come prebuilt from the server (their data is fs-only).
  const [feed, setFeed] = useState<FeedItem[]>([])
  useEffect(() => { setFeed(sampleFeed(8, chapters)) }, [chapters])

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', justifyContent: 'center', background: 'var(--background)', backgroundImage: `radial-gradient(120% 60% at 50% 0%, color-mix(in srgb, var(--foreground) 5%, transparent), transparent 60%)` }}>
      <div style={{ width: '100%', maxWidth: 440, minHeight: '100dvh', background: 'var(--background)', borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, boxShadow: '0 0 40px rgba(0,0,0,0.04)' }}>
        {/* brand header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, padding: '16px 16px 12px' }}>
          <div style={{ minWidth: 0 }}>
            <h1 style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 600, color: INK, lineHeight: 1.0, margin: 0, letterSpacing: -0.3 }}>Stuff Happened</h1>
            <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 14, color: MUTED, marginTop: 6 }}>The story of everything, in four threads.</div>
          </div>
          <DarkModeToggle />
        </div>

        {/* four threads */}
        <div>
          {THREADS.map(t => {
            const color = ACCENT[t.kind]
            const row = (
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 16px 16px 0', borderTop: `1px solid ${BORDER}`, position: 'relative' }}>
                <div style={{ width: 4, alignSelf: 'stretch', flexShrink: 0, background: color }} />
                <span style={{ flexShrink: 0 }}><ThreadIcon kind={t.kind} color={color} /></span>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color: FAINT }}>Wander in</span>
              <button onClick={() => setFeed(sampleFeed(8, chapters))} aria-label="Shuffle" style={{ appearance: 'none', border: `1px solid ${BORDER}`, background: CHIP, cursor: 'pointer', color: MUTED, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 999, fontFamily: SANS, fontSize: 10.5, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /></svg>
                Shuffle
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {feed.map((e, i) => <Card key={i} e={e} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
