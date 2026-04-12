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
  const x1 = yearToPixel(tl.startYear, viewport)
  const x2 = yearToPixel(tl.endYear, viewport)
  const width = Math.max(x2 - x1, 3)

  // Visible portion — for sticky-centered label
  const visibleLeft = Math.max(0, -x1)
  const visibleRight = Math.min(width, viewport.containerWidth - x1)
  const visibleWidth = Math.max(0, visibleRight - visibleLeft)
  const visibleCenter = visibleLeft + visibleWidth / 2

  const { text, dotOnly } = cascade(tl, visibleWidth)
  const title = `${tl.label} (${formatYear(tl.startYear)} – ${formatYear(tl.endYear)})`

  if (dotOnly) {
    // Render as a thin pill with no label — cascade endpoint
    return (
      <div
        title={title}
        style={{
          position: 'absolute',
          left: x1,
          top,
          width,
          height,
          background: color,
          opacity: 0.82,
          borderRadius: 3,
          border: '1px solid rgba(255,255,255,0.18)',
          boxSizing: 'border-box',
          transition: 'top 260ms cubic-bezier(.2,.8,.2,1), height 260ms cubic-bezier(.2,.8,.2,1)',
        }}
      />
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
        background: color,
        opacity: 0.88,
        border: '1px solid rgba(255,255,255,0.18)',
        boxSizing: 'border-box',
        transition: 'top 260ms cubic-bezier(.2,.8,.2,1), height 260ms cubic-bezier(.2,.8,.2,1)',
      }}
    >
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
