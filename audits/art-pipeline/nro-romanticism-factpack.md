# Fact pack — ROMANTICISM (kind: MOVEMENT; era `nro` = Neoclassical & Romantic; c.1780 → c.1850; the revolt of Feeling against Neoclassical reason)

Coordinator-built ground truth for the art content pipeline. The author drafts the
**movement-level chaptered narrative** ONLY from this. Every concrete claim traces to a
sourced item here or is flagged `⚠️ UNVERIFIED`. Web-checked 2026-06-25; the fact-checker
gate re-verifies independently against the source key. Shape = **rise → peak → spread →
afterlife.**

Dimensions are given in cm from the museum record AND converted to **feet/inches** (this
app uses imperial only, never cm — `feedback_art_dimensions_imperial`). Wikimedia image-URL
filenames keep their cm (they are URLs — do not edit).

## The section
- The **Romanticism movement** read: `/art/nro/rom` → `…/s/{sectionId}` (coordinator
  registers the `rom` const in `src/lib/art-content.ts`; range `c.1780–c.1850`, era `nro`).
- **Image rights are EASY here, the opposite of AbEx/Surrealism.** Every artist dies before
  1863 and every canon work is pre-1851 → **PD worldwide, all on Commons, all tier
  `/commons/`, all inlineable.** Confirm each `File:` and subject by eye at gate 6; the URLs
  below are coordinator-load-checked (200, real subject).
- Deliverable now = the **chaptered movement narrative** + its `sections` chapter metadata +
  a Fact ledger. Movement-page furniture (the break block, the manifesto/key-texts block,
  the canon list, lineage, artists row, parallels) the coordinator assembles from this pack;
  per-work DEEP reads come later.

## Throughline (the one idea)
Romanticism is not a style but a **temperament** — the revolt of feeling against the cool
reason of Neoclassicism. Where David's revolution-and-Empire painting prized line, finish,
restraint, and classical order, the Romantics prized **color, energy, imagination, the
individual, the nation, the exotic, and the nightmare**: nature as terrifyingly grand (the
**sublime**), emotion as the true subject, paint laid on with visible heat. It is a shared
mood crossing borders with no central command — **Spain** (Goya's darkness), **France**
(Géricault's shipwreck, Delacroix's color and revolt), **Britain** (Turner's dissolving
light, Constable's weather), **Germany** (Friedrich's lonely, God-haunted landscapes). And
it is the same political earthquake seen from the other side: the Revolution, Napoleon, and
the failed hopes of 1830 produce not Neoclassical optimism but **disillusion, the horror of
war, and national feeling**.

---

## 0. THE LEGEND LEDGER — documented vs myth (READ FIRST)

| Claim | Verdict | The real fact |
|---|---|---|
| Romanticism (in painting) had a manifesto | **MYTH — none; it was a temperament, not an organized movement** | No painters' manifesto, no founding document, no club. Treat the block as **ABSENT-with-surrogates**: the literary *Lyrical Ballads* Preface (Wordsworth, 1800/1802), Friedrich's aphorisms, Delacroix's *Journal*, and Baudelaire's later criticism championing Delacroix. [Met-Rom][TAS-Rom][Brit-Rom] |
| Goya titled his "Black Paintings" / they were exhibited in his lifetime | **MYTH — he never titled them and never exhibited them** | Painted **directly on the plaster walls** of his house (Quinta del Sordo, "House of the Deaf Man") **c.1819–1823**, never commissioned, never shown, never meant to leave home. **Goya gave no titles** ("Most names used for them are designations employed by art historians"); his friend **Antonio Brugada** first catalogued/named them after Goya's death (1828). Restorer **Salvador Martínez Cubells** transferred them from wall to canvas **c.1874** for owner **Baron Frédéric Émile d'Erlanger**, who showed them at the **1878 Paris Exposition Universelle**, then **donated them to the Spanish state in 1881** → the Prado. ⚠️ Say "**14 in the Prado**" but a 15th mural (*Heads in a Landscape*) split off to a New York private collection — don't write "all 15 in the Prado." [W-Black][Prado-Saturn] |
| *Saturn Devouring His Son* is a finished oil Goya exhibited | **DOCUMENTED as a Black Painting — wall mural, transferred to canvas** | One of the 14, painted on the **dining-room wall** (one of six works there), c.1819–23; transferred to canvas 1874; now Prado. **143.5 × 81.4 cm.** Depicts the Roman Titan **Saturn** (Greek Cronus) eating a child. [W-Saturn][Prado-Saturn] |
| *The Third of May 1808* is "the first modern painting of war / first modern painting" | **HEDGE — a widely-held art-historical judgment, not a sourced verbatim quote** | The quotable, attributable line is **Kenneth Clark's**: it is "the first great picture which can be called **revolutionary** in every sense of the word, in style, in subject, and in intention." Clark said **"revolutionary," NOT "first modern painting."** Treat "first modern painting of war" as common characterization, attribute the exact words to Clark. Painting itself: 1814, Prado, commemorates Madrid civilians shot by Napoleon's troops after the **Dos de Mayo (2 May) 1808** uprising. [W-Third][Clark] |
| Goya deliberately made *The Family of Charles IV* grotesque/ugly to mock the royals | **HEDGE — interpretation, NOT documented intent** | The satirical reading comes from **later critics** (Janson's "bloated vulture of a king," Gardner's "human grotesques"); counter-scholarship (Fred Licht) says he painted them "as they saw themselves," and the royals voiced no displeasure. Don't assert intentional caricature as fact. [Smarthistory-Family][Brit-Family] |
| Géricault researched the real *Méduse* wreck — survivors, a model raft, the morgue | **DOCUMENTED** | He interviewed survivors **Henri Savigny** (surgeon) and **Alexandre Corréard** (engineer); had survivor-carpenter **Lavillette** build a scale model of the raft; sketched corpses at the **Hôpital Beaujon** morgue and studied dying patients; kept **severed limbs** in his studio (friends nicknamed it a "charnel house"). ⚠️ He studied a **severed head obtained from an asylum** — the popular "**guillotined heads**" is an embellishment; drop it. [W-Raft][Brit-Raft] |
| *Liberty Leading the People* shows the 1789 Revolution / Marianne is a real woman | **MYTH (both) — it's July 1830, and she's an allegory** | Commemorates the **July Revolution of 1830** (*les Trois Glorieuses*, 27–29 July, which toppled **Charles X**), NOT 1789. The bare-breasted central figure in the Phrygian cap is an **allegory of Liberty** (Marianne/France), **not a portrait** of any identified woman. The top-hatted man is **mythically** said to be a Delacroix self-portrait — flag as legend (Dumas denied Delacroix took part in the fighting). [W-Liberty][Brit-Liberty] |
| Turner had himself **lashed to a ship's mast** in a storm for four hours to paint *Snow Storm* | **MYTH — apocryphal, and TURNER'S OWN STORY** | The lashed-to-the-mast tale for *Snow Storm — Steam-Boat off a Harbour's Mouth* (1842, Tate) **comes from Turner himself**, transmitted via Ruskin and early biographers. **Unverifiable / very likely apocryphal**: no paddle-steamer *Ariel* leaving Harwich on such a night can be confirmed in records. The painting's long subtitle does say "**The Author was in this Storm on the Night the Ariel left Harwich**," but the "four hours lashed to the mast" detail is his retelling, not fact. Frame it as a story he told. [W-SnowStorm][Tate-SnowStorm][Brit-SnowStorm] |
| Friedrich's *Wanderer* is a self-portrait | **HEDGE — uncertain, contested** | Possibly a self-portrait (the figure's reddish hair matches Friedrich); a competing scholarly reading (Koerner et al.) identifies him as an officer, **Colonel Friedrich Gotthard von Brincken**, making it a patriotic epitaph. Identity **unconfirmed** — present both, assert neither. [W-Wanderer] |
| Turner's *Slave Ship* is just a seascape | **DOCUMENTED — tied to the Zong massacre + the abolition debate** | Inspired by the **1781 Zong massacre** (the slave ship *Zong*, whose crew threw ~**132** enslaved Africans overboard to claim insurance on "lost cargo"); exhibited **1840** as the **World Anti-Slavery Convention** met in London. Turner **likely/probably read** Thomas Clarkson's abolition history (the standard hypothesis — say "likely," not "had read"). ⚠️ Period title spelling is "**Typhon**," not "Typhoon." [W-Slave][MFA-Slave] |

---

## 1. THE MOVEMENT STORY (rise → peak → spread → afterlife)

### RISE — the temperament forms (c.1780–1815)
- **The other side of the Revolution.** Neoclassicism — above all **Jacques-Louis David**
  (1748–1825) — was the official art of revolutionary virtue and then Napoleon's Empire:
  cool, finished, sculptural, line-bound, morally severe (*Oath of the Horatii*, 1784;
  *The Death of Marat*, 1793). Romanticism rose **in the wake of the Napoleonic Wars** as a
  reaction valuing emotion, color, and energy over David's reason and restraint. Same
  history, opposite mood: where Neoclassicism saw heroic clarity, the Romantics saw
  disillusion, horror, and feeling. [Brit-David][Smarthistory-Horatii][W-Raft]
- **The sublime.** The philosophical seed is **Edmund Burke**'s *A Philosophical Enquiry
  into the Origin of Our Ideas of the Sublime and Beautiful* (1757): the **sublime** —
  terror, vastness, obscurity, overwhelming power — is a category apart from the merely
  beautiful (smooth, delicate, symmetrical). It gave the Romantics their great subject:
  nature as grand and terrifying, the human figure dwarfed. [W-Burke]
- **Goya, alone in Spain.** The earliest and darkest of the temperament. Court painter to a
  crumbling monarchy, deafened by illness in 1793, he turned from rococo tapestry cartoons
  to the nightmare: *Los Caprichos* (1799), the *Disasters of War*, *The Third of May 1808*
  (1814), and finally the **Black Paintings** on his own walls. He has no school and no
  manifesto; he is the proof that Romanticism is a mood, not a movement. [W-Third][W-Black]

### PEAK — France makes it a public scandal (c.1818–1830)
- **Géricault's bombshell.** *The Raft of the Medusa* (1818–19, exhibited Salon of 1819)
  takes a fresh national disgrace — the 1816 wreck of the frigate *Méduse* — and paints
  ordinary castaways at the **scale of history painting** (16 ft × 23.5 ft), a pyramid of
  the dead and dying straining toward a speck of rescue. Researched like a journalist
  (survivors, a model raft, the morgue). It made the private horror public and put the new
  temperament on the biggest wall in Paris. [W-Raft]
- **Delacroix, the color and the revolt.** Géricault's friend and heir. *The Death of
  Sardanapalus* (1827) — a Byronic orgy of destruction, all turbulent diagonal and hot
  color, reviled at the Salon as "the fanaticism of ugliness." Then *Liberty Leading the
  People* (1830), the July Revolution turned into an allegory marching out of the canvas.
  Delacroix becomes the public face of French Romanticism and color's champion against
  Ingres's line. [W-Sardanapalus][W-Liberty]

### SPREAD — landscape and the nation, across Europe (c.1808–1844)
- **Friedrich, in Germany.** Landscape as religion. A lone figure with its **back to us**
  (the *Rückenfigur*) faces a vast, silent nature — *Wanderer above the Sea of Fog*
  (c.1818), *The Monk by the Sea* (1808–10), a tiny monk against an almost empty sky and
  sea. The sublime made devotional and German-national. [W-Wanderer][W-Monk]
- **Turner and Constable, in Britain.** Two opposite English answers. **Turner** dissolves
  the world into light and weather and pushes paint toward near-abstraction — *The Fighting
  Temeraire* (1839), *The Slave Ship* (1840), *Rain, Steam and Speed* (1844), *Snow Storm*
  (1842). **Constable** stays close to home, painting the real Suffolk weather and the moving
  sky over the River Stour — *The Hay Wain* (1821), which won a **gold medal at the 1824
  Paris Salon** and directly impressed Delacroix. Romanticism's landscape wing: one cosmic,
  one intimate. [W-Temeraire][W-Slave][W-RainSteam][W-HayWain]

### AFTERLIFE — what Romanticism left
- **The exotic and the East (Orientalism).** Delacroix's 1832 trip to Morocco (with the
  Comte de Mornay's diplomatic mission) feeds *Women of Algiers* (1834) and a long
  19th-century fashion for an eroticized, exoticized "Orient" — a real strand of the
  temperament, and a fairness-gate axis (below). [W-Liberty][Penn-Maghreb]
- **The seeds of what came next.** Constable and Turner's loose, weather-driven landscape
  feeds the **Barbizon School** and ultimately **Impressionism**; the cult of feeling and
  the visible brushstroke set modern painting's course; the sublime and the inner life
  outlive the movement. Romanticism's quarrel with Neoclassicism — color vs line, feeling vs
  reason — is the hinge of the whole 19th century. [W-HayWain][Brit-Rom]

**Why it mattered (one paragraph for the writer):** Romanticism is the moment European
painting decided that **how you feel about the world is as real a subject as the world
itself**. It threw out the Neoclassical rulebook — cool line, finished surface, classical
calm — for color, motion, and the imagination, and it found its great theme in nature too
big and too terrifying to master (the sublime). It has no leader, no manifesto, and no
single look; it is a temperament that shows up as Goya's nightmares, Géricault's shipwreck,
Delacroix's revolts, Friedrich's silent God-haunted landscapes, and Turner's storms of
light. And it carried the disillusion of the Revolutionary age — the horror of war, the
loneliness of the individual, the pull of the nation and the exotic — straight into the
modern era.

---

## 2. THE BREAK BLOCK (`whatChanged`) — line and reason give way to color and feeling

The concrete change, stated plainly (not "revolutionary"):

> **Before:** Neoclassicism, above all **David**. A painting is built like a Roman frieze —
> clear contour, sculptural figures lit evenly, every edge finished, the brushwork hidden,
> the mood austere and morally controlled. *Oath of the Horatii* (1784) lines its heroes up
> like statues swearing on cue; reason and order rule, and the avant-garde is the cool
> classical line.
>
> **After (Romanticism):** the picture stops being a controlled diagram and becomes a place
> of feeling and force. Edges dissolve, the brushwork shows, color carries the emotion, and
> the composition heaves on the diagonal. Géricault piles the dead into a straining pyramid
> on a raft; Delacroix lets hot color and motion run riot through *Sardanapalus* and
> *Liberty*; Goya goes dark; Friedrich shrinks a single human figure under an enormous sky;
> Turner dissolves a ship into light. The subject is no longer civic virtue calmly depicted
> but emotion, the sublime, the individual, the nation, and the nightmare — painted with
> visible heat.

### Before/after pair (born-verified, all PD worldwide — inlineable)

| Side | Work | Why it's the right one | Image-rights / `File:` |
|---|---|---|---|
| **BEFORE — Neoclassical line, finish, restraint** | **Jacques-Louis David, *Oath of the Horatii*, 1784** (Louvre) | The textbook Neoclassical "before": frieze-like, sharp-contoured, sculptural, evenly lit, brushwork hidden, morally severe — exactly what the Romantics threw out. | ✅ **PD worldwide.** `File:Jacques-Louis David - Oath of the Horatii - Google Art Project.jpg` (6156×4800). |
| **AFTER — Romantic color, motion, feeling, the sublime** | **Théodore Géricault, *The Raft of the Medusa*, 1818–19** (Louvre) | The turbulent, painterly, diagonal "after" at history-painting scale: ordinary suffering, hot dark color, the straining pyramid — the temperament made public. (Delacroix's *Liberty* or *Sardanapalus* also works as the "after.") | ✅ **PD worldwide.** `File:JEAN LOUIS THÉODORE GÉRICAULT - La Balsa de la Medusa (Museo del Louvre, 1818-19).jpg` (5872×4008). |

---

## 3. THE MANIFESTO / KEY-TEXTS BLOCK (`manifesto`) — ABSENT-with-surrogates (`absent: true`)

Romanticism in painting had **NO manifesto** and no founding document — it was a temperament,
not an organized movement. Set `absent: true` and tell the silence honestly: there was no
club, no rulebook, no pope; the painters in Spain, France, Britain, and Germany mostly never
met and shared a mood, not a program. Then surface the **literary and critical surrogates**
as the key-passage analog — quote them **accurately**, name each text exactly, give an
openly-readable source.

### The surrogates (verified)
1. **Wordsworth & Coleridge, Preface to *Lyrical Ballads*** — the closest thing to a
   Romantic manifesto in English. *Lyrical Ballads* first published **1798**; the famous
   **Preface added in the 1800 edition, expanded 1802.** [W-Preface]
2. **Caspar David Friedrich, aphorisms on painting** — his written notes on art (the "inner
   eye"). The wording circulates in English translation (secondary sources); flag it as a
   circulated translation, not a primary-document citation. [Wikiquote-CDF]
3. **Eugène Delacroix, *Journal*** — a real published diary, the painter's own running
   theory of color, imagination, and feeling. Five notebooks **1822–1824** + diaries for
   **1847 and 1849–1863** (⚠️ the **1848 volume was lost** — left in a hackney cab; write
   "1847 and 1849–1863," or "1847–1863, with 1848 lost"). [19thc-Journal]
4. **Charles Baudelaire, art criticism** — the *Salon de 1846* (its chapter *"Qu'est-ce que
   le romantisme?"*) and the 1863 essay *"L'Œuvre et la vie d'Eugène Delacroix,"* championing
   Delacroix as the supreme Romantic. [AHU-Baudelaire]

### Accurately-quoted lines (verify wording at gate 1)

From **Wordsworth, Preface to *Lyrical Ballads* (1800/1802):**
  > "I have said that poetry is the spontaneous overflow of powerful feelings: it takes its
  > origin from emotion recollected in tranquillity." [W-Preface]
  (⚠️ British spelling **"tranquillity,"** double-L. The phrase "spontaneous overflow of
  powerful feelings" appears twice in the Preface.)

From **Friedrich's aphorisms** (circulated English translation — flag as secondary):
  > "The artist should not only paint what he sees before him, but also what he sees in
  > himself. If, however, he sees nothing within him, then he should also refrain from
  > painting what he sees before him." [Wikiquote-CDF]
  (Alternative, the better-attested "inner eye" line: "Close your bodily eye, that you may
  see your picture first with the eye of the spirit. Then bring to light what you have seen
  in the darkness, that its effect may work back, from without to within.")

From **Baudelaire, *Salon de 1846*, "Qu'est-ce que le romantisme?":**
  > "Romanticism is precisely situated neither in choice of subjects nor in exact truth, but
  > in a way of feeling." [AHU-Baudelaire]
  > ("To say Romanticism is to say modern art — that is, intimacy, spirituality, colour,
  > aspiration toward the infinite, expressed by all the means the arts possess.")

### Born-verified OPENLY-READABLE source URLs for the block's "source link"
- **Wordsworth, Preface to *Lyrical Ballads*** — full text (1800 Preface), UNC scan:
  `https://viscomi.sites.oasis.unc.edu/viscomi/coursepack/wordsworth/Wordsworth-1800_LB_Preface.pdf`
  ✅ (open). Wikipedia overview: `https://en.wikipedia.org/wiki/Preface_to_the_Lyrical_Ballads`.
- **Friedrich aphorisms** — Wikiquote (carries the translations + attributions):
  `https://en.wikiquote.org/wiki/Caspar_David_Friedrich` ✅ (open; secondary-translation, flag).
- **Baudelaire, *Salon de 1846*** — French original is on Wikisource:
  `https://fr.wikisource.org/wiki/Salon_de_1846` ✅ (open). Cite for canonical wording.
- ⚠️ **Quote-precision:** gate each line against the named original (Preface text / Baudelaire
  *Salon de 1846* / Friedrich's collected aphorisms), not a blog. Friedrich's English wording
  is a circulated translation — present it as such, not as a primary-source quotation.

### How to write the absence
Tell it straight: *"There was no Romantic manifesto, because there was no Romantic movement
to sign one — just painters in Madrid, Paris, London, and Dresden who mostly never met and
shared a mood instead of a program. The nearest thing to a creed came from the writers and
critics: Wordsworth, defining poetry as 'the spontaneous overflow of powerful feelings';
Friedrich, telling painters to shut the bodily eye and paint what they saw within; Delacroix,
arguing for color and imagination in the privacy of his Journal; and Baudelaire, who pinned
it down a generation later — Romanticism lives 'not in choice of subjects, but in a way of
feeling.' No manifesto. A temperament."* Set `absent: true`.

---

## 4. THE CANON (~13 works) — all PD worldwide, all inlineable

For EACH work: museum, dimensions (cm from the museum record + ft/in conversion), one-line
blurb, and the born-verified Commons `File:` (coordinator-load-checked, subject confirmed).
All artists die ≤1851 → **every work is PD worldwide, tier `/commons/`.**

### — GOYA (Spain) —

#### 1. *The Third of May 1808* (El tres de mayo de 1808), 1814
- **Museum:** Museo del Prado, Madrid.
- **Dimensions:** 268 × 347 cm = **~8 ft 9½ in × 11 ft 4½ in**. Oil on canvas.
- **Blurb fact:** A faceless French firing squad, a line of mechanical rifles, and one
  Madrid resister flinging his arms wide in a white shirt under a lantern — the night
  reprisal for the Dos de Mayo uprising. Kenneth Clark called it the first "revolutionary"
  picture in style, subject, and intention; widely called the first modern painting of war.
  [W-Third][Clark]
- **`File:`** `El Tres de Mayo, by Francisco de Goya, from Prado in Google Earth.jpg`
  (30000×23131, `/commons/`). ✅ PD worldwide.

#### 2. *Saturn Devouring His Son* (Saturno devorando a un hijo), c.1819–23 — a "Black Painting"
- **Museum:** Museo del Prado, Madrid (transferred from a wall of Goya's house to canvas 1874).
- **Dimensions:** 143.5 × 81.4 cm = **~4 ft 8½ in × 2 ft 8 in**. Oil, mural transferred to canvas.
- **Blurb fact:** The Titan Saturn, eyes wild, cramming a small headless body into his mouth
  — painted on Goya's own **dining-room wall**, never titled by him, never meant to be seen.
  The blackest of the Black Paintings. [W-Saturn][Prado-Saturn]
- **`File:`** `Francisco de Goya, Saturno devorando a su hijo (1819-1823).jpg`
  (1661×3051, `/commons/`). ✅ PD worldwide.

#### 3. *The Family of Charles IV* (La familia de Carlos IV), 1800–01
- **Museum:** Museo del Prado, Madrid.
- **Dimensions:** 280 × 336 cm = **~9 ft 2¼ in × 11 ft 0¼ in**. Oil on canvas.
- **Blurb fact:** The Spanish royal family lined up in gold and medals, Goya himself half-
  shadowed at his easel behind them in homage to Velázquez's *Las Meninas*. The famous
  "grotesque" reading is later interpretation, not documented intent. [Smarthistory-Family][Brit-Family]
- **`File:`** `La familia de Carlos IV, Francisco de Goya.jpg` (3051×2490, `/commons/`). ✅ PD worldwide.

#### 4. *Los Caprichos*, plate 43 — *The Sleep of Reason Produces Monsters*, 1799
- **Museum:** etching, published 1799; impressions in the Met, Prado, British Museum, etc.
- **Dimensions:** plate ~21.5 × 15 cm (a print sheet). Etching and aquatint.
- **Blurb fact:** A sleeping artist slumped over his desk while owls and bats swarm out of
  the dark — plate 43 of 80 in Goya's satirical series. The Spanish *sueño* means both
  "sleep" and "dream," so the title also reads "The Dream of Reason." [W-Sleep][Met-Sleep]
- **`File:`** `Plate 43 from 'Los Caprichos'- The sleep of reason produces monsters (El sueño de la razon produce monstruos) MET DP816992.jpg` (2689×3665, `/commons/`). ✅ PD worldwide.

### — GÉRICAULT (France) —

#### 5. *The Raft of the Medusa* (Le Radeau de la Méduse), 1818–19
- **Museum:** Musée du Louvre, Paris.
- **Dimensions:** **490 × 716 cm** (⚠️ 490, not 491) = **~16 ft 1 in × 23 ft 6 in**. Oil on canvas.
- **Blurb fact:** Survivors of the 1816 *Méduse* wreck heaped on a makeshift raft, a pyramid
  of the dead and the barely-living straining toward a speck of a rescue ship — a fresh
  national scandal painted at the scale once reserved for gods and kings. [W-Raft][Brit-Raft]
- **`File:`** `JEAN LOUIS THÉODORE GÉRICAULT - La Balsa de la Medusa (Museo del Louvre, 1818-19).jpg` (5872×4008, `/commons/`). ✅ PD worldwide.

### — DELACROIX (France) —

#### 6. *Liberty Leading the People* (La Liberté guidant le peuple), 1830
- **Museum:** Musée du Louvre, Paris.
- **Dimensions:** 260 × 325 cm = **~8 ft 6 in × 10 ft 8 in**. Oil on canvas.
- **Blurb fact:** Liberty — bare-breasted, tricolor in hand, Phrygian cap on her head —
  strides over the barricade dead leading an armed crowd; the **July 1830** Revolution (not
  1789), and an **allegory**, not a real woman. [W-Liberty][Brit-Liberty]
- **`File:`** `Eugène Delacroix - Le 28 Juillet. La Liberté guidant le peuple.jpg` (5946×4771, `/commons/`). ✅ PD worldwide.

#### 7. *The Death of Sardanapalus* (La Mort de Sardanapale), 1827
- **Museum:** Musée du Louvre, Paris. (A smaller 1844 replica is in Philadelphia — don't confuse.)
- **Dimensions:** 392 × 496 cm = **~12 ft 10 in × 16 ft 3 in**. Oil on canvas.
- **Blurb fact:** The Assyrian king reclines on his red bed watching his concubines, slaves,
  and horses slaughtered as his city falls — a Byronic orgy of hot color and writhing
  diagonals, reviled at the Salon of 1827 as "the fanaticism of ugliness." [W-Sardanapalus]
- **`File:`** `Eugène Delacroix - The Death of Sardanapalus - WGA6173.jpg` (1345×1050, `/commons/`). ✅ PD worldwide. (Lower-res; a Google Art Project copy exists if a bigger file is wanted.)

### — TURNER (Britain) —

#### 8. *The Slave Ship*, 1840 (full title *Slavers Throwing overboard the Dead and Dying — Typhon coming on*)
- **Museum:** Museum of Fine Arts, Boston (since 1899).
- **Dimensions:** 90.8 × 122.6 cm = **~2 ft 11¾ in × 4 ft ¼ in**. Oil on canvas.
- **Blurb fact:** A blood-and-gold sunset over a heaving sea, shackled limbs and fish in the
  bloody foreground — Turner's response to the **1781 Zong massacre** (~132 enslaved Africans
  thrown overboard for insurance), exhibited 1840 as the abolition movement met in London.
  Ruskin owned it and rested Turner's reputation on it. [W-Slave][MFA-Slave]
- **`File:`** `Slave-ship.jpg` (2152×1616, `/commons/`). ✅ PD worldwide.

#### 9. *Rain, Steam and Speed — The Great Western Railway*, 1844
- **Museum:** The National Gallery, London (NG538).
- **Dimensions:** 91 × 121.8 cm = **~2 ft 11¾ in × 4 ft ⅛ in**. Oil on canvas.
- **Blurb fact:** A GWR locomotive bursts out of a storm of golden mist across Brunel's
  Maidenhead bridge — the modern machine dissolving into Turner's light, the railway age
  painted as weather. [W-RainSteam][NG-RainSteam]
- **`File:`** `Turner - Rain, Steam and Speed - National Gallery file.jpg` (5661×4226, `/commons/`). ✅ PD worldwide (coordinator-load-checked).

#### 10. *The Fighting Temeraire* (full: *The Fighting Temeraire, tugged to her last berth to be broken up, 1838*), 1839
- **Museum:** The National Gallery, London (NG524; Turner Bequest, 1851).
- **Dimensions:** 90.7 × 121.6 cm = **~2 ft 11¾ in × 3 ft 11⅞ in**. Oil on canvas.
- **Blurb fact:** The ghostly white HMS *Temeraire*, a Trafalgar veteran, towed by a squat
  dark steam tug up a sunset Thames to be broken up — the age of sail handed to the age of
  steam. (Title/towing event 1838; exhibited 1839.) [W-Temeraire][NG-Temeraire]
- **`File:`** `The Fighting Temeraire, JMW Turner, National Gallery.jpg` (5684×4223, `/commons/`). ✅ PD worldwide (coordinator-load-checked).

#### 11. *Snow Storm — Steam-Boat off a Harbour's Mouth*, 1842 — the "mast" painting
- **Museum:** Tate, London (N00530; Turner Bequest).
- **Dimensions:** 91.4 × 121.9 cm = **~3 ft × 4 ft**. Oil on canvas.
- **Blurb fact:** A steamer swallowed in a vortex of snow and spray, the whole canvas a
  spinning storm — the painting around which Turner told the (almost certainly apocryphal)
  story that he had himself lashed to the mast for four hours. Its subtitle: "The Author was
  in this Storm on the Night the Ariel left Harwich." [W-SnowStorm][Tate-SnowStorm]
- **`File:`** `Joseph Mallord William Turner - Snow Storm - Steam-Boat off a Harbour's Mouth - WGA23178.jpg` (2510×1879, `/commons/`). ✅ PD worldwide (coordinator-load-checked).

### — FRIEDRICH (Germany) —

#### 12. *Wanderer above the Sea of Fog* (Der Wanderer über dem Nebelmeer), c.1818
- **Museum:** Hamburger Kunsthalle, Hamburg (acquired 1970).
- **Dimensions:** 94.8 × 74.8 cm = **~3 ft 1⅜ in × 2 ft 5½ in**. Oil on canvas.
- **Blurb fact:** A man in a dark coat seen from behind, alone on a crag above a sea of fog
  and jagged peaks — the icon of the Romantic individual facing the sublime. Possibly a
  self-portrait; identity unconfirmed (a competing reading: an officer, von Brincken).
  [W-Wanderer]
- **`File:`** `Caspar David Friedrich - Wanderer above the Sea of Fog.jpeg` (5256×6742, `/commons/`). ✅ PD worldwide.

#### 13. *The Monk by the Sea* (Der Mönch am Meer), 1808–10
- **Museum:** Alte Nationalgalerie, Berlin.
- **Dimensions:** 110 × 171.5 cm = **~3 ft 7¼ in × 5 ft 7½ in**. Oil on canvas.
- **Blurb fact:** A tiny lone monk on a sliver of dune beneath an enormous, almost empty sky
  and sea — one of the emptiest, most radical landscapes of its century, the sublime as near-
  nothingness. [W-Monk][Brit-Monk]
- **`File:`** `Caspar David Friedrich - Der Mönch am Meer - Google Art Project.jpg` (3543×2254, `/commons/`). ✅ PD worldwide.

### — CONSTABLE (Britain) —

#### 14. *The Hay Wain* (exhibited as *Landscape: Noon*), 1821
- **Museum:** The National Gallery, London (NG1207).
- **Dimensions:** 130.2 × 185.4 cm = **~4 ft 3¼ in × 6 ft ¾ in**. Oil on canvas.
- **Blurb fact:** A hay wain (horse-drawn cart) crossing the River Stour at Flatford, Suffolk,
  under a big moving English sky — quiet rural England painted with weather as the real
  subject; won a gold medal at the **1824 Paris Salon** and impressed Delacroix. [W-HayWain][NG-HayWain]
- **`File:`** `John Constable - The Hay Wain (1821).jpg` (6128×4226, `/commons/`). ✅ PD worldwide.

**Rights summary line for the coordinator:** *Romanticism is the EASY image-rights case —
the opposite of Abstract Expressionism. Every artist dies by 1851 (Goya 1828, Géricault
1824, Friedrich 1840, Constable 1837, Turner 1851; Delacroix 1863) and every canon work is
pre-1851 → **PD worldwide, tier `/commons/`, all inlineable.** All 14 canon `File:`s, all 6
artist portraits, and the David "before" are coordinator-load-checked (200, correct subject,
sizes recorded above). Nothing here is rights-blocked.*

---

## 5. LINEAGE (the lineage block)

### Parents (what Romanticism grew out of / reacted against)
- **Neoclassicism (David)** — the foil it revolted against: cool reason, line, finish,
  classical order. Romanticism is defined by the contrast. [Brit-David]
- **The sublime — Burke (1757)** + the broader 18th-century cult of feeling and the
  picturesque: the philosophical license for terror, vastness, and nature's overwhelming
  power as a subject. [W-Burke]
- **Romantic literature** — Wordsworth/Coleridge, Byron (whose *Sardanapalus* Delacroix
  paints), Goethe and the German *Sturm und Drang*: the temperament was literary before and
  alongside the painting. [W-Preface][W-Sardanapalus]

### Children (what Romanticism fed)
- **The Barbizon School and Realism** — Constable and the loose, weather-true landscape feed
  the next generation's plein-air looking. [W-HayWain]
- **Impressionism** — Turner's dissolved light and Constable's broken color are a direct
  ancestor of the Impressionist eye. [W-HayWain][Brit-Rom]
- **Orientalism** — Delacroix's Morocco works seed a long 19th-century exotic strand. [Penn-Maghreb]
- **Modern painting's whole premise** — feeling as subject, the visible brushstroke, color
  over line, the individual vision: Romanticism set the terms. [Brit-Rom]

### Gave / took notes
- **Took from Neoclassicism:** the grand scale of history painting (Géricault, Delacroix) —
  then filled it with disaster and revolt instead of civic virtue.
- **Took from literature + Burke:** the sublime, the Byronic hero, the cult of feeling.
- **Gave to Realism/Impressionism:** loose landscape, the moving sky, color and light over line.
- **Gave to Orientalism + modern art:** the exotic, and feeling-as-subject.

---

## 6. ARTISTS ROW (6) — years, nationality, one-line who-they-are, pivotal works, born-verified PD portrait

All portraits are pre-1900 PD and on Commons (tier `/commons/`); confirm each by eye at gate 6.

1. **Francisco Goya** (1746–1828, **Spanish**) — **the lone, deaf prophet of the dark.** Court
   painter turned visionary of war, madness, and nightmare; *The Third of May 1808*, *Los
   Caprichos*, the **Black Paintings** (*Saturn*) on his own walls. **Portrait:**
   `File:Vicente López Portaña - el pintor Francisco de Goya.jpg` (1556×1920; Vicente López's
   1826 portrait, Prado). ✅ PD. [W-Third][W-Black]
2. **Théodore Géricault** (1791–1824, **French**) — **the meteor who put disaster on the big
   wall.** Researched a real shipwreck like a reporter and painted it at history-painting
   scale; *The Raft of the Medusa*. Dead at 33 from a riding injury. **Portrait:**
   `File:Portrait of Théodore Gericault MET DP879349.jpg` (2709×3774, Met). ✅ PD. [W-Raft]
3. **Eugène Delacroix** (1798–1863, **French**) — **the champion of color and revolt.**
   Géricault's heir, the public face of French Romanticism; *Liberty Leading the People*,
   *Sardanapalus*, the Morocco works; kept a famous *Journal*. **Portrait:**
   `File:Autoportrait - Eugène Delacroix - Musée du Louvre Peintures RF 25.jpg` (3867×4715;
   self-portrait, Louvre). ✅ PD. [W-Liberty][19thc-Journal]
4. **J.M.W. Turner** (1775–1851, **British**) — **the painter of light dissolving the world.**
   Pushed landscape toward near-abstraction in storms of color and steam; *The Slave Ship*,
   *Rain, Steam and Speed*, *The Fighting Temeraire*, *Snow Storm*. **Portrait:**
   `File:Joseph Mallord William Turner - Self-Portrait - Google Art Project.jpg`
   (4001×4834; self-portrait, Tate). ✅ PD. [W-Slave][W-RainSteam]
5. **Caspar David Friedrich** (1774–1840, **German**) — **landscape as religion.** Lone
   *Rückenfigur* figures facing a vast, silent, God-haunted nature; *Wanderer above the Sea
   of Fog*, *The Monk by the Sea*. **Portrait:**
   `File:Hamburg, Kunsthalle, Gerhard von Kügelgen, Bildnis von Caspar David Friedrich.jpg`
   (3109×3928; Gerhard von Kügelgen's portrait, Hamburger Kunsthalle). ✅ PD. [W-Wanderer][W-Monk]
6. **John Constable** (1776–1837, **British**) — **the poet of ordinary English weather.**
   Painted the real Suffolk countryside and the moving sky with broken, naturalistic color;
   *The Hay Wain*, which took a gold medal in Paris and impressed Delacroix. **Portrait:**
   `File:ConstableSelfPortrait.png` (662×990; self-portrait, c.1806). ✅ PD. [W-HayWain]

(Two rival CRITICS/voices to name in the manifesto + spread sections, not the artist row:
**Charles Baudelaire** as Delacroix's champion, and the literary anchors **Wordsworth** and
**Byron**.)

---

## 7. PARALLELS ("meanwhile") — 2–3 contemporaneous threads

1. **Revolution → Napoleon → 1830 (c.1789–1830).** Romanticism's whole life runs through the
   political earthquake: the French Revolution, the rise and fall of **Napoleon** (Empire
   1804–1815), the **Bourbon Restoration**, and the **July Revolution of 1830**. Where
   Neoclassicism painted the Revolution's optimism (David's civic virtue), Romanticism paints
   its hangover — disillusion, the horror of war (Goya, Géricault), and revolt (Delacroix's
   *Liberty*). The politics are inside the pictures. [Brit-David][W-Liberty]
2. **Romantic literature, in parallel (c.1798–1840).** The same decades produced Wordsworth
   and Coleridge's *Lyrical Ballads* (1798), Byron's poems and plays (Delacroix paints
   *Sardanapalus* straight from Byron), Goethe, and the German *Sturm und Drang*. Painting
   and poetry shared one temperament; the writers wrote the nearest thing to its manifesto.
   [W-Preface][W-Sardanapalus]
3. **The Industrial Revolution and the machine age (c.1820–1844).** As the railway and the
   steamship remade Britain, Turner painted them dissolving into light and weather (*Rain,
   Steam and Speed*; the steam tug towing the *Temeraire*) — the modern machine met by the
   Romantic eye, awe and elegy at once. A sharp tie-in: the same age that built the railways
   produced the painting that most distrusts cold reason. [W-RainSteam][W-Temeraire]

---

## 8. FRAMING / FAIRNESS NOTES (the colonial/erasure axes — for the later gate)

Honest historical context, accurate, neither sanitized nor turned into a lecture:

- **Turner's *The Slave Ship* (1840).** The painting is **explicitly about the 1781 Zong
  massacre** — a slave ship whose crew threw ~132 enslaved Africans overboard alive to claim
  insurance on them as lost "cargo" — and was exhibited as the **abolition movement** met in
  London (the 1840 World Anti-Slavery Convention). Name the massacre and the human reality
  plainly: this is a painting **against** the slave trade, made when British abolition (1833)
  was recent and the Atlantic trade was still being fought over. Turner **likely** read
  Thomas Clarkson's abolition history (the standard hypothesis — say "likely," not "had
  read"). Don't reduce the horror to a sunset; don't moralize past the picture either.
  [W-Slave][MFA-Slave]
- **Delacroix's Orientalism.** His 1832 Morocco trip (with the Comte de Mornay's diplomatic
  mission) produced *Women of Algiers* (1834) and fed a 19th-century European fashion for an
  **exoticized, eroticized "Orient"** — the harem fantasy, the East as a screen for Western
  desire (the canonical critique is Linda Nochlin's). Name it as what it is: real, beautiful
  painting that is also a Western projection, with the North African people depicted as
  objects of an outsider's gaze. State it; don't sanitize it, and don't lecture. [Penn-Maghreb]

---

## 9. NESTING — what the ERA read covers (go DEEPER, don't duplicate)

- **The `nro` (Neoclassical & Romantic) era read** will give Romanticism its thumbnail (the
  revolt of feeling against David's reason; color over line; the sublime). The movement read
  goes **DEEPER**: the temperament's national variants (Goya/Spain, Géricault+Delacroix/
  France, Turner+Constable/Britain, Friedrich/Germany), the **break** from David, the
  manifesto **absence** + literary surrogates, the full canon, and the framing axes (the
  *Slave Ship*/Zong, Delacroix's Orientalism). **Reference the era thumbnail tersely; don't
  re-narrate it.**
- **Cross-link** Neoclassicism (the same `nro` era's other half, David) as the parent/foil —
  keep the contrast consistent at era and movement altitude. Children: Realism/Barbizon →
  Impressionism (Constable/Turner line) and Orientalism (Delacroix).

---

## 10. VOICE (WRITING-RULES + art voice locks)
House informal popular-history voice, dry wit, comparisons welcome; **inline-define every
term** (Neoclassicism, the **sublime**, the picturesque, history painting, the Salon,
allegory, *Rückenfigur*, Orientalism, plein air, the Phrygian cap, the *Méduse*/Zong
references) — reader has zero prior knowledge. **Make the reader GET it:** Romanticism is one
idea (feeling, not reason, is the real subject of a painting) shared by painters who never
formed a movement, shown four national ways. **No em-dashes in shipping prose** (not the
char, not `&mdash;`). Storytelling first; accuracy a hard floor; only the gated key-text
lines (Wordsworth, Friedrich, Baudelaire) and clearly-attributed remarks (Kenneth Clark's
"revolutionary") are quoted — no invented quotes, no quoting from memory.

### HONESTY — the framing-gate axes spelled out (research-locked)
- **The mast myth (legend-frame, don't assert):** Turner's lashed-to-the-mast story is **his
  own**, almost certainly apocryphal — write it as a story he told, not a fact. [W-SnowStorm]
- **The Black Paintings (precision):** Goya never titled or exhibited them; they were on his
  walls, transferred to canvas in 1874 by Martínez Cubells for Baron d'Erlanger. Don't credit
  the titles to Goya. [W-Black]
- **Liberty's allegory + date:** July 1830, not 1789; an allegory, not a real woman; the
  top-hat self-portrait is legend. [W-Liberty]
- **The Slave Ship + Orientalism:** name the Zong massacre and the abolition context, and the
  Orientalist gaze, accurately — neither sanitized nor lectured (§8). [W-Slave][Penn-Maghreb]
- **Hedge the "firsts":** "first modern painting of war" is a common judgment, not a sourced
  quote (Clark said "revolutionary"); the *Family of Charles IV* "grotesque" reading is
  interpretation, not documented intent; the *Wanderer* self-portrait is uncertain. [Clark][Brit-Family][W-Wanderer]

---

## Source key (for the writer & fact-checker)

- **[W-Black]** Wikipedia, *Black Paintings* (Quinta del Sordo; painted on walls c.1819–23; Goya gave no titles; Brugada catalogued 1828; transferred to canvas 1874 by Salvador Martínez Cubells for Baron Frédéric Émile d'Erlanger; shown at the 1878 Paris Exposition; donated to the Spanish state 1881; 14 to the Prado, a 15th split off): `https://en.wikipedia.org/wiki/Black_Paintings`.
- **[W-Saturn]** Wikipedia, *Saturn Devouring His Son* (Black Painting; dining-room wall; 143.5 × 81.4 cm; Prado; Titan Saturn/Cronus): `https://en.wikipedia.org/wiki/Saturn_Devouring_His_Son`.
- **[Prado-Saturn]** Museo del Prado, *Saturn* collection record (Black Painting; transferred to canvas; dimensions): `https://www.museodelprado.es/en/the-collection/art-work/saturn/18110a75-b0e7-430c-bc73-2a4d55893bd6`.
- **[W-Third]** Wikipedia, *The Third of May 1808* (1814; 268 × 347 cm; Prado; Dos de Mayo reprisal; "one of the first paintings of the modern era"): `https://en.wikipedia.org/wiki/The_Third_of_May_1808`.
- **[Clark]** Kenneth Clark, on *The Third of May 1808* as "the first great picture which can be called revolutionary in every sense of the word, in style, in subject, and in intention" (the attributable line; NOT "first modern painting"). [Quote-gate to Clark's *Looking at Pictures* / standard citation.]
- **[Smarthistory-Family]** Smarthistory, *Francisco Goya, The Family of Charles IV* (1800–01; 280 × 336 cm; Prado; the "grotesque" reading as interpretation): `https://smarthistory.org/francisco-goya-the-family-of-charles-iv/`.
- **[Brit-Family]** Britannica, *The Family of Charles IV* (date, location; satire-vs-likeness debate): `https://www.britannica.com/topic/The-Family-of-Charles-IV`.
- **[W-Sleep]** Wikipedia, *The Sleep of Reason Produces Monsters* (Los Caprichos plate 43 of 80; 1799; sueño = sleep/dream): `https://en.wikipedia.org/wiki/The_Sleep_of_Reason_Produces_Monsters`.
- **[Met-Sleep]** The Met, *Plate 43 from 'Los Caprichos'* (the etching; the fuller inscription): `https://www.metmuseum.org/art/collection/search/338473`.
- **[W-Raft]** Wikipedia, *The Raft of the Medusa* (1818–19, Salon of 1819; 490 × 716 cm; Louvre; *Méduse* wreck 2 July 1816 off Mauritania; 147 adrift, 15 survived; Savigny + Corréard interviews; carpenter Lavillette's model; Hôpital Beaujon morgue; severed limbs / severed head from an asylum; Chaumareys; Bourbon embarrassment): `https://en.wikipedia.org/wiki/The_Raft_of_the_Medusa`.
- **[Brit-Raft]** Britannica, *The Raft of the Medusa* (dimensions, history): `https://www.britannica.com/topic/The-Raft-of-the-Medusa`.
- **[W-Liberty]** Wikipedia, *Liberty Leading the People* (1830; 260 × 325 cm; Louvre; July Revolution / Trois Glorieuses; Liberty as allegory not portrait; top-hat self-portrait an allegation, Dumas's denial): `https://en.wikipedia.org/wiki/Liberty_Leading_the_People`.
- **[Brit-Liberty]** Britannica, *Liberty Leading the People*: `https://www.britannica.com/topic/Liberty-Leading-the-People`.
- **[W-Sardanapalus]** Wikipedia, *The Death of Sardanapalus* (1827; 392 × 496 cm; Louvre; from Byron's 1821 play; Salon of 1827 scandal; 1844 Philadelphia replica): `https://en.wikipedia.org/wiki/The_Death_of_Sardanapalus`.
- **[19thc-Journal]** *Nineteenth-Century Art Worldwide*, review of *Eugène Delacroix: Journal* (Hannoosh ed.) — five notebooks 1822–24 + diaries 1847 and 1849–63, the 1848 volume lost: `https://www.19thc-artworldwide.org/autumn12/obrien-reviews-eugene-delacroix-journal-by-hannoosh`.
- **[Penn-Maghreb]** Penn State Press, *Journey to the Maghreb and Andalusia, 1832* (Delacroix's Morocco trip with the Comte de Mornay; *Women of Algiers*, 1834): `https://www.psupress.org/books/titles/978-0-271-08334-6.html`.
- **[W-Slave]** Wikipedia, *The Slave Ship* (full title with "Typhon"; 1840; RA exhibition; 90.8 × 122.6 cm; MFA Boston from 1899; Zong massacre 1781, ~132–133 thrown overboard; Clarkson hypothesis; Ruskin ownership): `https://en.wikipedia.org/wiki/The_Slave_Ship`.
- **[MFA-Slave]** Museum of Fine Arts, Boston, *Slave Ship* object record (object 31102; dimensions; provenance): `https://collections.mfa.org/objects/31102`.
- **[W-RainSteam]** Wikipedia, *Rain, Steam and Speed — The Great Western Railway* (1844; 91 × 121.8 cm; National Gallery NG538; Maidenhead bridge, GWR): `https://en.wikipedia.org/wiki/Rain,_Steam_and_Speed_%E2%80%93_The_Great_Western_Railway`.
- **[NG-RainSteam]** The National Gallery, *Rain, Steam and Speed* (NG538): `https://www.nationalgallery.org.uk/paintings/joseph-mallord-william-turner-rain-steam-and-speed-the-great-western-railway`.
- **[W-Temeraire]** Wikipedia, *The Fighting Temeraire* (full title; event 1838, exhibited 1839; 90.7 × 121.6 cm; National Gallery NG524; HMS Temeraire, Trafalgar veteran, towed to scrap): `https://en.wikipedia.org/wiki/The_Fighting_Temeraire`.
- **[NG-Temeraire]** The National Gallery, *The Fighting Temeraire* (NG524): `https://www.nationalgallery.org.uk/paintings/joseph-mallord-william-turner-the-fighting-temeraire`.
- **[W-SnowStorm]** Wikipedia, *Snow Storm: Steam-Boat off a Harbour's Mouth* (1842; Tate N00530; subtitle "The Author was in this Storm…"; the mast story as Turner's own, the unverifiable *Ariel*): `https://en.wikipedia.org/wiki/Snow_Storm:_Steam-Boat_off_a_Harbour%27s_Mouth`.
- **[Tate-SnowStorm]** Tate, *Snow Storm — Steam-Boat off a Harbour's Mouth* (N00530): `https://www.tate.org.uk/art/artworks/turner-snow-storm-steam-boat-off-a-harbours-mouth-n00530`.
- **[Brit-SnowStorm]** Britannica, *Snow Storm — Steam-Boat off a Harbour's Mouth* (the mast story "seems unlikely"): `https://www.britannica.com/topic/Snow-Storm-Steam-Boat-off-a-Harbours-Mouth`.
- **[W-Wanderer]** Wikipedia, *Wanderer above the Sea of Fog* (c.1818; 94.8 × 74.8 cm; Hamburger Kunsthalle; self-portrait uncertain, von Brincken officer theory): `https://en.wikipedia.org/wiki/Wanderer_above_the_Sea_of_Fog`.
- **[W-Monk]** Wikipedia, *The Monk by the Sea* (1808–10; 110 × 171.5 cm; Alte Nationalgalerie Berlin): `https://en.wikipedia.org/wiki/The_Monk_by_the_Sea`.
- **[Brit-Monk]** Britannica, *Monk by the Sea*: `https://www.britannica.com/topic/Monk-by-the-Sea`.
- **[W-HayWain]** Wikipedia, *The Hay Wain* (exhibited as *Landscape: Noon*, 1821; 130.2 × 185.4 cm; National Gallery NG1207; River Stour at Flatford; gold medal 1824 Paris Salon; influenced Delacroix): `https://en.wikipedia.org/wiki/The_Hay_Wain`.
- **[NG-HayWain]** The National Gallery, *The Hay Wain* (NG1207): `https://www.nationalgallery.org.uk/paintings/john-constable-the-hay-wain`.
- **[Brit-David]** Britannica, *Jacques-Louis David* (Neoclassicism; revolutionary/Napoleonic ideals; cool classical line; *Oath of the Horatii* 1784, *Death of Marat* 1793): `https://www.britannica.com/biography/Jacques-Louis-David-French-painter`.
- **[Smarthistory-Horatii]** Smarthistory, *Jacques-Louis David, Oath of the Horatii* (1784; frieze-like Neoclassical "before"): `https://smarthistory.org/jacques-louis-david-oath-of-the-horatii/`.
- **[W-Burke]** Wikipedia, *A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful* (Edmund Burke, 1757; the sublime = terror, vastness, power, distinct from beauty): `https://en.wikipedia.org/wiki/A_Philosophical_Enquiry_into_the_Origin_of_Our_Ideas_of_the_Sublime_and_Beautiful`.
- **[W-Preface]** Wikipedia + UNC scan, *Preface to the Lyrical Ballads* (Wordsworth/Coleridge; 1798 first ed., Preface added 1800, expanded 1802; "spontaneous overflow of powerful feelings … emotion recollected in tranquillity"): `https://en.wikipedia.org/wiki/Preface_to_the_Lyrical_Ballads` · text: `https://viscomi.sites.oasis.unc.edu/viscomi/coursepack/wordsworth/Wordsworth-1800_LB_Preface.pdf`.
- **[Wikiquote-CDF]** Wikiquote, *Caspar David Friedrich* (the "paint what he sees within himself" + "close your bodily eye" aphorisms; secondary English translations — flag as circulated, not primary): `https://en.wikiquote.org/wiki/Caspar_David_Friedrich`.
- **[AHU-Baudelaire]** Art History Unstuffed / Baudelaire, *Salon de 1846*, "Qu'est-ce que le romantisme?" ("Romanticism … in a way of feeling"; "To say Romanticism is to say modern art"): `https://arthistoryunstuffed.com/baudelaire-art-criticism/` · French original (Wikisource): `https://fr.wikisource.org/wiki/Salon_de_1846`.
- **[Met-Rom]** The Met, *Romanticism* (a sensibility/temperament, not a coherent stylistic movement; no formal manifesto): `https://www.metmuseum.org/essays/romanticism`.
- **[TAS-Rom]** TheArtStory, *Romanticism overview* (temperament; individual expression over collective doctrine): `https://www.theartstory.org/movement/romanticism/`.
- **[Brit-Rom]** Britannica, *Western painting — Romanticism* (the reaction to Neoclassicism; emotion, color, the sublime, nationalism): `https://www.britannica.com/art/Western-painting`.

---

## 5-LINE SUMMARY + HANDLE-WITH-CARE (return to caller)

1. **Romanticism = the revolt of feeling against Neoclassical reason** (c.1780–1850). Not a
   style or a movement but a **temperament** shared across borders — Spain (Goya), France
   (Géricault, Delacroix), Britain (Turner, Constable), Germany (Friedrich): color and energy
   over line and restraint; emotion, imagination, the individual, the nation, the exotic, the
   nightmare, and the **sublime** (nature as terrifyingly grand). It is the Revolutionary age
   seen from the other side: disillusion, the horror of war, national feeling.
2. **Shape rise → peak → spread → afterlife:** Goya alone in Spain + Burke's sublime (rise);
   Géricault's *Raft* and Delacroix's *Sardanapalus*/*Liberty* in Paris (peak); Friedrich's
   German landscapes and Turner/Constable in Britain (spread); Orientalism, Barbizon →
   Impressionism (afterlife).
3. **Manifesto = ABSENT (`absent: true`), with literary/critical surrogates.** No painters'
   manifesto. Surrogates, quoted accurately: **Wordsworth's *Lyrical Ballads* Preface**
   ("spontaneous overflow of powerful feelings"), **Friedrich's aphorisms** (secondary
   translation, flag it), **Delacroix's *Journal***, and **Baudelaire** ("Romanticism … in a
   way of feeling").
4. **Top legend-ledger catches:** (a) **Turner's lashed-to-the-mast story is his OWN and
   almost certainly apocryphal** — frame, don't assert; (b) **Goya's Black Paintings were on
   his house walls, never titled or exhibited by him**, transferred to canvas in 1874 (14 in
   the Prado, a 15th split off); (c) *Liberty* is **July 1830, not 1789**, and Marianne is an
   **allegory, not a real woman**; (d) "first modern painting of war" → say **Clark's
   "revolutionary,"** not a sourced "first"; (e) the *Family of Charles IV* "grotesque" intent
   and the *Wanderer* self-portrait are both **uncertain/interpretation**.
5. **Image rights = the EASY case** (opposite of AbEx): every artist dies by 1851 (Delacroix
   1863), every canon work pre-1851 → **PD worldwide, all on Commons, all inlineable, tier
   `/commons/`.** All 14 canon files + all 6 portraits + the David "before" are
   coordinator-load-checked (200, correct subject). Nothing rights-blocked.

**HANDLE-WITH-CARE, additional:**
- ⚠️ **The Turner mast myth** — Turner told it himself; no verifiable *Ariel* left Harwich;
  Britannica says it "seems unlikely." Frame as a story, never as fact.
- ⚠️ **Goya's Black Paintings** — never titled or exhibited by Goya; on his walls; transferred
  to canvas 1874 by Martínez Cubells for Baron d'Erlanger. Don't credit the titles to Goya.
- ⚠️ **Géricault's research** — keep "a severed head obtained from an asylum"; **drop
  "guillotined heads"** (embellishment).
- ⚠️ ***Liberty*** — July 1830 (Trois Glorieuses, fall of Charles X), allegory not portrait;
  top-hat-as-Delacroix is legend.
- ⚠️ **The *Slave Ship* + Delacroix's Orientalism** — name the Zong massacre and the abolition
  context, and the Orientalist gaze, accurately; neither sanitize nor lecture (§8).
- ⚠️ **Dimensions:** Raft is **490 × 716 cm** (not 491); imperial in all prose and chips.
- ⚠️ **Quote spelling:** Wordsworth = "tranquillity" (double-L). Slave Ship title = "Typhon."
