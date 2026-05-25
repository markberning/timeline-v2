'use client'

// Shared cord/timeline card body, used across art (era / movement) and war
// (battle / front-door) so every vertical's cards behave identically. THE locked
// card rules (BEHAVIORS.md "Cards"):
//  • The card is capped per size (never full-screen) and its HEIGHT grows to fit.
//  • The work is NEVER cropped (only true scan borders are trimmed at the source).
//  • The image fills 3 sides; text is on the 4th:
//      landscape / square → image on TOP (fills top/left/right), text below.
//      portrait           → image on the LEFT (fills top/left/bottom), text right;
//                           the image height drives the card height.
//  • Orientation is auto-detected from the loaded image (a `portrait` hint avoids
//    the load-time reflow) — the author just supplies an image.
//  • Title is a semibold serif headline; the sub line is a small uppercase label.
// The wrapper chrome (cord node, date tag, link, etc.) stays in each call site.

import { useState } from 'react'

export type OCardSize = 's' | 'm' | 'l' | 'xl'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 11%, transparent)'
const CARD_BG = 'color-mix(in srgb, var(--foreground) 4%, transparent)'
const IMG_FILTER = 'sepia(0.14) saturate(0.88) contrast(1.04)'

const CARD_W: Record<OCardSize, number> = { s: 232, m: 272, l: 312, xl: 312 }
// Only a clearly TALL image uses the left (portrait) layout; near-square images
// (e.g. ~1.08) stay on top so the text column isn't starved.
const PORTRAIT_RATIO = 1.18
// Top-layout images may be a little taller than the card is wide (so a mildly
// tall work still fills the width instead of letterboxing); genuinely tall works
// cross PORTRAIT_RATIO and go to the left layout instead.
const LS_MAX_H_MULT = 1.25
// Screen-relative width caps (user rule, 2026-05-25): a landscape/square card is
// never wider than 3/4 of the screen; a portrait IMAGE is never wider than 1/2 the
// screen (so the text column beside it stays roomy). The per-size px values are the
// target on wide screens; the vw caps win on phones.
const LS_MAX_VW = '75vw'
const P_IMG_MAX_VW = '50vw'
const P_IMG_W: Record<OCardSize, number> = { s: 150, m: 185, l: 210, xl: 225 }

function hexAlpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${a})`
}

export interface OrientationCardProps {
  size: OCardSize
  accent: string
  imageUrl?: string
  portrait?: boolean              // orientation hint (else auto-detected on load)
  alt?: string
  title: React.ReactNode
  sub?: React.ReactNode           // small uppercase label under the title
  body?: React.ReactNode          // blurb / hook
  credit?: React.ReactNode        // small credit under the body (art)
  imageOverlay?: React.ReactNode  // label drawn over the image, e.g. war captions
  badge?: React.ReactNode         // absolutely-positioned corner badge (war Read/Soon)
  footer?: React.ReactNode        // line after the body (war "Read →")
  dim?: boolean                   // soon → dimmed
}

export function OrientationCard({
  size, accent, imageUrl, portrait, alt = '', title, sub, body, credit, imageOverlay, badge, footer, dim,
}: OrientationCardProps) {
  const [imgFailed, setImgFailed] = useState(false)
  const [orient, setOrient] = useState<'ls' | 'p' | null>(portrait === true ? 'p' : portrait === false ? 'ls' : null)
  const isXL = size === 'xl'
  const isLG = size === 'l'
  const hasImg = !!imageUrl && !imgFailed
  const portraitLayout = hasImg && (orient ?? 'ls') === 'p'
  const cardW = CARD_W[size]
  const onImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (portrait === undefined) {
      const im = e.currentTarget
      setOrient(im.naturalHeight > im.naturalWidth * PORTRAIT_RATIO ? 'p' : 'ls')
    }
  }

  const outer: React.CSSProperties = {
    position: 'relative',
    background: CARD_BG,
    borderRadius: 8,
    border: `1px solid ${isXL ? hexAlpha(accent, 0.55) : BORDER}`,
    boxShadow: isXL ? `0 0 0 4px ${hexAlpha(accent, 0.1)}, 0 12px 28px rgba(0,0,0,0.3)` : '0 1px 3px rgba(0,0,0,0.12)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: portraitLayout ? 'row' : 'column',
    width: `min(${cardW}px, ${LS_MAX_VW})`,
    maxWidth: '100%',
    opacity: dim ? 0.74 : 1,
  }

  const textBlock = (
    <div style={{ flex: portraitLayout ? 1 : undefined, minWidth: 0, padding: isXL ? '13px 16px 15px' : (isLG ? '12px 15px 14px' : '10px 13px 12px'), display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <div style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, lineHeight: 1.12, letterSpacing: -0.3, color: INK }}>{title}</div>
      {sub != null && <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase', color: MUTED, marginTop: 4 }}>{sub}</div>}
      {body != null && <div style={{ marginTop: 7, fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.42, color: INK, textWrap: 'pretty' }}>{body}</div>}
      {credit != null && <div style={{ marginTop: 8, fontFamily: SANS, fontSize: 9.5, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0.2, color: MUTED }}>{credit}</div>}
      {footer != null && <div style={{ marginTop: 8 }}>{footer}</div>}
    </div>
  )

  const imgEl = (extra: React.CSSProperties) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={imageUrl} alt={alt} loading="lazy" onLoad={onImgLoad} onError={() => setImgFailed(true)} style={{ display: 'block', filter: IMG_FILTER, ...extra }} />
  )

  if (portraitLayout) {
    // Portrait: image on the LEFT at its natural aspect, capped at HALF the screen
    // width (P images are never more than 1/2 screen), shown whole — text on the
    // right gets the rest, so it stays roomy. The card sizes to its content.
    return (
      <div style={{ ...outer, width: 'fit-content', maxWidth: `min(94vw, ${cardW + 150}px)`, alignItems: 'stretch' }}>
        {badge}
        <div style={{ position: 'relative', flexShrink: 0, lineHeight: 0, overflow: 'hidden' }}>
          {imgEl({ width: `min(${P_IMG_W[size]}px, ${P_IMG_MAX_VW})`, height: 'auto', alignSelf: 'flex-start' })}
          {imageOverlay}
        </div>
        {textBlock}
      </div>
    )
  }

  return (
    <div style={outer}>
      {badge}
      {hasImg && (
        <div style={{ position: 'relative', width: '100%', maxHeight: cardW * LS_MAX_H_MULT, overflow: 'hidden', background: CARD_BG, lineHeight: 0 }}>
          {imgEl({ width: '100%', height: 'auto', maxHeight: cardW * LS_MAX_H_MULT, objectFit: 'contain' })}
          {imageOverlay}
        </div>
      )}
      {textBlock}
    </div>
  )
}
