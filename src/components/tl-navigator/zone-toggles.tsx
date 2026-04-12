'use client'

import { REGION_ORDER, REGION_LABELS, REGION_COLORS, type NavigatorRegion } from '@/lib/navigator-tls'

interface Props {
  enabled: Set<NavigatorRegion>
  onToggle: (region: NavigatorRegion) => void
}

export function ZoneToggles({ enabled, onToggle }: Props) {
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
        const color = REGION_COLORS[r]
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
              border: `1px solid ${on ? color : 'rgba(255,255,255,0.2)'}`,
              background: on ? `${color}33` : 'transparent',
              color: on ? '#fff' : '#888',
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
