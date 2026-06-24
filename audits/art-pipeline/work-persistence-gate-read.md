# GATE READ — Storytelling + Looking + Clarity/Voice
## Dalí, *The Persistence of Memory* (1931) — work-read draft

Gate scope: storytelling (primary), looking-section eye-guidance, and the clarity/voice contract.
Source of truth for facts: `work-persistence-factpack.md`. I did not edit the draft or src.

---

## VERDICT: REVISE (no BLOCKERs; a cluster of voice-contract [FIX]es)

The draft is strong and largely ships. Storytelling lands across all five sections — the
melting watches, the camembert origin, the paranoiac-critical method, and the scale surprise
all hit. The looking section guides the eye well by prose pointers, names the right features,
and correctly says only three of four watches melt. The factual handling is faithful to the
fact pack (rights, the Einstein denial, the self-portrait hedge, the quote-variant flag).

What blocks a clean pass is the **voice contract**: the draft is studded with reader-commands,
honesty-labels, and meta-narration ("notice it," "Hold that fact as you read," "the phrase is
going to do a lot of work in this section," "the honest way to carry it is"). These are exactly
the tics the philosophy/art voice linter exists to kill, and there are enough of them to require
a revise pass. None is individually fatal; collectively they sand against the contract.

---

## 1. STORYTELLING (primary)

Overall: **PASS.** Compelling, well-paced, distinct beats per section. The four required payoffs
all land: the soft watches, the camembert, the paranoiac-critical method (well-defused), and the
"it's tiny" surprise (given its own opening beat in the looking section — good instinct).

- **[NICE] — `PerMethod`, two-camps setup.** The Miró/Masson vs Ernst/Tanguy/Magritte split is
  doing real work (it sets up the break) but it's the one mildly listy stretch. It's fine; if
  trimmed at all, keep both camps since `PerBreak` reuses them. No change required.

- **[NICE] — closing beat of `PerAfterlife`** ("The watches went soft. The memory persisted.")
  is a genuinely good landing. Keep.

- **[FIX] — `PerCamembert` blurb (const, line 65) vs section repetition.** The const blurb and the
  section both carry "his account, never an externally documented event." That's correct doctrine,
  but the section then says the same thing three more ways (see honesty-label findings below). The
  story is fine; the *repetition* is the problem, handled under Clarity.

No dull/disjointed/incoherent passages. No storytelling BLOCKER.

---

## 2. LOOKING SECTION (`PerLooking`)

Overall: **PASS.** Eye-guidance is by prose pointers only — no coordinates, no blind crops/pins.

- Confirmed it does **NOT** say all four watches melt. It states plainly "there are four watches,
  and only three of them are soft," and the hard-watch beat ("three melt, and the fourth stays
  rigid and shut and is being devoured") is explicit. Good.
- All required features are guided by location-in-prose:
  - three soft watches (over the block / off the dead branch / over the fleshy form) ✓
  - orange HARD ant-covered watch (lower left, face-down on the block) ✓
  - the single fly (on the face of one soft watch) ✓
  - draped fleshy face-creature (foreground center, eyelashed profile) ✓
  - dead branch / dead tree (left) ✓ — covered in the soft-watch beat
  - Catalan cliffs + sea (far background, Cap de Creus near Portlligat) ✓
- Scale surprise opens the section as its own beat — strongest possible placement.

- **[NICE] — the dead tree** gets a `where` line in the const `annotations` but no standalone
  paragraph in the rendered looking section (it's folded into the soft-watch paragraph). That's a
  defensible choice (it's a minor element) and the annotation array covers it. No fix needed; flagging
  so the coordinator knows it's intentional, not dropped.

No looking BLOCKER or FIX.

---

## 3. CLARITY + VOICE CONTRACT

This is where the revise work is. The draft repeatedly addresses the reader and labels its own
honesty. Per the voice contract, tell the story plainly; don't command the reader, don't narrate
the section, don't flag your own truthfulness.

### Reader-commands / meta-narration

- **[FIX] — `PerCamembert` line 144–145:** "and the phrase 'Dalí said' is going to do a lot of work
  in this section, so notice it." Both a meta-narration (telling the reader what the section will do)
  and a reader-command ("notice it"). 
  Rewrite: `Here is how Dalí said the painting came to him. By his own telling, repeated across his
  writings and interviews for the rest of his life, the soft watches arrived one evening in 1931.`

- **[FIX] — `PerLooking` line 168:** "Hold that fact as you read, because everything Dalí does here…"
  Reader-command.
  Rewrite: `Everything Dalí does here is done at jewel scale, with a tiny brush, in a space you could
  hide under one hand. The world's most reproduced surreal image is a miniature.`

- **[FIX] — `PerLooking` line 176:** "look closely, each one keeps every working part" — "look closely"
  is a soft reader-command.
  Rewrite: `and yet each one keeps every working part: its hands, its numbered face, even the little
  winding stem on top.`

- **[FIX] — `PerLooking` line 175 / 180:** "Find the three melting watches first." / "Now find the
  fourth watch…" The "Find… / Now find…" imperative framing recurs. One light orienting verb is
  tolerable, but the stacked imperatives read as instructions.
  Rewrite (175): `The three melting watches come first. One folds limply over the edge of a hard
  rectangular block…` (180): `The fourth watch breaks the rule the other three follow. Toward the
  lower left, lying face-down on the hard block, is a closed pocket-watch, deep orange…`

- **[FIX] — `PerMethod` line 133:** "a phrase…worth keeping in your pocket for the rest of this read."
  Meta-narration + reader-instruction.
  Rewrite: `He had a phrase for the result: he called such pictures "hand-painted dream photographs."`

### Honesty-labels (flag every one)

- **[FIX] — `PerCamembert` line 147–148:** "Treat this as what it is:" and "the honest way to carry it"
  pattern recurs across the section. The doctrine (it's Dalí's account) must stay; the *labeling of our
  own honesty* should go. The section currently makes the "this is Dalí's claim, not fact" point at least
  four times (const blurb, line 145 "His account, repeated for life," line 147 "It is Dalí's account, not
  an externally documented event," line 148 "Dalí was an unreliable narrator on principle"). Collapse to
  one clean statement.
  Rewrite (line 147–148): `It is Dalí's account, not an externally documented event: there is no second
  witness to the cheese, and Dalí spent his career building his own legend. He told the story, told it
  consistently, and it is exactly the kind of leap the paranoiac-critical method describes — but the only
  source for it is Dalí.`

- **[FIX] — `PerCamembert` line 156:** "the honest way to carry it is this: people see Einstein…but Dalí
  said it was camembert, and on the question of his own painting he gets the last word." The "honest way
  to carry it is" is an honesty-label.
  Rewrite: `People see Einstein in the soft watches, and it is easy to see why. But Dalí said it was
  camembert, and on the question of his own painting he gets the last word.`

- **[FIX] — `PerLooking` line 186:** "(Hold this as a strong, standard reading rather than a certainty:
  it is what scholars see, an interpretation, not a caption Dalí signed.)" The hedge is required by the
  fact pack, but "Hold this as…" is a reader-command + honesty-label. Keep the substance, drop the command.
  Rewrite: `This is the standard scholarly reading rather than a certainty — what art historians see, an
  interpretation, not a caption Dalí signed.` 
  NOTE: that rewrite introduces an em-dash; in the rendered JSX use `&mdash;` or recast with a comma/colon:
  `…rather than a certainty: what art historians see, an interpretation, not a caption Dalí signed.`

- **[NICE] — `PerBreak` line 216–218 (quote note)** "A note on that quotation, because it deserves one."
  This is mild meta-narration, but the quote-variant flag is mandated by the fact pack and the note is the
  cleanest place to carry it. Acceptable. If trimmed: open with `The line is genuinely Dalí's, the sentence
  that fuses his soft watches to his method and his cheese in one breath. But it circulates in several
  translations…`

### Condescending glosses

- **[NICE] — `PerMethod` line 127:** "the unconscious mind, the part that runs your dreams without asking
  permission" and "the tidy rational mind that normally keeps it quiet." Borderline — these are inline
  definitions in house voice, not condescending. Keep.
- The Camembert "(a soft French cheese)" gloss (line 145) and "pocket-watches (the kind that live on a
  chain in a waistcoat…)" (line 171) are legitimate inline-defines for a zero-knowledge reader. Keep.

### Jargon before inline-define

- **[PASS] — "paranoiac-critical method."** Handled well. First const mention (section blurb, line 64) is a
  blurb, acceptable. In the rendered prose (`PerMethod`, line 130) it is named and then immediately defined
  ("In plain terms, it meant this…") including the "paranoiac"/"critical" split. By the time it recurs in
  `PerCamembert` and `PerBreak` it is established. No jargon-before-define violation.
- **[PASS] — "academic master / academic illusionism," "biomorphic," "automatist."** "biomorphic" (line 203)
  and "automatist" (line 203) appear in `PerBreak` without inline-define. They're mild but unglossed.
  **[FIX]** — `PerBreak` line 203: "loose, abstract, biomorphic shapes" and "automatist." Either gloss in one
  word or cut. Suggest: `Miró and Masson made loose, abstract, blobby organic shapes; Ernst, Tanguy, and
  Magritte made dream-scenes…` (drops "biomorphic"/"automatist" entirely; the meaning survives).

### Em-dash / `&mdash;` discipline (TS string fields vs JSX)

- **[PASS] in the const.** I scanned the `ArtWorkContent` string fields (hook, blurbs, stats, provenance
  notes, annotations `where`/`detail`, figures). They use commas and parentheses; I found **no literal `—`
  character and no stray `&mdash;`** inside a plain TS string. The fact-handling header's promise holds.
- **[PASS] in JSX.** The `Per*` components correctly use HTML entities (`&ndash;` for date ranges,
  `&iacute;`, `&ldquo;`/`&rdquo;`, `&rsquo;`). No literal em-dash in rendered JSX strings either.
- **[FIX] watch-out for the rewriter:** several of my suggested rewrites above naturally want an em-dash.
  When applying them, render em-dashes as `&mdash;` inside JSX, and in any TS string field recast to a
  comma/colon/parenthesis (do not introduce a literal `—` into the const).

### Walls of text

- **[NICE] — `PerBreak` line 208** is the densest paragraph (the Smarthistory Rorschach aside lengthens it).
  Acceptable as one idea, but the Smarthistory parenthetical ("the method (Smarthistory frames it as turning
  the canvas into a kind of Rorschach test…)") is a citation-flavored aside that slightly clots the sentence.
  Optional: drop the source-name and keep the idea — `the method lets dream-logic surface, the canvas
  becoming a kind of inkblot where a soft head can also read as terrain, and the academic craft makes that
  dream-logic look like reportage.` Not blocking.

---

## SUMMARY OF FINDINGS

- BLOCKER: none.
- FIX (9): reader-commands "notice it" / "Hold that fact" / "look closely" / "worth keeping in your pocket";
  the "Find… / Now find…" imperative stack; honesty-labels "Treat this as what it is" / "the honest way to
  carry it is" (×2) and the over-repeated "Dalí's account not fact" (collapse to one); the "Hold this as a
  strong reading" command-hedge; unglossed "biomorphic"/"automatist." Plus the standing watch-out that
  rewrites must keep em-dashes as `&mdash;` in JSX / recast in TS strings.
- NICE (6): two-camps list, closing beat (keep), dead-tree folded annotation (intentional), the quote-note
  meta, the inline-define glosses (keep), the dense Break paragraph / Smarthistory aside.

Storytelling and looking both PASS as-is. The revise is a voice-contract cleanup pass — strip the
reader-commands and honesty-labels, collapse the repeated "this is Dalí's claim" to one statement, gloss
or cut the two stray jargon words. Facts stay faithful to the pack throughout.
