# Image source — Max Ernst, *Histoire Naturelle* (1926)

Task: find ONE stable, directly-downloadable, high-quality image file of a single
plate from Ernst's *Histoire Naturelle* (the 1926 collotype-after-frottage
portfolio). Work is US public domain (published 1926, no US renewal); simply
absent from Wikimedia Commons (blocked on EU life+70 term).

## Result: USE THE NATIONAL GALLERY OF VICTORIA (NGV) CDN

The NGV (Melbourne) acquired the complete 34-plate portfolio in 2023
(accession series **2023.758.x**). Its image CDN serves the actual JPEG bytes
directly, no auth, no IIIF tile-stitching needed. Verified by fetch.

### 1. Primary directly-downloadable image URL (VERIFIED)

```
https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=152522
```

- Fetched with `curl -A "Mozilla/5.0"` → **HTTP 200**, **image/jpeg**,
  **182,352 bytes**, **1280 × 787 px** (baseline JPEG). Well above the 800px floor.
- `size=1280` is the max the CDN serves (size=2000 and size=4000 both 404);
  for landscape plates 1280 is the long edge, for portrait plates the CDN
  returns up to 1920px on the long edge.

### 2. Plate / source / id

- **Plate:** *The Fugitive (L'Évadé)* — **plate 30** of *Natural History
  (Histoire naturelle)*, c. 1925, published 1926; collotype after frottage.
  This is one of the requested iconic candidates (the bird-skeleton-in-flight plate).
- **Source:** National Gallery of Victoria, Melbourne
- **Accession / object id:** **2023.758.30**; NGV vernonID **152522**
- **Object page:** https://www.ngv.vic.gov.au/explore/collection/work/152522/

### 3. License / rights status

- **US:** Public domain — the portfolio was published in 1926 and is out of US
  copyright (pre-1929 publication). Any faithful reproduction is free to use in
  the US, which is the relevant jurisdiction here.
- **At the NGV (Australia):** NGV labels it "© Max Ernst / ADAGP, Paris.
  Licensed by Copyright Agency, Australia" — i.e. NGV is NOT calling this
  open-access, because Australia (like the EU) runs Ernst's life+70 term
  (Ernst d. 1976 → in copyright there until 2047). The CDN still serves the
  bytes. **The rights basis for our use is US public domain, not an NGV
  open-access grant.** This is the same situation across every major museum:
  MoMA, the Met, and NGV all hold the portfolio but all apply the artist's
  copyright in their own jurisdiction, so none offers a CC0/open-access
  download. (AIC's API returns `is_public_domain: false` on all Ernst, and its
  "Histoire naturelle" hits are the unrelated Picasso/Buffon 1942 book.)

### 4. Suggested credit string

```
Max Ernst, The Fugitive (L'Évadé), plate 30 from Histoire Naturelle, 1926 (collotype after frottage) · National Gallery of Victoria, Melbourne
```

### 5. Backup URLs (all VERIFIED HTTP 200, real JPEG bytes)

All same CDN pattern, just a different `vernonID`. Swap the id; `size=1280`:

| Plate | vernonID | URL | Verified dims |
|---|---|---|---|
| *The conjugal diamonds* (named plate) | 152517 | `https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=152517` | 1149 × 1920 |
| (portfolio plate) | 152510 | `https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=152510` | 1150 × 1920 |
| (portfolio plate) | 152521 | `https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=152521` | 1280 × 779 |
| (portfolio plate) | 152523 | `https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=152523` | 1245 × 1920 |

Nearby vernonIDs (152492–152523) are the rest of the 2023.758 portfolio and
all resolve the same way — browse object pages under
`https://www.ngv.vic.gov.au/explore/collection/work/<id>/` to match a vernonID
to a plate title before using it.

### Fallback source families (if NGV CDN ever changes)

- **MoMA** holds the full portfolio with per-plate object pages (e.g.
  *The Fugitive* = https://www.moma.org/collection/works/94254 ;
  *The Habit of Leaves / Les Moeurs des feuilles* = .../94242 ;
  *The Wheel of Light / La Roue de la lumière* = .../94253). MoMA gates
  reproductions through Art Resource, so no direct open-access file, but the
  pages are the canonical reference for titles/plate numbers.
- **The Met** also has it (https://www.metmuseum.org/art/collection/search/349339),
  same copyright-gated posture.

## Notes for the pipeline

- Download happens OUTSIDE the repo (nothing fetched into the tree here; the
  test files went to /tmp). The image-fetch step should pull the NGV URL,
  caption it with the credit string above, and record the US-public-domain
  basis (NOT an NGV open-access claim) in provenance.
- This is a born-verified link: the primary URL was fetched and confirmed to
  return 1280 × 787 image bytes at the time of writing.
