'use client'

// THE CAST — American Revolution commander gallery (the "all commanders" hub).
// The Revolution analogue of the F&I cast hub. The Revolution has a single battle
// lane, so there is no theatre filter, just an American/British side toggle. Each
// card deep-links to that commander's arc page. Reads the registry, so it grows as
// commanders land.

import '../../war-civil-war/war-skin.css'
import { useState } from 'react'
import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import { WarHeader } from '@/components/mode/war-header'
import { revolutionCastCrumbs } from '@/components/mode/rev-commander-page'
import { REVOLUTION_COMMANDERS, type RevSide } from '@/lib/revolution-commanders'
import { REVOLUTION } from '@/lib/wars/revolution'

const ACCENT = REVOLUTION.accent

type Summary = { id: string; name: string; side: RevSide; portrait: string; epithet: string; count: number }
const ALL: Summary[] = Object.values(REVOLUTION_COMMANDERS).map(c => ({
  id: c.id, name: c.name, side: c.side, portrait: c.portrait, epithet: c.epithet,
  count: c.appearances.length,
})).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))

export default function RevCastPage() {
  const [side, setSide] = useState<'all' | RevSide>('all')
  const list = ALL.filter(c => side === 'all' || c.side === side)

  // The shared cast bar: War › Cast › Commander (the leaf lists every commander).
  const crumbs: Crumb[] = revolutionCastCrumbs()

  return (
    <div className="war-skin">
      <WarHeader backHref="/war-revolution" />
      <WarBreadcrumb crumbs={crumbs} accent={ACCENT} bare />

      <div className="p-mast" style={{ paddingBottom: 4 }}>
        <div className="p-eyebrow" style={{ color: ACCENT }}>The Cast</div>
        <h1 className="p-serif" style={{ margin: '10px 0 0', fontWeight: 600, fontSize: 28, lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--ink)' }}>The commanders who fought it</h1>
        <p style={{ margin: '9px 0 0', fontFamily: 'var(--serif)', fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)' }}>
          The men whose war you can follow battle to battle, from the first shots at Lexington to the surrender at Yorktown. Pick one and watch their arc unfold.
        </p>
      </div>

      <div style={{ padding: '14px 14px 0' }}>
        <div className="p-seg">
          <button className={side === 'all' ? 'on' : ''} onClick={() => setSide('all')}>All</button>
          <button className={side === 'u' ? 'on' : ''} onClick={() => setSide('u')}>American</button>
          <button className={side === 'c' ? 'on' : ''} onClick={() => setSide('c')}>British</button>
        </div>
      </div>

      <div className="p-page">
        <div className="p-cmdgrid">
          {list.map(c => (
            <a key={c.id} className={'p-cmdcard fi ' + c.side} href={`/war-revolution/cast/${c.id}/`}>
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
