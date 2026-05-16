# Handoff — next civilization

This file bridges a cleared session. Read it, do the work, then **overwrite it** at the end with the next handoff.

## The per-civ workflow (agreed)

1. **Evaluate** the next civ → propose chapter count + event count. Target **10–15 events per chapter, don't force it** (thematic chapters lighter; war/political chapters heavier). All 8 categories balanced where the subject allows (rulers, wars, architecture, religion, science, trade, people, writing) — a modern political TL will run war/rulers-heavy and that is fine.
2. **Get the numbers OK'd by the user** before writing.
3. **Run the full pipeline to completion** (do not stop between steps):
   - Pull/expand `reference-data/{tlId}.json` to the agreed event count (preserve every existing v1 event ID verbatim — reuse the v1 objects, append new ones).
   - Write the narrative `narratives/{tlId}.md` (outline table at top, notes on names/contested-numbers, then chapters; apply `WRITING-RULES.md`).
   - Register `'{tlId}.md': '{tlId}'` in `scripts/parse-narratives.ts` `NARRATIVE_FILES`.
   - Curate `content/.event-links-{tlId}.json`, `.glossary-links-{tlId}.json`, `.cross-links-{tlId}.json` with a throwaway Python validator that regex-checks every matchText is a `\b`-bounded substring of its chapter's raw markdown; delete the script after the files validate. Cross-link target chapters must be real — grep the target TL's outline table.
   - Write `narratives/{tlId}.summaries.json` (8 bullets/chapter, informal voice, phrasing mirroring the narrative so links auto-inject).
   - Write `map-prompts/{tlId}.md` (global CRITICAL RULES + a per-TL orientation preamble + per-chapter lean spec: 5 sites, 4 region labels, one annotation arrow). Generate: `node --env-file=.env.local scripts/generate-maps.mjs {tlId}`; spot-audit the trickiest thumbnails; regen bad chapters with `--chapter N`; `node scripts/optimize-maps.mjs` (only the new TL has PNGs, so the whole-dir walk is effectively targeted — verify with `find public/maps -name '*.png'`).
   - 5-persona audit (manual procedure in `.claude/skills/audit-narrative.md`): spawn 4 general-purpose subagents A/B/D/E in parallel, each writes `audits/{tlId}-persona-{a,b,d,e}.md`, then merge to `audits/{tlId}.audit.md` (order D, E, A, B), delete the persona files. Apply must-fix factual corrections; record should-fix/deferred here.
   - `npm run parse` until 0 warnings for the TL (other TLs' pre-existing backward-cross-link warnings are noise — ignore them; filter on the tlId).
   - Flip `hasContent: true` in `src/lib/navigator-tls.ts`.
   - Commit + push (force-add the gitignored `content/.{event,glossary,cross}-links-{tlId}.json`, `reference-data/{tlId}.json`, `audits/{tlId}.audit.md`).
4. **Overwrite this HANDOFF.md** with the next civ's pre-approved plan + any new deferred items.

Gotchas: `content/`, `public/offline/`, `reference-data/` are gitignored — `git add -f` the curation/reference/audit files. The optimize-maps script **deletes** PNG originals (webp is the only copy). matchText is matched with a case-insensitive `\b(escaped)\b` regex against the **raw markdown** (so `**bold**` does not break a match, but `**` between two words does — keep matchText inside one bold span or in plain text; parentheses/trailing punctuation in matchText break it). Accented chars won't match a plain-ASCII matchText. `cd` in a Bash call persists for the session — use absolute paths or cd back. Re-run `npm run parse` after generating/optimizing maps so the offline manifest picks up the 15 maps (it shows "0 maps" if parsed before they exist).

## Just completed: chinese-revolution ✅ (shipped)

15 chapters, **184 events** (42 v1 IDs preserved + 142 new; war/rulers-heavy as the subject demands), 167 event-links, 70 glossary, 17 cross-links, 15 maps (lean-spec, spot-audited clean — Ch 1/6/9/15 verified, correct geography/orientation/labels, no hallucinated words — optimized to WebP, 9.0 MB → 1.4 MB). 5-persona audit done (`audits/chinese-revolution.audit.md`). `hasContent: true`. Parse: 0 warnings for the TL. Live on `main`.

Audit grades: Persona D = **12 STRONG, 3 GOOD (Ch 2, Ch 5, Ch 11), 0 WEAK/REWRITE** ("works as a whole, and unusually well"). Persona B = **3 STRONG**, 22 CHECK, 11 SOFT. Persona A = 64 findings (~4/ch, definition-gap calibrated). Persona E = 32 forward, 28 backward.

**Must-fixes applied (7):** (1) **Factual error** — Ch9 called Koxinga "a Communist pirate"; fixed to "a Ming-loyalist pirate, Koxinga" (he predates communism by ~280 yrs and was a Ming loyalist); added "(Meiji Japan Ch 7)" for the 1895 Taiwan cession; cross-link matchText retargeted to "Koxinga". (2) Ch4 Sun Yat-sen deathbed will quote was a non-standard rendering — corrected to "the revolution is not yet successful; comrades must still strive". (3) Ch6 garbled "the historian Sun Shuyun's predecessors" (Sun Shuyun named twice in one sentence) — cleaned to "earlier historians working from the Red Army's own records". (4) Ch1 "first republic in Asian history" → "first republic in a major continental Asian state (the short-lived Philippine Republic of 1899 narrowly preceded it)". (5) Ch14 Xi Jinping "in this exact wave" → "at the end of the 1960s" (he was sent down 1969, not the 1968 dispersal). (6) Cross-ref chapter corrections: Ch9 Modern India Ch3→**Ch5–6**; Ch12 famine contrast Modern India Ch5–6→**Ch4 & Ch7** (and the 65-word sentence split in two); Ch5 Meiji Ch8→**Meiji Ch7–8 + JEM Ch1** (cross-link retargeted to japanese-economic-miracle Ch1, where the Mukden Incident is actually narrated). (7) Newcomer glosses added inline: Atatürk ("the general who founded modern Turkey"), Kissinger ("President Nixon's national security adviser"), Hua Guofeng ("a colorless provincial administrator Mao had elevated late precisely because he threatened no faction").

### chinese-revolution deferred items (should-fix, none block shipping)

- **Persona D structural (polish, not rewrites — break longest sentences, demote one episode per crowded paragraph):** Ch 2 clique roster is an unretainable inventory (keep Zhang Zuolin, compress the rest to the *pattern*) and the closing Yan Fu sentence is a 40-word freight train burying the students handoff. Ch 5 "two outside shocks frame the decade" only delivers one shock cleanly, and the Manchukuo paragraph splits the chapter's spine (tighten to the decision it forces on Chiang). Ch 11 has a list-like institutional middle plateau before the gripping Anti-Rightist close. Ch 8 Bengal Famine parenthetical (50+ words) interrupts the chapter's hardest line ("did to the Nationalists' rural legitimacy what the war did to their armies") — make it its own sentence *after* the Henan point. Closing paragraphs of Ch 7, 10, 15 overstuffed (event-clearing crunch).
- **Persona A (64), highest-value still-open one-clause glosses:** "vanguard party", "struggle" as a verb (recurs book-wide, never defined), "unequal treaties" (leaned on heavily, never defined inline in *this* book — add a one-clause gloss on first use Ch 5), one-line Opium Wars reminder (Ch 1), "China hand" (Ch 8), "Asian Tigers" (Ch 14), how the Green Gang had the muscle to massacre a party (Ch 4), "revisionist"/"permanent revolution" (Ch 13), what "Mao Zedong Thought" actually says (Ch 8), the gold-yuan-reform mechanism (Ch 9), how a "coded literary feud"/the Hai Rui play works as a political attack (Ch 13/14), the "speak bitterness"/"struggle meeting" mechanism (Ch 9/10). Pick up opportunistically — the narrative's density means none badly break standalone readability.
- **Persona B (22 CHECK, 11 SOFT):** all standard well-attested figures the text already hedges (140,000 Labour Corps, ~3,000 May Fourth students, 86,000 Long March start, 550,000 rightists, 40k→1M party growth, ~17M sent-down youth, Tangshan ~250k, ~40% land redistributed). Spot-verify on a polish pass; not urgent. Three quote renderings are paraphrase-inside-quotes (Mao's "hurricane" Hunan-report image; Chiang's "disease of the skin/heart"; the "Enemy advances, we retreat" jingle) — on a polish pass, either de-quote or match a standard published translation.
- **Backward CCC (Persona E, 28) — surgical pass, not a rewrite; several are "free" because the reference TL already names the successor and just needs a forward pointer.** qing-dynasty Ch 13 handoff sentence ("the long revolution that ran through the Nationalists and the Communists") and the Manchukuo line → point to chinese-revolution Ch 1 / Ch 5; qing-dynasty Ch 7 (century of humiliation) → forward to chinese-revolution Ch 9 ("the Chinese people have stood up"); meiji-japan Ch 7 (Sun Yat-sen name-drop) and Ch 8 (the 1931/1937/1941 forecast) → chinese-revolution Ch 1 / Ch 5 / Ch 7–8; korean-modern Ch 2 (Chinese People's Volunteers; Nixon 1972) → chinese-revolution Ch 10 / Ch 15; modern-india Ch 4 (Bengal famine pairing), Ch 6 (1951 First Plan; *Hindi-Chini bhai-bhai*), Ch 7 (Green Revolution famine-contrast) → chinese-revolution Ch 8 / Ch 11 / Ch 12–13; ottoman-empire Ch 12 ("post-imperial China" named, unlinked; the Latin-script reform) → chinese-revolution Ch 1 / Ch 11 / Ch 14; japanese-economic-miracle Ch 1 (Mukden, Marco Polo Bridge), Ch 2 (Korean War third party; "Deng explicitly studied the Japanese and Korean models") → chinese-revolution Ch 5 / Ch 7 / Ch 10 / Ch 15. Full list in `audits/chinese-revolution.audit.md` Part 2 — **note: rise-of-china is the natural home for the JEM "Deng studied the East Asian model" backward links, so do that backward pass after rise-of-china ships, not now.**
- **Forward CCC (Persona E, 32) strongest still-open:** the Chinese Labour Corps vs India's ~1.5M WWI *combatants* contrast (Ch 2 — labor-for-a-seat vs colonial conscription, on-theme for the China/India fork); the Ottoman Latin-alphabet rupture vs Chinese script reform (Ch 11 — China simplified and added phonetics but *kept* the characters; Turkey discarded the script entirely, Ottoman Ch 12); India's 1951 Soviet-modeled First Plan alongside China's 1953 one (Ch 11 — the book's thesis in pure economic form); the contemporaneous Korean communist founding-myth fabrication as a parallel to the Long March legend (Ch 6, Korean Modern Ch 2).

## NEXT CIV: rise-of-china — PLAN PROPOSED (confirm numbers before writing)

The final book in the Chinese Dynasties chain and the explicit sequel chinese-revolution hands off to ("Deng Xiaoping, twice purged, returned within two years and set China on the road of market reform, single-party rule, and accelerating power that is the subject of the next book in this chain"; the Xi Jinping sent-down-youth thread; the Four Modernizations blueprint). Present-day endpoint — no successor TL.

- v1 source: `~/projects/personal/timeline/src/data/rise-of-china.json` (42 events, 5 spans, range 1978–2025). Expand to the target below, preserving every v1 event ID.
- navigator-tls.ts entry exists: `rise-of-china`, **1976–2024**, region asia, subtitle "Deng's reforms to superpower", **no hasContent yet** (it's on line 87, immediately after chinese-revolution).
- **Proposed: 13 chapters, ~155 events** (~12/ch, the qing/chinese-revolution density standard). Extremely dense, recent, and politically live on every axis (Tiananmen 1989, Tibet/Xinjiang, Taiwan, Hong Kong, the trade war, COVID/zero-COVID, Xi's term-limit removal). Apply the WRITING-RULES contested-claims rule aggressively — the historiography is hostile from Beijing, the diaspora, and the West simultaneously, and many figures (Tiananmen death toll, Xinjiang detention numbers, COVID origin/toll, GDP statistics) have wide, politically-weaponized error bars. **Note:** the user chose the *heavier* option (15 ch) for chinese-revolution over the proposed 13 — offer 13 vs a heavier ~15 (splitting the Xi era and the Hong Kong/Taiwan/US-rivalry material) when confirming.

Proposed chapter outline (confirm/adjust with the user before writing):

| # | Chapter | Era |
|---|---|---|
| 1 | Picking Up the Pieces | 1976–1978 |
| 2 | Reform and Opening Begins | 1978–1984 |
| 3 | The Urban Reforms and the First Strains | 1984–1988 |
| 4 | Tiananmen 1989 | 1989 |
| 5 | The Southern Tour and the Capitalist Turn | 1990–1997 |
| 6 | Joining the World | 1997–2002 |
| 7 | The Factory of the World | 2002–2008 |
| 8 | The Olympics and the Global Crisis | 2008 |
| 9 | The Disaffected Decade and the Bo Xilai Affair | 2009–2012 |
| 10 | Xi Jinping Takes Power | 2012–2017 |
| 11 | Belt and Road and the Tech Ambition | 2013–2019 |
| 12 | Hong Kong, Taiwan, and the Wolf Warriors | 2014–2020 |
| 13 | COVID and the New Era | 2019–2024 |

Cross-link candidates: chinese-revolution (the entire Maoist inheritance Deng repudiates; chinese-revolution Ch 15 hands directly into Ch 1 here; the Four Modernizations, the lost decades), qing-dynasty (the century-of-humiliation grievance now operationalized as great-power return, qing Ch 7/13), japanese-economic-miracle (the East Asian developmental-state model Deng "explicitly studied" — JEM Ch 2 and Ch 8 name post-1978 China by name; this is the reciprocal backward-CCC home), korean-modern (the parallel/divergent developmental state; Miracle on the Han, korean-modern Ch 3), modern-india (the book's recurring democracy-vs-one-party comparison at its 21st-century climax — the two Asian giants' diverging growth and political trajectories, the 1962 legacy, the present rivalry; modern-india Ch 10–15), meiji-japan (the original Asian modernization template). Successor: none — this is the present-day end of the chain.

## Remaining unwritten civs (after rise-of-china)

khmer-empire, dai-viet, majapahit, al-andalus, kievan-rus, scientific-revolution, enlightenment, industrial-revolution, russian-empire, soviet-union, mississippian-culture, early-american-republic, antebellum-america, reconstruction, roaring-twenties, civil-rights-era. (Chain order in `reference-data/tl-chains.ts`.)
