'use client'

import type { NavigatorTl } from '@/lib/navigator-tls'
import { yearToPixel, type Viewport, formatYear } from '@/lib/navigator-coords'

interface Props {
  tl: NavigatorTl
  viewport: Viewport
  top: number
  height: number
  color: string
}

const CHAR_WIDTH = 6.2
const PAD = 8
const MIN_BAR_WIDTH = 28  // floor so short TLs stay visible/tappable at any zoom

function fits(text: string, avail: number): boolean {
  return text.length * CHAR_WIDTH <= avail
}

function formatSpan(start: number, end: number): string {
  const s = Math.abs(Math.round(start))
  const e = Math.abs(Math.round(end))
  if (start < 0 && end < 0) return `${s}–${e} BCE`
  if (start < 0 && end >= 0) return `${s} BCE – ${e} CE`
  return `${s}–${e} CE`
}

function cascade(tl: NavigatorTl, avail: number): { text: string; dotOnly: boolean } {
  if (avail <= 14) return { text: '', dotOnly: true }
  const dates = formatSpan(tl.startYear, tl.endYear)
  const full = `${tl.label} · ${dates}`
  if (fits(full, avail - PAD * 2)) return { text: full, dotOnly: false }
  if (fits(tl.label, avail - PAD * 2)) return { text: tl.label, dotOnly: false }
  // Try first-word abbreviation
  const first = tl.label.split(' ')[0]
  if (fits(first, avail - PAD * 2)) return { text: first, dotOnly: false }
  return { text: tl.label, dotOnly: false }
}

export function SpanBar({ tl, viewport, top, height, color }: Props) {
  const rawX1 = yearToPixel(tl.startYear, viewport)
  const rawX2 = yearToPixel(tl.endYear, viewport)
  const rawWidth = rawX2 - rawX1
  const trueCenter = (rawX1 + rawX2) / 2

  // Apply minimum-width floor — center the padded bar on the TL's true midpoint
  // so the visual position still corresponds to when the TL happened.
  const width = Math.max(rawWidth, MIN_BAR_WIDTH)
  const x1 = trueCenter - width / 2
  const padded = width > rawWidth
  // Position of the actual-duration tick inside the padded bar (only shown when padding)
  const tickLeft = padded ? Math.max(0, rawX1 - x1) : 0
  const tickWidth = padded ? Math.max(2, rawWidth) : 0

  // Visible portion — for sticky-centered label
  const visibleLeft = Math.max(0, -x1)
  const visibleRight = Math.min(width, viewport.containerWidth - x1)
  const visibleWidth = Math.max(0, visibleRight - visibleLeft)
  const visibleCenter = visibleLeft + visibleWidth / 2

  const { text, dotOnly } = cascade(tl, visibleWidth)
  const title = `${tl.label} (${formatYear(tl.startYear)} – ${formatYear(tl.endYear)})`

  // When padded (true duration < floor), the outer bar is a faint "extent
  // hint" and the actual-duration tick inside carries the full color.
  const outerBg = padded ? `${color}66` : color
  const outerOpacity = padded ? 0.5 : 0.88

  if (dotOnly) {
    return (
      <div
        title={title}
        style={{
          position: 'absolute',
          left: x1,
          top,
          width,
          height,
          background: outerBg,
          opacity: outerOpacity,
          borderRadius: 3,
          border: '1px solid rgba(255,255,255,0.18)',
          boxSizing: 'border-box',
          transition: 'top 260ms cubic-bezier(.2,.8,.2,1), height 260ms cubic-bezier(.2,.8,.2,1)',
        }}
      >
        {padded && (
          <div
            style={{
              position: 'absolute',
              left: tickLeft,
              top: 0,
              width: tickWidth,
              height: '100%',
              background: color,
              opacity: 1,
            }}
          />
        )}
      </div>
    )
  }

  return (
    <div
      title={title}
      style={{
        position: 'absolute',
        left: x1,
        top,
        width,
        height,
        zIndex: 1,
        overflow: 'hidden',
        borderRadius: 3,
        background: outerBg,
        opacity: outerOpacity,
        border: '1px solid rgba(255,255,255,0.18)',
        boxSizing: 'border-box',
        transition: 'top 260ms cubic-bezier(.2,.8,.2,1), height 260ms cubic-bezier(.2,.8,.2,1)',
      }}
    >
      {padded && (
        <div
          style={{
            position: 'absolute',
            left: tickLeft,
            top: 0,
            width: tickWidth,
            height: '100%',
            background: color,
            opacity: 1,
            pointerEvents: 'none',
          }}
        />
      )}
      <span
        style={{
          position: 'absolute',
          left: visibleCenter,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          fontSize: 10,
          fontWeight: 600,
          color: '#fff',
          textShadow: '0 1px 2px rgba(0,0,0,0.75)',
          maxWidth: Math.max(visibleWidth - PAD, 0),
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {text}
      </span>
    </div>
  )
}
