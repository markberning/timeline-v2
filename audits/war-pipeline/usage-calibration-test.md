# Usage calibration test — Women of the Revolution chapter (2026-06-10)

Purpose: measure what ONE full chapter pipeline does to the user's usage meter,
with the user's other session paused, to derive points-per-chapter and
tokens-per-point for budgeting all remaining ARW work.

## Baseline (user-reported, other session paused)
- 5-hour window: **1%**
- Week: **19%**

## Token ledger (agent tokens, from completion reports)
| Stage | Agent | Tokens |
|---|---|---|
| 1. Fact pack | done | 116,291 |
| 2. Author (Opus) | done | 120,489 |
| 3. Critics ×4 (Sonnet) | done | 207,095 |
| 4. Reconcile (Opus) | done | 110,473 |
| 5. Images | done | 40,410 |
| **Total** | | **594,758** (agent tokens; + coordinator overhead) |

## End reading (user-reported, other session still paused)
- 5-hour window: **9%** (was 1%)
- Week: **21%** (was 19%)

## Derived
- points-per-chapter: **2 weekly points** / **8 five-hour-window points** (whole-number rounding: weekly true value 1.5–2.5)
- tokens-per-point: ~**300k agent-tokens per weekly point**, ~74k per window point
- Remaining ARW (4 themes + 6 spine + integration) ≈ **21–23 weekly points** → ~21% → mid-40s%
- One 5-hour window holds ~11 chapters from empty; ~8 points/chapter

## Boost caveat (added after test)
User reports a **1.5x usage allowance until July**. These rates were measured UNDER the boost.
Post-boost projection: ~**3 weekly pts / ~12 window pts per chapter**. Recalibrate with one fresh reading on the first July chapter.
