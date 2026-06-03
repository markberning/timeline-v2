'use client'

// THE CAST — the commander gallery (the "all commanders" hub). REDESIGN
// (feat/war-redesign): the new war skin — editorial header + dual-action
// breadcrumb, masthead, a side/theatre filter, and the shared commander-card
// grid (same .p-cmdcard as the home's Commanders tab). Each card deep-links to
// that commander's arc page. Reads the registry, so it grows as commanders land.

import '../war-skin.css'
import { useState } from 'react'
import { WarBreadcrumb, WAR_ACCENT, type Crumb } from '@/components/mode/war-chrome'
import { WarHeader } from '@/components/mode/war-header'
import { COMMANDERS } from '@/lib/civil-war-commanders'
import { MAJORS } from '@/lib/civil-war-roster'

const byId = Object.fromEntries(MAJORS.map(b => [b.id, b]))
const THEATRES = [
  { id: 'east', label: 'Eastern', v: 'var(--th-east)' },
  { id: 'west', label: 'Western', v: 'var(--th-west)' },
  { id: 'tmis', label: 'Trans-Miss', v: 'var(--th-tmis)' },
  { id: 'naval', label: 'Naval', v: 'var(--th-naval)' },
]

type Summary = { id: string; name: string; side: string; portrait: string; epithet: string; count: number; theatres: Set<string> }
const ALL: Summary[] = Object.values(COMMANDERS).map(c => ({
  id: c.id, name: c.name, side: c.side, portrait: c.portrait, epithet: c.epithet,
  count: c.appearances.length,
  theatres: new Set(c.appearances.map(a => byId[a.battleId]?.theatre).filter(Boolean) as string[]),
})).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))

export default function CastPage() {
  const [side, setSide] = useState<'all' | 'U' | 'C'>('all')
  const [theatre, setTheatre] = useState<string>('all')

  const list = ALL.filter(c => (side === 'all' || c.side === side) && (theatre === 'all' || c.theatres.has(theatre)))

  const crumbs: Crumb[] = [
    { label: 'ACW', short: 'ACW', href: '/war-civil-war' },
    { label: 'Cast', active: true },
  ]

  return (
    <div className="war-skin">
      <WarHeader backHref="/war-civil-war" />
      <WarBreadcrumb crumbs={crumbs} accent={WAR_ACCENT} bare />

      <div className="p-mast" style={{ paddingBottom: 4 }}>
        <div className="p-eyebrow" style={{ color: WAR_ACCENT }}>The Cast</div>
        <h1 className="p-serif" style={{ margin: '10px 0 0', fontWeight: 600, fontSize: 28, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--ink)' }}>The generals who fought it</h1>
        <p style={{ margin: '9px 0 0', fontFamily: 'var(--serif)', fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
          The commanders whose war you can follow battle to battle. Pick one and watch their arc unfold across the theatres.
        </p>
      </div>

      <div style={{ padding: '14px 14px 0' }}>
        {/* side toggle */}
        <div className="p-seg">
          <button className={side === 'all' ? 'on' : ''} onClick={() => setSide('all')}>All</button>
          <button className={side === 'U' ? 'on' : ''} onClick={() => setSide('U')}>Union</button>
          <button className={side === 'C' ? 'on' : ''} onClick={() => setSide('C')}>Confederate</button>
        </div>
        {/* theatre chips */}
        <div className="p-filter">
          {[{ id: 'all', label: 'All theatres', v: 'var(--muted)' }, ...THEATRES].map(t => (
            <button key={t.id} className={'f' + (theatre === t.id ? ' on' : '')} onClick={() => setTheatre(t.id)}
              style={{ ['--chipc' as string]: t.v } as React.CSSProperties}>
              <span className="dot" style={{ background: t.v }} />{t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-page">
        <div className="p-cmdgrid">
          {list.map(c => (
            <a key={c.id} className={'p-cmdcard ' + (c.side === 'U' ? 'u' : 'c')} href={`/war-civil-war/cast/${c.id}/`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <span className="pic"><img src={c.portrait} alt="" /></span>
              <b>{c.name}</b>
              <span className="meta">{c.count} {c.count === 1 ? 'battle' : 'battles'}</span>
              <span className="ep">{c.epithet}</span>
            </a>
          ))}
        </div>
        {list.length === 0 && <p style={{ marginTop: 24, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--muted)' }}>No commanders match that filter.</p>}
      </div>
    </div>
  )
}
