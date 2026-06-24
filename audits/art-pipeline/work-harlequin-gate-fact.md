# FACT-CHECK + LEGEND gate — *The Harlequin's Carnival* (Joan Miró, 1924–25)

Gate: fact / legend (the fact-checker + apocrypha axis) for the work-level deep read.
Scope = EVERY reader-facing factual surface (const, stats, prose, the hunger/composition
quotes, the 6 annotations, the "break" block, provenance, rights). Web-verified
2026-06-24 against the holding museum (Buffalo AKG) and cross-checks. Did NOT edit the
draft or src; did NOT commit.

## VERDICT: **PASS** (no BLOCKERS) — 0 [BLOCKER], 2 [FIX], 4 [NICE]

The draft is unusually clean. Both load-bearing Miró quotes are verbatim-correct and
correctly attributed to the AKG account. Dimensions correctly use the museum's 93 cm
and explicitly reject Wikipedia's 90.5 cm outlier. The automatism trap is handled
exactly right (the draft argues it was deliberately composed, never calls it pure
automatism). The "ball of yarn" fragment is correctly NOT presented as a clean
verbatim. The Eiffel-Tower/globe readings are correctly attributed softly. The two
[FIX] items are small wording/rights-precision nits; neither is ship-blocking on its own
but both should be applied.

---

## VERIFIED CLEAN (load-bearing claims that checked out)

- **Title / artist / dates / medium / location / credit / accession.** AKG record
  confirms: *Carnaval d'Arlequin* (Fr) / *Carnival of Harlequin* (AKG English);
  Joan Miró (Spanish, 1893–1983); **1924–25**; oil on canvas; Buffalo AKG Art Museum;
  **Room of Contemporary Art Fund, 1940**; **accession RCA1940:8**. All match the draft.
  (https://buffaloakg.org/artworks/rca19408-carnaval-darlequin-carnival-harlequin)
- **Dimensions.** AKG: support **66 × 93 cm (26 × 36⅝ in)**, framed 36¾ × 47 × 3⅛ in.
  Draft's "66 by 93 centimeters," the ft/in conversion (2 ft 2 in × 3 ft ⅝ in), and the
  explicit rejection of the 90.5 cm width ("the museum says 93… on a question of its own
  catalogue the museum wins") are all correct. Wikipedia's **90.5 cm** confirmed as the
  rejected outlier.
- **Hunger / trance quote (the KEY STATEMENT).** Verbatim-correct against the AKG lecture
  page: *"I tried to capture the hallucinations that my hunger produced in me. It's not
  that I painted what I saw in my dreams, as Breton and his lot predicated in those days,
  but that hunger provoked in me a sort of trance."* Correctly attributed to the AKG
  account. (https://buffaloakg.org/node/17380)
- **Careful-composition quote.** Verbatim-correct against the AKG lecture page:
  *"After long meditation on what I proposed to do, I began to paint, and as I painted I
  introduced all the changes I believed to be appropriate."* Correctly used to make the
  "looks automatic, was composed" point.
- **Deliberate composition, NOT pure automatism.** Handled correctly. The "making"
  section explicitly says the canvas "was deliberately built and revised, not poured out
  in one unguided rush," and the "break"/"looking" sections never assert pure automatism.
  This is the special-care item the prompt flagged; the draft passes it.
- **Radishes-for-dinner / came-home-in-a-trance anecdote.** AKG account confirms both
  (the museum: "He described coming home at the end of a day without food and, in a kind
  of trance, drawing the forms that were the genesis of this painting"). Draft attributes
  it to the museum, which is correct.
- **Imagery — harlequin (half-red/half-blue mask, diamond tunic, moustache, pipe,
  admiral's hat per accounts), guitar-shaped body, belly-hole read as hunger, ladder with
  eye + ear, hybrid creatures "playing, singing, dancing… music literally in the air,"
  window/triangle/dark sphere.** All match AKG + Wikipedia. The belly-hole and the
  music-in-air quote are correctly attributed to the museum.
- **"Ball of yarn" fragment handled correctly.** The draft does NOT quote it; it says
  Miró's writings "mention a ball of yarn and cats… though the exact wording of that
  passage wobbles between sources and is best treated as a vivid description rather than a
  fixed quote." This is exactly right — web sources confirm unstable wording ("dresses up"
  vs "dressed up," "twisting around inside me" vs "twisting inside me").
- **Eiffel-Tower / globe attributed softly.** The draft says the triangle is "often read
  as the Eiffel Tower" and the sphere "as the globe… those readings are conventions, not
  labels the museum prints, so take them as 'commonly read as' rather than fact." Correct —
  Wikipedia states them flatly, but the draft correctly downgrades them to interpretive.
- **Rights pd-us.** Web-confirmed the work was in a Paris collection by **November 1925**
  (and Breton's by 1926), i.e. published/exhibited well before the 1931 US-PD cutoff. The
  pd-us rationale (pre-1931 publication; Miró d. 1983 so still in copyright elsewhere) is
  sound. The draft's caption rights line states this correctly.

---

## [FIX] — apply before ship (not individually blocking, but should land)

**[FIX-1] PART A `year` and the HARLEQUIN const display year is `1925`, not `1924–25`.**
- Where: PART A const, line `year: 1925,`.
- Problem: The fact pack (§8) and AKG both give the catalogue date as **1924–25** and
  warn explicitly: "Avoid writing a single clean year; sources that say just '1925' or
  just '1924' are clipping the range." The prose, stats, hero credit, and section
  dateLabels all correctly say **1924–25**; only the structured `year` field clips to
  1925. This is a real surface (it can drive a displayed date / sort label).
- Fix: if the `year` field must be a single integer for the data model, that is an
  acceptable system constraint (use 1925 as the completion year) — BUT confirm nothing
  renders `year` as the user-facing date string in place of the "1924–25" stats/credit.
  If `year` is shown to the reader anywhere as *the* date, change the rendering to use the
  "1924–25" range string instead. Do not let a bare "1925" reach the reader as the date.
- Severity rationale: [FIX] not [BLOCKER] because every *visible* date in the draft is
  already the correct range; the risk is only if the const `year` leaks to the surface.

**[FIX-2] Rights caption slightly overstates the copyright-elsewhere claim's specificity.**
- Where: `HrqLooking` PaintingFigure rights string: "Public domain in the US (published
  1925; Miró d. 1983, so still in copyright in many countries)."
- Problem: minor — "published 1925" is defensible (in a collection by Nov 1925), but the
  cleaner, fact-pack-sourced basis is *pre-1931 US publication*. The current wording is
  not wrong, just leans on a single year that the pack itself frames as a range.
- Fix (optional polish): "Public domain in the US (pre-1931 publication; Miró d. 1983, so
  still under copyright in many countries). Wikimedia Commons." Keeps the rationale exact.

---

## [NICE] — optional improvements, none blocking

**[NICE-1] Pre-1940 provenance IS documented — the draft's "not pinned down" is overly
cautious (but safe-not-wrong).** Web sources give a real pre-1940 chain: in a Paris
collection (possibly **Paul Éluard**) by Nov 1925 → **André Breton's** collection 1926 →
**René Gaffé** by 1929 → **Zwemmer Gallery** 1936 → Albright-Knox 1940. The draft chose to
leave 1924–1940 blank ("better left blank than guessed at"), which is honest and never
asserts a wrong fact, so it PASSES. But the chain is sourceable if the coordinator wants
to enrich the provenance array later. Note: any such enrichment must be re-verified
against the AKG provenance record (these are secondary sources), not pasted from a search
snippet. That Breton owned it is a genuinely good story-beat (the manifesto's author owned
the canvas) if confirmed.

**[NICE-2] "could once feed a dinner guest only a plate of radishes" — fine, lightly
embroidered.** AKG gives the radishes-for-a-friend detail; the draft's "dinner guest" /
"plate of" framing is a reasonable retelling, not a fabrication. No change needed.

**[NICE-3] Catalonia color/landscape claim correctly NOT used.** The fact pack flagged the
Catalonia framing as soft/cut-worthy (only in an AKG search summary, not the lecture). The
draft does not lean on it. Good — no action.

**[NICE-4] "admiral's hat" is hedged as "by some accounts" / "some accounts add."** AKG's
own short record describes the mask + diamond tunic; the moustache/pipe/admiral's hat come
from Wikipedia and other accounts. The draft's hedging ("by some accounts add a small
admiral's hat," "some accounts add a small admiral's hat") is appropriately cautious and
correct. No change.

---

## Surface checklist (all gated, all pass)
- const facts (title/date/medium/dims/location/credit/accession): PASS (see FIX-1 on `year`)
- stats (3): PASS
- hook / hero credit: PASS
- the 2 Miró quotes (hunger; composition): PASS — verbatim + correctly sourced
- the "ball of yarn" fragment: PASS — correctly NOT a clean quote
- the 6 annotations / looking pointers: PASS
- Eiffel-Tower / globe: PASS — softly attributed
- "break" before/after block: PASS — no pure-automatism claim
- provenance: PASS (NICE-1: enrichable)
- rights / caption: PASS (FIX-2 polish)
- MeanwhileSheet (1924 manifesto): PASS

Sources: Buffalo AKG collection record; Buffalo AKG Director's Lecture 2 (node/17380);
Wikipedia *The Harlequin's Carnival*; Google Arts & Culture (AKG asset); secondary
provenance snippets (Éluard/Breton/Gaffé/Zwemmer chain).
