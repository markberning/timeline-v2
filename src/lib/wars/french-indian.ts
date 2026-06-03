// The French and Indian War (1754–1763) as a WarConfig — war #2.
//
// SCAFFOLD ONLY. This is the locked scope (audits/war-pilot-french-indian.md) made
// concrete: the lanes, sides, battle/theme/chapter rosters. The factual metadata
// (names, years, months, places, lane grouping) is well-established scaffolding; the
// fact pack re-verifies every specific at authoring time. Deliberately omitted until
// the gated pipeline runs: `hook` teasers (house-voice prose), `href`/`img` (set as
// each section is BUILT, so unbuilt rows render "Soon" — same as the Civil War), and
// the `commanders` registry. Nothing renders this yet.
//
// STRUCTURE NOTE — different shape from the Civil War, on purpose (it's the
// generalization test): the F&I war has no geographic theatre grid. Its battles are
// grouped by chronological PHASE, and each phase IS also a story chapter. So `lanes`
// are the 5 phases (kind 'phase') plus the universal off-the-battlefield lane, and
// `chapters` mirrors the phases. No geoScopeToggle.
//
// COLOURS below are placeholders (British redcoat red / French royal blue for the
// sides; an escalating per-phase palette) — tunable design values, not yet rendered.

import type { WarConfig } from './types'

const WAR_ACCENT = '#8a7a66'

export const FRENCH_INDIAN: WarConfig = {
  id: 'french-indian',
  name: 'The French and Indian War',
  routeBase: '/war-french-indian',
  frontDoorId: 'fi',
  crumbShort: 'F&I',
  crumbFull: 'The French and Indian War',
  laneNoun: 'Phase',
  accent: WAR_ACCENT,
  geoScopeToggle: false,
  sides: [
    { code: 'br', label: 'British', short: 'British', cssVar: '--brit', color: { light: '#b13b3b', dark: '#d98a86' } },
    { code: 'fr', label: 'French', short: 'French', cssVar: '--french', color: { light: '#3a5fa5', dark: '#8aa6d8' } },
  ],
  lanes: [
    { id: 'ohio-spark', kind: 'phase', label: 'The Ohio Spark', short: 'Ohio', href: '/war-french-indian/ohio-spark', ready: true, color: { light: '#4e8a52', dark: '#84c089', dot: '#4e8a52' }, mapHex: '#84c089' },
    { id: 'disaster', kind: 'phase', label: 'Years of Disaster', short: 'Disaster', href: '/war-french-indian/disaster', ready: true, color: { light: '#b3502f', dark: '#d98a5a', dot: '#b3502f' }, mapHex: '#d98a5a' },
    { id: 'pitts-turn', kind: 'phase', label: "Pitt's Turn", short: "Pitt's Turn", href: '/war-french-indian/pitts-turn', ready: true, color: { light: '#b3852f', dark: '#d8b25a', dot: '#b3852f' }, mapHex: '#d8b25a' },
    { id: 'conquest', kind: 'phase', label: 'The Conquest of Canada', short: 'Conquest', href: '/war-french-indian/conquest', ready: true, color: { light: '#2c7d99', dark: '#5fb0cc', dot: '#2c7d99' }, mapHex: '#5fb0cc' },
    { id: 'peace-fuse', kind: 'phase', label: 'The Peace and Its Fuse', short: 'The Peace', href: '/war-french-indian/peace-fuse', ready: true, color: { light: '#8a5b86', dark: '#c79cd0', dot: '#8a5b86' }, mapHex: '#c79cd0' },
    { id: 'offfield', kind: 'offfield', label: 'Off the Battlefield', short: 'Off-Field', href: '/war-french-indian/off-the-battlefield', ready: false, color: { light: '#c2611f', dark: '#e07f3c', dot: '#d96a26' }, mapHex: '#d96a26' },
  ],
  // Grouped by phase (theatre = phase id). hook/href/img set at build time.
  battles: [
    // ── The Ohio Spark (1754) ──
    { id: 'fi-jumonville', name: 'Jumonville Glen', year: 1754, m: 5, mo: 'May', place: 'Fayette Co., PA', theatre: 'ohio-spark', size: 'm' },
    { id: 'fi-fort-necessity', name: 'Fort Necessity', year: 1754, m: 7, mo: 'Jul', place: 'Great Meadows, PA', theatre: 'ohio-spark', size: 'm' },
    // ── Years of Disaster (1755–57) ──
    { id: 'fi-monongahela', name: 'The Monongahela', year: 1755, m: 7, mo: 'Jul', place: 'Braddock, PA', theatre: 'disaster', size: 'l' },
    { id: 'fi-lake-george', name: 'Lake George', year: 1755, m: 9, mo: 'Sep', place: 'Lake George, NY', theatre: 'disaster', size: 'm' },
    { id: 'fi-oswego', name: 'Fort Oswego', year: 1756, m: 8, mo: 'Aug', place: 'Oswego, NY', theatre: 'disaster', size: 's' },
    { id: 'fi-fort-william-henry', name: 'Fort William Henry', year: 1757, m: 8, mo: 'Aug', place: 'Lake George, NY', theatre: 'disaster', size: 'l' },
    // ── Pitt's Turn (1758) ──
    { id: 'fi-carillon', name: 'Carillon (Ticonderoga)', year: 1758, m: 7, mo: 'Jul', place: 'Ticonderoga, NY', theatre: 'pitts-turn', size: 'm' },
    { id: 'fi-louisbourg', name: 'Louisbourg', year: 1758, m: 7, mo: 'Jun–Jul', place: 'Île-Royale (Cape Breton)', theatre: 'pitts-turn', size: 'l' },
    { id: 'fi-frontenac', name: 'Fort Frontenac', year: 1758, m: 8, mo: 'Aug', place: 'Kingston, ON', theatre: 'pitts-turn', size: 's' },
    { id: 'fi-fort-duquesne', name: 'Fort Duquesne', year: 1758, m: 11, mo: 'Nov', place: 'Pittsburgh, PA', theatre: 'pitts-turn', size: 'm' },
    // ── The Conquest of Canada (1759–60) ──
    { id: 'fi-niagara', name: 'Fort Niagara', year: 1759, m: 7, mo: 'Jul', place: 'Youngstown, NY', theatre: 'conquest', size: 'm' },
    { id: 'fi-quebec', name: 'Quebec (Plains of Abraham)', year: 1759, m: 9, mo: 'Sep', place: 'Quebec City', theatre: 'conquest', size: 'xl' },
    { id: 'fi-sainte-foy', name: 'Sainte-Foy', year: 1760, m: 4, mo: 'Apr', place: 'Quebec City', theatre: 'conquest', size: 'm' },
    { id: 'fi-montreal', name: 'Montreal', year: 1760, m: 9, mo: 'Sep', place: 'Montreal, QC', theatre: 'conquest', size: 'l' },
  ],
  // Off the battlefield — the heart of this war (weighted at least as heavily as the
  // battles). type uses the same vocabulary as the Civil War themes.
  themes: [
    { id: 'fi-ohio-company', name: 'The Ohio Country & the Ohio Company', phase: 'causes', type: 'CAUSE', size: 'l', date: '1748–1754', year: 1750, m: 1 },
    { id: 'fi-native-alliances', name: 'The Contest for Native Alliances', phase: 'causes', type: 'SOCIETY', size: 'l', date: '1754–1763', year: 1754, m: 1 },
    { id: 'fi-albany-plan', name: 'The Albany Congress & the Plan of Union', phase: 'causes', type: 'POLITICS', size: 'm', date: '1754', year: 1754, m: 6 },
    { id: 'fi-acadian-expulsion', name: 'The Acadian Expulsion', phase: 'hard', type: 'AFTERMATH', size: 'l', date: '1755–1764', year: 1755, m: 8 },
    { id: 'fi-regulars-provincials', name: 'Regulars & Provincials', phase: 'hard', type: 'SOCIETY', size: 'm', date: '1754–1763', year: 1756, m: 1 },
    { id: 'fi-war-finance', name: 'War Finance & the Road to Taxation', phase: 'after', type: 'POLITICS', size: 'l', date: '1763–1765', year: 1763, m: 6 },
    { id: 'fi-treaty-paris', name: 'The Treaty of Paris & the Proclamation Line', phase: 'after', type: 'POLITICS', size: 'm', date: '1763', year: 1763, m: 2 },
    { id: 'fi-pontiac', name: "Pontiac's War & the Aftermath for Native Nations", phase: 'after', type: 'AFTERMATH', size: 'l', date: '1763–1766', year: 1763, m: 5 },
  ],
  // The war-story spine — one chapter per phase (each phase's narrative).
  chapters: [
    { id: 'ohio-spark', name: 'The Ohio Spark', phase: 'outbreak', type: 'MILITARY', size: 'l', date: '1754', year: 1754, m: 1, href: '/war-french-indian/ohio-spark' },
    { id: 'disaster', name: 'Years of Disaster', phase: 'hard', type: 'MILITARY', size: 'l', date: '1755–1757', year: 1755, m: 1, href: '/war-french-indian/disaster' },
    { id: 'pitts-turn', name: "Pitt's Turn", phase: 'turning', type: 'MILITARY', size: 'l', date: '1758', year: 1758, m: 1, href: '/war-french-indian/pitts-turn' },
    { id: 'conquest', name: 'The Conquest of Canada', phase: 'total', type: 'MILITARY', size: 'l', date: '1759–1760', year: 1759, m: 1, href: '/war-french-indian/conquest' },
    { id: 'peace-fuse', name: 'The Peace and Its Fuse', phase: 'after', type: 'MILITARY', size: 'l', date: '1760–1763', year: 1760, m: 1, href: '/war-french-indian/peace-fuse' },
  ],
  commanders: {},
}
