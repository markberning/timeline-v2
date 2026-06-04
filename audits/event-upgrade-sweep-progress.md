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

**Done: 48 / 109 civs**  ·  **61 civs remaining, smallest-first.**

> The authoritative swept list is computed, not hand-maintained: `git log --oneline | grep
> 'event-upgrade sweep:'` (the gated civs) **plus** the 14 cards-carried rollout/pilot civs
> (celtic-cultures, carthage, soviet-union, age-of-exploration, atlantic-slave-trade,
> latin-american-independence, medieval-japan, islamic-persia, indus-valley, mali-empire,
> kingdom-of-kush, ancient-nubia, ancient-china, elamite-civilization). Remaining = civs with
> a `content/.event-links-<tl>.json` minus that set. See **Worklist** below for the one-liner
> that regenerates the smallest-first queue.

Overlapped workflow waves (kush/early-dynastic/yuan, then middle-horizon/old-kingdom/maurya).
Two concurrency bugs found + fixed: (1) a lock-queued civ's gather Bash call was killed at
the 2-min default → orphaned the lock → starved the next civ; fix = 10-min Bash timeout on
the gather phase + 8-min stale-lock takeover. (2) overlapping sweep-apply runs race on the
GLOBAL caption/rejection files; fix = a narrow `.apply.lock`. **Run waves 2-wide.** The
workflow refuses to self-commit if any gate is red (middle-horizon held back on a fix-links
photo flag — a Gateway-of-the-Sun frieze on a "puma iconography" event; rejected by hand).
**Deployed to prod after this batch (indus → maurya).**

Last updated: 2026-06-03 (paused mid-rollout — clean stop).

## ENGINE OPTIMIZED 2026-06-03 (~47% cheaper per civ) — see memory/project_sweep_token_optimization
Per-civ cost was burning the 5-hr usage window in <1hr (6–8 civs). Measured driver = cache-read
tokens; the author phase did **253 full-page WebFetches/civ** (12.3M cache-read). Fixes (commit 458d2e23):
1. **`sweep-bundle.mjs` prefetches** each event's wiki intro (`wikiExtract`) + lead-image File:
   (`leadImage`) into the chapter bundle via the REST summary endpoint (zero model tokens). The
   author reads those instead of WebFetching → author cache-read 12.3M→~1-2M, WebFetches 253→0.
2. **`sweep-photos.mjs` page-image bug fixed** — `prop=images` was batched 50-titles/`imlimit=40`,
   but imlimit is a TOTAL across the batch, so the first article ate the quota and the rest got
   ZERO images (gupta: 4 page-images for the whole civ). Now one request per slug → page-images
   4→90, candidate pool 61→122. Plus a distinctness-aware Commons label-search. **This was a
   corpus-wide quality bug** — re-sweeping earlier civs would now get materially better photos.
3. Pick **stays Sonnet** (Haiku tried + reverted: 294 turns vs 199, cache-read ballooned to 14M);
   candidate cap `--max 3` (max 2 dropped coverage 79→68%).
Net per-civ cache-read ~20.6M→~11M. Config is the workflow default; nothing to pass.

This session shipped 9 civs on the new engine: gupta-empire (72.6%), zhou-dynasty (85.9%),
teotihuacan (46.9% — image-poor, anonymous rulers, honest), srivijaya (76.9%),
mycenaean-civilization (68.7%), meiji-japan (83.6%), asuka-nara-japan (85.5%),
late-medieval-europe (83.8%), ming-dynasty (78.3%). All pushed live.

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
15. kingdom-of-kush (8 ch) — 92.7% (51 / 4); ch8 thin (honest). Self-committed a8d0b78.
16. yuan-dynasty (8 ch, 54 ev) — 87% (47 / 7); finished by hand after the gather-timeout bug, one gap-fill round (ch2). 1f815c0.
17. early-dynastic-egypt (8 ch) — 89.1% (49 / 6), 0 thin. Self-committed 10cd385.
18. old-kingdom-egypt (8 ch) — 96.4% (54 / 2), 0 thin. Self-committed 5d7f4df.
19. middle-horizon-empires (8 ch) — 73.2% (41 / 15); ch1/ch6 thin (abstract: collapse, "no writing", anonymous rulers, Quechua spread). Committed 1c783fd after a by-hand photo reject.
20. maurya-empire (8 ch) — 87.9% (51 / 7), 0 thin. Self-committed 8e28cb9.

_(rollout-5 + celtic carry cards; carthage/soviet-union/ancient-china/elamite/nubia/indus/mali/prehistoric-japan gated.)_

## Orchestration (built 2026-05-29)
- **`scripts/sweep-civ.mjs <prep|gather|finish|commit> <tl>`** — the deterministic engine. Each phase prints one `RESULT <json>` line. `gather` holds a global lock (`.image-cache/.gather.lock`, stale-takeover 15 min) so OVERLAPPING civs never touch Wikimedia at once. `finish` writes the commit message to `/tmp/<tl>-commit-msg.txt`; `commit` uses `git commit -F` (force-stages only the 3 curated files, never `git add -A`).
- **The sweep-civ workflow** drives one civ end-to-end: prep → (parallel) chapter card agents + photo-finder agents → gather → vision pick → finish → gap-fill loop (≤2, only thin chapters / recoverable events) → commit. Run it INLINE via the Workflow tool (the `.claude/workflows/` path is harness-guarded). **Overlap = launch 2–3 workflows concurrently**; the gather lock serializes the one rate-limited step. The workflow refuses to commit if any gate is red (leaves it staged for review).

**Lesson (indus):** the gatherer hands material-culture + abstract events ONLY the regional map → first vision pass over-rejects (here 30/54 = 56%, under the floor). FIX baked into the recipe: after the first pick, run a **finder agent** that web-verifies real distinct Commons filenames for the recoverable famous artifacts (Great Bath, weights, beads, the unicorn seal, etc.), re-gather, vision re-pick. Two rounds took 56%→87%. Only genuinely abstract events (trade networks, collapse-process) stay honest rejects.

## In progress
- (none — clean stop 2026-06-03 PM at user's request. 74/109 done, 38 remaining.
  Repo clean, all committed work pushed, no locks held. The 3 that were mid-flight at
  the stop — **uyghur-steppe, migration-period, early-medieval-europe** — were NOT
  committed; they're the next-up smallest-first queue. One leftover uncommitted partial
  write to reference-data/uyghur-steppe.json from the aborted run (harmless — never
  force-added, a fresh run overwrites it). To resume: launch the sweep-civ workflow
  3-wide on those three, then continue smallest-first (late-egypt, japanese-economic-
  miracle, joseon-korea, germanic-tribes, new-kingdom-egypt, …).
- 2 gap-fill cleanups still owed (see below): xiongnu-huns, songhai-empire.

## Gap-fill owed (gate passed via grandfathering, but recoverable images left behind)
- **xiongnu-huns (705ff658) — 59.7%, lowest yet.** Committed clean (thin chapters
  grandfathered), but ~10-12 of its 29 no-photo events are NOT genuinely imageless:
  Huo Qubing's tomb sculptures (the horse-trampling-a-barbarian statue), Noin-Ula
  elite burials (textiles), Ordos bronze/gold steppe art, and the Attila/Aetius/
  Death-of-Attila events (famous later-era paintings — on-subject, OK per
  feedback_photo_era_ok_if_on_subject). The gatherer handed these only the regional
  map → vision over-rejected (the indus failure mode). OWED: one finder gap-fill round
  (web-verify real Commons files → re-gather → vision re-pick → re-apply → amend).
  Defer to the end-of-sweep low-coverage cleanup pass to avoid gather-lock contention.
- **songhai-empire (d5b9cf98) — 63.6%, 4 thin chapters.** Same over-rejection pattern.
  Recoverable among its 24 no-photo events: Tomb of Askia (UNESCO), Fall of Timbuktu,
  Battle of Tondibi (1591), Ahmed Baba al-Timbukti, Taghaza salt mines, trans-Saharan
  gold trade (Catalan Atlas Mansa Musa image), Askia Muhammad's hajj. Genuinely abstract
  (honest rejects): ministerial/12-province administrative systems, succession crises,
  cosmopolitan population. Same finder gap-fill round owed; same end-of-sweep cleanup pass.

## Worklist (smallest-first) — 61 remaining
`/tmp/sweep-worklist.json` does NOT survive a session clear. Regenerate it any time with:
```sh
git log --oneline | grep -oE 'event-upgrade sweep: [a-z0-9-]+' | sed 's/.*: //' | sort -u > /tmp/swept.txt
printf '%s\n' celtic-cultures carthage soviet-union age-of-exploration atlantic-slave-trade latin-american-independence medieval-japan islamic-persia indus-valley mali-empire kingdom-of-kush ancient-nubia ancient-china elamite-civilization >> /tmp/swept.txt
sort -u /tmp/swept.txt -o /tmp/swept.txt
for f in content/.event-links-*.json; do basename "$f" | sed 's/^\.event-links-//;s/\.json$//'; done | sort -u > /tmp/haslinks.txt
comm -23 /tmp/haslinks.txt /tmp/swept.txt   # = remaining; sort by event count for smallest-first
```
**Next up (smallest-first):** polynesian-voyagers, post-maurya-kingdoms, shang-dynasty,
tang-song-china, han-dynasty, korean-modern, xiongnu-huns, timurid-empire, safavid-persia, …

**To resume:** launch the sweep-civ workflow INLINE (Workflow tool, `scriptPath:
scripts/sweep-civ.workflow.js`, `args: "<tlId>"`), 2-wide overlapping. Each civ self-commits when
gates pass; push in batches. A flaky "subagent completed without calling StructuredOutput" failure
is transient — just re-launch that civ with `resumeFromRunId` (replays completed phases from cache).
