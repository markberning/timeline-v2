# Fact-checker gate — *Thus Spoke Zarathustra* WORK read

**Gate 1 of the philosophy pipeline.** Verifies the draft at
`src/app/philosophy/work/_reads/zarathustra.ts` against the fact ledger
(`audits/philosophy-pipeline/zarathustra-work-fact-ledger.md`) and primary sources.
Web-enabled. Sonnet-class fact-checker pass. Date: 2026-06-17.

Legend: ✅ Confirmed · ❌ Wrong · ⚠️ Unsupported/unverifiable at this pass ·
🟡 Legend-frame-it (not applicable to this read — no Diogenes-type anecdotes)
MUST-FIX = blocks ship · SHOULD-FIX = quality issue, non-blocking

---

## §1 — Bibliographic / publication facts

**1.1 ✅** Full German title `Also sprach Zarathustra: Ein Buch für Alle und Keinen`
("A Book for All and None") — confirmed from the 1883 title-page image cited in the
ledger and in the hero caption. The draft hero caption renders this correctly.

**1.2 ✅** Four parts composed 1883–1885 — confirmed (Wikipedia "Thus Spoke
Zarathustra"; standard Nietzsche bibliography).

**1.3 ✅** Parts I and II published 1883, Part III published 1884, all by Ernst
Schmeitzner, Chemnitz — confirmed. The draft's hook paragraph says "Parts I, II,
and III were issued separately by a small Chemnitz publisher" (correct). The hero
caption says "Parts I through III appeared separately in 1883–84" (correct
compression). The ledger entry "Parts I, II, III published 1883–84 (Chemnitz:
Ernst Schmeitzner); Part III in 1884" is consistent.

**1.4 ✅** Part IV privately printed in approximately forty copies at Nietzsche's own
expense in 1885; given to close friends; not publicly issued — confirmed (Wikipedia:
"forty copies of the fourth part were printed at his own expense and distributed to
his closest friends"). The draft uses "roughly forty copies" throughout — consistent.

**1.5 ✅** Part IV first published publicly: March 1892 (separately); all four parts
together: July 1892 — confirmed (Wikipedia). The draft's hook paragraph says "All
four parts did not appear together until 1892" (correct). The hero caption says "not
publicly issued until 1892" (correct).

**1.6 ✅** Mock-biblical / deliberately scriptural German style, influence of Luther's
Bible — confirmed (Wikipedia: "highly parabolic, metaphorical, and aphoristic").
The draft develops this correctly in the hook (§2) and in the throughline.

**1.7 ✅** Zarathustra = Persian name for Zoroaster — confirmed.

**1.8 ✅** Nietzsche's stated rationale (Ecce Homo, "Why I Am a Destiny" / "Why I Am
a Fatality"): Zoroaster invented the good/evil moral duality and must therefore be
the one to come back and overcome it — confirmed at content level (multiple sources
return this reasoning from Ecce Homo). See §2 below for exact-wording issues in the
**ledger** (not in the draft, since the draft correctly paraphrases all Ecce Homo
passages).

**1.9 ✅** Thomas Common's 1909 English renders *Übermensch* as "Superman" — confirmed
(Standard Ebooks / Gutenberg #1998).

**1.10 ✅** Zarathustra is thirty years old when he leaves home; spent ten years in
solitude in the mountains. The draft (ch.1) says "Zarathustra, thirty years old, has
gone up into the mountains to live alone with his eagle and his serpent, and for ten
years he has been content in his solitude." — confirmed by Prologue §1 ("When
Zarathustra was thirty years old, he left his home … for ten years did not weary of
it").

---

## §2 — Ecce Homo Zoroaster-rationale passages (ledger §2)

These passages are correctly handled in the DRAFT as paraphrase (no quotation marks),
consistent with the ledger's [PARAPHRASE] flag. The issues below are errors in the
**ledger's stated "exact Ludovici wording"** — they do not create draft errors, but
the ledger is the source the r2 pass will pull from, so each must be corrected before
r2 runs.

**2.1 ❌ MUST-FIX (ledger, not draft)** — Ledger Passage A reads: "Zarathustra was
the first to see in the struggle between good and evil the **essential** wheel in the
working of things." The verified Ludovici/Vishvasa text returns: "the **actual**
wheel in the working of things." "Essential" vs. "actual" is a lexical difference
that would corrupt any r2 string-match. The ledger's §2 Passage A must be corrected
to read "actual wheel."

**2.2 ❌ MUST-FIX (ledger, not draft)** — Ledger Passage B reads: "Zarathustra
created this **most portentous of all errors**,—morality; therefore he must be the
first to **expose** it." Verified text returns: "this **most fateful of errors**,
morality: consequently he must also be the first to **recognize** it." Two errors:
(a) "portentous" → "fateful"; (b) "expose" → "recognize." The ledger's §2 Passage B
must be corrected on both counts.

**2.3 ❌ MUST-FIX (ledger, not draft)** — Ledger Passage C reads: "The **overcoming**
of morality by itself through truthfulness, the **moralist's overcoming of himself
in his opposite** — in me — that is what the name Zarathustra means in my mouth."
Verified text returns: "The **self-overcoming** of morality through truthfulness, the
**self-overcoming of the moralist into his opposite** – into me – that is what the
name Zarathustra means in my mouth." Three divergences: "overcoming" → "self-
overcoming" (twice); "moralist's overcoming of himself in his opposite" → "self-
overcoming of the moralist into his opposite." These are not trivially equivalent.
The ledger's §2 Passage C must be corrected.

---

## §3 — Born-verified quotations in the draft (Common 1909)

**3.1 ✅** Q1 / ch.1 epigraph: `"This old saint in the forest hath not yet heard of
it, that GOD IS DEAD!"` — The Standard Ebooks fetch confirms the full Common sentence
is `"Could it be possible! This old saint in the forest hath not yet heard of it, that
GOD IS DEAD!"` The draft's epigraph omits the opening clause ("Could it be possible!")
but does not put that clause inside the quotation marks — the quote as shown begins at
"This old saint…" which is an accurate partial quotation and is internally consistent
with the attribution ("Prologue §2, trans. Thomas Common (1909)"). The prose in ch.1
block 2 correctly handles the full context. The capitalization `GOD IS DEAD` (all
caps) is correct for the Gutenberg/Standard Ebooks source. **No error; confirmed.**

**3.2 ✅** Q2 / ch.1 block 3: `"I TEACH YOU THE SUPERMAN. Man is something that is to
be surpassed. What have ye done to surpass man?"` — confirmed verbatim by Standard
Ebooks fetch (with small-cap rendering of "I teach you the Superman" in that edition;
Gutenberg uses all-caps "I TEACH YOU THE SUPERMAN"). Attributed to Prologue §3 — correct.

**3.3 ✅** Q3 / ch.1 block 4: `"Man is a rope stretched between the animal and the
Superman—a rope over an abyss. A dangerous crossing, a dangerous wayfaring, a
dangerous looking-back, a dangerous trembling and halting"` (attributed to Common,
Prologue §4). Standard Ebooks fetch confirms: "Man is a rope stretched between the
animal and the Superman⁠—a rope over an abyss." Wording confirmed.

**3.4 ✅** Q4 / ch.1 block 4: `"a bridge and not a goal … an over-going and a down-
going"` — confirmed by Standard Ebooks fetch: "What is great in man is that he is a
bridge and not a goal: what is lovable in man is that he is an over-going and a
down-going." Wording confirmed. Attributed to Prologue §4 — correct.

**3.5 ✅** Q5 / ch.2 block 1: `"The time is coming … of the most despicable man, who
can no longer despise himself"` — confirmed verbatim: "Alas! There cometh the time of
the most despicable man, who can no longer despise himself." Attributed to Prologue §5
— correct. (Note: the draft paraphrases around this rather than quoting it verbatim in
block 1; the wording is paraphrased accurately.)

**3.6 ✅** Q6 / ch.2 block 2 epigraph and prose: `"'We have discovered happiness'—say
the last men, and blink thereby."` — confirmed verbatim by Standard Ebooks fetch.
Attributed to Prologue §5 — correct. The draft's ch.2 epigraph presents this exact
wording with the quotation mark inside. Confirmed.

**3.7 ✅** Q7 / ch.3 epigraph and prose — Three Metamorphoses:
- Lion: `"freedom will it capture, and lordship in its own wilderness"` — confirmed
  ("freedom will it capture, and lordship in its own wilderness").
- Lion's refusal: `"a holy Nay even unto duty"` — confirmed.
- Child: `"Innocence is the child, and forgetfulness, a new beginning, a game, a
  self-rolling wheel, a first movement, a holy Yea."` — confirmed verbatim by
  Standard Ebooks fetch. Attributed to Part I, "The Three Metamorphoses" — correct.
  The draft's ch.3 epigraph uses exactly this wording. Confirmed.

**3.8 ✅** Q8 / ch.4 block 2 and epigraph — Will to Power:
- `"Only where there is life, is there also will: not, however, Will to Life, but—so
  teach I thee—Will to Power!"` — confirmed by Standard Ebooks fetch and ledger.
  Attributed to Part II, "Self-Surpassing" (Common: "On Self-Surpassing") — correct.
- `"Wherever I found a living thing, there found I Will to Power"` — confirmed.
- `"that which must ever surpass itself"` — confirmed as Life's self-disclosure.

**3.9 ✅** Q9 / ch.6 block 3 epigraph and prose — "The Convalescent":
- `"Everything goeth, everything returneth; eternally rolleth the wheel of existence."` — confirmed by Standard Ebooks fetch. Attributed to Part III, "The Convalescent" — correct.
- `"I come again eternally to this identical and selfsame life, in its greatest and its smallest."` — confirmed by Standard Ebooks fetch.
- `"not to a new life or a better life or a similar life"` — confirmed.

**3.10 ✅** Q10 / ch.5 block 2 — "The Vision and the Enigma":
- Gateway name: `"The name of the gateway is inscribed above: 'This Moment.'"` — confirmed per ledger (Standard Ebooks ch.46) and the draft uses this correctly as an epigraph attributed to Part III, "The Vision and the Enigma," trans. Thomas Common (1909).
- Dwarf's line: `"All truth is crooked; time itself is a circle."` — confirmed per ledger. The draft correctly paraphrases the broader recurrence argument (flagged [PARAPHRASE] in the ledger) and does not quote-mark the full recurrence statement beyond the gateway fragment.

**3.11 ✅** Q11 / ch.7 epigraph: `"I conjure you, my brethren, REMAIN TRUE TO THE
EARTH, and believe not those who speak unto you of superearthly hopes!"` — confirmed
verbatim. Attributed to Prologue §3 — correct. The Standard Ebooks and Gutenberg
editions place this in Prologue §3 (the same section as "I TEACH YOU THE SUPERMAN"),
consistent with the draft's attribution.

---

## §4 — Critical items: "hurdy-gurdy song" (ch.6)

**4.1 ❌ MUST-FIX** — Draft ch.6 block 3: "He gently accuses them of having made his
ordeal into a hurdy-gurdy song, a cheerful tune ground out on a barrel organ, as
though the heaviest thought in existence were a lullaby."

In Thomas Common's translation, Zarathustra does not use the phrase "hurdy-gurdy
song." He calls the animals "barrel-organs" and accuses them of making a "lyre-lay"
(Leier-Lied). The exact Common wording, confirmed via multiple sources including
Standard Ebooks chapter-57 and a Crooked Timber analysis of the translation variants,
is: "O ye wags and barrel-organs, do be silent!" The "hurdy-gurdy song" phrasing is
from the Del Caro/Pippin translation (Cambridge, 2006), which is in copyright.

The draft blends these by saying "hurdy-gurdy song, a cheerful tune ground out on a
barrel organ" — it introduces "barrel organ" correctly (that IS Common's word for the
animals) but attributes "hurdy-gurdy song" to Common when Common's equivalent is
"lyre-lay." This is a mis-translated phrase in what reads as a quotation-adjacent
description.

**Correction:** Replace "hurdy-gurdy song" with Common-accurate language. The passage
should describe the animals as "barrel-organs" (Common's term) and their song as a
"lyre-lay" (Common: *Leier-Lied*), or use fully neutral paraphrase ("a cheerful
ditty, as if the heaviest thought were a lullaby") that doesn't imply a specific
Common wording.

---

## §5 — Landmine handling (L1–L7)

**5.1 ✅** L1 — Übermensch / "Superman" gloss. The draft correctly (a) names Common's
"Superman" in ch.1 block 3; (b) glosses it as "overman" or "beyond-man" (the modern
scholarly preference) immediately; (c) states plainly it means "self-overcoming" and
a direction of travel, not a race, a biological type, or a political program; and
(d) applies this throughout. The preamble comment block also locks this. Confirmed
clean.

**5.2 ✅** L2 — Posthumous misuse / Elisabeth Förster-Nietzsche. The draft's ch.7
final block names Elisabeth as "an antisemite and German nationalist he had broken
with over exactly those views"; names the *Will to Power* as an assembly of "discarded
notes"; notes she "cultivated the German right and, in the 1930s, the Nazi regime";
and hedges motive explicitly: "whatever Elisabeth intended, the effect was a falsified
Nietzsche." The search confirms: Elisabeth died 1935, took over the archive ~1894
(founded), produced *Will to Power* first in 1895–1904 biography, then 1901
one-volume edition, 1906 two-volume. Hitler visited the archive in 1933. All
substantive claims in the draft on this are accurate. The cross-links to the BGE read
and the thinker read are appropriate. **Confirmed clean.**

**5.3 ✅** L3 — "The blond beast" is correctly NOT present in the draft anywhere. The
preamble comment block notes it explicitly. Confirmed clean.

**5.4 ✅** L4 — Eternal recurrence. The draft frames it throughout as an "existential
test" and a "thought experiment," explicitly noting "In the published text, eternal
recurrence is not offered as a fact about physics or a proof about the shape of time"
(ch.5 block 1). It also notes "Nietzsche did sketch cosmological arguments for it in
his private notebooks, but those stayed private" — accurate (the Nachlass drafts of
the physical proof were unpublished). The contested scholarly question is acknowledged
("whether he literally believed time loops is a question scholars still dispute").
Confirmed clean.

**5.5 ✅** L5 — "God is dead" in Zarathustra vs. Gay Science. The draft correctly
treats the Prologue §2 occurrence as a passing observation ("a casual aside, said
almost with surprise") and explicitly sends the reader to the thinker read for the
Gay Science §125 sustained treatment. No re-walk of the GS parable. Cross-link to
`/philosophy/thinker/nietzsche` present. Confirmed clean.

**5.6 ✅** L6 — Part IV and higher men. The draft (ch.7) correctly portrays Part IV
as a darker, unresolved coda; the higher men as failures who never reach the
Übermensch; and the ending as "a held breath … with the work still undone and the
Übermensch still only a sign on the horizon." The donkey-worship scene (the high
point of Zarathustra's despair) is named. The Part IV chapter titles for the higher
men are PARAPHRASED throughout, as required by the ledger (V1 flag). Confirmed clean.

**5.7 ✅** L7 — Common translation quirks. The draft uses "down-going" (Untergang),
"over-going" (Übergang), "On Self-Surpassing" (not Kaufmann's "On Self-Overcoming"),
and archaic diction in all quoted passages ("hath," "ye," "thee"). No mixing with
Kaufmann wording detected. Confirmed clean.

---

## §6 — Additional checks

**6.1 ✅** "God is dead" not endorsed or argued in the draft — it is treated as the
given premise throughout (the floor the story stands on). Correct.

**6.2 ✅** Übermensch not described as "a pedigree" — the draft's final paragraph
explicitly states "The Übermensch is not a pedigree. It is a dare." Correct.

**6.3 ✅** The three metamorphoses sequence (camel → lion → child) accurately
described in ch.3. Each stage's function correctly stated. The child's "holy Yea" vs.
the lion's "holy Nay" distinction correctly explained. The "Übermensch is not a fourth
animal" clarification in ch.3 block 5 is an accurate reading.

**6.4 ✅** Will to power / Schopenhauer contrast. The draft (ch.4 block 2) correctly
names Schopenhauer's "will to live" as the contrast position and explains what
Zarathustra claims to find instead. The correction (surpassing Schopenhauer) is
accurate.

**6.5 ✅** Part IV published 1892 in two forms (Part IV separately in March 1892; all
four parts together in July 1892). The draft says "All four parts did not appear
together until 1892" — accurate, and the hero caption adds "not publicly issued until
1892" — consistent.

**6.6 ✅** The tightrope walker scene (ch.2) is accurately described. The jester
vaulting over the walker and the walker falling are consistent with the text's
Prologue §6–7. Zarathustra's vow to bury him is consistent with Prologue §9.

**6.7 ✅** The camel as "beast of burden" who kneels to be loaded — accurately
described. The camel stage not treated as contemptible. Correct per ledger.

**6.8 ✅** "amor fati" is introduced at the close of ch.6 as the positive name for
the recurrence's affirmation — accurate; that phrase is Nietzsche's own (used in GS
§276 and letters) and is correctly characterized as "not grim resignation." Correct.

**6.9 ✅** The preamble comment block's statement that "The blond beast is from the
Genealogy (1887) and is NOT imported here" is accurate — it is from *On the Genealogy
of Morals* (1887), First Essay §11.

**6.10 ⚠️ SHOULD-FIX** — Draft ch.7 block 2 describes one of the higher men as "a
scrupulous man of science who has narrowed his entire life down to the study of a
single tiny subject." In Common's translation, this figure is "the Conscientious Man
in Spirit" (or "the conscientious man of spirit") — the chapter title is "The
Conscientious in Spirit." "Scrupulous man of science" is a reasonable paraphrase
meaning-wise but conflates the German *Gewissenhafter des Geistes* with "scientist."
Since the chapter titles for Part IV figures are correctly flagged as PARAPHRASE
throughout (V1 flag in the ledger), this is not a quotation error, but the
characterization "science" where Common has "spirit" could mislead. Consider
"a man of conscience who has narrowed his entire inquiry" or simply retain the
description without "science." Non-blocking since it is explicitly paraphrase
territory per the ledger.

**6.11 ⚠️ SHOULD-FIX** — Draft ch.1 block 1: The text says Nietzsche "was living the
wandering invalid life that produced all his late work: summers above St. Moritz,
winters on the Italian coast." The phrasing "above St. Moritz" is slightly imprecise —
Nietzsche stayed in Sils-Maria in the Upper Engadine (near but not "above" St.
Moritz). The standard reference is Sils-Maria, not St. Moritz (which he occasionally
passed through). "Summers in the Upper Engadine" or "summers at Sils-Maria" would be
more precise. Minor factual imprecision; non-blocking for this pass but flagged for
revision.

---

## §7 — Voice / structural items (out of scope for this gate; noted for gate 2)

The fact-checker's scope does not include the storytelling and voice gates. However,
one item of note for gate 2: the draft contains at least one meta-narrator move in
ch.7: "One thing has to be said plainly about this book, because it is the thing most
done to it." This phrasing ("One thing has to be said plainly…") is on the banned
list per the Author Voice Contract (gate 2, rule 2: prescriptive framing). Not a
fact-checker finding; noted here for the storytelling critic's attention.

---

## Summary

| # | Item | Severity | Location |
|---|---|---|---|
| MF-1 | Ledger §2 Passage A: "essential wheel" → "actual wheel" | MUST-FIX (ledger) | Ledger §2 Passage A |
| MF-2 | Ledger §2 Passage B: "most portentous of all errors" → "most fateful of errors"; "expose it" → "recognize it" | MUST-FIX (ledger) | Ledger §2 Passage B |
| MF-3 | Ledger §2 Passage C: Ludovici wording diverges from confirmed text on "self-overcoming" (twice) | MUST-FIX (ledger) | Ledger §2 Passage C |
| MF-4 | Draft ch.6 block 3: "hurdy-gurdy song" is Del Caro, not Common; Common has "lyre-lay" / "barrel-organs" | MUST-FIX (draft) | ch.6 block 3 |
| SF-1 | Draft ch.7 block 2: "scrupulous man of science" vs. Common's "Conscientious Man in Spirit" | SHOULD-FIX (draft) | ch.7 block 2 |
| SF-2 | Draft ch.1 block 1: "summers above St. Moritz" → Sils-Maria (Upper Engadine) | SHOULD-FIX (draft) | ch.1 block 1 |

**Total MUST-FIX: 4** (3 in the ledger, 1 in the draft)
**Total SHOULD-FIX: 2** (both in the draft)

**Near-clean verdict.** The draft's quote doctrine is well-executed: all Common
quotations that were verified are accurate to the PD source; all Ecce Homo content
correctly ships as paraphrase per the ledger's [PARAPHRASE] flags. The four
must-fixes are: three ledger errors in the cited Ludovici wording (which would
corrupt r2 string-matching) and one draft sentence where Del Caro's "hurdy-gurdy
song" substitutes for Common's "lyre-lay." The two should-fixes are minor precision
issues. All five landmines (Übermensch, posthumous misuse, blond beast, eternal
recurrence as cosmological claim, God-is-dead context) are handled correctly.
Publication history, the age/solitude details, and the Zarathustra narrative
descriptions throughout are accurate.
