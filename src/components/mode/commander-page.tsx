'use client'

// COMMANDER page — "follow a commander through the war". Reads a Commander
// record (civil-war-commanders.ts) and renders: an inline-portrait header, a
// short overview, the ARC (a chronological, theatre-colored rail of the battles
// they fought, each beat linking to its dossier), and a closing "how it ended"
// card. The rail's color changes where the commander shifts theatre, and an
// authored `transition` caption marks the turning point.

import { useState } from 'react'
import { WarBreadcrumb, CHROME_TOP, SANS, SERIF, ACCENTS, WAR_ACCENT, alpha, type Crumb } from '@/components/mode/war-chrome'
import { COMMANDERS } from '@/lib/civil-war-commanders'
import { MAJORS } from '@/lib/civil-war-roster'

const THEATRE: Record<string, { label: string; color: string }> = {
  east: { label: 'Eastern', color: ACCENTS.violet },
  west: { label: 'Western', color: ACCENTS.blue },
  tmis: { label: 'Trans-Mississippi', color: ACCENTS.amber },
  naval: { label: 'Naval', color: ACCENTS.rust },
}
const MONTH = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const SIDE: Record<string, { label: string; color: string }> = {
  U: { label: 'Union', color: ACCENTS.blue },
  C: { label: 'Confederate', color: ACCENTS.rust },
}

const byId = Object.fromEntries(MAJORS.map(b => [b.id, b]))
const muted = (pct: number) => `color-mix(in srgb, var(--foreground) ${pct}%, transparent)`

function Portrait({ src, ring, size }: { src: string; ring: string; size: number }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ flexShrink: 0, width: size, height: size, borderRadius: 16, overflow: 'hidden', background: 'linear-gradient(135deg, #3a2e21, #1c1814)', border: `2px solid ${ring}`, boxShadow: `0 0 0 2px var(--background)` }}>
      {!failed && <img src={src} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />}
    </div>
  )
}

export function CommanderPage({ id }: { id: string }) {
  const c = COMMANDERS[id]
  if (!c) return null
  const side = SIDE[c.side]
  const secTop = { scrollMarginTop: CHROME_TOP + 46 }

  const crumbs: Crumb[] = [
    { label: 'ACW', short: 'ACW', href: '/war-civil-war' },
    { label: 'Cast' },
    { label: c.name, active: true },
  ]

  // appearances, joined to the roster + sorted chronologically.
  const arc = c.appearances
    .map(a => ({ a, b: byId[a.battleId] }))
    .filter(x => x.b)
    .sort((x, y) => (x.b.year * 100 + x.b.m) - (y.b.year * 100 + y.b.m))

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb crumbs={crumbs} accent={WAR_ACCENT} />
      <div style={{ maxWidth: 480, margin: '0 auto' }}>

        {/* Header — portrait inline (never a cropped landscape band) */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 18px 18px' }}>
          <Portrait src={c.portrait} ring={side.color} size={92} />
          <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
            <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: side.color }}>
              Commander · {side.label}
            </div>
            <h1 style={{ margin: '5px 0 0', fontFamily: SERIF, fontSize: 25, lineHeight: 1.08, letterSpacing: -0.4, fontWeight: 500 }}>{c.name}</h1>
            <div style={{ marginTop: 5, fontFamily: SANS, fontSize: 11.5, color: muted(55) }}>{c.born}–{c.died}</div>
            <div style={{ marginTop: 2, fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: muted(72) }}>{c.epithet}</div>
          </div>
        </div>

        {/* Overview */}
        <div style={{ padding: '0 18px 22px' }}>
          <p style={{ margin: 0, fontFamily: SERIF, fontSize: 15, lineHeight: 1.6, color: muted(88) }}>{c.overview}</p>
        </div>

        {/* The arc */}
        <div id="sec-arc" style={{ ...secTop, padding: '20px 18px 8px', borderTop: `1px solid ${muted(12)}` }}>
          <h2 style={{ margin: '0 0 16px', fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: WAR_ACCENT }}>
            The arc · {arc.length} battles
          </h2>
          <div style={{ position: 'relative' }}>
            {arc.map(({ a, b }, i) => {
              const th = THEATRE[b.theatre] ?? { label: '', color: WAR_ACCENT }
              const isFirst = i === 0
              const isLast = i === arc.length - 1
              const nextHasTransition = !isLast && !!arc[i + 1].a.transition
              const clampTop = isFirst || !!a.transition
              const clampBottom = isLast || nextHasTransition
              const line: React.CSSProperties = {
                position: 'absolute', left: 5, width: 2, background: alpha(th.color, 0.5),
                top: clampTop ? 12 : 0,
                bottom: clampBottom ? undefined : 0,
                height: clampBottom ? (clampTop ? 0 : 12) : undefined,
              }
              return (
                <div key={a.battleId}>
                  {a.transition && (
                    <div style={{ position: 'relative', padding: '0 0 16px 30px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <span aria-hidden style={{ flexShrink: 0, marginTop: 1, color: WAR_ACCENT, fontSize: 13, lineHeight: 1 }}>↓</span>
                        <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.45, color: WAR_ACCENT }}>{a.transition}</span>
                      </div>
                    </div>
                  )}
                  <div style={{ position: 'relative', paddingLeft: 30, paddingBottom: 20 }}>
                    <span style={line} />
                    <span style={{ position: 'absolute', left: 0, top: 5, width: 11, height: 11, borderRadius: 999, background: th.color, border: '2px solid var(--background)', boxShadow: `0 0 0 1.5px ${alpha(th.color, 0.45)}` }} />
                    <div style={{ fontFamily: SANS, fontSize: 9, letterSpacing: 0.5, fontWeight: 700, textTransform: 'uppercase', color: alpha(th.color, 0.95) }}>
                      {MONTH[b.m]} {b.year} · {th.label}
                    </div>
                    <a href={b.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 2, fontFamily: SERIF, fontSize: 17, fontWeight: 500, letterSpacing: -0.2, color: 'var(--foreground)', textDecoration: 'none' }}>
                      {b.name}<span aria-hidden style={{ color: alpha(th.color, 0.9), fontSize: 14, fontWeight: 700 }}>›</span>
                    </a>
                    <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 8.5, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: side.color }}>{a.role}</div>
                    <p style={{ margin: '6px 0 0', fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.52, color: muted(76) }}>{a.note}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* How it ended */}
        <div style={{ margin: '8px 18px 48px', border: `1px solid ${alpha(side.color, 0.4)}`, borderRadius: 12, padding: '16px 16px 18px', background: alpha(side.color, 0.06) }}>
          <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: side.color }}>How it ended</div>
          <p style={{ margin: '8px 0 0', fontFamily: SERIF, fontSize: 14, lineHeight: 1.58, color: muted(86) }}>{c.fate}</p>
        </div>

      </div>
    </div>
  )
}
