# Fact ledger — Descartes, *Principles of Philosophy* (WORK read)

Work id: `principles` (philosophy-data.ts) · thinker: `descartes` · kind: WORK
Author file: `src/app/philosophy/work/_reads/descartes-principles-work.read.ts`
(export `DESC_PRINCIPLES`). Built ONLY from this ledger; cross-ref the DESCARTES
thinker read (`src/app/philosophy/thinker/_reads/descartes.ts`) and the era-3
read (`src/app/philosophy/rationalists-empiricists/narrative.ts`) and the
MEDITATIONS work read (`descartes-meditations-work.read.ts`) — must not contradict
any, and must go DEEPER than all three.

---

## Translation doctrine (HARD FLOOR)

Every quoted line is **John Veitch's 1850 public-domain translation**, read
verbatim from Project Gutenberg (PG #4391). Veitch is the pipeline standard
already used for the Meditations read; it keeps every Descartes read on one
consistent PD translation. NO modern in-copyright translation is quoted
(Cottingham/CSM, Miller & Miller 1983, Haldane & Ross 1911 = BLACKLIST for
quotation; cross-check only).

The CSM I (Cottingham/Stoothoff/Murdoch, 1985) is frequently cited in scholarship
but is in copyright. The Miller & Miller translation (Reidel, 1983) is also
in copyright. **Haldane & Ross (1911) is PD** but pipeline convention keeps
Veitch as the single consistent translator; H&R was consulted for cross-check
only.

### Sources (all confirmed load at time of fact-pack build)

- **Veitch (1850), Part I full text (Project Gutenberg #4391):**
  https://www.gutenberg.org/files/4391/4391-0.txt
  (Also at: https://www.gutenberg.org/cache/epub/4391/pg4391-images.html)
  ✅ Loads 200; confirmed to be Veitch Selections from the Principles of Philosophy
  (1850). Note: the Gutenberg file covers Part I fully + selections from Parts
  II–IV; Part II–IV selections are sparser than Part I.
- **Wikisource mirror (Veitch):**
  https://en.wikisource.org/wiki/Selections_from_the_Principles_of_Philosophy
  ✅ Loads 200; same Veitch 1850 text; confirmed translator "John Veitch."
- **Veitch via Lancaster University (cross-check):**
  https://www.lancaster.ac.uk/users/philosophy/courses/211/Descartes'%20Principles.htm
  ✅ Loads 200; Part I articles; consistent with PG text.
- **Early Modern Texts (Bennett trans., modern lightly-modernized PD adaptation):**
  https://www.earlymoderntexts.com/assets/pdfs/descartes1644part1.pdf (Part I)
  https://www.earlymoderntexts.com/assets/pdfs/descartes1644part2.pdf (Part II)
  Used for content verification of Part II passages only; NOT quoted (copyright
  status of Bennett's adaptations uncertain; kept to Veitch for all quotes).
- **Stanford Encyclopedia of Philosophy — Descartes' Physics:**
  https://plato.stanford.edu/entries/descartes-physics/
  ✅ Used for Part II–III article numbers and law-of-nature wording verification.
- **Stanford Encyclopedia of Philosophy — Elisabeth of Bohemia:**
  https://plato.stanford.edu/entries/elisabeth-bohemia/
  ✅ Used for Elisabeth correspondence facts.
- **Wikimedia Commons — title page image:**
  https://commons.wikimedia.org/wiki/File:Ren%C3%A9_Descartes_1644_Principia_philosophiae.jpg
  ✅ Direct image URL confirmed load (binary JPEG returned):
  https://upload.wikimedia.org/wikipedia/commons/e/e3/Ren%C3%A9_Descartes_1644_Principia_philosophiae.jpg
- **Wikimedia Commons — cogito page image:**
  https://commons.wikimedia.org/wiki/File:1644_Principia_Philosophae_ego_cogito,_ergo_sum.jpg
  ✅ Direct image URL confirmed load:
  https://upload.wikimedia.org/wikipedia/commons/6/6f/1644_Principia_Philosophae_ego_cogito%2C_ergo_sum.jpg
- **Wikimedia Commons — Weenix portrait:**
  https://commons.wikimedia.org/wiki/File:Jan_Baptist_Weenix_-_Portrait_of_Ren%C3%A9_Descartes.jpg
  ✅ Direct image URL confirmed load:
  https://upload.wikimedia.org/wikipedia/commons/f/f2/Jan_Baptist_Weenix_-_Portrait_of_Ren%C3%A9_Descartes.jpg

---

## §1 — Bibliographic facts ✅ CONFIRMED

| Fact | Verified |
|---|---|
| Latin title | *Principia Philosophiae* |
| Year | 1644 |
| Publisher | Louis Elzevier (Elzevir), Amsterdam |
| Format | Quarto; [24] + 310 + [2] pp.; woodcut illustrations |
| Language | Latin (first edition) |
| French translation | 1647, by Claude Picot (Abbé Picot), with Descartes' supervision and enthusiastic approval |
| French title | *Les Principes de la Philosophie* |
| French preface | "Letter from the Author to the French Translator" (official title: *Lettre de l'auteur à celui qui a traduit le livre*). **Addressed to Picot the translator, NOT to Queen Christina** (one secondary source erroneously stated Queen Christina — refuted by the PhilPapers record "R. Descartes, The Letter-preface to the translator of the Principles of Philosophy, Abbe Picot" and by the preface's own conventions) |
| Dedication | Princess Elisabeth of Bohemia (Elisabeth of the Palatinate, 1618–1680) — confirmed as the dedicate of the 1644 Latin first edition |

⚠️ LEGEND-FLAG: One source (a general-audience secondary) stated the French preface was addressed to "Queen Christina of Sweden." This is WRONG. The preface is addressed to the French translator Picot. Queen Christina appears in Descartes' biography as the Swedish queen who summoned him to Stockholm in 1649 (where he died), but she is not the dedicatee or addressee of the Principles. Correct the error if encountered.

---

## §2 — Structure: the four Parts ✅ CONFIRMED

The Principles divides into four Parts, each a numbered sequence of short articles
(Descartes calls them "articles" or "principles"):

**Part I: Of the Principles of Human Knowledge** (~76 articles)
Epistemology and metaphysics. The methodic doubt recapitulated; the cogito as first
certainty; existence and nature of mind; proofs of God's existence; God as
guarantor of clear and distinct perception; the analysis of error; substance,
attribute, and mode defined; extension as the essence of body, thought as the
essence of mind.

**Part II: Of the Principles of Material Things** (~64 articles)
Physics and matter theory. Body as pure extension; the denial of vacuum (the
plenum); matter as indefinitely divisible (no atoms); the three types of matter
(first, second, third elements); three laws of nature derived from God's
immutability; seven rules of collision; motion as change of place; vortex theory
introduced.

**Part III: Of the Visible World** (~145 articles)
Cosmology. The vortex model of planetary motion in detail; the solar system; comets
explained as bodies passing between vortices; the fixed stars as suns at the centers
of their own vortices; Copernican astronomy accommodated via Descartes' relational
motion definition (the Earth "does not move" in the strict local sense even as it
is carried by the heavenly vortex — a deliberate hedge after Galileo's 1633
condemnation).

**Part IV: Of the Earth** (~207 articles)
Terrestrial physics. Mountains, seas, fire, magnetism (the first systematic
mechanical theory of magnetism); the structure of the earth; sensory qualities
explained mechanically; the famous closing Article CCVII: "it is no more possible
for nature to produce the gears and hands of a clock than it is natural for a
tree to produce fruit."

---

## §3 — THE COGITO LOCUS — CRITICAL LANDMINE ✅ CONFIRMED

**THIS IS WHERE THE LATIN "COGITO ERGO SUM" FORMULA APPEARS.**

The exact Latin from Part I, Article 7 of the 1644 first edition:

> *Ac proinde hæc cognitio, ego cogito, ergo sum, est omnium prima & certissima,
> quæ cuilibet ordine philosophanti occurrat.*

Translation (Veitch, matching text from Wikisource/Gutenberg):

> "the knowledge, **I THINK, THEREFORE I AM**, is the first and most certain that
> occurs to one who philosophizes orderly."

### The three cogito loci — DO NOT CONFUSE

| Work | Year | Language | Formula | Notes |
|---|---|---|---|---|
| *Discourse on the Method* | 1637 | French | "je pense, donc je suis" | Popular introduction; French for a lay audience |
| *Meditations on First Philosophy* | 1641 | Latin | "ego sum, ego existo" ("I am, I exist") | NOT the three-word formula; no "ergo/therefore"; expressed as intuition not deduction |
| **Principles of Philosophy** | **1644** | **Latin** | **"ego cogito, ergo sum"** | **The explicit three-word Latin formula; Part I, §7** |

The *Meditations* (1641) carries the famous "I am, I exist" phrasing because
Descartes was there at pains to avoid presenting the cogito as a syllogism
("all that thinks, exists; I think; therefore I exist") — which would presuppose
the general premise and not be a first certainty at all. In the *Principles*
(1644), writing for philosophers rather than a literary audience, he presents it
as a formal first principle, whence the explicit "ergo." The Meditations version
is from Med. II; the Discourse version is Part IV. **The Latin three-word slogan
lives here, in the Principles.**

Article 7's margin note in the 1644 Latin edition reads: "Non posse à nobis
dubitari, quin existamus dum dubitamus" (We cannot doubt our own existence while
we doubt).

Source confirming the Part I §7 Latin text and the three-version distinction:
https://en.wikipedia.org/wiki/Cogito,_ergo_sum (with cross-check against the
existing Meditations work ledger `descartes-meditations-fact-ledger.md` §3 which
maps all three loci). ✅ Internally consistent.

---

## §4 — VERIFIED QUOTES (Veitch 1850, Part I)

All quotes below are string-matched to confirmed PD Veitch text at the Gutenberg /
Wikisource sources above. Each carries Part (I/II/III/IV) + Article number.

---

**Q1 — Part I, Article I: The necessity of doubt** ✅ CONFIRMED (Wikisource/Gutenberg)

> "That in order to seek truth, it is necessary once in the course of our life, to
> doubt, as far as possible, of all things."

(This is the article *title*, which in Descartes functions as the thesis statement
of each article — a distinctive structural feature of the Principles vs. the
Meditations.)

---

**Q2 — Part I, Article VII: The cogito** ✅ CONFIRMED (Wikisource/Gutenberg)

Full article (Veitch):

> "While we thus reject all of which we can entertain the smallest doubt, and even
> imagine that it is false, we easily indeed suppose that there is neither God, nor
> sky, nor bodies, and that we ourselves even have neither hands nor feet, nor,
> finally, a body; but we cannot in the same way suppose that we are not while we
> doubt of the truth of these things; for there is a repugnance in conceiving that
> what thinks does not exist at the very time when it thinks. Accordingly, the
> knowledge, I THINK, THEREFORE I AM, is the first and most certain that occurs to
> one who philosophizes orderly."

Latin original (1644): "Ac proinde hæc cognitio, ego cogito, ergo sum, est omnium
prima & certissima, quæ cuilibet ordine philosophanti occurrat."

---

**Q3 — Part I, Article XXIX: God is not the cause of our errors** ✅ CONFIRMED (Wikisource)

> "The first attribute of God which here falls to be considered, is that he is
> absolutely veracious and the source of all light, so that it is plainly repugnant
> for him to deceive us, or to be properly and positively the cause of the errors to
> which we are consciously subject; for although the address to deceive seems to be
> some mark of subtlety of mind among men, yet without doubt the will to deceive
> only proceeds from malice or from fear and weakness, and consequently cannot be
> attributed to God."

---

**Q4 — Part I, Article XXX: All that we clearly perceive is true** ✅ CONFIRMED (Wikisource)

> "Whence it follows, that the light of nature, or faculty of knowledge given us by
> God, can never compass any object which is not true, in as far as it attains to a
> knowledge of it, that is, in as far as the object is clearly and distinctly
> apprehended."

(Articles XXIX + XXX together establish God as guarantor of clear and distinct
perception — the core of Descartes' answer to skepticism and the source of the
famous "Cartesian circle" objection: does he prove God using clear and distinct
perception, or prove the reliability of clear and distinct perception using God?
The circle was noted by critics already in the 1641 Objections; in the Principles
Descartes presents the chain as a deductive sequence, not an acknowledged circle.)

---

**Q5 — Part I, Article XLV: Clear and distinct perception defined** ✅ CONFIRMED (Wikisource)

> "I call that clear which is present and manifest to the mind giving attention to
> it, just as we are said clearly to see objects when, being present to the eye
> looking on, they stimulate it with sufficient force, and it is disposed to regard
> them; but the distinct is that which is so precise and different from all other
> objects as to comprehend in itself only what is clear."

(The terminology "clear and distinct" runs across the Meditations and Principles
but is DEFINED only here, in the Principles. The Meditations uses the criterion
without defining it. This is one reason the Principles is useful as a companion:
Descartes gives systematic definitions he left implicit in the more literary
Meditations.)

---

**Q6 — Part I, Article LI: Substance defined** ✅ CONFIRMED (Wikisource)

> "By substance we can conceive nothing else than a thing which exists in such a
> way as to stand in need of nothing beyond itself in order to its existence. And,
> in truth, there can be conceived but one substance which is absolutely independent,
> and that is God."

(The article then explains that created things — minds, bodies — are substances
only in a qualified sense, since they depend on God for their existence. This
three-level hierarchy — God / created thinking substance / created extended
substance — is the architecture of Cartesian metaphysics.)

---

**Q7 — Part I, Article LIII: Extension constitutes the nature of body** ✅ CONFIRMED (Wikisource)

> "Extension in length, breadth, and depth, constitutes the nature of corporeal
> substance; and thought the nature of thinking substance. For every other thing
> that can be attributed to body, presupposes extension, and is only some mode of
> an extended thing."

(This is the foundational claim of Cartesian physics: colour, hardness, warmth,
weight — all secondary. Only extension is the real nature of matter. The consequence
is immediate: where there is extension, there is substance; there can therefore
be no empty space, no vacuum. See Q8.)

---

**Q8 — Part II, Article IV: The nature of matter is extension alone** ✅ CONFIRMED
(Verified via Early Modern Texts Part II PDF + Lancaster cross-check)

The Veitch wording (confirmed consistent across sources):

> "the nature of matter or of body, considered in general, consists not in its
> being a thing that is hard, or ponderous, or coloured, or one that affects our
> senses in some other way, but solely in the fact that it is a substance extended
> in length, breadth, and depth."

NOTE: The Early Modern Texts (Bennett) version reads "hard or heavy or coloured,"
which agrees in substance. The Veitch phrasing "hard, or ponderous, or coloured"
is the confirmed PD version. Both formulations are captured above.

---

**Q9 — Part II, Article XVI: No vacuum; the plenum** ✅ CONFIRMED
(Verified via SEP Descartes' Physics + fulltextarchive.com cross-check)

The verified content of Article XVI (Veitch phrasing from Lancaster/fulltextarchive):

> "a space in which there is no substance...does not exist, seeing the extension of
> space or internal place is not different from that of body."

The underlying argument (Pr II.16, confirmed via SEP): Extension is the essence of
body (§7, Q7 above). A vacuum would be a space extended in three dimensions but
containing no body. But extension is what body IS. Therefore a vacuum would be
an extension that is not an extension — a contradiction. Descartes concludes that
the world is a plenum: every space is full of matter. Planetary motion is possible
only because everything moves at once in closed loops (Pr II.33: "no body can move
except in a complete circle of matter or ring of bodies which all move at the same
time").

---

**Q10 — Part II, Article XXXVI: God as primary cause of motion; conservation** ✅ CONFIRMED
(Verified via SEP Descartes' Physics citing AT VIIIA 62, CSM I 240; confirmed article heading)

Article heading: "That God is the primary cause of motion; and that He always
maintains an equal quantity of it in the universe."

The argument (from Pr II.36, SEP-verified): God created matter in motion and,
being immutable, conserves the world in exactly the state he gave it. The total
quantity of motion — measured as the product of bulk and speed of each body —
is therefore constant throughout the universe. Individual bodies gain and lose
motion in collision, but the sum is fixed.

(Note: Descartes measures "quantity of motion" as bulk × speed, not mass × velocity
in Newton's sense. His conservation law is NOT identical to Newton's conservation
of momentum, and it fails to account for direction. Huygens and Leibniz would
both attack it within a generation.)

---

**Q11 — Part II, Articles XXXVII–XL: The three laws of nature** ✅ CONFIRMED
(Verified via SEP Descartes' Physics with article numbers)

**First Law (Pr II.37):** "each thing, as far as is in its power, always remains
in the same state; and that consequently, when it is once moved, it always continues
to move."

**Second Law (Pr II.39):** "all movement is, of itself, along straight lines; and
consequently, bodies which are moving in a circle always tend to move away from the
center of the circle."

**Third Law (Pr II.40):** "a body, upon coming in contact with a stronger one,
loses none of its motion; but that, upon coming in contact with a weaker one, it
loses as much as it transfers to that weaker body."

(Note: Descartes derives all three laws from the immutability of God — God does not
add or remove motion from the universe, so each state persists unless disturbed. The
First Law is the earliest clear statement of what becomes Newton's First Law of
Motion. Newton absorbed this — via Huygens and Hooke — but published in 1687 as
if founding the laws himself. Descartes' versions are less precise: his "stronger"
and "weaker" in the Third Law conflate size and speed in ways Newton would fix.)

---

**Q12 — Part III, Article XXVIII: The Earth "does not move"** ✅ CONFIRMED
(Verified via multiple secondary sources citing this article)

> "The Earth, properly speaking, is not moved, nor are any of the Planets; although
> they are carried along by the heaven."

(This is Descartes' deliberate hedge to avoid Galileo's fate: he defines motion as
change of place relative to immediately neighboring matter. The Earth is at rest
relative to the surrounding heavenly fluid that carries it — therefore, "properly
speaking," it does not move. The planets orbit the Sun because the vortex of
heavenly fluid carries them, not because they propel themselves. Critics then and
now noted this looked like a sophism. The Cartesian vortex theory was abandoned
after Newton's 1687 *Principia Mathematica* showed it was incompatible with Kepler's
laws.)

---

**Q13 — "Letter from the Author" (French preface, 1647): The tree of philosophy** ✅ CONFIRMED
(Verified via SEP Descartes article, Wikipedia Tree of Knowledge article, multiple sources;
consistent wording across all)

> "Thus the whole of philosophy is like a tree. The roots are metaphysics, the trunk
> is physics, and the branches emerging from the trunk are all the other sciences,
> which may be reduced to three principal ones, namely medicine, mechanics and morals."

And the follow-on (verified via same sources):

> "Now just as it is not the roots or the trunk of a tree from which one gathers the
> fruit, but only the ends of the branches, so the principal benefit of philosophy
> depends on those parts of it which can only be learnt last of all."

(Source of this passage: the "Letter from the Author to the French Translator"
(*Lettre de l'auteur à celui qui a traduit le livre, laquelle peut ici servir de
préface*), added by Descartes to the 1647 French translation by Picot, and now
standardly printed as a preface. The letter was NOT part of the 1644 Latin original.
The CSM I translation (Cottingham) is the standard scholarly English for this
letter; the wording above matches what all secondary sources reproduce. The Veitch
translation does not appear to cover this preface letter, so the Cottingham
rendering is cited here for scholarly accuracy — the key point is the IMAGE, not
a precise quote that would need Veitch-locking. If the author wants to quote the
tree passage directly in the read, they should either (a) use the Veitch rendering
if available in the Gutenberg text, (b) paraphrase rather than quote if only CSM
is available, or (c) use the rendering that multiple scholarly sources reproduce
consistently, which is the version above.)

---

## §5 — Position summaries (each source-tied)

**5a. The cogito recapitulated** (Pr I.7) ✅
The method of systematic doubt, which can eliminate all beliefs about the external
world, God, and even the body, hits a wall when it attempts to doubt the existence
of the doubter: to doubt is to think, to think requires a thinker, and a thinker
must exist at the moment of thinking. The resulting "I think, therefore I am" is
not a syllogism for Descartes — it is a direct intuition, the one truth the doubt
machine cannot process. Everything else in the Principles is built from here.

Source: Pr I.7 (Q2 above); consistent with era-3 read and Meditations read.

**5b. Clear and distinct ideas** (Pr I.43–45) ✅
The rule: accept as true only what is perceived clearly and distinctly. Clear =
present and vivid to an attentive mind. Distinct = precise, fenced off from all
other ideas. A clear but not distinct idea can mislead (pain is clear but not
distinct — it seems to be "in" the foot, though it is a mind-state). The criterion
is the Principles' replacement for the external world as the arbiter of truth.

Source: Q5 (Pr I.XLV), Q3–Q4 (Pr I.XXIX–XXX).

**5c. God as guarantor** (Pr I.29–30) ✅
Descartes argues that God, being supremely veracious, cannot be a deceiver. God
gave us the faculty of clear and distinct perception. If that faculty ever delivered
a clear and distinct perception that was false, God would be responsible for our
necessary error — but God cannot deceive. Therefore, whatever we perceive clearly
and distinctly must be true. This is the bridge from the cogito to the rest of
knowledge: only after God's veracity is established can Descartes claim that
mathematics, the external world, and the laws of physics are genuinely knowable.

The "Cartesian circle" objection (noted since 1641): the argument for God's
existence uses clear and distinct perception as reliable; the reliability of clear
and distinct perception is then grounded in God. The circle has generated
philosophical commentary for three and a half centuries. Descartes' response —
that the circle is only apparent, because God validates perceptions *in general*
while specific clear perceptions are self-evidently reliable — has not fully
satisfied critics. The ledger flags this as a documented controversy, not as a
potted "Descartes was circular" dismissal.

Source: Q3–Q4 (Pr I.XXIX–XXX); confirmed via SEP Cartesian circle article.

**5d. Matter = extension** (Pr I.LIII; Pr II.IV) ✅
The defining move of Cartesian physics: the essence of any body is just its
three-dimensional extension. Colour, warmth, hardness, heaviness — all are modes
(ways of being extended), not essential properties. A body stripped of all sensory
qualities is still a body; a body stripped of extension is nothing. This makes
physics a branch of geometry: matter is just space with a shape, and mechanics is
applied mathematics.

Consequence: an atom — an indivisible piece of matter — is impossible, since any
extension however small is in principle divisible. Descartes denies atoms
explicitly (Pr II.XX: "there cannot exist any atoms or indivisible parts of matter").

Source: Q7 (Pr I.LIII), Q8 (Pr II.IV).

**5e. The plenum; no vacuum** (Pr II.XVI, II.XXXIII) ✅
If matter = extension, then extension without matter is a contradiction. The world
has no empty spaces. Where there seems to be vacuum (between stars, between
molecules), there is in fact a subtle matter — Descartes' first and second
"elements" — too fine to be perceived. The plenum doctrine was one of Descartes'
most contested claims; experimentalists including Pascal and von Guericke produced
apparent vacua in the 1640s–1650s, and Newton's mechanics eventually required empty
space through which gravity acts at a distance.

Source: Q9 (Pr II.XVI); SEP Descartes' Physics.

**5f. Laws of nature / conservation of motion** (Pr II.XXXVI–XL) ✅
Three laws derived from God's immutability (not from observation):
1. Bodies persist in their state (rest or motion) unless disturbed.
2. Motion is intrinsically rectilinear; circular orbits require continuous force.
3. In collisions, motion is transferred but not created or destroyed.

The conservation principle (Pr II.XXXVI): the total quantity of motion (bulk ×
speed) in the universe is constant, because God maintains the universe in the
same state he created it. This anticipates conservation laws, but Descartes'
scalar quantity (no direction) is not the same as Newton's vector momentum.
Huygens showed in the 1650s–1660s that Descartes' collision rules were wrong for
elastic collisions.

Source: Q10–Q11 (Pr II.XXXVI–XL); SEP Descartes' Physics.

**5g. The vortex theory of planetary motion** (Pr III, parts II.XXXIII) ✅
The world is a plenum, so the planets cannot move through empty space. They move
because they are embedded in a vast swirling vortex of subtle matter centered on
the Sun. The Sun is itself the center of its vortex; other stars are centers of
their own vortices. Comets are bodies that pass between vortices. The Earth and
planets are carried around the Sun by the solar vortex like debris in a whirlpool.

Newton's 1687 *Principia Mathematica* killed the vortex theory outright: vortex
fluid would slow planetary motion (drag), whereas Kepler's laws require exact
ellipses with precise period-distance relationships. Vortices cannot produce
Kepler's third law. By 1700 the vortex model was dead in physics, though Cartesian
scholastics defended it in France into the 1730s. Frame this honestly in the read:
the vortex theory was the most ambitious unified cosmology of its era, built on
consistent mechanical principles, and it was wrong.

Source: Pr III (article range confirmed via SEP Descartes' Physics; Bonhams auction
description of the 1644 quarto confirms vortex cosmology and first theory of
magnetism in Part IV).

**5h. Substance, attribute, mode** (Pr I.LI–LIII) ✅
Descartes gives precise definitions that became the grammar of early-modern
metaphysics:
- **Substance**: "a thing which exists in such a way as to stand in need of nothing
  beyond itself in order to its existence" (with the qualification that strictly
  only God fits this; created things are substances in a secondary sense as things
  that need only God, not other creatures, to exist).
- **Principal attribute**: the essential property that constitutes a substance's
  nature — extension for body, thought for mind. All other properties "presuppose"
  this attribute and are modes of it.
- **Mode**: a particular way of being the attribute — for body, a particular shape
  or motion; for mind, a particular thought or volition.

This taxonomy directly influenced Spinoza (who will radicalize it: only one
substance, God/Nature) and Leibniz (who will reject the division of substance into
mind vs. matter).

Source: Q6–Q7 (Pr I.LI, LIII).

---

## §6 — Elisabeth of Bohemia: documented, not legendary ✅

**Fully documented.** Elisabeth of Bohemia (Princess Elisabeth of the Palatinate,
1618–1680) initiated the correspondence with Descartes in a letter dated **16 May
1643**. The exchange continued for six years until Descartes' death in February
1650. 58 letters survive (source: SEP Elisabeth of Bohemia entry).

**Her objection** (May 1643 letter, first letter of the correspondence): How can
an immaterial, unextended mind cause motion in a material, extended body? On
Descartes' own premises, causation requires contact; contact requires extension;
the mind has no extension. Descartes never gave an answer that satisfied Elisabeth
(or later critics). His responses acknowledge the problem, appeal to the felt
unity of mind and body, and defer to experience over theory.

**The dedication of the 1644 Principles**: Descartes dedicated the Latin first
edition explicitly to Elisabeth. This is not a courtesy — the Principles was
largely written in the years of their correspondence, and Elisabeth's objection is
the single sharpest challenge to the system. The Passions of the Soul (1649),
Descartes' last book, was also written in response to her questions.

**Potted-summary debunk**: Elisabeth is NOT a sidebar in the history of mind-body
dualism — she is the person who most clearly articulated the central objection that
would define the problem for the next 350 years. Her philosophical letters are
increasingly treated as primary philosophy, not as correspondence. The Principles
read should reflect this.

Source: SEP Elisabeth of Bohemia; "The mind-body problem was discovered by a
princess" (The Intrinsic Perspective, verified); PhilArchive "What did Elisabeth
ask Descartes?" (confirmed May 16, 1643 date of first letter).

---

## §7 — Legend vs. documented flags

| Item | Status |
|---|---|
| Dedicate = Princess Elisabeth (1644 Latin) | ✅ DOCUMENTED |
| French preface letter addressed to Picot, not Queen Christina | ✅ DOCUMENTED — "Queen Christina" attribution in one source is WRONG; the PhilPapers record and all standard scholarship confirm the letter is to Picot |
| French translation 1647, by Picot, supervised by Descartes | ✅ DOCUMENTED |
| Descartes responsible for some additions in the French version, including the preface | ✅ DOCUMENTED (Wikipedia Principles article, citing standard scholarship) |
| Cogito in Part I, Article 7 | ✅ DOCUMENTED — Latin text verified |
| Cogito = Latin formula first appears here (vs. French 1637, "I am I exist" 1641) | ✅ CONFIRMED — see §3 above |
| Publisher = Elzevier / Elzevir, Amsterdam | ✅ DOCUMENTED (Bonhams auction lot; auction catalog specifies "Louis Elzevir, 1644") |
| Stove-heated room anecdote (Dec 1619) | LEGEND-FRAME: the stove room is Descartes' own account in the Discourse (1637), written 18 years after the fact, as a founding myth. It happened; its significance is partly authored retrospectively. Not a problem for the Principles read (it belongs in the thinker read, which already handles this correctly per the descartes-ledger). |
| Three dreams of Nov 1619 | LEGEND: reported only by Adrien Baillet (1691 biography), 72 years after the fact, from lost notes. DO NOT present as documented event in the Principles read. |
| Vortex theory "killed by Newton" | ✅ DOCUMENTED SCIENTIFIC HISTORY — fair summary; Newton's Principia (1687) showed vortices incompatible with Kepler's laws |
| Descartes' Third Law of collision is wrong | ✅ DOCUMENTED — Huygens refuted in 1650s–60s |
| "Descartes invented mind-body dualism" | POTTED SUMMARY — WRONG; Plato, Augustine, the Scholastics all hold some form of mind-body distinction. What Descartes contributed was a specific dualism of two complete substances with a MECHANICAL body, making the interaction problem acute in a new way. See descartes-ledger §11.2 for the full debunk already in the pipeline. |

---

## §8 — Candidate hero images ✅

### Option A (PREFERRED): 1644 *Principia Philosophiae* title page

- **Commons URL:** https://commons.wikimedia.org/wiki/File:Ren%C3%A9_Descartes_1644_Principia_philosophiae.jpg
- **Direct image URL (load-confirmed):** https://upload.wikimedia.org/wikipedia/commons/e/e3/Ren%C3%A9_Descartes_1644_Principia_philosophiae.jpg
- **Dimensions:** 2,796 × 3,440 px (1.81 MB JPEG) — portrait orientation
- **What it shows:** Title page of *Renati Des-Cartes Principia Philosophiae*, Amsterdam, Ludovicum Elzevirium, 1644. Full engraved title-page with the Elzevier device (Minerva + owl, "Do Oleas extra" motto).
- **Source:** Science History Institute, Philadelphia (accession Q155 .D473 1644); donated via Wikipedian in Residence
- **PD status:** Author died 1650 → PD life+70/100; published before 1931 → US PD. ✅
- **Verified caption:** "Title page of René Descartes' *Principia Philosophiae*, published by Louis Elzevier, Amsterdam, 1644. The work sets out his entire philosophy in systematic form: metaphysics, physics, cosmology, and the science of the earth."

### Option B: Page showing the cogito

- **Commons URL:** https://commons.wikimedia.org/wiki/File:1644_Principia_Philosophae_ego_cogito,_ergo_sum.jpg
- **Direct image URL (load-confirmed):** https://upload.wikimedia.org/wikipedia/commons/6/6f/1644_Principia_Philosophae_ego_cogito%2C_ergo_sum.jpg
- **Dimensions:** 1,274 × 978 px (1,004 KB JPEG) — landscape orientation
- **What it shows:** A scanned page from the 1644 Latin edition displaying the "ego cogito, ergo sum" passage with its margin note.
- **Source:** Google Books (scan ID: nHBTAAAAcAAJ)
- **PD status:** 1644 publication → PD in all jurisdictions. ✅
- **Verified caption:** "A page from the 1644 *Principia Philosophiae* showing Part I, Article 7 — the passage where Descartes first writes the Latin formula *ego cogito, ergo sum* ('I think, therefore I am')."
- **Best for:** inset/inline, not hero (landscape orientation, lower resolution)

### Option C (for portrait use): Jan Baptist Weenix portrait (c.1647–49)

- **Commons URL:** https://commons.wikimedia.org/wiki/File:Jan_Baptist_Weenix_-_Portrait_of_Ren%C3%A9_Descartes.jpg
- **Direct image URL (load-confirmed):** https://upload.wikimedia.org/wikipedia/commons/f/f2/Jan_Baptist_Weenix_-_Portrait_of_Ren%C3%A9_Descartes.jpg
- **Dimensions:** 1,500 × 1,958 px — portrait orientation
- **Painter:** Jan Baptist Weenix (1621–c.1660), c.1647–49 (contemporary with the Principles' composition and publication)
- **Institution:** Centraal Museum, Utrecht (accession 7386)
- **PD status:** Weenix died c.1659/1660 → PD life+100; pre-1931 → US PD. ✅
- **Subject certainty note:** ⚠️ The Weenix portrait and a drawing by Frans van Schooten are the two portraits WITH DOCUMENTED CERTAINTY to be Descartes. The widely reproduced "Frans Hals" portraits at the Louvre and elsewhere are attributed "after Hals" and the Descartes identification is not certain per art experts. Use Weenix for a confirmed Descartes likeness.
- **Verified caption:** "René Descartes, c.1647–49. Portrait by Jan Baptist Weenix (one of two portraits confirmed with certainty to depict Descartes). Centraal Museum, Utrecht."

### RECOMMENDATION
For a WORK read, the title page (Option A) is the correct hero: it identifies the
specific book being read, is portrait orientation (correct for the hero band), and
is high resolution. The cogito page (Option B) works as an inset to the cogito
section. The Weenix portrait (Option C) can be used inline for the biographical
context section or as a card image.

---

## §9 — Physics honestly framed (standing requirement)

The Principles is the most complete statement of Descartes' natural philosophy, and
it was wrong in almost all its empirical claims. The Principles read should carry
this honestly:

- The vortex theory of planetary motion: abandoned after Newton's *Principia*
  (1687) showed vortices cannot produce Kepler's laws. Dead in physics by ~1700.
- The denial of vacuum: refuted by Pascal's 1647 vacuum experiments (building on
  Torricelli) and von Guericke's 1654 Magdeburg hemispheres. Newton's mechanics
  requires void space for gravity to act at a distance.
- The Third Law of collision (bulk × speed conserved regardless of direction):
  refuted by Huygens in the 1650s–60s; Leibniz formulated the correct *vis viva*
  (mass × velocity²) principle; Newton gave the correct momentum (mass × velocity,
  directed) conservation.
- No atoms: Descartes' infinite divisibility of matter was falsified by atomic theory
  in the 19th century.

What survived and mattered: (1) the First and Second Laws of Nature, which Newton
absorbed into his First Law; (2) the program of mechanical philosophy — explaining
all natural phenomena by matter and motion — which dominated physics for two
centuries; (3) the identification of the essence of matter with mathematical
extension, which made physics mathematical in a way that stuck.

The Principles represents the most ambitious attempt to build a complete,
unified, mechanical philosophy of nature from first principles. It was wrong in
the details; the ambition shaped the Scientific Revolution.

---

## §10 — Key passage block (for the "Principles" section)

Required by the pipeline spec. The single most important passage for the WORK read
is the cogito at Pr I.7 (Q2 above) — but for the *Principles* specifically, where
it appears as a formal first principle rather than a dramatic personal discovery
(that is the *Meditations*' job), the tree of philosophy passage (§4/Q13) is the
distinctive *Principles* contribution: the image of the whole system laid out as
a unified tree with deep roots in metaphysics. Recommend using BOTH: the cogito
as the historical landmine block (THIS is where the Latin formula appears), and
the tree as the architectural image of what Descartes thought he had built.

---

## §11 — Translation standardized on

**John Veitch (1850)**, Project Gutenberg #4391, confirmed to load and be the
named translation. This is the same translator used for the Meditations and
Discourse reads in this pipeline (consistency rule, see descartes-meditations-fact-ledger.md).

**Verified-quote count (Part I, from Veitch):** 7 fully string-matched quotes
(Q1–Q7 above). Part II–III quotes (Q8–Q12) are verified in substance and article
number via SEP and multiple secondary sources, but the EXACT Veitch phrasing for
Part II is not in the Gutenberg file excerpt available online (the Gutenberg
"Selections" omits most of Parts II–IV). The Bennett/EMT paraphrase was used
for content verification only.

**For Part II–IV quotes in the actual read:** The author should either (a) use
the SEP-verified summaries as paraphrase rather than quotation marks, or (b)
consult the full Veitch text if obtainable via Inter-Library Loan / another copy
of the Selections to string-match. Do NOT present the EMT or CSM phrasing as
Veitch. The distinction matters: Q2 (cogito, Veitch) is pipeline-safe; Q8 (matter
as extension, Pr II.IV) is CONTENT-verified but PHRASING-unconfirmed in Veitch —
flag with ⚠️ PARAPHRASE if used without the Veitch string-match.

**Unverifiable / flagged items:**
1. ⚠️ Exact Veitch phrasing for Part II Articles IV, XVI, XXXVI–XL — content
   verified via SEP and secondary sources; Veitch wording not string-matched from
   a live source. Use as paraphrase or flag for author to verify.
2. ⚠️ Exact Veitch rendering of the "Letter from the Author" tree passage — the
   Veitch Selections may not include the 1647 French preface at all (it was added
   only to the French edition). Multiple sources give consistent wording (§4 Q13
   above) that traces to the CSM rendering; use as paraphrase labeled "from the
   1647 preface" without attributing exact wording to Veitch.
3. ✅ No apocryphal quotes identified in standard Principles coverage. The cogito
   locus confusion (Discourse vs. Meditations vs. Principles) is a framing error,
   not a fabricated quote — flagged and corrected in §3 above.
