# Post-Impressionism — Gate 4 (CLARITY) audit

**Auditor role:** sentence-level read for a zero-knowledge phone reader.
**Subject:** `audits/art-pipeline/postimp-draft.md` (eight chapters + hook).
**Bar:** Where does a sentence make the reader stop and re-read? Where is a
referent ambiguous, a jargon term unglossed, a pronoun's antecedent ten
paragraphs back? Reads on a phone, in portrait, with no prior knowledge.

Per-chapter grade key: **CLEAR** (ships as-is), **MINOR** (small clarifications
before ship), **MUST-FIX** (sentence-level rewrites required).

---

## Cross-cutting findings (apply across multiple chapters)

These are the patterns that recur. Each chapter section below references them
by short tag.

### A. Imperial / cm violation — RECURRING, MUST-FIX corpus-wide

The draft is mostly clean on dimensions (`ft / in` throughout the Cézanne
*Bathers*, *Card Players*, *La Grande Jatte*, *Bedroom in Arles*, *Starry
Night*, *At the Moulin Rouge*, *Where Do We Come From?*, etc.), but two
explicit slips ship cm and must be killed per CLAUDE.md house rule
(`feedback_art_dimensions_imperial`):

- **Ch 1 (`why`), opening paragraph of the SectionHeader "Aix-en-Provence —
  A mountain that refuses to dissolve":** *"500 miles to the south."*
  Actually fine — miles-first is the rule. **No fix.** (Flagging only because
  I checked it carefully — leave as-is.)
- **Ch 1 (`why`), same section:** *"Mont Sainte-Victoire — a long limestone
  ridge rising about a mile out of the plain east of the town of Aix."*
  Fine — "a mile" is imperial. Leave.
- **Ch 4 (`van-gogh`), Auvers section:** *"then thirty kilometers north of
  Paris to the village of Auvers-sur-Oise."* **MUST-FIX.** Convert to miles
  first: *"then about twenty miles north of Paris to the village of
  Auvers-sur-Oise."* (Optional parenthetical km, but unnecessary.)
- **Ch 4 (`van-gogh`), Saint-Rémy:** *"the asylum at Saint-Paul-de-Mausole,
  in Saint-Rémy-de-Provence, fifteen miles north of Arles."* Fine, miles
  first. Leave.

No literal `cm` token survives in the text. Good. The single km violation is
Auvers.

### B. Em-dash for definitions — RECURRING, SHOULD-FIX

House rule (CLAUDE.md "Writing Rules"): **use parentheses for definitions,
not em-dashes.** The draft uses em-dashes-as-definition all the way through.
Some are legitimate em-dash usage (a true aside, a pause); many are
definition-introducers that should be parens. The pattern is so pervasive
that listing every instance would balloon this report — instead I flag the
clearest definition-shaped uses per chapter and recommend a sweep pass.

Definition shape to flag: `Term — gloss/definition — rest of sentence`,
where the em-dashed material is unambiguously *defining* the term.

Pure em-dash for emphasis or rhetorical pause is fine and should be kept.

### C. Unglossed jargon on first use — RECURRING

The factpack-fed draft has done good work on most terms (Pont-Aven gets
glossed, Nabis gets glossed, pointillism gets glossed, etc.), but a handful
still slip past:

- **Synthetism** (Ch 1, end of bullet list referring to Cézanne/Gauguin/etc.;
  Ch 5 first SectionHeader "Brittany, Bernard, and a red field" — glossed
  fairly when it appears as a defined term, but the bullet at Ch 1 names
  *Synthetism* implicitly via "flat color and symbol" without the word).
  Acceptable in Ch 1 because the word isn't there yet. **No fix Ch 1.**
- **cloisonnisme** — Ch 5, first proper use is parenthetical: *"sometimes
  also cloisonnisme, after the cloisonné enamels…"* — that's adequate. **No fix.**
- **Néo-Impressionnisme / Néo-Impressionnistes** — Ch 2 introduces it in a
  list-style gloss; Ch 6 introduces it again as a term Fénéon coined.
  Adequate on both. **No fix.**
- **Symbolistes / Symbolist** — Ch 2 names the *Symbolistes* in a list, with
  "(Odilon Redon and the painters of dreams)" as the gloss. Adequate. But
  Ch 5 ("the Symbolist writers Mallarmé and Charles Morice") and Ch 7
  ("Redon connects Post-Impressionism to the Symbolist movement in
  literature (Mallarmé, Maeterlinck)") both use *Symbolist* as if defined —
  fine, since Ch 2 set it up.
- **chromo-luminarisme** (Ch 6) — glossed as a name Seurat used "that did
  not stick." Adequate.
- **abonnés** — does NOT appear in the draft. **No fix.**
- **Salon des Indépendants / Salon d'Automne** — both glossed at first use.
  Salon d'Automne first appears in Ch 2 (*"the Salon d'Automne (the
  modernist annual exhibition founded in Paris in 1903 as an alternative
  to the official Salon)"*) and again in Ch 3. Salon des Indépendants gets
  its full setup at Ch 6 ("Paris · 1884 — A jury-free Salon"). Adequate.
- **Les XX** (Ch 4, Red Vineyard sale) — glossed: *"Les XX ('the Twenty'),
  the avant-garde Belgian exhibiting society's annual show."* Adequate.
- **Salon** (Ch 1) — *"the Salon (the official state-run annual exhibition,
  the only door to a career in French art for two centuries)"* — adequate.
- **Académie Julian** (Ch 7) — glossed adequately on first use.
- **Bois d'Amour** (Ch 7) — glossed as a small wood by the river. Adequate.

So jargon coverage is genuinely good. The one term I would flag harder is
**Divisionism** itself: Ch 6 introduces it as the technique-name and gives
the alternate label *Pointillism*. Ch 2 also gives a one-line definition
in the Seurat paragraph. But the **Ch 1 opening reveal of *La Grande Jatte***
uses "pointillist" colloquially without yet glossing it — adequate for that
chapter, because the *dots* are visually described first and the word
*pointillist* comes much later (Ch 1, "a 26-year-old has finished a vast
pointillist canvas"). A zero-knowledge reader has by then seen "dots laid
down like a mosaic" — the visual gloss is sufficient. **No fix.**

### D. Pronoun-antecedent slips — RECURRING in Ch 2 (`five`) and Ch 7 (`nabis`)

These chapters are by design multi-figure: each names many painters in
sequence. Pronouns can drift. Specific instances flagged in those chapters
below.

### E. Cross-chapter ref form — RECURRING

CLAUDE.md says: **terse "(Chapter 5)" form, not "we'll get to in" / "as
discussed in."** The draft is mostly compliant — chapter references mostly
appear as parenthetical *(Chapter X)*. But several instances of *we'll get
to / as we'll see / hold this for* etc. slip in. Per-chapter flags below.

### F. Inline tags — NONE FOUND

I searched for `[VERIFY]`, `[FACT pack]`, `[TK]`, `[?]`, `[citation]`,
`[CONFIRM]`. **No inline tags survive in the draft.** Clean.

### G. Em-dash density — RECURRING, the draft over-relies on em-dashes

Not a CLAUDE.md rule, but a clarity concern: many sentences chain 3–4
em-dashed clauses, which on a phone in portrait mode break the eye-flow.
The art-pipeline storytelling-first standard tolerates rhythmic dashes;
the clarity standard pushes back when 4+ clauses chain off a single
sentence. Specific instances flagged per chapter.

---

## Movement hook + hookLong

**Grade: CLEAR.**

The two lead paragraphs read cleanly on a phone. *"Five painters who never
agreed about anything got grouped together by an English critic in a London
gallery twenty-four years after the youngest of them had painted his best
picture. The label stuck. None of them ever heard it."* This is the kind of
opening that respects a zero-knowledge reader — the gist is in the first
sentence; you don't need to know who Roger Fry is yet.

The hookLong introduces every key proper noun (Cézanne, Van Gogh, Gauguin,
Seurat, Toulouse-Lautrec, Roger Fry) with a one-word characterization, which
is the right pattern. No fixes.

NICE-TO-HAVE: "the youngest of them had painted his best picture" — the
youngest is Toulouse-Lautrec, and the claim is debatable (was *At the Moulin
Rouge* his best?). A defender would say *his most influential picture* or
*his best work*. But for clarity, the line is fine — a zero-knowledge reader
takes it as rhetorical scene-set, not a ranking claim.

---

## Chapter 1 — `why` ("After the moment, the structure")

**Grade: MINOR.**

The chapter does its job: it sets the scene at the 8th Impressionist Show,
introduces Seurat and *La Grande Jatte*, names the four answers (weight /
feeling / meaning / science) with anchor-quotes for each, and ends in
Provence with Cézanne facing the mountain. The structure is clean.

### MUST-FIX

None. (No sentence is genuinely confusing on first read.)

### SHOULD-FIX

1. **First sentence of the opening SectionHeader is heavy:** *"Picture a
   long, hot, awkward upstairs room in Paris in the late spring of 1886,
   above a fashionable restaurant called the Maison Dorée on rue Laffitte."*
   On phone: that's 30 words in one sentence with three adjective stacks
   ("long, hot, awkward"). Recommend splitting after "1886":
   *"Picture a long, hot, awkward upstairs room in Paris in the late spring
   of 1886. It sat above a fashionable restaurant called the Maison Dorée,
   on rue Laffitte."*

2. **The Salon definition is em-dash-as-definition** (cross-cutting B):
   *"Monet, Renoir, Sisley and Caillebotte have all defected back to the
   Salon (the official state-run annual exhibition, the only door to a
   career in French art for two centuries) for this round."* This one is
   already parenthetical and correct. **No fix on this sentence.** Leaving
   it here because I checked; it's actually compliant.

3. **The four-bullet "objection" block** (Weight / Feeling / Meaning /
   Science) uses em-dashes to introduce the painter-quote at the end of each
   bullet: *"— Cézanne, in Aix."* — that's the legitimate em-dash use
   (attribution). Keep.

4. **Aix paragraph, Cézanne's intro:** *"a stocky, awkward, doubt-ridden
   man who has been ridiculed in Paris for twenty years, who showed in only
   two of the Impressionist exhibitions (the first, in 1874, and the third,
   in 1877) and quietly withdrew, and who is now painting essentially in
   isolation."* 4-clause stack. Phone-clean rewrite: *"He is stocky,
   awkward, doubt-ridden. He has been ridiculed in Paris for twenty years.
   He showed in only two of the Impressionist exhibitions — the first
   (1874) and the third (1877) — then quietly withdrew. He is now painting
   essentially in isolation."*

5. **Cross-chapter ref form** (cross-cutting E): *"(He will say it, much
   later, in a famous letter we'll get to in Chapter 3: nature should be
   treated by means of the cylinder, the sphere, the cone.)"* — the
   "we'll get to in" is the form the rule retires. Terse rewrite: *"(He
   will say it in a famous letter — Chapter 3 — that nature should be
   treated by means of the cylinder, the sphere, the cone.)"*

### NICE-TO-HAVE

- The aside *"The Impressionists had figured out how to put the instant on
  canvas — the optical truth of a single moment, before the light changed
  and ruined it. (The previous level of this read tells that story in
  full.)"* — the parenthetical "previous level of this read" is structural
  scaffolding that may not render in the integrated reader. Confirm at
  integration whether to keep or strip.

---

## Chapter 2 — `five` ("Cézanne, Van Gogh, Gauguin, Seurat, Lautrec")

**Grade: MUST-FIX.**

This chapter is exactly the kind the brief flagged: multiple named figures,
each in their own paragraph, pronouns travelling across paragraph breaks.
Some pronoun antecedents drift. Most paragraphs are clean; a few sentences
pack 4+ clauses. The bones are good — the chapter does the job — but it
needs a sentence-level pass.

### MUST-FIX

1. **Cézanne paragraph, opening, *Monet is only an eye* quote attribution.**
   The text reads: *"(His own line about Monet, reported later by Émile
   Bernard: Monet is only an eye, but what an eye! — an admiring insult.)"*
   On a phone, "his own line" is technically Cézanne's, but the surrounding
   paragraph has just introduced "Monet" as the subject of Cézanne's
   contempt; a reader scanning fast can briefly read "his own line" as
   referring to Monet himself. Recommend: *"(Cézanne's own line about
   Monet, reported later by Émile Bernard: 'Monet is only an eye — but what
   an eye!' — an admiring insult.)"* Add the name; drop the pronoun.

2. **Van Gogh paragraph, the asylum sentence:** *"He spent two and a half
   years working at top speed — Arles, then the asylum at Saint-Rémy, then
   the village of Auvers-sur-Oise — produced something like 900 paintings
   in his life, sold very few of them for actual money, and died by gunshot
   in a field outside Auvers in July 1890 at age 37."* This is one sentence
   doing five jobs (timespan, three locations, output count, sales, death).
   On phone: too dense. Split: *"He spent two and a half years working at
   top speed — Arles, then the asylum at Saint-Rémy, then the village of
   Auvers-sur-Oise. He produced something like 900 paintings in his life
   and sold very few of them for actual money. He died by gunshot in a
   field outside Auvers in July 1890, at age 37."*

3. **Gauguin paragraph, the parenthetical:** *"(he lost his job in the 1882
   Paris stock-market crash and decided that since he was broke anyway he
   might as well be a painter)"* — fine, but the lead sentence around it
   ("An ex-stockbroker … who came up through Impressionism but quickly
   decided it was too literal") is a 35-word lead before the reader meets
   the first verb. Recommend a hard split: *"He was an ex-stockbroker. (He
   lost his job in the 1882 Paris stock-market crash and decided that
   since he was broke anyway he might as well be a painter.) He came up
   through Impressionism but quickly decided it was too literal."*

4. **Seurat paragraph, the color-theory load:** *"He read color theory:
   Michel Eugène Chevreul's 1839 book on the law of simultaneous contrast
   of colors (a French chemist's discovery that two colors placed side by
   side will alter each other in the eye, the basis of every later
   instinct about complementary shadows), and the American physicist Ogden
   Rood's Modern Chromatics (1879, translated into French in 1881)."* This
   is one sentence with two named books, two parenthetical glosses, and
   four dates — on a phone, the reader will lose the verb. Recommend
   splitting after "color theory:" and listing as a real list, not as a
   compound predicate. (Acceptable rewrite: bullet-form two books with
   one-line glosses each. Or break to two sentences.)

5. **Toulouse-Lautrec paragraph, the cause-of-death tangent:** *"The
   medical cause is inferred, not proven — modern best guess is
   pycnodysostosis, a rare inherited disorder so closely associated with
   him it is sometimes called 'Toulouse-Lautrec syndrome,' but no autopsy
   was done, and the diagnosis is a 20th-century guess from his case
   history."* This is a 5-clause sentence packing a hedge, a diagnosis, an
   eponym, and two pieces of evidence. Split: *"The medical cause is
   inferred, not proven. The modern best guess is pycnodysostosis (a rare
   inherited bone-density disorder so closely associated with him it is
   sometimes called 'Toulouse-Lautrec syndrome'). No autopsy was done;
   the diagnosis is a 20th-century guess from his case history."*

6. **The last SectionHeader paragraph, antecedent slip:** *"They got
   grouped because, in 1910, an English critic named Roger Fry needed a
   name for a roomful of pictures he had borrowed for a London gallery —
   Cézanne, Van Gogh, Gauguin, Seurat, Lautrec, plus a wider cast of
   younger Frenchmen the public had also never seen. By 1910, Cézanne had
   been dead four years, Van Gogh twenty, Gauguin seven, Seurat nineteen,
   Lautrec nine. Not one of the five painters Fry was naming was alive to
   argue with him."* This is actually well-formed — pronouns are clean
   and the list is parallel. **No fix.** Including it here as a positive
   example.

### SHOULD-FIX

7. **The chapter's first sentence:** *"If you had walked into an
   art-historical lecture in Paris in 1905 and asked, 'who are the
   Post-Impressionists?', you would have got a blank look."* — fine, but
   the "art-historical lecture" framing is academic-sounding. Recommend:
   *"If you had stood up in a Paris art lecture in 1905 and asked, 'who
   are the Post-Impressionists?', you would have got a blank look."*

8. **The list of French categories** in the first SectionHeader includes
   *Néo-Impressionnistes*, *Synthétistes / École de Pont-Aven*, *Nabis*,
   *Symbolistes* — all glossed inline. Fine. But the gloss for **Nabis**
   here is *"a younger group orbiting around the Pont-Aven idea — we get
   to them in Chapter 7"* — the "we get to them" violates cross-cutting E.
   Terse rewrite: *"a younger group orbiting around the Pont-Aven idea
   (Chapter 7)."*

9. **Cézanne paragraph, the Cubism payoff:** *"Picasso and Braque were
   there. Within months they had started Cubism."* Clean. Keep. (Positive
   example.)

### NICE-TO-HAVE

- Gauguin paragraph: *"and the name stuck to the cluster of painters who
  worked there with him (the École de Pont-Aven, 'school of Pont-Aven')"*
  — the gloss is redundant for a reader of any English (Pont-Aven is the
  village, "school of" is obvious). The translation is fine but could be
  cut.
- Lautrec paragraph: *"He finished his life at about 5 ft tall on a normal
  adult torso."* — "on a normal adult torso" is a beat the reader may have
  to re-read to parse. Consider: *"He grew to about 5 ft tall — adult-sized
  torso, child-sized legs."*

---

## Chapter 3 — `cezanne` ("The mountain refuses to dissolve")

**Grade: MINOR.**

A single-protagonist chapter, so pronouns are easy. The big bursts of
material — the *Card Players* / *Bathers* / *Mont Sainte-Victoire* section,
the 15 April 1904 letter, the October 1906 death and the 1907 retrospective
— each get their own SectionHeader, which is good phone pacing. The chapter
reads cleanly.

### MUST-FIX

1. **The Card Players paragraph, dimension stack:** *"The five canvases run
   from the largest at the Barnes Foundation in Philadelphia (about 4 ft 5
   in × 5 ft 11 in, five figures — three players plus two onlookers) down
   to the smallest at the Musée d'Orsay, Paris (about 1 ft 6¾ in × 1 ft 10½
   in, just two players)."* The number string "1 ft 6¾ in × 1 ft 10½ in"
   is hard to parse on a phone — three fractional measurements in a row.
   Acceptable: round to *"about 1 ft 7 in × 1 ft 10 in"* and lose the
   fractional precision a reader doesn't need. Or convert to inches:
   *"about 19 × 22 in."*

2. **The 15 April 1904 SectionHeader, the manuscript citation:** *"(the
   original is at the Courtauld Gallery in London; the manuscript number
   is ms-1932-SC-1-1, acquired with the Samuel Courtauld bequest of
   1932)"* — the manuscript number is gate-friendly provenance but a
   phone reader doesn't need it inline. Move to a footnote / drop, or
   collapse to *"(the original is at the Courtauld Gallery in London)."*

### SHOULD-FIX

3. **The opening of the Jas de Bouffan paragraph contains a gloss the
   reader will trip on:** *"the Jas de Bouffan ('the gust-house,' the
   rambling Cézanne family estate just outside Aix)"* — *gust-house* is
   the Provençal etymology but for a phone reader the gloss adds friction
   without payoff. Recommend dropping the etymology: *"the Jas de Bouffan
   (the rambling Cézanne family estate just outside Aix)."*

4. **The 1907 retrospective paragraph, age list:** *"Pablo Picasso was 25,
   living broke at the top of a Montmartre tenement. Georges Braque was
   25, a Norman, just then a young Fauve (the wild-color movement that
   had been named in 1905). Henri Matisse was 37. André Derain was 27.
   Maurice de Vlaminck was 31."* The list works on a desktop but on a
   phone the staccato run-of-ages reads like a roll-call. Fine as-is — but
   consider one consolidating sentence at the end: *"They walked through
   that show together."* (The next paragraph does in fact say this.)

5. **Letter quotation block** — the indented block-quote of the Cézanne
   letter is good; the translation attribution *"(Translation Danchev,
   2013; the French original is traiter la nature par le cylindre, la
   sphère, le cône, le tout mis en perspective…)"* is fine but inline-after-
   quote it reads heavy. Could move to a footnote at integration.

6. **The hedge sentence after the letter:** *"Be careful what this is. It
   is not a manifesto."* — strong, clean. Keep. (Positive example.)

7. **Cross-chapter ref form** (cross-cutting E): *"(The Cubism page is the
   next door over.)"* — this is the terse, correct form. Keep. Positive
   example.

### NICE-TO-HAVE

- The closing sentence of the chapter — *"The mountain refused to
  dissolve, and the young men in Paris saw it."* — beautiful close. Keep.

---

## Chapter 4 — `van-gogh` ("The yellow house, the wheat, the gun")

**Grade: MUST-FIX** (one km violation, one dimension citation that should
not ship inline, plus a couple of dense sentences).

Single-protagonist chapter, so pronouns are easy. The narrative pace is
strong. The arc — late start → Theo → Paris → Arles → ear → Saint-Rémy →
Auvers → gun → Theo's death — is exactly the right walk-through for a
zero-knowledge reader.

### MUST-FIX

1. **The km violation** (cross-cutting A): *"then thirty kilometers north
   of Paris to the village of Auvers-sur-Oise."* → *"then about twenty
   miles north of Paris to the village of Auvers-sur-Oise."* (Per
   `feedback_art_dimensions_imperial` and CLAUDE.md "Miles first, km in
   parens" — and km-in-parens isn't required at all here, drop it.)

2. **Bedroom in Arles dimension citation, inline form:** *"(the first
   version of Bedroom in Arles, October 1888, now Van Gogh Museum — a
   small room in lemon yellow and cobalt blue and brick red, almost a
   child's diagram of a room, about 2 ft 4½ in × 3 ft 0 in, oil on
   canvas)"* — this is a long parenthetical packing color description +
   dimensions + medium. The dimensions are fine (imperial), but the
   sentence as a whole is hard to land. Recommend splitting: separate the
   dimension/medium fact from the color/visual description, so the reader
   isn't reading numbers while still picturing the room.

3. **Sequence-of-the-night-of-23-December paragraph:** *"there was a
   quarrel; Gauguin walked out of the Yellow House intending to spend
   the night at a hotel; Vincent followed him into the street, possibly
   with a razor; Gauguin scared him off; Vincent went back to the Yellow
   House and, in the bathroom, cut off the lower lobe of his left ear
   (not the whole ear — this is the standard correction; the part severed
   was the lower portion of the auricle, an inch or so of flesh)."* This
   is one of the most dramatic sentences in the whole movement narrative
   and it's a five-semicolon chain with a multi-part parenthetical at
   the end. On phone it reads like a court transcript. Recommend hard
   periods, not semicolons, and pull the medical hedge into its own
   sentence afterward: *"There was a quarrel. Gauguin walked out of the
   Yellow House intending to spend the night at a hotel. Vincent followed
   him into the street, possibly with a razor. Gauguin scared him off.
   Vincent went back to the Yellow House and, in the bathroom, cut off
   the lower lobe of his left ear. (Not the whole ear — this is the
   standard correction; the part severed was the lower portion of the
   auricle, an inch or so of flesh.)"*

### SHOULD-FIX

4. **The Goupil & Cie paragraph stacks three failures into one sentence:**
   *"He had tried to be an art dealer. The firm was Goupil & Cie, the
   great Paris-based 19th-century picture-selling house; Vincent worked
   at their branches in The Hague, London, and Paris between 1869 and
   1876, and was eventually fired for being temperamental with customers.
   He had tried to be a lay preacher, in the Borinage coal-mining district
   of southern Belgium, where he gave away his possessions to the miners
   and was dismissed by the Mission for 'excessive zeal.'"* Two long
   sentences. The "lay preacher" sentence in particular is 4 clauses.
   Acceptable as-is, but a phone-reader pass could split it.

5. **Em-dash density** (cross-cutting G): the Saint-Rémy / *Starry Night*
   paragraph: *"He produced, during that year, some of the most famous
   canvases of his life — including The Starry Night, painted in June
   1889, from memory and the view out his barred east-facing window: a
   sleeping village under an immense rolling sky of swirling spiral stars
   and a crescent moon, a flaming cypress in the foreground."* That
   sentence has one em-dash and one colon and four commas, all doing
   different jobs. Recommend rewriting the visual description as its own
   sentence after the colon: *"He produced, during that year, some of the
   most famous canvases of his life. The Starry Night was painted in June
   1889, from memory and the view out his barred east-facing window: a
   sleeping village under an immense rolling sky of swirling spiral stars
   and a crescent moon, with a flaming cypress in the foreground."*

6. **The Red Vineyard sale paragraph contains an embedded gloss-on-a-
   gloss:** *"A Belgian painter and collector named Anna Boch — the
   sister of Eugène Boch, a young painter whose portrait Van Gogh had
   done in Arles — bought it for 400 francs (about £16 at the time)."*
   The double parenthetical (sister-of + price-converted) is fine but the
   reader needs to know who Eugène Boch matters as. Recommend dropping
   the brother-sidetrack or keeping just *"A Belgian painter and
   collector named Anna Boch bought it for 400 francs (about £16 at the
   time)."* Save Eugène Boch for the work-level piece.

7. **The Pushkin sentence has a parenthetical the reader may stumble on:**
   *"The picture is now in the Pushkin State Museum, Moscow (it was
   bought in the early 20th century by the Russian collector Sergei
   Shchukin, whose collection was nationalized after the 1917
   revolution)."* The Shchukin/nationalization is a real beat but
   adds another era-jump to a paragraph already in 1890. Recommend:
   *"The picture is now in the Pushkin State Museum, Moscow."* Drop the
   Shchukin aside; it's a level-down detail. (NICE-TO-HAVE if you want
   to keep the Russian-collector beat.)

### NICE-TO-HAVE

- The Naifeh-Smith hypothesis paragraph is well-handled and well-hedged.
  Keep. (Positive example.)
- The closing sentence — *"And within twenty years his pictures would be
  the most fought-over canvases in Europe."* — strong. Keep.

---

## Chapter 5 — `gauguin` ("Pont-Aven, Tahiti, the colonial question")

**Grade: MINOR.**

Mostly single-protagonist, so pronouns are clean. The colonial / Polynesian-
girls section is handled with care — the difficult material is given its
own SectionHeader and a measured voice. The narrative pace is good.

### MUST-FIX

1. **The Lima childhood paragraph, the displacement claim:** *"When Gauguin
   was 1, his family sailed for Peru, where his mother had relatives; his
   father died en route. The boy grew up in Lima until he was 7, in
   Spanish, surrounded by his mother's family — that early displacement
   matters; he never quite settled back into being French."* That last
   clause is a biographer's interpretive claim. The clarity issue: a phone
   reader will read "that early displacement matters" as the narrator
   stepping out of frame to deliver an opinion. Either explicitly mark it
   as the narrator's read, or drop the meta. Recommend: *"That early
   displacement seems to have stuck — he never quite settled back into
   being French."* (Frames as inference, not flat claim.)

### SHOULD-FIX

2. **Cross-chapter ref form** (cross-cutting E): *"In summer 1886 — the
   summer of the Seurat Grande Jatte in Paris, Chapter 1 — Gauguin went
   on cheap holiday to Pont-Aven."* — *"Chapter 1"* is doing the right
   job, but inline as a clause it's awkward. Recommend: *"In summer 1886
   (the summer of Seurat's Grande Jatte in Paris — Chapter 1), Gauguin
   went on cheap holiday to Pont-Aven."*

3. **Cross-chapter ref form** at the Émile Bernard paragraph: *"the friend
   who would later be the recipient of Cézanne's cylinder, sphere, cone
   letter (Chapter 3)"* — this is the terse, correct form. Keep. Positive
   example.

4. **The Vision after the Sermon dimension citation:** *"(now Scottish
   National Gallery, Edinburgh; about 2 ft 4½ in × 3 ft 0 in, oil on
   canvas)"* — fine, imperial-clean.

5. **The Vision-after-the-Sermon analysis paragraph** (the "what is going
   on" close) is excellent and reads cleanly. Keep. (Positive example.)

6. **Em-dash density**: the Tahiti colony paragraph: *"What he was
   actually doing was sailing into a French colony. Tahiti had been a
   French protectorate since 1842 and a formal colony since 1880. Papeete
   had cathedrals, gendarmes, a port, French administrators, French
   missionaries, French gunboats."* — clean, list-form, phone-friendly.
   Keep. (Positive example.)

7. **The *Where Do We Come From?* dimension and metadata block** is dense:
   *"(Museum of Fine Arts, Boston, about 4 ft 6½ in × 12 ft 3½ in, oil on
   canvas), a long horizontal mural Gauguin painted as his testament
   before attempting suicide with arsenic in late 1897 (he survived — the
   dose was too strong and he vomited it up)."* Two parentheticals back-
   to-back, the second containing a hedged-medical-detail. Acceptable, but
   on phone the reader is reading: museum + dimensions + medium + suicide
   attempt + outcome, all attached to one painting. Recommend splitting
   the suicide-attempt off into its own sentence after the work
   description.

### NICE-TO-HAVE

- The "part of the story that doesn't sand down" SectionHeader is the
  strongest piece of voice in the draft. Keep verbatim. Positive example.

---

## Chapter 6 — `seurat-lautrec` ("Seurat's dots, Lautrec's posters")

**Grade: MINOR.**

Two-protagonist chapter, but they're given separate SectionHeaders, so
pronoun drift is contained. The Seurat half is dense with color-theory
references (Chevreul, Blanc, Rood) — but the glosses are inline and adequate.
The Lautrec half walks cleanly from Albi to Montmartre to the Moulin Rouge.

### MUST-FIX

1. **The Chevreul gloss is hyper-dense:** *"He read Michel Eugène
   Chevreul's De la loi du contraste simultané des couleurs (Paris, 1839
   — a French chemist's discovery, made while running the Gobelins
   tapestry works, that two colors placed next to each other affect each
   other in the eye, the basis of the entire concept of complementary
   shadows)."* On phone, that's one sentence packing: name + French title
   + place + year + nationality + discovery context + claim + consequence.
   Recommend splitting after the title: *"He read Michel Eugène Chevreul's
   De la loi du contraste simultané des couleurs (Paris, 1839). Chevreul
   was a French chemist who ran the Gobelins tapestry works; while there
   he discovered that two colors placed next to each other affect each
   other in the eye. That discovery is the basis of the entire concept of
   complementary shadows."* (Three sentences, each a single claim.)

2. **The Toulouse-Lautrec genealogy sentence is the densest in the
   chapter:** *"Henri Marie Raymond de Toulouse-Lautrec-Monfa was born on
   24 November 1864 in Albi, in southwestern France, into one of the
   oldest families in Europe — direct descendants of the medieval Counts
   of Toulouse, who had ruled the south of France in the high Middle
   Ages before being shattered by the Albigensian Crusade in the 13th
   century."* That's one sentence carrying: full name + date + birthplace
   + region + family-rank + ancestor + their domain + their downfall + a
   crusade-name + a century. A phone reader will give up midway.
   Recommend: *"Henri Marie Raymond de Toulouse-Lautrec-Monfa was born
   on 24 November 1864 in Albi, in southwestern France. His family was
   one of the oldest in Europe — direct descendants of the medieval
   Counts of Toulouse, who had ruled the south of France in the high
   Middle Ages until the Albigensian Crusade (a 13th-century papal
   crusade against southern French heretics) shattered their power."*

### SHOULD-FIX

3. **The Société des Artistes Indépendants opening** packs the founding,
   the program, and the venue-history into one paragraph. Acceptable, but
   the venue parenthetical *"(the first one ran from 15 May to 1 July
   1884, in an army barracks on the Champs-Élysées; it would move to a
   beer hall later that year and to the Pavillon de la Ville de Paris in
   subsequent years)"* is a 40-word aside in the middle of the founding
   point. Move to a separate sentence or trim.

4. **The Seurat bullets** (Bathers at Asnières, La Grande Jatte, Models,
   Parade de cirque, The Circus) are well-paced — they break the dense
   prose. Keep. Positive example. One nit: ***Parade de cirque (Circus
   Sideshow)*** has no descriptive content beyond title+museum+date.
   Acceptable as a fast-name beat, but a sentence of "what it shows"
   would help a reader who hasn't seen it.

5. **The breaks-the-legs paragraph for Lautrec:** *"At 13 he broke his
   left femur. At 14, the right. The breaks healed badly. The legs
   stopped growing, and the rest of him went on."* — this is excellent
   phone prose. Keep. Positive example.

6. **The Moulin Rouge: La Goulue paragraph stacks several heavy facts:**
   *"Designed when Lautrec was 26, posted on Paris hoardings to advertise
   the Moulin Rouge's star dancer Louise Weber ('La Goulue' — the
   Glutton), it was the first time a serious painter had put his full
   design intelligence into a commercial street poster."* Acceptable but
   dense (3 facts in one sentence). NICE-TO-HAVE split.

7. **The Albigensian Crusade gloss** is missing — see MUST-FIX 2 above —
   but if MUST-FIX 2 is taken, this is resolved.

8. **The closing sentence of the chapter** — *"Neither was at peace."* —
   four words, lands. Keep. Positive example.

### NICE-TO-HAVE

- The "(hold this for Chapter 5)"-style cross-refs don't appear; chapter
  refs are mostly terse-form (Chapter 4, Chapter 5). Compliant with
  cross-cutting E.

---

## Chapter 7 — `nabis` ("Bonnard, Vuillard, Denis — and the cast around them")

**Grade: MUST-FIX.**

This is the chapter the brief flagged as a pronoun-risk chapter, and the
prediction is correct. The chapter introduces a *lot* of named figures in
sequence — Sérusier, Bernard, Gauguin, the Nabis core members (Bonnard,
Vuillard, Denis, Roussel, Ranson, Maillol, Rippl-Rónai), then Signac, Redon,
Rousseau, Cassatt, and a closing list of Vallotton/Maillol/Marinot. Some
sentences pack multiple painters and the reader loses the thread.

### MUST-FIX

1. **The Sérusier-meets-Gauguin opening paragraph contains an antecedent
   slip:** *"Paul Sérusier (1864–1927) was a 24-year-old French painter
   from a comfortable Paris family — a student at the Académie Julian (a
   private Paris art school, founded 1867 by Rodolphe Julian, that took
   the students the École des Beaux-Arts wouldn't or couldn't take,
   including women and foreigners; almost everyone in the next generation
   of French painting passed through it). Sérusier was on holiday in
   Pont-Aven. He sought out Gauguin, who was then in his Vision-after-
   the-Sermon mode (Chapter 5), and asked him for a lesson."* Final "him"
   refers to Gauguin. Clean. **No fix on the pronoun.** But the Académie
   Julian gloss is so long it pushes Sérusier's biographical sentence to
   60+ words. Recommend: pull the Académie Julian gloss into a separate
   sentence.

2. **The Talisman / Nabis founding paragraph has an antecedent slip:**
   *"And they named themselves, in late 1888, the Nabis — the Hebrew
   word for 'prophets,' picked by a Hebraist friend, the poet Henri
   Cazalis, on the deliberately self-mocking ground that they were now
   the prophets of a new art."* The clause "picked by a Hebraist friend"
   modifies the *word "Nabi"*, not "themselves" — but on phone, a reader
   scanning fast can briefly read it as "they [the painters] were picked
   by a Hebraist friend." Recommend: *"And they named themselves, in
   late 1888, the Nabis — Hebrew for 'prophets.' The word was picked by
   a Hebraist friend, the poet Henri Cazalis, on the deliberately
   self-mocking ground that they were now the prophets of a new art."*

3. **The Maurice Denis quote-paragraph contains a paragraph-long
   parenthetical:** *"(The idea was not entirely original — the French
   philosopher Hippolyte Taine had said something like it in his
   Philosophie de l'art, 1865 — but Denis's wording is the one that got
   carved over the door of every 20th-century art school.)"* The
   parenthetical opens a sub-clause about Taine and never properly
   returns. Recommend lifting it to a standalone sentence after the
   quote: *"The idea was not entirely original. The French philosopher
   Hippolyte Taine had said something like it in his Philosophie de
   l'art (1865). But Denis's wording is the one that got carved over the
   door of every 20th-century art school."*

4. **The Bonnard paragraph contains a pronoun-and-antecedent slip:**
   *"Pierre Bonnard (1867–1947) painted his lifelong companion Marthe
   (born Maria Boursin; she changed her name to Marthe de Méligny when
   they met, claiming a noble background she did not have; Bonnard and
   she would only finally marry, after thirty years together, in 1925)
   over and over — in the bath, drying after a bath, in a yellow dress,
   in a red dressing gown, at the breakfast table — for the rest of her
   life."* Three issues: (a) the parenthetical is 30+ words, (b)
   "Bonnard and she" is awkward, (c) the eventual "for the rest of her
   life" lands a long way from the start of the sentence. Recommend:
   *"Pierre Bonnard (1867–1947) painted his lifelong companion Marthe
   over and over — in the bath, drying after a bath, in a yellow dress,
   in a red dressing gown, at the breakfast table — for the rest of her
   life. (Marthe was born Maria Boursin; she changed her name to Marthe
   de Méligny when they met, claiming a noble background she did not
   have. They would marry only in 1925, after thirty years together.)"*

5. **The Vuillard sentence stacks visual claim, biographical claim, and
   museum-credit into one long line:** *"His mother was a corsetmaker; he
   grew up in apartments full of fabric samples and wallpaper, and as a
   painter he refused to let the wallpaper recede behind the figures. In
   a Vuillard interior, the wallpaper, the carpet, the woman's dress and
   the curtains all fight for the same depth of color, and the figure of
   Mother and Sister of the Artist (c. 1893, Museum of Modern Art, New
   York, about 18 × 22 in) is half-absorbed into the floral wallpaper
   behind her."* That second sentence is one sentence with a list-of-
   four-elements, a title, a museum, a date, dimensions, and a "is half-
   absorbed" predicate. Recommend a hard split before "and the figure of":
   *"... fight for the same depth of color. The figure in his Mother and
   Sister of the Artist (c. 1893, MoMA, about 18 × 22 in) is half-
   absorbed into the floral wallpaper behind her."*

6. **The Rousseau paragraph is one of the densest in the draft:** it
   contains the Le Douanier gloss, the self-taught aside, the jungle
   subject, the Jardin des Plantes source, *The Dream* (with dimensions),
   the 1910 death, Picasso's banquet, Apollinaire and Stein and Braque,
   and a hedge that Rousseau is "adjacent" not central. Six distinct
   facts in one paragraph. The dimensions in particular — *"about 6 ft 8½
   in × 9 ft 9½ in"* — get buried. Recommend splitting the paragraph at
   the Banquet Rousseau anecdote, so the reader has a paragraph break
   before the new beat.

7. **The Mary Cassatt paragraph contains a pronoun-antecedent slip:** the
   line about the École des Beaux-Arts 1890 Japanese-print show — *"In
   1890 the École des Beaux-Arts in Paris mounted a major exhibition of
   Japanese woodblock prints — over 700 works, the most ambitious show
   of ukiyo-e ever held in Europe up to that date. Cassatt went, took
   notes, came home and reinvented her practice."* — is clean. **No
   fix.** Including as a positive example: a single-sentence biographical
   beat with a clean subject. But the *next* sentence — *"Her late work
   — the color drypoints and aquatints of mothers bathing children, of
   women at their dressing tables, of the bourgeois interior — is overtly
   indebted to Japanese prints, with their flat color zones, hard
   outlines, and odd off-center cropping."* — packs 5 stacked subjects.
   On a phone, the "with their" antecedent (Japanese prints) is fine
   because no other plural noun is in scope; but the cumulative em-dash
   load is heavy. Recommend a split.

### SHOULD-FIX

8. **Signac paragraph, the Fénéon-portrait subtitle:** *"(The picture's
   full subtitle is something like Opus 217. Against the Enamel of a
   Background Rhythmic with Beats and Angles, Tones and Tints, Portrait
   of M. Félix Fénéon in 1890 — Signac liked his titles operatic.)"* —
   this is a charming aside but the long French-derived title may stop
   the reader cold. Acceptable as a parenthetical (the reader can skip)
   but consider trimming.

9. **Redon paragraph, the "two careers in one body" framing** is strong
   prose. Keep. Positive example.

10. **The Banquet Rousseau parenthetical:** *"(Hedge his placement, by
    the way: Rousseau is adjacent to Post-Impressionism, not central. He
    is better called an outsider whom the avant-garde elected as a
    forerunner.)"* — the "Hedge his placement, by the way" is voice-of-
    narrator-speaking-to-editor. Recommend: *"(Rousseau is adjacent to
    Post-Impressionism, not central — better called an outsider whom the
    avant-garde elected as a forerunner.)"*

11. **Cross-chapter ref form** (cross-cutting E): the chapter uses
    *"(Chapter 5)"* and *"(Chapter 7)"* consistently — compliant.
    Positive.

### NICE-TO-HAVE

- The closing sentence of the chapter — *"All they need is somebody to
  walk into the room and put a name on the door."* — is a strong
  hand-off to Chapter 8. Keep.

---

## Chapter 8 — `fry` ("How a category got its name")

**Grade: MINOR.**

Single chronological narrative — Fry's 1910 show, the press freak-out, the
1912 sequel, the 1913 Armory Show, the closing one-last-fact list. Clean
pacing, clean SectionHeaders. The chapter does the job.

### MUST-FIX

1. **The Fry-biography opening contains a slightly buried fact:** *"Roger
   Fry was 44 years old in 1910, an English critic and Bloomsbury-adjacent
   intellectual who had spent the previous decade as the European
   paintings curator for the Metropolitan Museum of Art in New York and
   had recently been fired in a bureaucratic row with the Met's president
   (J. Pierpont Morgan)."* That's one sentence with: age + nationality +
   social-set + previous-job + employer + city + getting-fired + the
   firer (Morgan). A phone reader hits "fired in a bureaucratic row" and
   has to backtrack. Recommend: *"Roger Fry was 44 years old in 1910, an
   English critic with Bloomsbury connections. He had spent the previous
   decade in New York, as the European paintings curator for the
   Metropolitan Museum. He had recently been fired in a bureaucratic row
   with the Met's president, J. Pierpont Morgan."*

### SHOULD-FIX

2. **The "Grafton Galleries" sentence:** *"In the summer of 1910 he
   proposed an exhibition to the Grafton Galleries — a commercial gallery
   on Grafton Street, Mayfair, in central London — bringing recent French
   painting to a British audience for the first time."* That works on
   phone. Keep. (Positive example.)

3. **The crew-roster sentence is dense:** *"Fry rounded up a small
   organizing crew: Desmond MacCarthy, the literary critic (who served
   as the show's secretary and helped draft the catalogue introduction),
   and Clive Bell, the young art writer who would in 1914 publish Art
   and the concept of 'significant form.'"* — the gloss on Bell (who
   would publish *Art* in 1914) is the right kind of light forward-
   reference. Keep.

4. **The artist-list sentence is long but list-shaped:** *"Cézanne (with
   the most works), Van Gogh, Gauguin, plus Manet (borrowed as the
   borrowed elder father-figure, the way the Impressionists had always
   positioned him), plus the living wave of French painters Fry wanted
   Britain to see: Matisse, Picasso, Derain, Vlaminck, Maurice Denis,
   Redon, Seurat, Signac, Sérusier, Vallotton."* Acceptable as a list —
   the reader can scan-skip — but the "borrowed as the borrowed elder
   father-figure" repeats "borrowed" awkwardly. Recommend: *"plus Manet
   (cast as the elder father-figure, the way the Impressionists had
   always positioned him)."*

5. **The press-freak-out paragraph** is excellent — quote-stack works.
   Keep. Positive example.

6. **The Virginia Woolf paragraph** packs the quote, its date, its book-
   source, a hedge about what Woolf meant, and a claim about Grafton's
   place in her thinking. Acceptable, but the final claim — *"But it is
   widely understood that the Grafton show was what she had at the back
   of her mind. The phrase nails the moment."* — is fine. Keep. Positive
   example.

7. **The Armory Show paragraph contains a buried punch-line:** *"It
   contained roughly 1,250 works by about 300 artists, about two-thirds
   American and one-third European."* Clean. *"Within the European third
   were about 13 Cézannes, about 18 Van Goghs, about 12 Gauguins, several
   Seurats, the largest Redon retrospective outside France (about 32
   Redons), plus Matisse, Picasso and Marcel Duchamp."* — one sentence
   with seven count-claims. On phone this is a wall. Recommend splitting
   after "several Seurats" so the Redon retrospective (which is unusual
   and worth a beat) lands separately.

### NICE-TO-HAVE

- The "One last fact — They were all dead" closing SectionHeader is the
  cleanest piece of structural prose in the chapter, and arguably in the
  whole movement piece. Keep verbatim.

- The final paragraph rolls all five painters' moves into one set of
  noun-clauses — *"The mountain refused to dissolve. The wheatfield kept
  burning. The Breton women kept seeing things their eyes couldn't see.
  The dots kept building the Sunday lawn. The cabaret lights kept
  catching on the dancers' faces."* — beautiful. Keep verbatim. Positive
  example.

---

## Summary scoreboard

| Chapter | Grade |
|---|---|
| hookLong | CLEAR |
| 1 — `why` | MINOR |
| 2 — `five` | **MUST-FIX** |
| 3 — `cezanne` | MINOR |
| 4 — `van-gogh` | **MUST-FIX** (km violation + drama-sentence semicolons + dim-cite density) |
| 5 — `gauguin` | MINOR |
| 6 — `seurat-lautrec` | MINOR |
| 7 — `nabis` | **MUST-FIX** (multi-figure pronoun risk + dense paragraphs) |
| 8 — `fry` | MINOR |

**Three chapters are MUST-FIX**, four are MINOR, the hookLong is CLEAR. No
chapter is CLEAR-as-shipped at the prose level (one or two sentences in each
needs splitting). No inline `[VERIFY]` / `[FACT pack]` tags survive. Imperial
discipline holds throughout except for the one Auvers km, which must be
killed before ship.

The cross-cutting items above (especially **A** km, **B** em-dash-as-
definition, **E** terse cross-chapter refs, **G** em-dash density) are best
handled as a single reconcile pass rather than chapter-by-chapter.

---

**End of clarity audit.**
