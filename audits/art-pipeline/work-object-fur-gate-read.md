# GATE READ — *Object* (Oppenheim, fur teacup) · storytelling + looking + clarity/voice

Gate scope: STORYTELLING (primary) · LOOKING · CLARITY + VOICE CONTRACT.
Source draft: `audits/art-pipeline/work-object-fur-draft.md`. Factpack: `work-object-fur-factpack.md`.
Not an edit pass — findings only.

## VERDICT: **PASS (with FIX/NICE polish)**

No BLOCKERs. The five sections land the three required beats — the café spark,
the visceral fur-on-the-lips shock, and the Surrealist-object idea — as a real
story, not a list. The looking section is concrete and pointer-based (no
coordinates). Voice contract is clean: `&mdash;` entities are used correctly
inside JSX text and the rendered const string fields (`hook`, `blurb`s) carry
NO literal `—`. The findings below are tightening, not gating.

---

## 1. STORYTELLING (primary)

**Strong overall.** The arc is genuinely propulsive: bracelet → café dare → the
near-effortless making → the small impossible object → the break → the cage of
fame, closing on the Basel "take your freedom" line and the flinch-at-the-rim
button. The three required beats all land:
- **Café spark** — built with the right "the story goes" framing, the riposte
  attributed to her, the "more fur" line flagged as variable. Compelling.
- **Visceral shock** — "fur on the tongue," "the softness curdles," "the small
  gag of fur against the lip" recur and pay off. The bodily horror lands.
- **Surrealist-object idea** — the Break section nails the two-part break
  (bought-not-made assemblage + comfort/revulsion collision) and ties it to the
  May 1936 Ratton show as the category's birth. Clear and earned.

### Findings

- **[NICE] Repetition across sections of the "comfort/revulsion fired at once"
  beat.** It appears in the `looking` "Comfort, then revulsion" para (line 174),
  the `break` "second break" para (line 194), the hook, and two annotations
  (lines 68, plus the looking close). It is the work's core idea so some echo is
  right, but the *looking* and *break* statements are nearly the same sentence
  ("Both responses fire almost together / at once"). Suggest the `break` version
  lean on the *content-is-the-collision* framing ("that collision is not a side
  effect; it is the content") and drop the second "soft to the eye / sickening
  to the lip" restatement, so the two sections don't read as paraphrases of each
  other. Location: `ObjBreak` line 194.

- **[NICE] `ObjMaking` "Three names, one cup" risks a brief listy/pedantic dip.**
  Lines 142–146 are accurate and the title-trap matters, but the prose turns
  near-encyclopedic ("The first is… The second is… Here is the trap…"). It's the
  one stretch where storytelling yields to bookkeeping. Suggest compressing the
  catalog of variants (Breakfast in Fur / Fur Breakfast etc.) into one clause and
  keeping the *story* of the naming — Breton hanging his literary pun on her cup —
  forward. Not blocking; the "treat the French as the nickname a colleague hung on
  it" close already rescues it.

- **[NICE] Opening of `ObjCafe` ("The maker, and the movement she walked into")
  front-loads movement-definition before the hook fully bites.** The Surrealism
  inline-definition (line 112) is necessary and well-written, but the section's
  first beat is biography + movement before we reach the bracelet. It works
  because the bracelet payoff arrives line 115 ("fur on her arm… where the most
  famous object in Surrealism is supposed to have begun"). No change required —
  flagging only that the spark is the draw and it's gated behind one setup para.

---

## 2. LOOKING

**PASS — concrete and pointer-based, no coordinates anywhere.** `ObjLooking`
makes the small object physically real:
- **Scale first** (line 158): the actual inch dimensions, "exactly the size of
  the one you might have had your tea in this morning," store-bought plainness.
  This is the right opening move and matches looking-point 6.
- **Fur over the whole set** (line 161): "not one furred object sitting on bare
  china, but a whole matched tea service gone shaggy" — cup/saucer/spoon each
  named. Concrete.
- **The lip** (line 166): "the edge you would drink from… the rim is the seam
  where Oppenheim presses the two into the same inch of space." Excellent
  prose pointer — the reader's eye is directed without a single coordinate.
- **The spoon shape** (line 169): "Its shape stays legible under the pelt; you
  can still find the bowl and the handle… the most useless of the three things."
  Hits factpack looking-point 3 exactly.
- **Use denied everywhere at once** (line 174): cup-can't-hold, saucer-can't-
  catch, spoon-can't-scoop. Matches looking-point 4.

All six factpack looking points are covered (annotations array also carries them
for the annotation UI). No blind crops, no pins, no positional coordinates.

### Findings

- **[NICE] Spoon length pointer could note the oddity of an 8-in spoon vs a 4
  3/8-in cup.** The factpack gives spoon 8 in long, cup 4 3/8 in across — the
  spoon is nearly twice the cup's width, an actually-visible strangeness in the
  set. Optional: a half-sentence in `ObjLooking` could make that proportion
  concrete ("a long spoon, near twice the cup's width"). Purely additive.

---

## 3. CLARITY + VOICE CONTRACT

**PASS — clean.** Swept for every banned move:

- **Literal `—` inside a rendered TS string:** NONE. The four literal em-dashes
  in the file (lines 1, 12, 88, 92) are all markdown headers / `//` code comments,
  never a rendered string field. Const blurbs/hook use commas, colons, and "the
  fur reads first as soft… then" constructions instead of em-dashes. Verified by
  grep.
- **`&mdash;` misuse inside a plain TS string field:** NONE. The two `&mdash;`
  uses (lines 120, 220) are inside **JSX text** (`<p>…</p>` and a `<blockquote>`),
  where an HTML entity is the correct, intended rendering. They are not inside a
  quoted const string field (`blurb`/`hook`/`detail`), so they are correct, not a
  defect.
- **Meta-narration / "what this chapter is about":** the draft mostly avoids it.
  See the one FIX below.
- **Reader-commands:** "Look at the lip…" / "Now the spoon." / "Take in the whole
  set" / "Hold that ordinariness in mind" — these are looking-section pointers,
  the sanctioned art-read register for directing the eye, not generic bossy
  reader-commands. Acceptable in a LOOKING section. Flagging the borderline ones
  below as NICE, not FIX.
- **Honesty-labels:** the title/anecdote hedging is *content* (the apocrypha
  trap the factpack demands be flagged), not a reflexive "to be honest" tic.
  Handled well ("Take the scene with a light hand," "Frame as the story goes").
- **Condescending glosses:** the inline definitions (Surrealism, found-object
  assemblage, couturière) are pitched to a smart zero-knowledge reader, not
  talked-down. Good.
- **Jargon before inline-define:** clean. "found-object assemblage" is defined in
  place (line 191: "a sculpture made by combining ready-made things rather than
  fabricating them"); "Surrealist object" as a category is built up, not assumed;
  "couturière" is glossed (line 115).
- **Walls of text:** paragraphs are reading-app sized; no wall.

### Findings

- **[FIX] One meta-narration line in `ObjCafe`.** Line 119: *"The story goes like
  this, and it is worth telling as a story, because that is what it is, a
  well-repeated account rather than a documented transcript."* The middle clause
  ("it is worth telling as a story, because that is what it is") narrates the act
  of telling — exactly the meta move the voice contract bans. The *content* (it's
  a well-repeated account, not a transcript) is required by the apocrypha gate and
  must stay; just cut the self-referential framing.
  Suggested rewrite: *"The story goes like this — a well-repeated account, not a
  documented transcript."* (render the dash as `&mdash;` in the JSX, or recast
  without it: "The story goes like this, a well-repeated account rather than a
  documented transcript.")

- **[NICE] `ObjLooking` "This is the first thing to really see" (line 161) and
  "Note how modest it is" tip toward reader-command.** Inside a looking section
  these are tolerable eye-direction, but "to really see" is slightly insistent.
  Optional softening: "The first thing to register is the fur." Not gating.

- **[NICE] "works like nothing on earth" (line 174) is a touch of editorializing
  flourish.** Mild; the plainer factpack phrasing is "works like nothing." Keep if
  you want the rhythm; flagging only for the plain-voice preference.

---

## ACCURACY SPOT-CHECK (against factpack — not the fact gate's job, but noted)

Consistent with the factpack throughout: dimensions (cup 4 3/8 / saucer 9 3/8 /
spoon 8 / overall 2 7/8 in), Chinese gazelle fur, *Object* as MoMA title with
*Le Déjeuner en fourrure* correctly attributed to **Breton not Oppenheim**, the
café anecdote framed as reported, "Purchase, 1946" with the study-collection/1963
wrinkle carried, the 1975 Basel quote with the translation-variant flag, gendered
readings kept as later reception. The fact gate owns final sign-off (esp. the
`[VERIFY @ MoMA]` numbers and the "first work by a woman" claim, which the draft
wisely only *footnotes* rather than asserts).
