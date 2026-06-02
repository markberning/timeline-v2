'use client'

// THE CAST — the central commander gallery (the "all commanders" hub). A
// filterable grid of every commander with an arc: side toggle + theatre chips,
// sorted by how many battles they fought. Each card deep-links to that
// commander's arc page. Reads the registry, so it grows as commanders are added.

import { useState } from 'react'
import { WarBreadcrumb, CHROME_TOP, SANS, SERIF, ACCENTS, WAR_ACCENT, alpha, type Crumb } from '@/components/mode/war-chrome'
import { COMMANDERS } from '@/lib/civil-war-commanders'
import { MAJORS } from '@/lib/civil-war-roster'

const byId = Object.fromEntries(MAJORS.map(b => [b.id, b]))
const muted = (pct: number) => `color-mix(in srgb, var(--foreground) ${pct}%, transparent)`
const SIDE: Record<string, { label: string; color: string }> = {
  U: { label: 'Union', color: ACCENTS.blue },
  C: { label: 'Confederate', color: ACCENTS.rust },
}
const THEATRES = [
  { id: 'east', label: 'Eastern', color: ACCENTS.violet },
  { id: 'west', label: 'Western', color: ACCENTS.blue },
  { id: 'tmis', label: 'Trans-Miss', color: ACCENTS.amber },
  { id: 'naval', label: 'Naval', color: ACCENTS.rust },
]

type Summary = { id: string; name: string; side: string; portrait: string; epithet: string; count: number; theatres: Set<string> }
const ALL: Summary[] = Object.values(COMMANDERS).map(c => ({
  id: c.id, name: c.name, side: c.side, portrait: c.portrait, epithet: c.epithet,
  count: c.appearances.length,
  theatres: new Set(c.appearances.map(a => byId[a.battleId]?.theatre).filter(Boolean) as string[]),
})).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))

function CardImg({ src, ring }: { src: string; ring: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ width: '100%', aspectRatio: '1 / 1', borderRadius: 12, overflow: 'hidden', background: 'linear-gradient(135deg, #3a2e21, #1c1814)', border: `2px solid ${ring}` }}>
      {!failed && <img src={src} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 18%' }} />}
    </div>
  )
}

export default function CastPage() {
  const [side, setSide] = useState<'all' | 'U' | 'C'>('all')
  const [theatre, setTheatre] = useState<string>('all')

  const list = ALL.filter(c => (side === 'all' || c.side === side) && (theatre === 'all' || c.theatres.has(theatre)))

  const crumbs: Crumb[] = [
    { label: 'ACW', short: 'ACW', href: '/war-civil-war' },
    { label: 'Cast', active: true },
  ]
  const chip = muted(6)
  const border = muted(12)

  const Seg = ({ on, onClick, children, color }: { on: boolean; onClick: () => void; children: React.ReactNode; color?: string }) => (
    <button onClick={onClick} style={{ flex: 1, appearance: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', background: on ? 'color-mix(in srgb, var(--foreground) 12%, var(--background))' : 'transparent', color: on ? 'var(--foreground)' : muted(60), fontFamily: SANS, fontSize: 11, fontWeight: on ? 700 : 500, padding: '6px 8px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
      {color && <span style={{ width: 7, height: 7, borderRadius: 2, background: color, opacity: on ? 1 : 0.6 }} />}
      {children}
    </button>
  )

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb crumbs={crumbs} accent={WAR_ACCENT} />
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '20px 18px 48px' }}>
        <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: WAR_ACCENT }}>The Cast</div>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontSize: 27, lineHeight: 1.05, letterSpacing: -0.5, fontWeight: 500 }}>The generals who fought it</h1>
        <p style={{ margin: '8px 0 0', fontFamily: SERIF, fontSize: 14.5, lineHeight: 1.55, color: muted(72) }}>
          The commanders whose war you can follow battle to battle. Pick one and watch their arc unfold across the theatres.
        </p>

        {/* side toggle */}
        <div style={{ display: 'flex', gap: 3, padding: 3, marginTop: 16, background: chip, border: `1px solid ${border}`, borderRadius: 999 }}>
          <Seg on={side === 'all'} onClick={() => setSide('all')}>All</Seg>
          <Seg on={side === 'U'} onClick={() => setSide('U')} color={ACCENTS.blue}>Union</Seg>
          <Seg on={side === 'C'} onClick={() => setSide('C')} color={ACCENTS.rust}>Confederate</Seg>
        </div>
        {/* theatre chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
          {[{ id: 'all', label: 'All theatres', color: muted(50) }, ...THEATRES].map(t => {
            const on = theatre === t.id
            return (
              <button key={t.id} onClick={() => setTheatre(t.id)} style={{ appearance: 'none', cursor: 'pointer', fontFamily: SANS, fontSize: 10.5, fontWeight: on ? 700 : 500, padding: '5px 11px', borderRadius: 999, border: `1px solid ${on ? alpha(t.color, 0.5) : border}`, background: on ? alpha(t.color, 0.14) : 'transparent', color: on ? 'var(--foreground)' : muted(62), display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: 2, background: t.color }} />{t.label}
              </button>
            )
          })}
        </div>

        {/* gallery grid */}
        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {list.map(c => {
            const side2 = SIDE[c.side]
            return (
              <a key={c.id} href={`/war-civil-war/cast/${c.id}/`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <CardImg src={c.portrait} ring={side2.color} />
                <div style={{ marginTop: 8, fontFamily: SERIF, fontSize: 16, fontWeight: 500, letterSpacing: -0.2, lineHeight: 1.15 }}>{c.name}</div>
                <div style={{ marginTop: 3, fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase', color: side2.color }}>
                  {side2.label} · {c.count} {c.count === 1 ? 'battle' : 'battles'}
                </div>
                <div style={{ marginTop: 3, fontFamily: SERIF, fontStyle: 'italic', fontSize: 11.5, lineHeight: 1.35, color: muted(60) }}>{c.epithet}</div>
              </a>
            )
          })}
        </div>
        {list.length === 0 && <p style={{ marginTop: 24, fontFamily: SERIF, fontStyle: 'italic', color: muted(55) }}>No commanders match that filter.</p>}
      </div>
    </div>
  )
}
