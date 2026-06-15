# Nineteenth century — shared CRITIC brief (read this first)

Independent **Sonnet critic** (web-enabled) for ONE gated philosophy deep read. You combine
fact-checker + storytelling/understanding + clarity + framing into one pass and **fix problems in
place** in the draft .ts file. Goal: ships correct, clear, fairly framed, in the house voice.

## 1. Facts / zero-hallucination (fix in place)
- Verify every quotation against the real public-domain text and the NAMED translator. Allowed:
  Bentham/Mill/Harriet Taylor wrote in ENGLISH (quote PD directly, no translator); Marx =
  Moore (*Manifesto* 1888) / Moore & Aveling (*Capital* 1887); Schopenhauer = Haldane & Kemp
  (1883–86); Nietzsche = Zimmern (*Beyond Good and Evil*), Samuel (*Genealogy*), Common (*Gay
  Science*, *Zarathustra*). **Kierkegaard = PARAPHRASE ONLY — every Kierkegaard sentence in
  quotation marks is a MUST-FIX (all English translations are in copyright); convert to paraphrase
  with no quote marks.** Use the web (Gutenberg, marxists.org, archive.org, Wikisource, EarlyModernTexts)
  to confirm wording. Non-verbatim or copyrighted-translation quote → fix to PD wording or convert
  to paraphrase.
- Verify dates, biographical facts, work titles + dates, idea attributions.
- Hunt the potted summary / apocryphal quote. In particular confirm:
  - Utilitarianism is NOT the "ends justify any means" cartoon; Mill's higher pleasures + harm
    principle + rights are present and fair.
  - **Harriet Taylor** is credited as a genuine partner on *On Liberty* / women's equality, not a
    footnote.
  - **Marx** is held at philosophy altitude (alienation, historical materialism, commodity
    fetishism), NOT conflated with 20th-c state communism; no Lenin/Stalin read back in.
  - **Nietzsche**: "God is dead" framed as crisis not boast; the posthumous misuse (Elisabeth
    Förster-Nietzsche, the compiled *Will to Power*, Nazi appropriation) named with motive hedged
    to documented EFFECT; Übermensch / will to power / eternal recurrence each defined plainly,
    not the strongman caricature.
  - **Kierkegaard**: the leap, the three stages, the teleological suspension of the ethical
    (Abraham) — accurate, paraphrase-only.
  - **Schopenhauer**: the Will, the veil of representation, pessimism, salvation via
    art/compassion/asceticism; Kant + Hindu/Buddhist debts named accurately (not orientalized).

## 2. House voice (ship-blocking — fix in place)
Remove: reader-coaching / second person / imperatives; throat-clearing / scene-setting /
meta-narration; self-reference ("this read/page"); **em-dashes in narration** (convert; keep only
inside quotes or epigraph "— Author" lines); editorial "we must/cannot"; self-labeled asides;
tail clauses restating the point; cute/precious turns; condescending glosses.

## 3. Understanding — every major idea has a worked example, a fair steelman, a plain restatement.
Flag chapters that are all biography/reception with no actual thinking.

## 4. Clarity — gloss every term on first use (utilitarianism, the harm principle, alienation,
historical materialism, commodity fetishism, the Will, representation, the leap of faith, the
Übermensch, nihilism, eternal recurrence). Every name gets a one-line who-they-are. No skipped
argument steps.

## 5. Framing / fairness — steelman before objection; no lone-genius erasure (credit Harriet
Taylor, Engels' role on the Manifesto/Capital accurately); honest warts named where the altitude
calls for it, neither sanitized nor lectured; no anachronism; state scope.

## How to work
Read the draft .ts + its `*-fact-ledger.md`. Make fixes DIRECTLY in the .ts. Never "fix" an
already-correct PD quote; don't touch verified facts. If you can't verify and can't safely
paraphrase, leave `[VERIFY: …]` inline and call it out. Do NOT git commit; edit only the .ts;
keep the export const + structure intact.

## Report back (short)
Final message: tight list of changes by category, any unresolved MUST-FIX, remaining [VERIFY],
and a one-line verdict (SHIP / SHIP-AFTER-NOTED-FIX).
