# FACT-CHECK + LEGEND GATE — Max Ernst, *The Hat Makes the Man* (1920)

**Gate:** Fact / accuracy + caption-legend, art work-read pipeline
**Target:** `work-hat-makes-man-draft.md` (PART A const + PART B prose/captions/annotations/quotes)
**Authority of record:** MoMA collection record, work 35478 / accession **242.1935**
(page 403s to automated fetch; verified via MoMA's own quoted text in search
snippets + MoMA Tumblr + corroborating sources).

---

## VERDICT: FAIL — 1 BLOCKER (provenance: acquisition year is KNOWN, draft says "not confirmed")

One ship-blocking factual error: the draft repeatedly asserts MoMA's purchase year
is unknown/"not confirmed." It is known — **MoMA acquired the work in 1935,
purchased from Paul Éluard** (accession **242.1935**, the `.1935` being MoMA's
acquisition-year suffix). This is the single most load-bearing correction; the entire
provenance section + a stat-of-record framing are built on a false "we can't find it"
premise. Plus 1 FIX (a genuine medium source-conflict the draft picked one side of
without flagging) and several NICE polish items. Everything else — dimensions, the
botany pun, the caption German/English split, the Ernst quote, Jacob Straus, Cologne
Dada, Celebes, Surrealism founder, rights — verifies clean.

> NOTE FOR COORDINATOR: the gate brief instructed "acquired: 'Purchase' with NO
> invented year." That instruction was based on the fact pack's §6 caveat, which was
> itself wrong — the MoMA record DOES carry the acquisition year (1935, ex-Éluard).
> So the fix is NOT to keep it blank; it is to ADD the verified 1935 / Éluard
> provenance. The © 2017 line remains correctly identified as a rights year.

---

## [BLOCKER]

### B1 — Acquisition year IS known: 1935, purchased from Paul Éluard. Draft says "not confirmed" (3 places).
**Where:** PART A `provenance[1].year` = `'Acquisition date not confirmed'` and its
`note`; PART B `HmkAfterlife` "Provenance" paragraph ("The exact year of that purchase
is not confirmed in the records that are easy to reach…").

**Why it's wrong:** MoMA's accession number is **242.1935**; the work was
**purchased from Paul Éluard (Paris) in 1935**. MoMA's record states "Purchase" as
the credit line and the object entered the collection in 1935 (the `.1935` suffix is
MoMA's standard acquisition-year encoding; corroborated across multiple MoMA-quoting
sources). The fact pack's claim that the year "returns 403 / is not confirmed" is a
fetch artifact, not a genuine unknown. The © 2017 line is indeed a rights year (that
part of the draft's reasoning is correct), but the draft used the absence of a fetched
year to conclude the year is unknowable, which is false.

**EXACT corrected text — PART A const, replace the second provenance entry:**
```ts
    { year: '1935', who: 'Museum of Modern Art (purchased from Paul Éluard)', place: 'New York', note: 'MoMA bought the work in 1935 from the French poet and Surrealist Paul Éluard, who had owned it; the museum’s credit line reads simply “Purchase,” so it was bought rather than received as a gift or bequest (accession 242.1935). (The “© 2017 Artists Rights Society / ADAGP” on the museum’s record is a rights-clearance year, not the acquisition date.) Long a foundation stone of MoMA’s Dada and Surrealism holdings.', price: 'Purchase', museum: true },
```

**EXACT corrected text — PART B `HmkAfterlife` "Provenance" paragraph, replace the
"exact year not confirmed" sentence with:**
> It is now in the <strong>Museum of Modern Art</strong> in New York, which bought it in <strong>1935</strong> from the French poet Paul Éluard, an early owner; the museum&rsquo;s credit line reads simply <strong>&ldquo;Purchase,&rdquo;</strong> meaning it was bought rather than given. (The &ldquo;© 2017&rdquo; on the museum&rsquo;s record is a rights-clearance date, not the date of acquisition.) The little hat-collage has been one of the foundation stones of MoMA&rsquo;s great holdings of Dada and Surrealism ever since.

Also update PART A `sections[4].blurb` ("long a foundation stone of MoMA's Dada and
Surrealism holdings") — fine as is, no change needed, but the new 1935 fact lets you
say "in MoMA since 1935" if desired (NICE, not required).

---

## [FIX]

### F1 — Medium: genuine source conflict ("on paper" vs "on board"); draft asserts "on paper" as MoMA-exact without flagging.
**Where:** PART A `medium`; PART B `HmkCologne`/`HmkMaking` ("on cut-and-pasted
printed paper, mounted on a second sheet of paper"); the KEY-FACT-HANDLING note
("MoMA says 'on paper,' not board").

**Finding:** This is NOT cleanly settled. The MoMA-quoting **Tumblr** post (which
reproduces MoMA's own record) gives "...on cut-and-pasted printed paper **on paper**."
But the **search-engine snippet of the live MoMA collection record (35478)** returns
"...on cut-and-pasted printed paper **on board**." German Wikipedia says cardboard
("auf Karton"). So three readings exist: MoMA-Tumblr = *on paper*; MoMA-live-snippet =
*on board*; de.wiki = *Karton*. The draft picked "on paper" and stated affirmatively
that MoMA says paper not board — but the current live MoMA record (as surfaced) says
**board**, so the draft's confident "MoMA says paper" framing is at least contestable
and may be backwards.

**Recommended fix:** Either (a) the coordinator confirms the live MoMA 35478 medium
string directly (browser, not automated fetch) and matches it verbatim, OR (b) soften
the draft's KEY-FACT claim so it does not assert MoMA-says-paper as settled. Do NOT
ship the absolute "MoMA says 'on paper,' not board" gloss while the live record
snippet says board. Minimal safe edit to the KEY-FACT note:
> Medium = MoMA's line; sources split on the final support ("on paper" vs "on board" vs German "Karton"). Match MoMA's live record verbatim at ship.

The visible prose ("mounted on a second sheet of paper") is low-stakes and can stay if
the final support word is paper; revisit if MoMA confirms board.

### F2 — "managed his father-in-law's hat factory for six weeks" is a verified, available detail the draft drops.
**Where:** PART B `HmkMaking` ("The catalogue came from his father-in-law, Jacob
Straus, a Cologne hat manufacturer").

**Finding:** Jacob Straus / Cologne hat manufacturer / **men's-hat sample catalogue**
all verify (German Wikipedia + de-wiki-quoting sources). One additional verified detail
the draft omits and the fact pack's "minding the factory" variance was unsure about:
Ernst **briefly ran his father-in-law's hat-pressing factory (about six weeks)**. Not
an error — the draft's account is accurate — but if the coordinator wants the richer
true version, the "minding the factory" strand is NOT apocryphal; it is compatible
with the men's-hat-catalogue account. This is a FIX only in the sense of "you may
safely add it"; leaving it out is also fine. No correction required to ship.

---

## [NICE]

### N1 — Stats row "Dimensions: 13⅞ × 17¾ in" — verified correct; keep.
35.2 × 45.1 cm = 13⅞ × 17¾ in is MoMA's value; landscape (W>H); the 35.6×45.7 /
14×18 in figure is the rounded English-Wikipedia variant. PART A `heroAspect` 1.28 and
`dimensions: '1 ft 1⅞ in × 1 ft 5¾ in'` are internally consistent and correct
(13⅞in = 1ft 1⅞in; 17¾in = 1ft 5¾in). No change.

### N2 — Provenance enrichment: Paul Éluard is now nameable as the prior owner.
Tied to B1. Once 1935/Éluard goes in, the `figures[]` array could optionally gain
Éluard, but not required.

### N3 — Celebes claim: verified, keep wording.
"Within a year Ernst makes the dream-monster Celebes" — *The Elephant Celebes* is
**1921** (one year after 1920), "undoubtedly the first masterpiece of Surrealist
painting" is a sourced critical commonplace, now at Tate. The draft's hedge "often
called the first masterpiece of Surrealist painting" is appropriately attributed.
Note Éluard also bought Celebes in 1921 — nice resonance with the new provenance, not
required.

---

## VERIFIED CLEAN (no action)

- **Dimensions** 13⅞ × 17¾ in / 35.2 × 45.1 cm, landscape — ✓ MoMA value; units ft/in correct; orientation correct.
- **rights: 'pd-us'** — ✓ published 1920 → US public domain; Ernst d. 1976 → still in copyright EU (life+70, through 2046); ARS/ADAGP © on museum repros. Draft's "Rights" prose is accurate.
- **The inscribed German caption** — ✓ verbatim German matches the de.wiki transcription; MoMA's English given AS a translation, not as the title.
- **The angiosperm/gymnosperm botany pun** — ✓ correctly named: *bedecktsamig* = angiosperm (covered-seed), *nacktsamig* = gymnosperm (naked-seed); draft correctly warns the circulating "seed-covered / seedless" English flattens the pun. This is exactly right and is the legend gate's hardest item — passes.
- **French bracketed lines as title source** — ✓ *c'est le chapeau qui fait l'homme* / *le style c'est le tailleur* verify; title derivation correct.
- **Ernst collage-definition quote** — ✓ "the coupling of two realities, irreconcilable in appearance, upon a plane which apparently does not suit them" is genuine Ernst (full form: "Collage is the noble conquest of the irrational, the coupling of two realities…"). Draft quotes the back half accurately and attributes to Ernst.
- **Lautréamont separation** — ✓ draft explicitly keeps the umbrella/sewing-machine line as Lautréamont's, NOT Ernst's. No conflation. Passes the brief's special-care item.
- **Ernst overpainting quote** — ✓ "to transform what previously had been merely banal pages of advertising into dramas that contained my most secret desires" verifies against the documented wording (Ernst on the 1919–21 overpaintings).
- **Freud read** — ✓ framed as interpretation ("likely inspired," "not documented by Ernst") in both annotation and prose; matches MoMA Learning's own hedging.
- **Cologne Dada / Baargeld / Arp / 1919–1920** — ✓ all verify.
- **Ernst as a founder of Surrealism** (Paris, 1924) — ✓ verifies; draft says "within four years … founding member."
- **Date 1920** — ✓ consistent across all sources (not 1919, not later).
- **Medium components** (gouache, pencil, oil, ink, cut-and-pasted printed paper) — ✓ all present and correct; only the final support word (paper/board) is contested — see F1.

---

## SOURCES CONSULTED
- MoMA collection record 35478 / accession 242.1935 (via search snippets of MoMA text; page 403s to automated fetch) — medium, dims, credit line, **1935 purchase from Paul Éluard**.
- MoMA Tumblr collection-highlight (quotes MoMA record verbatim) — medium "on paper", "Purchase. © 2017 ARS/ADAGP".
- MoMA Learning page — Freud reading framing.
- English Wikipedia, *The Hat Makes the Man* — caption English translation; rounded dims/medium variant ("on board").
- German Wikipedia, *Der Hut macht den Mann* — verbatim German caption; Jacob Straus men's-hat catalogue; "ran the hat-pressing factory ~6 weeks"; 35.2×45.1 cm.
- Wikidata Q1194502 — accession 242.1935; 35.2×45.1 cm.
- *The Elephant Celebes* (Wikipedia) — 1921; "first masterpiece of Surrealist painting"; Éluard bought it 1921; now Tate.
- Ernst collage + overpainting quotes — multiple Ernst-quote/scholarship sources.
