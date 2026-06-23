# GATE — Fact-check + Legend · Vlaminck, *The Seine at Chatou* (1906), The Met

**Work:** Maurice de Vlaminck, *The Seine at Chatou*, 1906. The Metropolitan Museum
of Art, Jacques and Natasha Gelman Collection, 1998 (acc. **1999.363.84**).
**Gate:** FACT-CHECK + LEGEND. **Draft:** `work-chatou-draft.md`. **Fact pack:** `work-chatou-factpack.md`.
**Verdict:** **PASS with 0 BLOCKERs.** 2 [FIX] (one rights-reasoning note the brief
already flagged for confirmation; one provenance wording trim), 3 [NICE]. The draft
is factually clean against the Met record + web; quotes are correctly framed as legend;
provenance is correctly minimal; dimensions and aspect are correct.

---

## Verification basis (what I checked against)

- **Met collection API, object 490034** (live fetch this pass): title *The Seine at
  Chatou*; artist Maurice de Vlaminck; date 1906; medium Oil on canvas; dims
  **32 1/8 × 39 3/4 in. (81.6 × 101 cm)**; accession **1999.363.84**; credit line
  **"Jacques and Natasha Gelman Collection, 1998"**; Gallery Number empty;
  **isPublicDomain: false**; rights **"© 2026 Artists Rights Society (ARS), New York"**;
  Wikidata Q19918136. Every identity field in PART A matches exactly.
- **Met curatorial text** (recovered via search cache; the Met HTML page itself 429'd,
  as the fact pack warned): the sentence *"Combining the primary colors of blue and red
  with white, Vlaminck applied them directly from the tube in daubs and swirls of
  pigment, employing these conventional hues for the white houses, green leaves,
  reddish-orange tree trunks, and the blue, red, and white trawler in the background"*
  and *"shows both a remorqueur, or tugboat, and sailboats"* and *"emulated the
  undisguised brushwork and intuitive application of paint of Van Gogh's late,
  expressive style, which he so admired"* and *"spent the summer of 1906 in and around
  Chatou"* — all confirmed verbatim. The draft's annotations and prose draw only from
  these.
- **1901 Bernheim-Jeune van Gogh retrospective** — confirmed (March 1901, ≈71 works);
  documented, watch item (5) clears.
- **Quotes** — Wikiquote/MoMA *Les Fauves* 1952 / Sue Roe 2015 / *Tournant
  dangereux* 1929: confirmed as real-but-no-clean-primary, wording drifts; legend/disputed
  tier confirmed.
- **Supporting facts** — Renoir *Luncheon of the Boating Party* at Maison Fournaise,
  Île de Chatou (1880–81); Derain (1880–1954), 1900 train-accident meeting + shared
  Chatou studio; all confirmed.

---

## Watch items (from the brief) — dispositions

**(1) Met record / accession / credit / Whitney / dims/aspect — CLEAR.**
PART A states `acquired: 'Jacques and Natasha Gelman Collection, 1998'`, accession
1999.363.84 (header + provenance note + afterlife prose). NOT the Whitney. Confirmed
against the Met API verbatim. Dimensions `2 ft 8 1/8 in × 3 ft 3 3/4 in` and chip
`2′8⅛″ × 3′3¾″` are correct: 81.6 cm = 32.13 in = 2 ft 8.13 in (≈8⅛); 101 cm =
39.76 in = 3 ft 3.76 in (≈3¾); matches the Met's own 32⅛ × 39¾. `heroAspect: 1.24`
correct (101/81.6 = 1.238, landscape). No BLOCKER.

**(2) RIGHTS reasoning — see [FIX-1].** The brief's `rights: 'pd-us'` reasoning is
**sound for US display** and I confirm pd-us is the right tier for THIS app (a 1906
publication is US public domain; the Met's "© ARS" line is a reproduction/ARS-licensing
matter and EU life+70 term, not US copyright status; the app already inlines this exact
image in the Fauvism strip). I am NOT requiring a RestrictedFigure downgrade. One
factual-accuracy flag remains in the prose, below.

**(3) Provenance MINIMAL — CLEAR (one wording trim, [FIX-2]).** The draft asserts only
→ Gelman → Met 1998/99 as fact and explicitly declines to invent the middle chain.
Vollard is NOT asserted as an owner of this canvas (it says so outright). Good.

**(4) "Burn down the École" + "loved van Gogh more than my father" — CLEAR.** Both are
framed as legend/reported, never quoted-and-dated with a primary citation. The draft
even names the sourcing problem in-prose ("the exact words drift from book to book and
no clean original source pins them down"; "a line that gets repeated everywhere without
a clean original behind it"). Exactly the required handling.

**(5) 1901 Bernheim-Jeune retrospective — CLEAR.** Documented; the draft says "1901 …
opened at the Bernheim-Jeune gallery in Paris, around seventy of his canvases" with no
specific day pinned. Matches the fact pack's date-caution.

---

## [BLOCKER]
None.

---

## [FIX]

### [FIX-1] — Author-note rights rationale collides with the fact pack's "© ARS" framing; lock the language so the framing gate isn't handed a contradiction
- **Where:** PART A author note (draft lines 8–12) and the const comment (lines 41–43):
  *"the Met's '© ARS' line is treated as a reproduction-rights / EU-term notice, not US
  copyright. The fact pack's `RestrictedFigure` instruction is therefore superseded by
  the brief."*
- **Issue:** Not a factual error in the shipped prose — this is an internal author note,
  not reader-facing. But it states a legal conclusion ("reproduction-rights / EU-term
  notice, not US copyright") as settled. The fact pack reaches the opposite operational
  conclusion (`isPublicDomain: false` → RestrictedFigure). Per the brief, **pd-us is
  confirmed correct** and no downgrade is required, so the *decision* stands. The FIX is
  only to stop the note from asserting a flat legal characterization of the ARS line.
- **Correction:** Soften to a status note, e.g. *"The Met records this object as in
  copyright (© ARS, EU life+70 to 2029); the brief's pd-us call rests on US pre-1930
  publication and the app's existing inline use of this image. Display tier = pd-us per
  brief; confirmed by the fact gate."* Keep `rights: 'pd-us'` in the const.
- **Source:** Met API `isPublicDomain: false`, rights "© 2026 Artists Rights Society
  (ARS), New York"; brief's pd-us determination (confirmed).
- **Severity:** low — note-only, no reader-facing text changes.

### [FIX-2] — Provenance row note re-states the Vollard studio-buyout inside a *provenance* chain, which reads as a provenance claim
- **Where:** PART A `provenance[0]` note (draft line 81): *"The dealer Ambroise Vollard
  had reportedly bought out the painter's studio stock around 1905–06, the commercial
  backdrop to the Chatou pictures, but whether this particular canvas passed through
  Vollard is not confirmed and is not claimed here."*
- **Issue:** The content is accurate and the disclaimer is correct (it explicitly does
  NOT claim Vollard owned this canvas). The only risk is placement: putting the Vollard
  studio-buyout in the provenance *ledger* (even with a disclaimer) can read to a skimmer
  as a provenance step. The afterlife prose already carries the Vollard buyout properly
  (as commercial backdrop, line 248). Watch item (3) wants provenance MINIMAL.
- **Correction:** Trim the provenance row 0 note to the bare fact ("Painted in 1906
  during the summer Vlaminck spent in and around Chatou") and let the Vollard buyout live
  only in the afterlife prose where it's already correctly framed. Non-load-bearing —
  the disclaimer makes the current text *not wrong*; this is tidiness for the "minimal
  provenance" directive.
- **Source:** fact pack §5 (Vollard owned THIS canvas = UNVERIFIED; buyout = DOCUMENTED
  event, amount reported-not-carved).
- **Severity:** low — no false claim; placement/minimalism only.

---

## [NICE]

### [NICE-1] — "Around seventy of his canvases" (line 166) vs the documented ≈71
- The draft says "around seventy." Fact pack and sources say ≈71. "Around seventy" is a
  fair, non-false rounding. Could tighten to "around seventy" → fine as is, or "some
  seventy." No change required.

### [NICE-2] — Width prose-rounding "three feet four inches wide" (lines 186 etc.)
- The looking-section prose rounds 3 ft 3¾ in to "three feet four inches wide." This is
  colloquial rounding in body prose (the precise chip `2′8⅛″ × 3′3¾″` and the const
  dimensions are exact). Acceptable; flagging only so the clarity/framing gate knows the
  rounding is intentional, not a discrepancy. The `looking` section's `dateLabel` and the
  annotation correctly carry the exact "2 ft 8 1/8 in × 3 ft 3 3/4 in."

### [NICE-3] — "trawler" vs "tugboat/remorqueur"
- The Met text uses both "trawler" (for the blue/red/white background boat) and
  "remorqueur/tugboat." The draft sensibly describes the background craft as a "small
  boat … in blue, red, and white" and the main vessel as a remorqueur/tugboat + sailboats,
  avoiding the Met's slightly inconsistent "trawler." Good call; no change.

---

## Confirmed-accurate claims (spot list)

- Chatou ≈9 miles (≈14 km) west of central Paris; Sunday-leisure river town. ✓
- Renoir *Luncheon of the Boating Party* at the Maison Fournaise, Île de Chatou. ✓
  (painted 1880–81; the draft says "1870s and early 1880s" for the Impressionist era and
  attributes the *Luncheon* to that stretch — correct.)
- Vlaminck 1876–1958; self-taught, ex-racing-cyclist (career ended by typhoid),
  violinist/music teacher. ✓
- Derain 1880–1954; met Vlaminck 1900 after a train/rail accident; shared Chatou studio
  c. 1900–01; "School of Chatou" = informal nickname / two-man Fauve precursor. ✓
  (Draft correctly frames it as a nickname, never a formal school.)
- 1905 Salon d'Automne; Louis Vauxcelles coined "fauves"/"wild beasts." ✓ (Draft keeps
  the Vauxcelles detail to the name only and does not import the "Donatello chez les
  fauves" sculpture detail, per fact-pack guidance — correct.)
- Met curatorial facts in the six annotations (primary blue+red+white, daubs and swirls
  from the tube, white houses / green leaves / reddish-orange tree trunks, blue-red-white
  background boat, remorqueur + sailboats, van Gogh's late expressive style). ✓ verbatim.
- Vollard studio-stock buyout c. 1905–06, amount reported-not-carved ("several thousand
  francs," "treat the amount as reported"). ✓ (Draft says "reportedly," "treat the amount
  as reported, not carved." Correct.)
- Post-1907 palette darkening toward Cézanne (Cézanne d. 1906); later hostility to
  modernism / Cubism / Picasso. ✓ (Draft does NOT import the sensitive 1942 *Comœdia*
  wartime detail — appropriate for a work read.)
- heroAspect 1.24, landscape, heroFit 'contain'. ✓

---

## Sources

- Met collection API, object 490034: https://collectionapi.metmuseum.org/public/collection/v1/objects/490034
- Met page (curatorial text, via cache; page 429'd live): https://www.metmuseum.org/art/collection/search/490034
- Wikiquote — Maurice de Vlaminck (quote sourcing): https://en.wikiquote.org/wiki/Maurice_de_Vlaminck
- Britannica — Maurice de Vlaminck: https://www.britannica.com/biography/Maurice-de-Vlaminck
- TheArtStory — Maurice de Vlaminck: https://www.theartstory.org/artist/vlaminck-maurice-de/
- Wikipedia — André Derain: https://en.wikipedia.org/wiki/Andr%C3%A9_Derain
- Wikipedia — Luncheon of the Boating Party: https://en.wikipedia.org/wiki/Luncheon_of_the_Boating_Party
- Artnet — Bernheim-Jeune / 1901 van Gogh retrospective: https://news.artnet.com/market/bernheim-jeune-1465564
