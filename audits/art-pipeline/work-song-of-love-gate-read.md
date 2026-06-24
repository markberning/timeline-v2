# GATE READ — Storytelling + Looking + Clarity/Voice

**Work:** Giorgio de Chirico, *The Song of Love* (1914) — Surrealism work-read
**Gate:** STORYTELLING (primary) · LOOKING · CLARITY + VOICE CONTRACT
**Source of truth:** `work-song-of-love-factpack.md`
**Files judged:** `work-song-of-love-draft.md` (PART A const + PART B five sections)

---

## VERDICT: PASS WITH FIXES

The draft is a strong, well-paced read. The five-section arc lands the two things
it had to land — the metaphysical strangeness (the deadpan-calm-as-trap idea is
carried cleanly across Making → Looking → Break) and "the painting that stunned the
future Surrealists a decade early" (the 1914-vs-1924 gap is set up early, paid off
in The Break, and re-rung in the afterlife). The looking section guides the eye to
every real visible feature in prose, no coordinates. Accuracy holds to the factpack
(forerunner-not-Surrealist, reproduction-not-canvas, hedged Apollo ID, hedged glove
color, motto-not-on-this-painting all correct).

No [BLOCKER]s. The fixes below are all CLARITY/VOICE-CONTRACT tics — chiefly
**meta-narration and reader-address ("we," "the painting we are about to look at,"
"we cannot give you")** and a few **honesty-labels** — plus a handful of [NICE]
pacing notes. None are ship-stopping individually, but the voice-contract cluster
should be cleaned before integrate because it is the exact register the contract
bans.

---

## 1. STORYTELLING (primary)

Overall: compelling and well-paced. Each section has a distinct job and a clean
hook→turn shape. The repetition of "a god's head, a surgical glove, a green ball,
a distant train" is deliberate and works as a refrain rather than reading as
filler. Strong closes on Making ("as if it were the most natural thing in the
world"), Looking ("a song of love sung in a language no one in the square can
hear"), and the whole-read final line.

### [NICE] Making §2 — "The objects are three" inventory risks list-feel
Location: `SngMaking`, para 2 ("The objects are three. First… Second… Third…").
The First/Second/Third scaffolding is the one place the prose tips toward a list.
It is partly redeemed by the closing dream-logic sentence, but consider dissolving
the enumeration into running prose to match the surrounding flow. Low priority —
it reads fine; it just stands out against an otherwise un-listy draft.

### [NICE] Break / Afterlife — Magritte quote appears in two sections
The Magritte "saw thought" beat is the climax of The Break (with the blockquote)
and is then re-delivered in the Afterlife close ("felt that his eyes had seen
thought for the first time"). This is intentional ring-composition and mostly
earns its keep, but the two are close enough that the Afterlife echo slightly
deflates the Break's blockquote. Optional: in Afterlife, gesture at the moment
without re-quoting the exact phrase, so the blockquote stays the single delivery.

### [NICE] Looking final para — "The Greeks had a word the painter loved"
Location: `SngLooking`, last para. "The Greeks had a word the painter loved for
this feeling" is a touch coy — the word (enigma) was already named and defined in
the Metaphysical section, and it is not Greek (de Chirico's term was *enigma* /
the Italian *enigma*, and the credo motto is Latin). Minor — but the half-allusion
invites a reader to think there's a specific Greek term being withheld. Consider
naming it plainly ("the enigma he was always after") or cutting the half-tease.

---

## 2. LOOKING

The looking section (`SngLooking`) does its job: it guides the eye to every real
visible feature via prose pointers, no coordinates, vivid and concrete.

Features covered, all by prose location not pixels:
- **marble head** — "To the upper left… the white profile of a classical statue,"
  correctly hedged (scholars' Apollo Belvedere ID vs MoMA's generic Greek head).
- **pink rubber glove** — "Beside it, tacked flat to the same wall… fingers
  hanging slack," with the hollow-mould / absent-body reading. Color hedged.
- **green ball** — "On the ground below the wall… a single plain sphere."
- **arcade** — "Around and behind everything runs the arcade, the row of arches."
- **little train + smoke** — "far off, over the wall in the upper right, the tiny
  locomotive pulls its plume of smoke."
- **scale / deadpan stillness** — opened with the "first surprise is the size"
  beat; the "calm legibility is the trap" idea carries through.

This satisfies the LOOKING requirement. Pointers are directional-but-prose ("upper
left," "the ground below," "over the wall in the upper right") — that is the
allowed form, not blind coordinates. No fix required.

Minor note (folds into Clarity below): the section's drop-cap opener "The first
surprise is the size" is mild meta-framing ("surprise" addressed to the reader),
but it is borderline and arguably part of the looking payoff — see [FIX] L-1.

---

## 3. CLARITY + VOICE CONTRACT

The voice contract bans meta-narration, reader-commands, honesty-labels,
condescending glosses, jargon-before-define, walls of text, and literal "—" /
misused `&mdash;` inside plain TS string fields. Findings:

### [FIX] V-1 — Reader-address / meta-narration: "the painting we are about to look at"
Location: `SngMetaphysical`, para 3:
"That line belongs to the self-portrait, not to the painting **we are about to
look at**, but it is the credo behind all of it."
This is meta-narration about the read's own structure ("about to look at") plus
first-person-plural reader-address. Rewrite to state the fact without staging the
chapter:
> "That line belongs to the self-portrait, not to *The Song of Love* — but it is
> the credo behind all of it."

### [FIX] V-2 — Reader-address: "before we go further"
Location: `SngMetaphysical`, para 4 (opening):
"One thing has to be said plainly **before we go further**, because it is the
most-repeated error about this picture."
Both "before we go further" (meta-narration of the read's progress) and the
"has to be said plainly" honesty-label. Rewrite to just say the thing:
> "The most-repeated error about this picture is worth correcting up front:
> de Chirico was not a Surrealist."

### [FIX] V-3 — Reader-address / honesty-label: "We cannot give you what he paid"
Location: `SngAfterlife`, para 2:
"**We cannot give you** what he paid, because no purchase figure survives in the
record, and a blank is better than an invented number."
First-person-plural address + a meta honesty-label ("a blank is better than an
invented number") narrating the pipeline's own sourcing discipline at the reader.
The reader should not be told about the authoring rule. Rewrite:
> "No purchase figure survives in the record, so the price is unknown."

### [FIX] V-4 — Honesty-label cluster in the Break note paragraph
Location: `SngBreak`, the parenthetical muted para after the blockquote:
"(A note on the wording, since translations vary… And **it bears repeating** that
Magritte saw a reproduction…)"
"A note on the wording" + "it bears repeating" are honesty/meta labels. The
translation-variant point and the reproduction caveat are both legitimately
worth keeping (factpack §8 flags both), but deliver them as plain content, not as
a flagged aside about the text's own caution:
> "Translations vary: the French *la pensée* is sometimes rendered 'my eyes saw
> the mind,' though 'thought' is the standard English. And the picture Magritte
> saw was a reproduction Lecomte showed him, not the canvas."

### [FIX] V-5 — Reader-command / meta: "The first surprise is the size"
Location: `SngLooking`, para 1 opener.
"surprise" frames a reaction on the reader's behalf — mild reader-direction. It is
the gentlest of the cluster and is doing real work (the small-scale reveal is a
genuine looking payoff). Soften rather than cut:
> "It is small — that is the first thing reproductions get wrong."
(states the fact; drops the "surprise" reader-reaction framing)

### [FIX] V-6 — `&mdash;` rendered as the dash glyph "— " inside a plain string field (`hook`)
Location: PART A const, `hook` — actually clean (uses commas), no action. BUT
check the dash usage across const string fields generally:
- `annotations[].detail` and `blurb` fields use literal commas and parens, not em
  dashes — **good** (these are plain TS string values where a literal "—" or a
  raw `&mdash;` would render as garbage or an unintended glyph).
- The `&mdash;`/`&ndash;`/`&rsquo;` entities appear ONLY inside the JSX (PART B)
  prose, where they render correctly. **No misuse found in plain string fields.**
This item is a PASS — noted explicitly because it is a required check. No fix.

### [NICE] V-7 — "one thing above all," "one effect above all" stacking
Location: `SngMetaphysical` para 3 ("He was after one effect above all, and he had
a word for it"). Reads slightly as authorial throat-clearing ("and he had a word
for it" delays the payoff word "enigma"). Minor; could tighten to "He was after
one effect above all: the enigma." Not a contract violation.

### [NICE] V-8 — "stand in front of it" / second-person drift in Afterlife
Location: `SngAfterlife`, para 3: "a small upright square that **you** can stand
in front of in a few minutes' walk." Second-person "you" is a softer register than
the "we" violations and is arguably acceptable evocative prose, but flagging for
consistency since V-1..V-3 strip the reader-address elsewhere — leaving this lone
"you" may read unevenly. Author's call; not ship-blocking.

### Jargon check — PASS
Every term is inline-defined on first use: *pittura metafisica* / Metaphysical
painting (defined), enigma (defined), piazza ("a town square"), arcades ("rows of
arches on columns"), provenance ("the documented chain of who has owned it"),
Cubism (characterized in The Break), Apollo Belvedere ("a celebrated antique
marble of the god Apollo"). No undefined jargon.

### Walls of text — PASS
No paragraph runs to a wall; longest are ~5–6 sentences and well-broken. Pacing is
fine.

### Condescending glosses — PASS
Definitions are matter-of-fact, not talking down. ("does not mean spiritual or
occult; it means…" is a clean disambiguation, not condescension.)

---

## ACCURACY SPOT-CHECK (against factpack — not the primary gate, but flagged)

- Forerunner-not-Surrealist: correct and emphasized (§8.7). ✓
- Magritte saw a **reproduction**, 1922, via Lecomte: correct (§8.1). ✓
- Quote wording "my eyes saw thought for the first time," with the *la pensée*
  variant flagged: correct (§4A, §8.1). ✓
- Glove color hedged pink/red, Apollinaire = pink: correct (§8.2). ✓
- Head hedged Apollo Belvedere vs MoMA generic: correct (§8.3). ✓
- Motto on 1911 self-portrait, NOT on this painting: correct (§8.6). ✓
- Railway-father reading presented as interpretation not fact: correct (§2, §8). ✓
- Date June–July 1914, small panel, MoMA 950.1979, Rockefeller bequest 1979,
  bought ~1950 from Raval: all match (§1, §6). ✓
- **Dimensions note (not an error):** const uses `1 ft 11 1/4 in` for width;
  factpack rounds to `1 ft 11 3/8 in`. The true conversion of 59.1 cm = 23.27 in
  = 11¼ in over a foot, so the draft is actually the MORE accurate figure; the
  factpack's ⅜ is the looser rounding. Draft is internally consistent (uses 11¼
  in const + "under two feet wide" in prose). No fix.

---

## SUMMARY OF FIXES
- **[BLOCKER]:** none.
- **[FIX] (voice contract — clean before integrate):** V-1 "about to look at" /
  V-2 "before we go further" + honesty-label / V-3 "we cannot give you" +
  honesty-label / V-4 "a note on the wording…it bears repeating" honesty-labels /
  V-5 "the first surprise is the size" reader-reaction framing. V-6 dash/entity
  check = PASS (no misuse in string fields).
- **[NICE] (optional polish):** Making First/Second/Third de-listing · Afterlife
  Magritte re-quote dampening the Break blockquote · Looking "the Greeks had a
  word" coy half-allusion · "one effect above all" throat-clearing · lone "you"
  in Afterlife.
