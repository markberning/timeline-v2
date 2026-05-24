'use client'

import { WarBreadcrumb, WAR_ACCENT } from '@/components/mode/war-chrome'
import { warHomeCrumbs } from '@/components/mode/theatre-page'
import { WarFrontDoor } from '@/components/mode/war-front-door'

// The War vertical's front door (the all-wars escalating spine). The thread
// switch lives in the ThreadBar tier above (baked into WarBreadcrumb); this
// trail is just the where-am-I rung (All Wars). The WarFrontDoor's own
// dark-toggle is suppressed because the breadcrumb already carries one.
export default function WarHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb crumbs={warHomeCrumbs()} accent={WAR_ACCENT} />
      <WarFrontDoor showToggle={false} />
    </div>
  )
}
