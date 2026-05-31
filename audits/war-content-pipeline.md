# War content pipeline (battle & non-battle sections)

> **App-wide rule (2026-05-25):** running this pipeline is MANDATORY for every war
> section — no article ships author-and-hope, in any vertical. See the umbrella rule
> in `CLAUDE.md` ("Authoring — the critic pipeline is MANDATORY in EVERY vertical").

The repeatable process for producing a war section. **Proven end-to-end on
Antietam (2026-05-22)** — author → fact-check + storytelling critic → revise.

## Governing principle
**Storytelling is the #1 goal. Accuracy / zero-hallucination is a hard floor it
may never cross.** Every section clears **five non-negotiable gates**: a
**fact-checker** ("is everything here TRUE?"), a **storytelling critic** ("is it
told WELL?"), a **comprehensiveness critic** ("is anything IMPORTANT missing?"),
a **newcomer/clarity critic** ("can a zero-knowledge reader actually FOLLOW
this?"), and a **Lost Cause / framing critic** ("is it FAIR — free of slavery-
cause soft-pedaling, false balance, and Confederate romanticization?"). It ships
only when all five pass.

**EVERY SURFACE IS GATED, not just the main prose (locked 2026-05-25 — "make sure
critical agents run for all sections in war, art, music").** A war "section" is every
reader-facing factual surface it ships, and all of it runs through the same gates:
the narrative prose, **battle cards + stats** (date, location, commanders, troop
numbers, casualties, outcome), **map labels** (place names, unit positions, dates),
**cast / person side-tags** (every named person tagged with their side on first
mention — `feedback_war_person_side_tags`), **captions**, intros and summary lines. A
casualty figure or a commander's name on a card is a claim — it gets fact-checked
exactly like a sentence of prose; it is **not exempt for being a stat or a card**.
Ship-gate checklist = this surface list, each critic-covered. (This is the war analog
of the art retro that caught wrong facts hiding in ungated annotations + provenance;
the shipped Civil War pilot's non-prose surfaces — battle stats/cards — owe the same
retro fact-check pass.)

**Why the newcomer/clarity gate (added 2026-05-23, user's idea).** The whole
product is built for a reader with ZERO prior knowledge — every term inline-
defined on first use, the scene set before new people/places/concepts arrive (the
civ side enforces this with a "first-time reader" persona). Authors who know the
subject unconsciously write for readers who already know it, leaving military
jargon ("corps," "enfilade," "flank in detail," "the border states") and named
actors unglossed. This gate reads the section cold as a 15-year-old who has never
heard of any of it and flags every undefined term, unexplained leap, and place
where the reader would be lost or overwhelmed. Storytelling judges craft; this
judges *comprehension* — they are not the same.

**Why the Lost Cause / framing gate (added 2026-05-23, user's idea).** Civil War
history has a famous, well-documented failure mode: the Lost Cause — soft-pedaling
slavery as the cause, "both-sidesing" the morality, romanticizing Confederate
leadership, "states' rights" euphemism, and presentism. The comprehensiveness gate
catches *some* of this as a perspective check, but only incidentally. This gate's
ONLY job is to hunt distortion, false balance, sanitization, and unfair sympathy
distribution — and to confirm the human reality (the enslaved, the dead,
civilians) is neither sanitized nor made gratuitous. Reusable for any war with a
contested memory.

> **STANDING SHIP-BLOCKING RULE — NAME THE CAUSE (locked 2026-05-30, user
> directive).** Every Civil War section must, somewhere in its own prose, name
> slavery as the cause the war (and each side) was ultimately fought over. The most
> common Lost Cause failure is **omission, not euphemism**: a battle section that is
> accurate and well-told but never says the word "slavery" lets the warmth of the
> story (gallant officers, plucky underdogs, dramatic stands) quietly fill the
> vacuum where the cause should be. This bit us on the FIRST three battle-layer
> drafts at once — Fort Sumter, First Bull Run, AND Wilson's Creek all came back
> from the framing gate with the identical finding: "slavery" never appeared. The
> framing gate now checks this EXPLICITLY and FAILS the section if the cause is
> absent — it is not enough that another section of the war covers slavery; each
> reader-facing section must stand on its own (a reader lands on one battle). The
> fix is light (one or two clear sentences placed where the section sets its
> stakes), but it is mandatory and non-negotiable. See
> `memory/feedback_name_the_cause`.

**Why the comprehensiveness gate (added 2026-05-23, user's idea).** The
fact-checker only judges the claims that are *present* — it is blind to omissions.
The storytelling critic judges the arc of what's *there* — a tight, well-told
section can still silently skip something essential. So a third gate, the inverse
of the fact-checker, independently works out what a strong telling of the subject
MUST cover and hunts the draft for what's been left out or underweighted; it also
catches blind spots in the **fact pack itself** (anything the pack misses, every
downstream agent inherits). It earned its place on its first run: on the Gettysburg
redo it caught five essential omissions both other gates missed — Ewell declining
Cemetery Hill (which makes the fishhook a *decision*, not an accident), Harrison the
spy (how blind-Lee learned the enemy was close), that "Pickett's Charge" is a
misnomer erasing Pettigrew's and Trimble's men, that Lee never invaded the North
again (the turning-point mechanism), and the **Confederate kidnapping of free Black
Pennsylvanians** during the march north (a fact-pack blind spot, and dead on the
app's central theme). **Its one rule: storytelling-first means SELECTIVE is fine —
it flags genuinely ESSENTIAL gaps, never demands an encyclopedia.** The coordinator
reconciles all three gates (a comprehensiveness must-add and a storytelling "cut
this" can both be right — place the new material where it belongs, don't just bolt
it on).

**No length limit (locked 2026-05-22, user direction).** A section is as long as
the story needs — there is NO word cap, no target length, no "trim to fit." The
only mandates are: tell a genuinely good story (priority #1) and be factually
accurate with zero hallucinations or guesses (the hard floor). Do not pad to hit
a length, and do not cut a strong, well-sourced passage to be shorter. Length is
an output of good storytelling, never a constraint on it.

Failure mode to design against (the Gettysburg v0 lesson): tactical play-by-play
("this brigade took that ridge at that hour"), human cost thin. Lead with stakes
and people; make the cost *felt*.

**The story gate can NEVER override the accuracy floor (locked 2026-05-22,
Slavery & the Cotton Economy run).** When the storytelling critic demands NEW
material — a named witness, a quote, a vivid specific to fix an anonymous or flat
passage — that material does NOT get invented to satisfy the story gate. The
COORDINATOR sources it first (find the real, documented person/quote), adds it to
the **fact pack**, and it goes through the **fact-checker** like everything else,
THEN the author writes it in. The two gates are not symmetric: a great story built
on a fabricated detail still fails. (Proof: the critic flagged the Second Middle
Passage beat as too anonymous; the fix was to research Solomon Northup & Eliza
into the fact pack and verify the quotes — NOT to let the author conjure a person.
The author correctly *refused* to dramatize a second parting the source didn't
describe — that instinct is the bar.) Corollary: when a revision crosses both
gates, re-confirm the new content cleared the fact-checker before integrating.

## Roles
- **Coordinator (the human-facing agent, i.e. you):** writes the brief, builds &
  verifies the fact pack, spawns the agents, **reads critic output critically
  (never rubber-stamps)**, reconciles, integrates.
- **Author agent** — model **Opus**. Drafts storytelling-first from the fact pack ONLY.
- **Fact-checker agent** — model Sonnet, **web-enabled**. Verifies every claim against sources; must be able to FAIL the draft. ("Is everything here true?")
- **Storytelling critic agent** — model Sonnet. Judges as a story; can demand rewrites. ("Is it told well?")
- **Comprehensiveness critic agent** — model Sonnet, **web-enabled**. Independently builds the must-cover checklist for the subject, then flags essential OMISSIONS / underweighting / perspective gaps in the draft AND blind spots in the fact pack. ("Is anything important missing?") Flags only genuinely essential gaps — selective narrative is correct.
- **Newcomer/clarity critic agent** — model Sonnet. Reads the section cold as a reader with ZERO prior knowledge (a sharp 15-year-old). Flags every undefined term/acronym/jargon ("corps," "enfilade," "flank in detail"), every unexplained leap, every named actor introduced without a side-tag or scene-set, and any passage that would lose or overwhelm a first-timer. Output: per-term/per-passage CLEAR / NEEDS-GLOSS / LOST, then MUST-FIX (genuine comprehension breakers) vs SHOULD-FIX. ("Can a zero-knowledge reader follow this?")
- **Lost Cause / framing critic agent** — model Sonnet, **web-enabled**. Hunts ONLY for distortion: slavery-cause soft-pedaling, false both-sides balance, Confederate romanticization, "states' rights" euphemism, presentism, and unfair sympathy distribution; confirms the human reality (enslaved, dead, civilians) is neither sanitized nor gratuitous. **FIRST CHECK, always: does this section name slavery as the cause in its OWN prose? If the word never appears, that is an automatic MUST-FIX (the NAME THE CAUSE rule above) — omission is the default Lost Cause failure mode.** Output: FAIR / TILTED / DISTORTED per finding, MUST-FIX vs SHOULD-FIX. ("Is it fair?") Reusable for any war with a contested memory.
- (The civ 5-persona audit can run once a section is close; not required for the gate.)
- **Continuity (corpus-level, NOT per-section).** Cross-section + cross-battle consistency of recurring people/units/numbers (e.g., Antietam's casualty figure must read the same everywhere; Lee's characterization must not drift) is checked by a **periodic corpus sweep**, not on every section build. Run it on a cadence as the war corpus grows.

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
4. **Five critics, in parallel:**
   - **Fact-checker** — independently verify EVERY date/number/name/rank/place/
     quote against authoritative sources (don't trust the draft or the ledger).
     Output ✅ CONFIRMED / ❌ WRONG (+ correct fact + source) / ⚠️ UNSUPPORTED,
     then MUST-FIX (❌) and SHOULD-FIX (⚠️). Also resolves every `[VERIFY]` flag
     the author raised (confirm-or-cut). Coordinator reads it; the gate is the
     coordinator's judgement, not the agent's say-so (`feedback_gate_pass_not_correct`).
   - **Storytelling critic** — grade per section (STRONG / GOOD / NEEDS WORK /
     REWRITE) + overall, with quoted, actionable rewrite notes: hook & stakes,
     human dimension, play-by-play tedium, dual POV, voice, pacing.
   - **Comprehensiveness critic** — independent must-cover checklist for the
     subject, then COVERED / THIN / MISSING per item; MUST-ADD (essential gaps,
     blocking) vs SHOULD-CONSIDER (enriching, non-blocking); plus fact-pack blind
     spots. Honest and tight — essential only, never encyclopedic.
   - **Newcomer/clarity critic** — read cold as a zero-knowledge reader; flag
     every undefined term/jargon, missing side-tag, unexplained leap, and
     overwhelming passage. CLEAR / NEEDS-GLOSS / LOST; MUST-FIX (comprehension
     breakers) vs SHOULD-FIX.
   - **Lost Cause / framing critic** — hunt distortion only: slavery-cause soft-
     pedaling, false balance, Confederate romanticization, euphemism, presentism,
     unfair sympathy; confirm human reality is neither sanitized nor gratuitous.
     FAIR / TILTED / DISTORTED; MUST-FIX vs SHOULD-FIX.
5. **Revise** — author applies fixes (fact ❌ = must-fix; weak story = must-improve;
   comprehensiveness MUST-ADD = must-cover; clarity MUST-FIX = gloss/scene-set the
   term; framing MUST-FIX = correct the distortion). **A comprehensiveness MUST-ADD
   (or a framing fix that adds material) usually means NEW material → it goes
   through the fact pack + fact-checker FIRST** (the cross-gate rule above), THEN
   the author writes it in. Loop until all five gates are clean.
6. **Images** — self-host PD/licensed only (Commons hotlinking 429-blocks in the
   browser); **credit line goes UNDER the image**, not as an overlay. Battles get
   **2–3 narrative-matched maps** (a strategic/overview map + tactical maps, one per
   geographic beat — see 6b), placed INLINE as `{fig}` blocks; theme sections get a
   period portrait/photo.
   **Map house style = MODERN TEXTBOOK (Hal Jespersen / NPS look), chosen
   2026-05-22** — clean modern cartography: pale ground, muted sage woods, pale-
   gold fields, light-blue water, gray roads/towns; forces as crisp rectangular
   **unit blocks** (blue Union / rust Confederate) or a bold band on wide overviews;
   bold smooth arrows; clean sans labels with a white halo. This **replaced the
   old flat-tan schematic** (it read "awfully plain"). The full rules live in each
   war's prompt-file preamble (`map-prompts/war/<war>.md`) — copy that preamble
   verbatim for a new war. Generate with `scripts/generate-war-maps.mjs`.
6b. **Map review — a GATE with a HARD REGEN CAP, not a glance (hardened
   2026-05-30, user directive).** Every generated map is reviewed like the fact-
   checker reviews prose — for **accuracy first**, not just label hygiene. A
   vision-capable critic agent (or you) reads the PNG and checks it against BOTH
   the battle's real geography (the fact pack / sources, web-verified) AND the
   section's final narrative:
   - **Geographic accuracy:** rivers, forts, towns, roads, hills, ranches sit in
     their TRUE relative positions; north is up, east right. Cross-check against a
     real map of the battlefield — not just "does it look like a map."
   - **Orientation & arrows:** a defensive line FACES the attack — the attacker's
     arrow strikes the defender's *front*; every movement arrow matches who
     attacked from which direction, against what. (Lessons: the Cornfield line was
     first drawn facing the wrong way; the Bull Run / Henry House Hill attack axis
     was first inverted N↔S — both label-only eyeballs missed it.)
   - **Narrative match:** every city / fort / river / road / hill / movement the
     PROSE names appears, labeled, on one of the battle's maps — and nothing is
     labeled that the prose doesn't use. Labels spelled EXACTLY as the prose
     spells them.
   - **Legibility:** bold near-black glyphs on a SOLID WHITE pill — never thin /
     gray / faint text floating on terrain, never outlined / hollow / stroked-only
     letterforms (the **Glorieta** failure). ≤6 labels, no colour words
     (BLUE/RUST) as labels, no garbled glyphs.
   - **Density:** a map at EVERY geographic beat — typically **2–3 narrative-
     matched maps per battle** (a strategic/overview map + tactical maps), not one.
     See `memory/feedback_war_maps_dense_legible`.
   - **Style + lightbox:** flat ground, no frame, no compass/ornament; every map
     `{fig}` opens the shared pinch/zoom `Lightbox` (wired in `battle-reader.tsx`).
   **The fix loop has a HARD CAP: when a map is wrong, rewrite its `## Map` prompt
   section and regenerate — but make AT MOST 2 regenerations of a given map. If it
   is STILL wrong after 2 regens, STOP (do not keep re-rolling) and ALERT THE USER
   with the specific issue — what's wrong, what the prompt now says, and what the
   map keeps doing — so they can look and decide whether to keep going.** This
   mirrors the civ map 3-attempt cap (`memory/feedback_map_three_attempt_cap`): a
   cap, then hand to the human, never grind. This gate runs AT MAP-CREATION time
   during every battle build — not as a later sweep.
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
- **Chapter CARD image: prefer a NON-MAP image; use a map only if you have nothing
  else (locked 2026-05-30, user directive).** A section's card thumbnail should be a
  period print, photo, or commander portrait. Use a **map** as the chapter card ONLY
  when that section has no good non-map image (a purely tactical section with no
  contemporary art is the exception). This is about the card TEASER only — maps still
  appear INLINE densely at every geographic beat regardless (the 2–3-per-battle
  density rule is unaffected). See `memory/project_war_battle_layer`.
- Timeline + Dossier views; sticky via `useWarView`.

**Wiring & images:**
- Link the battle from the **theatre spine** AND the **ACW home timeline**, and give those battle cards the battle's hero `img` (only built battles get images; others keep the gradient placeholder).
- **Themes (Off the Battlefield) need `img` too.** Set `Theme.img` on the roster
  entry (and it must flow into `SPINE_NODES`) so the section's card shows its hero
  in the Off-the-Battlefield spine AND the home timeline. The card reads
  `imageUrl={t.img}`; without it the card is a gradient placeholder even though the
  page is built. (`Theme` had no `img` field until the Emancipation card shipped
  blank — added 2026-05-22.)
- Self-host PD images only (Commons hotlinking 429-blocks). **Verify every image matches its caption before trusting it** (stereoview cards, wrong-subject scans, and matted prints all slip through search).
- **Match the image's aspect to its frame — P-in-LS is the recurring defect
  (locked 2026-05-30, user-flagged).** Two frames are LANDSCAPE and crop/cover:
  the dossier **hero band** (`object-fit: cover`) and the **home/theatre-spine card
  top-slot** when `stack: true` (image-on-top). A **portrait** image forced into
  either gets its subject cropped or letterboxed — that is the recurring bug. Rule:
  feed landscape (or near-square) images to landscape frames; keep portraits in a
  portrait slot — the never-crop `fit` card renders a P image on the LEFT at natural
  aspect, and inline `{fig}`s keep their own aspect. Never drop a tall portrait into
  the landscape hero band. (The two specifics below — hero-must-be-landscape and
  crop-the-mat — are the two ways this rule gets violated.)
- **HERO MUST BE LANDSCAPE / near-square (locked 2026-05-30, user-flagged).** The hero
  band is a short, wide landscape strip; a **clearly-tall portrait gets its head/subject
  cropped off** in it (the Lincoln-assassination Booth carte-de-visite, 3915×6022, was the
  defect — his head was cut). RULE: pick a landscape (or near-square) image as the hero;
  put the portrait inline as a figure instead. A near-4:5 *head-and-shoulders* portrait can
  pass if `heroFocus` keeps the face (lincolns-rise's Cooper Union, 1273×1600, reads OK),
  but a full-figure or steeply-tall portrait may NOT be the hero. If a subject is
  **portrait-only** (no usable landscape exists), use a **2-up side-by-side portrait pair**
  (the art/Cubism "break" hero pattern) rather than cropping one — that hero mode is built
  for art but NOT yet for the war reader, so until it is, a war section's hero must be
  landscape. The same `img` feeds the OTBF/home card, so a landscape hero also sets the
  card `stack: true` (image-on-top).
- **CROP THE MAT off matted prints/mounts used as a hero or card (locked 2026-05-30,
  user-flagged: Antietam, Gettysburg, Andersonville, the Lincoln-assassination print, the
  USCT cased tintype).** Because the spine cards are never-crop `fit` cards, they show the
  WHOLE source image — so any cream/gilt mat, cabinet-card mount, ornate case frame, OR the
  caption/title writing printed in the margin shows in the card. Self-host a TRIMMED copy
  (overwrite the file in place so every reference updates). Tools: `scripts/_crop-explicit.mjs`
  (measured fractional crop — most reliable for a print with a big mount + caption), and
  `scripts/_smart-trim.mjs` (variance autocrop: a longest-run + bottom-caption-stripper that
  removes a uniform mat and a sparse caption line; under-trims thin-margin prints, so eyeball
  it). Always VIEW the result before overwriting — a measured crop beats guessing.
- **Image count: aim for ~8–11 figures per theme section (locked 2026-05-30, user-flagged).**
  A hero + 1–2 figures reads as thin. The early wave-1 sections shipped at 2–3 and were
  bumped to ~9–10 in a later image-only pass (prose untouched — it was already gated). Spread
  figures across DIFFERENT headings; don't stack them.
- **GOTCHA — the early sections are HAND-MAINTAINED page.tsx, not live-generated.**
  `slavery-cotton`, `emancipation` have no build script; `freedom-struggle`'s
  `scripts/_build-freedom-struggle.mjs` is a STALE one-off that would WIPE its hand-added
  figs + hero credit if re-run. To add figures to these, edit the `page.tsx` `blocks` array
  directly (or use `scripts/_add-thin-figs.mjs`, which inserts `{ fig }` blocks after the
  matching `{ h }` and swaps the hero from a `<slug>-images-add.md` manifest). The wave-2/3
  sections, by contrast, ARE regenerated by `scripts/_build-war-themes.mjs` from their
  `-final.md` + `-figures.json` — edit those, not the page.

**Breadcrumb + accent (locked 2026-05-22):**
- **Short breadcrumb label for long titles.** A long section name overflows the
  bc bar — set `short` on the Major/Theme (e.g. "The Emancipation Proclamation"
  → "Emancipation"). The crumb shows the short; the jump menu still marks the
  full name current via `Crumb.currentLabel`. (Never shorten War/ACW — only the
  leaf crumb truncates.)
- **Accent must match the lane colour** (Off the Battlefield = green, Eastern =
  violet, Western = blue, Trans-Miss = amber, Naval = rust). **Gotcha that bit
  us:** a page that passes an `ACCENTS` colour MUST be `'use client'`. In a
  server component, a value imported from the `'use client'` war-chrome module
  resolves to a client *reference*, so `ACCENTS.green` is `undefined` and the
  accent silently falls back to the violet default. (Caught on the Emancipation
  theme: the bc pill rendered violet instead of green until the page was made a
  client component.)

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
