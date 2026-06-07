'use client'

// THE CAST — French & Indian War commander gallery (the "all commanders" hub).
// The F&I analogue of the CW cast hub. F&I has a single theatre, so there is no
// theatre filter, just a British/French side toggle. Each card deep-links to that
// commander's arc page. Reads the registry, so it grows as commanders land.

import '../../war-civil-war/war-skin.css'
import { useState } from 'react'
import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import { WarHeader } from '@/components/mode/war-header'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FI_COMMANDERS, type FISide } from '@/lib/french-indian-commanders'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const ACCENT = FRENCH_INDIAN.accent

type Summary = { id: string; name: string; side: FISide; portrait: string; epithet: string; count: number }
const ALL: Summary[] = Object.values(FI_COMMANDERS).map(c => ({
  id: c.id, name: c.name, side: c.side, portrait: c.portrait, epithet: c.epithet,
  count: c.appearances.length,
})).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))

export default function FICastPage() {
  const [side, setSide] = useState<'all' | FISide>('all')
  const list = ALL.filter(c => side === 'all' || c.side === side)

  // War rung, then Cast itself as the section crumb — it carries the standard
  // "Jump to" dropdown, so the trail reads "F&I › Cast" with no redundant rung.
  const base = warCrumbs(FRENCH_INDIAN)
  const crumbs: Crumb[] = [base[0], { label: 'Cast', active: true, options: base[1].options }]

  return (
    <div className="war-skin">
      <WarHeader backHref="/war-french-indian" />
      <WarBreadcrumb crumbs={crumbs} accent={ACCENT} bare />

      <div className="p-mast" style={{ paddingBottom: 4 }}>
        <div className="p-eyebrow" style={{ color: ACCENT }}>The Cast</div>
        <h1 className="p-serif" style={{ margin: '10px 0 0', fontWeight: 600, fontSize: 28, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--ink)' }}>The commanders who fought it</h1>
        <p style={{ margin: '9px 0 0', fontFamily: 'var(--serif)', fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
          The men whose war you can follow battle to battle, from the backwoods of the Ohio to the surrender of Montreal. Pick one and watch their arc unfold.
        </p>
      </div>

      <div style={{ padding: '14px 14px 0' }}>
        <div className="p-seg">
          <button className={side === 'all' ? 'on' : ''} onClick={() => setSide('all')}>All</button>
          <button className={side === 'u' ? 'on' : ''} onClick={() => setSide('u')}>British</button>
          <button className={side === 'c' ? 'on' : ''} onClick={() => setSide('c')}>French</button>
        </div>
      </div>

      <div className="p-page">
        <div className="p-cmdgrid">
          {list.map(c => (
            <a key={c.id} className={'p-cmdcard fi ' + c.side} href={`/war-french-indian/cast/${c.id}/`}>
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
