'use client'

// Shared cord/node BattleCard — the SAME styling as the wars homepage spine
// (war-front-door). Used by every Timeline view in the drilldown so they all
// match the homepage: image tile + size variants (s/m/l/xl) + node dot on a
// continuous cord + left date-tag column + accent-colored ring on xl.

import { useState } from 'react'
import { SANS, SERIF, alpha } from './war-chrome'

const SIZES = {
  s: { h: 92, body: 12.5, imgW: 96 },
  m: { h: 124, body: 13, imgW: 116 },
  l: { h: 176, body: 13.5, imgW: 140 },
  xl: { h: 248, body: 14.5, imgW: 168 },
}
export type CardSize = keyof typeof SIZES

export const CORD_X = 56
const CARD_LEFT = CORD_X + 16
const DEFAULT_PALETTE: [string, string, string] = ['#3a2e21', '#2a221c', '#0a0806']

function Tile({ palette, imageUrl, label, isXL, stacked }: { palette: [string, string, string]; imageUrl?: string; label?: string; isXL: boolean; stacked?: boolean }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})` }}>
      {imageUrl && !failed && (
        // landscape stacked heroes sit full-width on top: lighter crop (scale 1.04,
        // centered) so the whole wide image reads; row tiles crop tighter (1.16)
        <img src={imageUrl} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: stacked && !isXL ? 'center 40%' : 'center 42%', transform: stacked && !isXL ? 'scale(1.04)' : 'scale(1.16)', transformOrigin: 'center' }} />
      )}
      {label && (
        <div style={{ position: 'absolute', left: 8, bottom: 7, right: 8, fontFamily: SANS, fontSize: isXL ? 9.5 : 8.5, color: 'rgba(255,255,255,0.78)', textShadow: '0 1px 2px rgba(0,0,0,0.5)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</div>
      )}
    </div>
  )
}

export interface BattleCardProps {
  size?: CardSize
  accent: string
  dateTop: string
  dateBot?: string
  palette?: [string, string, string]
  imageUrl?: string
  imgLabel?: string
  title: string
  sub?: string
  hook?: string
  href?: string
  soon?: boolean
  // force the image-on-top / text-under (column) layout on a non-XL card. Used for
  // cards whose hero is LANDSCAPE — a wide image reads far better full-width on top
  // than cropped into the narrow left column of the default row layout.
  stack?: boolean
}

export function BattleCard({ size = 'm', accent, dateTop, dateBot, palette = DEFAULT_PALETTE, imageUrl, imgLabel, title, sub, hook, href, soon, stack }: BattleCardProps) {
  const sz = SIZES[size]
  const isXL = size === 'xl'
  const isLG = size === 'l'
  // stacked = full-width image on top, text beneath (XL is always stacked)
  const stacked = isXL || !!stack
  const stackImgH = isXL ? 132 : isLG ? 150 : 128
  const ready = !soon && !!href
  const badge = (soon || ready) && (
    <span style={{
      position: 'absolute', top: 7, right: 7, zIndex: 2, fontFamily: SANS, fontSize: 8, fontWeight: 700,
      letterSpacing: 0.7, textTransform: 'uppercase', padding: '2px 6px', borderRadius: 999, lineHeight: 1.05,
      color: ready ? '#fff' : 'color-mix(in srgb, var(--foreground) 55%, transparent)',
      background: ready ? accent : 'color-mix(in srgb, var(--foreground) 9%, transparent)',
      border: ready ? 'none' : '1px solid color-mix(in srgb, var(--foreground) 16%, transparent)',
      boxShadow: ready ? '0 1px 4px rgba(0,0,0,0.25)' : 'none',
    }}>{ready ? 'Read →' : 'Soon'}</span>
  )
  const card = (
    <div style={{
      position: 'relative',
      background: 'color-mix(in srgb, var(--foreground) 4%, transparent)', borderRadius: 8,
      border: `1px solid ${isXL ? alpha(accent, 0.55) : (ready ? alpha(accent, 0.4) : 'color-mix(in srgb, var(--foreground) 15%, transparent)')}`,
      boxShadow: isXL ? `0 0 0 4px ${alpha(accent, 0.1)}, 0 12px 28px rgba(0,0,0,0.28)` : 'none',
      overflow: 'hidden', display: 'flex', flexDirection: stacked ? 'column' : 'row', minHeight: stacked && !isXL ? undefined : sz.h,
      opacity: soon ? 0.74 : 1,
    }}>
      {badge}
      {/* Image column. Stacked (XL or landscape-hero `stack`) = full-width band on
          top; otherwise a left column that stretches to the card's height via flex
          align (the card uses minHeight, so a percentage `height:100%` here no
          longer resolves — it would collapse the column to 0 and hide the photo). */}
      <div style={{ width: stacked ? '100%' : sz.imgW, height: stacked ? stackImgH : undefined, alignSelf: stacked ? undefined : 'stretch', flexShrink: 0, [stacked ? 'borderBottom' : 'borderRight']: '1px solid color-mix(in srgb, var(--foreground) 15%, transparent)' }}>
        <Tile palette={palette} imageUrl={imageUrl} label={imgLabel} isXL={isXL} stacked={stacked} />
      </div>
      {/* clear LEFT padding on row cards so the text isn't butted against the
          image divider; stacked cards put the image on top, so no left inset */}
      <div style={{ flex: 1, minWidth: 0, padding: stacked ? '10px 14px 12px' : (isLG ? '10px 14px 10px 22px' : '8px 12px 8px 20px'), display: 'flex', flexDirection: 'column' }}>
        {/* reserve right-edge space so a long title wraps clear of the corner
            Read/Soon pill (the badge is absolutely positioned; non-XL only,
            where it sits over the title row rather than the image) */}
        <div style={{ fontFamily: SERIF, fontSize: isXL ? 22 : (isLG ? 18 : 15), lineHeight: 1.1, letterSpacing: -0.2, paddingRight: !stacked && (soon || ready) ? 48 : undefined }}>{title}</div>
        {sub && <div style={{ fontFamily: SANS, fontSize: 10, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)', marginTop: 3, letterSpacing: 0.1 }}>{sub}</div>}
        {hook && <div style={{ marginTop: 'auto', paddingTop: 5, fontFamily: SERIF, fontSize: sz.body, lineHeight: 1.4, color: isXL ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 70%, transparent)', textWrap: 'pretty' }}>{hook}</div>}
      </div>
    </div>
  )
  return (
    <div style={{ position: 'relative', paddingLeft: CARD_LEFT, paddingRight: 16, marginBottom: 14 }}>
      <div style={{ position: 'absolute', left: 4, top: 10, width: CORD_X - 12, textAlign: 'right', paddingRight: 6, fontFamily: SANS, fontSize: 10.5, fontWeight: 600 }}>
        <div style={{ color: accent, fontWeight: 700, fontSize: 11 }}>{dateTop}</div>
        {dateBot && <div style={{ color: 'color-mix(in srgb, var(--foreground) 40%, transparent)', fontSize: 9.5, marginTop: 1 }}>{dateBot}</div>}
      </div>
      <div style={{ position: 'absolute', left: CORD_X - 5, top: 12, width: 10, height: 10, borderRadius: 999, background: accent, boxShadow: `0 0 0 3px ${alpha(accent, 0.18)}`, border: `1px solid ${accent}`, zIndex: 1 }} />
      <div style={{ position: 'absolute', left: CORD_X + 5, top: 16, width: 11, height: 1, background: alpha(accent, 0.5) }} />
      {href ? <a href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{card}</a> : card}
    </div>
  )
}

// Continuous cord behind the cards (matches the homepage spine).
export function CordTimeline({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', paddingTop: 12, paddingBottom: 30 }}>
      <div style={{ position: 'absolute', left: CORD_X, top: 0, bottom: 0, width: 1, background: 'color-mix(in srgb, var(--foreground) 22%, transparent)' }} />
      {children}
    </div>
  )
}
