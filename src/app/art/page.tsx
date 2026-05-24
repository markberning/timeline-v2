'use client'

import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import { ArtFrontDoor, ART_ACCENT } from '@/components/mode/art-front-door'

// The Art vertical's front door (Era Hub + Climb tree). The thread switch lives
// in the ThreadBar tier above (baked into WarBreadcrumb); this trail is just the
// where-am-I rung (All eras). The front door's own dark-toggle is suppressed
// because the breadcrumb already carries one.
//
// NOTE: WarBreadcrumb is the shared (mode-agnostic) breadcrumb; it's still
// named for its first user. Extracting it to a neutral DrilldownBreadcrumb is a
// follow-up cleanup (see audits/art-vertical.md §2).

function artHomeCrumbs(): Crumb[] {
  return [
    { label: 'All eras', active: true },
  ]
}

export default function ArtHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb crumbs={artHomeCrumbs()} accent={ART_ACCENT} />
      <ArtFrontDoor showToggle={false} />
    </div>
  )
}
