# Session Summary — 2026-04-09 (session 2)

This document is for the **next session** to read first.

---

## What we did

Built and deployed the full chapter writing pipeline, then ran it on all 13 chapters of mesopotamia-rewrite.md.

### The pipeline (built and validated this session)

1. **Writer** (Opus) — rules-aware rewrite applying all 19 writing rules from rewrite-fixes.md
2. **Persona D — Story Editor** (Sonnet) — evaluates narrative arc, momentum, stakes, pacing, endings. Grades STRONG/GOOD/WEAK/REWRITE. **New this session — highest-value addition.**
3. **Persona A — Newcomer** (Sonnet, NOT Haiku) — flags empty claims, undefined terms, missing mechanisms. Target 3-8/chapter.
4. **Persona B — Skeptic** (Sonnet) — flags content that smells made up. Tags [STRONG]/[CHECK]/[SOFT].
5. **Fixer** (Opus) — applies fixes in priority order: structural → accuracy → content gaps
6. User reads finished product

### How it was validated

- Built skill file at `.claude/skills/audit-narrative.md`
- Ran full pipeline on Ch 7 first as a test
- User read Ch 7 on phone, said "it is excellent" — found only 2 issues (Islamic Golden Age and Seleucid undefined)
- Both issues were the same type: Persona A missing non-ancient undefined terms
- Then ran full pipeline on all remaining chapters (1-6, 8-13)

### Full-doc audit results

**Story Editor grades:** Ch 1,4,5,10,11 = STRONG | Ch 2,3,6,12,13 = GOOD | Ch 8,9 = WEAK
**Skeptic:** 9 STRONG, 26 CHECK, 5 SOFT across 12 chapters
**Newcomer:** 49 findings across 12 chapters (~4/chapter — well-calibrated with Sonnet)

### Fixes applied

- Ch 8 and 9 (both WEAK): major structural reorganization
- Setup-sentence endings replaced across 5 chapters
- 9 Skeptic STRONG accuracy items fixed
- 16 best Newcomer content gaps filled
- All chapters pushed and marked ✅✅ in TOC

### Calibration findings

- **Haiku is unusable for Persona A** — 117 findings on one chapter. Sonnet for all 3 personas.
- **Persona D is the most valuable persona** — structural feedback > sentence-level fixes
- **Persona B is well-calibrated** — conservative, no noise, all actionable
- **User prefers parentheses** for inline definitions, not em-dashes
- **"Persian" doesn't need defining** — some terms (Persian, Egyptian, Roman, Greek) are familiar enough to skip

### User's v2 UI ideas (while reading on phone)

1. Sticky header showing TL date range + current chapter's period and dates
2. Chapter progress meter (thin bar showing how far through the chapter)

## What the next session should do

1. **Read this file first.** Then check `mesopotamia-rewrite.md` and audit reports in `audits/`.
2. **Get user feedback** on their full read-through of all 13 chapters.
3. **Fold feedback into rules/prompts** — new catches become writing rules or persona tweaks.
4. **Run the pipeline on a second TL** — India or Egypt. This tests whether the rules generalize beyond Mesopotamia. This is the real proof that the system scales.
5. **Start v2 repo** — mobile-first reading app. PWA stack. Monorepo with v1 for shared TL JSON data.

## Files created/modified this session

| File | What |
|---|---|
| `.claude/skills/audit-narrative.md` | The 3-persona audit skill (created + updated with Persona D) |
| `audits/mesopotamia-rewrite.audit.md` | First audit report (Ch 7 only, A+B) |
| `audits/ch7-persona-a.md` | Ch 7 Newcomer audit (Haiku — too noisy) |
| `audits/ch7-persona-b.md` | Ch 7 Skeptic audit |
| `audits/ch7-persona-d.md` | Ch 7 Story Editor audit |
| `audits/persona-b-raw.md` | First Persona B raw output |
| `audits/full-persona-a.md` | Full-doc Newcomer audit |
| `audits/full-persona-b.md` | Full-doc Skeptic audit |
| `audits/full-persona-d.md` | Full-doc Story Editor audit |
| `mesopotamia-rewrite.md` | All 13 chapters rewritten + fixed |

## Git state

- Branch: main
- All work pushed to github.com:markberning/timeline
- User reading mesopotamia-rewrite.md on phone via GitHub
