# Fact ledger — Aristotelianism SCHOOL read (kind = TRADITION)

The "whole tradition" deep read for the Aristotelian camp (school id `arist`), the
analog of the shipped Platonism school read (`src/app/philosophy/school/_reads/platonism.ts`).
Every concrete claim in `aristotelianism-school.read.ts` mapped to its source. Quotations
are VERIFIED public-domain translations against a live URL (HTTP checked); positions
without a clean PD English text are PARAPHRASE-ONLY and never set in quotation marks.
Dates/claims carry their basis. Hero + figure images HTTP-checked.

---

## QUOTES — all VERIFIED public domain, against a live URL

1. **Aristotle, "All men by nature desire to know."** (*Metaphysics* I.1, 980a)
   - Translation: **W. D. Ross, 1908** (public domain, pre-1929).
   - Verified wording: "All men by nature desire to know. An indication of this is the
     delight we take in our senses; for even apart from their usefulness they are loved
     for themselves; and above all others the sense of sight."
   - URL: https://en.wikisource.org/wiki/Metaphysics_(Ross,_1908)/Book_1 (confirmed
     opening sentence verbatim, 2026-06-14).
   - Used: hook + ch1 epigraph.

2. **Maimonides, "lost in perplexity and anxiety."** (*Guide for the Perplexed*,
   Introduction, "The Object of the Guide")
   - Translation: **M. Friedländer, 2nd ed. 1904** (public domain).
   - Verified wording (exact, from the Friedländer text body): "The object of this
     treatise is to enlighten a religious man who has been trained to believe in the
     truth of our holy Law, who conscientiously fulfils his moral and religious duties,
     and at the same time has been successful in his philosophical studies. Human reason
     has attracted him to abide within its sphere; and he finds it difficult to accept as
     correct the teaching based on the literal interpretation of the Law... Hence he is
     lost in perplexity and anxiety."
   - URL: https://archive.org/stream/guideforperplexe00maimiala/guideforperplexe00maimiala_djvu.txt
     (full text downloaded + grepped; the passage appears in the Introduction, p.2,
     verbatim, 2026-06-14). Reader-facing sourceUrl in caption uses the same archive.org item.
   - Used: ch4 epigraph + ch4 prose. Maimonides id IS live (`maimonides`,
     `src/lib/philosophy-data.ts:115`) → linked.

3. **Aquinas, "grace does not destroy nature but perfects it."** (*Summa Theologiae*
   I, q.1, a.8, ad 2)
   - Translation: **Fathers of the English Dominican Province, 1920** (public domain).
   - Verified wording: "Since therefore grace does not destroy nature but perfects it,
     natural reason should minister to faith as the natural bent of the will ministers to
     charity."
   - Latin: *Gratia non tollit naturam, sed perficit.*
   - URL: https://www.newadvent.org/summa/1001.htm (Q1 A8, reply to objection 2;
     confirmed verbatim, 2026-06-14).
   - Used: ch5 epigraph + ch5 prose.

4. **Whitehead, "footnotes to Plato"** — NOT used as a quote here (it anchors the
   Platonism read's close; the Aristotelian tradition's mirror line is Dante's, below).

5. **Dante on Aristotle, "the master of those who know" / Averroes "who the great
   Comment made."** (*Inferno* IV, the limbo of the virtuous pagans)
   - Translation: **Henry Wadsworth Longfellow, 1867** (public domain) for "the Master
     of those who know" (Inferno IV.131, "maestro di color che sanno"); Averroes appears
     in the same canto, IV.144, "Averrois, che 'l gran comento feo" → Longfellow "Averroes,
     who the great Comment made."
   - URL: https://www.gutenberg.org/files/1001/1001-h/1001-h.htm (Longfellow Inferno;
     PD). NOTE: the read PARAPHRASES Dante's placement and the epithets rather than block-
     quoting, so the exact translation wording is not load-bearing; the facts (Dante put
     Aristotle first among the philosophers as "the master of those who know," and named
     Averroes "the Commentator") are the verified claims. Britannica/Wikipedia/SEP all
     confirm "the Commentator" as Averroes' standard Latin epithet.

### PARAPHRASE-ONLY (no clean PD English of the primary text → never quoted)
- **al-Fārābī** — no thinker hub; named, not linked. Position (logic, the harmony of
  Plato and Aristotle, the philosopher-prophet) paraphrased.
- **Avicenna (Ibn Sīnā)** — essence/existence distinction; the Necessary Existent vs
  contingent beings; the Flying Man. All PARAPHRASED. Sources: SEP "Essence and
  Existence in Arabic and Islamic Philosophy"
  (https://plato.stanford.edu/entries/arabic-islamic-essence/); IEP "Avicenna (Ibn
  Sina)" (https://iep.utm.edu/avicenna-ibn-sina/). Avicenna id IS live (`avicenna`) → linked.
- **Averroes (Ibn Rushd)** — "the Commentator"; the three commentary forms (short /
  middle / long); reason and revelation as one truth reached two ways (NOT "double
  truth," see below). PARAPHRASED. Sources: SEP "Ibn Rushd [Averroes]"
  (https://plato.stanford.edu/entries/ibn-rushd/); Britannica. Averroes id IS live
  (`averroes`) → linked.

---

## POSITIONS / IDEAS — basis

- **Aristotle's program (this-worldly, empirical, the four causes, substance, telos,
  logic).** The break vs Plato: Plato put the real in a separate realm of Forms;
  Aristotle put form IN things (hylomorphism — every substance is matter + form
  together), known by observing and sorting. Source: SEP "Aristotle"; the Four Causes
  (faculty.washington.edu/smcohen/320/4causes.htm; Wikipedia "Four causes").
  - **Four causes** defined: material (what it's made of), formal (its form/structure),
    efficient (what brought it about), final (telos — its purpose / "that for the sake of
    which"). Verified, four-causes sources above. *telos* = Greek for end/goal/purpose.
  - Aristotle: "we do not have knowledge of a thing until we have grasped its why, that
    is to say, its cause" — paraphrased as a claim, not block-quoted (wording varies by
    translation); Ross/Physics II basis.

- **Aristotle's life/dates.** 384–322 BC; studied 20 years in Plato's Academy; tutored
  Alexander; founded the **Lyceum** in Athens; his school the **Peripatetics** (from the
  covered walk, peripatos, where he taught). Source: `src/lib/philosophy-data.ts:107`
  (384–322 BC); SEP/Britannica "Aristotle." Works named: *Metaphysics*, *Nicomachean
  Ethics*, *Politics*, *Physics*, the logical *Organon* — all per philosophy-data works list.

- **The loss + survival.** Aristotle's works (beyond a sliver of logic kept alive in
  Latin by Boethius' translations of the *Categories* + *On Interpretation* and Porphyry's
  *Isagoge*) largely vanished from the Latin West for centuries; the Greek/Byzantine East
  kept the Greek texts; the Islamic world translated them into Arabic (the 9th-c. Baghdad
  translation movement, House of Wisdom) and developed them. Basis: era-1 + era-2 fact
  packs (`faith-reason-*`), which already establish Boethius' logic translations were
  "most of the Latin West's Aristotle for 500 years" (faith-reason-fact-ledger.md ch2);
  SEP "Arabic and Islamic Philosophy." Framed accurately: the West never had ZERO
  Aristotle (the "old logic," logica vetus), it lacked the natural philosophy,
  metaphysics, and the rest until the 12th c.

- **The Islamic Aristotelians.** al-Fārābī (d. 950, "the Second Teacher" after Aristotle
  the First); Avicenna (980–1037); Averroes (1126–1198). Dates per
  `src/lib/philosophy-data.ts:113-114`; al-Fārābī d.950 per SEP. "Second Teacher" epithet
  for al-Fārābī: SEP "Al-Farabi."

- **Maimonides (1138–1204)** reconciling Aristotle with the Torah; the *Guide* written in
  Judeo-Arabic for the educated believer caught between reason and Scripture. Dates per
  `src/lib/philosophy-data.ts:115`. Quote #2 above.

- **The re-entry into Europe — the 12th–13th c. translations.** **Toledo** (reconquered
  1085) the great hub; **Gerard of Cremona** (c.1114–1187) the most prolific translator,
  ~80+ works from Arabic into Latin including Aristotle, Averroes' commentaries, al-Fārābī.
  Also Greek-direct translations (e.g. via Sicily / later William of Moerbeke for Aquinas).
  Source: Britannica "Gerard of Cremona"; Wikipedia "Latin translations of the 12th
  century"; "Toledo School of Translators."
  - **William of Moerbeke** (c.1215–1286) made fresh Latin translations direct from the
    Greek at Aquinas' request — basis: SEP "William of Moerbeke"; standard Aquinas
    scholarship. Used to make the point Aquinas worked from better texts than the early
    Arabic-route ones.

- **The Church bans (the condemnations).**
  - **1210** — provincial synod at **Sens** (the Bishop of Paris a member) forbade the
    teaching, public or private, of Aristotle's natural philosophy (and Averroes'
    commentaries) in the **arts faculty** at Paris; theology faculty exempt. Source:
    Wikipedia "Condemnations of 1210–1277"; the 1210 council also burned David of Dinant's
    work. VERIFIED 2026-06-14.
  - **1277** — Bishop **Stephen (Étienne) Tempier** of Paris condemned **219 theses**
    (often "219 articles"), on order of Pope John XXI. The preamble accused masters of
    holding philosophical positions clashing with the faith while claiming both true.
    Source: SEP "Condemnation of 1277"; Wikipedia "Averroism." VERIFIED 2026-06-14.

- **The "double truth" MYTH — framed accurately.** Tempier's 1277 preamble caricatured
  the Paris masters as holding "two truths." **This is NOT Averroes' view and not
  documented in any medieval author.** Averroes held there is ONE truth, reached two ways
  (demonstrative philosophy + revelation, which cannot really conflict; apparent conflict
  → reinterpret the scriptural text allegorically). Modern scholars (SEP "Condemnation of
  1277"; Wikipedia "Averroism") agree NO medieval author actually held that two
  contradictory propositions can both be true; "double truth" is a polemical Latin
  caricature. VERIFIED 2026-06-14. The read states this as the correction it is.

- **Aquinas (1225–1274) and the synthesis.** Dominican; pupil of Albert the Great;
  worked from Moerbeke's fresh Greek-direct translations; integrated Aristotle with
  Christianity; the *Summa Theologiae*; the Five Ways. "Grace perfects nature" = quote #3.
  Dates per `src/lib/philosophy-data.ts:117`. Note: Aquinas' school id is `schol`
  (Scholasticism) in the data, but he is the Aristotelian synthesis and IS linked
  (`/philosophy/thinker/aquinas` exists). Aristotle becomes for the schoolmen simply
  **"the Philosopher."** Source: standard medieval-philosophy usage; SEP "Thomas Aquinas."

- **The long reign + the revolt.** For ~four centuries Aristotle WAS the science of the
  schools ("the Philosopher"; Dante's "master of those who know"). The Scientific
  Revolution overturned the Aristotelian physics: **Galileo** (falling bodies do not fall
  at speeds proportional to weight; the law of inertia displaces Aristotle's "things at
  rest stay at rest unless pushed"); Copernicus/Kepler displace the Aristotelian
  geocentric cosmos; Bacon/Descartes attack the method. Aristotle's LOGIC, ETHICS (virtue
  as habit, the mean), and BIOLOGY survived the wreck better than his physics. Framed
  accurately: the revolt was against Aristotelian PHYSICS and the frozen scholastic
  authority, not against Aristotle whole — virtue ethics is a live 20th–21st c. program.
  Source: standard history of science; SEP "Aristotle"; Galileo basis well-attested.

---

## DATES / FACTS quick table (all cross-checked)
- Aristotle 384–322 BC; Plato's Academy ~20 yrs; Lyceum founded ~335 BC. (philosophy-data + SEP)
- al-Fārābī d. 950; Avicenna 980–1037; Averroes 1126–1198; Maimonides 1138–1204;
  Aquinas 1225–1274. (philosophy-data:113-117; SEP for al-Fārābī)
- Boethius (c.477–525) translated *Categories* + *On Interpretation* + Porphyry's
  *Isagoge* — the "old logic" kept alive in the West. (faith-reason-fact-ledger ch2)
- Baghdad translation movement: 8th–10th c.; House of Wisdom. (SEP)
- Toledo reconquered 1085; Gerard of Cremona c.1114–1187. (Britannica)
- William of Moerbeke c.1215–1286. (SEP)
- Condemnations: 1210 (Sens/Paris arts faculty), 1277 (Tempier, 219 theses). (VERIFIED above)
- Galileo 1564–1642 (the physics revolt). (well-attested)

---

## HERO IMAGE — born-verified

- **Chosen:** "MS Ahmed III 3206 Aristotle teaching, illustration from *Kitab Mukhtar
  al-Hikam wa-Mahasin al-Kilam* by Al-Mubashir" — a **13th-century Arabic manuscript
  illustration of Aristotle teaching pupils**, Topkapi Palace Museum, Ms. Ahmet III 3206.
  Thematically ideal: Aristotle as the teacher of the whole tradition, pictured in the
  Arabic manuscript world that preserved and carried him. NOT Raphael's School of Athens.
- **License:** Public domain (Commons extmetadata: License = pd, LicenseShortName =
  "Public domain", UsageTerms = "Public domain"); a faithful photographic reproduction of
  a >700-year-old 2-D work.
- **Orientation:** 2292 × 1798 px = **landscape** (preferred).
- **fig URL (1280px thumb, HTTP 200 confirmed 2026-06-14):**
  https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/MS_Ahmed_III_3206_Aristotle_teaching%2C_illustration_from_%27Kitab_Mukhtar_al-Hikam_wa-Mahasin_al-Kilam%27_by_Al-Mubashir.jpg/1280px-MS_Ahmed_III_3206_Aristotle_teaching%2C_illustration_from_%27Kitab_Mukhtar_al-Hikam_wa-Mahasin_al-Kilam%27_by_Al-Mubashir.jpg
- **Description page:** https://commons.wikimedia.org/wiki/File:MS_Ahmed_III_3206_Aristotle_teaching,_illustration_from_%27Kitab_Mukhtar_al-Hikam_wa-Mahasin_al-Kilam%27_by_Al-Mubashir.jpg
- **Caption credit:** source (Topkapi Palace Museum, Ms. Ahmet III 3206, via Wikimedia
  Commons) · title (Aristotle teaching, from al-Mubashshir's *Mukhtar al-Hikam*) · date (13th c.).

### Fallback hero (also verified, portrait)
- "Arabic aristotle.jpg" — Aristotle teaching, from a c.1220 Arabic bestiary (British
  Library MS Or. 2784); PD (pre-1931). 1064 × 1563 px = **portrait**. Full image HTTP 200;
  960px thumb HTTP 200:
  https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Arabic_aristotle.jpg/960px-Arabic_aristotle.jpg
  Not chosen because the spec prefers landscape/near-square.

## FIGURE images inside the read
- None forced. Text-forward vertical (a missing image beats a decorative one). The hero
  carries the visual; the tradition's other figures (Avicenna, Averroes, Maimonides,
  Aquinas) have their own thinker hubs with portraits, so this read does not duplicate
  decorative portraits inline. (Matches the Platonism read, which uses one inline figure
  only — the Plotinus manuscript — and runs its break block text-only.)

---

## FRAMING / TRAP DISCIPLINE honored in the prose
- **"Double truth"** named explicitly AS a Latin caricature, then corrected to Averroes'
  actual one-truth-two-ways view. (see above)
- **Lone-genius / transmission**: the Arabic transmission is the SPINE of the read, not a
  detour (the framing-gate duty). al-Fārābī, Avicenna, Averroes, Maimonides, Gerard of
  Cremona, William of Moerbeke all named with what they did.
- **Aristotle's defense of slavery** (*Politics* I — "natural slavery") named honestly as a
  wart, neither sanitized nor turned into a lecture. Source: *Politics* I.5; SEP "Aristotle's
  Political Theory."
- **The "preserved Greek philosophy" potted summary** corrected: the Arabic world did far
  more than store Aristotle — it extended him (Avicenna's essence/existence, Averroes'
  commentaries that Europe then leaned on). Source: SEP; Aeon "Arabic translators did far
  more than just preserve Greek philosophy."
- **"Medieval = sterile logic-chopping"** refused (the era-2 pinhead point).
- **No anachronism**: "telos" given in Aristotle's terms (built-in purpose), not modern
  "function"; the four causes presented as Aristotle's, not retrofitted.
- **Western-scope honesty**: the Islamic + Jewish philosophers are INSIDE this Western
  story (the v1 scope asterisk), named as full thinkers, not as a pipeline.
