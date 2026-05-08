'use client'

import { REGION_COLORS, REGION_LABELS, NAVIGATOR_TLS } from '@/lib/navigator-tls'
import { CHAINS_BY_REGION } from '@/lib/chronology-data'

const TL_BY_ID = new Map(NAVIGATOR_TLS.map(t => [t.id, t]))

interface ChainGridProps {
  activeCivId: string | null
  onSelect: (id: string) => void
}

export function ChainGrid({ activeCivId, onSelect }: ChainGridProps) {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-5">
      {CHAINS_BY_REGION.map(group =>
        group.chains.map(chain => {
          const regionColor = REGION_COLORS[group.region]

          return (
            <div key={chain.id}>
              {/* Chain header */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: regionColor }}
                />
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: regionColor }}
                >
                  {chain.shortLabel}
                </span>
              </div>

              {/* Chain members */}
              <div className="space-y-0.5">
                {chain.entries.map(entry => {
                  const tl = TL_BY_ID.get(entry.timelineId)
                  if (!tl) return null
                  const isActive = tl.id === activeCivId
                  const canNavigate = !!tl.hasContent

                  return (
                    <button
                      key={tl.id}
                      data-grid-civ={tl.id}
                      className={`block w-full text-left text-[12.5px] font-[family-name:var(--font-lora)] leading-snug rounded-sm transition-colors duration-150 ${
                        canNavigate ? 'cursor-pointer hover:bg-foreground/5' : 'opacity-35 cursor-default'
                      }`}
                      style={{
                        color: isActive ? 'white' : 'var(--foreground)',
                        fontWeight: isActive ? 700 : 400,
                        fontStyle: isActive ? 'italic' : 'normal',
                        backgroundColor: isActive ? regionColor : 'transparent',
                        borderLeftWidth: isActive ? 4 : 0,
                        borderLeftColor: regionColor,
                        paddingLeft: isActive ? 6 : 10,
                        paddingRight: 8,
                        paddingTop: 3,
                        paddingBottom: 3,
                        boxShadow: isActive ? `0 0 0 1px ${regionColor}` : 'none',
                      }}
                      onClick={() => onSelect(tl.id)}
                    >
                      {tl.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
