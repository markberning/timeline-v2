'use client'

// Detailed civilization icons as a decorative border strip.
// Each icon uses its region color and has filled/detailed paths.

import { REGION_COLORS } from '@/lib/navigator-tls'

const near = REGION_COLORS['near-east']
const africa = REGION_COLORS['africa']
const asia = REGION_COLORS['asia']
const europe = REGION_COLORS['europe']
const americas = REGION_COLORS['americas']

interface Icon {
  color: string
  paths: React.ReactNode
}

const ICONS: Icon[] = [
  // Pyramid (Egypt) — Africa
  {
    color: africa,
    paths: (
      <>
        <polygon points="16,28 32,4 48,28" fill="currentColor" opacity="0.25" />
        <polygon points="16,28 32,4 48,28" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="32" y1="4" x2="32" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <polygon points="24,28 32,14 40,28" fill="currentColor" opacity="0.15" />
      </>
    ),
  },
  // Ziggurat (Mesopotamia) — Near East
  {
    color: near,
    paths: (
      <>
        <rect x="6" y="24" width="20" height="4" rx="0.5" fill="currentColor" opacity="0.3" />
        <rect x="9" y="19" width="14" height="5" rx="0.5" fill="currentColor" opacity="0.4" />
        <rect x="12" y="14" width="8" height="5" rx="0.5" fill="currentColor" opacity="0.5" />
        <rect x="14" y="9" width="4" height="5" rx="0.5" fill="currentColor" opacity="0.7" />
        <rect x="6" y="24" width="20" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="19" width="14" height="5" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="14" width="8" height="5" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="9" width="4" height="5" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  // Greek temple (Europe)
  {
    color: europe,
    paths: (
      <>
        <polygon points="4,10 16,3 28,10" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="10" width="24" height="2" fill="currentColor" opacity="0.5" />
        <rect x="7" y="12" width="2.5" height="14" fill="currentColor" opacity="0.6" />
        <rect x="13" y="12" width="2.5" height="14" fill="currentColor" opacity="0.6" />
        <rect x="19" y="12" width="2.5" height="14" fill="currentColor" opacity="0.6" />
        <rect x="24" y="12" width="2.5" height="14" fill="currentColor" opacity="0.6" />
        <rect x="4" y="26" width="24" height="2" fill="currentColor" opacity="0.5" />
      </>
    ),
  },
  // Pagoda (China) — Asia
  {
    color: asia,
    paths: (
      <>
        <polygon points="6,28 16,23 26,28" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="8,23 16,18 24,23" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="10,18 16,13 22,18" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="12,13 16,8 20,13" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5" />
        <line x1="16" y1="8" x2="16" y2="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="3" r="1" fill="currentColor" />
      </>
    ),
  },
  // Dharma wheel (India) — Asia
  {
    color: asia,
    paths: (
      <>
        <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="3.5" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
          const rad = (deg * Math.PI) / 180
          return (
            <line
              key={deg}
              x1={16 + Math.cos(rad) * 3.5}
              y1={16 + Math.sin(rad) * 3.5}
              x2={16 + Math.cos(rad) * 11}
              y2={16 + Math.sin(rad) * 11}
              stroke="currentColor"
              strokeWidth="1.5"
            />
          )
        })}
      </>
    ),
  },
  // Stepped pyramid (Andes) — Americas
  {
    color: americas,
    paths: (
      <>
        <path d="M4,28 H28 V24 H24 V20 H20 V16 H18 V12 H14 V16 H12 V20 H8 V24 H4 Z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="16" y1="12" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="5" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  // Torii gate (Japan) — Asia
  {
    color: asia,
    paths: (
      <>
        <line x1="8" y1="10" x2="8" y2="28" stroke="currentColor" strokeWidth="2.5" />
        <line x1="24" y1="10" x2="24" y2="28" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4,8 Q16,4 28,8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <line x1="6" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  // Winged sun disk (Persia) — Near East
  {
    color: near,
    paths: (
      <>
        <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12,16 C9,10 4,8 1,9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12,16 C9,12 5,11 2,12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12,16 C10,14 6,14 3,15" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20,16 C23,10 28,8 31,9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20,16 C23,12 27,11 30,12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20,16 C22,14 26,14 29,15" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  // Viking/Phoenician ship — Europe
  {
    color: europe,
    paths: (
      <>
        <path d="M4,20 Q16,26 28,20" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2,18 Q16,24 30,18" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="16" y1="18" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16,7 L24,12 L16,16" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
        <path d="M2,18 L4,14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30,18 L28,14" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  // Spiral / Triskelion (Celts) — Europe
  {
    color: europe,
    paths: (
      <>
        <path d="M16,16 C16,10 20,6 20,6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16,16 C20,19 24,17 24,17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16,16 C12,19 8,17 8,17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20,6 C22,6 22,9 20,10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24,17 C25,19 23,21 21,20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8,17 C6,18 7,21 9,20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
]

export function CivIconsStrip() {
  return (
    <div className="flex items-center justify-center gap-4 lg:gap-6 py-1.5 overflow-hidden shrink-0">
      {ICONS.map((icon, i) => (
        <svg
          key={i}
          width="28"
          height="28"
          viewBox="0 0 32 32"
          className="shrink-0"
          style={{ color: icon.color, opacity: 0.45 }}
        >
          {icon.paths}
        </svg>
      ))}
    </div>
  )
}
