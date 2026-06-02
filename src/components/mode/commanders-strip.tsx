'use client'

// Shared commander strip for battle dossiers. Renders each figure as a card
// (portrait + name + role + blurb). When the figure's headshot id matches a
// commander in the Cast registry, the whole card becomes a deep link into that
// commander's arc page, with a "Follow" affordance and a battle count. Replaces
// the 46 per-page copies that were duplicated inline.

import { useState } from 'react'
import { SANS, SERIF, ACCENTS } from '@/components/mode/war-chrome'
import { COMMANDERS } from '@/lib/civil-war-commanders'

export type StripFigure = { name: string; role: string; side: string; img?: string; blurb: string }

function idOf(img?: string): string | undefined {
  if (!img) return undefined
  const m = img.match(/cmdr\/([a-z0-9-]+)\.(?:jpg|png)/)
  return m ? m[1] : undefined
}

function FigureImg({ src }: { src?: string }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return null
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 22%' }} />
}

export function CommandersStrip({ figures, accent }: { figures: StripFigure[]; accent: string }) {
  const muted = 'color-mix(in srgb, var(--foreground) 76%, transparent)'
  const faint = 'color-mix(in srgb, var(--foreground) 45%, transparent)'
  return (
    <div style={{ padding: '14px 16px' }}>
      <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: accent }}>Commanders</div>
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {figures.map(f => {
          const ring = f.side === 'U' ? ACCENTS.blue : ACCENTS.rust
          const id = idOf(f.img)
          const cmdr = id ? COMMANDERS[id] : undefined
          const inner = (
            <>
              <div style={{ flexShrink: 0, width: 54, height: 54, borderRadius: 999, overflow: 'hidden', background: 'linear-gradient(135deg, #3a2e21, #1c1814)', border: `2px solid ${ring}`, boxShadow: '0 0 0 2px var(--background)' }}>
                <FigureImg src={f.img} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 7, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 500, letterSpacing: -0.2 }}>{f.name}</span>
                  <span style={{ fontFamily: SANS, fontSize: 8.5, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: ring }}>{f.role}</span>
                  {cmdr && <span style={{ marginLeft: 'auto', flexShrink: 0, fontFamily: SANS, fontSize: 9, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase', color: ring, display: 'inline-flex', alignItems: 'center', gap: 3 }}>Follow<span aria-hidden>&rarr;</span></span>}
                </div>
                <p style={{ margin: '4px 0 0', fontFamily: SERIF, fontSize: 13, lineHeight: 1.5, color: muted }}>{f.blurb}</p>
                {cmdr && <div style={{ marginTop: 5, fontFamily: SANS, fontSize: 9.5, fontWeight: 600, letterSpacing: 0.2, color: faint }}>Follow {f.name.split(' ').slice(-1)[0]} across {cmdr.appearances.length} battles</div>}
              </div>
            </>
          )
          return cmdr
            ? <a key={f.name} href={`/war-civil-war/cast/${id}/`} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}>{inner}</a>
            : <div key={f.name} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>{inner}</div>
        })}
      </div>
    </div>
  )
}
