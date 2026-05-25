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
          The canvas had been pinned to the wall since the spring. It was nearly eight feet square — and
          Picasso had been making sketches for it since November. There would
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
          It is just under eight feet square. It is painted in oils on a single piece of linen canvas.
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
        alt="Braque, Violin and Jug"
        caption={<>Braque,{' '}<em>Violin and Jug</em>, 1909–10 — Kunstmuseum Basel. The same brown faceting Picasso was using on Kahnweiler, made the same year.</>}
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

// ─────────────────────────────────────────────────────────────
// Still Life with Chair Caning — the five chapters (the first collage, 1912)
// ─────────────────────────────────────────────────────────────
function CcSetting({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Winter 1912" title="Roped together, out on a ledge" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y the start of 1912, Picasso and Georges Braque (a young French painter who had become his almost-daily collaborator) had spent three years doing one thing with ferocious concentration: taking the visible world apart. Their method was{' '}<em>Analytic Cubism</em>{' '}— breaking an object into small flat{' '}<em>facets</em>, the little angled planes you see on a cut gem, and laying them out from several viewpoints at once, all in a drab fog of browns and greys. They worked so closely they stopped signing the fronts of their canvases; you had to turn a picture over to learn whose it was.
      </p>
      <p style={proseStyle}>
        It was a triumph, and it was a trap. Each picture took the subject a little further apart than the last, and by 1911 the canvases had been faceted almost past reading — a shimmering grey scaffold in which you had to hunt for a moustache or the neck of a bottle to prove there was anything there at all. Set a Braque still life from these years in front of you and you can feel the problem: it is beautiful, and it is nearly illegible.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#7a6a4a', '#3a3326', '#15110a']}
        imageUrl={ART_IMG.braqueViolinJug}
        ratio="3/4"
        alt="Braque, Violin and Pitcher, 1909–10"
        caption={<>Braque,{' '}<em>Violin and Pitcher</em>, 1909–10 — Kunstmuseum Basel. This is the cliff edge: a still life faceted so far that the violin and jug have almost dissolved into pure brown pattern.</>}
        rights={PD_RIGHTS}
      />
      <SectionHeader accent={accent} label="The trap" title="A few more facets and it's wallpaper" />
      <p style={proseStyle}>
        The danger was abstraction — and, oddly, neither man wanted it. A few more facets and the subject would vanish entirely, leaving only a handsome arrangement of greyish shapes: decoration, pattern, wallpaper. Picasso and Braque were not trying to leave the world behind; they were trying to show it more truthfully, from more sides at once. They had climbed out onto a ledge and could feel that one more step in the same direction was a drop.
      </p>
      <SectionHeader accent={accent} label="The real problem" title="The window that had to go" />
      <p style={proseStyle}>
        To see why the next move mattered so much, you have to know what these two were rebelling against. Since the Renaissance had worked out the geometry of{' '}<em>perspective</em>{' '}around 1420, a Western painting had been understood as a{' '}<strong>window</strong>: a flat surface you look{' '}<em>through</em>, faked so skilfully with paint and shadow that you seem to see a real room, a real face, real fruit. The whole game was{' '}<em>illusion</em>{' '}— make paint pretend to be something it isn&rsquo;t.
      </p>
      <p style={proseStyle}>
        Cubism had already smashed that window: no single viewpoint, no convincing depth. But Analytic Cubism had replaced the illusion with something close to abstraction, and that was a dead end too. The question hanging over Picasso&rsquo;s studio in the spring of 1912 was simple and enormous: how do you let the real world back into a picture{' '}<em>without</em>{' '}going back to faking it? The answer, when it came, was not something he painted. It was something he glued.
      </p>
    </article>
  )
}

function CcMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="May 1912" title="The morning he reached for the glue" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        ne day in the spring of 1912 — by most accounts that May — Picasso took a small{' '}<em>oval</em>{' '}canvas and did something that had almost no precedent in serious Western painting. Instead of reaching for a brush, he reached for a strip of{' '}<strong>oilcloth</strong>: cheap, waterproof, factory-printed fabric, the kind people bought by the metre to cover a kitchen table. This particular oilcloth was printed with a pattern of{' '}<em>chair caning</em>{' '}— the woven rattan mesh of a bistro chair seat. He cut a piece off and glued it straight onto the canvas.
      </p>
      <p style={proseStyle}>
        Sit with how strange that is. The caning is not real cane. But it is also not{' '}<em>painted</em>{' '}cane. It is a machine-made, mass-produced{' '}<em>picture</em>{' '}of cane — a factory fake — and Picasso has dropped it, untouched, into the middle of a serious work of art. For five centuries a painter&rsquo;s job had been to imitate the world by hand, with skill. Picasso just bought the imitation at a shop and pasted it down. The most laborious trick in painting, the convincing surface, was suddenly something you could pick up ready-made.
      </p>
      <SectionHeader accent={accent} label="The second object" title="A piece of rope for a frame" />
      <p style={proseStyle}>
        Then he did it again. Around the oval edge of the canvas he glued a length of ordinary{' '}<strong>rope</strong>. It works as a frame — but a frame is supposed to sit{' '}<em>around</em>{' '}a picture, separating the art from the wall; this one is part of the object. And it reads two ways at once. It is the gilt rim of a picture frame, yes — but it is also, unmistakably, the carved wooden edge of a small round café table seen from above. Picasso refuses to tell you which. Is this a picture of a table, or a thing that is a table? Both. Neither.
      </p>
      <SectionHeader accent={accent} label="Why oval" title="Losing the corners" />
      <p style={proseStyle}>
        The oval shape is not a whim. Picasso and Braque had been painting on oval canvases through 1911 and 1912 for a practical reason: the rounded format quietly does away with the four corners, the dead zones where a Cubist composition tends to fall apart, and it echoes the little round pedestal café table — the French call it a{' '}<em>guéridon</em>{' '}— that so many of these still lifes are built on. Here the oval and the rope-as-table-edge work together: the whole picture{' '}<em>is</em>{' '}a tabletop, tipped up to face you.
      </p>
      <p style={proseStyle}>
        And the painted parts? They are still pure Analytic Cubism — the same brown-grey facets, the same splintered light he and Braque had been refining for three years. That is what makes this little canvas a hinge. One half of it is the last gasp of the old faceting; the other half is a glued-on scrap of the real world. The future and the past of Cubism, sharing a single oval about a foot across.
      </p>
    </article>
  )
}

function CcReading({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The picture" title="Look down at the table" first />
      <PaintingFigure
        onZoom={onZoom}
        palette={['#b89055', '#5a4a2a', '#1a1208']}
        imageUrl={ART_IMG.chairCaning}
        ratio="4/3"
        alt="Picasso, Still Life with Chair Caning, 1912"
        caption={<>Picasso,{' '}<em>Still Life with Chair Caning</em>, 1912 — Musée Picasso, Paris. Tap to zoom, then follow along below.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        t first it is a brown jumble, and you may want to give up. Don&rsquo;t — it is a scene, and once it clicks you can&rsquo;t un-see it. You are looking{' '}<em>down</em>{' '}at a small round café table from directly above, the way you&rsquo;d glance at your own table mid-conversation. Start with the patch of woven mesh in the lower left: that is the printed{' '}<strong>chair caning</strong>, standing in for the seat of the chair you would be sitting on. The whole picture is your point of view at the café.
      </p>
      <p style={proseStyle}>
        Now read the tabletop. Those bold black capitals —{' '}<strong>JOU</strong>{' '}— are the corner of a{' '}<em>newspaper</em>: the first three letters of{' '}<em>journal</em>, the French word for a paper (literally &ldquo;daily&rdquo;). Cafés kept the day&rsquo;s papers for customers; here one lies folded on the table. Readers have long enjoyed the side-joke that{' '}<em>jou</em>{' '}also opens{' '}<em>jouer</em>, &ldquo;to play&rdquo; — a fair wink, given how much of this picture is a game, though it&rsquo;s the newspaper that&rsquo;s literally on the table.
      </p>
      <p style={proseStyle}>
        Around the JOU, the rest of the meal assembles itself out of the grey facets: the bowl and stem of a{' '}<strong>wineglass</strong>, the curve of a{' '}<strong>pipe</strong>, the blade of a{' '}<strong>knife</strong>, a wedge of{' '}<strong>lemon</strong>, the fluted shell of a{' '}<strong>scallop</strong>. It is the debris of an apéritif (a pre-lunch café drink) and a light meal — the most ordinary half-hour in Paris, rendered in the most advanced painting in Europe.
      </p>
      <SectionHeader accent={accent} label="The point" title="The fake that tells the truth" />
      <p style={proseStyle}>
        Here is the move that makes the picture famous. Everything painted on this table is an{' '}<em>illusion</em>: hand-made fakery, paint pretending to be a glass or a lemon. The caning is the opposite — it is a{' '}<em>real</em>{' '}thing, an actual manufactured object stuck to the canvas. Except that the real thing is{' '}<em>itself</em>{' '}a fake: a printed picture of cane, not cane. It is as if, to explain what money is, you hung a flawless painting of a banknote beside a real banknote — and the real one turned out to be a film prop. Picasso has stacked illusion on illusion on reality in one small oval: hand-painted fakes, beside a real object, that is a machine-made fake. The picture is a little essay on the difference between a thing and a picture of a thing, and it pointedly refuses to settle the question.
      </p>
      <p style={proseStyle}>
        The Met&rsquo;s own catalogue puts the whole revolution in a phrase: Picasso had found a way of{' '}<em>inserting a fragment of reality into the fictive realm of painting</em>{' '}— a scrap of the actual world, glued into the make-believe.
      </p>
    </article>
  )
}

function CcBreak({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break" title="The window finally breaks for good" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tep back from the little oval and measure what just happened. For roughly five hundred years, a Western picture had been an illusion — paint working overtime to convince you it was grapes, or velvet, or a human face. Even Cubism, for all its smashing, had still been{' '}<em>paint pretending to be something</em>. The instant Picasso glued a real object onto the canvas, painting was let off that five-hundred-year hook. The thing itself could simply be{' '}<em>there</em>. It no longer had to be faked.
      </p>
      <p style={proseStyle}>
        That move has a name now:{' '}<strong>collage</strong>, from the French{' '}<em>coller</em>, &ldquo;to glue&rdquo; — art made by sticking real materials onto a surface. It sounds modest. It was not. It quietly retired one of the deepest assumptions of European painting, the one even the rebels had kept: that a picture&rsquo;s job is to imitate.
      </p>
      <SectionHeader accent={accent} label="Braque, that September" title="The next step, in pasted paper" />
      <p style={proseStyle}>
        Picasso did not do this alone, and the story is usually told as if he did. Four months later, that September, Braque — still roped to him — took the idea one step further. He bought a roll of wallpaper printed to look like oak panelling, cut it into strips, and pasted them into a charcoal drawing of a fruit dish and a glass. That was the first{' '}<em>papier collé</em>{' '}(&ldquo;pasted paper&rdquo;): collage made of paper alone.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#9a8458', '#4a3f28', '#15110a']}
        imageUrl={ART_IMG.braqueFruitDish}
        ratio="3/4"
        alt="Braque, Fruit Dish and Glass, 1912"
        caption={<>Braque,{' '}<em>Fruit Dish and Glass</em>, September 1912 — the first{' '}<em>papier collé</em>. The wood-grain panels are strips of printed wallpaper, glued onto a charcoal drawing.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        The two inventions are cousins, and it is worth keeping them apart. Picasso&rsquo;s{' '}<em>collage</em>{' '}smuggles a foreign{' '}<em>material</em>{' '}into the picture — oilcloth, rope, anything. Braque&rsquo;s{' '}<em>papier collé</em>{' '}stays within one humble medium, paper. Between the two of them, in a single summer, they had opened a door, and everything came through it: within a year their canvases were sprouting scraps of newspaper, sheet music, cigarette wrappers and bottle labels.
      </p>
      <p style={proseStyle}>
        Even the order of credit is argued over. A few scholars — and Braque himself, in later life — held that he had been gluing imitation-wood paper into his drawings before Picasso glued anything, which would shrink Picasso&rsquo;s prize to the first collage in a{' '}<em>painting</em>{' '}rather than the first collage at all. The textbooks still mostly hand the crown to this little oval; it is worth knowing the crown is contested, and that two people are wearing it.
      </p>
      <p style={proseStyle}>
        It is also fair to add an asterisk to the word{' '}<em>first</em>{' '}itself. People had glued paper into devotional pictures, valentines and scrapbooks for centuries; collage as a craft is old. What was new in 1912 was collage as a deliberate, serious move inside the{' '}<em>avant-garde</em>{' '}— the small leading edge of artists pushing hardest against the rules. Picasso did not invent gluing. He made gluing a way of thinking.
      </p>
      <SectionHeader accent={accent} label="The bigger shock" title="The supermarket walks into the museum" />
      <p style={proseStyle}>
        The deepest break here is not technical, it is social. For centuries high art had guarded its noble materials — oil, marble, bronze, gold leaf — like a private club. Now a factory tablecloth, a roll of wallpaper, yesterday&rsquo;s newspaper, the cheapest mass-produced stuff in the city, walked straight into the most ambitious painting in Europe and put its feet up. The throwaway world of shops and advertising had been let in, and it never left.
      </p>
    </article>
  )
}

function CcAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="The object" title="Smaller than you think" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>T</DropCap>
          he first surprise, if you ever meet it in person, is the size. Reproductions make it loom like a monument; the actual thing is about{' '}<strong>a foot by a foot and a half</strong>{' '}— no bigger than a placemat, which, given the subject, feels about right. One of the most consequential objects in modern art is small enough to hold on your lap. The second surprise is that Picasso never sold it. He kept the breakthrough in his personal collection for the rest of his life — sixty-one years — the way you might keep the first banknote a business ever took.
        </p>
        <SectionHeader accent={accent} label="The descendants" title="From a glued scrap to half a century" />
        <p style={proseStyle}>
          What he had started ran straight through the century — and it began by turning Cubism inside out. Gluing a flat, ready-made shape onto the canvas taught Picasso and Braque a new lesson: a picture could be{' '}<em>built up</em>{' '}from flat pieces, instead of a real object being{' '}<em>broken down</em>{' '}into facets. That reversal became{' '}<em>Synthetic Cubism</em>{' '}— the brighter, assembled second phase of the movement, the mirror image of the grey, shattered-gem look of the Analytic years. Then the door swung wide. The German artist{' '}<strong>Kurt Schwitters</strong>{' '}(1887–1948), a few years later, built whole pictures — and eventually entire rooms — out of tram tickets, bus stubs and gutter trash, a one-man movement he named{' '}<em>Merz</em>{' '}(a nonsense syllable he had snipped from an advert for a bank,{' '}<em>Kommerz</em>).
        </p>
        <p style={proseStyle}>
          The Berlin Dadaists — a deliberately absurd, anti-art movement born of disgust at the First World War — turned scissors and magazines into political weapons.{' '}<strong>Hannah Höch</strong>, too often dropped from this story, was one of the sharpest of them, slicing the illustrated press into biting{' '}<em>photomontage</em>{' '}(pictures collaged from cut-up photographs). Decades on, the American artist{' '}<strong>Robert Rauschenberg</strong>, working in 1950s New York, fixed quilts, tyres, even a stuffed goat to his work and called the results{' '}<em>Combines</em>. And Pop Art — the movement that hung soup cans and comic strips on gallery walls — simply moved in for good: the supermarket Picasso had let through the door in 1912 took over the house. Every time an artist since has glued, taped, screwed or bolted a real object to a picture, they have been speaking the grammar this little oval invented.
        </p>
        <SectionHeader accent={accent} label="Where it lives" title="A salt-tax mansion in Paris" />
        <p style={proseStyle}>
          When Picasso died in 1973 he left no will and an enormous hoard of work he had refused to part with. Under a French law that lets heirs settle inheritance tax in artworks rather than cash — the{' '}<em>dation</em>{' '}— much of that hoard passed to the nation, and it became the{' '}<strong>Musée Picasso</strong>, opened in 1985 in the Hôtel Salé, a grand 17th-century mansion built, fittingly, on a fortune made from the salt tax. The little oval hangs there now, behind glass, still wearing its piece of rope.
        </p>
        <p style={proseStyle}>
          Visitors come expecting a monument and find a place setting the size of a napkin. Which may be the joke Picasso would have liked best: the picture that ended painting-as-illusion turns out to be a small, perfect illusion of a table — one you could almost pull up a chair to, if the chair weren&rsquo;t printed on a piece of cloth.
        </p>
      </article>

      <MeanwhileSheet
        accent={AMBER}
        region="Detroit"
        when="1913 · one year later"
        title="The same cheap world, on a moving belt."
        body="The mass-produced stuff Picasso was gluing into art — printed cloth, machine-made goods — was about to remake daily life. In 1913 Henry Ford installed the first moving assembly line, and the throwaway consumer world that Cubism let into the museum began rolling off it by the million."
        palette={['#6b6b6b', '#3a3a3a', '#1c1c1c']}
        ctaLabel="Read 'The Assembly Line'"
      />
    </>
  )
}

// ─────────────────────────────────────────────────────────────
// Houses on the Hill, Horta de Ebro — the five chapters (the Cubist summer, 1909)
// ─────────────────────────────────────────────────────────────
function HoSetting({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Summer 1909" title="Get out of Paris" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y the spring of 1909 Picasso was, by his own account, worn out. He was 27, newly able to sell his work but not yet rich, and stuck: the savage breakthrough of his{' '}<em>Les Demoiselles d&rsquo;Avignon</em>{' '}two years earlier had blown a hole in painting — it had repelled even his closest allies, and the two years since had been a restless, unresolved search for what to build in the gap it left. So he did what he often did when a problem would not move: he left the city. With his partner{' '}<strong>Fernande Olivier</strong>{' '}(his companion through these Montmartre years) he travelled south, across the Pyrenees, to a remote village in Catalonia called{' '}<strong>Horta de Ebro</strong>{' '}(today Horta de Sant Joan).
      </p>
      <p style={proseStyle}>
        He knew the place. It was the home town of{' '}<strong>Manuel Pallarès</strong>, his oldest friend, a fellow painter who had taken the teenage Picasso there in 1898 to recover from a bout of scarlet fever. Picasso always said those months in the Catalan hills had made him — &ldquo;everything I know, I learned in Pallarès&rsquo;s village,&rdquo; he liked to claim. Now he came back as a man with a problem to solve, and the village handed him the answer almost by accident.
      </p>
      <SectionHeader accent={accent} label="The lesson in his head" title="Cézanne, and a box of shapes" />
      <p style={proseStyle}>
        He arrived carrying an idea he could not stop turning over. Paul Cézanne — the older painter whose memorial shows had hit every artist in Paris when he died in 1906 — had written, in a letter that young painters now passed around like scripture, that one should treat nature in terms of{' '}<em>the cylinder, the sphere and the cone</em>: build a picture out of simple solid shapes rather than copying surfaces. It was a recipe for{' '}<em>structure</em>, for making a painted thing feel weighty and built. Picasso had been chewing on it for two years.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#5a7042', '#8a7848', '#1c1a12']}
        imageUrl={ART_IMG.cezanneBathers}
        ratio="6/5"
        alt="Cézanne, The Large Bathers"
        caption={<>Cézanne,{' '}<em>The Large Bathers</em>, 1898–1905 — Philadelphia Museum of Art. The lesson Picasso carried to Spain: build the picture from solid, faceted blocks.</>}
        rights="Public domain worldwide (Paul Cézanne died 1906). Wikimedia Commons."
      />
      <p style={proseStyle}>
        And here was Horta: a dry, sun-bleached hill town of bare ochre stone, its flat-roofed houses stacked up the slope in hard-edged terraces — already, in real life, a heap of plain geometric blocks. A village that looked like a Cézanne theory made of masonry. Picasso took one look and, in effect, stopped inventing and started copying — except that what he copied was the underlying geometry, not the postcard. The laboratory had built itself.
      </p>
    </article>
  )
}

function HoMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="June – September 1909" title="The whole village, as blocks" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        ver that summer Picasso painted Horta over and over — the houses on the hill, the village reservoir, the factory on the edge of town — running the same geometric method across deliberately different subjects, as if to prove it could crack anything, not just a picturesque cluster of roofs. The method was consistent and ruthless. He took the houses and pared them down to their bare solid geometry: cubes, wedges, prisms. He tilted the planes so a wall and a roof you could never see at the same time are shown to you together. He drained the colour back to dusty ochres, greys and greens, so nothing pretty distracts from the structure.
      </p>
      <p style={proseStyle}>
        Most radically, he flattened the distance. In an ordinary landscape the far hills recede into haze; here Picasso pulls the background mountain up flat against the houses and breaks it into the same facets, so the whole canvas presses toward you at once. The village and the hillside are made of one continuous geometry. It is recognisably a place — and it is also a stack of painted blocks, refusing to settle into a comfortable view.
      </p>
      <SectionHeader accent={accent} label="The photographs" title="'Look — the cubes are really there'" />
      <p style={proseStyle}>
        Here is the detail everyone remembers. While he was in Horta, Picasso took{' '}<em>photographs</em>{' '}of the actual village — and when he got back to Paris he showed them around — not least to the American writer and collector{' '}<strong>Gertrude Stein</strong>, an early buyer and fierce champion of his work when almost no one else would touch it — as if to say: I did not invent this. Stein later wrote that the photographs looked startlingly like the paintings, and even singled out one of the Horta canvases as the first true Cubist picture; the real houses really did pile up into blocks. Whether Picasso meant the photographs as proof or as a sly joke (a Cubist painting and a snapshot of Spain, side by side, both made of cubes) is part of the fun. Either way it makes the point that early Cubism grew out of{' '}<em>looking hard at the world</em>, not turning away from it.
      </p>
      <p style={proseStyle}>
        He came home at the end of the summer with a suite of canvases and, in them, a working method. The shock of 1907 had become a technique anyone could see being applied.
      </p>
    </article>
  )
}

function HoReading({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The picture" title="Climb the hill" first />
      <PaintingFigure
        onZoom={onZoom}
        palette={['#a08a4a', '#5a4a1c', '#1a1a14']}
        imageUrl={ART_IMG.picassoHorta}
        ratio="5/4"
        alt="Picasso, Houses on the Hill, Horta de Ebro, 1909"
        caption={<>Picasso,{' '}<em>Houses on the Hill, Horta de Ebro</em>, 1909 — Museum Berggruen, Berlin. Tap to zoom, then follow along below.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        t reads as a jumble of brown boxes until you realise you are looking up a hillside at a village. Start low and climb. The big pale shapes filling the foreground are{' '}<strong>houses</strong> — each one reduced to a few flat planes, a wall here, a tilted roof there, meeting at edges that don&rsquo;t quite obey real space. They stack and overlap up the slope, so you read the climb of the land without any of the usual tricks of distance.
      </p>
      <p style={proseStyle}>
        Keep going up and the{' '}<strong>hillside</strong>{' '}behind the village is broken into the very same facets as the buildings — so the mountain and the houses rhyme, made of one geometry. There is no soft, hazy background; Picasso has pulled the far hill flat against the near houses so the whole picture stands up toward you like a wall. Notice, too, the light: each plane seems lit from its own direction, which is why the blocks feel solid and flat at the same time. You can&rsquo;t find the sun, because there isn&rsquo;t one.
      </p>
      <p style={proseStyle}>
        Then look to the left edge for the one thing that breaks the spell: a soft clump of{' '}<strong>green</strong>, a tree, almost the only curve and almost the only living colour in the whole baked, angular scene. Picasso leaves it deliberately loose — a single organic breath in a town made of geometry. Find it and the picture suddenly reads as a real, hot, dry place you could walk into, if the streets weren&rsquo;t made of cubes.
      </p>
    </article>
  )
}

function HoBreakthrough({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="1909–1910" title="The summer it became a movement" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>T</DropCap>
          he Demoiselles had been a bomb — shocking, jagged, a one-off scandal that even Picasso&rsquo;s friends recoiled from. What it was{' '}<em>not</em>{' '}was a method anybody could follow. The Horta paintings are the opposite: calm, systematic, repeatable. This is the summer the shock of 1907 hardens into a{' '}<em>technique</em> — the faceting of solid form that art historians call{' '}<em>Analytic Cubism</em>{' '}(the patient breaking-down of objects into planes seen from several angles at once). If the Demoiselles kicked the door open, Horta is where Picasso walked through it and found he could keep going — and he was not the only one walking through. Georges Braque, that same year, was arriving at almost exactly the same place from the other direction, breaking the houses of the southern French village of L&rsquo;Estaque into the same blunt cubes.
        </p>
        <p style={proseStyle}>
          That convergence is what made it a movement rather than a quirk. Within a year the two of them were &ldquo;roped together&rdquo; (as Braque put it) in Paris, faceting everything in sight — portraits, still lifes, the dealer Kahnweiler — in exactly the language they had hammered out, Picasso on a Catalan hillside and Braque in the south. Horta is the launch pad. The same ochre cubes you just climbed in this picture are the cubes that, three years on, would dissolve into the near-abstract shimmer of high Analytic Cubism (the style at its most extreme, the world almost faceted away to pattern).
        </p>
        <p style={proseStyle}>
          There is a tidy irony in it, too. The most cosmopolitan revolution in modern art — the thing that would be argued over in Paris cafés and New York galleries — was worked out in a village with no railway, by a man who said he&rsquo;d learned everything he knew there as a sick teenager. Cubism&rsquo;s grammar was, in a real sense, Spanish before it was Parisian.
        </p>
      </article>

      <MeanwhileSheet
        accent={BLUE}
        region="Vienna"
        when="1908–1909 · the same years"
        title="Music throws away its home key."
        body="While Picasso was repealing single-viewpoint perspective, in Vienna the composer Arnold Schoenberg was abandoning the 'home key' that had anchored Western music for centuries — writing the first fully atonal pieces. Two arts, in the same few years, kicked away the one fixed point each had leaned on."
        palette={['#3a4a8b', '#1c1c1c', '#d6cf3f']}
        ctaLabel="Read 'Atonal music'"
      />
    </>
  )
}

function HoAfterlife({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The long afterlife" title="A trophy, and a scandal" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or a painting about a sleepy village, the Horta has led a dramatic life. It made its way, in time, into one of the greatest private collections in America — that of{' '}<strong>Nelson Rockefeller</strong>, the financier and future US vice-president — and on his death in 1979 it was bequeathed to the{' '}<strong>Museum of Modern Art</strong>{' '}in New York, where for decades it hung as a landmark of early Cubism.
      </p>
      <p style={proseStyle}>
        And then, in 2003, MoMA{' '}<em>sold</em>{' '}it. Museums do this — they call it{' '}<em>deaccessioning</em>, quietly selling one work to buy others — but selling a Cubist cornerstone bequeathed by a Rockefeller struck a number of critics as something close to vandalism — Picasso&rsquo;s own great biographer, John Richardson, was loudly among the appalled. The painting went, reportedly for $12–15 million and through a New York dealer, to the Berlin-born collector{' '}<strong>Heinz Berggruen</strong>, a man who had spent a lifetime buying Picasso.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#3a4a8b', '#7a6a3a', '#0e1224']}
        imageUrl={ART_IMG.momaFacade}
        ratio="5/3"
        alt="The Museum of Modern Art, New York"
        caption={<>MoMA held the Horta for over twenty years before deaccessioning it in 2003 — a sale some critics never forgave.</>}
        rights="Photograph CC BY-SA 4.0 via Wikimedia Commons."
      />
      <SectionHeader accent={accent} label="Settled at last" title="Where it lives now" />
      <p style={proseStyle}>
        So the picture ended up in Berlin, at the{' '}<strong>Museum Berggruen</strong>, which calls it one of the most significant works it owns. Stand in front of it there and you see what the Rockefellers and the Berggruens paid fortunes for: a hot ochre hillside of stacked cubes, one stubborn green tree, and no real sky at all. There is a neat symmetry in the journey: a painting made in the poorest corner of Picasso&rsquo;s Spain, fought over by the richest museums of the next century, and finally settled in a German palace of modern art. The houses on the hill never moved. Everything around them — money, fame, the whole apparatus of the twentieth-century art world — was built on top of summers like this one.
      </p>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────
// Violin and Jug (Braque, 1909–10) — the five chapters
// ─────────────────────────────────────────────────────────────
function VjSetting({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1909–1910" title="The other half of Cubism" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>E</DropCap>
        veryone remembers Picasso. But Cubism took two people, and the other one matters just as much.{' '}<strong>Georges Braque</strong>{' '}was a Frenchman from near Le Havre on the Normandy coast, the son of a house-painter and decorator — a trade he was apprenticed to before he turned to fine art. That ordinary detail will matter later: Braque was trained to imitate wood grain and marble on plaster, the honest tricks of a decorator, and he never forgot them.
      </p>
      <p style={proseStyle}>
        He had first made his name as a{' '}<em>Fauve</em>{' '}— one of the &ldquo;wild beasts,&rdquo; a short-lived movement of painters whom critics mocked, around 1905, for their raw, deliberately unnatural colour. Then in 1907 he saw the Demoiselles in Picasso&rsquo;s studio, was appalled and gripped in equal measure, and within a couple of years had thrown the colour overboard and joined Picasso in the most demanding experiment in modern art. If Picasso was the showman with the wild ideas, Braque was the patient builder who turned them into a coherent style.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#7a6a4a', '#3a3020', '#100c08']}
        imageUrl={ART_IMG.braqueEstaque}
        ratio="4/5"
        alt="Braque, Houses at l'Estaque, 1908"
        caption={<>Braque,{' '}<em>Houses at l&rsquo;Estaque</em>, 1908. A critic sneered that Braque had reduced everything to &ldquo;little cubes&rdquo; — and the insult became the name of the movement.</>}
        rights={PD_RIGHTS}
      />
      <SectionHeader accent={accent} label="Roped together" title="Two studios, one experiment" />
      <p style={proseStyle}>
        Through 1909 and 1910 Picasso and Braque lived near each other on the Montmartre hill in Paris and visited almost daily, checking each other&rsquo;s canvases and pushing the same problem one step further each time. &ldquo;It was like being roped together on a mountain,&rdquo; Braque said later. They worked so closely that, for a while, they stopped signing the fronts of their pictures — and scholars still argue over who painted what.{' '}<em>Violin and Jug</em>{' '}is Braque at the very top of that climb.
      </p>
    </article>
  )
}

function VjMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Winter 1909–10" title="Taking a violin apart" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        ver the winter of 1909 into 1910, in his Paris studio, Braque painted a violin and a jug. That is the whole subject — two ordinary things on a table. What he did to them is the point. He shattered each object into dozens of small flat{' '}<em>facets</em>, the little angled planes you see on a cut gem, and laid those planes out as if you were circling the table and seeing the violin from several sides at once. This is{' '}<em>Analytic Cubism</em>{' '}at full strength: the patient analysis of a thing into all its views, reassembled on a flat canvas.
      </p>
      <p style={proseStyle}>
        He drained almost all the colour out of it. The whole picture is a fog of browns, greys and soft ochres — deliberately drab, because colour would only be a distraction. With nothing pretty to look at, your eye is forced onto the only thing left: the structure, the shimmer of planes sliding over and into one another. Braque even lets the facets{' '}<em>bleed</em>{' '}— an edge that should belong to the violin opens and leaks into the background, so object and air are built from the same broken light. (Painters have a name for this trick of letting one plane flow into the next: they call it{' '}<em>passage</em>.)
      </p>
      <SectionHeader accent={accent} label="Why a violin" title="Something you can almost still see" />
      <p style={proseStyle}>
        The choice of subject is not random. Musical instruments turn up again and again in Cubism, and for good reasons: a violin has strong, familiar curves you can still half-recognise even after it has been smashed into planes, which keeps the picture from tipping into pure abstraction. And Braque{' '}<em>loved</em>{' '}music — he played instruments in the studio. A violin let him work right at the edge of legibility: faceted almost past recognition, but never quite. Look long enough and the instrument keeps surfacing and dissolving — the curled scroll, then an f-hole, then nothing — like a word on the tip of your tongue.
      </p>
    </article>
  )
}

function VjReading({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The picture" title="Start at the nail" first />
      <PaintingFigure
        onZoom={onZoom}
        palette={['#8a8478', '#4a463c', '#15110a']}
        imageUrl={ART_IMG.braqueViolinJug}
        ratio="3/4"
        alt="Braque, Violin and Jug, 1909–10"
        caption={<>Braque,{' '}<em>Violin and Jug</em>, 1909–10 — Kunstmuseum Basel. Tap to zoom, then follow along below.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        t looks, at first, like a grey avalanche — and the way in is a single odd detail at the very top. Look up there and you will find a{' '}<strong>nail</strong>, painted with old-fashioned, photographic realism, casting a small neat shadow, as if it were hammered into the wall to hang the picture from. After the shock of that one solid, real-looking thing, let your eye fall.
      </p>
      <p style={proseStyle}>
        Down in the centre and lower half, the{' '}<strong>violin</strong>{' '}assembles itself out of the rubble: the little curled{' '}<em>scroll</em>{' '}(the carved spiral at the top of the neck) near the middle, a few taut{' '}<em>strings</em>, and below them the unmistakable rounded body with its two{' '}<em>f-holes</em>{' '}— the f-shaped slots cut into a violin&rsquo;s top. Up to the left, a paler cluster of planes with a rounded lip is the{' '}<strong>jug</strong>. Neither object holds still; each one swims into focus and then breaks apart again as your eye moves.
      </p>
      <p style={proseStyle}>
        That is the whole experience Braque is after. He builds the violin and the jug right at the brink of legibility — solid enough that you can find them, broken enough that you never quite hold them — and then pins the entire shifting field to the wall with one perfectly real nail. Which raises the obvious question: why, in one of the most radical paintings of its day, paint one flawless illusion?
      </p>
    </article>
  )
}

function VjNail({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The point" title="The joke that holds it up" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he nail is the most talked-about detail in early Cubism, and it is doing several jobs at once. The first is simple kindness to the viewer. Surrounded by a faceted fog where nothing sits at a fixed distance, the eye is desperate for one secure thing — and the nail, with its honest shadow, is a{' '}<em>foothold</em>: a single point of ordinary, believable space to stand on before you wade into the rest.
      </p>
      <p style={proseStyle}>
        The second is wit. Braque has dropped a piece of old-fashioned{' '}<em>trompe-l&rsquo;œil</em>{' '}(French for &ldquo;fool the eye&rdquo; — painting so realistic it tricks you into reaching for it) into one of the most anti-illusionistic paintings the Cubists had yet made. It is a quiet joke at his own expense, and a flick at the centuries of illusion-painting Cubism was tearing up: you want a convincing illusion? Here is one nail&rsquo;s worth. Remember, too, that Braque was a decorator&rsquo;s son, trained to fake wood and marble — the painted nail is the tradesman&rsquo;s old trick, smuggled into the{' '}<em>avant-garde</em>{' '}(the small leading edge of artists making the most radical new work). He liked the joke enough to repeat it: a painted nail had already turned up the year before, in his{' '}<em>Violin and Palette</em>{' '}(now in New York), so this is a deliberate signature, not a one-off whim.
      </p>
      <SectionHeader accent={accent} label="The deeper move" title="A door about to open" />
      <p style={proseStyle}>
        The nail also makes you notice that the picture is a flat object hanging on a wall — not a window into a room, but a{' '}<em>thing</em>, with a nail at the top, like any framed board. That is a thought with a future. Within two years Picasso and Braque would stop{' '}<em>painting</em>{' '}imitations of reality and start gluing{' '}<em>real</em>{' '}things onto their canvases — oilcloth, newspaper, rope — inventing{' '}<em>collage</em>{' '}(art made by gluing real materials straight onto the surface). Braque&rsquo;s painted nail is the hinge: the last and cleverest illusion, made by two painters who were about to decide that the real thing was more interesting than the fake.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#b89055', '#5a4a2a', '#1a1208']}
        imageUrl={ART_IMG.chairCaning}
        ratio="4/3"
        alt="Picasso, Still Life with Chair Caning, 1912"
        caption={<>Two years later: Picasso&rsquo;s{' '}<em>Still Life with Chair Caning</em>, 1912. Braque&rsquo;s painted-on nail gives way to a real scrap of oilcloth, glued down. The illusion becomes the thing itself.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        The art historian William Rubin, for decades MoMA&rsquo;s authority on Cubism, thought this canvas the moment Braque came fully into his own — &ldquo;stunning and magisterial,&rdquo; he called it. The nail is why.
      </p>
    </article>
  )
}

function VjAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="The afterlife" title="The banker who bought Cubism" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>W</DropCap>
          hy does the textbook example of Analytic Cubism hang in{' '}<strong>Basel</strong>, a quiet Swiss city on the Rhine, rather than Paris or New York? Because of one man.{' '}<strong>Raoul La Roche</strong>{' '}was a Basel-born banker working in Paris and a friend of the architect Le Corbusier, and in the years after the First World War he did the unfashionable thing: he bought Cubism, in bulk, when most collectors still thought it was a joke or a fraud.
        </p>
        <p style={proseStyle}>
          La Roche assembled one of the great early collections of Picasso and Braque — and then, in 1952, he gave the bulk of it to the public museum of his home city, the{' '}<strong>Kunstmuseum Basel</strong>. At a stroke a mid-sized Swiss museum became one of the world&rsquo;s strongholds of Cubist painting, which is why a pilgrim wanting to see{' '}<em>Violin and Jug</em>{' '}in the flesh buys a ticket to Basel.
        </p>
        <p style={proseStyle}>
          It is a fitting home for a quiet masterpiece by the quieter of the two founders. Picasso got the fame, the scandals and the headlines; Braque got the deep respect of fellow painters and a slower-burning fame of his own. And this canvas — drab, patient, fiendishly built, the violin half-dissolved in its grey planes beneath that one perfect nail — is the one that other painters point to when they want to show what Analytic Cubism, at its absolute best, could do.
        </p>
      </article>

      <MeanwhileSheet
        accent={BLUE}
        region="Munich"
        when="1910–1911 · just after"
        title="A Russian drops the subject entirely."
        body="Braque kept one real nail to hold his picture to the world. In Munich, the Russian painter Wassily Kandinsky was about to take the opposite road — letting the subject fall away completely into the first fully abstract paintings. Cubism kept a toehold in reality; abstraction let go."
        palette={['#1d4ed8', '#d6cf3f', '#bf2f25']}
        ctaLabel="Read 'Abstract art'"
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
  'chair-caning': {
    setting: CcSetting,
    making: CcMaking,
    reading: CcReading,
    break: CcBreak,
    afterlife: CcAfterlife,
  },
  horta: {
    setting: HoSetting,
    making: HoMaking,
    reading: HoReading,
    breakthrough: HoBreakthrough,
    afterlife: HoAfterlife,
  },
  'violin-jug': {
    setting: VjSetting,
    making: VjMaking,
    reading: VjReading,
    nail: VjNail,
    afterlife: VjAfterlife,
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
