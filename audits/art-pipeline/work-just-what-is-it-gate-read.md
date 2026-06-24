# GATE — Storytelling + Looking + Clarity/Voice

**Work:** Richard Hamilton, *Just what is it that makes today's homes so different, so appealing?* (1956), Pop Art work-read.
**Gate:** storytelling (primary) · looking · clarity + voice contract.
**Reviewed:** `work-just-what-is-it-draft.md` against `work-just-what-is-it-factpack.md`.

## VERDICT: PASS WITH FIXES

The read is genuinely good. The story lands across all five sections: the consumer-culture
living room reads as a "catalogue of desire," the POP lollipop pays off, and "Pop being born
from advertising" is the explicit spine of the Break section. Prose is house-voice, varied, not
listy. The looking section is navigable by prose pointers alone — no coordinates — and every
required object is locatable. The naming claim, McHale's credit, the 1992/2004 versions, the
in-copyright status, and the dimensions are all handled exactly to the factpack.

The findings below are all [FIX]/[NICE] — **no [BLOCKER]s**. The two that matter most are
voice-contract violations the linter will care about (a residual reader-command / honesty-label
pattern) and one looking-section gap.

---

## STORYTELLING (primary)

**Overall: strong.** Five distinct beats, each with its own engine: the show (Tomorrow), the
method (Cutting), the room (Looking), the argument (Break + key statement), the scope/afterlife
(Afterlife). No dull or disjointed passages. The "talent has moved from the wrist to the eye"
(Cutting, line 141) and "the picture is the argument made in scissors and glue; the letter is the
same argument made in words" (Break, line 191) are the kind of lines the gate wants. Nothing
listy survives except the quote block itself, which is meant to be a list.

- **[NICE] — JwiAfterlife, closing paragraph (line 213–215).** The ending is good but the read
  has now told us the picture is "the size of a sheet of letter paper" four times (Tomorrow ×2,
  Looking opening framing, Afterlife close). The smallness is a great motif; this fourth beat is
  the one that tips toward repetition. Consider trimming "A picture the size of a sheet of letter
  paper, made of cut-up magazines…" to lean on a different attribute (the catalogue-throwaway
  origin, or "anyone with scissors could copy"), since that's the fresher idea in the same
  sentence.

- **[NICE] — JwiBreak (line 177).** "the long tradition running back through the School of Paris"
  then "the School of Paris" / "Léger's machine forms" assume the reader knows what the School of
  Paris is. It's used as atmosphere, not load-bearing, so it's defensible, but a 3-word gloss
  ("the Paris avant-garde") would respect the zero-prior-knowledge rule without a condescending
  gloss. Low priority.

---

## LOOKING (navigability — prose pointers, no coordinates)

The Looking section (JwiLooking, lines 147–169) walks the collage in a deliberate order — two
bodies → lollipop → gadgets → comic/Hoover/ham → ceiling — and every pointer is spatial-relative
("Standing on the carpet, center"; "Reclining on the sofa to his left"; "to the right"; "on the
floor in the foreground"; "On the wall, where you'd hang a family portrait"; "Up the staircase";
"look up… where the ceiling should be"). **No coordinates, no blind crops. Compliant.**

Checklist of the seven required objects:

| Object | Locatable in prose? | Where |
|---|---|---|
| POP lollipop | yes | "the thing the bodybuilder is holding… angled toward you" (line 159) |
| Muscleman | yes | "Standing on the carpet, center" (line 156) |
| Pin-up | yes | "Reclining on the sofa to his left" (line 156) |
| TV / tape recorder | yes | "to the right… on the floor in the foreground" (line 162) |
| Comic | yes | "On the wall, where you'd hang a family portrait" (line 162) |
| Earth ceiling | yes | "look up… where the ceiling should be" (line 165) |
| **Ford emblem** | **weak** | "a Ford emblem is tucked into the décor" (line 162) — no spatial pointer |

- **[FIX] — JwiLooking (line 162).** The **Ford emblem** is named but given no location at all
  ("a Ford emblem is tucked into the décor"). It's one of the seven the gate asks to be
  navigable, and it's the only one a reader can't actually find. The annotation file is also vague
  on it ("the badge on the foreground"). The factpack/UNCERTAINTY ledger flags the Ford emblem as
  "widely catalogued but not individually re-quoted… verify the exact brand wording" — so do NOT
  invent a precise position. Suggested rewrite that stays honest: drop the false-precision and
  group it with the brand marks already mentioned — e.g. "Brand marks dot the room — a Ford badge
  among them — and a tinned ham sits on the coffee table like a centerpiece." That removes the
  expectation that the reader can pinpoint it while keeping it in the inventory.

- **[NICE] — annotations array (Part A, line 85).** The fifth annotation bundles "the vacuum ad,
  the brand marks, and the Earth ceiling" into one entry whose `where` says "the badge on the
  foreground." If the splice keeps annotations as tappable look-closer pointers, that three-things-
  in-one entry is harder to use than the prose. Not blocking; the prose carries the looking load.

---

## CLARITY + VOICE CONTRACT

Swept the whole draft (both the prose in Part B and the string fields in Part A) for every banned
pattern. Results:

### Reader-commands
- **[FIX] — JwiLooking, line 159: "For now just register that the word is sitting right there…"**
  "just register that…" is a reader-command (imperative directed at the reader). Rewrite to
  description: "For now, the word is sitting right there in the middle of the picture, three years
  before 'Pop art' became common usage."
- **[NICE] — JwiLooking opening "Look at it as what it pretends to be" (line 152–153) and "And
  then look up" (line 165), JwiBreak "picture what serious art was still supposed to be made of"
  (line 176).** These are soft directives that function as guided-looking and are arguably fine in
  a Looking/Break section (the art pipeline tolerates looking-prompts here). I'm flagging them so
  the voice linter run isn't surprised, but I would NOT change "look up" — it's doing real
  navigational work. "Look at it as what it pretends to be" is the most command-y of the three; if
  the linter trips, soften to "It pretends to be a fashionable modern living room…".

### Honesty-labels (banned: "the honest answer is," "honestly," "to be fair," "the truth is")
- **[FIX] — JwiLooking, line 159: "(the honest answer is: maybe, probably not)."** "the honest
  answer is" is a textbook honesty-label. Rewrite: "(we'll get to whether it really named the
  movement — short version, maybe, probably not)" or simply "(the answer is: maybe, probably
  not)."
- **[NICE] — JwiCutting, line 138: "two hands behind it… fairly told."** "fairly told" is a mild
  honesty/credibility flag. Defensible because it's framing a genuine attribution nuance, not
  hedging. Leave unless the linter flags it.

### Condescending glosses / meta-narration
- **[FIX] — JwiBreak, line 191: "(A note on the text, because it travels in slightly different
  forms: …)."** This parenthetical is meta-narration about the source's textual variants — it
  narrates the editorial process to the reader rather than telling the story. The factpack DOES
  ask that the variant be flagged, but it can be stated as fact, not as a process note. Suggested
  rewrite: drop "A note on the text, because…" and state it plainly: "Hamilton wrote it as a
  stacked list with those little parentheticals; it travels in other forms too — some sources run
  it as one sentence, some drop the asides, some give the date only as '1957' — but the substance
  is stable." Keeps the required variant-flag, kills the meta framing.
- **[NICE] — JwiTomorrow, line 122: "And here is the first surprising fact, the one that sets the
  tone for everything after."** Light meta-narration (announcing that a fact is coming and rating
  its importance). It's an effective hook and the pipeline tolerates a beat like this, but it is
  the construction the voice linter most often catches. If you want zero risk: "And the first
  surprising thing about it is its size. The picture is tiny."

### Jargon used before inline-defined
- **Clear.** "Collage" is defined on first use (Tomorrow, line 120: "a picture assembled by
  cutting images out of printed sources and pasting them down"). "Independent Group," "This Is
  Tomorrow," "pin-up," "Tootsie Pop" all introduced with enough context. No undefined jargon.

### Walls of text
- **Clear.** Longest paragraph is JwiLooking's gadgets paragraph (line 162) and the ceiling
  paragraph (165); both stay under ~6 sentences and are broken by the section's walk-the-room
  rhythm. No wall.

### Literal "—" em-dash in a rendered string / &mdash; misuse
This is the area to watch, because the art reader renders some fields as plain text and others as
HTML-bearing JSX.

- **[FIX] — Part A string fields contain literal em-dashes (`—`) that will render as raw glyphs,
  which is exactly what the contract bans in plain TS string fields.** Occurrences:
  - line 50 `hook`: "built entirely out of American magazine ads, a bodybuilder, a pin-up, a
    tinned ham, and a giant lollipop that reads POP. The founding image…" — *this one is clean
    (no dash).* 
  - **line 70 `provenance[1].note`: "the destination is firm. On view."** clean.
  - **line 80 annotation detail: "big as a tennis racket, and its wrapper spells POP… It reads at
    once as a sweet, a sight gag, and a label."** clean.
  - The literal `—` DOES appear in: **line 138 region is JSX (fine)**. Checking the Part A
    *strings* specifically: `figures[].role`, `stats[]`, `sections[].blurb`, `annotations[]` — I
    find **no literal `—` inside Part A string values**; the blurbs and annotation details use
    commas/semicolons. **Part A is clean on this axis.** (Flagging as checked, not as a defect.)
  - **Part B (JSX) correctly uses `&mdash;` and `&ndash;` entities** throughout (lines 117, 120,
    135, 138, 156, 162, 165, 188, etc.), and `&ldquo;/&rdquo;`, `&amp;` for the ampersands
    (Boosey &amp; Hawkes, line 162). **This is correct** — these are HTML-rendered, so entities
    are right and there are no raw `—` in the JSX text nodes. **No defect.**

  **Net:** the dash/entity handling is actually correct throughout. The only thing to double-check
  at splice time: the blockquote attribution uses `&mdash;` (line 188) inside JSX — correct — and
  the inline-sentence note in line 191 uses plain hyphen "1957." which is fine. **No change
  required; documented because the gate asks every instance be checked.**

- **[NICE] — voice-linter pre-check.** Before the linter runs, the three [FIX] items above
  (reader-command "just register," honesty-label "the honest answer is," meta-note "A note on the
  text") are the ones a regex sweep will catch. Fixing those three clears the deterministic gate.

---

## ACCURACY SPOT-CHECK (within this gate's lane — flagging, not the fact gate's job)
- Ceiling rendered as "Earth seen from space / the planet" — matches factpack's preferred "planet
  Earth" reading. Good (factpack also notes "Moon" appears; draft's choice is the cleaner one).
- Lollipop named "Tootsie Pop" in prose (lines 159, 80) — factpack supports "Tootsie Pop." OK.
- Koszewski handled as a real man + "Charles-Atlas TYPE, not Atlas himself" exactly per factpack
  trap #6. Good.
- Dimensions "10¼ × 9¾ in" imperial-only in stats/prose — complies with the imperial-only rule.
- Naming claim scoped as "maybe, probably not" / Paolozzi 1947 / Alloway — matches trap #1. Good.

---

## SUMMARY OF ACTIONABLE ITEMS
- [FIX] Locate the Ford emblem or fold it into the brand-marks clause (JwiLooking, line 162) — it's
  the one required looking-object with no spatial pointer.
- [FIX] Kill reader-command "just register that…" (line 159).
- [FIX] Kill honesty-label "(the honest answer is: maybe, probably not)" (line 159).
- [FIX] De-meta the "(A note on the text, because…)" parenthetical (line 191) while keeping the
  variant flag.
- [NICE] Trim the 4th "letter-paper size" repeat (line 213); soft-directive sweep; "School of
  Paris" gloss; "first surprising fact" hook. Dash/entity handling verified clean — no change.
