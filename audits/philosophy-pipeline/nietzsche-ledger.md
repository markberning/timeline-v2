# Fact ledger — Nietzsche (thinker read) — Opus author draft

Step 2 of `audits/philosophy-content-pipeline.md`. Every reader-facing factual surface in
`nietzsche.read.ts` traced to its source in `nietzsche-fact-pack.md` (and the era-5
`nineteenth-century-fact-pack.md` it extends). Built ONLY from those two packs; no memory.
**Quote doctrine:** all quotations in named PD translations (Thomas Common / Ludovici /
Zimmern / Samuel) — zero Kaufmann, zero Hollingdale. Paraphrase-only items ship without
quotation marks OR carry `[VERIFY]` where rendered as a quotation. Structure verified against
`PhiNarr` via `tsc -p` (project tsconfig) → EXIT 0.

## [VERIFY] tags placed for the r2 fact-check (3 total — all paraphrase-only-for-wording)
| # | Location | Claim | Why tagged | Pack basis |
|---|---|---|---|---|
| V1 | Ch4 §2 (will to power) | *BGE* §36 "world seen from within = will to power" | Rendered as PARAPHRASE (no quote marks); tag asks r2 to confirm exact Zimmern §36 wording before any quoting | Pack §3 summary-table "PARAPHRASE-ONLY"; §9.2 author-stage fetch owed |
| V2 | Ch5 §3 (eternal recurrence demon) | GS §341 demon / "loneliest loneliness" / "eternal hourglass" / "speck of dust" | CONTENT verified (pack §3.B) but exact full-section Common wording flagged for re-fetch; shipped as PARAPHRASE narrative, NOT a verbatim block quote. Author attempted Gutenberg #52124/#52881 + Wesleyan PDF fetch — pages truncate/glyph-encode; could not string-match full §341 at authoring time | Pack §3.B (content VERIFIED, wording "re-confirm at authoring time"); §9.1 |
| V3 | (folded into V2 note) GS §276 amor fati + §270 "become what thou art" | Both PARAPHRASE-ONLY; shipped with NO quotation marks ("in his phrase," "we hold... as paraphrase") | Pack §3.I, §4 amor fati, §9.5, summary table |

**Note:** §276 and §270 are deliberately rendered as paraphrase (no quote marks) per pack —
no `[VERIFY]` needed since they are not presented as quotations. V2 covers the recurrence cluster.

## VERIFIED quotations used (exact PD wording, translator named in-text)
| Quote (as shipped) | Work / locus | Translator | Pack status | Where |
|---|---|---|---|---|
| "God is dead! God remains dead! And we have killed him! How shall we console ourselves, the most murderous of all murderers? ... who will wipe the blood from us?" | GS §125 | Thomas Common | VERIFIED (pack §3.A — incl. the line-wrap gotcha: "most murderous" IS Common, NOT Kaufmann's "murderers of all") | Ch2 epigraph + body |
| "God is dead; but given the way of men, there may still be caves for thousands of years in which his shadow will be shown — and we — we still have to vanquish his shadow, too." | GS §108 | Thomas Common | VERIFIED (era-5 pack) | Ch2 §4 |
| "the most important of more recent events" / "already begins to cast its first shadows over Europe" / "What our Cheerfulness Signifies" | GS §343 | Thomas Common | VERIFIED (pack §3.C) | Ch2 §5 |
| "That which does not kill me, makes me stronger" + "From the military school of life" tag | Twilight of the Idols, "Maxims and Missiles" §8 | A. M. Ludovici | VERIFIED (pack §3.E; section title "Maxims and Missiles" preserved, not "Arrows") | Ch1 epigraph + body |
| "The revolt of the slaves in morals begins in the very principle of resentment becoming creative..." | Genealogy I.10 | Horace B. Samuel | VERIFIED (pack §3.F) | Ch3 epigraph |
| "every aristocratic morality springs from a triumphant affirmation of its own demands" / "the slave morality says 'no'... and this 'no' is its creative deed" | Genealogy I.10 | Horace B. Samuel | VERIFIED (pack §3.F) | Ch3 §2, §3 |
| "above all to discharge its strength — self-preservation is only one of the indirect and most frequent results thereof" | BGE §13 | Helen Zimmern | VERIFIED (pack §4, will-to-power) | Ch4 §2 |
| "'Nature's conformity to law,'... exists only owing to your interpretation and bad 'philology'" | BGE §22 | Helen Zimmern | VERIFIED (pack §3.H) | Ch4 epigraph + §4 |
| "I teach you the Superman. Man is something that is to be surpassed." | Zarathustra Prologue §3 | Thomas Common | VERIFIED (pack §3.D; "to be surpassed" = Common, NOT "overcome" = Kaufmann) | Ch5 epigraph + §2 |
| "Man is a rope stretched between the animal and the Superman — a rope over an abyss" / "dangerous crossing" / "bridge and not a goal" | Zarathustra Prologue §4 | Thomas Common | VERIFIED (pack §3.D) | Ch5 §2 |
| "it would perhaps be useful and fair to banish the anti-Semitic bawlers out of the country" + "the anti-Semitic folly" + "strongest, toughest, and purest race at present living in Europe" | BGE §251 | Helen Zimmern | VERIFIED (pack §3.G) | Ch6 epigraph + §4 |

**Translator note shipped in-prose** (Ch1 §1, Ch5 §1): the Kaufmann/Hollingdale-in-copyright
constraint and the "Superman→overman" gloss are stated to the reader, per pack §0 / §3.D and
era-5 consistency.

## Biographical / stat surfaces (DOCUMENTED — pack §1)
- b. 15 Oct 1844, Röcken, Prussian Saxony; pastor father Carl Ludwig d. when N. was 4 (brain
  disease); resonance-with-"death of God" shipped as SUGGESTIVE not causal (pack §1 caution). ✓
- Schulpforta 1858–64; Schopenhauer bookshop encounter ~1865 (flagged "partly later
  recollection," pack §1); Wagner met 1868. ✓
- Basel prof at 24 (1869), honorary Leipzig doctorate, Swiss citizenship (renounced Prussian) —
  "among the youngest, if not the youngest" HEDGE preserved (pack §1). ✓
- Birth of Tragedy 1872 (Apollonian/Dionysian; hostile reception; 1886 self-critical preface). ✓
- Wagner break: Bayreuth 1876 disappointment → Human, All Too Human 1878 → two 1888 pamphlets;
  motives (nationalism, antisemitism, Parsifal Christianity) per pack §1. ✓
- Health collapse / Basel resignation 1879 at 34; wandering decade 1879–88; Sils-Maria from 1881
  (NOT stated as sole origin of recurrence — pack §3.B caution). ✓
- Lou von Salomé 1882, proposal declined; staged cart/whip photo labeled "staged tableau, not
  literal" (pack §1, §8). ✓ Inline figure used.
- Turin collapse 3 Jan 1889 at 44, Piazza Carlo Alberto, Overbeck/Gast, Wahnbriefe ("Dionysus"/
  "the Crucified"). HORSE STORY flagged APOCRYPHAL with the thirdhand-post-mortem sourcing
  (pack §1). ✓
- Illness cause shipped MEDICALLY UNRESOLVED (syphilis unproven / CADASIL / other) — no specific
  diagnosis asserted (pack §1, §9.6). ✓
- 11 silent years; mother Franziska → Naumburg to 1897; Elisabeth → Weimar/Villa Silberblick,
  displayed; d. 25 Aug 1900 (pneumonia + stroke). ✓

## Ideas as documented positions (pack §3–§4)
- Death of God FRAMED AS CRISIS not boast; "too early"/"news hasn't arrived"; nihilism defined;
  three GS loci (§108/§125/§343) — the era-5 LOCK held throughout Ch2. ✓
- Master/slave morality + ressentiment (French word kept; technical sense distinguished from
  ordinary resentment); slave revolt STEELMANNED as a real moral achievement that WON
  (Christianity/democratic-equality its children) BEFORE the provocation; potted-summary trap
  ("weak=bad") named and disarmed; target = life-hating morality (any class) not "the weak"
  (pack §3.F, §4). ✓
- Will to power as correction of Schopenhauer's will-to-live (expansion/self-overcoming, not
  domination); steelmanned; *The Will to Power* TRAP flagged plainly — Elisabeth's posthumous
  compilation, NOT a book N. wrote; Montinari "forgery" at its sharpest (pack §4, §8). ✓
- Perspectivism: PUBLISHED BGE §22 anchored; "no facts, only interpretations" correctly placed
  as UNPUBLISHED Nachlass 1886–87; NOT relativism; self-reference objection answered ("so much
  the better"); engine-under-death-of-God link (pack §3.H, §4). ✓
- Übermensch = existential type, NOT race/biology/master-race/program/existing-person (pack §3.D
  lock); "Superman→overman" gloss; self-overcoming, bridge-not-goal. ✓
- Eternal recurrence walked move-by-move as a THOUGHT EXPERIMENT (literal-belief contested, noted
  beside-the-point); every consolation-exit blocked; amor fati as the active-affirmation answer
  (NOT resignation), tied to the overman (pack §3.B, §4). ✓
- "Become who you are" credited to PINDAR (Pythian II.72, c.476 BC) → Nietzsche as popularizer
  (pack §3.I, §5). ✓

## Honesty sections (pack §6 — required framing gate)
- Posthumous-misuse block (Ch6): Elisabeth + Bernhard Förster (antisemitic agitator, petition),
  Nueva Germania, archive control 1894–1935, the *Will to Power* construction, Nazi
  appropriation (Hitler at 1935 funeral), motive HEDGED to documented EFFECT (intent left open),
  set AGAINST N.'s own contempt for antisemitism/nationalism via BGE §251 + "good European";
  postcard treated as secondary color (pack §6.A). ✓
- Misogyny named honestly (Ch6 §5): "performative provocation to plain contempt," contested, not
  explained-away and not made the whole man — era-5 register preserved (pack §6.B). ✓
- Real descendants (Ch6 §6): existentialism (Sartre/Camus/de Beauvoir, w/ Kierkegaard co-
  ancestor), depth psychology (Freud/Adler), postmodernism (Foucault genealogy / Derrida/Rorty/
  Lyotard) — pack §7. ✓

## Apocrypha handled (pack §5, §9)
- Horse story → flagged apocryphal (Ch1). ✓
- "What does not kill me" → genuine, Ludovici, "military school of life" tag kept (Ch1). ✓
- "God is dead" as triumph → reframed as crisis throughout (Ch2). ✓
- "Become who you are" → Pindar chain noted (Ch5). ✓
- "No facts, only interpretations" → genuine-but-UNPUBLISHED Nachlass, distinguished from
  published BGE §22 (Ch4). ✓
- "Man... to be surpassed" → Common exact, NOT "overcome" (Kaufmann) (Ch5). ✓
- No blacklisted misquote (Frankl "why/how," "insanity in groups," etc.) appears anywhere. ✓

## Images (pack §8 — born-verified, HEAD-checked at authoring time)
| Image | Use | HTTP | Right-subject |
|---|---|---|---|
| `Nietzsche1882.jpg` (Schultze, Sept 1882) | HERO | 200 image/jpeg | Confirmed (pack §8 canonical; same as era-5 hero — consistency) |
| `Nietzsche_paul-ree_lou-von-salome188.jpg` (staged Lou/Rée tableau, 1882) | Ch1 inline figure | 200 image/jpeg (via Special:FilePath) | Confirmed (pack §8); caption labels it STAGED, not literal |

Munch portrait candidate from the brief was 404 at the guessed Commons path → not used; the
Schultze photo is the confirmed primary and keeps the read consistent with the era-5 reader.
Read is otherwise TEXT-FORWARD (2 images total) per the vertical's text-first identity.

## Author-stage soft spots passed downstream (for coordinator / r2)
1. GS §341 / §276 / §270 exact Common wording — shipped as paraphrase; V2/V3 tags. Fetch from
   Gutenberg #52124 failed at authoring time (page pagination/glyph-encoding); coordinator should
   string-match before any of these is upgraded to a verbatim quotation.
2. BGE §36 exact Zimmern wording — V1; kept paraphrase.
3. "Without music life would be a mistake," "dancing star," "higher we soar" — NONE used (avoided
   the verify-owed lines entirely rather than ship them unconfirmed).

## Structural / consistency
- `export const NIETZSCHE: PhiNarr` with `import type { PhiNarr } from '@/components/philosophy-reader'`. ✓
- 6 chapters, hook (5 paras), brk before/after + 3 paras, hero PhiFig + 1 inline PhiFig. ✓
- Consistent with era-5 nineteenth-century read (same hero, same crisis-not-boast frame, same
  Common-only quote policy, same posthumous-misuse + misogyny honesty) and goes DEEPER (full
  biography, Wagner arc, the will-to-power compilation custody, recurrence walked move-by-move,
  Pindar chain) per the nesting gate. ✓
- `tsc -p` against project tsconfig: EXIT 0.
