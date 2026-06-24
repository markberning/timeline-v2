# GATE — Comprehensiveness + Framing/Fairness

**Work:** Grosz, *"Daum" Marries Her Pedantic Automaton "George" in May 1920, John Heartfield Is Very Glad of It* (1920)
**Gate scope:** essential-facet coverage; genius-myth / superlative / fairness / proportion / anachronism.
**Files reviewed:** `work-daum-draft.md`, `work-daum-factpack.md`. Web-corroborated where noted.

---

## VERDICT: PASS WITH FIXES

The draft is comprehensive and fair on the core. It situates Grosz inside Berlin Dada by name (Heartfield, Herzfelde, Hausmann, **Höch**, Huelsenbeck), not as a lone satirist; it scopes its superlatives reasonably; it names the man-machine, the photomontage/painted split, the Maud anagram, the anti-bourgeois/anti-militarist engine, and Heartfield's photomontage afterlife. **No BLOCKERs.** But there are two real comprehensiveness gaps (Neue Sachlichkeit; the 1920 Dada Fair / army-insult trial) and one fairness gap (the bride is treated almost entirely as a satirical prop with no acknowledgement of the period's woman-as-spectacle convention — and Höch, the one woman in the room, was attacking exactly that convention). Fix those and ship.

---

## 1. COMPREHENSIVENESS

### [FIX] Neue Sachlichkeit is missing entirely — a major lineage facet
The brief lists "the influence / Neue Sachlichkeit" as an essential facet and the draft never names it. This is the single biggest gap. Grosz is, in the standard account, a founding figure of **Neue Sachlichkeit (New Objectivity)** — the movement *this* work feeds directly into. The Art Story and the Berlinische Galerie both place him in "Berlin Dada **and** New Objectivity," and note that the synthesis of modern (collage) and traditional (ink-and-watercolour) technique seen here is "typical… of the larger Neue Sachlichkeit movement." The draft's afterlife chapter routes the influence only through Heartfield's anti-Nazi photomontage; it should also name the cold, clinical, anti-romantic Weimar realism Grosz himself went on to anchor.

- Suggested add (DauAfterlife, after the Heartfield sentence): *"Grosz's own road led the other way, into paint. The clinical, unsentimental Weimar realism that art history calls Neue Sachlichkeit — New Objectivity — took the cold diagnostic eye of this picture and dropped the Dada scissors; Grosz became one of its central figures, and you can already see it here in the surgical way the marriage is laid open."*
- Also reflect in `lineage.children`: add `{ label: 'Neue Sachlichkeit (New Objectivity)', mode: 'art' }`.

### [FIX] The First International Dada Fair (1920) + the army-insult trial is omitted
The picture was made in the same months as, and belongs to the moment of, the **First International Dada Fair (Berlin, June–Aug 1920)** — the defining Berlin Dada event — after which Grosz and the organizers were **put on trial and fined for "insulting the German army."** This is the clearest single fact proving "Berlin Dada's bitter politics" weren't rhetorical: the state actually prosecuted them. The draft asserts the bitterness and the target but never lands the concrete consequence. Adding it strengthens the politics facet the brief specifically asks for.

- Suggested add (DauBerlin, "The circle" section, or DauBreak): *"This was not a safe pose. The summer of 1920 was the First International Dada Fair, the movement's loudest moment, and it ended with Grosz and his fellow organizers hauled into court and fined for insulting the German army. Berlin Dada's enemies were real enough to prosecute it."*

### [NICE] The "wedding announcement / private dedication" mechanism is well-covered — keep
The autobiographical "Daum"=Maud layer, the Heartfield dedicatee in-joke, and the Herzfelde "like a shadow" reading are all present and handled with the right hedges (Peter/Peters open; quotes scoped). No action.

### [NICE] Man-machine self-portrait — covered, but could name the de Chirico/Carrà mannequin debt as a shared 1920 Grosz program rather than a one-off
The draft already credits de Chirico for the city. Optional: note the faceless-mannequin/automaton was a *cluster* of 1920 works (it cites *Republican Automatons*), so the reader sees this as one specimen of a campaign, not a singular invention. Low priority — *Republican Automatons* already does this work.

---

## 2. FRAMING / FAIRNESS

### [PASS] Genius-myth — well-handled
Grosz is consistently embedded in Berlin Dada, named with five collaborators including Höch, and the photomontage technique is repeatedly credited as "the technique Grosz **and Heartfield** were pioneering" rather than a solo invention. The `figures` block lists "Berlin Dada" as a collective actor. No lone-genius framing to fix.

### [FIX] Fairness — the bride is treated purely as a prop; name the period's woman-as-spectacle convention
This is the brief's flagged fairness axis and the draft trips it. The bride exists in the read **only** as the warm-flesh half of a technical/thematic binary — "sensuality against cold mechanism," "the alibi," "vivid painted flesh against cold pasted mechanism." She has desire only so the automaton can refuse it; she is never a person, only the sensual pole of Grosz's argument about *men*. That is faithful to how Grosz built the picture, and the read shouldn't pretend the painting is feminist. But the read currently reproduces the objectification without a word of distance: it repeats "breast and genitals exposed… sensual" three times across three chapters as neutral description. One proportionate sentence naming the convention — that the undressed-woman-as-spectacle was the default visual grammar of the period, and that Grosz uses it without questioning it (where his own Berlin Dada colleague **Hannah Höch** was, in the very same years, cutting that convention apart — brides as mannequins, the male gaze as her explicit subject) — would keep the read honest without scolding the picture.

- Suggested add (DauReading or DauLooking, one sentence, proportionate): *"It is worth saying that the bride is a spectacle here, not a person: the half-undressed woman offered to the viewer's eye was the default grammar of the period, and Grosz reaches for it without questioning it — the body is a device in an argument about men. (His own Berlin Dada colleague Hannah Höch was, in these very years, turning her scissors on exactly that convention, cutting up the bride and the male gaze as her subject. Grosz does not.)"*
- Minor: trim the third repetition of "breast and genitals exposed" — it appears in the annotation, in DauLooking, and in DauReading; once in the close-looking pointer plus once in prose is enough. Repetition reads as the read enjoying the exposure rather than describing it.

### [FIX] Superlative scoping — two soft overclaims to bound
The draft twice calls it effectively the peak of the movement: section blurb "now hangs as one of the sharpest things Berlin Dada made," and the closing "one of the defining images of Berlin Dada… the sharpest small thing Berlin Dada made." "One of the defining images" is well-scoped and supported (it is among Grosz's most notable Berlin Dada works). But "**the** sharpest small thing Berlin Dada made" is an unscoped superlative asserted in the app's own voice. Recommend softening to a hedged form.
- Suggested: change "the sharpest small thing Berlin Dada made" → "one of the sharpest small things Berlin Dada made" (matches the already-correct "one of the defining images" two clauses earlier and the stat-block voice). Keep the rest.

### [PASS] "Co-inventor of political photomontage" (Heartfield) — acceptable
Heartfield is described as "co-inventor of political photomontage" and Grosz-and-Heartfield as jointly "pioneering" it. The first-claim is contested in the literature (Höch and Hausmann also claimed photomontage's invention), but the draft's "co-inventor" / "pioneering" phrasing is plural and hedged, not a sole-inventor claim, so it does not overclaim. No fix required; if anything the Höch fairness add above also covers this.

### [PASS] Proportion / anachronism — clean
No anachronisms. The Futurism contrast (machine as glory vs. machine as diagnosis) is correctly back-dated. The Neue Sachlichkeit and Heartfield-anti-Nazi forward links are correctly framed as *after*. The de Chirico debt is correctly placed *before*. The rights/copyright explainer (PD-US, EU-through-2029) is proportionate and accurate. The "wedding night" gloss in DauReading ("a wedding night in which the groom does sums") is a light reasonable reading, not an overreach.

---

## SUMMARY OF ACTIONS
- **[FIX]** Add Neue Sachlichkeit / New Objectivity as the work's forward influence (afterlife prose + lineage.children). *Largest gap.*
- **[FIX]** Add the First International Dada Fair (1920) + army-insult trial/fine — concrete proof of the bitter politics.
- **[FIX]** Add one proportionate sentence naming the woman-as-spectacle convention and Höch's contemporaneous counter-practice; trim one of the three "breast and genitals exposed" repetitions.
- **[FIX]** Scope the "**the** sharpest small thing Berlin Dada made" superlative → "one of."
- No BLOCKERs.
