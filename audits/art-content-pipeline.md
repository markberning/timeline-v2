# Art content pipeline (era / movement / work / artist narratives)

The repeatable, gated process for producing an Art narrative — the analog of the
civ 5-persona audit (`.claude/skills/audit-narrative.md`) and the
`audits/war-content-pipeline.md` gate model, adapted to art's failure modes.

**Status: ACTIVE — run ten times (2026-05-23 Modern era + Cubism; 2026-05-24
Kahnweiler; Chair Caning; Horta + Violin and Jug; the final FOUR Cubism works —
Three Women, The Portuguese, Gris's Breakfast, Three Musicians — completing the
9-work Cubism chain; 2026-05-25 the Modern era "Lay of the land" prologue; the
Realism movement (6 ch); the Burial flagship WORK; the remaining EIGHT Realism works
(9/9); and the Impressionism movement (7 ch) — runs 7–10 all authored gates-first,
no relapse).** See the proof-run logs at the bottom. This is the
mandatory gate for every Art section — **do NOT author-and-ship; run all five critic
gates every time** (the Kahnweiler run re-learned this the hard way, and the
"Lay of the land" run re-learned it AGAIN — it was first hand-authored-and-shipped
before the user caught it; every gated run has held). **Still owed:** the
Demoiselles WORK reader (5 ch) was authored before the pipeline existed and has not
yet been through the gates.

## Governing principle
Same spine as War: **storytelling is the #1 goal; accuracy / zero-hallucination is
a hard floor it may never cross.** Two things are added because the subject is art:

- **Make the reader SEE it.** Art is visual. A chapter that narrates art-world
  events but never makes you *look at the painting* has failed at the one thing this
  mode exists to do. "Looking" is a first-class craft axis, not a nicety.
- **A wrong or blind image never ships** (born-verified doctrine, inherited from the
  civ link layer). Every figure URL is resolved against Wikimedia and load-checked at
  creation; the copyright tier is confirmed; a post-1930 / in-copyright work is NEVER
  inlined (degraded `RestrictedFigure` only). This is the art analog of the
  deterministic link gates.

### Art's signature hallucination trap: the beautiful anecdote
Art history is *full* of romantic legend repeated as fact — what Picasso "said" at
the Trocadéro, the exact words of Braque's "tow and turpentine" jibe, who first
uttered "cubes," the prices in a provenance trail, "the first-ever" claims. Much of
it is apocryphal, misattributed, or contested. **The fact-checker's primary job in
art is to separate documented fact from charming legend** — and where a story is
legend-but-load-bearing, the prose must FRAME it as such ("by his own later account",
"as the story goes"), never assert it flat.

## The gates (a section ships only when all pass)
Mirrors War's five, re-pointed at art, plus two art-specific structural gates:

1. **Fact-checker** (Sonnet, web-enabled) — independently verify every date,
   attribution (who made it, when), medium, dimensions, museum/current location,
   quote, "first/only" claim and provenance figure against authoritative sources.
   Flag apocryphal anecdotes asserted as fact. ✅ CONFIRMED / ❌ WRONG (+correct
   fact +source) / ⚠️ UNSUPPORTED / 🟡 LEGEND-FRAME-IT. MUST-FIX (❌, and any 🟡
   asserted flatly) vs SHOULD-FIX. ("Is it true — or just a good story told as true?")
   **SCOPE INCLUDES the WORK page's "Look closer" pointers (locked 2026-05-25).**
   Every `{label, where, detail}` is a verifiable claim about what is *literally on
   the canvas* — figure counts, poses, profile-vs-frontal, who/what each element is,
   left/right placement — checked against the **painting image itself** + sources,
   exactly like the prose; a wrong pointer is MUST-FIX. They are NOT exempt for being
   short captions. (Why this clause exists: the *Demoiselles* pointer "two left-hand
   faces … seen in profile" shipped wrong — there are *three* Iberian-style left faces
   and only the far-left is in profile — because annotations were authored but never
   run through this gate. The same critics that read the narrative read the pointers.)

   **EVERY SURFACE IS GATED — the checklist the ship-gate enforces (locked 2026-05-25,
   "make sure critical agents run for all sections").** A work/movement is not just its
   chapters. The fact-checker (and where relevant the other critics) must cover, for a
   WORK: ① the hook/lead, ② the chapters, ③ the **Look-closer pointers** (`{label,
   where, detail}` vs the image), ④ **stats** (medium, dimensions in ft/in **recomputed
   from the museum's official cm**, date, current location, acquisition), ⑤ the full
   **provenance** chain (every owner, order, dates, who-acquired-from-whom — *not*
   "direct from the artist" when it went through a dealer/collector — prices, "gift/
   never sold", accession), ⑥ figures/cast nameplates. For a MOVEMENT: the hook, the
   chapters, the **lineage chips** (parents/children), **parallels**, **canon** rows,
   artist nameplates, the **"Why this is a break" block** (required — clause below), and
   the **"The manifesto" block** (required where the movement has a founding document, or
   `absent` where the silence is itself the story — clause below). For an ERA: the
   throughline, the chapters, and the **"Why this is a break" block** (a manifesto block
   only where one genuinely belongs at era altitude — rare). **This enumerated list IS the
   ship-gate surface checklist — a section ships only when every surface on it has been
   through the gates; none is exempt for being short, structural, or "just furniture."**
   Provenance/stats were the second ungated surface caught (2026-05-25
   retro pass): wrong price + Degas title on *Demoiselles*, wrong gallery city, a
   missing-then-misframed Shchukin/La Roche chain, ⅛-inch dimension slips. None of these
   are "metadata" — they are claims, and claims get fact-checked.

   **REQUIRED for every era + movement: the "Why this is a break" block (`whatChanged`,
   locked 2026-05-25).** Each era and each movement must explicitly answer *why it is
   genuinely a new era/movement — what changed* — in pictures AND words: a born-verified
   **before** work (a representative piece of the predecessor tradition, often outside
   our corpus — e.g. the academic Salon painting a movement rejected), an **after** work
   of this era/movement, and a gated passage naming the concrete change (subjects,
   finish, scale, viewpoint — not "revolutionary"). The before image is born-verified
   like any figure (subject eyeballed); the passage is fact-checked like any prose (the
   *Realism* break passage's "loaded palette knife" overclaim was caught + softened at
   this gate). Renders as the side-by-side contrast (BEHAVIORS "The break"). Same
   requirement carried into the music pipeline.

   **REQUIRED for every movement: the "The manifesto" block (`manifesto`, locked
   2026-05-25; required-where-applicable, NOT optional — every movement gets the block
   OR an explicit `absent`, never silence-by-omission).** Manifestos are central to modern
   movements — often more famous than the paintings (Futurism, Dada, Surrealism, the
   Bauhaus). Where a movement has a founding document, give it its own block: the document
   title/author/date/venue, **2–3 born-verified excerpt lines quoted in its own words**
   (the actual text, verified against a reputable translation — a quote asserted from
   memory is MUST-FIX), a gated house-voice read of what it claimed and why it mattered,
   AND a **born-verified `sourceUrl`** to the actual text ("Read … ↗") — the link is a
   surface, checked like an event link: it must resolve AND be the right document (the
   arthistoryproject "Courbet manifesto" page was rejected — it is his *1861* open letter,
   not the 1855 manifesto). Where a movement *deliberately had none*, set `absent: true`
   and tell that story — **the silence is itself content** (Cubism: Picasso/Braque
   published nothing; the theory came from Gleizes & Metzinger's *Du Cubisme* (1912),
   Apollinaire, and the Section d'Or; the block still links *Du Cubisme* as the
   substitute). Renders on the movement page after "The break" (BEHAVIORS "The
   manifesto"); same conditional pattern; **NO jump-bar chip** (the SectionNav already
   fills a 360px phone at 6 chips and must not scroll — reached by scrolling, not a chip).
   Shipped first on Realism (Courbet's 1855 catalogue statement) + Cubism (absent).
   Carries into the music pipeline (the genre/movement's founding statement, e.g.
   Russolo's *The Art of Noises*).
2. **Storytelling & "looking" critic** (Sonnet) — judge as a story AND as art
   writing. Grade per chapter STRONG / GOOD / NEEDS WORK / REWRITE. Hook & stakes,
   pacing, voice — PLUS the art-specific axis: **does it make the reader see the
   work?** Flag chapters that are all art-world history and no actual looking; flag
   description that is vague ("striking", "powerful") instead of specific (what is
   literally on the canvas). ("Is it told well, and does it make me look?")

   **VOICE LOCKS (user, 2026-05-23):** (a) the house dry wit is **dialed up a
   notch** — smart, dry asides, never zany/snarky; when a wry fact is earned, give
   it the half-sentence of room to land (don't state the punchline and sprint on).
   (b) **A healthy dose of comparisons** — analogies that drive the point home (an
   x-ray, a blueprint, a scrapbook vs an autopsy, "the supermarket walks into the
   museum"); comparison is the #1 comprehension tool, same as the civ side's
   cross-civ comparisons. (c) **Never gray out substantive prose** — a closing
   paragraph that carries wit or a real point uses normal body text, NOT a muted/
   italic style; reserve muted/italic for genuinely minor asides or a single pull
   quote. (User flagged a gray closing paragraph as "out of place"; the critic
   independently found the best lines were being buried in muted/italic.)
3. **Comprehensiveness critic** (Sonnet, web-enabled) — independent must-cover
   checklist for the subject; COVERED / THIN / MISSING; MUST-ADD (essential, blocking)
   vs SHOULD-CONSIDER. **Selective is correct** — flag only genuinely essential gaps,
   never demand a survey. Also catches fact-pack blind spots. ("Is anything essential
   missing?")
4. **Newcomer / clarity critic** (Sonnet) — read cold as a zero-knowledge reader (a
   sharp 15-year-old who has never set foot in a museum). Flag every undefined art
   term/jargon (*papier collé*, *pointillism*, *Analytic vs Synthetic Cubism*,
   *Fauvism*, *readymade*, *the Salon*, *avant-garde*, *picture plane*), every artist
   introduced without a one-line who-they-are, every unexplained leap. CLEAR /
   NEEDS-GLOSS / LOST; MUST-FIX (comprehension breakers) vs SHOULD-FIX. ("Can a
   first-timer follow it?")
5. **Framing / fairness critic** (Sonnet, web-enabled) — art history's contested-
   memory failure modes, the analog of War's Lost Cause gate. Hunt ONLY for
   distortion: **the romantic-genius myth** (the lone male titan; downplayed
   collaborators, dealers, partners, sitters), **erasure of women** (Morisot,
   Höch, Krasner, et al. written out), **the colonial-appropriation question**
   (African / Iberian / Oceanic sources named honestly, their makers not
   anonymized — and the ethical cost neither sanitized nor turned into a lecture),
   and **Eurocentric overclaim** ("modern art begins here" stated as universal fact
   when the v1 scope is explicitly Western — flag overclaims; the *scope* is allowed,
   the *overclaim* is not). FAIR / TILTED / DISTORTED; MUST-FIX vs SHOULD-FIX.
   Reusable for any art tradition. ("Is it fair, and honest about whose story this is?")

### Two art-specific structural gates
6. **Image & rights gate** (mostly deterministic + an eyeball) — for EVERY figure:
   the URL resolves and load-checks (200 image/*); the copyright tier is correct
   (`/commons/` free worldwide · `/en/` US-PD pre-1931 only · post-1930 → MUST be
   `RestrictedFigure`, never inline); the **caption/Rights line matches the actual
   image** (right work, right artist, right date, right current museum); credit sits
   UNDER the image with current location; no item name overlaid on the artwork; the
   orientation rule holds (whole work, never crop-cut a painting — `audits/art-
   vertical.md §5b`). A figure that can't be verified is swapped for a verified
   on-topic substitute or rendered restricted — NEVER a blind/guessed URL. (This is
   the art analog of the war map-review gate: judged for *correctness*, not just hygiene.)
   **Card images show the WHOLE work, never cropped to a frame** — the shared
   `OrientationCard` (`src/components/mode/orientation-card.tsx`) renders it at its
   natural aspect, filling 3 sides (landscape on top, portrait on the left), text
   on the 4th, card height grows. The ONLY thing trimmed is a true scan border
   (mount / plate edge / paper margin / engraved caption): TRIM it (sharp `.trim()`
   or `.extract()`), eyeball it, and SELF-HOST the crop in `public/art/` (e.g.
   `salon-1787.jpg` from the Met's mounted engraving; `demoiselles.jpg` from the en
   scan's gray top border). A full in-article figure may keep a documentary print's
   caption; a card may not. Width caps: landscape/square ≤ ¾ screen, portrait image
   ≤ ½ screen; near-square (~1.0–1.15) stays on top. **Cards never truncate text**
   (no line-clamp / ellipsis / `short()` — the card grows). **The card BLURB is
   written to FIT** the space the image leaves (the image is fixed/whole; the blurb
   is the flexible element — a bit longer beside a tall portrait). Full spec in
   `BEHAVIORS.md` "Cards".
7. **Nesting / coherence gate** (the multi-level analog of War's continuity sweep +
   civ's Persona E) — because narratives exist at era → movement → work → artist,
   each pair must be (a) **consistent** — a date, attribution or claim must read the
   same at every altitude (the era's Cubism paragraph, the Cubism movement read, and
   the Demoiselles work read may not contradict each other), and (b) **differentiated**
   — a lower level goes DEEPER, it does not copy-paste the level above. Flag
   contradictions (MUST-FIX) and redundant duplication (SHOULD-FIX). Run whenever a
   new level is added to an already-authored branch.
8. **Deterministic voice gate** (`scripts/lint-art-voice.mjs`, NO LLM — the art analog
   of `lint-philosophy-voice.mjs`). Pure-regex scan of every reader-facing prose file
   (`era-narratives.tsx`, `movement-narratives.tsx`, `art-section-reader.tsx`,
   `art-content.ts`). It exists because the storytelling critic kept letting the same
   tics through — the build it catches is the one the 2026-06 hand-sweep had to undo.
   **Two tiers:**
   - **STRICT (`--strict`, ship-blocking, must be 0):** the LOCKED voice rules. The
     "the single most common thing said about this painting is also wrong, and getting
     it right unlocks the whole work" meta device (the user-flagged Flag failure) and
     its family (`unlocks the work`, `the most common thing/mistake`, `the key to the
     work`); app-navigation in prose (`scroll down`, `the artists section`); artifact
     self-reference (`this page / section / chapter`); chapter-signposting (`as we
     saw / will see`, `we'll come back`, `in the next section`, `earlier/later in this
     read`, `by the end of this read`); **em-dashes** (the true `—` / `&mdash;` only;
     the en-dash `–` in date ranges like `1863–1935` is correct and left alone — title/
     credit/year metadata fields are also exempt); gratuitous `**` bold; `the wise
     reader`-style condescension. A STRICT hit is (almost) always real — fix the prose,
     never loosen the rule to dodge it.
   - **SOFT (advisory, reported not blocking):** judgment-call tics that are often
     legitimate in art writing (`the whole point`, `here is the part`, `it is worth
     pausing/flagging`, `the honest answer is`, `what's striking is`, `the genius of`).
     The author + storytelling critic decide case by case; the report exists so a tic
     that has *run wild* across a build (e.g. `the whole point` 25×) gets noticed.
   Run `npm run lint:art-voice` (report) / `node scripts/lint-art-voice.mjs --strict`
   (gate). New scope is zero-tolerance on STRICT. When a real new tic slips a build,
   ADD it to the linter (STRICT if unambiguous, else SOFT) and sweep to 0 — same
   discipline as the philosophy voice linter (`feedback_philosophy_voice_linter`).

## AUTHOR VOICE CONTRACT (paste verbatim into EVERY art author brief)
Per `feedback_build_it_right_first_time` — the gates check, they do not clean up. The
author writes it right the first time by following this contract, which front-loads the
exact patterns gate #8 will reject:
- **Tell the story. Never narrate the artifact.** No "this page / section / chapter",
  no "in this read", no "treat this as a table of contents", no "as we saw / as we'll
  see / we'll come back / in the next section". The reader knows they're reading; don't
  describe the reading. Point at the displayed image as "here" / "shown here" if needed.
- **No meta-importance framing.** Never "the single most common thing said about this
  is wrong", "the most common mistake", "the key to the whole work", "what unlocks it".
  If a popular belief is wrong, just state the correction plainly.
- **No em-dashes (`—`) in prose.** Use parentheses for definitions, or commas/periods.
  (En-dashes in numeric date ranges are fine: `1863–1935`.)
- **No `**bold**`** in prose; use `<strong>` only where the existing reads do, sparingly.
- **Don't coach or condescend.** No "the wise/careful reader", "you might be tempted",
  "keep this in mind". Trust a sharp reader. Second person *to direct the eye* is fine
  in art ("look at the river", "your eye settles") — that is looking, not coaching.
- **Earn the wit; don't manufacture it.** Dry asides land when a real fact earns them
  (VOICE LOCKS above). Avoid the SOFT-list crutches ("the whole point", "here is the
  part", "it is worth pausing", "the honest answer is") — say the thing.
- **Comparisons are the #1 tool** (VOICE LOCK b). Reach for the analogy that makes a
  reader *see* it, not more art-world vocabulary.

## `kind` — every section is era / movement / work / artist
| | **era** | **movement** | **work** | **artist** |
|---|---|---|---|---|
| Altitude | the whole sweep, framed by a throughline | one movement's own story | one painting/object, deep | one life |
| Shape | argument across movements (not a movement checklist) | rise → peak → spread → afterlife | where it came from → making → reception → afterlife | formation → breakthroughs → late work → legacy |
| Looking | a few signature works, vividly | the movement's key works | THE work, exhaustively (it's the whole point) | the artist's pivotal works |
| Don't | duplicate the movement reads | duplicate the work reads | restate the movement | become a CV / date-list |

## The steps (coordinator-run, like War)
0. **Pick the section + `kind`.** (Art roster lives in `audits/art-vertical.md`.)
1. **Brief** — the section's job: throughline, cast, stakes, the shape (table), the
   must-include works/beats, the storytelling-first + "make them look" mandate.
2. **Fact pack** — assemble verifiable ground truth FIRST from real sources (museum
   collection pages, Wikipedia API, the standard literature): dates, attributions,
   media/dimensions, current locations, sourced quotes, provenance — each tied to a
   source, **anecdotes explicitly flagged documented-vs-legend.** The author writes
   ONLY from this. **Resolve the candidate images here too** (born-verified URLs +
   tier), so the author references confirmed keys, not wishes.
3. **Author agent (Opus)** — draft from the fact pack + brief in the house voice
   (`WRITING-RULES.md`); inline-define every art term; weight the *looking*; honour
   the rights subsystem (pre-1931 inline + Rights line, post-1930 restricted). Output:
   draft + a **Fact ledger** (every concrete claim → fact-pack item; `[VERIFY]` /
   `[LEGEND]` flags).
4. **The gates, in parallel** (1–5 as agents; 6–7 by the coordinator). Read critic
   output *critically* — gate = the coordinator's judgement, never the agent's
   say-so (`feedback_gate_pass_not_correct`).
5. **Revise** — author applies fixes. A comprehensiveness MUST-ADD or a framing fix
   that adds material is **NEW material → it goes through the fact pack + fact-checker
   FIRST**, then gets written in (the cross-gate rule: the story gate may never be
   satisfied by an invented fact). Loop until all gates are clean.
6. **Images** — born-verified figures per the image & rights gate (resolve via the
   MediaWiki API, load-check, confirm tier + caption-match). Method proven 2026-05-23.
   **For a MOVEMENT this gate ALSO covers the page furniture (locked 2026-05-25 — see
   BEHAVIORS.md "Art movement page"):** (a) the artist-row **headshots**
   (`MovementArtist.photo`) — a born-verified PD portrait/self-portrait per artist,
   gradient fallback when none exists; (b) the **full `canon`** list — every entry
   gets a born-verified **thumbnail of the work** (all canon works are pre-1931 →
   US-PD → inlinable) AND a **`wiki` link to the work's OWN article only** (NO
   artist-page fallback — a missing link beats a broad one). **Confirm every
   thumbnail subject BY EYE** — Commons keyword search returns wrong files
   (a Japanese print for Léger's *Woman in Blue*, a writer for *The Cardiff Team*, a
   Sisley for a Daubigny). If a work has no free image, **swap the row to an equally
   canonical work that does** (don't ship a gap). **Explicit works** (e.g. Courbet's
   *Origin of the World*) get `nsfw:true` → listed + linked but **no inline
   thumbnail** + an `explicit` tag (never dropped, never shown inline). (c) the
   **Influence-flow lineage chips** — every "Grew out of / Led to" node gets a
   born-verified `img` (a representative PD work for the concept), subject eyeballed;
   gradient fallback is an unfinished node, not a final state.
   **For a WORK, the "Look closer" pointers are PROSE, not crops (locked 2026-05-25):**
   each `annotation` is `{label, where, detail}` — `where` is a written location
   phrase ("Center foreground, low"). The page shows the **whole painting** (tap to
   zoom) and the reader finds each point themselves. **Do NOT author x/y/w/h crop or
   pin coordinates** — they are placed blind (we can't see where a box/dot lands), so
   they were unreliable by construction. Author `where` by *looking at the painting*
   and describing what's there; this is the one method that scales and can't be wrong
   by a few percent.
7. **Integrate** — author the prose as JSX `Narrative` components
   (`era-/movement-/<work>-narratives.tsx`), register in `ERA_NARRATIVES` /
   `MOVEMENT_NARRATIVES`, fill the `sections` chapter metadata, wire the
   `ReadStoryButton` under the hook, build (static export — `generateStaticParams`
   gates on the plain content registry, never the client narratives module).

## Roles
- **Coordinator (you):** brief, build+verify the fact pack, resolve images, spawn
  agents, read critics critically, reconcile, integrate. Runs gates 6–7 directly.
- **Author** — Opus. Storytelling-first, from the fact pack only.
- **Fact-checker / Comprehensiveness / Framing** — Sonnet, **web-enabled**.
- **Storytelling-&-looking / Newcomer-clarity** — Sonnet.

## Hard-won notes (inherited, apply here)
- Subagents must NOT git commit/push — consolidate in one coordinator commit
  (`feedback_subagent_commits`).
- Agents run in the MAIN worktree; point them at the phase-2 tree or move output over
  (`audits/war-content-pipeline.md` "Hard-won notes").
- Born-verified images: hammering the Wikimedia API 429s — pace requests. The URL
  path IS the copyright tier. A work with no serveable PD image (e.g. Picasso's *Still
  Life with Chair Caning*) gets a verified on-topic substitute or a `RestrictedFigure`.
- Gate-green ≠ correct (`feedback_gate_pass_not_correct`): sample what the gate can't
  see, especially the apocryphal-anecdote trap, which no deterministic check catches.
- **Dimensions are IMPERIAL (ft/in), never cm — display-side house rule.** The
  `dimensions` field and the `stats` "Dimensions" chip both use feet/inches only —
  e.g. `dimensions: '8 ft × 7 ft 8 in'`, chip `'8′ × 7′8″'` — matching the shipped
  Demoiselles/Kahnweiler works and the global "miles first" convention, NOT the
  museum's metric label. Convert cm → ft/in **at authoring time**, in the content
  fields AND in any size mentioned in the prose ("about a foot by a foot and a half,"
  not "29 × 37 cm"). Wikimedia image-URL filenames keep their cm (they are URLs — do
  not edit). Recurring slip: the first three works shipped with cm chips / cm-first
  strings and were converted corpus-wide 2026-05-24. See `feedback_art_dimensions_imperial`.

## Reusable agent briefs
Build the five critic briefs by adapting the War briefs in
`audits/war-content-pipeline.md` (§Reusable agent briefs) with the art re-points
above: fact-checker → add the documented-vs-legend axis; storytelling → add the
"does it make me look?" axis; clarity → art-jargon list; framing → genius-myth /
women's-erasure / appropriation / Eurocentric-overclaim instead of Lost Cause;
comprehensiveness → essential-works checklist.

## Proof run 1 — DONE (2026-05-23)
Ran all five gates (each a Sonnet agent, in parallel) over the Modern era (7 ch)
and Cubism movement (6 ch). The gates earned their keep on the first pass:
- **Fact-checker** caught real errors a non-gated draft shipped: the
  &ldquo;philosophical brothel&rdquo; was Apollinaire&rsquo;s epithet, not
  Picasso&rsquo;s private name (he called it *le bordel d'Avignon*); Kahnweiler was
  26 at his portrait, not 23; Picasso/Braque were born ~7 months apart, not &ldquo;a
  year&rdquo;; the Trocadéro epiphany and the Braque &ldquo;tow and turpentine&rdquo;
  quote are retrospective legend and were being asserted flat; the Iberian heads were
  Louvre-stolen, not cleanly &ldquo;bought&rdquo;; the Aug-2-1914 mobilisation
  collapsed three separate call-ups into one date; Van Gogh&rsquo;s &ldquo;sold
  nothing&rdquo; is a softened myth.
- **Framing** caught the African-art makers going unnamed (now: Fang/Kota named +
  a beat of friction on Picasso&rsquo;s primitivist reading), Morisot named-then-
  vanished, Sonia Delaunay & Hannah Höch missing, and a &ldquo;the whole of modern
  art&rdquo; Eurocentric overclaim (now &ldquo;Western&rdquo;).
- **Comprehensiveness** caught two essential MISSING items at era altitude:
  **Mondrian / De Stijl** and the **Bauhaus** (both now added in ch5 &ldquo;Order,
  not noise&rdquo;), plus the Cold-War/Greenberg mechanism behind New York&rsquo;s
  rise (added ch7).
- **Clarity** caught untranslated jargon (trompe-l&rsquo;œil, succès de scandale,
  avant-garde, automatism) and an actual typo (&ldquo;They called nothing&rdquo; →
  &ldquo;named nothing&rdquo;).
- **Storytelling/looking** drove the wit-up + comparisons + make-them-look revise.

All findings applied; both narratives revised + redeployed. This is the lesson the
pipeline existed to prove: **gate-then-ship, don&rsquo;t ship-then-hope.**

## Proof run 2 — DONE (2026-05-24) — Kahnweiler work (5 ch)
The 2nd authored work (*Portrait of Daniel-Henry Kahnweiler*, the section reader's
first multi-work build). **Lesson RE-LEARNED, not new:** the 5 chapters were first
authored straight from an Opus draft with **NO gates** — the user caught it
(&ldquo;did they use the agent critics?&rdquo;). The fix was to run the full
five-gate pass, and the gates again earned their keep:
- **Storytelling/looking** — chapters were ~44% the Demoiselles length and nearly
  image-free; doubled them and added two inline figures (the portrait itself atop
  the &ldquo;reading&rdquo; chapter; Picasso&rsquo;s *Girl with a Mandolin*, 1910, in
  the Analytic chapter).
- **Fact-checker** — contracts were Dec 1912, not 1907–10; &ldquo;Cubism&rdquo; was
  coined 1908 by Vauxcelles from Braque&rsquo;s show *in Kahnweiler&rsquo;s own
  gallery* (now an explicit irony in the prose).
- **Comprehensiveness** — added the watch-chain / moustache / tie-knot as findable
  clues, the ~3,000-work scale of the forced sales, Braque reportedly punching the
  auctioneer (framed as reported), and the WWII double-jeopardy (Kahnweiler targeted
  again as a Jew; Louise Leiris fronts the gallery 1941).
- **Framing** — the African-mask source of &ldquo;several angles at once&rdquo; is now
  credited plainly in the Analytic chapter.
- **Newcomer/clarity** — Cubism, the Salons, facets, &ldquo;enemy alien,&rdquo;
  &ldquo;sequestered,&rdquo; Hôtel Drouot, the gallery rename all glossed on first use.
- **Fact conflict resolved by the COORDINATOR, not agent say-so** (`feedback_gate_pass_not_correct`):
  the fact-checker claimed the portrait was NOT in the sequestered stock; the
  comprehensiveness critic said it was lot 84 in the 1921 Drouot sale. Verified against
  the **Art Institute API** (`api.artic.edu/api/v1/artworks/111060`): it WAS sequestered
  &amp; sold 1921 → Grünewald → Horter → Chapman → AIC 1948. Fact-checker was wrong;
  corrected the chapter + the `art-content.ts` provenance array, and dropped the hedge.

All findings applied; chapters rewritten via an Opus author pass; tsc + eslint clean;
all five section routes + the work page serve 200. **The standing rule this run nails
down: never author-and-ship an Art work — run the five gates every single time.**

## Proof run 3 — DONE (2026-05-24) — Still Life with Chair Caning work (5 ch)
The 3rd authored work (Picasso&rsquo;s first collage, 1912) — gated from the START,
not author-then-hope. Two firsts for the pipeline:
- **First SELF-HOSTED art image.** Chair Caning is US public domain (1912, pre-1931)
  but Wikimedia hosts NO copy (Commons can&rsquo;t until France-PD ~2044; no en fair-
  use file exists). Per the &ldquo;no serveable PD image&rdquo; note above, a faithful
  repro was sourced (WikiArt full-size, 1043×796), metadata-stripped, and committed to
  `public/art/chair-caning.jpg`; subject + tier confirmed by eye. Because a WORK page
  IS its canvas (CanvasViewer + Look-closer crops), the swap-to-substitute fallback
  was not an option — the user chose self-host over picking a different work. The four
  Look-closer crops (JOU / printed caning / rope frame / faceted still life) were
  rendered and eyeballed before the x/y/w/h were locked.
- **All five gates ran in parallel (Sonnet) and earned their keep again:**
  - **Fact-checker** — the &ldquo;sheet of printer paper&rdquo; size analogy was
    geometrically wrong (29×37 cm > A4) → &ldquo;no bigger than a placemat&rdquo;; the
    &ldquo;fragment of reality&rdquo; line is Met-catalogue prose, not &ldquo;one art
    historian&rdquo; → re-attributed; &ldquo;kept it on his own walls&rdquo; →
    &ldquo;in his personal collection&rdquo; (undocumented elaboration).
  - **Framing** + **Fact-checker** both caught the **&ldquo;three thousand years of
    illusion&rdquo;** overclaim in the hook + chapter title + the (pre-existing)
    movement &ldquo;Pasted paper&rdquo; blurb — the prose body correctly says ~500
    years / Western. Reconciled all to &ldquo;five centuries.&rdquo; Also hedged
    &ldquo;no serious painter had done before&rdquo; → &ldquo;almost no precedent in
    serious Western painting,&rdquo; and added the Braque-priority dispute (some hold
    Braque glued paper first → Picasso&rsquo;s crown is &ldquo;first collage in a
    *painting*&rdquo;).
  - **Storytelling/looking** — the chapter&rsquo;s thesis sentence was buried in
    `proseMutedStyle` (voice-lock C violation) → moved to body text; added the
    banknote/film-prop analogy for the stacked-illusion idea; moved the &ldquo;first&rdquo;
    asterisk earlier so CcBreak ends on the &ldquo;supermarket walks into the
    museum&rdquo; high. No chapter graded REWRITE; no thinness (the Kahnweiler failure
    mode did not recur).
  - **Newcomer/clarity** — the CcAfterlife descendants paragraph read LOST (Schwitters,
    Merz, Dada, Höch, Rauschenberg, Combines, Pop all fired with no who-they-are);
    every name got a one-clause tag; glossed *apéritif*, put English before *guéridon*.
  - **Comprehensiveness** — added the Analytic→Synthetic *mechanism* (gluing a flat
    ready-made shape taught them to build UP rather than break DOWN), not just the
    sequence.
- **Coordinator-run gates 6–7:** image/rights PASS (all figures pre-1931 PD-US or
  self-hosted PD-US; Braque&rsquo;s *Fruit Dish and Glass* added as the ch4 papier-collé
  figure, en-tier, load-checked); nesting/coherence PASS (movement card + &ldquo;Pasted
  paper&rdquo; section now consistent with the work; work goes deeper, no contradiction).
- tsc + eslint clean; clean static build green (shipped-page guard intact); work page +
  all five section routes render. Confirms the doctrine: **gate-from-the-start beats
  author-then-fix**, and a self-hosted PD image is a clean fit when Wikimedia has none.

## Proof run 4 — DONE (2026-05-24) — Horta + Violin and Jug (TWO works, one pass)
First **two-works-in-one-pass** run: Picasso&rsquo;s *Houses on the Hill, Horta de Ebro*
(1909, the Cubist-summer landscape) and Braque&rsquo;s *Violin and Jug* (1909–10, the
nail). Both images were already in `ART_IMG` (en-tier, pre-1931 PD-US); the Violin and
Jug en copy is low-res (378×600 — WikiArt only serves wrong/downsized files), so the
Look-closer crops were authored as a few **large** regions (≥45% width) that stay crisp
rather than pixelating — verified by rendering the crops before locking x/y/w/h.
- **Gate batching:** to respect the ~5-concurrent agent ceiling
  (`project_g12_fanout_lessons`), ran **5 critics, each covering BOTH works** on its
  axis, rather than 10 single-work agents. Worked well; each agent graded the two works
  separately.
- **Fact-checker** caught: Violin and Jug&rsquo;s exact dimensions are 116.8 × 73.2 cm
  (had rounded to 117 × 73); the La Roche gift to Basel was three staged donations
  (1952–63), not a single 1952 bequest; the Cézanne &ldquo;cylinder, sphere, cone&rdquo;
  line is a 1904 letter to Émile Bernard, not advice to Picasso (re-framed). Horta
  provenance (Rockefeller → MoMA 1979 → deaccessioned 2003 via Acquavella → Berggruen,
  Berlin) confirmed correct, including that this is *Houses on the Hill*, NOT *The
  Reservoir* (which MoMA kept).
- **Framing** caught two real tilts: Gertrude Stein was reduced to a passive prop
  (&ldquo;shown the photographs&rdquo;) — given agency as an early buyer/champion + her
  figure-card role changed to &ldquo;Patron, early champion&rdquo;; and unhedged
  superlatives (&ldquo;most abstract painting of its day&rdquo;) that the chapter&rsquo;s
  own Kandinsky &ldquo;Meanwhile&rdquo; card contradicted — hedged.
- **Storytelling** caught two thesis sentences buried in muted style (HoMaking,
  VjNail) — promoted to body text; flagged the cool-down chapters &ldquo;going dark on
  the canvas&rdquo; — added visual callbacks to Ho-Breakthrough/Afterlife and Vj-Afterlife.
- **Clarity** caught broken cross-ref placeholders left in the draft
  (`(Chapter, the Demoiselles)`, `(Portrait of Kahnweiler)`) — removed; &ldquo;facets&rdquo;
  undefined in the Horta read and &ldquo;avant-garde&rdquo; undefined in VjNail — glossed.
- **Comprehensiveness** added: the Horta campaign as a deliberate *series* (houses /
  reservoir / factory; Stein&rsquo;s &ldquo;first Cubist picture&rdquo;); the technical
  term *passage*; the painted-nail precedent in Braque&rsquo;s *Violin and Palette* (1909).
- Coordinator gates 6–7 PASS: all figures pre-1931 PD-US / Commons-PD / the self-hosted
  PD-US Chair Caning (reused as the VjNail collage payoff); title standardised to
  &ldquo;Violin and Jug&rdquo; across the app (the Kahnweiler chapter had called the same
  canvas &ldquo;Violin and Pitcher&rdquo;). tsc + eslint clean; build green; all 12 new
  routes render. **Lesson: two works in one pass is efficient if the critics are batched
  by axis (5 agents, both works each), not by work (10 agents).**

## Proof run 5 — DONE (2026-05-24) — the last FOUR, completing the Cubism chain (9/9)
Three Women (Picasso, 1908), The Portuguese (Braque, 1911), Breakfast (Gris, 1914),
Three Musicians (Picasso, 1921) — built in a single pass, taking &ldquo;Works of
Cubism&rdquo; to 9 of 9. Scope notes:
- **The chain had a non-work slot.** The works array listed &ldquo;The Cubist Years
  end&rdquo; (1914) — a timeline milestone, not a paintable canvas. It was replaced
  with a real 1911 work, Braque&rsquo;s **The Portuguese**, which also fills the
  Analytic-peak gap; the Gris slot was aligned to the actual image on hand (**Breakfast
  / Le Petit Déjeuner**, 1914, MoMA — aspect-matched to confirm it&rsquo;s the MoMA
  papier collé, not the Pompidou/1915 version). `CUBISM.works` + `CUBISM_RIBBON` updated.
- **Three self-hosted images** (Three Women, The Portuguese — US-PD; Gris — PD worldwide
  but the Commons copy was 440px, so a 833px repro is served locally). Three Musicians
  used the existing en-tier `picassoThreeMusicians`. All four crop-sets rendered and
  eyeballed before locking.
- **Dimensions IMPERIAL from the start** (the rule from the prior session held — no cm
  regressions; the fact-checker&rsquo;s &ldquo;use W×H&rdquo; note was declined: this app
  is consistently height×width).
- **Five critics, each covering all four works** (batched by axis, ~5 concurrent). They
  again earned their keep: removed an unverified &ldquo;0,40, a price&rdquo; reading of
  The Portuguese&rsquo;s stencilled numbers (sources say roman numerals); softened Gris&rsquo;s
  &ldquo;real floral wallpaper&rdquo; to &ldquo;printed decorative wallpaper&rdquo; (MoMA
  medium); hedged &ldquo;most orderly Cubism&rdquo; and &ldquo;most important decade&rdquo;
  overclaims; **credited Braque&rsquo;s parallel papier collé** so Picasso didn&rsquo;t
  solo-collect collage; added the missing Braque/L&rsquo;Estaque parallel to Three Women
  and the bridge-to-Analytic; glossed cold terms for newcomers (domino mask, Le Corbusier/
  Purism, passage, fugue, Constructivists/Bauhaus); and fixed the recurring &ldquo;cool-down
  chapters go dark on the canvas&rdquo; defect with visual callbacks in the ch4/ch5 of each.
  The TwPrimitivism (African-source) chapter was singled out by the framing critic as the
  house standard for handling non-European sources.
- Coordinator gates 6–7 PASS; tsc + eslint clean; build green; all 20 new routes render.
  **The Cubism movement is now a complete 9-work survey, 1907–1921, across Picasso, Braque
  and Gris.**

## Proof run 6 — DONE (2026-05-25) — Modern era "Lay of the land" prologue (kind: ERA)
The Modern era read gained an opening scene-setter chapter (`/art/mod/s/land`,
"The world before the revolt") — the runway BEFORE the seven movement chapters:
the academic/Salon system c.1850 and the modern forces about to crack it. **Lesson
RE-LEARNED a second time:** the chapter was first **hand-authored-and-shipped with
NO gates** (turned the dead dossier "Lay of the land" card into a real article +
gave it a card image). The user caught it — "use the pipeline that is already setup
… as we do for all articles" — and the full run was redone properly. The gates
earned their keep again:
- **Fact-checker** (web) — 0 flat errors, but corrected **Cabanel's professorship
  to 1864** (the hand-draft said 1863 "the same year"; he was *elected to the
  Académie* in 1863 but *appointed professor at the École* in 1864), and required
  the Martini engraving credit to name **"after Johann Heinrich Ramberg"** (the
  designer behind the engraver). Confirmed the Salon-venue chronology (Louvre to
  1848 → Palais de l'Industrie from 1857), so the hand-draft's "iron-and-glass hall
  *by the 1850s*" was a real anachronism the pipeline removed.
- **Framing** — TILTED → fixed: the training paragraph described "a student… he"
  without noting the official ladder was **closed to women** (the École admitted no
  women until **1897**; they trained in private ateliers — the Académie Julian, from
  1868, gave them the live model the École withheld). New material → fact-checked by
  the coordinator before it was written in (the cross-gate rule).
- **Storytelling/looking** — GOOD; drove a second beat of *looking* at the Cabanel
  (the poreless, never-alive skin) so the "wedding cake" verdict is earned, and
  un-hedged the Meanwhile card to end on the stronger line.
- **Clarity** — glossed Félibien ("royal court historian") and dropped the bare
  "prefect" for Haussmann ("chief city-planner").
- **Comprehensiveness** — no MUST-ADD at era altitude; folded in naming the **Salon
  jury** as the gatekeeping mechanism.
- **Nesting gate 7** — the chapter sets the STAGE Chapter 1 ("The Salon and its
  enemies") then acts on: Courbet's tent and Manet's scandals stay in Ch1; this
  chapter ends on a one-line hand-off to the tent. No contradictions across the two.
- Coordinator gates 6–7 PASS (both figures Commons PD-worldwide, load-checked,
  captions/credits/locations correct); tsc + eslint clean; route renders. Pipeline
  artifacts in `audits/art-pipeline/` (fact pack, draft, the five gate reports).

## Proof run 7 — DONE (2026-05-25) — Realism movement (kind: MOVEMENT, 6 ch)
The Modern era's **first** movement read (`/art/mod/real`, 1848–1870, six chapters:
Why Realism · Courbet's gauntlet · The Pavilion + the Manifesto · Millet's peasants ·
Daumier's city · Bonheur + the reach). **Authored gates-first this time** (no
hand-author-and-ship relapse): fact pack → Opus draft (Fact ledger) → 5 Sonnet
critic gates in parallel → web-verify new facts → Opus revise. The gates again
earned their keep:
- **Fact-checker** (web) — the draft's "only **black-and-white** reproductions
  survive" of Courbet's *The Stone Breakers* was a real overclaim (color
  reproductions exist; the original was lost in the 1945 bombing of Dresden, museum
  status **"missing"** / presumed destroyed, the transit-to-Königstein story one
  contested account). Reframed to "survives only in reproductions"; the figure is
  shown **desaturated** as an honest record of the lost work. Verified Courbet's
  downfall numbers (Vendôme Column; 6 months + 500-franc fine; 1873 reconstruction
  bill ~**323,000 francs**; exile; died 1877), Gargantua dated **1831**, the Daumier
  6-month jail term framed as the standard account not carved fact.
- **Framing** — FAIR; Rosa Bonheur given real agency + her lifelong companion
  **Nathalie Micas** (replacing a bare "without a husband" solitude); Millet's
  politics named honestly; the academy kept a coherent system, not a cartoon villain;
  "first modern movement" held Western-scoped.
- **Comprehensiveness** — MUST-ADDs folded in: Millet's *The Sower* (1850, opened the
  same Salon as Courbet's *Burial*), a photography/daguerreotype beat, and Courbet's
  Commune-era ruin.
- **Storytelling/looking** + **Clarity** — STRONG; one looking beat added on *The
  Angelus* (the sky filling two-thirds, pressing on the two small bodies); glosses for
  bourgeois, Fauves, Barbizon School, the Salon des Refusés.
- **Image gate 6** — 9 figures, all born-verified by eye + load-checked: Burial,
  Gleaners, Angelus, Sower (Commons GAP), Third-Class Carriage + Horse Fair (Commons
  MET), the Painter's Studio (existing Commons). **Self-hosted two**: Gargantua
  (trimmed off its cream paper margin + engraved title strip) and the Stone Breakers
  (desaturated record of the destroyed original). All artists PD worldwide.
- **Nesting gate 7** — defers to the era read tersely at every overlap (Stone
  Breakers/Burial "the era overview introduces both", Cabanel "as the era overview
  shows", the Pavilion tent, Impressionism "one chapter along") and spends the depth
  on what the era only gestured at (full cast, more works, the politics, the
  afterlife). No contradictions.
- tsc clean; all routes render (movement page + 6 chapters, auto-generated from
  `ART_MOVEMENT_CONTENT`); era card → `/art/mod/real` now live. Pipeline artifacts in
  `audits/art-pipeline/realism-*`.

## Proof run 8 — DONE (2026-05-25) — A Burial at Ornans (kind: WORK, flagship)
The FIRST Realism **work** deep read (`/art/mod/real/burial`, 5 chapters: The town and
the grave · Forty neighbors at the scale of kings · The bomb in the Salon · The burial
of Romanticism · Afterlife). Gates-first via subagents (fact pack → Opus author → 5
Sonnet critics in parallel → Opus revise → integrate). Gate yield:
- **Fact-check** — clean (no invented quotes/names); hedged the "burial of Romanticism"
  line (no dated source — "later wrote / is widely recorded as having said"); "roughly
  fifty figures" → "more than forty"; confirmed dims (315×668cm = 10ft4×21ft11), the
  RF 325 / Juliette-Courbet-1881 gift, Louvre→Orsay 1986, Salon 1850–51.
- **Comprehensiveness + Framing** (MUST-ADDs, all verified) — the **Stone Breakers**
  Salon-twin pairing; the two **1793 Revolutionary-dress veterans** in the crowd (the
  visible hook for the socialist reading); **Champfleury** naming "Realism" in defense
  ("not a trace of socialism in A Burial at Ornans") + the Brasserie Andler circle +
  **Proudhon** (kills the lone-genius framing); the **Dutch civic-guard group-portrait**
  formal source; named sitters (Régis, Juliette/Zoé/Zélie Courbet).
- **Storytelling + Clarity** — surfaced the 10-ft scale into ch1; killed a numbered
  "offense one/two/three" scaffold; added looking beats (the grave as a black void, the
  cliff's chalky compression); glossed "the academy", "history painting" (= myth/
  scripture, not the news), "the movement read".
- **Gate 6 (image/annotations)** — hero = `ART_IMG.courbetBurial` (PD worldwide); 6
  "Look closer" crops placed + eyeballed against the real panorama via a %-grid overlay
  (grave/gravedigger/skull, crucifix, red beadles, 1793 veterans, women+dog, cliff).
- Integrated: `BURIAL` ArtWorkContent + `NARRATIVES.burial` (5 JSX chapters) +
  provenance + figures; registered in `ART_WORK_CONTENT` so the movement cord links it.
  Work routes auto-generate. tsc clean; build generates all chapter pages. Artifacts in
  `audits/art-pipeline/burial-*`. (Work pages also gained the SectionNav jump-bar +
  always-visible sections — see BEHAVIORS.md "Art WORK page".)

## Retro fact-check — Look-closer pointers (2026-05-25)
After the gate-1 scope was extended to cover the "Look closer" pointers, the 10 works
authored before that (Demoiselles + 8 Cubism + Burial) were run back through the
fact-check critic (Sonnet, web-enabled, **looking at the actual painting**), every flag
re-confirmed against the image by the coordinator before any edit. Findings — the gate
was worth running:
- **Demoiselles** ❌ "two left-hand faces … in profile" → three Iberian-style left
  faces, only the far-left in profile. (User-caught; the trigger for this whole pass.)
- **Three Musicians** ❌×2 — pointers had the **MoMA** layout on the **Philadelphia**
  canvas: "white-and-bearded at left" → Harlequin (diamonds) at left / Pierrot (white)
  centre; "guitar at left" → the left Harlequin plays a **violin**.
- **Violin and Jug** ❌ jug "up to the left" → it sits **above the violin** (upper-centre).
- **Horta** ⚠️ green "the only curve … lets it stay soft" → it's faceted like everything
  else, and the cool gray-blue sky isn't "baked earth" either → softened to "almost the
  only green."
- **Gris, Breakfast** ⚠️ faux-bois confined to "the table and its turned legs" → the
  printed wood-grain paper also runs behind as paneling (two kinds); dropped "turned."
- **Chair Caning** ⚠️ "a scallop shell" → contested (shell vs napkin's frilled edge) →
  hedged.
- **The Portuguese** ⚠️ guitar "the firmest object" (contradicted its own letters
  pointer) → "firmest *representational* object."
- **Burial** ⚠️×2 `where` precision — beadles "just left of centre" → "left of centre,
  with the clergy"; dog "lower right" → "centre-right foreground."
- **Kahnweiler, Three Women** ✅ clean.
**Lesson:** short captions are NOT low-risk — visual claims (counts, left/right,
profile-vs-frontal, which-version-of-a-work) are exactly where errors hide. A separate
gap surfaced and is owed: **provenance/stats blocks were also authored ungated** (the
fact-checker flagged Three Women's Shchukin entry — bought from the Steins, not direct
from Picasso). Next retro pass: run gate-1 over every work's `provenance` + `stats`.

## Proof run 9 — DONE (2026-05-25) — the remaining EIGHT Realism works (completes 9/9)
The eight non-Burial works of the Realism movement, built in **two batches of four**
(proof-run-5 model: one Opus author per work → 5 Sonnet critics batched by axis, each
covering all four works → coordinator reconcile + integrate → image/look-closer verify
→ build/deploy). **Works of Realism is now 9 of 9** (Gargantua · Stone Breakers · Burial
· Sower · Studio · Horse Fair · Gleaners · Angelus · Third-Class Carriage). BURIAL's chain
index corrected 1→3 to match the chronological works array.
- **Batch A** (Stone Breakers, The Painter's Studio, The Sower, The Gleaners). Gate
  yield: Studio Ch1 "the jury refused one" was WRONG — the 1855 Exposition rejected his
  **two** largest canvases (the Studio AND the Burial), which then anchored the Pavilion;
  Stone Breakers hammer **raised at the top of its swing**, not coming down (verified
  against the image); Sower's leading-leg made **viewer-relative** (the L/R call is
  genuinely ambiguous in the near-silhouette — coordinator re-checked both the gate's and
  the draft's claim and chose the unimpeachable description); Gleaners had three raw
  `[VERIFY]` author notes left in running prose (would have printed) → resolved to hedged
  prose, and the provenance corrected to **Pommery's 1889 purchase / 1891 bequest** (the
  author caught the brief's wrong "1890 gift"); Bruyas reframed collaborator-in-ideas not
  "wallet"; the crucified-mannequin (death of academic art) added to the Studio; the
  unrecorded identities of the sitters acknowledged.
- **Batch B** (The Angelus, Gargantua, The Third-Class Carriage, The Horse Fair). Gate
  yield: Angelus — Chauchard buyback price flipped to **800,000 fr** (EN-wiki's 750k is the
  outlier), the church spire de-overclaimed ("slightly right of centre, behind the
  figures"), and a FALSE "Appleton was of Irish descent" deleted (invented to justify the
  famine motive); Gargantua — the **"published in La Caricature"** myth corrected (sold as
  a separate sheet at Aubert's per Childs, with the persisting journal-attribution noted),
  Philipon's own prosecution added, "proofs" glossed; Carriage — fact-CLEAN, the central
  old woman's **pale head-wrap** added to the looking chapter (its brightest passage),
  Cassatt/Havemeyer identified; Horse Fair — the dramatic rear is the **dark horse
  centre-left** not the led greys (verified against the image), the blue-smock mounted
  handler promoted to a real beat, the self-portrait-among-the-handlers tradition added as
  unverified, and "most famous woman painter" scoped to "most internationally celebrated."
  The framing critic called Horse Fair the best treatment of a woman artist across both
  batches (full agency: out-earned the men, her own château, trousers as a work permit,
  Micas/Klumpke stated plainly).
- **Integration notes (reusable):** scratch drafts live as `.tsx.txt`/`.ts.txt` in
  `audits/art-pipeline/realism-works/` so `next build`'s typecheck doesn't compile the
  standalone files (they reference `ArtWorkContent`/helpers that only exist once spliced
  in — a `.ts`/`.tsx` extension there FAILS the build; rename to `.txt`). New prose must
  use **HTML entities** (`&ldquo;`/`&rdquo;`/`&rsquo;`) in JSX text, never raw `"`/`'`
  (165 raw entities in Batch A were escaped positionally via eslint's own coordinates →
  every flagged char is in JSX text by definition, so it's safe; Batch B authors were
  told up front and shipped 0). All 8 hero images were already born-verified for the
  movement page; the look-closer pointers were verified against the painting at gate-1 and
  the two visual MUST-FIX flags re-confirmed by the coordinator against the image.

## Proof run 10 — DONE (2026-05-25) — Impressionism movement (kind: MOVEMENT, 7 ch)
The Modern era's **second** movement read (`/art/mod/imp`, 1860s–1886, seven chapters:
the Salon wall + Manet · the technique · 1874 + the name · the eight shows + Durand-Ruel ·
the women · Degas the indoor eye · the last show + the Caillebotte bequest). Authored
gates-first end-to-end via subagents (fact pack → Opus author → 5 Sonnet critics batched
by axis → coordinator reconcile → Opus revise → integrate). Both required movement blocks
shipped: the **break** (`whatChanged`) and the **manifesto** (`absent`).
- **Fact-check** — clean on every legend trap (Leroy *popularized* the name, didn't coin
  it; the paint-tube "made Impressionism" line disarmed + sourced to Jean Renoir's 1962
  memoir; Chevreul = Neo-Impressionists not the Impressionists; Manet NEVER exhibited with
  them; Degas never painted outdoors; "poor failures" corrected). MUST-FIX yield: Eva
  Gonzalès **died at 34 not 33**; and **both Duranty quotes converted to paraphrase** — the
  wording could not be confirmed letter-for-letter against the Moffett 1986 translation, so
  per born-verified doctrine an unverifiable quote ships as paraphrase, never as quotation.
- **Storytelling/looking** — no chapter below GOOD; MUST-FIX looking beats added: *Olympia*
  (the cat, the ribbon, the maid's flowers), *L'Absinthe* (figures shoved to the upper
  right, the zig-zag of empty tables, the one milky-green glass), and Ch7 led with Monet at
  Giverny instead of a poverty roll-call; the Degas faction-fight dramatized instead of a
  year-list; the tube myth-bust demoted so it stops interrupting the La Grenouillère climax.
- **Comprehensiveness** — MUST-ADDs folded in (web-verified before writing, the cross-gate
  rule): the **Caillebotte bequest** epilogue (d. 21 Feb 1894; 68 works; Renoir executor;
  state refused; 38 accepted; Musée du Luxembourg, Feb 1897 — the first Impressionists in a
  public French museum, 23 yrs late) and **Caillebotte as a painter** (Floor Planers, Paris
  Street); plus Turner/Constable + Durand-Ruel in London, Pissarro mentoring Cézanne at
  Pontoise, and Sisley individuated as the one who genuinely didn't win.
- **Framing** — FAIR; fixes applied: the women's constraint kept a **wall of access** (no
  "privilege" reframe; Cassatt *chose to accept* Degas's invitation, not "pulled in"); the
  Salon made a coherent system, not a cartoon villain; **Utamaro** named in the Japonisme
  beat and the borrowing called borrowing; the closing "taught the entire Western world"
  scoped to Western art, and the victory reframed as commercial (Durand-Ruel + American
  buyers + the network), not lone heroes outlasting a jury.
- **Clarity** — newcomer gaps closed: Sisley given a who-they-are on first mention,
  Durand-Ruel named at the 1882 mention, *vitrine* + *L'Absinthe* glossed, the dev-speak
  "one level up" replaced with "the Realism chapter", and the stray `[VERIFY-WORDING]` tag
  stripped (it would have printed).
- **The break** — chose **Bouguereau's *The Birth of Venus* (1879)** as the academic
  "before" deliberately NOT Cabanel's (the Realism read owns Cabanel's) — Impressionism's
  break is finish + light + the fleeting moment, distinct from Realism's subject/scale
  break; coordinator born-verified the Bouguereau image (md5 hash path computed + load-
  checked) since the image agent had defaulted back to Cabanel.
- **The manifesto** — `absent: true`: named by a hostile critic, bound by exclusion not a
  creed; Duranty's *La Nouvelle Peinture* (1876) the nearest substitute the painters never
  signed; born-verified `sourceUrl` to the Dictionary of Art Historians Duranty page (the
  Met essay + Gallica original both failed the fetch test → not linked).
- **Images** — 36 new born-verified Wikimedia URLs (works rail, 10 headshots, 27-work
  canon, break-before, lineage, parallels); all load-checked 200, subjects confirmed; the
  resolver returned **3 wrong hash dirs** (manetBar, monetBoulevardCapucines, degasPhoto)
  which the coordinator recomputed from the real filenames (a reminder that an agent's
  "confirmed 200" still needs the coordinator's own load-check). Degas's *The Tub* had no
  free image → dropped from canon rather than shipped blind.
- **Integration** — `IMPRESSIONISM` ArtMovementContent + 7 JSX chapters (scratch `.tsx.txt`,
  HTML entities throughout, spliced via a Node `replaceOnce` script) registered in
  `ART_MOVEMENT_CONTENT` + `MOVEMENT_NARRATIVES` under `imp`. tsc + eslint clean; static
  build green (shipped-page guard: all 103 civs); deployed; movement page + 7 sections live
  and verified on prod. Artifacts in `audits/art-pipeline/impressionism-*`.

## Proof run 11 — DONE (2026-06-25) — the Neoclassical & Romantic era (ERA + 2 MOVEMENTS, 19 ch)
The whole **NRO era** (`nro`, c.1750–1850) in one gated pass: the era read (5 ch, the
Reason-vs-Feeling *argument*) + Neoclassicism (5 ch) + Romanticism (9 ch). Authored from
three born-verified fact packs into a committed skeleton (empty `sections[]`), then run
end-to-end: 5 Sonnet critics in parallel (batched by axis, each covering all three reads) →
coordinator reconcile → new-material fact-pack → 3 parallel Opus revisers (one per read) →
mechanical splice → build → ship. Gate yield earned its keep again:
- **Fact-check** (web) — clean drafts; ONE must-fix (Delacroix's *Sardanapalus* called
  "thirteen feet wide" — that's its height; now "thirteen feet tall and over sixteen feet
  wide," agreeing with its own credit) + minor dim roundings + a Baudelaire quote precision.
  Confirmed the legends are framed right (the Winckelmann "quiet grandeur" trap, the Turner
  mast story, the Goya Black Paintings untitled/unexhibited, Liberty = July 1830 not 1789).
- **Framing** — the era's signature axis, the women: Angelica Kauffman moved out of a sidebar
  into the body (RA founder, 1 of 2 women among 34); **Élisabeth Vigée Le Brun** added (new
  material, fact-checked first); the **Black man at the apex of Géricault's *Raft*** named
  (uncontested visual fact, the era's most significant compositional choice); Orientalism in
  Ingres's *Grande Odalisque* named plainly.
- **Comprehensiveness** — two MUST-ADDs, both fact-checked before writing in: **Gros** (the
  David-to-Romanticism bridge — grand civic format filled with Romantic horror) into
  Neoclassicism; **Fuseli + Blake** (the dream/nightmare strand the read promised but never
  showed) as a new **"Visionaries"** chapter → Romanticism grew from 8 to 9 sections.
- **Storytelling** — the era "Feeling" chapter was re-listing painters at movement altitude
  and duplicating the opener → rewritten to describe what Romanticism *looks like on the wall*
  (dissolving edges, visible stroke, diagonal composition, color over line) anchored on a
  single fresh image; "Reason" strengthened from David-biography to *what order looks like*;
  a muted summary paragraph promoted to body; a recycled Hay Wain figure cut.
- **Clarity** — glossed the comprehension-breakers: *frieze*, *the academy*, *tapestry
  cartoons* (the false cognate — preparatory weaver designs, not comics), *Sturm und Drang*.
- **Image gate 6 (coordinator)** — 36 skeleton URLs + 6 additions ALL verified via the
  Commons API (existence + correct md5-hash dir + PD-worldwide tier), sidestepping the
  upload-host's 429 storm; the curl load-check is unreliable on this network (rate-limited),
  the API is not. Also fixed the era + Modern artist strips (real portraits, not gradients).
- **Voice gate 8** — `lint-art-voice --strict` = 0 across all three reads, before AND after
  the splice (the AUTHOR VOICE CONTRACT was pasted into every reviser brief).
- **Integration** — palette-const collisions (`STONE/STEEL/...`/`PD_WORLD`) between the era
  draft and the shared reader files resolved by an `NRO_*` rename + a once-declared preamble;
  the 5 era components `Nro`-prefixed (LandNarrative collided with `mod`'s). tsc + eslint
  clean; static build green (shipped-page guard: all 109 civs); all 19 routes generate;
  pushed (auto-deploy from `main`). Artifacts in `audits/art-pipeline/nro-*`.
