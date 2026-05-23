# War content pipeline (battle & non-battle sections)

The repeatable process for producing a war section. **Proven end-to-end on
Antietam (2026-05-22)** — author → fact-check + storytelling critic → revise.

## Governing principle
**Storytelling is the #1 goal. Accuracy / zero-hallucination is a hard floor it
may never cross.** Every section clears **two non-negotiable gates**: a
storytelling critic and a fact-checker. It ships only when both pass.

Failure mode to design against (the Gettysburg v0 lesson): tactical play-by-play
("this brigade took that ridge at that hour"), human cost thin. Lead with stakes
and people; make the cost *felt*.

## Roles
- **Coordinator (the human-facing agent, i.e. you):** writes the brief, builds &
  verifies the fact pack, spawns the agents, **reads critic output critically
  (never rubber-stamps)**, reconciles, integrates.
- **Author agent** — model **Opus**. Drafts storytelling-first from the fact pack ONLY.
- **Fact-checker agent** — model Sonnet, **web-enabled**. Verifies every claim against sources; must be able to FAIL the draft.
- **Storytelling critic agent** — model Sonnet. Judges as a story; can demand rewrites.
- (The civ 5-persona audit can run once a section is close; not required for the gate.)

## `kind` — every section is battle or theme
| | **battle** | **theme** (non-battle) |
|---|---|---|
| Shape | what came before → the battle (dual POV) → **human cost** → what it meant | thematic arc: pressure → turning point → consequence |
| Fact pack from | Wikipedia battle infobox · CWSAC · NPS · American Battlefield Trust | authored from sources (the topic's standard literature) |
| Layout | stat block + schematic tactical map | portrait/photo, **no** stat block, no box-score |
| Critic rubric | + dual-POV-combat check | drop dual-POV-combat; keep storytelling + accuracy |
| Depth | Decisive → fuller; Major → ~4 sections, medium | one section, arc-driven |

## The steps
0. **Pick the section + its `kind`.** (Roster: `audits/war-engagements-roster.md`.)
1. **Brief** — write the section's job: dramatic arc, cast, stakes, throughline,
   the shape (table above), the must-include beats, and the storytelling-first
   mandate. This is where story is designed in, before a word is written.
2. **Fact pack** — assemble the *verifiable* ground truth FIRST: dates, forces,
   casualties, names, places, quotes — each tied to a source. **The single
   biggest hallucination-killer: the author writes only from this, never from
   memory.** Build it by fetching the real sources (e.g. the Wikipedia API).
3. **Author agent (Opus)** — drafts from the fact pack + brief. Person side-tags
   (every named combatant tagged with its side on first mention per section —
   see `memory/feedback_war_person_side_tags`), house voice (`WRITING-RULES.md`),
   dual POV for battles, human cost weighted. Output: draft markdown **plus a
   Fact ledger** (every concrete claim → which fact-pack item; `[VERIFY]` flags).
4. **Two critics, in parallel:**
   - **Fact-checker** — independently verify EVERY date/number/name/rank/place/
     quote against authoritative sources (don't trust the draft or the ledger).
     Output ✅ CONFIRMED / ❌ WRONG (+ correct fact + source) / ⚠️ UNSUPPORTED,
     then MUST-FIX (❌) and SHOULD-FIX (⚠️). Coordinator reads it; the gate is
     the coordinator's judgement, not the agent's say-so (`feedback_gate_pass_not_correct`).
   - **Storytelling critic** — grade per section (STRONG / GOOD / NEEDS WORK /
     REWRITE) + overall, with quoted, actionable rewrite notes: hook & stakes,
     human dimension, play-by-play tedium, dual POV, voice, pacing.
5. **Revise** — author applies fixes (fact ❌ = must-fix; weak story = must-improve).
   Loop until both gates are clean.
6. **Images** — self-host PD/licensed only (Commons hotlinking 429-blocks in the
   browser); **credit line goes UNDER the image**, not as an overlay. Battles get
   a tactical map; theme sections get a period portrait/photo.
   **Map house style = MODERN TEXTBOOK (Hal Jespersen / NPS look), chosen
   2026-05-22** — clean modern cartography: pale ground, muted sage woods, pale-
   gold fields, light-blue water, gray roads/towns; forces as crisp rectangular
   **unit blocks** (blue Union / rust Confederate) or a bold band on wide overviews;
   bold smooth arrows; clean sans labels with a white halo. This **replaced the
   old flat-tan schematic** (it read "awfully plain"). The full rules live in each
   war's prompt-file preamble (`map-prompts/war/<war>.md`) — copy that preamble
   verbatim for a new war. Generate with `scripts/generate-war-maps.mjs`.
6b. **Map review — a GATE, not a glance.** Every generated map is reviewed like
   the fact-checker reviews prose — for **tactical/geographic correctness**, not
   just label hygiene. Check each map against the battle's real geography (the
   fact pack / sources):
   - **Orientation & positions:** a defensive line must FACE the attack — the
     attacker's arrow strikes the defender's *front*; lines and places sit in
     their true relative positions; north is up. (Lesson: the Cornfield's
     Confederate line was first drawn as a north–south band on the *west* when
     it should be an east–west line *facing Hooker's southward attack* — a label-
     only eyeball missed it.)
   - **Arrows match the action:** who attacked, from which direction, against what.
   - **Label hygiene:** no colour words (BLUE/RUST) printed as labels, exact
     spelling, ≤6 labels, no garbled glyphs.
   - **Style:** flat tan, no frame, no compass/ornament.
   Regenerate until correct. (A vision-capable critic agent can do this pass —
   it reads the PNG and verifies the geography against sources, same discipline
   as the prose fact-checker.)
7. **Integrate** — convert to the reader section format, wire the route, add the
   next-section link, run the deterministic gates (links) as applicable. The
   battle **dossier** also carries an **Outcome section**: a one-line verdict
   (the pill) PLUS a 2–4 sentence explanation distilled from the section's "what
   it meant" movement — who won tactically vs. strategically, the cost, and what
   it changed/led to. (A bare one-line outcome undersells the battle.)

## Integration checklist — what a built battle needs (proven on Antietam)

The reader + dossier are shared components — a new battle is mostly a data file.

**Per-section reader** (`<theatre>/<slug>/s/[section]`, data → `<BattleSectionReader>`):
- Section data in the shared shape; **a section's `eyebrow` must NOT repeat its `title`** (the kicker is a distinct phase label, e.g. "Lee invades the North", not "The Lost Order").
- The prose blocks; a **tactical map** AND **period photo(s) where they exist** (PD), credit UNDER each; the Meanwhile card; the next-section link.

**Battle dossier** (`<theatre>/<slug>/page.tsx`):
- **Hero** — a near-full-bleed PD battle print. **Reject matted/bordered scans** (a print floating in a wide cream mat never fills the frame no matter the scale) — pick a clean full-bleed print (Thulstrup/Prang or Kurz & Allison). Hero/card images use `transform: scale(~1.16)` to crop hairline mats.
- **At-a-glance** (stat strip + Union-vs-Confederate face-off + casualties bar).
- **Commanders strip with REAL headshots** — PD portraits from Wikipedia pageimages (the article infobox image) → `public/war-img/cmdr/<slug>.jpg`, blue/rust side rings, gradient fallback.
- **Outcome card** — verdict + 2–4 sentence explanation (see step 7).
- **Section list** — each section a **distinct** image; never reuse the hero as a section card.
- Timeline + Dossier views; sticky via `useWarView`.

**Wiring & images:**
- Link the battle from the **theatre spine** AND the **ACW home timeline**, and give those battle cards the battle's hero `img` (only built battles get images; others keep the gradient placeholder).
- Self-host PD images only (Commons hotlinking 429-blocks). **Verify every image matches its caption before trusting it** (stereoview cards, wrong-subject scans, and matted prints all slip through search).

## Hard-won notes
- **Agents run in the MAIN worktree** (`timeline-v2`), not the phase-2 worktree.
  Either point them at the phase-2 tree or move their output over (and they can't
  see phase-2-only files like the Gettysburg reference). 
- **Subagents must NOT git commit/push** — consolidate in one coordinator commit
  (`feedback_subagent_commits`).
- Fact pack quotes/specifics you hand the author can still be slightly off — that
  is exactly what the fact-checker exists to catch (it caught a quote
  misattribution on Antietam). Mark anything shaky `[VERIFY]`.
- Casualty/strength numbers for the Civil War are genuinely contested; label
  estimates and let the fact-checker note the scholarly range.

## Reusable agent briefs
The Antietam run used three prompts — reuse them verbatim, swapping the section +
fact pack:
- **Author brief** template: see the prompt that produced `antietam-draft.md`
  (role = storytelling-first author; #1 rule; read WRITING-RULES + a built
  reference; the fact pack; the kind-specific structure; output = draft md + Fact
  ledger; no commit).
- **Fact-checker brief**: verify every claim independently vs. sources; ✅/❌/⚠️;
  MUST/SHOULD-FIX; no edits, no commit.
- **Storytelling critic brief**: judge as story; per-section grade + quoted
  rewrite notes; watch the play-by-play failure mode; no edits, no commit.

First proof: `audits/war-pipeline/antietam-draft.md`.
