# Fact pack — NEOCLASSICISM (kind: MOVEMENT, Neoclassical & Romantic era `nro`, c.1750 → c.1830; the art of Reason, the antique revived, the official style of the Revolution and Napoleon)

Coordinator-built ground truth for the art content pipeline. The author drafts the
**movement-level chaptered narrative** ONLY from this. Every concrete claim traces to a
sourced item here or is flagged `⚠️ UNVERIFIED`. (Web-checked 2026-06-12; the fact-checker
gate re-verifies independently against the source key.)

Dimensions are given in cm from the museum record AND converted to **feet/inches** (this app
uses imperial only, never cm — `feedback_art_dimensions_imperial`).

## The section
- The **Neoclassicism movement** read: `/art/nro/neo` → `…/s/{sectionId}`. (Coordinator
  registers the `neo` const in `src/lib/art-content.ts`: range `c.1750–c.1830`, era `nro`
  Neoclassical & Romantic.) **Image rights are EASY here** — this is the inverse of the
  Abstract Expressionism case. The movement is c.1750–1830, every canonical work is pre-1900
  and so **US-public-domain and freely inlineable** (`/commons/` tier). Hero, card, break,
  canon thumbnails, and artist portraits are ALL born-verified PD Commons files (resolved in
  §4 and §6). The only image discipline: confirm each file's SUBJECT by eye, and pick a
  landscape/near-square hero (the Horatii and Socrates are landscape; the portraits and the
  Odalisque are not — match aspect to frame).
- Deliverable now = the **chaptered movement narrative** (the prose) + its `sections` chapter
  metadata + a Fact ledger. Movement-page metadata (the break block, the manifesto/key-text
  block, the canon list, lineage, artists row, parallels) the coordinator assembles from this
  pack; per-work DEEP reads (Horatii, Marat, Socrates, Grande Odalisque) come in a later pass.

## Throughline (the one idea)
Neoclassicism is the art of **Reason and civic virtue** — a deliberate U-turn back to Greek
and Roman models, made in conscious revolt against the pastel frivolity of Rococo. It is
powered by the **Enlightenment**, by the buried Roman cities coming out of the ground
(**Herculaneum** from 1738, **Pompeii** from 1748), and above all by one art-loving German,
**Johann Joachim Winckelmann**, whose 1755 essay told painters to chase the Greeks' **"noble
simplicity and quiet grandeur."** The new painting privileges **line over color** and **moral
seriousness over pleasure**: clear drawing, a shallow stage like a carved frieze, sculptural
figures, stoic subjects from antiquity — the canvas as a **lesson**, not a decoration. In
**Jacques-Louis David** it found its severe master, and through David it became the **official
style of the French Revolution** (David was a regicide deputy who staged the Revolution's
festivals and painted the murdered Marat as a secular martyr) and then of **Napoleon's empire**.
His pupil **Ingres** carried the cult of line deep into the 19th century, defending drawing
against the color of the Romantics even as the era's name changed around him.

---

## 0. THE LEGEND LEDGER — documented vs myth (READ FIRST)

| Claim | Verdict | The real fact |
|---|---|---|
| *Oath of the Horatii* was painted "as a call to revolution" / a prophecy of 1789 | **MYTH / retrospective — HEDGE it** | It was a **royal Crown commission**, ordered by **Louis XVI's administration through the comte d'Angiviller** (director of the Bâtiments du roi, requested 1781–82) and **painted in 1784, five years BEFORE the Revolution**. The revolutionary/"prophecy" reading is **hindsight**, projected back after 1789 because of its Roman-republican civic-virtue subject and David's later politics. Frame it as read-as-prophecy-later, never as painted-to-incite. [Louvre-Horatii][W-Horatii] |
| David was "just a court painter" / not really political | **MYTH — he was a deeply committed revolutionary** | All DOCUMENTED: elected a **deputy to the National Convention** (1792); **voted for the execution of Louis XVI** (a regicide; his royalist wife divorced him over it); **member of the Jacobin Club**, ally of **Robespierre**, sat on the **Committee of General Security**, briefly **President of the Convention** ("the Robespierre of the brush"); **staged the Revolution's festivals and funerals** (the Festival of the Supreme Being, June 1794; the funerals of Lepeletier and Marat); **arrested after Thermidor** (Robespierre's fall, July 1794), imprisoned, released under the 1795 amnesty. Be this precise. [W-David][Britannica-David] |
| "Noble simplicity and quiet grandeur" is Winckelmann's exact English, translated by Fuseli | **HEDGE — the phrase is right; the Fuseli attribution of THAT wording is WRONG** | The German is **"eine edle Einfalt und eine stille Größe."** **Henry Fuseli's** actual 1765 translation reads **"a noble simplicity and sedate grandeur."** **"quiet grandeur"** (and "calm grandeur") is the **modern standard** rendering of *stille Größe*, NOT Fuseli's word. Use "noble simplicity and quiet grandeur" as the famous modern phrasing; if you credit FUSELI specifically, it must be **"sedate grandeur."** [Winckelmann-Gedanken][Fuseli-1765] |
| The *Grande Odalisque* has "three extra vertebrae" (one fact) | **MYTH-AS-ONE-FACT — it's TWO different claims, don't merge** | (a) **1819 Salon critics** attacked the elongated back, saying it had "**two or three vertebrae too many**" — an insult to Ingres's *competence*. (b) A **2004 study** (Maigne et al., *J. Royal Soc. Medicine*) measured it and found the distortion **greater — about FIVE extra lumbar vertebrae, involving the pelvis too** — and argued it was **deliberate**, not error. Ship the contemporary "three (an insult)" and the modern "five (intentional)" as separate. ⚠️ The "three vertebrae" line is widely attributed to the critic **Kératry** but I could NOT confirm that attribution — present the 1819 remark **anonymously** unless a primary cite to Kératry surfaces. [W-Odalisque][Maigne-2004][Benjamin-2000] |
| "Neoclassicism" is what the movement called itself | **MYTH — the label is retrospective and was originally an insult** | Contemporaries did NOT use "Neoclassical." They spoke of **"the true style," "the correct/reformed style,"** the antique revival, and in France **"le goût grec"** ("the Greek taste," current by 1757). **"Neoclassicism"** was coined **later (commonly dated to the 1880s)** and was originally **pejorative** — "pseudo-classical" — aimed especially at David and his school. [W-Neoclassicism] |
| Neoclassicism had a painters' manifesto | **MYTH — it had a founding TEXT, not a manifesto** | No painter issued a manifesto. Its founding document is **Winckelmann's essay** *Gedanken über die Nachahmung der griechischen Werke…* (Dresden, **1755**) — a critic/scholar's text, not an artists' program. Treat the block as **`absent`-with-surrogate** (key-text = Winckelmann), and note **Mengs's *Parnassus* (1761)** as the painted manifesto-analog. [Winckelmann-Gedanken][Mengs-Parnassus] |
| David died honored in France | **HEDGE — he died in EXILE** | After Napoleon's fall, David (a regicide AND a Bonapartist) was **exiled** and spent his last years in **Brussels**, where he died in 1825; France would not repatriate his body. (Useful for the afterlife beat; verify the specific detail at gate 1 if the author leans on it.) [W-David] |

---

## 1. THE MOVEMENT STORY (roots → the founding text → the break → David → the Revolution → Napoleon → Ingres → afterlife)

### Roots — why antiquity, why now
- **The Enlightenment.** The age of Reason wanted an art of clarity, order, moral purpose, and
  public virtue — the opposite of Rococo's private pleasures. Antiquity (Greece and republican
  Rome) supplied the model: a civic, rational, exemplary art. [W-Neoclassicism]
- **The buried cities come up.** Systematic excavation of **Herculaneum began 1738** and
  **Pompeii in 1748**, both ordered under **Charles of Bourbon, King of Naples** (later Charles
  III of Spain). For the first time Europe saw Roman daily life, decoration, and design directly
  out of the ground — fuel and raw material for the antique revival. [W-Pompeii][Ercolano]
- **The "Greek taste."** In France the new fashion was already called **"le goût grec"** by 1757.
  The reform was in the air before it had a doctrine. [W-Neoclassicism]

### The founding text — Winckelmann (the manifesto-analog, see §3)
- **Johann Joachim Winckelmann** (1717–1768), German, often called the **father of art history**
  and of scientific archaeology. His **1755** essay (Dresden) *Gedanken über die Nachahmung der
  griechischen Werke in der Malerei und Bildhauerkunst* ("Thoughts on the Imitation of Greek
  Works in Painting and Sculpture") set the program: imitate the Greeks; their supreme quality
  is **"eine edle Einfalt und eine stille Größe"** — noble simplicity and quiet grandeur, in
  both pose and expression. His bigger book, *Geschichte der Kunst des Altertums* (*History of
  the Art of Antiquity*), followed in **1764**. He was **murdered in Trieste in 1768** (stabbed
  in a hotel room by a fellow traveller, Francesco Arcangeli). [Winckelmann-Gedanken][Britannica-Winckelmann]
- **Anton Raphael Mengs** (1728–1779), Winckelmann's close friend, tried to PAINT the doctrine:
  his ceiling fresco **`Parnassus` (1761, Villa Albani, Rome)** is often called the first
  programmatic Neoclassical painting — the theory turned into a picture. [Mengs-Parnassus]

### The break (a structural block — see §2)
- **Before = Rococo:** François Boucher (1703–1770) and Jean-Honoré Fragonard (1732–1806).
  Pastel palettes, asymmetric S-curves, feathery touch, erotic and playful aristocratic
  subjects (Fragonard's *The Swing*, c.1767 — a girl swinging, a hidden lover looking up her
  skirts). Art as private pleasure for a small rich world. [W-Swing]
- **After = David:** a stripped, severe, **sculptural** classicism. Clear hard **line over soft
  color**, a **shallow frieze-like stage**, strong directional light, smooth near-invisible
  brushwork, and stoic moral subjects from antiquity. *Oath of the Horatii* (1784) is the
  hinge. [W-Horatii]

### The severe master — Jacques-Louis David
- **Jacques-Louis David** (1748–1825), French, the movement's commanding figure.
- **`Oath of the Horatii` (1784, Louvre)** — three brothers swear on swords held out by their
  father to defend Rome against Alba Longa; the women collapse in grief at right. A Crown
  commission (see legend ledger) that became the manifesto-image of the new style: civic duty
  over private feeling, drawn with a draughtsman's hardness. [Louvre-Horatii][W-Horatii]
- **`The Death of Socrates` (1787, the Met)** — Socrates, condemned by Athens, calmly reaches
  for the cup of hemlock mid-argument, still teaching as he dies: Reason facing death without a
  tremor. [Met-Socrates]

### The official style of the Revolution
- David did not just sympathize with the Revolution; he **ran its imagery** (see legend ledger
  for the documented role). He **staged its festivals and funerals** as living Neoclassical
  theater. [W-David]
- **`The Death of Marat` (1793, Brussels)** — his friend and fellow Montagnard deputy
  **Jean-Paul Marat**, stabbed in his medicinal bath by **Charlotte Corday** on 13 July 1793,
  shown as a **secular martyr** — the slumped arm, the bare skin, the plain wooden box, the
  empty upper void quoting a Christian pietà/deposition but emptied of God. Propaganda as
  scripture. [W-Marat]

### The official style of the Empire
- David rallied to **Napoleon** and became his image-maker. **`Napoleon Crossing the Alps`
  (1801–05)** — Bonaparte on a rearing white horse, cloak streaming, pointing the way, names of
  Hannibal and Charlemagne carved in the rock beneath him: heroic myth, not reportage (he
  actually crossed on a mule). There are **five versions**; the first (Charles IV of Spain's
  commission) is at **Malmaison.** [W-Napoleon-Alps]
- **Ingres** dressed the throne: see below.

### The cult of line carries on — Ingres
- **Jean-Auguste-Dominique Ingres** (1780–1867), French, **David's pupil** and the great
  defender of **line/drawing** ("a thing well-drawn is always a thing well-painted"). His camp,
  the **Ingristes**, fought the **colorists** under **Eugène Delacroix** — a re-run of the old
  academic drawing-vs-color quarrel (Poussinistes vs Rubénistes). [TheArtStory-Ingres][Veritas-Color]
- **`Napoleon I on his Imperial Throne` (1806, Musée de l'Armée)** — Napoleon frozen as a
  Byzantine/Jovian icon, hieratic and cold; badly received at the Salon of 1806. [W-Napoleon-Throne]
- **`Grande Odalisque` (1814, Louvre)** — a reclining harem nude painted for Napoleon's sister
  Caroline Murat, her back impossibly long and smooth; the famous "extra vertebrae" scandal at
  the **Salon of 1819** (see legend ledger). Line pushed past anatomy for the sake of the curve.
  [W-Odalisque]
- **`The Apotheosis of Homer` (1827, Louvre)** — a symmetrical altarpiece of Western genius,
  Homer enthroned and crowned, all the great artists and writers ranged below: late
  Neoclassicism as a closed pantheon, painted as a Louvre ceiling. [W-Apotheosis]

### Afterlife
- Neoclassicism **was the academy** for the next century: David's and Ingres's drawing-first
  discipline became the official training that **Realism, then Impressionism, then the
  avant-garde, would each have to break.** Its opposite number, **Romanticism** (Géricault,
  Delacroix — color, motion, emotion), grew up directly against it inside the same `nro` era;
  the line-vs-color fight is the spine of the whole era. The label "Neoclassicism" itself was
  pinned on later, partly as an insult (see legend ledger). [W-Neoclassicism][Veritas-Color]

**Why it mattered (one paragraph for the writer):** Neoclassicism is the moment European
painting decided art should be *serious* again — a school for virtue drawn from the Greeks and
Romans, against a Rococo it found pretty and empty. It put **line, clarity, and moral lesson**
at the center, dug its imagery straight out of the newly excavated Roman cities, and found in
Winckelmann a critic who gave it a creed ("noble simplicity and quiet grandeur") and in David a
painter who gave it a body. Then history grabbed it: the same stripped, sculptural style that
preached Roman civic virtue became the **official art of the French Revolution and of
Napoleon**, with David himself a regicide deputy painting a murdered radical as a saint. It set
the academic rules — drawing first — that every later revolt in art would define itself against.
[W-Neoclassicism][W-David]

---

## 2. THE BREAK BLOCK (`whatChanged`) — painting stops decorating and starts preaching; color yields to line

The concrete change, stated plainly (not "revolutionary"):

> **Before (Rococo):** painting is a private pleasure for a rich, aristocratic world. The
> palette is pastel (powder blue, rose, cream); the brushwork is feathery and visible; the
> composition swings on soft asymmetric curves; the subjects are flirtation, mythological
> dalliance, and play (Fragonard's *The Swing*: a girl on a swing, a lover hidden in the bushes
> looking up her skirts). Pretty, light, and about nothing but pleasure.
>
> **After (Neoclassicism):** painting becomes a public lesson in virtue. David strips it down.
> The palette goes **severe and local** (stone, steel, blood-red), the brushwork goes **smooth
> and invisible** so the figures read as carved marble, the stage goes **shallow and frieze-like**
> with the action pressed to the foreground, the light goes **hard and directional**, and the
> subject becomes **stoic duty from Greek and Roman history** — men swearing to die for the
> state, a philosopher drinking poison without flinching. Above all, **clear LINE replaces soft
> color** as the thing that carries the picture: you could trace every figure with a pencil. The
> canvas is no longer a decoration on a salon wall; it is an argument.

### Before/after pair (born-verified candidates — ALL PD, inlineable)

| Side | Work | Why it's the right one | Image-rights |
|---|---|---|---|
| **BEFORE — Rococo, art as private aristocratic pleasure, pastel + curve + feathery touch** | **Jean-Honoré Fragonard, *The Swing* (*Les Hasards heureux de l'escarpolette*), c.1767, Wallace Collection, London** | The textbook Rococo picture: erotic, frivolous, pastel, swinging on a curve, made for a private patron's delight — exactly what David's generation rejected. | ✅ **PD** (Fragonard d.1806). Commons `File:The Swing (P430).jpg`. |
| **AFTER — Neoclassicism, art as public moral lesson, line + frieze + severe palette** | **Jacques-Louis David, *Oath of the Horatii*, 1784, Louvre** | The hinge picture: stripped palette, shallow carved-frieze stage, sculptural drawn figures, stoic civic subject — the new style's manifesto-image. | ✅ **PD** (David d.1825). Commons `File:David-Oath of the Horatii-1784.jpg` (1,292×1,001 — fine inline; use a higher-res Google Art Project copy for a hero). |

**Recommended handling:** both images ship inline (this movement has no rights problem). Put the
Fragonard and the David side by side and let the prose name the concrete swaps: pastel→severe,
curve→frieze, feathery→invisible-smooth, flirtation→civic duty, **color→line.**

---

## 3. THE MANIFESTO / KEY-TEXT BLOCK (`manifesto`) — `absent: true`, with Winckelmann as the founding TEXT (and Mengs as the painted analog)

Neoclassicism had **NO painters' manifesto.** Set `absent: true` and tell the silence honestly:
the painters issued no program; their doctrine was written for them by a **scholar-critic**,
Winckelmann, a decade before David picked up a brush. Surface his **1755 essay** as the
key-text surrogate (the "key-passage" analog).

### The founding text (verified)
- **Johann Joachim Winckelmann, *Gedanken über die Nachahmung der griechischen Werke in der
  Malerei und Bildhauerkunst*** ("Thoughts on the Imitation of Greek Works in Painting and
  Sculpture"), **Dresden, 1755**. The first edition was a tiny run (~50 copies). [Winckelmann-Gedanken]
- The **painted analog:** Mengs's **`Parnassus` (1761, Villa Albani)** — the doctrine turned
  into a picture, by Winckelmann's own friend. Mention it as the "manifesto in paint." [Mengs-Parnassus]

### The key line (verify wording at gate 1 — quote-precision trap)
The German maxim, from the essay's culminating sentence:
  > "eine edle Einfalt und eine stille Größe" — "a noble simplicity and a quiet grandeur," in
  > both pose and expression. [Winckelmann-Gedanken]

Full German (for the fact-checker): *"Das allgemeine vorzügliche Kennzeichen der griechischen
Meisterstücke ist endlich eine edle Einfalt und eine stille Größe, sowohl in der Stellung als
auch im Ausdruck."*

### Translation provenance (LOAD-BEARING for the fact-checker)
- **Henry Fuseli** (Johann Heinrich Füssli) made the first English translation in **1765**:
  *Reflections on the Painting and Sculpture of the Greeks* (London). **Fuseli's actual wording
  is "a noble simplicity and sedate grandeur"** — NOT "quiet grandeur." [Fuseli-1765]
- **"noble simplicity and quiet grandeur"** (and "calm grandeur") is the **modern standard**
  English rendering of *stille Größe*, the form everyone quotes today. Use it as the famous
  phrase — but **do not attribute that exact wording to Fuseli.** If the prose credits Fuseli's
  1765 translation specifically, the word is **"sedate."** [Fuseli-1765][Winckelmann-Gedanken]

### Born-verified OPENLY-READABLE source URLs for the block's "source link"
- **German original (full text):** Zeno.org carries the full *Gedanken* text; the Deutsche
  Digitale Bibliothek / SLUB Dresden hold the 1755 edition. Cite the **1755 Dresden first
  edition** as canonical. [Winckelmann-Gedanken]
- **Fuseli's 1765 English translation (full text, open):** **Project Gutenberg ebook #61317** —
  the complete Fuseli *Reflections* (1765). Use this as the open "Read the source ↗" link; it is
  the right document AND it lets the reader check the "sedate grandeur" wording themselves.
  `https://www.gutenberg.org/ebooks/61317` ✅ [Fuseli-1765]

### How to write the absence
Tell it straight: *"The Neoclassical painters never wrote a manifesto. Their creed was written
for them, by a man who couldn't paint. In 1755 a German scholar named Johann Joachim Winckelmann
published a slim essay telling artists to stop inventing and start imitating the Greeks, whose
supreme quality he named in a phrase that became the whole movement's motto: 'noble simplicity
and quiet grandeur.' Mengs tried to paint it; David, thirty years later, actually did. So the
founding document of an art of severe, drawn, moral pictures is a piece of art criticism, and
its famous line reaches English not quite as its first translator, Henry Fuseli, wrote it
('sedate grandeur') but in the smoother form we all quote now."* Set `absent: true`.

---

## 4. THE CANON (~9 works) — ALL public-domain, inlineable; born-verified Commons files

**IMAGE-RIGHTS RULE for this vertical:** the app inlines only US-public-domain images
(published-before-1930 = US-PD). **Every work in this movement is pre-1900 → US-PD → freely
inlineable** (`/commons/` tier). No RestrictedFigure anywhere. Confirm each thumbnail's SUBJECT
by eye at gate 6 (Commons keyword search returns wrong files).

For EACH work: museum + accession, dimensions (cm from the record + ft/in conversion), one-line
blurb, and the **verified Commons `File:...`**. Conversions are height × width (app convention).

### — JACQUES-LOUIS DAVID —

#### 1. *Oath of the Horatii* (Le Serment des Horaces), 1784 — THE break/card/hero candidate
- **Museum:** Louvre, Paris (INV 3692; secondary MR 1432). **Painted in Rome 1784, first
  exhibited Salon of 1785** (give both years; don't collapse).
- **Dimensions:** 330 × 425 cm (Louvre record; Wikipedia 329.8 × 424.8) = **~10 ft 10 in × 13 ft 11 in**.
  Oil on canvas. **Landscape — good hero.**
- **Blurb fact:** Three Horatii brothers swear on the swords their father holds out, vowing to
  fight Alba Longa for Rome while the women crumple in grief at right — civic duty drawn with a
  draughtsman's hardness, the manifesto-image of the style. [Louvre-Horatii][W-Horatii]
- **Commons file:** `File:David-Oath of the Horatii-1784.jpg` (1,292×1,001 PD; use a higher-res
  Google Art Project copy for a large hero). ✅

#### 2. *The Death of Socrates* (La Mort de Socrate), 1787
- **Museum:** The Metropolitan Museum of Art, New York (Catharine Lorillard Wolfe Collection,
  Wolfe Fund, 1931; **accession 31.45**).
- **Dimensions:** 129.5 × 196.2 cm = **~4 ft 3 in × 6 ft 5¼ in**. Oil on canvas. **Landscape.**
- **Blurb fact:** Condemned by Athens, Socrates reaches for the cup of hemlock mid-sentence,
  finger raised, still arguing as he dies — Reason meeting death without a flinch. [Met-Socrates]
- **Commons file (Met CC0, high-res 4,000×2,663):** `File:The Death of Socrates MET DP-13139-001.jpg` ✅

#### 3. *The Death of Marat* (La Mort de Marat), 1793
- **Museum:** Royal Museums of Fine Arts of Belgium (RMFAB), Brussels. Inscribed "À MARAT,
  DAVID. L'AN DEUX."
- **Dimensions:** **165 × 128 cm** (RMFAB record; Wikipedia infobox gives 162 × 128 — ⚠️
  resolve to the museum's 165 before locking) = **~5 ft 5 in × 4 ft 2⅜ in**. Oil on canvas.
  **Portrait/upright — inline figure, NOT the landscape hero.**
- **Blurb fact:** David's friend and fellow Montagnard deputy Jean-Paul Marat, stabbed in his
  medicinal bath by Charlotte Corday on 13 July 1793, painted as a secular martyr — the slumped
  arm, the plain wooden box, the great empty void above, a pietà emptied of God. [W-Marat]
- **Commons file (high-res 4,045×5,205):** `File:Death of Marat by David.jpg` ✅

#### 4. *Napoleon Crossing the Alps* (Bonaparte franchissant le Grand-Saint-Bernard), 1801–05
- **Museum:** First/original version → **Château de Malmaison**, Rueil-Malmaison; **commissioned
  by Charles IV of Spain.** (Five versions total. ⚠️ NOTE THE INVERSION TRAP: the Charles IV
  commission is the **MALMAISON** one; the **Charlottenburg** picture is the *second* version,
  made for Saint-Cloud and seized by Blücher in 1815 — do NOT swap these.)
- **Dimensions (Malmaison):** ~260 × 221 cm = **~8 ft 6⅜ in × 7 ft 3 in**. Oil on canvas. **Portrait/upright.**
- **Blurb fact:** Bonaparte on a rearing white horse, cloak streaming, pointing over the pass,
  Hannibal's and Charlemagne's names carved in the rock below — heroic myth, not reportage (he
  actually crossed on a mule). [W-Napoleon-Alps]
- **Commons file (high-res 3,394×4,134):** `File:David - Napoleon crossing the Alps - Malmaison2.jpg` ✅

### — JEAN-AUGUSTE-DOMINIQUE INGRES —

#### 5. *Grande Odalisque* (Une odalisque, dite La grande odalisque), 1814
- **Museum:** Louvre, Paris (RF 1158; purchased 1899). Painted in Rome for **Caroline Murat,
  Queen of Naples** (Napoleon's sister); exhibited **Salon of 1819.**
- **Dimensions:** **91 × 162 cm** (Louvre record; Wikipedia's 88.9 × 162.56 is a rounded
  in→cm conversion — use the Louvre's 91 × 162) = **~3 ft × 5 ft 4 in**. Oil on canvas. **Landscape.**
- **Blurb fact:** A reclining harem nude seen from behind, her cool back drawn impossibly long
  and smooth — line bent past anatomy for the sake of the curve; the "too many vertebrae"
  scandal at the 1819 Salon (see legend ledger). [W-Odalisque]
- **Commons file:** `File:Jean Auguste Dominique Ingres - The Grand Odalisque - WGA11841.jpg` (1,638×900 PD) ✅

#### 6. *The Apotheosis of Homer* (L'Apothéose d'Homère), 1827
- **Museum:** Louvre, Paris (INV 5417; Louvre title *Homère déifié, dit aussi L'apothéose
  d'Homère*). Painted as a **ceiling of the Musée Charles X**; the original was removed in 1855
  (a Balze copy hangs in situ) and the canvas now shows as an easel-format painting.
- **Dimensions:** 386 × 512 cm = **~12 ft 8 in × 16 ft 9½ in**. Oil on canvas. **Landscape.**
- **Blurb fact:** Homer enthroned and crowned by Victory before a Greek temple, the great
  writers and artists of all ages ranged below in symmetrical homage — late Neoclassicism as a
  closed pantheon of genius. [W-Apotheosis]
- **Commons file:** `File:Jean Auguste Dominique Ingres - The Apotheosis of Homer - WGA11849.jpg`
  (clean WGA series; a 10,028×7,465 high-res alt exists if a big thumbnail is wanted). ✅

#### 7. *Napoleon I on his Imperial Throne* (Napoléon Ier sur le trône impérial), 1806
- **Museum:** Musée de l'Armée, Paris (Hôtel des Invalides) (INV 5420; also MR 2069). Exhibited
  Salon of 1806 (poorly received).
- **Dimensions:** **259 × 162 cm** (widely-cited museum value; fr.Wikipedia gives 263 × 163 —
  ⚠️ confirm against the Musée de l'Armée sheet before locking) = **~8 ft 6 in × 5 ft 3¾ in**.
  Oil on canvas. **Portrait/upright.**
- **Blurb fact:** Napoleon enthroned head-on as a frozen Jovian/Byzantine icon — ivory, gold,
  and ermine, hieratic and cold; Ingres's line pushed all the way into ritual stiffness. [W-Napoleon-Throne]
- **Commons file (1,868×2,752):** `File:Ingres, Napoleon on his Imperial throne.jpg` ✅

### — THE SCULPTOR & THE EARLY ANALOG —

#### 8. Canova — *Psyche Revived by Cupid's Kiss* (Cupid and Psyche), 1787–93
- **Museum:** Louvre, Paris (prime version, entered 1824); a second version in the Hermitage,
  St. Petersburg. Marble.
- **Blurb fact:** Cupid lifts the swooning Psyche into a kiss, the whole group an open X of
  reaching arms in polished white marble — Neoclassical sculpture's smooth, idealized
  counterpart to David's painting. (Marble dimensions vary by source; verify before any stats
  chip — sculpture is canon-row optional, no inline-rights issue.) [W-Psyche]
- **Commons:** Canova's marble is PD (d.1822); resolve a specific `File:...` at gate 6 if used.

#### 9. Mengs — *Parnassus* (ceiling fresco), 1761 — the painted manifesto-analog
- **Location:** Villa Albani, Rome (in situ ceiling; commissioned by Cardinal Alessandro Albani).
- **Blurb fact:** Apollo among the Muses on Parnassus, composed with frieze-like clarity — often
  called the first programmatic Neoclassical painting, the doctrine Winckelmann wrote turned into
  a picture by his own friend. [Mengs-Parnassus]
- **Commons:** PD (Mengs d.1779); resolve a specific `File:...` at gate 6 if used inline.

**Rights summary line for the coordinator:** *Neoclassicism is the EASY image case — the polar
opposite of Abstract Expressionism. Every canonical work is pre-1900, hence US-public-domain and
freely inlineable (`/commons/`). Hero = a landscape David (Horatii or Socrates); card = a
non-portrait David print; the break ships both the Fragonard "before" and the David "after"
inline; all canon thumbnails and all seven artist portraits are born-verified PD Commons files
(§4/§6). The ONLY discipline: eyeball each file's subject, match hero aspect to the landscape
frame, and pick the right Napoleon-Alps version (Malmaison, not Charlottenburg).*

---

## 5. LINEAGE (the lineage block)

### Parents (what Neoclassicism grew out of)
- **The Enlightenment** — the age of Reason wanting a rational, civic, exemplary art. [W-Neoclassicism]
- **Antiquity itself** — Greek and Roman sculpture and republican Rome as the moral/visual model.
- **The excavations of Herculaneum (1738) and Pompeii (1748)** — direct access to ancient Roman
  art and design. [W-Pompeii][Ercolano]
- **Winckelmann's 1755 essay** — the founding doctrine ("noble simplicity and quiet grandeur").
  [Winckelmann-Gedanken]
- **As a reaction AGAINST Rococo** (Boucher, Fragonard) — the parent it defined itself by
  rejecting. [W-Swing]

### Children (what Neoclassicism fed)
- **Romanticism** (by reaction, INSIDE the same `nro` era) — Géricault and Delacroix answered
  line with color, stillness with motion, antiquity with the contemporary and the exotic; the
  line-vs-color quarrel (Ingristes vs colorists) is the era's spine. [Veritas-Color]
- **Academic art / the Salon system** — David's and Ingres's drawing-first discipline became the
  official 19th-century training. [W-Neoclassicism]
- **Realism, then Impressionism, then the avant-garde** (by reaction) — each later revolt broke
  against the academic, line-first rules Neoclassicism set. [W-Neoclassicism]

### Gave / took notes
- **Took from antiquity + the excavations:** the subjects, the figures, the frieze stage.
- **Took from Winckelmann:** the creed (imitate the Greeks; noble simplicity, quiet grandeur).
- **Took from Rococo:** something to revolt against.
- **Gave to Romanticism:** the line-vs-color fight (as its opposite).
- **Gave to the academy:** drawing-first training — the rules every later movement broke.

---

## 6. ARTISTS ROW (~7) — one-line role + born-verified PD portrait file

✅ **All portraits are PD and inlineable** (every sitter d. pre-1900; all files API/eyeball
confirmed). No gradient fallbacks needed.

1. **Jacques-Louis David** (1748–1825, French) — **the severe master and the Revolution's
   image-maker.** *Oath of the Horatii*, *Death of Socrates*, *Death of Marat*, *Napoleon
   Crossing the Alps*; regicide deputy, staged the Revolution's festivals, served Napoleon, died
   in Brussels exile. **Portrait file:** a David self-portrait (e.g. the 1794 Louvre
   self-portrait painted in prison) — resolve the exact `File:...` at gate 6 (David self-portraits
   are PD). [W-David][Louvre-Horatii]
2. **Jean-Auguste-Dominique Ingres** (1780–1867, French) — **David's pupil and the apostle of
   line.** *Grande Odalisque*, *Apotheosis of Homer*, *Napoleon on his Imperial Throne*; led the
   Ingristes against Delacroix's colorists. **Portrait file:** `File:Ingres, Self-portraitFXD.jpg`
   (*Self-Portrait Aged 24*, 1804, Musée Condé). ✅ [TheArtStory-Ingres]
3. **Antonio Canova** (1757–1822, Italian) — **the leading Neoclassical sculptor**, the marble
   counterpart to David; *Psyche Revived by Cupid's Kiss* (Louvre), *Pauline Bonaparte as Venus
   Victrix* (Borghese). **Portrait file:** `File:John Jackson - Antonio Canova - Google Art
   Project.jpg` (c.1819–20). ✅ [W-Psyche]
4. **Angelica Kauffman** (1741–1807, Swiss-Austrian) — **history painter; one of only two women
   founding members of Britain's Royal Academy (1768)**, with Mary Moser; worked in Rome and
   London. **Portrait file (self-portrait):** `File:Angelica Kauffmann, Self-Portrait as the
   Muse of Painting, 1787.jpg`. ✅ [RA-Kauffman]
5. **Benjamin West** (1738–1820, American-British) — **history painter, second president of the
   Royal Academy;** *The Death of General Wolfe* (1770, National Gallery of Canada) put a
   contemporary event in heroic-history mode with modern dress. **Portrait file (self-portrait,
   1819):** `File:Benjamin West - Self-Portrait - Google Art Project.jpg`. ✅ [W-Wolfe]
6. **Anton Raphael Mengs** (1728–1779, German) — **Winckelmann's friend and the early painted
   manifesto;** *Parnassus* ceiling (1761, Villa Albani). **Portrait file (self-portrait, Prado):**
   `File:Autorretrato de Anton Raphael Mengs (Museo del Prado).jpg`. ✅ [Mengs-Parnassus]
7. **Johann Joachim Winckelmann** (1717–1768, German) — **NOT a painter but the movement's
   founding voice**; *Gedanken* (1755), *History of the Art of Antiquity* (1764); "noble
   simplicity and quiet grandeur." Include as the theorist who set the creed. **Portrait file:**
   `File:Johann Joachim Winckelmann (Raphael Mengs after 1755).jpg` (Mengs portrait, the Met;
   ⚠️ caption the canvas **c.1777**, not 1755 despite the filename). ✅ [Britannica-Winckelmann]

(If the row is capped at 6 artists + the theorist is held for the manifesto block instead, drop
Winckelmann from the row and keep him in §3. Also nameable: the Rococo "before" painters
**Boucher** and **Fragonard**, and the era-sibling Romantics **Géricault** and **Delacroix**, as
the opposite pole — but those belong to the break/lineage, not the Neoclassical artists row.)

---

## 7. PARALLELS ("meanwhile") — 2–3 contemporaneous threads

1. **The Enlightenment and the Encyclopédie — c.1751–1772.** Neoclassicism is the visual arm of
   the age of Reason: Diderot and d'Alembert's *Encyclopédie* (begun 1751), the cult of clarity,
   system, and civic virtue. The painting preaches the same gospel the philosophes wrote. [W-Neoclassicism]
2. **The Age of Revolutions — c.1776–1815.** The style's life runs straight through the American
   and especially the **French Revolution (1789)** and the **Napoleonic Wars** — and David is
   literally inside the politics (a Convention deputy, a regicide, Napoleon's painter). The
   Roman-republican imagery and the real republican upheaval feed each other; it is the rare case
   where an art movement is also a government's official propaganda machine. [W-David][W-Marat]
3. **Rome as Europe's classroom — the Grand Tour.** Through these decades Rome (and now Pompeii)
   is the obligatory finishing school for artists and aristocrats across Europe; Winckelmann,
   Mengs, Canova, Kauffman, and West all pass through it. The movement is international precisely
   because everyone studied in the same ruins. [Mengs-Parnassus][Ercolano]

---

## 8. NESTING — what the ERA read already covers (go DEEPER, don't duplicate)

- **The `nro` (Neoclassical & Romantic) era read** gives Neoclassicism its thumbnail (Reason and
  the antique revival; the official style of Revolution and Empire; line vs the Romantics'
  color). The movement read must go **DEEPER**: the roots (Enlightenment, the excavations,
  Winckelmann's creed and the Fuseli translation trap), the **break from Rococo** (Fragonard →
  David, concretely), David's **documented political role** and the festivals, the
  Revolution-then-Empire arc (Marat → Napoleon), **Ingres** and the cult of line, and the handoff
  into academic art and the line-vs-color fight with Romanticism. **Don't re-narrate the era
  thumbnail; reference it tersely.**
- **The Romanticism movement read (same era, the sibling/opposite)** owns Géricault and Delacroix
  and the color side of the fight. **Reference it for the line-vs-color quarrel; do NOT re-tell
  Romanticism.** Keep the cross-link reciprocal (Neoclassicism ↔ Romanticism as era-siblings and
  opposites).
- **Coordinator action item:** add reciprocal cross-links — Neoclassicism → Romanticism (era
  sibling/reaction) and Neoclassicism → academic art / Realism (the rules later movements broke);
  Neoclassicism ← the Enlightenment + antiquity + Winckelmann. Check/keep consistent in
  `src/lib/art-content.ts` (the new `neo` const under era `nro`).

---

## 9. SHAPE (suggested chapters — author may improve; rise → peak → spread → afterlife)

1. **A scholar's creed and a buried city** — RISE: why Reason wanted a new art, the Rococo it
   rejected (Fragonard's *Swing*), the excavations of Herculaneum (1738) and Pompeii (1748), and
   Winckelmann's 1755 essay with its motto "noble simplicity and quiet grandeur" (note the Fuseli
   "sedate grandeur" wording). Mengs paints it; the doctrine arrives before its master.
2. **David draws the line** — the break made flesh: *Oath of the Horatii* (1784) against
   Rococo — stripped palette, frieze stage, sculptural figures, line over color, civic duty over
   pleasure; *The Death of Socrates* (1787), Reason facing death. (Hedge the "prophecy of
   revolution" reading — it's a royal commission, painted before 1789.)
3. **The official style of the Revolution** — PEAK: David the regicide deputy who staged the
   festivals; *The Death of Marat* (1793) as a secular pietà. Then the turn to Napoleon and the
   Empire: *Napoleon Crossing the Alps* (heroic myth, not the actual mule).
4. **Ingres and the cult of line** — SPREAD/late: David's pupil carries drawing into the 19th
   century — *Napoleon on his Imperial Throne* (1806), the *Grande Odalisque* (1814) and its
   "too many vertebrae" scandal (the 1819 insult vs the 2004 measurement), the *Apotheosis of
   Homer* (1827); the Ingristes vs the colorists.
5. **The rules everyone broke** — AFTERLIFE: Neoclassicism becomes the academy; Romanticism
   answers with color inside the same era; Realism, Impressionism, and the avant-garde each
   define themselves against its drawing-first discipline. And the label "Neoclassicism" itself is
   pinned on later, half as an insult.

---

## 10. VOICE (WRITING-RULES + art voice locks)
House informal popular-history voice, dry wit, comparisons welcome; inline-define every term
(**Rococo, fête galante, history painting, frieze, the antique / antiquity, the Salon, the
academy, line vs color / draughtsmanship, the Grand Tour, odalisque, apotheosis, pietà, Montagnard,
the Convention, regicide, Thermidor, Ingristes/colorists**) — reader has zero prior knowledge.
**Make the reader GET it:** that Neoclassicism is one big idea (art should be a serious moral
lesson drawn from the Greeks and Romans, with hard LINE doing the work, against Rococo's pretty
pleasure) — and that history then drafted that style as the official art of the Revolution and
Napoleon. **No em-dashes in shipping prose** (not the char, not `&mdash;`). Storytelling first;
accuracy a hard floor; the only direct quote is the gated Winckelmann line ("noble simplicity and
quiet grandeur") — no invented quotes, no quoting from memory.

### HONESTY — framing-gate axes spelled out (research-locked)
- **The "prophecy of revolution" trap (hedge it):** *Oath of the Horatii* was a **royal Crown
  commission painted in 1784, before 1789** — the revolutionary reading is hindsight. State the
  commission plainly; never write it as painted-to-incite. [Louvre-Horatii]
- **David's politics (state precisely, neither sanitize nor sensationalize):** Convention deputy,
  voted to execute the king, Jacobin ally of Robespierre, staged the festivals, painted Marat as
  a martyr, jailed after Thermidor, died in exile. He IS the propaganda machine — say so. [W-David][W-Marat]
- **Quote-precision (the Fuseli trap):** "noble simplicity and quiet grandeur" is the modern
  standard English of *stille Größe*; **Fuseli's 1765 words were "sedate grandeur."** Use the
  famous form, but do not put "quiet grandeur" in Fuseli's mouth. [Fuseli-1765]
- **The vertebrae trap (two facts, not one):** 1819 critics said "~three too many" as an insult;
  the 2004 study found "~five, plus the pelvis" and called it deliberate. Keep them separate, and
  present the 1819 remark **anonymously** (the Kératry attribution is unconfirmed). [Maigne-2004][W-Odalisque]
- **The label is retrospective:** "Neoclassicism" was coined later, partly as a put-down;
  contemporaries said "the true style" / "le goût grec." Don't have the painters calling
  themselves Neoclassical. [W-Neoclassicism]
- **Women + scope:** name **Angelica Kauffman** as a major Neoclassical history painter and a
  Royal Academy FOUNDER (not a footnote); keep the movement Western-scoped without overclaiming
  it as "the" art of the age. [RA-Kauffman]

---

## Source key (for the writer & fact-checker)

- **[W-Neoclassicism]** Wikipedia, *Neoclassicism* (Enlightenment roots; reaction to Rococo; "le
  goût grec" by 1757; the term coined later/originally pejorative, 1880s, aimed at David's school;
  line/clarity/moral subject).
- **[Winckelmann-Gedanken]** J. J. Winckelmann, *Gedanken über die Nachahmung der griechischen
  Werke in der Malerei und Bildhauerkunst* (Dresden, 1755) — "eine edle Einfalt und eine stille
  Größe"; full German text at Zeno.org / Deutsche Digitale Bibliothek (SLUB Dresden 1755 ed.).
  (Quote-gate the German maxim against this.)
- **[Fuseli-1765]** Henry Fuseli (Füssli), trans., *Reflections on the Painting and Sculpture of
  the Greeks* (London, 1765) — Fuseli's wording is "**a noble simplicity and sedate grandeur**";
  full open text at Project Gutenberg ebook #61317: `https://www.gutenberg.org/ebooks/61317`. (THE
  source for the translation-provenance trap.)
- **[Britannica-Winckelmann]** Britannica, *Johann Joachim Winckelmann* (1717–1768; father of art
  history/archaeology; *History of the Art of Antiquity* 1764; murdered Trieste 1768 by Francesco
  Arcangeli). Met portrait by Mengs, accession 48.141, canvas c.1777.
- **[Mengs-Parnassus]** Britannica / Wikipedia, *Anton Raphael Mengs* + *Parnassus* (1761, Villa
  Albani ceiling; Winckelmann's friend; the early programmatic Neoclassical painting).
- **[W-Pompeii]** Wikipedia, *Pompeii* (systematic excavation begun 1748 under Charles of Bourbon,
  King of Naples; Alcubierre).
- **[Ercolano]** Parco Archeologico di Ercolano / Wikipedia, *Herculaneum* (official excavation
  begun 1738 under Charles of Bourbon).
- **[W-Swing]** Wikipedia, *The Swing (Fragonard)* (*Les Hasards heureux de l'escarpolette*,
  c.1767–68; 81 × 64.2 cm; Wallace Collection, London, inv. P430; the Rococo "before"). Commons
  `File:The Swing (P430).jpg`.
- **[Louvre-Horatii]** Louvre collections, *Le Serment des Horaces* (INV 3692; 330 × 425 cm;
  painted Rome 1784, Salon 1785; commissioned via the comte d'Angiviller for Louis XVI's
  administration): `https://collections.louvre.fr/en/ark:/53355/cl010062239`. Commons
  `File:David-Oath of the Horatii-1784.jpg`.
- **[W-Horatii]** Wikipedia, *Oath of the Horatii* (1784; royal commission; the revolutionary
  reading is retrospective; the break from Rococo — severe palette, frieze stage, line over color,
  smooth invisible brushwork).
- **[Met-Socrates]** The Metropolitan Museum of Art, *The Death of Socrates* (David, 1787;
  accession 31.45; 129.5 × 196.2 cm): `https://www.metmuseum.org/art/collection/search/426600`.
  Commons `File:The Death of Socrates MET DP-13139-001.jpg` (Met CC0).
- **[W-Marat]** Wikipedia, *The Death of Marat* (David, 1793; RMFAB Brussels; 165 × 128 cm per
  museum, 162 variant; Marat stabbed by Charlotte Corday 13 July 1793; secular-martyr/pietà
  composition; "À MARAT, DAVID. L'AN DEUX"). Commons `File:Death of Marat by David.jpg`.
- **[W-Napoleon-Alps]** Wikipedia, *Napoleon Crossing the Alps* (David, 1801–05; five versions;
  Malmaison original commissioned by Charles IV of Spain; Charlottenburg = the 2nd/Saint-Cloud
  version seized by Blücher; ~260 × 221 cm; heroic myth, the real crossing on a mule). Commons
  `File:David - Napoleon crossing the Alps - Malmaison2.jpg`.
- **[W-David]** Wikipedia, *Jacques-Louis David* (Convention deputy 1792; regicide; Jacobin/
  Robespierre ally; Committee of General Security; staged the Festival of the Supreme Being 1794
  and revolutionary funerals; arrested after Thermidor; later Napoleon's painter; died in Brussels
  exile 1825).
- **[Britannica-David]** Britannica, *Jacques-Louis David* (corroborates the political role and
  the Crown commission of the Horatii).
- **[W-Odalisque]** Wikipedia, *Grande Odalisque* (Ingres, 1814; Louvre RF 1158; 91 × 162 cm per
  Louvre; painted for Caroline Murat, Queen of Naples; Salon of 1819; contemporaries said "two or
  three vertebrae too many"). Commons `File:Jean Auguste Dominique Ingres - The Grand Odalisque -
  WGA11841.jpg`.
- **[Maigne-2004]** Maigne J-Y, Chatellier G, Norlöff H, *Extra vertebrae in Ingres' La Grande
  Odalisque*, J. Royal Society of Medicine 2004; 97(7):342–344 (PMID 15229267; DOI
  10.1258/jrsm.97.7.342) — measured ~five extra lumbar vertebrae + pelvis distortion; argues it
  was deliberate. (The MODERN claim — distinct from the 1819 critique.)
- **[Benjamin-2000]** Roger Benjamin, *Art History* 23(5), 2000 — the sourced 1819 critique ("neither
  bones nor muscle… nothing that constitutes imitation"); the contemporary anatomical attack.
- **[W-Apotheosis]** Wikipedia, *The Apotheosis of Homer (Ingres)* (1827; Louvre INV 5417;
  386 × 512 cm; ceiling of the Musée Charles X; removed 1855, Balze copy in situ). Commons
  `File:Jean Auguste Dominique Ingres - The Apotheosis of Homer - WGA11849.jpg`.
- **[W-Napoleon-Throne]** Wikipedia (fr/en), *Napoléon Ier sur le trône impérial* (Ingres, 1806;
  Musée de l'Armée, Invalides; INV 5420 / MR 2069; 259 × 162 cm museum value, 263 × 163 variant;
  Salon 1806, poorly received). Commons `File:Ingres, Napoleon on his Imperial throne.jpg`.
- **[TheArtStory-Ingres]** TheArtStory, *Jean-Auguste-Dominique Ingres* (1780–1867; David's pupil;
  champion of line; "a thing well-drawn is always well-painted"): `https://www.theartstory.org/artist/ingres-jean-auguste-dominique/`.
- **[Veritas-Color]** Veritas Journal, *Drawing or Color: The Neoclassicists vs the Romantics*
  (Ingristes vs colorists; Poussinistes vs Rubénistes lineage; line-vs-color quarrel).
- **[W-Psyche]** Wikipedia, *Psyche Revived by Cupid's Kiss* (Canova, 1787–93; Louvre prime
  version, Hermitage second; the leading Neoclassical sculptor). Canova PD (d.1822).
- **[RA-Kauffman]** Royal Academy, *Angelica Kauffman* + *Mary Moser and Angelica Kauffman* (RA
  founded 10 Dec 1768; Kauffman one of two women founders); + Wikipedia *Angelica Kauffman*
  (1741–1807; Swiss-Austrian; Rome + London). Commons `File:Angelica Kauffmann, Self-Portrait as
  the Muse of Painting, 1787.jpg`.
- **[W-Wolfe]** Wikipedia, *The Death of General Wolfe* (West, 1770; National Gallery of Canada;
  contemporary event in heroic-history mode with modern dress); + Benjamin West (1738–1820, 2nd RA
  president). Commons `File:Benjamin West - Self-Portrait - Google Art Project.jpg`.

---

## 5-LINE SUMMARY + HANDLE-WITH-CARE (return to caller)

1. **Neoclassicism = the art of Reason and civic virtue** (c.1750–1830, era `nro`): a deliberate
   return to Greek/Roman models against Rococo frivolity, powered by the Enlightenment, the
   Herculaneum (1738) and Pompeii (1748) excavations, and **Winckelmann's 1755 essay** and its
   motto **"noble simplicity and quiet grandeur."** Line over color, moral seriousness, the
   painting as a lesson. In **David** it became the official style of the **French Revolution**
   and then **Napoleon's empire**; **Ingres** carried the cult of line into the 19th century.
2. **The break:** Rococo (Fragonard's *The Swing*, pastel/curve/feathery/erotic) → David's
   stripped, severe, sculptural, frieze-staged, line-first classicism (*Oath of the Horatii*,
   1784). Both images ship inline (all PD).
3. **The manifesto = `absent: true` with a founding TEXT surrogate** — Winckelmann's 1755
   *Gedanken*, with **Mengs's *Parnassus* (1761)** as the painted analog. **Quote trap:** the
   famous "noble simplicity and quiet grandeur" is the MODERN English; **Fuseli's 1765
   translation said "sedate grandeur."** Open source link: Project Gutenberg #61317 (Fuseli).
4. **Top legend-ledger catches:** (a) *Oath of the Horatii* is a **royal commission painted 1784,
   before 1789** — the revolution-prophecy reading is hindsight; (b) **David's documented
   politics** (Convention deputy, regicide, Jacobin, staged the festivals, jailed after Thermidor,
   died in exile) — precise, not vague; (c) the **Fuseli "sedate" vs modern "quiet" grandeur**
   wording; (d) the *Grande Odalisque* vertebrae = **two** claims (1819 critics "~three, an
   insult" vs 2004 study "~five, deliberate, pelvis too"; the Kératry attribution is
   **unconfirmed** — keep the 1819 remark anonymous); (e) **"Neoclassicism" is a later,
   originally-pejorative label** (contemporaries said "le goût grec").
5. **Image rights = the EASY case (inverse of AbEx).** Every canonical work is pre-1900 → US-PD →
   inlineable; all canon thumbnails AND all artist portraits are born-verified PD Commons files
   (§4/§6). Hero = a landscape David (Horatii/Socrates). The only disciplines: eyeball each file's
   subject, match hero aspect to the landscape frame, and use the **Malmaison** (not Charlottenburg)
   *Napoleon Crossing the Alps*.

**HANDLE-WITH-CARE, additional:**
- ⚠️ **Marat height** (162 vs **165** cm) and **Napoleon-Throne** (259×162 vs 263×163) have minor
  museum-vs-Wikipedia discrepancies — lock to the museum record at gate 1 before the stats chip.
- ⚠️ **Napoleon-Alps version inversion** — the Charles IV commission is at **Malmaison**, NOT
  Charlottenburg (Charlottenburg = the Saint-Cloud/Blücher 2nd version). Use the Malmaison file.
- ⚠️ **Winckelmann portrait** caption date = **c.1777** (the Mengs canvas at the Met), despite the
  Commons filename saying "after 1755."
- ⚠️ **Kératry** is the widely-repeated but UNVERIFIED source of the "three vertebrae" line — do
  not assert it; present the 1819 remark anonymously.
