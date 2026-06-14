# Nicomachean Ethics WORK read — STORYTELLING + CLARITY + COMPREHENSIVENESS gate

Gate: storytelling + clarity + comprehension (SHIP-BLOCKING). A separate critic owns facts/quotes.
Draft: `audits/philosophy-pipeline/nicomachean-work.read.ts`
Bar (recently cleaned, match its restraint): `src/app/philosophy/work/_reads/republic.ts`
Voice rule (hard gate): `memory/feedback_philosophy_voice_plain.md`

VERDICT UP FRONT: **REVISE.** The argument, structure, clarity, and Greek-term teaching are all excellent — this is a genuinely strong guide to the *Ethics*. But it fails the hard voice gate on two counts that are BLOCKERS, not polish: ~120 narration em-dashes (bar = essentially zero; the cleaned Republic has 12 total, almost all in attribution lines), and a recurring cluster of second-person coaching + meta-narration/throat-clearing that the cleaned Republic bar carries ZERO of. Both are fixable without touching a single quote, fact, or structural move.

---

## AXIS 1 — VOICE (hard blockers)

### 1. [BLOCKER] EM-DASH OVERUSE — corpus-wide, ~120 narration em-dashes
**Location:** the whole draft. Total em-dashes = 128; 8 are legitimate (the `— Aristotle, ...` attribution lines); the remaining ~120 are in running narration, labels, and the throughline/hook/brk. None of the offending em-dashes sit inside a Ross quotation (the quoted passages contain none), so every one of them is a narration em-dash and in scope.
**Bar comparison:** the cleaned Republic (`republic.ts`) has 12 em-dashes total for an 8-chapter read of the same shape — almost all in attributions. This draft has ~10× the narration em-dashes the gate permits.
**Problem:** the voice rule is explicit: "In running narration the default is NO em-dash… NEVER use an em-dash to introduce a definition (use parentheses). A whole read should have at most a tiny handful, if any." This is now a HARD GATE, not polish.
**Concrete rewrite (apply the standard substitutions across all ~120; samples below):**
- Throughline L26: "what is the good life — what is a human being ultimately *for* — and how" → use commas or parentheses: "what is the good life, what a human being is ultimately *for*, and how". And "by contemplation, the activity of the most god-like part of us. One thing to hold throughout:" — the later "— at the very top, in a verdict that startles everyone who gets there — by contemplation" → "and, at the very top, in a verdict that startles everyone who gets there, by contemplation".
- Definition em-dashes → parentheses. L65: "the Greek *ergon*, a thing's characteristic work or job (we'll use \"function\")" is already fine; but L93 "the Greek is *hexis* (HEK-sis), and \"habit\" undersells it: a hexis is not a mindless rut like nail-biting but an *active, settled state* — a trained and stable readiness…" → replace that em-dash with a comma.
- Appositive em-dash pairs → commas/parentheses. L156: "an entire book to itself — Book V, the longest single treatment of any virtue — because it's the most complex" → "an entire book to itself (Book V, the longest single treatment of any virtue) because it's the most complex".
- "Reason → result" em-dashes → period/semicolon/colon. L62: "the life of a grazing animal — fit for cattle, not for a creature that can reason" → "the life of a grazing animal, fit for cattle, not for a creature that can reason."
- The beforeLabel/afterLabel (L38–39) each carry one: "To be good is to *know* the good — grasp it, and you will automatically be good" → "To be good is to *know* the good; grasp it, and you will automatically be good." Same colon/semicolon fix on the afterLabel.
The substitution menu (period · comma · colon · semicolon · parentheses; parentheses for any definition) clears all ~120 without altering meaning, structure, or any quoted text. Em-dashes inside the eight `— Aristotle` attributions stay.

### 2. [BLOCKER] TALKING AT THE READER — second-person coaching + meta-narration
The cleaned Republic bar has none of these. They read as a narrator coaching the reader through their reactions, which the rule names as "the #1 offense." Each must be converted to plain statement (REVISE, not polish). Exact locations:

- **L26 (throughline):** "One thing to hold throughout:" → cut the framing, state it: "This is not a polished book. It is a set of lecture notes…".
- **L56 (Ch1 b1):** "Find that, and you've found what a human life is ultimately for." → "That highest good is what a human life is ultimately for."
- **L59 (Ch1 b2):** "Notice that even Ross's gloss carries the right sense:" → "Even Ross's gloss carries the right sense:".
- **L68 (Ch1 b5):** "so it's worth turning over slowly." → cut; just proceed: "The human good is not a *feeling* and not a *prize at the end*…". ("worth turning over slowly" is throat-clearing.)
- **L90 (Ch2 b3):** TWO offenders in one block. "Here a famous warning is owed, because…" → "The single most-quoted line attributed to this book was never in it." And "You have almost certainly seen it, on a poster or in a graduation speech:" → "It turns up on posters and in graduation speeches:". (The Durant debunk itself is great and stays — only the coaching frame goes.)
- **L96 (Ch2 b5):** "And now the part everyone half-remembers and usually mangles: the **doctrine of the mean**." — "the part everyone half-remembers and usually mangles" is meta-narration about the reader. → "Now the **doctrine of the mean**, the part of the book most often half-remembered and mangled." (Keeps the true claim, drops the "everyone" wink.) Then in the same block: "Unpack it through a case." → cut; lead straight into "Each virtue of character sits *between* two vices…".
- **L143 (Ch4 b4):** "It is worth giving the portrait straight, in Aristotle's own register, because sanding it down would be a kind of lie about him." → state it plainly: "The portrait deserves to be given straight, in Aristotle's own register; sanding it down would misrepresent him." And the block's closing "a possibility our egalitarian instincts find hard to sit with, and worth sitting with anyway." → drop "and worth sitting with anyway" (reader-coaching tag); end on the substantive clause.
- **L168 (Ch5 b5):** "Read it closely: it's about *acting*, not just knowing…" → "The definition is about *acting*, not just knowing…".
- **L171 (Ch5 b6):** "Hold onto sophia, because it's the seed of the work's final, startling verdict." → "Sophia is the seed of the work's final, startling verdict."
- **L237 (Ch8 b4):** "It's important to be honest that this verdict creates a real tension…" → "This verdict creates a real tension…" (drop the self-labeled honesty frame; the rule cites "to be honest" by name).

Note on second person generally: plain "you" is NOT banned — the cleaned Republic bar uses it 42 times. The blockers above are specifically the *imperatives* ("Notice", "Read it closely", "Hold onto", "Unpack it", "Find that") and *meta/throat-clearing* frames, not ordinary illustrative "you." Leave the illustrative second person (e.g. "you take the medicine to get healthy") alone.

---

## AXIS 2 — STORYTELLING (strong; minor flags)

What works (keep): the through-line is genuinely carried as a guide to living well. The "becoming good is like learning an instrument" spine in the hook is excellent and recurs with discipline. The break block correctly stages the real shift (know-the-good → do-the-good, guided by developed judgment) against both Plato/Socrates and ordinary Greek virtue-lists. The function argument (Ch1), habit→character (Ch2), the mean (Ch2), responsibility (Ch3), the virtue catalogue (Ch4), justice + phronesis (Ch5), akrasia (Ch6), the three friendships + "another self" (Ch7), and the contemplation summit with its honestly-flagged tension (Ch8) all land in sequence with clear causal hand-offs ("Hold onto sophia… it won't be practical wisdom… it will be contemplation" threads Ch5→Ch8 well). The Durant debunk and the megalopsychia "feel the distance, it's an aristocratic ideal" honesty are highlights. The close (hand-off to *Politics*, "you become good inside a good community, or not at all") is a strong landing.

- **3. [POLISH] Ch4 b2 social-virtues run risks going listy.** "There are social virtues too: **friendliness**… **truthfulness**… and **wit**…" is the one stretch that reads as a list rather than a story. It's acceptable (the catalogue chapter earns some enumeration), but consider one connective beat so it doesn't read as a bullet-list flattened into prose. Not blocking.
- **4. [POLISH] Ch6 b4 pleasure aside.** The pivot from akrasia to "The same book also opens Aristotle's treatment of **pleasure**…" is a touch abrupt as a tacked-on paragraph tail. The forward-reference to Book X is good; consider a half-sentence of why pleasure surfaces here. Not blocking.

---

## AXIS 3 — CLARITY / COMPREHENSION (excellent; passes)

- **All five required hard-Greek terms carry pronunciation glosses on first use:** eudaimonia (you-dy-MOH-nee-ah), phronesis (fro-NEE-sis), akrasia (uh-KRAY-zee-uh), philia (fih-LEE-uh), theoria (thay-oh-REE-uh). Plus aretē (uh-REH-tay), hexis (HEK-sis), prohairesis (pro-HY-reh-sis), sophia (so-FEE-uh), andreia, sōphrosynē, megalopsychia, epieikeia — all glossed. This is model behavior; no undefined hard term found.
- **eudaimonia "happiness"-trap handled correctly and concretely** (Ch1 b2): the feeling-vs-flourishing warning, the flourishing-plant image, "A cheerful fool is not flourishing; a person living with great excellence through real hardship is." A newcomer will not mistake it for a mood. Good.
- **The doctrine of the mean is taught concretely AND the "moderation in all things" misread is explicitly killed** (Ch2 b6): courage between cowardice and rashness, generosity between stinginess and extravagance, then the three guards (relative-to-us, fixed by practical wisdom, and "some actions have no mean at all" with the murder/adultery/theft list). The line "'Everything in moderation' is a caricature" directly satisfies the gate's required check. Strong.
- **Function argument, akrasia (have-vs-use knowledge), three friendships, contemplation** are each built for a zero-prior-knowledge reader with inline definitions and worked examples. No spot found where a newcomer gets lost.
- One small comprehension note, not blocking: **Ch5 b3 geometric/arithmetic proportion** is correctly held to ordinary terms with the Greek labels parenthetical — good restraint; leave as is.

---

## SUMMARY OF REQUIRED CHANGES (all BLOCKERS, all quote-safe / structure-safe)
1. Convert ~120 narration em-dashes to period/comma/colon/semicolon/parentheses (parentheses for any definition); leave the 8 attribution em-dashes and anything inside Ross quotes untouched. Target: a tiny handful, like the cleaned Republic bar.
2. Strip the ~11 coaching/meta frames listed in Finding 2 (L26, 56, 59, 68, 90×2, 96×2, 143×2, 168, 171, 237), converting each to plain statement. Keep ordinary illustrative "you."

POLISH (optional, not ship-blocking): Findings 3 and 4.

## VERDICT: REVISE
