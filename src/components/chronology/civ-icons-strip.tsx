'use client'

// Minimal civilization icons as a decorative border strip.
// Each is a simple SVG glyph at 20x20, rendered at low opacity.

const ICONS = [
  // Pyramid (Egypt)
  <path key="pyramid" d="M10 3L18 17H2Z" />,
  // Ziggurat (Mesopotamia)
  <path key="ziggurat" d="M3 17h14M5 13h10M7 9h6M9 5h2" />,
  // Greek columns
  <path key="columns" d="M4 17V7M10 17V7M16 17V7M2 7h16M2 17h16M3 5h14" />,
  // Pagoda (China)
  <path key="pagoda" d="M10 2v16M6 6h8M4 10h12M2 14h16M7 6l3-4 3 4M5 10l5-4 5 4M3 14l7-4 7 4" />,
  // Dharma wheel (India)
  <path key="wheel" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM10 6v8M6.5 7.5l7 5M13.5 7.5l-7 5" />,
  // Stepped pyramid (Andes)
  <path key="andes" d="M2 17h16M4 14h12M6 11h8M8 8h4M9 5h2" />,
  // Torii gate (Japan)
  <path key="torii" d="M4 7h12M2 5h16M6 7v10M14 7v10M10 5V2" />,
  // Faravahar wings (Persia)
  <path key="persia" d="M10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 10C4 7 2 6 1 6M14 10c2-3 4-4 5-4M6 10C4 13 2 14 1 14M14 10c2 3 4 4 5 4M10 12v5" />,
  // Ship (Phoenicia)
  <path key="ship" d="M3 14c2 2 12 2 14 0M5 14V8l5-4 5 4v6M10 4V2" />,
  // Triskelion (Celts)
  <path key="celts" d="M10 10c0-4 3-7 3-7M10 10c3.5 2 7 0 7 0M10 10c-3.5 2-7 5-7 5" />,
]

export function CivIconsStrip() {
  return (
    <div className="flex items-center justify-center gap-5 py-2 overflow-hidden opacity-[0.12]">
      {ICONS.map((icon, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-foreground"
        >
          {icon}
        </svg>
      ))}
    </div>
  )
}
