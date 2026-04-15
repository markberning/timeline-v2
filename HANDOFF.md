# Ancient Nubia — Handoff

**Date:** 2026-04-15
**Branch:** main
**Last commit on main:** `7cadd2d` — Ancient Nubia: curated event links

---

## Where we are in the pipeline

Working on the **ancient-nubia** TL (4th TL in the project, first in the Nubian Tradition chain). Pipeline status:

| # | Step | Status |
|---|------|--------|
| 0 | Pull v1 reference data | ✅ done (pre-session, 51 → 51 events initially) |
| 1 | Write narrative | ✅ done — 8 chapters, ~24k words |
| 2 | 5-persona audit | ✅ done — [audits/ancient-nubia.audit.md](audits/ancient-nubia.audit.md) |
| 3 | Fix audit findings | ✅ done — all must-fix and should-fix applied |
| 4 | Reconcile reference data | ✅ done — 51 → 54 events |
| 5 | Curate event links | ✅ done — 52 links across 8 chapters |
| 5b | Curate glossary links | 🚧 **in progress** — 183 of ~191 drafted, 8 failing matchText, not yet written to file |
| 5c | Curate cross-civ links | ⏳ pending |
| 6 | Enrich events (`npm run parse`) | ⏳ pending |
| 7 | Chapter maps (Gemini) | ⏳ pending |
| 8 | Review images | ⏳ pending |

---

## What we just did (this session)

1. **Drafted the full narrative** to [narratives/ancient-nubia.md](narratives/ancient-nubia.md) — 8 chapters, 20,445 words initial, covering 3800–1070 BCE from A-Group through the New Kingdom withdrawal.
2. **Ran the 5-persona audit** (Newcomer, Skeptic, Story Editor, Cross-Cultural) in parallel via the `audit-narrative` skill. Merged to [audits/ancient-nubia.audit.md](audits/ancient-nubia.audit.md). Story Editor grades: Ch 1/3/4/6/8 STRONG, Ch 2/5/7 GOOD.
3. **Applied must-fix and should-fix** from the audit across all 8 chapters. Narrative grew to 24,322 words. Key corrections:
   - Mohenjo-daro dating error fixed (Mature Harappan ~2600 BCE, not "still a century or two away" at 2400 BCE)
   - Kerma–Hyksos alliance source corrected from an invented "Avaris tablet" to the real Second Kamose Stele at Karnak
   - Amarna Letters named explicitly in Ch 7 and wired to Mesopotamia Ch 8 as the other end of the Nubian gold pipeline
   - Old/Middle/New Kingdom framework added once in Ch 2 so dynasty numbers have a permanent anchor
   - Retainer-sacrifice comparison rebuilt as four-cradle (Ur 74 / Shimao / Kerma 300–400 / Indus absent)
   - "Why no writing?" now points to Indus Valley Ch 6 as primary parallel, Inca quipu as supporting
   - Ch 5 tech survey tightened: tulip ware promoted, metalwork/textiles demoted to a supporting paragraph
   - Ch 7 temple sequence compressed: Amada + Soleb compressed into a single connecting paragraph so Abu Simbel carries the climax
   - Abu Simbel Statue-of-Liberty comparison replaced with six-story office building anchor; "only known case of a temple losing one day of astronomical accuracy" flourish removed
   - Softened "oldest known colonial elite-education program" with an Enheduanna-at-Ur precedent
   - Late Bronze Age Collapse promoted from a dense parenthetical to its own sub-section
   - Ch 8 closing "in one sense, they were" spelled out — Amun's most zealous worshippers had migrated south, Kushite pharaohs were Amun's people coming home
   - Thutmose I "body on prow" rewritten to cite the actual Tombos Stele language and drop the embellished "all the way to Thebes on display"
   - Kamose/Ahmose pronunciation disambiguated
   - Inline definitions added for: Uruk, Sumerian Ur, Shimao, Longshan, Hyksos (first appearance in Ch 4), Ra, Ptah, Hathor, Osiris, Ammit, Field of Iaru, Karnak, Kadesh, Hittites/Kassites/Mitanni/Middle Assyrians, Achaemenid Persia, Akhenaten, Diodorus Siculus, composite bow, predynastic, stone palettes, tell, mastaba, Memphis, Thebes (Egypt), stele, White/Blue Nile
4. **Reconciled reference data** at [reference-data/ancient-nubia.json](reference-data/ancient-nubia.json): added 3 new events (`evt-second-kamose-stele`, `evt-tombos-stele`, `evt-amarna-gold-pipeline`) and tightened 5 existing entries with narrative-derived specifics (Kerma royal burials retainer counts, Kerma-Hyksos alliance named sources, Thutmose I campaign detail, Fall of Kerma unknown-ruler note, Nubian gold mines Diodorus/Amarna/Turin context). Event count: 51 → 54.
5. **Curated 52 event links** to [content/.event-links-ancient-nubia.json](content/.event-links-ancient-nubia.json), verified against the narrative. Per chapter: 10/4/6/7/6/5/9/5. Two events skipped (`evt-nubian-rock-art`, `evt-incense-trade`) — no natural home in the reworked prose.
6. **Drafted 191 glossary links** across 8 chapters, verified that 183 match exactly against the prose. Stopped mid-verify to write this handoff. **File not yet written** — still needs the 8 failing matchText strings fixed and then the output written to `content/.glossary-links-ancient-nubia.json`.

---

## Commits this session (on main)

- `06cd20c` — Ancient Nubia: first draft + audit + fix pass
- `069bedd` — Ancient Nubia: reconcile reference data with narrative
- `7cadd2d` — Ancient Nubia: curated event links

All pushed to `origin/main`.

Glossary links work is **uncommitted** and lives only in the in-session Python draft (not yet persisted to disk). It needs to be re-derived from this handoff doc or from the audit+narrative when the next session picks it up.

---

## What's next

### Immediate next step: finish glossary link curation

191 entries drafted, 183 currently pass matchText verification, 8 failing. The 8 failing entries and the fix each needs:

| Chapter | Term | Draft matchText | Fix |
|---|---|---|---|
| 1 | Lower Egypt | `Lower Egypt` | Not present as bare phrase in Ch 1. **Skip** — Upper Egypt IS present but Lower Egypt isn't independently used. |
| 1 | Kingdom of Kush | `Kingdom of Kush` | Ch 1 only has the raw name `**Kush**`. Change matchText to `**Kush**` or move to Ch 8 where "Kingdom of Kush" appears as the successor state. Recommend: **move to Ch 8** and leave Ch 1 with no Kush glossary link (it's handled via `evt-egyptian-withdrawal` in Ch 8 anyway). |
| 4 | Levant | `**Levant**` | The prose has `the Levant` plain, not bolded. Change matchText to `the Levant`. |
| 7 | Kassites | `**The Kassite kings of Babylon**` | Bold markup includes "The" — change to `**The Kassite kings of Babylon**` is correct per the audit; the Python check might have choked on the leading asterisk pattern. Re-verify; if still failing, switch to `Kassite kings of Babylon` plain. |
| 7 | Mitanni | `**Mitanni kings**` | Ch 7 has `Mitannians` earlier and `**The Mitanni kings**` later. Change matchText to `Mitannians` OR to `**The Mitanni kings**`. |
| 7 | Hittites | `**Hittites**` | Ch 7 has plain `Hittites` earlier. Change matchText to `Hittites` plain. |
| 7 | Middle Assyrian Empire | `**Middle Assyrian kings**` | Should be `**The Middle Assyrian kings**` (leading "The"). Re-verify. |
| 8 | Kushite pharaohs | `Kushite pharaohs` | Ch 8 has `Kushite kings` not `Kushite pharaohs`. Change matchText to `Kushite kings`. |

Then write the JSON, force-add (content/ is gitignored), and commit.

### After glossary links

5c. **Cross-civ links** in `content/.cross-links-ancient-nubia.json`. Build forward pointers for places where the narrative references other TLs. Strongest candidates from the Persona E forward findings already in [audits/ancient-nubia.audit.md](audits/ancient-nubia.audit.md):
   - Ch 1–2 "meanwhile in Uruk" anchors (→ Mesopotamia Ch 3–4)
   - Ch 3 "Mohenjo-daro already in flower" (→ Indus Valley Ch 4)
   - Ch 3/4 Shimao/Longshan parallels (→ Ancient China Ch 6)
   - Ch 5 four-cradle retainer comparison (→ Mesopotamia Ch 4 for Ur, Ancient China Ch 6 for Shimao, Indus Valley Ch 8 for absence)
   - Ch 5 "why no writing?" (→ Indus Valley Ch 6)
   - Ch 6 Semitic language family note (→ Mesopotamia Ch 5+)
   - Ch 7 Amarna Letters gold pipeline (→ Mesopotamia Ch 8 — **highest-value single cross-link in the whole TL**)
   - Ch 7 "first colonial administration" Sargon precedent (→ Mesopotamia Ch 5)
   - Ch 8 kap system / Enheduanna precedent (→ Mesopotamia Ch 5)
   - Ch 8 Late Bronze Age Collapse (→ Mesopotamia Ch 9)

   Target: ~15–25 cross-links, similar to or slightly less dense than Indus Valley's 28.

6. **Enrich events** via `npm run parse` — this auto-fetches Wikipedia thumbnails and extracts for the new `-ancient-nubia` events, populates the enrichment cache, and regenerates the content JSON that `data.ts` reads. **IMPORTANT:** after running parse, restart the dev server (data.ts caches narratives in-memory — see `feedback_parse_restart_dev` memory).

7. **Chapter maps** — 8 Gemini-generated maps for the chapter headers. Use prompts from [map-prompts.md](map-prompts.md) and save to `public/maps/ancient-nubia/chapter-{N}.webp` (optimize via `scripts/optimize-maps.mjs`). Per the roadmap in CLAUDE.md: "chapter maps pending" was the explicit status noted for Ancient China too — this step is easy to defer but should be done before shipping.

8. **Image review** at `/review/ancient-nubia` in dev mode for any approve/reject decisions on event thumbnails.

### Also pending: backward cross-cultural pass

Per audit SOP, defer the backward pass until after the Nubia fixpass is stable (which it now is). Surgical insertion of terse `(Ancient Nubia Ch N)` parentheticals into the reference TLs for the 13 Persona E backward findings. Load-bearing items from the audit:

- **Meso Ch 8 (Amarna)** — Name Nubia as the source of the gold the Kassites were begging for. *Single highest-value backward finding in the report.*
- **Meso Ch 11 (Taharqa)** — Promote the "Nubian pharaoh Taharqa" trivia caption into a real cross-ref hook to Ancient Nubia Ch 8.
- **Meso Ch 4 (Ur retainer sacrifice)** — Upgrade the three-cradle Indus-outlier comparison to four-cradle with Kerma.
- **Meso Ch 5 (Gudea's Nubian gold)** — Expand the already-present Nubian-gold parenthetical with a cross-ref to Ancient Nubia Ch 2–3.
- **Indus Valley Ch 6 ("only major civ with no named historical individual")** — Soften to "one of only two," cross-ref Kerma's textual silence.
- **Ancient China Ch 6 (retainer sacrifice three-cradle passage)** — Same upgrade to four-cradle with Kerma.
- **Ancient China Ch 1 (pre-textual parallels)** — Add Kerma as a second pre-textual parallel alongside Indus.

---

## Decisions made this session

1. **Chapter structure: 8 chapters, chronological.** The v1 reference data had 51 events spanning 3800–1070 BCE; these broke naturally into 8 eras (Land of the Bow / After the Silence / Harkhuf's Donkeys / Forts / Classic Kerma / Squeeze and Fall / Province of Gold / Cultural Bridge). Word target ~20k to match Ancient China; actual final 24k after fix pass.

2. **Fresh perspective: "Egyptian propaganda vs. archaeology."** Per the writing rules' "adapt structure to the civilization" principle, the Nubia narrative is explicitly framed around the Egyptian-sources problem: almost every surviving written word about Nubia was produced by Egyptians who were not always telling the truth. This is the one distinctive structural move — every chapter triangulates between Egyptian sources and archaeology, and the Kerma "why no writing?" meditation in Ch 5 and the "grieve the lost voices" passage in Ch 6 are the emotional peaks of that frame.

3. **"First" claims hedged.** Following the "first claim cumulative caveat" rule, the Ch 1 close includes an explicit "archaeological firsts are about luck" paragraph, and the Ch 3 "fifth cradle and African one" framing avoids the "first in all of Africa" overclaim.

4. **Second Kamose Stele is the real source for the Kerma-Hyksos alliance.** The first draft had an invented "Avaris tablet." The fix pass replaces this with the real monument at Karnak, names Apophis, and the new `evt-second-kamose-stele` event captures the correct attribution.

5. **Tombos Stele "body at prow" kept, but with the actual inscription language.** Persona B flagged this as potentially embellished. Verification: the Tombos Stele is real and really does describe a Nubian "hung head-downward at the prow of the falcon-ship of his majesty." The fix pass replaced the "sailed all the way back to Thebes with it on display" flourish (which *was* embellishment — the stele was erected at Tombos in Nubia, not Thebes) with language closer to the inscription.

6. **Viceroy of Kush is NOT the world's first colonial administration.** Persona E flagged that Sargon of Akkad's provincial governors predate it by ~1,800 years. Fix pass softened the Ch 7 framing with an explicit Sargon precedent note.

7. **Retainer sacrifice is explicitly four-cradle, not Kerma-unique.** The original draft lumped Ur/early-Egypt/China/Peru vaguely. Fix pass restructured as an explicit four-cradle comparison (Mesopotamia Ur 74 / Northern China Shimao / Indus absent / Kerma 300–400) with explicit cross-refs to the reference TL chapters.

8. **Ch 5 "why no writing?" leads with Indus, not Incas.** The original draft's primary parallel was the Inca quipu (chronologically and structurally distant). Fix pass puts the Indus Valley Ch 6 textual-silence problem as the primary parallel and uses the Incas as a supporting example of "statehood without writing."

9. **Old/Middle/New Kingdom framework added once in Ch 2, not repeated.** Per the "don't over-correct / fix gaps thoroughly in one place" rule, there's a single inline framework note in Ch 2 (when Sneferu's Fourth Dynasty first appears) that positions all the dynasty numbers the reader is about to meet. Later chapters use dynasty numbers freely without re-explaining.

10. **Two events intentionally not event-linked.** `evt-nubian-rock-art` and `evt-incense-trade` — neither has a prominent enough anchor in the reworked prose. They remain in the reference data but don't get clickable event-link placements.

---

## Files touched this session

**Added:**
- `narratives/ancient-nubia.md` (24,322 words, 8 chapters)
- `audits/ancient-nubia.audit.md` (merged 4-persona audit report)
- `content/.event-links-ancient-nubia.json` (52 curated links, force-added because `content/` is gitignored)
- `HANDOFF.md` (this file)

**Modified:**
- `reference-data/ancient-nubia.json` (51 → 54 events, 5 existing entries tightened)

**Uncommitted / in-progress:**
- Glossary links draft (Python structure, not yet written to `content/.glossary-links-ancient-nubia.json`)

---

## Context the next session needs

- The narrative is **stable** and has passed a full audit + fix pass. Don't re-audit unless substantive new content gets added.
- `content/` is **gitignored** but existing `.json` files under it are tracked — force-add with `git add -f content/<file>.json` when creating new ones.
- After `npm run parse` **restart the dev server** — `lib/data.ts` caches narratives in-memory and won't see the new ancient-nubia narrative until the Next dev server is restarted.
- The `evt-` IDs in the reference data all use the bare prefix (`evt-harkhuf-expeditions`, not `evt-an-harkhuf-expeditions`). Ancient China uses `evt-ac-` prefixes. This is a per-TL convention and Nubia follows the plain `evt-` style that was in the v1 import.
- The cross-civ backward pass is **not started** and should be a standalone surgical commit once the Nubia fix pass settles.
- When ready to ship, the chain color for the Nubian Tradition chain is already configured in `accent-colors.ts` as ochre/yellow — no further color work needed.
- `hasContent: true` for ancient-nubia has **not** been flipped yet in `navigator-tls.ts` — this is the last step that makes the row tappable on the navigator home page. Do this only after parse + maps are done.
