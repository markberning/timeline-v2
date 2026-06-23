# GATE — FACT-CHECK + LEGEND — Derain, *Charing Cross Bridge, London* (1906)

**Vertical:** art · **Gate:** fact / legend · **Target:** `work-charing-cross-draft.md`
**Verdict:** PASS with minor fixes. No BLOCKERS. Every load-bearing fact verifies
against the fact pack and the web. All five "watch" traps the brief named are
handled correctly. The fixes below are precision/consistency, none ship-blocking.

Method: NGA.gov blocks automated fetch (HTTP 403), so the NGA artwork record was
verified through search snippets of nga.gov/artworks/61249 + nga.gov node 856031,
plus pubhist (NGA mirror, accession + dims), arthistoryproject, arthive, Wikipedia
(Pool of London, Houses of Parliament Monet series, John Hay Whitney, Vollard),
the Met Vollard catalogue, and the Courtauld "London Paintings" record.

---

## WATCH-ITEMS (the five the brief flagged) — all CLEAR

1. **NGA canvas, not MoMA — acc. 1982.76.3, dims, landscape ~1.25.** CLEAR.
   National Gallery of Art, Washington, John Hay Whitney Collection, accession
   **1982.76.3**, oil on canvas, **80.3 × 100.3 cm** confirmed (pubhist NGA mirror
   gives 80.5×100.5 — rounding; arthistoryproject + fact pack give 80.3×100.3).
   Inches: 80.3 cm = 31.6 in = 2 ft 7⅝ in; 100.3 cm = 39.5 in = 3 ft 3½ in.
   Draft's `dimensions: '2 ft 7 5/8 in × 3 ft 3 1/2 in'` and `heroAspect: 1.25`
   (100.3/80.3 = 1.249) are correct, imperial-only, landscape. The draft never
   confuses this with MoMA's *Charing Cross Bridge* (works/79463) or MoMA's
   *London Bridge* (works/79103) — the explicit decoy comments are present and
   right.

2. **Vollard sent Derain to rival Monet; series count CONFLICTED; trips hedged.**
   CLEAR. Vollard suggested/commissioned the London trip in response to the
   popularity of Monet's London series (Wikipedia *Pool of London*: "At the
   suggestion of Ambroise Vollard, Derain travelled to London to paint works that
   reflected the popularity of Claude Monet's earlier London series"). Count IS
   conflicted — NGA/secondary: "**about 30 London paintings over three visits in
   1906–07, far short of the 50 Vollard wanted**." Draft says "**dozens
   commissioned … around thirty delivered**" and "sources disagree on whether it
   was two trips or three, so we will not pretend to know." Both hedged exactly as
   the pack requires; no hard number asserted.

3. **Depicted span = Charing Cross / Hungerford railway bridge; Westminster/Big
   Ben on the FAR BANK; the span must NOT be called Westminster Bridge.** CLEAR.
   Confirmed: north bank of the Thames bending toward Westminster; Big Ben and the
   Houses of Parliament are pickable among the buildings on the far bank (multiple
   sources). The bridge IS the Charing Cross / Hungerford railway bridge; the
   common loose alt-title "Westminster Bridge" exists (Arthive lists the work "also
   known as Westminster Bridge"), which is exactly the trap. The draft names the
   span the railway bridge throughout and explicitly warns the reader it is "not
   Westminster Bridge, even though some old catalogues loosely call it that." Big
   Ben/Parliament are correctly placed on the far bank, never on the span. Handled.

4. **"Translate, not reproduce" must be paraphrased, not quoted.** CLEAR. The
   draft never sets it in quotation marks. Section title "To translate, not to
   copy" is a paraphrase, and the prose adds the explicit honesty note: "That is a
   paraphrase of the idea Derain worked by; the neat sentence you sometimes see
   quoted has no reliable dated source, so take the idea as real and the exact
   wording as not his." This is the correct handling per the pack's
   [DISPUTED-as-verbatim] flag.

5. **No invented prices.** CLEAR. Every provenance entry carries `price: null`
   except the final museum gift (`price: 'gift to the museum'`). The afterlife
   prose states outright that the museum publishes no sale prices "so neither will
   we." No franc/dollar figures anywhere. Anti-invention discipline intact.

---

## PROVENANCE CHAIN — verified, matches NGA

Search of the NGA record confirms the full chain as drafted: Derain → Vollard
(1906); sold Dec 1918 through Walter Pach / Carroll Galleries to John Quinn; from
Quinn's estate **probably** Paul Guillaume; sold 1927 Alex. Reid & Lefèvre; 1931
Galerie Étienne Bignou; 1932 to G. Keller for M. Knoedler & Co.; Mme. Kaethe Perls
(Paris, 1932–38); **possibly** Walter P. Chrysler Jr. (owned by 1939); Chrysler
sale, Parke-Bernet, 16 Feb 1950, then Julius H. Weitzner; sold 12 Apr 1950 to John
Hay Whitney; deeded 1982 to the Whitney Charitable Trust, gift 1982 to the NGA.
Both NGA hedges ("probably" Guillaume, "possibly" Chrysler) are preserved. Dates,
order, cities, and the two 1950 transactions all match.

---

## FINDINGS

### [FIX] Weitzner's city — draft/factpack say "New York," one NGA snippet says "London"
- **Where:** PART A provenance row 5 (`place: 'Paris / New York'`, note "held by the
  dealer Julius H. Weitzner") and fact pack §5 row 9 (Weitzner, New York).
- **Issue:** One search snippet of the NGA provenance reads "…then went to Julius
  H. Weitzner **in London**, who sold it on April 12, 1950 to John Hay Whitney."
  Weitzner operated in both New York and London across his career, so the snippet
  may reflect the NGA's own wording for this link.
- **Correction:** Verify Weitzner's city against the live NGA provenance string and
  match it. If the NGA says "London," correct the row; if it gives no city, drop the
  city claim rather than assert New York. Low impact (Weitzner is a one-line
  pass-through dealer, no reader-facing prose names his city — the afterlife prose
  just says "held by the dealer Julius H. Weitzner" with no city, which is safe).
- **Source:** nga.gov/artworks/61249 provenance (relayed via search snippet).

### [FIX] Provenance year label "1932–1950" overstates the row's span
- **Where:** PART A provenance, row with `year: '1932–1950'` (Perls → Chrysler →
  Chrysler sale → Weitzner).
- **Issue:** Cosmetic. The label bundles Perls (acquired 1932–38) through the Feb
  1950 Chrysler sale into one "1932–1950" chip, while the very next row is also
  "1950" (Whitney, 12 Apr). Not wrong, but the overlapping "1950 / 1950" labels
  read oddly. Internal const display only; no factual error.
- **Correction (optional):** Label this row "1932–Feb 1950" and the next "Apr 1950"
  for clarity. NICE-to-have; not required.

### [FIX] "Big Ben … opened just 8 years before" is NOT claimed by the draft — leave it out (confirming a non-error)
- Note for the coordinator: a secondary source (Arthive/yourarthome) says the clock
  tower "opened just 8 years before this painting." That is **wrong** (the Clock
  Tower / "Big Ben" was completed 1859, not c.1898) and, correctly, the draft does
  NOT repeat it. No action — flagged so the claim is not added later.

### [NICE] "Big Ben and the Houses of Parliament" — keep the gate-6 by-eye confirm
- The far-bank-Westminster geography is documented and the draft attributes Big Ben
  to the far bank correctly. Per the pack and the *Demoiselles* lesson, the
  coordinator should still confirm at gate 6 that Parliament is actually
  identifiable in the chosen high-res scan (the colors orange/turquoise are a
  secondary-analysis read; "you can pick out" is appropriately hedged, so this is a
  by-eye confirm, not a fact error).

### [NICE] Color claims (no blue/no gray river, butter-yellow sky, divisionist spots) are by-eye items, not text-verifiable here
- "No blue and no gray anywhere in the water," the specific named hues (bumblebee
  yellow, bubblegum/watermelon pink, burnt-orange), and "intermittently applied
  spots and lines" all trace to the fact pack's secondary color analyses + Arthive's
  "intermittently applied coloured spots and lines" (verbatim-confirmed phrasing).
  These are visual assertions the fact gate cannot settle from text — they belong to
  the gate-6 confirm-by-eye list, which the draft's own ledger already flags. No
  text-level error; just do not let "no blue" ship unchecked against the actual scan.

---

## SPOT-CONFIRMED SUPPORTING FACTS (all DOCUMENTED)

- Derain 1880–1954, age 26 in 1906; co-founder of Fauvism with Matisse. CONFIRMED.
- Vollard 1866–1939; gave Cézanne (1895) and Picasso (1901) early shows. CONFIRMED
  (Met Vollard catalogue; Wikipedia). Draft's characterization accurate.
- Fauvism = "wild beasts," named after the 1905 Salon (Salon d'Automne), arbitrary
  color. CONFIRMED (standard).
- Monet's London series shown at **Durand-Ruel, Paris, May–June 1904** (37 canvases),
  a sensation. CONFIRMED (Wikipedia *Houses of Parliament* series; muma-lehavre).
  Draft's "summer of 1904" is accurate.
- Most canvases worked up back in France from London sketches, only some in situ.
  CONFIRMED as the standard account (Courtauld / Pool-of-London context); draft
  hedges appropriately.
- John Hay Whitney 1904–1982, American businessman/venture-capitalist, diplomat
  (US Ambassador to UK 1957–61), major collector; NGA received works from his
  collection after his 1982 death. CONFIRMED (Wikipedia). Draft accurate.
- Courtauld "André Derain: The London Paintings" exhibition, 2005–06. CONFIRMED
  (Courtauld; Wikipedia *Pool of London* references the 2006 show). Draft accurate.
- Meanwhile-sheet: Picasso at work on *Les Demoiselles d'Avignon* 1906–07 in
  Montmartre, the next revolution aimed at form. CONFIRMED (standard; app-internal).

---

## BOTTOM LINE

No BLOCKERS. The draft is factually sound and every brief-flagged trap is handled
correctly (NGA-not-MoMA identity + accession + landscape dims; Vollard/Monet
assignment; conflicted series count and trips both hedged; Charing Cross/Hungerford
span with Westminster/Big Ben kept on the far bank; "translate not reproduce"
paraphrased; zero invented prices). Two small [FIX] items (verify Weitzner's city
against the live NGA string; tidy the "1932–1950"/"1950" provenance labels) and the
standing gate-6 by-eye color/Parliament confirms are the only follow-ups. Ship after
the Weitzner-city check.
