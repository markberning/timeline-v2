# GATE — FACT-CHECK + LEGEND · Dalí, *The Persistence of Memory* (1931)

Work: Salvador Dalí, *The Persistence of Memory* (1931), oil on canvas, MoMA (object 162.1934, "Given anonymously"). Surrealism work-read.
Draft: `audits/art-pipeline/work-persistence-draft.md` · Fact pack: `audits/art-pipeline/work-persistence-factpack.md`
Method: every load-bearing claim WEB-verified (MoMA/Wikipedia/Dalí Foundation/Britannica/ARTnews + corroborating sources). No edits made to draft/src; nothing committed.

## VERDICT: **PASS** (ship-ready) — with 1 [FIX] and 3 [NICE].
No [BLOCKER]. Every special-care item is handled correctly: rights `in-copyright` (not pd-us) with fair-use credit ✓; four watches / only three soft, orange ant-watch hard ✓; Einstein/relativity carried as a myth Dalí denied ✓; camembert as Dalí's *own* account ✓; central creature as "widely read as" self-portrait ✓; Catalan cliffs (Cap de Creus / Portlligat, Puig Pení attributed loosely) ✓; camembert quote attributed to Dalí with translation-variant note ✓.

---

## SPECIAL-CARE CHECKLIST (all confirmed)

| Item | Draft handling | Verified? |
|---|---|---|
| `rights: 'in-copyright'` (1931, NOT pd-us; Dalí d. 1989) | Set `rights: 'in-copyright'` (line 57); header comment + afterlife prose state pd cutoff + estate copyright; NO `pd-us` anywhere | **YES** — 1931 work, Dalí d. 1989; not US public domain. Correct. |
| `heroCredit` carries fair-use notice | "...in copyright, shown small under fair use; rights with the Salvador Dalí estate." (line 54) | **YES** — present and correctly worded. |
| FOUR watches, only THREE soft; orange ant-watch HARD | Stats "4 watches, 3 soft"; prose repeatedly "four watches... only three of them are soft"; orange watch explicitly "has NOT gone soft, hard and shut" (annotations + PerLooking). Never "all four melt." | **YES** — matches the painting and the dominant source consensus (3 soft + 1 hard orange ant-covered). |
| Einstein/relativity = MYTH Dalí DENIED | break blurb "Not relativity (Dalí denied that): camembert"; full PerCamembert section "The myth he denied / It is not about Einstein, and he said so"; Prigogine exchange on the record | **YES** — Dalí told Prigogine the watches were *not* from relativity but from "the surrealist perception of a Camembert melting in the sun." Carried as myth, not fact. |
| Camembert = Dalí's stated source, his account | "By Dalí's own telling... His account... never an externally documented event"; "There is no second witness to the cheese" | **YES** — correctly framed as Dalí's self-mythology, not proven fact. |
| Camembert quote verbatim + variant flag | Blockquote + proseMutedStyle note listing 3 translation variants, attributed to Dalí not as canonical original | **YES** — genuine Dalí line; variant framing is honest and correct (see [NICE-1]). |
| Central draped creature = self-portrait profile | "widely read as a distorted self-portrait," kin to *The Great Masturbator* (1929); explicitly held as interpretation "not a label Dalí signed" | **YES** — standard scholarly reading; *Great Masturbator* is 1929 (correct). |
| Catalan cliffs (Cap de Creus / Portlligat) | "rocks of Cap de Creus on the Costa Brava, near... Portlligat"; Puig Pení "on thinner evidence" | **YES** — Cap de Creus + Portlligat confirmed; Puig Pení as the shadowed height is the standard finer-grained ID, correctly hedged. |

---

## CORE-FACT VERIFICATION

- **Title / Spanish / year** — *The Persistence of Memory* / *La persistencia de la memoria* / 1931. **Confirmed** (MoMA, Wikipedia, Dalí Foundation).
- **Medium** — Oil on canvas. **Confirmed.**
- **Dimensions** — MoMA: 9 1/2 × 13 in (24.1 × 33 cm). Draft `dimensions: '9 1/2 in × 1 ft 1 in'` (= 9.5 × 13 in) and stats `9½″ × 1′1″`. **Confirmed correct** — 1 ft 1 in = 13 in. `heroAspect: 1.39` = 33/24.1 = 1.369 ≈ 1.39, landscape. OK. Prose "nine and a half inches tall by a little over a foot wide... smaller than an ordinary sheet of letter paper" — accurate.
- **Location / object number / credit / acquisition** — MoMA, New York; object **162.1934**; credit **"Given anonymously"**; acquired **1934**. **All confirmed** (MoMA record + search snippets; Dalí Foundation lists MoMA + 24.1×33 cm).
- **Julien Levy Gallery 1932 / $250 / 1934 gift** — First shown Julien Levy Gallery, NY, 1932; reportedly sold ~$250; given anonymously to MoMA 1934. **Confirmed** as the standard account; draft correctly flags the $250 as secondary and keeps it out of the `price` fields (all `null`). Good.
- **Paranoiac-critical method / "hand-painted dream photographs"** — Both confirmed as Dalí's terms. OK.
- **Ants = decay/rot, childhood horror of decomposition** — Standard Dalí reading. Confirmed. OK.
- **Single fly on a soft watch** — Confirmed (Wikipedia/Dalí Foundation: a fly perches on the open-facing watch). OK.
- **Dead/leafless tree growing from the block, one watch hanging from it** — Confirmed. OK.
- **André Breton founded Surrealism 1924; Miró/Masson (automatist) vs Ernst/Tanguy/Magritte (veristic) split; Dalí Catalan from Figueres, joined ~1929** — All standard and accurate. OK.

---

## FINDINGS

### [FIX-1] Camembert anecdote — "his wife / the others had gone out" mis-states the canonical account
PerCamembert (line 145) and the `camembert` section blurb (line 65) say: *"He and his wife had finished dinner; the others had gone out; he had stayed home with a headache."*

The widely-cited account (Dalí, *The Secret Life of Salvador Dalí*) is that **Gala herself went out** (to the cinema / out with friends) while Dalí stayed home alone with a headache after dinner. The draft's phrasing implies Gala stayed and unnamed "others" left, which inverts the standard version (Gala out, Dalí in). Sources consistently say "his wife Gala was at the cinema" / "Gala had gone out." Since the camembert tale is explicitly Dalí's-own-telling, the read should track *his* telling.

**Corrected text** (PerCamembert, replace the relevant clause):
> "He and Gala had finished dinner; she had gone out with friends and he had stayed home with a headache, contemplating, of all things, the remains of a **Camembert**..."

And the `camembert` blurb (line 65) is fine as written (it doesn't name who left), but if touched, keep it neutral ("he stayed home one evening with a headache").

Severity: FIX, not blocker — it's inside an avowedly Dalí-sourced anecdote already hedged as unverifiable, but the specific "others had gone out / wife stayed" detail is a factual mis-rendering of the source anecdote and is easy to correct.

### [NICE-1] Camembert quote — variant note is honest; one phrasing nuance
The blockquote uses *"...the soft, extravagant, solitary, paranoiac-critical Camembert of time and space."* The most-cited circulating form drops "Camembert" and reads *"paranoiac-critical Camembert **cheese** of **space and time**"* (note word order space/time, and "cheese"). The draft's muted note already lists exactly these variants ("...Camembert cheese of space and time") and frames the whole thing as a translator-unstable Dalí formulation — which is the correct, defensible handling. No change required; flagged only so the coordinator knows the chosen blockquote wording is one legitimate variant among several, not an error. The honest variant-note is the right call per the fact pack.

### [NICE-2] "swarmed by ants" vs "crawling with ants" — magnitude
Annotation and prose say the orange watch is "swarmed by ants" / "crawling with ants." Sources describe it as "covered with ants" — "swarmed"/"crawling" is fair and within range. No change needed.

### [NICE-3] Prigogine identity — "chemist," Nobel laureate
Draft figures list and PerCamembert call Ilya Prigogine (1917–2003) a "chemist" and "future Nobel laureate." Confirmed: Prigogine won the 1977 Nobel Prize in **Chemistry**; physical chemist. "Chemist" is correct. (Minor: he is often described as a physical chemist / thermodynamicist; "chemist" is accurate.) No change needed.

---

## SOURCES CONSULTED (web)
- MoMA collection record 79018 / object 162.1934 — https://www.moma.org/collection/works/79018 (catalog data confirmed via search snippets; direct fetch 403s)
- Fundació Gala–Salvador Dalí heritage object 478 — https://www.salvador-dali.org/en/heritageobject/478/ (medium, 24.1×33 cm, MoMA location)
- Wikipedia, "The Persistence of Memory" — https://en.wikipedia.org/wiki/The_Persistence_of_Memory (dimensions, Prigogine denial, camembert quote, self-portrait/Great Masturbator, Cap de Creus/Puig Pení, watch count, fly, Julien Levy/$250/1934)
- Wikipedia, "The Great Masturbator" — https://en.wikipedia.org/wiki/The_Great_Masturbator (1929; central profile self-portrait, Cap de Creus rock formation)
- Britannica, "The Persistence of Memory" — https://www.britannica.com/topic/The-Persistence-of-Memory
- ARTnews, "Why Is Salvador Dalí's Persistence of Memory So Important?" — https://www.artnews.com/art-news/artists/salvador-dali-the-persistence-of-memory-why-so-important-1234745589/
- Mental Floss / 3minutosdearte / dalipaintings.com (camembert anecdote corroboration: Gala out, Dalí home with headache)

*No edits made to the draft or source. Nothing committed.*
