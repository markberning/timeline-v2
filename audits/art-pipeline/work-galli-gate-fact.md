# GATE-1 (FACT-CHECK + LEGEND) — *Funeral of the Anarchist Galli* (Carrà, 1910–11, MoMA)

Gate run against `work-galli-draft.md` vs `work-galli-factpack.md` + web
(English Wikipedia *The Funeral of the Anarchist Galli*; MoMA collection record
works/79225; Khan Academy/Smarthistory; Art Story; arthistoryproject /
unknown.nu Technical Manifesto text).

**Verdict: PASS with 2 [FIX] + 3 [NICE]. No [BLOCKER].**

The four named traps in the brief are all handled correctly in the draft:
1906 stated as fact / 1904 flagged as Carrà's own memoir slip; the *La mia vita*
quote framed as 1945 recollection; Marinetti context-only with an explicit
"not a hand on this particular canvas"; the casualty figure hedged. Identity,
dims, rights, provenance, and the Barr/Uccello attribution all verify. The two
FIXes are a verbatim-quote punctuation drift and one unsupported attribution
detail; the NICEs are minor framing/sourcing hygiene.

---

## TRAP CHECK (the brief's five named items)

| # | Trap | Draft handling | Status |
|---|---|---|---|
| 1 | Galli died **10 May 1906**; Carrà misdated to 1904 in memoir | Draft uses 1906 as fact everywhere (const blurbs, GalStreet, GalMemory); 1904 appears ONLY as "Carrà attributes Galli's death to the general strike of 1904" + "got the year wrong in print." *Corriere della Sera* credited as flagging it. | ✅ CORRECT |
| 2 | First-person account = 1945 memoir, recollection not reportage | GalMemory explicitly: "not a reporter's notebook from 1906… a memoir written in 1945… recollection, not transcript." GalStreet: "not a scene Carrà witnessed. It is a scene he was inside" (he WAS there, but the painting is later). | ✅ CORRECT |
| 3 | Marinetti has NO documented role in canvas | GalMaking: "the impresario behind the movement, not a hand on this particular canvas, so file him as background." Figures cast lists him as "Founder of Futurism." | ✅ CORRECT (but see NICE-1 re: figures cast) |
| 4 | "one killed / eight injured Royal Guard" single-sourced → hedge | GalStreet: "that specific casualty count traces to a single source, so hold it loosely." | ✅ CORRECT |
| 5 | MoMA; ~198.7×259 cm → imperial; rights pd-us | dimensions `6 ft 6 1/4 in × 8 ft 6 in`; location MoMA; `rights: 'pd-us'`; heroAspect 1.30. All match MoMA's own imperial label. | ✅ CORRECT |

---

## [FIX] — must correct before integrate

### [FIX-1] *La mia vita* quote — punctuation drifts from the sourced text
**Where:** GalMemory blockquote (draft lines 195–197); also paraphrased twice.
**Draft text:**
> "I found myself unwillingly in the centre of it; before me I saw the coffin,
> covered in red carnations, sway dangerously on the shoulders of the
> pallbearers; I saw horses go mad, sticks and lances clash; it seemed to me
> that the corpse could have fallen to the ground at any moment and the horses
> would have trampled it."

**Source text (Wikipedia / Smarthistory, the reproduction the fact pack itself
quotes):**
> "I found myself unwillingly in the centre of it**,** before me I saw the
> coffin, covered in red carnations, sway dangerously on the shoulders of the
> pallbearers; I saw horses go mad, sticks and lances clash**,** it seemed to me
> that the corpse could have fallen to the ground at any moment and the horses
> would have trampled it."

**Problem:** The draft changes two source commas to semicolons ("centre of it**;**"
and "lances clash**;**"). The fact pack and the draft's own author note both
claim "Quote punctuation preserved verbatim" — it is not. The art pipeline gates
verbatim quote punctuation as a hard surface; this is the exact "quote tidied up
in transcription" failure mode.
**Correction:** Restore the two commas to match the sourced reproduction (revert
both semicolons to commas), OR, if the author prefers the cleaner punctuation,
drop the "preserved verbatim" claim and present it as lightly normalized. The
verbatim claim plus altered punctuation cannot both stand.
**Source:** en.wikipedia.org/wiki/The_Funeral_of_the_Anarchist_Galli (La mia vita,
1945, as reproduced); matches fact pack §4 Beat 3 / §8.

### [FIX-2] Manifesto quote attributed to "Technical Manifesto" — but this exact passage is from the *catalogue / preface* phrasing, and the draft's wording is an ellipsis-edit
**Where:** GalMaking (draft line 154) and annotation 5; author note line 249.
**Draft text:** the force-lines must "encircle and involve the spectator so that
he will… be forced to struggle himself with the persons in the picture."
**Source text:** "These force-lines must encircle and involve the spectator so
that he will **in a manner** be forced to struggle himself with the persons in
the picture." (the full sentence is the riot passage: "If we paint the phases of
a riot… in sheaves of lines corresponding to the conflicting forces…").
**Two sub-issues:**
- (a) The draft's "so that he will… be forced" elides "in a manner." That is a
  legitimate ellipsis and the `…` is shown, so it is acceptable AS a quote — but
  the elided words soften a hedge ("in a manner"), so confirm the author intends
  the harder reading. Acceptable as-is; flagging for awareness, not a blocker.
- (b) Attribution: the draft and fact pack call this the "Technical Manifesto of
  Futurist Painting." This riot/force-lines passage is most commonly reproduced
  as part of the **1912 Bernheim-Jeune exhibition catalogue preface** ("The
  Exhibitors to the Public"), itself a Futurist-painters statement, rather than
  the April 1910 Technical Manifesto proper. Sources vary and several (incl.
  Wikipedia's own caption) tag it "Futurist Manifesto … 1912."
**Correction:** Either soften the attribution to "the Futurist painters' own
manifesto/statement" (which the draft sometimes does — GalMaking line 154 says
"The Futurists' own Technical Manifesto" specifically), or verify the exact
document. Given the 1912 catalogue is the usual home of the riot passage,
recommend changing "Technical Manifesto" to "the Futurists' own manifesto" /
"their 1912 statement" wherever the riot/force-lines quote is cited, to avoid a
precise-but-wrong document name. The looser "the Futurists' own manifesto" in
annotation 5 is fine; the named "Technical Manifesto" attached to the verbatim
quote in GalMaking is the one to soften.
**Source:** unknown.nu/futurism/techpaint.html (the actual 1910 Technical
Manifesto text — the riot passage is NOT in it); arthistoryproject.com Technical
Manifesto; Wikipedia article caption dates this quote 1912.

---

## [NICE] — improve, not blocking

### [NICE-1] Marinetti in the `figures` cast may over-imply involvement
**Where:** const `figures` array (draft line 80) lists Marinetti as a nameplate
figure alongside Carrà, Galli, Boccioni, Barr. Prose handles him correctly, but
putting him in the work's cast nameplate (role "Founder of Futurism") sits in
tension with the fact-pack directive that he has NO role in THIS canvas. Boccioni
("theorist of force-lines") and Barr (the Uccello reading) earn their slots;
Marinetti's is the weakest. Not wrong (he founded the movement), but consider
whether a figure with no tie to the work belongs in the work's cast. Defer to
storytelling gate; flagging the tension only.

### [NICE-2] "Macchi and Pessoni factory" killer not named in prose
**Where:** GalStreet says Galli "was stabbed to death by security guards of the
Macchi and Pessoni factory." This is CORRECT and matches Wikipedia + fact pack
Beat 1. No action needed — noting it verified, since it is a specific
named-detail that is easy to get wrong. The companions (Recalcati, Gelosa) are
omitted, which is fine for prose economy.

### [NICE-3] "1912 → Berlin via Der Sturm" vs Wikipedia's Borchardt-first order
**Where:** provenance array. Draft order: Carrà → Borchardt (1912, Berlin, via
Der Sturm) → Kluxen (by 1914) → Walden/Der Sturm (by 1920) → Citroen (1920–1948)
→ MoMA (1948). This matches the fact pack and is consistent with Wikipedia
(Borchardt 1912 → Kluxen 1914 → Walden by 1920 → Citroen 1920–48 → MoMA 1948).
The draft's "1947 first shown at MoMA, acquired 1948" detail is in the fact pack
but NOT surfaced in the draft prose/provenance note (GalAfterlife says only
"In 1948 it crossed to New York"). Minor: the 1947-display/1948-acquire nuance
could be added but is not required. Verified consistent.

---

## VERIFIED-CLEAN (spot-checked, no issue)

- **Identity:** Title (EN, no "The" in MoMA form), artist Carlo Carrà (1881–1966),
  date 1910–11, oil on canvas, MoMA. ✅ MoMA + Wikipedia.
- **Dimensions:** `6 ft 6 1/4 in × 8 ft 6 in` / `6′6¼″ × 8′6″` = 198.7 × 259.1 cm.
  ✅ matches MoMA's own imperial label exactly. heroAspect 1.30 ✅ (259.1/198.7 =
  1.304).
- **Credit / accession:** "Acquired through the Lillie P. Bliss Bequest (by
  exchange)", accession 235.1948. ✅ MoMA.
- **Rights:** pd-us — pub. 1911, pre-1931 → US public domain; Carrà d.1966 →
  in EU copyright to 2037, Commons does not host. Self-host/en-tier handling is
  correct. ✅ (coordinator still load-checks the actual image file at gate-6;
  the `ART_IMG.carraGalli` path is asserted, not verified in this gate.)
- **Event:** general strike Milan spring 1906; Galli stabbed 10 May 1906;
  funeral 13 May 1906; police on horseback; cemetery entry refused; melee. ✅
  Wikipedia confirms all dates and the cemetery-refusal sequence.
- **Date error:** Carrà misdated to 1904 in La mia vita; *Corriere della Sera*
  flagged it. ✅ Wikipedia. Draft's "conflated to attach to a bigger event"
  correctly marked as a guess/speculation, not fact. ✅
- **Casualty figure:** "killing one and injuring eight" is on Wikipedia but
  single-sourced; draft hedges it. ✅ correctly handled.
- **First exhibition:** Bernheim-Jeune, Paris, Feb 1912, organized w/ Félix
  Fénéon ("The Italian Futurist Painters"). ✅ Wikipedia. (Draft says "February
  1912"; Wikipedia says 1912 / the show ran Feb 1912 — consistent.)
- **Manifesto signatories:** Carrà signed the Manifesto of the Futurist Painters
  (1910) and Technical Manifesto of Futurist Painting (1910) w/ Boccioni,
  Russolo, Balla, Severini. ✅ standard record.
- **1910 study (pastel/charcoal) → 1911 Cubist rework after Paris/Picasso.** ✅
  Wikipedia (1910 pastel study; 1911 revision after encountering Cubism).
- **Barr quote:** "as classically organized as a fifteenth-century battle piece
  by Paolo Uccello" → Battle of San Romano. ✅ Wikipedia (full: "Fundamentally,
  in its main lines and masses Carrà's Funeral is as classically organized as a
  fifteenth-century battle piece by Paolo Uccello"). Draft attributes to Barr
  AND notes McKever's later argument that Carrà likely knew the Uccello. ✅
- **Lillie P. Bliss / Starry Night "by exchange" parallel:** factual aside, MoMA's
  Starry Night was indeed acquired via the Bliss Bequest by exchange. ✅
- **Provenance owners/dates/price (null) /museum flag:** ✅ matches fact pack §6
  and Wikipedia.

---

## SOURCES
- English Wikipedia — *The Funeral of the Anarchist Galli*
  (death date/cause, funeral/riot, La mia vita quote, 1904 error + Corriere della
  Sera, casualty figure, Bernheim-Jeune 1912, provenance, Barr/Uccello quote,
  McKever, dimensions, Macchi and Pessoni factory).
- MoMA collection record — works/79225 (title, dims imperial+metric, credit line,
  accession 235.1948; record itself 403'd to the fetcher but the fields are
  confirmed via cached search result quoting moma.org).
- Khan Academy / Smarthistory — *Carlo Carrà, Funeral of the Anarchist Galli*.
- arthistoryproject.com + unknown.nu/futurism/techpaint.html — Technical Manifesto
  of Futurist Painting (1910) full text (force-lines/riot passage attribution).
- The Art Story — Futurism movement overview (force-lines quote context, 1912).
