'use client'

// The Art vertical's front door (Era Hub + Climb tree). It wears the shared
// section-home bar (just the top thread bar — the era hub + influence tree handle
// browsing, so no breadcrumb pill row here). Search + dark live in the ThreadBar;
// the front door's own dark-toggle is suppressed.

import { SectionHomeBar } from '@/components/section-home-bar'
import { ArtFrontDoor } from '@/components/mode/art-front-door'

export default function ArtHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <SectionHomeBar />
      <ArtFrontDoor showToggle={false} />
    </div>
  )
}
