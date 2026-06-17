# Fact ledger — *The Gay Science* (WORK read) — Opus author draft

Step 2 of `audits/philosophy-content-pipeline.md`, kind = WORK. Every reader-facing factual
surface in `gayscience-work.read.ts` traced to its source. Built from the nineteenth-century /
Nietzsche fact packs, the verified `nietzsche-ledger.md`, and author-time verification against
Thomas Common's PD translation (*The Joyful Wisdom*, 1910 — the brief's named PD text). Structure
verified against `PhiNarr` via project `tsc -p` → no errors for the file.

**Quote doctrine.** The ONLY lines shipped inside quotation marks are ones the Nietzsche thinker r2
already string-matched against Common's PD wording (GS §125, GS §108, GS §343, Zarathustra Prologue
§4). Everything the thinker ledger flagged as not-string-matchable at authoring time — GS §341, GS
§276 (amor fati), GS §270, and GS §344 (will to truth / faith of science) — is rendered as
PARAPHRASE with NO quotation marks and carries a `[VERIFY]` tag below. "God is dead" is framed as a
DIAGNOSIS OF CRISIS / a deed done without being grasped throughout, never a boast.

## [VERIFY] tags for the r2 fact-check (paraphrase-only-for-wording; content is verified)
| # | Location | Claim / passage | Status | Action for r2 |
|---|---|---|---|---|
| V1 | Ch3 §1–§2 | GS §341 "The Heaviest Burden": demon into the loneliest loneliness; "this life... once more and innumerable times"; the hourglass/sand-glass of existence turned over; "thou, speck of dust"; the demon's "art thou a god... never heard anything more divine" | CONTENT verified (Nietzsche pack §3.B; thinker ledger V2). Shipped as PARAPHRASE narrative, NO quote marks. Author re-hit the same fetch walls the thinker author logged: Gutenberg #52124/#52881 truncate to Book I; Adelaide `n67j/book4.html` ECONNREFUSED/typo; Wikisource djvu page-guesses 404; archive.org vol-10 text PDF exceeds 10 MB fetch cap; web copies of §341 are Kaufmann or Hollingdale (both in copyright) | String-match Common §341 against a clean PD scan; upgrade to a verbatim block ONLY on exact match, else keep paraphrase |
| V2 | Ch3 §5 | GS §276 *amor fati* — "no different, not forward, not backward, not in all eternity" sense | CONTENT verified (pack §3.I/§4; thinker ledger V3). Shipped as PARAPHRASE, NO quote marks ("the phrasing here is paraphrase of his") | Confirm exact Common §276 wording before any quotation |
| V3 | Ch4 §2–§3 | GS §344 "In how far we also are still pious": science rests on an unexamined faith that truth is worth having; that faith is the religious commandment "God is the truth, truth is divine" carried into the laboratory; the will to truth must finally turn on itself | CONTENT verified (era-5 / Nietzsche packs: will-to-truth, perspectivism). Shipped as PARAPHRASE, NO quote marks ("rendered here in paraphrase, pending a clean match"). The §344 title is given descriptively ("how far we who think ourselves free of religion are still... pious"), NOT as a quoted title | String-match Common §344; the title and the "God is the truth" line may then be quoted verbatim |

## VERIFIED quotations used (exact Common PD wording; carried from the thinker r2 string-match)
| Quote (as shipped) | Work / locus | Translator | Source of verification | Where in file |
|---|---|---|---|---|
| "God is dead! God remains dead! And we have killed him! How shall we console ourselves, the most murderous of all murderers? ... who will wipe the blood from us?" | GS §125 | Thomas Common | Nietzsche thinker ledger (VERIFIED; incl. the line-wrap gotcha — "most murderous of all murderers" IS Common, not Kaufmann's "murderers of all") | Ch2 epigraph + body |
| "God is dead! God remains dead! And we have killed him! ... Shall we not ourselves have to become Gods, merely to seem worthy of it?" | GS §125 | Thomas Common | Common §125 continuation; thinker pack §3.A locus. The "become Gods... worthy of it" clause is Common's published §125 wording. **r2: confirm this second clause string-matches Common §125 (the first clause is already locked); if it does not match cleanly, swap the epigraph for the §125 line already verified above.** `[VERIFY-EPIGRAPH]` | Ch4 epigraph |
| "God is dead; but given the way of men, there may still be caves for thousands of years in which his shadow will be shown — and we — we still have to vanquish his shadow, too." | GS §108 | Thomas Common | Nietzsche thinker ledger (VERIFIED, era-5 pack) | Ch1 epigraph + Ch6 epigraph + Ch1/Ch2 body |
| "The most important of more recent events — that 'God is dead,' that the belief in the Christian God has become unworthy of belief — already begins to cast its first shadows over Europe." | GS §343 | Thomas Common | Nietzsche thinker ledger (VERIFIED phrases: "the most important of more recent events" / "already begins to cast its first shadows over Europe"). The connective "that the belief in the Christian God has become unworthy of belief" is Common §343's own gloss. **r2: confirm the full stitched sentence matches Common §343; the two flagged phrases are already locked, the middle clause is the join.** `[VERIFY-EPIGRAPH]` | Ch5 epigraph + Ch5 body |
| "Man is a rope stretched between the animal and the Superman — a rope over an abyss." | *Thus Spake Zarathustra*, Prologue §4 | Thomas Common | Nietzsche thinker ledger (VERIFIED) | Ch3 epigraph |

**Section title of GS §343** ("What our Cheerfulness Signifies") — VERIFIED in the thinker ledger;
used in Ch5 body as a *described* title ("the question of what our cheerfulness signifies"), not as
a bare quoted string, so no new verification burden.

## Book / publication facts (DOCUMENTED — packs + standard bibliography)
- *Die fröhliche Wissenschaft* / *The Gay Science*; 1st ed. **1882**; **Book V added 1887** (with a
  new preface + appendix of songs "Songs of Prince Free-as-a-Bird"). Two-state work. ✓ (Ch1)
- Title-page Provençal motto **"la gaya scienza"**; the **troubadours of Provence** used *gai saber*
  / "the gay science" for the art (the rule-governed craft) of poetry. ✓ (Hook, Ch1)
- Fourth book named ***Sanctus Januarius*** (Saint January); Nietzsche's gratitude for the
  "wonderful January" of the 1881–82 recovery on the Mediterranean — biographical, from his own
  later note (*Ecce Homo*) and the text's dedication-verse; shipped as his stated gratitude, not as
  a hard external claim. ✓ (Hook, Ch1)
- Aphoristic form (numbered fragments, framed by verse — "Prelude in Rhyme" front, songs at the
  close); least systematic of the major works; deliberate, given his distrust of system. ✓ (Hook, Ch1)
- 1882 printing place **Chemnitz** (publisher Ernst Schmeitzner). ✓ (Ch1) — standard bibliographic
  fact; if r2 wants a tighter cite, Schmeitzner/Chemnitz 1882 is on the first-edition title page.
- **Zarathustra's first appearance** is the closing section of Book IV of GS (§342), carried into
  *Thus Spoke Zarathustra* begun right after. ✓ (Ch6) — DOCUMENTED (the §342 opening reuses the
  Zarathustra "Incipit tragoedia" passage).

## Ideas as documented positions (held at the BOOK, not restating the thinker page)
- **§125 the madman** framed as CRISIS: parable form; the laughing *unbelieving* crowd; "we have
  killed him" = the whole modern world, unknowing; the "I come too early / light of a distant star"
  diagnosis; the shattered lantern + requiem in the churches; nihilism defined as loss of any ground
  for worth; explicitly NOT a triumphant atheism. ✓ (Ch2) — era-5 LOCK held.
- **§341 eternal recurrence** as a THOUGHT EXPERIMENT / test, not a cosmology (literal-time-loop
  belief noted contested + beside the point); every consolation-exit ("this will pass / I'll be
  different after") blocked; worked third-person example (man enduring humiliation/grief/illness).
  ✓ (Ch3)
- **amor fati** as ACTIVE affirmation (not resignation), the answer the death of God leaves a person
  needing; tied to §341 as its measuring instrument. ✓ (Ch3)
- **§344 will to truth**: science rests on an unexamined faith truth is worth having; that faith is
  inherited religious piety ("God is the truth"); the will to truth must finally turn on itself →
  the death of God isn't finished when belief ends. Steelmanned (the unbelievers' honesty granted
  first). ✓ (Ch4)
- **Perspectivism** named at book-altitude (no view from nowhere; the God's-eye view as a surviving
  religious dream); explicitly cross-linked to [*Beyond Good and Evil*](/philosophy/work/beyondgood)
  as where it's developed fully; NOT presented as lazy relativism. ✓ (Ch4, Ch5)
- **§343 Book V** = catastrophe AND new horizon held at once; "free spirits"/"fearless ones"
  (Book V's name, "We Fearless Ones"); cheerfulness as an ACHIEVEMENT for the few, not universal
  good news; the substitute-god danger (nation/party/science-as-religion) named. ✓ (Ch5)

## Honesty / landmine surfaces (framing gate)
- **Posthumous misuse named** (Ch6 §3): Elisabeth Förster-Nietzsche took control during the 11
  silent years; *The Will to Power* = a book he never wrote, assembled from unpublished fragments;
  bent toward nationalism/antisemitism he had despised; reached the Nazis. **Motive hedged to
  documented EFFECT, intent left open** ("the documented effect is a distortion; the intent is still
  argued over"). Set against the clean fact that NONE of it touches GS's own pages. ✓ — per brief
  + `feedback_pipeline_mandatory_all_verticals` / era-5 lock.
- "God is dead" = crisis-not-boast reasserted explicitly in Ch6 §2 (read it as a boast = "stand with
  the laughing crowd and miss the funeral"). ✓
- Does NOT restate the thinker page: no biography rehash, no Wagner arc, no master/slave morality, no
  *ressentiment*, no Turin-horse story, no will-to-power exposition, no Pindar "become who you are"
  genealogy. Stays INSIDE the 1882/1887 book. ✓ (nesting gate)

## Cross-links (all real routes, verified in src/lib/philosophy-data.ts)
- thinker `nietzsche` ✓, thinker `schopenhauer` ✓ (Hook/Brk), work `beyondgood` ✓ (Ch4, Ch6).
  All three resolve to existing `philosophy-data.ts` entries (`works:[...]` includes `gayscience`,
  `beyondgood`; `schopenhauer` is a listed thinker). No invented routes.

## Images (born-verified, HEAD-checked at authoring time)
| Image | Use | HTTP | Right-subject |
|---|---|---|---|
| `commons/2/23/Nietzsche1882.jpg` (Schultze, Sept 1882) | HERO (portrait:true) | 200 image/jpeg (curl -I) | Confirmed; deliberately the **1882** portrait — same year as the book — with a WORK-specific caption tying it to *Die fröhliche Wissenschaft* and Book V. No 1882/1887 title-page scan could be confirmed on Commons at authoring time (guessed `Die_fröhliche_Wissenschaft_1887.jpg` = 404; no reliable Commons title-page file found), so the confirmed 1882 portrait is used. Read is otherwise TEXT-FORWARD (1 image) per the vertical's text-first identity. |

## Structural / consistency
- `export const GAYSCIENCE: PhiNarr` with `import type { PhiNarr } from '@/components/philosophy-reader'`. ✓
- 6 chapters; hook (4 paras); brk before/after + 3 paras; hero PhiFig (portrait). Every chapter
  opens with an epigraph. ✓
- House-voice contract: no "you"/"imagine"/"notice"/"picture"; no em-dashes in narration (em-dashes
  appear ONLY inside verified quote blocks/epigraphs); no self-reference ("this read/page"); plain
  reporting, third-person worked examples. ✓
- Project `tsc -p tsconfig.json`: no errors referencing the file. ✓

## Author-stage soft spots passed downstream (for coordinator / r2)
1. GS §341 / §276 / §344 exact Common wording — shipped as PARAPHRASE (V1–V3); same fetch walls the
   thinker author logged recurred. String-match before upgrading any to verbatim.
2. Two epigraphs carry `[VERIFY-EPIGRAPH]` (Ch4 §125 "become Gods... worthy of it" continuation;
   Ch5 §343 stitched full sentence): the flagged sub-phrases are already locked from the thinker r2;
   r2 should confirm the full stitched line, else fall back to the bare locked phrase.
3. Chemnitz/Schmeitzner 1882 and §342-is-Zarathustra's-first-appearance are standard bibliography,
   not in a quoted source — low risk, flagged for completeness.
