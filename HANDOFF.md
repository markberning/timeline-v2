# Handoff — cold-start brief

_Current 2026-05-17. Overwrite the dated/state sections when they change; operational notes are stable. Read this top-to-bottom before doing anything._

---

## ▶ STATE

Two things were in flight this session, both well-checkpointed in git. Nothing is merged to `main`; nothing new is deployed since goryeo.

### Worktree / branch topology (IMPORTANT — get this right first)
- **Primary checkout** `/Users/mberning/projects/personal/timeline-v2` → branch **`main`** = coordinator + integration + publish. `main` HEAD ≈ `8e3fcff` (goryeo shipped/live + the publish-policy/anti-dodge/prefilter commits).
- **uyghur-steppe build worktree** `/Users/mberning/projects/personal/the17-wt` → branch **`feat/the-17`**. ALL uyghur work + the step-11 backward-pass edits are committed here (latest ≈ `b0c79da`). node_modules symlinked, `.env.local` copied, enrichment-cache snapshot-copied in.
- **Remediation slices**: 5 agent worktrees, branches **`chore/g12-{a,b,c,d,e}`**, each COMPLETE & committed, **never pushed, NOT merged**. Final shas: a `2b3b545` · b (~`chore/g12-b` tip) · c `a5d4dae` · d `122c886` · e `3c5ae9a`.

### Civ #1 of the 17 — `uyghur-steppe` (Goryeo trial passed; goryeo is shipped & live)
On `feat/the-17`. Pipeline (CLAUDE.md steps 0–14):
- ✅ Steps 0–10: reference pool (104 events) → user-approved 8-movement map → 8-chapter draft (~11k words) → 5-persona audit (Persona-D ship gate PASSED: 7 STRONG/1 GOOD) → all must-fixes → registered (navigator-tls `hasContent:false`, tl-chains Central-Asian-Steppe between gokturk-khaganate & mongol-empire, parse-narratives) → links curated (G2 `lint:links --strict` 0 ERROR, G3 coverage 0 gated, 17 waived) → summaries → `npm run parse` (G1 density + G2 green, content/manifests/search-index generated, events enriched).
- ✅ Step 11 backward pass: 16 Persona-E findings → cross-links FROM 8 reference TLs INTO uyghur (gokturk×4, persian×1, mongol-empire×4, tang-song×3, IGA×1, goryeo×1, viking×1, byzantine×1); every touched TL `lint:links --strict` 0 ERROR. Committed `b0c79da`.
- 🔴 **IMMEDIATE NEXT — Step 10c G11 has 13/26 FAIL.** `node --env-file=.env.local scripts/audit-crosslinks.mjs uyghur-steppe` (run from `the17-wt`) → `CROSSLINK-FAILURES-uyghur-steppe.txt`. All 13 are **wrong `targetChapter`** in `content/.cross-links-uyghur-steppe.json` (the link-fanout agents guessed target chapters without reading the target TLs). FIX: for each failing cross-link, open the target TL's narrative, find the chapter that actually covers the blurb's topic, set `targetChapter` to it (and tighten the blurb if needed). Re-run G11 until `13 PASS`→`26 PASS` / artifact gone. Examples from the run: Byzantine Ch9 is the 1204 Fourth Crusade not 1071 Manzikert; IGA Ch7 is Umayyad Córdoba not the Abbasid economy; IGA Ch3 is al-Khwarizmi not the Samanids; Mongol-Empire Ch2 is Temüjin's childhood not the Uyghur-admin adoption; tang-song Ch8 is Song society not the Jin invasion.
- ⬜ Then, in order: **G10** `audit-events.mjs uyghur-steppe` (text+vision, 104 events/70 photos — fix slugs/`.image-*` overrides, re-run clean) → **G12** `audit-glossary.mjs uyghur-steppe` (text; the def-skip + anti-dodge prefilter are in the gate; fix to clean) → **G4 maps** `node --env-file=.env.local scripts/maps-build.mjs uyghur-steppe` (prompt `map-prompts/uyghur-steppe.md` is authored & lint-clean: lint-prompt→gen→vision-QA→auto-regen→optimize) → **ship-check** `node scripts/ship-check.mjs uyghur-steppe` must be CLEAR → flip `uyghur-steppe` `hasContent:true` in `src/lib/navigator-tls.ts` → **publish** (see policy below).
- Gemini contention is GONE (all 5 slices finished); the billable tail can run now.

### Corpus remediation — G12 5-slice fan-out: COMPLETE, parked
All 5 slices done (A `2b3b545`, B, C `a5d4dae`, D `122c886`, E `3c5ae9a`), each in its own worktree on `chore/g12-{a..e}`, **not merged**. Together they triaged the existing-100 alive-but-wrong glossary slugs. **Do NOT merge them as-is** — they ran on the pre-anti-dodge calibration. After uyghur ships, the **coordinator dodge-sweep** must:
1. Re-audit every slice's "broad-parent + waiver" resolution under the tightened anti-dodge canon (CLAUDE.md step 10d + `audit-glossary.mjs` prompt now FAIL a specific-term→whole-civ/empire dodge; the live `ʻinasi → Tuʻi Tonga Empire` case is fixed on `main`).
2. Author the **blurb-queue residuals** (each slice's `audits/g12-blurb-queue-{A..E}.md`), including the **MUST-FIX hittite-empire `Panku`** (currently resolves to Pangu, a Chinese deity — same-name-different-thing; needs an authored def before hittite-empire re-ships).
3. Build backlog **#17** (the def-blurb coherence gate, `audits/corpus-remediation-backlog.md`) — reframed as a post-hoc blurb audit, not a prerequisite to authoring definitions.
4. Then merge the cleaned slice branches → `main`. Slices touch only `.glossary-links-*`/`.glossary-slug-waivers-*` (disjoint per slice; the backward pass touched `.cross-links-*` — different family, clean merge).

### Publish policy — ASK-GATE LIFTED (user, 2026-05-17)
"You publish when you think it is ready, no need to ask." When uyghur passes ship-check + the `build-static.mjs` shipped-page guard: flip `hasContent`, merge `feat/the-17` → `main`, `rm -rf out && npm run build && npx wrangler deploy`, push — **autonomously, no asking** (worktree isolation + the shipped-page guard replace the old gate; gates still enforced, just not the *ask*). **Caveat:** a legacy settings.json PreToolUse hook may still hard-block `git push`/`wrangler` — check `.claude/settings*.json` and clear/relax it before the first unattended publish (update-config skill). PushNotification the user at ship-check pass and at publish (Remote Control is connected).

---

## Exact remaining order
1. uyghur **G11**: retarget the 13 failing cross-link `targetChapter`s → re-run clean. Commit on `feat/the-17`.
2. uyghur **G10** → fix → clean; **G12** → fix → clean. Commit each.
3. uyghur **G4 maps**: `maps-build.mjs uyghur-steppe`; eyeball borderline maps, `.map-waivers` a stochastic-frame chapter rather than burn re-rolls (hairline ≠ defect — recalibrated). Commit maps.
4. uyghur **ship-check** CLEAR → flip `hasContent:true` → merge `feat/the-17`→`main` → clean atomic build (guard) → `wrangler deploy` → push. PushNotification at ship-check pass + publish.
5. **Dodge-sweep** + blurb-queue authoring (incl. hittite `Panku`) + #17 → merge `chore/g12-{a..e}` → `main` → publish.
6. Next civ of the 17: `audits/phase-1.5-roster.md` (babylon-to-persia DROPPED — see roster note; pick the next). Roster is 16 firm.

## Operational notes (stable)
- **No heredocs in bash** (`<<EOF`) and no apostrophes in chained `-m` — both mangle silently here. Use multiple `-m` flags; write throwaway `.mjs` via the Write tool, not shell heredoc.
- `content/` is fully gitignored. `git add -f` the new TL's `.event-links/.glossary-links/.cross-links/.link-waivers/.event-slug-waivers/.glossary-slug-waivers/.map-waivers-{tl}.json` + every reference `.cross-links-{ref}.json` touched in the backward pass. `content/{tl}.json`, `public/offline/*`, **`public/search-index.json`** are gitignored regenerated artifacts — never commit.
- Commit email `mebernin@gmail.com`; trailer `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`.
- `.env.local` has `GOOGLE_API_KEY` only; gate scripts run Gemini `gemini-3-pro-preview`. Run uyghur gates from `/Users/mberning/projects/personal/the17-wt`.
- Subagent fan-out lessons → memory `project_g12_fanout_lessons` (non-determinism: treat a new re-audit FAIL as a real find; agents must use absolute worktree paths & never touch the canonical repo; snapshot-copy not symlink the enrichment cache; no post-completion monitors; ~5 concurrent is the API ceiling). Other key memories: `feedback_publish_gate` (lifted), `feedback_autonomous_the17_build`, `feedback_dont_over_generalize_defect_rules` (hairline ≠ defect; waived/accepted maps are settled — don't reopen).
- Repeat "completed" notifications from a finished agent = no-op; do not re-engage.

## Background / roadmap
- 101 civs shipped (`hasContent:true`), goryeo-korea live. The 17-civ Phase-1.5 roster (`audits/phase-1.5-roster.md`, now 16 firm; babylon-to-persia dropped as a duplicate of shipped persian-empire) is the work; uyghur-steppe is civ #1, ~85% through its pipeline.
- Corpus-remediation backlog: `audits/corpus-remediation-backlog.md`.
