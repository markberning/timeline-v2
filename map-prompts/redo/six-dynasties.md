# Six Dynasties — Map Prompt Redos

Self-contained, copy-paste-ready Gemini prompts for the Six Dynasties chapters that need re-rendering. Ch 1, 3, 5, 8 are clean. Ch 2, 4, 6, 7 are below.

A common failure on this TL was **positioning instructions in parentheses (like `(top)`, `(top edge)`, `(bottom edge)`, `(secondary)`) leaking from prompt text into rendered map labels**. The prompts below use plain region labels instead, with positioning given to Gemini in prose rather than parenthetical suffixes.

---

## Chapter 2 — REDO

Create a simple, clean map for Chapter 2 of a mobile reading app about China's Six Dynasties era. The chapter covers the Jin dynasty's reunification, Emperor Wu's feudal grants, the War of the Eight Princes, the Five Barbarians, the sack of Luoyang (311 CE), the fall of Chang'an (316 CE), and the beginning of the Great Southward Migration (265–316 CE).

The chapter title "Chapter 2: The Brief Reunion" should appear at the top of the map image, centered, in a clean serif font, inside a header bar that spans the full width of the image. The header bar is the ONLY bordered element of the image. The left, right, and bottom edges of the image have NO border or frame — the map geography extends fully to all three of those edges, edge-to-edge. Do not draw a rectangular frame around the map on the left, right, or bottom sides.

**CRITICAL RULES — read carefully before drawing:**

1. **Region labels never include positioning suffixes.** The steppe label reads simply `Steppe Frontier` — never `Steppe Frontier (top)` or any other parenthetical positioning suffix. Positioning instructions in this prompt are for the artist; they are NOT to be rendered as visible text on the map.
2. **Spell every label exactly as written below. Do not invent words. Do not abbreviate.**
3. **Draw each label exactly once.**
4. **North is at the top. East is to the right.**
5. **All water is light blue.**
6. **Do not invent any labels, sites, or features that are not in this prompt.**

**CHINA ORIENTATION RULES:**

1. The **Yellow River** is the MAIN northern river, flowing west-to-east. The **Yangtze River** is the MAIN southern river.
2. **Luoyang** and **Chang'an** are both in the Yellow River basin in NORTHERN China; Chang'an is WEST of Luoyang.
3. **Jiankang** (modern Nanjing) is on the SOUTH bank of the Yangtze, near the river's mouth.

**Map requirements:**
- Full China view showing the Jin empire fragmenting, with arrows indicating the Five Barbarians' origins and the southward migration. Place the steppe frontier across the top of the map.
- Muted warm palette

**Sites — each ONCE:**
- **Luoyang** — Label: "Luoyang (sacked 311 CE — Emperor Huai captured, forced to serve wine at the Xiongnu court)"
- **Chang'an** — Label: "Chang'an (fell 316 CE — Emperor Min captured and killed)"
- **Jiankang** — south bank of Yangtze. Label: "Jiankang (modern Nanjing — Eastern Jin declared here, 317 CE)"

**Region labels (gray) — each ONCE — NO parenthetical positioning suffixes:**
- Western Jin Empire
- Yellow River
- Yangtze River
- Steppe Frontier ← simple label, no `(top)` suffix
- Qinling Mountains

**Three annotations:**
- Bold arrows from the north/northwest into the Yellow River basin: "Five Barbarians — Xiongnu, Xianbei, Jie, Di, Qiang. Settled inside borders for generations, recruited by warring princes."
- A large arrow from the Yellow River basin south across the Yangtze to Jiankang: "Great Southward Migration — aristocratic families flee south with retainers, libraries, genealogies"
- A shaded zone over northern China: "War of the Eight Princes (291–306 CE) — devastates the north, invites nomadic takeover"

**Style:** Landscape orientation, simple and elegant.

---

## Chapter 4 — REDO

Create a simple, clean map for Chapter 4 of a mobile reading app about China's Six Dynasties era. The chapter covers the Eastern Jin at Jiankang, aristocratic dominance, the Great Southward Migration's transformation of the Yangtze valley, Wang Xizhi and the Orchid Pavilion, Gu Kaizhi, Tao Yuanming, Xie Lingyun, celadon production, and the founding of the Liu Song dynasty (317–420 CE).

The chapter title "Chapter 4: The Flight South" should appear at the top of the map image, centered, in a clean serif font, inside a header bar that spans the full width of the image. The header bar is the ONLY bordered element of the image. The left, right, and bottom edges of the image have NO border or frame — the map geography extends fully to all three of those edges, edge-to-edge. Do not draw a rectangular frame around the map on the left, right, or bottom sides.

**CRITICAL RULES — read carefully before drawing:**

1. **Region labels never include positioning suffixes.** The river label is simply `Yellow River`, not `Yellow River (top edge)`. The northern region is `Northern Kingdoms`, not `Northern Kingdoms (secondary)`. The political region is `Eastern Jin`, not `Eastern Jin (south)`. Positioning instructions in this prompt are for the artist; they are NOT to be rendered.
2. **`Eastern Jin` appears EXACTLY ONCE on the map** — as a single political-region label over the southern territory. Do NOT also draw a duplicate `Eastern Jin` label at the bottom of the map.
3. **The Orchid Pavilion annotation must read EXACTLY:** `Orchid Pavilion Preface, 353 CE — 324 characters of running script. Emperor Taizong buried the original with him.` The phrase `Taizong buried the` appears EXACTLY ONCE in this annotation. Never write `Emperor Taizong buried the Taizong buried the original`.
4. **The Jiankang label has flat parentheses, NEVER nested parentheses.** Use: `Jiankang (Eastern Jin capital — aristocratic families dominate, 'the Wang and the Sima share the world')`. Do NOT nest a second parenthetical inside the Jiankang label.
5. **Spell every label exactly as written below. Do not invent words. Do not duplicate any phrase.**
6. **Draw each label exactly once.**
7. **North is at the top. East is to the right.**
8. **All water is light blue.**
9. **Do not invent any labels, sites, or features that are not in this prompt.**

**Map requirements:**
- Focused view of southern China and the Yangtze valley, with the north visible but secondary at the top edge
- Show the cultural sites of the Eastern Jin
- Muted warm palette

**Sites — each ONCE:**
- **Jiankang** — Label: "Jiankang (Eastern Jin capital — aristocratic families dominate, 'the Wang and the Sima share the world')"
- **Shaoxing** — Zhejiang. Label: "Shaoxing (Orchid Pavilion — Wang Xizhi writes the greatest calligraphy in Chinese history, 353 CE)"
- **Yue kilns** — Zhejiang coast. Label: "Yue kilns (celadon production — jade-green stoneware, exported across the Indian Ocean)"
- **Mount Lu** — southeastern China. Label: "Mount Lu (Huiyuan founds Pure Land Buddhism, Donglin Temple, 386 CE)"

**Region labels (gray) — each ONCE — NO parenthetical positioning suffixes:**
- Eastern Jin ← appears ONCE only, NO `(south)` suffix, NO duplicate at the bottom of the map
- Northern Kingdoms ← NO `(secondary)` suffix
- Yangtze River
- Yellow River ← NO `(top edge)` suffix
- Zhejiang ← NO `(Yue region)` suffix
- East China Sea

**Two annotations (each appears EXACTLY ONCE):**
- A shaded zone along the Yangtze valley: "Great Southward Migration transforms the south — iron plows, dikes, wet-rice farming. Yangtze surpasses the Yellow River in productivity."
- A highlighted point at Shaoxing: "Orchid Pavilion Preface, 353 CE — 324 characters of running script. Emperor Taizong buried the original with him." ← `Taizong buried the` appears ONCE

**Style:** Landscape orientation, simple and elegant.

---

## Chapter 6 — REDO

Create a simple, clean map for Chapter 6 of a mobile reading app about China's Six Dynasties era. The chapter covers the Tuoba Xianbei Northern Wei, the Yungang Grottoes near Datong, Emperor Xiaowen's Sinicization reforms, the capital move from Datong to Luoyang, the Longmen Grottoes, the Yongning Pagoda, Shaolin Monastery, and the Six Garrison Rebellions that split Northern Wei (386–534 CE).

The chapter title "Chapter 6: The Northern Wei" should appear at the top of the map image, centered, in a clean serif font, inside a header bar that spans the full width of the image. The header bar is the ONLY bordered element of the image. The left, right, and bottom edges of the image have NO border or frame — the map geography extends fully to all three of those edges, edge-to-edge. Do not draw a rectangular frame around the map on the left, right, or bottom sides.

**CRITICAL RULES — read carefully before drawing:**

1. **Region labels never include positioning suffixes.** Labels are simply `Steppe`, `Southern Dynasties`, `Yangtze River` — NOT `Steppe (top)`, `Southern Dynasties (bottom edge)`, or `Yangtze River (bottom edge)`. Positioning instructions in this prompt are for the artist; they are NOT to be rendered as visible text on the map.
2. **Spell every label exactly as written below. Do not invent words.**
3. **Draw each label exactly once.**
4. **North is at the top. East is to the right.**
5. **All water is light blue.**
6. **Do not invent any labels, sites, or features that are not in this prompt.**

**Map requirements:**
- Northern China focused: from the steppe frontier (placed at the top of the map) and the Six Garrisons south to the Yangtze (placed at the bottom of the map)
- Show the capital move from Datong to Luoyang
- Show the cave temple sites
- Muted warm palette

**Sites — each ONCE:**
- **Datong** — northern Shanxi. Label: "Datong / Pingcheng (early Northern Wei capital — close to steppe homeland)"
- **Yungang** — near Datong. Label: "Yungang Grottoes (begun 460 CE — 252 caves, 51,000+ Buddhist sculptures, colossal Buddhas modeled on emperors)"
- **Luoyang** — Label: "Luoyang (new capital from 493 CE — Yongning Pagoda, ~300 ft tall, tallest structure in the world)"
- **Longmen** — near Luoyang. Label: "Longmen Grottoes (begun 493 CE — 2,345 caves, 100,000+ images, more Sinicized style than Yungang)"
- **Shaolin** — Mount Song. Label: "Shaolin Monastery (founded 495 CE on Mount Song)"

**Region labels (gray) — each ONCE — NO parenthetical positioning suffixes:**
- Northern Wei
- Southern Dynasties ← NO `(bottom edge)` suffix
- Six Garrisons (northern frontier) ← `(northern frontier)` is a real geographic descriptor, keep it
- Yellow River
- Yangtze River ← NO `(bottom edge)` suffix
- Steppe ← NO `(top)` suffix

**Two annotations:**
- A bold arrow from Datong south to Luoyang: "Emperor Xiaowen moves the capital, 493 CE — Xianbei take Chinese surnames, speak Chinese, intermarry with Han aristocrats"
- A shaded zone along the northern frontier: "Six Garrisons — frontier soldiers feel abandoned by Sinicized court. Rebellions in the 520s–530s shatter Northern Wei."

**Style:** Landscape orientation, simple and elegant.

---

## Chapter 7 — REDO

Create a simple, clean map for Chapter 7 of a mobile reading app about China's Six Dynasties era. The chapter covers the four Southern Dynasties (Liu Song, Qi, Liang, Chen) at Jiankang, Emperor Wu of Liang's Buddhist patronage, Hou Jing's rebellion, Liu Xie and literary theory, Zhong Rong's poetry criticism, Xiao Tong's Wenxuan anthology, Zu Chongzhi's mathematics, and maritime trade through Guangzhou (420–589 CE).

The chapter title "Chapter 7: The Southern Dynasties" should appear at the top of the map image, centered, in a clean serif font, inside a header bar that spans the full width of the image. The header bar is the ONLY bordered element of the image. The left, right, and bottom edges of the image have NO border or frame — the map geography extends fully to all three of those edges, edge-to-edge. Do not draw a rectangular frame around the map on the left, right, or bottom sides.

**CRITICAL RULES — read carefully before drawing:**

1. **Spell `Yangtze` correctly — Y-a-n-g-t-z-e — with ONE `z`.** Never write `Yangtzze`, `Yangzte`, or any other variant.
2. **Region labels never include positioning suffixes.** Labels are simply `Northern Dynasties`, `Southeast Asia` — NOT `Northern Dynasties (top edge)` or `Southeast Asia (bottom edge)`. Positioning instructions in this prompt are for the artist; they are NOT to be rendered.
3. **Spell every label exactly as written below. Do not invent words.**
4. **Draw each label exactly once.**
5. **North is at the top. East is to the right.**
6. **All water is light blue.**
7. **Do not invent any labels, sites, or features that are not in this prompt.**

**Map requirements:**
- Southern China focused: from the Yangtze (placed at the top of the map) to the South China Sea and Southeast Asia (placed at the bottom of the map)
- Show Jiankang as the cultural and political center
- Show maritime trade routes from Guangzhou
- Muted warm palette

**Sites — each ONCE:**
- **Jiankang** — Label: "Jiankang (capital of all four Southern Dynasties — over 500 monasteries under Emperor Wu of Liang)"
- **Guangzhou** — Pearl River delta. Label: "Guangzhou (Canton — maritime trade port, spices, gems, ivory from Southeast Asia and India)"

**Region labels (gray) — each ONCE — NO parenthetical positioning suffixes:**
- Southern Dynasties (Liu Song → Qi → Liang → Chen) ← `(Liu Song → Qi → Liang → Chen)` is the dynasty list, keep it
- Northern Dynasties ← NO `(top edge)` suffix
- Yangtze River ← spelled with one `z`
- Pearl River
- South China Sea
- Southeast Asia ← NO `(bottom edge)` suffix
- East China Sea

**Two annotations:**
- A shaded zone across the southern territory: "Four dynasties in 170 years — generals seize power, sons quarrel, cycle repeats. But cultural production is extraordinary."
- A dashed trade route from Guangzhou south into the South China Sea: "Maritime trade route — foreign merchants, Buddhist monks, spices and silk. The south's economic independence from the north."

**Style:** Landscape orientation, simple and elegant.
