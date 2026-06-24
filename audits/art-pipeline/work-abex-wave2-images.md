# ABEX wave 2 — fair-use image URLs (2 in-copyright works)

Both works are **in US copyright** (Kline d. 1962; Krasner d. 1984). We cannot self-host a full copy; goal is a small, stable, directly-downloadable thumbnail shown under fair use.

**Path (a) — English-Wikipedia fair-use file — UNAVAILABLE for both.** Neither *Chief* nor *The Seasons* has a dedicated en.wiki article, and neither appears as a local fair-use `upload.wikimedia.org/wikipedia/en/...` file on the artist articles (`Franz Kline`, `Lee Krasner`). The only Kline fair-use file on en.wiki is `File:Kline_no2.jpg` (a *different* work, "No. 2"). So we fall back to path (b): museum / stable third-party CDN URLs that return real JPEG bytes with a normal browser User-Agent. All URLs below were test-fetched to /tmp and confirmed to return image bytes.

> Note on MoMA: `www.moma.org` returns **HTTP 403** to both curl and WebFetch (bot protection), and MoMA's media CDN uses opaque base64-encoded paths that can't be derived without scraping the JS-rendered page. So there is no usable raw MoMA CDN URL for *Chief*; the working fallback is WikiArt's CDN, which serves the correct full uncropped painting.

---

## 1. Franz Kline, *Chief* (1950)

- **Recommended URL (verified):** `https://uploads2.wikiart.org/images/franz-kline/chief-1950.jpg`
  - HTTP 200 · `image/jpg` · 271,922 bytes · **1280 × 1006 px** · aspect **1.272**
- **Smaller variant (verified):** `https://uploads2.wikiart.org/images/franz-kline/chief-1950.jpg!Large.jpg`
  - HTTP 200 · `image/jpg` · 51,461 bytes · **750 × 589 px** · aspect **1.273** (append `!Large.jpg` for the 750px size; drop it for the 1280px full)
- **Source:** WikiArt (`https://www.wikiart.org/en/franz-kline/chief-1950`). Canonical museum record: MoMA, `https://www.moma.org/collection/works/78319`.
- **Accession / credit:** MoMA, oil on canvas, 58 3/8" × 6' 1 1/2" (148.3 × 186.7 cm), Gift of Mr. and Mrs. David M. Solinger.
- **Aspect check:** true canvas 148.3 × 186.7 cm → 1.259 (landscape); the 1.272 image aspect matches, so this is the correct, **uncropped** painting (not a detail).
- **Suggested credit string:** `Franz Kline, Chief, 1950 · MoMA · in copyright, shown small under fair use`
- **MoMA-CDN caveat:** if a www.moma.org media URL is later required, it must be lifted from the rendered page in a real browser (the CDN path is base64/opaque and 403s to scripts); WikiArt is the working programmatic fallback today.

## 2. Lee Krasner, *The Seasons* (1957)

- **Recommended URL (verified):** `https://whitneymedia.org/assets/artwork/6153/87_7_cropped.jpg`
  - HTTP 200 · `image/jpeg` · 580,131 bytes · **1600 × 727 px** · aspect **2.201**
  - This is the Whitney's **own** museum CDN (`whitneymedia.org`) — the authoritative source, and highest resolution.
- **Backup URL (verified):** `https://uploads6.wikiart.org/00443/images/lee-krasner/87-7-cropped.jpeg!Large.jpeg`
  - HTTP 200 · `image/jpg` · 67,771 bytes · **750 × 341 px** · aspect **2.199** (WikiArt mirror of the same Whitney file)
- **Source:** Whitney Museum of American Art, `https://whitney.org/collection/works/6153`.
- **Accession / credit:** Whitney, **87.7**, oil and house paint on canvas, 92 3/4 × 203 7/8 in. (235.6 × 517.8 cm), Purchase, with funds from Frances and Sydney Lewis (by exchange), the Mrs. Percy Uris Purchase Fund, and the Painting and Sculpture Committee.
- **Aspect check:** true canvas 235.6 × 517.8 cm → 2.198 (very wide landscape). The image's 2.201 aspect matches — despite the `_cropped` in the filename, this is the **full** painting; "_cropped" here means the surrounding whitespace/mat was trimmed, not the artwork. The art is genuinely this panoramic.
- **Suggested credit string:** `Lee Krasner, The Seasons, 1957 · Whitney Museum of American Art (87.7) · in copyright, shown small under fair use`

---

## Summary table

| Work | Best verified URL | Dims | Aspect | Source / accession |
|---|---|---|---|---|
| Kline, *Chief* (1950) | `uploads2.wikiart.org/images/franz-kline/chief-1950.jpg` | 1280×1006 | 1.272 (landscape) | MoMA, works/78319 (no en-wiki fair-use file; MoMA CDN 403s scripts → WikiArt fallback) |
| Krasner, *The Seasons* (1957) | `whitneymedia.org/assets/artwork/6153/87_7_cropped.jpg` | 1600×727 | 2.201 (wide landscape) | Whitney 87.7 (museum's own CDN) |

Both URLs return real JPEG bytes (`ff d8 ff e0` magic) with a normal browser User-Agent and no auth. Test-fetched to /tmp only; nothing downloaded into the repo, no repo files edited.
