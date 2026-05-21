# Phase 2 — Music Module (Western Classical Listening Guides)

**Status:** design locked in conversation 2026-05-21; nothing built. This doc is
the in-repo home for the Music-mode design. The canonical Phase-2 memory file
(`memory/project_phase2_plan`) should cross-reference it; it could not be edited
from the web container (memory store not synced into the ephemeral clone).

## Pick up here (2026-05-21)

A runnable thin-slice prototype is built and committed under `phase2-music/`.
Nothing is wired into the Next app or the gated pipeline; it's deliberately
standalone.

**Done:**
- This design doc + the K.458 worked example.
- `phase2-music/` prototype: authored guide (`guides/k458-mvt1.json`),
  `player.html` (self-contained synced player + tap-calibrate + export),
  `align.py` (audio-to-score alignment, the "ear"), `merge.mjs` (alignment →
  per-cue timings, verified), `templates/sonata.json`, `README.md`.

**Not done (your call, on a real machine):**
1. **See it run with a real recording.** Open `phase2-music/player.html`, load an
   audio file. Then get accurate timing one of two ways (both in
   `phase2-music/README.md`):
   - *No tools:* Calibrate-by-tapping in the player, export timings. OR
   - *Automatic:* download a recording (Musopen) + a MusicXML/MIDI score
     (OpenScore/KernScores), `pip install librosa pretty_midi music21 synctoolbox
     numpy scipy soundfile`, run `align.py` → `merge.mjs`, load the timings file.
2. **Verify the measure numbers** in `guides/k458-mvt1.json` against one pinned
   edition (currently approximate).
3. **Spot-check `align.py`** by ear — it's untested in-container, a best-effort
   first cut.
4. **Productionize** (later): port `player.html` to a Next.js `/music/...` route
   + component; add the gates in this doc; decide the content-file home.

**Open decisions (also at the bottom of this doc):** edition to pin; recording-
source policy; how Music mode attaches to civs.

**Note:** the canonical `memory/project_phase2_plan` couldn't be edited from the
web container — this in-repo doc is the source of truth; mirror a one-line
pointer back into the memory file when convenient.

## Scope (narrowed — this is the whole point)

The Music mode explains **Western classical music** by showing, in real time as a
recording plays, **which formal section is sounding** — a synchronized
form-following listening guide. Example: a Mozart string-quartet first movement
displays `Exposition — First subject (B♭)` → `Transition (modulating)` →
`Second subject (F)` → `Closing` → `Development` → `Recapitulation` …, with prose
telling the listener what to notice in each.

This narrow scope is deliberate. It is the friendliest possible target because:
- the **forms are a finite, well-defined vocabulary** (sonata, rondo,
  minuet-and-trio, theme-and-variations, fugue) — labels, not free-form;
- the **canon is exhaustively documented**, often with measure-numbered analyses;
- it sidesteps the two hard walls (see "What Claude can't do").

NOT in scope for the first cut: non-Western traditions, popular music, and any
"point at an arbitrary Spotify clip" flow.

## What Claude can / can't do (the constraint that drives the architecture)

- **Can't ingest audio.** Claude's inputs are text + images (+ PDFs). It does not
  hear the recording, so it cannot, by listening, place a section at a timestamp.
- **Can't produce reliable timestamps alone.** Tempo is the performer's choice,
  and whether the **exposition repeat** is taken shifts everything after it.
- **Can** supply, with high confidence for canonical works: the form, section
  ordering, key plan, and the house-voice prose — keyed to **measure numbers**.

Therefore: split perception from explanation, exactly like the rest of the
pipeline (deterministic tool perceives; Claude explains; gates catch fabrication).

## Architecture — score-anchored alignment

Stronger than blind audio segmentation because it matches against a *known* score.

1. **Form → measures** (Claude, or a published analysis): label each formal
   section by measure number. High confidence for standard repertoire. Pin to ONE
   edition (measure numbers are edition-specific).
2. **Measures → timestamps** via **audio-to-score alignment** — a deterministic
   MIR step (chroma-feature DTW; e.g. Müller's `synctoolbox`, or `music21`-parsed
   score → MIDI → align to audio). Produces a measure→time map for the *specific
   recording*, and reveals whether the exposition repeat was taken.
3. **Timestamps → synced labels** in the reader: a structural strip with a
   playhead + a "NOW" card that flips as playback crosses each boundary.

Elegance: alignment **auto-solves the repeat problem** — a repeated exposition
maps to both passes, so the labels light up correctly each time. Born-verified
discipline intact: the aligner perceives the timing, Claude supplies labels/prose.

## Data contract (mirror existing file conventions)

- `content/.music-{tlId}.json` — the guides (one entry per piece/movement).
- `audits/.music-snapshots-{tlId}.json` — the alignment map = the contract
  (measure→time per pinned recording).
- `content/.music-waivers-{tlId}.json` — waivers; `audits/music-baseline.json` —
  legacy grandfather (same model as density/coverage gates).

### Reusable form template (sonata)

```json
{
  "formId": "sonata",
  "sections": [
    { "id": "intro",   "label": "Slow introduction", "optional": true },
    { "id": "exp",     "label": "Exposition", "children": ["P","TR","S","K"] },
    { "id": "P",       "label": "First subject (tonic)" },
    { "id": "TR",      "label": "Transition / bridge (modulates)" },
    { "id": "S",       "label": "Second subject (dominant / relative major)" },
    { "id": "K",       "label": "Closing theme / codetta" },
    { "id": "exp_rep", "label": "Exposition repeat", "optional": true },
    { "id": "dev",     "label": "Development" },
    { "id": "recap",   "label": "Recapitulation", "children": ["P","TR","S2","K"] },
    { "id": "S2",      "label": "Second subject — NOW in tonic (the resolution)" },
    { "id": "coda",    "label": "Coda", "optional": true }
  ]
}
```

Shorthand: **P** = primary theme, **TR** = transition, **S** = secondary theme,
**K** = closing/codetta. (Hepokoski-Darcy *Sonata Theory* uses **C** for closing;
pick one convention and spell it out in the UI — single letters are only for the
compact strip.)

### Per-cue shape

Each cue carries: `section`, `label`, optional `subTheme`, `key`, `measures`
(+ `measuresConfidence`), `tStart`/`tEnd` (null until alignment runs),
`listenFor` (house-voice prose), `confidence`. The recording block pins
`source`/`performer`/`durationSec`/`sha256` and `takesExpositionRepeat`. Guide is
valid only for the pinned recording.

Worked reference example (Mozart K. 458 "The Hunt", mvt I) authored in
conversation 2026-05-21 — full cue list to be committed as
`content/.music-mozart.json` when the module starts.

## Gates (the G-gate model, applied to audio)

- **Timestamp validity (deterministic):** every cue's time must fall within track
  duration and snap to an alignment boundary — a cue invented out of band fails.
- **Coverage:** cues span the whole movement, no large unexplained gap.
- **Recording-pin:** guide carries the file's sha256 + duration; mismatch fails
  (no silently re-pointing at a different recording). 1:1, like map↔chapter.
- **License gate (fail-closed):** recording must be on an allowed-source
  allowlist (public-domain / owned / licensed).
- **Fact-check:** verifiable claims (composer, dates, premiere) born-verified.
- **Explanation-vs-audio QA:** the one hard, AI-in-the-loop check (analog to map
  vision-QA) — a spot-check that the prose matches the sound.

## Honest caveats

- **Alignment can drift** on heavily rubato playing or noisy historical
  recordings; needs the spot-check gate. Solid on clean modern recordings.
- **Sub-theme granularity is interpretive** (where 1a ends and 1b begins) — coarse
  labels are ground truth; fine sub-labels are authored/curated.
- **New toolchain:** the alignment step is mature in **Python** (synctoolbox /
  librosa / music21). This repo is all-Node, so Music adds an offline Python
  sidecar at build time (not at runtime — acceptable).
- **Licensing** is the real-world blocker for modern copyrighted audio; default to
  public-domain recordings (Musopen / IMSLP / archive.org), which is plentiful for
  the classical canon.

## Build plan — the thin-slice working example

Target: one specific recording of **one** Mozart quartet first movement, playing
in a minimal page with the section labels lighting up in sync.

**Critical-path inputs (need sourcing / network — the user's call):**
1. A **license-clean recording** (audio file we may both process *and* play back).
   Verify the license. Public-domain is the safe default.
2. A **symbolic score reference** for alignment — MusicXML / MIDI / **kern of the
   movement (e.g. KernScores Mozart quartets, or a vetted MuseScore export).
   Quality of this file is the main variable.

**Steps:**
3. **Author the guide** (Claude): form map keyed to measures + prose. Draft for
   K. 458 mvt I already exists; verify measure numbers against the pinned edition.
4. **Run alignment** (`synctoolbox`): symbolic reference + recording → measure→time
   map; detect the exposition repeat. Spot-check the result.
5. **Merge** (small script): join alignment map into the cue JSON → fill
   `tStart`/`tEnd`, set `takesExpositionRepeat`.
6. **Minimal synced player** (Next.js route/component): `<audio>` + cue JSON; on
   `timeupdate`, highlight the active cue, render the structural strip + NOW card.

**Two paths:**
- **(A) Full MIR alignment** — the real pipeline; needs the Python sidecar + the
  symbolic reference; alignment is the variable-effort piece.
- **(B) Manual-tap shortcut** — for a *first* demo, hand-mark the section
  boundaries against one recording by ear (no MIR). Proves the UX in ~an hour;
  not auto-generated, but enough to validate the feature before investing in (A).

**What can be built here vs. needs you/network:**
- Claude can write, here and now: the authored guide (committed JSON), the merge
  script, and the minimal player UI/route — all without network or audio.
- Needs you / network / external resources: sourcing + license-verifying the
  recording, sourcing the symbolic score, and running/spot-checking alignment
  (requires the audio file present + Python deps; Claude can't listen to confirm).

**Rough sizing:** path (B) demo = hours. Path (A) end-to-end = a few days, almost
all of it in alignment robustness + the symbolic-reference and license sourcing;
the authored content and player UI are small.

## Open questions for the user

- Edition to pin for measure numbers (NMA/Bärenreiter?).
- Default recording-source policy (public-domain-only to start?).
- Path (A) vs. (B) for the first demo.
- How the Music mode attaches to civs (per-composer? per-era? standalone tab?).
