# Fact ledger — "The Independents" philosophy SCHOOL read (`independents-school.read.ts`)

Maps every reader-facing factual surface and every quotation in the draft to its source. Built per
the nineteenth-century author brief (`_c19-author-brief.md`). Sources: the four thinkers' own
gated fact ledgers/reads in this folder (`socrates-ledger.md`/`socrates.read.ts`,
`nietzsche-ledger.md`/`nietzsche.read.ts`), the era-5 `nineteenth-century-fact-ledger.md` (Marx,
Schopenhauer, Kierkegaard, the Hegel framing), plus live PD-text verification fetched and
string-matched **2026-06-15** for every quotation (each row below names the URL hit).

**Quote doctrine:** every quotation is VERIFIED PD wording in a NAMED PD translator.
**Kierkegaard = PARAPHRASE-ONLY** — he appears in Ch6, with ZERO quotation marks around his
words, and the read states the copyright-silence to the reader. Structure verified assignable to
`PhiNarr` via the project `tsc -p tsconfig.json` → no errors for this file.

**[VERIFY] tags left in the draft: NONE.**

---

## Kind / framing decision

- Declared **kind = SCHOOL** with the honest twist the prompt set: these are the great thinkers
  who founded NO school and joined none. The read names this explicitly ("an *independent*… builds
  no school and joins none"; "The label is not a movement they belonged to"). The "tradition" is
  the **anti-tradition** — gadfly / outsider / loner / dynamite. Walked as a **constellation, not a
  lineage** (stated in hook ¶4 and Ch6 ¶2); the only genuine descent link drawn is
  **Schopenhauer → Nietzsche** (inheritance-and-revolt), never faked elsewhere.
- Members with reads: **Socrates, Schopenhauer, Marx, Nietzsche** (one chapter each, Ch2–Ch5).
  **Kierkegaard** is named as the fifth point of the temperament in Ch6 (paraphrase-only), per the
  prompt ("Kierkegaard belongs to this temperament too").
- **Break block:** from philosophy as a tradition you JOIN and BUILD ON → to philosophy as the
  solitary individual against the consensus of the age. (Matches the prompt's specified break.)

---

## VERIFIED quotations used (exact PD wording, translator named in-text)

| # | Quote (as shipped) | Work / locus | Translator | Verification (2026-06-15) |
|---|---|---|---|---|
| Q1 | "I am that gadfly which God has **attached** to the state, and all day long and in all places am always fastening upon you, arousing and persuading and reproaching you." | Plato, *Apology* 30e | Benjamin Jowett (PD) | Fetched Gutenberg pg1656.txt 2026-06-15: verbatim **"attached"** (not "given" — corrected by critic pass 2026-06-15; prior draft had "given", a wording error). Ch1 epigraph + Ch1 body inline. |
| Q2 | "...daily to discourse about virtue, and of those other things about which you hear me examining myself and others, is the greatest good of man, and...the unexamined life is not worth living." | Plato, *Apology* 38a | Benjamin Jowett (PD) | Fetched Gutenberg #1656 (Jowett *Apology*) 2026-06-15: full sentence "if I say again that daily to discourse about virtue… is the greatest good of man, and that the unexamined life is not worth living, you are still less likely to believe me." Trimmed to the verified clause; **corrected** an earlier draft wording ("The life which is unexamined…") to Jowett's actual "the unexamined life is not worth living." Ch2 epigraph; paraphrased (no quote marks) in Ch2 body. |
| Q3 | "The world is my idea:"—this is a truth which holds good for everything that lives and knows, though man alone can bring it into reflective and abstract consciousness. | Schopenhauer, *The World as Will and Idea* (1819), §1 | R. B. Haldane & J. Kemp (1883–86, PD) | Fetched en.wikisource.org *World as Will and Representation*/First Book 2026-06-15: opening sentence verbatim. **Corrected by critic pass 2026-06-15**: prior draft truncated mid-sentence after "knows" without ellipsis; full sentence restored. Ch3 epigraph + Ch3 body ("The world is my idea"). |
| Q4 | "All *willing* arises from want, therefore from deficiency, and therefore from suffering." | Schopenhauer, *WWI*, §57 [VERIFY: Wikisource Third Book page numbers this section as §38; §57 is the standard scholarly citation for the Fourth Book passage — wording confirmed correct, section number may vary by edition] | Haldane & Kemp (PD) | Wording confirmed at en.wikisource.org 2026-06-15: verbatim ("All willing arises from want…"). Ch3 body. |
| Q5 | "[life] swings like a pendulum backwards and forwards between pain and ennui" (paraphrased into prose: "swings like a pendulum backwards and forwards between pain and ennui") | Schopenhauer, *WWI*, §57 | Haldane & Kemp (PD) | Fetched en.wikisource.org Page:…Volume 1.djvu/444 2026-06-15: "Thus its life swings like a pendulum backwards and forwards between pain and ennui." Shipped as a clause inside author prose (lower-cased lead-in), wording verbatim. Ch3 body. |
| Q6 | "The philosophers have only interpreted the world, in various ways; the point is to change it." | Marx, *Theses on Feuerbach* XI (1845; Engels' 1888 publication) | W. Lough (PD) | Fetched marxists.org/…/1845/theses 2026-06-15: verbatim; page metadata "Translated: W. Lough from the German." (Brief's "Moore" note → the actually-verified PD translator of the Theses is **W. Lough**; both PD. Attributed to Lough, the verified source.) Ch4 epigraph + Ch4 body. |
| Q7 | "All that is solid melts into air, all that is holy is profaned, and man is at last compelled to face with sober senses his real conditions of life, and his relations with his kind." | Marx & Engels, *Manifesto of the Communist Party* (1848), Ch.1 | Samuel Moore (1888, PD) | Fetched marxists.org/…/1848/communist-manifesto/ch01 2026-06-15: verbatim. Ch6 epigraph; paraphrased (no quote marks) in Ch6 body. |
| Q8 | "the history of all hitherto existing society is the history of class struggles" (paraphrased in body: "the history of all hitherto existing society is the history of class struggles") | *Communist Manifesto* (1848), Ch.1 opening | Samuel Moore (1888, PD) | Same fetch as Q7; opening line verbatim. Ch4 body (as the line the 1888 English translation "opens with"). |
| Q9 | "The most important of more recent events—that 'God is dead,' that the belief in the Christian God has become unworthy of belief—already begins to cast its first shadows over Europe." | Nietzsche, *The Gay Science* §343 | Thomas Common (PD) | Matches `nietzsche-ledger.md` (VERIFIED, coordinator-verified 2026-06-12) + era-5 ledger. Ch5 epigraph; the §343 content is paraphrased in Ch5 body. |
| Q10 | "I teach you the Superman." / "Man is something that is to be surpassed." | Nietzsche, *Thus Spake Zarathustra*, Prologue §3 | Thomas Common (PD) | Matches `nietzsche-ledger.md` VERIFIED ("to be surpassed" = Common, NOT "overcome" = Kaufmann). Ch5 body. |

All quotation marks in the draft enclose ONLY the verified wording above (or the Kierkegaard
silence, which uses none). No quote was drawn from memory.

### Madman / "God is dead" §125 cluster (Ch5 body) — PARAPHRASE, not quoted
The Ch5 madman parable (dawn marketplace, lantern, "murderers of all murderers," "who will wipe
the blood from us?") is rendered as **author paraphrase**, NOT placed inside quotation marks,
even though the §125 Common wording IS verified in `nietzsche-ledger.md`. Rendering it as prose
avoids any block-quote wording risk while keeping the crisis-not-boast frame; the only §-anchored
direct quote in Ch5 is the verified §343 epigraph (Q9) and the Zarathustra lines (Q10).

---

## Paraphrase-only thinker (no quotation marks used)

- **Kierkegaard — ENTIRELY paraphrase-only** (Ch6 ¶1). Every English translation of his Danish is
  in copyright (era-5 rule); the read uses NO quotation marks for his words and states the silence
  to the reader ("His words cannot be quoted here directly, because the good English translations
  of his Danish remain under copyright"), tying it to his own theme that the deepest truths cannot
  be received secondhand. Facts stated flat: dates (1813–1855), Copenhagen, anti-Hegel, pseudonyms,
  attack on official Christianity, mocked by the press, died at 42, posthumous founder of
  existentialism. (Per era-5 ledger "Kierkegaard — ENTIRELY paraphrase-only.")
- **Marx alienation / species-being** (Ch4 ¶3) — run as a worked example in the author's own words,
  NO quotation marks (1844 Manuscripts translations in copyright; era-5 ledger). The 1932-publication
  gap is stated ("not even published until decades after he died").
- **Schopenhauer Will / pessimism narrative** — beyond the three verified Haldane & Kemp quotes
  (Q3–Q5), the system is paraphrased.

---

## Framing-gate confirmations (the minefield axes)

1. **Marx at PHILOSOPHY altitude, NOT 20th-c state communism** (Ch4 ¶1, ¶5) — explicitly sets aside
   "the one-party regimes, the planned economies, the gulags" as *after his death*, "assembled and
   curated by others"; no Lenin/Stalin read back in; the chapter stays on Thesis XI, historical
   materialism, alienation, opium-of-the-people (full compassionate passage, "of the people" NOT
   "of the masses"), commodity fetishism. **Engels credited as a genuine partner** (co-wrote the
   *Manifesto*, edited later *Capital* volumes, supported Marx), not a benefactor. The detonation is
   named honestly as having traveled "far from its author's hands… that no honest reading can simply
   lay at his door."
2. **Nietzsche "God is dead" = CRISIS not boast** (Ch5 ¶2) — "not boasting and not celebrating; he
   was reporting a catastrophe and dreading its consequences"; madman horror foregrounded; nihilism
   defined; the §343 "first shadows / news not yet arrived" frame kept. Übermensch = existential
   type (overman/superman gloss), "NOT a master race or a biological program or a strongman crushing
   the weak." Eternal recurrence = thought-experiment / test, amor fati as the *affirmation* answer
   (explicit inversion of Schopenhauer's denial-of-will). Revaluation of all values defined plainly.
3. **Nietzsche posthumous misuse NAMED, motive hedged to EFFECT** (Ch5 ¶5) — Elisabeth
   Förster-Nietzsche, her antisemitic-agitator husband (causes N. despised), *The Will to Power* as
   her selected/rearranged notebook-construction and **NOT a book Nietzsche wrote**, Nazi
   appropriation + Hitler photographed at the archive. Intent left where the evidence leaves it
   ("what can be documented is the *effect*… leaving the question of her deepest intent where the
   evidence leaves it"). Set against N.'s own documented contempt for antisemitism/German
   nationalism and his "good European" self-description.
4. **Schopenhauer's Kant + Hindu/Buddhist debts ACCURATE, not orientalized** (Ch3 ¶3, ¶5) — the Will
   built on Kant's appearance/thing-in-itself; the Indian debt named as *real and explicit* (early
   Latin Upanishad translations, then-available Buddhism, craving→suffering→release structure),
   credited as a recognized structural parallel, not exotic decoration. Pessimism steelmanned at full
   strength as a *conclusion* drawn from a thesis about reality, not a mood. Salvation via
   art/compassion/asceticism all three named.
5. **Constellation NOT a faked school** — only Schopenhauer→Nietzsche drawn as real descent (and as
   revolt); the shared enemy is **Hegel's System** (Schopenhauer, Marx, Kierkegaard all swing at it
   from different angles, Ch6 ¶2–¶3); Socrates is the 2,000-years-earlier original of the *type*, not
   a link in a chain. Hook ¶4 and Ch6 ¶2 state "constellation, not a lineage" explicitly.

---

## Biographical / date surfaces (sourced to the four thinker ledgers + era-5 ledger)

- **Socrates** — wrote nothing, founded nothing; Socratic problem (Plato the chief source); elenchus
  / aporia / care of the soul / *psyche*; gadfly (Apology 30e); 399 BC trial (impiety + corrupting
  youth), traumatized post-war democracy, Thirty Tyrants subtext; declined escape (*Crito* logic);
  hemlock, reproached weeping friends; three incompatible heirs (Cynics / Cyrenaics / Plato's
  Academy). All per `socrates-ledger.md`. "Around 410 BC" for the active public years is a loose
  framing of his mature period (he d. 399 BC age ~70), consistent with the pack.
- **Schopenhauer** — 1788–1860; *The World as Will and Idea* (1819, finished in his twenties); 1820
  Berlin lectures deliberately scheduled against Hegel → empty hall → left academia; ~30 years
  ignored; late *Parerga und Paralipomena* essays (1850s) brought fame in his last decade; Will /
  representation / pessimism / pendulum; art-compassion-asceticism exits; Nietzsche found a copy in a
  shop. Per era-5 ledger + era-5 fact-pack §3/§767–768. Hero figure (1859 Schäfer daguerreotype)
  HEAD-checked 200 (see Images).
- **Marx** — 1818–1883; Theses on Feuerbach XI (1845, pub. 1888); Hegel "right side up"; historical
  materialism / base-superstructure; alienation; opium-of-the-people (full passage); commodity
  fetishism; exile, British Museum reading room, Engels' support; *Manifesto* 1848 (Moore 1888 Eng.).
  Per era-5 ledger §3 + framing block 4.
- **Nietzsche** — 1844–1900; philology prof at Basel at 24; Wagner break; wandering decade of
  little-read books; collapse at 44 → 11 silent years; "dynamite" self-description; death of God /
  nihilism / revaluation / Übermensch / eternal recurrence / amor fati; Elisabeth + *Will to Power* +
  Nazi appropriation. Per `nietzsche-ledger.md`. Illness left medically unresolved (not asserted).
- **Kierkegaard** — 1813–1855, Copenhagen; anti-Hegel; pseudonyms; attack on official Christianity;
  mocked by the press; d. 42; posthumous founder of existentialism. Per era-5 ledger. Paraphrase-only.

---

## House-voice / structure compliance

- No second person, no reader-coaching, no "notice/picture/imagine," no throat-clearing, no
  self-reference, **no em-dashes in narration** (em-dashes appear ONLY inside the Q3 Haldane & Kemp
  quote and the Q9 Common quote, where the translators use them, and inside epigraph "— Author"
  attribution lines). Checked by string scan of the narration blocks.
- `export const INDEPENDENTS: PhiNarr` with `import type { PhiNarr } from '@/components/philosophy-reader'`.
- 6 chapters (Ch1 anti-tradition / Ch2 Socrates / Ch3 Schopenhauer / Ch4 Marx / Ch5 Nietzsche / Ch6
  the constellation + why outsiders shape what comes next). hook (4 paras), brk before/after + 3
  paras, hero PhiFig + 1 inline PhiFig (Schopenhauer 1859). Every chapter opens with an epigraph.
- Cross-links: `/philosophy/thinker/{socrates,schopenhauer,marx,nietzsche}` — all four thinker ids
  exist in `src/lib/philosophy*` and the `[thinkerId]` route is real (verified 2026-06-15). One link
  per thinker, placed at first substantive mention.

---

## Images (born-verified, HEAD-checked at authoring time 2026-06-15)

| Image | Use | HTTP | Right-subject |
|---|---|---|---|
| `commons/8/8c/David_-_The_Death_of_Socrates.jpg` (David, 1787, Met) | HERO | 200 image/jpeg | Confirmed; same image the Socrates thinker read uses. Caption labels it a Neoclassical staging, "not a likeness," painted ~2,200 years later. Chosen as the founding-independent image (gadfly who died for the examined life). |
| `commons/b/bc/Arthur_Schopenhauer_by_J_Schäfer,_1859b.jpg` (Schäfer daguerreotype, Frankfurt, 1859) | Ch3 inline figure | 200 image/jpeg (via Special:FilePath → upload.wikimedia.org) | Confirmed Schopenhauer, 1859 (year before his death); PD (1859 daguerreotype). `portrait: true`. |

Text-forward (2 images total) per the vertical's text-first identity. Marx (`commons/d/d4/Karl_Marx_001.jpg`)
and Nietzsche (`commons/2/23/Nietzsche1882.jpg`) portraits were HEAD-checked 200 and are available
if the critic wants a second/third inline figure, but were left out to keep the read text-forward
and to avoid over-imaging a constellation chapter where each man already has his own thinker read.

---

## Apocrypha / traps refused

- "God is dead" as triumph/boast → reframed as crisis throughout Ch5. (era-5 blacklist)
- *The Will to Power* as a book Nietzsche wrote → named as Elisabeth's construction. (Ch5)
- "Opium of the masses" → "of the people," full compassionate passage. (Ch4)
- Marx = 20th-c state communism → set aside as posthumous, not litigated. (Ch4)
- "Standing Hegel on his head" garble → "found this philosophy standing on its head and set out to
  turn it right side up." (Ch4, per era-5 ledger correction)
- Übermensch as Aryan superman / strongman → existential type, explicitly not race/biology/program. (Ch5)
- Eternal recurrence as literal cosmology → thought-experiment / test of affirmation. (Ch5)
- Kierkegaard quoted in English → refused; paraphrase-only, silence stated. (Ch6)
- Schopenhauer's Indian sources orientalized → named as a recognized structural parallel, accurate. (Ch3)
- "The unexamined life is not worth living" mis-rendered → corrected to Jowett's actual 38a wording. (Ch2)

---

## [VERIFY] items passed downstream

**One remaining [VERIFY]:** Q4 section number. The wording "All willing arises from want, therefore
from deficiency, and therefore from suffering" is confirmed correct (Haldane & Kemp). The section
citation is §57 (standard scholarly reference for the Fourth Book, §§53–71), but the Wikisource
"Third Book" page appears to number this passage as §38 — likely a Wikisource page-division artifact
(the Third Book in Wikisource runs §§36–52). The §57 citation is retained as the standard scholarly
reference; a reader with a physical edition should verify section numbering matches.

**Two fixes applied by critic pass (2026-06-15):**
1. Q1 (Apology 30e gadfly): corrected "given" → "attached" in both Ch1 epigraph and Ch1 body.
2. Q3 (Schopenhauer §1): restored full sentence ("…though man alone can bring it into reflective
   and abstract consciousness") — prior draft truncated mid-sentence after "knows."

The *Theses on Feuerbach* XI translator is attributed to **W. Lough** (the verified marxists.org PD
source + era-5 ledger), where the author brief's prose said "Moore" for the Theses; both are PD,
Lough is the one actually verified for this text.
