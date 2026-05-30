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
   cheap). Emits `/tmp/<tl>-photos/manifest.json` (per-event local candidate files).
3. **Photos pick — vision agent(s), NO network.** Read the manifest's local files,
   pick the best per event, write `commonsFile` + caption. Cannot 429 — zero requests.
Then `node scripts/sweep-apply.mjs <tl>` (auto-discovers chapters, reports any
gap/`todo` so a stall is never lost) → `npm run parse` → G14/G15/fix-links → commit.
Full committed chain: `sweep-bundle.mjs` → card agents → `sweep-photos.mjs` →
vision pick → `sweep-apply.mjs` (no more `/tmp` scratch — reproducible end to end).
Why it can't recur: the 8-wide fan-out (phase 1) never touches the rate-limited host;
the host is touched only by the single serial gatherer (phase 2). See
docs/content-pipeline.md step 13 + memory/feedback_wikimedia_rate_limit.

## Count

**Done: 10 / 109 civs**  ·  **92 civs remaining, smallest-first.**

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

_(rollout-5 + celtic carry cards; carthage/soviet-union/ancient-china/elamite gated.)_

## In progress
- (none — elamite just closed)

## Worklist (smallest-first)
Pending — see /tmp/sweep-worklist.json. Next up: ancient-nubia, indus-valley,
mali-empire, prehistoric-japan, yuan-dynasty, early-dynastic-egypt, …
