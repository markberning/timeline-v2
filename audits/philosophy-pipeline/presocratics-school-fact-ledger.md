# Fact ledger — PRE-SOCRATICS: the invention of philosophy (Philosophy SCHOOL read, kind = TRADITION)

**Scope:** the Pre-Socratics as a MOVEMENT — the shift from *mythos* (explaining the
world by gods and stories) to *logos* (explaining it by impersonal natural principles
and reasoned argument), i.e. the birth of Western philosophy and natural science.
Arc: the Greek setting (Ionia, the colonies) → the Milesians and the search for the
*archē* (Thales / Anaximander / Anaximenes) → Pythagoras and number → the great axis,
Heraclitus (flux) vs Parmenides and the Eleatics (changeless Being) → the pluralists
and atomists answering Parmenides (Empedocles / Anaxagoras / Leucippus + Democritus) →
the Sophist coda → how it set the table for Socrates, Plato, Aristotle.

**Built:** 2026-06-14, per `audits/philosophy-content-pipeline.md`. Template = the
shipped Platonism school read (`src/app/philosophy/school/_reads/platonism.ts`). Every
quotation below was verified word-for-word against the linked PD source on this date
(fetched, not recalled). Hub links verified against `src/lib/philosophy-data.ts`.

**HARD FACT-DISCIPLINE NOTE (the spine of this pack):** the Pre-Socratics survive ONLY
as fragments quoted by later authors and as doxography (later summaries, the biggest
vectors being Aristotle, his pupil Theophrastus, the much-later Simplicius, Sextus
Empiricus, and Diogenes Laertius). NOTHING complete survives. Much of the biography is
late legend. The narration says so plainly and never asserts a fragment it cannot cite.
Fragments are cited by **DK number** (Diels–Kranz, the standard reference numbering) AND
by Burnet's own fragment numbering where quoted from Burnet. Quotations are PD only.

**Status tags (same scheme as all philosophy packs):**
- `VERIFIED` — exact wording confirmed against the linked source, translation named.
- `PARAPHRASE-ONLY` — idea confirmed, no verbatim PD English verified; never in quotation marks.
- `DOCUMENTED` — fact with a close named source.
- `LATE-TRADITION` / `LATE-LEGEND` — earliest source significantly later; frame explicitly.
- `FRAMING-TRAP` — common potted-summary error; corrected in prose.

## PD-translation landscape
- **John Burnet, *Early Greek Philosophy*** (3rd ed., 1920) — the PD workhorse for
  fragments + doxography. Author died 1928; pre-1931. On Wikisource:
  `https://en.wikisource.org/wiki/Early_Greek_Philosophy`. All fragment quotations below
  are Burnet's English unless noted. Burnet's fragment numbers differ from DK; both given.
- Diels–Kranz (DK) numbering is the modern standard reference; cited for locating each
  fragment. The DK *German/Greek* text is not quoted — only Burnet's PD English is.
- **BLACKLIST (in-copyright):** Kirk–Raven–Schofield *The Presocratic Philosophers*
  (KRS, 1957/1983); the Loeb *Early Greek Philosophy* (Laks–Most, 2016); Robin Waterfield
  and other modern Penguin/Oxford translations. Never quote these.

## Hub-link verification (src/lib/philosophy-data.ts, lines 101–104)
- `thales` → `/philosophy/thinker/thales` ✅ (id confirmed, dates c.626–548 BC, school 'pre')
- `pythagoras` → `/philosophy/thinker/pythagoras` ✅ (c.570–495 BC)
- `heraclitus` → `/philosophy/thinker/heraclitus` ✅ (c.535–475 BC)
- `parmenides` → `/philosophy/thinker/parmenides` ✅ (c.515–450 BC)
- The school `pre` = "Pre-Socratics", color #8a9b6e, range "c.585 – 450 BC",
  oneLine "The first people to explain the world by nature instead of the gods." ✅
- Anaximander, Anaximenes, Empedocles, Anaxagoras, Leucippus, Democritus, the Sophists
  have NO hubs — covered in prose only, no internal links to them.

---

## HERO IMAGE (born-verified)
- **File:** `File:Miletus - Ancient Greek theatre 01.jpg` (Wikimedia Commons)
- **Thumb URL used:** `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Miletus_-_Ancient_Greek_theatre_01.jpg/1280px-Miletus_-_Ancient_Greek_theatre_01.jpg`
- **HTTP:** `curl -I` → **HTTP/2 200**, content-type image/jpeg (checked 2026-06-14).
- **Dimensions:** original 4983×1530 (wide landscape — ideal for the hero band).
- **Rights:** **CC BY-SA 3.0**, photographer **Bernard Gagnon (User:Bgag), 2014-05-31.**
  Modern photo of an ancient site; CC BY-SA acceptable per the pipeline image rule when
  credited. Credit carried in the caption.
- **Why:** the great theatre of Miletus, the Ionian Greek city on the Anatolian coast
  that produced Thales, Anaximander, and Anaximenes — the literal birthplace of Western
  philosophy and natural science. Landscape, on-theme, not the School of Athens. `DOCUMENTED`.

## INLINE FIGURE (born-verified)
- **File:** `File:Anaximander Mosaic.jpg` (Wikimedia Commons)
- **URL used:** `https://upload.wikimedia.org/wikipedia/commons/7/7a/Anaximander_Mosaic.jpg`
- **HTTP:** `curl -I` → **HTTP/2 200** (checked 2026-06-14).
- **Dimensions:** 698×768 (near-square / slightly portrait → render `portrait: true`).
- **Rights:** **Public domain** (ancient Roman mosaic, early 3rd c. AD; faithful photo of
  a >100-year-old 2-D work). License field reads "Public domain".
- **Subject:** a Roman-era floor mosaic (Trier, early 3rd c. AD) showing a seated figure
  with a sundial, identified as **Anaximander** — one of the only ancient depictions of a
  Milesian. Placed in the Milesians chapter. `DOCUMENTED` (the identification is the
  standard one; the inscription/sundial support it, framed as "identified as").

---

## §1 — THE MYTHOS → LOGOS MOVE (the break)
- **The term "Pre-Socratic"** is a modern, slightly misleading label: it groups thinkers
  "before Socrates" even though some (Democritus, the Sophists) were Socrates' contemporaries
  or younger. It is a category of convenience, not a self-chosen school. `DOCUMENTED` /
  `FRAMING-TRAP` (say so; they did not call themselves this).
- **The break = mythos → logos.** Before: the world is explained by *theogony* — Hesiod's
  *Theogony* (c. 700 BC) tells the cosmos as a family tree of gods (Chaos, then Gaia, etc.);
  storms are Zeus, the sea is Poseidon, the world is a story about wills. After: the
  Milesians explain the world by impersonal natural principles and reasoned argument that
  others can criticize and improve. `DOCUMENTED` (Hesiod's *Theogony* is the standard
  "before"; Burnet, *EGP* Introduction, frames Ionian science as the new mode).
- **Honesty floor:** their actual writings are LOST; we have fragments + doxography
  (Aristotle, Theophrastus, Simplicius, Sextus, Diogenes Laertius). Diogenes Laertius
  (3rd c. AD) is the chief legend-vector — flagged wherever biography is used. `DOCUMENTED`.
- **Western-overclaim guard:** the prose says "Western philosophy and natural science begin
  here," NOT "philosophy begins here." (Indian and Chinese traditions exist independently.) `FRAMING-TRAP`.

## §2 — THE MILESIANS AND THE ARCHĒ
- **archē** = the underlying first principle / origin / governing stuff of all things.
  Aristotle's term for what the Milesians sought. `DOCUMENTED` (Aristotle, *Metaphysics*
  A.3, is the doxographic source; Burnet, *EGP* ch. I).
- **Thales (c. 624–546 BC), of Miletus:** held the first principle is **water**; the earth
  floats on water. Our source is Aristotle, reporting cautiously. Burnet, *EGP* ch. I:
  Aristotle "suggests several explanations… as conjectures," and the meteorological view
  (water as solid, liquid, vapour → "the world-process from water and back to water again")
  is the most probable reconstruction. `DOCUMENTED`. Thales wrote nothing that survives;
  the famous anecdotes (predicting the 585 BC eclipse; falling in a well while watching the
  stars; cornering the olive-press market) are `LATE-TRADITION` / `LATE-LEGEND`
  (Herodotus for the eclipse; Plato *Theaetetus* 174a for the well; Aristotle *Politics* I
  for the olive presses) — framed as tradition, never asserted flat.
- **Anaximander (c. 610–546 BC), of Miletus:** the first principle is the **apeiron**
  (ah-PY-ron), "the Boundless" — an indefinite, limitless stuff that is none of the
  ordinary opposites. He is credited with the first surviving sentence of Western
  philosophy. **VERIFIED quotation (Burnet, *EGP* ch. I; DK 12 B1):**
  > "And into that from which things take their rise they pass away once more, as is
  > meet; for they make reparation and satisfaction to one another for their injustice
  > according to the ordering of time."
  Burnet reads it through the conflict of opposites (hot/cold, dry/moist) paying penalty
  to one another. `VERIFIED`. Anaximander also drew the first map and proposed a proto-
  evolutionary view (humans developed from creatures of another kind, born from moisture).
  `DOCUMENTED` (doxography; framed as "he is credited with").
- **Anaximenes (c. 586–526 BC), of Miletus:** the first principle is **air** (*aēr*),
  which becomes all other things by **condensation and rarefaction** — the first explicit
  MECHANISM in the tradition. **VERIFIED quotation (Burnet, *EGP* ch. I):**
  > "When it is dilated so as to be rarer, it becomes fire; while winds, on the other
  > hand, are condensed Air."
  Burnet calls the rarefaction/condensation mechanism a "notable advance" that made "the
  Milesian cosmology consistent for the first time." `VERIFIED` (quote) + `DOCUMENTED`.

## §3 — PYTHAGORAS AND NUMBER
- **Pythagoras (c. 570–495 BC), of Samos,** emigrated to Croton in southern Italy
  (Magna Graecia) c. 530 BC and founded a religious-philosophical brotherhood. He wrote
  NOTHING; everything is later report, and the Pythagoreans attributed their own discoveries
  back to the master ("*autos epha*," "he himself said it"). The biography is heavily
  legendary (the golden thigh, recollecting past lives, the bean taboo). `LATE-TRADITION` /
  `LATE-LEGEND` — framed as tradition. Source-warning: Diogenes Laertius VIII + Iamblichus
  (much later, hagiographic).
- **Core doctrine:** **"all things are number"** / reality is grounded in number and ratio.
  Reported by Aristotle, *Metaphysics* A.5: the Pythagoreans "supposed the elements of
  numbers to be the elements of all things." `DOCUMENTED` (Aristotle is the source; the
  one-line slogan is reported doctrine, not a verbatim Pythagoras quote — so framed as
  "they held," never quoted from him).
- **The discovery under it:** musical concords correspond to whole-number ratios of string
  length (octave 2:1, fifth 3:2, fourth 4:3). This is the empirical core that made "number
  governs the cosmos" feel discovered, not invented. `DOCUMENTED` (tradition; the harmonic-
  ratio discovery is attributed to the early Pythagoreans). The "harmony of the spheres"
  (heavenly bodies producing musical ratios) is Pythagorean. `DOCUMENTED`.
- **The "Pythagorean theorem"** caution: the right-triangle relation was known to the
  Babylonians centuries earlier; attaching Pythagoras's name to it is `FRAMING-TRAP` —
  the prose notes the relation predates him and the attribution is traditional.
- **Hippasus** (a Pythagorean) is associated with the discovery of incommensurable
  magnitudes (irrational numbers — e.g. the diagonal of a unit square), which embarrassed
  the all-is-whole-number creed; the legend that he was drowned for revealing it is
  `LATE-LEGEND` — framed as the story it is.

## §4 — THE GREAT AXIS: HERACLITUS vs PARMENIDES
### Heraclitus of Ephesus (c. 535–475 BC) — all is flux, held by the logos
- Wrote a single obscure book (lost); nicknamed "the Obscure" / "the Riddler." Survives in
  ~130 fragments quoted by others. `DOCUMENTED`.
- **The logos fragment (Burnet fr. 2; DK 22 B1) — VERIFIED:**
  > "Though this Word is true evermore, yet men are as unable to understand it when they
  > hear it for the first time as before they have heard it at all."
  **logos** = here, the rational principle / measure / formula that orders the world (and
  also "word/account"). `VERIFIED`.
- **The river fragment (Burnet frs. 41–42; DK 22 B12 / the "B91" tradition) — VERIFIED:**
  > "You cannot step twice into the same rivers; for fresh waters are ever flowing in upon you."
  NOTE/`FRAMING-TRAP`: the famous bald slogan **"everything flows" (*panta rhei*)** is a
  later doxographic summary (via Plato *Cratylus* 402a and Simplicius), NOT a verbatim
  Heraclitus fragment. Prose frames *panta rhei* as the later tag, and quotes the river
  fragment as the genuine line. `VERIFIED` (river) + `FRAMING-TRAP` (panta rhei).
- **War/strife as ordering (Burnet fr. 44; DK 22 B53) — VERIFIED:**
  > "War is the father of all and the king of all; and some he has made gods and some men,
  > some bond and some free."
- **The ever-living fire (Burnet fr. 20; DK 22 B30) — VERIFIED:**
  > "This world, which is the same for all, no one of gods or men has made; but it was ever,
  > is now, and ever shall be an ever-living Fire, with measures of it kindling, and measures
  > going out."
- **Hidden attunement (Burnet fr. 47; DK 22 B54) — VERIFIED:**
  > "The hidden attunement is better than the open."
- Reading: change is real and constant, but it is not chaos — it is governed by the logos,
  a hidden measure (the tension of opposites, like a strung bow or lyre). `DOCUMENTED`.

### Parmenides of Elea (c. 515–450 BC) — reason proves Being is one and changeless
- Of Elea (Velia, southern Italy); founder of the **Eleatic** school. Wrote a philosophical
  poem in hexameter; a goddess delivers the argument. Survives in fragments. `DOCUMENTED`.
- **The two ways / "It is" (Burnet fr. 4–5; DK 28 B2 + B8) — VERIFIED (Burnet):**
  > "the only two ways of search that can be thought of. The first, namely, that It is,
  > and that it is impossible for it not to be, is the way of belief, for truth is its
  > companion."
  (Burnet's frs. 4 and 5; the "It is, and it is impossible for it not to be" clause is the
  doctrinal core.) `VERIFIED`.
- **Thinking and being are the same (Burnet fr. 5; DK 28 B3) — VERIFIED:**
  > "It is the same thing that can be thought and that can be."
  `VERIFIED`. (This is the line on which Idealism is later built; framed carefully, not
  over-modernized.)
- **No coming-into-being (Burnet fr. 8; DK 28 B8) — VERIFIED:**
  > "How, then, can what is be going to be in the future? Or how could it come into being?
  > If it came into being, it is not."
  And: "Thus is becoming extinguished and passing away not to be heard of." `VERIFIED`.
- Reading: if "what is not" is literally nothing and cannot be thought or spoken, then
  coming-to-be (from nothing) and change (becoming what one is not) are impossible. Reason
  proves Being is ungenerated, indivisible, motionless, one. The senses, showing a world of
  change, deceive. This is the first sustained piece of deductive metaphysics. `DOCUMENTED`.
- **Zeno of Elea** (Parmenides' pupil) defended this with paradoxes of motion (Achilles and
  the tortoise; the arrow). NOTE/`FRAMING-TRAP`: Aristotle reports Zeno's argument as "the
  slowest runner can never be caught by the fastest"; the **tortoise** is Simplicius'
  much-later (c. 6th c. AD) telling — frame the tortoise as the later dress, consistent with
  the Greeks era read. `DOCUMENTED` + `FRAMING-TRAP`.
- **The stakes (the inheritance):** Heraclitus says change is everything; Parmenides says
  change is impossible. The problem of change and permanence is the question every later
  Greek philosopher inherits. `DOCUMENTED`.

## §5 — THE PLURALISTS AND ATOMISTS ANSWER PARMENIDES
The post-Parmenidean move: accept his logic (nothing comes from nothing; true being does not
perish) but SAVE the appearances by making the underlying reals many and unchanging, with
change reduced to rearrangement.
- **Empedocles of Akragas (c. 494–434 BC):** four eternal, unchanging **roots** (later
  called the four elements) — fire, air, earth, water — mixed and separated by two forces,
  **Love** (Philotes) and **Strife** (Neikos). Nothing is created or destroyed; "change"
  is just the roots combining and parting. **VERIFIED (Burnet; DK 31 B6):**
  > "Hear first the four roots of all things: shining Zeus, life-bringing Hera, Aidoneus
  > and Nestis…"
  (mythic names for the four roots.) **VERIFIED (Burnet; DK 31 B17):**
  > "At one time it grew to be one only out of many; at another, it divided up to be many
  > instead of one… at one time all uniting in one through Love, at another each borne in
  > different directions by the repulsion of Strife."
  Empedocles is also `LATE-LEGEND` magnet (the leap into Etna) — framed as legend, not used.
- **Anaxagoras of Clazomenae (c. 500–428 BC):** infinitely divisible matter — "a portion of
  everything in everything" — set in order by **Nous** (Mind). First time mind is named as
  the cosmic ordering principle. **VERIFIED (Burnet; DK 59 B1):**
  > "All things were together, infinite both in number and in smallness."
  **VERIFIED (Burnet; DK 59 B12):**
  > "Nous is infinite and self-ruled, and is mixed with nothing, but is alone itself by
  > itself… [it] has power over all things… it is the thinnest of all things and the purest."
  **nous** (rhymes with "house") = mind / intelligence. NOTE: Plato's Socrates (in *Phaedo*
  97–98) complains Anaxagoras introduced Mind and then barely used it — a documented later
  criticism, available as a forward beat. Anaxagoras was prosecuted for impiety in Athens
  (for saying the sun is a glowing stone, not a god) and went into exile. `DOCUMENTED`.
- **Leucippus & Democritus — the atomists (Leucippus fl. c. 440 BC; Democritus c. 460–370
  BC, of Abdera):** reality is **atoms** (Greek *atomos*, "uncuttable" — indivisible, eternal,
  unchanging bits of being) moving in the **void** (empty space, "what is not"). All change
  is atoms rearranging; qualities like color and taste are not in the atoms themselves but
  in us. **VERIFIED (the one surviving Leucippus fragment, Burnet; DK 67 B2):**
  > "Naught happens for nothing, but everything from a ground and of necessity."
  **VERIFIED (Burnet, paraphrasing Leucippus' doctrine — quoted as Burnet's words, not a
  fragment):**
  > "He laid down that the substance of the atoms was compact and full, and he called them
  > what is, while they moved in the void which he called what is not."
  The atomists are the boldest answer to Parmenides: they grant unchanging being (each atom)
  AND grant the void Parmenides forbade, so motion and plurality are saved. Democritus is
  `LATE-LEGEND`-wrapped ("the laughing philosopher"; blinding himself — Diogenes Laertius)
  — framed, not asserted. Forward beat: Epicurus and Lucretius will revive atomism (the
  Greeks era read already carries the Democritus→Epicurus link). `VERIFIED` + `DOCUMENTED`.

## §6 — THE SOPHIST CODA + THE HANDOFF TO SOCRATES
- **The Sophists** (5th c. BC) — itinerant professional teachers of rhetoric and *aretē*
  (excellence/virtue, for success in the democratic city). They turned philosophy from the
  cosmos toward man, language, law, and persuasion. `DOCUMENTED`.
- **Protagoras of Abdera (c. 490–420 BC):** "**Man is the measure of all things** — of the
  things that are, that they are, and of the things that are not, that they are not."
  Preserved by Plato (*Theaetetus* 152a) and Sextus Empiricus. `DOCUMENTED` — the line is
  genuine reported doctrine; framed as preserved-by-Plato, since no PD verbatim-from-
  Protagoras text survives. (The pipeline's Greeks era read already handles Protagoras'
  fee/agnosticism; this read keeps the coda short and points forward.)
- **The handoff:** the Pre-Socratics asked "what is the world made of, and is change real?"
  Socrates (470–399 BC) turns the question to "how should I live, and what is justice,
  courage, the good?" — ethics and definition over cosmology. Plato then weds the
  Parmenidean changeless-being intuition (the Forms) to the demand for knowledge; Aristotle
  systematizes the study of nature the Milesians began. The Pre-Socratics set the whole
  table. `DOCUMENTED`. (Cross-ref the shipped Greeks era read + Platonism school read;
  consistent: two Zenos disambiguated, Democritus→Epicurus link, mythos→logos framing.)

---

## CONTESTED / PARAPHRASED / LEGEND-FRAMED material (one-paragraph honesty roll-up)
Everything pre-Socratic is reconstruction: the originals are lost and we read them through
later, sometimes hostile, hands. Specifically framed AS tradition/legend, never asserted
flat: Thales' eclipse-prediction, well, and olive-press anecdotes; the whole Pythagoras
biography (golden thigh, transmigration, bean taboo) and the attribution of the right-
triangle theorem (Babylonian-known earlier); Hippasus drowned for the irrationals;
Empedocles' leap into Etna; Democritus self-blinding and "laughing philosopher." Two
quote-traps corrected in prose: **"everything flows" (*panta rhei*)** is a later summary
(Plato/Simplicius), not a verbatim Heraclitus fragment (the genuine line is the river
fragment, DK B12); and **Zeno's "tortoise"** is Simplicius' much-later dress on what
Aristotle reports only as "the slowest runner" (consistent with the Greeks era read). The
term **"Pre-Socratic"** itself is flagged as a modern label of convenience (some were
Socrates' contemporaries). Pythagoras' "all things are number" and Protagoras' "man is the
measure" are quoted as **reported doctrine** (Aristotle; Plato/Sextus), not as verbatim-
from-the-man text, because no PD primary text in their own words survives. The Anaximander
sentence (DK B1) is treated as the earliest surviving sentence of the tradition, with the
standard caveat that even it reaches us embedded in Simplicius' quotation of Theophrastus.
All five verbatim Heraclitus fragments, all three Parmenides fragments, both Empedocles
fragments, both Anaxagoras fragments, and the Leucippus fragment are Burnet (PD, 1920),
verified word-for-word against Wikisource on 2026-06-14.
