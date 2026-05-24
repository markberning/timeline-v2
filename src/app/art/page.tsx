'use client'

import { WarBreadcrumb, type Crumb, type CrumbOption } from '@/components/mode/war-chrome'
import { ArtFrontDoor, ART_ACCENT } from '@/components/mode/art-front-door'
import { TL_KIND_ORDER, TL_KIND_ACCENT, type TlKind } from '@/lib/navigator-tls'

// The Art vertical's front door (Era Hub + Climb tree). It wears the same
// breadcrumb bar as the rest of the app (Art › All eras), NOT the
// Civ/War/Art/Music tab strip — switching verticals happens via the leftmost
// "Art" crumb's dropdown. The front door's own dark-toggle is suppressed
// because the breadcrumb already carries one.
//
// NOTE: WarBreadcrumb is the shared (mode-agnostic) breadcrumb; it's still
// named for its first user. Extracting it to a neutral DrilldownBreadcrumb is a
// follow-up cleanup (see audits/art-vertical.md §2).

const MODE_SHORT: Record<TlKind, string> = { civ: 'Civ', war: 'War', art: 'Art', music: 'Music' }
const MODE_HREF: Record<TlKind, string | undefined> = { civ: '/civ', war: '/war', art: '/art', music: undefined }

function artHomeCrumbs(): Crumb[] {
  const modeOptions: CrumbOption[] = [{ label: 'Stuff Happened', href: '/' }, ...TL_KIND_ORDER.map(k => ({ label: MODE_SHORT[k], href: MODE_HREF[k], disabled: !MODE_HREF[k], accentBar: TL_KIND_ACCENT[k], icon: `/thread-icons/${k}.webp` }))]
  return [
    { label: 'Art', href: '/art', options: modeOptions, currentLabel: 'Art', accentBar: TL_KIND_ACCENT.art, icon: '/thread-icons/art.webp' },
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
