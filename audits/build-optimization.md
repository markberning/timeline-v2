# Civ-build optimization plan (2026-05-18)

**Goal:** make building a civ much faster with **zero quality loss**. Quality
is #1; every existing gate stays and still blocks. We only speed the *path to
passing* the gates.

**Diagnosis (user + analysis):** prose writing is fast. The bottleneck is the
**fix loop** — not because fixing is hard, but because (a) fixes are applied
one at a time, each paying a huge fixed tax (full-corpus rebuild + server
restart + a review round-trip), and (b) the read→suggest→apply work is done by
big serial agents that each re-read the whole narrative. Death by a thousand
round-trips, not one slow step.

## Three pillars (all zero quality cost)

### 1. Batch fixes, never drip them  *(process; no code; biggest single win)*
Collect ALL findings for a chapter/civ, apply them in ONE pass, run the gate
ONCE, rebuild ONCE, surface ONE consolidated review. No per-item
fix→rebuild→restart→review cycle. (The Chapter-3 session was dozens of micro
cycles; batching collapses N → 1.)

### 2. Per-civ rebuild, not corpus-wide  *(tooling; code change)*
Today `npm run parse` re-parses all ~102 civs + a 12.7 MB search index + every
offline manifest just to see one civ's edit. Add a scoped mode: parse only
`<civ>` → rewrite only that civ's JSON (+ its manifest); skip the
corpus-wide search-index/manifest regen during iteration. The full corpus
parse + index still runs at ship/deploy (so prod is never stale) — scoped
parse is an **iteration-only fast path**. Effect: minutes → seconds per cycle.

### 3. Restructure read/suggest/apply  *(orchestration; parallel within the ceiling)*
- **Read:** line-level checks (facts, definitions, clarity) run per-chapter in
  parallel helper agents (small context each); the whole-narrative
  flow/continuity check runs once. Replaces 5 agents each re-reading the whole
  book.
- **Suggest:** anything a deterministic (no-AI) tool can decide is taken off
  the agents — the tool detects + verifies + presents the candidate; the agent
  only confirms-or-corrects, never researches from scratch, never auto-applies.
  Agents reserved for irreducible judgment (prose, flow).
- **Apply:** batched findings applied in parallel **per chapter** (chapters are
  independent edit surfaces), then a thin coordinator merges + does ONE final
  voice/continuity pass.

## Optimized build order (who runs in parallel)

1. *(serial, fast)* Pull reference data + author the chapter-map spec — **no
   approval pause** (user standing-approved; invariants: 10–15 events/ch,
   uncapped chapter count/length).
2. *(parallel, ≤ concurrency ceiling, isolated copies)* Per chapter: draft prose
   + curate born-verified links + write summary bullets.
3. *(parallel)* Per-chapter line-level audit + *(1)* whole-narrative flow audit
   → one consolidated findings list.
4. *(parallel per chapter)* Apply batched findings → coordinator merges + single
   voice pass.
5. *(serial, fast)* One scoped rebuild → ONE consolidated review surface.
6. *(parallel, capped by the image vendor)* Maps.
7. *(serial, deterministic, fast)* Full corpus rebuild + all gates + ship-check
   + deploy.

The coordinator is the only writer to `main`; all chapter work is in isolated
copies; **never exceed the model concurrency ceiling (~5)** — past it, agents
stall and produce ~nothing (proven scar tissue); **never auto-apply links**;
**never two sessions on the same files**.

## Expected effect (honest, qualitative — no hard numbers claimed)

Most of the speedup is Pillars 1 + 2: collapse N drip cycles to 1, and make
each cycle seconds not minutes. Pillar 3 removes the redundant whole-book reads
and the single serial applier. The "iterate/fix" phase — the actual bottleneck
— should drop to a small fraction of what it was. Writing is unchanged
(it was never the problem). No gate removed → quality unchanged by construction.

## Sequence (HARD GATE — user-locked 2026-05-18)

The **Chapter-3 → 3-chapter split** of `early-medieval-europe` does **NOT**
start until BOTH are done:
1. ✅ **DONE 2026-05-18** — word-finder shipped: `link-coverage.ts` S7
   rare-word signal (lowercase word ≤6/102 civs ⇒ ADVISORY `rare` tag; never
   gates; verified emep ch3 still 0 GATE). User accepted it as a noisy-but-safe
   curator hint; clean version (common-word-list subtraction) deliberately
   deferred as a rabbit-hole, revisit only if noise slows real curation.
2. ✅ **DONE 2026-05-18** — the three-pillar optimization is implemented:
   - **Pillar 2** ✅ byte-verified: scoped `npm run parse -- --tl=phoenicia`
     (1.86s) produced output **byte-identical** to the committed full-parse
     content JSON + offline manifest (clean git tree). Safe by construction —
     `parseNarrative()` is the same function in both modes and cross-link
     Pass 1 is always corpus-wide; only the search-index regen is scoped out,
     and ship/deploy re-runs the full parse.
   - **Pillar 1** ✅ codified below (batch-fix discipline — locked procedure).
   - **Pillar 3** ✅ codified below (parallel read/suggest/apply). The
     deterministic suggest tools it depends on already exist and were
     confirmed present: `fix-links`, `link-coverage`, `lint-links`,
     `lint-density`, `verify-links`, `audit-events/crosslinks/glossary` —
     all no-AI. Pillar 3 needs no new code, only the orchestration discipline.

The Chapter-3 split is then the **acceptance test of both** — the first build
run the new way; if it isn't dramatically faster with zero quality loss, the
optimization isn't done. Both have landed; the split is now unblocked.

## Locked build procedure (the new way — follow this verbatim)

**Pillar 1 — batch, never drip (process; the single biggest win).**
Within a chapter/civ: collect EVERY finding first (all audits, all
deterministic-tool flags), then ONE apply pass, then ONE scoped rebuild
(`npm run parse -- --tl=<civ>`), then ONE consolidated review surface. Never
fix→rebuild→restart→review per item. If a new finding appears mid-batch, it
joins the batch — it does not trigger its own cycle.

**Pillar 2 — scoped rebuild while iterating.** `npm run parse -- --tl=<civ>`
(seconds) for every iteration. The full corpus `npm run parse` runs ONLY at
ship/deploy (prebuild/ship-check already do this) so prod is never stale.
Byte-verified equivalent for per-civ artifacts.

**Pillar 3 — parallel read/suggest/apply, one coordinator writes.**
- *Read:* per-chapter line-level audits run in parallel helper agents (small
  context each) + ONE whole-narrative flow/continuity pass. Not 5 agents each
  re-reading the whole book.
- *Suggest:* anything a deterministic tool can decide is taken off the agents
  — the tool detects+verifies+presents the candidate; the agent only
  confirms-or-corrects. Agents reserved for irreducible judgment (prose, flow).
  Never auto-apply links.
- *Apply:* batched findings applied in parallel **per chapter** (independent
  edit surfaces) in isolated copies; a thin coordinator merges + does ONE
  final voice/continuity pass and is the ONLY writer to `main`.
- **Never exceed the model concurrency ceiling (~5)** — past it agents stall
  and produce ~nothing (proven scar tissue). Never two sessions on the same
  files.

**Timing instrumentation (for the acceptance test + any future build).**
`scripts/build-timer.mjs` — deterministic per-step ledger, NOT a monitoring
agent (a watcher is a second concurrent session, guesses step boundaries, and
burns tokens). Each build step stamps its own boundary:
`node scripts/build-timer.mjs <ledger.md> begin "<run>"`, then
`… mark "<step that just finished>"` after each step, then `… summary`. Emits
a wall-clock log + slowest-first table — the before/after artifact the user
asked for.
