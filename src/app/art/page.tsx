'use client'

// The Art vertical's front door (Era Hub + Climb tree). Wears the shared editorial
// WarHeader chrome (back · wordmark · theme · search · menu) like civ/war/philosophy,
// in a `.war-skin` wrapper; the era hub + influence tree handle browsing, so no
// breadcrumb pill row here.

import { WarHeader } from '@/components/mode/war-header'
import { ArtFrontDoor } from '@/components/mode/art-front-door'
import '../war-civil-war/war-skin.css'

export default function ArtHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="war-skin" style={{ flexShrink: 0, minHeight: 0, background: 'transparent' }}>
        <WarHeader active="art" title="Art" subtitle="Stuff Happened · Art" backHref="/" />
      </div>
      <ArtFrontDoor showToggle={false} />
    </div>
  )
}
