'use client'

// COMMANDER ARC — the shared "follow a commander through the war" page, used by
// every war. It renders the inline-portrait header, a short overview, the ARC (a
// chronological rail of the battles they fought), and a closing "how it ended"
// card. Everything war-specific is passed in as a small `CommanderArcConfig` data
// object by each war's thin binding (commander-page.tsx / fi-commander-page.tsx),
// so the layout is identical across wars and a new war reuses this unchanged.
//
// What varies per war and is therefore config, not branching:
//   - side label + colour (Union/Confederate vs British/French)
//   - the rail/leg colour (one theatre colour per leg for a multi-theatre war;
//     a single lane colour for a one-theatre war)
//   - the leg's kicker label (theatre name vs the place it was fought)
//   - the chronological sort key (some wars need a day-level tiebreaker)
//   - the cast breadcrumb trail + the "back" target

import '../../app/war-civil-war/war-skin.css'
import { useState } from 'react'
import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import { WarHeader } from '@/components/mode/war-header'

const MONTH = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const mix = (v: string, pct: number) => `color-mix(in srgb, ${v} ${pct}%, transparent)`
const ink = (pct: number) => `color-mix(in srgb, var(--ink) ${pct}%, transparent)`

// The minimal shapes the arc renderer needs — the existing per-war Commander/Battle
// records satisfy these structurally (WarCommander, FICommander, WarBattle all fit).
export interface ArcBattle { id: string; name: string; year: number; m: number; href?: string; theatre: string; place: string }
export interface ArcAppearance { battleId: string; role: string; note: string; transition?: string }
export interface ArcCommander {
  id: string; name: string; side: string; portrait: string
  born: number; died: number; epithet: string; overview: string; fate: string
  appearances: ArcAppearance[]
}

export interface CommanderArcConfig {
  commander: ArcCommander
  byId: Record<string, ArcBattle>          // battleId → battle record
  sideLabel: string                        // 'Union' / 'British'
  sideVar: string                          // the CSS colour expression for the side, e.g. 'var(--union)'
  legColor: (b: ArcBattle) => string       // rail/dot/kicker colour for a leg
  legLabel: (b: ArcBattle) => string       // the leg kicker after the date (theatre name or place)
  sortKey: (b: ArcBattle) => number        // chronological order (with any day-level tiebreaker)
  crumbs: Crumb[]                          // the cast breadcrumb trail (War › Cast › Name)
  backHref: string                         // the header back target (the cast hub)
}

function Portrait({ src, ring, size }: { src: string; ring: string; size: number }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ flexShrink: 0, width: size, height: size, borderRadius: 16, overflow: 'hidden', background: 'linear-gradient(135deg, #3a2e21, #1c1814)', border: `2px solid ${ring}`, boxShadow: '0 0 0 2px var(--paper)' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {!failed && <img src={src} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />}
    </div>
  )
}

export function CommanderArc({ cfg }: { cfg: CommanderArcConfig }) {
  const c = cfg.commander
  const sideV = cfg.sideVar

  // appearances, joined to the roster + sorted chronologically.
  const arc = c.appearances
    .map(a => ({ a, b: cfg.byId[a.battleId] }))
    .filter((x): x is { a: ArcAppearance; b: ArcBattle } => !!x.b)
    .sort((x, y) => cfg.sortKey(x.b) - cfg.sortKey(y.b))

  return (
    <div className="war-skin" style={{ ['--accent' as string]: sideV } as React.CSSProperties}>
      <WarHeader backHref={cfg.backHref} />
      <WarBreadcrumb crumbs={cfg.crumbs} accent={sideV} bare />

      <div style={{ maxWidth: 480, margin: '0 auto' }}>

        {/* Header — portrait inline (never a cropped landscape band) */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 18px 18px' }}>
          <Portrait src={c.portrait} ring={sideV} size={92} />
          <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 9.5, letterSpacing: '0.14em', fontWeight: 700, textTransform: 'uppercase', color: sideV }}>
              Commander · {cfg.sideLabel}
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
          <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: sideV }}>
            The arc · {arc.length} {arc.length === 1 ? 'battle' : 'battles'}
          </h2>
          <div style={{ position: 'relative' }}>
            {arc.map(({ a, b }, i) => {
              const legV = cfg.legColor(b)
              const legL = cfg.legLabel(b)
              const isFirst = i === 0
              const isLast = i === arc.length - 1
              const nextHasTransition = !isLast && !!arc[i + 1].a.transition
              const clampTop = isFirst || !!a.transition
              const clampBottom = isLast || nextHasTransition
              const line: React.CSSProperties = {
                position: 'absolute', left: 5, width: 2, background: mix(legV, 50),
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
                    <span style={{ position: 'absolute', left: 0, top: 5, width: 11, height: 11, borderRadius: 999, background: legV, border: '2px solid var(--paper)', boxShadow: `0 0 0 1.5px ${mix(legV, 45)}` }} />
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 9, letterSpacing: '0.05em', fontWeight: 700, textTransform: 'uppercase', color: legV }}>
                      {MONTH[b.m]} {b.year} · {legL}
                    </div>
                    <a href={b.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 2, fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 600, letterSpacing: -0.2, color: 'var(--ink)', textDecoration: 'none' }}>
                      {b.name}<span aria-hidden style={{ color: legV, fontSize: 14, fontWeight: 700 }}>›</span>
                    </a>
                    <div style={{ marginTop: 3, fontFamily: 'var(--sans)', fontSize: 8.5, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: sideV }}>{a.role}</div>
                    <p style={{ margin: '6px 0 0', fontFamily: 'var(--serif)', fontSize: 13.5, lineHeight: 1.52, color: ink(76) }}>{a.note}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* How it ended */}
        <div style={{ margin: '8px 18px 54px', border: `1px solid ${mix(sideV, 40)}`, borderRadius: 12, padding: '16px 16px 18px', background: mix(sideV, 7) }}>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 9.5, letterSpacing: '0.14em', fontWeight: 700, textTransform: 'uppercase', color: sideV }}>How it ended</div>
          <p style={{ margin: '8px 0 0', fontFamily: 'var(--serif)', fontSize: 14, lineHeight: 1.58, color: ink(86) }}>{c.fate}</p>
        </div>

      </div>
    </div>
  )
}
