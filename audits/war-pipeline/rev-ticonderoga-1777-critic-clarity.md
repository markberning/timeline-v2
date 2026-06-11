# NEWCOMER-CLARITY CRITIC · Fall of Fort Ticonderoga 1777 (rev-ticonderoga)

Draft reviewed: `audits/war-pipeline/rev-ticonderoga-1777-draft.md` (2026-06-11 author output).
Reader model: zero prior knowledge — doesn't know what Ticonderoga is, who Burgoyne is, what a
garrison/portage/rearguard is, or where Lake Champlain runs; may land on any section directly.

## VERDICT: PASS-WITH-FIXES

The hard parts are mostly done well: the three-moments disambiguation (1758 / 1775 / 1777) is
the cleanest surface on the page, the corridor geography in Section 1 ¶1 is built from scratch
beautifully, the evacuate-vs-fight arithmetic is explicit, and the supply-line inversion in
Section 3 is fully causal. The failures are concentrated and line-level: the page's single most
load-bearing term of art (**rearguard**) is never defined anywhere; the causal payoff of
Hubbardton (the stand BOUGHT the escape) is never stated; and the per-section person reset
breaks at the top of Sections 2 and 3. All fixable with sentence-level insertions — no
structural rewrite needed, hence PASS-WITH-FIXES rather than FAIL, but the three BLOCKERs must
land before ship.

---

## BLOCKER

### B1 · "rearguard" — the page's central concept — is never defined on ANY surface
The week's only pitched battle is a rearguard action, the dossier footnote hangs the whole
butcher's bill on it, Warner's role chip is "Rearguard cmdr.", and the word is never glossed once.
A newcomer cannot infer it; "rear guard" sounds like troops guarding the rear of the fort.
- Dossier casualties: "roughly 40% of the rearguard" — bare.
- Dossier footnote: "the rearguard action in Vermont that was the only pitched battle of the week" — bare ("pitched battle" also unglossed, lesser issue).
- Warner role chip: "Rearguard cmdr. at Hubbardton" — bare.
- Section 2, first use: "St. Clair's rearguard, under Colonel Seth Warner of the Green Mountain Boys..."

**Fix (Section 2 first use):** "St. Clair's rearguard (the detachment left to march last, between
the escaping army and its pursuers), under Colonel Seth Warner..."
**Fix (dossier footnote):** "...was paid at Hubbardton on July 7, where the rearguard (the
detachment covering the army's escape) turned and fought — the only real battle of the week."

### B2 · WHY Hubbardton bought the army's escape is never stated — the causal chain just stops
Section 2 narrates the fight superbly and then ends on the casualty ratio: "The Americans lost
roughly 40 percent of the rearguard; Fraser lost over 20 percent of everyone he brought." A
newcomer reads Hubbardton as a defeat, full stop — the rearguard broke, men were captured. The
page never says the one thing that makes the sacrifice legible: the mauling ended the land
pursuit, and the main body got away clean because of it. Section 3's "saved the soldiers" is
generic and 1,500 words later.

**Fix (insert after "...over 20 percent of everyone he brought."):** a closing beat in this
shape (exact facts to be confirmed against the pack by the fact critic): "And the mauled
rearguard had done its job: Fraser's bloodied force stopped at Hubbardton with its wounded and
prisoners, the pursuit on the land road ended there, and St. Clair's main column marched on
unmolested to rejoin the army. The rearguard was wrecked buying exactly what it had been left
behind to buy: time."

### B3 · Per-section person reset breaks at the top of Sections 2 and 3
Each section is a standalone landing page; the draft only fully introduces people in Section 1.
- **Section 2, sentence 1:** "By June 30, 1777, Burgoyne's army had staged at Crown Point" —
  Burgoyne never re-tagged (who? which side?).
  **Fix:** "...the British invasion army under Lieutenant General John Burgoyne had staged at
  Crown Point..."
- **Section 2, ¶1:** "Too short of men to hold the outer ground, St. Clair pulled in..." — first
  St. Clair in the section, no role/side.
  **Fix:** "...the American commander, Major General Arthur St. Clair, pulled in..."
- **Section 3, ¶1:** "Rumor said St. Clair and Schuyler had been bribed" — first mention of BOTH
  in the section, no roles. A section-3-only reader has no idea who these men are.
  **Fix:** "Rumor said St. Clair (the American general who had ordered the retreat) and Philip
  Schuyler (his superior, commanding the Northern Department from Albany) had been bribed..."
- **Section 3, ¶1:** "Washington, who had genuinely not seen it coming" — no role.
  **Fix:** "Washington, the American commander-in-chief, ..."
- **Section 3, ¶5:** "an American raid even came back: Brown's raid retook the outworks" —
  "Brown" is introduced nowhere on the page.
  **Fix:** "...an American raid under Colonel John Brown retook the outworks..." (verify the
  given name/rank against the pack).

---

## SHOULD-FIX

### S1 · Undefined terms of art (per-section first use, parentheses)
- **regulars** — dossier sides ("~7,800–8,000 regulars") and Section 1 ("started south from
  Canada with roughly 8,000 regulars"). Gloss at Section 1 first use: "roughly 8,000 regulars
  (full-time professional soldiers)" and once in the sides note.
- **militia** — Section 1 ("about 900 short-term militia") and dossier sides/Section 2 ("400 New
  York militia"). Gloss: "(part-time citizen soldiers called out for short stints)".
- **Continental / Continentals** — outcome text ("preserved roughly 2,500 Continentals"),
  St. Clair bio ("A Continental major general"), Warner bio ("his own Continental regiment").
  Never glossed anywhere. Gloss at outcome + first bio use: "(the full-time American army)".
- **redoubts** — Section 1: "the decaying stone fort, the 1758 French lines west of it, new
  redoubts, and a whole second fortress". Gloss: "new redoubts (small enclosed forts of earth
  and logs)".
- **grenadiers** — Section 2 ("Fraser's Advanced Corps of grenadiers, light infantry, and
  marksmen") and again at the Hubbardton beat; also Riedesel bio ("sending his grenadiers in
  singing"). Never glossed. Gloss at Section 2 first use: "grenadiers (the army's big assault
  infantry)"; jägers is glossed, grenadiers should match.
- **court-martial** — St. Clair bio ("a court-martial acquitted him") and Section 3 ("both
  demanded courts-martial"). Gloss once each: "(a military trial)".
- **garrison** — used on every surface (note, stats, sides, casualties, all three sections),
  never glossed. Semi-inferable but this is the page's noun. One gloss at the dossier note or
  Section 1 first use: "garrison (the troops stationed to hold a fort)".
- **artificers** — glossed in Section 1 ("(military craftsmen)") but bare in the dossier sides
  line ("with militia and artificers"). Move/duplicate the gloss into the sides note.
- portage ✓ (glossed twice, well), jägers ✓, picket line ✓, bateaux ✓, 12-pounders ✓,
  breastwork not used ("wall of logs" instead — good).

### S2 · Dossier note + Section 1 blurb don't carry sides for the three moments
The note is the card-level surface a newcomer reads FIRST, and it names no nationality:
"the British wrecked an army here in 1758" (against whom? — the French held it),
"Ethan Allen took it in 1775" (from whom? who is he?), "Burgoyne's invasion army" (which side?),
"the garrison" (whose?).
**Fix (note):** "...(a British army wrecked itself against the fort's French defenders in 1758;
the American Ethan Allen seized it from the British in 1775). In July 1777 the British general
John Burgoyne's invasion army hauled guns up the one hill nobody had fortified, and the American
garrison... walked away in the night..."
**Fix (Section 1 blurb, same defect):** "a British army wrecked against its French defenders in
1758, the American Ethan Allen at its gate in 1775... Burgoyne's 8,000 British and German
regulars were coming down the lake..."

### S3 · Geography: Skenesborough and Fort Edward are never located in the system
- The flotilla flees "south up the lake to Skenesborough" and the British "ran south and caught"
  it — a newcomer doesn't know Skenesborough is where the lake ENDS, so neither the funnel nor
  Burgoyne's subsequent "overland" choice makes sense.
  **Fix (Section 2 first use):** "...sent south up the lake to Skenesborough (the cramped harbor
  at the lake's southern head, where the navigable water gives out)..."
- Fort Edward is the destination of both the retreat and Burgoyne's march, and the prose never
  says it sits on the Hudson — the second half of the water highway. **Fix (Section 3):**
  "...pushed his main army overland toward Fort Edward, on the upper Hudson (the river that runs
  the rest of the way to Albany), 23 miles of creek, ravine, and forest."

### S4 · The artillery checkmate is asserted, not explained, at the decisive moment
Section 2: "Every man who looked up understood the geometry at once." A Section-2-only reader
hasn't read Section 1's "fire down into the works" setup, and even with it the mechanics stay
implicit. One plain sentence closes it.
**Fix (after "...understood the geometry at once."):** "Cannon on that summit could drop shot
into every corner of the fort and Mount Independence both, while the forts' own guns could do
almost nothing about a battery 850 feet over their heads."

### S5 · Image 5 caption reads as if the red coats are in the 2009 photograph
"This is what the garrison saw on the morning of July 5, 1777, with red coats and gun carriages
visible on the summit" — the photo is modern; a newcomer will hunt the image for redcoats.
**Fix:** "This is what the garrison saw on the morning of July 5, 1777 — except that morning
there were red coats and gun carriages visible on the summit." (Or, per the no-em-dash rule:
"...on the morning of July 5, 1777, when red coats and gun carriages stood on the summit.")

### S6 · "the 1758 French lines" appears bare on standalone surfaces
Section 2 ¶1 and the Locator 1 caption both say "the 1758 French lines" with no anchor — a
reader who skipped Section 1 meets unexplained Frenchmen. **Fix (both spots):** "the 1758 French
lines (earthworks left from the French war nineteen years earlier)".

### S7 · Untagged supporting persons
- Section 1: "taking Anthony Wayne and a convalescent Benedict Arnold up with him" — Arnold was
  introduced in the 1775 beat; Wayne is a bare name. **Fix:** "taking Anthony Wayne (then one of
  the garrison's senior officers; verify exact 1776 role against the pack) and a convalescent
  Benedict Arnold..."
- Section 3: "John Adams, writing to Abigail" — **Fix:** "writing to his wife Abigail".

### S8 · Section 2: "Green Mountain Boys" bare at its only body-prose use
"Colonel Seth Warner of the Green Mountain Boys" — defined only in Warner's bio card, which a
section reader may never open. **Fix:** "...of the Green Mountain Boys (the Vermont frontier
militia, veterans of the land feud with New York)".

### S9 · Stats "Winner" line points at Saratoga with no anchor
"the garrison escaped to fight at Saratoga" — a newcomer doesn't know Saratoga is the American
victory that ends this campaign; the outcome block explains it but sits elsewhere. **Fix:**
"...escaped to fight at Saratoga (the campaign-ending American victory, three months later)".

---

## NIT

- **N1 · Three names for one hill.** Rattlesnake Hill (S1), Sugar Loaf (S2), Mount Defiance
  (everywhere). Section 2's first mention should weld them immediately: "climbed Sugar Loaf, the
  Americans' name for the bare 850-foot hill (the British were already calling it Mount
  Defiance)" rather than holding the rename to the paragraph's end.
- **N2 · "effectives"** (stats, sides, Section 1) — gloss once: "(men fit for duty)".
- **N3 · Faden map caption** (image 2): "Burgoyne's army" untagged — captions stand alone; add
  "the British invasion army of 1777".
- **N4 · Evacuation-night date.** "it had to be that night" — add "(the night of July 5–6)" so
  the page's pivotal night carries its date explicitly.
- **N5 · Section 2 blurb:** "the Brunswickers came in singing" — blurb-level reader doesn't know
  Brunswickers = Burgoyne's German troops; "the German troops came in singing".
- **N6 · "9th Foot"** — "(an infantry regiment)"; **"galleys"** — "(small armed rowing vessels)".
- **N7 · MEANWHILE (Howe):** Burgoyne untagged inside a block that must stand alone — "to meet
  Burgoyne's northern army at Albany".
- **N8 · Hubbardton caption** (image 6): "fought Fraser's pursuit" — "the British pursuit under
  Simon Fraser".
- **N9 · Section 3 blurb:** "stretched the rope behind him" — "him" has no antecedent at blurb
  level; "behind Burgoyne's army".

---

## CHECKS THAT PASS CLEAN

- **Three-moments discipline (the page's special burden): PASS.** Section 1 walks 1758 → 1775 →
  1777 in order with holder + outcome explicit each time; both PILLs fence the other stories
  off; "Remember the hill" carries the one 1758 fact forward; Section 3 recaps all three in one
  clause; the Jefferys-1758 and LOC-1777 plan captions each declare their year and holder. The
  only leaks are the card-level note/blurb (S2) and the bare "1758 French lines" (S6).
- **The corridor from scratch: PASS.** Section 1 ¶1 builds both lakes, the La Chute, the
  portage, the water highway, and "hand on a gate" before any event happens; Montreal→Albany is
  explicit in the plan paragraph; "south up the lake" is consistently disambiguated.
- **Mount Defiance height relationship: PASS.** 850 ft, 1,400/1,500 yds, "fire down into the
  works" (1758 beat), the hero caption's gunner's-eye view, and the closing MEANWHILE's
  "looking straight down into the fort" — physically clear (S4 just adds the mechanics at the
  decisive beat).
- **Why evacuate rather than fight: PASS.** 2,500 effectives vs works needing 10,000 vs 8,000
  attackers, the unanimous council quote, and Riedesel closing the only land road — all explicit.
- **The supply-line inversion: PASS.** Section 3's "count what Britain won / count what America
  lost" structure makes every link of the chain explicit (garrison subtracted, line lengthening,
  axemen, the army preserved for Saratoga, where to stop the clock).
- **Timeline: PASS.** July 2 / 3–4 / midday 5 / noon council / that night / early morning 6 /
  dawn 7 / July 8 all dated in sequence; stats line spells the week; captions carry their dates
  (N4 is the lone gap).
- **No em-dashes used for definitions** — all glosses are parenthetical, per house rule.
