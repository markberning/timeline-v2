# Handoff — cold-start brief

_Current as of 2026-05-17. Overwrite the dated/state sections when they change; the operational notes are stable._

---

## ▶ IMMEDIATE TASK: pipeline trial on `goryeo-korea`

This is a **shakedown of the rewritten gated pipeline (G1–G12)** on one of the
17 new civs — the first real end-to-end run, including the first billable run
of the model gates (G4/G10/G11/G12). User-approved trial civ: **`goryeo-korea`**
(Goryeo Korea, 918–1392; roster `audits/phase-1.5-roster.md` #4).

It is a **chain-bridge** insert: Korean chain becomes `ancient-korea →
goryeo-korea → joseon-korea` (add to `reference-data/tl-chains.ts`); add the
`goryeo-korea` entry to `src/lib/navigator-tls.ts` (region `asia`, 918–1392,
`hasContent: false` until ship-check passes). Chosen because it exercises every
gate — especially the high-risk cross-civ ones (G7 backward into shipped
`mongol-empire`/`tang-song-china`; G11) — at a tractable ~8–10-chapter size.

**Do exactly this:**
1. Follow **CLAUDE.md "Content Pipeline"** start to finish. **Stop at step 0.5**
   and get the narrative-movement map (chapter list + one-line throughline each)
   **user-approved before writing** — this is a hard gate.
2. Run every gate. First time the QA model is hit for real: **confirm the
   `gemini-3-pro` model id works** (`scripts/audit-maps.mjs`,
   `audit-events/crosslinks/glossary`); they are fail-closed, so a bad id fails
   loud — fix via `--model` and record the working id back here.
3. Treat this as a **pipeline test**: when a gate fires, note whether it caught
   a real defect or mis-fired, so the pipeline can be tuned before the other 16.
4. `npm run ship:check goryeo-korea` must pass before flipping `hasContent`.
5. Report trial results (what each gate caught, model id used, cost, rough
   surprises) so we decide go/no-go for the remaining 16.

---

## Where the project is

- **All 100 navigator TLs are shipped** (`hasContent: true`). The original-100 build is **done** — do not "continue" it.
- **The content pipeline was rewritten from diligence-based to GATE-enforced (G1–G12).** The authority is the **CLAUDE.md "Content Pipeline"** section (gated steps 0–14). Resolution ledger: `audits/pipeline-audit.md`. Do not follow any older "per-civ workflow" — this file no longer carries one; CLAUDE.md does.
- **Next work = the LOCKED 17-civ roster:** `audits/phase-1.5-roster.md` (✅ LOCKED 2026-05-17, wars excluded → Phase 2). Build order is in that file; **#1 is `babylon-to-persia`**. Current plan: a **single-civ pipeline trial first** before committing to all 17.

## How to build a civ (the gated pipeline)

Follow **CLAUDE.md "Content Pipeline" verbatim** — it is the gated authority. Key gates that block ship (`npm run ship:check <tl>` must pass before flipping `hasContent`):

- **Step 0.5 (G8):** narrative-movement map → chapter count = number of movements, **no cap**, **user-approved before writing** (hard gate even in no-stop mode).
- **G1 density:** 10–15 events/ch, enforced by `lint-density.ts` (new civs zero-tolerance, never grandfathered).
- **G2 links:** `npm run gate` (lint:links --strict) is wired into `prebuild`; broken matchText fails the build.
- **G3 coverage:** `link-coverage.ts --strict` — every author-bolded term linked or waived.
- **G4 maps:** `node --env-file=.env.local scripts/maps-build.mjs <tl>` (lint-prompt → generate → vision-QA → auto-regen ≤3 → optimize). The old manual "generate then eyeball every thumbnail" loop is RETIRED.
- **G6 flow:** Persona-D WEAK/REWRITE or any "no" build-dependency is must-fix, ship-blocking.
- **G7 backward cross-civ:** mandatory pre-ship (applied or ledgered with a reason), not deferrable.
- **G10/G11/G12:** `audit:events` / `audit:crosslinks` / `audit:glossary` — popup/sheet coherence, fail-closed artifacts ship-check asserts absent.

The QA model gates (G4/G10/G11/G12) are billable; default model `gemini-3-pro`, `--model` overridable, fail-closed — **confirm the model id works on the first real run.**

## Operational notes (stable — supplement the gated pipeline)

- **reference-data/{tlId}.json:** v1 source at `~/projects/personal/timeline/src/data/{tlId}.json` if it exists — preserve every v1 event id verbatim (reuse objects, append new; may fix corrupted v1 `year`). No v1 source → build from scratch, `evt-{tl}-` ids, 6 spans, `{id,label,year,(endYear),description,wikiSlug,tier,tags:[],category}`, 8 category keys: rulers, religion, architecture, science, wars, trade, writing, people. A throwaway Python builder that asserts unique ids + prints the category histogram is the clean way.
- **narratives/{tlId}.md:** front-matter `# {Title} — {Subtitle}` + `**Goal:**` + `**Status:**`; `## Chapter Outline (N chapters)` table; names/pronunciation note; "first"/uncertainty note; chapters as `# Chapter N — Title` (single `#`), `---` section breaks. Apply WRITING-RULES.md.
- **Register** `'{tlId}.md': '{tlId}'` in `scripts/parse-narratives.ts` `NARRATIVE_FILES` (append before the closing `}`).
- **Link files** `content/.{event,glossary,cross}-links-{tlId}.json` keyed by chapter-number string. Parser applies cross → event → glossary, longest matchText first, once outside existing `<a>`. matchText: verbatim plain substring, no span across `**bold**`, no leading/trailing punctuation, not a superset/dupe of another matchText in the same chapter. **No per-TL count targets** — bar is "proper nouns + concepts, no cap" (skip modern country names / universal basics). Validate with `npm run lint:links --tl={tl} --strict` (0 ERROR) and `link-coverage.ts --tl={tl} --strict`.
- **summaries** `narratives/{tlId}.summaries.json`: list, one obj/chapter `{chapter,title,dateRange,bullets}`, 6–10 bullets, plain text, phrasing mirroring the narrative so links auto-inject.
- **map-prompts/{tlId}.md:** GLOBAL RULES preamble (CRITICAL RULES block + chapter-title directive + `{TL} ORIENTATION RULES`); per chapter `## Chapter N — Title` + the rules + map description + ~5 sites + ~4 region labels + 1 annotation. `lint-map-prompt.mjs` gates prompt density before a billable run.
- **Commit hygiene:** `content/` is gitignored — `git add -f` the new TL's three link dot-files **and every `content/.cross-links-{ref}.json` touched in the backward pass**. `content/{tlId}.json` + `public/offline/*.manifest.json` are gitignored regenerated artifacts (do NOT commit). `public/search-index.json` IS tracked (commit it). Commit personal email `mebernin@gmail.com`; trailer `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`; push without asking.

## Still owed (separate, low-urgency)

- **Term-precision cross-civ sweep** — `audits/term-precision-sweep.md` (Scandinavia≠Nordic class). Do only if asked, after the 17.
- **khmer/dai-viet backward residuals** into non-majapahit TLs (`audits/khmer-empire.audit.md` Part 2, `audits/dai-viet.audit.md` Part 2) — fold into the next Persona-E pass whose reference set overlaps.
- **Two pipeline-debt findings** (existing 100, not blocking the 17): ~2211 parser-dropped links (mostly benign overlap) + 559 sub-10-density chapters grandfathered in `audits/density-baseline.json`. See `audits/pipeline-audit.md`.
- **`reference-data/medieval-europe.json`** orphan — safe to delete (the concurrent session that blocked it is finished).
