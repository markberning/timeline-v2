# Fact pack — NEOCLASSICAL & ROMANTIC ERA (kind: ERA, era id `nro`, c.1750–1850; Western; the "lay of the land" read — an ARGUMENT across two movements, Reason vs Feeling, NOT a movement checklist)

Coordinator-built ground truth for the art content pipeline
(`audits/art-content-pipeline.md`). The author drafts the **era-level chaptered
narrative** ONLY from this. Every concrete claim traces to a sourced item here or is
flagged `⚠️ UNVERIFIED`. (Web-checked 2026-06-12; the fact-checker gate re-verifies
independently against the source key.)

Dimensions are given in cm from the museum record AND converted to **feet/inches**
(this app uses imperial only, never cm — `feedback_art_dimensions_imperial`). Commons
filenames keep their original form (they are file identifiers — do not edit).

## The section
- The **Neoclassical & Romantic ERA** read: `/art/nro/s/{sectionId}` (the era's "lay
  of the land," the runway across its two movements). Era id `nro`, range
  **c.1750–1850**, sits in the app **between the Baroque and the Modern era** — it is
  the only gap. (Coordinator registers the `nro` era const in `src/lib/art-content.ts`.)
- **kind = ERA** → altitude is the whole sweep, framed by a throughline; an **argument
  across the era's two movements** (Neoclassicism and Romanticism), NOT a movement
  checklist and NOT a survey. Looking expectation: "a few signature works, vividly."
- The two MOVEMENT reads (Neoclassicism, Romanticism) are authored separately (sibling
  packs `nro-neoclassicism-factpack.md` / `nro-romanticism-factpack.md`). **This era
  read owns the ARGUMENT and the handoff between them — go shallow-but-sharp on each
  movement and DEEP on why they belong in one era and how the era hands off to the next.
  Do NOT duplicate the movement reads.** (Nesting gate 7.)
- Deliverable now = the **chaptered era narrative** (the prose) + its `sections`
  chapter metadata + a Fact ledger. Era-page metadata (the throughline, the "break"
  block) the coordinator assembles from this pack. A manifesto block is **not required
  at era altitude** (a manifesto belongs to a movement, not an era — see §3).

## Throughline (the one idea) — REASON vs FEELING
A single century of European art, told as one argument with two answers. First,
**Neoclassicism** (David, then Ingres) answers Rococo frivolity with classical
restraint: civic virtue over private pleasure, the clean primacy of **line** over
loose color, moral seriousness, and the heroes of Greece and Rome held up as a mirror
for the present. It rises with the Enlightenment, with the freshly dug-up ancient towns
of **Pompeii and Herculaneum**, with **Winckelmann's** call for "a noble simplicity and
quiet grandeur," and it becomes the official look of the **French Revolution** and then
**Napoleon**. Then **Romanticism** (Goya, Géricault, Delacroix; Turner, Friedrich,
Constable) revolts against the cold of reason itself: **emotion over reason**, **color
over line**, the **sublime** (terror and grandeur at a safe remove), nature's power, the
individual and the nation, dream and nightmare. The crucial twist the reader must hold:
the two are **NOT a tidy sequence**. They **overlap** and fight — David (1748–1825) and
Goya (1746–1828) are near-exact contemporaries; Ingres and Delacroix snarl at each other
across the same Paris Salon for decades. And under all of it runs one continuous
political earthquake: **Enlightenment → French Revolution (1789) → Napoleon → the
Restoration (1814/15) → the revolution of 1830.** Art and politics are the same story
here. The era hands off, at last, to **Realism** (Courbet) — which throws out the gods
AND the storms, painting only the ordinary present, and opens the Modern era the app
already covers.

**Two-sentence version (for the report):** A single century of European art told as one
argument — Neoclassicism's reason, line, and civic virtue (David, Ingres), rising with
the Enlightenment and the dig-sites of Pompeii, answered by Romanticism's revolt of
feeling, color, and the sublime (Goya, Géricault, Delacroix, Turner, Friedrich). The two
overlap and fight rather than succeed each other, all of it riding one continuous
political earthquake from the French Revolution through Napoleon to 1830, before Realism
ends both and opens the modern age.

---

## 0. THE LEGEND LEDGER — documented vs myth (READ FIRST)

| Claim | Verdict | The real fact |
|---|---|---|
| The artists called themselves "Neoclassical" and "Romantic" | **MYTH — both are LATER labels, not self-descriptions** | **"Romanticism"** arises as a self-conscious aesthetic category in literary criticism **c.1798–1800** (the Schlegel brothers' *romantische Poesie*, Jena circle; spread to a wider public by Mme de Staël's *De l'Allemagne*, 1813); the painters were tagged with it, mostly by critics. **"Neoclassicism"** is later still — a **late-19th-century (1880s) historian's coinage** for the c.1750–1850 classical revival. David and Winckelmann never called themselves "Neoclassical"; contemporaries spoke of the *vrai style* / *le goût grec* ("the true style," "Greek taste"). Never put either label in the artists' own mouths. [Term-Neo][Term-Rom][MetRom] |
| Winckelmann's exact phrase | **DOCUMENTED — "edle Einfalt und stille Größe," 1755** | Full line: *"Das allgemeine vorzügliche Kennzeichen der griechischen Meisterstücke ist endlich eine edle Einfalt, und eine stille Größe…"* — standard English **"a noble simplicity and quiet grandeur"** (both in posture and in expression). It is in **Johann Joachim Winckelmann, *Gedanken über die Nachahmung der griechischen Werke in der Malerei und Bildhauerkunst*** (*Reflections on the Imitation of Greek Works in Painting and Sculpture*), **1755**. Quote it as Winckelmann, 1755; gate the wording. [Winckelmann] |
| David literally ran the Revolution's art and voted for the king's death | **DOCUMENTED (be precise) — yes to both, with one wording nuance** | David was elected **deputy to the National Convention for Paris (Sept 1792)**; he **voted for the death of Louis XVI (Jan 1793) and signed the death warrant** (a regicide); he sat on the **Committee of General Security**, signing many arrest orders; he **designed the Revolution's festivals and propaganda** (e.g. the Festival of the Supreme Being) and was effectively its **artistic director / impresario** — but "ran the Revolution's art" is a fair *gloss*, not a formal office, so phrase it as artistic director. After Robespierre fell he was **arrested (Aug 1794)** and imprisoned; later he became **First Painter to the Emperor Napoleon (*Premier Peintre*, 18 Dec 1804)**. Don't soften the regicide; don't invent a title. [David-Bio][David-Nap] |
| The Enlightenment "caused" Neoclassicism | **HEDGE — true but incomplete (multiple causes)** | Neoclassicism grew out of **Enlightenment values** (reason, clarity, civic virtue, antiquity-as-model) **AND** the **archaeological rediscoveries** (Herculaneum 1738, Pompeii 1748) **AND** **Winckelmann's aesthetics** (1755 *Gedanken*; 1764 *History of the Art of Antiquity*), plus the academies and the Grand Tour. Write it as several converging strands, not one cause-and-effect. [Neo-Causes][Winckelmann][Pompeii] |
| "Romanticism" means romance / love | **MYTH — it's about intensity, not love stories** | The name derives from "**romance**" in the old literary sense: the medieval **vernacular verse tale** (chivalric *romaunt*), written in the **Romance languages** (Old French *romanz* = "in the vernacular"). The modern "romance = love story" sense is a *later* narrowing and is NOT the source. The movement is about **emotion, imagination, intensity, the sublime, nature, the individual, the medieval and exotic** — Goya's firing squad and Géricault's raft of corpses are "Romantic," and there's not a love story in sight. [Etym-Rom][MetRom] |
| Neoclassicism then Romanticism, cleanly in sequence | **MYTH — they OVERLAP and compete** | **David (1748–1825) and Goya (1746–1828) are near-exact contemporaries** — the arch-Neoclassicist and the proto-Romantic lived the same years. **Ingres (1780–1867, Neoclassical) and Delacroix (1798–1863, Romantic)** worked simultaneously and were the **rival figureheads of the two schools at the Paris Salon** (the rivalry crystallized at the **1824** Salon — Ingres's *Vow of Louis XIII* vs Delacroix's *Massacre at Chios* — and the **1827** Salon; at the 1855 Exposition they were given separate rooms). The era is two concurrent, fighting tendencies, not a baton-pass. [Ingres-Delacroix][MetGoya] |
| The sublime was an invention of the painters | **HEDGE — the THEORY predates and underwrites the painting** | The aesthetic of the **sublime** (vastness, power, terror, infinity — pleasurable dread at a safe remove) was given its foundational modern treatment in **Edmund Burke, *A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful*, 1757** — separating the **Sublime** (terror, the overwhelming) from the **Beautiful** (small, smooth) and locating both in the *beholder's* feeling. The Romantics painted what Burke (and later Kant) had theorized. Credit the idea to the philosophy, not to the canvas. [Burke] |

---

## 1. THE ERA STORY (the argument: setup → Neoclassicism → the political earthquake → Romanticism → the handoff)

### The world just before (the setup — see also the BREAK block, §2)
- Mid-18th-century elite taste was **Rococo**: light, ornamental, aristocratic, devoted
  to private pleasure — pastel boudoir scenes, flirtation, mythological undress. Its
  emblems: **François Boucher** (Madame de Pompadour's painter; soft pink goddesses) and
  **Jean-Honoré Fragonard** (*The Swing*, 1767 — a girl on a swing kicking off a slipper
  while a hidden lover looks up her skirts). Charming, weightless, and to the next
  generation, morally empty. [Boucher][Fragonard]

### Neoclassicism — reason, line, civic virtue
- **The triggers (multiple — see ledger HEDGE):** the **Enlightenment**'s prizing of
  reason and civic virtue; the **rediscovery of antiquity** underfoot — **Herculaneum
  excavated from 1738, Pompeii from 1748** under the Bourbon king of Naples, flooding
  Europe with real Roman rooms, objects, and wall-paintings; and **Winckelmann's**
  theory — his 1755 call for "a **noble simplicity and quiet grandeur**" made Greek art
  the measure of all art. [Pompeii][Winckelmann][Neo-Causes]
- **The look:** clear contour and drawing (**line over color**); smooth finish; sober,
  stage-like compositions; subjects from Greek and Roman history and myth chosen for
  their **moral lesson** (sacrifice, duty, stoic virtue). It is painting as ethics.
- **Jacques-Louis David (1748–1825)** is the movement's engine. ***Oath of the Horatii***
  (1784–85, Louvre): three brothers swear on their father's swords to die for Rome —
  rigid male resolve on the left, collapsing female grief on the right, every line as
  taut as the oath. It read as a summons to put country above self, five years before the
  Revolution made that literal. [Horatii]
- David then **became the Revolution** (ledger DOCUMENTED): deputy, regicide, festival-
  designer, the State's image-maker. ***The Death of Marat*** (1793, Brussels): the
  murdered radical journalist slumped in his medicinal bath, pen still in hand, turned by
  David into a secular *pietà* — a propaganda image and a genuinely great painting at
  once. [Marat]
- **Ingres (1780–1867)** carries Neoclassicism's line into the next generation and
  beyond — a David pupil who made line itself voluptuous (***La Grande Odalisque***, 1814,
  Louvre: a reclining nude with an anatomically impossible, sinuously long back, drawing
  bent in service of pure elegant contour). He becomes the **defender of line and the
  academy** against Delacroix's color for forty years. [Ingres]

### The political earthquake (the spine running under everything — get the chain right)
One continuous upheaval, and the art tracks it move for move:
- **Enlightenment** (18th c.) → **French Revolution begins, storming of the Bastille, 14
  July 1789** → **execution of Louis XVI, 21 January 1793** → **Napoleon's coup (18
  Brumaire), 9–10 November 1799** → **Napoleon proclaimed Emperor, 1804** (crowned at
  Notre-Dame, 2 Dec 1804) → **final defeat at Waterloo, 18 June 1815** → **Bourbon
  Restoration (twice: 1814, then again after the Hundred Days, 1815)** → **July
  Revolution, 1830** (the "Three Glorious Days," 27–29 July; the July Monarchy of
  Louis-Philippe). [Earthquake]
- Neoclassicism is the official style of the Revolution and Empire (David serves both);
  Romanticism is partly the recoil *from* the Revolution's failures and the wars'
  carnage — Goya's *Third of May* and Géricault's *Raft* are responses to specific
  political catastrophes, and Delacroix's *Liberty* is literally a painting of the 1830
  rising.

### Romanticism — feeling, color, the sublime
- **The revolt:** against the cold of reason — for **emotion, imagination, the
  individual**; against line — for **color and visible, agitated brushwork**; against the
  serene antique — for the **sublime** (Burke's terror-and-grandeur, 1757), wild nature,
  the medieval, the exotic, dream and nightmare. [Burke][MetRom]
- **Francisco Goya (1746–1828)** — David's contemporary, the proto-Romantic. ***The Third
  of May 1808*** (1814, Prado): a faceless French firing squad guns down Madrid civilians;
  the central victim throws up his arms in a white shirt, lit like a martyr, before the
  muzzles. No heroism, no order — just terror and slaughter. [TercerMayo]
- **Théodore Géricault (1791–1824)** — ***The Raft of the Medusa*** (1818–19, Louvre): a
  monumental, 16-by-23-foot canvas of the survivors of a real shipwreck heaped on a raft,
  the dying and the dead piled in a pyramid straining toward a speck of a rescue ship — a
  contemporary scandal painted at the scale of history painting. [Raft]
- **Eugène Delacroix (1798–1863)** — the color-and-passion standard-bearer, Ingres's
  rival. ***Liberty Leading the People*** (1830, Louvre): a bare-breasted allegorical
  Liberty in a Phrygian cap strides over the dead, tricolor in one hand and musket in the
  other, leading a ragged crowd over a barricade in the July rising. [Liberty]
- **Britain and Germany — the sublime in nature:** **J.M.W. Turner (1775–1851)** —
  ***The Slave Ship*** (1840, MFA Boston): a blazing orange-and-blood sunset over a sea
  where a slaver has thrown the dead and dying overboard ahead of a typhoon; the horror
  half-dissolved into pure light and color. [SlaveShip] **Caspar David Friedrich
  (1774–1840)** — ***Wanderer above the Sea of Fog*** (c.1818, Hamburger Kunsthalle): a
  lone figure seen from behind on a crag, gazing over a sea of mist — the individual
  small before the infinite, the very emblem of the Romantic sublime. [Wanderer]
  **John Constable (1776–1837)** — the English landscape of weather and ordinary
  countryside, observed close (the third great British name; name him as the quieter,
  observed-nature pole of British Romanticism — deep treatment in the movement read).

### How the two belong in ONE era (the argument, stated)
- They are **the same coin** — both are reactions to the same century of upheaval, both
  reject Rococo triviality, both take their subjects with deadly seriousness; they simply
  split on the central question of whether the answer is **order (reason, line, the
  antique)** or **intensity (feeling, color, the sublime)**. And they **overlap in time**
  (David/Goya; Ingres/Delacroix at the Salon) rather than succeed each other — which is
  exactly why the era is told as an *argument*, not a timeline. [Ingres-Delacroix]

### The handoff to the next era (Realism / the Modern era the app covers)
- The argument is ended not by one side winning but by a third position that rejects
  **both**: **Realism**, above all **Gustave Courbet**, who throws out the antique gods
  AND the Romantic storms to paint only the ordinary, contemporary, unidealized present
  (peasants, stone-breakers, a country burial at the scale of a history painting). That
  revolt against *both* Neoclassicism's idealized past and Romanticism's heightened
  feeling opens the **Modern era** the app already covers (its "Lay of the land" read +
  the Realism movement). **Reference the Modern-era / Realism reads for the handoff; do
  NOT re-tell them.** [Handoff-Realism]

**Why it mattered (one paragraph for the writer):** Between roughly 1750 and 1850 European
painting argued out, in pictures, the question the whole modern age would inherit: is the
truest art the one that orders the world by reason, or the one that tells the truth of
feeling? Neoclassicism answered with line, the antique, and civic virtue and became the
face of the Revolution; Romanticism answered with color, nature, and the sublime and
painted the era's terrors and longings. The two didn't take turns — they overlapped and
fought — and both were carried on the same flood of revolution and war. When Realism
finally walked away from both to paint only the plain present, the modern age had begun.
[MetRom][Ingres-Delacroix][Handoff-Realism]

---

## 2. THE BREAK BLOCK (`whatChanged`) — from Rococo pleasure to moral seriousness, then to the storm

The concrete change, stated plainly (not "revolutionary"):

> **Before:** mid-18th-century elite painting was **Rococo** — light, ornamental,
> aristocratic, made for private pleasure. Soft pastel goddesses, flirtation, gardens of
> idle dalliance: Boucher's pink mythologies, Fragonard's *Swing* (a girl kicking off a
> slipper toward a hidden admirer peering up her skirts). Beautiful, weightless, and about
> nothing more than delight.
>
> **After — first, Neoclassicism:** painting goes sober and severe. Out go the boudoir
> and the pastel; in come Greek and Roman heroes, clean hard contour (**line over
> color**), smooth finish, and subjects chosen for a **moral lesson** — sacrifice, duty,
> dying for your country. David's *Oath of the Horatii* puts grim male resolve where
> Fragonard had put a swing. Art becomes ethics, and then the official image of a
> Revolution.
>
> **After — then, Romanticism:** the next break is *against the coldness of reason
> itself.* Painting gets loud, agitated, and emotional: **color over line**, visible
> turbulent brushwork, and subjects of terror and grandeur — a firing squad (Goya), a
> raft of corpses (Géricault), a barricade (Delacroix), a sea swallowing a slave ship
> (Turner), a lone man before an infinite fog (Friedrich). The subject is no longer the
> antique ideal; it is **feeling and the sublime** — what overwhelms us.

### Before/after pairs (born-verified; all pre-1900 = public domain worldwide)

| Side | Work | Why it's the right one | Image / rights |
|---|---|---|---|
| **BEFORE (Rococo) — light, ornamental, aristocratic pleasure** | **Jean-Honoré Fragonard, *The Swing* (Les Hasards heureux de l'escarpolette), 1767, Wallace Collection, London.** 81 × 64.2 cm = **2 ft 7⅞ in × 2 ft 1¼ in**. | The single clearest emblem of Rococo frivolity (flirtation, a hidden lover, weightless pleasure) — exactly what Neoclassicism set out to bury. | `File:The Swing (P430).jpg` — **PD worldwide** (Fragonard d.1806). ✅ verified resolves. |
| (alt BEFORE) | **François Boucher, *Portrait of Madame de Pompadour*, 1756, Alte Pinakothek, Munich.** 212 × 164 cm = **6 ft 11½ in × 5 ft 4½ in**. | Boucher = the painter of the Rococo court's reigning taste; a softer, grander alternative "before." | `File:Boucher Marquise de Pompadour 1756.jpg` — **PD worldwide** (Boucher d.1770). ✅ verified resolves. |
| **AFTER — Neoclassical moral seriousness** | **Jacques-Louis David, *Oath of the Horatii*, 1784–85, Louvre.** (see §4) | The hinge image: Rococo's swing replaced by an oath; pleasure replaced by civic duty; soft color replaced by hard line. | `File:Jacques-Louis David, Le Serment des Horaces.jpg` — **PD worldwide.** ✅ |
| **AFTER — Romantic feeling / the sublime** | **Eugène Delacroix, *Liberty Leading the People*, 1830, Louvre** OR **Francisco Goya, *The Third of May 1808*, 1814, Prado.** (see §4) | The second break: order and antiquity give way to passion, color, and the terror/grandeur of the present. | Delacroix: `File:Eugène Delacroix - Le 28 Juillet. La Liberté guidant le peuple.jpg`; Goya: `File:El tres de mayo de 1808 en Madrid.jpg` — both **PD worldwide.** ✅ |

**Recommended handling:** the era break is a **two-step** change, so the block can show
**Fragonard's *Swing* (before)** against **David's *Oath* (the Neoclassical after)**, and
the prose then carries the *second* break (Neoclassical order → Romantic storm) with
**Goya's *Third of May*** or **Delacroix's *Liberty*** as the Romantic "after." All four
are PD worldwide and inlineable — unlike the Modern-era reads, this era has **no rights
problem at all** (everything pre-1900). Use full, uncropped works.

---

## 3. MANIFESTO / KEY-TEXTS — not a movement-style manifesto at era altitude (the era's underwriting TEXTS)

A formal "manifesto" block belongs to a movement, not an era, and neither Neoclassicism
nor Romanticism issued a single founding manifesto the way (say) the Futurists did. At
**era altitude the manifesto block is not required** (per the pipeline doc: "a manifesto
block only where one genuinely belongs at era altitude — rare"). What the era DOES have is
a pair of **underwriting theory texts** the author should name in the prose (each a real,
datable source — quote/cite, never assert from memory):

1. **Johann Joachim Winckelmann, *Gedanken über die Nachahmung der griechischen Werke…*
   (Reflections on the Imitation of Greek Works in Painting and Sculpture), 1755** — the
   theoretical charter of Neoclassicism: Greek art as the model, "**a noble simplicity and
   quiet grandeur**." [Winckelmann]
2. **Edmund Burke, *A Philosophical Enquiry into the Origin of Our Ideas of the Sublime
   and Beautiful*, 1757** — the foundational theory of the **sublime** that Romanticism
   would paint: terror, vastness, and power as a source of the strongest feeling, separate
   from mere beauty. [Burke]

(If the era page wants a "key-texts" surrogate block at all, set it as **two texts, not a
manifesto** — Winckelmann for the reason wing, Burke for the feeling wing — with
born-verified citations. Otherwise omit; it is not gate-required at era altitude.)

⚠️ **Quote-precision:** the Winckelmann phrase is widely reproduced — gate the exact
German and the standard English against the 1755 work, not a blog. Do not put a
manifesto-style first-person creed in any artist's mouth; these are **critics'/
philosophers'** texts, not painters' programs.

---

## 4. SIGNATURE WORKS — name a FEW vividly at era level (deep work-reads come later)

All works **pre-1900 → public domain worldwide**, tier `/commons/`, inlineable. Each
Commons filename below was fetched and confirmed to resolve to the correct work.
Dimensions in cm (museum record) + **ft/in** (display; convert in prose too).

### — NEOCLASSICISM —

#### 1. David — *Oath of the Horatii*, 1784–85 — the Neoclassical hinge / strong card candidate
- **Museum:** Louvre, Paris (INV 3692). Oil on canvas.
- **Dimensions:** 329.8 × 424.8 cm = **~10 ft 10 in × 13 ft 11¼ in**.
- **Blurb fact:** Three brothers raise their arms to swear on their father's outstretched
  swords to die for Rome; taut male resolve on the left, a knot of grieving women
  collapsing on the right. Painted five years before the Revolution, it reads as a call to
  put the republic above the self — Neoclassicism's manifesto in paint. [Horatii]
- **Image:** `File:Jacques-Louis David, Le Serment des Horaces.jpg` — **PD worldwide.** ✅
  (Valued image; metadata confirms David, 1784/85, 329.8×424.8 cm, Louvre.)

#### 2. David — *The Death of Marat*, 1793 — Revolution as secular pietà
- **Museum:** Royal Museums of Fine Arts of Belgium, Brussels. Oil on canvas.
- **Dimensions:** 165 × 128 cm = **~5 ft 5 in × 4 ft 2⅜ in**. (A couple of secondary
  sources say 162 cm; Commons + Wikipedia use 165 — cite 165.)
- **Blurb fact:** The murdered revolutionary journalist Jean-Paul Marat slumps dead in his
  medicinal bath, pen still in hand, the assassin's letter and knife below — David turning
  a political murder into a tender, austere martyrdom. Propaganda and great painting at
  once. [Marat]
- **Image:** `File:Death of Marat by David.jpg` — **PD worldwide.** ✅

#### 3. Ingres — *La Grande Odalisque*, 1814 — line made voluptuous
- **Museum:** Louvre, Paris (RF 1158). Oil on canvas. (Canonical date **1814**; first
  shown at the Salon of 1819 — one Commons metadata field muddies this with "1810," use
  1814.)
- **Dimensions:** 91 × 162 cm (88.9 × 162.56) = **~2 ft 11¾ in × 5 ft 3¾ in**.
- **Blurb fact:** A reclining harem nude with a famously, deliberately too-long back (an
  anatomy bent in service of pure flowing contour) — Ingres carrying David's primacy of
  **line** into the next generation and into exotic subject matter. [Ingres]
- **Image:** `File:Jean Auguste Dominique Ingres, La Grande Odalisque, 1814.jpg` — **PD
  worldwide.** ✅

### — ROMANTICISM —

#### 4. Goya — *The Third of May 1808*, 1814 — terror without heroism
- **Museum:** Museo del Prado, Madrid. Oil on canvas.
- **Dimensions:** 268 × 347 cm = **~8 ft 9½ in × 11 ft 4⅝ in**.
- **Blurb fact:** A faceless French firing squad guns down Madrid civilians at night; the
  central victim flings up his arms in a glaring white shirt, lit like a martyr before the
  muzzles, a dead man already crumpled in his own blood at his feet. No order, no glory —
  modern slaughter. Goya (1746–1828) is David's near-exact contemporary and the era's
  proof that the two movements overlap. [TercerMayo]
- **Image:** `File:El tres de mayo de 1808 en Madrid.jpg` (simple form, resolves) OR the
  featured-picture variant `File:El Tres de Mayo, by Francisco de Goya, from Prado thin
  black margin.jpg` — **PD worldwide.** ✅

#### 5. Géricault — *The Raft of the Medusa*, 1818–19 — scandal at history-painting scale
- **Museum:** Louvre, Paris (INV 4884). Oil on canvas.
- **Dimensions:** 491 × 716 cm = **~16 ft 1¼ in × 23 ft 5¾ in**. (One Commons file caption
  rounds to 490 — canonical is 491.)
- **Blurb fact:** The survivors of a real, recent shipwreck (the frigate *Méduse*) heaped
  on a makeshift raft, the dead and dying piled into a rising pyramid that strains toward a
  speck of a rescue ship on the horizon. A current-events horror painted at the giant scale
  once reserved for gods and kings. [Raft]
- **Image:** `File:JEAN LOUIS THÉODORE GÉRICAULT - La Balsa de la Medusa (Museo del
  Louvre, 1818-19).jpg` OR `File:Théodore Géricault - The Raft of the Medusa - WGA08630.jpg`
  — **PD worldwide.** ✅

#### 6. Delacroix — *Liberty Leading the People*, 1830 — color, passion, the nation
- **Museum:** Louvre, Paris (RF 129). Oil on canvas.
- **Dimensions:** 260 × 325 cm = **~8 ft 6⅜ in × 10 ft 8 in**.
- **Blurb fact:** A bare-breasted allegorical Liberty in a Phrygian cap strides over the
  dead and the rubble of a barricade, tricolor raised in one hand and a musket in the
  other, leading a ragged mix of a top-hatted bourgeois and a street boy through the gun-
  smoke of the July 1830 rising. Delacroix (1798–1863) is Ingres's lifelong Salon rival —
  color against line. [Liberty]
- **Image:** `File:Eugène Delacroix - Le 28 Juillet. La Liberté guidant le peuple.jpg` —
  **PD worldwide.** ✅

#### 7. Turner — *The Slave Ship*, 1840 — the sublime dissolving into light
- **Museum:** Museum of Fine Arts, Boston (acc. 99.22). Oil on canvas. (Full title:
  *Slavers Throwing overboard the Dead and Dying — Typhon coming on.*)
- **Dimensions:** 90.8 × 122.6 cm = **~2 ft 11¾ in × 4 ft ¼ in**.
- **Blurb fact:** A blazing orange-and-blood sea and sky where a slave ship has thrown the
  dead and dying overboard ahead of an oncoming typhoon — manacled limbs and feeding fish
  barely legible in the lower right, the atrocity half-dissolved into pure turbulent color
  and light. Romantic sublime as moral fury. [SlaveShip]
- **Image:** `File:Slave-ship.jpg` — **PD worldwide.** ✅

#### 8. Friedrich — *Wanderer above the Sea of Fog*, c.1818 — the emblem of the sublime
- **Museum:** Hamburger Kunsthalle, Hamburg (acc. 5161). Oil on canvas. (Use canonical
  figures; the Commons file metadata rounds to 98×74 / "c.1817.")
- **Dimensions:** 94.8 × 74.8 cm = **~3 ft 1¼ in × 2 ft 5½ in**.
- **Blurb fact:** A lone man in a dark coat, seen from behind on a rocky summit, gazing out
  over a sea of swirling mist and half-hidden peaks — the individual standing small before
  the infinite. The single most recognizable image of the Romantic sublime, and of nature
  as something to be felt, not measured. [Wanderer]
- **Image:** `File:Caspar David Friedrich - Wanderer above the sea of fog.jpg` — **PD
  worldwide.** ✅

**Card-image note (no rights problem):** unlike the Modern-era reads, every work here is
PD worldwide and freely inlineable. For the era CARD, prefer a non-portrait, near-square
landscape-band fit: Goya's *Third of May* or Delacroix's *Liberty* (history-scale,
dramatic, instantly readable) read better in the hero band than the tall *Wanderer* or the
wide *Raft*/*Horatii* (which letterbox). Show the WHOLE work, crop only true scan borders.

---

## 5. LINEAGE (the lineage block, era altitude)

### Parents (what the era grew out of)
- **Rococo** — the immediate predecessor the era rejected (Boucher, Fragonard): the
  aristocratic-pleasure tradition Neoclassicism buried. [Boucher][Fragonard]
- **Classical antiquity itself**, freshly excavated — **Pompeii (1748) and Herculaneum
  (1738)** — plus Renaissance/Baroque classicism (Raphael, Poussin) that Neoclassicism
  re-grounded in. [Pompeii]
- **Enlightenment thought** (reason, civic virtue) and the **theory texts** —
  Winckelmann (1755) for the reason wing, Burke (1757) for the feeling wing.
  [Winckelmann][Burke][Neo-Causes]
- **Baroque** color and drama (Rubens above all) as the deep ancestor of the Romantic
  color-and-movement line that Delacroix revived. [MetRom]

### Children (what the era fed)
- **Realism** (Courbet) — the DIRECT heir-by-rejection: throws out both the antique ideal
  and the Romantic storm to paint the plain present; opens the Modern era. [Handoff-Realism]
- **Academic / Salon painting** (the mid-19th-c. establishment) — Ingres's primacy-of-
  line and "finish" became the official academic doctrine the Modern era's rebels (Manet,
  the Impressionists) would later fight. [Ingres-Delacroix]
- **Impressionism** (more distantly) — inherits Romanticism's loose, visible brushwork
  and color, and Turner's dissolving light, even while rejecting Romantic subject matter.
  [MetRom]

### Gave / took notes
- **Took from Rococo:** mostly a target to react against (and, for Romanticism, a taste
  for color and sensuous paint that the Rubénistes had kept alive).
- **Took from antiquity + Winckelmann + the Enlightenment:** the antique subjects, the
  line, the civic-moral seriousness (Neoclassicism).
- **Took from Burke / Baroque color:** the sublime and the loose colorist tradition
  (Romanticism).
- **Gave to Realism:** something concrete to reject (both the ideal past and the
  heightened feeling) — the springboard of the modern.
- **Gave to academic painting and, later, Impressionism:** the line-vs-color axis that
  organized the next half-century of French art.

---

## 6. PARALLELS ("meanwhile") — 2–3 contemporaneous threads

1. **The Age of Revolutions (c.1776–1848).** The American Revolution (1776), the French
   Revolution (1789), the Napoleonic Wars, the Latin American independence wars, and the
   1830 and 1848 risings run straight through the era; the painting is not beside the
   politics, it *is* the politics (David's Revolution, Goya's war, Delacroix's barricade).
   [Earthquake][TercerMayo][Liberty]
2. **The Industrial Revolution and the railway (late 18th c. onward).** Factories,
   cities, and the steam railway transformed the landscape and the experience of speed and
   nature — feeding Romanticism's longing for wild, unspoiled nature and the sublime
   (Turner painted the railway and the storm alike). A sharp tie-in: the same decades that
   built the factory produced the cult of untouched mountains and mist. [SlaveShip]
3. **Romanticism in the other arts (c.1800–1850).** The painting runs in lockstep with
   literary and musical Romanticism — Goethe and the German Sturm-und-Drang/Schlegel
   circle, Wordsworth and Byron, Beethoven and then Berlioz — the same turn to feeling,
   nature, the individual, and the nation across every medium. (The "Romanticism" label
   itself came from this literary world first — ledger item 1.) [Term-Rom][MetRom]

---

## 7. NESTING — what the two MOVEMENT reads and the MODERN era already cover (go DEEPER on the ARGUMENT, don't duplicate)

- **The two NRO movement reads** (Neoclassicism; Romanticism — sibling packs) tell each
  movement's own full story: the complete cast, the secondary works, the internal
  development, the afterlife. **This ERA read must NOT survey either movement.** Its job is
  the **argument between them** — Reason vs Feeling — and the things only the era altitude
  can hold: that they **overlap and compete** rather than sequence (David/Goya;
  Ingres/Delacroix), that they share the **same political earthquake** as a spine, and the
  **handoff to Realism**. Name a FEW signature works vividly (§4); leave the deep work-
  reads to later passes. Reference the movement reads tersely at every overlap; do not
  re-narrate them.
- **The Modern-era reads (already built)** own **Realism / Courbet** and the Salon system.
  This era's job is only the **handoff** — Realism as the third position that rejects both
  Neoclassicism and Romanticism. **Reference the Modern-era "Lay of the land" + Realism
  movement reads for that; do NOT re-tell them.** Keep the cross-link reciprocal (NRO →
  Modern era is its named child via Realism; the Modern era ← NRO is its named parent).
- **Coordinator action item:** when the `nro` era + movement reads ship, add reciprocal
  cross-links (NRO era ↔ its two movements; NRO → Modern-era/Realism handoff), and verify
  no date/attribution contradicts across the era read, the two movement reads, and the
  Modern-era read (nesting gate 7).

---

## 8. VOICE (WRITING-RULES + art voice-locks — paste the AUTHOR VOICE CONTRACT into the brief)

House dry wit dialled up a notch (earned asides given room to land); a healthy dose of
**comparisons/analogies** (the #1 comprehension tool); inline-define EVERY art term on
first use (Neoclassicism, Rococo, Romanticism, the sublime, line vs color, the antique,
history painting, the Salon, *fini*/finish, allegory, Phrygian cap, odalisque, the Grand
Tour). **Never** bury a substantive line in muted/italic style. **No em-dashes** (`—`) in
prose — parentheses or commas/periods (the Winckelmann/Burke quotes and any printed quote
must be recast or trimmed to drop em-dashes). No `**bold**`; no meta-narration of the read
("this section," "as we'll see"); no condescension. Make the reader SEE the swing, the
oath, the firing squad, the raft, the barricade, the fog. Storytelling first; accuracy and
zero-hallucination are a hard floor. Tell the argument (Reason vs Feeling), don't list the
movements.

---

## SOURCE KEY (real citations for every concrete claim)

- **[Term-Neo]** — "Neoclassicism" as a late-19th-c. (1880s) retrospective label; period
  contemporaries used *le vrai style* / *le goût grec*. Wikipedia, "Neoclassicism";
  neoclassicism.us, "What Is Neoclassicism?" (cross-checked).
- **[Term-Rom]** — "Romanticism" arising as an aesthetic category c.1798–1800 (Schlegel
  brothers, *romantische Poesie*; popularized by Mme de Staël, *De l'Allemagne*, 1813).
  Wikipedia, "Romanticism"; Cambridge Companion to German Romanticism (cross-check).
- **[MetRom]** — The Metropolitan Museum of Art, Heilbrunn Timeline of Art History,
  "Romanticism" essay (characterization: emotion, imagination, nature, the sublime,
  individual/nation). metmuseum.org/toah.
- **[Winckelmann]** — Johann Joachim Winckelmann, *Gedanken über die Nachahmung der
  griechischen Werke in der Malerei und Bildhauerkunst* (Reflections on the Imitation of
  Greek Works…), **1755**; phrase "edle Einfalt und stille Größe" / "noble simplicity and
  quiet grandeur." Wikipedia, "Johann Joachim Winckelmann" (with original-German sentence).
- **[David-Bio]** — Jacques-Louis David: deputy to the National Convention (Sept 1792),
  regicide vote + death-warrant signature (Jan 1793), Committee of General Security, fêtes/
  propaganda, arrest Aug 1794. Wikipedia, "Jacques-Louis David."
- **[David-Nap]** — David named *Premier Peintre de l'Empereur* (First Painter), 18 Dec
  1804. napoleon.org, "David, Jacques-Louis (1748–1825), Premier peintre de l'Empereur";
  napoleon-empire.org, "Jacques-Louis David — Painter."
- **[Neo-Causes]** — Neoclassicism as multi-causal (Enlightenment + archaeology +
  Winckelmann + academies + Grand Tour). Tate, "Neoclassicism" art term;
  neoclassicism.us; Khan Academy on Pompeii's influence.
- **[Etym-Rom]** — "Romantic"/"Romanticism" from "romance" = medieval vernacular verse
  tale in the Romance languages (Old French *romanz*), NOT "love story." etymonline,
  "romantic"/"romanticism"; Merriam-Webster, "Ah, 'Romance'"; Wikipedia, "Chivalric
  romance."
- **[Ingres-Delacroix]** — Ingres (1780–1867) vs Delacroix (1798–1863) as rival
  figureheads of line vs color at the Paris Salon (1824 Salon: Ingres's *Vow of Louis
  XIII* vs Delacroix's *Massacre at Chios*; 1827 Salon; separate rooms in 1855). Wikipedia,
  "Jean-Auguste-Dominique Ingres" and "Eugène Delacroix."
- **[MetGoya]** — Goya (1746–1828) as the great painter of the Romantic period bridging
  Neoclassical/realist training; near-contemporary of David. The Met, "Francisco de Goya
  and the Spanish Enlightenment," metmuseum.org/toah.
- **[Burke]** — Edmund Burke, *A Philosophical Enquiry into the Origin of Our Ideas of the
  Sublime and Beautiful*, **1757** (Sublime vs Beautiful; the beholder's feeling).
  Wikipedia, "A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and
  Beautiful"; Britannica topic page.
- **[Pompeii]** — Herculaneum organized excavation from **1738**, Pompeii from **1748**,
  under Charles of Bourbon (king of Naples); drove the antique revival. Wikipedia,
  "Pompeii"; Parco Archeologico di Ercolano, "From discovery to archaeological park"; Khan
  Academy, "The rediscovery of Pompeii…"
- **[Earthquake]** — date chain: Bastille 14 Jul 1789; execution of Louis XVI 21 Jan 1793;
  18 Brumaire 9–10 Nov 1799; Napoleon Emperor 1804 (crowned 2 Dec 1804); Waterloo 18 Jun
  1815; Bourbon Restoration 1814 + 1815 (two restorations, Hundred Days between); July
  Revolution 27–29 Jul 1830 → July Monarchy. Wikipedia: "Storming of the Bastille,"
  "Execution of Louis XVI," "18 Brumaire," "Bourbon Restoration in France," "July
  Revolution"; napoleon.org.
- **[Boucher]** — François Boucher, *Portrait of Madame de Pompadour*, 1756, Alte
  Pinakothek, Munich; 212 × 164 cm. Alte Pinakothek collection page; Wikimedia Commons file
  page (verified).
- **[Fragonard]** — Jean-Honoré Fragonard, *The Swing* (Les Hasards heureux de
  l'escarpolette), 1767, Wallace Collection, London (P430); 81 × 64.2 cm. Wallace
  Collection collection page; Commons file page (verified).
- **[Horatii]** — Jacques-Louis David, *Oath of the Horatii*, 1784–85, Louvre (INV 3692);
  329.8 × 424.8 cm. Louvre collection page; Commons file page (verified).
- **[Marat]** — Jacques-Louis David, *The Death of Marat*, 1793, Royal Museums of Fine
  Arts of Belgium, Brussels; 165 × 128 cm. RMFAB collection page; Commons + Wikipedia
  (verified).
- **[Ingres]** — Jean-Auguste-Dominique Ingres, *La Grande Odalisque*, 1814 (Salon 1819),
  Louvre (RF 1158); 91 × 162 cm. Louvre collection page; Commons file page (verified).
- **[TercerMayo]** — Francisco Goya, *The Third of May 1808* (El tres de mayo de 1808 en
  Madrid), 1814, Museo del Prado, Madrid; 268 × 347 cm. Museo del Prado collection page;
  Commons file page (verified).
- **[Raft]** — Théodore Géricault, *The Raft of the Medusa*, 1818–19, Louvre (INV 4884);
  491 × 716 cm. Louvre collection page; Commons file page (verified).
- **[Liberty]** — Eugène Delacroix, *Liberty Leading the People* (La Liberté guidant le
  peuple), 1830, Louvre (RF 129); 260 × 325 cm. Louvre collection page; Commons file page
  (verified).
- **[SlaveShip]** — J.M.W. Turner, *The Slave Ship* (Slavers Throwing overboard the Dead
  and Dying — Typhon coming on), 1840, Museum of Fine Arts, Boston (acc. 99.22); 90.8 ×
  122.6 cm. MFA Boston collection page; Commons file page (verified).
- **[Wanderer]** — Caspar David Friedrich, *Wanderer above the Sea of Fog*, c.1818,
  Hamburger Kunsthalle, Hamburg (acc. 5161); 94.8 × 74.8 cm. Hamburger Kunsthalle
  collection page; Commons file page (verified).
- **[Handoff-Realism]** — Gustave Courbet / Realism as the rejection of both Neoclassicism
  and Romanticism, opening the Modern era. The app's own Modern-era "Lay of the land" +
  Realism movement reads (`audits/art-pipeline/lay-of-the-land-factpack.md`,
  `realism-*`); Wikipedia, "Realism (art movement)"; Met, "Gustave Courbet."

---

**Coordinator note (rights, the easy case):** this era is the **inverse** of the
Abstract-Expressionism rights nightmare — **everything is pre-1900 and public domain
worldwide.** All ten verified Commons files (`/commons/` tier) are freely inlineable as
full, uncropped works; there is no RestrictedFigure handling, no self-host, no estate
copyright anywhere in the era. The only image discipline is the usual: confirm each
file's subject by eye at gate 6, trim only true scan borders, match aspect to the frame
(landscape band for the hero/card), and keep the canonical dimensions even where a
Commons file's own caption rounds differently (Géricault 491 not 490; Friedrich 94.8×74.8
/ c.1818 not 98×74 / c.1817; Marat 165 not 162).
