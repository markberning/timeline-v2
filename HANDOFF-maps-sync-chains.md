# HANDOFF — Maps / Production-Line Sync / Chain Wiring track

_Cold-start brief. As of 2026-05-16. Branch `main`. Latest commit on this track: `d193d50`._

---

## ⚠️ CONCURRENT SESSION — READ FIRST

**Another session is running RIGHT NOW: the corpus-wide link-marking / pipeline sweep.** Its cold-start brief is **`HANDOFF-link-sweep.md`** (committed by that session). It owns and is actively editing:

- `content/.glossary-links-*.json`, `content/.event-links-*.json`, `content/.cross-links-*.json`
- `reference-data/*.json` (per-TL event data — NOT `tl-chains.ts`)

**Rules to avoid collision (non-negotiable):**
- **NEVER `git add -A` / `git add .`** Stage only explicit paths in this track's lane.
- **NEVER `git checkout -- <path>`** on unexpected working-tree changes — they are probably the other session's in-progress work. Exclude, don't revert.
- This track's lane (safe to stage): `public/maps/`, `scripts/generate-maps.mjs`, `scripts/optimize-maps.mjs`, `map-prompts/`, `reference-data/tl-chains.ts`, `CLAUDE.md`, `audits/`.
- Commits here have been `public/maps`- and lane-scoped throughout; HEAD will move under you from the other session — `git pull --rebase --autostash` then push if a push is rejected (lanes don't overlap, so rebases are clean).
- Audit Tracks 2 (cross-link) & 3 (build/data) are **blocked until the link sweep finishes** — they'd audit a moving target. Do not start them until that session's HANDOFF says its sweep is done.

---

## What this track COMPLETED (all pushed)

1. **Production-line sync** — `CLAUDE.md` reconciled to reality (was "89/100 / 76 shipped / 8 Remaining"; actually 100/100). Found + fixed the real bug: the `ancient-japan` omnibus split left `prehistoric-japan`/`asuka-nara-japan`/`heian-japan` shipped with **no maps** (24 generated; stale `public/maps/ancient-japan/` deleted).
2. **Map pipeline hardened** — `generate-maps.mjs` `preprocessPrompt()` now unconditionally injects global defect-prevention rules into every chapter prompt (previously bailed for non-bullet/old-format prompts — exactly mesopotamia/indus-valley). Parser also now accepts bare `## Chapter N` headers (old format).
3. **Full corpus map regen** — Tier 0 (Japan) → Tier 1 (mesopotamia 13 + indus-valley 8 full-series) → Tier 2 (14 blocker TLs) → stragglers (9) → Tier 3 (~150 majors) → Pass-1 re-roll (40) → final `mali-empire` ch6. Audited in fan-out batches. **The entire ~870-chapter corpus passes the locked acceptance criteria.** Ledger: `audits/map-audit.md` (status: RESOLVED).
4. **Chain wiring** — 7 dangling TLs de-dangled in `reference-data/tl-chains.ts`: new chains `islamic-civilization` (umayyad→islamic-golden-age→ottoman) and `north-american-indigenous` (ancestral-puebloans→mississippian-culture); extended `mesoamerican` (+zapotec, +teotihuacan) and `southeast-asian-maritime` (+majapahit, +dai-viet). Roadmap in CLAUDE.md synced to match.

Audit ledgers: `audits/coverage-audit.md`, `audits/map-audit.md`, `audits/production-line-sync.md`. Sample error maps: `audits/error-examples/`.

## LOCKED map acceptance criteria (critical — applies to the future 17 new civs too)

Settled over 3 user corrections; full text in memory `feedback_dont_over_generalize_defect_rules`.

| NOT a defect (leave alone) | IS a defect (fix) |
|---|---|
| A river labeled 2× (correct + well-separated) | Garbled / invented / misspelled text |
| Province / state / kingdom outlines | Feature in wrong place / label contradicts facts |
| **Modern country outlines or labels (orientation aid — welcome)** | Same label stamped twice **adjacent**, or a caption repeated 3× |
| Period or modern reference geography | Compass words ("North"/"East") as map labels |
| Minor unrequested-but-correct labels | Broken frame / no title bar / illegible |

## Outstanding / next (nothing here is started)

- **Audit Track 2 (cross-link) + Track 3 (build/data)** — gated on the link sweep finishing. Then run per `memory/project_corpus_audit_plan`.
- **Coverage findings** (`audits/coverage-audit.md`) — Mesopotamian 1,359-yr gap, steppe gap (744–1206), Persian/Korean/Japanese/etc. gaps. The **~17-civ phase-1.5 backlog** + bridge-TL decisions are the user's call; nothing built.
- **Phase 2** (4-mode app: Civ/War/Art/Music) — thin-slice scope committed, audit-first prerequisite now satisfied; not started. See `memory/project_phase2_plan`. World Wars routed to the War module (`memory/project_phase2_plan`).
- **`reference-data/medieval-europe.json`** orphan — delete once the concurrent reference-data session is done (deferred to avoid collision).

## Operational gotchas (learned the hard way)

- **Map gen is billable** (`gemini-3-pro-image-preview`, NOT Flash). ~$0.13+/image. Needs `node --env-file=.env.local` and **`dangerouslyDisableSandbox: true`** (network egress). Key is in `.env.local`.
- **Run gen + optimize as BACKGROUND tasks.** Foreground Bash has a ~120s timeout that silently kills long jobs (truncated output, masked failures). `optimize-maps.mjs` on 100+ images exceeds it.
- **Only ONE Gemini gen job at a time** — concurrent jobs raise the transient-failure rate.
- **Never `rm` map webps with a wildcard.** `rm public/maps/<tl>/*.webp` over-deletes chapters whose numbers aren't in the prompt (indus-valley ch1/ch3 were lost this way; recovered via `git checkout` of those exact files). Always delete explicit `chapter-N.webp` per audited chapter.
- **`optimize-maps.mjs` converts ALL `.png` under `public/maps/**`** and deletes them. Only run it when no gen job is writing PNGs, and after confirming the PNG inventory is exactly what you expect.
- **Verify by content, not exit code.** A trailing `; echo` / `| tee` masks `node` failures; `grep` `||` quirks flip exit codes. Check `generated=N failed=0` in logs + PNG counts.
- **Stubborn chapter (fails the same defect 2×)** → add a `**SPECIFIC REMINDERS for this chapter:**` block to that chapter in `map-prompts/<tl>.md` naming the exact prior failure (the README documents this as the only reliable fix), then regen `--chapter N`.
- Subagents: tell them **not** to commit/push and to return findings as the final message; they over-eagerly commit otherwise.

## Memory pointers (`~/.claude/.../memory/`)

`project_corpus_audit_plan` · `project_phase2_plan` · `project_civ_taglines_plan` · `project_coverage_finding_steppe_gap` · `project_gemini_maps_pipeline` · `feedback_dont_over_generalize_defect_rules` · `feedback_mockups_are_facsimiles` · `feedback_concurrent_work`
