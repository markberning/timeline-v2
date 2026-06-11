# FACT-CHECK CRITIC — Battle of Quebec (Dec 31, 1775) battle page

Draft: `audits/war-pipeline/rev-quebec-draft.md` · Pack: `audits/war-pipeline/rev-quebec-factpack.md`
Critic pass: 2026-06-10. Method: full claim-by-claim trace of every surface (dossier, stats,
casualties, commander bios, captions/credits, locators, section prose, MEANWHILE blocks,
fact ledger) against the pack, byte-exact quote verification, myth-hygiene audit, plus 9
independent web spot-checks of the highest-stakes claims.

## VERDICT: PASS-WITH-FIXES

**0 BLOCKERS · 4 SHOULD-FIX · 8 NIT**

This is an unusually clean draft. Every load-bearing claim traces to the pack at or below
the pack's confidence level; all five quoted passages are byte-exact against §7; all four
myth-hygiene guard rails are correctly observed; no hallucinated facts found. The four
SHOULD-FIXes are two inherited PACK ERRORS caught by web check (a locator coordinate and a
date-arithmetic slip), one extra-pack geographic gloss that is also wrong, and one
authoring-instruction leak into a reader-facing dossier field.

---

## BLOCKERS

None.

---

## SHOULD-FIX

### SF-1 — PACK ERROR (inherited): Locator A's Pointe-aux-Trembles dot is ~14 miles wrong
Draft (Locator A, also the route-line waypoint):
> `Pointe-aux-Trembles (Arnold's November withdrawal, ~20 mi upriver) | 46.75, -71.28`

The pack (§9) gives the same coordinate, so the draft followed its source — but the
coordinate is wrong. Pointe-aux-Trembles is today's **Neuville, QC, at ≈ 46.700, -71.583**
(Wikipedia: 46°42′N 71°35′W, "formerly known as Pointe-aux-Trembles," just west of Quebec
City). The packed dot (46.75, -71.28) sits only ~5.3 miles from Quebec City — directly
contradicting the draft's own prose and caption ("withdrew about 20 miles (32 km) upriver
to Pointe-aux-Trembles"; the real Neuville is ~19 mi upriver, which matches the prose).
**Fix:** change the dot AND the Arnold route-line waypoint from `46.75,-71.28` to
`46.70,-71.58`. The Locator A frame (lonMin -74.5) comfortably contains the corrected point.
Source: https://en.wikipedia.org/wiki/Neuville,_Quebec — flagging as a **pack error** (pack
§9 should be corrected too, or the next battle that reuses it inherits the same defect).

### SF-2 — PACK ERROR (inherited): "Six years later, at Cowpens" — it was five
Draft (Morgan commander bio, line 42; mirrored in the ledger):
> "Six years later, at Cowpens, he handed Britain one of its worst small-battle defeats of the war."

Quebec = December 31, 1775; Cowpens = **January 17, 1781** (Wikipedia, Britannica, American
Battlefield Trust all concur) — five years and two weeks, not six. The pack (§3 Morgan bio)
contains the same "six years later" phrase, so this is a pack error the draft faithfully
copied. **Fix:** "Five years later, at Cowpens..." (or sidestep arithmetic: "At Cowpens in
1781, he handed Britain..."). Source:
https://en.wikipedia.org/wiki/Battle_of_Cowpens

### SF-3 — Extra-pack geography gloss, and wrong: "the foot of Lake Champlain"
Draft (section the-fourteenth-colony, line 131):
> "...seized Fort Ticonderoga, the old fort at the foot of Lake Champlain..."

"Foot of Lake Champlain" is not in the pack, and it is the wrong end: Champlain drains
north (via the Richelieu), so the "foot" is the northern outlet; Ticonderoga sits at the
lake's **southern** end. **Fix:** "the old fort at the southern end of Lake Champlain" (or
"near the head of the lake"). Pack-consistent: §9 calls Ticonderoga "the Champlain anchor"
with the corridor running north from it.

### SF-4 — Authoring-instruction voice leaked into a reader-facing dossier field
Draft (DOSSIER casualties, line 36):
> "British/Canadian: Carleton's official return ~5 killed and ~13–14 wounded; a few witness accounts run as high as ~50. **Use ~5–20 with the official return firmest.**"

"Use ~5–20 with the official return firmest" is the pack's instruction to the author (§5),
not reader prose; if the dossier casualties block renders as written, that sentence ships.
**Fix:** rewrite reader-facing, e.g. "...perhaps 5–20 in all; the official return is the
firmest figure." (Numbers themselves verified: Carleton's official report = 5 killed, 14
wounded per the Wikipedia battle page.)

---

## NITS

### N-1 — "home to Cambridge" (Enos) is not in the pack
Draft line 141: "Lieutenant Colonel Roger Enos took his rear division, roughly 300 men,
**home to Cambridge**..." The pack (§2) says only "turning back." The destination is
web-true (Enos returned to Cambridge and faced court-martial there), so this is a
pack-supplementation rather than an error — but under the zero-hallucination discipline
either drop "home to Cambridge" ("turned back, roughly 300 men, and most of the remaining
food went with him") or accept it as critic-verified.

### N-2 — "forded freezing rivers in October" — "in October" not in the pack
Draft line 141. Pack §2 has "freezing river fordings" with no month. The timing is
plausible (mid-Sept departure, mid-Nov arrival) but unsourced; safest is to drop "in
October."

### N-3 — "weeping with rage" — emotion harder than the pack
Draft line 175: "Morgan held out last... **weeping with rage**, refusing to surrender it to
any British officer." Pack §4: "backed against a wall **in tears**" (MED-HIGH, "told
plainly" per the ledger). "With rage" assigns a motive the pack doesn't carry. Fix:
"in tears" or simply "weeping."

### N-4 — "the Congress that had been carefully avoiding the word independence" — extra-pack interpretation
Draft line 191. Not in the pack. Historically sound at the common-knowledge level (January
1776, six months before the Declaration), and it's framing rather than a hard fact — but
it is an assertion about Congress's posture made on no packed support. Soften ("a Congress
not yet ready for independence") or accept as critic-verified context.

### N-5 — Junction date: pack/draft "December 2 and 3" vs Wikipedia "December 1"
Draft line 145: "Montgomery... joined him on December 2 and 3 with about 300 men." The
Wikipedia battle page has Montgomery arriving at Pointe-aux-Trembles December 1 (his men
and supplies came in over the following days). Sources genuinely vary here; the pack's
Dec 2–3 is within the spread and the draft matches its source. No action required —
recorded as a pack-vs-web variance, not an error.

### N-6 — Forward-look material appears twice (prose + MEANWHILE)
Pack §6 allows "at most one forward clause" on the 1776/1777 consequences. The draft
carries it once in section-3 prose (Carleton's counter-thrust + the 1777 invasion) and
again, expanded (Valcour Island, Burgoyne), in the closing MEANWHILE block. Every fact in
both is pack-supported (§6 names Valcour and Burgoyne), so this is a tone-budget question
for the storytelling critic, not an accuracy defect. Noting it so it's a decision, not an
accident.

### N-7 — "Caffieri" vs pack "Caffiéri"
Draft line 191 drops the accent the pack uses (§3: "Jean-Jacques Caffiéri"). Both spellings
circulate (the sculptor signed Caffieri); pick one and match the pack. The surrounding
facts all verified: monument voted **January 25, 1776**, first national memorial, carved in
Paris, installed at St. Paul's Chapel — web sources split 1787/1788 on installation, with
the most precise account ("by June of 1788," Trinity Church archives) supporting the
pack/draft's 1788. No change needed.

### N-8 — Locator B micro-precision (no action)
All eight tactical dots match pack §9 exactly and are plausible for Quebec City: Upper Town
46.81,-71.21 ✓; Lower Town/Place Royale area 46.812,-71.20 ✓; rue du Sault-au-Matelot
46.815,-71.202 ✓; Près-de-Ville under Cape Diamond 46.806,-71.21 ✓; Wolfe's Cove/Anse au
Foulon 46.80,-71.23 ✓; Palace Gate 46.816,-71.207 ✓. St. John's Gate at -71.22 sits ~600 m
west of the modern Porte Saint-Jean (~-71.2125) — visible at this frame width (0.07° lon)
but within the pack's "~" tolerance and matching the pack verbatim. Optional polish only.

---

## QUOTE VERIFICATION (all byte-exact against pack §7)

1. **"You shall never blush for your Montgomery."** — VERBATIM ✓. Attribution correct:
   draft frames it as Janet's recollection years afterward ("Janet remembered, years
   afterward, what he promised her at their parting"), exactly per the pack's
   do-NOT-present-as-contemporaneous rule. PASS.
2. **"Push on, brave boys; Quebec is ours!"** — VERBATIM ✓ (matches §7's punctuation; §4's
   em-dash variant correctly avoided, consistent with the no-em-dash rule). Tradition badge
   present and explicit: "Tradition fills in the seconds... the words come only from later
   accounts; nearly everyone who could have heard them died in the same moment." PASS.
3. **Arnold: "I have no thought of leaving this proud town until I first enter it in
   triumph... Providence, which has carried me through so many dangers, is still my
   protector. I am in the way of my duty, and know no fear."** — VERBATIM ✓ including the
   ellipsis. **Attributed to ARNOLD ✓** (the known Montgomery misattribution did NOT
   migrate — checked the dossier, both bios, prose, and ledger). Recipient correctly left
   as "he wrote home" (pack: MED on recipient). Web check confirms the line as Arnold's
   post-battle letter; the draft's ellipsis honestly elides the wound/surgeon sentence
   (americanrevolution.org transcription). PASS.
4. **Washington: "In the death of this gentleman, America has sustained a heavy loss, as he
   had approved himself a steady friend to her rights and of ability to render her the most
   essential services."** — VERBATIM ✓; to Schuyler, mid-Jan 1776 framing matches. PASS.
5. **Carleton inline: "the rebels had between six and seven hundred men, and between forty
   and fifty officers, killed, wounded or taken prisoners"** — VERBATIM ✓; correctly framed
   as Carleton's own reckoning that "ran somewhat higher than the settled count." Web check
   confirms the dispatch text. PASS.
6. **MED-verbatim Montgomery lines paraphrased without quote marks ✓** — "writing that the
   will of an oppressed people must be obeyed" (twice: bio + prose) and "his December
   letters wished the whole business well over and sighed for home" — both unquoted
   paraphrase exactly as the pack requires. PASS.

## MYTH-HYGIENE AUDIT — all four guard rails hold

- **Arnold's "in the way of my duty" line:** given to Arnold only, everywhere. ✓
- **"Push on, brave boys" + Hugh McQuarters:** both carried with explicit tradition badges
  ("Tradition fills in..."; "Tradition likewise names... the record only says the defenders
  fired"). ✓
- **Morgan's 499 lashes:** told as "a story he told on himself" / "his own oft-told tale,"
  with "No record of the sentence survives; Morgan showed the scars" in both bio and prose. ✓
- **Carleton smallpox allegation:** ABSENT (searched the whole draft; smallpox appears only
  as crowding + against-orders self-inoculation, per pack §6/uncertainty 7). ✓
- **Montgomery never placed at Quebec/Plains 1759:** his F&I service is given as Louisbourg
  1758 + the Lake Champlain front 1759, both times; the 1759 Plains resonance is carried by
  Carleton (Wolfe's QMG, wounded there) and by Wolfe's Cove geography, exactly per
  uncertainty #5. ✓

## WEB SPOT-CHECKS (9 run; pack confirmed except SF-1, SF-2)

| # | Claim | Result |
|---|---|---|
| 1 | Date Dec 31, 1775, pre-dawn, blizzard/nor'easter | CONFIRMED (Wikipedia battle page) |
| 2 | American casualties ~30–60 k/w + 431 prisoners counted by Carleton; British official 5 killed / 14 wounded | CONFIRMED (Wikipedia: infobox 50k/34w/431 captured; "Carleton's official report listed five killed and 14 wounded") — draft ranges contain all reported figures |
| 3 | Montgomery killed instantly by grapeshot, struck through the head, with Macpherson and Cheesman | CONFIRMED (Wikipedia) |
| 4 | Strengths ~1,200 attackers vs ~1,800 garrison | CONFIRMED (Wikipedia) — inside draft ranges |
| 5 | Trumbull painting 1786, Yale, Trumbull not present, staged as heroic martyrdom (after West's *Death of Wolfe*) | CONFIRMED (Wikipedia article on the painting) |
| 6 | 1818 reburial: steamboat down the Hudson, Clinton's arrangement, Janet on the veranda, band playing the dead march, reinterred St. Paul's Chapel July 8, 1818 | CONFIRMED (Trinity Church NYC; Journal of the American Revolution; hmdb.org) |
| 7 | Montgomery promoted Major General Dec 9, 1775, never learned of it; Congress's Jan 25, 1776 monument vote = first national memorial; Caffieri, Paris; St. Paul's Chapel | CONFIRMED (battlefields.org, history.com, Trinity archives; installation 1787/1788 split — "by June 1788" supports the draft) |
| 8 | Carleton-to-Howe dispatch quote text | CONFIRMED verbatim (americanrevolution.org expedition literature) |
| 9 | Cowpens date & Neuville coordinates | Cowpens **Jan 17, 1781** → SF-2 ("six years" is five); Neuville **46.700, -71.583** → SF-1 (packed dot ~14 mi off) |

## SURFACES TRACED CLEAN (no findings)

Dossier identity/stats/sides/outcome · all five commander bios (modulo SF-2) · all image
captions and credits (Trumbull 1786 caveat, Clemens 1798, Faden 1776 LOC gm71005424, Hart
mezzotint March 26, 1776 captioned as period print not life portrait, Carleton
"traditionally identified" hedge, Maclean NONE) · Locator A strategic dots/routes (modulo
SF-1; all other coordinates verified plausible: Ticonderoga 43.84,-73.39, Fort St. Jean
45.31,-73.27, Montreal 45.50,-73.57, Cambridge 42.37,-71.11, Newburyport 42.81,-70.87,
Fort Western/Augusta 44.31,-69.78, Lake Mégantic 45.58,-70.88, Trois-Rivières 46.34,-72.54)
· Locator B tactical map · section 1 (Ticonderoga May 1775, Congress late June, St. Jean
mid-Sept–early Nov, Montreal Nov 13, Carleton's muffled-paddles escape with the costume
detail kept at "by some tellings," the march inventory, ~1,100→~600 with Enos ~300 back,
Dearborn's Newfoundland, "American Hannibal" as period-press praise, Nov 13–14 crossing,
~20 mi withdrawal, Dec 2–3 junction, Burr at 19, Maclean ~200 mid-Nov, Carleton Nov 19,
proclamation Nov 22, garrison ~1,800/~150 cannon, Dec 9 promotion unlearned, enlistment
cliff, no-doom-music calculation framing) · section 2 (feints Livingston ~200/Brown ~160,
rockets ~4–5 am, column ~300/lead ~50, two palisades, Près-de-Ville picket ~30–50 under
Chabot and Picard, Campbell's withdrawal, Arnold's ~600, abandoned brass 6-pounder, the
wound, Morgan's barricade, the 30 prisoners, the stall ½–1 hr, second barricade 12 ft
(Caldwell/Voyer/7th Foot/Maclean/sailors), Laws ~200–500, Dearborn's surrender, ~10 am,
~400–430 captured, sword to a priest) · both MEANWHILE blocks (every fact pack-traceable;
the Montcalm-1759 lesson voiced as reading, not quote, per §4) · section 3 (New Year's Day
identification kept generic, Cramahé coffin, Jan 4 burial confirmed by web ("interment...
about sundown on January 4"), mid-Jan news, Britain's opposition eulogies at one line,
Arnold BG Jan 10, ~600 in the lines, smallpox/self-inoculation, hard-money collapse,
Wooster then Thomas, one-line Washington-inoculation cross-ref, May 6 HMS Surprise + two
consorts (web: Surprise/Isis/+1 — consistent), 9,000+ under Burgoyne, Thomas dead June 2,
Trois-Rivières June 8, fourteenth-colony analysis per uncertainty #9, Janet wife-2/widow-53
never remarried) · fact ledger itself (accurately characterizes its own confidence levels;
no over-claiming found).
