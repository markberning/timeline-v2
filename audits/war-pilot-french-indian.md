# War #2 — The French and Indian War (scope-lock / build spec)

> **Status: SCOPE-LOCK (no content authored yet).** Written 2026-06-02. War #2,
> chosen by the user. This is the analog of `war-pilot-civil-war.md` — the agreed
> shape before any prose. Governing principles, the 5-gate authoring pipeline, the
> house-voice rules, and the born-verified media rule are all INHERITED unchanged
> from `audits/war-content-pipeline.md`; only the war-specific decisions are locked
> here. The build method is in `audits/war-second-war-plan.md`.

## What this war is

The North American war (1754–1763) between Britain (with its American colonists) and
France (with New France), fought across and *for* the lands of Native nations. It is
the North American front of the global Seven Years' War — **we keep the familiar
American name "The French and Indian War" and mention the global conflict but do not
make it the focus** (user, 2026-06-02). The war ejected France from mainland North
America, and its debt and its Proclamation Line lit the fuse to the American
Revolution (war #3 in the front-door order) — a deliberate forward cross-war thread.

## Why this war is the right generalization test

It is structurally *unlike* the Civil War in almost every way, which is exactly what
stress-tests whether the shared chrome is truly multi-war:
- **No clean two-side symmetry.** Britain vs France, but Native nations are a third
  agency, allied to both and fighting for their own sovereignty.
- **Fronts migrate north over time** (Ohio Country → Lake Champlain corridor →
  the St. Lawrence/Canada), so it reads as chronological **phases**, not a fixed
  geographic theatre grid like the Civil War's East/West/Naval.
- **The causes/human-cost layer is the heart**, and it is different in kind from
  slavery: the contest for Native alliances, the Acadian expulsion, the land grab,
  and the road to the Revolution.

## Locked decisions

### Sides & Native nations (user: "def native nations")
- **Two belligerents in the `sides` model: British and French** (each its own colour
  token). These get the person side-tags (every named British/French actor tagged on
  first mention per section, like the Civil War's North/South).
- **Native nations are a FIRST-CLASS presence, NOT a "side."** They are woven through
  the prose and carry their own off-the-battlefield theme(s) with their own war aims —
  never reduced to a flag on a European army. A named Native individual is tagged with
  their **nation** ("Hendrick (Mohawk)", "Pontiac (Odawa)"), never forced onto a
  European side.
- **Framing-gate first-check for this war (the analog of NAME THE CAUSE):** every
  section must keep Native nations as actors with their own aims, name the human cost
  (the Acadian expulsion; the catastrophe the British victory brought Native nations),
  and never let the Wolfe/Montcalm romance crowd out who lost the most. The section
  also addresses, where natural, what the name "French and Indian War" centers and
  erases. Omission of Native agency is an automatic MUST-FIX, exactly as a missing
  "slavery" is on the Civil War.

### Marquee names (no side-tag) — small set
Washington, Wolfe, Montcalm, William Pitt, Franklin, Braddock, Amherst. (Like the
Civil War's 8 marquee names; everyone else is tagged once per section. Confirm/trim
when authoring.)

### Lanes = chronological phases (not geographic theatres)
The fronts migrate, so the war's `lanes` are its five phases, which double as the
war-story spine. Each phase gets a colour token (the per-war palette in the config).
The two universal structural lanes — **the war story** and **off the battlefield** —
apply as in the Civil War.

### Scale (deliberately smaller than the Civil War's 46 — this war had fewer set-pieces)
- **~13–15 battle/siege dossiers** (the tiered roster below).
- **~7–8 off-the-battlefield themes** (the heart; weighted at least as heavily as the
  battles per `memory/project_war_causes_first`).
- **~5 war-story chapters** (the spine).

## The war-story spine (≈5 chapters / the phase lanes)
1. **The Ohio Spark (1754)** — Washington, Jumonville Glen, Fort Necessity.
2. **Years of Disaster (1755–57)** — Braddock's Monongahela, Oswego, Fort William
   Henry; Britain reeling.
3. **Pitt's Turn (1758)** — William Pitt reorganizes the war; Louisbourg, Frontenac,
   Duquesne; the tide turns.
4. **The Conquest of Canada (1759–60)** — the year of victories: Niagara, Ticonderoga,
   Quebec / the Plains of Abraham, then Sainte-Foy and the fall of Montreal.
5. **The Peace and Its Fuse (1760–63)** — the Treaty of Paris, the Proclamation Line,
   Pontiac's War, and the war's debt setting up the Revolution.

## Battle/siege roster (≈13–15 dossiers — verify every specific in the fact pack)
*This is the scope list, not authored fact; dates/numbers get the fact-pack + gates.*
- Jumonville Glen (1754) — the spark
- Fort Necessity / Great Meadows (1754) — Washington's surrender
- Braddock's Defeat / the Monongahela (1755) — disaster
- Battle of Lake George (1755) — Johnson + Mohawk allies vs Dieskau
- Fort Oswego (1756) — Montcalm takes it
- Fort William Henry (1757) — siege + the "massacre" (human-cost + Native-agency knot)
- Carillon / Ticonderoga (1758) — Montcalm's outnumbered defense routs Abercromby
- Louisbourg (1758) — Amherst & Wolfe; opens the St. Lawrence
- Fort Frontenac (1758) — cuts French supply west
- Fort Duquesne / the Forbes Expedition (1758) — becomes Fort Pitt → Pittsburgh
- Fort Niagara (1759) — opens the west
- Quebec / the Plains of Abraham (1759) — decisive; Wolfe and Montcalm both die
- Sainte-Foy (1760) — French win the field, can't retake Quebec (Royal Navy arrives)
- Montreal (1760) — New France capitulates; the war ends in North America
- *(coda)* Pontiac's War (1763) — handled as the aftermath theme, see below

## Off-the-battlefield themes (the heart, ≈7–8)
- **The Ohio Country & the Ohio Company** — land speculation; two empires collide over
  the trans-Appalachian west.
- **The Contest for Native Alliances** — the Covenant Chain, the Iroquois balancing
  act, the western/Great Lakes nations with France; Native nations' own war aims.
- **The Acadian Expulsion (Le Grand Dérangement)** — the deportation of the Acadians;
  ethnic cleansing; the Cajun diaspora. A major human-cost theme.
- **Regulars vs Provincials** — British contempt for colonial militia; the friction
  that seeded Revolutionary resentment.
- **The Albany Congress & the Albany Plan of Union (1754)** — Franklin's "Join, or
  Die"; the first blueprint of colonial union.
- **War Finance & the Road to Taxation** — the war's staggering cost → Sugar/Stamp
  Acts → the fuse to the Revolution.
- **The Treaty of Paris (1763) & the Proclamation Line** — France ejected; the west
  closed; Native dispossession accelerates.
- **Pontiac's War & the Aftermath for Native Nations (1763)** — the catastrophe the
  British victory brought: the French counterweight gone, Pontiac's uprising, the
  long dispossession. (A separate conflict, carried here as the war's aftermath coda.)

## Build method (per `war-second-war-plan.md`, method chosen 2026-06-02)
NOT a big-bang no-op refactor of the Civil War. Instead:
1. Introduce the `WarConfig` type + registry.
2. Build the **Civil War's** config as a thin wrapper around its EXISTING data files
   (leave `civil-war-roster.ts` / `civil-war-commanders.ts` in place — minimal churn).
3. Parameterize each shared component (`battle-reader`, `battle-dossier`,
   `theatre-page`→generic lanes, `commander-page`, `commanders-strip`, `war-header`,
   the `warCrumbs` builder) to take a war as input — driven by what the French and
   Indian War actually needs, with the Civil War passing its own config so it's
   exercised at every step. **The live Civil War is the continuous regression test.**
4. Per-war palette (phase + side colours) injected as CSS vars on the page root; the
   structural `.war-skin` is unchanged and shared.
5. The French and Indian War is then additive: its config + a `/war-french-indian/`
   route tree (same shape) + content authored through the unchanged 5-gate pipeline.
6. Add the front-door `href` on the F&I card (`war-front-door.tsx`) last, when content
   is ready.

## What's unchanged (inherited, do not re-decide)
The 5 critic gates, the fact-pack-first / zero-hallucination floor, born-verified
media (a missing link/credit beats a wrong one), the locked house-voice rules
(no em-dashes, no meta-narrator, full-rank-first, pills-not-inline, comprehensive
linking, little bold), the map house style + 2-regen cap, the dossier layout (tabs
Narrative · Commanders · At a glance · Outcome), and the war-skin chrome. See
`audits/war-content-pipeline.md` and `memory/project_war_skin_redesign`.
