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
  packBarsIntoLanes,
  generateTicks,
} from '@/lib/chronology-data'
import type { NavigatorTl } from '@/lib/navigator-tls'

// ── Constants ──
const MOBILE_PPY = 0.55   // pixels per year — mobile
const DESKTOP_PPY = 0.7   // pixels per year — desktop
const BAR_HEIGHT_DESKTOP = 12
const BAR_GAP_DESKTOP = 2
const LANE_HEIGHT_MOBILE = 22
const TICK_AXIS_HEIGHT = 18
const FOCUS_MARKER_PCT = 0.30  // 30% from left on mobile

interface TimelineRibbonProps {
  mode: 'swim' | 'packed'
  activeCivId: string | null
  onSelect: (id: string) => void
  scrollRef: React.RefObject<HTMLDivElement | null>
}

export function TimelineRibbon({ mode, activeCivId, onSelect, scrollRef }: TimelineRibbonProps) {
  const ppy = mode === 'packed' ? DESKTOP_PPY : MOBILE_PPY
  const totalWidth = compressedTotalWidth(ppy)
  const yearToX = useCallback((y: number) => compressedYearToPixel(y, ppy), [ppy])
  const ticks = useMemo(() => generateTicks(ppy, 500), [ppy])

  // Lane-packed bars (desktop)
  const packed = useMemo(() => {
    if (mode !== 'packed') return null
    return packBarsIntoLanes(SORTED_CIVS, yearToX, 6)
  }, [mode, yearToX])

  const ribbonHeight = mode === 'packed'
    ? (packed ? packed.laneCount * (BAR_HEIGHT_DESKTOP + BAR_GAP_DESKTOP) : 150) + TICK_AXIS_HEIGHT
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

  // Auto-scroll to active civ
  useEffect(() => {
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
  }, [activeCivId, yearToX, mode, scrollRef])

  return (
    <div className="relative border-y border-foreground/10 shrink-0">
      {/* Region labels (mobile swim-lane only) — opaque bg covers bar text underneath */}
      {mode === 'swim' && (
        <div
          className="absolute left-0 top-0 z-10 flex flex-col pointer-events-none bg-background"
          style={{ paddingTop: TICK_AXIS_HEIGHT, width: 52 }}
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

      {/* Focus marker (mobile only) */}
      {mode === 'swim' && (
        <div
          className="absolute top-0 bottom-0 w-px z-10 pointer-events-none"
          style={{
            left: `${FOCUS_MARKER_PCT * 100}%`,
            background: 'var(--foreground)',
            opacity: 0.15,
          }}
        />
      )}

      {/* Scrollable ribbon container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-none"
        style={{
          height: ribbonHeight,
          WebkitOverflowScrolling: 'touch',
          paddingLeft: mode === 'swim' ? 52 : 0,
        }}
      >
        <div className="relative" style={{ width: totalWidth, height: ribbonHeight }}>
          {/* Tick marks */}
          {ticks.map(tick => (
            <div key={tick.year} className="absolute top-0" style={{ left: tick.x }}>
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
            ? <SwimLaneBars yearToX={yearToX} activeCivId={activeCivId} onSelect={onSelect} />
            : packed && <PackedBars packed={packed} activeCivId={activeCivId} onSelect={onSelect} />}
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
}: {
  yearToX: (y: number) => number
  activeCivId: string | null
  onSelect: (id: string) => void
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
}: {
  packed: { bars: { civ: NavigatorTl; lane: number; x: number; width: number }[]; laneCount: number }
  activeCivId: string | null
  onSelect: (id: string) => void
}) {
  return (
    <>
      {packed.bars.map(bar => {
        const isActive = bar.civ.id === activeCivId
        const color = REGION_COLORS[bar.civ.region]

        return (
          <button
            key={bar.civ.id}
            className="absolute rounded-sm overflow-hidden transition-all duration-200 cursor-pointer"
            style={{
              left: bar.x,
              top: TICK_AXIS_HEIGHT + bar.lane * (BAR_HEIGHT_DESKTOP + BAR_GAP_DESKTOP),
              width: bar.width,
              height: BAR_HEIGHT_DESKTOP,
              backgroundColor: isActive ? color : `color-mix(in srgb, ${color} 12%, var(--background))`,
              boxShadow: isActive ? `0 0 10px ${color}50` : 'none',
              zIndex: isActive ? 5 : 1,
            }}
            onClick={() => onSelect(bar.civ.id)}
          >
            <span
              className="absolute inset-0 flex items-center px-1 text-[8px] font-semibold truncate"
              style={{ color: isActive ? 'white' : 'var(--foreground)', opacity: isActive ? 1 : 0.3 }}
            >
              {bar.civ.label}
            </span>
          </button>
        )
      })}
    </>
  )
}
