#!/usr/bin/env python3
"""
align.py — audio-to-score alignment for the Music module (the "ear").

Given (1) a recording of a movement and (2) a symbolic score of the SAME
movement (MusicXML or MIDI), produce a measure -> time map for that specific
recording: { "measureTimes": { "1": 0.0, "2": 1.31, ... }, "meta": {...} }.
Feed that to merge.mjs to fill a guide's per-cue timestamps.

This is the deterministic perception step. Claude authors the labels/prose;
this script supplies the timing. Born-verified: the machine perceives, the
human spot-checks the result by ear.

------------------------------------------------------------------------------
NOT RUN / NOT TESTED IN THE WEB CONTAINER. Run it on a real machine.

Dependencies (pip install):
    librosa            # audio chroma
    pretty_midi        # symbolic chroma + downbeats from MIDI
    music21            # MusicXML -> MIDI (only if you pass a .musicxml/.mxl)
    synctoolbox        # MrMsDTW alignment  (Müller et al.)
    numpy, scipy, soundfile

Usage:
    python align.py --audio hunt.mp3 --score k458-i.musicxml --out measure-times.json
    # then:
    node merge.mjs guides/k458-mvt1.json measure-times.json guides/k458-mvt1.timings.json

Notes / caveats:
- Exposition repeat: detecting whether a performance repeats is NOT solved here.
  Pass --takes-repeat to record it in meta (drives merge.mjs). If the score
  encodes the repeat and the performance omits it (or vice-versa), alignment
  quality degrades — prefer a symbolic score whose repeat structure matches the
  recording, or strip the repeat from the score.
- Measure numbering must match the guide's edition. music21/pretty_midi count
  measures from 1; an anacrusis (pickup) can offset everything by one — verify.
- Always spot-check: open the player, load this output, and confirm a couple of
  boundaries land where the section actually changes.
------------------------------------------------------------------------------
"""

import argparse
import json
import os
import sys
import tempfile

import numpy as np


def musicxml_to_midi(score_path: str) -> str:
    """Convert a MusicXML/.mxl score to a temp MIDI file via music21."""
    from music21 import converter

    score = converter.parse(score_path)
    fd, midi_path = tempfile.mkstemp(suffix=".mid")
    os.close(fd)
    score.write("midi", fp=midi_path)
    return midi_path


def measure_downbeats(midi_path: str):
    """Return symbolic downbeat times (seconds in the score's own timeline),
    one per measure, indexed from measure 1."""
    import pretty_midi

    pm = pretty_midi.PrettyMIDI(midi_path)
    downbeats = pm.get_downbeats()  # np.array of seconds
    return pm, np.asarray(downbeats, dtype=float)


def chroma_from_midi(pm, fs: int = 22050, hop: int = 512):
    """Symbolic chroma feature sequence from a PrettyMIDI object."""
    chroma = pm.get_chroma(fs=fs / hop)  # 12 x T
    return _normalize(chroma)


def chroma_from_audio(audio_path: str, fs: int = 22050, hop: int = 512):
    import librosa

    y, _ = librosa.load(audio_path, sr=fs, mono=True)
    chroma = librosa.feature.chroma_cqt(y=y, sr=fs, hop_length=hop)
    dur = librosa.get_duration(y=y, sr=fs)
    return _normalize(chroma), dur


def _normalize(chroma):
    norm = np.linalg.norm(chroma, axis=0, keepdims=True)
    norm[norm == 0] = 1.0
    return chroma / norm


def align(score_chroma, audio_chroma):
    """Run MrMsDTW; return a warping path (2 x N): score_frame -> audio_frame."""
    from synctoolbox.dtw.mrmsdtw import sync_via_mrmsdtw

    wp = sync_via_mrmsdtw(f_chroma1=score_chroma, f_chroma2=audio_chroma)
    return np.asarray(wp)


def warp_seconds(score_secs, wp, hop, fs):
    """Map an array of score-timeline seconds to audio-timeline seconds using wp."""
    frame_dur = hop / fs
    score_frames = np.asarray(score_secs) / frame_dur
    # wp[0] = score frames, wp[1] = audio frames (both monotincreasing-ish)
    audio_frames = np.interp(score_frames, wp[0], wp[1])
    return audio_frames * frame_dur


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--audio", required=True)
    ap.add_argument("--score", required=True, help="MusicXML/.mxl or .mid")
    ap.add_argument("--out", required=True)
    ap.add_argument("--takes-repeat", action="store_true",
                    help="mark that this performance takes the exposition repeat")
    ap.add_argument("--fs", type=int, default=22050)
    ap.add_argument("--hop", type=int, default=512)
    args = ap.parse_args()

    score_path = args.score
    if score_path.lower().endswith((".xml", ".musicxml", ".mxl")):
        print("converting MusicXML -> MIDI via music21 ...", file=sys.stderr)
        score_path = musicxml_to_midi(score_path)

    print("reading score downbeats ...", file=sys.stderr)
    pm, downbeats = measure_downbeats(score_path)

    print("computing chroma (score + audio) ...", file=sys.stderr)
    score_chroma = chroma_from_midi(pm, fs=args.fs, hop=args.hop)
    audio_chroma, audio_dur = chroma_from_audio(args.audio, fs=args.fs, hop=args.hop)

    print("aligning (MrMsDTW) ...", file=sys.stderr)
    wp = align(score_chroma, audio_chroma)

    audio_times = warp_seconds(downbeats, wp, args.hop, args.fs)

    measure_times = {str(i + 1): round(float(t), 3) for i, t in enumerate(audio_times)}

    out = {
        "meta": {
            "source": "alignment",
            "durationSec": round(float(audio_dur), 3),
            "takesExpositionRepeat": bool(args.takes_repeat),
            "audio": os.path.basename(args.audio),
            "score": os.path.basename(args.score),
        },
        "measureTimes": measure_times,
    }
    with open(args.out, "w") as f:
        json.dump(out, f, indent=2)
        f.write("\n")
    print(f"wrote {args.out} — {len(measure_times)} measures, "
          f"audio {audio_dur:.1f}s", file=sys.stderr)
    print("SPOT-CHECK the result by ear in the player before trusting it.",
          file=sys.stderr)


if __name__ == "__main__":
    main()
