'use client'

// Art Section reader — the five sibling narrative chapters for Les Demoiselles
// d'Avignon, ported VERBATIM from the mockup (art-section.jsx). Reuses the
// drilldown breadcrumb (no toggle in the reader). Each chapter: ChapterHeader
// (eyebrow + h1 + progress bar) · LineageStrip (↑From / ↓To chips) · drop-capped
// house-voice prose with subsection headers + inline figures + pull quotes ·
// a "Meanwhile in…" cross-link sheet · prev/next chapter nav.
//
// Inline figures honour the rights subsystem (audits/art-vertical.md §5,
// samples/art-reader-picasso.html): Demoiselles is pre-1931 / PD-US, so its
// figures render FULL inline with a Rights line. A post-1930 / in-copyright work
// (e.g. Guernica) renders the DEGRADED reference card instead.

import { useState } from 'react'
import Link from 'next/link'
import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import {
  artWorkCrumbs, artAlpha,
  SANS, SERIF, INK, MUTED, FAINT, BORDER, CARD_BG,
} from '@/components/mode/art-chrome'
import { ART_WORK_CONTENT, ART_IMG } from '@/lib/art-content'
import { MeanwhileSheet } from '@/components/mode/art-reader'
import { Lightbox } from '@/components/lightbox'

// ─────────────────────────────────────────────────────────────
// Prose primitives
// ─────────────────────────────────────────────────────────────
const proseStyle: React.CSSProperties = { margin: '0 0 14px', fontFamily: SERIF, fontSize: 16, lineHeight: 1.62, color: INK, letterSpacing: -0.01 }
const proseMutedStyle: React.CSSProperties = { ...proseStyle, color: MUTED }
const italicStyle: React.CSSProperties = { ...proseStyle, fontStyle: 'italic', color: MUTED }

function DropCap({ children, accent }: { children: React.ReactNode; accent: string }) {
  return <span style={{ float: 'left', fontFamily: SERIF, fontWeight: 500, fontSize: 50, lineHeight: 0.85, paddingRight: 8, paddingTop: 6, color: accent }}>{children}</span>
}

function SectionHeader({ accent, label, title, first }: { accent: string; label: string; title: string; first?: boolean }) {
  return (
    <div style={{ margin: first ? '4px 0 18px' : '36px 0 18px', paddingTop: first ? 0 : 18, borderTop: first ? 'none' : `1px solid ${BORDER}` }}>
      <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.6, fontWeight: 700, color: accent, textTransform: 'uppercase' }}>{label}</div>
      <h2 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 22, lineHeight: 1.15, letterSpacing: -0.3, color: INK }}>{title}</h2>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Chapter header — eyebrow + h1 + thin progress bar
// ─────────────────────────────────────────────────────────────
function ChapterHeader({ accent, eyebrow, title, progress }: { accent: string; eyebrow: string; title: string; progress: number }) {
  return (
    <div style={{ padding: '16px 18px 0' }}>
      <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.5, fontWeight: 700, color: accent, textTransform: 'uppercase' }}>{eyebrow}</div>
      <h1 style={{ margin: '4px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 26, lineHeight: 1.1, letterSpacing: -0.4, color: INK }}>{title}</h1>
      <div style={{ height: 3, background: BORDER, borderRadius: 2, marginTop: 12 }}>
        <div style={{ height: '100%', width: `${Math.round(progress * 100)}%`, background: accent, borderRadius: 2 }} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Inline figure — full treatment (pre-1931 / PD-US) with a Rights line, plus a
// tap-to-zoom lightbox.
// ─────────────────────────────────────────────────────────────
function PaintingFigure({ imageUrl, palette, alt, caption, rights, ratio = '4/5', onZoom }: { imageUrl: string; palette: [string, string, string]; alt: string; caption: React.ReactNode; rights?: React.ReactNode; ratio?: string; onZoom?: (src: string, cap: string) => void }) {
  const [failed, setFailed] = useState(false)
  const captionText = typeof caption === 'string' ? caption : alt
  return (
    <figure style={{ margin: '20px 0 18px', padding: 0 }}>
      <div
        onClick={onZoom && !failed ? () => onZoom(imageUrl, captionText) : undefined}
        style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', background: failed ? `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})` : palette[2], aspectRatio: failed ? ratio : undefined, cursor: onZoom && !failed ? 'zoom-in' : 'default' }}
      >
        {!failed && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={imageUrl} alt={alt} loading="lazy" onError={() => setFailed(true)} style={{ width: '100%', height: 'auto', display: 'block' }} />
        )}
        {!failed && onZoom && (
          <span style={{ position: 'absolute', top: 10, right: 10, width: 34, height: 34, borderRadius: 999, background: 'rgba(20,18,15,0.62)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)' }} aria-hidden>⤢</span>
        )}
      </div>
      <figcaption style={{ marginTop: 11, fontFamily: SERIF, fontSize: 12.5, fontStyle: 'italic', color: MUTED, lineHeight: 1.45 }}>{caption}</figcaption>
      {rights && (
        <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start', fontFamily: SANS, fontSize: 11.5, lineHeight: 1.5, color: FAINT, padding: '7px 0 0', borderTop: `1px dashed ${BORDER}`, marginTop: 9 }}>
          <b style={{ color: MUTED, fontWeight: 600 }}>Rights</b><span>{rights}</span>
        </div>
      )}
    </figure>
  )
}

// Degraded reference card for post-1930 / in-copyright works (Guernica example).
// Exported so it can be dropped into any chapter that references an in-copyright
// work; Demoiselles is entirely pre-1931 so it isn't used in these five.
export function RestrictedFigure({ imageUrl, title, year, note, linkLabel, href }: { imageUrl: string; title: React.ReactNode; year: string; note: string; linkLabel: string; href: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'stretch', border: `1px solid ${BORDER}`, background: CARD_BG, borderRadius: 14, padding: 13, margin: '20px 0 18px' }}>
      <div style={{ flexShrink: 0, width: 104, borderRadius: 9, overflow: 'hidden', position: 'relative', background: '#1c1410' }}>
        {!failed && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={imageUrl} alt="" loading="lazy" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(0.92)' }} />
        )}
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(34,32,30,0.08), rgba(34,32,30,0.30))' }} />
      </div>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: SANS, fontSize: 10, letterSpacing: 1, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>⊘ Under copyright</div>
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: '6px 0 2px', lineHeight: 1.25, color: INK }}>{title}</div>
        <div style={{ fontFamily: SANS, fontSize: 12.5, lineHeight: 1.4, color: MUTED }}>{year}</div>
        <div style={{ fontFamily: SANS, fontSize: 12, lineHeight: 1.45, color: FAINT, marginTop: 7 }}>{note}</div>
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ marginTop: 'auto', fontFamily: SANS, fontSize: 13, fontWeight: 600, color: 'var(--accent, #7c3aed)', textDecoration: 'none', paddingTop: 9, display: 'inline-flex', gap: 5 }}>{linkLabel} →</a>
      </div>
    </div>
  )
}

const PD_RIGHTS = 'Public domain in the United States (first published before 1931).'
// MeanwhileSheet is imported from art-reader (shared, single source of truth) —
// the era + movement chapters use the same component. A local variant here drifted
// out of sync (top accent border, colour swatch, dead CTA), so it was removed.

// ─────────────────────────────────────────────────────────────
// The five narratives — prose ported verbatim from art-section.jsx
// ─────────────────────────────────────────────────────────────
const AMBER = '#d97706'
const BLUE = '#1d4ed8'

function SettingNarrative({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="Setting" title="Winter 1906" first />

        <p style={proseStyle}>
          <DropCap accent={accent}>P</DropCap>
          icasso was 25, broke, and living at the top of a tenement on the Montmartre hill called the{' '}<em> Bateau-Lavoir</em>{' '}— the &ldquo;laundry boat,&rdquo; because it creaked when it rained and there was
          one tap on each floor. He was painting in oils on the back of broken doors. He was selling
          two or three canvases a month. He was about to make the painting that would change
          twentieth-century art.
        </p>

        <p style={proseStyle}>He was looking at three things he could not stop looking at.</p>

        <SectionHeader accent={accent} label="The first thing" title="Cézanne, who had just died" />

        <p style={proseStyle}>
          Paul Cézanne died in October 1906 in Aix-en-Provence, of pneumonia, after painting in a
          storm. In the months that followed, every painter in Paris went to two memorial shows —
          one at the Salon d&rsquo;Automne, one at Bernheim-Jeune — and tried to understand what
          they had been missing.
        </p>

        <PaintingFigure
          onZoom={onZoom}
          palette={['#5a7042', '#8a7848', '#1c1a12']}
          imageUrl={ART_IMG.cezanneBathers}
          ratio="6/5"
          alt="Cézanne, Les Grandes Baigneuses"
          caption={<>Cézanne,{' '}<em>The Large Bathers</em>, 1898–1905 — Philadelphia Museum of Art.</>}
          rights="Public domain worldwide (Paul Cézanne died 1906). Wikimedia Commons."
        />

        <p style={proseStyle}>
          What Picasso would later say he saw was an old painter so tired of pretending that perspective
          was real that he had stopped pretending. The bathers were a pyramid. The trees were a pyramid.
          The colours did not blend, they butted. The brushstrokes were visible blocks. You could see
          how the painting had been built.
        </p>

        <SectionHeader accent={accent} label="The second thing" title="An Iberian head, in the Louvre" />

        <p style={proseStyle}>
          In March 1907, his friend the writer Guillaume Apollinaire introduced Picasso to a junior
          employee of the Louvre, who introduced him to a pair of stone heads. They were Iberian —
          stolen, it would later turn out, by the man doing the introducing — small, frontal, with
          almond eyes and a stillness that had nothing in common with the smooth classicism of the
          Greeks one floor up. Picasso bought them for fifty francs each.
        </p>

        <p style={proseStyle}>
          He took them back to the studio. The face he was painting on the leftmost figure of his new
          canvas began to look more and more like those stone heads, every week.
        </p>

        <SectionHeader accent={accent} label="The third thing" title="A mask, in the Trocadéro" />

        <p style={proseStyle}>
          One afternoon in June 1907, Picasso wandered into the ethnographic museum at the Trocadéro
          and, by his own later account, was hit by a feeling he could not name. The hall was full of
          masks — Fang, Kota, Dan, Songye, taken in colonial loot from across French West and Central
          Africa, displayed in vitrines without labels or context, smelling of mildew and disinfectant.
        </p>

        <p style={italicStyle}>I understood, he said, what painting was actually for.</p>

        <p style={proseStyle}>
          The two faces on the right side of the canvas, which had been Iberian three weeks earlier,
          began turning into masks.
        </p>

        <SectionHeader accent={accent} label="The canvas" title="Eight feet tall, on the studio wall" />

        <p style={proseStyle}>
          The canvas had been pinned to the wall since the spring. It was 243 × 234 centimetres — nearly
          eight feet square — and Picasso had been making sketches for it since November. There would
          be hundreds of them by the time he was done. The early ones showed a brothel scene with two
          clothed men: a sailor in the middle, a medical student on the left holding a book or a skull.
          By the time it was finished the men were gone. There were only the five women, the curtain,
          the small still life of fruit on the table in front, and the masks.
        </p>

        <p style={proseMutedStyle}>
          He started painting it in earnest in May. By the end of July it was done. Then he showed it
          to his friends.
        </p>
      </article>

      <MeanwhileSheet
        accent={AMBER}
        region="London"
        when="1906 · the same years"
        title="The Edwardian peace begins to fray."
        body="In London, the Liberal landslide of 1906 has begun the legislation that will become the welfare state. The European empires are at their pre-1914 peak. Belle Époque Paris does not yet know it is the Belle Époque."
        palette={['#6b6b6b', '#3a3a3a', '#1c1c1c']}
        ctaLabel="Read 'Edwardian Europe'"
      />
    </>
  )
}

function MakingNarrative({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="Hundreds of sketches" title="Before any paint" first />

        <p style={proseStyle}>
          <DropCap accent={accent}>P</DropCap>
          icasso made roughly five hundred preparatory sketches for the Demoiselles between November
          1906 and June 1907. He filled at least sixteen sketchbooks. Most of them survive, and reading
          them in order is like watching the painting fight its way out of a more conventional one.
        </p>

        <p style={proseStyle}>
          The early drawings show a moralistic brothel scene called{' '}<em>The Wages of Sin</em>: five women,
          two men. The man in the middle is a sailor. The man on the left, in the early sketches, is a
          medical student. In some, he holds a textbook; in others, a human skull. The composition is
          theatrical — a curtain pulled back to reveal the women, the men reading the lesson on the
          wages of vice.
        </p>

        <PaintingFigure
          onZoom={onZoom}
          palette={['#a08a4a', '#5a4a1c', '#1a1a14']}
          imageUrl={ART_IMG.picassoStudy1907}
          ratio="4/5"
          alt="Sketchbook studies"
          caption={<>One of dozens of sheets of preparatory studies. Some are tender; some are violent. The composition keeps simplifying.</>}
          rights={PD_RIGHTS}
        />

        <p style={proseStyle}>
          By the late spring the men are gone. The narrative is gone with them. What is left is the
          confrontation: five women, no men, no story, no allegory — a flat group portrait with the
          viewer standing exactly where the two clients used to be.
        </p>

        <SectionHeader accent={accent} label="Two campaigns of paint" title="May, and then July" />

        <p style={proseStyle}>
          He painted the canvas in two waves. The first, in May and early June, was already strange:
          all five faces in the same Iberian-influenced style, big almond eyes and stiff frontal stares,
          like the stone heads from the Louvre. He nearly stopped. He showed the canvas, in this state,
          to almost nobody.
        </p>

        <p style={proseStyle}>
          Then in late June he went to the Trocadéro. When he came back, he attacked the two right-hand
          figures and the left-most one and reworked them as masks. The face of the squatting figure —
          twisted, simultaneously frontal and in profile — is the one nobody can quite forget. It is
          where Cubism, three years later, actually begins.
        </p>

        <p style={italicStyle}>The painting was finished at the end of July 1907.</p>

        <SectionHeader accent={accent} label="What it weighs" title="A few facts about the object" />

        <p style={proseStyle}>
          It is 243.9 × 233.7 centimetres. It is painted in oils on a single piece of linen canvas.
          Its colours are the reds and pinks of flesh, the deep blues of drapery, the rust of earth.
          The picture plane is broken into shards even before Cubism arrives: the curtain on the left
          is a fan of straight cuts; the small still life at the bottom is rendered in three views at
          once. The Iberian face on the left coexists in the same canvas as the African mask on the
          right, as if Picasso wanted you to see, side by side, what painting had been doing — for
          three thousand years before Europe forgot.
        </p>

        <p style={proseMutedStyle}>
          He titled it, privately,{' '}<em>Le Bordel philosophique</em>{' '}— &ldquo;the philosophical brothel.&rdquo;
          The title it now bears was given by his friend the poet André Salmon, ten years later, for an
          early public showing. The &ldquo;demoiselles&rdquo; in question were five women on the Carrer d&rsquo;Avinyó
          in Barcelona, where Picasso had spent his student years.
        </p>
      </article>
    </>
  )
}

function ReceptionNarrative({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="Late July 1907" title="The first viewers" first />

        <p style={proseStyle}>
          <DropCap accent={accent}>P</DropCap>
          icasso invited his friends to the studio one by one. The unveiling was a small social ritual:
          tea, a single candle, the cloth pulled off the canvas. He was nervous. He wanted them to like
          it. They did not like it.
        </p>

        <p style={proseStyle}>
          <strong>Matisse</strong>{' '}was the first big visitor. Matisse was at that moment the most famous
          living painter in France — the Fauve, the man who had scandalised the 1905 Salon with bright
          unmodulated colour, who was thirteen years older than Picasso and his only real rival. He
          looked at the Demoiselles for a long time, and then he said it was an outrage, a betrayal of
          the modern movement, a hoax. He left.
        </p>

        <p style={proseStyle}>
          <strong>Georges Braque</strong>, then 25 and a younger Fauve himself, came to the studio in
          November. He looked at the painting for a long time. According to the dealer Kahnweiler, he
          finally said: &ldquo;Listen, in spite of your explanations, your painting looks as if you wanted to
          make us eat tow and drink turpentine.&rdquo; He left too.
        </p>

        <p style={italicStyle}>A month later Braque was back, painting in something close to Picasso&rsquo;s new manner.</p>

        <SectionHeader accent={accent} label="The Russian collector" title="One person who did like it" />

        <p style={proseStyle}>
          <strong>Gertrude Stein</strong>, Picasso&rsquo;s American patron and friend, was diplomatic; her
          brother Leo Stein laughed.{' '}<strong>André Derain</strong>{' '}was reported to have said that
          someone would find Picasso hanging from a beam behind the canvas one day.{' '}<strong>Sergei
          Shchukin</strong>, the Russian textile baron who was Picasso&rsquo;s main buyer, looked at the
          painting and said it was a great loss to French art.
        </p>

        <p style={proseStyle}>
          The one early viewer who is recorded as having seen the picture&rsquo;s importance was Daniel-Henry
          Kahnweiler, a 23-year-old German art dealer freshly arrived in Paris, who had only recently
          opened a small gallery on the rue Vignon. Kahnweiler did not try to buy the Demoiselles
          (Picasso would not have sold it), but he did, from that day, start buying everything else
          Picasso painted.
        </p>

        <PaintingFigure
          onZoom={onZoom}
          palette={['#5a4a3a', '#2a221c', '#0a0606']}
          imageUrl={ART_IMG.kahnweiler}
          ratio="3/4"
          alt="Picasso, Portrait of Daniel-Henry Kahnweiler"
          caption={<>Three years later: Picasso&rsquo;s analytic Cubist portrait of Kahnweiler, the dealer who never doubted him.</>}
          rights={PD_RIGHTS}
        />

        <SectionHeader accent={accent} label="What 'outrage' meant" title="Painting in 1907" />

        <p style={proseStyle}>
          To understand why Matisse called it an outrage, it helps to remember that painting in 1907
          had rules. They were not the rules of the Royal Academy; the Impressionists had broken those
          a generation earlier. But there was a tacit modernist code: distort, yes, but for emotional
          effect; flatten, yes, but for compositional grace; quote non-European art, yes, but as
          decoration. What Picasso had done was take all three liberties together, without grace,
          without decoration, and without explanation.
        </p>

        <p style={proseMutedStyle}>
          Picasso took the canvas off the wall, rolled it up, and put it away. It would not be seen
          again in public, except for a brief showing in 1916, for almost a decade.
        </p>
      </article>
    </>
  )
}

function HiddenNarrative({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="1907–1916" title="The painting in the corner" first />

        <p style={proseStyle}>
          <DropCap accent={accent}>P</DropCap>
          icasso rolled up the Demoiselles in late 1907 and propped it against the wall behind some
          other canvases. It stayed there. He moved twice in the years that followed — to a bigger
          studio on the boulevard de Clichy in 1909, and then again, after his marriage to Olga
          Khokhlova, to a respectable flat on the rue La Boétie in 1918 — and the rolled canvas moved
          with him each time.
        </p>

        <p style={proseStyle}>What he did instead, in those nine years, was paint Cubism.</p>

        <SectionHeader accent={accent} label="1908" title="Braque comes back" />

        <p style={proseStyle}>
          Within months of Braque&rsquo;s &ldquo;turpentine&rdquo; visit, Braque had started painting
          landscapes at L&rsquo;Estaque in the south of France that, to Matisse, looked like little
          cubes. Matisse said so to a critic. The critic wrote it down. The label stuck. By 1909
          Picasso and Braque were working in the same studio building in Paris, visiting each other
          daily, deliberately not signing the fronts of their canvases so that buyers had to flip them
          over to find out whose was whose.
        </p>

        <PaintingFigure
          onZoom={onZoom}
          palette={['#7a6a4a', '#3a3020', '#100c08']}
          imageUrl={ART_IMG.braqueEstaque}
          ratio="4/5"
          alt="Braque, Houses at l'Estaque"
          caption={<>Braque&rsquo;s{' '}<em>Houses at l&rsquo;Estaque</em>, painted within twelve months of seeing the Demoiselles. Matisse said it looked like little cubes.</>}
          rights={PD_RIGHTS}
        />

        <SectionHeader accent={accent} label="1916" title="Salon d'Antin, one room" />

        <p style={proseStyle}>
          In July 1916, during the Battle of the Somme, the poet André Salmon organised a small
          exhibition at the Salon d&rsquo;Antin, on the boulevard d&rsquo;Antin in Paris. Picasso lent
          a single picture. It was the rolled-up canvas from 1907. Salmon, who had to invent a title
          on the spot to print in the catalogue, called it{' '}<em>Les Demoiselles d&rsquo;Avignon</em>{' '}—
          a softened-up reference to the women on the Carrer d&rsquo;Avinyó in Barcelona. The title
          stuck. It is now what it is called.
        </p>

        <p style={proseStyle}>
          The painting was on the wall for one month. The war was on. Paris was distracted. A few
          critics noticed. Most did not. Picasso took the picture down at the end of August, rolled it
          up again, and put it back in the studio.
        </p>

        <p style={italicStyle}>He sold it eight years later, in 1924, to a couturier named Jacques Doucet.</p>

        <p style={proseMutedStyle}>
          Most of the painters who would go on to make Cubism — Léger, Delaunay, Gris, the Italian
          Futurists — never saw the Demoiselles itself. They saw photographs, and they heard about it,
          and they took inspiration from the work Picasso made AFTER it. The picture that broke the
          window had been hiding behind another window the whole time.
        </p>
      </article>
    </>
  )
}

function LegacyNarrative({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="1924" title="Doucet's staircase" first />

        <p style={proseStyle}>
          <DropCap accent={accent}>I</DropCap>
          n 1924 the couturier and book collector{' '}<strong>Jacques Doucet</strong>{' '}bought the Demoiselles
          for 25,000 francs — roughly $1,300 in 1924 dollars, about $20,000 today. The advice he received
          from his friend the poet André Breton was not to buy it because it was beautiful but because
          it was, Breton said, the door through which a new century was going to walk.
        </p>

        <p style={proseStyle}>
          Doucet hung the painting at the foot of the marble staircase in his Paris apartment. Visitors
          complained, in their later memoirs, about having to climb the stairs past it. Doucet&rsquo;s widow
          consigned it for sale in 1937. It went unsold in Paris and was shipped to New York.
        </p>

        <SectionHeader accent={accent} label="1939" title="MoMA, in exchange for a Degas" />

        <p style={proseStyle}>
          In 1939 the{' '}<strong>Museum of Modern Art</strong>{' '}acquired the Demoiselles in a complicated
          three-way trade. The museum gave up a Degas — <em>Race Course at Longchamp</em>{' '}— and roughly
          $24,000 in cash, drawn from the Lillie P. Bliss Bequest. The total value of the trade in 1939
          dollars was about $28,000. Today that is approximately $620,000.
        </p>

        <p style={proseStyle}>
          The painting has hung at MoMA, with a few short-lived rearrangements and one loan, ever since.
          It has been valued by private estimators (it has never been re-sold) above one billion dollars.
        </p>

        <PaintingFigure
          onZoom={onZoom}
          palette={['#3a4a8b', '#7a6a3a', '#0e1224']}
          imageUrl={ART_IMG.momaFacade}
          ratio="5/3"
          alt="The Museum of Modern Art"
          caption={<>MoMA acquired the Demoiselles in 1939 through the Lillie P. Bliss Bequest. It has hung in the museum almost continuously since.</>}
          rights="Photograph CC BY-SA 4.0 via Wikimedia Commons."
        />

        <SectionHeader accent={accent} label="The canon" title="The painting in the textbooks" />

        <p style={proseStyle}>
          By the 1950s the Demoiselles had become, in the textbooks, the canvas where modern painting
          actually began. By the 1980s the more interesting question had become whether anything could
          have happened in twentieth-century painting WITHOUT it. By the 2000s a generation of scholars
          had begun to point out — quite correctly — that the act of importing the formal language of
          African masks without acknowledging their makers had aesthetic and ethical costs we are still
          working through.
        </p>

        <p style={proseStyle}>
          All of which is true. And the painting hangs at MoMA, and a new generation of young painters
          stand in front of it every year and try to understand what it is. They cannot, exactly. That,
          one might argue, is what makes it the painting that it is.
        </p>

        <p style={proseStyle}>
          Picasso himself painted for another sixty years. His most famous later canvas &mdash;{' '}
          <em>Guernica</em>, made in a month in 1937 for a republic already losing a war &mdash; is exactly
          the kind of work this app often can&rsquo;t hand you in full. Painted after 1930, it is still under
          copyright in the United States, not only abroad. So here it is the way the rights regime leaves it:
          a small reference, with the prose carrying the picture you can&rsquo;t be shown.
        </p>

        <RestrictedFigure
          imageUrl={ART_IMG.guernica}
          title={<>Picasso, <i>Guernica</i></>}
          year="1937 · Museo Reina Sofía, Madrid"
          note="Post-1930 — not public domain in the US either. Shown as a small reference; the full work can't be served inline."
          linkLabel="View at the Reina Sofía"
          href="https://www.museoreinasofia.es/en/collection/artwork/guernica"
        />

        <p style={proseMutedStyle}>
          It has never been resold. It has been loaned exactly once, to the Musée Picasso in Paris, in
          1988. It will probably never be sold.
        </p>
      </article>

      <MeanwhileSheet
        accent={BLUE}
        region="St Petersburg"
        when="1915 · the same years"
        title="Malevich is on his way to a black square."
        body="While Cubism was busy breaking the picture, a Russian named Kazimir Malevich was about to paint a black square and call it a painting. The Revolution gave him an audience."
        palette={['#bf2f25', '#1c1c1c', '#d6cf3f']}
        ctaLabel="Read 'Suprematism'"
      />
    </>
  )
}

// ─────────────────────────────────────────────────────────────
// Kahnweiler — the five chapters (Analytic Cubism, 1910)
// ─────────────────────────────────────────────────────────────
function KahDealer({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1907" title="A shop the size of a bedroom" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        alk into 28 rue Vignon, a side street near the Madeleine church in Paris, in 1907, and you would find a room about four metres square — roughly a single bedroom — with almost nothing on the walls. The man behind the counter was{' '}<strong>Daniel-Henry Kahnweiler</strong>: 23 years old, German, born in Mannheim into a banking family that had shipped him off to Paris and London to learn the money trade. He had learned it well enough to know what he wanted to do instead. With a small loan of family money he had rented this closet of a shop, and he intended to sell the most unsellable pictures in Europe.
      </p>
      <p style={proseStyle}>
        Within a couple of years he had quietly signed up the wildest young painters in Paris: Pablo Picasso; Georges Braque; and two of the{' '}<em>Fauves</em>{' '}— the &ldquo;wild beasts,&rdquo; a movement of painters who slapped down raw, unmixed colour — namely André Derain and Maurice de Vlaminck. Soon a young Spaniard named Juan Gris joined them. Kahnweiler bought their canvases when nobody else would, back when the only people who admired this work were the handful of people making it. On the side he also dealt in African and Oceanic carvings — the same kind of objects that had just rewired Picasso&rsquo;s eye.
      </p>
      <SectionHeader accent={accent} label="The strategy" title="Pay them, and hide them" />
      <p style={proseStyle}>
        Here is the part that sounds backwards. Kahnweiler did the opposite of what a dealer is supposed to do: he kept his painters{' '}<em>out</em>{' '}of sight. The normal way to launch a new artist was the{' '}<strong>Salons</strong>{' '}— the giant annual public exhibitions in Paris where critics, buyers and the press discovered who was next. Kahnweiler banned his painters from showing there. Instead he sold privately, one canvas at a time, to a tiny circle of true believers — collectors in Germany, Russia and the United States who would buy on his word alone.
      </p>
      <p style={proseStyle}>
        It worked because scarcity is its own advertisement. If the only place to see a Picasso was in a German industrialist&rsquo;s drawing room, owning one meant you were in on a secret the world hadn&rsquo;t caught up to yet. To free the painters to take risks, Kahnweiler eventually put them on what amounted to a fixed monthly payment in exchange for first claim on everything they made — though the{' '}<em>formal</em>{' '}exclusive contracts came later, around 1912; in these early years it was a looser, trusting arrangement.
      </p>
      <p style={proseStyle}>
        The work he was hiding had, by then, picked up a name — and not from the painters. In 1908 Kahnweiler hung some Braque landscapes in this shop. A critic named Louis Vauxcelles walked in, sneered that Braque had reduced everything to{' '}<em>&ldquo;petits cubes&rdquo;</em>{' '}— little cubes — and the insult stuck. That sneer is why we now say{' '}<strong>Cubism</strong>: the art of breaking the world into hard, angular blocks. So when Picasso painted Kahnweiler&rsquo;s portrait two years later, he was not just painting a friend. He was painting the system that paid for Cubism, in the style that system had bankrolled into being.
      </p>
    </article>
  )
}

function KahAnalytic({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1909–1911" title="Roped together" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>&ldquo;</DropCap>
        It was like being roped together on a mountain,&rdquo; Braque said later, looking back on these years. He meant it the way a climber means it: one slip and you both go off the cliff, so you watch each other&rsquo;s every move. He and Picasso both lived on the Montmartre hill in northern Paris — Picasso in the rickety studio block called the Bateau-Lavoir — and through 1909, 1910 and 1911 they went round to each other&rsquo;s studios nearly every day, eyeing what the other had done since yesterday and pushing the same problem one more inch.
      </p>
      <p style={proseStyle}>
        They worked so much in lockstep that, for a stretch, they stopped signing the{' '}<em>fronts</em>{' '}of their canvases — you had to flip a picture over to learn whose it was. The result is that even now, more than a century on, scholars sometimes can&rsquo;t agree on which man painted which canvas. Two people had effectively merged into one painter.
      </p>
      <SectionHeader accent={accent} label="The method" title="A face from every side at once" />
      <p style={proseStyle}>
        What they invented in those rope-together years is called{' '}<em>Analytic Cubism</em>{' '}(roughly 1909–1911). The idea: take an object — a violin, a bottle, a head — and shatter it into small flat{' '}<em>facets</em>, the little angled planes you see on the cut surface of a gem, then lay those facets out on the canvas as if you were seeing the thing from several sides at the same moment. And do all this in a deliberately drab, near-colourless range of browns, greys and{' '}<em>ochres</em>{' '}(the dull yellow-brown of dried clay). The colour is drained out{' '}<em>on purpose</em>: with nothing pretty to look at, your eye is forced onto the only thing left — the structure.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#7a6a4a', '#3a3326', '#15110a']}
        imageUrl={ART_IMG.braqueViolinJug}
        ratio="3/4"
        alt="Braque, Violin and Pitcher"
        caption={<>Braque,{' '}<em>Violin and Pitcher</em>, 1909–10 — Kunstmuseum Basel. The same brown faceting Picasso was using on Kahnweiler, made the same year.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        And it really was the same year, the same problem, the same drab palette — two men, one experiment. Set Braque&rsquo;s pitcher beside what Picasso was doing with a human figure that summer and the kinship is almost embarrassing.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#7a6a4a', '#4a4030', '#15110a']}
        imageUrl={ART_IMG.girlWithMandolin}
        ratio="3/4"
        alt="Picasso, Girl with a Mandolin (Fanny Tellier)"
        caption={<>Picasso,{' '}<em>Girl with a Mandolin (Fanny Tellier)</em>, 1910 — Museum of Modern Art, New York. Painted the same year as the Kahnweiler portrait: a body breaking into facets, but the curve of an arm and the round of the instrument still hold.</>}
        rights={PD_RIGHTS}
      />
      <SectionHeader accent={accent} label="Where it came from" title="Borrowed from a mask" />
      <p style={proseStyle}>
        The strangest move — showing a thing from several angles at once — was not invented in Montmartre. Picasso had met it in 1907, in the African masks crammed into the ethnographic museum at the Trocadéro in Paris. A carved Fang or Kota mask from Central Africa already did the impossible thing: it showed a face dead-on{' '}<em>and</em>{' '}in profile in the same object, nose and brow and cheek read at once. The African carvers had solved &ldquo;several views in one image&rdquo; long before any Frenchman thought of it. Cubism took that solution and ran. It is worth saying plainly, because the textbooks usually don&rsquo;t: the central trick of the most influential painting movement of the century was borrowed, uncredited, from anonymous African sculptors.
      </p>
      <SectionHeader accent={accent} label="The brink" title="To the edge of legibility" />
      <p style={proseStyle}>
        By 1910 the method had pushed so far that the pictures were nearly impossible to read — a few more facets and the subject would dissolve into pure pattern. That scared even Picasso and Braque, so over these years they began smuggling clues back in: the curl of a clarinet, a stencilled letter, a painted nail so real it fools the eye. The Kahnweiler portrait sits right on that edge — but turned, for once, on a living man instead of a jug. A human being taken to the brink of vanishing, then yanked back to earth by a handful of things you can still name.
      </p>
    </article>
  )
}

function KahReading({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The picture" title="Start at the top" first />
      <PaintingFigure
        onZoom={onZoom}
        palette={['#5a4a3a', '#2a221c', '#0a0606']}
        imageUrl={ART_IMG.kahnweiler}
        ratio="3/4"
        alt="Picasso, Portrait of Daniel-Henry Kahnweiler"
        caption={<>Picasso,{' '}<em>Portrait of Daniel-Henry Kahnweiler</em>, 1910 — Art Institute of Chicago. Tap to zoom, then follow along below.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        t first glance it is a grey-brown avalanche of broken planes, and it is tempting to give up. Don&rsquo;t — there is a man in here, and finding him is the whole pleasure. Start at the very top. That patch of fine diagonal hatching, almost like wood grain, is{' '}<strong>hair</strong>: wavy, carefully combed, parted on one side. It is the easiest foothold, so plant your feet there first.
      </p>
      <p style={proseStyle}>
        Drop down a little and a face assembles itself out of the rubble — two dark almond{' '}<strong>eyes</strong>, the ridge of a{' '}<strong>nose</strong>, the line of a brow. Below them, a thin dark{' '}<strong>moustache</strong>{' '}sits over the mouth. Keep going down the centre and you reach the throat, where Picasso has left two of the clearest clues in the whole painting: the neat triangle of a{' '}<strong>tie knot</strong>, and, swagging across the waistcoat, the little chain of a{' '}<strong>pocket watch</strong>. Those two ordinary gentleman&rsquo;s details are the painting telling you, quietly, that this scaffold is a person, dressed for business.
      </p>
      <p style={proseStyle}>
        Now the bottom. A cluster of pale interlocking blocks resolves into a pair of{' '}<strong>clasped hands</strong>, folded in his lap. And off to the{' '}<em>lower left of the canvas</em>{' '}— which is the sitter&rsquo;s{' '}<em>right</em>{' '}side, since he faces you — sit the shards of a small{' '}<strong>still life</strong>: a bottle, and most likely a glass beside it. So Picasso pins the figure down top and bottom — hair up here, hands down there, watch chain anchoring the middle — and lets everything between explode into facets.
      </p>
      <SectionHeader accent={accent} label="The point" title="Why it stops short" />
      <p style={proseStyle}>
        Here is the thing people miss: this is{' '}<em>not</em>{' '}abstract art. Picasso could have dissolved Kahnweiler into pure pattern and walked away — and he chose not to. Analytic Cubism deliberately keeps a tether to the real world: just enough hair, eye, moustache, tie, watch chain and bottle that a patient viewer can climb back to a man. The painting&rsquo;s whole charge lives in that tension — a face on the knife-edge of vanishing, held back from the drop by five or six clues a stubborn eye can still find.
      </p>
    </article>
  )
}

function KahSitting({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Autumn 1910" title="Thirty afternoons in a studio" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icture the room. Autumn 1910, Picasso&rsquo;s cluttered Paris studio, paint and canvases stacked against every wall. Kahnweiler comes by after the gallery closes and settles into a chair — tie knotted, watch chain across the waistcoat, hands folded in his lap — and holds still while his painter stares at him and works. Then he comes back and does it again. By his own later count he sat something like{' '}<strong>thirty times</strong>{' '}for this one picture. That is a lot of afternoons to give a man who is steadily making you disappear.
      </p>
      <p style={proseStyle}>
        Because that is the joke at the centre of the whole thing: the longer Kahnweiler sat, the{' '}<em>less</em>{' '}the canvas looked like him. Most portrait painters work toward likeness — each sitting sharpens the nose, fixes the mouth, narrows the gap between paint and person. Picasso ran the engine in reverse. Each sitting he took the face further apart, prying the man into the flat planes of Analytic Cubism, trading the resemblance for structure. More looking, less likeness.
      </p>
      <SectionHeader accent={accent} label="The paradox" title="Likeness by other means" />
      <p style={proseStyle}>
        And yet — this is the strange part — people who actually knew Kahnweiler swore the thing{' '}<em>caught</em>{' '}him. A Cubist portrait doesn&rsquo;t record a face the way a camera does. It builds a stand-in for a person out of his attributes and rhythms: the set of the shoulders, the clasped hands, the swag of the watch chain, the bottle on the shelf, the wave of carefully combed hair. Assemble enough of a man&rsquo;s particulars and the man is somehow there, even with the face dismantled. Kahnweiler himself kept faith with the painting for the rest of his life — which mattered, because a war and a government auction would shortly try very hard to part him from it.
      </p>
    </article>
  )
}

function KahSeized({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="August 1914" title="An enemy alien overnight" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>I</DropCap>
          n August 1914 the First World War broke out, and France and Germany were suddenly enemies. Kahnweiler — still, after all these years in Paris, a German citizen — happened to be on holiday outside France when it started. That was a catastrophe. A German national could not simply cross back into a France now at war with Germany; he would have been arrested on sight. So the dealer who had built Cubism was locked out of his own gallery, and overnight he became, in French eyes, an{' '}<em>enemy alien</em>{' '}— a citizen of a country yours is now fighting. The French state reached into his shop and{' '}<em>sequestered</em>{' '}his entire stock — that is, legally seized it and held it — as &ldquo;enemy property.&rdquo; Hundreds of Cubist paintings, this portrait of him among them, now belonged, in effect, to the government he had fled.
        </p>
        <SectionHeader accent={accent} label="1921–1923" title="The fire-sale at the Drouot" />
        <p style={proseStyle}>
          When the war ended, the state did the single cruelest thing it could to a market built on scarcity: it dumped the lot, all at once, in public. Between 1921 and 1923 the confiscated Kahnweiler holdings — roughly{' '}<strong>three thousand works</strong>{' '}— were auctioned off in four forced sales at the{' '}<strong>Hôtel Drouot</strong>, Paris&rsquo;s big central auction house. Everything Kahnweiler had so carefully{' '}<em>hidden</em>{' '}to build value was now shoved onto the open block, fast and cheap. Cubist prices cratered. Years of patient market-making collapsed in a few hammering afternoons.
        </p>
        <p style={proseStyle}>
          The painters were furious — these were their own canvases being sold out from under them for nothing. At the first sale, by several accounts, Braque squared off against Léonce Rosenberg, the dealer running the auction, and{' '}<em>punched</em>{' '}him; the story is reported rather than documented, but it captures the mood in the room exactly. Out of that wreckage Kahnweiler clawed his way back. He returned to Paris and reopened — but not under his own name. With anti-German feeling still raw, a gallery called &ldquo;Kahnweiler&rdquo; was a liability, so he reopened under the name of a French partner, as the{' '}<strong>Galerie Simon</strong>, and quietly started again. He went on dealing, and writing about his painters, into his nineties.
        </p>
        <p style={proseStyle}>
          This very portrait went under the hammer as{' '}<strong>lot 84</strong>{' '}in the first of those sales, in June 1921, and was carried off by the Swedish painter Isaac Grünewald. From there it wandered: to the Philadelphia collector Earl Horter around 1929, on to Mrs. Goodspeed — later Chapman — in Chicago in 1934, and at last, in 1948, as her gift to the Art Institute of Chicago. The man Picasso dissolved into facets in 1910, scattered by a war and an auction, ended up one of the most secure objects in an American museum — the likeness taken apart, kept safe at last.
        </p>
      </article>
      <MeanwhileSheet
        accent={BLUE}
        region="Vichy France"
        title="The same man, hit by a second war."
        body="It happened twice. Kahnweiler was Jewish, and when the Second World War came and Nazi-allied Vichy France began seizing Jewish-owned businesses, his gallery was in danger all over again. In 1941 his stepdaughter, Louise Leiris, bought it from him to shield it from confiscation — it became the Galerie Louise Leiris. The man who built Cubism was robbed by one wartime government and nearly robbed by another, twenty-five years apart."
      />
    </>
  )
}

type NarrativeFn = (props: { accent: string; onZoom: (src: string, cap: string) => void }) => React.ReactElement

// A chapter whose prose isn't written yet — graceful placeholder so a partly
// authored work never falls back to another work's text.
const ComingChapter: NarrativeFn = () => (
  <article style={{ padding: '18px 18px 40px' }}>
    <p style={italicStyle}>This chapter is being written.</p>
  </article>
)

// Narratives nested by workId → sectionId, so each artwork has its own chapters.
const NARRATIVES: Record<string, Record<string, NarrativeFn>> = {
  demoiselles: {
    setting: SettingNarrative,
    making: MakingNarrative,
    reception: ReceptionNarrative,
    hidden: HiddenNarrative,
    legacy: LegacyNarrative,
  },
  kahnweiler: {
    dealer: KahDealer,
    analytic: KahAnalytic,
    reading: KahReading,
    sitting: KahSitting,
    seized: KahSeized,
  },
}

// ─────────────────────────────────────────────────────────────
// Reader shell
// ─────────────────────────────────────────────────────────────
export function ArtSectionReader({ workId, sectionId }: { eraId: string; movementId: string; workId: string; sectionId: string }) {
  const w = ART_WORK_CONTENT[workId]
  const idx = w.sections.findIndex(s => s.id === sectionId)
  const section = w.sections[idx]
  const accent = w.accent
  const base = `/art/${w.eraId}/${w.movementId}/${w.id}`

  const [lb, setLb] = useState<{ src: string; cap: string } | null>(null)
  const onZoom = (src: string, cap: string) => setLb({ src, cap })

  const prev = idx > 0 ? w.sections[idx - 1] : null
  const next = idx < w.sections.length - 1 ? w.sections[idx + 1] : null

  // Breadcrumb: take the work crumbs and push this section as the leaf.
  const workCrumbs = artWorkCrumbs(w.eraId, w.era, w.movementId, w.movement, w.id, w.name, w.shortName)
  // Make the (currently active) work crumb a plain ancestor link, then add the leaf.
  const crumbs: Crumb[] = [
    ...workCrumbs.slice(0, -1),
    { ...workCrumbs[workCrumbs.length - 1], active: false, href: base },
    // current-chapter leaf is a dropdown to jump to any other chapter
    {
      label: section.title,
      active: true,
      currentLabel: section.title,
      options: w.sections.map(s => ({ label: s.title, href: `${base}/${s.id}` })),
    },
  ]

  const Narrative = NARRATIVES[workId]?.[section.id] || ComingChapter

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)', ['--accent' as string]: accent }}>
      <WarBreadcrumb crumbs={crumbs} accent={accent} />
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: 'var(--background)', color: 'var(--foreground)' }}>
        <ChapterHeader accent={accent} eyebrow={`${w.shortName} · ${section.eyebrow}`} title={section.title} progress={section.progress} />
        <Narrative accent={accent} onZoom={onZoom} />

        {/* prev / next chapter nav + back to the work */}
        <div style={{ padding: '28px 18px 8px', display: 'flex', gap: 10 }}>
          {prev ? (
            <Link href={`${base}/${prev.id}`} style={{ flex: 1, minWidth: 0, display: 'block', textDecoration: 'none', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 14px', color: INK, background: CARD_BG }}>
              <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.2, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>← Previous</div>
              <div style={{ fontFamily: SERIF, fontSize: 14, fontWeight: 500, marginTop: 3, color: INK, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{prev.title}</div>
            </Link>
          ) : <div style={{ flex: 1 }} />}
          {next ? (
            <Link href={`${base}/${next.id}`} style={{ flex: 1, minWidth: 0, display: 'block', textDecoration: 'none', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 14px', color: INK, background: CARD_BG, textAlign: 'right' }}>
              <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.2, fontWeight: 700, color: artAlpha(accent, 0.95), textTransform: 'uppercase' }}>Next →</div>
              <div style={{ fontFamily: SERIF, fontSize: 14, fontWeight: 500, marginTop: 3, color: INK, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{next.title}</div>
            </Link>
          ) : <div style={{ flex: 1 }} />}
        </div>
        <div style={{ padding: '6px 18px 60px' }}>
          <Link href={base} style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: accent, textDecoration: 'none', display: 'inline-flex', gap: 5 }}>← Back to the work</Link>
        </div>
      </div>

      {/* zoomable lightbox — pinch / double-tap / pan */}
      {lb && <Lightbox src={lb.src} alt={lb.cap} caption={lb.cap} onClose={() => setLb(null)} />}
    </div>
  )
}
