'use client'

// COMMANDER page for the French & Indian War — the F&I binding for the shared
// CommanderArc. F&I has a single theatre, so the rail is tinted plum and each leg
// is labelled by place rather than theatre. Supplies the war-specific data and
// delegates layout to <CommanderArc>; also exports the cast breadcrumb binder.

import { CommanderArc, type CommanderArcConfig, type ArcBattle } from '@/components/mode/commander-arc'
import { castCrumbs, type CastSide } from '@/components/mode/theatre-page'
import { FI_COMMANDERS, type FISide } from '@/lib/french-indian-commanders'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const SIDE: Record<FISide, { label: string; v: string }> = {
  u: { label: 'British', v: 'var(--brit)' },
  c: { label: 'French', v: 'var(--french)' },
}
const RAIL = 'var(--fi-battles)' // the single F&I theatre colour (plum)

const byId = Object.fromEntries(FRENCH_INDIAN.battles.map(b => [b.id, b])) as Record<string, ArcBattle>

// The F&I cast-bar binding: side metadata (concrete hexes — the dropdown portals
// outside .war-skin) + the bound crumb builder the cast hub and every commander arc
// call. One binder per war = how the shared cast bar reaches a new war (castCrumbs).
const FI_CAST_SIDES: CastSide[] = [
  { code: 'u', label: 'British', dot: '#b13b3b' },
  { code: 'c', label: 'French', dot: '#3a5fa5' },
]
export function frenchIndianCastCrumbs(commanderId?: string) {
  return castCrumbs(FRENCH_INDIAN, { commanders: Object.values(FI_COMMANDERS), sides: FI_CAST_SIDES, commanderId })
}

const sortKey = (b: ArcBattle) => b.year * 100 + b.m

export function FICommanderPage({ id }: { id: string }) {
  const c = FI_COMMANDERS[id]
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
    crumbs: frenchIndianCastCrumbs(id),
    backHref: '/war-french-indian/cast',
  }
  return <CommanderArc cfg={cfg} />
}
