// The American Civil War expressed as a WarConfig. This WRAPS the existing data
// files (civil-war-roster.ts, civil-war-commanders.ts) — they stay where they are
// and remain the live source of truth; this just re-expresses them in the general
// shape so the shared components can be driven by a config. Adding this changes
// nothing the Civil War renders today (it is the regression test for the multi-war
// refactor). See audits/war-second-war-plan.md.

import { MAJORS, THEMES, CHAPTERS } from '@/lib/civil-war-roster'
import { COMMANDERS, castIdForName } from '@/lib/civil-war-commanders'
import { WAR_STORY_COLOR, WAR_OFFFIELD_COLOR } from './layer-colors'
import type { WarConfig } from './types'

// Concrete hexes inlined here (not imported from the 'use client' war-chrome module,
// to keep this lib free of client-component imports). These mirror the existing
// values: lane `dot`/`light` = theatre-page THEATRE_DOT (saturated, legible in the
// breadcrumb portal + DottedMap); lane `dark` = the war-skin.css --th-* dark vars;
// side colours = --union/--confed (dark) and ACCENTS.blue/rust (light).
const WAR_ACCENT = '#8a7a66'

export const CIVIL_WAR: WarConfig = {
  id: 'civil-war',
  name: 'American Civil War',
  routeBase: '/war-civil-war',
  frontDoorId: 'cw',
  crumbShort: 'ACW',
  crumbFull: 'American Civil War',
  laneNoun: 'Jump to',
  accent: WAR_ACCENT,
  castHref: '/war-civil-war/cast',
  geoScopeToggle: true,
  sides: [
    { code: 'u', label: 'Union', short: 'Union', cssVar: '--union', color: { light: '#1d4ed8', dark: '#7c9bd1' } },
    { code: 'c', label: 'Confederate', short: 'CSA', cssVar: '--confed', color: { light: '#b44d3b', dark: '#df8158' } },
  ],
  lanes: [
    { id: 'east', kind: 'theatre', label: 'Eastern Theatre', short: 'Eastern', groupHead: 'Eastern', href: '/war-civil-war/eastern', ready: true, color: { light: '#8a5b86', dark: '#c79cd0', dot: '#8a5b86' }, skinVar: '--th-east', mapHex: '#c79cd0' },
    { id: 'west', kind: 'theatre', label: 'Western Theatre', short: 'Western', groupHead: 'Western', href: '/war-civil-war/western', ready: true, color: { light: '#4e8a52', dark: '#84c089', dot: '#4e8a52' }, skinVar: '--th-west', mapHex: '#84c089' },
    { id: 'tmis', kind: 'theatre', label: 'Trans-Mississippi', short: 'Trans-Miss', href: '/war-civil-war/trans-mississippi', ready: true, color: { light: '#b3852f', dark: '#d8b25a', dot: '#b3852f' }, skinVar: '--th-tmis', mapHex: '#d8b25a' },
    { id: 'naval', kind: 'theatre', label: 'Naval & Coastal', short: 'Naval', href: '/war-civil-war/naval', ready: true, color: { light: '#2c7d99', dark: '#5fb0cc', dot: '#2c7d99' }, skinVar: '--th-naval', mapHex: '#5fb0cc' },
    { id: 'howfought', kind: 'story', label: 'How the War Happened', short: 'Story', href: '/war-civil-war/how-the-war-was-fought', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'offfield', kind: 'offfield', label: 'Off the Battlefield', short: 'Off-Field', href: '/war-civil-war/off-the-battlefield', ready: true, color: WAR_OFFFIELD_COLOR, skinVar: '--otbf', mapHex: '#d96a26' },
  ],
  battles: MAJORS,
  themes: THEMES,
  chapters: CHAPTERS,
  commanders: COMMANDERS,
  castIdForName,
  // No sideFlags: every Civil War commander card carries a born-verified portrait.
}
