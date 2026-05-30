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
  // NEVER-CROP mode (theme/story cards — war, art, music). Show the WHOLE image at
  // its real dimensions (no cover-crop, no scale) and let the CARD size itself to
  // the image: shown WHOLE on top (width 100% / height auto, never cropped or
  // distorted), text below. Width varies by `size` and the image's own aspect sets
  // the height, so the spine staggers instead of tiling. The card does not have to be
  // full width. Text grows, never truncates. See feedback_cards_fill_and_no_truncation.
  fit?: boolean
}

export function BattleCard({ size = 'm', accent, dateTop, dateBot, palette = DEFAULT_PALETTE, imageUrl, imgLabel, title, sub, hook, href, soon, stack, fit }: BattleCardProps) {
  const sz = SIZES[size]
  const isXL = size === 'xl'
  const isLG = size === 'l'
  // stacked = full-width image on top, text beneath (XL is always stacked)
  const stacked = isXL || !!stack
  const stackImgH = isXL ? 132 : isLG ? 150 : 128
  const [imgFailed, setImgFailed] = useState(false)
  const useFit = !!fit && !!imageUrl
  const divider = '1px solid color-mix(in srgb, var(--foreground) 15%, transparent)'
  const gradient = `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})`
  // fit cards never crop. LANDSCAPE/near-square (stack) → image on TOP at width:100%
  // / height:auto (can't distort), card width varies by size for a staggered spine;
  // the image's aspect then sets the height. PORTRAIT (!stack) → image on the LEFT at
  // its natural aspect (width fixed by size, height:auto — also can't distort), text
  // to the RIGHT; the pithy hook fits beside it so the image fills top/left/bottom.
  const fitW = { s: 'min(46vw, 200px)', m: 'min(53vw, 238px)', l: 'min(61vw, 280px)', xl: 'min(67vw, 308px)' }[size]
  // portrait image is sized to be the TALLEST element (taller than the pithy text),
  // so the card height = image height and the photo fills top/left/bottom; the text
  // top-aligns beside it. If a portrait still shows a gap, the image needs to be bigger.
  const portW = { s: 156, m: 180, l: 204, xl: 204 }[size]
  // portrait text column: one fixed width (basis == max) so the text fills the column
  // and wraps at its true edge, instead of breaking early at a smaller flex-basis.
  const txtBasis = { s: 144, m: 162, l: 180, xl: 180 }[size]
  const txtMax = txtBasis
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
  // col = column layout (image on top): landscape fit cards + XL/stacked battle cards.
  // Portrait fit cards and ordinary battle cards are row (image left, text right).
  const col = stacked
  const textBlock = (
    <div style={{ ...(useFit && !stacked ? { flexGrow: 0, flexShrink: 1, flexBasis: txtBasis, maxWidth: txtMax } : { flex: 1 }), minWidth: 0, padding: col ? '10px 14px 12px' : (isLG ? '10px 14px 10px 22px' : '8px 12px 8px 20px'), display: 'flex', flexDirection: 'column' }}>
      {/* reserve right-edge space so a long title wraps clear of the corner pill */}
      <div style={{ fontFamily: SERIF, fontSize: isXL ? 22 : (isLG ? 18 : 15), lineHeight: 1.1, letterSpacing: -0.2, paddingRight: !col && (soon || ready) ? 48 : undefined }}>{title}</div>
      {sub && <div style={{ fontFamily: SANS, fontSize: 10, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)', marginTop: 3, letterSpacing: 0.1 }}>{sub}</div>}
      {/* greedy wrap (no text-wrap:pretty) so each line fills the width before
          breaking — pretty was balancing lines short and reading as "wraps too soon" */}
      {hook && <div style={{ marginTop: useFit ? 6 : 'auto', paddingTop: 5, fontFamily: SERIF, fontSize: sz.body, lineHeight: 1.4, color: isXL ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 70%, transparent)' }}>{hook}</div>}
    </div>
  )
  // NEVER-CROP, NEVER-DISTORT image. Landscape → on top (width:100%/height:auto).
  // Portrait → on the left at fixed width + height:auto (natural aspect); alignSelf
  // stretch lets it fill the card height (the short hook keeps text ≤ image height,
  // so no gap under it). Gradient fallback if the image fails.
  const fitImage = (
    // NATURAL ASPECT only (fixed dimension on one axis, auto on the other) — this is
    // the one thing that mathematically can't distort. Landscape → width:100% on top.
    // Portrait → fixed width + height:auto on the left; the image is sized big enough
    // (and the title kept concise) that it's taller than the pithy text, so it fills
    // top/left/bottom with the text top-aligned beside it. alignSelf:stretch lets the
    // text column match the image's height.
    <div style={{ alignSelf: 'stretch', flexShrink: 0, lineHeight: 0, overflow: 'hidden', background: gradient, [stacked ? 'borderBottom' : 'borderRight']: divider }}>
      {imageUrl && !imgFailed
        ? <img src={imageUrl} alt="" onError={() => setImgFailed(true)} style={stacked
            ? { display: 'block', width: '100%', height: 'auto' }
            : { display: 'block', width: portW, height: 'auto' }} />
        : <div style={{ width: stacked ? '100%' : portW, height: stacked ? 120 : '100%', background: gradient }} />}
    </div>
  )
  const card = (
    <div style={{
      position: 'relative',
      background: 'color-mix(in srgb, var(--foreground) 4%, transparent)', borderRadius: 8,
      border: `1px solid ${isXL ? alpha(accent, 0.55) : (ready ? alpha(accent, 0.4) : 'color-mix(in srgb, var(--foreground) 15%, transparent)')}`,
      boxShadow: isXL ? `0 0 0 4px ${alpha(accent, 0.1)}, 0 12px 28px rgba(0,0,0,0.28)` : 'none',
      overflow: 'hidden', display: 'flex', flexDirection: col ? 'column' : 'row',
      ...(useFit
        ? (stacked ? { width: fitW, maxWidth: '100%' } : { width: 'fit-content', maxWidth: '100%', minHeight: 132 })
        : { minHeight: stacked && !isXL ? undefined : sz.h }),
      opacity: soon ? 0.74 : 1,
    }}>
      {badge}
      {useFit ? fitImage : (
        // Cover-crop tile (battle cards): stacked = full-width band on top; otherwise
        // a left column that stretches to the card's minHeight-driven height.
        <div style={{ width: stacked ? '100%' : sz.imgW, height: stacked ? stackImgH : undefined, alignSelf: stacked ? undefined : 'stretch', flexShrink: 0, [stacked ? 'borderBottom' : 'borderRight']: divider }}>
          <Tile palette={palette} imageUrl={imageUrl} label={imgLabel} isXL={isXL} stacked={stacked} />
        </div>
      )}
      {textBlock}
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
