# Event-Upgrade Sweep — Progress

Corpus-wide rollout of the 2-part "explore further" event cards + born-verified
photos. Each civ: parallel chapter agents → apply → cross-chapter dedup → parse →
gates (G14 cards · G15 photo-floor 70% · fix-links). Committed per civ,
batch-deployed every ~3 civs. Autonomous (feedback_sweep_autonomy).

**Recipe (3-phase, 429-proof — adopted 2026-05-29 after the elamite ch7 stall;
two efficiency fixes added 2026-05-29 after indus needed 2 gap-fill rounds):**
1. **Cards — agents fan out wide (NO Wikimedia).** One agent per chapter writes
   `description` + `exploreFurther` to `/tmp/<tl>-out/chN.json`. Web-search fact-check
   is fine; NO image downloads. They may name `photoCandidates` but don't fetch.
   **1b. FRONT-LOADED PHOTO FINDER (FIX #2 — do this BEFORE the gather, in parallel
   with the card agents).** Spawn 1–2 finder agents (split by chapter for big civs)
   that, for every event, WEB-VERIFY a real distinct Commons filename (open the event's
   `wiki:` slug page → grab its real lead-image filename; confirm via the Commons
   `File:` page). Write `/tmp/<tl>-gapfill.json` `{eventId:[ "File:...", ... ]}`, merge
   into the card outputs' `photoCandidates`, THEN gather. **Why:** the gatherer hands
   material-culture + abstract events ONLY the regional/era map, so a cold first vision
   pick over-rejects and you pay 1–3 slow gap-fill rounds (indus: 30/54 = 56%, under the
   floor, needed two rounds → 87%). Front-loading verified candidates means the FIRST
   gather+pick clears the 70% floor. Tell finders: ONE file per event (distinctness),
   prefer the iconic artifact/site/person/manuscript, and OMIT genuinely abstract events
   (trade *networks*, "Decline Begins", oral epics, clan systems) — those honest-reject,
   never force.
2. **Photos gather — `node scripts/sweep-photos.mjs <tl>` (ONE serial paced stream).**
   The only thing that touches Wikimedia. Batched metadata (50 titles/req), persistent
   byte cache in `.image-cache/` (gitignored; cross-civ reuse — shared artifacts don't
   re-download), `--delay` between byte fetches, circuit-breaker on 4 consecutive 429s
   (exits 2, writes a PARTIAL manifest, re-run when the limit clears — cache makes it
   cheap). **Events whose wiki page yields <2 usable images get a Commons file-search
   augment** (`--min`, default 2). **FIX #1 (context-aware search):** that augment now
   appends the civ label to the query (`--context`, defaults to `ref.label`) so a bare
   label like "Standardized Weights" / "Decline Begins" ranks THIS civ's artifacts first
   instead of pulling global junk (indus got Roman-Empire books + Lithuanian presidential
   seals). It skips appending when the label already contains the context, to avoid
   over-narrowing. Emits `/tmp/<tl>-photos/manifest.json` (per-event local candidate files).
3. **Photos pick — vision agent(s), NO network.** Read the manifest's local files,
   pick the best per event, write `commonsFile` + caption. Cannot 429 — zero requests.
   **Pick DISTINCT images — never reuse one commonsFile across events** (a representative
   site/artifact photo is fine, but give each event its own; fix-links --strict blocks
   reuse on swept civs). Telling pick agents this up front avoids a whole de-dup pass.
Then `node scripts/sweep-apply.mjs <tl>` (auto-discovers chapters; reports any gap/`todo`
so a stall is never lost; **flags any DUPLICATE photo deterministically — catch reuse
here, before the gate, not from a failed fix-links after a full parse**) →
`npm run parse` → G14/G15/fix-links → commit.
Full committed chain: `sweep-bundle.mjs` → card agents **+ front-loaded photo
finder (1b)** → `sweep-photos.mjs` (context-aware augment) → vision pick →
`sweep-apply.mjs` (no more `/tmp` scratch — reproducible end to end).
Why it can't recur: the 8-wide fan-out (phase 1) never touches the rate-limited host;
the host is touched only by the single serial gatherer (phase 2). See
docs/content-pipeline.md step 13 + memory/feedback_wikimedia_rate_limit.

## Count

**Done: 14 / 109 civs**  ·  **95 civs remaining, smallest-first.**

Last updated: 2026-05-29 (sweeping)

## Done (card-complete, all gates green)
1. celtic-cultures (pilot, ch1 ref) — partial→full
2. carthage (8 ch, test #1)
3. soviet-union (20 ch, test #2 / scale)
4. age-of-exploration (rollout)
5. atlantic-slave-trade (rollout)
6. latin-american-independence (rollout)
7. medieval-japan (rollout)
8. islamic-persia (rollout)

9. ancient-china (8 ch, 37 ev) — clean first pass
10. elamite-civilization (8 ch, 49 surfaced ev) — ch7 redo after 429 stall; all gates green
11. ancient-nubia (8 ch, 52 surfaced ev) — FIRST run on the new 3-phase chain (cards fan-wide → sweep-photos → vision pick → serial gap-fill → de-dup); 0 429s; all gates green
12. indus-valley (10 ch, 54 surfaced ev) — cards 54/54; photos 87% (47 born-verified / 7 honest abstract rejects: trade-network/decline-process events). Two gap-fill rounds (a finder agent verified real Commons files → re-gather → vision re-pick) lifted ch6 67→83% and ch7 54→85% over the 70% floor; ch9 (the "Quiet Collapse" chapter, 56%) stays grandfathered — its no-photo events are abstract process-events (Decline Begins, De-urbanization, Legacy Fades), not forced. **~24 min wall-clock end-to-end** (phase-1 cards ~4 min parallel; the rest = 2 photo gap-fill rounds). All gates green; fix-links --strict clean.

13. mali-empire (8 ch, 54 ev) — cards 54/54; photos 83% (45 / 9 honest rejects). FIRST civ on the front-loaded-finder recipe (FIX #2): cold pick 68% (vs indus 56%), only ONE gap-fill round. ch2 thin (Battle of Kirina + Niani capital are imageless on Commons). ~23 min.
14. prehistoric-japan (8 ch, 54 surfaced ev) — **FIRST fully-AUTONOMOUS run via the `scripts/sweep-civ.mjs` engine + the sweep-civ workflow.** Photos 79.6% (43 / 11), **0 thin chapters, 0 gap-fill rounds** (front-loaded finder cleared the 70% floor cold), all gates green, self-committed (1027f77). ~19 min, 21 agents, hands-off.

_(rollout-5 + celtic carry cards; carthage/soviet-union/ancient-china/elamite/nubia/indus/mali/prehistoric-japan gated.)_

## Orchestration (built 2026-05-29)
- **`scripts/sweep-civ.mjs <prep|gather|finish|commit> <tl>`** — the deterministic engine. Each phase prints one `RESULT <json>` line. `gather` holds a global lock (`.image-cache/.gather.lock`, stale-takeover 15 min) so OVERLAPPING civs never touch Wikimedia at once. `finish` writes the commit message to `/tmp/<tl>-commit-msg.txt`; `commit` uses `git commit -F` (force-stages only the 3 curated files, never `git add -A`).
- **The sweep-civ workflow** drives one civ end-to-end: prep → (parallel) chapter card agents + photo-finder agents → gather → vision pick → finish → gap-fill loop (≤2, only thin chapters / recoverable events) → commit. Run it INLINE via the Workflow tool (the `.claude/workflows/` path is harness-guarded). **Overlap = launch 2–3 workflows concurrently**; the gather lock serializes the one rate-limited step. The workflow refuses to commit if any gate is red (leaves it staged for review).

**Lesson (indus):** the gatherer hands material-culture + abstract events ONLY the regional map → first vision pass over-rejects (here 30/54 = 56%, under the floor). FIX baked into the recipe: after the first pick, run a **finder agent** that web-verifies real distinct Commons filenames for the recoverable famous artifacts (Great Bath, weights, beads, the unicorn seal, etc.), re-gather, vision re-pick. Two rounds took 56%→87%. Only genuinely abstract events (trade networks, collapse-process) stay honest rejects.

## In progress
- (none — indus-valley just closed)

## Worklist (smallest-first)
Pending — see /tmp/sweep-worklist.json. Next up:
mali-empire, prehistoric-japan, yuan-dynasty, early-dynastic-egypt, …
