'use client'

import type { NavigatorTl } from '@/lib/navigator-tls'
import { REGION_COLORS } from '@/lib/navigator-tls'
import { yearToPixel, type Viewport, formatYear } from '@/lib/navigator-coords'

interface Props {
  tls: NavigatorTl[]     // pre-filtered by enabled zones
  viewport: Viewport
  axisY: number          // pixel Y where the axis line sits
  rowHeight: number      // vertical spacing between label rows
  rowGap: number         // gap between axis and first row
}

const CHAR_WIDTH = 6.2
const LABEL_PAD_X = 8
const LABEL_GAP = 6
const DOT_RADIUS = 5

interface LaidOutLabel {
  tl: NavigatorTl
  x: number
  leftEdge: number
  rightEdge: number
  width: number
  text: string
  row: number
  visible: boolean
}

function labelText(tl: NavigatorTl): string {
  return `${tl.label} (${formatYear(tl.startYear)})`
}

function measure(text: string): number {
  return Math.ceil(text.length * CHAR_WIDTH) + LABEL_PAD_X * 2
}

function layoutLabels(tls: NavigatorTl[], viewport: Viewport): LaidOutLabel[] {
  const sorted = [...tls].sort((a, b) => a.startYear - b.startYear)
  const rowRightEdges: number[] = []
  const out: LaidOutLabel[] = []

  for (const tl of sorted) {
    const x = yearToPixel(tl.startYear, viewport)
    const text = labelText(tl)
    const width = measure(text)
    const leftEdge = x - width / 2
    const rightEdge = x + width / 2

    let row = -1
    for (let r = 0; r < rowRightEdges.length; r++) {
      if (rowRightEdges[r] + LABEL_GAP <= leftEdge) {
        row = r
        rowRightEdges[r] = rightEdge
        break
      }
    }
    if (row === -1) {
      rowRightEdges.push(rightEdge)
      row = rowRightEdges.length - 1
    }

    const visible = rightEdge >= 0 && leftEdge <= viewport.containerWidth
    out.push({ tl, x, leftEdge, rightEdge, width, text, row, visible })
  }
  return out
}

export function TlDotTrack({ tls, viewport, axisY, rowHeight, rowGap }: Props) {
  const laid = layoutLabels(tls, viewport)

  return (
    <>
      {/* Axis line */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: axisY,
          height: 2,
          background: 'rgba(255,255,255,0.22)',
          pointerEvents: 'none',
        }}
      />

      {laid.map(({ tl, x, leftEdge, width, text, row, visible }) => {
        if (!visible) return null
        const color = REGION_COLORS[tl.region]
        const labelY = axisY + rowGap + row * rowHeight
        return (
          <div key={tl.id}>
            {/* Leader line from dot down to label top */}
            <div
              style={{
                position: 'absolute',
                left: x,
                top: axisY,
                width: 1,
                height: Math.max(0, labelY - axisY),
                background: `${color}99`,
                pointerEvents: 'none',
              }}
            />
            {/* Dot */}
            <div
              title={`${tl.label} · ${formatYear(tl.startYear)} – ${formatYear(tl.endYear)}`}
              style={{
                position: 'absolute',
                left: x - DOT_RADIUS,
                top: axisY - DOT_RADIUS + 1,
                width: DOT_RADIUS * 2,
                height: DOT_RADIUS * 2,
                borderRadius: '50%',
                background: color,
                border: '1.5px solid #0a0a0c',
                boxSizing: 'content-box',
                zIndex: 2,
              }}
            />
            {/* Label */}
            <div
              style={{
                position: 'absolute',
                left: leftEdge,
                top: labelY,
                width,
                height: rowHeight - 2,
                padding: `0 ${LABEL_PAD_X}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                fontWeight: 600,
                color: '#e5e5e5',
                whiteSpace: 'nowrap',
                background: 'rgba(10,10,12,0.86)',
                border: `1px solid ${color}aa`,
                borderRadius: 3,
                boxSizing: 'border-box',
                pointerEvents: 'none',
              }}
            >
              {text}
            </div>
          </div>
        )
      })}
    </>
  )
}
