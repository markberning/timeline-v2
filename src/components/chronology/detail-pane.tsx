'use client'

import { useRef, useEffect } from 'react'
import { NAVIGATOR_TLS, REGION_COLORS, REGION_LABELS } from '@/lib/navigator-tls'
import { CIV_CHAIN_MAP, formatYearRange } from '@/lib/chronology-data'
import { ChainGrid } from './chain-grid'

const TL_BY_ID = new Map(NAVIGATOR_TLS.map(t => [t.id, t]))

interface DetailPaneProps {
  activeCivId: string | null
  onSelect: (id: string) => void
}

export function DetailPane({ activeCivId, onSelect }: DetailPaneProps) {
  const gridScrollRef = useRef<HTMLDivElement>(null)
  const civ = activeCivId ? TL_BY_ID.get(activeCivId) : null

  // Auto-scroll chain grid to show the active civ
  useEffect(() => {
    if (!activeCivId || !gridScrollRef.current) return
    const activeEl = gridScrollRef.current.querySelector(`[data-grid-civ="${activeCivId}"]`) as HTMLElement | null
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [activeCivId])

  if (!civ) {
    return (
      <div className="min-h-0 flex-1 border border-foreground/10 rounded-lg mx-8 mt-4 mb-4 p-8 text-foreground/30 text-center">
        Click a bar above to see details.
      </div>
    )
  }

  const chainInfo = CIV_CHAIN_MAP.get(civ.id)
  const regionColor = REGION_COLORS[civ.region]
  const regionLabel = REGION_LABELS[civ.region]
  const chainLabel = chainInfo?.chain.shortLabel

  return (
    <div className="min-h-0 flex-1 border border-foreground/10 rounded-lg ml-6 mr-4 mt-4 mb-4 overflow-hidden flex flex-col">
      {/* Top: selected civ info */}
      <div className="shrink-0 px-6 py-5 border-b border-foreground/10">
        {/* Chain · Region eyebrow */}
        <div
          className="text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: regionColor }}
        >
          {chainLabel ? `${chainLabel} · ${regionLabel}` : regionLabel}
        </div>

        {/* Civ title */}
        <h2 className="text-3xl font-[family-name:var(--font-lora)] italic text-foreground mt-1.5 leading-tight">
          {civ.label}
        </h2>

        {/* Date range + chapters */}
        <div className="text-sm text-foreground/50 mt-1.5 tabular-nums">
          {formatYearRange(civ.startYear, civ.endYear)}
          {chainInfo && (
            <span className="ml-2">· {chainInfo.total} in chain</span>
          )}
        </div>

        {/* Subtitle / blurb */}
        {civ.subtitle && (
          <p className="text-sm text-foreground/60 mt-2 leading-snug italic font-[family-name:var(--font-lora)]">
            {civ.subtitle}
          </p>
        )}

        {/* Enter button */}
        {civ.hasContent && (
          <button
            className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: regionColor }}
            onClick={() => { window.location.href = `/${civ.id}/` }}
          >
            Enter {civ.label} →
          </button>
        )}

        {!civ.hasContent && (
          <div className="mt-4 text-xs text-foreground/30 italic">
            Coming soon
          </div>
        )}
      </div>

      {/* Bottom: chain grid — scrolls to fill remaining vertical space */}
      <div ref={gridScrollRef} className="flex-1 px-6 py-5 overflow-y-auto min-h-0">
        <ChainGrid activeCivId={activeCivId} onSelect={onSelect} />
      </div>
    </div>
  )
}
