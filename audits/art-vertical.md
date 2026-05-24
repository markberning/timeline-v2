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

**Decision:** Art reuses War's breadcrumb chrome — `WarBreadcrumb` in
`src/components/mode/war-chrome.tsx` (mode-agnostic `Crumb`/`CrumbOption`), so reuse, not a
rewrite. `ArtChrome` wraps it and is **breadcrumb-only** (the Timeline/Dossier toggle bar
was removed — see "No view toggle" below). Generalize the naming (`WarBreadcrumb` → a shared
`DrilldownBreadcrumb`) so Art and War share one component.

**The Art breadcrumb trail** (each crumb a dropdown level-switcher where it makes sense):

```
Art ▸ Modern ▸ Cubism ▸ Demoiselles ▸ Painting it
```

- `Art` → back to the Era Hub (front door).
- `Modern` → era switcher dropdown (8 eras).
- `Cubism` → movement switcher within the era.
- `Demoiselles` → work jump-list within the movement.
- leaf → current chapter; lit in **violet** (Art's accent).

**No view toggle (locked 2026-05-23).** The original Timeline/Dossier toggle was removed —
it showed the same spine (the list) twice, differing only by whether the detail blocks
were present. `ArtChrome` is now **just the breadcrumb** (no toggle bar). Every drilldown
page is a SINGLE view:

```
hero  →  (lead paragraph)  →  the ONE signature visual (always visible)
      →  a CLOSED "The details" accordion (secondary blocks)  →  the list
```

| Level    | Signature visual (visible) | "The details" accordion (CLOSED) | The list |
|----------|----------------------------|----------------------------------|----------|
| Era      | the "where it happened" map | stats + tensions + painters strip | movements cord |
| Movement | the Influence Ribbon       | stats + factions + artists + parallels | works cord |
| Work     | the Canvas Viewer          | stats + figures + provenance | the 5 chapters |
| Artist   | the Lifeline               | stats + key works | periods list |

- **Accordion control MUST match War's "At a glance" control** (`theatre-page.tsx`): an
  accent eyebrow + a "Show/Hide" word + an accent-tinted round ▾ chevron that rotates on
  open. Use the shared `ArtAccordion` (closed by default) + `StatsRow` — never a bespoke
  toggle.
- The **Climb tree** (§3) is a separate explore lens off the front door; the breadcrumb is
  the spine and reflects position.

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

Every spine page shares the single-view layout (§2): breadcrumb (no toggle), a hero photo
(credit UNDERNEATH — §5b), the level's **signature visual** always visible, a CLOSED
**"The details"** accordion (stats + face-off + the secondary strips), then the list.

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

### Chaptered narratives live at EVERY altitude — era, movement AND work (locked 2026-05-23)

A long-form read is NOT only a work-level feature. **Each authored era, movement and work
gets its own chaptered narrative**, each a different zoom on the same history:

- **Era (Modern → 7 ch)** — the whole century-long argument over what painting is for
  (Salon → Impressionism → Post-Impressionism → the break → manifestos → Surrealism → New
  York). Framed by the throughline, not a movement checklist, so it doesn't just duplicate
  the movement reads.
- **Movement (Cubism → 6 ch)** — the movement's own story (before the cube → Analytic →
  hermetic peak → collage → Salon Cubists/Armory Show → the war scatters them).
- **Work (Demoiselles → 5 ch)** — one painting, deep.

They nest cleanly: the era touches each movement briefly, the movement goes deep on itself,
the work goes deep on one canvas. Each read is the SAME furniture (`ArtNarrativeReader` in
`src/components/mode/art-reader.tsx`): breadcrumb, `ChapterHeader` (eyebrow + title +
progress), drop-cap house-voice prose, **inline art figures + the rights treatment** (§5/§5b),
the `MeanwhileSheet` cross-link, prev/next nav, back link. **Reuse it — do not reinvent.**

**Routing:** the section namespace is `/s/` (mirrors War), so it never collides with the
sibling dynamic segments — era chapters at `/art/<era>/s/<sectionId>`, movement chapters at
`/art/<era>/<movement>/s/<sectionId>`, work chapters keep `/art/<era>/<movement>/<work>/<sectionId>`.
Prose is authored as JSX `Narrative` components keyed by section id (`era-narratives.tsx`,
`movement-narratives.tsx`), registered in `ERA_NARRATIVES` / `MOVEMENT_NARRATIVES`. Chapter
**metadata** (id/eyebrow/dateLabel/title/blurb/progress) is a `sections: WorkSection[]` array
on the era/movement/work content object. `generateStaticParams` gates on the plain content
registry (NOT the `'use client'` narratives module — importing a client module into the
server page breaks static export).

**Reader chrome decisions (locked 2026-05-23):** NO ↑From/↓To lineage strip at the top of a
narrative chapter (removed). The **"Meanwhile in…" sheet matches the War reader's** Meanwhile
card exactly — a plain bordered card, gray eyebrow, italic serif title, serif body; no accent
top-border, thumbnail, date pill or CTA button. Chapter figures open a **pinch/double-tap/pan
zoomable lightbox** (the shared civ `Lightbox`, with an optional caption), so paintings can be
zoomed for detail.

**Content is produced + GATED via `audits/art-content-pipeline.md`** (the art analog of the
civ 5-persona audit and the war content pipeline — fact-checker, storytelling-&-looking,
comprehensiveness, newcomer-clarity, framing/fairness, plus art-specific image/rights and
nesting-coherence gates). **The 13 chapters shipped 2026-05-23 predate that pipeline and have
NOT been gated yet** — they are a first draft pending a fact-checker pass first.

**ENTRY = a "Read the full story" button directly under the `hookLong`** (user direction
2026-05-23) — the shared `ReadStoryButton` (art-chrome). It is the primary doorway into the
read; the signature visual + lists below it are for browsing. Label `Read the <name> story` /
`Read the <name> era` + `N chapters · range` subline.

**Images are born-verified** (same doctrine as the rest of the app): resolve every figure URL
against Wikimedia and load-check it (200 image/*) before committing; the URL path is the
copyright tier (`/commons/` = free worldwide, `/en/` = US-PD pre-1931). A work with no
serveable PD image (e.g. Picasso's *Still Life with Chair Caning* — not on Commons, no en-wiki
file) is swapped for an on-topic verified substitute or rendered as a `RestrictedFigure` — never
a guessed/blind URL.

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

- **Credits go UNDER the image (museum-label), with the current location.** Every art
  image's credit sits *beneath* the image (never a chip floating on it) and names where the
  work lives now — model: `Van Gogh, The Starry Night, 1889 · MoMA`. Heroes included (the
  hero credit renders under the banner). Inline figures + the Canvas Viewer already caption
  underneath with the museum. **EVERY image gets a credit with its current location — including
  the small cord/list/browse cards** (an unattributed Monet on a movement card is a defect).
  Two placements, locked 2026-05-23:
  - **Narrative-image figures** (`PaintingFigure`): the descriptive caption (italic) and the
    credit are SEPARATE — the credit is a **bold** line under the caption via the `credit` prop
    (`Artist, Title, year · Current Museum, City`); the caption is description only. (This is what
    the user meant by "credit at the end in bold" — it is for the images IN THE NARRATIVE.)
  - **Cord/list cards** (`credit` field on EraMovement / MovementWork): the credit is a small line
    at the end of the card text, **NOT bold** (muted). The card grows via `minHeight` so it never
    clips. NOTE: a flex image column needs `alignSelf:stretch` + `height:auto` (NOT `height:100%`)
    or it collapses to zero once the card is `minHeight`.

  **JSX whitespace gotcha (cost two rounds):** an inline `<em>`/`<strong>` at a source line break
  loses the adjacent space in the build (e.g. "Post-Impressionistsnever"). Fix: put an explicit
  `{' '}` on every whitespace boundary touching an inline tag, and VERIFY with
  `grep -rE '</(em|strong)>[A-Za-z]|[A-Za-z]<(em|strong)>' out/art` (must be empty).
- **Hero eyebrow stays white** (`rgba(255,255,255,0.9)` + shadow), NOT the accent — accent
  (violet) text was unreadable over dark paintings like Starry Night. Accent identity lives
  in the breadcrumb/accordion, not in text laid over imagery.
- **No item NAME overlaid on the artwork in list/cord views.** The movement/work title sits
  in the text beside the image, so a name laid over the painting (e.g. "POST-IMPRESSIONISM")
  is redundant and obscures the art — don't render it. (A *descriptive scene caption* of the
  image, like War's "The 54th Massachusetts at Fort Wagner", is different and fine.)
- **No divider line between the image and the text in a cord/timeline card.** The image tile
  butts straight against the text panel — no `borderRight`/`borderBottom` separator. The card's
  own outer border + the image's natural edge are enough; an internal rule just adds clutter.

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

1. Generalize War's breadcrumb chrome into a shared drilldown breadcrumb (§2; no toggle).
2. Build the front door: Era Hub + Climb tree (§3), wired to the breadcrumb.
3. Build the spine pages Era / Movement / Work / Artist with their signature visuals (§4),
   data-driven from §7.
4. Wire the reader for section chapters (mostly reuse) + the inline-figure/rights subsystem
   (§5).
5. Author the first vertical slice (Modern → Cubism → Demoiselles → Picasso) as content.
6. Go/no-go, then widen to more movements/eras.
