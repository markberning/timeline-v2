'use client'

// Music vertical — coming soon. Wears the shared editorial WarHeader chrome (like
// civ/war/art/philosophy) in a `.war-skin` wrapper, with a lean coming-soon body.

import { WarHeader } from '@/components/mode/war-header'
import '../war-civil-war/war-skin.css'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const MUTED = 'color-mix(in srgb, var(--foreground) 64%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 42%, transparent)'

export default function Music() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="war-skin" style={{ flexShrink: 0, minHeight: 0, background: 'transparent' }}>
        <WarHeader active="music" title="Music" subtitle="Stuff Happened · Music" backHref="/" />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 32px', gap: 14 }}>
        <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: FAINT }}>
          Coming soon
        </div>
        <h1 style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 600, letterSpacing: -0.3, margin: 0 }}>Music</h1>
        <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.55, color: MUTED, maxWidth: 420, margin: 0 }}>
          Era by era, sampleable — hear what each age actually sounded like.
        </p>
      </div>
    </div>
  )
}
