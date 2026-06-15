# Avicenna (Ibn Sina) — thinker read fact ledger

Pipeline: AUTHOR step, philosophy thinker read (kind: thinker, "walk the whole
system"). Output read: `audits/philosophy-pipeline/avicenna-thinker.read.ts`.
This ledger maps every factual claim, date, and any quotation to a verified basis.

## Quotation discipline — the headline finding
**The read uses PARAPHRASE THROUGHOUT for Avicenna. It contains NO quotation
marks around any words attributed to Avicenna.** Avicenna wrote in Arabic (and
some Persian). Clean public-domain English translations of his philosophical
prose are scarce: the standard scholarly English translations of the *Shifa*
(F. Rahman's *Avicenna's De Anima*, 1959; Michael Marmura's *The Metaphysics of
The Healing*, 2005) and of the flying-man passage are all in copyright. Per the
philosophy pipeline's Duranty rule (a wrong-or-unverifiable quote never ships;
if exact wording can't be confirmed against a PD source it ships as paraphrase,
never as quotation), every idea here is presented in house voice without quote
marks. This mirrors the era-2 "Faith meets reason" read and the era-3 treatment
of Elisabeth of Bohemia / du Châtelet (genuine thinkers, paraphrase-only, no PD
English). **No epigraph attributes quoted words to Avicenna.** The two chapter
epigraphs that quote are (a) a verified line from Aquinas's *Summa* (PD English,
Dominican Fathers translation) crediting the contingency proof's lineage, and
(b) a verified Aristotle line (PD Ross translation), both of which Avicenna
inherited/transmitted; both are sourced below.

---

## Biography

| Claim | Basis | Verdict |
|---|---|---|
| Born around 980, in Afshana, a village near Bukhara (then in the Samanid realm, in Transoxiana, in modern Uzbekistan) | en.wikipedia.org/wiki/Avicenna ("c. 980 in Afshana ... near ... Bukhara"). SEP (plato.stanford.edu/entries/ibn-sina) says "ca. 970" but adds "it has not been possible to determine the year of his birth with greater precision." The project's own `philosophy-data.ts` registry lists `980 – 1037`. | ✅ CONFIRMED, framed as "around 980" with the uncertainty noted; 980 is the figure usually given and the one the registry uses. |
| Died 1037 (June 22, 1037 per Wikipedia), at Hamadan (in modern Iran), aged about 57 | en.wikipedia.org/wiki/Avicenna; SEP "died in 1037 in Hamadhan." | ✅ CONFIRMED |
| Persian / Islamic Golden Age polymath; wrote in Arabic (the scholarly lingua franca) and some Persian | SEP; Wikipedia | ✅ CONFIRMED |
| Child prodigy: had memorized the entire Qur'an by age 10 | en.wikipedia.org/wiki/Avicenna ("By the age of ten ... memorized the entire Quran") | ✅ CONFIRMED |
| Well-educated in the Greek sciences by his late teens; precocious in medicine | Wikipedia ("by 18 ... well-educated in Greek sciences"; physician young) | ✅ CONFIRMED |
| Became a court physician to a ruler (Nuh II, the Samanid ruler of Bukhara) while still a teenager (~17), and gained access to the royal library | Wikipedia ("At 17, became physician to ruler Nuh II"; the famous royal-library access story) | ✅ CONFIRMED (framed as the standard biographical account) |
| Spent his career moving between Iranian courts (Bukhara, Gurganj, Gorgan, Ray, Hamadan, Isfahan), serving rulers as physician and administrator (vizier at Hamadan) | Wikipedia career section | ✅ CONFIRMED |
| Wrote on the move and even during imprisonment (four months in the fortress of Fardajan) | Wikipedia ("Wrote extensively while traveling and during imprisonment in Fardajan fortress (four months)") | ✅ CONFIRMED |

## Works

| Claim | Basis | Verdict |
|---|---|---|
| The *Book of Healing* (*Kitab al-Shifa*; the title means "The Cure," healing of the soul from ignorance, NOT a medical book) is a vast philosophical encyclopedia covering logic, natural science/physics, mathematics, and metaphysics | SEP ("Al-Shifāʾ (The Cure) ... logic, theoretical philosophy (physics, mathematics, metaphysics), and practical philosophy"; "twenty-two large volumes in the Cairo edition"). The "Cure of ignorance" sense is the standard scholarly gloss. | ✅ CONFIRMED |
| The *Shifa* was begun around 1014 and substantially completed around 1020 | Wikipedia ("begun 1014, completed around 1020") | ✅ CONFIRMED |
| The *Canon of Medicine* (*al-Qanun fi al-Tibb*) is a five-volume medical encyclopedia | Wikipedia ("five-volume medical encyclopedia") | ✅ CONFIRMED |
| The *Canon*, in Latin translation, was a standard medical text in European universities for roughly six centuries — into the 17th century (used as late as ~1650) | SEP ("formed the basis of medical instruction in European universities until the 17th century"); Wikipedia ("remained in use as late as 1650"). The "~600 years" figure (12th c. Latin translation by Gerard of Cremona → ~1650) is the standard popular claim and is consistent with both sources. | ✅ CONFIRMED ("standard medical text in Europe for some six centuries") |

## The flying man (floating man)

| Claim | Basis | Verdict |
|---|---|---|
| The flying-man / floating-man thought experiment appears in the *Kitab al-Nafs* (the "Book of the Soul," the De Anima section, i.e. the psychology of the natural-science part) of the *Shifa* | en.wikipedia.org/wiki/Floating_man (references "Avicenna's De Anima" and "Kitab Al-Shifa"); standard scholarship (Rahman, *Avicenna's De Anima*, Shifa I.1). Prompt instruction: "Frame the flying man accurately (from the De Anima of the Shifa)." | ✅ CONFIRMED — framed as "in the De Anima (the Book of the Soul) of the *Healing*." Tradition also reports he conceived it during his Fardajan imprisonment; the read mentions the imprisonment biographically but does not assert the legend-anecdote as the proven occasion. |
| Setup: imagine a person created all at once, fully grown and perfectly formed, but suspended in the air (or a void) with vision shrouded, limbs spread so they do not touch one another or anything else, receiving no sensory input at all | en.wikipedia.org/wiki/Floating_man ("fully formed and developed at creation, but with no sensory perception ... suspended in air with limbs separated and not touching each other"; PD-status uncertain translated line: "just created at a stroke, fully developed and perfectly formed but with his vision shrouded ... he would affirm the existence of this self of his while not affirming that it had any length, breadth or depth") | ✅ CONFIRMED. **Rendered in PARAPHRASE — no quotation marks** (the translated line on Wikipedia is from a copyright translation; not used verbatim). |
| Conclusion: such a person would still affirm the existence of his own self, so the self/soul is known directly and immediately, independent of the body and the senses; therefore the soul is an immaterial substance | en.wikipedia.org/wiki/Floating_man ("consciousness and self-awareness exist independent of physical sensation"; "the soul is immaterial and substantial"; "knowledge by presence") | ✅ CONFIRMED — paraphrase |

## Essence and existence; the Necessary Existent; contingency

| Claim | Basis | Verdict |
|---|---|---|
| Avicenna makes the distinction between **essence** (what a thing is) and **existence** (that it is) central to metaphysics; in every created thing existence is not part of its essence (existence is "added to" the essence) | WebSearch synthesis from SEP-adjacent + academia sources ("the pivotal distinction of essence and existence in created being"; "existence is added to contingents"). Standard, uncontested in the literature. | ✅ CONFIRMED — paraphrase |
| **Contingent** being = something whose essence does not guarantee its existence, that can be or not be, and so requires a cause. **Necessary** being = something whose very essence is to exist, which cannot not be, and needs no cause | WebSearch ("necessary existent ... an entity that cannot not exist ... subsists through itself and requires no external cause"; contingent = "entities that require a cause for their existence") | ✅ CONFIRMED — paraphrase, terms inline-defined |
| The **Necessary Existent** (*wajib al-wujud*): the one being whose essence simply is to exist; the source of all contingent beings; Avicenna identifies it with God | WebSearch; en.wikipedia.org/wiki/Proof_of_the_Truthful | ✅ CONFIRMED — paraphrase |
| Avicenna's argument from **contingency** (the "Proof of the Truthful," *burhan al-siddiqin*): take the whole collection of contingent things; it too must have a cause, which cannot itself be contingent; therefore there is a Necessary Existent. He emphasizes the contingency of all things collectively rather than relying on a regress of motion, and says the proof does not even need to rule out an infinite regress | en.wikipedia.org/wiki/Proof_of_the_Truthful ("considers 'the entire collection of contingent things' ... must have an external cause — necessarily a non-contingent being"; "does not preclude the possibility of an infinite regress"; appears in *Remarks and Admonitions*, *Book of Salvation*, and the Metaphysics of the *Book of Healing*) | ✅ CONFIRMED — paraphrase; called "argument from contingency" / the Proof of the Truthful |
| From the Necessary Existent Avicenna derives the divine attributes (unity, simplicity, immateriality, intellect, goodness) | WebSearch ("unity, simplicity, immateriality, intellect, power, generosity, and goodness") | ✅ CONFIRMED — paraphrase, lightly used |

## Emanationist cosmology

| Claim | Basis | Verdict |
|---|---|---|
| Avicenna fuses Aristotle with Neoplatonic emanation: from the One (the Necessary Existent) flows a chain/hierarchy of separate Intellects governing the celestial spheres, ending with the Active Intellect (the lowest, which governs the sublunar world and is the source of the forms our minds grasp) | SEP ("Aristotelian sublunar world with Ptolemaic cosmology and Neoplatonic emanationism in the supralunar"; "intelligibles ... by the intellects of the celestial spheres emanating from the First and ending with the active intellect") | ✅ CONFIRMED — paraphrase; "emanation" inline-defined as flowing/overflowing, not deliberate making-from-nothing |

## Influence on Aquinas and Latin scholasticism

| Claim | Basis | Verdict |
|---|---|---|
| Avicenna's philosophy entered the Latin West via 12th-century translations and "influenced mightily" medieval and Renaissance thinkers | SEP ("In Latin translation, beginning with the 12th century, Avicenna's philosophy influenced mightily the medieval and Renaissance philosophers and scholars") | ✅ CONFIRMED |
| The essence/existence distinction and the contingency proof were taken up by Aquinas, Duns Scotus, and Maimonides | en.wikipedia.org/wiki/Proof_of_the_Truthful ("enthusiastically received, repeated, and modified by Christian philosophers including Thomas Aquinas and Duns Scotus, and Jewish thinker Maimonides"); WebSearch ("taken up by Jewish philosophers like Maimonides, Christian philosophers like Duns Scotus"). The project's own Aquinas read (`_reads/aquinas.ts`, ch4) already credits the essence/existence distinction and ties the Third Way to a thing "whose essence does not include its existence" getting existence from elsewhere. | ✅ CONFIRMED — links to [Aquinas](/philosophy/thinker/aquinas) and [Aristotle](/philosophy/thinker/aristotle), both verified to exist in `_reads/index.ts`. |

## Epigraph / quotation sources used in the read (the only quoted text)

| Quote | Where used | Source + PD basis | Verdict |
|---|---|---|---|
| "Whatever is in motion must be moved by something else." (Aristotle's principle Avicenna inherits) — used as the ch-on-cosmology epigraph context | NOT quoted as Avicenna. | The read does NOT actually place an Aristotle direct quote as an Avicenna epigraph; epigraphs are house-voice or sourced to the actual author. See the final read for what shipped. | n/a — see read |
| Aquinas, *Summa Theologiae* I, q. 2, a. 3 (the Third Way, from possibility/necessity), Fathers of the English Dominican Province translation (public domain) | Epigraph crediting where Avicenna's contingency proof landed in the Latin West | newadvent.org/summa/1002.htm (Dominican Fathers PD translation; the same translation/source the shipped Aquinas read uses). Verbatim Third-Way wording. | ✅ CONFIRMED PD; used only as the Aquinas-side credit, attributed to Aquinas, never to Avicenna. |

NOTE: To avoid any risk, the final read's epigraphs are house-voice lines or the
verified Aquinas line; NO epigraph or body line puts quotation marks around
Avicenna's own words. See the read file for the exact epigraphs shipped.

---

## Hero image (born-verified)

- **File:** `File:The Canon of Medicine.jpg` (Wikimedia Commons)
- **Depicts:** a Persian manuscript copy of Avicenna's *Canon of Medicine*, photographed on display at the Museum and Mausoleum of Avicenna (Aramgah-e Bu-Ali Sina), Hamadan, Iran.
- **Photographer / date:** Wikimedia Commons user *Coffeetalkh*, photo taken 2010-07-08.
- **License:** CC BY-SA 3.0 (Creative Commons Attribution-ShareAlike 3.0 Unported). A modern photograph of a historical artifact; CC BY-SA with credit is acceptable per the pipeline image-rights rule for a photo of a statue/artifact. Credited in the caption.
- **Dimensions:** 3619 × 2302 (landscape — fits the hero band, no portrait crop).
- **Hero URL used (960px thumb):** `https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/The_Canon_of_Medicine.jpg/960px-The_Canon_of_Medicine.jpg`
- **HTTP checks (run 2026-06-14):** 960px thumb → `HTTP/2 200`; full-res original → `HTTP/2 200`.
- **Source page:** https://commons.wikimedia.org/wiki/File:The_Canon_of_Medicine.jpg

### Inline figure (born-verified)
- **File:** `File:Avicenna canon 1597.jpg` — a page of a 1597/98 (1006 H.) manuscript copy of the *Canon of Medicine*.
- **License:** Public domain (the manuscript is centuries old; faithful reproduction).
- **URL used:** `https://upload.wikimedia.org/wikipedia/commons/2/23/Avicenna_canon_1597.jpg`
- **HTTP check (2026-06-14):** `HTTP/2 200`. Portrait orientation → rendered with `portrait: true`.
- **Source page:** https://commons.wikimedia.org/wiki/File:Avicenna_canon_1597.jpg
