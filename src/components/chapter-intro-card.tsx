import type { ChapterIntro } from '@/lib/types'

/**
 * The forward-looking framing card shown at the top of an open chapter,
 * before the prose. Deliberately NOT styled like the narrative (no Lora
 * serif, no drop cap) — it reads as a light briefing, so the dense
 * inline-defined prose that follows lands on prepared ground instead of
 * cold. Four short, scannable parts; `bridge` is absent on Chapter 1.
 */
export function ChapterIntroCard({ intro }: { intro: ChapterIntro }) {
  return (
    <aside
      aria-label="Chapter primer"
      className="mb-7 rounded-xl border border-foreground/10 bg-foreground/[0.035] px-5 py-5"
    >
      <div
        className="font-semibold tracking-[0.18em] uppercase text-foreground/35"
        style={{ fontSize: 'calc(var(--ch-meta) * 0.82)' }}
      >
        Before you read
      </div>

      <div className="mt-4 space-y-4" style={{ fontSize: 'var(--ch-subtitle)' }}>
        {intro.bridge && (
          <IntroSection label="The story so far">
            <p className="leading-relaxed text-foreground/70">{intro.bridge}</p>
          </IntroSection>
        )}

        <IntroSection label="The lay of the land">
          <p className="leading-relaxed text-foreground/85">{intro.setup}</p>
        </IntroSection>

        {intro.cast.length > 0 && (
          <IntroSection label="Who & what to watch">
            <ul className="space-y-1.5">
              {intro.cast.map((c) => (
                <li key={c.name} className="leading-snug text-foreground/80 flex gap-2">
                  <span
                    className="shrink-0 mt-2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent)' }}
                    aria-hidden
                  />
                  <span>
                    <span className="font-semibold text-foreground">{c.name}</span>
                    <span className="text-foreground/55"> — {c.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </IntroSection>
        )}

        <IntroSection label="By the end">
          <p
            className="leading-snug text-foreground/85 border-l-[2.5px] pl-3"
            style={{ borderColor: 'var(--accent)' }}
          >
            {intro.takeaway}
          </p>
        </IntroSection>
      </div>
    </aside>
  )
}

function IntroSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        className="font-semibold tracking-[0.12em] uppercase text-foreground/40 mb-1.5"
        style={{ fontSize: 'calc(var(--ch-meta) * 0.78)' }}
      >
        {label}
      </div>
      {children}
    </div>
  )
}
