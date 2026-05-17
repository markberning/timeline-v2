# Writing Rules

Rules for drafting v2 narratives. Apply these to every new TL and every rewrite pass.

**Who writes:** Claude drafts every narrative. The user never hand-writes narratives — they review and direct. Before writing, review the v1 reference events for coverage gaps and propose additions; some v1 TLs never got a narrative-driven overhaul and may be thin.

For mesopotamia-specific chapter fixes and the contested-claims audit, see [audits/mesopotamia-rewrite-fixes.md](audits/mesopotamia-rewrite-fixes.md).

---

## Core principle: Write for completeness, not for the existing event list

The narrative is the primary product. The TL event data is a supporting layer that should be updated to match the narrative, not the other way around.

- **Do not limit the narrative to events that currently exist in the JSON.** If the history calls for covering something, cover it. New events can be added afterward.
- **Do not skip important history because there's no event for it.** The narrative should be comprehensive and self-contained.
- **After writing, reconcile:** scan the narrative for events, people, places, and milestones that should exist in the TL data but don't, and add them.

Existing events are a starting point and a checklist, not a ceiling.

---

## Rule: Language-family introductions need explicit distance

When introducing a new people, "Semitic-speaking" / "Indo-European-speaking" / "Hurrian-speaking" is not enough on its own. The reader can't derive "these are a genuinely distinct people" from a parenthetical about language family.

**Must include:**
1. That the language is a **different family** from what came before (not a dialect)
2. A comparison the reader already knows ("as different as Chinese and English")
3. Where the people actually came from geographically
4. An acknowledgment that they may have looked culturally similar while being linguistically distinct

**Apply to:** every "new people arrives" moment. Every time a new people enters, the first sentence must place them in their language family AND compare that family to one the reader has already met in the story.

---

## Rule: Don't tell the reader the result of a process without telling them the process

When two cultures merge, blend, or absorb each other, explain *how* it happened, not just that it happened. "They lived side by side and spoke each other's languages" is a result, not a mechanism.

Applies broadly: language shifts, religious conversions, technological adoption, cultural assimilation, the rise of new ruling classes from migrant populations. Whenever the chapter says "X became Y over time," ask: did I describe the *mechanism* or only the *outcome*?

---

## Rule: "Always been there" / "had always" are red flags

These phrases are a sign the writer hand-waved over scene-setting. Replace with concrete answers: where specifically? since when, in terms of the written record? what made them a distinct people from neighbors? what was their relationship to the previous ethnic group in the area?

If the honest answer is "we don't actually know exactly," say so explicitly — better than vague gestures pretending to be knowledge.

---

## Rule: Chapter 1 forward-references must be inline-defined just like everything else

Chapter 1 does scene-setting for the entire TL, which means it naturally name-drops concepts that the rest of the book will explain. Every name-drop needs at least a one-clause definition, plus a forward reference like "Chapter X" so the reader knows there's more coming.

---

## Rule: Don't describe an architectural choice without explaining the motivation

Whenever the chapter says "they built X with feature Y," the reader needs to know *why* feature Y. Architecture in the ancient world was almost always purposeful — practical, theological, symbolic, usually all three. Same rule applies to walls, gates, columns, orientation, decoration, materials, dimensions.

---

## Rule: Don't overcorrect after fixing a gap

When a gap is flagged, the temptation is to repeat the fix everywhere it could possibly apply. This is over-explaining. Once a point is established clearly in one place (usually Chapter 1's scene-setting), subsequent chapters can reference it briefly ("the Amorites followed the same pattern as the Akkadians") rather than re-explaining. Belaboring is bad writing.

Fix gaps *thoroughly in one place* and trust that one place.

---

## Rule: Include pronunciations for unfamiliar names

First time an unfamiliar proper noun appears, include a phonetic pronunciation in parens.

**When:** unfamiliar place names, personal names, people-group names, technical terms where spelling doesn't match sound.

**When NOT to:** already-familiar names (Mesopotamia, Babylon, Egypt, Tigris, Sargon, Cyrus); repeat occurrences within a chapter.

**Format:** plain English, stressed syllable capitalized. `Eridu (pronounced "air-ee-doo")`, `Inanna (pronounced "ih-NAH-nah")`. Not IPA.

---

## Rule: Forward references build anticipation and reassurance

Brief forward references like "(Chapter X)" reassure the reader that gaps are intentional and will be filled, build anticipation, and let the writer name-drop without over-explaining. Backward references work the same way for soft re-grounding.

Do this freely — both directions pull the reader through the structure of the book.

---

## Rule: Never use vague placeholder phrases for things the reader needs to picture

"Form of worship," "religious tradition," "cultural practice," "way of life," "system of governance," "method of warfare" — placeholder phrases that tell the reader something exists without telling them what it looks like.

**Audit:** scan for `form of X`, `way of X`, `system of X`, `method of X`, `tradition of X`, `the [adjective] life of [people]`. For each, ask: can the reader picture what this looks like? If not, replace with specific description.

---

## Rule: Never present contested scholarly claims as established fact (CRITICAL)

The biggest accuracy risk in AI-written history is not pure fabrication — it's confident statement of claims that are contested in the scholarly literature. Confident presentation of the most colorful version of a debated claim is common and hard to catch.

**Rules to apply:**
1. When a claim is contested, say so explicitly. Phrases: "modern scholars are divided," "the traditional view holds that... but recent scholarship has argued," "this is debated," "what the texts unambiguously establish is X; the exact details of Y are uncertain."
2. When presenting the colorful version of a claim, ask: is this the established consensus, or am I picking the most vivid version of a debate?
3. When stating specific dates, numbers, or attributions, remember these are higher-risk than structural facts.
4. When projecting later well-documented practices backward in time, flag the projection.
5. **The reader can handle uncertainty.** Saying "this is debated" is honesty, and it makes the rest of the prose more trustworthy.

**Pattern to watch for:** any sentence that vividly describes a specific ancient practice with colorful detail. Vividness is often a sign of picking the most memorable version of a contested debate.

---

## Rule: Don't name-drop a person/place who never appears again

Forward references are good *when there's a payoff*. If a name is dropped for a single sentence and never appears elsewhere, it's a dead-end mention.

**Fix:** cut dead-end names if not load-bearing, OR promote the name to a real character elsewhere. Doesn't apply to categories (Hurrians, Phoenicians) or to people who are namechecked because readers need to know they existed — only to specific named individuals name-dropped without context.

---

## Rule: Tell the reader when a claim ISN'T a modern projection

When the text describes something that sounds like a modern reinterpretation (gender-diverse priesthood, sophisticated propaganda, rule of law), readers naturally suspect projection. When that suspicion would be wrong, tell the reader explicitly.

**Patterns:** "This is documented in actual cuneiform sources — it's not a modern projection." / "This isn't speculation — the tablet explicitly says X." / "This claim sounds modern, but it's directly attested in [source]."

Don't add to every claim, only to the ones where the reader might reasonably suspect projection. Overusing dilutes the signal.

---

## Rule: Modern callouts are okay when they actually illuminate something

Brief modern references are appropriate when they give the reader a real handle on the ancient material, not when they're decoration or jokes.

**Test:** does the modern reference give a useful mental hook, or is it a cute aside? Hook → use it. Decoration → skip it.

**Good:** Ishtar → 1987 Warren Beatty movie; Nebuchadnezzar → Morpheus's ship in *The Matrix*; 60-minute hour and 360-degree circle still on every clock; 12-sign zodiac still in horoscopes; cuneiform tablet shape → shopping receipts.

**Bad:** "Sargon was basically Game of Thrones," forced analogies, pop-culture that dates fast.

Keep them brief — one parenthetical, not a digression. Not funny — "moment of recognition."

---

## Rule: Anchor abstract numbers in something the reader can feel

Raw numbers (mm of rainfall, km distance, m height, km² city area, population) are meaningless on their own. Anchor them in something the reader has a physical sense of.

**Good:** "150-200 mm of rainfall per year (about a quarter of what grows typical dryland wheat in the American Midwest)"; "30 meters high (roughly a ten-story building)"; "Mesopotamia is about the size of Florida"; "as different as Chinese and English."

**Anchors:** distance → drive from X to Y or length of a state; area → US state or island; height → known building; population → modern city; time → "twice as long as the Roman Empire"; language → two languages the reader knows; climate → "hotter than Phoenix in July."

**Comparisons are brief** — one parenthetical. Relatable beats precise.

---

## Rule: Don't over-anchor common measurements

The anchoring rule applies to genuinely alien quantities (91 meters, 150mm of rainfall, populations of 80,000, distances of 1,500 km). It does NOT apply to quantities the reader already intuits: 7 feet, 10 feet, a few hundred pounds, a mile. Over-anchoring is patronizing.

---

## Rule: Inline cross-civ comparisons at "firsts"

When the prose makes a "first" claim ("first city," "first writing," "first wheel," "first law code"), add an inline comparison to when the same thing happened in other civilizations — *right there in the paragraph*, not deferred to a cross-link section.

**Why:** The impact of "first" depends on knowing what came after elsewhere. "Uruk was the first city — Egypt's first true city wouldn't appear for centuries, China's wouldn't appear for nearly 2,000 years, the Andes wouldn't have anything comparable for 3,000 years."

**Format:** 3-5 other civilizations, roughly when they hit the same threshold. Don't be comprehensive — pick the most striking.

This is different from the cross-link bottom sheet (for *related* events the reader can click into). Inline is for immediate impact.

---

## Rule: Justify "first" claims by explaining why and against what alternatives

Whenever the prose says "first X," the honest answer involves: (1) what definition of X, (2) what other candidates exist, (3) why this one wins, (4) what the contested cases are.

**Pattern:** say "X is the first Y" first, then give the definition, name the alternatives, explain why X wins, acknowledge contested cases briefly. Don't lecture — keep it compact. Don't mention every alternative — just the strongest 1-2 challengers.

---

## Rule: "First" claims need a cumulative caveat

Individual "first" claims in each chapter are properly qualified. But the *cumulative* effect of many qualified "firsts" across a full TL still oversells.

**Fix:** add a brief caveat paragraph early in the TL (Chapter 1 or intro) stating that "first" in ancient history always means "first surviving evidence of," and absence of evidence from other regions is not evidence of absence. Archaeological luck shapes what we can claim. This inoculates the entire manuscript.

Apply to every TL.

---

## Rule: Adapt narrative structure to the civilization, not a fixed template

Each TL should find the structure that fits its subject. Mesopotamia has 3,500 years of dynastic succession — it gets 13 chronological chapters. Indus Valley has no readable names and no political narrative — it gets a different structure: rediscovery frame, thematic chapters, mystery-driven arc.

**Stays constant across all TLs:** writing rules, informal voice, audit pipeline, cross-civ comparisons.

**Adapts:** chapter count and length, chronological vs. thematic, named characters vs. archaeological inference, discovery/rediscovery frame, space given to "what we don't know."

**Each narrative should attempt a fresh perspective.** Don't repeat the same structural approach from TL to TL.

### Chapter count = narrative movements (no template, no cap)

Before writing, build a **narrative-movement map**: list the distinct dramatic movements the civilization's story actually has — its rises, crises, transformations, collapses, afterlives. **The chapter count is the number of those movements**, derived from the story, never from a civ-type template ("classical ⇒ ~8–10") and never from "take the heavier of two numbers." There is **no upper cap** — if the full story needs 22 chapters, it gets 22; if it needs 8, it gets 8. The only failure modes are a chapter that isn't *about* a real movement (padding) and a movement crammed into half a chapter (compression). The movement map + a one-line throughline per chapter is approved by the user before drafting (a pipeline gate, even in no-stop mode). This pairs with the enforced 10–15-events-per-chapter density: movements set how many chapters, density sets how much each carries.

---

## Rule: Kill "we met" / "whom we meet" phrasing in cross-references

Cross-chapter callbacks are good. But "we met" / "whom we meet" / "which we will meet properly" is repetitive and tour-guide-y. Replace with terse parentheticals.

- BAD: "the god Enki (the freshwater god we met at Eridu in Chapter 2)"
- GOOD: "the god Enki (the freshwater god at Eridu, Chapter 2)"

- BAD: "Gilgamesh, which we will meet properly in Chapter 6"
- GOOD: "Gilgamesh (Chapter 6)"

Drop "we met", "we'll meet", "whom we meet", "which we will meet".

---

## Rule: Define ALL terms — including non-Mesopotamian ones

The reader is a newcomer to ALL of history, not just Mesopotamian. If a term requires any specialized historical knowledge from ANY civilization — Greek, Roman, Chinese, Egyptian, anything — it gets an inline definition. ("hoplite formation" needs a definition.)

---

## Rule: When raising "may have been real," address the bigger question

When the text raises the historicity question for a specific person, don't leave it hanging. Give broader context: roughly when does the historical record become reliable enough that we stop saying "may have"? Who is generally considered the earliest verified historical person? Where does THIS person fall on that spectrum? Turns a one-off uncertainty into a teaching moment about how we know what we know.

---

## Rule: Disambiguate confusingly similar names

When introducing a name that looks/sounds like another name already in the text, explicitly note the difference. "the god Enki (not to be confused with Enkidu, the wild-man companion of Gilgamesh)" / "the moon god Nanna (not the same as Inanna — similar names, completely different deities)."

Readers juggle dozens of unfamiliar names. Anything that looks like a near-duplicate needs to be flagged proactively.

---

## Rule: Miles first, km in parens

US-based reader. Lead with miles, km in parens. `930 miles (1,500 km)`, not the reverse.

---

## Rule: Don't repeat earlier content without differentiating

When a later passage covers a topic that overlaps with an earlier one, explicitly differentiate. "This was different from the standardized currency earlier — Sargon standardized the physical measuring tools, while the earlier standardization was about..." If they're genuinely the same thing, don't mention it again. If different, say how.

---

## Rule: Don't re-define known things — but new facts about them are fine

Some concepts get their **identity** re-explained at full length every time they appear. Cut those.

**After the first full explanation, identity gets a brief tag** — one clause or a chapter pointer:
- "the Elamites (Chapters 4 and 6)"
- "the Zagros highlands (Chapter 5)"

**Keep:** new interesting facts, tangents, or context in a later chapter. "The Kassites had been horse-breeders and charioteers, their gods included horse deities" is a new fact → keep. "The Zagros mountains (the long rugged range separating the plain from the Iranian plateau)" is re-defining → trim.

---

## Rule: Vary uncertainty language — don't repeat "as far as we can tell"

Repetitive uncertainty markers make the writer sound like they're hedging everything equally.

**Alternatives to rotate:**
- "the surviving evidence suggests"
- "based on what has been excavated so far"
- "the current scholarly reading is"
- "no surviving text contradicts this"
- "this is the standard interpretation, though the evidence is thin"
- "the archaeological record points to"
- "the best-attested explanation is"

Each carries slightly different nuance. No single uncertainty phrase should appear more than twice in a full TL.

---

## Rule: Long parentheticals break the reader's train of thought

If a parenthetical aside is longer than ~15 words, make it its own sentence. The main sentence must be readable without the parenthetical. If removing the parenthetical breaks the meaning, it isn't actually parenthetical — it's load-bearing content that deserves its own sentence.

---

## Rule: Use commas and parentheses, not em-dashes

Don't use em-dashes for inline definitions or asides. Use commas for natural clauses and parentheses for definitions/context.

- YES: `**Marduk** (the patron god of Babylon) was worshipped...`
- NO: `**Marduk** — the patron god of Babylon — was worshipped...`

Em-dashes interrupt flow more aggressively than parens. Parens feel like a helpful aside.

---

## Rule: Introduce your sources — who is this writer and why should I trust them?

When citing a historical writer as a source, give a one-line intro on first use: (1) when they lived, (2) what they wrote, (3) why we're citing them. Applies to all historical sources — classical writers, medieval chroniclers, modern archaeologists.

**Examples:**
- "Berossus (a Babylonian priest who wrote a Greek-language history of Mesopotamia around 280 BCE)"
- "Henry Rawlinson (the British officer who deciphered cuneiform in the 1840s)"

---

## Rule: Chapter summaries — how to write them

Every shipped TL has a `narratives/{tlId}.summaries.json` file that powers the collapsed chapter card in the reader. Bullets are the primary mechanism: tapping a chapter header shows a sticky bullet list above a "Read Chapter N →" button. Open the chapter and the bullets give way to the full prose. Writing good bullets is a separate craft from writing the narrative.

### File format

JSON list (not object), one entry per chapter:

```json
[
  {
    "chapter": 1,
    "title": "Chapter Title",
    "dateRange": "7000–5000 BCE",
    "bullets": [
      "Tight single sentence stating one fact from the chapter.",
      "Another tight single sentence, with named people and concrete numbers."
    ]
  }
]
```

**Required fields:** `chapter` (int), `title` (string), `dateRange` (string), `bullets` (non-empty array of strings).

**Optional `summary` field** (legacy): Mesopotamia has a prose paragraph per chapter. The reader only renders it as a fallback when `bullets` is absent (`chapter-accordion.tsx:182`). New TLs should skip it — bullets are enough.

### Density

- **6–10 bullets per chapter.** Shorter chapters get 6, denser chapters get 10. Go to 11–12 only for exceptionally long chapters (Mesopotamia Ch 11 is an upper extreme).
- Scale with the chapter, not a fixed quota. The right number is "enough to cover the beats, not more."

### Length per bullet

- **25–40 words** is the sweet spot. Hard cap ~55. Never a paragraph.
- **One sentence.** If you need two, you're really writing two bullets glued together — split them.
- Tight and declarative. Short enough that a reader scanning the collapsed card can absorb each one in under five seconds.

### Voice

- **Keep the narrative's informal voice.** Standout phrases survive: "China's Sorrow," "the black-headed people," "first by a huge margin," "a delightful piece of royal propaganda." These are why bullets feel like continuations of the book and not a wire-service summary.
- **Strip everything transitional.** No "Meanwhile," "By the next generation," "But the real story is." The bullet list has no flow — each bullet stands alone.
- **No scene-setting.** The narrative sets the scene; the bullet names the fact.
- **No cross-chapter callbacks.** Don't write "(see Chapter 5)" or "as we saw earlier." Each bullet is read out of context in a collapsed card.
- **No narrator asides.** No "as far as we can tell," no "interestingly," no meta-commentary. The bullet is the assertion.

### Content

- **Named people, specific dates, concrete numbers, proper nouns.** "Sargon's daughter Enheduanna, high priestess of the moon god Nanna at Ur, became the first named author in recorded human history" — *not* "a priestess became a famous writer."
- **Prefer facts that hit hard in isolation.** Shocking comparisons, first-in-the-world superlatives, and specific artifacts land better than generalizations.
- **Cover the chapter's actual beats** — the main people, events, places, and payoffs the chapter spends time on. A reader who only reads the bullets should know roughly what the chapter is about.
- **Skip the obvious.** If the chapter title already says "Hammurabi's Babylon," don't burn a bullet on "this chapter is about Hammurabi."

### matchText awareness (important — the bullets auto-get links)

The parse script injects event, glossary, and cross-links into every bullet after it's written — same regex-based matcher as the chapter prose. That means:

- **Phrasing should mirror the narrative's plain-text spans** so the existing event/glossary/cross-link entries hit. If the narrative calls it "the 4.2 kiloyear event," the bullet should too — not "the 4.2-kya drought event."
- **No markdown formatting inside bullets** (no bold, no italics, no links). Plain text only. The parse script's word-boundary regex silently fails on anything starting or ending with a non-word character, same rules as `content/.event-links-{tlId}.json`.
- **No parentheticals immediately adjacent to a key noun** that would break up a matchText span. "Enheduanna (high priestess of Nanna)" is fine, but "Enheduanna, high priestess of Nanna at Ur," flows as one linkable phrase.
- After parsing, eyeball the collapsed card on dev to confirm the links you expect actually rendered. If a bullet has zero links but the chapter has events and glossary coverage, the phrasing is probably off — rewrite the bullet to match the narrative's wording.

### dateRange format

Keep it compact. Four valid shapes:

- **Era range:** `"7000–5000 BCE"` — the normal case, use an en-dash.
- **Event era:** `"~2100–1600 BCE"` — add a tilde if the range is legendary/uncertain.
- **Framing-only chapter:** `"Geographic setting + pre-7000 BCE"` or `"Geographic & cultural setting"` — for chapters that set the stage before chronology kicks in.
- **Open-ended mystery:** `"Ongoing mystery"` — for thematic chapters (Indus "The Invisible Rulers," Indus "Gods Without Names") where no single date range fits.

### Process

1. **Read the chapter end-to-end** before writing any bullets. The bullet list is a reduction, not a generation step — you pull facts out of prose, you don't invent them.
2. **Draft 8–12 candidate bullets** then cut the weakest. It's easier to trim than to pad.
3. **Audit each bullet for concreteness:** does it name a person, a date, a number, or a place? If not, rewrite or cut.
4. **Check matchText alignment:** for each bullet, ask "does the narrative use this exact wording for the linkable nouns?" If not, adjust the bullet to match.
5. **Run `npm run parse`** and confirm the file is picked up (watch for `No summaries found for {tlId}` warnings — that means the file path or TL id is wrong).
6. **Restart `npm run dev`** (the parse cache is in-memory — see `feedback_server_restarts`).
7. **View the collapsed chapter card on mobile** (or DevTools mobile mode) and confirm each bullet fits comfortably on two lines or fewer, and that the auto-injected links are the ones you expected.

### Exemplar bullets (keep these in your head while writing)

From `ancient-china.summaries.json` Ch 1:
> "The Yellow River carries so much loess silt it is literally called China's Sorrow, changing course at least 26 times in recorded history and drowning whole regions when it jumps its banks."

From `indus-valley.summaries.json` Ch 7:
> "Mesopotamian texts call the Harappans Meluhha — a land across the sea — and Sargon of Akkad's inscriptions mention ships from Meluhha docking at his capital around 2350 BCE."

From `mesopotamia.summaries.json` Ch 3:
> "Around 3800 BCE, a settlement called Uruk began to grow faster than any community in human history had grown before — and within six hundred years it was the world's first real city, with 40,000 to 80,000 residents packed into six square kilometers."

All three hit the same formula: **a specific place/person/thing + a concrete number or date + a jaw-dropping comparison or claim**, in one tight sentence, with the narrative's informal voice intact.

---

## Rule: Read around every edit before AND after

When inserting a fix into existing prose, the edit cannot be made in isolation.

**Before the edit:** read the paragraph before, the paragraph after, and (for larger insertions) the whole sub-section or chapter. Ask: does this duplicate anything nearby? Does it interrupt a flowing argument?

**After the edit:** re-read the edited region as a continuous unit. Look for repeated points, broken rhythm, awkward transitions, lost train of thought. Revise if something feels wrong.

Without this discipline, fixes accumulate like sediment — each solves a local problem but degrades overall flow.

---

## Validated patterns (keep doing these)

### Conjecture vs. documented markers
Sentences like "Exactly how Sargon went from cupbearer to king is not recorded in any surviving document — a coup is the most likely explanation — but what came next is very well documented." Flagging what we DON'T know alongside what we DO know is one of the strongest trust-building techniques. Keep doing it freely.

### Shocking comparisons
"Enheduanna predates every other known named author in human history by more than a century..." State the fact, then put it in a comparison that makes the reader's jaw drop. These moments are the payoff for reading.

### Cross-chronological anchors
"The Code of Ur-Nammu predates the more famous Code of Hammurabi by about three centuries." Prevents confusion and builds the reader's internal timeline.

### Cross-civ comparisons are the #1 structural asset
Independent critique identified cross-civilizational comparisons as the best structural innovation: "Every time the author pauses to say 'China wouldn't reach this point for another 1,700 years,' it argues the book's implicit thesis through evidence rather than assertion." Preserve, expand where missing, make systematic across all TLs.

### The informal voice is the product — don't sand it down
The v2 app is explicitly a popular reading experience, not an academic text. "A delightful piece of royal propaganda" and "a suspiciously precise number" are features, not bugs. The voice is the whole point.

### REJECTED: word-count targets
A prior critique suggested cutting 4-5k words from Meso Ch 8-12. After attempting this, cuts removed too much interesting context. The critique came from someone without knowledge of the project's goals (mobile reading app with supporting UI). The detail and depth in these chapters is intentional. Do not apply a word-count target to future TLs.
