'use client'

import { useEffect, useMemo, useCallback } from 'react'
import {
  REGION_ORDER,
  REGION_LABELS,
  REGION_COLORS,
  compressedYearToPixel,
  compressedTotalWidth,
} from '@/lib/navigator-tls'
import {
  SORTED_CIVS,
  CIVS_BY_REGION,
  CIV_CHAIN_MAP,
  CHAINS_BY_REGION,
  packBarsIntoLanes,
  generateTicks,
} from '@/lib/chronology-data'
import type { NavigatorTl } from '@/lib/navigator-tls'

// ── Constants ──
const MOBILE_PPY = 0.55   // pixels per year — mobile
const DESKTOP_PPY = 0.7   // pixels per year — desktop
const BAR_HEIGHT_DESKTOP = 12
const BAR_GAP_DESKTOP = 2
const BAR_HEIGHT_SIDE = 28      // taller bars for the side-panel desktop layout
const BAR_GAP_SIDE = 4
const LANE_HEIGHT_MOBILE = 22
const TICK_AXIS_HEIGHT = 18
const FOCUS_MARKER_PCT = 0.30  // 30% from left on mobile

interface TimelineRibbonProps {
  mode: 'swim' | 'packed'
  /** When true, ribbon fills its container's height (right-side desktop column) with thicker bars. */
  side?: boolean
  activeCivId: string | null
  onSelect: (id: string) => void
  scrollRef: React.RefObject<HTMLDivElement | null>
  ribbonMode: 'timeline' | 'chains'
  onRibbonModeChange: (mode: 'timeline' | 'chains') => void
  soloChainId: string | null
  onChainSolo: (id: string | null) => void
}

export function TimelineRibbon({ mode, side = false, activeCivId, onSelect, scrollRef, ribbonMode, onRibbonModeChange, soloChainId, onChainSolo }: TimelineRibbonProps) {
  const ppy = mode === 'packed' ? DESKTOP_PPY : MOBILE_PPY
  const totalWidth = compressedTotalWidth(ppy)
  const yearToX = useCallback((y: number) => compressedYearToPixel(y, ppy), [ppy])
  const ticks = useMemo(() => generateTicks(ppy, 500), [ppy])

  const barH = side ? BAR_HEIGHT_SIDE : BAR_HEIGHT_DESKTOP
  const barGap = side ? BAR_GAP_SIDE : BAR_GAP_DESKTOP

  // Lane-packed bars (desktop)
  const packed = useMemo(() => {
    if (mode !== 'packed') return null
    return packBarsIntoLanes(SORTED_CIVS, yearToX, 6)
  }, [mode, yearToX])

  const ribbonHeight = mode === 'packed'
    ? (packed ? packed.laneCount * (barH + barGap) : 150) + TICK_AXIS_HEIGHT
    : REGION_ORDER.length * LANE_HEIGHT_MOBILE + TICK_AXIS_HEIGHT

  // Convert vertical wheel events to horizontal scroll on the ribbon
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    function onWheel(e: WheelEvent) {
      // If user is already scrolling horizontally (trackpad), let it be
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      e.preventDefault()
      el!.scrollLeft += e.deltaY
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [scrollRef])

  // Auto-scroll to active civ (also re-fires on ribbonMode change so
  // returning from chain-pills view scrolls the ribbon to the right spot)
  useEffect(() => {
    if (ribbonMode !== 'timeline') return
    if (!activeCivId || !scrollRef.current) return
    const civ = SORTED_CIVS.find(c => c.id === activeCivId)
    if (!civ) return

    const barStartX = yearToX(civ.startYear)
    const container = scrollRef.current
    const containerWidth = container.clientWidth

    if (mode === 'swim') {
      // Mobile: instant scroll — smooth fights the user's list momentum
      const focusX = containerWidth * FOCUS_MARKER_PCT
      container.scrollTo({ left: barStartX - focusX, behavior: 'auto' })
    } else {
      // Desktop: smooth scroll on click
      container.scrollTo({ left: barStartX - containerWidth / 2, behavior: 'smooth' })
    }
  }, [activeCivId, yearToX, mode, scrollRef, ribbonMode])

  const regionColWidth = 62
  const fadeWidth = 24

  // Build a set of chain member IDs for dimming when a chain is solo'd
  const soloMemberIds = useMemo(() => {
    if (!soloChainId) return null
    const chain = CHAINS_BY_REGION.flatMap(g => g.chains).find(c => c.id === soloChainId)
    if (!chain) return null
    return new Set(chain.entries.map(e => e.timelineId))
  }, [soloChainId])

  if (ribbonMode === 'chains') {
    return (
      <div className={`relative ${side ? 'flex-1 min-h-0' : 'border-y border-foreground/10 shrink-0'}`}>
        <ChainPills
          soloChainId={soloChainId}
          onChainSolo={onChainSolo}
        />
      </div>
    )
  }

  return (
    <div className={`relative ${side ? 'flex-1 min-h-0 flex flex-col' : 'border-y border-foreground/10 shrink-0'}`}>
      {/* Region labels + fade */}
      {mode === 'swim' && (
        <div
          className="absolute left-0 bottom-0 z-20 pointer-events-none"
          style={{
            top: TICK_AXIS_HEIGHT,
            width: regionColWidth + fadeWidth,
            background: `linear-gradient(to right, var(--background) ${regionColWidth}px, transparent)`,
          }}
        >
          {REGION_ORDER.map(region => (
            <div
              key={region}
              className="flex items-center text-[8px] font-bold uppercase tracking-wider pl-1.5 pr-1"
              style={{
                height: LANE_HEIGHT_MOBILE,
                color: REGION_COLORS[region],
              }}
            >
              {REGION_LABELS[region].split(' ').map((w, i) => (
                <span key={i} className={i > 0 ? 'ml-0.5' : ''}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Scrollable ribbon container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-none"
        style={{
          height: side ? '100%' : ribbonHeight,
          WebkitOverflowScrolling: 'touch',
          paddingLeft: mode === 'swim' ? regionColWidth + fadeWidth : 0,
        }}
      >
        <div className="relative" style={{ width: totalWidth, height: ribbonHeight, minHeight: side ? '100%' : undefined }}>
          {/* Tick marks */}
          {ticks.map(tick => (
            <div key={tick.year} className="absolute top-0 bottom-0" style={{ left: tick.x }}>
              <div className="h-full w-px absolute top-0 bg-foreground/5" />
              <div
                className="absolute text-[9px] text-foreground/30 whitespace-nowrap tabular-nums"
                style={{ top: 2, left: 3 }}
              >
                {tick.label}
              </div>
            </div>
          ))}

          {/* Bars */}
          {mode === 'swim'
            ? <SwimLaneBars yearToX={yearToX} activeCivId={activeCivId} onSelect={onSelect} soloMemberIds={soloMemberIds} />
            : packed && <PackedBars packed={packed} activeCivId={activeCivId} onSelect={onSelect} soloMemberIds={soloMemberIds} barHeight={barH} barGap={barGap} />}
        </div>
      </div>
    </div>
  )
}

// Estimate text width at ~5.5px per character for 9px bold sans
const MIN_LABEL_WIDTH = 45 // show label if bar is at least this wide

// ── Mobile: swim-lane bars ──
function SwimLaneBars({
  yearToX,
  activeCivId,
  onSelect,
  soloMemberIds,
}: {
  yearToX: (y: number) => number
  activeCivId: string | null
  onSelect: (id: string) => void
  soloMemberIds: Set<string> | null
}) {
  return (
    <>
      {REGION_ORDER.map((region, laneIdx) => {
        const civs = CIVS_BY_REGION.get(region) ?? []
        const laneTop = TICK_AXIS_HEIGHT + laneIdx * LANE_HEIGHT_MOBILE
        return civs.map(civ => {
          const x = yearToX(civ.startYear)
          const w = Math.max(yearToX(civ.endYear) - x, 70)
          const isActive = civ.id === activeCivId
          const dimmed = soloMemberIds !== null && !soloMemberIds.has(civ.id)
          const color = REGION_COLORS[civ.region]
          const showLabel = isActive || w >= MIN_LABEL_WIDTH

          return (
            <button
              key={civ.id}
              className="absolute rounded-sm overflow-hidden cursor-pointer"
              style={{
                left: x,
                top: laneTop + 2,
                width: w,
                height: LANE_HEIGHT_MOBILE - 4,
                backgroundColor: isActive ? color : `color-mix(in srgb, ${color} 15%, var(--background))`,
                boxShadow: isActive ? `0 0 8px ${color}60` : 'none',
                zIndex: isActive ? 5 : 1,
                opacity: dimmed ? 0.15 : 1,
              }}
              onClick={() => onSelect(civ.id)}
            >
              {showLabel && (
                <span
                  className="absolute inset-0 flex items-center px-1.5 text-[9px] font-bold truncate"
                  style={{
                    color: isActive ? 'white' : 'var(--foreground)',
                    opacity: isActive ? 1 : 0.4,
                  }}
                >
                  {civ.label}
                </span>
              )}
            </button>
          )
        })
      })}
    </>
  )
}

// ── Desktop: lane-packed bars ──
function PackedBars({
  packed,
  activeCivId,
  onSelect,
  soloMemberIds,
  barHeight,
  barGap,
}: {
  packed: { bars: { civ: NavigatorTl; lane: number; x: number; width: number }[]; laneCount: number }
  activeCivId: string | null
  onSelect: (id: string) => void
  soloMemberIds: Set<string> | null
  barHeight: number
  barGap: number
}) {
  // Scale label font with bar thickness so taller side-panel bars use bigger text
  const labelFontSize = barHeight >= 22 ? 11 : 8
  return (
    <>
      {packed.bars.map(bar => {
        const isActive = bar.civ.id === activeCivId
        const dimmed = soloMemberIds !== null && !soloMemberIds.has(bar.civ.id)
        const color = REGION_COLORS[bar.civ.region]

        return (
          <button
            key={bar.civ.id}
            className="absolute rounded-sm overflow-hidden transition-all duration-200 cursor-pointer"
            style={{
              left: bar.x,
              top: TICK_AXIS_HEIGHT + bar.lane * (barHeight + barGap),
              width: bar.width,
              height: barHeight,
              backgroundColor: isActive ? color : `color-mix(in srgb, ${color} 12%, var(--background))`,
              boxShadow: isActive ? `0 0 10px ${color}50` : 'none',
              zIndex: isActive ? 5 : 1,
              opacity: dimmed ? 0.15 : 1,
            }}
            onClick={() => onSelect(bar.civ.id)}
          >
            <span
              className="absolute inset-0 flex items-center px-2 font-semibold truncate"
              style={{ color: isActive ? 'white' : 'var(--foreground)', opacity: isActive ? 1 : 0.45, fontSize: labelFontSize }}
            >
              {bar.civ.label}
            </span>
          </button>
        )
      })}
    </>
  )
}

// ── Chain pills view ──
const CHAIN_PILL_ROW_HEIGHT = 28

function ChainPills({
  soloChainId,
  onChainSolo,
}: {
  soloChainId: string | null
  onChainSolo: (id: string | null) => void
}) {
  return (
    <div className="px-2 py-2">
      {CHAINS_BY_REGION.map(({ region, chains }) => (
        <div key={region} className="flex items-center gap-1 mb-1" style={{ minHeight: CHAIN_PILL_ROW_HEIGHT }}>
          <div
            className="shrink-0 text-[8px] font-bold uppercase tracking-wider w-[52px] text-right pr-2"
            style={{ color: REGION_COLORS[region] }}
          >
            {REGION_LABELS[region]}
          </div>
          <div className="flex flex-wrap gap-1">
            {chains.map(chain => {
              const isActive = chain.id === soloChainId
              const color = REGION_COLORS[region]

              return (
                <button
                  key={chain.id}
                  className="rounded cursor-pointer transition-all duration-150 whitespace-nowrap"
                  style={{
                    padding: '3px 10px',
                    fontSize: 11,
                    fontWeight: 600,
                    backgroundColor: isActive ? color : `color-mix(in srgb, ${color} 12%, var(--background))`,
                    color: isActive ? 'white' : color,
                    border: `1px solid ${isActive ? color : `color-mix(in srgb, ${color} 25%, transparent)`}`,
                  }}
                  onClick={() => onChainSolo(isActive ? null : chain.id)}
                >
                  {chain.shortLabel}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
