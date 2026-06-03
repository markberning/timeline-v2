# War Pilot — American Civil War (scope-lock / build spec)

Phase-2 War vertical, pilot #1. Built in the `feat/phase-2` worktree. The point
of the pilot: push the forked civ pipeline end-to-end on one war and let it
reveal what actually breaks — before building any other war. `kind: 'war'`.

> **STATUS 2026-05-30 — the Off-the-Battlefield arc is COMPLETE (17 of 17 themes
> built + live).** All theme sections shipped through the full 5-gate war pipeline.
> Final wave (wave-3): `prisons` (Andersonville & the Prisons), `guerrilla-war`
> (Fort Pillow & the Guerrilla War), `war-within-north` (The War Within the North),
> `assassination` (Lincoln Assassinated), `reckoning` (The Reckoning). Theme pages
> are generated deterministically by `scripts/_build-war-themes.mjs` (wave-2/3 hydrate
> figures from `<slug>-figures.json` produced by `scripts/_parse-img-manifests.mjs`;
> images downloaded serially by `scripts/_dl-war-images2.mjs`). Source + gate records
> per section live in `audits/war-pipeline/<slug>-*`. The dated "N of 17 still Soon"
> notes below are historical progress, now superseded.

> **STATUS 2026-05-30 — the BATTLE LAYER has begun (6 CWSAC Class-A battles built +
> committed, NOT deployed).** Built through the full 5-gate pipeline, each with a
> dossier + multi-section reader + tactical map + PD hero + commander headshots, and
> wired into `civil-war-roster.ts` (href/img/hook → they light up the theatre spines,
> the breadcrumb jump list, and the ACW home timeline/dossier views):
> **Batch 1 (the 1861 opening, commit `d6c68821`):** Fort Sumter (naval), First Bull
> Run (eastern), Wilson's Creek (trans-Miss).
> **Batch 2 (early 1862, the West, commit `26c45db3`):** Fort Donelson (western), Pea
> Ridge (trans-Miss), Glorieta Pass (trans-Miss).
> With Antietam + Gettysburg (built earlier), **8 of 46 Class-A majors are now done.**
> NEW LOCKED PIPELINE RULE this run: **NAME THE CAUSE** — every Civil War section must
> name slavery as the cause in its own prose; the framing gate auto-fails omission (all
> 6 drafts tripped it). See `audits/war-content-pipeline.md` + `memory/feedback_name_the_cause`.
> Next war work: continue the Major-battle tail. Parked theme ideas (Confederate
> home-front/war-finance; Native-Americans / Indian Territory + 1862 Dakota War) are
> still optional adds, never started.

> **STATUS 2026-06-01 — NAV + HOME redesign (Art-style tier-3 jump-bar everywhere).**
> The whole ACW surface moved to the Art "Realism page" chrome — a sticky tier-3 pill
> bar (shared `WarSectionNav` in `war-chrome`) under the breadcrumb, one continuous
> scroll, no Timeline/Dossier toggle anywhere.
> - **War home (`war-civil-war/page.tsx`):** jump-bar chips **Story · Details ·
>   Theatres · Timeline**. The Theatres block is ONE interactive `DottedMap` that
>   zooms to the chosen theatre (4-pill, default Eastern) with leader-line battle
>   callouts (titles parked in the surrounding states, thin leaders to the dots, links
>   to built battle pages) + state-fill shading; each theatre has a 4-sentence intro.
>   The Timeline block has its OWN 7-option selector — two rows: **All · Off the
>   Battlefield · The Military Story** / the 4 theatres — and a **Cards/List** slider.
>   `All` interleaves the Military-Story chapters + every battle/theme chronologically,
>   each item coloured by its theatre with the theatre named after the date.
> - **Theatre pages are effectively obsolete.** The Theatre breadcrumb crumb now jumps
>   to the FIRST built battle of that theatre (geographic theatres); the Battle/Event
>   dropdown is FILTERED to the chosen theatre. **Off the Battlefield + The Military
>   Story keep their real home pages** (they're subject lists, not a battle a crumb can
>   land on).
> - **All 38 built battle dossiers** converted to the jump-bar (At a glance ·
>   Commanders · Outcome · Narrative); the Timeline/Dossier toggle is retired
>   corpus-wide (commit `5cdb15cd`).
> - **NEW: storytelling Commanders section** (photo-left column + per-commander
>   2-sentence story of THIS battle, full names) — piloted on Gettysburg. **The blurbs
>   are GATED CONTENT** (DRAFT, owed the fact-check pass); other battles keep the old
>   headshot strip until their blurbs land. See `war-content-pipeline.md` "Commanders
>   section" + the Dossier-retrofit sweep (strand 1 chrome ✅ done; voice/maps/commanders
>   still per-battle gated work).
> - **OWED A FACT-CHECK:** the 4-sentence theatre intros (war home) and the Gettysburg
>   commander blurbs are draft prose that has NOT yet been through the fact gate.

> **STATUS 2026-06-02 — the Civil War is COMPLETE and FULLY LIVE; pilot done.**
> Everything shipped to prod and `TL_KIND_LIVE.war = true` (no more SOON soft-launch):
> 46/46 Class-A battle dossiers, 17/17 off-the-battlefield themes, the 5-chapter war
> story, and the cast/commander arcs (36 commanders with 3+ battles). The whole
> surface wears one shared editorial **war-skin** (see `memory/project_war_skin_redesign`):
> sticky breadcrumb + tier-3 jump-bar, theatre/side colours carried through the
> narratives, dossier tabs Narrative · Commanders · At a glance · Outcome, theatre
> pages retired as destinations (crumb → ACW home), and the old "Military Story"
> renamed **"The Civil War story" / "How the War Happened."** Workflow is now
> single-worktree on `main` (the `feat/phase-2` :3007 worktree and `feat/war-redesign`
> are gone).
> - **Still owed (carried, not blocking):** the per-battle tactical-map review on the
>   38 earlier battles (user does this as he reads); the theatre-intro + Gettysburg
>   commander-blurb fact-check pass noted above.
> - **NEXT: war #2.** The pilot validated the forked pipeline end-to-end. The plan to
>   make the vertical multi-war (lift the hardcoded Civil War interior into a per-war
>   `WarConfig`; the shared components are already generic) is written in
>   **`audits/war-second-war-plan.md`** (no code started). Picking the war + its
>   scope-lock is the trigger. See `memory/project_war_second_war_plan`.

## Governing principle
**Good storytelling is the top priority — with factual accuracy and zero
hallucination as non-negotiable hard constraints.** Every section leads with
narrative (prose first, stats second); nothing is a bare stat sheet. Accuracy
never bends to story: dates, numbers, quotes are sourced. See
`memory/feedback_storytelling_first`.

**No length limit (user direction, 2026-05-22).** Narratives are as long as the
story needs — no word cap, no target, no trimming for length. Priority #1 is a
genuinely good story; the hard floor is accuracy with zero hallucinations or
guesses. Length follows the story; it is never a constraint on it. (Full rule in
`audits/war-content-pipeline.md` Governing principle.)

**Causes / off-the-battlefield are the HEART (user direction, 2026-05-23).** The
single most important part of the war app is **WHY we went into each war** — the
user is "much more" interested in the causes/context than the battles. The
off-the-battlefield / thematic layer should **rival, if not exceed, the entire
battle layer in scope and coverage**, and this holds for EVERY war, not just this
pilot. This RECONTEXTUALIZES the "two-layer / exhaustive battle layer" framing in
Locked decisions below: the off-battlefield layer is now **co-primary (or
primary), not a sidebar**. Lead every war with a rich "why did we fight this?"
treatment, scope the thematic roster generously, and weight off-battlefield BUILD
effort at least as high as battles. See `memory/project_war_causes_first`.

## Locked decisions
- **Pilot = American Civil War**, 1861–1865 (causes from 1850).
- **~10 chapters**, movement-driven (NOT a template, NOT padded with battles).
- **Ends at 1865** (Appomattox + assassination). Reconstruction is a shipped
  civ TL — the final chapter cross-links into it, doesn't absorb it.
- **One causes chapter**, leans on `antebellum-america` via cross-link.
- **Signature "more than a civ" features for the pilot: A + C.**
  - **A · Dual perspective** — key moments readable from both sides (Union /
    Confederate). A reader POV toggle. Pairs with the war POV audit persona.
  - **C · Battle box-score cards** — NARRATIVE-LED: lead with a few paragraphs
    of house-voice prose telling the battle's story, with the stat block (date /
    place / commanders / forces / casualties / outcome) as support underneath.
    Every section follows this rule — prose first, data second; never a bare
    stat sheet.
- **Battle layer is two-layer (comprehensiveness):**
  - Narrative chapters are SELECTIVE (the story; major battles inline).
  - A separate battle layer is EXHAUSTIVE — **Decisive + Major + Mid (CWSAC
    A+B+C, ~280 battles)**.
  - **Each battle is its OWN story at VARIABLE depth** — depth scales with what
    the battle warrants ("each battle does not need a full chapter unless
    warranted"). Decisive → full chapter-like treatment (*What came before* →
    *The battle*, with dual POV → *What it meant* → stat block). Major → a
    medium version. Minor → a paragraph + stats. Never a bare stat sheet.
  - Reached two ways: **inline-expandable** in the prose, and a **complete
    searchable/sortable battle index**.
  - **Source data seeds from the CWSAC principal-battles catalog + Wikipedia
    battle infoboxes** (wars have no v1 timeline file). Infoboxes seed the stat
    blocks; the prose is authored + sourced (no hallucinated specifics).
- **Deferred:** B (living map — needs real map art, the planned interactive
  drawer) and D (follow-a-commander synthesized arc) come AFTER the pilot.

## Chapters (10 movements)
1. **Road to War** (1850–61) — the sectional crisis → secession. [→ antebellum-america]
2. **Secession & Sumter** (1860–61) — the Confederacy forms; Fort Sumter; mobilization.
3. **The Illusion of a Short War** (1861–62) — Bull Run; the long-war realization; the Anaconda Plan.
4. **The War in the East** (1862) — Peninsula; Lee takes command; Antietam.
5. **The War in the West** (1862–63) — Grant; the rivers; Shiloh; toward Vicksburg.
6. **A New Birth of Freedom** (1862–63) — Emancipation; USCT; the home front, North & South.
7. **The Turning** (Jul 1863) — Gettysburg + Vicksburg.
8. **Hard War** (1864) — Overland Campaign; Petersburg; Sherman's March; total war.
9. **Appomattox** (1865) — collapse; surrender; Lincoln's assassination.
10. **The Reckoning** (1865→) — the cost; the unfinished work. [→ reconstruction]

(East/West split, ch 4–5, kept deliberately — the war's best structural contrast.
Compressible to 9 if needed.)

## War category set (SIGNED OFF 2026-05-21)
Replaces the civ 8. War events spread across these so a chapter isn't all battles:
1. **Battle** — battles, sieges, engagements
2. **Campaign** — operational movements / offensives
3. **Command** — commanders, leadership changes
4. **Politics** — Lincoln/Davis, elections, war policy, conscription
5. **Emancipation & Society** — slavery, USCT, the war's meaning, home front
6. **Technology & Logistics** — ironclads, railroads, rifled muskets, telegraph
7. **Diplomacy** — Britain/France, Trent Affair, cotton diplomacy
8. **Atrocity & Aftermath** — Andersonville, civilian toll, the butcher's bill

## Cross-links (the War↔Civ axis — the marquee feature)
- Ch 1 → `antebellum-america` (the slavery crisis it leans on)
- Ch 10 → `reconstruction` (hands off the unfinished work)
- Outward where apt: `early-american-republic`, `civil-rights-era`, and a British
  TL for cotton diplomacy if one exists.
- Civ→War backlinks (the backward pass) edit existing civ files — HOLD until the
  main-session corpus sweep settles (collision avoidance).

## Pipeline coordination
- Link layer, reader, voice, map plumbing, ship-check transfer as-is.
- **Do NOT edit shared gate scripts in place** while the main session is sweeping
  on `main`. For the pilot, make per-`kind` additions (categories → kind-aware,
  like `KIND_ACCENT`) or copy minimally; do the clean kind-aware refactor + merge
  after the sweep settles.
- Map prompts need a war template (fronts/advances, not territorial extent).

## Scale & build strategy (read this honestly)
Variable depth keeps this from exploding: ~45 Decisive at full length, ~104
Major at medium, ~128 Mid at a paragraph ≈ **~80–100k words** — still the
largest single content effort in the project, and storytelling-first +
zero-hallucination means it CANNOT be mass-generated and shipped (each story
needs sourcing + craft + the accuracy gates). So **build incrementally:**
0. **Build a FEW battles first** (mixed depth — a decisive full story + a minor
   brief one) and see how the format + writing read. (User, 2026-05-21.)
1. Lock the battle-story format + the 10 chapters (the spine).
2. Author the **~45 Decisive battles** at full quality — shippable, proves the
   format and the pipeline.
3. Expand to **Major (~104)**, then **Mid (~128)** in waves.
The pilot is "done enough to ship/learn" early; the long tail follows.

## War narrative pipeline (recommended — 2026-05-22)
**Canonical, proven spec now lives in `audits/war-content-pipeline.md`** (fact pack
→ author agent → fact-check + storytelling critic in parallel → revise → integrate;
kind-aware for battle vs theme sections; proven on Antietam). The summary below is
retained for context.
A war narrative is DONE only after all of:
0. **Source** — seed each battle's stat block from the CWSAC catalog + Wikipedia
   battle infoboxes (machine-assist the numbers; prose is authored).
1. **Author** — section narratives, storytelling-first, variable depth. Chapter
   shape: an orientation subsection (eyebrow + h2) → timestamped/themed
   subsections → close. Apply **person side-tags** (every named combatant,
   once per section — see memory feedback_war_person_side_tags).
2. **Sourced accuracy fact-check — MANDATORY, the zero-hallucination floor.**
   Verify every date / number / name / place / geographic claim against a
   source; fix, or flag-as-uncertain. This is NOT covered by the persona audit:
   the Gettysburg "fishhook" error sailed past the original author AND a casual
   re-read. Ported mockup prose must clear this too (it is reference, not truth).
3. **5-persona narrative audit** (`.claude/skills/audit-narrative.md`) PLUS a
   **war POV persona** ("told from one side? both sides represented?"). Persona-D
   flow + all factual/citation findings = must-fix.
4. **Images** — self-host PD/licensed only (Commons hotlinking 429-blocks in the
   browser); verify each filename resolves; track credit + license (some maps are
   CC-BY). Photos on section cards; maps inside narratives.
5. **Links** — glossary links + cross-modal war↔civ links (once on the real
   reader engine).
6. **Gates** — when lifted from the prototype TSX into real content format
   (`narratives/*.md` + data), run the standard gates adapted for the war
   category set. Do NOT edit shared gate scripts during the main-session sweep;
   make them kind-aware afterward.

## Status & handoff (updated 2026-05-22, session 4 — COLD START READ THIS FIRST)

**SHIPPED TO PRODUCTION (soft launch).** `feat/phase-2` was merged into `main`
and is **LIVE on stuffhappened.com**. War is a **soft launch**:
`TL_KIND_LIVE.war = false`, so the War tab carries a **SOON** marker, but the app
is fully reachable and the built sections work. The civ site is unchanged.

**Workflow now (important — two worktrees):**
- War dev continues in the `feat/phase-2` worktree
  (`/Users/mberning/projects/personal/timeline-v2-phase2`, dev `npx next dev
  -p 3007`). Edit there → preview on :3007 → commit + push `feat/phase-2`.
- To ship: from the **main** worktree
  (`/Users/mberning/projects/personal/timeline-v2`):
  `git fetch && git merge --no-ff origin/feat/phase-2` →
  `rm -rf out && npm run build && npx wrangler deploy` → `git push origin main`.
  Merges are clean/additive (phase-2 is behind main on civ but never touches civ
  files; merge-tree shows 0 conflicts). **The main worktree has unrelated
  uncommitted files from a paused civ session (`next-env.d.ts` + untracked) —
  leave them alone** (don't `git checkout --` or `git add -A`).

**Navigation model (finalized this session):**
- **Two homes:** `/war` = the **all-wars front door** (every US war — the
  `WarFrontDoor` escalating list); `/war-civil-war` = the **ACW home** (one war).
  Breadcrumb ladder = **War › [war] › Theatre › Battle**, growing as you descend.
- **Mode tabs navigate** (`ModeSwitcher`): Civ → `/`, War → `/war` (real URLs via
  `MODE_ROUTE`, not in-place swap). Art/Music stay in-place coming-soon.
- **The war home wears the breadcrumb bar**, not the tab strip — showing just the
  **first 2 pills: War › All Wars** (Theatre/Battle appear only after you pick a
  war). `warHomeCrumbs()` builds it; `/war` = `WarBreadcrumb` + `WarFrontDoor`
  (its internal dark-toggle suppressed via `showToggle={false}`).
- The leftmost **War** crumb's dropdown (Civ/War/Art/Music) leaves to the civ app
  from any war page.

**War color system (finalized this session):**
- **`WAR_ACCENT` = neutral stone `#8a7a66`** (in `war-chrome.tsx`) — the War
  vertical's identity color for the **war-level pills** (All Wars home, the current
  war "ACW", and the ACW home accent). Deliberately OUTSIDE the 5 theatre/era hues
  so it never collides with a theatre.
- **Theatres keep vivid colors:** Eastern violet, Western blue, Trans-Miss amber,
  Naval rust, Off-the-Battlefield green. **Era-band colors** (the same 5 hues)
  group wars in the all-wars list/dropdown only.
- **Only the actually-current crumb lights up** (`emphasized = !!c.active` — the
  trailing generic picker no longer lights just for being last). Ancestor crumbs
  show a compact `short` label (e.g. "Off-Field", "Eastern") to keep the trail
  narrow on a phone.

**Built this session:**
- **Emancipation Proclamation theme** — run end-to-end through the war content
  pipeline (`off-the-battlefield/emancipation`, green accent, Carlton "Waiting for
  the Hour" hero; shows on the Off-the-Battlefield + home timelines). **First theme
  built — proves the theme content type.** 13 of 14 themes are still "Soon".
- **Front-door war cards support real hero images** (gradient fallback); the ACW
  card on `/war` uses `civil-war-hero.jpg` (Fort Wagner) with a bottom scrim.
- Timeline cards: fixed the image↔text gap; theme cards now carry `Theme.img`.
- `war-content-pipeline.md` gained: short-bc-label + accent-must-be-`'use client'`
  rules, and the theme-needs-`img` integration step.

## ▶ OUTSTANDING WAR DEBT — locked in 2026-05-23 (read before resuming war)

The pilot is **parked in a clean, shipped state** so attention can move to the Art
section. This is the complete, deduplicated ledger of what the war vertical still
owes — verified against the code 2026-05-23, not relayed from older notes. Two
buckets: **debt to close** (real defects/gaps) and **planned content** (the
user is fine with this coming later — NOT debt).

**DEBT TO CLOSE (finite, should be done before the war section is called "done"):**
1. **Theatre `(est.)` casualty/strength figures — accuracy fact-check owed.** The
   theatre-page casualty splits are mockup ESTIMATES, labeled `(est.)` in the UI
   (`src/components/mode/theatre-page.tsx` ~line 188). They never went through the
   fact-checker. Run a fact pass; replace with sourced figures (with the scholarly
   range) and drop the `(est.)` tag, OR keep the tag if a number is genuinely
   contested. This is the one place a UN-fact-checked number is currently live.
2. ~~**Gettysburg storytelling retrofit.**~~ ✅ **DONE 2026-05-23.** The marquee
   battle was re-run end-to-end through the full pipeline (fact pack → 3 author
   agents [Day 1 / Day 2 / Day 3+aftermath] → THREE gates [fact-check + storytelling
   + the new comprehensiveness critic] → revise → integrate). All 5 sections
   (`setting`/`mcpherson`/`hooks`/`pickett`/`aftermath`) elevated: human-cost-first,
   dual POV, fact-corrected (Reynolds "behind the ear"; Culp's Hill = Johnson's one
   division; the "shoes" legend recast; Address 271 words / "on this continent" /
   train + "failure" myths dropped; Imboden not Stuart; the shaky "heard in
   Pittsburgh" cut), and comprehensiveness-enriched (Harrison the spy; Ewell
   declining Cemetery Hill with the Lost-Cause framing; the "Pickett's Charge"
   misnomer; "Lee never invaded the North again"; the Confederate slave-hunt during
   the march north). Records: `audits/war-pipeline/gettysburg-*.md`.
2b. ~~**Pre-gate war sections never quality-passed.**~~ ✅ **DONE 2026-05-23.** Antietam
   and the two Off-the-Battlefield themes (Slavery & Cotton, Emancipation) were built
   before the comprehensiveness/clarity/framing gates existed, so they were re-run
   through the now-**FIVE-gate** pipeline. All three came back NEEDS WORK with real,
   sourced gaps; every MUST-ADD/MUST-FIX closed and all new material fact-checked at
   creation. Antietam: Hood's counterattack, Hooker wounded + Mansfield's XII corps/death,
   the Irish Brigade absolution (Fr. Corby, ~540 lost). Slavery & Cotton: Northern
   complicity, the Slave Power/Three-Fifths bridge, enslaved agency/resistance. Emancipation:
   contraband self-emancipation (Fort Monroe 1861) ahead of the Confiscation Acts, the USCT
   equal-pay fight, a Juneteenth + Black Codes closing, de-centered Lincoln framing. Plus
   newcomer clarity glosses throughout. Records: `audits/war-pipeline/{antietam,slavery-cotton,emancipation}-{factpack-addendum,retrofit}.md`.
   **Pipeline change:** added two standing gates — a **newcomer/clarity critic** ("can a
   zero-knowledge reader follow this?") and a **Lost Cause/framing critic** ("is it fair?")
   — making five total; **continuity** is a corpus-level sweep, not per-section. See
   `audits/war-content-pipeline.md`. (Gettysburg above was run at the 3-gate stage; it
   predates clarity/framing and could get a light pass if ever re-touched — not owed.)

**INTEGRATION DEBT (deferred by design — tied to the civ corpus sweep settling):**
3. **Real reader-engine integration + glossary links.** War sections are currently
   bespoke TSX pages, not run through the civ reader/link pipeline. Wire them in +
   add glossary/cross-modal war↔civ links once the main-session corpus sweep is
   done (collision avoidance — do NOT edit shared gate scripts from the war stream
   while the sweep runs on `main`).
4. **Kind-aware gate refactor.** Make the shared gates `kind`-aware (battle/theme/
   civ) instead of the current minimal per-`kind` additions. Also gated on the
   sweep settling.

**OPTIONAL / COSMETIC (offered, user has not asked for it):**
5. War-level identity color is the understated stone `WAR_ACCENT` (#8a7a66). A
   bolder distinct hue was offered, not done. Only revisit if the user wants it.

**PLANNED CONTENT — NOT debt (user explicitly fine with this coming later):**
- **14 of 17 Off-the-Battlefield themes** still "Soon." BUILT: Slavery & the Cotton Economy,
  Emancipation, and **The Freedom Struggle** (2026-05-23 — first theme built under the
  causes-first direction; first full FIVE-gate run; framing gate passed, fact-check clean;
  3 self-hosted PD images). Causes/off-the-battlefield is the app's HEART (see Governing
  principle + memory/project_war_causes_first). Roster grew 2026-05-23 after gating the LIST itself: added
  *The War Within the North* (dissent + the 1864 election) and *Lincoln's Rise & the
  Election of 1860*; *The USCT* broadened to *Freedom Seekers & the USCT* (self-emancipation
  + soldiers). Build them through the now-5-gate pipeline; when building the causes themes,
  honor the framing requirement noted in `src/lib/civil-war-roster.ts` (quote the secession
  declarations + Cornerstone Speech). PARKED roster candidates: a Confederate home-front/
  war-finance theme, and a Native-Americans theme (Indian Territory + 1862 Dakota War).
- The Major battle tail (~46 CWSAC Class-A) + the longer A+B+C ~280-battle ambition.
- These are a sustained content campaign, run one section at a time through the
  proven pipeline. The user has signed off on them arriving over time; their
  absence is the soft-launch plan, not a defect.

**State for the Art pivot:** `feat/phase-2` == `main` for war (Slavery & Cotton
merged + deployed + prod-verified 2026-05-23). No war work in flight, no agents
running, nothing half-built. Safe to switch focus to Art.

## Status & handoff — sessions 1–3 (prior; still accurate)
Worktree `/Users/mberning/projects/personal/timeline-v2-phase2` (branch
`feat/phase-2`, all committed + pushed). Dev: `npx next dev -p 3007`.

**BUILT & live on :3007 (sessions 1–3):**
- **War front door** (`war-civil-war/page.tsx`) — REBUILT this session: image
  hero (Fort Wagner, `civil-war-hero.jpg`); collapsible **At-a-glance** matching
  the theatre style (full-bleed, violet); **TheatresInteractive** — a DottedMap
  US map + segmented control + active theatre panel; sticky Timeline/Dossier
  views (`useWarView`). NODES carry `img` + Antietam href.
- **Theatre pages** — `eastern/page.tsx` AND `western/page.tsx` both built, using
  **DottedMap** (real state outlines, NOT the old pixel-art — that was rejected).
  Collapsible At-a-glance, dotted strategic map, interleaved-campaign timeline,
  theatre-switcher dropdown in the breadcrumb.
- **Breadcrumbs on narrative pages** — `War > American Civil War > Theatre >
  Battle` (narratives dropped from the crumb; war title can shorten, e.g. ACW).
  The **theatre pill is a "you are here"** indicator: gray on battle pages, accent
  on the theatre page. `CrumbDropdown` menu is `position:fixed` (the nav's
  `overflow-x:auto` clipped an absolute menu).
- **Two FULL battles:** **Gettysburg** (dossier + 5 sections) and **Antietam**
  (dossier + 4 sections: lost-order, cornfield, bridge, bloodiest) — Antietam was
  the **first battle built through the formal pipeline** this session.
- **Shared reader component** `src/components/mode/battle-reader.tsx`
  (`BattleSectionReader`) — each battle is now a thin data file (`GB_NARR`,
  `ANTIETAM_NARR`). Dossiers carry: full-bleed PD hero (`scale(1.16)` to crop
  mats), At-a-glance, **commander headshots** (`public/war-img/cmdr/<slug>.jpg`,
  blue/rust rings), integrated **Outcome card** (verdict + 2–4 sentences), section
  list (each a distinct image). Battle cards on theatre + home timeline carry the
  battle's hero `img`. All photos full-frame (`objectFit:cover` + `scale(1.16)`).

**Maps — RESOLVED this session: MODERN TEXTBOOK style, generated.**
- Style decision (user picked, 2026-05-22): a **clean modern textbook map (Hal
  Jespersen / NPS look)** — pale ground, sage woods, gold fields, blue/rust troop
  **unit blocks**, bold arrows, sans labels. This **replaced the old flat-tan
  schematic** (which read "awfully plain"). We tested antique-parchment vs.
  modern-textbook on the Cornfield; user chose modern.
- We **generate** them via `scripts/generate-war-maps.mjs` (Gemini, `map-prompts/
  war/<war>.md` → `public/war-img/<slug>.png`). Run: `node --env-file=/Users/
  mberning/projects/personal/timeline-v2/.env.local scripts/generate-war-maps.mjs
  <war> [--map <slug>] --ar 4:3 --force`. The modern house-style rules are the
  preamble of each war's prompt file — **copy that preamble for a new war.**
- **All 11 shipped battle maps regenerated in the modern style this session:**
  Antietam (campaign, cornfield, sunken-road, bridge) + Gettysburg (day1, day2,
  day3, lrt, wheatfield, culps, campaign). All geography-verified.
- **A map-review GATE is in the pipeline** (`war-content-pipeline.md` step 6b):
  review every map for TACTICAL/GEOGRAPHIC correctness (defensive line faces the
  attack; arrows match the action; positions right), not just label hygiene.
  Lessons baked in: the Cornfield line was first drawn facing the wrong way; the
  campaign map duplicated a label — both caught + fixed by re-rolling.
- (Free real maps exist if we ever want them — **Hal Jespersen, CC-BY 3.0** on
  Commons; NPS/West Point atlas, PD; American Battlefield Trust is copyrighted.
  Not used — we went with our own generated modern style for house consistency.)

**Theatre layer + navigation — BUILT this session (2026-05-22):**
- **Single source of truth:** `src/lib/civil-war-roster.ts` — the 46 CWSAC
  Class-A majors + 14 locked theme sections, with `theatreEv` / `theatreSpine` /
  `SPINE_NODES` / `THEATRE_NAV` helpers. Every war-page timeline reads from it
  (home spine, home dossier, all theatre pages); no more hand-maintained copies.
- **Shared `<TheatrePage>`** (`src/components/mode/theatre-page.tsx`) — Eastern +
  Western were ~95% duplicate; all structure (hero, At-a-glance, commanders strip,
  interleaved campaigns, timeline spine) now lives here, driven by per-theatre
  `TheatreData`. Each theatre page is just its data object + a `<DottedMap>`.
- **All five "theatres" now exist:** Eastern (violet), Western (blue),
  **Trans-Mississippi (amber, NEW)**, **Naval & Coastal (rust, NEW)**, **Off the
  Battlefield (green, NEW** — non-geographic fifth lane: the 14 themes as a
  chronological timeline spine, no army face-off / no battle map, and **no
  Timeline/Dossier toggle** — it's a subject list, so breadcrumb-only + the one
  spine view). Trans-Miss + Naval have PD hero art (Kurz & Allison Pea Ridge;
  Prang/Davidson Mobile Bay) and 10 identity-verified PD commander portraits
  (lyon/curtis/price/van-dorn/kirby-smith; farragut/dd-porter/dupont/buchanan/
  semmes). Casualty/peak figures are flagged `(est.)` — still owed the accuracy
  fact-check pass.
- **Unified breadcrumb (`civilWarCrumbs()`):** every ACW page shows the full trail
  **War > ACW > Theatre > Battle/Event**, with Theatre AND Battle/Event both as
  interactive dropdowns everywhere. Theatre = color-coded switcher; Battle/Event =
  **chronological** jump list of all 46 majors + 14 themes, color-coded by theatre
  (the dot), built battles link (and show their date on the right), the rest
  "soon". Leaf crumb gets accent emphasis. On the home page both are generic
  pickers. `CrumbDropdown` gained color dots, scrolling + viewport clamping, and
  **closes on any outside tap** (a fixed overlay can't be used — the bar's
  backdrop-filter is the containing block for fixed children).
- **Timelines now show ready vs. soon** (BattleCard `soon` badge + dimmed) and use
  consistent colored dots. Home page got the 5th "Off the Battlefield" lane.

**PENDING (next session):**
0. ~~Battle-map review for the two NEW theatre maps~~ — **DONE**: user eyeballed
   the Trans-Miss + Naval `<DottedMap>`s in-browser (2026-05-22) and approved.
1. **Retrofit Gettysburg's narrative through the pipeline** — it's over-tactical /
   human-light (the v0 lesson) AND has a known factual error: Greene "West Point
   classmate of Lee" is false (no class overlap). Run author→fact-check→critic.
3. **Scale the Major battles** (~46 in the "just majors" cut — see
   `war-engagements-roster.md`) through the proven pipeline, + the ~15 locked
   non-battle/theme sections (Emancipation, etc.).
4. Real reader-engine integration + glossary links; kind-aware gate refactor
   after the main-session corpus sweep settles.

Scope (locked 2026-05-21): American Civil War; ~10 chapters; battle layer A+B+C
~280, variable-depth; 8 categories signed off; storytelling-first. Pipeline spec:
`audits/war-content-pipeline.md`. Roster: `audits/war-engagements-roster.md`.
