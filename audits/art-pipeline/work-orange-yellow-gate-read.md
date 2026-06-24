# STORYTELLING + LOOKING + CLARITY GATE — Rothko, *No. 61 (Rust and Blue)* (work id `orange-yellow`)

**Gate:** storytelling (primary) · looking · clarity + voice contract
**Source draft:** `audits/art-pipeline/work-orange-yellow-draft.md`
**Fact pack:** `audits/art-pipeline/work-orange-yellow-factpack.md`
**Verdict:** **PASS with FIXES.** No BLOCKERS. The read is genuinely strong — it carries five sections on a stacked-rectangle painting without purple mysticism, makes the color-fields concrete in prose pointers, and lands Rothko's "it is not about color" thesis as the spine. A handful of [FIX]es tighten repetition and one voice-contract slip; the rest are [NICE].

---

## 1. STORYTELLING (primary)

**Overall: strong.** The through-line ("simple format, un-simple intent; color is the vehicle, feeling is the end") is set in §idiom, paid off in §break with the Rodman quote, and closed in §afterlife ("the picture argues against the labels every time someone stands close to it"). The mechanics-not-mysticism discipline from factpack §8.5 is honored throughout — "There is nothing supernatural in the mechanism" / "the physical recipe, not a trick of the eye." Tone is house-voice popular history, not academic.

### [FIX] Repetition of the "inner light / thin washes" mechanism across §making and §looking
**Location:** §making ¶2 ("colors underneath shine up through the ones on top… lit from within… inner light") and §looking "The glow" block ("lit from behind… inner light from the last chapter… lower layers shine up through the top ones"). Also repeated a third time in the §making "size" close and §looking "field" close (both end on "step into / be in").
**Why:** The looking section re-explains the wash mechanism nearly verbatim. Some restatement is fine (looking is a guided re-encounter), but the glow paragraph in §looking currently re-teaches rather than re-points.
**Suggested rewrite:** In §looking "The glow" block, lean on the cross-ref already present ("This is the inner light from the last chapter") and cut the re-explanation of *why* it happens — keep only the looking instruction: *"Look into the blocks, not just at them — the color seems lit from behind, as if a light were burning a few layers down. That is the inner light from the last chapter; here, just hunt for the spots where one hue clearly bleeds up through another."*

### [FIX] The "felt before it is understood" / "field you stand inside" phrasing recurs four times
**Location:** §making close ("a field you stand *inside*"), §looking close ("a wall of color you are meant… to step into"), §break ¶2 ("felt before it is understood") + key-statement coda, §afterlife close ("built to be felt before it is understood").
**Why:** It is the thesis, so deliberate echo is good — but four near-identical closers risk reading as a tic. The §making and §looking closers are the most interchangeable.
**Suggested rewrite:** Vary one. e.g. end §looking on the optical fact rather than the thesis line: *"…stop being four colored areas and become a single luminous wall."* (drop "you are meant, more or less, to step into" — §making already made that point, and §break/§afterlife own the thesis).

### [NICE] §afterlife provenance opening leans on a "unlike a 19th-c. picture" contrast twice
**Location:** §afterlife ¶1 ("Unlike a nineteenth-century picture with a long, gossipy chain of dealers and scandals… no auction-room drama, no renaming fight"). The const blurb also says "No early sale story to tell."
**Why:** Mild — the "nothing to report" framing is honest and the factpack confirms a thin provenance (§6), but the paragraph spends three sentences saying there is no story before getting to the one collector. Could tighten to two.

### [NICE] §break "before" history is accurate and well-paced
No issue — Kandinsky/Mondrian "structure as load-bearing, color as attribute" is exactly the factpack §3 framing, and it sets up the break cleanly. Keep.

---

## 2. LOOKING — does it make the color-fields concrete?

**Strong PASS.** Every factpack §5 looking point lands as a prose pointer, no coordinates:
- **The stack** — "read the stack, top to bottom… rust-maroon up high, paler bridging band, blue-violet below, against a blue ground." Concrete, ordered, names the colors.
- **Feathered edges** — "Go to where two areas meet and look for a line. There isn't one." — best pointer in the section; instruction-then-payoff.
- **Advance/recede (the breathing)** — "Hold your eye on the warm rust block for a few seconds, then on the blue… they quietly trade places. Nothing on the canvas is moving." Concrete and gives the *why* (warm forward / cool back).
- **The glow / thin washes** — present (see FIX above re: redundancy).
- **The ground seeping through** — "the blue pushes up around their feathered edges so that they dissolve into it." Concrete.
- **Scale / absence of object / where you stand** — "about nine feet seven inches high… taller than you are… the edges of the canvas drop out of your vision and there is only the field." Good — the absence of any object is explicitly tied to the immersive payoff ("with nothing in the field to point at, there is only the field to be in").

All six annotations in PART A mirror these and stay coordinate-free ("Top to bottom," "Anywhere two areas meet," "Hold your eye on the warm block") — compliant with the no-blind-coordinates rule.

### [NICE] One looking pointer could be even more concrete
**Location:** §looking "The field" — "the rust, the band, the blue-violet, and the blue field stop being four colored areas and become a single luminous wall." Good. No change required; noting only that this is the high point and the redundant glow paragraph above it dilutes it.

---

## 3. CLARITY + VOICE CONTRACT

Checked every paragraph against: meta-narration · reader-commands · honesty-labels · condescending glosses · jargon-before-define · walls of text · literal "—" in rendered strings · `&mdash;` misused inside plain TS string fields.

### [FIX] Meta-narration / second-person authoring address — "as you say" carried verbatim, plus "as you will sometimes read"
**Location:**
- §break key-statement coda ¶: "the line is misquoted constantly. **Anchor to the Rodman text above.**" — this is an instruction to the *author/editor*, not the reader; it reads as a fact-pack note that leaked into shipped prose.
- Same ¶: "And it belongs to the 1956 Rodman conversation, not, **as you will sometimes read,** to a 1947 essay or a wall text at the Museum of Modern Art."
**Why:** "Anchor to the Rodman text above" is meta-narration / an editorial command directed outward — a clarity-contract violation. The misquote-correction is good reader content, but the imperative is staff-facing.
**Suggested rewrite:** Drop the imperative; keep the reader-facing fact: *"The line is misquoted constantly — versions drop the 'and so on,' swap em-dashes for commas, or render the opening as 'the relationship of color *to* form' (the reprinted Rodman wording is 'color *or* form or anything else'). It comes from the 1956 Rodman conversation, not — as is sometimes claimed — a 1947 essay or a MoMA wall text."*

### [FIX] Reader-command density in §looking
**Location:** §looking uses direct second-person imperatives repeatedly: "Now read the stack," "Go to where two areas meet and look for a line," "Hold your eye on the warm rust block," "Look *into* the blocks," "Finally, notice the ground." Five command-openers in one section.
**Why:** Some are the legitimate idiom of a looking section (guided seeing). But the contract flags reader-commands, and the §looking section currently opens nearly every paragraph with an imperative verb, which trips the linter pattern and reads as a checklist.
**Suggested rewrite:** Convert one or two to declarative observation rather than command. e.g. "Where two areas meet, there is no line" instead of "Go to where two areas meet and look for a line"; "Inside the blocks, the color does not sit flat — it seems lit from behind" instead of "Look *into* the blocks." Keep 2–3 imperatives for the genuinely interactive ones (the advance/recede dwell, the "hunt for" glow).

### [NICE] Possible condescending-gloss edge — "it is genuinely confusing" / "because it is genuinely confusing"
**Location:** §idiom ¶3, "A word on the name, because it is genuinely confusing."
**Why:** Borderline. It is honest framing of a real trap (factpack §8.1–8.3, three separate naming hazards), not a put-down of the reader, so it does not clearly violate. Flag only: if the voice linter treats "genuinely"/editorial-aside openers as a tic, soften to "The name needs a word, because three different things tangle here."

### Em-dash / `&mdash;` audit
- **PART B (JSX/rendered prose):** `&mdash;` is used throughout as the rendered em-dash entity. This is correct usage inside JSX text — **not** a violation. No literal "—" characters appear inside rendered string content; the dashes are entities. The Rodman **blockquote** correctly uses `&mdash;` for "tragedy, ecstasy, doom **and so on**" matching factpack §4. ✓
- **PART A (plain TS string fields — `hook`, `blurb`, `note`, `where`, `detail`, `heroCredit`):** scanned all fields. **No literal "—" and no `&mdash;` entities** appear inside these plain strings (an `&mdash;` in a TS string would render as the literal text "&mdash;" — none present). Clean. ✓
- **En-dashes (–) inside TS strings:** present in date ranges — "1970s–80s", "1949–50", "1903–1970" (the last is in JSX as `&ndash;`). The PART A en-dashes ("by the 1970s–80s", in provenance `year`/`note`) are real `–` characters in plain strings. **[NICE]** — typographically standard and they render fine; flag only because the voice contract polices literal dashes in strings. If the project wants strings ASCII-only, swap to "1970s to 80s". Not blocking.

### Jargon-before-define check
- "multiforms" — defined inline on first use (§idiom ¶2: "clusters of soft, fuzzy, blotted patches of color floating against a single-hued background"). ✓
- "color-field" / "Color Field painting" — introduced as the museum/movement tag and explicitly framed as *not how Rothko thought of it* (§idiom ¶2, §break ¶2), honoring factpack §8.4. ✓
- "inner light" — given as Rothko's own phrase, with the physical mechanism attached. ✓
- "Color Field," "multiforms," "New York School" all glossed or self-evident in context. No undefined jargon. ✓

### Walls of text
No paragraph exceeds ~6 sentences; sections are broken by `SectionHeader` sub-heads (2–3 per section). No wall. ✓

### Honesty-labels ("to be honest," "the truth is," "as far as we can tell")
None found. ✓ (The "by every account" / "reportedly" hedges in §idiom/§making are sourced-uncertainty markers, not honesty-labels, and the factpack flags the 18-in distance and viewing claims as "reportedly" — correctly hedged per §2/§9.)

---

## ACCURACY SPOT-CHECK (against fact pack — not the fact gate's job, but flagging two)
- Dimensions "9 ft 7 in × 7 ft 8 in" match factpack §1/§8.6 (face, stretcher-depth dropped). ✓
- Quote wording matches factpack §4 verbatim incl. "and so on" and "color **or** form." ✓
- Slug-trap handled: §idiom ¶3 explicitly tells the reader the `orange-yellow` slug points at a *different* 1956 Buffalo painting (factpack §8.1). ✓
- 1951 *Interiors* scale quote in §making is sourced to "a statement he wrote in 1951" — matches §2/§4-secondary. ✓
- §break attributes Rodman to his **1957 book** *Conversations with Artists* with the conversation **recorded in 1956** — matches factpack §4 exactly (book 1957, conversation 1956). The §break coda says the line "belongs to the 1956 Rodman conversation" — consistent. ✓

No accuracy concerns surfaced for this gate to escalate.

---

## SUMMARY OF FINDINGS
| # | Class | Section | Issue |
|---|---|---|---|
| 1 | FIX | §looking glow / §making | "inner light / thin washes" mechanism re-taught nearly verbatim; make §looking re-point not re-explain |
| 2 | FIX | §making/§looking/§break/§afterlife | "felt before understood / stand inside" closer used 4×; vary the §looking close |
| 3 | FIX | §break coda | "Anchor to the Rodman text above" = author-facing meta-command in shipped prose; drop imperative, keep the misquote facts |
| 4 | FIX | §looking | 5 imperative command-openers in one section; convert 2 to declarative |
| 5 | NICE | §afterlife ¶1 | "no story to tell" framing spends 3 sentences before the one collector |
| 6 | NICE | §idiom ¶3 | "genuinely confusing" editorial aside — borderline, soften if linter tics on it |
| 7 | NICE | PART A strings | literal en-dashes (–) in date-range TS strings; ASCII-swap optional |

Em-dash/`&mdash;` audit: **clean** — `&mdash;` is correctly entity-form in JSX, none leaked as literal "—" or as raw `&mdash;` text inside plain TS string fields.
