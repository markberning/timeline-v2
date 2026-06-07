'use client'

// COMMANDER page for the French & Indian War — "follow a commander through the
// war". The F&I analogue of commander-page.tsx (kept separate so the live CW cast
// is untouched; unifying the two is a planned project, per war-build-standard.md).
// Reads an FICommander record (french-indian-commanders.ts) and the battle roster
// (FRENCH_INDIAN.battles) and renders an inline-portrait header, a short overview,
// the ARC (a chronological rail of the battles they fought), and a closing "how it
// ended" card. F&I has one theatre, so the rail is tinted plum and each leg is
// labelled by place rather than theatre.

import '../../app/war-civil-war/war-skin.css'
import { useState } from 'react'
import { WarBreadcrumb, type Crumb, type CrumbOption } from '@/components/mode/war-chrome'
import { WarHeader } from '@/components/mode/war-header'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FI_COMMANDERS, type FISide } from '@/lib/french-indian-commanders'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const SIDE: Record<FISide, { label: string; v: string }> = {
  u: { label: 'British', v: 'var(--brit)' },
  c: { label: 'French', v: 'var(--french)' },
}

// Concrete side hexes for the cast-jump dropdown (it portals to <body>, outside
// .war-skin, so the --brit/--french CSS vars can't resolve there). Mirror the
// saturated side colours from the WarConfig.
const SIDE_DOT: Record<FISide, string> = { u: '#b13b3b', c: '#3a5fa5' }

// The cast crumb's leaf dropdown: every commander, grouped British then French,
// alphabetical within each side, dot-coded by side. Shared by the cast hub leaf and
// each commander arc page (where the current commander gets the ✓ via currentLabel).
export function fiCastCommanderOptions(): CrumbOption[] {
  const all = Object.values(FI_COMMANDERS)
  const group = (sd: FISide, head: string): CrumbOption[] => {
    const list = all.filter(c => c.side === sd).sort((a, b) => a.name.localeCompare(b.name))
    if (!list.length) return []
    return [
      { label: head, heading: true, color: SIDE_DOT[sd] },
      ...list.map(c => ({ label: c.name, href: `/war-french-indian/cast/${c.id}/`, color: SIDE_DOT[sd] })),
    ]
  }
  return [...group('u', 'British'), ...group('c', 'French')]
}
const RAIL = 'var(--fi-battles)' // the single F&I theatre colour (plum)
const MONTH = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const byId = Object.fromEntries(FRENCH_INDIAN.battles.map(b => [b.id, b]))
const mix = (v: string, pct: number) => `color-mix(in srgb, ${v} ${pct}%, transparent)`
const ink = (pct: number) => `color-mix(in srgb, var(--ink) ${pct}%, transparent)`
const sortKey = (b: { year: number; m: number }) => b.year * 100 + b.m

function Portrait({ src, ring, size }: { src: string; ring: string; size: number }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ flexShrink: 0, width: size, height: size, borderRadius: 16, overflow: 'hidden', background: 'linear-gradient(135deg, #3a2e21, #1c1814)', border: `2px solid ${ring}`, boxShadow: '0 0 0 2px var(--paper)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {!failed && <img src={src} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />}
    </div>
  )
}

export function FICommanderPage({ id }: { id: string }) {
  const c = FI_COMMANDERS[id]
  if (!c) return null
  const side = SIDE[c.side]

  // War rung, then Cast as the section crumb (carrying the standard "Jump to"
  // dropdown), then the commander leaf whose own dropdown lists every commander —
  // trail reads "F&I › Cast › Name".
  const base = warCrumbs(FRENCH_INDIAN)
  const crumbs: Crumb[] = [
    base[0],
    { label: 'Cast', href: '/war-french-indian/cast', options: base[1].options },
    { label: c.name, active: true, currentLabel: c.name, options: fiCastCommanderOptions() },
  ]

  const arc = c.appearances
    .map(a => ({ a, b: byId[a.battleId] }))
    .filter(x => x.b)
    .sort((x, y) => sortKey(x.b) - sortKey(y.b))

  return (
    <div className="war-skin" style={{ ['--accent' as string]: side.v } as React.CSSProperties}>
      <WarHeader backHref="/war-french-indian/cast" />
      <WarBreadcrumb crumbs={crumbs} accent={side.v} bare />

      <div style={{ maxWidth: 480, margin: '0 auto' }}>

        {/* Header — portrait inline (never a cropped landscape band) */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 18px 18px' }}>
          <Portrait src={c.portrait} ring={side.v} size={92} />
          <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 9.5, letterSpacing: '0.14em', fontWeight: 700, textTransform: 'uppercase', color: side.v }}>
              Commander · {side.label}
            </div>
            <h1 style={{ margin: '5px 0 0', fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.08, letterSpacing: -0.4, fontWeight: 600, color: 'var(--ink)' }}>{c.name}</h1>
            <div style={{ marginTop: 5, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>{c.born}–{c.died}</div>
            <div style={{ marginTop: 3, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: ink(72) }}>{c.epithet}</div>
          </div>
        </div>

        {/* Overview */}
        <div style={{ padding: '0 18px 22px' }}>
          <p style={{ margin: 0, fontFamily: 'var(--serif)', fontSize: 15.5, lineHeight: 1.6, color: ink(88) }}>{c.overview}</p>
        </div>

        {/* The arc */}
        <div id="sec-arc" style={{ padding: '20px 18px 8px', borderTop: `1px solid var(--line-soft)` }}>
          <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: side.v }}>
            The arc · {arc.length} {arc.length === 1 ? 'battle' : 'battles'}
          </h2>
          <div style={{ position: 'relative' }}>
            {arc.map(({ a, b }, i) => {
              const isFirst = i === 0
              const isLast = i === arc.length - 1
              const nextHasTransition = !isLast && !!arc[i + 1].a.transition
              const clampTop = isFirst || !!a.transition
              const clampBottom = isLast || nextHasTransition
              const line: React.CSSProperties = {
                position: 'absolute', left: 5, width: 2, background: mix(RAIL, 50),
                top: clampTop ? 12 : 0,
                bottom: clampBottom ? undefined : 0,
                height: clampBottom ? (clampTop ? 0 : 12) : undefined,
              }
              return (
                <div key={a.battleId}>
                  {a.transition && (
                    <div style={{ position: 'relative', padding: '0 0 16px 30px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <span aria-hidden style={{ flexShrink: 0, marginTop: 1, color: ink(45), fontSize: 13, lineHeight: 1 }}>↓</span>
                        <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.45, color: ink(60) }}>{a.transition}</span>
                      </div>
                    </div>
                  )}
                  <div style={{ position: 'relative', paddingLeft: 30, paddingBottom: 20 }}>
                    <span style={line} />
                    <span style={{ position: 'absolute', left: 0, top: 5, width: 11, height: 11, borderRadius: 999, background: RAIL, border: '2px solid var(--paper)', boxShadow: `0 0 0 1.5px ${mix(RAIL, 45)}` }} />
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 9, letterSpacing: '0.05em', fontWeight: 700, textTransform: 'uppercase', color: RAIL }}>
                      {MONTH[b.m]} {b.year} · {b.place}
                    </div>
                    <a href={b.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 2, fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 600, letterSpacing: -0.2, color: 'var(--ink)', textDecoration: 'none' }}>
                      {b.name}<span aria-hidden style={{ color: RAIL, fontSize: 14, fontWeight: 700 }}>›</span>
                    </a>
                    <div style={{ marginTop: 3, fontFamily: 'var(--sans)', fontSize: 8.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: side.v }}>{a.role}</div>
                    <p style={{ margin: '6px 0 0', fontFamily: 'var(--serif)', fontSize: 13.5, lineHeight: 1.52, color: ink(76) }}>{a.note}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* How it ended */}
        <div style={{ margin: '8px 18px 54px', border: `1px solid ${mix(side.v, 40)}`, borderRadius: 12, padding: '16px 16px 18px', background: mix(side.v, 7) }}>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 9.5, letterSpacing: '0.14em', fontWeight: 700, textTransform: 'uppercase', color: side.v }}>How it ended</div>
          <p style={{ margin: '8px 0 0', fontFamily: 'var(--serif)', fontSize: 14, lineHeight: 1.58, color: ink(86) }}>{c.fate}</p>
        </div>

      </div>
    </div>
  )
}
