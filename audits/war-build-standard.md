# Building a War — the one standard

The single source of truth for **how a war vertical is built**, end to end. It
consolidates rules that had drifted across per-war sessions and stacked memory
amendments. When a third war is built, follow this — do not re-derive the rules.

Two things are "standardized" here, and they are different:
1. **The recipe + voice** (this doc + the gated pipeline) — frozen and ready now.
2. **The technical build** (one content format + one generator for every surface) —
   still fragmented across the two built wars; unification is a planned project, not
   yet done. See `audits/war-second-war-plan.md`. Until then, the **Content systems**
   table below tells you which file to edit for which surface.

---

## 1. Reader surfaces — all of them are content, all of them are gated

A war ships these reader-facing surfaces. **Every one** runs through the same
fact-check + storytelling critics; "it's just a caption" is exactly how wrong facts
ship (per the app-wide pipeline mandate in CLAUDE.md):

- **War-story chapters** — the connected military through-line (CW: 5 "How the War
  Happened" chapters; F&I: the 5 phase narratives).
- **Off-the-battlefield themes** — causes, politics, tech, home front, emancipation,
  the reckoning (CW: 17; F&I: 8). The *causes / why-we-fought* layer is co-primary
  with battles, not a footnote (see `project_war_causes_first`).
- **Battle dossiers + section narratives** — each battle is its own full story
  (what came before / the battle / what it meant), plus commander bios, outcome,
  section blurbs, stats, sides, maps.
- **Commander (cast) arcs**, theatre spines, the war home (standfirst + Facts tab),
  and **every caption, credit, map label, and "meanwhile" handoff** on all of the above.

---

## 2. Voice rules — settled, frozen

These are the house voice for **all** war reading prose. They are the same rules that
were applied to F&I and then carried to the Civil War (2026-06-06).

1. **No meta-narration.** Tell the story; never tell the reader what the
   chapter/section/app is *about* or how it's structured, and never point at sibling
   sections ("this is the first chapter of…", "it links down to those", "the shape of
   X is…", "the USCT section of this app", "we will end on…"). Open straight into the
   strongest narrative sentence. See `feedback_no_meta_narration`.
2. **No em-dashes in prose.** Commas, parentheses, colons, or restructure — grammatical
   per sentence, never a blanket comma swap. The only em-dashes that stay are inside
   **verbatim historical quotes** and **proper artwork/document titles**. Captions and
   credits are prose too, and follow the same rule. See `feedback_war_voice_restraint`.
3. **Side-tags: battle content only, combatants only, exempt just the top 4.** Tag a
   combatant's side on first mention per section in battle content; NO tags in the
   reading narrative (chapters + themes). Exempt only Grant/Lee/Davis/Lincoln;
   politicians/civilians never tagged. Full rule + disambiguation in
   `feedback_war_person_side_tags`.
4. **Name the cause in the section's own prose** (Civil War: slavery, or the framing
   gate fails — `feedback_name_the_cause`).
5. **American English** spelling, everywhere (`WRITING-RULES.md`).
6. **No editorial markers in shipped prose** — `[VERIFY]`, `[REV]`, `[TODO]`, beat-map
   notes, fact-gate flags live in the file's FACT LEDGER tail (cut by the builder),
   never inline in reader text. (Two leaks were caught and fixed 2026-06-06: the
   assassination beat-map and three inline `[VERIFY]` quote flags.)

---

## 3. Media + maps

- **User-key cost-API approval gate (UPGRADED 2026-06-09, standing user directive — no exceptions).**
  Any step that makes a **cost-incurring API call on a key the USER supplied** (`.env.local`)
  must be **requested from the user and explicitly approved BEFORE it runs** — request,
  wait for the yes, then run; never silently. Gated surfaces: **Gemini map/image
  generation** (Gemini Flash, `GEMINI_API_KEY`) and **Claude vision / batch passes that
  run through a user-provided Anthropic/Claude key in a script**. NOT gated: the
  **born-verified image pass's byte-downloads** (free public-domain sources — Library of
  Congress `tile.loc.gov`, Wikimedia Commons API, `upload.wikimedia.org`, no key), the
  deterministic no-LLM gates, the **Claude Code subagents spawned via the Agent tool**
  (text or vision — harness-billed, not a user key), and deploy/push. See
  `memory/feedback_paid_api_key_loud` + the `CLAUDE.md` top-section rule.
- **Born-verified images** — every photo/print confirmed against its real
  page/image at the moment it's written; public-domain or properly-licensed only;
  caption states the real date/source. A representative era artifact beats blank;
  reject is the last resort. Hero/card aspect must match the frame (no portrait in a
  landscape band — `feedback_hero_must_be_landscape`). Method: a per-battle manifest
  of FIGURE entries (filename · byte-verifiable direct URL · orientation · caption ·
  credit · placement · subject-verification), then a serial 429-proof fetcher into
  `public/war-img/` (`scripts/_dl-war-images2.mjs` pattern). A missing portrait beats
  a wrong one — minor figures with no verified likeness stay `img: ''`.
- **Maps** — many per battle, one per geographic beat; labels match the prose's named
  places; big solid legible fonts; tap-to-zoom; dotted real-geometry state outlines
  for strategic/theatre/home maps (`feedback_war_maps_dense_legible`,
  `feedback_war_map_styles`). ChatGPT beats Gemini for hard geography; name each label
  exactly once (`feedback_map_prompt_label_once`). 3-attempt cap, then hand to the
  user (`feedback_map_three_attempt_cap`).

---

## 4. Authoring recipe (the gate)

Per-section: **fact pack → author (Opus) → fact-check + storytelling critic (Sonnet,
parallel) → revise → integrate**, with 2 hard gates (story + facts). Maps are a gate
at creation time. Full spec: `audits/war-content-pipeline.md`. The mandate
(CLAUDE.md): no section ships author-and-hope; a passing draft is not a gated draft.

### 4a. The McPherson test — for the war-story spine (year/phase chapters)

McPherson (*Battle Cry of Freedom*) refused a topical/thematic split because the war's
spheres — military, diplomacy, slavery/emancipation, Northern politics, dissent — were
*simultaneous and impinged on each other*: "none can be understood apart from the whole."
His example is fall 1862 (Maryland + Kentucky invasions + European-intervention diplomacy +
the Emancipation Proclamation + anti-draft/anti-Black riots + martial law + the Peace
Democrats' fall-election bid, all at once). Our **off-the-battlefield silo + per-battle
modular stories are structurally the split he warns against**; the thing that redeems it is
the chronological **year/phase spine**, which is our McPherson layer.

Audit of the CW 1862 spine chapter (2026-06-08): the moral/diplomatic braid is strong
(weaves emancipation + European recognition + the elections into one chronological thread,
closes "the military story and the moral one had become a single story"). Two gaps it still
has, to AVOID when authoring future spine chapters:
- **Pull the home-front/political thread into the spine, not the silo.** The CW spine left
  draft riots / martial law / habeas / civil liberties almost entirely to the OTBF themes;
  the battles↔domestic-dissent braid is the seam still split.
- **Build for simultaneity, not sequence.** The CW spine chains beats (West → Antietam →
  emancipation → elections) where McPherson collapses them into one pulse. Write at least one
  spine chapter per war that deliberately fuses a simultaneous moment instead of chaining it.
  (Revolution candidates: 1776 — Declaration + NY-campaign disaster + Loyalist civil war +
  first reach to France; or 1781 — Yorktown unwinnable without the French fleet + war-weariness
  + the southern civil war.)

---

## 5. Content systems map — which file to edit (until unification)

The two built wars store prose **four different ways**. Edit the source, not the
generated output.

| Surface | Source to edit | Generator → live page |
|---|---|---|
| CW war-story chapters (5) | `audits/war-pipeline/<slug>-final.md` | `node scripts/_build-war-themes.mjs` → `how-the-war-was-fought/<slug>/page.tsx` |
| CW themes (14 of 17) | `audits/war-pipeline/<slug>-final.md` (+ `-figures.json`) | `_build-war-themes.mjs` → `off-the-battlefield/<slug>/page.tsx` |
| CW themes (3: slavery-cotton, freedom-struggle, emancipation) | **hand-written** `off-the-battlefield/<slug>/page.tsx` | none — edit the page directly |
| CW battle dossier + sections (46) | **live** `<theatre>/<battle>/page.tsx` + `s/[section]/section-narrative.tsx` | none — the `-final.md` drafts are STALE; edit the `.tsx` |
| F&I chapters + themes | `phase-narratives.ts` / `off-the-battlefield/theme-narratives.ts` (block-array TS) | rendered live by `battle-reader.tsx` |
| Breadcrumb / chrome (all wars) | `src/components/mode/war-chrome.tsx` + `theatre-page.tsx` (`warCrumbs`, config-driven) | live |

Notes:
- The `_build-war-themes.mjs` builder ships prose VERBATIM up to the first
  `## MEANWHILE HANDOFF` **or** `## FACT LEDGER` marker; everything after is internal.
- Figure captions/credits live in `-figures.json` and inline in the builder config —
  a **separate** surface from the `-final.md` prose (so a prose em-dash sweep does not
  touch them; sweep captions explicitly).
- The breadcrumb is fully config-driven (`warCrumbs(cfg)`): war-name + theatre-name
  rungs/options are tinted their identity colour and link entries are underlined, for
  **every** war automatically (add a war to the registry + `WAR_EVENTS` and it inherits).
- The **cast bar** (`castCrumbs(cfg, …)` in `theatre-page.tsx`) is the same shape for
  every war: `War › Cast › Commander`, where the Cast rung carries the section
  "Jump to" dropdown (theatres/story/off-field/cast — set `WarConfig.castHref`) and the
  leaf rung lists every commander grouped by side. A new war wires it with ONE binder
  (`<war>CastCrumbs(commanderId?)` — see `civilWarCastCrumbs` / `frenchIndianCastCrumbs`)
  that passes its commander registry + side metadata (`{ code, label, dot }`, dot =
  concrete hex since the dropdown portals outside `.war-skin`). Both the cast hub page
  and each commander arc call that one binder.

---

## 6. Turnkey: how to add a new war (the chrome is config-driven)

The whole war chrome is now config-driven — a new war is a `WarConfig` + a route tree of
content, not a fork of the Civil War. Use the **French & Indian War as the template**
(the clean, data-driven build); the Civil War is the feature-rich flagship and keeps a
couple of warranted bespoke pieces (its own home page for the extra Theatres/Facts tabs;
its themes/chapters still as generated `.tsx`). What a new war wires up:

1. **`WarConfig`** (`src/lib/wars/<id>.ts`) + register it in `registry.ts` and add its
   `href` to `WAR_EVENTS` (`war-front-door.tsx`). The config carries: `sides`, `lanes`
   (theatres/phases + the story + off-field lanes), `battles`/`themes`/`chapters`,
   `commanders`, `castHref`, `sideFlags` (no-portrait fallback), `castIdForName` (via
   `makeCastLookup`), and a `home` block (masthead, per-tab card copy, off-field phase
   groupings, the all-battles map data).
2. **Home** — one line: `<WarHome cfg={MY_WAR} />` (`components/mode/war-home.tsx`). It
   renders the masthead, the four core tabs, and the scroll-linked battle map from config.
3. **Cast** — a commander registry (`<id>-commanders.ts`) + a `<war>CastCrumbs` binder
   (mirror `frenchIndianCastCrumbs`); the cast hub + arc pages reuse `<CommanderArc>` and
   the shared `castCrumbs`. Point `WarConfig.commanders` at the registry.
4. **Battles** — thin `page.tsx` per battle handing a `BattleData` to the shared
   `<BattleDossier>` (`components/mode/battle-dossier.tsx`); sections via
   `<BattleSectionReader>` reading the block-array `Narr` data.
5. **Themes / chapters** — the F&I model: one consolidated data file
   (`theme-narratives.ts` / `phase-narratives.ts`, built by `_build-fi-themes.mjs` /
   `_build-fi-phases.mjs`) rendered live by `<BattleSectionReader>` through a dynamic
   `[theme]` / `[phase]` route. Do NOT invent a new storage format, and do NOT copy the
   Civil War's older per-file generated `.tsx`.
6. Breadcrumb, section jump-bar, cast bar, dossier, commander arc, and the war skin are
   all inherited unchanged.

**Turnkey seams found building war #3 (the Revolution, 2026-06-07) — both real, neither a blocker:**
1. **`<WarHome>` is single-battle-lane only.** Its Battles tab lists battles chronologically
   by year under one overview map; it has NO geographic "Theatres" grid (that's the one
   thing the CW keeps its own home for). A genuinely multi-theatre war (the Revolution)
   must either take the F&I shape (one battle lane + chronological PHASES as the story
   spine — what the Revolution does) or get a bespoke/extended home. The F&I shape is the
   documented turnkey path and the phases usually double as the geography.
2. **`<WarHome>` CastTab hardcodes the F&I skin.** It emits `className={'p-cmdcard fi ' + c.side}`,
   so the side pill labels come from the `.p-cmdcard.fi.u/.c` CSS rules (BRITISH / FRENCH).
   A third war's cast cards render with F&I's labels until this is generalized — drive the
   variant class + side label/color from the WarConfig (e.g. a `cmdSkin`/side-label hook)
   and add the war's CSS. **DO THIS when building the Revolution's commanders** (American /
   British), not before.

**What's intentionally NOT unified** (judged poor ROI / not a new-war blocker, 2026-06-07):
- The **Civil War home** stays its own page (its Theatres + Facts tabs + battle search are
  warranted by its content; folding them into `<WarHome>` would make it a conditional mess
  at real regression risk to the live flagship).
- **Migrating the CW themes/chapters** off generated `.tsx` to the data model is legacy
  cleanup, not a turnkey enabler (new wars already use the data model). Old plan in
  `audits/war-second-war-plan.md` (now largely executed/superseded by the above).
- The **per-war CSS palette** (`--th-*`, `--union`, etc. in `war-skin.css`): a new war adds
  ~6 lines to the light + dark blocks. Injecting it from config was scoped out — the
  config palette had drifted from the CSS and the dual light/dark injection wasn't worth
  the regression risk for ~6 saved lines.
