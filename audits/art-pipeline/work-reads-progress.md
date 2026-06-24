# Modern-art WORK-READS build — progress ledger

Goal: give the 6 newer Modern movements full work-level deep reads (the per-work
narrative pages Realism/Impressionism/Post-Impressionism/Cubism already have).
54 works total (9 per movement). Each goes through the mandatory gated art pipeline
(fact pack → Opus author → 5 Sonnet critics → reconcile → born-verified images →
integrate const + section prose). Same machine as the 27 existing reads.

## Build order (rights-driven: PD-rich first, fair-use last)
1. **Fauvism** (9) — all pre-1930 US-PD → real hero images. IN PROGRESS.
2. **Futurism** (9) — all 1910–14 US-PD → real hero images.
3. **Dada** (9) — mostly 1915–21 US-PD → real hero images.
4. **Surrealism** (9) — mixed; de Chirico PD, rest fair-use.
5. **Abstract Expressionism** (9) — in-copyright → fair-use small/credited.
6. **Pop Art** (9) — in-copyright → fair-use small/credited.

## Pace / caps
OVERRIDE (user, this run): may use up to 95% of BOTH the 5-hour window AND the
weekly limit. Check the meter before each wave; stop at 95%. When capped, schedule
a wake-up to resume after reset. (Standing 70%/80% rule resumes after this push.)
Concurrency ceiling is separate from usage: keep ≤~6 simultaneous gate agents
(5 concurrent gates is the API ceiling — agents die silently above it).
Waves of ~3 works to keep gate concurrency safe (≤~6 agents; 5 concurrent gates
is the API ceiling — agents die silently above it).

## Status
### Fauvism (9/9 LIVE ✓ COMPLETE)
- [x] hat — Woman with a Hat (Matisse, 1905) — LIVE, gated, Sarah-Stein blocker fixed
- [x] bonheur — Le Bonheur de vivre (Matisse, 1905–06) — LIVE, gated, male-gaze blocker fixed
- [x] green-stripe — The Green Stripe (Matisse, 1905) — LIVE, gated
- [ ] luxe — Luxe, calme et volupté (Matisse, 1904, Pompidou/Orsay) — factpack DONE; quote unverified→paraphrase
- [ ] open-window — Open Window, Collioure (Matisse, 1905, NGA) — factpack DONE; portrait format ~0.83
- [ ] blue-nude — Blue Nude, Souvenir de Biskra (Matisse, 1907, BMA Cone) — factpack DONE; "copies burned" not painting; Steins→Quinn→Cone
- [ ] chatou — The Seine at Chatou (Vlaminck, 1906, Met Gelman) — factpack DONE; treat PD-US (app already inlines); museum=Gelman not Whitney
- [ ] charing-cross — Charing Cross Bridge (Derain, 1906, NGA Whitney) — factpack DONE; series count hedge
- [ ] rue-pavoisee — Street Decked with Flags, Le Havre (Dufy, 1906) — factpack OWED

### Futurism (9/9 LIVE ✓ COMPLETE)
- [x] city-rises, dog, galli, cyclist, unique-forms — wave 1, LIVE gated
- [x] farewells, bal-tabarin, automobile, abstract-speed — wave 2, gated, spliced+tsc-clean
      - bal-tabarin: flags + Turco-Italian-War nationalist reading added (FRAME blocker)
      - abstract-speed: "alongside Mussolini" → De Ambris (FRAME+FACT blocker)
      - all 4 hero images visually verified born-verified PD-US
- Cyclist works[]-strip credit already corrected to Museo del Novecento, Milan

### Dada (in progress) — 9 works, all PD-US (1915–21)
ids match the movement works[] strip: fountain, lhooq, kitchen-knife,
mechanical-head, hat-makes-man (wave 1); stieglitz, celebes, sainte-vierge,
daum (wave 2). All hero images already wired in ART_IMG.
- [ ] wave 1 (fountain, lhooq, kitchen-knife, mechanical-head, hat-makes-man) — FACT PACKS RUNNING
- [ ] wave 2 (stieglitz, celebes, sainte-vierge, daum) — queued

### Surrealism / AbEx / Pop — pending (9 each)

## COMPLETE — all 54 newer Modern work-reads shipped (6/6 movements)
- Fauvism 9/9 ✓ · Futurism 9/9 ✓ · Dada 9/9 ✓ · Surrealism 9/9 ✓
- Abstract Expressionism 9/9 ✓ · Pop Art 9/9 ✓
All through the mandatory 5-critic art pipeline (fact pack → author → fact/read/frame
gates → reviser → splice → tsc → build → deploy → route-verify → commit), shipped in
~5-work waves. Born-verified media throughout; the in-copyright works (AbEx, Pop, and
the post-1930 Surrealists) show small/credited under fair use. Three works whose images
were absent from Wikimedia were resolved per-work: Ernst's Histoire Naturelle (US-PD 1926)
self-hosted from public/art/; Kline Chief + Krasner Seasons (in-copyright) via WikiArt /
the Whitney CDN; Oldenburg Floor Burger + Boty It's a Man's World via WikiArt / the Boty
estate site. Component-prefix collision caught + fixed once (autumn-rhythm Aut→Arh vs the
Futurism Automobile read).
