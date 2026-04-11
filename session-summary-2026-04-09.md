# Session Summary — 2026-04-09

This document is for the **next session** to read first so it has full context before starting work. It captures the major decisions, current state, and immediate next steps from a long working day on 2026-04-09.

---

## Where we started this session

- The user wanted to "do the next chain TLs" for the five active chains (Americas/Andean, Mesopotamia, India, Egypt, China)
- 5 background agents were launched in worktrees and successfully overhauled/generated: Andean Kingdoms (new), Assyrian Empire, Vedic India, Old Kingdom Egypt, Tang & Song China — all to v11 standard, all merged and pushed
- A Tour-button crash on mesopotamia and indus-valley was discovered and fixed (missing `story.title` field caused `undefined.indexOf(':')` crash in StoryPopup; added a `tl.label` fallback)

## The pivot

The user started reading the new mesopotamia GT and was disappointed. Their feedback: "I didn't get any sense of a story. It mentions Babylonians, Kassites, Assyrians and Neo Babylonians but in name only. After reading I had no idea who those people were. It just seemed like random facts that I forgot about right after I read it."

This sparked a long discussion about what the app actually is. The user revealed:
- They spend **90-95% of their time reading** in the app, almost no visual exploration
- They built the app on desktop but read on phone
- They want **a curated narrative of civilizations** — popular history over all major civs where they can narrow down to a particular issue in 3 seconds and quickly go back
- The current visual-timeline-with-GT-as-side-feature is fighting their actual usage

**The decision: pivot the entire project.**

- **v1 (this repo, the visual timeline app at stuffhappened.com): FROZEN.** No new features, no maintenance. Stays running for users who like it.
- **v2: a brand-new repository.** Mobile-only from day one. No desktop. No landscape. Just a phone reading app.
- **Unit of v2 = the chapter**, not the timeline. Each chapter is a few minutes of reading on one specific topic in one specific civilization in one specific era.
- **No more paths, no more quizzes, no more recaps, no more "view all events"** — all v1 GT features being dropped.
- **Three navigation modes for v2:** by civilization, by time period (horizontal cross-section of an era across all civs), by theme (vertical thread through one topic across all civs and time). Visual timeline becomes an optional fourth mode.
- **Old events/spans come with us** to v2 (evergreen data). Old GT path content stays frozen in v1.

Memory files documenting this: `project_v2_pivot.md`, `project_chapter_format.md`, `project_audit_rewrite_agent.md`, `project_mesopotamia_rewrite_pilot.md`, `feedback_factual_accuracy.md`.

## The pilot

To validate the new format, I wrote a complete 13-chapter rewrite of the mesopotamia TL in a new style:
- **Inline-defined narrative** — every proper noun gets defined the first time it appears in a chapter
- **Set the scene before introducing anything new** — geography, peoples, what came before
- **Soft re-grounding** for concepts re-mentioned in later chapters
- **Comprehensive over short** — chapters are long, not condensed
- **All 89 events from the TL data woven into the prose** as natural references, not as standalone nodes

The rewrite lives in `mesopotamia-rewrite.md` in this repo's root.

## What the user has read so far

Through approximately mid-Chapter 3 (Uruk and the Sumerian Breakthrough). Specifically:
- Chapter 1 (The Land Between Two Rivers): finished, validated, "really good"
- Chapter 2 (Before the Cities): finished, validated, "good summary at the end"
- Chapter 3 (The First City — Uruk and the Sumerian Breakthrough): in progress, has read past the cross-civ comparison paragraph and the "Uruk's first city" justification

The user has been reading on their phone via GitHub at `https://github.com/markberning/timeline/blob/main/mesopotamia-rewrite.md` — refreshing after each commit.

## Files created this session

| File | Purpose |
|---|---|
| `mesopotamia-rewrite.md` | The 13-chapter rewrite pilot — markdown for reading on phone |
| `rewrite-fixes.md` | Accumulated writing rules + audit list of contested claims |
| `saved-lines.md` | Quotes the user wanted to keep (also a v2 feature requirement) |
| `session-summary-2026-04-09.md` | This file |

## The 19 writing rules accumulated

All in `rewrite-fixes.md`. Key ones:

**Positive (do these):**
- Inline-define every proper noun on first use per chapter
- Set the scene before introducing new things
- Forward references with payoff (and cut dead-end name drops)
- Pronunciations for unfamiliar names
- Anchor abstract numbers in something the reader can feel
- Inline cross-civ comparisons at "first" claims
- Justify "first" claims with definition + alternatives + contested cases
- Modern callouts when they actually illuminate
- Tell the reader when something isn't a modern projection
- Soft re-grounding when concepts re-appear across chapters

**Negative (avoid these):**
- Don't use placeholder phrases like "form of worship" or "way of life"
- Don't describe a process result without describing the mechanism
- Don't describe an architectural choice without explaining motivation
- Don't name-drop a person who never appears again
- "Always been there" / "for as long as anyone can remember" are red flags
- Don't overcorrect after fixing a gap
- Read around every edit before AND after
- Never present contested scholarly claims as established fact

## The most important catch of the day

The user asked: **"is this all verifiably true? is there any chance the narratives are making things up?"**

The honest answer is that AI-written history rarely fabricates pure facts but routinely **presents contested scholarly debates as if they were settled fact**. Specifically caught in chapter 2: the Inanna sacred-marriage and sacred-prostitution claims were both contested in modern Assyriology but I had stated them confidently. Fixed in the prose.

**14 other known-risk claims** in the existing rewrite are listed in `rewrite-fixes.md` for audit before any content ports to v2. Examples: Royal Tombs of Ur "voluntary" attendant deaths, Naram-Sin diagonal composition reading, substitute king ritual details, George Smith fainting anecdote, specific population numbers, specific reign dates.

The audit-rewrite agent's Persona B (Skeptic) is designed specifically to catch this failure mode.

## The audit-rewrite agent (next major task)

The user agreed that human-in-the-loop on every chapter is unsustainable across 100+ TLs. Building an automated review agent is the next major task.

**Three personas:**
- **Persona A — Curious Newcomer:** flags undefined proper nouns, vague placeholder phrases, missing scene-setting, "wait, how does that work?" gaps
- **Persona B — Skeptical Reader:** flags unjustified "first" claims, contested-as-fact statements, suspicious specific numbers, apocryphal anecdotes, modern projections
- **Persona C — Fact Checker:** mechanical, hits external sources, build-later (needs web search)

Full prompts and workflow in `rewrite-fixes.md` under "Planned feature — Audit-Rewrite Agent."

**First test target:** run Personas A + B on the existing 13 chapters of `mesopotamia-rewrite.md` and see what they catch that the user didn't.

## Open questions deferred

1. **Chapter sub-section structure for cross-link navigation** — chapters are long, so cross-links should target specific sub-sections (not whole chapters). Schema in `rewrite-fixes.md`. Decision deferred until v2 build starts.
2. **PWA vs React Native for v2 stack** — Claude to recommend after audit agent ships. User said "you need to be the expert here."
3. **Monorepo vs separate repos for v1 + v2** — proposed monorepo to share TL JSON data without divergence. Locked in.
4. **Mesopotamia rewrite — finish reading manually or run audit agent first?** — current direction is to run the audit agent first and let it catch what's left, then user reviews the agent's output rather than reading line-by-line.

## Strategic insight (the most important thing in this whole document)

The user's question at the end of the session: **"I can't keep going on like this for every TL narrative. We will never get done. At some point there has to be enough information/rules/what-bad-writing-looks-like/what-good-writing-looks-like that we can get good output."**

My answer: We can get to ~90% as good as the rewrite, with no per-chapter hand-holding, but only after we:
1. Build the audit-rewrite agent (Personas A + B + C)
2. Apply the writing rules during writing, not as post-hoc audit
3. Accept that the first chapter of every new TL still needs human attention (it sets the voice)
4. Accumulate rules from 3-4 different TLs to cover the failure modes (mesopotamia is just TL #1)
5. Build a system prompt that loads the writing rules automatically

**The current heavy-human-loop work is the investment phase. The payoff is TL #5 onward where the user reads for enjoyment instead of debugging.**

The user agreed and asked to wrap up this session and start fresh on building the agent. That's the next session's first task.

## What the next session should do

1. **Read this file first.** Then `mesopotamia-rewrite.md`, `rewrite-fixes.md`, and `saved-lines.md` for context.
2. **Build the audit-rewrite agent** — Personas A and B (text-only Claude, no external dependencies). See full spec in `rewrite-fixes.md`.
3. **Run the agent on the existing 13 chapters** of `mesopotamia-rewrite.md`. Surface the findings to the user as a structured report.
4. **Apply a sweeping fix pass** based on the agent's findings and the user's triage.
5. **Audit the 14 known-risk factual claims** in `rewrite-fixes.md` (this might be Persona C work, or might be a manual pass, or might be a separate fact-checking script).
6. **Then start v2 repo.** New repository, mobile-first, monorepo with v1 for shared TL JSON data, schema in `project_chapter_format.md`, mesopotamia is the first TL. PWA stack recommended (faster to build, user has PWA experience).

## Git state at end of session

- Branch: main
- Last commit: cleanup of edits applied to mesopotamia-rewrite.md
- All work pushed to github.com:markberning/timeline
- Live site stuffhappened.com is unaffected (still serving v1)
- 5 worktrees from this morning's chain-TL agents are still on disk (in `.claude/worktrees/`); can be cleaned up if desired but they're harmless

## Files the user is actively using

- `mesopotamia-rewrite.md` — open in IDE and on phone
- `saved-lines.md` — gets new entries as they read

## A note on context

This session was very long. The next session should start fresh with clean context. Everything important is on disk in this repo or in the memory directory at `/Users/mberning/.claude/projects/-Users-mberning-projects-personal-timeline/memory/`. No work will be lost by ending this conversation.
