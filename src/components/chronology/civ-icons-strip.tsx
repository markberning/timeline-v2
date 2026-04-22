'use client'

// Civilization-themed decorative strip using Unicode symbols.
// These render natively at high quality on all platforms.

import { REGION_COLORS } from '@/lib/navigator-tls'

const near = REGION_COLORS['near-east']
const africa = REGION_COLORS['africa']
const asia = REGION_COLORS['asia']
const europe = REGION_COLORS['europe']
const americas = REGION_COLORS['americas']

const GLYPHS: { char: string; color: string }[] = [
  { char: '𓂀', color: africa },    // Egyptian eye of Horus
  { char: '☽', color: near },      // Crescent (Near East)
  { char: '☸', color: asia },      // Dharma wheel (India)
  { char: '⚱', color: europe },    // Amphora (Greece/Rome)
  { char: '𓃭', color: africa },    // Egyptian lion
  { char: '◉', color: americas },  // Sun disk (Andes)
  { char: '⛩', color: asia },      // Torii gate (Japan)
  { char: '𓋹', color: africa },    // Ankh
  { char: '☬', color: asia },      // Adi Shakti (India)
  { char: '⚔', color: europe },    // Crossed swords (Rome)
]

export function CivIconsStrip() {
  return (
    <div className="flex items-center justify-center gap-3 lg:gap-5 py-1 overflow-hidden shrink-0">
      {GLYPHS.map((g, i) => (
        <span
          key={i}
          className="text-[22px] lg:text-[26px] leading-none select-none"
          style={{ color: g.color, opacity: 0.4 }}
          aria-hidden="true"
        >
          {g.char}
        </span>
      ))}
    </div>
  )
}
