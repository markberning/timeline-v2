# GATE — Storytelling + Looking + Clarity/Voice — *The Treachery of Images* (work-read)

**Gate:** STORYTELLING (primary) + LOOKING + CLARITY/VOICE-CONTRACT
**Work:** Magritte, *The Treachery of Images* (Ceci n'est pas une pipe), 1929
**Draft:** `audits/art-pipeline/work-treachery-draft.md`
**Verdict:** **REVISE** — story and looking are strong; voice contract is breached repeatedly. The draft commands the reader ("Look at…", "Start with…", "Hold that…"), narrates its own structure ("the next four sections", "We'll come to Foucault in a moment"), and labels its own honesty ("a number we can't stand behind", "it is the one to trust"). These are the exact tics the philosophy/art voice linter exists to kill, and they recur in every section. No factual blockers against the factpack. Fix the voice tics and one over-long passage and it ships.

---

## 1. STORYTELLING (primary)

Overall: **strong.** The arc holds across all five sections — proposition (the true sentence) → making (thing/picture/word + the essay twin + Magritte's own gloss) → looking → break (the 500-year contract severed) → afterlife (provenance + which-pipe + Foucault). The philosophical jolt lands through concrete analogies ("a photograph of your mother is your mother", "the map is not the territory") rather than lecture. The Magritte "could you stuff my pipe?" quote is well-placed as the emotional center of `making`. Few dull/listy passages.

- **[NICE] `TrcProposition`, para 4 (lines 145–146)** — the "travels under several names… sort them" paragraph is the most expository in the section and briefly stalls the momentum the first three paragraphs built. It is justified (title-soup is a real factpack trap, §8.5) but consider trimming the housekeeping tone. Lower priority than the voice fixes below, which overlap it (see [FIX] reader-command "Hold that" inside it).

- **[NICE] `TrcBreak`, para 3 (lines 231–232)** — the final parenthetical foreshadowing Foucault is long and does double duty with `afterlife`. Story-wise it is fine (it earns "a philosopher could build a book on it"), but it contains a reader-aside tic flagged below.

No storytelling BLOCKERs.

---

## 2. LOOKING

Overall: **strong and concrete.** `TrcLooking` makes the deceptively plain image vivid through prose pointers, no coordinates: the brown briar pipe (bowl right / stem left), the smooth even illustrational handling, the no-shadow float, the flat neutral tan-brown ground, the schoolroom-cursive caption, the lesson-plate layout, and the deadpan tone-as-argument. Each pointer earns its place by tying the visual fact to the painting's argument (e.g., plainness → "a sign rather than a portrait"). This is the model the looking gate wants. Matches factpack §5 looking points 1–6 faithfully.

- **[FIX] structural — looking section opens on reader-commands.** Three of the four paragraphs begin with an imperative aimed at the reader: "Start with the size…" (line 191–192), "Look at what the pipe is sitting on…" (line 199–200), "Look at the lettering itself…" (line 204–205); plus "Now the pipe… Look at *how* it is painted" (line 195) and "Now pull back and take the whole thing in…" (line 209–210). The looking content is excellent, but the voice contract bans reader-commands (`feedback_philosophy_voice_plain` / the voice linter). Convert each to declarative observation. Suggested rewrites:
  - "Start with the size, because it surprises people. The painting is small and wide…" → "The size surprises people. The painting is small and wide…"
  - "Look at what the pipe is sitting on, and you will find that it is sitting on nothing." → "The pipe is sitting on nothing."
  - "Look at the lettering itself, because the *style* of the writing matters as much as the words." → "The *style* of the writing matters as much as the words."
  - "Now pull back and take the whole thing in at once, because the final effect is in the **tone**." → "The final effect is in the **tone**."

No looking BLOCKERs. (The fix above is filed under Clarity because the defect is voice, not looking quality.)

---

## 3. CLARITY + VOICE CONTRACT

This is where the draft fails the gate. The violations are systemic, not one-off.

### Reader-commands (banned) — [FIX] each
- **`TrcProposition`** line 135–137: "**Look at** the painting and the first thing you see…" (opening words of the whole read). → "The first thing you see in the painting is the plainest thing in the world: a pipe."
- **`TrcProposition`** line 146: "**Hold that,** because it matters when we get to the other versions." → cut, or "It matters when the other versions come up later." Also line 146 close: "**Lead with** the proper title, **treat** the painted line as the famous caption, and **keep** the two separate in your head." — three stacked imperatives instructing the reader. → recast as statement: "The proper title is *The Treachery of Images*; the painted line is its most famous caption — two different things."
- **`TrcProposition`** line 148–149: "**sit for a second with** the plain fact…" → "The plain fact that started it: a true sentence, written under a picture, and the truth of it is the whole point."
- **`TrcLooking`** lines 191/199/204/209: the four "Start with / Look at / Look at / Now pull back" openers (see Looking section above for rewrites).

### Meta-narration / structure-narration (banned) — [FIX] each
- **`TrcProposition`** line 146: "(A note for later: …)" and line 149: "The picture is going to spend **the next four sections** holding that gap open…" — narrates the read's own structure. → drop "the next four sections"; e.g., "The picture holds that gap open with both hands."
- **`TrcProposition`** line 146: "**Hold that, because it matters when we get to the other versions.**" — forward-references a later section. Cut (covered above).
- **`TrcBreak`** line 232: "**We'll come to Foucault in a moment.**" and "(And one more piece of the afterlife belongs here, because it is part of the break itself becoming famous: …)" — explicitly narrates section ordering. → keep the Foucault fact, drop the navigation: e.g., "Decades later the French philosopher Michel Foucault wrote an entire essay on this picture, using it to pick apart the old marriage of resemblance and assertion." Remove "We'll come to Foucault in a moment."
- **`TrcAfterlife`** line 257: "the old assumption **we met in the last section**" — back-reference narration. → "the old assumption that a picture both resembles its subject and silently asserts 'this is that'." (restate briefly; the terse cross-ref convention allows "(see the break)" at most, but plain restatement reads better here).

### Honesty-labels / self-auditing asides (banned) — [FIX] each
- **`TrcMaking`** line 180: "(Magritte said this kind of thing more than once and the wording drifts a little from telling to telling; the version above is **the one to trust.** **Don't pin it** to a particular afternoon or a particular questioner, because the record doesn't fix that, **and it doesn't need to.**)" — this is the draft narrating its own sourcing discipline at the reader, plus two reader-commands ("the one to trust", "Don't pin it"). The factpack's caution (§4) is an instruction to the *author*, not copy for the *reader*. → cut the parenthetical entirely, or reduce to a plain fact: "Magritte repeated the point in different words over the years; this wording is recorded by Torczyner."
- **`TrcAfterlife`** line 247: "(You will sometimes see a dollar figure attached to that 1978 sale. It comes from secondary reports, not from the museum's own record, **so we leave it out rather than print a number we can't stand behind.**)" — honesty-label + meta ("we leave it out"). → either drop entirely (the factpack says omit the price; silence is cleaner) or state neutrally without the self-justification: "(Figures sometimes cited for the 1978 sale come from secondary reports, not LACMA's record.)"
- **`TrcAfterlife`** line 257: "Note the two dates, **because people often cite only the book and lose the earlier essay.**" — reader-command ("Note the two dates") + meta about citation habits. → "The essay first appeared in a journal in 1968 and was expanded into a small book in 1973; the English translation, by James Harkness, is titled *This Is Not a Pipe*." (drop the instruction).

### Condescending glosses — [NICE]
- **`TrcProposition`** line 137: "(1898–1967; pronounced "reh-NAY ma-GREET")" — the pronunciation gloss is borderline. It is helpful for a zero-knowledge reader and not strictly condescending, so **NICE / optional**; keep if the art vertical uses pronunciation respellings elsewhere, otherwise consider dropping for register consistency. No other condescending glosses found — the inline definitions (Surrealism, provenance, representation, oil on canvas) are pitched correctly to a smart zero-knowledge reader.

### Jargon-before-definition — none found
- "Surrealism" defined on first real use (line 143). "representation" defined at line 180. "provenance" defined at line 243. "oil on canvas" defined at line 192. **Clean.**

### Literal "—" em-dash in a rendered TS string — none found
- Spot-checked every quoted `blurb`, `note`, `detail`, `hook`, `stats`, and prose string. Em-dashes in the **draft's own commentary prose** (the markdown around the code, e.g. line 161 "—") are fine — not rendered. Inside rendered string fields the draft uses `&ndash;` for date ranges (e.g. hook is clean; stats use proper chars) and HTML entities (`&ldquo; &rdquo; &rsquo; &mdash;`) consistently. **No raw "—" found inside a `' '` or `" "` string field.**

### `&mdash;` misused inside a plain TS string — none found
- Searched the `const` object and JSX strings: the entity glosses (`&ldquo;`, `&rsquo;`, `&ndash;`, `&eacute;`, `&egrave;`) appear only inside JSX text nodes and string literals where they render correctly. No `&mdash;` appears inside a `blurb`/`note`/`detail`/`hook` plain-string field where it would print literally. **Clean.** (Note: JSX text-node entities like `&ldquo;` in `TrcProposition` render correctly because they are JSX children, not bare TS string values — verify the coordinator keeps them as JSX, not as a `string` prop.)

### Walls of text — [NICE]
- **`TrcMaking`** line 180 paragraph and **`TrcBreak`** line 232 paragraph are the two longest. After the honesty-label and meta-narration cuts above, both drop to comfortable length. No standalone wall-of-text BLOCKER once those parentheticals are removed.

---

## FACT CHECK against factpack (sanity, not the primary gate here)
No discrepancies found. Dimensions render as the LACMA imperial figure (factpack §1, 23 3/4 × 31 15/16 in / "two feet across, just under two feet tall"); caption verbatim with apostrophe; Magritte gloss matches Torczyner wording (§4) and is attributed to Torczyner without over-specifying occasion; Foucault dated 1968 essay / 1973 book (§8.4); provenance chain Le Centaure → Mesens (1932) → Copley (1957) → LACMA (1978, acc. 78.7) with no price (§6); three pipe versions correctly distinguished, 1929 LACMA oil guarded as canonical (§8.1); rights pd-us (§7). One minor: hero `heroAspect: 1.43` while the code comment computes W/H ≈ 1.34 from 60.3×81.1 — not a content-gate issue, flag to coordinator as a possible typo (1.34 vs 1.43).

---

## SUMMARY OF FINDINGS
- **BLOCKER:** none.
- **FIX:** reader-commands throughout (proposition opener "Look at…", "Hold that", "Lead with/treat/keep", "sit for a second"; looking "Start with / Look at / Look at / Now pull back"; afterlife "Note the two dates"); meta/structure-narration ("the next four sections", "We'll come to Foucault in a moment", "we met in the last section", "(A note for later)"); honesty-labels (the Torczyner "the one to trust / Don't pin it" aside; the "a number we can't stand behind" price aside).
- **NICE:** trim title-soup paragraph (proposition para 4); pronunciation gloss optional; walls of text resolve once parentheticals are cut.
