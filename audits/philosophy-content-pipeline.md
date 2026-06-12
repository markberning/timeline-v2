# Philosophy content pipeline (era / school / thinker / work narratives)

The gated process for producing a Philosophy narrative — the analog of the civ
5-persona audit (`.claude/skills/audit-narrative.md`), `audits/war-content-pipeline.md`,
`audits/art-content-pipeline.md`, and `audits/music-content-pipeline.md`, re-pointed
at philosophy's failure modes.

**Status: ACTIVE — run once (2026-06-12, "The Greeks" era read, gated from the
start; see Proof run 1 at the bottom).** This doc was written BEFORE the first
article so the vertical never had an ungated draft (the mistake the Kahnweiler work
and the art "Lay of the land" prologue both made — see `audits/art-content-pipeline.md`
proof runs 2 and 6). **No philosophy article ships without running these gates.**

## v1 scope (agreed 2026-06-12)
**Western philosophy, Thales → Nietzsche.** A clean, complete arc on its own; the
20th century (analytic/continental) is deferred — harder to compress, more
contested. Non-Western traditions (Indian, Chinese, Islamic-world-as-its-own-story)
deferred much later, but **keep a region/tradition field as insurance** (the art
precedent). Note the asterisk inside the scope: the **Arabic transmission**
(al-Fārābī, Avicenna, Averroes preserving + extending Aristotle into medieval
Europe) is INSIDE the Western story and must not be written out — see the framing
gate.

## Governing principle (shared with civ / war / art / music)
**Storytelling is the #1 goal; accuracy / zero-hallucination is a hard floor it may
never cross.**

**EVERY SURFACE IS GATED, not just the main prose (locked 2026-05-25 — "make sure
critical agents run for all sections"; born into this doc before the first
philosophy article so the mistake the other verticals made never happens here).**
A philosophy "section" is every reader-facing factual surface it will ship, and all
of it runs through the same fact-checker + critics: the narrative prose, **thinker
stats** (dates, where they lived/taught, major works + their dates, how they died —
philosophy deaths are legend magnets), **the key-passage block** (quote lines AND
the sourceUrl AND the translation credit — all gated surfaces), **lineage/influence
chips** (who they answered, who answered them), the **"Why this is a break" block**,
captions on portraits/title pages, **idea diagrams** (every label on a diagram is a
claim), thinker nameplates, intros, summary lines. A date on a chip or a label on a
diagram is a claim — fact-checked exactly like a sentence; **not exempt for being a
stat or a card.** Ship-gate checklist = this surface list, each critic-covered.

**REQUIRED for every era + school/movement: the "Why this is a break" block (the
philosophy analog of art's `whatChanged`, locked at birth).** In philosophy the
break IS the content, so this block is the load-bearing wall, not furniture. Each
era and each school must explicitly answer *what question people were stuck on, and
what this thinking changed* — a **before** position (the view it broke from, stated
fairly — steelmanned, never a strawman; see the framing gate) set against the
**after**, plus a gated passage naming the concrete move (a new method, a new
question, a dissolved assumption — not "revolutionary"). Where the predecessor view
survives only in fragments or hostile reports (most pre-Socratics survive only as
quotations by their critics), SAY so. Sits up front so the break lands before the
reader dives in.

**REQUIRED for every thinker (and any work that gets its own read): the "Key
passage" block (the philosophy analog of art's `manifesto`; required-where-
applicable, never silence-by-omission).** Philosophy is full of passages more
famous than the books: the cave allegory, the cogito, Hume on causation, the
categorical imperative, "God is dead." Every thinker gets the block OR an explicit
`absent`: the work title/date, **2–3 born-verified excerpt lines in the thinker's
own words** (verified against the real text in a named reputable translation — a
quote from memory is MUST-FIX; if exact wording can't be confirmed, it ships as
paraphrase, never as quotation — the Duranty rule from art proof run 10), a gated
house-voice unpacking of what it claims and why it mattered, AND a **born-verified
`sourceUrl`** to the actual text (resolves AND is the right document AND the right
translation where it matters). Philosophy is the lucky vertical here: almost the
entire v1 corpus is public domain with serious online editions (Perseus, Project
Gutenberg, Early Modern Texts, Wikisource) — there is no excuse for an unverified
link. Where a thinker wrote nothing, set `absent: true` and **tell that story — the
silence is content**: Socrates wrote nothing (we have Plato's Socrates, Xenophon's
Socrates, and Aristophanes' parody — and they disagree); Thales survives only in
testimonia; Pyrrho on principle. The absent block still links the best substitute
source.

Two philosophy-specific additions (the analogs of art's "make them SEE it" +
born-verified images):

- **Make the reader GET it.** Philosophy's product is understanding. A chapter that
  narrates philosophy-history events — who studied under whom, which book scandalized
  whom — but never makes the reader *actually understand the idea* has failed at the
  one thing this mode exists to do. "Understanding" is a first-class craft axis, the
  exact analog of art's "looking" and music's "listening." For every major idea:
  (a) a **concrete worked example** (run the trolley, do the cave, actually apply
  the categorical imperative to a real lie); (b) the **strongest version** of the
  idea — present it the way its smartest defender would, so the reader feels its
  pull before hearing objections; (c) a **plain-language restatement** the reader
  could repeat at dinner. Comparisons are the #1 comprehension tool here even more
  than in art (Hume's billiard balls, Neurath's boat, the watchmaker) — use them.
- **A wrong or blind quote never ships** (born-verified doctrine, re-pointed from
  images to TEXT — the primary source of this vertical is the passage, not the
  picture). Every quotation is resolved against the real text at creation; the
  translation/edition is named where wording carries weight; every sourceUrl
  load-checks AND is eyeballed as the right document. Media (portraits, title
  pages, diagrams) follows the standard image-rights gate, but this vertical is
  deliberately **text-forward**: a missing image beats a decorative one; never
  force filler art.

### Philosophy's signature hallucination traps: the apocryphal quote and the potted summary
Philosophy suffers TWO inherited-error classes, and the fact-checker hunts both:
1. **The apocryphal quote.** No discipline has more misattributed one-liners —
   fake Aristotle ("We are what we repeatedly do" is Will Durant paraphrasing
   Aristotle), fake Socrates, fake Nietzsche, paraphrases hardened into quotation
   marks over a century of textbooks. Every quoted line is verified against the
   actual text or reframed as paraphrase/legend ("as the story goes," "by
   Diogenes Laertius's much-later account" — Diogenes Laertius is the single
   biggest legend-vector in the corpus and must always be flagged as such).
   Biographical anecdotes (Thales in the well, Diogenes and the lantern, Hypatia's
   death details, Descartes' stove-heated room) are framed as the tradition they
   are, never asserted flat.
2. **The potted summary.** The textbook one-liner that scholarship rejects or
   heavily qualifies: "Descartes invented mind-body dualism" (Plato and the
   Scholastics would object), "medieval philosophy was sterile angels-on-pinheads
   logic-chopping" (the pinhead debate is itself apocryphal), "Epicurean = hedonist
   glutton," "Machiavelli was Machiavellian," "Hume was an atheist" (carefully,
   he never said so). **The fact-checker's primary job is to separate the
   documented position from the inherited caricature** — and where a famous
   caricature is load-bearing for the story, the prose frames it AS the caricature
   and then tells the truth.

## The gates (a section ships only when all pass) — mirror art's, re-pointed
1. **Fact-checker** (Sonnet, web-enabled) — verify every date, biographical fact,
   work title + publication date, **every quotation against the real text**
   (translation named), every attribution of an idea ("X was the first to argue…"
   claims are the philosophy version of art's "first-ever" trap — almost always
   contestable), every summary of a position against what the thinker actually
   wrote (the potted-summary trap above). Flag apocryphal anecdotes asserted as
   fact; flag Diogenes Laertius-sourced material not framed as late tradition.
   ✅ CONFIRMED / ❌ WRONG / ⚠️ UNSUPPORTED / 🟡 LEGEND-FRAME-IT; MUST-FIX vs
   SHOULD-FIX.
2. **Storytelling & "understanding" critic** (Sonnet) — judge as story AND as
   philosophy writing. Per-chapter STRONG/GOOD/NEEDS WORK/REWRITE. Hook, stakes,
   pacing, voice — PLUS: **does the reader actually GET the idea?** Apply the
   three-part test (worked example present? strongest version presented? plain
   restatement lands?). Flag chapters that are all biography/reception and no
   actual thinking; flag summary that is vague ("profound," "groundbreaking")
   instead of specific (what the argument actually says, step by step). House
   voice locks carry over from art (dry wit dialed up with room to land;
   comparisons are the #1 comprehension tool; never bury a substantive line in
   muted/italic). Philosophy has good jokes — Diogenes alone is a sitcom — use
   them, but the wit serves the idea, never substitutes for it.
3. **Comprehensiveness critic** (Sonnet, web-enabled) — independent must-cover
   checklist; COVERED/THIN/MISSING; MUST-ADD vs SHOULD-CONSIDER. Selective is
   correct — flag only genuinely essential gaps. Special philosophy duty: the
   **influence chain may not have silent missing links** — if the chapter says
   Kant answered Hume, the reader must already have the Hume he's answering.
4. **Newcomer / clarity critic** (Sonnet) — read cold as a sharp 15-year-old who
   has never heard the word "metaphysics." Flag every undefined term (*a priori*,
   empiricism vs rationalism, the Forms, substance, teleology, dialectic,
   utilitarianism, the categorical imperative, idealism — which does NOT mean
   having ideals, the single most misleading term in the corpus), every thinker
   introduced without a one-line who-they-are, every unexplained leap in an
   argument (an argument with a silently skipped step reads as mysticism).
   CLEAR/NEEDS-GLOSS/LOST. Distinct from gate 2: gate 4 asks "are the words
   defined?", gate 2 asks "does the idea land?" — both must pass.
5. **Framing / fairness critic** (Sonnet, web-enabled) — philosophy's contested-
   memory failure modes: **anachronism** (attributing later framings to earlier
   thinkers — reading Descartes' mind-body problem back into Plato, "Ockham's
   razor" as Ockham phrased it, treating ancient *eudaimonia* as modern
   "happiness"; the philosophy version of getting a date wrong); **the strawman**
   (every defeated position gets its steelman — the Scholastics, the Sophists,
   Berkeley get the version their defenders held, then the real objection;
   beating up a cartoon is the genre's besetting sin); **the lone-genius myth**
   (schools, correspondents, translators, patrons written out — especially the
   **Arabic transmission** of Aristotle, and the women the canon dropped:
   Hypatia, Elisabeth of Bohemia pushing Descartes on the interaction problem,
   Émilie du Châtelet, Harriet Taylor Mill); **Western overclaim** (state the
   scope — "Western philosophy begins…" not "philosophy begins…"); and
   **posthumous-misuse honesty** (Nietzsche and his sister's Nazi-friendly
   editing; Aristotle's defense of slavery; named honestly — neither sanitized
   nor turned into a lecture). FAIR/TILTED/DISTORTED.

### Two structural gates (coordinator-run)
6. **Text, media & rights gate** — the born-verified pass, in this vertical
   text-first: every key-passage quote re-checked against its sourceUrl (resolves,
   right document, right translation); every portrait/title-page image resolves +
   load-checks, copyright tier confirmed, caption matches the actual image (right
   person — Commons portrait search WILL return the wrong bearded Greek;
   eyeball every one), the standard pre-1931/restricted rules. **Idea diagrams**
   (the divided line, a syllogism, the trolley) are drawn from the verified
   description, every label fact-checked, and follow `feedback_no_blind_image_
   coordinates` — never author position-on-image pointers blind. **Card images use
   the shared `OrientationCard`** (`src/components/mode/orientation-card.tsx`):
   image WHOLE (never cropped; trim true borders + self-host), fills 3 sides,
   card grows, never truncates text, blurb written to FIT (full spec in
   `BEHAVIORS.md` "Cards"). Text-forward is an accepted identity: a thinker with
   no good free portrait gets a period-appropriate fallback or none — never a
   decorative wrong image.
7. **Nesting / coherence gate** — across era → school → thinker → work, each pair
   is (a) consistent (a date, an attribution, a summary of a position reads the
   same at every altitude) and (b) differentiated (a lower level goes DEEPER,
   never copy-pastes the level above). Philosophy addition: the **influence chain
   must be consistent across pages** — if the Kant page says he was woken by Hume,
   the Hume page's "led to" chips agree.

## `kind` — every section is era / school / thinker / work
| | **era** | **school/movement** | **thinker** | **work** |
|---|---|---|---|---|
| Altitude | the whole sweep, framed by a throughline | one school's own story | one mind, deep — the primary deep level | one text, exhaustively (rare; only for the handful that earn it — *Republic*, *Meditations*, *Critique of Pure Reason*) |
| Shape | argument across schools (not a school checklist) | the stuck question → the move → spread → afterlife | what they inherited → what they thought → what it changed → what answered them | why it was written → the argument, walked → reception → afterlife |
| Understanding | a few signature ideas, vividly | the school's core moves | THE system, genuinely taught | THE argument, step by step |
| Don't | duplicate the school reads | duplicate the thinker reads | become a biography with the ideas as captions | restate the thinker page |

The **thinker** is this vertical's center of gravity (art's center is the work;
philosophy's is the mind). The **lineage/influence chain is the spine, not a side
feature** — every thinker page carries explicit "answered / answered by" chips,
and those chips are gated surfaces.

## The steps (coordinator-run, identical to art)
Identical to `audits/art-content-pipeline.md` ("The steps", "Roles"): pick the
section + `kind` (roster below) → brief → **fact pack FIRST** (dates, works,
verified quotations with translation + source, position summaries each tied to a
source, anecdotes explicitly flagged documented-vs-legend; resolve candidate
passages AND images here, born-verified) → **Opus author** drafts only from the
fact pack (+ a Fact ledger) → the five critics run in **parallel as Sonnet
agents** → coordinator reads them critically (gate = coordinator judgement, never
agent say-so — `feedback_gate_pass_not_correct`; new material from any critic goes
through the fact pack + fact-checker FIRST) → author revises until clean →
coordinator runs gates 6–7 → integrate. Subagents never git commit — consolidate
in one coordinator commit.

## v1 roster sketch (eras; lock the school/thinker lists per-era at build time)
1. **The Greeks** — pre-Socratics → Socrates/Plato/Aristotle → the Hellenistic
   schools (Stoics, Epicureans, Skeptics, Cynics).
2. **Faith meets reason** — Augustine → the Arabic transmission (al-Fārābī,
   Avicenna, Averroes) → Anselm, Abelard → Aquinas → Ockham.
3. **The rationalists and the empiricists** — Descartes → Spinoza, Leibniz //
   Hobbes, Locke → Berkeley → Hume (and Elisabeth of Bohemia, du Châtelet in
   their places, not a sidebar).
4. **Kant and the Germans** — Kant → Hegel → Schopenhauer.
5. **The nineteenth century** — Mill (+ Harriet Taylor), Kierkegaard, Marx as
   philosopher, Nietzsche — ending the arc on the man who declared the whole
   project's God dead.

(Indicative, not locked — the comprehensiveness critic and the per-era fact pack
finalize each list. Political philosophy (Machiavelli, Rousseau, the social
contract) is folded where it belongs, not a ghetto chapter.)

## Roles
- **Coordinator (you):** brief, build+verify the fact pack (quotes especially),
  resolve passages + images, spawn agents, read critics critically, reconcile,
  integrate. Runs gates 6–7 directly.
- **Author** — Opus. Storytelling-first, from the fact pack only.
- **Fact-checker / Comprehensiveness / Framing** — Sonnet, **web-enabled**.
- **Storytelling-&-understanding / Newcomer-clarity** — Sonnet.

## Build the agent briefs
Adapt the art briefs (`audits/art-content-pipeline.md` §Reusable agent briefs)
with the re-points above: "make them SEE it" → "make them GET it" (the three-part
test: worked example / steelman / plain restatement); image-rights → quote-first
born-verified text + standard image rules; genius-myth/women's-erasure/
appropriation/Eurocentric → anachronism/strawman/lone-genius-and-transmission/
Western-overclaim/posthumous-misuse; the beautiful-anecdote trap → the apocryphal
quote + the potted summary (with the Diogenes Laertius flag standing).

## Proof run 1 — DONE (2026-06-12) — "The Greeks" era read (kind: ERA, 7 ch)
The vertical's FIRST article, gated from the start (no ungated-draft relapse — the
doc predates the article by hours). Full run via background agents: fact pack →
Opus author (+ Fact ledger, zero [VERIFY] left unresolved) → 5 Sonnet critics in
parallel → Opus reviser → targeted r2 fact-check on all new material → coordinator
gates 6–7 → provisional reader. Artifacts in `audits/philosophy-pipeline/greeks-*`.
The gates earned their keep on the first pass:
- **Fact-checker** — near-clean draft (every quote matched its verified pack entry
  word-for-word; 0 blacklist leaks), but caught: Protagoras out-earned "Phidias or
  any ten other sculptors" (*Meno* 91d), not "ten sculptors"; Zeno's TORTOISE is
  Simplicius' tradition ~1,000 years post-Zeno (Aristotle says "the slowest
  runner") → now a framed aside; one Diogenes anecdote outside its legend-frame.
  The r2 pass caught "translated Aristotle" for al-Fārābī/Avicenna/Averroes (they
  studied existing Arabic translations and wrote commentaries; corrected).
- **Storytelling/understanding** — ch7 graded NEEDS WORK (no worked example, dropped
  throughline) → rebuilt: opens on the 155 BC Carneades embassy, walks the Stoic
  dichotomy + Epicurean death argument as explicit our-illustrations, closes by
  resolving the hook's three questions; the courage elenchus extended one move to
  land the method's "only strips, never builds" scandal.
- **Comprehensiveness** — caught the SKEPTICS dropped entirely (4th Hellenistic
  school; their absence also broke ch7's Cicero setup), Plotinus absent beyond a
  label, the silent Democritus→Epicurus link, thin Chrysippus.
- **Clarity** — 9 gloss gaps incl. "philosophy" itself never defined; the trial of
  Socrates unintelligible without civic-religion-as-law; BC arithmetic unexplained.
- **Framing** — 3 chapters TILTED: Arabic transmission un-named (now al-Fārābī,
  Avicenna, Averroes with what they did), Hipparchia under-framed (now carries the
  DL VI.96 own-chapter evidence), Democritus-atoms cheer reordered brake-first,
  Protagoras' measure doctrine hedged as Plato's packaging.
- **Cross-gate rule held**: the reviser's new Plotinus passage shipped with [VERIFY]
  tags → targeted r2 fact-check verified all three (dates, system, Augustine
  connection), wrote them into the pack as §11, and only then did the coordinator
  clear the tags and name Augustine.
- **Gates 6–7 (coordinator)** — 6 PD images load-checked by the coordinator's own
  hand; the break block ships TEXT-ONLY (no honest "before" image exists; a missing
  image beats a decorative one); coherence clean (two Zenos disambiguated both
  directions, ch2 Anaxagoras setup pays off at the ch3 trial).
- **Integration** — provisional reader `/philosophy/greeks` + `/philosophy` stub
  (the-parties pattern, bronze-olive identity), UNLINKED (URL-only) pending the
  vertical's real front-door design. Faithful transport machine-verified (all 67
  paragraphs byte-identical to the gated md). tsc + eslint clean; both routes 200.
