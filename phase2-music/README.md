# Phase 2 — Music module prototype (form-following player)

A working slice of the Music mode: play a recording of a Mozart string-quartet
movement and watch the formal sections (Exposition → Development → Recapitulation,
with first/second subject, transition, etc.) light up in sync, each with a short
"listen for this" note.

Design rationale lives in `../PHASE2-MUSIC-MODULE.md`. This folder is standalone
and is **not** wired into the Next.js app or the gated Civ pipeline.

## See it move in 30 seconds (placeholder timings)

1. Open `player.html` in a browser (double-click is fine).
2. Click **Recording** and pick any audio file (ideally a recording of K.458 mvt I —
   see links below). You'll see a red banner: it's using rough placeholder timings.
3. Press play. The structural strip, playhead, and "NOW" card move. The *labels and
   prose are real*; only the *timing* is a stand-in until you do one of the two steps
   below.

## Get accurate timings (pick ONE)

You only need this to make the labels line up with a real recording. **You never
type a timestamp by hand.**

### Option A — automatic (align.py → merge.mjs)
Runs on a computer with Python; produces timings from the audio + a score file.

1. Download two files:
   - **Recording (audio):** Musopen — https://musopen.org/music/3000-string-quartet-no-17-in-b-flat-major-k-458/ (free MP3). Public-domain alternatives on the Internet Archive.
   - **Score (symbolic):** MuseScore / OpenScore K.458 mvt I as MusicXML or MIDI (CC0), or KernScores (http://kern.ccarh.org → convert to MIDI/MusicXML).
2. `pip install librosa pretty_midi music21 synctoolbox numpy scipy soundfile`
3. `python align.py --audio hunt.mp3 --score k458-i.musicxml --out measure-times.json`
4. `node merge.mjs guides/k458-mvt1.json measure-times.json guides/k458-mvt1.timings.json`
5. In `player.html`, load your audio, then load `guides/k458-mvt1.timings.json` via
   the **Timings JSON** picker. Spot-check by ear.

### Option B — tap it yourself (no Python, no theory)
1. Open `player.html`, load your recording.
2. Click **Calibrate by tapping**, press play, and hit **spacebar** the instant each
   new section begins (the on-screen prompt tells you which one is next).
3. Click **Export timings JSON**. It applies immediately and downloads a file you can
   reload next time. Done — accurate to that recording, no tools required.

## Files

| File | What it is |
|---|---|
| `player.html` | Self-contained synced player (playback + tap-calibrate + export). Embeds a copy of the guide/placeholder so it runs from `file://`. |
| `guides/k458-mvt1.json` | The authored guide — form, measure ranges, key plan, house-voice "listen for" prose. Timestamps are `null` (filled by alignment). |
| `guides/k458-mvt1.placeholder-timings.json` | Clearly-labeled ROUGH timings so the UI moves out of the box. Not an analysis. |
| `templates/sonata.json` | Reusable sonata-form label vocabulary. |
| `align.py` | The "ear": audio-to-score alignment → `measure-times.json`. **Untested in the web container**; run locally with the deps above. |
| `merge.mjs` | Joins `measure-times.json` into the guide → a player-ready timings file. |

## Honest limits
- The **authored guide** (labels, keys, prose) is reliable. The **measure numbers**
  are approximate — verify against one pinned edition before trusting them.
- `align.py` is a best-effort first cut; alignment can drift on very rubato or noisy
  recordings, and exposition-repeat detection is a manual flag. Always spot-check.
- This prototype proves the spine (perceive → label → sync). Productionizing means
  porting `player.html` to a Next.js route/component and adding the gates described
  in `../PHASE2-MUSIC-MODULE.md`.
