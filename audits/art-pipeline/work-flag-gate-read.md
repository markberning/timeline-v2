# Gate read — Jasper Johns, *Flag* (1954–55) · STORYTELLING + LOOKING + CLARITY

Gate scope: storytelling (primary), looking, clarity + voice contract. Judged against
`work-flag-draft.md` and `work-flag-factpack.md`. No edits, no commit.

## VERDICT: PASS with [FIX]es

The draft is strong and ships-worthy on the merits. The story lands across all five
sections: the dream origin is vivid, the is-it-a-flag-or-a-painting puzzle is set up and
paid off, the cool-turn-after-AbEx break is clear and honestly scoped (Johns as proto-Pop
bridge, not card-carrying Pop). The looking section makes the deceptively plain image
concrete via prose pointers, no coordinates. No BLOCKERs. The findings below are voice/clarity
[FIX]es (a recurring honesty-label / meta-narration tic the philosophy + art voice contracts
explicitly ban) plus two small [NICE]s. Em-dash handling is CORRECT (see note at end).

---

## 1. STORYTELLING — strong; one structural [FIX]

The five-section arc is compelling and well-sequenced: dream → making → looking → break →
afterlife. The making section's "the most common thing said about this painting is also
wrong" is a genuinely good hook that turns a medium line into a reveal. The afterlife
"too patriotic, or not patriotic enough" Cold War acquisition story is the strongest closer
material in the chain and it's handled with real narrative drive. Nothing dull, listy, or
disjointed in the prose body.

**[FIX] — FlgDream, "Two small honesties about that quote" (lines 136–137).**
This paragraph stops the story to editorialize about sourcing. "Two small honesties about
that quote, because they matter" is a meta-narration + honesty-label opener (banned by the
voice contract; same family as the philosophy "honesty-labels" tic). The factpack §4 caveat
is explicitly flagged *"use in the fact-check ledger, not the reader."* The draft's own PART A
comment says the dream is "attributed loosely." The reader does not need the alternate-wording
apparatus or the "Which story?" teasing — that belongs in the ledger, not the prose.
*Suggested rewrite:* cut the "Two small honesties…" framing. Keep the substance as plain
story: e.g. "It is genuinely his own account, not a critic's invention, though the wording
has shifted across his retellings over the years. What it tells you is plain enough: he did
not labor toward the flag as a clever idea…" Drop the parenthetical 1960s-interview quote and
the "Which story? Which one do you know?" aside entirely.

## 2. LOOKING — passes cleanly, no fix

The looking section (FlgLooking) makes the deceptively plain image concrete, all six
factpack looking-points present, all as PROSE POINTERS with no coordinates:
- 48-star field, count-the-stars, fills to all four edges, no border — present, and the
  "your memory of today's flag is wrong" jolt is well-earned.
- encaustic / wax texture (thick, lumpy, crusted, drips, each stroke frozen) — present.
- newspaper reading through the wax — present.
- handmade surface under machine-made design (the rigid pattern vs. brushy handling
  tension) — present and named as "the engine."
- three joined panels / faint seams — present.
- no background, no depth, no scene — present, and tied to the central question.
Locations are given relationally ("top-left corner, where it always is," "down inside it,
under the stripes and the canton") — never pixel coordinates or blind crops. Compliant with
the no-blind-coordinates rule.

## 3. CLARITY + VOICE CONTRACT — findings

**[FIX] — honesty-label / meta tic, FlgDream (lines 136–137).** Same instance as the
storytelling [FIX] above ("Two small honesties about that quote, because they matter").
Counts under the voice contract as both a meta-narration and an honesty-label. One fix
resolves both. This is the single most important voice fix.

**[FIX] — condescending gloss / reader-command, FlgLooking (line 171).** "the first thing
to do is the thing nobody does … **count the stars.**" Pairs with FlgDream's frame and the
"Stand in front of it" opener. "Stand in front of it" alone is acceptable scene-setting and
matches the SECTION's established voice, but "the first thing to do is the thing nobody does"
edges into telling the reader what they fail to do (mild condescending gloss). *Suggested
rewrite:* "And here is what the famous image never gets: its stars. Count them — there are
forty-eight…" Keeps the imperative as invitation, drops the "nobody does" judgment.

**[FIX] — parenthetical definition placement, FlgAfterlife (line 223).** "(*Provenance*, by
the way, is the documented chain of who has owned a work, in order, from the artist's hand to
now.)" The "by the way" is a chatty meta-aside, and the term "provenance" is being inline-
defined here at the *start* of the afterlife section — but the word "provenance" also already
appears as a section eyebrow/label ("Provenance · 1958–1973," line 226) immediately after.
Definition is good practice (reader has zero prior knowledge), but "by the way" is a voice tic.
*Suggested rewrite:* drop "by the way": "(Provenance is the documented chain of who has owned
a work, in order, from the artist's hand to now.)"

**[NICE] — "Two small honesties" echoes a second hedge cluster.** FlgBreak line 203 has a
parenthetical "(That detachment is real, even though, paradoxically, the wax surface is one
of the most intensely hand-worked…)" and FlgBreak line 211 opens "One honest caveat, since
this is the Pop-Art chapter." Individually each is defensible (the proto-Pop scoping IS
required by the factpack §8 and the break-block doctrine), but stacked with the FlgDream
"two small honesties," the draft leans on the caveat/honesty register three times. Consider
softening line 211's "One honest caveat, since this is the Pop-Art chapter" to plain prose:
"There is one thing to place correctly. Johns is not, strictly, a Pop artist…" Keeps the
content, sheds the honesty-label cadence.

**[NICE] — jargon defined-on-first-use: PASS, note only.** "Encaustic" is inline-defined on
first use in both FlgMaking (line 152, "pigment suspended in hot, melted wax") and again,
appropriately, in the looking annotation. The PART A `making` blurb (line 65) uses "worked in
encaustic, pigment in hot wax" — defines it inline there too. Good. "Canton," "encaustic,"
"collage," "provenance," "Neo-Dada," "Abstract Expressionism," "readymade" all introduced
with a gloss. No undefined-jargon violations.

**No walls of text.** Paragraphs are sectioned by SectionHeaders; longest single paragraph
(FlgDream line 137, FlgBreak line 200) is dense but within the established art-reader norm and
broken by the blockquote. Acceptable.

---

## EM-DASH / ENTITY HANDLING — CORRECT, no finding

Checked specifically (this is where past art sections shipped bugs):
- **PART B (JSX text):** uses `&mdash;` / `&ndash;` HTML entities throughout — matches the
  existing `art-section-reader.tsx` convention exactly (1505 entity uses in the live file;
  siblings like the Demoiselles/Courbet narratives do the same). Correct.
- **PART A (const string fields — hook, blurbs, stats, dateLabels, provenance notes,
  heroCredit):** uses real Unicode `–` (en-dash) and `'` `"` characters, NOT HTML entities.
  This is correct: these are plain TS strings rendered as text content, where a literal
  Unicode char renders fine and an HTML entity would render as literal "&mdash;". Verified
  no `&mdash;`/`&ndash;`/`&rsquo;` leaked into any PART A const string.
- **No literal `—` (em-dash) appears in any rendered string** — the only literal em-dashes in
  the file are in the markdown headers (lines 1, 12, 111), which are documentation, not code.
The contract's two failure modes (literal "—" in a rendered string; `&mdash;` misused inside
a plain TS string) are both ABSENT. Clean.

---

## ACCURACY SPOT-CHECK (against factpack — confirming gate didn't reward an error)

- 48 stars, correct for 1954, never "50" — correct (factpack §8).
- Medium "Encaustic, oil, and collage on fabric mounted on plywood (three panels)" — matches
  factpack §1 verbatim; never "oil on canvas." Correct.
- Dream attributed loosely ("by his own account," "Johns has said," per MoMA) — correct.
- Dimensions 3 ft 6 1/4 in × 5 ft 0 5/8 in, "about three and a half feet by five feet" —
  matches factpack §1; ft/in not cm (per art-dimensions rule). Correct.
- proto-Pop / Neo-Dada / bridge framing — correct (factpack §8).
- in-copyright, fair use, no purchase prices in provenance — correct (factpack §7, §6).
No accuracy regressions surfaced by this gate.
