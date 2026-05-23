# Antietam — Retrofit (4 comprehensiveness MUST-ADDs)

Author agent · 2026-05-23. Source for all new material: `antietam-factpack-addendum.md`.
This is a weave-in, not a rewrite. Existing blocks are preserved; new blocks are inserted at
the points below so they read as if always there. Do NOT edit the .tsx in this pass — paste
these objects into `ANTIETAM_NARR` after fact-check sign-off.

Block-shape note: Antietam uses single-quote string delimiters with TYPOGRAPHIC apostrophes/
quotes inside the text (’ ‘ “ ”), so the objects below need no escaping.

---

## MUST-ADD 3 — Hood's counterattack (the South's tactical voice in the Cornfield)

**Section:** `cornfield`

**INSERT POINT — paste immediately AFTER the existing block that begins:**
> `'Union Maj. Gen. Joseph Hooker (North) sent his I Corps smashing…'`

(That block already describes the Cornfield changing hands ~15 times "for a few hours" without
saying *who* kept driving the Union back. Hood's counterattack is the missing cause. The
side-tag rule is satisfied because John Bell Hood is first-mentioned here in this section.)

**Block(s) to paste:**

```js
      { p: 'For a while it was the Confederate left simply absorbing the blow and bleeding. Then the South hit back. Brig. Gen. John Bell Hood’s (South) division had been pulled out of the line just before dawn to cook the first hot breakfast the men had seen in days — and they were yanked off their half-cooked food and thrown straight into the Cornfield, hungry and furious. Hood’s counterattack was the engine behind all that back-and-forth: his division came screaming north through the corn and drove the Union troops back out of it, shoving the morning’s tide the other way. It is a large part of why the field changed hands so many times instead of falling once and staying fallen. It also cost him nearly everything. Hood’s division was wrecked doing it, losing somewhere around sixty percent of its men in the corn. Asked afterward where his division had gotten to, Hood is supposed to have answered that it was dead on the field. Whether or not he said it in exactly those words, it was very nearly the literal truth.' },
```

**Why here / weave:** the existing prose says the field changed hands ~15 times "for a few
hours" but never names the force driving the reversals. This block supplies the South's
tactical agency (dual-POV requirement) and explains the rhythm the section already describes.
The "half-cooked breakfast" detail is a SHOULD-CONSIDER-grade flourish; it is well-attested
and earns the paragraph, but the load-bearing claims are independent of it.

---

## MUST-ADD 1 + MUST-ADD 2 — Hooker wounded / leaves the field; Mansfield's XII Corps + Mansfield killed

**Section:** `cornfield`

**INSERT POINT — paste immediately AFTER the new Hood block above** (i.e. after Hood, before
the existing `{ h: 'The Dunker Church', … }` heading). These two MUST-ADDs share one beat —
"the morning was three corps and it cost the North two of its generals" — so they read best as
a single block plus a closing italic line, slotted as the bridge between the Cornfield fight
and the Dunker Church.

**INSERT POINT (existing block this goes BEFORE):**
> `{ h: 'The Dunker Church', eyebrow: 'A pacifist chapel at the center of it' }`

**Block(s) to paste:**

```js
      { p: 'The corn was eating Union generals as fast as it ate enlisted men. Around mid-morning Hooker himself was shot through the foot and had to be carried from the field, and with him went the one commander who had been driving the whole northern attack — leadership of his I Corps passing on the spot to Brig. Gen. George Meade (North). And the morning was not one corps but a relay of them: when Hooker’s drive stalled, a second wave came up behind it, Maj. Gen. Joseph K. F. Mansfield’s (North) XII Corps, feeding fresh men into the same killing ground. Mansfield, a white-bearded old soldier of long service, rode forward to position his troops and was almost immediately shot down; he died of the wound the next day. Two senior Union generals were down before noon — one carried off, one dying — and a third corps was still waiting its turn to be fed in.' },
      { p: 'The North kept sending men into the same field, one corps after another, and the field kept handing the men back broken.', i: true },
```

**Why here / weave:** the shipped section gives Hooker a grand entrance ("sent his I Corps
smashing") and then loses track of him entirely; this gives him closure. It also corrects the
section's biggest understatement — that the morning was three Union corps, not one — without
disturbing the existing Cornfield and West Woods set-pieces. The italic closer matches the
section's existing rhythm (short italic punch-lines elsewhere in the file) and hands off
cleanly to the Dunker Church.

---

## MUST-ADD 4 — The Irish Brigade at the Sunken Road / Bloody Lane

**Section:** `bridge`

**INSERT POINT — paste immediately AFTER the existing opening block that begins:**
> `'By late morning the fighting slid south to the center…'`

(That block ends "…shot down by the men sheltered in the sunken road. For hours the lane
held." The Irish Brigade block goes between it and the existing "Then it didn’t." block — it
is one of the waves "shot down," made specific and human, and it sits naturally just before
the breakthrough. Meagher is first-mentioned here, so his side-tag is correct.)

**Block(s) to paste:**

```js
      { p: 'One of those waves has a name. Among the Union brigades sent up the rising ground was the Irish Brigade — men recruited largely from Irish immigrant neighborhoods of New York and Boston, fighting under green regimental flags, led by Brig. Gen. Thomas Francis Meagher (North). Before they stepped off toward the lane, their Catholic chaplain rode the length of the line on horseback and gave the men general absolution — the last rites of their faith, granted in advance, to soldiers about to walk into fire. Then they went forward. They walked into the worst of the sunken-road fire and were torn apart: the brigade lost on the order of five hundred and forty men in the attack, roughly three of every five who started up the slope. The green flags went down and were picked up and went down again. It is one of the most-told moments of the whole day — a brigade given absolution and then very nearly destroyed inside the next hour.' },
```

**Why here / weave:** the midday phase is built on human-cost texture (the Bloody Lane "killing
chute," the dead "heaped along its length"), but the shipped prose describes the slaughter in
the aggregate — anonymous "wave after wave." The Irish Brigade is the named, human centerpiece
the addendum flags as the section's missing centerpiece, and it lands exactly where the prose
needs a face on the cost, just before "Then it didn’t."

**[VERIFY] handling (per task brief):** the chaplain is written generically as "their Catholic
chaplain" so the prose does NOT hinge on the unverified name (Fr. Thomas Ouellet, S.J., 69th
NY). If the fact-checker confirms the name, "their Catholic chaplain" can be replaced in place
with "their chaplain, Fr. Thomas Ouellet" with zero structural change; if it cannot be
confirmed, the line already stands correctly as-is. Likewise the Hood quote is phrased as
reported speech ("is supposed to have answered that it was dead on the field… Whether or not he
said it in exactly those words") so the paragraph survives intact whether the quote is
confirmed, reworded, or cut.

---

## Fact ledger (new material only)

Legend: claim → addendum source item · status.

### Cornfield — Hood block (MUST-ADD 3)
| Claim | Source | Notes / flags |
|---|---|---|
| John Bell Hood is a Brig. Gen., Confederate (South) | MUST-ADD 3 | Side-tag first mention in section. |
| Hood's division launched the counterattack that drove Union troops back through the Cornfield | MUST-ADD 3 | Stated as "the engine behind the field changing hands ~15 times." |
| Hood's counterattack explains the field changing hands repeatedly | MUST-ADD 3 | Causal link the section previously lacked. |
| Hood's division suffered ~60% casualties | MUST-ADD 3 | Written "somewhere around sixty percent." |
| Hood, asked where his division was, replied roughly "Dead on the field." | MUST-ADD 3 `[VERIFY exact quote wording]` | **[VERIFY]** — written as reported speech, NOT a block quote; phrasing ("is supposed to have answered… Whether or not he said it in exactly those words") survives confirm-reword-or-cut without breaking the paragraph. |
| Division pulled out before dawn to cook breakfast, yanked back into the fight | SHOULD-CONSIDER-grade flourish (well-attested; not in addendum verbatim) | **[VERIFY]** — color detail, not load-bearing; cut cleanly if unconfirmed (sentence is removable without harming the block). |

### Cornfield — Hooker + Mansfield block (MUST-ADD 1 + 2)
| Claim | Source | Notes / flags |
|---|---|---|
| Joseph Hooker = Maj. Gen., commanded I Corps, North | MUST-ADD 1 (+ pre-existing in section) | Already side-tagged earlier in section; not re-tagged. |
| Hooker shot through the foot, mid-morning, carried from field | MUST-ADD 1 | Time written as "around mid-morning," not a hard clock time. `[VERIFY exact time]` carried — addendum gives ~9:30 a.m.; prose avoids a precise time so it cannot be wrong. |
| I Corps command passed to Brig. Gen. George Meade (North) | MUST-ADD 1 | Side-tag first mention. Addendum: "temporarily"; prose says "on the spot," consistent. |
| Morning was a relay of corps (I → XII → II), not one | MUST-ADD 2 | Written as "a relay of them… a second wave… a third corps still waiting." |
| Joseph K. F. Mansfield = Maj. Gen., commanded XII Corps, North | MUST-ADD 2 | Side-tag first mention. |
| Mansfield mortally wounded advancing his corps; died next day | MUST-ADD 2 | Addendum: wounded Sept 17, died Sept 18 → "died of the wound the next day." |
| "white-bearded old soldier of long service" | descriptive characterization | **[VERIFY]** — Mansfield was 58 and newly in field command; descriptor is conservative and supportable, but flag for confirm; trivially cut. |
| Two senior Union generals down before noon | MUST-ADD 2 (significance line) | Synthesis of items 1 + 2. |

### Bridge — Irish Brigade block (MUST-ADD 4)
| Claim | Source | Notes / flags |
|---|---|---|
| Thomas Francis Meagher = Brig. Gen., commanded the Irish Brigade, North | MUST-ADD 4 | Side-tag first mention in this section. Addendum spells "Thomas F. Meagher"; full first name used. |
| Irish Brigade recruited largely from Irish immigrant neighborhoods (NY/Boston), green flags | context (well-attested; not verbatim in addendum) | **[VERIFY]** — standard background; cut to "the Irish Brigade" if challenged without harming the block. |
| Catholic chaplain administered (general) absolution before the assault | MUST-ADD 4 `[VERIFY chaplain name]` | **[VERIFY]** — chaplain written GENERICALLY ("their Catholic chaplain") per brief; name (Fr. Thomas Ouellet, S.J., 69th NY) deliberately omitted from prose so nothing hinges on it. Drop-in slot noted above if confirmed. |
| Brigade lost ~540 men in the attack | MUST-ADD 4 | Written "on the order of five hundred and forty men." |
| ~60% casualties | MUST-ADD 4 | Written "roughly three of every five who started up the slope." |
| Attack timed to before the breakthrough ("Then it didn’t") | placement | Sequencing only; the Bloody Lane held "for hours" then broke — Irish Brigade is one of the assaulting waves, consistent with shipped chronology. |

### Items deliberately NOT added
- Harpers Ferry prisoner count, South Mountain clause, Maryland-emancipation irony, Clara
  Barton (all SHOULD-CONSIDER) — left out; none fit the four target insert points cheaply, and
  the brief said weave SHOULD-CONSIDERs only where natural. The existing `bloodiest` section
  already carries the emancipation close and the existing `bridge` section already explains
  A.P. Hill marching from Harpers Ferry, so those SHOULD-CONSIDERs would be redundant here.
