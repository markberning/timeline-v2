'use client'

// COMMANDER page — the Civil War's binding for the shared CommanderArc. It supplies
// the war-specific data (the cast registry, the battle roster, side colours, the
// per-theatre rail colours + theatre kicker labels, and the day-level sort
// tiebreaker) and delegates all layout to <CommanderArc>. Also exports the cast
// breadcrumb binder the cast hub + arc share.

import { CommanderArc, type CommanderArcConfig, type ArcBattle } from '@/components/mode/commander-arc'
import { castCrumbs, type CastSide } from '@/components/mode/theatre-page'
import { CIVIL_WAR } from '@/lib/wars/civil-war'
import { COMMANDERS } from '@/lib/civil-war-commanders'
import { MAJORS } from '@/lib/civil-war-roster'

// theatre rail colours = the war-skin theatre palette (light/dark-adapting CSS vars).
// The labels are the established cast-arc kicker names (note Trans-Mississippi is
// spelled in full here, unlike the breadcrumb's short 'Trans-Miss').
const TH: Record<string, { label: string; v: string }> = {
  east: { label: 'Eastern', v: 'var(--th-east)' },
  west: { label: 'Western', v: 'var(--th-west)' },
  tmis: { label: 'Trans-Mississippi', v: 'var(--th-tmis)' },
  naval: { label: 'Naval', v: 'var(--th-naval)' },
}
const SIDE: Record<string, { label: string; v: string }> = {
  U: { label: 'Union', v: 'var(--union)' },
  C: { label: 'Confederate', v: 'var(--confed)' },
}

const byId = Object.fromEntries(MAJORS.map(b => [b.id, b])) as Record<string, ArcBattle>

// The Civil War's cast-bar binding: side metadata (concrete hexes — the dropdown
// portals outside .war-skin so CSS vars can't resolve) + the bound crumb builder the
// cast hub and every commander arc call. One binder per war = how the shared cast bar
// reaches a new war (see castCrumbs in theatre-page).
const CW_CAST_SIDES: CastSide[] = [
  { code: 'U', label: 'Union', dot: '#1d4ed8' },
  { code: 'C', label: 'Confederate', dot: '#b44d3b' },
]
export function civilWarCastCrumbs(commanderId?: string) {
  return castCrumbs(CIVIL_WAR, { commanders: Object.values(COMMANDERS), sides: CW_CAST_SIDES, commanderId })
}

// Day-of-month tiebreaker for battles that share a year+month (the roster only
// stores month precision). Covers every shared-month group so a commander who
// fought two battles in one month is ordered right (Wilderness before
// Spotsylvania, Cold Harbor before Petersburg, Five Forks before Appomattox…).
const BATTLE_DAY: Record<string, number> = {
  'w-donelson': 13, 't-pearidge': 7, 't-glorieta': 26, 'w-shiloh': 6, 't-island10': 7, 'n-jacksonstphilip': 24,
  'e-gainesmill': 27, 'e-malvern': 1, 'e-bullrun2': 28, 'w-corinth': 3, 'w-perryville': 8,
  'e-fredericksburg': 11, 'w-stonesriver': 31, 'e-chancellorsville': 1, 'w-championhill': 16,
  'e-gettysburg': 1, 'w-vicksburg': 4, 't-porthudson': 9, 'w-lookout': 24, 'w-missionary': 25,
  'e-wilderness': 5, 'e-spotsylvania': 8, 'e-coldharbor': 1, 'e-petersburg2': 15,
  'e-opequon': 19, 'w-jonesborough': 1, 'e-cedarcreek': 19, 't-westport': 23, 'w-franklin': 30,
  'n-fortfisher2': 13, 'e-fortstedman': 25, 'w-bentonville': 19,
  'e-fiveforks': 1, 'e-petersburg3': 2, 'e-appomattox': 9, 'w-blakeley': 9,
}
const sortKey = (b: ArcBattle) => b.year * 10000 + b.m * 100 + (BATTLE_DAY[b.id] ?? 15)

export function CommanderPage({ id }: { id: string }) {
  const c = COMMANDERS[id]
  if (!c) return null
  const side = SIDE[c.side]
  const cfg: CommanderArcConfig = {
    commander: c,
    byId,
    sideLabel: side.label,
    sideVar: side.v,
    legColor: (b) => TH[b.theatre]?.v ?? side.v,
    legLabel: (b) => TH[b.theatre]?.label ?? '',
    sortKey,
    crumbs: civilWarCastCrumbs(id),
    backHref: '/war-civil-war/cast',
  }
  return <CommanderArc cfg={cfg} />
}
