# Event-Upgrade Sweep — Progress

Corpus-wide rollout of the 2-part "explore further" event cards + born-verified
photos. Each civ: parallel chapter agents → apply → cross-chapter dedup → parse →
gates (G14 cards · G15 photo-floor 70% · fix-links). Committed per civ,
batch-deployed every ~3 civs. Autonomous (feedback_sweep_autonomy).

**Rate-limit rule (added 2026-05-29):** card-WRITING agents fan out wide; the
photo-DOWNLOAD pass does NOT — stagger it (serialize / ≤2–3 concurrent, short
sleep between curls, descriptive User-Agent). A 429 must bail fast and report
`ch N: rate-limited, photos pending`, never silent-retry under backoff. (The
elamite ch7 "stuck 30 min" was Wikimedia 429-throttling 8 parallel photo passes,
not a hang.) See docs/content-pipeline.md step 13 + feedback_wikimedia_rate_limit.

## Count

**Done: 8 / 109 civs**  ·  **94 civs (~8,594 events) remaining, smallest-first.**

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

_(rollout-5 + celtic carry cards; carthage/soviet-union/ancient-china gated.)_

## In progress
- (none yet — starting the worklist)

## Worklist (102, smallest-first)
Pending — see /tmp/sweep-worklist.json. Next up: ancient-china, elamite-civilization,
ancient-nubia, indus-valley, mali-empire, prehistoric-japan, yuan-dynasty, …
