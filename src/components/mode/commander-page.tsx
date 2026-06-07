'use client'

// COMMANDER page — "follow a commander through the war". REDESIGN
// (feat/war-redesign): the new war skin (editorial header + dual-action
// breadcrumb, Spectral/Archivo, parchment-on-warm-dark). Reads a Commander record
// (civil-war-commanders.ts) and renders an inline-portrait header, a short
// overview, the ARC (a chronological rail of the battles they fought, each leg
// tinted by the theatre it was fought in), and a closing "how it ended" card.

import '../../app/war-civil-war/war-skin.css'
import { useState } from 'react'
import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import { WarHeader } from '@/components/mode/war-header'
import { warCrumbs } from '@/components/mode/theatre-page'
import { CIVIL_WAR } from '@/lib/wars/civil-war'
import { COMMANDERS } from '@/lib/civil-war-commanders'
import { MAJORS } from '@/lib/civil-war-roster'

// theatre rail colors = the new war-skin theatre palette (light/dark-adapting CSS
// vars; color-mix gives the tints so the rail matches the rest of the section)
const TH: Record<string, { label: string; v: string }> = {
  east: { label: 'Eastern', v: 'var(--th-east)' },
  west: { label: 'Western', v: 'var(--th-west)' },
  tmis: { label: 'Trans-Mississippi', v: 'var(--th-tmis)' },
  naval: { label: 'Naval', v: 'var(--th-naval)' },
}
const SIDE: Record<string, { label: string; v: string }> = {
  U: { label: 'Union', v: 'var(--union)' },
  C: { label: 'Confederate', v: 'var(--confed)' },
}
const MONTH = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const byId = Object.fromEntries(MAJORS.map(b => [b.id, b]))
const mix = (v: string, pct: number) => `color-mix(in srgb, ${v} ${pct}%, transparent)`
const ink = (pct: number) => `color-mix(in srgb, var(--ink) ${pct}%, transparent)`

// Day-of-month tiebreaker for battles that share a year+month (the roster only
// stores month precision). Covers every shared-month group so a commander who
// fought two battles in one month is ordered right (Wilderness before
// Spotsylvania, Cold Harbor before Petersburg, Five Forks before Appomattox…).
const BATTLE_DAY: Record<string, number> = {
  'w-donelson': 13, 't-pearidge': 7, 't-glorieta': 26, 'w-shiloh': 6, 't-island10': 7, 'n-jacksonstphilip': 24,
  'e-gainesmill': 27, 'e-malvern': 1, 'e-bullrun2': 28, 'w-corinth': 3, 'w-perryville': 8,
  'e-fredericksburg': 11, 'w-stonesriver': 31, 'e-chancellorsville': 1, 'w-championhill': 16,
  'e-gettysburg': 1, 'w-vicksburg': 4, 't-porthudson': 9, 'w-lookout': 24, 'w-missionary': 25,
  'e-wilderness': 5, 'e-spotsylvania': 8, 'e-coldharbor': 1, 'e-petersburg2': 15,
  'e-opequon': 19, 'w-jonesborough': 1, 'e-cedarcreek': 19, 't-westport': 23, 'w-franklin': 30,
  'n-fortfisher2': 13, 'e-fortstedman': 25, 'w-bentonville': 19,
  'e-fiveforks': 1, 'e-petersburg3': 2, 'e-appomattox': 9, 'w-blakeley': 9,
}
const sortKey = (b: { year: number; m: number; id: string }) => b.year * 10000 + b.m * 100 + (BATTLE_DAY[b.id] ?? 15)

function Portrait({ src, ring, size }: { src: string; ring: string; size: number }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ flexShrink: 0, width: size, height: size, borderRadius: 16, overflow: 'hidden', background: 'linear-gradient(135deg, #3a2e21, #1c1814)', border: `2px solid ${ring}`, boxShadow: '0 0 0 2px var(--paper)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {!failed && <img src={src} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />}
    </div>
  )
}

export function CommanderPage({ id }: { id: string }) {
  const c = COMMANDERS[id]
  if (!c) return null
  const side = SIDE[c.side]

  // War rung, then Cast as the section crumb (carrying the standard "Jump to"
  // dropdown), then the commander leaf — trail reads "ACW › Cast › Name".
  const base = warCrumbs(CIVIL_WAR)
  const crumbs: Crumb[] = [base[0], { label: 'Cast', href: '/war-civil-war/cast', options: base[1].options }, { label: c.name, active: true }]

  // appearances, joined to the roster + sorted chronologically.
  const arc = c.appearances
    .map(a => ({ a, b: byId[a.battleId] }))
    .filter(x => x.b)
    .sort((x, y) => sortKey(x.b) - sortKey(y.b))

  return (
    <div className="war-skin" style={{ ['--accent' as string]: side.v } as React.CSSProperties}>
      <WarHeader backHref="/war-civil-war/cast" />
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
            The arc · {arc.length} battles
          </h2>
          <div style={{ position: 'relative' }}>
            {arc.map(({ a, b }, i) => {
              const th = TH[b.theatre] ?? { label: '', v: side.v }
              const isFirst = i === 0
              const isLast = i === arc.length - 1
              const nextHasTransition = !isLast && !!arc[i + 1].a.transition
              const clampTop = isFirst || !!a.transition
              const clampBottom = isLast || nextHasTransition
              const line: React.CSSProperties = {
                position: 'absolute', left: 5, width: 2, background: mix(th.v, 50),
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
                    <span style={{ position: 'absolute', left: 0, top: 5, width: 11, height: 11, borderRadius: 999, background: th.v, border: '2px solid var(--paper)', boxShadow: `0 0 0 1.5px ${mix(th.v, 45)}` }} />
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 9, letterSpacing: '0.05em', fontWeight: 700, textTransform: 'uppercase', color: th.v }}>
                      {MONTH[b.m]} {b.year} · {th.label}
                    </div>
                    <a href={b.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 2, fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 600, letterSpacing: -0.2, color: 'var(--ink)', textDecoration: 'none' }}>
                      {b.name}<span aria-hidden style={{ color: th.v, fontSize: 14, fontWeight: 700 }}>›</span>
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
