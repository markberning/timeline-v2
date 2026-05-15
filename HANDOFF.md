# Handoff — next civilization

This file bridges a cleared session. Read it, do the work, then **overwrite it** at the end with the next handoff.

## The per-civ workflow (agreed)

1. **Evaluate** the next civ → propose chapter count + event count. Target **10–15 events per chapter, don't force it** (thematic chapters lighter; war/political chapters heavier). All 8 categories balanced (rulers, wars, architecture, religion, science, trade, people, writing).
2. **Get the numbers OK'd by the user** before writing.
3. **Run the full pipeline to completion** (do not stop between steps):
   - Pull/expand `reference-data/{tlId}.json` to the agreed event count (preserve any existing v1 event IDs).
   - Write the narrative `narratives/{tlId}.md` (outline table at top, then chapters; apply `WRITING-RULES.md`).
   - Register `'{tlId}.md': '{tlId}'` in `scripts/parse-narratives.ts` `NARRATIVE_FILES`.
   - Curate `content/.event-links-{tlId}.json` (validate every matchText is a word-boundary substring of its chapter — build with a throwaway validator script, then delete the script), `.glossary-links-{tlId}.json`, `.cross-links-{tlId}.json`.
   - Write `narratives/{tlId}.summaries.json` (8 bullets/chapter).
   - Write `map-prompts/{tlId}.md`; generate maps: `node --env-file=.env.local scripts/generate-maps.mjs {tlId}`; audit thumbnails; regen bad chapters with `--chapter N`; `node scripts/optimize-maps.mjs`.
   - 5-persona audit (manual procedure in `.claude/skills/audit-narrative.md` — spawn 4 general-purpose subagents A/B/D/E in parallel, each writes `audits/{tlId}-persona-{a,b,d,e}.md`, then merge to `audits/{tlId}.audit.md` (order D, E, A, B), delete the persona files). Apply must-fix factual corrections; record should-fix/deferred in this handoff.
   - `npm run parse` until 0 warnings for the TL.
   - Flip `hasContent: true` in `src/lib/navigator-tls.ts`.
   - Commit + push (force-add the gitignored `content/.{event,glossary,cross}-links-{tlId}.json` and `reference-data/{tlId}.json` and `audits/{tlId}.audit.md`).
4. **Overwrite this HANDOFF.md** with the next civ's pre-approved plan + any new deferred items.

Gotchas: `content/`, `public/offline/`, `reference-data/` are gitignored — `git add -f` the curation/reference/audit files. The optimize-maps script **deletes** PNG originals (webp is the only copy). matchText is matched with a case-insensitive `\b(escaped)\b` regex against the **raw markdown** (so `**bold**` does not break a match, but parentheses/trailing punctuation in matchText do). Keep matchText plain ASCII with word-character ends; accented chars (Potosí) won't match a plain-ASCII matchText. `cd` in a Bash call persists for the session — use absolute paths or cd back.

## Just completed: qing-dynasty ✅ (shipped)

13 chapters, **157 events** (expanded from v1's 42, all 42 v1 IDs preserved), 146 event-links, 57 glossary, 9 cross-links, 13 maps (lean-spec, all clean on audit), 5-persona audit done (`audits/qing-dynasty.audit.md`). `hasContent: true`. Live on `main`.

Audit grades: Persona D = **10 STRONG, 2 GOOD (Ch 2, Ch 9), 0 WEAK/REWRITE**. Persona B = **0 STRONG**, 14 CHECK, 7 SOFT (all standard well-attested figures; nothing fabricated). Persona A = 69 findings. Persona E = 37 forward, 24 backward.

**4 must-fixes applied:** (1) Ch13 garbled "a humiliation Chapter into the next book" → "...that carries into the next book"; (2) Ch2 Vienna cross-ref Ottoman Ch 9 → **Ch 8** (narrative + cross-link JSON); (3) Ch13 first-emperor cross-ref Qin Ch 5 → **Ch 2** (narrative + cross-link JSON); (4) Ch1 "Manchu" etymology reconciled with ming-dynasty Ch8 (now: leading guess is a Buddhist title / Manjushri, contested) so the two TLs no longer contradict.

### qing-dynasty deferred items (should-fix, not yet done — none block shipping)

- **Ch 2 (Kangxi) graded GOOD, not STRONG (Persona D).** The post-Nerchinsk material flattens into an accomplishments list (Sacred Edict / Southern Tours / dictionary / tax freeze) and the chapter lacks its own ending — it just stops before Ch 3. Fix: give the back half a throughline (the legitimacy-of-a-foreign-dynasty thread already running in Ch 1/3) and a forward-leaning close.
- **Ch 9 graded GOOD (Persona D).** Tries to do two jobs (Second Opium War + Tongzhi Restoration) and crushes the multi-million-death Muslim revolts into a single clause in a rushed Restoration half. Fix: either give the Restoration/Muslim-revolts material more room or tighten the chapter's claim to one spine.
- **Repetitive treaty-enumeration template (Persona D).** Ch 7/9/11/12 all use the same four-clause anaphoric "China ceded… China opened… China paid…" rhythm; recognizable by the second half. Vary the sentence structure across the four treaty passages.
- **Persona A (69 findings), highest-value:** undefined cross-civ anchors used without a one-clause gloss (Aurangzeb/Mughals, the Ottomans at Vienna, Potosí, the partition of Africa, the erasure of Poland, Huxley/Spencer, "the Enlightenment," "the English Civil War"); the *tributary system* is invoked (Ch 4, 9, 10, 11) but never actually defined; compressed mechanisms stated as result not process (how the silver drain doubles a copper-earning peasant's tax; how Russia took 600,000 sq mi "without fighting"; how provinces "declared independence" bloodlessly). Pick up opportunistically — none break standalone readability badly.
- **Persona B CHECK items (14):** all standard canonical figures (Kangxi Dictionary 47,000 characters, Siku Quanshu 36,000 volumes, Lin Zexu ~1,000 tons, Russia 600,000 sq mi, Hundred Days 103 days, legation siege 55 days, Huanghuagang 72 martyrs). Spot-verify on a polish pass; not urgent, the narrative already hedges most.
- **Backward CCC pass (Persona E, 24 findings) — do as a surgical pass, not a rewrite.** Highest-value, several are "free" because the reference TL *already names the Qing* and just needs a pointer: **mongol-empire Ch 9** and **ottoman-empire Ch 9** cross-civ checks already explicitly name the Qing (dyarchy / decayed hereditary military caste) but predate this TL — add pointers. **qin-dynasty Ch 2** names "the Qing" as the endpoint of the 2,000-year imperial/exam tradition that qing Ch 12 abolishes — wire the bookend. **ming-dynasty Ch 5/Ch 8** already tells the global-silver story and the Southern Ming/Jesuit/Rites story in detail — qing Ch 5/Ch 1/Ch 2 should cross-ref rather than re-narrate from scratch. **meiji-japan Ch 7** is the victor's side of the 1894 Sino-Japanese War (qing Ch 11). **korean-modern Ch 1** is the Korea end of Shimonoseki. Full list in `audits/qing-dynasty.audit.md` Part 2.
- **Forward CCC (Persona E, 37):** strongest single missing comparison is **Eight Banners decay ↔ Ottoman Janissary decay** (qing Ch 6 vs ottoman Ch 9: identical decayed hereditary military castes, opposite resolutions — Mahmud II destroyed the Janissaries, the Qing could not). Also the Qing-as-Yuan-template thread (dyarchy, Tibetan-Buddhist legitimacy/Golden Urn, multi-script rule) is set up from the Mongol side in mongol-empire Ch 9 but not reciprocated.

## NEXT CIV: chinese-revolution — PLAN PROPOSED (confirm numbers before writing)

Successor in the Chinese Dynasties chain. The qing-dynasty narrative explicitly hands off to it ("the long revolution that ran through the Nationalists and the Communists to 1949 and beyond"; Puyi → Manchukuo "carries into the next book"; the Warlord Era opens as Yuan Shikai dies in 1916).

- v1 source: `~/projects/personal/timeline/src/data/chinese-revolution.json` (42 events, 5 spans, range 1893–1976). Expand to the target below, preserving v1 event IDs.
- navigator-tls.ts entry exists: `chinese-revolution`, **1912–1976**, region asia, subtitle "Mao reshapes China", **no hasContent yet**.
- **Proposed: 13 chapters, ~150 events** (≈11–12/ch, matching the qing density standard). This is an extremely dense, well-documented, politically contested half-century — lean toward the heavier end and apply the WRITING-RULES contested-claims rule aggressively (Great Leap famine toll, Cultural Revolution, Tibet, Taiwan, the historiography is live and hostile on all sides).

Proposed chapter outline (confirm/adjust with the user before writing):

| # | Chapter | Era |
|---|---|---|
| 1 | The Warlord Years | 1912–1919 |
| 2 | May Fourth and Two New Parties | 1919–1923 |
| 3 | The First United Front and the Northern Expedition | 1923–1927 |
| 4 | The Nanjing Decade and the Jiangxi Soviet | 1927–1934 |
| 5 | The Long March | 1934–1936 |
| 6 | The War of Resistance Against Japan | 1937–1945 |
| 7 | The Civil War and 1949 | 1945–1949 |
| 8 | New China: Land Reform and Korea | 1949–1953 |
| 9 | The Hundred Flowers and the Anti-Rightist Turn | 1953–1957 |
| 10 | The Great Leap Forward and the Famine | 1958–1962 |
| 11 | The Cultural Revolution Unleashed | 1966–1969 |
| 12 | The Long Cultural Revolution and the Sino-Soviet/US Pivot | 1969–1972 |
| 13 | The Fall of the Gang and the Death of Mao | 1972–1976 + inheritance |

Cross-link candidates: qing-dynasty (the Xinhai handoff, the century-of-humiliation grievance Mao explicitly invoked), modern-india (the contrasting decolonization/non-alignment path; 1962 war ↔ modern-india Ch 6; both 1947–49 founding republics), korean-modern (the Korean War, the divided-peninsula parallel), japanese-economic-miracle / meiji-japan (the War of Resistance; the East Asian divergence — China's lost decades vs. Japan's miracle), mongol-empire/yuan-dynasty (the recurring conquest-and-unification frame), ottoman-empire (post-imperial modernization under a single-party revolutionary state). Successor (unwritten) is rise-of-china.

## Remaining unwritten civs (after chinese-revolution)

rise-of-china, khmer-empire, dai-viet, majapahit, al-andalus, kievan-rus, scientific-revolution, enlightenment, industrial-revolution, russian-empire, soviet-union, mississippian-culture, early-american-republic, antebellum-america, reconstruction, roaring-twenties, civil-rights-era. (Chain order in `reference-data/tl-chains.ts`.)
