# Pop Art wave 2 — fair-use thumbnail image URLs (in-copyright works)

Two in-copyright Pop Art works. Both are shown small under fair use; we do NOT self-host a
full copy. Below are stable, directly-downloadable URLs (return image bytes), each verified
with a normal browser User-Agent.

No usable English-Wikipedia fair-use file (`upload.wikimedia.org/wikipedia/en/...`) exists for
either work — "Floor Burger" has no en.wiki article, the Claes Oldenburg and Pauline Boty
articles host neither work, and a File:-namespace search returned nothing. So both fall to the
(b) third-party CDN tier.

---

## 1. Claes Oldenburg — *Floor Burger* (Giant Hamburger), 1962

- **Verified URL:** `https://uploads1.wikiart.org/images/claes-oldenburg/floor-burger-giant-hamburger-1962.jpg`
- **Fetch:** HTTP 200 · 31,895 bytes · `content-type: image/jpg` · `access-control-allow-*` present (CORS-friendly)
- **Dimensions:** 600 × 442 px · aspect 1.357 (landscape — fits a hero/card band, no portrait crop)
- **Source:** WikiArt (uploads1.wikiart.org). The work itself is **Art Gallery of Ontario,
  Toronto**, accession **66/29** (AGO object record: `art.ago.ca/objects/47906/floor-burger`).
  Note the AGO and MoMA collection sites returned HTTP 403 to scripted fetches, so no
  museum-CDN URL is offered — WikiArt is the stable directly-downloadable source.
- **Visual confirmation:** read back the bytes — soft-sculpture burger (canvas bun, red patty,
  green pickle on top, on a round base). Correct work.
- **Credit string:** `Claes Oldenburg, Floor Burger (Giant Hamburger), 1962 · Art Gallery of Ontario (acc. 66/29) · in copyright, shown small under fair use`

Caveat: only 600×442 — fine for a small fair-use thumbnail; no higher-res variant exists on
WikiArt (the `!Large.jpg` variant 404s).

---

## 2. Pauline Boty — *It's a Man's World I*, 1964 (the field of famous men)

Found the primary target (work **I**), not the fallback.

- **Verified URL:** `https://paulineboty.org/wp-content/uploads/2020/08/pauline-boty-its-a-mans-world-i-1964.jpg`
- **Fetch:** HTTP 200 · 645,671 bytes · `content-type: image/jpeg`
- **Dimensions:** 700 × 864 px · aspect 0.810 (portrait)
- **Source:** paulineboty.org — the artist's official estate/catalogue site (`its-a-mans-world-i-key/` page).
  This is the estate's own hosting, a stable third-party source.
- **Which work:** **I** (1964) — confirmed visually: the blocky field of famous men (US Air Force
  jet, Elvis Presley, Albert Einstein, Lenin, Marcel Proust, Muhammad Ali, a classical Greek head,
  the Albert Hall/Wilton House facades, etc.). NOT the female-nudes work (II).
- **Credit string:** `Pauline Boty, It's a Man's World I, 1964 · The estate of Pauline Boty · in copyright, shown small under fair use`

Backup for II (not needed, but verified available): WikiArt hosts *It's a Man's World II* (1965)
at `https://uploads0.wikiart.org/images/pauline-boty/it-s-a-man-s-world-ii-1965.jpg` (≈397×400,
the female-nudes composition). Use only if I is ever pulled.

---

## Notes / method
- en.wiki API (`prop=images`, `list=search` in File namespace) checked first for both — no
  fair-use file for either work.
- WikiArt pages 403 WebFetch but serve fine to `curl` with a Chrome User-Agent; the og:image /
  uploads*.wikiart.org URL was scraped from the page HTML and fetched directly.
- All test-fetches went to /tmp only; nothing downloaded into the repo, no repo files edited.
