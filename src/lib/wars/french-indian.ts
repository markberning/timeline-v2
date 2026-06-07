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
// generalization test): the F&I war has no geographic theatre grid, so it has exactly
// ONE theatre ('fi-battles', plum) that owns all 14 battles. The five PHASES are the
// war-story chapters (kind 'phase'), rendered through the shared reader in the oxblood
// story color — they are NOT theatres. So the Jump-to shows three things, same shape
// as the CW: the one theatre, the Story, and Off the Field. No geoScopeToggle.
//
// COLOURS below are placeholders (British redcoat red / French royal blue for the
// sides; an escalating per-phase palette) — tunable design values, not yet rendered.

import { WAR_STORY_COLOR, WAR_OFFFIELD_COLOR, THEATRE_PALETTE } from './layer-colors'
import type { WarConfig } from './types'

const WAR_ACCENT = '#8a7a66'

export const FRENCH_INDIAN: WarConfig = {
  id: 'french-indian',
  name: 'The French and Indian War',
  routeBase: '/war-french-indian',
  frontDoorId: 'fi',
  crumbShort: 'F&I',
  crumbFull: 'French & Indian War',
  laneNoun: 'Jump to',
  accent: WAR_ACCENT,
  castHref: '/war-french-indian/cast',
  geoScopeToggle: false,
  sides: [
    { code: 'br', label: 'British', short: 'British', cssVar: '--brit', color: { light: '#b13b3b', dark: '#d98a86' } },
    { code: 'fr', label: 'French', short: 'French', cssVar: '--french', color: { light: '#3a5fa5', dark: '#8aa6d8' } },
  ],
  lanes: [
    // The single THEATRE — F&I has no geography, so all 14 battles live in one
    // theatre, plum. This is the battle layer's one Jump-to entry; it links to the
    // home Battles tab. (The five phases below are the Story chapters, not theatres.)
    { id: 'fi-battles', kind: 'theatre', label: 'The Battles', short: 'Battles', href: '/war-french-indian?theatre=fi-battles', ready: true, color: THEATRE_PALETTE.plum, skinVar: '--fi-battles', mapHex: THEATRE_PALETTE.plum.dark },
    // The five PHASES are the war-story chapters. They render through the shared
    // reader as story chapters, so their narrative chrome is the oxblood story color
    // (skinVar --warstory) — NOT a theatre color. Their own `color` is unused now
    // (battles point at the single theatre above; the Story spine carries no dots).
    { id: 'ohio-spark', kind: 'phase', label: 'The Ohio Spark', short: 'Ohio', href: '/war-french-indian/ohio-spark', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'disaster', kind: 'phase', label: 'Years of Disaster', short: 'Disaster', href: '/war-french-indian/disaster', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'pitts-turn', kind: 'phase', label: "Pitt's Turn", short: "Pitt's Turn", href: '/war-french-indian/pitts-turn', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'conquest', kind: 'phase', label: 'The Conquest of Canada', short: 'Conquest', href: '/war-french-indian/conquest', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'peace-fuse', kind: 'phase', label: 'The Peace and Its Fuse', short: 'The Peace', href: '/war-french-indian/peace-fuse', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    // Story spine lands on the home's Story tab (the phase list).
    { id: 'fi-story', kind: 'story', label: 'The War Story', short: 'Story', href: '/war-french-indian/story', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'offfield', kind: 'offfield', label: 'Off the Battlefield', short: 'Off-Field', href: '/war-french-indian/off-the-battlefield', ready: true, color: WAR_OFFFIELD_COLOR, mapHex: '#d96a26' },
  ],
  // All battles live in the single 'fi-battles' theatre (plum). The year/phase
  // comments below are just chronological signposts. hook/href/img set at build time.
  battles: [
    // ── The Ohio Spark (1754) ──
    { id: 'fi-jumonville', name: 'Jumonville Glen', year: 1754, m: 5, mo: 'May', place: 'Fayette Co., PA', theatre: 'fi-battles', size: 'm', href: '/war-french-indian/battles/jumonville-glen', img: '/war-img/fi-the-spark-map.jpg' },
    { id: 'fi-fort-necessity', name: 'Fort Necessity', year: 1754, m: 7, mo: 'Jul', place: 'Great Meadows, PA', theatre: 'fi-battles', size: 'm', href: '/war-french-indian/battles/fort-necessity', img: '/war-img/fi-new-france-map.jpg' },
    // ── Years of Disaster (1755–57) ──
    { id: 'fi-monongahela', name: 'The Monongahela', year: 1755, m: 7, mo: 'Jul', place: 'Braddock, PA', theatre: 'fi-battles', size: 'l', href: '/war-french-indian/battles/monongahela', img: '/war-img/fi-monongahela-defeat.jpg' },
    { id: 'fi-lake-george', name: 'Lake George', year: 1755, m: 9, mo: 'Sep', place: 'Lake George, NY', theatre: 'fi-battles', size: 'm', href: '/war-french-indian/battles/lake-george', img: '/war-img/fi-lake-champlain-corridor-map.jpg' },
    { id: 'fi-oswego', name: 'Fort Oswego', year: 1756, m: 8, mo: 'Aug', place: 'Oswego, NY', theatre: 'fi-battles', size: 's', href: '/war-french-indian/battles/fort-oswego' },
    { id: 'fi-fort-william-henry', name: 'Fort William Henry', year: 1757, m: 8, mo: 'Aug', place: 'Lake George, NY', theatre: 'fi-battles', size: 'l', href: '/war-french-indian/battles/fort-william-henry' },
    // ── Pitt's Turn (1758) ──
    { id: 'fi-carillon', name: 'Carillon (Ticonderoga)', year: 1758, m: 7, mo: 'Jul', place: 'Ticonderoga, NY', theatre: 'fi-battles', size: 'm', href: '/war-french-indian/battles/carillon' },
    { id: 'fi-louisbourg', name: 'Louisbourg', year: 1758, m: 7, mo: 'Jun–Jul', place: 'Île-Royale (Cape Breton)', theatre: 'fi-battles', size: 'l', href: '/war-french-indian/battles/louisbourg' },
    { id: 'fi-frontenac', name: 'Fort Frontenac', year: 1758, m: 8, mo: 'Aug', place: 'Kingston, ON', theatre: 'fi-battles', size: 's', href: '/war-french-indian/battles/fort-frontenac' },
    { id: 'fi-fort-duquesne', name: 'Fort Duquesne', year: 1758, m: 11, mo: 'Nov', place: 'Pittsburgh, PA', theatre: 'fi-battles', size: 'm', href: '/war-french-indian/battles/fort-duquesne' },
    // ── The Conquest of Canada (1759–60) ──
    { id: 'fi-niagara', name: 'Fort Niagara', year: 1759, m: 7, mo: 'Jul', place: 'Youngstown, NY', theatre: 'fi-battles', size: 'm', href: '/war-french-indian/battles/fort-niagara' },
    { id: 'fi-quebec', name: 'Quebec (Plains of Abraham)', year: 1759, m: 9, mo: 'Sep', place: 'Quebec City', theatre: 'fi-battles', size: 'xl', href: '/war-french-indian/battles/quebec' },
    { id: 'fi-sainte-foy', name: 'Sainte-Foy', year: 1760, m: 4, mo: 'Apr', place: 'Quebec City', theatre: 'fi-battles', size: 'm', href: '/war-french-indian/battles/sainte-foy' },
    { id: 'fi-montreal', name: 'Montreal', year: 1760, m: 9, mo: 'Sep', place: 'Montreal, QC', theatre: 'fi-battles', size: 'l', href: '/war-french-indian/battles/montreal' },
  ],
  // Off the battlefield — the heart of this war (weighted at least as heavily as the
  // battles). type uses the same vocabulary as the Civil War themes.
  themes: [
    { id: 'fi-ohio-company', name: 'The Ohio Country & the Ohio Company', short: 'The Ohio Country', phase: 'causes', type: 'CAUSE', size: 'l', date: '1748–1754', year: 1750, m: 1, href: '/war-french-indian/off-the-battlefield/ohio-company' },
    { id: 'fi-native-alliances', name: 'The Contest for Native Alliances', short: 'Native Alliances', phase: 'causes', type: 'SOCIETY', size: 'l', date: '1754–1763', year: 1754, m: 1, href: '/war-french-indian/off-the-battlefield/native-alliances' },
    { id: 'fi-albany-plan', name: 'The Albany Congress & the Plan of Union', short: 'The Albany Congress', phase: 'causes', type: 'POLITICS', size: 'm', date: '1754', year: 1754, m: 6, href: '/war-french-indian/off-the-battlefield/albany-plan' },
    { id: 'fi-acadian-expulsion', name: 'The Acadian Expulsion', short: 'The Acadian Expulsion', phase: 'hard', type: 'AFTERMATH', size: 'l', date: '1755–1764', year: 1755, m: 8, href: '/war-french-indian/off-the-battlefield/acadian-expulsion' },
    { id: 'fi-regulars-provincials', name: 'Regulars & Provincials', short: 'Regulars & Provincials', phase: 'hard', type: 'SOCIETY', size: 'm', date: '1754–1763', year: 1756, m: 1, href: '/war-french-indian/off-the-battlefield/regulars-provincials' },
    { id: 'fi-war-finance', name: 'War Finance & the Road to Taxation', short: 'War Finance', phase: 'after', type: 'POLITICS', size: 'l', date: '1763–1765', year: 1763, m: 6, href: '/war-french-indian/off-the-battlefield/war-finance' },
    { id: 'fi-treaty-paris', name: 'The Treaty of Paris & the Proclamation Line', short: 'The Treaty of Paris', phase: 'after', type: 'POLITICS', size: 'm', date: '1763', year: 1763, m: 2, href: '/war-french-indian/off-the-battlefield/treaty-of-paris' },
    { id: 'fi-pontiac', name: "Pontiac's War & the Aftermath for Native Nations", short: "Pontiac's War", phase: 'after', type: 'AFTERMATH', size: 'l', date: '1763–1766', year: 1763, m: 5, href: '/war-french-indian/off-the-battlefield/pontiacs-war' },
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
