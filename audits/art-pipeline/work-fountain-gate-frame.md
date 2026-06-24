# GATE — COMPREHENSIVENESS + FRAMING / FAIRNESS

**Work:** Marcel Duchamp, *Fountain* (1917), Dada
**Draft:** `audits/art-pipeline/work-fountain-draft.md`
**Fact pack:** `audits/art-pipeline/work-fountain-factpack.md`
**Gate:** Comprehensiveness + Framing/Fairness (web-checked)

---

## VERDICT: **PASS** (with 2 [FIX] + 4 [NICE])

No BLOCKERS. The draft is unusually strong on exactly the axes this gate
exists to police: it scopes "first readymade" correctly, it presents the
Baroness debate as a live, sourced, two-sided question, it never frames
*Fountain* as a lone-genius bolt-from-the-blue (the Society / Blind Man
collective context carries the whole narrative), and the readymade-as-idea
balance is handled with care. The two [FIX]es are real gaps in *fairness
proportion*, not factual errors; both are short and additive.

---

## 1. COMPREHENSIVENESS

Every essential facet from the brief is present and well-developed:

| Facet | Status | Where |
|---|---|---|
| 1917 Independents show + the no-jury promise | ✓ covered | FntCase ¶1–2 |
| Suppression (NOT "rejected" — no jury) | ✓ covered, explicitly corrected | FntCase "Hidden, not rejected" |
| The R. Mutt submission + the Mutt/Mott pun | ✓ covered | FntCase ¶3 |
| Readymade idea / choice-not-hand | ✓ covered, this is the spine | FntMaking ¶1; FntBreak entire |
| Stieglitz photo (only surviving image) | ✓ covered | FntMaking "The photograph"; FntLooking |
| Lost original + replicas (Schwarz, ~17 versions) | ✓ covered, thorough | FntAfterlife ¶1–2 |
| Influence on Conceptual art | ✓ covered | FntAfterlife "most influential" |
| The Blind Man collective defense (key statement) | ✓ covered, full verbatim text | FntBreak "The Richard Mutt Case" |
| Baroness authorship debate | ✓ covered, two-sided | FntBreak "Whose idea was it?" |

No MAJOR missing facet. The full required facet set is met.

### [NICE] Duchamp's resignation is stated but its weight is slightly under-read
FntCase says Duchamp "resigned from the board in protest." That is correct and
present. Minor: it is the single strongest piece of *contemporaneous* evidence
tying Duchamp to the act (it only makes sense if he was the submitter), and the
fact pack's §2 leans on it. No change required — flagged only because a reader
who later hits the Baroness section may not connect the two. Optional one-clause
nod in the debate paragraph ("the resignation only makes sense if he was the
one defied") would tighten the fairness argument. NICE-to-have, not needed.

### [NICE] The 1953/1963 intermediate replicas are compressed
FntAfterlife names 1950 (Janis → Philadelphia), 1963 (Linde → Stockholm), and
1964 (Schwarz edition of 8). The 1953 Paris replica from the fact pack is
dropped. This is a reasonable authorial compression (the fact pack itself flags
the 1953 location as uncertain), and "about seventeen versions" still lands.
No fix needed.

---

## 2. FRAMING / FAIRNESS

### Genius-myth — **CLEAN**
The draft actively resists the lone-genius reading. The narrative is built on
the *institution* (the Society's broken promise) and the *collective* (the
Blind Man editors — Duchamp / Roché / Wood, "frequently credits Beatrice Wood
in particular"). The defense is explicitly attributed to the editorial
collective and de-attributed from Duchamp-alone. Dada and the readymade lineage
(Bicycle Wheel, Cubist collage, WWI) are seeded in the `lineage.parents`. There
is no bolt-from-the-blue framing. PASS.

### "First readymade" overclaim — **CORRECTLY SCOPED (verified)**
This is the trap the brief warned about, and the draft avoids it cleanly.
- The draft NEVER calls *Fountain* "the first readymade." It calls it "the most
  famous of them" (FntMaking ¶1).
- The lineage parent entry reads: *"Duchamp's Bicycle Wheel — his first
  readymade, 1913: an ordinary object chosen, not made."* This correctly assigns
  "first readymade" to Bicycle Wheel (1913).
- Web-verified: Bicycle Wheel (1913) is Duchamp's first readymade; *Fountain*
  (1917) came four years into the campaign; the term "readymade" was coined ~1915
  and applied retroactively. The draft's "a word he had been using since around
  1915" (FntMaking ¶1) matches the record.
No overclaim. PASS.

### Attribution fairness — the Baroness theory — **PRESENT, SOURCED, WEIGHED (verified)**
The debate is handled exactly as the brief and fact pack require: named, not
asserted, not dismissed. FntBreak "Whose idea was it?" gives:
- the claimants (Thompson, Spalding) and Baroness Elsa von Freytag-Loringhoven;
- their evidence (the 11 April 1917 Suzanne letter, the handwriting reading, the
  Philadelphia argument);
- the rebuttal (Burlington Magazine 2019 — Bailey; Adès & Brotchie — the
  mistranslation point, the Louise Norton contemporary account, and the Baroness
  never claiming it);
- the honest summary: "The documentary weight currently sits with Duchamp's
  authorship. The debate is live, and it deserves to be named rather than tidied
  away in either direction."
Web-verified: the 2019 Burlington rebuttals exist and are described accurately;
current scholarly weight favors Duchamp. This is model-standard handling. PASS.

#### [FIX] Name Irene Gammel as a serious proponent, not just Thompson/Spalding
The draft frames the Baroness theory as resting on "the art historians Glyn
Thompson and Julian Spalding chief among them." Web research surfaces that
**Irene Gammel**, the Baroness's scholarly biographer (*Baroness Elsa: Gender,
Dada, and Everyday Modernity*, MIT Press, 2002), is the more academically
weighty proponent the Burlington rebuttals were also answering. Anchoring the
theory only on Thompson/Spalding (the more polemical figures) subtly *weakens*
the claimants' side and tilts the fairness balance toward dismissal. Adding
Gammel makes the "live debate" framing honest about how serious the other side
is.
**Suggested text** — in FntBreak "Whose idea was it?", change:
> "Some scholars, the art historians **Glyn Thompson** and **Julian Spalding**
> chief among them, argue that *Fountain* did not originate with Duchamp…"

to:

> "Some scholars — the Baroness's biographer **Irene Gammel**, and the art
> historians **Glyn Thompson** and **Julian Spalding** — argue that *Fountain*
> did not originate with Duchamp…"

#### [FIX] One image annotation slightly over-resolves a contested fact
In `annotations`, the "R. Mutt 1917" signature note states the Mott origin and
the pun as settled, with the disputed-sourcing caveat in a parenthetical at the
*end*: "(Whether the urinal really came from Mott is itself disputed.)" The
prose body (FntCase ¶3, FntLooking ¶2) handles this well, but the annotation —
which is a *separately gated reader surface* per the pipeline — buries the
contest. Because the Mott/Philadelphia question is load-bearing for the Baroness
debate (Thompson's whole geographic argument turns on whether Mott stocked this
model), the caveat should not be a trailing aside on a short surface.
**Suggested text** — in the signature annotation `detail`, move the caveat
forward:
> "…and that 'R.' stood for Richard, French slang for a moneybags. That said,
> whether the urinal really came from Mott is disputed — a point that fuels the
> rival authorship claim. The signature is the entire claim of authorship,
> painted onto something the artist did not make."

### Proportion — readymade-as-idea vs urinal-as-object — **WELL BALANCED**
The draft holds both halves and is explicit that *neither alone* is the point.
FntLooking spends real attention on the object-as-photographed (the turn, the
accidental Buddha silhouette, the glaze and light), and explicitly argues "it is
a real part of why the *photograph* became iconic and not just the idea behind
it." FntBreak then carries the idea (choosing-not-making) without letting it
swallow the object. The closing line — "art was never really in the object at
all. It was in the choice" — is the idea-primary thesis, but it is *earned*
after the object has been given its due. Good proportion. PASS.

### [NICE] "Most influential artwork of the 20th century" — attribute, don't assert
FntAfterlife states the 2004 poll (500 art-world figures, ranked #1 above
Picasso) — this is correctly attributed to the poll, not asserted as fact.
Clean as written. NICE only: the sentence "Fountain is the foundation stone of
Conceptual art" is a strong art-historical generalization; it is defensible and
standard, but a hedging "is routinely called the foundation stone of" would
match the gate's preference for attributed superlatives. Optional.

---

## SUMMARY OF FINDINGS
- **[FIX]** Add Irene Gammel as a Baroness-theory proponent (fairness: don't
  under-weight the claimants' side).
- **[FIX]** Move the "came from Mott is disputed" caveat to the front of the
  signature *annotation* (contested fact on a short gated surface).
- **[NICE]** ×4: connect resignation to the debate; "routinely called" hedge on
  the Conceptual-art superlative; (1953 replica omission and resignation weight
  noted, no action needed).

No BLOCKERS. The draft passes the comprehensiveness and framing/fairness gate;
apply the two [FIX]es before integration.
