'use client'

// The War vertical's front door (the all-wars escalating spine). It wears the
// shared section-home bar (just the top thread bar — the front door's own spine +
// theatre map handle browsing, so no breadcrumb pill row here). Search + dark
// live in the ThreadBar; the WarFrontDoor's own dark-toggle is suppressed.

import { SectionHomeBar } from '@/components/section-home-bar'
import { WarFrontDoor } from '@/components/mode/war-front-door'

export default function WarHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <SectionHomeBar />
      <WarFrontDoor showToggle={false} />
    </div>
  )
}
