'use client'

// COMMANDER page for the American Revolution — the Revolution binding for the shared
// CommanderArc. The Revolution has a single battle lane, so the rail is tinted the
// battles green and each leg is labelled by place rather than theatre. Supplies the
// war-specific data and delegates layout to <CommanderArc>; also exports the cast
// breadcrumb binder. Parallel to fi-commander-page.tsx.

import { CommanderArc, type CommanderArcConfig, type ArcBattle } from '@/components/mode/commander-arc'
import { castCrumbs, type CastSide } from '@/components/mode/theatre-page'
import { REVOLUTION_COMMANDERS, type RevSide } from '@/lib/revolution-commanders'
import { REVOLUTION } from '@/lib/wars/revolution'

const SIDE: Record<RevSide, { label: string; v: string }> = {
  u: { label: 'American', v: 'var(--rev-us)' },
  c: { label: 'British', v: 'var(--rev-gb)' },
}
const RAIL = 'var(--rev-battles)' // the single Revolution battle-lane colour (green)

const byId = Object.fromEntries(REVOLUTION.battles.map(b => [b.id, b])) as Record<string, ArcBattle>

// The Revolution cast-bar binding: side metadata (concrete hexes — the dropdown
// portals outside .war-skin) + the bound crumb builder the cast hub and every
// commander arc call. One binder per war = how the shared cast bar reaches a new war.
const REV_CAST_SIDES: CastSide[] = [
  { code: 'u', label: 'American', dot: '#345080' },
  { code: 'c', label: 'British', dot: '#b13b3b' },
]
export function revolutionCastCrumbs(commanderId?: string) {
  return castCrumbs(REVOLUTION, { commanders: Object.values(REVOLUTION_COMMANDERS), sides: REV_CAST_SIDES, commanderId })
}

const sortKey = (b: ArcBattle) => b.year * 100 + b.m

export function RevCommanderPage({ id }: { id: string }) {
  const c = REVOLUTION_COMMANDERS[id]
  if (!c) return null
  const side = SIDE[c.side]
  const cfg: CommanderArcConfig = {
    commander: c,
    byId,
    sideLabel: side.label,
    sideVar: side.v,
    legColor: () => RAIL,
    legLabel: (b) => b.place,
    sortKey,
    crumbs: revolutionCastCrumbs(id),
    backHref: '/war-revolution/cast',
  }
  return <CommanderArc cfg={cfg} />
}
