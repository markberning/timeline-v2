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

export interface WarConfig {
  id: string                 // 'civil-war' | 'french-indian'
  name: string               // 'American Civil War'
  routeBase: string          // '/war-civil-war' — un-hardcode every literal through this
  frontDoorId: string        // matches the WAR_EVENTS id in war-front-door.tsx ('cw'/'fi')
  crumbShort: string         // 'ACW' / 'F&I' — the war-level breadcrumb pill
  crumbFull: string          // 'American Civil War' — the ✓-matched full label
  laneNoun: string           // generic placeholder for the lane crumb ('Theatre' / 'Phase')
  accent: string             // war identity colour (WAR_ACCENT stone), concrete hex
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
}
