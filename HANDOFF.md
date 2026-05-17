# Handoff — cold-start brief

_Current as of 2026-05-17. Overwrite the dated/state sections when they change; operational notes are stable._

---

## ▶ STATE: `goryeo-korea` pipeline trial — DONE & LIVE. Next work = the 17.

The gated-pipeline shakedown on **goryeo-korea** (Goryeo Korea 918–1392, 8 ch, Korean-chain bridge `ancient-korea → goryeo-korea → joseon-korea`) is **complete, shipped, and published**: `hasContent: true`, all gates green, live at `https://stuffhappened.com/goryeo-korea/` (HTTP 200, byte-identical to the verified build). Corpus is now **101 hasContent civs**. Commits `9b0615c` (ship) + `30ebcd7` (publish gate) pushed to `main` + clean `wrangler deploy`; shipped-page guard confirmed all 101 civs render.

### GO / NO-GO on the locked 17-civ Phase-1.5 roster: **GO**
The trial's purpose was to decide whether to run the remaining 17 (`audits/phase-1.5-roster.md`, build order there; #1 = `babylon-to-persia`) on this pipeline. **Verdict: GO**, conditional on the hardened pipeline below. The central trial finding — *the QA gates were calibrated too strict / fail-closed on acceptable output* — is now fixed, not just documented:
- **G10/G12 recalibrated**: a broad-but-on-subject parent Wikipedia page (same civ/era/thread) is a PASS; only a genuinely wrong page (disambiguation / same-name-different-thing / off-subject/redirect) FAILs. Thin-EN-coverage civs (the African set, Islamic Persia, Muscovite Rus') are now shippable.
- **Per-item waiver mechanisms** built & documented: `.event-slug-waivers` (G10), `.glossary-slug-waivers` (G12), `.map-waivers` (G4), mirroring G3 `.link-waivers`.
- **Map-QA rubric recalibrated (4th locked correction, user-approved 2026-05-17):** the stochastic ~1px reader-invisible edge hairline is NOT a defect; only a thick/ornamental/boxed/matted picture-frame enclosure or an interior border FAILs. This removes the single biggest cost/stoppage driver (~75 forced re-rolls/waivers projected across the 17). Memory `feedback_dont_over_generalize_defect_rules`, `map-prompts/README.md`, and the `audit-maps.mjs` locked-criteria comment all updated to match.
- **🔴 Critical bug fixed**: default model `gemini-3-pro` was invalid (404) → `gemini-3-pro-preview` in all 4 gate scripts. Would have broken every billable gate for all 17.
- **G10 hybrid Stage-2** (free Commons-filename + caption text pass; pixel-vision only on the unsure residual) — ~80–90% of vision cost & 429 stalls removed.
- **G7 step-11 rescoped**: a backward edit must add no NEW lint errors to a touched reference TL (vs its pre-edit state); pre-existing grandfathered rot is the corpus-remediation backlog, not a per-civ blocker.

### Trial findings that carry into the 17 (read before starting #1)
- **Trust a human eyeball over QA logs or Claude's own image read.** Map-defect reporting over-claimed twice during the trial (stale logs; over-reading an image). A quick human spot-check of maps is more reliable and cheaper than trusting automated/Claude assessment. Do NOT auto-re-roll a stochastic frame — the rubric now passes the hairline; only a real picture-frame/garble/wrong-geo FAILs.
- **Map-prompt authoring discipline (prevents wasted spend):** region labels must be bare names (no parentheticals, no compass words). Site-description parentheticals get pulled into rendered labels unless a per-chapter SPECIFIC REMINDER forbids them (the goryeo ch7 "(amputated territory)" defect — fix is the proven Tamna-style anti-parenthetical bullet). Author prompts correctly the first time.
- **Cost posture:** Gemini calls happen only during discrete background runs; image generation (maps) is the cost driver. Claude cannot see the $ — GCP billing console. In-session text triage is not separate billable spend.
- `lint-density` gates per-chapter event count (10–15) only, NOT category spread (CLAUDE.md step 0 wording implies spread is enforced — it isn't; authoring guideline only).

### Open policy decision — now THIS session's to make (single session)
The `definition` field (authored house-voice glossary blurb, `wikiSlug:""`) is fully shipped end-to-end (`parse-narratives.ts` + `glossary-sheet.tsx`) BUT G12 has no skip for slug-less entries, so it does not currently clear the gate by itself. The canonical "no good Wikipedia page" answer for glossary is therefore still **`.glossary-slug-waivers` + on-thread broad parent** (what goryeo's "Xu Jing" used: → `Goryeo` parent + waiver). Proposed final policy: `definition` for glossary reader-quality where no parent exists *and* add a G12 skip for `definition`-bearing slug-less entries; broad-parent/slug-waiver otherwise. **Not a blocker for the 17** — the slug-waiver path works today. Update CLAUDE.md step 10d once when decided.

### Deploy model — DECIDED (do not reopen)
The **production-branch idea is discarded** (user, 2026-05-17). `scripts/promote.mjs` exists untracked but is **not used, not tracked, not activated** — do not resurrect it. Publish path is the documented one: **commit locally freely; on the user's explicit per-push OK, `git push origin main` + clean atomic `rm -rf out && npm run build && npx wrangler deploy`** (the manual deploy is authoritative). The "germanic civs turned off" race was a multi-session artifact; single-session + clean atomic deploy is the mitigation. PUBLISH GATE (CLAUDE.md): never push/deploy without explicit per-push say-so — overrides the global always-push.

## Operational notes (stable)
- **Heredoc/Python file edits: foreground only.** A `python3 - <<EOF` (or chained heredoc commits) inside a backgrounded/`&&` chain mangles silently — apply edits in the foreground, background only plain `parse`/gate command chains.
- `content/` is fully gitignored. `git add -f` the new TL's `.event-links/.glossary-links/.cross-links/.link-waivers/.event-slug-waivers/.glossary-slug-waivers/.map-waivers-{tl}.json` + every reference `.cross-links-{ref}.json` touched in the backward pass. `content/{tl}.json` + `public/offline/*.manifest.json` are gitignored regenerated artifacts (do NOT commit). `public/search-index.json` IS tracked (commit if it changed).
- Commit email `mebernin@gmail.com`; trailer `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`.
- `.env.local` has `GOOGLE_API_KEY` only; gate scripts run on Gemini `gemini-3-pro-preview`. Claude Code's OAuth cannot be used by the standalone gate scripts.
- Restart `npm run dev` after `npm run parse` (in-memory cache in `lib/data.ts`).
- The full gated pipeline authority is the **CLAUDE.md "Content Pipeline"** section (steps 0–14). Do not follow any older per-civ workflow.

## Background / roadmap
- All **100 original navigator TLs + goryeo-korea = 101 shipped** (`hasContent: true`).
- Next work: the **LOCKED 17-civ Phase-1.5 roster** (`audits/phase-1.5-roster.md`), build order in that file; #1 is `babylon-to-persia`. Run on the hardened pipeline above. Lock chapter/event scope + get user approval before writing (CLAUDE.md step 0.5).
- Corpus-remediation backlog: `audits/corpus-remediation-backlog.md` (now also this session's domain — no separate session).
