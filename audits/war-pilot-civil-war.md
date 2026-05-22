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

## Status
Scope locked 2026-05-21 (American Civil War; ~10 chapters; battle layer A+B+C
~280, each its own VARIABLE-depth story; storytelling-first). 8 categories
signed off. Next: write a few sample battle stories to validate the format.
