# GATE READ — Storytelling + Looking + Clarity/Voice — Duchamp, *Fountain*

**Gate:** storytelling (primary) · looking · clarity + voice contract
**Scope:** `work-fountain-draft.md` (PART A const + PART B five `Fnt*` components). Grounded against `work-fountain-factpack.md`.
**Role:** judge only — no edits to draft, src/, or commits.

## VERDICT: NOT CLEAN

Storytelling and Looking are genuinely strong: the narrative builds well across all five sections, the looking section guides the eye to real, verifiable features of the Stieglitz photo with concrete prose pointers, and nothing contradicts the factpack. But the draft is studded with **voice-contract violations** — reader-commands, meta-narration, and honesty-labels are the dominant failure mode, plus em-dash / entity issues in rendered strings. These are FIX-level (mechanical) but numerous, and two rise to BLOCKER because they are core voice tics the contract bans outright and they cluster in the Looking and Break sections.

---

## 1. STORYTELLING (primary)

Overall: **compelling and well-paced.** The five sections each have a distinct job and they build (promise → the non-making + the lost object → what the one photo shows → the conceptual break + the manifesto + the debate → the afterlife/absence). Strong openings on every section. The closing paragraph ("the choice outlived the thing") lands. Few issues here.

- **[NICE] FntCase ¶1 → ¶3, "small joke stacked on a small joke."** The Mutt/Mott pun is told twice: once in `FntCase` ¶3 and again in the `R. Mutt 1917 signature` annotation. That is fine (different surfaces). But within `FntCase` the pun explanation is long for the opening section and slightly slows the scandal momentum. Optional: trim the parenthetical "(Whether the fixture actually came from Mott is, it turns out, disputed...)" here since the same caveat recurs in the annotation. Not blocking — both are accurate per factpack §8.

- **[NICE] FntMaking ¶1 vs FntLooking ¶1 — the "turn" is described twice in near-identical language.** FntMaking ¶1 already says the rotation makes it "strange"; FntLooking ¶1 re-explains "rotated about ninety degrees... function drains out of it... by simply turning it he made it strange." Mild repetition across adjacent sections. Consider making FntMaking's mention briefer (it is the *making* section; save the visual reading for *looking*). Storytelling-only; not a blocker.

- **[NICE] FntBreak "The debate" ¶ is dense.** It is a single long paragraph carrying the Suzanne letter, the handwriting claim, Philadelphia, two Burlington rebuttals, two author names, mistranslation, the contemporary account, and "never claimed it." It is accurate and well-judged in stance, but it is the closest thing to a wall of text in the draft. Optional: split after "...where they argue this urinal model was sold." into a second sentence-group for the rebuttal. Readability only.

No storytelling BLOCKER or FIX items. The arc is sound.

---

## 2. LOOKING

The `FntLooking` section and the `annotations` array both point at **real, verifiable features** of the Stieglitz photograph (the inverted form + drain holes, the painted signature, the Buddha/Veiled-Woman silhouette, the pedestal, Hartley's *The Warriors* behind it, the glaze/light). All six map to factpack §5 and use **prose pointers, no pixel coordinates.** Vivid and concrete ("glows out of a dark ground," "drain holes face you," "toward the lower left as the photograph is framed").

- **[FIX] FntLooking ¶2, "toward the lower left as the photograph is framed."** This is a good prose pointer, but it is the only spatial claim that could be wrong if the wired hero crop differs. It matches the factpack ("lower-left of the form as photographed") so it is accurate — keeping it is fine, but flag for the image-verify gate to confirm against the actual wired `ART_IMG.duchampFountain` rendering. Looking content itself is correct; this is a cross-gate handoff note, not a content defect.

No vague or unhelpful pointers found. Looking axis is otherwise CLEAN.

---

## 3. CLARITY + VOICE CONTRACT

This is where the draft fails. Itemized by violation type.

### 3a. Reader-commands (contract bans "notice how," "look at," etc.)

- **[BLOCKER] FntLooking ¶1, "Look at the photograph and the first thing to register is the turn."** Direct reader-command opening the entire Looking section. Suggested rewrite: *"The first thing that registers in the photograph is the turn."*

- **[FIX] FntLooking ¶2, "Now find the only mark of a human hand anywhere on it."** Reader-command. Rewrite: *"The only mark of a human hand anywhere on it is easy to miss. On the outer rim..."*

- **[FIX] FntLooking ¶3 ("The accidental figure"), "Let the white shape settle and it quietly stops being plumbing."** Imperative addressed to the reader. Rewrite: *"Allowed to settle as pure shape, the white form quietly stops being plumbing."*

- **[BLOCKER] FntLooking ¶4 ("The staging"), "Notice that Stieglitz set the urinal on a pedestal..."** The contract names "notice how" explicitly; "Notice that" is the same tic. Rewrite: *"Stieglitz set the urinal on a pedestal, the plinth that sculpture stands on."*

- **[FIX] FntBreak, "The key statement" ¶ after the blockquote, "Read it again and the manifesto is right there in the middle."** Reader-command. Rewrite: *"The manifesto sits right in the middle of it:"* (then the quoted line).

- **[FIX] FntMaking ¶ (last), "First, look at what is actually in the picture."** Reader-command (compounded with meta-narration, see 3b). Rewrite folds into the meta-narration fix below.

### 3b. Meta-narration (contract bans "in this section," "as we'll see," telling the reader what the chapter will do)

- **[BLOCKER] FntMaking final ¶, "We will come back to that. First, look at what is actually in the picture."** Classic forward-reference meta-narration ("we'll come back," "first... in the picture" previews the next section). Per `feedback_no_meta_narration`, tell the story, never narrate what the chapter is about or how it links. Rewrite — drop both sentences; end the section on *"...everything that hangs in museums today carries the same fingerprint of absence."* (That already lands.)

- **[FIX] FntMaking ¶ (last) opening, "So the situation is genuinely odd, and worth holding onto as the story goes on."** "as the story goes on" narrates the reading experience. Rewrite: *"The situation is genuinely odd. The thing that became the most discussed art object of the century is a photograph of a lost urinal..."*

### 3c. Honesty-labels (contract bans "to be honest," "the honest thing," etc.)

- **[BLOCKER] FntBreak "The debate" ¶1, "One open question runs underneath all of this, and the honest thing is to leave it open."** Honesty-label. Per `feedback_philosophy_voice_plain` and the art voice contract these are banned. Rewrite: *"One open question runs underneath all of this."* (Just state it.)

- **[FIX] FntBreak "The debate" final sentence, "The debate is live, and it deserves to be named rather than tidied away in either direction."** "deserves to be named rather than tidied away" is a self-congratulatory honesty-frame about the writing's own even-handedness. Rewrite: *"The debate is live, and the documentary weight currently sits with Duchamp's authorship."* (Reorder so the factual weight closes the paragraph; drop the meta-commentary.)

- **[FIX] FntBreak "The key statement" ¶, "A note on authorship, because it gets garbled: the piece ran unsigned."** "A note on authorship, because it gets garbled" is a meta/honesty aside about the writing. Rewrite: *"The piece ran unsigned. It is often attributed to Duchamp, but it was the work of the magazine's editors, and scholarship frequently credits Beatrice Wood in particular."* (Drop the framing clause; the correction stands on its own.)

- **[FIX] FntCase, "The suppression" ¶1, "Here is the part the story usually gets wrong, and it matters."** Borderline meta/honesty-label about the narrative's own accuracy. The correction is good and accurate; the framing clause is the tic. Rewrite: *"The show had no jury. That was its whole point. So Fountain could not be, and was not, formally 'rejected.'"* (Open straight into the fact.)

### 3d. Em-dash / entity in rendered strings

The contract flags literal `—` in any rendered string and `&mdash;` used inside a **plain TS string field** (where it would print literally; in JSX text `&mdash;` renders correctly).

- **[FIX] PART A const — literal em-dash "—" appears in plain TS string fields.** These ARE rendered strings (object literals, not JSX), so a literal `—` is allowed to print but violates the "no literal em-dash in rendered strings" rule. Instances:
  - `acquired:` "...the 1917 original **was lost soon after it was made**" — OK (no dash). But check:
  - `medium:` ends "...later authorized replica." — uses a period, OK.
  - The provenance/figure/annotation `note`/`detail`/`role` fields: scan shows the prose uses commas and periods, not literal `—`, EXCEPT confirm `hook` and `sections[].blurb` — these read clean (commas). **Net: PART A appears free of literal `—`; no fix needed there.** (Flagging for the author to re-grep `'—'` in PART A to be certain, since the contract is zero-tolerance.)

- **[FIX] PART B blockquote — `&mdash;` x3 inside JSX `<p>` text (FntBreak).** Lines: `What were the grounds for refusing Mr. Mutt's fountain:&mdash;`, `...placed it so that its useful significance disappeared under the new title and point of view&mdash;created a new thought...`. In **JSX text these render correctly** as em-dashes, so this is technically valid. HOWEVER: the factpack verbatim text (§4) uses literal `—` in those exact spots, and the contract's intent is consistency. This is the *one* place an em-dash is faithful to the source quotation, so **keep the em-dash** but use the JSX-safe entity (`&mdash;`) — which the draft already does. **No change required; logging it so the fact-gate doesn't flag it as a transcription drift.** Confirm the quote remains verbatim per factpack §4 (it does: "CHOSE" capitalized, ":—" preserved). CLEAN on accuracy.

- **[NICE] Verify no `&mdash;` sits inside a PART A plain string.** Grep confirms PART A uses curly quotes (`&rsquo;` etc. appear only in PART B JSX). PART A const strings use real curly chars (e.g. `"R. Mutt 1917."`), which is correct for a TS string. No `&mdash;` in a const field. OK.

### 3e. Condescending glosses / jargon-before-definition

- **[CLEAN]** "Readymade" is inline-defined on first use in `FntMaking` ("a word he had been using since around 1915 for ordinary manufactured things he selected and declared to be art..."). "Society of Independent Artists," "291," "The Blind Man," "Conceptual art," "Pop art," "Minimalism" are all introduced with a gloss. No jargon-before-definition found. No condescending glosses found.

### 3f. Walls of text

- **[NICE] FntBreak "The debate" ¶** — see §1; longest block, optional split. Not a hard wall.

---

## SUMMARY OF REQUIRED CHANGES

**BLOCKERS (4):**
1. FntLooking ¶1 "Look at the photograph..." (reader-command opening the section)
2. FntLooking ¶4 "Notice that Stieglitz set..." (reader-command, contract-named tic)
3. FntMaking final ¶ "We will come back to that. First, look at what is actually in the picture." (forward-reference meta-narration)
4. FntBreak debate ¶1 "...the honest thing is to leave it open." (honesty-label)

**FIX (10):** the remaining reader-commands ("Now find," "Let the white shape settle," "Read it again," "First, look at..."), the meta-narration "as the story goes on," the honesty/meta framings ("A note on authorship, because it gets garbled," "Here is the part the story usually gets wrong," "deserves to be named rather than tidied away"), the cross-gate looking-pointer verify, and the PART A literal-em-dash re-grep.

**NICE (5):** Mutt-pun double-tell, the "turn" described in two adjacent sections, the long debate paragraph, and two verification confirmations.

**Accuracy:** no requested change contradicts the factpack. The suppression-not-rejection framing, the lost-not-smashed original, the unsigned "Richard Mutt Case" attribution, the live (un-settled) Baroness debate, the Tate-replica dimensions, and the verbatim quote are all correct and must be preserved through the rewrites.
