# GATE READ — Storytelling + Looking + Clarity · Warhol, *Brillo Boxes* (work-read `brillo`)

**Gate:** STORYTELLING (primary) + LOOKING + CLARITY/VOICE
**Source draft:** `audits/art-pipeline/work-brillo-draft.md`
**Fact pack:** `audits/art-pipeline/work-brillo-factpack.md`

## VERDICT: PASS (with FIX/NICE notes — no BLOCKERs)

The five sections land all three required jolts: the boxes-indistinguishable-from-
groceries reveal, the carton-was-designed-by-a-painter authorship irony, and the
Danto "what makes it art?" pivot. Prose is house-voice, the Looking section is fully
prose-pointer (zero coordinates), and the draft stays accurate to the factpack
(the cardboard/readymade trap, the "around 1960" hedge, the Danto-quote-tail
restraint, the proportionate Malmö footnote). Findings below are polish, plus one
recurring voice tic worth fixing before ship.

---

## 1. STORYTELLING (primary)

The arc works: factory → making → looking → break → afterlife, with the irony
seeded in `making` and paid off again in `afterlife`. No dull/listy passages; the
brand-list in `BrilFactory` is delivered as a sentence, not a bullet dump. The three
required jolts:
- **Indistinguishable-from-groceries** — lands in `BrilFactory` ("a confused
  second, like a grocery warehouse") and is re-stated hard in `BrilBreak`. Strong.
- **Designed-by-a-painter irony** — `BrilMaking` "James Harvey" sub-section nails it,
  including the "running away with his box" beat. Strong.
- **Danto "what makes it art?"** — `BrilBreak` key-statement sub-section, with the
  verified quote and the correct restraint on the tail. Strong.

### [NICE] BrilFactory — two consecutive forward-reference tails (line ~126)
"We will get to what that confusion did to a passing philosopher. First, how the
boxes were actually made…" — back-to-back signposting. It reads fine but is the one
spot that edges toward meta-narration of structure. Optional trim: keep "First, how
the boxes were actually made, because almost everything people assume about that is
wrong." and cut the philosopher pre-tease (Danto is already promised by `BrilBreak`'s
existence). Not blocking; the line is in-voice.

### [NICE] BrilMaking — "Sit with that for a second." (line ~149)
Mild reader-direction / coaching. In-voice for this app and arguably earns its keep
on the single biggest irony, but it's the kind of phrase the voice contract flags.
Consider "And that is the irony folded into the work:" or just deleting the
sentence and starting at "The commercial graphic Warhol 'appropriated'…". Low
priority — see CLARITY note below for the paired instance.

---

## 2. LOOKING

`BrilLooking` makes the box concrete entirely through prose pointers — no
coordinates, no blind crops. It covers, in order: the cube-on-the-floor /
walk-around sculpture + dimensions; the red-white-blue design (white house-paint
ground, navy consonants / cherry-red vowels, swooping red wave); the
"24 GIANT SIZE PKGS" wholesale line + "SHINES ALUMINUM FAST" + "New!"; the silkscreen
ink sitting matte on hard wood vs. corrugated card; the handmade registration slips /
no-two-alike; and the stacking-as-inventory. That is the full factpack §5 looking
set, faithfully rendered. No findings — this section is the strongest of the five.

### [NICE] cross-section repetition (Looking vs. annotations array vs. Break)
The "ink on wood" tell and the "handmade imperfections" tell appear in the `looking`
prose, again in the `annotations` array (PART A), and the imperfections idea is also
foreshadowed in `BrilMaking` ("the registration of the print a hair off, no two
exactly alike"). This is mostly fine — annotations are a separate surface and are
*supposed* to restate the looking points — but `BrilMaking`'s pre-statement plus
`BrilLooking`'s fuller version is a small double-hit. Optional: in `BrilMaking` trim
"the registration of the print a hair off, no two exactly alike" to just "the small
slips that prove a person did this" and let `BrilLooking` own the specifics. Not
blocking.

---

## 3. CLARITY + VOICE CONTRACT

Inline-definition discipline is good: *silkscreen*, *readymade*, *provenance*, and
*Conceptual art* are each defined on first use in parentheses, before being leaned
on. No jargon-before-definition violations found. No walls of text — paragraphs are
sized for phone reading. Em-dash handling is clean: the draft uses `&ndash;` for
year ranges (1929&ndash;1965, 1924&ndash;2013) and `&rsquo;`/`&ldquo;`/`&rdquo;` for
typography; I found **no literal "—" inside a rendered string** and **no misused
`&mdash;`** in a plain TS string field. (The PART A `blurb`/`note`/`detail` fields
use commas and parens, not em-dashes — correct.)

### [FIX] Reader-command / coaching imperatives — a cluster, fix as a set
The draft leans on second-person directives to open paragraphs. Individually each is
in-voice; as a pattern it's the voice-contract reader-command tic and worth thinning:
- `BrilLooking` line ~166: **"Stand in front of one."**
- `BrilLooking` line ~171: **"Now read the surface…"**
- `BrilMaking` line ~138: **"Start with the single most common mistake…"**
- `BrilMaking` line ~149: **"Sit with that for a second."**
- `BrilLooking` line ~176: "you have to look closely for both" (mild)

Recommendation: keep **one** scene-setting imperative ("Stand in front of one." is
the best earner — it physically places the reader at a sculpture, which is the
point), and convert the rest to declaratives. E.g. "Now read the surface" →
"The surface is faithfully the real Brillo carton:". "Start with the single most
common mistake" → "The single most common mistake is the key to the whole work:".
This is a FIX (pattern-level) rather than a BLOCKER — none of these is a hard
honesty-label or condescending gloss, and the app voice tolerates the occasional
"stand in front of one."

### [NICE] "and it is real and verified, not a tidy story" (BrilMaking, line ~146)
Borderline honesty-label — narrating the *provenance of the claim* to the reader
rather than just telling them the fact. The factpack's emphasis ("VERIFIED") is for
the author, not the prose. Suggest cutting to: "Now the irony that sits at the heart
of the work." The fact carries itself; you don't need to vouch for it on the page.

### [NICE] "we will, in a moment" (BrilMaking, line ~154) and "the next chapter
walks through" / "the door the next chapter walks through" (BrilLooking line ~181)
Light structural meta-narration (telling the reader what a later section will do).
The `BrilLooking` closer ("that shift … is the door the next chapter walks through")
is the more noticeable one. Optional rewrite that keeps the momentum without naming
the chapter machinery: "…and that shift, from the unique object to the
indistinguishable multiple, is what the box does next." Not blocking.

---

## ACCURACY SPOT-CHECK (against factpack — all clear)
- Medium "Synthetic polymer paint and silkscreen ink on wood" — matches MoMA wording. OK.
- Dimensions 17 1/8 × 17 × 14 in / 43.3 × 43.2 × 36.5 cm — matches §1. OK.
- "not cardboard, not a readymade / carpenter-built plywood" — matches §8 trap. OK.
- Harvey "around 1960 (sources give 1959–1961)" hedge — matches §8 / open flag. OK.
- Danto quote = first sentence only; tail explicitly withheld with rationale — matches §4. OK.
- Malmö ~105 boxes, 1990, Hultén, 2010 "copies" board ruling, kept proportionate — matches §6/§8. OK.
- rights 'in-copyright', shown small under fair use, no prices — matches §7. OK.
- Stable Gallery 21 April 1964, ~400 boxes, both rooms — matches §2/§9. OK.

No factual drift from the pack. One micro-note: the draft's hero/looking imply the
single anchored box is "MoMA's box"; the const correctly frames it as "a
representative example; many exist," which is consistent with the §9 naming note.
No action needed.

---

## SHIP-GATE CHECKLIST (this gate's surfaces)
- [x] 5 sections compelling, non-listy, 3 jolts land
- [x] Looking section concrete via prose pointers, zero coordinates / blind crops
- [x] "Break" before/after block present and correct
- [x] Key-statement (Danto) block present, quote verified, tail correctly withheld
- [x] Inline definitions before first lean (silkscreen, readymade, provenance, Conceptual art)
- [x] No literal "—" in rendered strings; no misused &mdash; in TS string fields
- [ ] Thin the reader-command imperative cluster to ~one (FIX, non-blocking)
- [ ] Cut the "real and verified, not a tidy story" honesty-label (NICE)

**Net:** ship-ready on storytelling/looking/clarity. Apply the one [FIX]
(reader-command thinning) and the honesty-label [NICE] during reconcile; the rest are
optional polish.
