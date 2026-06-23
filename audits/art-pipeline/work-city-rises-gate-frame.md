# GATE — COMPREHENSIVENESS + FRAMING/FAIRNESS — Boccioni, *The City Rises* (1910), MoMA

Gate run (web-enabled) against `work-city-rises-draft.md` using `work-city-rises-factpack.md` as source of truth.
Two lenses: (1) COMPREHENSIVENESS — what's missing; (2) FRAMING/FAIRNESS — Futurism's ideology, genius-myth inflation, first/only overclaim.
Verdict severities: **[BLOCKER]** ship-stops · **[FIX]** must-do before integrate · **[NICE]** optional polish.

**Overall: NOT clean. One [BLOCKER], two [FIX], three [NICE].**

The draft is unusually careful on the *art-historical* axes the fact pack flagged (date, the manifesto-naming tangle, the "first" scope, the horse-death framed as irony not prophecy, price left null). Where it falls short is exactly the axis the fact pack did NOT cover and this gate is charged with: **the political/ideological content of Futurism**. The draft repeatedly invokes the manifestos as pure aesthetic excitement ("furious, ecstatic," "worship speed, machines, danger, and the modern city") and never once tells the reader what the founding manifesto actually said about war, violence, and women, or where Marinetti's politics went. That is a fairness/comprehensiveness gap, not a stylistic one.

---

## LENS 1 — COMPREHENSIVENESS (what's missing)

The four items the brief named as required context are all PRESENT and well-handled:
- **Futurist Manifesto context** — covered (CtyManifestos, the whole first section).
- **Divisionist roots** — covered well (CtyDivisionism + the Previati/Segantini/Seurat lineage; figures list).
- **Modern-labor / industrial-Milan subject** — covered well (CtySite; the *Il lavoro* title used as the key to the labor reading).
- **Why it's the first big Futurist painting** — covered, and correctly scoped (CtyDivisionism close).

So on the narrowly art-historical comprehensiveness checklist the draft passes. The missing material is ideological/contextual (see Lens 2 (a)), plus two smaller gaps:

### [FIX] C1 — The manifesto is described only by its art content; its war/violence/misogyny content is omitted
**Where:** CtyManifestos, para 1:
> "It declared that a racing automobile was more beautiful than an ancient Greek statue, that museums were graveyards, and that art should worship speed, machines, danger, and the modern city."

**Problem:** This is an accurate but sanitized digest. The *Manifesto of Futurism* (Point 9) is famous and notorious for: "We will glorify war—the world's only hygiene—militarism, patriotism, the destructive gesture of freedom-bringers, beautiful ideas worth dying for, and **scorn for woman**." (verified via Britannica primary source / italianfuturism.org full text). A reader-facing summary that lists "speed, machines, danger, and the modern city" and stops there gives a materially incomplete and flattering picture of the document. "Danger" is doing a lot of quiet work; the manifesto explicitly glorified *war* and *contempt for women*, which is not the same as a generic taste for danger. This is both a comprehensiveness gap (an omitted defining feature of the primary source) and a fairness problem (Lens 2a). See the suggested fix under F1 below — one fix resolves both.

### [NICE] C2 — "scaffolding and chimneys" but the trams/streetcars in the fact pack are dropped
**Where:** CtySite / the scaffolding annotation. Minor. The fact pack (Beat B) notes "trams in the background (per several readings)." The draft sticks to scaffolding + chimneys, which is the safer, more verifiable set, so this is a defensible omission, not an error. Flagging only for completeness; no action required.

### [NICE] C3 — "first read aloud to a rowdy theater crowd in Turin" loses the named venue/date the fact pack supplies
**Where:** CtyManifestos para 3. The fact pack gives "Politeama Chiarella, Turin, 8 March 1910." The draft says "a rowdy theater crowd in Turin that March." This is a fine house-voice compression, not a defect; only noting that the specific date/venue are available if the clarity gate wants them.

---

## LENS 2 — FRAMING / FAIRNESS

### 2(a) Futurism's ideology — the central finding

### [BLOCKER] F1 — Futurism is presented as politically innocent; the manifesto's glorification of war/violence and "scorn for woman" is entirely absent, and Marinetti's later Fascism is never mentioned
**This is the gate's one ship-stopper.** Across the whole read, Futurism is framed exclusively as an exhilarating *aesthetic* revolution. The reader is never told that the founding manifesto glorified war as "the world's only hygiene," glorified militarism and violence, and declared "scorn for woman"; nor that Marinetti, the movement's founder whom the draft introduces by name and quotes admiringly, went on to co-write the 1919 *Fascist Manifesto* and become an enthusiastic backer of Mussolini. The brief is explicit that the read "should name this honestly where relevant WITHOUT anachronism, not present Futurism as politically innocent." As written, it presents it as politically innocent.

The places that make the silence conspicuous:

1. CtyManifestos para 1 — the sanitized list of manifesto content (quoted under C1).
2. CtyManifestos para 1 — "a furious, ecstatic text" — frames the tone as thrilling without saying what the fury was *for*.
3. CtyAfterlife para 3:
> "When Italy entered the First World War, Boccioni (who, like the other Futurists, had loudly glorified war as a cleansing modern force) volunteered."

This is the ONLY place the war-glorification surfaces, and it is buried in a parenthesis and attached to Boccioni's enlistment, not presented as a defining feature of the movement the reader spent a whole section admiring. The phrase "war as a cleansing modern force" is good and accurate (it echoes "war—the world's only hygiene") — but it appears once, late, in parentheses, after the manifesto has already been sold to the reader as pure aesthetic excitement.

**Why it's a BLOCKER, not a FIX:** the fairness standard here is a standing one (the framing gate exists precisely to stop a movement being laundered). A reader finishes this piece thinking Futurism was a daring art movement about speed and labor, with no idea it was also a militarist, misogynist, proto-Fascist program. That is the exact failure mode the lens is built to catch.

**No anachronism risk for Boccioni himself:** Boccioni died 17 Aug 1916; Italian Fascism dates from 1919. So the draft must NOT imply Boccioni was a Fascist or that *this painting* is Fascist — he did not live to see the party. The honest framing is: the movement's founder and ideology carried these commitments from the 1909 manifesto onward (war, violence, misogyny — contemporaneous with and predating this painting), and Marinetti later carried Futurism into Fascism (1919, after Boccioni's death). That sequencing is the anti-anachronism guardrail. (Verified: Marinetti co-wrote the 1919 Fascist Manifesto with Alceste De Ambris and argued in *Futurismo e Fascismo*, 1924, that Fascism was Futurism's extension — Wikipedia, Britannica.)

**Suggested fix (resolves F1 + C1 together).** Two edits, both inside CtyManifestos so the reader meets the ideology *before* admiring the art, plus a light touch in CtyAfterlife. Do not bolt on a lecture; keep house voice. Suggested replacement for the sanitized sentence in para 1:

> It declared that a racing automobile was more beautiful than an ancient Greek statue, that museums were graveyards, and that the only fit subjects for art were speed, machines, and the modern city. It also said uglier things, and they are not incidental to it: the manifesto glorified war as "the world's only hygiene," cheered violence and militarism, and listed, flatly, "scorn for woman." Futurism was an exhilarating idea about painting and a nasty politics in the same breath, and you cannot have the first without reading the second on the page next to it.

And a short, anti-anachronism close to the section (new sentence or two), e.g.:

> Where that politics led is worth saying plainly. Marinetti would go on, in 1919, to help write the founding manifesto of Italian Fascism, and to spend the 1920s as a noisy backer of Mussolini. Boccioni did not follow him there; he was dead by 1916, before Fascism existed. But the militarism was in the movement from the first manifesto, years before this painting, and it is part of what "worship of force" meant to these men. Hold that as you look at the great red horse: the energy Boccioni found beautiful is the same energy the manifesto wanted pointed at war.

(If the author prefers, the Fascism sentence can instead live in CtyAfterlife near the existing war-glorification parenthesis, as long as the manifesto's war/violence/misogyny content is named up front in CtyManifestos. The non-negotiable is: the reader learns what the manifesto actually said, in the body, not buried.)

### [NICE] F1b — once F1 is fixed, the existing CtyAfterlife parenthesis can be tightened
The "loudly glorified war as a cleansing modern force" parenthesis is good and should stay, but once the manifesto's content is named up front it will read as a callback rather than the lone mention. No required change; just don't delete it when fixing F1.

### 2(b) Genius-myth inflation

The draft is largely disciplined here. It credits the technique to a tradition (Divisionism, Previati, Segantini, Seurat, Balla as teacher), credits the *idea* to the manifesto rather than to lone Boccioni inspiration, and explicitly de-romanticizes the death ("not a prophecy... the kind of romance that flatters the storyteller"). Good. Two soft spots:

### [FIX] F2 — "the whole reason the painting works" / "the whole drama... is right here" — single-cause inflation
**Where:** CtySite para 4 ("it is the whole reason the painting works") and CtyLooking ("The whole drama of the picture is right here"). These are house-voice flourishes, not genius-myth about the *man*, so they're milder than a typical inflation finding. But "the whole reason" overclaims — the Divisionist-stroke hinge (which the draft itself later argues is "why this picture is where Futurist painting actually begins") is an equal load-bearing reason. The two claims mildly contradict each other. **Fix:** soften one of them, e.g. "the horse is the engine of the painting" rather than "the whole reason the painting works," so the technical hinge in CtyDivisionism doesn't read as demoted. Low-effort, single-word-to-phrase change.

### [NICE] F3 — "the only language his hand really knew"
**Where:** CtyDivisionism para 2: "the Divisionist dab was still the only language his hand really knew." Slight romantic overstatement (he was a trained, versatile academic painter who *chose* Divisionism, not a man who *only* could do it). Minor; the surrounding paragraph is otherwise accurate that Divisionism was "where he came from." Optional softening to "the language his hand knew best."

### 2(c) First/only overclaim beyond Futurism scope

Clean. The "first major Futurist painting" claim is explicitly and repeatedly scoped:
> "the claim is true if you scope it carefully: this is Boccioni's first major Futurist painting... Not the first modern painting, not the first painting of motion in all of art, just the first big one of this movement."
This is a model of how to handle the fact pack's flagged "first" trap. No action. The hook, the const comment, and the manifesto-naming caveats are likewise all correctly scoped. The *Le Figaro* "not its first appearance" point and the manifesto-naming disambiguation are handled exactly as the fact pack required.

---

## SUMMARY TABLE

| ID | Sev | Lens | Issue | Fix |
|----|-----|------|-------|-----|
| F1 | **BLOCKER** | Fairness 2a | Futurism presented as politically innocent; manifesto's war/violence/"scorn for woman" omitted; Marinetti's Fascism never named | Name the manifesto's actual content in CtyManifestos body; add anti-anachronism note (Marinetti→1919 Fascism; Boccioni dead 1916) — suggested text above |
| C1 | FIX | Compreh. | Manifesto digested as "speed, machines, danger" only | Resolved by F1 fix |
| F2 | FIX | Inflation 2b | "the whole reason the painting works" overclaims vs the later "the hinge" argument | Soften to "the engine," reconcile with CtyDivisionism |
| C2 | NICE | Compreh. | trams/streetcars dropped | none — defensible |
| C3 | NICE | Compreh. | Turin venue/date compressed | optional restore |
| F3 | NICE | Inflation 2b | "the only language his hand really knew" | optional → "knew best" |

**Ship gate: HELD on F1.** Clear F1 (and the trivial F2) and re-run; the read is otherwise accurate, well-scoped, and fair.

---

### Sources (web-verified for this gate)
- [Britannica primary source — Marinetti, *Manifesto of Futurism* full text (Point 9: "war—the world's only hygiene... scorn for woman")](https://cdn.britannica.com/primary_source/eb/435828.html)
- [italianfuturism.org — The Founding and Manifesto of Futurism (full text)](https://www.italianfuturism.org/manifestos/foundingmanifesto/)
- [Wikipedia — Filippo Tommaso Marinetti (1919 Fascist Manifesto co-authorship; Mussolini backer; *Futurismo e Fascismo* 1924)](https://en.wikipedia.org/wiki/Filippo_Tommaso_Marinetti)
- [Britannica — Filippo Tommaso Marinetti (Futurism→Fascism)](https://www.britannica.com/biography/Filippo-Tommaso-Marinetti)
- [Artsy — What Is Futurism? (Futurist art and Fascism)](https://www.artsy.net/article/artsy-editorial-futurists-art-fuel-fascism)
