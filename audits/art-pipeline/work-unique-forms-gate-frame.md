# GATE — Comprehensiveness + Framing/Fairness

**Work:** Umberto Boccioni, *Unique Forms of Continuity in Space* (1913), sculpture
**Draft:** `audits/art-pipeline/work-unique-forms-draft.md`
**Fact pack:** `audits/art-pipeline/work-unique-forms-factpack.md`
**Gate:** web-enabled. Lens 1 = comprehensiveness (what's missing). Lens 2 = framing/fairness.
**Verdict:** mostly strong. **One [BLOCKER]** (a factual conflict the gate cannot resolve and the prose
asserts confidently), **three [FIX]**, **four [NICE]**. The big framing asks are largely already MET — see below.

---

## SUMMARY OF WHAT'S ALREADY GOOD (so it isn't re-flagged)

The prompt's four comprehensiveness probes and three framing probes are mostly handled:

- **Technical Manifesto of Futurist Sculpture (1912)** — present, dated 11 April 1912, quoted, and made the
  structural backbone of the "looking" reading. COVERED.
- **Plaster-vs-posthumous-bronze story** — present and excellent; it's the spine of two whole sections, with the
  cast-of-a-cast wrinkle and MoMA's "1931 or 1934" hedge surfaced honestly. COVERED.
- **Euro-coin afterlife** — present (selected late 1990s, circulation 2002, 20-cent). COVERED. Web-confirmed:
  selected 1998, in circulation from 2002.
- **Striding-figure-as-pure-motion** — present and central ("pure forward force," "plastic dynamism," "the wake of
  the stride made solid"). COVERED.
- **Framing 1(a) — the war/Fascism irony** — LARGELY MET. The "death" section names that Futurism glorified war,
  quotes the "world's only hygiene" line, and lands the bitter irony (machine-worshipper killed by a horse) without
  anachronism. See [FIX-1] for the one piece that's genuinely missing (Marinetti→Fascism).
- **Framing 1(c) — scoped superlatives** — MOSTLY MET. The draft already scopes to *Futurist* sculpture ("the most
  reproduced Futurist sculpture") rather than claiming "most famous artwork" or "icon of modern sculpture" in the
  absolute. See [FIX-3] for the two phrases that still over-reach.

---

## [BLOCKER]

### [BLOCKER-1] — Met cast year: draft says **1950**, but Wikipedia (and the standard literature) say **1949**. Gate could not independently confirm 1950.

The draft's FACT LEDGER and prose assert the Met bronze was **"cast 1950"** — stated four times (ledger line,
PART A `heroCredit`, `provenance` 1950 entry, and the afterlife prose "cast in **1950**"). The ledger claims this
"Supersedes the fact pack's generic '1949 Met'… corrected against the live Met API."

The gate cannot verify this. The live Met page (`metmuseum.org/art/collection/search/485540`) returned **HTTP 429**
on fetch (same rate-limit the fact pack hit). Every *independently reachable* source the gate checked says **1949**,
not 1950:

- Wikipedia: "two bronze casts were made in 1949, one of which is displayed at the Metropolitan Museum of Art."
  The Met cast is dated **1949**.
- Multiple secondary sources (search-corroborated) repeat the 1949 Met / 1949 Museo del Novecento pair.

So we have a fact the prose states with full confidence (1950, "corrected against the live Met API") that
**conflicts with every source the gate could actually open**, sourced to a page the gate could not open to confirm.
That is precisely the "documented vs. asserted" terrain this pipeline exists to catch. A confidently-stated cast
year that may be off by a year, on the very cast that is the hero image, is ship-blocking until reconciled.

**Fix (one of):**
1. The coordinator re-fetches the live Met record (object 485540) when not rate-limited and **pastes the exact
   `date`/`objectDate` field** into the fact ledger as the citation. If it genuinely reads "1913, cast 1950," keep
   1950 AND add a ledger note that Wikipedia says 1949 (so the discrepancy is documented, not silently chosen).
   The Met API JSON endpoint `https://collectionapi.metmuseum.org/public/collection/v1/objects/485540` is the
   clean way to read `objectDate` without the rate-limited HTML page.
2. If the Met record cannot be re-confirmed before ship, **revert to 1949** (the sourceable consensus) in all four
   places, OR soften to **"cast around mid-century (1949–1950)"** so the prose doesn't assert an unverifiable
   single year.

Either way, do not ship a confident "1950… corrected against the live Met API" that the gate's reachable sources
all contradict and that no reachable source confirms.

---

## [FIX]

### [FIX-1] — Comprehensiveness + Framing 1(a): the Marinetti→Fascism strand is named in the brief but MISSING from the draft.

The prompt's framing ask 1(a) has three parts: (i) Futurism glorified war/the machine, (ii) **Marinetti later
co-founded Fascism**, (iii) Boccioni died in that war. The draft nails (i) and (iii). It **never mentions (ii)** —
Marinetti's later founding role in the Italian Fascist movement. Web-confirmed: Marinetti co-authored the 1919
Fascist manifesto, was an early Mussolini supporter, and "Second" Futurism flourished under Fascism. This is the
single most important missing piece of context for the movement, and the gate brief explicitly asked for it.

It must be added **without anachronism** — Boccioni died in 1916, three years before the Fascist movement existed,
so the prose must NOT taint Boccioni or the 1913 sculpture with Fascism. The honest framing is forward-looking and
about the *movement's afterlife*, not the man or the work.

**Suggested add** — one sentence at the end of the first paragraph of `UnqDeath`, or as a short coda. Exact text:

> Boccioni did not live to see where the movement went: a few years after his death, its founder Marinetti would
> help launch Italian Fascism and tie Futurism to Mussolini&rsquo;s regime. Boccioni, dead in 1916, had no part in
> that &mdash; but the worship of war and force that ran through Futurism from the first manifesto did not stay on
> the page.

(Adjust house style: em dashes as `&mdash;`, per the draft's no-`—` rule.)

### [FIX-2] — Framing 1(a), anachronism guard: "the world's only hygiene" quote is attributed slightly loosely.

`UnqDeath` says: *"Marinetti's manifesto had called it 'the world's only hygiene.'"* The actual line is **"We will
glorify war — the world's only hygiene — militarism, patriotism…"** (Founding Manifesto, 1909). Web-verified.
"It" (war) is correct, but the draft's compression risks reading as if "the world's only hygiene" were a standalone
slogan rather than one clause in the war-glorification line. Minor, but this is a gated quote surface.

**Fix:** tighten the attribution so the antecedent is unambiguous. Exact text:

> Marinetti&rsquo;s founding manifesto had promised to &ldquo;glorify war &mdash; the world&rsquo;s only
> hygiene,&rdquo; and when the First World War came, several of the Futurists, Boccioni among them, volunteered.

This keeps the verbatim fragment, fixes the antecedent, and is corroborated by the manifesto text.

### [FIX-3] — Framing 1(c): two superlatives still over-reach; scope them.

The draft scopes well in most places ("the most reproduced *Futurist* sculpture" — defensible, web-corroborated as a
masterpiece/icon *of Futurism*). But two claims reach past what sources support:

- **PART B `UnqAfterlife`, final paragraph:** *"ended up as one of the most widely held images of the twentieth
  century."* This is a hard quantitative claim (it leans on the coin's circulation) that no source states. It's
  plausible *as a coin* but "most widely held images of the twentieth century" is unscoped hyperbole.
  **Fix:** scope to the coin mechanism, exact text:
  > ended up, by way of the coin, as one of the most widely circulated images of any twentieth-century artwork.

- **PART B `UnqDeath`, third paragraph:** *"the most important sculpture of his career."* Defensible (it's his
  best-known sculpture by far), but stated as bare fact. Sources call it his *masterpiece* / *the icon of Futurist
  sculpture* — scope it that way rather than asserting a ranking in the app's own voice.
  **Fix:** *"the sculpture that would become his masterpiece"* or *"his best-known sculpture."*

Web note for the coordinator: the "masterpiece / icon of Futurism / icon of the avant-garde" framing IS
well-sourced (Tate, ACCA, multiple references) — so an *icon-of-Futurism* claim is safe; an *icon-of-modern-sculpture*
or *most-famous-artwork* claim would not be. The draft currently avoids the latter; keep it that way.

---

## [NICE]

### [NICE-1] — Comprehensiveness: name the foundry (optional, adds provenance texture).
Web sources attribute the 1931/1934 cast to the **Gaetano Chiurazzi Foundry, Rome**. Not required, but a named
foundry strengthens the "who actually cast it" honesty the section is built around. Verify against the museum record
before adding (gate-1 standard) — do not assert from a single secondary source.

### [NICE-2] — Comprehensiveness: the "wax" claim is handled, but the strongest counter is unstated.
`UnqMaking` rebuts the wax story with "the strong consensus, including the original that actually survives, is
plaster." Good. One web wrinkle worth knowing: a few reputable-looking sources (and the Wikipedia *Boccioni* bio
sentence) DO say "in wax," so this isn't a fringe error — it's a real minority that traces to Boccioni's broader
1913 wax/plaster practice. The draft's framing ("minority story") is fair and need not change; flagging only so the
coordinator isn't surprised to see "wax" in respectable sources.

### [NICE-3] — Framing: the Kröller-Müller and Cosenza casts are in the fact pack, dropped from the draft.
The draft's `location` field lists MoMA/Met/Tate/Museo del Novecento "and elsewhere," which is honest. The fact
pack also documents Kröller-Müller (Otterlo) and a 2014 Cosenza cast. Not a gap (the "and elsewhere" covers it),
but if the coordinator wants the location line fuller, those two are sourced.

### [NICE-4] — Framing/fairness: the "death as grim joke" tone, watch the dignity line.
`UnqDeath` calls the death "a way that reads almost as a grim joke at the movement's expense." The irony is real and
fair game (it's the whole point of the section), and "at the *movement's* expense" correctly aims it at the ideology,
not the man. This is on the right side of the line — flagging only to confirm the gate considered it and judged it
fair, not gratuitous. No change needed; if anything, "grim joke at the movement's expense" is the better-aimed of
the two irony beats (the other, "a grim joke," is slightly closer to mocking a young man's death — consider whether
the doubled "joke" framing is one beat too many).

---

## GENIUS-MYTH CHECK (framing 1(b)) — CLEAN

The brief flagged genius-myth inflation as a risk. The draft does NOT inflate Boccioni into a lone genius. It
credits Marinetti as founder/impresario, frames the work as theory-then-object (manifesto first), attributes the
Nike/Rodin lineage to "later scholars" rather than to Boccioni's stated intent (correctly, per the fact pack), and
the whole afterlife arc is anti-heroic (he never even saw it in bronze; museums and a mint, not the artist, made the
famous versions). No "ahead of his time" / "singular vision" inflation. PASS.

---

## NET

- **1 [BLOCKER]:** Met cast year 1950-vs-1949 conflict (asserted confidently, unconfirmable by the gate, contradicted
  by every reachable source) — reconcile via the Met collection API before ship.
- **3 [FIX]:** add Marinetti→Fascism (no anachronism); tighten the "only hygiene" quote antecedent; scope two
  superlatives.
- **4 [NICE]:** foundry name; wax-claim context; extra cast locations; dignity-of-death tone check.
- Genius-myth: clean. The core framing irony (war/machine/horse) and the comprehensiveness asks
  (1912 manifesto, plaster-vs-bronze, coin, pure-motion) are already well handled.
