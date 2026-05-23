'use client'

import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { warHomeCrumbs, WAR_HOME_ACCENT } from '@/components/mode/theatre-page'
import { WarFrontDoor } from '@/components/mode/war-front-door'

// The War vertical's front door (the all-wars escalating spine). It wears the
// same breadcrumb bar as the rest of the war app (War › All Wars), NOT the
// Civ/War/Art/Music tab strip — switching verticals happens via the leftmost
// "War" crumb's dropdown. The WarFrontDoor's own dark-toggle is suppressed
// because the breadcrumb already carries one.
export default function WarHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb crumbs={warHomeCrumbs()} accent={WAR_HOME_ACCENT} />
      <WarFrontDoor showToggle={false} />
    </div>
  )
}
