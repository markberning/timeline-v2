# FACT-CHECK + LEGEND GATE — Leonora Carrington, *Self-Portrait (Inn of the Dawn Horse)* (c.1937–38)

Work id: `carrington-self`. Gate: fact-check + legend (caption/credit/provenance/stats/
annotation/key-statement surfaces, web-verified). No src edits, no commit.

## VERDICT: **PASS** (no BLOCKERs; 1 FIX, 4 NICE)

Every load-bearing claim web-verified against the Met, Wikipedia, the Met "Museums
Without Men" audio transcript (via search), Britannica/search snippets, ARS, and
biographical sources. Core facts (title, date, medium, dimensions, location, credit
line, accession, provenance chain, rights) are correct. The muse quote is verbatim
and correctly attributed; the longer "bullshit" variant is correctly flagged. Animal
symbolism is correctly held as scholarly reading, not artist-stated fact. Ernst is
proportionate. **Rights = `in-copyright` is CORRECT** (Carrington d.2011; estate +
ARS administer copyright — NOT pd-us). The one FIX is a dimensions-conversion
rounding inconsistency (cosmetic, not factual). Ship after the FIX (or accept as-is;
it is within tolerance).

---

## VERIFIED — load-bearing claims that checked out

- **Title.** Met catalogues plainly as *Self-Portrait*; "(Inn of the Dawn Horse)" is
  the standard popular subtitle; French *À l'auberge du cheval d'aube (Autoportrait)*
  (Wikipedia). Draft's usage correct. ✓
- **Date "c.1937–38."** Met dating "ca. 1937-38" (search snippet "created ca. 1937–38";
  factpack-cited Met Custom Prints). Begun London 1937, finished Paris 1938 — attested.
  Draft uses "c.1937–38" in all prose; `year:1938` flagged as sort-only. ✓
- **Medium.** Oil on canvas (Met, Wikipedia, universal). ✓
- **Location / credit line / accession.** The Metropolitan Museum of Art; "The Pierre
  and Maria-Gaetana Matisse Collection, 2002"; accession **2002.456.1**. All confirmed
  (Met search record, Smithsonian cross-ref `npg_2002.456.1_MMA`). ✓
- **Rights = in-copyright.** Carrington d.2011; works administered by Estate of Leonora
  Carrington / Artists Rights Society (ARS), NY. Definitively NOT public domain. The
  `rights:'in-copyright'` field + fair-use heroCredit ("shown small under fair use") are
  CORRECT. **No pd-us error.** ✓
- **Muse quote — KEY STATEMENT.** Display form "I didn't have time to be anyone's muse…
  I was too busy rebelling against my family and learning to be an artist" is verbatim
  and correctly attributed to Carrington answering art historian **Whitney Chadwick**.
  The Met's fuller form ("I thought it was bullshit. I didn't have time to be anyone's
  muse…", Katy Hessel *Museums Without Men* audio tour) is verbatim and correctly
  flagged as the longer variant. Draft correctly notes it is a general stance, not a
  statement about this canvas. ✓✓
- **Animal symbolism — soft attribution.** Hyena = wild kindred self, white horse =
  freedom/escape, rocking-horse = childhood — all correctly framed as "scholars read…"
  / "interpretation… not a key Carrington handed down," never asserted as her stated
  fact. The annotation and §looking prose both hold the reading at arm's length, exactly
  as the factpack requires. ✓✓
- **The Debutante (story) tie.** Carrington's 1937–38 story where a hyena takes the
  débutante's place at a society ball — confirmed (written 1937). The hyena-surrogate
  cross-reference is sound. ✓
- **Pénélope (play) tie.** Carrington's play about a girl in love with a rocking-horse
  (her childhood hobby-horse "Tartar") — confirmed. (Play written 1946 / staged Mexico
  City 1957; the draft wisely does NOT date the play, only describes it — safe.) ✓
- **Max Ernst, proportionate.** Ernst (1891–1976) — correct dates; he was 46 in 1937
  (draft "mid-forties" ✓); German Surrealist; met Carrington in London 1937; interned as
  enemy alien at WWII outbreak; emigrated to New York 1941. All confirmed. Ernst kept
  proportionate — framed as her route into Surrealism + the canvas's path to NY, never
  the headline; the muse refusal is the corrective. ✓
- **Biography.** Carrington 1917–2011 ✓; born into a wealthy Lancashire textile family
  ✓; debutante who rebelled ✓; fled to Spain, breakdown, institutionalized, *Down Below*
  memoir ✓; reached Mexico 1942, central figure of Mexican Surrealism ✓.
- **Surrealism / Breton.** Founded Paris 1924, Breton, dreams/unconscious; "convulsive
  beauty" is genuinely Breton's ("beauty will be convulsive or will not be at all").
  Draft's "launched in Paris in the 1920s" + Breton "convulsive beauty" attribution ✓.
- **Provenance chain (every link verified):**
  - Carrington left it with Ernst in France at WWII outbreak ✓
  - Ernst carried it to New York 1941 ✓
  - Ernst gave it to dealer **Pierre Matisse** after December 1942 ✓ (draft states
    "after 1942" / "after December 1942" — correctly approximate)
  - Pierre Matisse = **youngest son/child of Henri Matisse**, NY dealer ✓
  - Passed to **Maria-Gaetana ("Tana") Matisse** on Pierre's death **1989** ✓
  - **2002:** given to the Met by the Pierre and Maria-Gaetana Matisse Foundation ✓

---

## FINDINGS

### [FIX] Dimensions conversion: "2 ft 1 5/8 in" over-rounds the Met's own inch figure
The Met records **65 × 81.2 cm = 25 9/16 × 32 in.** (25 9/16 in = 25.5625 in =
2 ft 1.5625 in). The draft renders the height as **"2 ft 1 5/8 in"** (1.625 in),
which rounds the Met's exact 9/16 (0.5625) UP to 5/8 (0.625) — a ~1/16-inch drift.
Also the const `dimensions` field ("2 ft 1 5/8 in × 2 ft 8 in") and the stat chip
("2′1⅝″ × 2′8″") and the `looking` section dateLabel all repeat the 1 5/8 figure.
This is a cosmetic rounding inconsistency, not a wrong object, but it does not match
the source's own fraction.

- **Corrected text (preferred — match the Met exactly):** use **"2 ft 1 9/16 in × 2 ft 8 in"**
  and stat chip **"2′1⁹⁄₁₆″ × 2′8″"**, OR
- **Acceptable simplification:** round the height to **"2 ft 1 1/2 in"** (25.5625 ≈
  25.5 → 2′1½″), which is closer to the true value than 1 5/8.
- Width "2 ft 8 in" (81.2 cm = 31.97 in ≈ 32 in) is correct — leave as is.
- (`heroAspect: 1.25` from 65×81.2 → W/H = 81.2/65 = 1.249 ✓ correct.)

*Note: one secondary source rounds the width to 81.3 cm (the Met search snippet shows
"65 × 81.3 cm"); Wikipedia and the factpack use 81.2 cm. This is a known rounding
artifact of the same object, not a discrepancy to chase — keep 81.2.*

### [NICE] Maria-Gaetana Matisse's relationship to Pierre is never named
The provenance prose says the canvas "passed to Maria-Gaetana Matisse on Pierre's
death in 1989" and "in whose family it then stayed," but never says she was his
**wife/widow** (married 1974; d. 2001). It is accurate as written (she did inherit as
his widow), but a reader may infer "daughter/family member." Optional one-word clarity
gain: "passed to his widow, Maria-Gaetana ('Tana') Matisse." Not required — the
endpoint (Foundation → Met 2002) is correct either way.

### [NICE] "after December 1942" stated firmly in one provenance row, approx in prose
The const provenance note says "reportedly after December 1942" (good hedge), and the
afterlife prose says "Sometime after December 1942" (good). Consistent and correctly
soft. No change needed — noting only that both surfaces agree. ✓

### [NICE] "Her wild red mane" (factpack) vs draft's "wild dark hair"
The factpack §2/§5 describes Carrington's hair as a "wild **red** mane"; the draft
prose and annotations say "wild **dark** hair." Wikipedia describes only "wild tresses"
that mimic a horse's mane and does not assign a color; the painting itself shows dark
hair. The draft's "dark hair" is the safer, image-accurate choice — this is the draft
CORRECTLY diverging from a factpack overreach, not an error. No change. (Flagging so
the coordinator doesn't "fix" the draft back to "red.")

### [NICE] "often called her first truly Surrealist painting"
Draft attributes this as a critical judgment ("often called… which is fair as a
critical judgment"), exactly as the factpack §8 requires (not stated as undisputed
fact). Correctly hedged. ✓ No change.

---

## SURFACE CHECKLIST (all gated surfaces cleared)
- hook / heroCredit — accurate; rights + fair-use framing correct. ✓
- stats (3) — date, dimensions (see FIX), "The Met." ✓ (after dims fix)
- section blurbs ×5 — no factual errors. ✓
- annotations ×6 (hyena / rocking-horse / outdoor horse / riding clothes / hair /
  blue chair) — symbolism softly attributed; no blind coordinates (prose pointers
  only). ✓
- "The break" before/after block — Breton "convulsive beauty," women-as-object claim
  accurate and proportionate. ✓
- KEY STATEMENT (muse quote) — verbatim, sourced, variant flagged. ✓✓
- provenance chain ×5 — every link verified; credit line + accession verbatim. ✓
- lineage parents/children — defensible (Surrealist painting, Ernst, de Chirico
  dream-interiors, fled aristocratic life → Mexican Surrealism, women Surrealists as
  authors, female dream-self). No factual claim to fail. ✓
- rights — `in-copyright` CORRECT, not pd-us. ✓
