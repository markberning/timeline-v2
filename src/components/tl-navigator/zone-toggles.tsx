'use client'

import { REGION_ORDER, REGION_LABELS, type NavigatorRegion } from '@/lib/navigator-tls'
import type { NavigatorTheme } from '@/lib/navigator-themes'

interface Props {
  enabled: Set<NavigatorRegion>
  onToggle: (region: NavigatorRegion) => void
  theme: NavigatorTheme
}

export function ZoneToggles({ enabled, onToggle, theme }: Props) {
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
            onClick={(e) => { e.stopPropagation(); onToggle(r) }}
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
