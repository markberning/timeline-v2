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

Gotchas: `content/`, `public/offline/`, `reference-data/` are gitignored — `git add -f` the curation/reference/audit files. The optimize-maps script **deletes** PNG originals (webp is the only copy). matchText with parentheses or trailing punctuation fails the `\b…\b` regex — keep matchText plain. The Bash tool sometimes prints only the first line of a multi-line `echo` block — run checks as single commands.

## Just completed: modern-india ✅ (shipped, 76→ now at the new standard)

15 chapters, **168 events** (was 42 — reconciled to the new density standard), 160 event-links, 102 glossary, 11 cross-links, 15 maps, 5-persona audit done (`audits/modern-india.audit.md`), 3 factual must-fixes applied (Churchill "fakir" attribution, Constitution 8-not-12 schedules, Vajpayee "Durga"). `hasContent: true`. Live on `main`.

### modern-india deferred items (should-fix, not yet done)

From the audit — pick up opportunistically or in a dedicated pass; none block shipping:

- **Ch 9 "Indira Returns" is overloaded (Persona D: WEAK).** It carries Janata collapse + Punjab/Blue Star + the pogrom + Rajiv + Shah Bano + Babri + IPKF + Bofors + Bhopal with no spine. Recommended: split into a 16th chapter (Indira-return/Blue-Star/pogrom vs. Rajiv-era). This changes chapter numbering → would require re-keying event-links/glossary/cross-links/summaries/map-prompts ch 9→9&10 and shifting 10–15. Sizeable; do as its own task.
- **Enumeration habit** ("the first/second/third pillar was…") in Ch 4, 6, 13, 14 and the lone bulleted list in Ch 10 — Persona D wants these rewritten onto a narrative spine.
- **Cross-civ forward gaps (Persona E, 40 findings):** highest-value missing anchors — Partition vs. Korea's 1947–48 division (Ch 5 ↔ korean-modern), the "Hindu rate of growth" vs. the East Asian developmental model (Ch 6/10 ↔ japanese-economic-miracle, korean-modern), the Emergency vs. Park's Yushin (Ch 8 ↔ korean-modern), Khilafat → Ottoman caliphate abolition (Ch 3 ↔ ottoman-empire Ch 12).
- **Backward CCC pass (Persona E, 18 findings):** reference TLs that should now point at modern-india — mughal-empire Ch 8–9 (Company-to-Crown seam, 1858 Act, Bahadur Shah Zafar), delhi-sultanate Ch 8 (Partition demography), indus-valley Ch 10 (deep-time continuity, modern-india Ch 15 invokes it), korean-modern Ch 3 + japanese-economic-miracle Ch 1/2/14 (India's contrasting import-substitution path), ottoman-empire Ch 12 (add independent India as the 4th post-imperial-modernization term). Per the audit-skill default, do backward CCC as a surgical pass (terse cross-ref parentheticals), not a prose restructure.
- **Skeptic CHECK items (56):** mostly standard well-attested modern figures (26/11 = 166 dead, 86% demonetized, 93,000 POWs). Spot-verify if doing a polish pass; not urgent.

## NEXT CIV: qing-dynasty — PLAN PRE-APPROVED

The user approved this plan in the session that wrote modern-india. Start the pipeline directly; no need to re-ask unless you want to revisit.

- **No `reference-data/qing-dynasty.json` yet.** v1 source: `~/projects/personal/timeline/src/data/qing-dynasty.json` (42 events, 4 spans). Expand to the target below.
- **13 chapters, ~140 events** (≈11/chapter, 10–15 band, lighter on the thematic Ch 5).
- navigator-tls.ts entry exists: `qing-dynasty`, 1644–1912, region asia, **no hasContent yet**.

Approved chapter outline:

| # | Chapter | Era |
|---|---|---|
| 1 | The Manchu Conquest | 1618–1661 |
| 2 | Kangxi: The Sixty-One-Year Reign | 1661–1722 |
| 3 | Yongzheng and the Machinery of Autocracy | 1722–1735 |
| 4 | The Qianlong Zenith | 1735–1796 |
| 5 | The Qing World System (thematic — silver, tea, porcelain, Canton, population) | ~1680–1820 |
| 6 | Cracks in the Mandate | 1796–1839 |
| 7 | The First Opium War | 1839–1842 |
| 8 | The Taiping Cataclysm | 1850–1864 |
| 9 | The Second Opium War and the Tongzhi Restoration | 1856–1875 |
| 10 | Self-Strengthening and Its Limits | 1861–1894 |
| 11 | The Catastrophe: Japan, Concessions, the Hundred Days | 1894–1898 |
| 12 | The Boxer Rising and the Last Reforms | 1899–1908 |
| 13 | The Xinhai Revolution and the End | 1908–1912 + inheritance |

Chain context: Chinese Dynasties chain. Predecessor TL is ming-dynasty (shipped, ends 1644 Manchu conquest — Ch 1 should hand off from ming-dynasty Ch 8). Successor (unwritten) is chinese-revolution → rise-of-china. Cross-link candidates: ming-dynasty (the conquest), tang-song-china (imperial precedent), modern-india (parallel 19th-c. colonial/semi-colonial trajectory, Opium Wars ↔ unequal treaties), japanese-economic-miracle/korean-modern (the Sino-Japanese War 1894, the East Asian divergence), mongol-empire (the prior conquest dynasty / Yuan precedent), timurid-empire/safavid-persia (Qing Central Asian expansion).

## Remaining unwritten civs (after qing-dynasty)

chinese-revolution, rise-of-china, khmer-empire, dai-viet, majapahit, al-andalus, kievan-rus, scientific-revolution, enlightenment, industrial-revolution, russian-empire, soviet-union, mississippian-culture, early-american-republic, antebellum-america, reconstruction, roaring-twenties, civil-rights-era. (Chain order in `reference-data/tl-chains.ts`.)
