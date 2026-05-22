# War Pilot — American Civil War (scope-lock / build spec)

Phase-2 War vertical, pilot #1. Built in the `feat/phase-2` worktree. The point
of the pilot: push the forked civ pipeline end-to-end on one war and let it
reveal what actually breaks — before building any other war. `kind: 'war'`.

## Locked decisions
- **Pilot = American Civil War**, 1861–1865 (causes from 1850).
- **~10 chapters**, movement-driven (NOT a template, NOT padded with battles).
- **Ends at 1865** (Appomattox + assassination). Reconstruction is a shipped
  civ TL — the final chapter cross-links into it, doesn't absorb it.
- **One causes chapter**, leans on `antebellum-america` via cross-link.
- **Signature "more than a civ" features for the pilot: A + C.**
  - **A · Dual perspective** — key moments readable from both sides (Union /
    Confederate). A reader POV toggle. Pairs with the war POV audit persona.
  - **C · Battle box-score cards** — date / place / commanders / forces /
    casualties / outcome, richer than a civ event card.
- **Battle layer is two-layer (comprehensiveness):**
  - Narrative chapters are SELECTIVE (the story; major battles inline).
  - A separate battle layer is EXHAUSTIVE — target **Decisive + Major (CWSAC
    A+B, ~150 battles)**, built in tiers (Decisive ~45 first, then Major).
  - Reached two ways: **inline-expandable** battle cards in the prose, and a
    **complete searchable/sortable battle index**.
  - **Source data seeds from the CWSAC principal-battles catalog + Wikipedia
    battle infoboxes** (wars have no v1 timeline file). Machine-assist the stat
    blocks from infoboxes, then edit.
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

## War category set (PROPOSED — needs sign-off)
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

## Status
Scope locked 2026-05-21. Category set pending sign-off. Authoring not started.
