# Music content pipeline (era / genre / work / artist narratives)

The gated process for producing a Music narrative — the analog of the civ 5-persona
audit (`.claude/skills/audit-narrative.md`), `audits/war-content-pipeline.md`, and
`audits/art-content-pipeline.md`, re-pointed at music's failure modes.

**Status: READY, NOT YET RUN.** The Music vertical is a "coming soon" stub
(`src/app/music/page.tsx`); no article exists yet. This doc exists so the first
music article is gated from the START, never author-then-hope (the mistake the
Kahnweiler work and the art "Lay of the land" prologue both made — see
`audits/art-content-pipeline.md` proof runs 2 and 6). **No music article ships
without running these gates.** When the first one is built, log it as Proof run 1
at the bottom and flip this to ACTIVE.

## Governing principle (shared with civ / war / art)
**Storytelling is the #1 goal; accuracy / zero-hallucination is a hard floor it may
never cross.**

**EVERY SURFACE IS GATED, not just the main prose (locked 2026-05-25 — "make sure
critical agents run for all sections in war, art, music"; born into this doc before
the first music article so the mistake the other verticals made never happens here).**
A music "section" is every reader-facing factual surface it will ship, and all of it
runs through the same fact-checker + critics: the narrative prose, **track/album
stats** (release date, label, personnel, producer, chart/sales figures, runtime),
**look/listen-closer pointers** (what happens in which bars / at which timestamp —
verified against the actual recording, the audio analog of art's image-checked
Look-closer), **captions** on score/cover images, artist nameplates, intros, summary
lines, lineage/influence chips. A chart position or a personnel credit on a card is a
claim — fact-checked exactly like a sentence; **not exempt for being a stat or a
card.** Ship-gate checklist = this surface list, each critic-covered. (This rule is
the art/war retro lesson, applied pre-emptively: wrong facts hide in the small
ungated surfaces — annotations, provenance, stats — not only in the prose.)

**REQUIRED for every era + genre/movement: the "Why this is a break" block (locked
2026-05-25, the music analog of art's `whatChanged`).** Each music era and each genre/
movement must explicitly answer *why it is genuinely new — what changed in the sound*
— with a contrast you can HEAR, not just read: a representative *before* example (the
sound it broke from) set against an *after* example of this movement, plus a gated
passage naming the concrete musical change (harmony, rhythm, instrumentation, form,
production). Born-verified media on both sides (the audio analog of art's before/after
images); the passage is fact-checked like all prose. Sits up front so the break lands
before the reader dives in.

**REQUIRED for every genre/movement: the "The manifesto" block (the music analog of
art's `manifesto`, born into this doc before the first music article).** Music movements
declare themselves in words as often as art does — the founding statement is frequently
as famous as the records (Russolo's *The Art of Noises* for Futurist music, Cage's
*Silence*, the punk fanzine credo, a hip-hop origin manifesto). Every genre/movement gets
the block OR an explicit `absent` (never silence-by-omission): the document
title/author/date/venue, **2–3 born-verified excerpt lines in its own words** (verified
against the real text — a quote from memory is MUST-FIX), a gated house-voice read of what
it claimed, AND a **born-verified `sourceUrl`** to the actual text (resolves AND is the
right document — the same link-as-surface rule art uses). Where a movement deliberately
had none, set `absent: true` and tell that story — the silence is content. Same conditional
render + NO jump-bar chip as art's block (see `audits/art-content-pipeline.md`).

Two music-specific additions (the analogs of art's "make them SEE
it" + born-verified images):

- **Make the reader HEAR it.** Music is sound. A chapter that narrates music-history
  events but never makes you *hear the piece* — the riff, the chord that turns, the
  drop, the texture, what is actually happening in the bars — has failed at the one
  thing this mode exists to do. "Listening" is a first-class craft axis, the exact
  analog of art's "looking." Describe the sound in plain, specific language, not
  "iconic"/"powerful."
- **A wrong or blind media embed never ships** (born-verified doctrine). Every audio
  clip, score image, album-cover image, or embedded recording is resolved against a
  real source and load-checked at creation; the **rights/licensing tier is
  confirmed** (public-domain recording/score · licensed embed via the official
  platform · or a degraded reference card when nothing is clearable — the analog of
  art's `RestrictedFigure`). Recorded music has TWO copyrights (the composition AND
  the specific recording) — both must be clear before anything is embedded inline.

### Music's signature hallucination trap: the rock-myth anecdote
Music history is as full of repeated-as-fact legend as art is — who "invented" a
genre, what was said in the studio, the apocryphal origin of a song, "the first
ever" claims, sales/chart figures. **The fact-checker's primary job is to separate
documented fact from charming legend**, and to frame a load-bearing legend as legend
("as the story goes", "by his own later account"), never assert it flat.

## The gates (a section ships only when all pass) — mirror art's, re-pointed
1. **Fact-checker** (Sonnet, web-enabled) — verify every date, attribution
   (writer/performer/producer), label, release, personnel, chart/sales figure,
   quote and "first/only" claim against authoritative sources. Flag apocryphal
   anecdotes asserted as fact.
2. **Storytelling & "listening" critic** (Sonnet) — judge as story AND as music
   writing. Per-chapter STRONG/GOOD/NEEDS WORK/REWRITE. Hook, stakes, pacing, voice
   — PLUS: **does it make the reader hear it?** Flag chapters that are all
   business/biography history and no actual sound. House voice locks carry over from
   art (dry wit dialled up with room to land; comparisons are the #1 comprehension
   tool; never bury a substantive line in muted/italic).
3. **Comprehensiveness critic** (Sonnet, web-enabled) — independent must-cover
   checklist; COVERED/THIN/MISSING; MUST-ADD vs SHOULD-CONSIDER. Selective is
   correct — flag only genuinely essential gaps.
4. **Newcomer / clarity critic** (Sonnet) — read cold as a sharp 15-year-old with no
   musical training. Flag every undefined term (syncopation, modulation, the
   twelve-bar blues, a "break", BPM, a "hook", sampling, a DAW, time signatures),
   every artist introduced without a one-line who-they-are. CLEAR/NEEDS-GLOSS/LOST.
5. **Framing / fairness critic** (Sonnet, web-enabled) — music history's contested-
   memory failure modes: **erasure/under-credit of the originators** (esp. Black
   American artists whose blues/jazz/R&B/rock/hip-hop innovations were copied,
   covered, or sold on by others), the **"genius" myth** (lone-auteur framing that
   writes out bands, producers, session players, songwriters, sidemen), the
   **appropriation question** (named honestly — who made it first, who got rich —
   neither sanitized nor turned into a lecture), and **Anglo/Western overclaim**
   (state the scope, don't universalize it). FAIR/TILTED/DISTORTED.

### Two structural gates (coordinator-run)
6. **Media & rights gate** — every embed resolves + load-checks; BOTH copyrights
   (composition + recording) are cleared, or it's a degraded reference card; the
   caption/credit matches the actual track (right artist, title, year, label). A
   media item that can't be verified is swapped for a verified on-topic substitute
   or rendered as a reference card — never a blind/guessed embed. **Card images use
   the shared `OrientationCard`** (`src/components/mode/orientation-card.tsx`): image
   shown WHOLE (never cropped; trim true borders + self-host), fills 3 sides
   (landscape on top, portrait on left), width caps ¾ / ½ screen, card grows, never
   truncates text, blurb written to FIT. Same rules as art; full spec in
   `BEHAVIORS.md` "Cards".
7. **Nesting / coherence gate** — across era → genre → work → artist, each pair is
   (a) consistent (a date/credit reads the same at every altitude) and
   (b) differentiated (a lower level goes DEEPER, never copy-pastes the level above).

## Steps + roles
Identical to `audits/art-content-pipeline.md` ("The steps", "Roles"): coordinator
briefs + builds the fact pack + resolves media, the **Opus author** drafts only from
the fact pack (+ a Fact ledger), the five critics run in **parallel as Sonnet
agents**, the coordinator reads them critically (gate = coordinator judgement, not
agent say-so — `feedback_gate_pass_not_correct`), the author revises until clean
(new material → fact pack + fact-checker FIRST), then the coordinator runs gates 6–7
and integrates. Subagents never git commit — consolidate in one coordinator commit.

## Build the agent briefs
Adapt the art briefs (`audits/art-content-pipeline.md` §Reusable agent briefs) with
the re-points above: "make them SEE it" → "make them HEAR it"; image-rights →
two-copyright media-rights; genius-myth/women's-erasure/appropriation/Eurocentric →
originator-erasure/lone-auteur/appropriation/Anglo-overclaim.
