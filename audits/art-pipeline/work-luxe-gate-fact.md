# FACT-CHECK + LEGEND gate — Matisse, *Luxe, calme et volupté* (1904) — WORK read

**Target:** `audits/art-pipeline/work-luxe-draft.md` (Part A const + Part B prose)
**Against:** `audits/art-pipeline/work-luxe-factpack.md` + independent web verification
**Verdict:** **CLEAN — no [BLOCKER], no [FIX].** Every dated, named, dimensioned, quoted,
and provenance claim checks out against the fact pack and independent sources. All four
watch-items are handled correctly. A handful of optional [NICE] polish notes only.

---

## Watch-item adjudication (the four flagged traps)

**(1) "first Fauve" overclaim — PASS.** The draft is scrupulous and repeatedly correct.
The const comment says "POINTS TOWARD Fauvism; is NOT itself a Fauve painting" and
"never 'first Fauve painting.'" The `independants` section title is literally "This is not
the first Fauve painting"; prose states it "is **not itself a Fauve painting**, and it was
not received as one," debuted spring 1905 at the jury-free Salon des Indépendants, and the
name came "later that same year, in the *autumn* of 1905, at … the Salon d'Automne." The
Vauxcelles "Donatello parmi les fauves" / "Donatello among the wild beasts" coinage is
accurately quoted and correctly dated to autumn 1905 (verified: Gil Blas supplement,
17 Oct 1905). No universal-origin / "modern art begins here" claim appears. The
"starting point of Fauvism" label is used only with the doorway framing the fact pack
requires (§A). Clean.

**(2) "breaking up of colour → breaking up of form" line — PASS (paraphrased, not quoted).**
The `afterlife` section renders it as substance, not quotation: "He found that dividing the
color also divided the *form*…" and explicitly self-flags: "(He later put the idea something
like this … The exact wording is not securely his, so we will keep it as the substance of
his complaint rather than a quotation.)" No quotation marks around the disputed wording.
Exactly the §B handling. Clean.

**(3) Owner = Centre Pompidou (inv. AM 1982-96), on deposit at Orsay since 1985 — PASS.**
Stated correctly and repeatedly: `location` = "Musée d'Orsay, Paris (on deposit from the
Centre Pompidou)"; `acquired` names dation 1982 + deposit 1985; provenance rows give
"Inv. AM 1982-96," "dation," 1982 Pompidou, 1985 Orsay deposit, "Centre Pompidou remains
the legal owner." Prose in `afterlife` glosses dation correctly ("pay inheritance tax with
a work of art instead of cash") and states "the Centre Pompidou owns it; the Musée d'Orsay
shows it." Matches Centre Pompidou record. Clean.

**(4) No invented purchase price — PASS.** Every `price` field is `null` or the literal
"dation (no cash price)". Prose says outright "No purchase price is recorded, so we will not
invent one." No number appears anywhere for Signac's purchase or the 1982 dation. Clean.

**heroAspect landscape ~1.2 — PASS.** `heroAspect: 1.2`. Verified conversion:
118.5 / 98.5 = **1.203** (W/H, landscape). The coordinator note in the draft header
correctly flags that the brief's "0.83" is H/W and would render portrait; 1.2 is right and
matches the codebase W/H convention (STARRY_NIGHT 1.25). `heroFit: 'contain'`. Clean.

---

## Other claims spot-verified (all PASS)

- **Title source** — Baudelaire, *L'Invitation au voyage*, from *Les Fleurs du mal* (1857);
  refrain "Là, tout n'est qu'ordre et beauté, / Luxe, calme et volupté." Quoted verbatim and
  correctly translated in `afterlife`. Baudelaire dates 1821–1867 correct. ✔
- **Dimensions** — 98.5 × 118.5 cm → **3 ft 2¾ in × 3 ft 10⅝ in.** Verified: 98.5 cm =
  38.78 in (3 ft 2.78 in → 2¾) ; 118.5 cm = 46.65 in (3 ft 10.65 in → 10⅝). Imperial-only
  in prose + chips per house rule. ✔
- **Year** — "1904" with "finished over the winter of 1904–05" gloss; matches Centre
  Pompidou "Autumn–Winter 1904." ✔
- **People + dates** — Matisse 1869–1954 (34 in 1904 ✔), Signac 1863–1935, Cross 1856–1910,
  Seurat 1859–1891, Baudelaire 1821–1867. All correct. ✔
- **Signac's book** — *D'Eugène Delacroix au néo-impressionnisme*, serialized 1898, book
  1899. ✔
- **Salon des Indépendants** — jury-free, no-prizes society co-founded 1884 (Seurat & Signac
  among founders). ✔
- **MoMA oil study** — correctly flagged as a *different object* and not bled into the Orsay
  painting's stats. (Note: the study also exists at the Met, but the draft only claims MoMA,
  which the fact pack supports — no error.) ✔
- **Manet *Le Déjeuner sur l'herbe* 1863** — dated 1863 (not the common-error 1864) and
  framed as a scholarly reading, not artist's intent. ✔ (§D handled.)
- **Divisionism/Pointillism/Neo-Impressionism distinction** — kept distinct and accurate;
  marks correctly described as "short, blocky dashes," coarser than Seurat's dots. ✔
- **Provenance chain** — Matisse → Signac (from 1905) → Mme Cachin-Signac (Ginette, family)
  → Pompidou 1982 dation → Orsay 1985 deposit. Matches fact pack + Centre Pompidou
  "ancienne collection Mme Cachin-Signac." ✔
- **La Hune villa** — correctly hedged as "reported, not confirmed by the museum record"
  in both provenance and prose (§C). ✔

---

## [NICE] — optional polish only (not ship-blocking)

- **[NICE] Ginette Signac was Signac's daughter, not "the artist's daughter" via Matisse.**
  The provenance row and figure copy are correct ("Signac's daughter"), but the const
  provenance row 3 phrase "Mme Cachin-Signac (Ginette Signac, the artist's daughter)" uses
  "the artist" loosely — in context the nearest "artist" is Matisse two rows up. Fact pack
  §F/E identify her as **Signac's** daughter. The surrounding note ("stayed in Signac's
  family") disambiguates, so this is not wrong, just slightly ambiguous. Consider
  "Signac's daughter." (Genealogy footnote: she is usually given as Signac's daughter
  Ginette, who married into the Cachin family — consistent with the draft.)

- **[NICE] Fact pack flags a current loan (CaixaForum Barcelona, spring 2026).** Fact pack
  §E row 5 notes the painting "is on loan to CaixaForum Barcelona … note 'normally at the
  Musée d'Orsay.'" The draft says it "hangs … at the Musée d'Orsay … On view there." For an
  evergreen WORK read, "normally at the Musée d'Orsay" is safer than asserting it is on view
  at Orsay right now. Low stakes (temporary-exhibition detail), author's call.

- **[NICE] "a critic's jibe gave Fauvism its name" — the jibe was at a marble bust.** Both
  draft and search agree; the draft's "seeing a conventional marble sculpture standing among
  them" is accurate (it was Albert Marque's bust). No need to name Marque; just confirming
  the detail is sound.

---

## Sources

- [Centre Pompidou — Luxe, calme et volupté](https://www.centrepompidou.fr/fr/offre-aux-professionnels/enseignants/dossiers-ressources-sur-lart/henri-matisse/luxe-calme-et-volupte)
- [Wikipedia — Luxe, Calme et Volupté](https://en.wikipedia.org/wiki/Luxe,_Calme_et_Volupt%C3%A9)
- [MoMA — Study for "Luxe, calme et volupté" (1904)](https://www.moma.org/collection/works/80016)
- [Met — Study for "Luxe, calme et volupté"](https://www.metmuseum.org/art/collection/search/871999)
- [Wikimedia file — oil on canvas, 98.5 × 118.5 cm, Centre Pompidou](https://en.wikipedia.org/wiki/File:Henri_Matisse,_1904,_Luxe,_Calme_et_Volupt%C3%A9,_oil_on_canvas,_98.5_%C3%97_118.5_cm,_Mus%C3%A9e_National_d%27Art_Moderne,_Centre_Pompidou_(detail_lower_center).jpg)
- [Smarthistory — Henri Matisse, Luxe, calme et volupté](https://smarthistory.org/henri-matisse-luxe-calme-et-volupte/)
- [Grand Palais — naissance du Fauvisme, Salon d'Automne 1905 (Vauxcelles "Donatello parmi les fauves")](https://www.grandpalais.fr/fr/magazine/le-scandale-du-salon-dautomne-de-1905-au-grand-palais-la-naissance-du-fauvisme)
- [Fauvism — Wikipedia](https://en.wikipedia.org/wiki/Fauvism)
