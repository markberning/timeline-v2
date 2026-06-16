// Per-war configuration — the keystone of the multi-war war vertical.
//
// The shared chrome (WarBreadcrumb / WarSectionNav / WarHeader / battle-reader /
// battle-dossier / commander-page) is structurally war-agnostic; what differs per
// war is DATA: the sides, the lanes (theatres or phases), the battle/theme/chapter
// rosters, and the commanders. One `WarConfig` per war captures all of it, so the
// components can be driven by a config instead of importing the Civil War singletons
// directly. See audits/war-second-war-plan.md.
//
// These general shapes are deliberately LOOSE (string ids, not literal unions) so
// the existing Civil War types satisfy them structurally with zero churn:
//   Major   (theatre: 'east'|… , size: 's'|…)  is assignable to WarBattle
//   Theme   (type: SpineType)                   is assignable to WarTheme
//   Commander (side: 'U'|'C')                   is assignable to WarCommander

export type WarSize = 's' | 'm' | 'l' | 'xl'

// A belligerent. Civil War = Union / Confederate; F&I = British / French. (Native
// nations are NOT a side — they are a first-class presence woven through the prose
// and their own themes; see audits/war-pilot-french-indian.md.)
export interface WarSide {
  code: string                                   // 'u'|'c' ; 'br'|'fr'
  label: string                                  // 'Union' / 'British'
  short?: string
  cssVar: string                                 // the CSS custom prop the skin reads, e.g. '--union'
  color: { light: string; dark: string }         // light/dark-mode hues for the var
}

// A war's grouping lanes. Civil War groups battles by GEOGRAPHIC THEATRE
// (east/west/tmis/naval) and carries a separate chronological story spine; the
// French and Indian War groups battles by chronological PHASE, where each phase IS
// also a story chapter. Two universal structural lanes always exist: the war story
// and off the battlefield.
export type WarLaneKind = 'theatre' | 'phase' | 'story' | 'offfield'

export interface WarLane {
  id: string                                     // lane id; battles reference it via WarBattle.theatre
  kind: WarLaneKind
  label: string                                  // full name ('Eastern Theatre' / 'The Ohio Spark')
  short: string                                  // compact crumb-trail label
  groupHead?: string                             // heading in the "All battles" scope menu (defaults to label)
  href: string
  ready: boolean                                 // the lane's landing page exists
  // hue for the lane. `dot` is a concrete hex (the breadcrumb dropdown portals to
  // <body>, outside .war-skin, so CSS vars can't resolve there; DottedMap also needs
  // concrete hex for its JS colour math). light/dark feed the in-skin CSS vars.
  color?: { light: string; dark: string; dot: string }
  // The reader's --accent for sections in this lane. `skinVar` = a CSS custom prop
  // defined in war-skin.css (light/dark-adaptive, e.g. '--th-east'); `mapHex` = the
  // concrete hex DottedMap needs. When skinVar is absent the reader falls back to
  // mapHex for the CSS accent too. Absent on the story lane (keeps the passed accent).
  skinVar?: string
  mapHex?: string
}

// A battle/siege. Field name `theatre` is kept (not renamed `lane`) so the existing
// Civil War Major[] is assignable and the components need no rename — it holds the
// battle's LANE id (a theatre id for the CW, a phase id for the F&I war).
export interface WarBattle {
  id: string; name: string; year: number; m: number; mo: string; place: string
  theatre: string
  size: WarSize
  href?: string; img?: string; short?: string; hook?: string
  // Optional GEOGRAPHIC region (e.g. 'new-england', 'the-south'). A war whose battles
  // travel across the map (the Revolution) can group its all-battles list + colour its
  // map dots by region without the full CW theatre grid; the region ids are defined in
  // WarHomeConfig.battleRegions. Omit for a war that groups chronologically (F&I).
  region?: string
}

// An off-the-battlefield theme OR a war-story chapter (same shape; the CW Theme).
export interface WarTheme {
  id: string; name: string; phase: string; type: string; size: WarSize
  date: string; year: number; m: number; hook?: string
  href?: string; short?: string; img?: string; stack?: boolean
}

export interface WarCommanderAppearance {
  battleId: string; role: string; note: string; transition?: string
}
export interface WarCommander {
  id: string; name: string; side: string; portrait: string
  born: number; died: number; epithet: string; overview: string; fate: string
  appearances: WarCommanderAppearance[]
}

// The war home page's war-specific content (the masthead, the lead card copy per tab,
// the off-the-battlefield phase groupings, and — for a one-theatre war — the all-battles
// overview map). Everything else on the home (the tab bar, the chapter/battle/theme/cast
// lists) is derived from the WarConfig itself by the shared <WarHome>. A war with this
// block set renders through <WarHome>; the Civil War (with its extra Theatres/Facts tabs)
// stays on its own page for now.
// A single map "view" on the Battles tab — a landscape frame (its own state outlines +
// free labels) that the all-battles map swaps to as the reader scrolls into the matching
// region or battle. `seaPanel` is the no-geometry fallback for an at-sea fight outside
// the map's land coverage (the dotted-map engine has only US/Canada outlines), e.g.
// Bonhomme Richard off England.
export interface BattleMapView {
  label?: string
  frame?: { lonMin: number; lonMax: number; latMin: number; latMax: number }
  states?: { name: string; label?: string; labelLon?: number; labelLat?: number; labelSize?: number }[]
  labels?: { text: string; lon: number; lat: number; kind?: 'accent' | 'water' | 'faint'; size?: number; anchor?: 'start' | 'middle' | 'end' }[]
  seaPanel?: { title: string; sub: string }
}

export interface WarHomeConfig {
  eyebrow: string                       // 'War · 1754–1763'
  title: string[]                       // masthead title lines, joined by <br/> — e.g. ['The French &', 'Indian War']
  standfirst: string
  heroImg: string
  heroCredit: string
  footer?: boolean                      // show the "Part of the American wars" front-door footer
  storyCard: { kicker: string; heading: string; body: string; meta?: string }
  castCard?: { kicker: string; heading: string; body: string }
  offfieldCard: { kicker: string; count: string; heading: string; body: string }
  offfieldPhases: [string, string][]    // theme.phase id → group heading, in order
  // The all-battles overview map (one-theatre wars). lon/lat frame, the state outlines
  // drawn under the dots, per-battle coordinates, and the map's eyebrow + accent hex.
  battleMap?: {
    eyebrow: string
    accent: string
    frame: { lonMin: number; lonMax: number; latMin: number; latMax: number }
    states: { name: string; label?: string; labelLon?: number; labelLat?: number; labelSize?: number }[]
    coords: Record<string, [number, number]>
  }
  // Optional GEOGRAPHIC regions for the Battles tab (a war whose battles travel — the
  // Revolution). When set, the all-battles list groups by region (in this order, each
  // region's battles chronological) and the map dots are coloured by region, instead of
  // the default by-year grouping with flat-grey dots. Each region carries a year-range
  // sublabel and a light/dark/dot colour. Omit for a chronological war (F&I).
  // When a region carries a `frame` (+ states/labels), the Battles map becomes a set of
  // tight LANDSCAPE maps that swap to the active battle's region as the reader scrolls,
  // instead of one tall all-theatre map (the Revolution). Without frames it stays a single
  // map (F&I).
  battleRegions?: ({ id: string; label: string; range: string; color: { light: string; dark: string; dot: string } } & BattleMapView)[]
  // Per-battle map-view overrides keyed by battle id, for battles that sit outside their
  // region's frame (the frontier; a fight at sea). Falls back to the region view when absent.
  battleViews?: Record<string, BattleMapView>
}

export interface WarConfig {
  id: string                 // 'civil-war' | 'french-indian'
  name: string               // 'American Civil War'
  routeBase: string          // '/war-civil-war' — un-hardcode every literal through this
  frontDoorId: string        // matches the WAR_EVENTS id in war-front-door.tsx ('cw'/'fi')
  crumbShort: string         // 'ACW' / 'F&I' — the war-level breadcrumb pill
  crumbFull: string          // 'American Civil War' — the ✓-matched full label
  laneNoun: string           // generic placeholder for the lane crumb ('Theatre' / 'Phase')
  accent: string             // war identity colour (WAR_ACCENT stone), concrete hex
  // The "follow a commander" cast hub, if the war has one. When set, the section
  // "Jump to" dropdown lists "The Cast" in the Beyond-the-battles group alongside
  // the Story spine and Off the Battlefield. Omit for a war with no cast yet.
  castHref?: string          // e.g. '/war-civil-war/cast'
  // CW groups battles in 4 geographic theatres, so its battle-jump menu offers a
  // [this theatre | All battles] scope toggle. The F&I war groups by phase and does
  // not. Flag it here so the generic crumb builder knows whether to emit the toggle.
  geoScopeToggle: boolean
  sides: WarSide[]
  lanes: WarLane[]           // theatre/phase lanes + the story lane + the offfield lane
  battles: WarBattle[]
  themes: WarTheme[]         // off the battlefield
  chapters: WarTheme[]       // the war-story spine
  commanders: Record<string, WarCommander>
  // Map a dossier's commander display name → its cast-arc id (a war's hand-verified
  // table via makeCastLookup). The battle dossier calls this to add the "Follow the
  // full arc" link; a war with no cast yet leaves it undefined (no link).
  castIdForName?: (name: string) => string | undefined
  // No-portrait fallback for commander cards: a side-code → flag-image map. When set,
  // a commander with no born-verified portrait shows their side's flag (and a Native /
  // other side with no flag falls back to an initials monogram). A real portrait always
  // wins. Omit for a war whose commanders all have portraits (the CW). e.g. F&I sides.
  sideFlags?: Record<string, string>
  // The war home's war-specific content. When set, the war renders through the shared
  // <WarHome>; omit for a war with a bespoke home (the Civil War, for its extra tabs).
  home?: WarHomeConfig
}
