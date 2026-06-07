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

- **Paid-API-key rule (locked 2026-06-07, standing user directive).** Any step that
  spends money against a paid API key is announced **loudly, in plain language,
  BEFORE it runs** — name the step, the key, the rough cost — never run silently.
  The **only paid step in the war build is map generation** (Gemini image API). The
  **born-verified image pass costs nothing**: it pulls only free public-domain sources
  (Library of Congress `tile.loc.gov`, the Wikimedia Commons API, `upload.wikimedia.org`)
  with a plain paced downloader, no key. An image pass needs no warning; a map regen does.
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

---

## 6. Target (deferred): one system

War #3 should NOT invent a fifth storage format. The intended end state is the F&I
block-array model (clean TS data + one shared renderer) for every surface, with the
hardcoded CW interior lifted into per-war `WarConfig`. Plan: `audits/war-second-war-plan.md`.
Do this as its own project before war #3; it is not a blocker for voice/content work
on the existing two.
