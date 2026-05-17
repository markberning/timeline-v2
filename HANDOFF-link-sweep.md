# HANDOFF — link-coverage sweep & pipeline hardening

_2026-05-16. Cold-start brief for the link-sweep / pipeline track. (Root `HANDOFF.md`
is a DIFFERENT, now-stale handoff owned by a parallel civ-creation instance — do not
edit or rely on it; this file is the link-sweep track's source of truth.)_

## Status (HEAD d5f9c2d == origin/main, in sync)
- **All 100 shipped civs have a completed link sweep** (cross-civ + event + glossary).
  Ledger of record: `audits/link-coverage-sweep.md` — 100 rows, each with commit hash.
  All committed & pushed; site auto-deploys on push to `main`.
- **Pipeline hardened** so the sweep's manual fixes aren't needed again:
  `npm run lint:links` (new) + `scripts/parse-narratives.ts` now warns on every
  not-found matchText (events & glossary, not just cross). CLAUDE.md step 9b documents it.

## ⚠️ Non-negotiable git discipline (a parallel Claude also commits to `main`)
It edits shared files (`reference-data/tl-chains.ts`, `src/lib/navigator-tls.ts`,
`scripts/parse-narratives.ts`, `HANDOFF.md`, its narratives) and once clobbered
uncommitted work. Rules:
1. **Commit per unit immediately.** Never leave work uncommitted between turns.
2. **Stage only the exact files you changed, by path.** Never `git add -A`/`-u`,
   `commit -a`, or `checkout`/`reset` the tree. Never touch the other instance's files.
3. `content/` is gitignored but link dot-files are tracked → `git add -f
   content/.{glossary,event,cross}-links-<tl>.json`. Never commit generated
   `content/<tl>.json`, `public/search-index.json`, `CLAUDE.md`, or
   `audits/.slug-validation-cache.json` (gitignored) unless that change is yours.
4. **Safe push (do NOT blind `git pull --rebase` — needs clean tree; the other
   instance leaves shared files dirty that must NOT be touched):**
   ```
   git -c user.email=mebernin@gmail.com commit -q -m "<msg>"
   git fetch --quiet
   LR=$(git rev-list --left-right --count HEAD...@{u})
   [ "$(echo $LR|awk '{print $2}')" = "0" ] && git push --quiet   # fast-forward only
   ```
   If behind>0, integrate carefully; never revert their files.
5. Commit trailer: `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`

## Curation rules (locked)
- **Bar:** proper nouns + concepts; **no cap**. Skip modern country names / universal basics.
- **matchText must:** be plain ASCII (no diacritics), no leading/trailing punctuation,
  word-boundary safe (parser: `\b(escaped)\b`, case-insensitive, **first** occurrence
  only, on **raw markdown**), appear **verbatim in that chapter body**, not span a
  `**bold**` boundary, not be a chapter-title fragment/sentence, and not duplicate or be
  a superset of another matchText in the same chapter (cross is applied first, longest
  first, and steals the span). Non-ASCII terms are skipped (narratives inline-define them).
- **Routing:** cross-civ subject → cross-link to the era-correct chapter of an existing
  TL (use the narrative's own `(X Ch N)` inline refs / "Cross-civ check:" paragraphs as
  ground truth); pool event → event link; else glossary. No target TL → glossary.
- Every glossary `wikiSlug` must resolve on live Wikipedia. Generic concept slugs
  (Longhouse, Mask, Temple…) need a culture-specific image sanity check.

## Tooling
- **`npm run lint:links [--tl=<civ>] [--strict] [--no-slugs]`** — pre-ship validator;
  same regex as the parser, so "not found in body" here = silent drop there. Catches
  dead slugs (cached live Wikipedia), non-ASCII/punct/sentence-like/title-fragment
  matchText, dupes, generic image-risk slugs. Run `--strict` per new civ; fix every
  ERROR before `npm run parse`.
- `/tmp/lsweep.py <tl> <ch>` (3-pass detector) and `/tmp/ap.py <tl>` (+`/tmp/payload.json`,
  merge harness) may not survive a machine reset — recreate from this work's git history
  if missing; both patterns are simple. lint:links is the durable one.
- Per-civ loop (~5 tool calls): recon (`grep -nE "^# Chapter"` +
  `grep -noE "\(([A-Z][A-Za-z'-]+ ?[A-Za-z]* ?Ch(apter)? [0-9]+"` + detector) → route →
  batch-validate slugs vs Wikipedia (needs a User-Agent header) → apply → `npm run parse`
  (scan the civ's ⚠ block) → verify anchors in `content/<tl>.json` contentHtml →
  ledger row → commit + safe-push.

## Outstanding / next
1. **17 new civs the user is adding.** Per civ: curate links → `npm run lint:links
   --tl=<civ> --strict` → fix all ERRORs → `npm run parse` → commit + safe-push → add a
   `audits/link-coverage-sweep.md` row. (These civs' narratives/reference-data are being
   created by the other instance — only touch the link dot-files + the ledger.)
2. **Optional pre-existing-debt cleanup** (flagged, never regressions): dead slugs
   (e.g. ancient-rome `Lucretia_(legendary)`) + long sentence-fragment cross matchTexts
   in mongol-empire/gupta-empire/tang-song-china/aztec-empire. `npm run lint:links`
   (no args) prints the full worklist with civ/chapter/term.
3. **Owed, not started: term-precision cross-civ sweep** — `audits/term-precision-sweep.md`
   (Scandinavia≠Nordic was instance #1; class incl. England/Britain, Persia/Iran,
   Byzantine/Roman). Do only if asked, after #1.

## Key files
- `audits/link-coverage-sweep.md` — per-civ status + commit hashes (source of truth)
- `audits/viking-age.glossary-baseline.ch1.md` — the validated depth template
- `audits/term-precision-sweep.md` — owed future sweep ledger
- `scripts/lint-links.ts`, `scripts/parse-narratives.ts` — hardened pipeline
- Memory: `~/.claude/projects/-Users-mberning-projects-personal-timeline-v2/memory/`
  (feedback_commit_promptly, feedback_concurrent_work, project_term_precision_sweep)
- Root `HANDOFF.md` — the OTHER instance's stale civ-creation handoff; ignore.

## Gotchas
- Parser injects into raw markdown then converts → matchText can't span a `**` bold.
- After `npm run parse`, restart dev server yourself (kill `:3000`, relaunch
  `npm run dev` background) — `lib/data.ts` caches in-memory.
- Don't reply to user check-ins with status essays; keep grinding, checkpoint ~per 10.
