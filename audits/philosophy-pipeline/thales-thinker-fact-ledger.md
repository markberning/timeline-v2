# Thales of Miletus — thinker read — FACT LEDGER (pipeline step: fact pack)

`kind: thinker` · eyebrow: **Pre-Socratics** · school: `pre` · template: socrates.ts (a thinker who
wrote nothing, reconstructed entirely from later reporters).

**Fact discipline (hard floor).** Almost nothing of Thales' own words survives. EVERYTHING below comes
through later reporters — Aristotle (4th c. BC, ~2 centuries after Thales), Herodotus (5th c. BC),
Diogenes Laërtius (3rd c. AD, ~8 centuries after) — often legendary. Every claim is attributed to its
reporter in the prose. Diogenes Laërtius is flagged as the late legend-vector throughout. A missing
quote beats a wrong one; where exact wording isn't PD-verifiable it ships as paraphrase.

---

## DATES & IDENTITY
- **Thales of Miletus, c.626/623 – c.548/545 BC.** ✅ CONFIRMED — en.wikipedia.org/wiki/Thales_of_Miletus
  ("born c. 626/623 BC", "Died c. 548/545 BC (aged c. 78)"). The read uses **c.626–548 BC** (matches the
  THINKERS registry entry `dates:'c.626 – 548 BC'`). All dates flagged approximate.
- **Greek, from Miletus in Ionia** (Asia Minor, the Aegean coast of modern Turkey). ✅ CONFIRMED — same page.
- **Aristotle calls him the first (natural) philosopher.** ✅ CONFIRMED — Wikipedia: "Aristotle advocated
  the view that Thales was the first natural philosopher"; "the founder of this type of philosophy"
  (Metaphysics I.3, see quote below). Framed in-prose as *Aristotle's* judgment, ~2 centuries later.
- **No writings survive; known through testimonia/doxography.** ✅ CONFIRMED — Wikipedia: "No writing
  attributed to him has survived." Primary reporters: Aristotle, Herodotus, Diogenes Laërtius (the last
  "some eight centuries after Thales's death").
- **One of the Seven Sages.** ✅ CONFIRMED — Diogenes Laërtius I (Hicks): "As Plato testifies, he was one
  of the Seven Sages." Framed as the tradition it is.
- **Age at death 78 (or 90 per Sosicrates); died watching an athletic contest from heat/thirst/old age.**
  🟡 LEGEND-FRAME-IT — Diogenes Laërtius I (Hicks), verbatim: "Thales the Sage died as he was watching an
  athletic contest from heat, thirst, and the weakness incident to advanced age" / "He died at the age of
  78 (or, according to Sosicrates, of 90 years)". Shipped as DL's much-later anecdote, not flat fact.

## THE MILESIAN SCHOOL (successors — for the "research program" framing)
- **Anaximander — the apeiron / the boundless.** ✅ CONFIRMED — Wikipedia: Anaximander held all was made
  of "apeiron or the unlimited."
- **Anaximenes — air.** ✅ CONFIRMED — Wikipedia: Anaximenes "held that everything was composed of air."
- NOTE: neither `anaximander` nor `anaximenes` exists as an id in `src/lib/philosophy-data.ts` THINKERS,
  so they are **named in prose but NOT linked** (no dead internal hrefs). `pythagoras`, `heraclitus`,
  `parmenides`, `socrates`, `plato` DO exist; only `socrates`/`plato` have `read:true`. The read links
  nothing the registry can't honor.

---

## VERIFIED QUOTATIONS (verbatim, with PD translation + URL checked)

### Q1 — Water as the archē — Aristotle, *Metaphysics* I.3, 983b
> "Thales, the founder of this type of philosophy, says the principle is water (for which reason he
> declared that the earth rests on water), getting the notion perhaps from seeing that the nutriment of
> all things is moist… and from the fact that the seeds of all things have a moist nature, and that water
> is the origin of the nature of moist things."

- Translation: **W. D. Ross** (the classic Oxford translation, widely reproduced; the version hosted at
  classics.mit.edu / The Internet Classics Archive).
- ✅ CONFIRMED verbatim — classics.mit.edu/Aristotle/metaphysics.1.i.html
- ⚠️ TRANSLATION-RIGHTS NOTE: the Ross English is not unambiguously pre-1931 PD. **sourceUrl in the read
  points to the PD GREEK-and-doxography tradition via John Burnet, *Early Greek Philosophy* (PD, 1892/1920)
  / and the read CITES the Ross wording but attributes it as "Aristotle, *Metaphysics* I.3, trans. Ross."**
  Wording is reproduced as a standard scholarly translation, named. If a stricter PD-only line is wanted at
  gate 6, swap to Burnet's rendering of the same passage. Flagged for the rights gate.

### Q2 — "All things are full of gods" — Aristotle, *De Anima* I.5, 411a
> "Certain thinkers say that soul is intermingled in the whole universe, and it is perhaps for that reason
> that Thales came to the opinion that all things are full of gods."

And the related lodestone line, *De Anima* I.2, 405a:
> "Thales, too, to judge from what is recorded about him, seems to have held soul to be a motive force,
> since he said that the magnet has a soul in it because it moves the iron."

- Translation: **J. A. Smith** (classic Oxford; classics.mit.edu / Internet Classics Archive).
- ✅ CONFIRMED verbatim — classics.mit.edu/Aristotle/soul.1.i.html
- FRAMING: the read explains "all things are full of gods" as the lodestone passage suggests — even
  apparently dead matter (the magnet) has a kind of soul/motive power — NOT animism-as-superstition.
  Both framed as Aristotle's *report* of Thales ("to judge from what is recorded about him").
- ⚠️ same translation-rights caveat as Q1; attributed "trans. Smith," reproduced as standard scholarly text.
  (DK 11 A22 = this De Anima testimonium.)

### Q3 — The eclipse that stopped a battle (585 BC) — Herodotus, *History* I.74
> "another combat took place in the sixth year, in the course of which, just as the battle was growing
> warm, day was on a sudden changed into night. This event had been foretold by Thales, the Milesian, who
> forewarned the Ionians of it, fixing for it the very year in which it actually took place. The Medes and
> Lydians, when they observed the change, ceased fighting, and were alike anxious to have terms of peace
> agreed on."

- Translation: **George Rawlinson** (PD, 1858–60). ✅ CONFIRMED verbatim against the source.
- sourceUrl: en.wikisource.org/wiki/The_History_of_Herodotus_(Rawlinson)/Book_1 — load-verified, raw text
  string-matched ("been foretold by Thales, the Milesian, who forewarned the Ionians… fixing for it the
  very year… The Medes and Lydians, when they observed the change, ceased fighting").
- 🟡 HISTORICALLY DEBATED — flagged in-prose. The eclipse is the **28 May 585 BC** event (the war = Lydia
  under Alyattes vs. the Medes under Cyaxares; the battle = the "Battle of Halys"). Modern scholarship
  doubts Thales could truly have *predicted* a solar eclipse: Otto Neugebauer (1957) called the story "very
  doubtful"; the Saros/Exeligmos-cycle reconstructions don't work because the preceding eclipse by an
  Exeligmos period was not visible from Miletus. Some (Littmann, Espenak) allow he might have guessed the
  general timing, not the location. The read REPORTS what Herodotus says, then states the scholarly doubt.
  Sources: en.wikipedia.org/wiki/Eclipse_of_Thales; atlasobscura.com/articles/thales-predicts-eclipse-mystery-ancient-greece.

### Q4 — The olive presses (philosophy could be rich if it cared to) — Aristotle, *Politics* I.11, 1259a
> "He was reproached for his poverty, which was supposed to show that philosophy was of no use… he knew by
> his skill in the stars while it was yet winter that there would be a great harvest of olives in the
> coming year; so, having a little money, he gave deposits for the use of all the olive-presses in Chios
> and Miletus, which he hired at a low price because no one bid against him. When the harvest-time came,
> and many were wanted all at once and of a sudden, he let them out at any rate which he pleased, and made
> a quantity of money. Thus he showed the world that philosophers can easily be rich if they like, but
> that their ambition is of another sort."

- Translation: **Benjamin Jowett** (PD, 1885). ✅ CONFIRMED verbatim — classics.mit.edu/Aristotle/politics.1.one.html
- FRAMING: Aristotle himself relays this as a story ("the story is…"); kept as Aristotle's anecdote.

### Q5 — Falling into the well, mocked by the Thracian maid — Plato, *Theaetetus* 174a
> "the jest of the witty maid-servant, who saw Thales tumbling into a well, and said of him, that he was
> so eager to know what was going on in heaven, that he could not see what was before his feet."

- Translation: **Benjamin Jowett** (PD). ✅ CONFIRMED verbatim — Project Gutenberg Theaetetus
  (gutenberg.org/cache/epub/1726/pg1726.txt), Jowett.
- FRAMING: Socrates tells it as a "jest"/illustration; the read presents it as the tradition (the
  archetypal absent-minded-philosopher story), not biography.

### Geometry — pyramid by shadow — Diogenes Laërtius I (Hicks), citing Hieronymus of Rhodes
> "he measured the height of the pyramids by the shadow they cast, taking the observation at the hour when
> our shadow is of the same length as ourselves."

- Translation: **R. D. Hicks** (1925; the translation is PD / widely hosted on Wikisource & Perseus). ✅
  CONFIRMED verbatim — perseus.tufts.edu Diogenes Laertius Book I.1.
- 🟡 LEGEND-FRAME-IT — late (3rd c. AD) source attributing the trick to Thales via Hieronymus of Rhodes.
  "Thales' theorem" and the proof-geometry attributions are likewise late/contested (Wikipedia: "Modern
  scholars are skeptical that anyone in Thales's time was producing mathematical proofs to the standard of
  later Greek mathematics"). Shipped as the tradition, with the caveat stated.

---

## DELIBERATELY OMITTED / PARAPHRASED-NOT-QUOTED
- **"Know thyself."** OMITTED as a Thales quotation. The Delphic maxim is variously attributed across the
  Seven Sages and is not securely Thales'; no PD verification of it AS Thales' own line. Not used.
- **"Water is best" / other apophthegms.** Not quoted (DL relays competing sayings; left out rather than
  risk a misattribution).
- The read makes NO claim that Thales wrote a book; explicitly the opposite.

---

## HERO IMAGE (born-verified)
- **File:** Canova_-_Urania,_the_Muse_of_Astronomy_Reveals_to_Thales_the_Secrets_of_the_Skies,_1798-1799_(crop).jpg
- **Direct URL:** https://upload.wikimedia.org/wikipedia/commons/f/f6/Canova_-_Urania%2C_the_Muse_of_Astronomy_Reveals_to_Thales_the_Secrets_of_the_Skies%2C_1798-1799_%28crop%29.jpg
- **`curl -I` result: HTTP/2 200**, content-type image/jpeg, 158,262 bytes. ✅
- **Artist/title/date:** Antonio Canova (1757–1822), *Urania, the Muse of Astronomy Reveals to Thales the
  Secrets of the Skies*, 1798–1799 (tempera, Museo Gypsotheca Antonio Canova; via Google Arts & Culture).
- **License:** ✅ PUBLIC DOMAIN — Commons tags PD-old-100-expired + PD-Art (PD-old-auto-expired); artist
  d.1822, work published well before 1931.
- **Orientation:** LANDSCAPE (809 × 631 px), fits the hero band without cropping a portrait — preferred per
  brief. `portrait` flag left unset (false).
- **Subject check:** a Thales-specific allegorical scene (Urania revealing the heavens to Thales) — matches
  the read's core (astronomy + nature-not-myth). Correct subject, not a wrong bearded Greek.

---

## SCHOLARLY-DOUBT / CONTESTED ITEMS THE PROSE FLAGS (summary)
1. The eclipse *prediction* (Herodotus reports it; Neugebauer "very doubtful"; method not reconstructable). 🟡
2. The pyramid-shadow measurement + "Thales' theorem" geometry (late sources; proof-standard skepticism). 🟡
3. Death-at-the-games + age 78/90 (Diogenes Laërtius, late). 🟡
4. "All things are full of gods" — read REPORTS Aristotle's testimonium and offers the lodestone reading;
   does not assert Thales' inner doctrine flat. ⚠️→FRAMED
5. "First philosopher" stated as **Aristotle's** judgment (a "first-ever" claim — attributed, not absolute).
