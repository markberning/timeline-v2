# Stuff Happened — v2 Mobile Reading App

## What This Is
A mobile-first reading app for long-form historical narratives. Each civilization gets a complete, chapter-based narrative (like a short book) that the reader scrolls through on their phone. The v1 interactive timeline explorer (stuffhappened.com) is frozen; this is a fresh start focused on reading, not zooming.

## The Product
- **Format**: chapter-based prose narratives, one per civilization
- **Voice**: informal, informational, conversational — popular history, not academic. "A delightful piece of royal propaganda" is the tone.
- **Reader**: mobile-first, designed for phone reading (portrait mode primary)
- **Content**: comprehensive — every event, person, and concept inline-defined on first use per chapter. The reader has zero prior knowledge.

## Content Pipeline
1. **Write narrative** using all writing rules in `rewrite-fixes.md`. Write for completeness — don't limit to existing TL events. The narrative is the primary product.
2. **Audit** using the 5-persona system in `.claude/skills/audit-narrative.md` (Newcomer, Skeptic, Story Editor, Cross-Cultural Reviewer, Fact Checker)
3. **Fix** audit findings
4. **Reconcile** — add any events/terms from the narrative that are missing from the TL reference data

## File Structure
```
narratives/           — chapter-based prose narratives (one .md per civilization)
  mesopotamia-rewrite.md  — pilot narrative (13 chapters, 89 events)
  indus-valley.md         — India chain TL #1 (in progress)
reference-data/       — TL JSON files from v1 (event lists, spans, pitches — for reference, not the product)
  tl-chains.ts            — civilization chain definitions
audits/               — audit reports from the 5-persona pipeline
rewrite-fixes.md      — all writing rules (core document — read before writing any narrative)
saved-lines.md        — user-selected quotes for save feature
.claude/skills/
  audit-narrative.md  — the 5-persona audit skill
```

## Writing Rules (summary — full rules in rewrite-fixes.md)
- **Write for completeness**, not for the existing event list
- **Inline-define everything** on first use per chapter — reader has zero prior knowledge
- **Set the scene** before introducing new people/places/concepts
- **Explain mechanisms**, not just outcomes ("they blended" → how specifically?)
- **Use parentheses** for definitions, not em-dashes
- **Miles first**, km in parens
- **Terse cross-chapter refs** — "(Chapter 5)" not full re-introductions
- **Don't re-define known things** — but new facts about them are fine
- **Vary uncertainty language** — don't repeat "as far as we can tell"
- **"First" claims need a cumulative caveat** in Ch 1
- **Cross-civ comparisons** are the #1 structural asset — expand them
- **The informal voice is the product** — don't sand it down

## Civilization Roadmap
Narratives follow the chain order from `reference-data/tl-chains.ts`:

**Mesopotamia chain** (pilot — complete):
1. ✅ mesopotamia — 13 chapters, fully audited

**India chain** (next):
1. 🔄 indus-valley — in progress
2. vedic-period
3. maurya-empire
4. post-maurya-kingdoms
5. gupta-empire
6. medieval-india
7. delhi-sultanate
8. mughal-empire
9. modern-india

**Egypt chain** (after India):
- ancient-egypt series (TBD split)

## v2 Reader Features (planned, not yet built)
- Sticky header with TL date range + current chapter period
- Chapter progress meter
- Save-my-place (tap any sentence)
- Footnotes
- Theme threads (track a concept across chapters)
- Image drawer (Commons thumbnails with lightbox)
- Deep links to specific sections
- Outline summaries
- Top drawer: interactive map (Ch 1), self-building timeline (Ch 2+)

## Running
No app yet — content-first. Write narratives, build the reader later.

## Session Conventions
At the end of every task or set of changes, always provide a **Changes made this pass** section — a brief numbered list of what was completed with one sentence per item.

## Git
Always commit and push completed work without asking.
