# Event-Upgrade Sweep — Progress

Corpus-wide rollout of the 2-part "explore further" event cards + born-verified
photos. Each civ: parallel chapter agents → apply → cross-chapter dedup → parse →
gates (G14 cards · G15 photo-floor 70% · fix-links). Committed per civ,
batch-deployed every ~3 civs. Autonomous (feedback_sweep_autonomy).

**Recipe (3-phase, 429-proof — adopted 2026-05-29 after the elamite ch7 stall):**
1. **Cards — agents fan out wide (NO Wikimedia).** One agent per chapter writes
   `description` + `exploreFurther` to `/tmp/<tl>-out/chN.json`. Web-search fact-check
   is fine; NO image downloads. They may name `photoCandidates` but don't fetch.
2. **Photos gather — `node scripts/sweep-photos.mjs <tl>` (ONE serial paced stream).**
   The only thing that touches Wikimedia. Batched metadata (50 titles/req), persistent
   byte cache in `.image-cache/` (gitignored; cross-civ reuse — shared artifacts don't
   re-download), `--delay` between byte fetches, circuit-breaker on 4 consecutive 429s
   (exits 2, writes a PARTIAL manifest, re-run when the limit clears — cache makes it
   cheap). **Events whose wiki page yields <2 usable images get a Commons file-search
   augment by label** (`--min`, default 2) — this surfaces representative artifacts the
   page didn't link, so far fewer events fall to the slow serial gap-fill. Emits
   `/tmp/<tl>-photos/manifest.json` (per-event local candidate files).
3. **Photos pick — vision agent(s), NO network.** Read the manifest's local files,
   pick the best per event, write `commonsFile` + caption. Cannot 429 — zero requests.
   **Pick DISTINCT images — never reuse one commonsFile across events** (a representative
   site/artifact photo is fine, but give each event its own; fix-links --strict blocks
   reuse on swept civs). Telling pick agents this up front avoids a whole de-dup pass.
Then `node scripts/sweep-apply.mjs <tl>` (auto-discovers chapters; reports any gap/`todo`
so a stall is never lost; **flags any DUPLICATE photo deterministically — catch reuse
here, before the gate, not from a failed fix-links after a full parse**) →
`npm run parse` → G14/G15/fix-links → commit.
Full committed chain: `sweep-bundle.mjs` → card agents → `sweep-photos.mjs` →
vision pick → `sweep-apply.mjs` (no more `/tmp` scratch — reproducible end to end).
Why it can't recur: the 8-wide fan-out (phase 1) never touches the rate-limited host;
the host is touched only by the single serial gatherer (phase 2). See
docs/content-pipeline.md step 13 + memory/feedback_wikimedia_rate_limit.

## Count

**Done: 12 / 109 civs**  ·  **97 civs remaining, smallest-first.**

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

_(rollout-5 + celtic carry cards; carthage/soviet-union/ancient-china/elamite/nubia/indus gated.)_

**Lesson (indus):** the gatherer hands material-culture + abstract events ONLY the regional map → first vision pass over-rejects (here 30/54 = 56%, under the floor). FIX baked into the recipe: after the first pick, run a **finder agent** that web-verifies real distinct Commons filenames for the recoverable famous artifacts (Great Bath, weights, beads, the unicorn seal, etc.), re-gather, vision re-pick. Two rounds took 56%→87%. Only genuinely abstract events (trade networks, collapse-process) stay honest rejects.

## In progress
- (none — indus-valley just closed)

## Worklist (smallest-first)
Pending — see /tmp/sweep-worklist.json. Next up:
mali-empire, prehistoric-japan, yuan-dynasty, early-dynastic-egypt, …
