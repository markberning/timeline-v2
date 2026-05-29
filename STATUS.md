# STATUS — canonical project state (READ THIS FIRST)

_This file is the single source of truth. It **supersedes** `HANDOFF.md`,
`HANDOFF-maps-sync-chains.md`, `HANDOFF-link-sweep.md` — those are history.
Last verified: 2026-05-17. Every number below has a reproduce command; if you
doubt a number, run it. **Never relay a previous session's "all clean" /
"all broken" claim as fact — verify with the command.**_

---

## ▶ COLD-START HANDOFF — 2026-05-28 (read this FIRST)

**🎉 LATEST (2026-05-28 — backlog #7 link-coverage sweep is COMPLETE corpus-wide):**
The whole corpus is now at **0 NEW** link-coverage gaps. Final `--corpus` scan:
**5195 GATE · 0 new · 79057 advisory.** Every civilization passes
`link-coverage --strict` with zero non-grandfathered gaps. Backlog item #7
(22,877-gap debt at rebuild) is closed for the NEW-gap tier; the remaining ~5,195
GATE gaps are all grandfathered (legacy baseline) and ~79k are advisory.
- This session swept the remaining **72 civs** with NEW gaps in ~14 waves of 5,
  ~1,100 born-verified glossary links + a handful of blurbs/waivers/event-reuse.
  Commits `efb6536`..`ff396d9` (10 batches). First 10 civs deployed mid-session;
  full corpus rebuilt + deployed at the end (Version `c4025043`, 1543 assets) and
  pushed to origin (`ff396d9`). Verified live (glossary spans served).
- **Incidental fixes made during the sweep:** retargeted a rotted event slug
  (kievan-rus `Battle_of_Dorostolon` → `Siege_of_Dorostolon`, now-disambiguation);
  normalized 6 space-form slugs → underscore (persian-empire); ~12 event-photo
  heuristic flags resolved (captions for genuinely on-topic images; rejections for
  off-topic/duplicate ones); trimmed 2 over-800-char cross-link blurbs (JEM);
  wrote honest link-only audit stubs + backward-pass sections for the many
  pre-5-persona civs that lacked an `audits/{tl}.audit.md`.
- **3 civs are link-complete (0 NEW, all link gates pass) but ship-check-BLOCKED
  by PRE-EXISTING, out-of-scope issues** (their new links DID deploy — the build
  doesn't run ship-check; the block only prevents a `hasContent` *flip*, and all 3
  are already live): **modern-india** + **viking-age** (pre-existing Persona-D
  WEAK chapter grade — narrative-quality debt, needs a rewrite not a link pass);
  **qin-dynasty** (missing chapter-8 map — maps-infra gap). These are flagged for
  a future targeted pass, NOT link-coverage work.

**PREVIOUS (2026-05-28 cont. — 2 batches of never-touched civs, 10 total):**
- **Batch 5** (`f01a8de`): byzantine-empire, delhi-sultanate, renaissance-italy,
  ottoman-empire, islamic-golden-age.
- **Batch 6** (`2c1dc2f`): medieval-india, swahili-coast, umayyad-caliphate,
  high-medieval-europe, yuan-dynasty.
All **0 NEW**, all ship-check CLEAR, both deployed + verified live at `/civ/{tl}`
(200, new links in served HTML). Corpus NEW gaps **1146 → 803**; **clean civs
(0 NEW) 21 → 31**. Reusable pipeline this session: 1 research agent/civ
(suggest-only JSON) → single-writer merge `scripts/apply-proposals.mjs <proposals>`
→ parse → fix-links --strict (+--apply photo tidies) → verify-links --write-snapshot
→ audit-events/glossary/crosslinks → coverage --strict (close residual per-chapter
recurrences) → write link-only audit stub for pre-5-persona civs → ship-check →
commit (force-add explicit content/+audits/ files) → clean atomic deploy. Proposals
stashed: `PROPOSALS-batch5.json`, `PROPOSALS-batch6.json`,
`PROPOSALS-early-american-republic.json` (eamr NOT applied — reopened, lower priority).
**Gotchas logged this session:** (1) `Poles` → disambig, use `Polish_people`;
(2) `Vietnamese_people` redirects to a stats page, use `Viet_people`; (3) the
`Pope`/`Alexander Pope` homonym (yuan ch2 vs ch5); (4) **reader URL is `/civ/{tl}`,
NOT `/{tl}`** — top-level `/{tl}` 404s and looks like a dead deploy; always verify
`/civ/{tl}`; (5) per-chapter coverage means a term recurring in another chapter
re-opens as NEW — re-run coverage --strict and close residuals before ship.
**NOTE (2026-05-28): user is upgrading the CLI to a newer Opus (4.8) after this —
session paused here intentionally, tree is clean + all deployed.**
**Next never-touched (worst-first, no grandfathered cushion):** vendel-scandinavia
(29 — but reopened, has cushion), antebellum-america/xiongnu-huns (reopened),
uyghur-steppe (24), timurid-empire (23), mughal-empire (22), then the reopened
bucket (early-american-republic 24 has stashed proposals ready to apply). Re-run
`npx tsx scripts/link-coverage.ts --corpus` at session start for fresh ranking.

**Git:** `main` == `origin/main`, **clean tree, no agents running.** Two-day #7
sweep push shipped **24 worst-first civs** (5 on 05-27, 19 on 05-28) in 8 atomic
deploys, 0 prod regressions. Today's 19: elamite-civilization, new-kingdom-egypt,
korean-modern, edo-japan, middle-horizon-empires, prehistoric-japan, ancient-israel,
phoenicia, migration-period, ancient-rome, aztec-empire, maurya-empire, the-goths,
anglo-saxon-england, hittite-empire, six-dynasties (+ the 5 from 05-27). Run was
capped at 25; stopped at 24 to clear context. ~4,000 new links across ~230 chapters.

**Resume: refresh ledger `npx tsx scripts/link-coverage.ts --corpus`, then
worst-first.** Top remaining after this push: **antebellum-america** (179/25, 18 ch)
is the 25th/next; then civil-rights-era (167/19), xiongnu-huns (166/26),
indus-valley (162/15), mycenaean-civilization (154/13), old-kingdom-egypt (153/15),
scythians (150/21). ~78 civs still carry grandfathered #7 debt.

**Per-civ pipeline (proven this push):** parallel per-chapter agents in waves of
~5–9 (cap ~10 concurrent) → coordinator runs parse → fix-links --apply + --strict
→ verify-links --write-snapshot → audit-events/glossary/crosslinks → link-coverage
--strict → resolve NEW (★) gaps → ship-check → batch-commit (force-add the
gitignored content/ + audits/ files) → clean atomic `rm -rf out && npm run build
&& npx wrangler deploy`. Batch 2–3 civs per deploy.

**Five traps learned across this push (2026-05-27/28):**
0. **NEW (2026-05-28) — `def:` belongs in a `definition` FIELD, not wikiSlug.**
   Agents sometimes write `wikiSlug:"def:..."`; lint --strict ERRORs ("needs a
   wikiSlug or a definition"). Convert to a `definition` key, no wikiSlug. Brief
   agents explicitly. (korean-modern had 7.)
0b. **NEW — some shipped civs have NO audit file** (pre-5-persona-gate). ship-check
   hard-fails "missing audits/{tl}.audit.md". Write an honest stub: provenance note
   + "no narrative changed, link-only" + Persona-E backward section. Do NOT
   fabricate Persona-D grades. (prehistoric-japan, korean/edo/middle-horizon.)
0c. **NEW — concurrent agents full-file-overwrite the shared waiver JSON**, dropping
   chapter keys mid-run (six-dynasties lost 3 keys). coverage --strict catches the
   reopened gaps; coordinator must diff waiver chapter-key coverage and re-merge.
0d. **NEW — .enrichment-cache.json read-during-write throws "unterminated string"**
   in parse if a fix-links --apply is still flushing it. It's regenerable+gitignored;
   just re-parse once writers are idle.
**Three traps learned 2026-05-27:**
1. **Waiver file is FLAT STRING ARRAY.** `{"1":["Term"]}`, NEVER `[{term,reason}]`.
   Dict-shaped entries crash `scripts/link-coverage.ts` at `norm()`. Russian-empire
   pass had 22 dict waivers from parallel agents — flattened with python. Brief
   agents explicitly: "waiver file is flat string array, never `{term,reason}` objects".
2. **Concurrent-edit waiver loss.** Wave-1 with 5+ agents editing the same waiver
   file races: ch1 agent's 4 waivers got lost in russian-empire when later waves
   overwrote. Coordinator residual MUST re-check coverage --strict and add any
   missing waivers/links surfaced. Plan ≥1 round of coverage-gap fix-up before ship.
3. **Re-parse before re-snapshot.** verify-links checks the parsed content json,
   not the link JSONs directly. If you change a slug, `npm run parse` first or the
   stale parsed json keeps the old slug and snapshot writes around your fix.

**Two operational notes from prior sessions (still applicable):**
1. **wiki-verify cache poisons on 429.** Transient API 429 gets cached as a
   permanent failure in `audits/.wiki-verify-cache.json`. Clear entries where
   `reason` contains "lookup failed" before each snapshot.
2. **Cloudflare deploy can throw transient API errors** (`entitlements.not_available`
   10007, unknown 10013) for ~20 min — NOT auth, NOT the build. Wait ~2 min and
   re-run `npx wrangler deploy`; it clears.

**Two operational notes locked this session (2026-05-22):**
1. **wiki-verify cache poisons on 429.** A transient API 429 gets cached as a
   permanent failure in `audits/.wiki-verify-cache.json` and never retries. Clear
   it before each snapshot: delete entries where `reason` contains "lookup failed".
   (One-liner used all session — see any batch-9 commit flow.)
2. **Cloudflare deploy can throw transient API errors** (`entitlements.not_available`
   10007, unknown 10013) for ~20 min — NOT auth, NOT the build. Just wait ~2 min
   and re-run `npx wrangler deploy`; it clears.

**Coordinator residual recipe (per civ, after agents):** drop redundant
blurbs/glossary that collide with existing event/cross links; tighten any
pre-existing sentence-matchText crosses to the tight proper noun; close real NEW
demonyms/recurrences with born-verified slugs (validate each is a clean
word-boundary body substring); waive only own-name / modern-locator / chain-pointer
("X Ch") / already-linked; pop-culture flags on "X Conference"/"X Records" are
usually false positives — verify the page title and keep. Per-chapter agents
catch the homonym traps (footballer/film/airline/wrong-era), coordinator closes
the residual + runs `sweep-verify` to green-except-grandfathered-coverage.

**State: 41 of 103 civs genuinely swept + DEPLOYED LIVE.** (User paused the session
here at 41.)
- **2026-05-22 batch 9:** **post-maurya-kingdoms** (`b700eb6`, 241→0 NEW),
  **vedic-period** (`aab30df`, 237→0 NEW), **kingdom-of-aksum** (`d5866ff`, 0 NEW)
  swept + ONE batched atomic deploy + curl-verified (Shunga_Empire; Rigveda;
  Frumentius). Agents caught Shunga Japanese-art, Turks-and-Caicos, Emperor Ming of
  Han vs Ming dynasty, gomat railway station, Bharata Ramayana-char vs tribe, Hebrew
  language vs prophets, Amrapali courtesan→Vajjika League, Aedesius philosopher→
  Frumentius, Joseph ibn Naghrillah→biblical Joseph, Shanga Forsberg footballer.
  **NOTE: russian-empire (237, 20 ch — tied with vedic at the worst-first front) was
  DEFERRED, not done — it's the next worst and a big 4-wave lift; pick it up first
  next session.** **~62 remain. Next worst-first:** russian-empire (237, 20 ch),
  zhou-dynasty, then continue down `audits/link-coverage-ledger.md`.
- **2026-05-22 batch 8:** **soviet-union** (`5872156`, 278→0 NEW, 20 ch / 4 waves),
  **meiji-japan** (`f921ad0`, 277→0 NEW), **kievan-rus** (`3679854`, 267→0 NEW,
  12 ch / 3 waves), **inca-empire** (`470fbc3`, 254→0 NEW) swept + ONE batched
  atomic deploy + curl-verified (Great_Purge; Tokugawa_shogunate; Khazar_Khaganate;
  Pachacuti). Recurring coordinator residual patterns now well-grooved: Terror→
  Great_Purge / Party→CPSU type recurrences, demonym closes, drop redundant blurbs
  colliding with event/cross links, tighten pre-existing sentence-matchText crosses,
  retarget redirect-divergent slugs (charqui→Jerky, Polish→Polish_people not the
  Poles disambig). Agents caught OGPU Telegram channel, Apollo→Greek god, Vladimir
  Monomakh warship, Yaroslav Amosov MMA fighter, SORAS Rwandan insurer, Trujillo
  Peru→Spain, Moctezuma I vs II. **~65 remain. Next worst-first:** post-maurya-
  kingdoms (241), vedic-period (237), russian-empire (237, 20 ch), kingdom-of-aksum,
  zhou-dynasty.
- **2026-05-22 batch 7:** **mali-empire** (`d6049d8`, 301→0 NEW), **srivijaya**
  (`869a961`, 296→0 NEW), **kingdom-of-kush** (`fdb886e`, 283→0 NEW), **al-andalus**
  (`14f98b9`, 300→0 NEW, 18 ch / 4 waves) swept + ONE batched atomic deploy +
  curl-verified (Mansa_Musa; Malay_Peninsula; Napata; Almanzor). **DEPLOY NOTE:**
  Cloudflare API threw transient errors for ~20 min (entitlements.not_available
  10007, then unknown 10013) — NOT auth (whoami fine), NOT our build (shipped-page
  guard green). It cleared on retry after ~2 min wait; `wrangler deploy` succeeded.
  If it recurs, just wait and retry — it's Cloudflare-side. Coordinator also began
  tightening pre-existing sloppy sentence-matchText crosses to tight proper nouns
  (kush: Tiglath-Pileser III/Nebuchadnezzar II/Nineveh/Sassanid; al-andalus ch11
  collisions dropped). Agents caught Kouyate→footballer, Mansa Suleyman→wrong-person,
  Musi River India→Indonesia, Persik Kediri football club, Merneptah Stele→Piye,
  Memphis Group design studio, Charles III→Charles V, Isabella of France→Castile,
  Boabdil wrong-Muhammad-number. **~69 remain. Next worst-first:** soviet-union (278),
  meiji-japan (277), kievan-rus (267), inca-empire (254), post-maurya-kingdoms (241).
- **2026-05-22 batch 6:** **heian-japan** (`b902245`, 334→0 NEW), **gupta-empire**
  (`e02a374`, 332→0 NEW), **joseon-korea** (`83c059f`, 318→0 NEW), **asuka-nara-japan**
  (`dae2d25`, 309→0 NEW) swept + ONE batched atomic deploy + curl-verified
  (Minamoto_clan; Jainism; Yi_Hwang; Daijō-kan). Two recurring artifact classes
  handled by coordinator: (a) pronunciation-gloss false positives (gupta "JAIN" =
  "oo-JAIN" gloss of Ujjain; ming "SONG"; joseon "SONG") → waive; (b) chain-pointer
  label fragments (asuka "Song China Ch" from "(Sui, Tang & Song China Ch N)") →
  waive, the target civ already cross-linked via "Tang". Agents caught dense
  homonym traps (Sonni→Jack_Sonni; Rashomon film→Rajōmon gate; SETA Corp video
  game; Saka-saka Filipino film; Kumara→Polynesian sweet potato; pen-name→person
  Yeonam→Park Ji-won). **~73 remain. Next worst-first:** mali-empire (301),
  al-andalus (300), srivijaya (296), kingdom-of-kush (283), soviet-union (278).
- **2026-05-22 batch 5:** **ming-dynasty** (`8f51bd8`, 396→0 NEW), **songhai-empire**
  (`7fd6c97`, 353→0 NEW), **modern-india** (`94ef11d`, 350→0 NEW, 15 ch / 3 waves),
  **persian-empire** (`6c75987`, 349→0 NEW) swept on the new pipeline + ONE batched
  atomic deploy + curl-verified (Forbidden_City; Saadi_Sultanate; Lok_Sabha;
  Cyrus_the_Great). Demonym residual closed per civ via a deterministic validated
  script (modern-india needed 50: Lok Sabha/Supreme Court of India/Indian Army by
  era/Indo-Pakistani wars etc.). **wiki-verify cache bug found & worked around:** a
  429 poisons the slug's cache entry permanently (cached failures never retry) —
  clear `audits/.wiki-verify-cache.json` entries with `reason~="lookup failed"`
  before each snapshot. Agents caught many REUSE homonyms (Congress→US Congress in
  every modern-india ch; Sonni→Jack_Sonni guitarist; Zarathustra→Nietzsche book;
  shah mat→Checkmate). **~77 remain. Next worst-first:** heian-japan (334),
  gupta-empire (332), joseon-korea (318), asuka-nara-japan (309), mali-empire (301).
- **2026-05-21 batch 4:** **mesopotamia** (`ce75cc4`, 398→0 NEW) swept one-wave
  (13 chapters, 5 agents × 2-3 ch) + DEPLOYED LIVE + curl-verified
  (Code_of_Hammurabi/Inanna/Babylonia).

- **2026-05-21 batch 3:** **early-medieval-europe** (`e54a9ab`, 401→0 NEW) and
  **viking-age** (`15b5015`, 401→0 NEW) swept + DEPLOYED LIVE + curl-verified
  (Charlemagne/Reims/Carolingian_dynasty; Blót/Gorm_the_Old/Norse–Gaels).
  **SPEEDUP ADOPTED (viking-age on):** one-round agents — ~4 agents × 2 chapters
  each instead of 2 waves of 5+3, so an 8-chapter civ runs in ONE wave (under the
  ~5-concurrent rate ceiling), ~⅓ less wall-clock, same quality. Recurring
  cleanup pattern per civ: a few overlap-redundant glossary drops + transient
  snapshot rate-limit failures on accented slugs (re-run clears them) + a small
  coordinator residual pass for demonyms the stale-vs-fresh delta surfaces.
  **~82 remain. Next worst-first:** mesopotamia (398), ming-dynasty (393),
  songhai-empire (353), modern-india (350), persian-empire (344).

- **2026-05-21 batch 2 (fresh-worklist):** worklists refreshed corpus-wide via
  `--corpus` (the stale-worklist fix); **tang-song-china** (`4b022e0`, 405→3 NEW)
  and **gokturk-khaganate** (`c2ded10`, 406→2 NEW) swept on the new pipeline +
  DEPLOYED LIVE + curl-verified (An_Lushan/Wu_Zetian/Marco_Polo; Bumin_Qaghan/
  Ilterish_Khagan/Tiele_people). gokturk needed extra coordinator cleanup: a dead
  event slug (Ilterish_Qaghan→Ilterish_Khagan in reference-data), 2 pre-existing
  sloppy sentence-matchText crosses dropped, a 'Huns' cross retargeted off
  'White Huns'. **~84 remain. Next worst-first:** early-medieval-europe (401),
  viking-age (401), mesopotamia (398), ming-dynasty (393), songhai-empire (353).

- Prior: goryeo-korea, uyghur-steppe, renaissance-italy, byzantine-empire,
  delhi-sultanate, swahili-coast, ottoman-empire, mughal-empire,
  umayyad-caliphate, medieval-india, yuan-dynasty, timurid-empire,
  islamic-golden-age, safavid-persia, high-medieval-europe, mongol-empire (16).
- **2026-05-21 (pipeline rebuild session):** speed tooling shipped (`950346a`);
  **hme + safavid bold-waiver cleanup** (`acfcbe7` — real entities un-waived to
  born-verified links, both ALL GREEN); **late-medieval-europe** swept on the new
  pipeline (`7e0c372`, 380→0 NEW, 7 grandfathered residual). All three DEPLOYED
  LIVE + curl-verified (County_of_Tripoli/Spanish_Inquisition; Abbas_the_Great/
  Janissary/Shah_Mosque; Joan_of_Arc/Petrarch/Pope_Alexander_VI).
- **~86 remain.**

**▶ PIPELINE REBUILT 2026-05-21 — 3 speed levers (see `audits/link-pipeline.md`):**
1. `link-suggest` BATCHED (~5s, was minutes). 2. `link-apply` auto-writes the
provably-safe REUSE slice (~30/civ; multi-word + multi-civ + clean prose match —
NEVER widen, REUSE is not quality-guaranteed, see `feedback_reuse_not_trustworthy`).
3. `link-split` auto-generates agent inputs + brief. Residual round now OPTIONAL.
Per-civ flow: `link-suggest --tl=<civ>` → `link-apply <civ> --apply` → `link-split
<civ>` → ≤5 chapter agents (2 waves >5ch) → `sweep-merge` → `sweep-verify --fix-drops`.

**▶ PROCESS FINDING (act on before next sweeps): the per-civ worklists in
`audits/link-coverage/` are STALE (2026-05-18).** The corpus has grown so much that
a fresh coverage run surfaces ~50–60 entities the stale worklist never showed the
agents (lme: agents closed the 380-term stale list, then a fresh run revealed 62
more — Petrarch, Alexander VI, Gattamelata, Charles IV — closed by a coordinator
residual pass). **FIX: run `tsx scripts/link-coverage.ts --corpus` once at the start
of each batch session to refresh ALL worklists, THEN sweep** (deterministic, no
network, ~1 min). Otherwise every civ needs a heavy residual pass.

**▶ NEXT BATCH (worst-first):** refresh worklists (`--corpus`) FIRST, then
tang-song-china, then continue down `audits/link-coverage-ledger.md`.

**▶ TWO SPEED CHANGES LOCKED BY USER 2026-05-21 (apply from here on):**
1. **STOP chasing literal-zero GATE per civ.** Close the worklist + the
   demonym/bold residual, then accept a small drift residual (a few NEW from
   sibling-commit coupling — like renaissance landed at 12, byzantine 18) and
   MOVE ON. Do NOT whack-a-mole the last 2–5 drift gaps per civ. The
   end-of-program `--corpus` convergence pass mops all drift at once (that was
   always the model). Verify a civ by: worklist closed + `sweep-verify` green
   except a small `link-coverage` residual = OK to ship.
2. **BATCH the deploys.** Sweep 3–4 civs (commit each), then ONE clean atomic
   deploy `rm -rf out && npm run build && npx wrangler deploy` for the batch —
   not a full rebuild per civ.

**▶ THE PER-CIV PIPELINE (hardened + FASTER — rebuilt 2026-05-21):**
1. `node scripts/link-suggest.mjs --tl=<civ>` → `audits/link-suggest/<civ>.{json,md}`
   (PROPOSE; now **batched → ~5s**, was minutes. Each REUSE row carries `sourceCivs`).
2. `node scripts/link-apply.mjs <civ>` (inspect dry-run) then `--apply` —
   auto-writes ONLY the provably-safe REUSE slice (conf=high · ≥2 words · ≥2 source
   civs · clean exact-case prose match · unowned; ~30 links on a fresh civ). Everything
   else stays for agents. **Eyeball the printed list** — it still passes all gates later.
3. `node scripts/link-split.mjs <civ>` — auto-generates `/tmp/<civ>/in/ch{N}.json`
   (rows minus SKIP minus auto-applied, lead embedded) + `/tmp/<civ>/BRIEF.md`
   (no more hand-typed split/brief). Launch ONE LINK agent per chapter, ≤5 concurrent
   (2 waves for >5 chapters). Each born-verifies every slug vs the embedded lead,
   converts self-CROSS→glossary, links demonyms/peoples, waives ONLY
   own-name/modern-locator/generic.
4. `node scripts/sweep-merge.mjs <civ> /tmp/<civ>/out` (creates waivers file if
   missing: `echo '{}' > content/.link-waivers-<civ>.json` first if needed).
5. `node scripts/sweep-verify.mjs <civ> --fix-drops` → read the ✅/❌ + the
   remaining `link-coverage` GATE list.
6. **Residual round = OPTIONAL (speed change #1).** Small drift residual → STOP (the
   end-of-program `--corpus` pass mops it). Run a residual pass ONLY if genuinely
   under-closed: `/tmp/<civ>/residual.json` + a BRIEF2 (demonyms→people pages, real
   entities incl. **bold first-uses** → link, waive only artifacts/era-labels/
   locators), 2 agents, `sweep-merge <civ> /tmp/<civ>/out2`, `sweep-verify` again.
7. Force-add the curated set (NEVER `git add -A`):
   `git add -f content/.glossary-links-<civ>.json content/.cross-links-<civ>.json
   content/.link-waivers-<civ>.json content/.link-snapshots-<civ>.json` +
   `audits/link-suggest/<civ>.{json,md}`; commit per civ. Batch-deploy per #2.

**▶ "BOLD-ONLY DOESN'T RENDER" IS A MYTH (corrected 2026-05-21).** Bold/italic
terms LINK and RENDER fine — injecting `<a>` into `**Term**` yields
`<strong><a>Term</a></strong>` (verified end-to-end: Spanish Inquisition in
hme, and shipped ottoman beyliks/Söğüt all render `<a>`). The old "matcher
won't underline bold / ~37 ottoman links don't render" note was a
**misdiagnosis** (those were `not found` collision/overlap drops). **NEVER
waive a term "bold-only-renders-nowhere" — link the bold occurrence.** mongol
was swept correctly under this. **OWED CLEANUP (do early next session):**
hme + safavid were shipped BEFORE the correction and have ~20 / ~4 real
entities wrongly waived as bold-only — convert those waivers to born-verified
links, re-verify, include in the next batch deploy. (Find them: waivers that
are capitalized real entities, e.g. hme Raymond of Toulouse / County of
Tripoli / Spanish Inquisition / Pisa / Córdoba / Valencia / Seville;
safavid Muhammad al-Mahdi / Mughal Empire / Imam Mosque / Abbas I.)

**▶ COORDINATOR TOOLS (committed `b8301cb`):** `scripts/sweep-merge.mjs`
(dedup vs glossary+cross+EVENT, chapter count from narrative, collision
report) · `scripts/sweep-verify.mjs --fix-drops` (parse+drop-classify, coverage,
lint, fix-links, audit-reuse-links, snapshot, G10/11/12, waiver-flag → one
✅/❌; `--no-snapshot` for fast iteration) · `scripts/audit-reuse-links.mjs`
(REUSE wrong-subject scan — catches name-overlap homonyms fix-links misses,
e.g. Assassins→Assassin's_Creed the video game; exits 1 on pop-culture
pattern). Doc: `audits/link-pipeline.md`.

**▶ DEPLOY: the agent CAN deploy now** (user added the wrangler permission,
commit `45daf89`). `git push` does NOT auto-deploy (deploy.yml is
workflow_dispatch-only) — must run `npx wrangler deploy`. Atomic:
`rm -rf out && npm run build && npx wrangler deploy`. Verify prod with a
`curl -sL https://stuffhappened.com/<civ>/ | grep` for a new slug.

**▶ REUSE QUALITY (user's standing concern):** the worksheet's REUSE slugs are
born-verified-elsewhere but can be the WRONG subject when the name overlaps
(caught this session: Ismail→an actress, Turcoman→a racehorse, Mansur→a Mughal
painter, Assassins→the video game). Agents born-verify per row; coordinator
ALSO runs `audit-reuse-links` (complete scan of the divergent subset, not a
sample) every civ. Keep doing both.

**Quieter side-thread:** user is running Phase 2 (war timelines) with a
separate Claude in another worktree. My lane is the link sweep on `main`. Phase
2 guidance given: fork the civ-build pipeline (≈80% transfers); adjust chapter
shape, event categories, map prompts, source data; pilot ONE war first. Don't
edit shared gate scripts from both streams.

**▶ USE THE NEW PIPELINE for every remaining civ — NOT the old full-sweep
agent (it over-waived catastrophically; see HARD LESSON below).** Per civ:
1. `node scripts/link-suggest.mjs --tl=<civ>` → `audits/link-suggest/<civ>.{json,md}`
   pre-resolves every worklist term: REUSE (~80%, slug born-verified in
   another civ, shows lead + ⚠ homonym flag) / CROSS / SKIP (ONLY own-name/
   modern-locator/generic) / LINK-CANDIDATE / NO-PAGE. (Worklists exist in
   `audits/link-coverage/`; regen with `tsx scripts/link-coverage.ts --corpus`
   if stale.)
2. A LINK agent/coordinator consumes the worksheet: confirm each REUSE/CROSS
   (subject vs the shown lead — homonyms!), confirm/fix LINK-CANDIDATE, write
   the curated glossary/cross entry. **matchText = verbatim body substring
   (bold is fine — bold IS linkable).** CANNOT skip outside the SKIP set.
3. BLURB the NO-PAGE terms (authored `definition`, no slug).
4. Verify (coordinator, verify-don't-relay): `link-coverage --tl=<civ>`
   TOTAL≈0 (NOT just "0 NEW"), `lint-links --strict` 0 ERROR, `fix-links`
   0 flags, `parse` no avoidable drops, waivers ≤~30 cat A/B/C.
5. Force-add the 5 curated files (NEVER `git add -A`), commit per civ, push.
Full doc: `audits/link-pipeline.md`.

**▶ NEXT BATCH (worst-first, after the 15 done):** mongol-empire,
late-medieval-europe, tang-song-china, then continue down the ledger.
Then continue worst-first down `audits/link-coverage-ledger.md` to corpus
end, then an end-of-program `--corpus` convergence pass to mop residual
drift (currently ~31 across the swept 12 — bounded).

**▶ NEW-PIPELINE RUN VALIDATED 2026-05-21 (islamic-golden-age).** The
`link-suggest.mjs` worksheet + split PROPOSE/LINK/BLURB pipeline works well:
ran 5 per-chapter LINK agents ×2 waves (born-verify each slug vs the page
lead), then a 2-agent residual pass for convergence-drift demonyms, then
coordinator merge+gates. Caught real wrong-subject REUSE the worksheet
suggested (Mansur→Ustad_Mansur the Mughal painter, Ibn Furat→wrong
historian, Slavic→Saqaliba, "God's unity"→Baháʼí page) AND one the agents
let through that the coordinator spot-check caught (Assassins→Assassin's_Creed
the VIDEO GAME → fixed to Order_of_Assassins). LESSON: coordinator MUST
spot-check REUSE links where slug overlaps the term but subject can differ —
fix-links' word-overlap test passes those. Also: ~12 new glossary entries
collided with existing cross/event links (same matchText) → dropped by parser;
coordinator removed the redundant glossary (existing link covers the term).
77 of 180 CROSS suggestions were self-references (targetTl==the civ) → agents
correctly converted to glossary links.

**▶ DEPLOY IS A USER-RUN STEP.** Auto-deploy is OFF (deploy.yml is
`workflow_dispatch`-only). The agent harness BLOCKS the agent from running
`wrangler deploy` AND from self-permitting. After committing+pushing a
batch, hand the user: `npx wrangler deploy` (in their terminal, NO `!`
prefix — `!` in a shell means NOT and silently no-ops the command). Local
wrangler OAuth (mebernin@gmail.com) has full workers/pages perms. To let
the agent deploy: user adds `Bash(npx wrangler deploy:*)` to
`~/.claude/settings.json` allow themselves.

**#19 INTRO RETROFIT — IN PROGRESS (2026-05-28).** 55/102 done, intro-baseline 102->47 (B1-B11 committed+pushed; B10 Islamic, B11 Mesoamerican = olmec,zapotec,teotihuacan,maya,aztec). Batches committed+pushed (NOT deployed, user holding): B1 Northern-European (celtic,germanic-tribes,the-goths,migration-period,anglo-saxon-england), B2 Greco-Roman (minoan,mycenaean,ancient-greece,ancient-rome,byzantine-empire), B3 early-Chinese (ancient-china,shang,zhou,qin,han), B4 Nile (early-dynastic/old-kingdom/new-kingdom/late egypt, ancient-nubia), B5 Indian (indus-valley,vedic-period,maurya,post-maurya-kingdoms,gupta). Pipeline per civ: author agent -> lint-intros --strict -> ONE combined fact+voice critic agent -> apply fixes -> debaseline (remove from audits/intro-baseline.json) -> scoped parse -> commit. 5/wave. Authoritative progress = audits/intro-baseline.json (civs still listed = not yet done). early-medieval-europe = template.

**#19 chapter-intro retrofit — NOW UNBLOCKED (#7 complete 2026-05-28).** Author
`narratives/<tl>.intros.json` for the 102 grandfathered civs to the RICH spec
(CLAUDE.md step 8b; `early-medieval-europe` template). **Per civ, THREE gates
(not one) — intros are a reader-facing factual surface, held to the same bar as
main prose:** (1) `lint-intros --tl=<tl> --strict` 0 (structural: presence,
word bounds, ≤620 ceiling); (2) a **fact-checker pass** on the intro claims
(cast roles/dates, "story so far" recap, "lay of the land" assertions);
(3) a **storytelling/voice critic** (house voice, frames tension, RICH not
terse). Then scoped parse → remove civ from `audits/intro-baseline.json` →
commit. ~100 civs × 8–20 chapters ≈ 1,000+ intro cards: a large authoring
program, run batched/gated like the #7 sweep, one deploy at the end.

**Two load-bearing facts for #7 (full detail in ACTIVE PROGRAM + memory):**
- **The gate is corpus-coupled** → one-pass parallel sweep can't reach
  global 0; model is **SWEEP + CONVERGE** (commit each civ at worklist-closed
  + waiver-audit-clean; bounded sibling-drift residual mopped by a final
  `--corpus` convergence pass). Memory `project_coverage_sweep_corpus_coupled`.
- **Use the CORRECTED waiver audit** (the earlier one had a keying bug — used
  glossary `term` not `matchText` → false "never-linked" flags). Build the
  linked set from glossary `matchText` AND `term` + cross/event `matchText`,
  and substring-check any flagged term before calling it a defect. Memory
  `feedback_coverage_agents_over_waive`. Any real place/people/person/ruler/
  institution/our-civ in the waived-but-never-linked set = reject the civ.

**Done in the 2026-05-19→21 sessions (do NOT redo):** chapter-intro feature +
G13 gate shipped & LIVE (pilot `early-medieval-europe`, rich form, prod-
verified); #19 added to corpus remediation; intros wired into the new-civ
pipeline + audit skill; G13/G14 gate-collision fixed; scheduled routine
`trig_013gYpKAMEdBVBAhpu1HwaGd` created then **DISABLED** (banner above).

**Shipped & closed earlier this session (do not re-litigate):** Standalone
chain-picker fix (`30c03a2`, live), civ date-range in the sticky header
(`23db240`, live), `node_modules` symlink untracked (`2833e00`),
`npm run parse:index` post-flip optimization (`74ae3fe`, ~8m→~1s, proven
byte-identical), worktree/branch cleanup. The Swahili Coast + iOS swipe
fix remain live on prod.

**Repo-hygiene item — DONE 2026-05-18 (`2833e00`, pushed):** the historically-
committed `node_modules` symlink blob (git mode 120000) is untracked via
`git rm --cached` (real dir kept on disk; `.gitignore`'s `node_modules/` rule
now takes over). This was the root cause of the multi-hour "tsx exits 194 /
build silently dies" tail. Fresh checkouts/worktrees no longer inherit it.

**Deploy-tail lesson (cost ~3h of false leads — durable):** `content/` is
gitignored. Every per-civ curated file (`.event-links/.glossary-links/
.cross-links/.link-waivers/.link-snapshots-<tl>.json`) MUST be `git add -f`'d
or it silently never reaches main and the density/coverage gates see the civ
as 0-events. And NEVER `git add -A` during a build — it sweeps the parallel
writers' `.draft-sc-*.md` / `.fix-sc-*.md` scratch files into the commit,
which then lint as phantom 0-event civs and abort the build. Both bit this
build; both fixed in `5be78b6`. The repeated "exit 194, no output" was the
build aborting at the density gate, NOT a tsx/sandbox failure — verified.

**Durable context still in force (not the active task — background):**
- Build optimization (3 pillars + `npm run parse:index` 4th refinement) is
  DONE/codified — `audits/build-optimization.md`, memory
  `project_build_optimization_done`. The-17 roster + emep ch3 split remain
  available as ordinary content work but are NOT the current priority — the
  link-coverage sweep is. Backlog **#17**/**#12** still deferred; **#7 is
  NO LONGER deferred — it is the ACTIVE PROGRAM.**
- `scripts/link-coverage.ts` S7 rare-word signal is an accepted noisy-but-
  safe advisory (never gates).

**Auto-deploy: PARKED (user deprioritized).** `deploy.yml` no longer runs on
push (stops the failure emails). Manual deploy is the working path:
`rm -rf out && npm run build && npx wrangler deploy` (wrangler OAuth auth on
this Mac). Diagnostic for whenever it's resumed: a faithful clean
`npm ci && npm run build` **passes (exit 0)** — so the remaining Action
failure is the **Cloudflare deploy step**, almost certainly the API token's
permission scope. Resume path: recreate the token via the **"Edit Cloudflare
Workers" template** (not a narrow custom token), update the
`CLOUDFLARE_API_TOKEN` GitHub secret, re-add the `push:` trigger in
`deploy.yml`. Cloudflare secrets are set; the chat-exposed token was rolled
(dead).

**Communication (auto-inherited via memory + `~/.claude/CLAUDE.md`):** every
message to the user begins with the literal ***Message to you*** then plain
normal text — plain language, no jargon, lead with the point, short.

---

## ▶ SCHEDULED-RUN PLAYBOOK (automated cron entrypoint — added 2026-05-19)

A recurring daily scheduled agent (created 2026-05-19, first fire **2026-05-21
10:05 America/Los_Angeles**) runs this. **Each fire = at most ONE batch, then
stop.** User-locked order: **#7 link-coverage sweep to completion, THEN #19
chapter-intro retrofit.** Per fire, in order:

1. **Read this whole file first.** It is canonical. Determine the active
   program + the next batch from the run logs in "▶ ACTIVE PROGRAM" (#7) and
   backlog `#19`, and from `audits/link-coverage-ledger.md`.
2. **Date guard (HARD).** If the current UTC date is **before 2026-05-21**,
   do nothing at all and exit immediately — no commit, no STATUS write, no
   agents. The recurring cron (`5 17 * * *`) will fire on 2026-05-20 before
   the user's usage reset; that fire MUST be a silent no-op. First real
   working fire = 2026-05-21. (A remote agent cannot introspect the user's
   weekly claude.ai usage, so this guard is date-based by design, not a
   usage check — it is the deliberate proxy for "after the weekly reset.")
   If a fire ever detects a `DONE` marker for BOTH programs in the run log,
   also no-op (the work is finished; the user disables the routine at
   claude.ai/code/routines).
3. **Pick the active program.** #7 is active until `link-coverage --corpus`
   shows 0 NEW corpus-wide (sweep + convergence done). Then #19 is active
   until `audits/intro-baseline.json` is empty (all 102 de-grandfathered).
   When both are done, the routine **self-deletes** (see CronDelete in the
   schedule) and writes a DONE line here.
4. **Run exactly one batch with that program's LOCKED protocol:**
   - **#7:** start with **ottoman-empire** (re-check with the *corrected*
     waiver audit — matchText+term keying; redo with the hardened+tightened
     brief only if genuinely defective). Then next 5 worst civs from the
     ledger (skip the 6 done + any since-completed). Hardened brief MANDATORY;
     ≤5 worktree agents (hard ceiling); ONE coordinator merges, re-runs ALL
     gates, runs the CORRECTED waiver audit, force-adds the curated set (NEVER
     `git add -A`), commits per civ. Detail: "▶ ACTIVE PROGRAM" + memories
     `feedback_coverage_agents_over_waive`, `project_coverage_sweep_corpus_coupled`.
   - **#19:** next 5 civs (worst/most-read first). Author `narratives/{tl}.intros.json`
     to the **rich** spec (CLAUDE.md step 8b; `early-medieval-europe` is the
     template; rich backstory NOT terse — `feedback_chapter_intros_rich`).
     `lint-intros --tl={tl} --strict` → 0, scoped parse, **remove the civ from
     `audits/intro-baseline.json`** (the done-marker). ≤5 worktree agents, one
     coordinator; coordinator **sample-reads** each civ for the rich-runway
     intent (gate-green ≠ correct). Detail: backlog `#19`.
5. **Verify, don't relay.** Re-run the deterministic tools yourself. If ANY
   gate/verification fails for a civ → STOP that civ, leave `main` clean, do
   **NOT** push partial/bad content, write the failure to the run log, and
   continue only with civs that fully passed.
6. **Record + push (PUSH-ONLY — do NOT deploy).** Append a dated run-log
   line (civs done, commits, failures). Commit STATUS. `git push origin
   main`. **Do NOT run `npm run build` / `npx wrangler deploy`** — this is a
   remote cloud agent with no Cloudflare auth; deploy is impossible here and
   is a deliberate manual local step (user chose push-only 2026-05-19).
   Append each pushed civ to the **DEPLOY DEBT** list below so a later local
   session deploys them. Then **stop** — at most one batch per fire; do not
   start the next batch this fire. Execution is **serial** (no Agent/worktree
   fan-out in the remote tool set) — a "batch" here is a small serial run
   (≤5 civs), stop early on any failure.

**DEPLOY DEBT (committed to main, NOT yet on stuffhappened.com):**
- _(none — islamic-golden-age DEPLOYED LIVE 2026-05-21, verified on
  stuffhappened.com: Almanzor/Guadalquivir/Order_of_Assassins/Saqaliba all
  render, 200.)_

**▶ AGENT CAN NOW DEPLOY (changed 2026-05-21).** The user added the deploy
permission to their settings, so the harness no longer blocks the agent from
`npx wrangler deploy`. Deploy is now: `rm -rf out && npm run build &&
npx wrangler deploy` (atomic — the clean-out avoids shipping a stale `out/`;
`npm run build` runs the FULL parse via prebuild). Verified working this
session (islamic-golden-age). Local wrangler OAuth = mebernin@gmail.com.
The earlier "deploy is a user-run step / agent blocked" notes below are now
SUPERSEDED.

**Hard stops:** two consecutive failing fires on the same civ/batch → stop
the routine and leave for a human (write STOP-FOR-HUMAN here). The schedule
can be cancelled anytime with the `schedule` skill or by the user.

---

## Operating model (durable — this is how this project is run)

1. **One writer at a time on `main`.** Concurrent work goes in an isolated
   `git worktree` on its own branch, merged later — never two sessions editing
   the same checkout. (Worktrees live alongside, e.g. `../timeline-v2-lcr`.)
2. **Verify, don't relay.** Session self-reports ("solid and clean", "N broken")
   are not evidence. The deterministic tools are evidence. Re-run them.
3. **Stale report files cause false emergencies.** `LINK-FIX-NEEDED-*.txt` and
   similar are transient; delete them after use. A number with no reproduce
   command is a rumour.
4. **Nothing reader-facing deploys while the user is reassessing** without an
   explicit "push/deploy" from them. Committing locally is fine and is how work
   survives a session clear; pushing `main` auto-deploys (Cloudflare) and is
   gated on their word right now.
5. **Don't start deferred work.** Deferred = listed under "DO NOT START" below
   until the user lifts it.

## Verified truth — 2026-05-17

| Thing | State | Reproduce |
|---|---|---|
| Reader-facing **dead/disambiguation** links | **0** in every civ sampled (worst 5 + spot) | `node scripts/fix-links.mjs <tlId>` → "PAGE" never appears |
| Corpus **link floor** (links a human should eyeball) | **8 links across 7 civs** (95/102 civs perfectly clean, 0 errors). Was 81 pre-fix, 801 as a stale phantom. The 8: ottoman-empire ×2; zhou-dynasty, mycenaean-civilization, kievan-rus, inca-empire, asuka-nara-japan, anglo-saxon-england ×1 — each a genuine slug≠term the tool correctly won't auto-confirm | run the loop in "commands" below |
| Git | `main` = `origin/main`, clean tree, single writer | `git status -s && git rev-list --left-right --count HEAD...origin/main` |
| Docs/memory | reconciled; this file is canonical | — |
| Corpus link cleanup (backlog #18) | DONE in substance — the "0 broken" phrasing in older docs was the **old liveness-only ruler**; the honest statement is "0 dead/disambiguation, ~floor of author-named pages Wikipedia renamed" | — |

**The `fix-links.mjs` author-fidelity fix (this session, why it matters):** the
subject check compared the linked term against the page Wikipedia *redirected
you to*, so a correctly-named slug (`Gukjagam`) that Wikipedia routes to a
differently-titled article (`Kukchagam`) was falsely flagged "wrong subject".
That false-positive class is **why every link pass looked like an unfixable
swamp.** Fix: if the author named the slug as the term itself, and the page is
already live & not-a-disambiguation, trust Wikipedia's routing. A real "dodge"
(term ≠ slug) still fails — gate unchanged where it should bite. Verified: false
alarms cleared, genuine "needs a human" + duplicate-photo flags preserved.

## Pipeline state (production, not just checkers) — verified 2026-05-17

- **Link correctness: IN the pipeline + gated.** `ship-check.mjs` runs
  `fix-links --strict` + `lint:links --strict` (zero-tolerance, new civs).
  CLAUDE.md step 6 is creation-first (born-verified). A civ cannot go live
  without passing. ✓
- **Link coverage: MERGED into the pipeline (`e77736a`, 2026-05-18).** The
  rebuilt multi-signal detector + its (civ,chapter,term) grandfather baseline
  are on `main`; `ship-check.mjs` line 87 runs the NEW detector. Verified:
  legacy `mali-empire --strict` = 281 gaps / **0 NEW** → passes (102 not
  broken); detector genuinely surfaces real recurring-unlinked entities.
  - **RESOLVED 2026-05-18 (user-approved).** Baseline surgically scoped to the
    **100 legacy civs only** — `uyghur-steppe` (131) and `goryeo-korea` (97),
    both the-17 *new-pipeline* civs, removed from
    `audits/link-coverage-baseline.json` (102→100 keys; the 100 legacy entries
    left byte-identical → zero risk to them). Verified: uyghur-steppe &
    goryeo-korea `--strict` now **exit 1 (gated)**; mali-empire & ancient-rome
    `--strict` still **exit 0 (legacy untouched)**. New production is now
    actually held to coverage at creation.
  - **Follow-on (NOT started — not deferred-#7):** uyghur-steppe & goryeo-korea
    are live (`hasContent:true`); de-grandfathering does NOT unship them and
    does not change the site, but their `ship-check` coverage gate now blocks
    until their **228 surfaced gaps** (131+97) are linked or waived. That is
    new-pipeline debt distinct from the DEFERRED legacy #7 (22,877). Closing it
    is real work; do it before treating those two as pipeline-complete.
- **The build itself does not validate links** (`prebuild` gate =
  `lint-links --no-slugs && lint-density`, no fix-links/coverage — speed
  design). Enforcement is `ship-check` at the hasContent flip + the
  build-static shipped-page guard, NOT the build. Sound *iff* ship-check is run.

## ✅ RESOLVED (verifying) — auto-deploy reactivated via in-repo Action (2026-05-18)

`git push origin main` auto-deploys again as of 2026-05-18. The old
**Cloudflare-dashboard Git integration** silently died; it's replaced by the
in-repo `.github/workflows/deploy.yml`. Both GitHub Actions secrets are now set
(`CLOUDFLARE_API_TOKEN` — rolled after being pasted in chat, so the exposed
value is dead — and `CLOUDFLARE_ACCOUNT_ID`). **This STATUS commit is the
first live test** of the reactivated path. Discipline stays: **never assume
push == deployed — verify prod**: `curl -sL https://stuffhappened.com/
early-medieval-europe/ | grep -c "supreme act of ascetic devotion"` (>0 =
current build live).

**Durable fix added:** `.github/workflows/deploy.yml` (in-repo GitHub Action:
push→build→`wrangler deploy`, fails loudly). **INERT until the owner adds 2
GitHub Actions secrets** (only they can): `CLOUDFLARE_API_TOKEN` (Workers
Scripts:Edit token) + `CLOUDFLARE_ACCOUNT_ID` =
`3149ac14b33df309a6ce83201305a973`; then disconnect the old dashboard
integration to avoid double deploys. Until activated, prod updates ONLY via
the manual atomic deploy: `rm -rf out && npm run build && npx wrangler deploy`
(builds the working tree — mind scope; stash unconfirmed changes first).

**Lesson (2026-05-18):** the first manual deploy *failed at the prebuild gate*
— a glossary `matchText` ("Dialogues of Pope Gregory the Great") spanned an
italic boundary so the parser couldn't find it → `lint-links --strict` 1 ERROR
→ build abort. Caught because the build runs the gate; would have been a
silently-dropped link. **After ANY link edit run `npx tsx scripts/lint-links.ts
--tl=<civ> --strict` (pipeline step 9) BEFORE deploy — link-coverage/fix-links
do not check matchText-is-in-body.**

## Worked example — early-medieval-europe ch3 (shipped 2026-05-18 for review)

Full link-coverage closure of one chapter, as the reference pattern: **46 GATE
gaps → 0** (43 born-verified glossary links + 3 documented waivers in
`content/.link-waivers-early-medieval-europe.json`: `monastery` generic/inline-
defined, `Northumbrian` adjectival form of linked place, `Tang-Song China`
already a cross-link). 1 term (`peregrinatio pro Christo`) was a dead Wikipedia
page → authored house-voice blurb, not a guessed slug. `fix-links` 326/326
PASS, 0 retarget. Pushed/deployed for user review. Note: closing coverage is
curation-with-judgement (link load-bearing, waive universals), not zeroing a
number — this chapter is the template.

## Branch / worktree topology

**CLEANED 2026-05-18.** Single worktree, single branch:
- `main` — the only worktree (`/Users/mberning/projects/personal/timeline-v2`)
  and the only local branch. `main == origin/main`, clean.
- `feat/the-17` + `chore/link-coverage-redesign` worktrees (`../timeline-v2-the17`,
  `../timeline-v2-lcr`) **removed**; both branches **verified fully contained in
  main** (zero commits not in main, `git cherry` empty, worktrees clean) before
  deletion — uyghur-steppe + swahili-coast `hasContent:true` on main AND live on
  prod (200). The old "feat/the-17 real, unmerged" note was stale; corrected.
- All `chore/g12-*`, `chore/corpus-remediation`, `worktree-agent-*` (×6) local
  branches **deleted** (were refs only, no work lost).
- **Still on origin:** `origin/chore/link-coverage-redesign` (work is merged to
  main → dead remote ref). Not pruned: deleting a remote branch is outward-
  facing — `git push origin --delete chore/link-coverage-redesign` when wanted.

## DO NOT START (deferred by the user — until they say otherwise)

- **Link-coverage sweep — PAUSED by user 2026-05-19 until ~2026-05-21**
  (weekly usage reset). Active program, not deferred/cancelled — just on
  hold for ~2 days. Do not launch sweep agents before then. Resume at
  "▶ NEXT SESSION START HERE".
- ~~Backlog #7 deferral~~ — **LIFTED by the user 2026-05-18.** The full
  legacy link-coverage sweep + the 2 required new-pipeline civs are now
  ACTIVE work (user chose "the 2 + full legacy sweep"). See the program
  section below. Backlog #7 is no longer deferred. (Currently PAUSED — see
  above.)
- Anything reader-facing **deployed** while the user is reassessing.

## Ready to run — user-gated (commands staged, do not run unprompted)

- **Photo de-dup tail** (cosmetic, deterministic, no-AI): per civ
  `node scripts/fix-links.mjs <tlId> --apply` then `npm run parse`. Drops
  recycled/off-topic images (a few per civ corpus-wide). Content change → commit
  ok, deploy gated.
- ~~**Branch prune**~~ — **DONE 2026-05-18.** All stale local branches + the
  `feat/the-17` & `lcr` worktrees removed (verified fully in main first). Only
  `origin/chore/link-coverage-redesign` remains on the remote (optional:
  `git push origin --delete chore/link-coverage-redesign`).
- **Push/deploy** the local `main` commits (tool fix + this file): tooling/docs
  only, does not change the reader site, but `git push` auto-deploys — **gated
  on the user's explicit word.**

## Remaining real work (not fires — schedule, don't panic)

- Backlog **#17**: ~226 authored fallback blurbs never reviewed for correctness.
- Backlog **#12**: summary-bullet sanity gate (forward gate + 100-civ retro).
- **Backlog #7 — NOW ACTIVE (deferral lifted 2026-05-18).** See the program
  section below — this is the current major effort.
- The-17 roster continuation (`audits/phase-1.5-roster.md`) — build remaining
  new civs the optimized way (now incl. `npm run parse:index` at ship).
- **Chapter-intro retrofit = backlog #19 (Tier C, user-approved 2026-05-19).**
  Pilot read + approved by the user ("this is great"); the *richer* spec is
  now locked (real "story so far" + "lay of the land" backstory — see
  `memory/feedback_chapter_intros_rich`, CLAUDE.md step 8b). The chapter-intro
  card + G13 gate are shipped and IN the new-civ pipeline (ship-check G13,
  zero-tolerance for non-grandfathered + audit-skill scope note);
  `early-medieval-europe` is the live reference template (`e141fda`/`8c51fc3`,
  prod-verified). The other **102 civs are grandfathered** in
  `audits/intro-baseline.json` — site unaffected. Full per-civ procedure +
  execution model now in `audits/corpus-remediation-backlog.md` **#19**.
  **NOT started — planning only.** Concept is approved; what's NOT yet
  decided is *scheduling*: it's a corpus-scale authoring campaign the same
  shape/effort as the #7 link sweep and carries the **same weekly-usage
  budget** — the two must be sequenced, not both run unbudgeted, and #7 is
  itself paused until ~2026-05-21. Do not launch #19 agents without an
  explicit go + a decision on its order vs #7.

## ▶ ACTIVE PROGRAM — full link-coverage sweep (started 2026-05-18)

**Mandate:** user chose "the 2 + full legacy sweep" — close **every** GATE
coverage gap corpus-wide. Verified scope (fresh `--corpus`, current rebuilt
2026-05-17 detector, 2026-05-18): **22,848 GATE gaps across 102 civs · 343
genuinely-blocking (NEW) · 83,109 advisory (ignore — noise by design).**
swahili-coast already 0 (built born-verified). Detection is DONE & current —
worklists `audits/link-coverage/LINK-COVERAGE-NEEDED-<tl>.txt`, ranking
`audits/link-coverage-ledger.md`. No re-detection needed.

**Per-civ procedure (the locked emed-ch3 template — born-verified, NOT
number-zeroing):** for each GATE term in a civ's worklist → (a) add a
confirmed glossary/event link (slug born-verified vs the real Wikipedia page
via `fix-links.mjs`), OR (b) an authored house-voice `definition` blurb if no
genuinely on-subject live page, OR (c) a documented waiver in
`content/.link-waivers-<tl>.json` for universals / inline-defined / already
cross-linked. Then per civ: `link-coverage --tl=<civ> --strict` → 0, AND
`lint-links --tl=<civ> --strict` → 0 ERROR (matchText-in-body — coverage
does NOT check this), AND `npm run parse -- --tl=<civ>`. A missing link beats
a wrong link; waive universals — do not link-spam to hit zero.

**Execution model:** parallel, **worst-civ-first** by GATE count
(islamic-golden-age 635, ottoman-empire 629, renaissance-italy 577,
byzantine-empire 552, delhi-sultanate 541 …). Each civ is an independent
edit surface (its own `content/.{glossary,event,link-waivers}-<tl>.json`).
≤5 concurrent agents (hard ceiling — scar tissue), separate worktrees, ONE
coordinator merges + runs gates + commits per batch. `lint-links --strict`
the gate after every link edit (matchText-italic-boundary class).
**Reader-facing** (adds links) → batched commits; deploy gated per the
publish policy. This is a sustained multi-batch program, not one session;
progress tracked civ-by-civ in `audits/link-coverage-ledger.md`.

**Phase 1 ✅ COMPLETE — the 2 required new-pipeline civs closed + verified:**
- **goryeo-korea** (`eddea55`). 97 GATE → 0: 84 slugs + 1 cross + 12 waivers.
- **uyghur-steppe** (`dfc42cd`). 131 GATE → 0: 160 slugs + 21 blurbs + 50
  new cross-links + 12 waivers (8 distinct, all modern-locator / anchored
  self-ref). **Attempt #1 REJECTED** by the coordinator waiver audit —
  passed all gates but over-waived 107/131 (real places/peoples/our-civs/
  junk fragments); discarded, main restored, redone with the hardened
  brief. The catch validated verify-don't-relay + the waiver audit.

**HARDENED brief is now mandatory for every sweep civ (lesson from the
uyghur over-waive):** the agent brief MUST carry (1) explicit closed-list
waiver categories — subject self-ref-after-first-link / modern-country
locator / already-linked-earlier-chapter / true universal — and a "never
waive a real place/people/person/concept or one of our civs or a
multi-word fragment" rule; (2) the cross-link catalog (our civ ids) so
recurring sibling-civ references become cross-links not waivers; (3) the
goryeo ratio as benchmark (~10–25 waivers, not 100+). **Coordinator step
is non-optional: after gates pass, audit the waiver file** — extract
waived-but-never-linked terms; any real entity there = reject + redo. See
memory `feedback_coverage_agents_over_waive`.

Mechanics validated: worktree agent → coordinator copies curated files to
main → scoped parse → re-run ALL gates on main (verify, don't relay) →
**waiver audit** (waived-but-never-linked must be only modern-locator) →
force-add curated set (NOT git add -A) → commit per civ.

**ARCHITECTURAL FINDING 2026-05-18 — the gate is corpus-coupled; one-pass
parallel sweep cannot reach global 0.** The link-coverage detector has a
"term linked in another civ → GATE here" signal. So every civ committed
adds small NEW gaps to all not-yet-final civs AND re-opens already-"0"
civs. Proven: uyghur-steppe was committed verified `0 NEW`; after
renaissance-italy committed it shows `6 NEW` on current main. The target
moves with every commit. **Revised model = SWEEP + CONVERGE:**
- *Sweep phase:* parallel agents close each civ's full GATE→0 vs the
  corpus at their start (the expensive born-verified work). Coordinator
  verify + waiver-audit + commit. Accept that earlier civs drift to small
  NEW counts (single/low-double digits) as later civs land — expected,
  bounded, NOT a failure.
- *Converge phase:* after all 102 swept once, re-run `--corpus`; the
  residual per-civ NEW is small + mostly recurrences of now-linked terms.
  Mop up in 1–2 fast convergence iterations until the whole corpus is
  simultaneously 0. (Full serialization was considered & rejected — kills
  parallel throughput for ~100 civs to avoid a small bounded tax.)
- *Done-definition:* a civ is "swept" when committed at commit-time-0;
  the program is "done" when a `--corpus` pass shows 0 NEW corpus-wide.

**Brief tightened (ottoman-empire defect):** category (a) waiver = the
civilization's OWN NAME string ONLY (e.g. "Ottoman"/"Ottomans"/"Ottoman
Empire"). A named ruler/sultan/king/person, a named institution/army/corps
(Janissaries), a people, or a place is ALWAYS a born-verified link, NEVER
(a). Waiver audit now also rejects any ruler/institution/person in the
waived-but-never-linked set.

**Legacy sweep — Batch 1 CLOSED 2026-05-18 (end of day): 4 of 5
committed, 1 parked.**
- renaissance-italy ✅ `8d2d78a` (577→0, waiver-clean)
- byzantine-empire ✅ `1efa3c5` (552→0; 8 drift)
- islamic-golden-age ✅ **RESOLVED 2026-05-21** (was FALSE-DONE: commit
  `c9f35c1` had changed ONLY `.link-waivers`; the ~600 glossary links were
  never committed). Re-swept properly via the NEW PIPELINE this session:
  665 GATE → 0, +491+50 glossary, +52 cross, 52 clean waivers; 0 ERROR,
  fix-links 747/747, G10/G11/G12 pass, snapshot regenerated. Committed
  (deploy owed — see DEPLOY DEBT).
- delhi-sultanate ✅ `93d7e3f` (541→0; 171 waivers = legitimate
  verbose-(c), proven by fuller-form recheck; 6 drift)
- ottoman-empire ❌ PARKED for next session — first agent admitted
  waiving Süleyman/Janissaries as (a) + coverage didn't reproduce on
  main. NOT redone today (user said finish-these-and-stop). Redo with
  tightened brief next session — AND re-check with the corrected
  waiver audit (see bug below) before assuming full redo; its reject
  had independent grounds (agent self-admitted (a)-abuse) so likely
  still a redo, but verify cleanly.

**Phase 1 + Batch 1 sweep total committed: 6 civs, 2,533 worklist GATE
closed** — goryeo-korea `eddea55`, uyghur-steppe `dfc42cd`,
renaissance-italy `8d2d78a`, byzantine-empire `1efa3c5`,
islamic-golden-age `c9f35c1`, delhi-sultanate `93d7e3f`. main ==
origin/main, clean. Nothing reader-facing changed adversely; build/
deploy unaffected (they don't run link-coverage).

**COORDINATOR-AUDIT BUG found+fixed-in-method 2026-05-18:** the
waiver-audit one-liner built the `linked` set from glossary
`e.term||e.matchText` (the descriptive LABEL), not `e.matchText` (the
actually-linked prose string). For link-once-waive-variant pairs
(term="Tughlaq dynasty", matchText="Tughlaq"; waiver "Tughlaq") it
false-flagged the waiver as never-linked → nearly false-rejected
delhi-sultanate. **Bug direction = FALSE POSITIVE only** (over-flag),
so the 5 earlier accepts are SAFE (their small never-linked sets were
genuinely universal). **Corrected method (use next session):** build
`linked` from glossary `e.matchText` AND `e.term`, cross/event
`e.matchText`, and for any flagged term also substring-check it
against all linked term+matchText forms before calling it a defect.

**Convergence-phase debt (sweep+converge):** per-civ residual NEW from
sibling-commit cross-reference drift — uyghur ~6, byzantine 8, islamic
23, delhi 6 (renaissance/goryeo 0 at commit, will have drifted since).
Bounded + expected; the end-of-program `--corpus` convergence pass
mops all of it at once. NOT a defect, do not panic-revert.

**▶▶ HARD LESSON 2026-05-21 — "0 NEW" IS NOT THE TARGET; TOTAL GATE→~0
IS.** `link-coverage --strict` EXITS 0 when NEW(★)=0 **even with
hundreds of grandfathered GATE gaps remaining** (grandfathered = in
`link-coverage-baseline.json`). The PROGRAM goal (#7) is to actually
CLOSE every GATE term in the worklist — drive the printed "N GATE
coverage gap(s)" TOTAL to ~0 (a few drift NEW are ok), exactly like
renaissance (577→12) / byzantine (552→18) / delhi (541→8). A sweep
agent briefed only to "pass --strict / 0 NEW" will close ~7–25 gaps and
leave ~480 — gate-green, job-undone (same failure family as
over-waiving). **Verify a swept civ by `link-coverage --tl=<civ>`
TOTAL count, NOT by --strict exit code.** Genuine-sweep audit (remaining
total GATE): goryeo 3 · uyghur 10 · renaissance 12 · byzantine 18 ·
delhi 8 · ottoman 0 = real; islamic-golden-age 645 = FALSE-DONE (above).

**Batch 2 attempt #1 (mughal/umayyad/medieval-india/yuan/timurid),
2026-05-21 — UNDER-DELIVERED, NOT committed.** Agents closed only the
NEW gaps (mughal 536→524, etc.) per the defective "0 NEW" brief. Partial
work preserved in worktrees; re-tasked at TRUE full scope (TOTAL→~0).

**▶ BATCH 2 ✅ COMPLETE + DEPLOYED 2026-05-21.** All 5 + ottoman LIVE on
stuffhappened.com (verified by curl per civ). Commits: yuan 72e2ff2
(+disambig 44b4398), timurid 15a8230, umayyad a040033, medieval-india
fa35357, mughal c2d5435, ottoman 671894d. ~2,000 born-verified links
added. **Two-pass story (the durable lesson): sonnet full-sweep agents
OVER-WAIVED massively** (timurid 223, medieval-india 201, umayyad 105
waivers — waiving real entities + whole sibling civs as "bold-only");
**opus COMPREHENSIVE-CORRECTIVE agents fixed it** (timurid→45, mughal→15,
umayyad→45, medieval-india→87 waivers; +130/+33/+39/+38 links; all
dropped-matchText fixed; fix-links clean). yuan came out good first pass.
**Convergence debt: ~31 residual drift NEW gaps** (ottoman 10, medieval 9,
timurid 6, umayyad 4, yuan 2 — sibling-commit ⟨dict⟩ drift) for the
end-of-program `--corpus` pass; bounded, not a defect.

**▶ LINK PIPELINE BUILT 2026-05-21 (use for islamic + all remaining civs,
NOT the old full-sweep).** `scripts/link-suggest.mjs` (committed 26c2ed3
+ hardening b8c066f) pre-resolves every worklist term → REUSE (slug
born-verified in another civ — ~80% hit, corpus index ~18k slugs, shows
lead + flags homonyms) / CROSS / SKIP (only own-name/modern-locator/
generic) / LINK-CANDIDATE / NO-PAGE→blurb. Splits "decide vs do" so no
stage can dodge by mass-waiving. Doc: `audits/link-pipeline.md`. Memory
`project_coverage_bold_is_linkable` (bold IS linkable; never waive
bold-only; verify by TOTAL gap count not --strict).

**▶ DEPLOY REALITY (verified 2026-05-21).** Auto-deploy is OFF: `deploy.yml`
is `workflow_dispatch`-only (no push trigger), and the Cloudflare dash
integration is dead → **`git push` does NOT publish; only manual
`npx wrangler deploy` does.** The agent harness BLOCKS the agent from
running a prod deploy AND from editing settings to self-permit → **deploy
is a user-run step** (`npx wrangler deploy` in their terminal, no `!`
prefix). Local wrangler OAuth (mebernin@gmail.com) has full workers/pages
write perms — auth is fine, the STATUS worry about token scope was stale.
To let the agent deploy: user adds `Bash(npx wrangler deploy:*)` to
`~/.claude/settings.json` allow-list themselves.

**ottoman-empire ✅ CLOSED 2026-05-21 (`671894d`, pushed).** The
parked civ is done. Finding: the `a00501` worktree held a *corrected*
attempt (Süleyman linked as `Süleyman I`, Janissaries fully linked —
NOT the rejected over-waive), authored 17:31 on 05-18 but never merged.
Salvaged it rather than redoing: it had only 13 residual `⟨dict⟩`
corpus-drift gaps, closed born-verified (12 glossary links + 1 own-name
waiver "Ottomans" ch12). coverage --strict 0/0 · lint-links 0 ERROR ·
fix-links 689/692 (3 pre-existing) · CORRECTED waiver audit clean.
**Phase 1 + Batch 1 + ottoman = 7 civs swept.**

**Observed (not a blocker, pre-existing & corpus-wide):** ~37 ottoman
glossary/event links don't render because the term appears only inside
`**bold**` (house first-use style) and the matcher won't underline
bold. Coverage gate passes anyway (it checks the JSON, not the rendered
output). Legacy event links do the same. `repair-links.ts` R-TRIM
"fixes" MANGLE non-ASCII names (`Şehzade Mosque`→`ehzade Mosque`) — do
NOT apply it. This is contention/repair backlog territory, not the
sweep's job. Same bar as the 6 prior committed civs.

**Repo note:** 8 LOCKED agent worktrees from 05-18 are still on disk in
`.claude/worktrees/` (STATUS previously claimed "single worktree" —
that was wrong). All on old commits; ottoman content extracted from
a00501. Clean them before/at Batch 2 launch (verify no other-civ
uncommitted work first).

**▶ NEXT: Legacy sweep Batch 2** — next 5 worst from the ledger after
the 7 done: **mughal-empire (525), umayyad-caliphate (500),
medieval-india (480), yuan-dynasty (452), timurid-empire (422)**. Same
hardened brief, ≤5 worktree agents, coordinator protocol with the
CORRECTED waiver audit. These are from-scratch ~480-gap sweeps (NOT a
cheap finish like ottoman). Then continue worst-first, then the
`--corpus` convergence pass.
**Batch 2 NOT launched. No new agents running. Clean stop.**

## Commands

```sh
# corpus link floor (true number, reproducible):
: > /tmp/floor.log
for f in narratives/*.md; do tl=$(basename "$f" .md); \
  n=$(node scripts/fix-links.mjs "$tl" 2>/dev/null \
      | grep -oE 'needing a human retarget[^0-9]*[0-9]+' | grep -oE '[0-9]+$'); \
  echo "${n:-SKIP} $tl" >> /tmp/floor.log; done
awk '$1~/^[0-9]+$/{s+=$1}END{print "TOTAL "s}' /tmp/floor.log

# single civ detail:
node scripts/fix-links.mjs <tlId>
```

## Pointers (don't duplicate)

- `audits/corpus-remediation-backlog.md` — full backlog detail (IDs stable).
- `memory/project_manager_operating_model.md` — this operating model, in memory.
- `memory/project_fix_links_tool.md` — the link/photo tool.
- `audits/phase-1.5-roster.md` — the 17 new civs (separate from remediation).
