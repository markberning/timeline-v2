# War Pilot — American Civil War (scope-lock / build spec)

Phase-2 War vertical, pilot #1. Built in the `feat/phase-2` worktree. The point
of the pilot: push the forked civ pipeline end-to-end on one war and let it
reveal what actually breaks — before building any other war. `kind: 'war'`.

## Governing principle
**Good storytelling is the top priority — with factual accuracy and zero
hallucination as non-negotiable hard constraints.** Every section leads with
narrative (prose first, stats second); nothing is a bare stat sheet. Accuracy
never bends to story: dates, numbers, quotes are sourced. See
`memory/feedback_storytelling_first`.

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

## Status & handoff (updated 2026-05-22, session 2)
Worktree `/Users/mberning/projects/personal/timeline-v2-phase2` (branch
`feat/phase-2`, all committed + pushed). Dev: `npx next dev -p 3007` (was running
all session). Canonical design = `mockups/war-prompt.zip` →
`design_handoff_war_drilldown/` (README spec + source jsx; extract with `unzip -o
mockups/war-prompt.zip -d /tmp/wardh`; `war-detail-deeper.jsx` holds
EasternTheatrePage + ET data). Mockup viewer (local only, NOT committed): copy
`mockups/Historica - War Drilldown.bundled.html` → `public/` → open
`/mockup-war-drilldown.html`.

**BUILT & live on :3007** — Slice 0; War front door; shared chrome
(`war-chrome.tsx`, now with a **dropdown-capable breadcrumb** — a `Crumb` with
`options[]` renders `CrumbDropdown`) + cord card. **Battle dossier (Gettysburg)
FULL**. **5 section narratives FULL** (`…/gettysburg/s/[section]`) — progress bar
REMOVED this session. **Eastern Theatre page (`eastern/page.tsx`) FULLY REBUILT
this session** (was rough oxblood): GenericHero (period Kurz & Allison Antietam
print, zoomed past the mat) · collapsible **At-a-glance** with battle-page
Hide/Show control, containing stat strip + armies face-off w/ commander trail +
casualties bar + **commanders strip (folded in, under casualties)** · **8-bit
pixel-art geography map** (PA/MD gray, VA violet, capitals = blue/rust pixels,
Washington–Richmond 110 mi axis) · interleaved-campaigns timeline (4 theatres,
Eastern in colour, Gettysburg taps through) · **theatre-switcher dropdown** in
the breadcrumb (Eastern live; Western/Trans-Miss/Naval = "soon"). Hero eyebrow
recolored violet→`#c4b5fd` (was unreadable) on BOTH pages; both heroes zoom
`scale(1.22)` past the print matting. Images self-hosted in `public/war-img/`.

**War-map tooling built this session:** `scripts/generate-war-maps.mjs`
(standalone; does NOT touch the civ `generate-maps.mjs`) reads
`map-prompts/war/<war>.md` (`## Map <slug>` sections) and writes
`public/war-img/<slug>.png`. Run: `node --env-file=/Users/mberning/projects/
personal/timeline-v2/.env.local scripts/generate-war-maps.mjs gettysburg --map
day2 --ar 4:3 [--force]`. The 7 Gettysburg narrative maps were regenerated as
clean flat schematics matched to the prose (overview + per-moment: LRT,
wheatfield, culps). Color words (BLUE/RUST) are ink instructions, never labels
(hardened in the prompt after day1 printed "RUST"). Devil's Den caption fixed
(it's a wartime sketch, not a post-war photo).

**PENDING (next session):**
1. **War dossier rebuild** (`src/app/war-civil-war/page.tsx`) — still rough; port
   the interactive Theatres block (US map + commanders + segmented control) + hero
   + At-a-glance, from `TheatresInteractive`/`WarDossierTheatresV2` in
   war-detail-deeper.jsx. Reuse the new `CrumbDropdown` if useful.
2. **Accuracy fact-check the narratives + theatre data** (storytelling-first's
   zero-hallucination floor) — known: Vicksburg distance inconsistent
   (600/800/1000 mi → ~900); Greene "cadet at West Point with Lee" (likely no
   class overlap); ET casualty splits (145k/95k/8k civilian) are MOCKUP ESTIMATES
   (labeled "(est.)"); ET "Battles: 8" stat vs 10 Eastern events on the timeline —
   count mismatch to reconcile.
3. **`map-prompts/war/eastern-theatre.md`** (corridor schematic) was written but
   the generated image is UNUSED — the 8-bit CSS/SVG map replaced it (user
   preferred the pixel grid). Gemini's image API was throwing transient "fetch
   failed" late this session (5×); retry war-map generation next time if needed.
4. Other theatre pages (Western/Trans-Miss/Naval) are data-only, marked "soon" in
   the dropdown — build later if wanted (user chose "dropdown now, others soon").
5. Real reader-engine integration + glossary links; then scale battles
   (Decisive 45 → Major → Mid).

Scope (locked 2026-05-21): American Civil War; ~10 chapters; battle layer A+B+C
~280, variable-depth; 8 categories signed off; storytelling-first.
