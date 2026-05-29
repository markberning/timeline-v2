# Backward Cross-Cultural Pass — Ledger

Records Persona-E PART 2 (backward) findings for the three new civs
(medieval-japan, islamic-persia, muscovite-russia) that were **NOT** applied as a
plain cross-link, and why. Applied cross-links live in the reference civs'
`content/.cross-links-<ref>.json` files. Every touched reference civ was
re-linted with `lint-links --strict` and introduced **0 new errors**.

Pass date: 2026-05-28. Reference civs touched: heian-japan, edo-japan,
mongol-empire, persian-empire, islamic-golden-age, safavid-persia,
timurid-empire, russian-empire, kievan-rus.

---

## medieval-japan

### 1. edo-japan Ch1 — stale "Ancient Japan TL" cross-ref (audit backward finding 10)
**Status: needs-human (stale-ref reconciliation), fresh links added alongside.**
`content/.cross-links-edo-japan.json` chapter "1" already contains an entry with
matchText `"Ancient Japan TL"` pointing at `heian-japan` Ch8, whose blurb routes
the Sengoku-unification backstory to "the closing chapters of the Ancient Japan
TL." That TL no longer exists (the omnibus was split into
prehistoric/asuka-nara/heian), and the Sengoku unification is now told in full by
**medieval-japan Ch9–14**. The audit says this pointer "should be retargeted to
the medieval-japan narrative."
- I did **not** silently rewrite/retarget the existing entry (it changes a
  reference civ's standing cross-ref target + visible blurb text — a curation
  decision).
- I **did** add fresh, correct medieval-japan cross-links in edo Ch1 on clean new
  anchors: `had collapsed into civil war`→MJ Ch9 (Ashikaga collapse),
  `vast hilltop fortresses`→MJ Ch14, `rotating volley fire behind wooden
  palisades`→MJ Ch12, `Born into a peasant family`→MJ Ch13,
  `What decided it was treachery`→MJ Ch14.
- **Human decision owed:** either retarget the `"Ancient Japan TL"` entry to
  medieval-japan (Ch9) and rewrite its blurb, or delete it as redundant now that
  the specific anchors above carry the load.

### 2. Nagashino "rotating volley" characterization tension (audit forward finding 11; edo backward finding 11)
**Status: applied-with-flag (tension noted in blurb) + ledgered.**
edo-japan Ch1 states Nobunaga's "three thousand arquebusiers in rotating volley
fire" flatly; medieval-japan Ch12 *qualifies* the same claim as "partly later
embroidery … stylized rather than literal." The cross-link I added
(`rotating volley fire behind wooden palisades`→MJ Ch12) flags the divergence in
its blurb. No factual rewrite of edo's prose was made.
- **Human decision owed (optional):** whether edo Ch1 should be softened to match
  MJ Ch12's caution, or left as-is with the cross-link carrying the flag.

### 3. mongol-empire Ch6 "destroyed by typhoons" vs MJ Ch4 skeptical hedge (audit backward finding 8)
**Status: applied-with-flag + ledgered.**
mongol-empire Ch6 attributes the failed Japan invasions almost entirely to the
typhoons ("both of which were destroyed by typhoons"); medieval-japan Ch4
deliberately pushes back, arguing the Hakata wall + coordinated samurai defense
stalled the fleets offshore first and that the 1274 storm is "the part historians
most doubt." The cross-link I added (`Kublai sent fleets against`→MJ Ch4) carries
this skeptical counter-account in its blurb. No rewrite of the mongol-empire
factual claim was made.
- **Human decision owed (optional):** whether mongol Ch6's clean "destroyed by
  typhoons" line should be hedged to match MJ Ch4, or left with the cross-link as
  the bridge.

---

## islamic-persia

### 1. Nizamiyya of Baghdad founding date — 1065 vs 1067 (audit backward finding 11; forward finding 15)
**Status: needs-human (factual date discrepancy), tension flagged in blurb.**
islamic-golden-age Ch9 dates the Baghdad Nizamiyya to **1065**; islamic-persia
Ch5 dates it to **1067**. The cross-link I added in IGA Ch9
(`the great vizier of the Seljuk sultans`→islamic-persia Ch5) explicitly flags the
mismatch in its blurb and asks the editor to settle on one date.
- **Human decision owed:** reconcile to a single founding year across both
  narratives (do not let the corpus assert both). Did not edit either narrative's
  date.

### 2. Buyid amir who took Baghdad in 945 — "Ahmad" vs "Mu'izz al-Dawla" (audit forward finding 12)
**Status: out-of-scope (forward finding), noted for completeness.**
islamic-persia Ch4 names the Buyid who took Baghdad as "Ahmad"; islamic-golden-age
Ch9 names him "Mu'izz al-Dawla." These are very likely the same man (Ahmad ibn
Buya took the laqab Mu'izz al-Dawla), but the two TLs should not read as
disagreeing. This is a **forward** finding (a gap/needed name-check in the NEW
civ, islamic-persia), and this task covers backward findings only — flagged here
so it is not lost. **Human decision owed:** verify the identity and harmonize the
naming when islamic-persia ships (ideally name both forms once).

*(No backward islamic-persia finding had an unbuilt cross-ref target; all were
applied as cross-links in persian-empire, islamic-golden-age, mongol-empire,
safavid-persia, and timurid-empire.)*

---

## muscovite-russia

### 1. mongol-empire Ch9 — "Sarai over Constantinople" administrative-borrowing vs MJ-side skepticism (audit backward finding 19)
**Status: applied-with-flag + ledgered.**
mongol-empire Ch9 argues Russian administrative practice "owed at least as much to
Sarai as to Constantinople" (Turkic-Mongol loan-words for treasury/customs/money),
while muscovite-russia Ch2 treats the stronger "the Mongols invented Russian
autocracy" thesis with deep suspicion. The audit asked for "a cross-reference
acknowledging the debate" rather than a silent factual rewrite. The cross-link I
added (`owed at least as much to Sarai`→muscovite-russia Ch2) does exactly that —
its blurb states the two are best read together (administrative borrowing real;
"Asiatic despotism as origin of autocracy" is the caricature Ch2 rejects).
- **Human decision owed (optional):** confirm the framing is balanced; no narrative
  prose was changed.

### 2. russian-empire Ch1 — Third Rome stated flatly vs muscovite Ch6 skepticism (audit backward finding 3)
**Status: applied-with-flag + ledgered.**
russian-empire Ch1 presents the "Third Rome" idea fairly flatly; muscovite-russia
Ch6 gives the corpus's most skeptical and complete treatment (a couple of lines in
a monk's letter, inflated by later writers; far less weight at the time than the
legend claims). The cross-link I added (`the last surviving seat of true
Christianity`→muscovite-russia Ch6) flags this in its blurb so the two are not
read as in tension. No rewrite of russian-empire's prose was made.
- **Human decision owed (optional):** whether russian-empire Ch1 should add a
  hedge of its own, or rely on the cross-link to carry the skepticism.

### 3. russian-empire Ch4 — Table of Ranks (1722) scope overhang (audit forward finding 46)
**Status: out-of-scope (forward finding), noted for completeness.**
muscovite-russia Ch12 dates the Table of Ranks to 1722 — after the 1721 imperial
proclamation it otherwise treats as the book's terminus, a slight overhang into
the russian-empire sequel. This is a **forward** scope note about the NEW civ, not
a backward finding, so it was not actioned here. **Human decision owed:** confirm
both narratives agree the Table of Ranks sits on the muscovite/imperial seam.

*(All other muscovite-russia backward findings — russian-empire Ch1/2/3/17,
kievan-rus Ch12, mongol-empire Ch7/8/9 — were applied as cross-links.)*
