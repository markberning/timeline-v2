'use client'

import { useRef } from 'react'
import { REGION_ORDER, REGION_LABELS, type NavigatorRegion } from '@/lib/navigator-tls'
import type { NavigatorTheme } from '@/lib/navigator-themes'

interface Props {
  enabled: Set<NavigatorRegion>
  onToggle: (region: NavigatorRegion) => void
  onSolo: (region: NavigatorRegion) => void
  theme: NavigatorTheme
}

const DOUBLE_CLICK_MS = 220

export function ZoneToggles({ enabled, onToggle, onSolo, theme }: Props) {
  // Defer single-click toggles briefly so a double-click can pre-empt them.
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClick = (r: NavigatorRegion) => {
    if (clickTimer.current) clearTimeout(clickTimer.current)
    clickTimer.current = setTimeout(() => {
      clickTimer.current = null
      onToggle(r)
    }, DOUBLE_CLICK_MS)
  }

  const handleDoubleClick = (r: NavigatorRegion) => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current)
      clickTimer.current = null
    }
    onSolo(r)
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap',
        pointerEvents: 'auto',
      }}
    >
      {REGION_ORDER.map(r => {
        const on = enabled.has(r)
        const color = theme.regionColors[r]
        return (
          <button
            key={r}
            onClick={(e) => { e.stopPropagation(); handleClick(r) }}
            onDoubleClick={(e) => { e.stopPropagation(); handleDoubleClick(r) }}
            onPointerDown={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              padding: '4px 9px',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              borderRadius: 999,
              border: `1px solid ${on ? color : theme.toggle.offBorder}`,
              background: on ? `${color}${theme.toggle.onBgAlpha}` : 'transparent',
              color: on ? theme.toggle.onText : theme.toggle.offText,
              cursor: 'pointer',
              transition: 'background 150ms ease, border-color 150ms ease, color 150ms ease',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: on ? color : 'transparent',
                border: `1.5px solid ${color}`,
              }}
            />
            {REGION_LABELS[r]}
          </button>
        )
      })}
    </div>
  )
}
