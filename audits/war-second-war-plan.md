# Second-war plan — making the war vertical multi-war

> **Status: PLAN ONLY (no code yet).** Written 2026-06-02, after the Civil War
> redesign shipped to prod. The Civil War is the only war built; everything below
> is the refactor that lets a *second* war reuse the chrome without forking it.
> Nothing here is started. The trigger to begin is the user picking war #2.

## The situation

The `/war` front door already lists all twelve American wars and is fully
war-agnostic — it just needs an `href` added per war (`war-front-door.tsx`,
`WAR_EVENTS`). The problem is everything *behind* a war card. The whole interior —
roster, commanders, theatres, colours, breadcrumbs, route base — is hardcoded to
the Civil War, scattered across `src/lib/civil-war-*.ts`, the shared
`src/components/mode/*` components, and `war-skin.css`.

The good news: the **architecture is already generic**. The reader, dossier,
theatre page, commander page, header, and chrome are shared components — they just
*import the Civil War singletons directly* instead of taking a war as input. So
this is a config-lift + parameterise job, not a rewrite.

The authoring pipeline (`war-content-pipeline.md`) is already war-agnostic and
needs no change — it runs per battle/theme for any war. **This plan is only about
the plumbing that lets war #2's authored content hang on the same chrome.**

## Guiding rule: make it a no-op on the Civil War first

Do the refactor in two strict phases:

1. **Phase A — behaviour-preserving lift.** Introduce `WarConfig`, lift the Civil
   War data into it, route every shared component through the config *for the Civil
   War itself*. Acceptance: `/war-civil-war` renders pixel-identical, ship-check is
   green, clean deploy verifies on stuffhappened.com. No new war yet. If the Civil
   War changes at all, the lift is wrong.
2. **Phase B — additive second war.** With the components config-driven, war #2 is
   a new config + a new `/war-<id>/` route tree + authored content. It touches zero
   Civil War files.

Phase A is the only risky part (it edits shipped, live surfaces). Phase B is purely
additive and safe. Never start B before A verifies clean on prod.

## The `WarConfig` object

One object per war, the single source of truth for that war's identity. Lives at
`src/lib/wars/<warId>/config.ts`; a registry at `src/lib/wars/registry.ts` maps
`warId → WarConfig`. The Civil War's existing data files
(`civil-war-roster.ts`, `civil-war-commanders.ts`) move under `src/lib/wars/civil-war/`
and become the *data* the config wraps — they keep their shape, lose their role as
the global default.

```ts
type WarConfig = {
  id: string                 // 'civil-war' | 'revolution' | 'wwii'
  name: string               // 'American Civil War'
  routeBase: string          // '/war-civil-war'  (un-hardcode every literal)
  crumbLabel: string         // 'ACW' — the short war crumb pill
  hero: { img: string; credit: string }

  // Sides / belligerents — was the hardcoded Union/Confederate pair.
  // Generalised to an ordered list so WWII can have Allies/Axis, etc.
  sides: Array<{ code: string; label: string; varName: string }>
    // CW = [{code:'u', label:'Union', varName:'--side-a'},
    //       {code:'c', label:'Confederate', varName:'--side-b'}]

  // Lanes — the geographic/strategic theatres PLUS the two universal
  // structural lanes (the war story + off the battlefield). Each war's
  // geographic set differs; the two structural lanes are always present.
  lanes: Array<{
    id: string               // 'east'|'west'|'tmis'|'naval'  + 'story'|'offfield'
    kind: 'theatre' | 'story' | 'offfield'
    label: string            // 'Eastern'
    short: string            // crumb-bar short label
    href: string             // routeBase + '/eastern'
    color: { light: string; dark: string }   // the theatre hue
  }>

  // The content rosters (today's MAJORS / THEMES / CHAPTERS).
  battles: Major[]           // every battle, grouped by lane id
  themes:  Theme[]           // off-the-battlefield sections
  chapters: Theme[]          // the war-story military spine

  commanders: Record<string, Commander>   // the cast registry
}
```

`SPINE_NODES`, `THEATRE_LABEL`, `THEATRE_NAV`, and the helpers
(`majorsOf`/`theatreEv`/`theatreSpine`/`castIdForName`) all become *derived from the
config* rather than module-level constants — either methods on the config or pure
functions taking the config as first arg.

## What changes, file by file

| File | Today | Phase-A change |
|---|---|---|
| `src/lib/civil-war-roster.ts` | module-level `MAJORS/THEMES/CHAPTERS/THEATRE_NAV` | move → `wars/civil-war/`, export as the data the config wraps; keep types |
| `src/lib/civil-war-commanders.ts` | `COMMANDERS`, `castIdForName`, `Side='U'\|'C'` | move → `wars/civil-war/`; `castIdForName` becomes `(war, name)` |
| **NEW** `src/lib/wars/registry.ts` | — | `warId → WarConfig`; a `warForRoute(pathname)` resolver |
| `theatre-page.tsx` | imports CW singletons; `civilWarCrumbs()`; `THEATRE_COLOR`/`THEATRE_DOT`/`GEO_HEAD` | take `war` prop; rename `civilWarCrumbs` → `warCrumbs(war, …)`; colour maps come from `war.lanes` |
| `battle-reader.tsx` | imports CW singletons; `THEATRE_ACCENT` hardcodes 5 hues | take `war` prop (or derive from route); `THEATRE_ACCENT` ← `war.lanes` colours |
| `battle-dossier.tsx` | `type Theatre`/`Side` hardcoded; imports `castIdForName` | accept `war`; side labels + colours from `war.sides`; `castIdForName(war, …)` |
| `commander-page.tsx` | imports `COMMANDERS`; `Union`/`Confederate` labels; `/war-civil-war` hrefs | take `war`; labels from `war.sides`; hrefs from `war.routeBase` |
| `commanders-strip.tsx` | imports `COMMANDERS`; `/war-civil-war/cast/${id}` href | take `war`; href from `war.routeBase` |
| `war-header.tsx` | default `backHref='/war-civil-war'` | default comes from the resolved war (or stays a required prop) |
| `war-skin.css` | `--th-east/west/tmis/naval`, `--otbf`, `--union`/`--confed` baked in | keep the *structural* skin shared; the per-war **palette** (theatre hues + side colours) is injected as CSS vars from `war.lanes`/`war.sides` on the page root (`style={{'--side-a': …}}`), so the CSS references generic var names |
| `war-front-door.tsx` | already multi-war | **no change** — just add war #2's `href` when it exists |
| `/war/page.tsx` | already generic | **no change** |

Every battle/theme/chapter `page.tsx` under `war-civil-war/` is a thin **data
wrapper** that hands a data object to the shared reader. Those barely change: their
`theatre`/`side` literals stay, but the crumb call goes from `civilWarCrumbs({…})` to
`warCrumbs(CIVIL_WAR, {…})` (a mechanical find-replace, ~45 battle files + themes).

## Routes — why each war keeps its own directory

War content is **hand-authored per battle** (each `page.tsx` carries that battle's
gated prose, maps, commander blurbs). It is not generated from markdown like the civ
`[civilizationId]` route. So routes can't collapse into one dynamic `[warId]`
segment — there's real, distinct content per battle file.

The model: each war owns a `/war-<id>/` route tree with the same *shape*
(`/<theatre>/<battle>`, `/<battle>/s/[section]`, `/off-the-battlefield/<theme>`,
`/how-the-war-was-fought/<chapter>`, `/cast/[id]`). The **shape is shared via the
components; the content files are per-war.** A small scaffolder script can stamp the
empty route tree for a new war so authoring starts from a skeleton, not a copy of the
Civil War.

`output: 'export'` static build is unaffected — more static routes, same mechanism.

## Theatre / side colours per war

The skin's *structure* (Spectral/Archivo fonts, parchment/warm-dark grounds, the
`.rd-*` reader layout, the jump-bar) is universal and stays in `war-skin.css`
unchanged. Only two things vary per war and both come from the config:

- **Theatre hues** — CW has plum/green/gold/teal + OTBF orange. War #2 picks its own
  per-lane colours. Injected as `--th-*`/generic lane vars on the page root.
- **Side colours** — CW Union blue / Confederate rust. WWII would be Allies/Axis, etc.
  Injected as `--side-a`/`--side-b`.

The `color-mix(in srgb, var(--…) N%, transparent)` tinting already used throughout
keeps working unchanged once the vars are config-driven.

## Effort & risk

- **Phase A (the lift): medium, ~1 focused session.** The risk is regressing the live
  Civil War. Mitigation: the no-op rule + a before/after screenshot diff of
  `/war-civil-war` and a representative battle/theme/commander page, plus ship-check
  and the shipped-page guard, before any deploy.
- **Phase B (war #2 plumbing): low.** Additive only. The real cost of war #2 is
  **content authoring** through the existing pipeline (fact pack → author → 5 critic
  gates → revise → integrate, per battle/theme), which is unchanged by this refactor
  and is where the time actually goes.

## Open decisions for the user (when starting war #2)

1. **Which war.** The front door's escalating order suggests the **American
   Revolution** (the first "A Nation Forged" war) or **WWII** (the other marquee
   large). This drives the lane set (Revolution = phases/regions; WWII = Pacific/
   European/etc.) and the side palette.
2. **Theatres vs phases.** Not every war splits cleanly into geographic theatres the
   way the Civil War does. The `lanes` model is general enough for either, but the
   chosen war's lane set is a scope-lock decision (like the ACW scope-lock in
   `war-pilot-civil-war.md`).
3. **Scope-lock first.** Before authoring, war #2 gets its own scope-lock note
   (chapters/movements, which battles earn a dossier, the side/theatre set) — the
   analog of the ACW pilot lock.

## Sequencing

```
Phase A (refactor, no-op on CW)  →  verify on prod  →
Phase B scaffold war #2 routes + config  →  scope-lock war #2  →
author war #2 content through the pipeline (the long pole)  →  flip its front-door href
```
