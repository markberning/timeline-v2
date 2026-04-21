# Session Handoff — 2026-04-21b

**Branch:** main
**Last commit:** `b5c09e1` — READ button: chapter number inline with title, remove events count
**Auto-deploy:** may need reconnect (last CF auto-deploy was April 16; manual `npx wrangler deploy` works as fallback)

---

## TL;DR

Major summary page redesign driven by Figma mockups (5 color variants), plus save-my-place, sticky mini map, and parchment light mode. All 9 shipped TLs affected.

## What changed this session

### 1. Summary page redesign (mockup-driven)
- **Collapsed chapters**: minimal rows — "01" accent number, Lora serif title with inline rotating chevron, italic serif subtitle, start/end years right-justified with `›` separator. No buttons, no peek text.
- **Header tap toggles summary** (not chapter). READ THE FULL CHAPTER button is the only way to open the full narrative.
- **Summary expanded**: solid accent READ button (white text, bold, book icon, circle `›`, chapter number inline with title, year range) + "SUMMARY · FOR REVIEW" label + bullet list inside left accent vertical border (margin-quoted style).
- **Reader page header**: accent vertical bar left of title, Lora serif (foreground color), "N CH" pill right-justified, subtitle indented below, chain nav moved below title block.
- **Chapter bottom nav**: × close and "Read Next Chapter" buttons now match READ button style (solid accent, white text, bold, book icon, circle arrow, next chapter title + number).

### 2. Save-my-place
- Auto-saves chapter + scroll percentage to localStorage while reading (debounced 500ms).
- "Continue Reading" banner on return shows chapter name + percentage. Whole banner clickable, × dismisses. 90-day expiry.
- Resume scrolls to saved position after 400ms render delay.

### 3. Sticky mini map
- When the chapter map scrolls out of view, a 100px thumbnail appears fixed bottom-right.
- Tap opens lightbox. Disappears when full map scrolls back into view.
- IntersectionObserver-based tracking.

### 4. Lightbox scroll preservation
- Saves `window.scrollY` before opening, restores on close via `requestAnimationFrame`.

### 5. Visual polish
- **Light mode background**: `#ede5d3` (warm parchment cream), matching notch/status bar via theme-color meta tag.
- **Dark mode background**: kept at `#22201e`.
- **Text size default**: reduced from 18px to 16px (1rem). Chapter numbers, titles, subtitles, and summary bullets use relative `em` units so they all scale with the text-size control.
- **Fonts**: chapter title (text-xl Lora serif), subtitle (italic Lora serif), summary bullets (Geist sans-serif), READ button title (text-lg Lora serif bold).
- **Chevrons**: bold, 50% opacity, inline after title text, rotate + translate-x-1 on open.
- **Edge-to-edge highlight**: collapse flash uses `-mx-8 px-8` to bleed past container padding.
- **Yellow accent colors darkened**: nile-valley `#a67c00`, nubian-tradition `#b8860b` — adequate contrast for white text on solid accent buttons.

## Files changed

| File | What |
|------|------|
| `src/components/chapter-accordion.tsx` | Complete collapsed/summary/expanded redesign, sticky mini map, lightbox scroll preservation, bottom nav restyle |
| `src/components/narrative-reader.tsx` | Save-my-place (progress save/load, resume banner), `nextChapterTitle` prop |
| `src/app/[civilizationId]/page.tsx` | Header layout: accent bar, serif title, CH pill, chain nav below |
| `src/app/globals.css` | Light mode background `#ede5d3`, prose-size default `1rem` |
| `src/app/layout.tsx` | Anti-flash script theme-color updated to `#ede5d3` |
| `src/components/dark-mode-toggle.tsx` | Light mode theme-color updated to `#ede5d3` |
| `src/components/text-size-control.tsx` | Default index changed from 2 (18px) to 1 (16px) |
| `src/lib/accent-colors.ts` | Darkened nile-valley and nubian-tradition yellows |
| `BEHAVIORS.md` | Updated: accordion, dark/light mode, text size, save-my-place, lightbox, bottom nav, header, accent contrast |
| `CLAUDE.md` | Updated: reader features (built/planned), summary page, save-my-place, mini map, light mode |

## Next priorities
- Old Kingdom Egypt, Shang Dynasty, or Vedic Period narrative
- Check Cloudflare auto-deploy git integration (may need OAuth reconnect)
- Consider adding chapter title to the Continue Reading banner's resume scroll target
