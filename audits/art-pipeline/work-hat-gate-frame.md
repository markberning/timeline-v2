# GATE — COMPREHENSIVENESS + FRAMING/FAIRNESS

**Work:** Matisse, *Woman with a Hat (Femme au chapeau)*, 1905, SFMOMA.
**Gate:** web-enabled comprehensiveness + framing/fairness.
**Reviewed:** `work-hat-draft.md` against `work-hat-factpack.md` + live web (SFMOMA
"From Scandal to Icon" + 2026 exhibition press, Wikipedia *Woman with a Hat* and
*Sarah Stein*, Smithsonian *Steins*, Met *The Steins Collect*).
**Verdict: NOT CLEAN — 1 BLOCKER, 4 FIX, 4 NICE.** One framing issue (erasure of
Sarah Stein) is ship-blocking; the rest tightens completeness. No factual error
in the prose contradicts the record; the issues are about who gets credit and
what the reader is left not knowing.

---

## FRAMING / FAIRNESS

### [BLOCKER] Sarah Stein is erased from the picture's own launch story
The draft tells the whole "the buyers who changed everything" beat as **Leo and
Gertrude** alone, and only introduces **Michael and Sarah Stein** as the people
the painting "passed to" at the ~1913–14 family split, described flatly as
"devoted Matisse patrons." That ordering quietly writes the most consequential
Matisse champion of the family out of the moment that mattered.

What the record actually says:
- SFMOMA's own "From Scandal to Icon" frames the buyers as **the Stein family —
  "Michael, Sarah, Leo, and Gertrude"** — who bought it soon after the showing.
- Wikipedia's *Sarah Stein* article: the painting was **"their first purchase
  (with Leo and Gertrude) of *Woman with a Hat* at the Salon d'Automne in 1905"** —
  i.e. Sarah and Michael were party to the 1905 acquisition, not just later heirs.
- Sarah, not Leo or Gertrude, was Matisse's **most ardent and durable** patron:
  she co-bought *The Green Stripe* the same year, persuaded Matisse to open his
  painting academy (1908) and kept the best surviving record of his teaching, ran
  the rue Madame salon devoted to him, and **is the reason the painting (and
  Matisse) reached San Francisco at all.** The draft's San Francisco arc is
  literally Sarah's doing, yet she appears as a footnote.

This is exactly the "erasure of women/collaborators" failure this gate exists to
catch — the female collector who built the through-line gets one subordinate
clause while the male sibling's recoil-then-buy gets two full paragraphs.

Note a genuine source tension to handle, not paper over: the *Woman with a Hat*
Wikipedia article credits **only Leo and Gertrude** with the 1905 purchase, while
SFMOMA and the *Sarah Stein* article frame it as a family/Sarah-included buy. So
do not flip to "Sarah bought it" as settled fact either — that would be the same
error in reverse.

- **Exact text (draft, Afterlife §, opening):** *"Into this hostile room walked
  the two people who would change everything for the painting and for Matisse:
  **Leo and Gertrude Stein**…"* and (Afterlife §, travel paragraph) *"…passed to
  their brother and sister-in-law, **Michael and Sarah Stein**, who were the most
  devoted Matisse patrons in the family."*
- **Fix:** Give Sarah her due in the launch beat and the San Francisco beat.
  Minimal, source-honest patch:
  1. In the buyers' intro, widen the agent: *"…the people who would change
     everything for the painting and for Matisse: **the Stein family** — the
     American expatriate siblings **Leo and Gertrude**, and Leo's brother
     **Michael** and his wife **Sarah**, soon to be the avant-garde's first great
     patrons. Leo, the family's connoisseur, did the haggling and recorded the
     famous recoil; but the Stein who would prove the most devoted, durable
     champion Matisse ever had was Sarah."* (Keep the price/recoil detail on Leo,
     since that's what the sources attach to him.)
  2. In the travel paragraph, make Sarah the actor, not the recipient: she and
     Michael are why the picture crossed the Atlantic — *"Sarah Stein, who had
     persuaded Matisse to open his own painting school in 1908 and was the family's
     fiercest believer in him, and her husband Michael carried the painting to the
     San Francisco Bay Area in 1935."* This is documented and turns the SF arc
     from passive ("the painting traveled") into the agency of the person who
     actually moved it.
  3. Add Sarah to `figures[]` (see [FIX] below) so the nameplate row reflects who
     mattered.

### [FIX] `figures[]` lists five people and omits the one who carried it to SFMOMA
The `figures[]` array is Matisse, Amélie, Leo, Gertrude, Vauxcelles. Given the
draft's whole back third is the road to San Francisco, **Sarah Stein's absence
from the nameplates is conspicuous** — and the fact pack itself (§6) names "Sarah
& Michael Stein" and "Elise S. Haas" as figures "for the afterlife/provenance
beat." The reader meets Sarah in the prose (after the fix above) but the visual
cast row still hides her.
- **Fix:** Add a nameplate, e.g. `{ name: 'Sarah Stein', role: 'The patron who
  carried it to San Francisco', palette: […] }`. Optionally Elise Haas too, but
  Sarah is the load-bearing add. (Five→six is fine; this is the same vertical's
  norm.)

### [NICE] Amélie is the model and the milliner, but never an agent
The draft lands the milliner irony beautifully and twice calls her his "business
partner" and "household manager" — good, that's more than most treatments give
her. One missed beat that would round her out without inventing anything: Amélie's
own documented reaction to the scandal (she is quoted, per Wikipedia, as saying
something to the effect that she is in her element "when the house is burning" —
i.e. unbothered by the uproar over her own face). If verifiable to a clean source
at gate-1, a one-line "the sitter herself was unfazed" beat would convert her from
passive surface-being-painted into a person with a view on the storm. Optional;
do not add if it can't be cleanly sourced.

### [NICE] "genius" / inflation check — mostly clean, one phrase to watch
No genius-myth problem in the body; the draft is careful ("not remotely famous,"
hedges the price, kills the Loubet legend, explicitly refuses "first Fauve
painting"). Good. One small note: the closing line *"Every painter who came after
inherited that permission, whether they knew his name or not"* is a sweeping
single-artist-changed-everything flourish. It's defensible as movement-altitude
rhetoric and the draft has earned restraint everywhere else, so this is NICE-only —
but if trimming, that's the one sentence that leans toward the great-man register.

---

## COMPREHENSIVENESS

### [FIX] The "why it matters" is asserted but never mechanically explained — color *as structure*
The web-significance of this painting is not only "color freed from description"
(the draft's close) but the stronger, specific claim that **color is doing the
structural work that drawing/modeling used to do** — it builds the form, the
light, and the shadow, not just the mood. SFMOMA and the survey sources make this
the point: brushwork and color *replace* tonal modeling as the thing that
constructs the figure, which is the lineage that runs forward into Cubism and
Expressionism. The draft's `looking` section shows this happening (green standing
in for shadow, no modeling) but never names the payoff: that this is **color taking
over the job of structure**, the hinge that makes the picture matter beyond "pretty
shocking colors."
- **Fix:** In the Looking or Afterlife close, add one sentence naming it: the
  radical move isn't bright color, it's that **color is now carrying the structure**
  — building the head, standing in for shadow and light — work that for four
  centuries belonged to drawing and tonal modeling. That's the specific reason it
  is a founding document, and it sets up the lineage `children` (Cubism /
  Expressionism / modern color painting) the const already claims.

### [FIX] The lineage `children` claim "German Expressionism" + "Modern color painting" is never paid off in prose
`lineage.children` lists Fauvism, German Expressionism, and Modern color painting,
and the prose says "every painter who came after inherited that permission." But
the body never gives the reader a single concrete downstream — no Kandinsky/Die
Brücke, no through-line to Cubism (which the web sources explicitly name as a
consequence of the Fauve color-and-brushwork break). A reader finishes not knowing
*who* inherited the permission.
- **Fix:** One concrete forward sentence in the Afterlife close, e.g. that the
  German Expressionists (Die Brücke / Der Blaue Reiter) and, more broadly, every
  later painter who used color non-descriptively built on this opening. Keeps the
  claim from being a bare assertion. (Keep it terse — this is a WORK read, the
  movement read carries the full lineage.)

### [FIX] The Steins' salon — the actual mechanism by which this picture "launched" people — is named but not shown
The draft says the Steins "would go on to buy Matisse and Picasso by the
wall-full, and their Saturday-evening apartment became the room where the future
of painting got introduced to itself." That's the right beat but it's a single
clause. The web sources make the salon central: the **Saturday-evening open houses
(rue de Fleurus for Leo/Gertrude; rue Madame for Michael/Sarah) introduced a
generation to Matisse and Picasso before any museum did**, and that is the real
reason buying this one picture "launched the Steins as collectors" mattered for art
history. The draft asserts the consequence ("hinge of several careers") without
the one fact that makes it legible — that this painting was the **first acquisition
of the collection that became the avant-garde's salon**.
- **Fix:** Strengthen the existing clause into a sentence that names what the salon
  *did*: it was where Matisse and Picasso were shown to the public-that-mattered
  years before museums would touch them, and *Woman with a Hat* was its founding
  purchase. Small expansion, large payoff for "why does this sale matter."

### [NICE] No mention that *Woman with a Hat* and *The Green Stripe* hang in the same family-of-1905-Amélie-portraits story
The draft (correctly, per the hard fact-pack flag) goes to great lengths to keep
*Woman with a Hat* and *The Green Stripe* from being confused — good, that's the
single most important comprehension move and it's executed well. A small
completeness add, not a correction: per the *Sarah Stein* source, **Sarah herself
bought *The Green Stripe* in 1905**, the same year, the sister portrait of the
same wife. If the Sarah-Stein fix above goes in, a half-clause noting she owned the
*other* 1905 Amélie portrait would tie the two pictures (and Sarah's role) together
elegantly. Purely optional enrichment.

### [NICE] The 2026 SFMOMA exhibition context is in the fact pack but absent from the read
Fact pack §3/§8 notes the painting currently anchors SFMOMA's 2026 exhibition
*Matisse's Femme au chapeau: A Modern Scandal*. The draft says only "on permanent
view." Not required for an evergreen read (and arguably right to omit, since
exhibitions rotate), so NICE-only — flagging that the choice to drop it is fine,
not an oversight to fix.

---

## WHAT'S ALREADY RIGHT (so the reviser doesn't over-correct)
- Green-stripe non-conflation: handled thoroughly and correctly in three places.
- Price dispute: honest range, no settled number — exactly right.
- "Black, of course" / Loubet legend: framed/dropped per the flags.
- "First Fauve painting" overclaim: explicitly refused in the Scandal section — a
  model of the anti-overclaim move this gate wants.
- Amélie-the-milliner irony: landed, sourced, and not over-egged.
- Eurocentric / "first-ever" scan: no improper "first-ever" claims; the only
  "first modern-art scandal" framing is hedged and is the documented consensus.

---

## SUMMARY FOR THE COORDINATOR
| # | Sev | Issue |
|---|---|---|
| 1 | BLOCKER | Sarah Stein erased from the launch + SF arc (female patron who actually carried it to SFMOMA reduced to a clause); widen 1905 buyers to the Stein family, make Sarah the agent of the SF move — without flipping to "Sarah bought it" as settled (sources differ). |
| 2 | FIX | Add Sarah Stein to `figures[]` (fact pack §6 already names her). |
| 3 | FIX | Name the real significance — color *as structure*, not just "freed from description." |
| 4 | FIX | Pay off the `children` lineage claim with one concrete downstream (Expressionism/Cubism). |
| 5 | FIX | Show what the Steins' salon *did* — this picture was its founding purchase; salon introduced Matisse/Picasso pre-museum. |
| 6 | NICE | Amélie's own unfazed reaction to the scandal (verify source). |
| 7 | NICE | Trim the great-man flourish in the close (optional). |
| 8 | NICE | Sarah bought the sister portrait *The Green Stripe* in 1905 — ties the two pictures together. |
| 9 | NICE | 2026 SFMOMA exhibition — fine to omit (evergreen). |
