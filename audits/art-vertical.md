# Art Vertical — design spec & build reference

_The build reference for the Phase-2 Art mode, same role `audits/war-pilot-civil-war.md`
plays for War. Consolidates two mockups + decisions made 2026-05-23. **Mockups are
reference, not gospel** — generated numbers and "extra" pieces are flagged below._

---

## 1. What it is

The **Art** mode of the four-mode app (Civilizations / Wars / Art / Music). It walks the
reader through the history of art the way War walks through armed conflict and Civ walks
through a civilization: chapter-based prose in the house voice, with art-specific
structure and signature visuals layered on.

**Scope decisions (locked 2026-05-23):**

- **Western art for v1.** Worldwide expansion is deferred "much later." This matches the
  mockups, which are already the Western canon, so no reorganization is needed.
- **Insurance for later:** carry a `region` / `tradition` field on every entity from day
  one, left unset/`'western'` for v1. The eventual worldwide expansion is then *additive*
  (new traditions, new tracks) rather than a re-architecture. Non-Western roots (African
  masks, Japanese woodblock prints) can still appear as **parent lineage chips into** the
  Western tree without building those traditions out.
- **Causes-first analog.** War's heart is "why we fought"; Art's is **"why the art
  changed."** This is already structural in the mockup — era *tensions* (Academies vs
  Avant-Gardes), movement *factions* (pioneers vs Salon Cubists), and the from/to lineage
  on every level all carry the "why." Weight this layer at least as heavily as the works
  themselves.

---

## 2. Navigation — reuse War's top breadcrumb bar

**Decision:** Art uses the same chrome as War — `WarBreadcrumb` + the Timeline/Dossier
toggle bar in `src/components/mode/war-chrome.tsx`. It's already mode-agnostic (`Crumb` /
`CrumbOption` model), so this is reuse, not a rewrite. Generalize the naming
(`WarBreadcrumb` → a shared `DrilldownBreadcrumb`, or wrap it) so Art and War share one
component.

**The Art breadcrumb trail** (each crumb a dropdown level-switcher where it makes sense):

```
Art ▸ Modern ▸ Cubism ▸ Demoiselles ▸ Painting it
```

- `Art` → back to the Era Hub (front door).
- `Modern` → era switcher dropdown (8 eras).
- `Cubism` → movement switcher within the era.
- `Demoiselles` → work jump-list within the movement.
- leaf → current chapter; lit in **violet** (Art's accent).

**The toggle bar** (same component, label varies by level — it's the unifying device):

| Level     | Toggle            | Left view = | Right view = |
|-----------|-------------------|-------------|--------------|
| Era       | `Timeline ∣ Dossier` | cord/node of movements | facts + anchor painters + map |
| Movement  | `Timeline ∣ Dossier` | cord/node of works | facts + factions + Influence Ribbon |
| Work      | `Story ∣ Dossier`    | the 5 section chapters | facts + canvas viewer + provenance |
| Artist    | `Lifeline ∣ Dossier` | cord/node of periods | facts + Lifeline + key works |

The **Climb tree** (§3) is an explore lens reachable from the lineage strip / a dedicated
affordance; the breadcrumb stays the spine and still reflects position.

---

## 3. Front door — Era Hub + Climb tree

These two screens are the missing piece the drilldown handoff dropped. They live in the
**original** mockup: `samples/Historica.zip` → `art.jsx` (`ArtEraHub`, `ArtClimb`).

### 3a. Era Hub — the landing screen

What you get when you tap "Art."

- Hero: _"Forty thousand years of people making stuff."_ + sub _"Read it straight
  through, or skip to the parts everyone already has opinions about."_
- **"Start from the beginning →"** primary button (read the whole arc in order).
- **"Jump to the famous stuff"** chips (e.g. Impressionism, The Renaissance, Picasso &
  Cubism) — fast lanes to the marquee material.
- **"All eras"** — 8 era cards, each a tile + name + range + one-line hook:
  Prehistoric (40,000–3,000 BCE) · Ancient (3000 BCE–500 CE) · Medieval (500–1400) ·
  Renaissance (1400–1600) · Baroque (1600–1750) · Neoclassical & Romantic (1750–1850) ·
  Modern (1850–1970) · Contemporary (1970–today).

### 3b. Climb tree — the influence lens ("Climbing the tree")

A vertical influence tree centered on **one** node, walked one hop at a time:

```
        ┌──────── GREW OUT OF ↑ ────────┐
     [Cézanne]  [African art]  [Post-Impressionism]
        └──────────────┬───────────────┘
                  ╔═════════════╗
                  ║   CUBISM    ║  ← center card, "Read this →"
                  ║  1907–1922  ║
                  ╚═════════════╝
        ┌──────────────┴───────────────┐
      [Futurism]  [Constructivism]  [Abstract art]
        └──────────── LED TO ↓ ─────────┘
```

- 3 parents up, 3 children down, the center card highlighted with the accent.
- **Tap any node to re-center on it** — climb the tree a step at a time.
- "Zoom out to eras" chip returns to the Era Hub.
- Deliberately **not** a giant zoomable graph — mobile-friendly, one hop per screen.

This uses the **same parent/child influence data** as the drilldown's per-page lineage
strip — they're the same model rendered two ways (full screen vs. header strip). Build one
influence graph; render it both as the Climb tree and as the LineageStrip.

---

## 4. Drilldown spine

`Era → Movement → Work → Section chapters`, plus **Artist** as a parallel level reachable
from a movement (artists strip) or a work (figures strip). **Museum is deferred** (see §6).

Every spine page shares the layout: breadcrumb + toggle bar (§2), a hero photo, a
collapsible **"At a glance"** block (stats + a tensions/factions face-off), a
level-specific **signature visual**, and a structured body.

### Signature visual per level (the content-embodying graphic, like War's theatre map)

- **Era → anchor-painters strip + "where it happened" map.** 6 portrait circles of the
  era's defining painters; a stylized map with city hubs sized by movement count (Paris as
  the big dot for Modern).
- **Movement → the Influence Ribbon** _(the standout idea)_. A multi-track year ribbon:
  artists as horizontal tracks, years across the top, dots at each work (big = canonical),
  dashed threads connecting works across tracks to show influence flow. This is the
  movement-level anchor — Art's equivalent of the theatre map.
- **Work → the Canvas Viewer + Provenance.** The painting full-bleed with an
  *Annotations on/off* toggle that pins what to notice ("African mask · right figure",
  "no vanishing point. anywhere."). Below it, the **Provenance trail** (§6).
- **Artist → the Lifeline.** A single life-axis with period bands (Blue, Rose, Cubism…)
  layered as bars, key-work dots in period colors, birth/death markers at the ends.

### Section chapters (the reader)

Each work has ~5 sibling narrative chapters (for Demoiselles: _Where this came from /
Painting it / What his friends said / The painting goes away / What happened next_). Each
is a full reader-engine chapter and **reuses the live app's reader** — do not reinvent:

- `ChapterHeader` (eyebrow + title + progress)
- `LineageStrip` (↑From / ↓To chips, cross-modal — see §5)
- drop-cap prose in the house voice
- **inline art figures** + the **rights treatment** (§5)
- the existing `MeanwhileSheet` at the bottom (cross-link into the Civ corpus)

Each chapter opens with its own brief orientation subsection (the chapter-intro rule from
the rest of the app).

---

## 5. Inline media + rights (the genuinely new subsystem)

Validated in `samples/art-reader-picasso.html`. Two treatments, one rule:

- **Happy path (pre-1931, US public domain):** full-bleed inline figure at full
  resolution, caption + a `Rights` line, tap-to-zoom lightbox. Covers cave painting
  through early modernism — i.e. almost all of v1.
- **Degraded (post-1930 / still in copyright):** a constrained reference thumbnail + an
  outbound "View at the museum →" link, and **the prose does the work** (the
  inline-define-everything voice already handles this). Example: Picasso's *Guernica*
  (1937) can't be served inline; the chapter describes it.

**Cross-modal lineage chips.** LineageStrip chips carry `mode: 'art' | 'civ' | 'war'` and
visually mark non-art parents/children. Demoiselles already lists `Belle Époque Paris`
(a civ chip) as a parent — this is the bridge that ties Art into the existing 100-civ
corpus, alongside the "Meanwhile in…" sheet.

---

## 5b. Image orientation & framing — BUILD RULE (every image spot)

**A painting being cut off is a defect.** In an art app the artwork *is* the
content, so every image spot must use an orientation-appropriate source and frame.
The builder picks the composition per spot; never drop a tall painting into a wide
frame and crop it.

- **Inline figures + the work's Canvas Viewer → show the WHOLE work.** Frame aspect
  follows the artwork (image `height: auto`, no fixed-ratio `cover`). The Canvas
  Viewer especially: its annotation pins are placed at % coordinates, so cropping
  also *misaligns the pins*. (Both are implemented this way now — don't regress
  them to `object-fit: cover`.)
- **Heroes (240px landscape banner) → pick the fitting composition (`ArtHero`):**
  1. a genuinely **landscape work** → `fit="cover"` (default). e.g. Modern era =
     Van Gogh, *The Starry Night*.
  2. a deliberate **landscape detail** of a tall work → `fit="cover"` + `focus`
     (CSS object-position) to frame the region; **credit it "(detail)"** so the crop
     reads as intentional.
  3. a **whole portrait/square work** → `fit="contain"` (the component letterboxes
     it on a blurred, dimmed copy of itself — never bars-on-blank). e.g. the
     Demoiselles work hero.
  4. a **portrait diptych** — two portrait works side by side to represent a
     genre/movement → pass `heroImages: [{src,focus},{src,focus}]`. e.g. Cubism =
     Girl with a Mandolin + Portrait of Kahnweiler.
- **Cord/grid thumbnails (`ArtTile`)** may `cover`-crop (small, decorative) — but
  center the focal point; a recognizable work is better than an arbitrary corner.
- **When sourcing (step in §"image sourcing"), record each file's orientation**
  (w vs h) so the right composition is chosen up front, not patched later.

- **Breathing room (mode-wide rule).** Text next to an image in a card/row must
  have a clear gap — never butted against the photo edge. Card text padding is
  ~15–18px horizontal (`isXL ? '12px 18px 14px' : isLG ? '14px 18px' : '11px 15px'`).
  Applies across war/art/music card components, not per-spot. See memory
  `feedback_image_text_breathing_room`.

Data hooks: `heroFit` / `heroFocus` / `heroImages` on every entity drive the hero;
inline figures already render at natural height.

---

## 6. v1 scope: in vs. deferred

**In v1:**
- Era Hub + Climb tree front door.
- Era → Movement → Work → Section spine + Artist level.
- All four signature visuals (anchor map, Influence Ribbon, Canvas Viewer, Lifeline).
- Reader chapters with inline figures + rights degradation.
- **Provenance trail on the Work page** — kept (user explicitly likes it): the ownership
  history with dates and prices (artist → first buyer → gallery → museum), rendered as a
  vertical trail.

**Deferred ("much later"):**
- **Museum as a standalone level** — no MoMA page, no floor-plan diagram, no 8-museum
  picker. Provenance entries that name a museum render as **plain text, not links** for
  v1; wire them to museum pages when the museum level is built.
- Worldwide / non-Western traditions (scope §1).

---

## 7. Data model

Constants in the mockup's `art-data.jsx` are the schema. Per entity (add `region` to each):

- **Era** — id, name, range, span, accent, chain, hook/hookLong, hero(img/credit/palette),
  stats[], tensions[], movements[], anchorPainters[], lineage{parents,children}, `region`.
- **Movement** — same shape + factions[], works[], artists[], parallels[] (the "meanwhile
  elsewhere" rows), `region`.
- **Work** — name, year, artist+artistId, movement, era, medium, dimensions, location,
  accent, chain, hook, hero…, stats[], sections[], **provenance[]**, figures[], lineage,
  annotations[], `region`, **rights** (PD-US? in-copyright? → drives §5 treatment).
- **Artist** — born/died, span, nationality, movements[], accent, chain, hook/hookLong,
  hero…, stats[], periods[], keyWorks[], lineage, life[] (lifeline moments), `region`.
- (**Museum** — schema exists in the mockup; not built in v1.)

`region` is the worldwide-expansion insurance — set `'western'` for all v1 content.

---

## 8. Mockup-not-gospel — verify before shipping

- "18 major movements" (Era stat) but only **10** are listed → reconcile.
- "~600 canonical works", "~50,000 works (Picasso lifetime)" → fuzzy filler, verify/soften.
- Provenance prices ($530k for the 1939 MoMA acquisition, ">$1.2 billion" insured value) →
  confident-but-unverified; fact-check or attribute. (Zero-hallucination is a hard
  constraint — storytelling-first, but facts must hold.)
- Picasso example is the **only** fully-mocked path (Modern → Cubism → Demoiselles →
  Picasso). Everything else is placeholder.

---

## 9. Open questions (content, not structure)

1. **Which eras/movements/works to build first?** The Picasso path is fully designed, so
   **Modern → Cubism → Les Demoiselles → Picasso** is the obvious first vertical slice (it
   proves the whole stack: front door → spine → signature visuals → reader → rights). Then
   widen.
2. **How many works per movement, chapters per work?** Mockup shows ~9 works/movement and
   ~5 chapters/work. Confirm as a target, not a cap (story length drives structure, per the
   civ rule).
3. **Does the content pipeline (gates) apply to Art chapters?** The reader is shared, so
   links/coverage/density/intros likely apply — decide which gates carry over vs. which are
   civ-specific, before mass content.

---

## 10. Build sequencing (proposed)

1. Generalize War's chrome into a shared drilldown breadcrumb + toggle (§2).
2. Build the front door: Era Hub + Climb tree (§3), wired to the breadcrumb.
3. Build the spine pages Era / Movement / Work / Artist with their signature visuals (§4),
   data-driven from §7.
4. Wire the reader for section chapters (mostly reuse) + the inline-figure/rights subsystem
   (§5).
5. Author the first vertical slice (Modern → Cubism → Demoiselles → Picasso) as content.
6. Go/no-go, then widen to more movements/eras.
