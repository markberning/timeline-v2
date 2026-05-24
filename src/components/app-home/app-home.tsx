'use client'

// The app root — the home for the whole of Stuff Happened. A brand header, the
// four threads (Civilizations / Wars / Art / Music) as a launcher, and an "On
// This Day" feed that pulls dated anniversaries from across the threads. Each
// thread links to its own home; the verticals keep their own breadcrumb bars.
// Phone-width column centered on desktop, matching the Civ home's framing.

import { useState, useEffect } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { TL_KIND_LABELS, type TlKind } from '@/lib/navigator-tls'
import { formatYear } from '@/lib/chronology-data'
import { eventsForDay, sampleEvents, type OnThisDayEvent } from '@/lib/on-this-day'

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

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function ThreadIcon({ kind, color }: { kind: TlKind; color: string }) {
  const c = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (kind === 'civ') return <svg {...c}><path d="M3 21h18" /><path d="M5 21V9l7-5 7 5v12" /><path d="M9 21v-6h6v6" /></svg>
  if (kind === 'war') return <svg {...c}><path d="M12 3l9 9-9 9-9-9z" /></svg>
  if (kind === 'art') return <svg {...c}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M21 16l-5-5L5 20" /></svg>
  return <svg {...c}><circle cx="7" cy="18" r="2.6" /><circle cx="18" cy="15" r="2.6" /><path d="M9.6 18V6l10.4-2v11" /></svg>
}

function Card({ e }: { e: OnThisDayEvent }) {
  const color = ACCENT[e.kind]
  const inner = (
    <div style={{ display: 'flex', background: CHIP, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ width: 88, flexShrink: 0, alignSelf: 'stretch', minHeight: 78, background: alpha(color, 0.16), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ opacity: 0.5 }}><ThreadIcon kind={e.kind} color={color} /></span>
      </div>
      <div style={{ flex: 1, minWidth: 0, padding: '10px 13px' }}>
        <div style={{ fontFamily: SANS, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color }}>{TL_KIND_LABELS[e.kind]} · {formatYear(e.year)}</div>
        <div style={{ fontFamily: SERIF, fontSize: 17, color: INK, lineHeight: 1.15, marginTop: 3 }}>{e.title}</div>
        <div style={{ fontFamily: SANS, fontSize: 12.5, lineHeight: 1.45, color: MUTED, marginTop: 4 }}>{e.blurb}</div>
      </div>
    </div>
  )
  return e.href ? <a href={e.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{inner}</a> : inner
}

export function AppHome() {
  // "Today" is read on the client only — the page is statically exported, so a
  // build-time date would be wrong and would mismatch on hydration.
  const [today, setToday] = useState<Date | null>(null)
  useEffect(() => { setToday(new Date()) }, [])

  let feed: OnThisDayEvent[] = []
  let onThisDay = false
  let dateLabel = ''
  if (today) {
    const m = today.getMonth() + 1
    const d = today.getDate()
    dateLabel = `${MONTHS[today.getMonth()].slice(0, 3).toUpperCase()} ${d}`
    const exact = eventsForDay(m, d)
    if (exact.length) { feed = exact; onThisDay = true }
    else {
      // day-of-year seed so the sampling is stable through the day
      const seed = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
      feed = sampleEvents(seed, 4)
    }
  }

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

        {/* on this day — the date is client-only (static export), so this whole
            section mounts after hydration rather than flashing a wrong header */}
        {today && (
          <div style={{ borderTop: `8px solid ${CHIP}`, padding: '14px 16px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color: FAINT }}>{onThisDay ? 'On this day' : 'From the archive'}</span>
              <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: FAINT }}>{dateLabel}</span>
            </div>
            {!onThisDay && (
              <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: MUTED, marginBottom: 10 }}>Nothing we’ve written down happened on this date — so here’s a sampling.</div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {feed.map((e, i) => <Card key={i} e={e} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
