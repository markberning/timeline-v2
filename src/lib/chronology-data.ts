import {
  NAVIGATOR_TLS,
  type NavigatorRegion,
  type NavigatorTl,
  REGION_ORDER,
  compressedYearToPixel,
} from './navigator-tls'
import { TL_CHAINS, type TlChain } from '../../reference-data/tl-chains'

// ── Sorted civs (chronological) ──
export const SORTED_CIVS: NavigatorTl[] = [...NAVIGATOR_TLS].sort(
  (a, b) => a.startYear - b.startYear || a.endYear - b.endYear
)

// ── Quick lookup: id → NavigatorTl ──
const TL_BY_ID = new Map<string, NavigatorTl>(NAVIGATOR_TLS.map(t => [t.id, t]))

// ── Chain lookup: civId → first-match chain info ──
export interface CivChainInfo {
  chain: TlChain
  index: number
  total: number
}

export const CIV_CHAIN_MAP = new Map<string, CivChainInfo>()
for (const chain of TL_CHAINS) {
  for (let i = 0; i < chain.entries.length; i++) {
    const tid = chain.entries[i].timelineId
    if (!CIV_CHAIN_MAP.has(tid)) {
      CIV_CHAIN_MAP.set(tid, { chain, index: i, total: chain.entries.length })
    }
  }
}

// ── Determine a chain's primary region by its first member in NAVIGATOR_TLS ──
function chainRegion(chain: TlChain): NavigatorRegion | null {
  for (const entry of chain.entries) {
    const tl = TL_BY_ID.get(entry.timelineId)
    if (tl) return tl.region
  }
  return null
}

// ── Chains grouped by region (for the desktop chain grid) ──
export const CHAINS_BY_REGION: { region: NavigatorRegion; chains: TlChain[] }[] =
  REGION_ORDER.map(region => ({
    region,
    chains: TL_CHAINS.filter(c => chainRegion(c) === region),
  })).filter(g => g.chains.length > 0)

// ── Civs grouped by region (for mobile swim lanes) ──
export const CIVS_BY_REGION = new Map<NavigatorRegion, NavigatorTl[]>(
  REGION_ORDER.map(region => [
    region,
    SORTED_CIVS.filter(c => c.region === region),
  ])
)

// ── Lane-packing algorithm (desktop ribbon) ──
export interface PackedBar {
  civ: NavigatorTl
  lane: number
  x: number
  width: number
}

export function packBarsIntoLanes(
  civs: NavigatorTl[],
  yearToX: (year: number) => number,
  gapPx: number = 4,
): { bars: PackedBar[]; laneCount: number } {
  const laneEnds: number[] = []
  const bars: PackedBar[] = []

  for (const civ of civs) {
    const barLeft = yearToX(civ.startYear)
    const barRight = yearToX(civ.endYear)
    const barWidth = Math.max(barRight - barLeft, 20)

    let assignedLane = -1
    for (let l = 0; l < laneEnds.length; l++) {
      if (laneEnds[l] + gapPx <= barLeft) {
        assignedLane = l
        break
      }
    }

    if (assignedLane === -1) {
      assignedLane = laneEnds.length
      laneEnds.push(0)
    }

    laneEnds[assignedLane] = barLeft + barWidth
    bars.push({ civ, lane: assignedLane, x: barLeft, width: barWidth })
  }

  return { bars, laneCount: laneEnds.length }
}

// ── Year formatting ──
export function formatYear(y: number): string {
  const abs = Math.abs(y)
  if (y <= 0) return `${abs.toLocaleString()} BCE`
  return `${abs.toLocaleString()} CE`
}

export function formatYearRange(startYear: number, endYear: number): string {
  return `${formatYear(startYear)} – ${formatYear(endYear)}`
}

// ── Tick marks ──
export interface TickMark {
  year: number
  x: number
  label: string
}

export function generateTicks(
  pixelsPerYear: number,
  interval: number = 500,
): TickMark[] {
  // Snap to interval boundaries within the data range
  const earliest = SORTED_CIVS[0]?.startYear ?? -5000
  const latest = SORTED_CIVS[SORTED_CIVS.length - 1]?.endYear ?? 2050
  const start = Math.ceil(earliest / interval) * interval
  const end = Math.floor(latest / interval) * interval
  const ticks: TickMark[] = []
  for (let y = start; y <= end; y += interval) {
    ticks.push({
      year: y,
      x: compressedYearToPixel(y, pixelsPerYear),
      label: y === 0 ? '0' : formatYear(y),
    })
  }
  return ticks
}
