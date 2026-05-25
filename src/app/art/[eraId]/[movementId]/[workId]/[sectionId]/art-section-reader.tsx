'use client'

// Art Section reader — the five sibling narrative chapters for Les Demoiselles
// d'Avignon, ported VERBATIM from the mockup (art-section.jsx). Reuses the
// drilldown breadcrumb (no toggle in the reader). Each chapter: ChapterHeader
// (eyebrow + h1 + progress bar) · LineageStrip (↑From / ↓To chips) · drop-capped
// house-voice prose with subsection headers + inline figures + pull quotes ·
// a "Meanwhile in…" cross-link sheet · prev/next chapter nav.
//
// Inline figures honor the rights subsystem (audits/art-vertical.md §5,
// samples/art-reader-picasso.html): Demoiselles is pre-1931 / PD-US, so its
// figures render FULL inline with a Rights line. A post-1930 / in-copyright work
// (e.g. Guernica) renders the DEGRADED reference card instead.

import { useState } from 'react'
import { useScrollMemory } from '@/lib/use-scroll-memory'
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
// out of sync (top accent border, color swatch, dead CTA), so it was removed.

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
          The colors did not blend, they butted. The brushstrokes were visible blocks. You could see
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
          Its colors are the reds and pinks of flesh, the deep blues of drapery, the rust of earth.
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
          unmodulated color, who was thirteen years older than Picasso and his only real rival. He
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
          In July 1916, during the Battle of the Somme, the poet André Salmon organized a small
          exhibition at the Salon d&rsquo;Antin, on the boulevard d&rsquo;Antin in Paris. Picasso lent
          a single picture. It was the rolled-up canvas from 1907. Salmon, who had to invent a title
          on the spot to print in the catalog, called it{' '}<em>Les Demoiselles d&rsquo;Avignon</em>{' '}—
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
        alk into 28 rue Vignon, a side street near the Madeleine church in Paris, in 1907, and you would find a room about four meters square — roughly a single bedroom — with almost nothing on the walls. The man behind the counter was{' '}<strong>Daniel-Henry Kahnweiler</strong>: 23 years old, German, born in Mannheim into a banking family that had shipped him off to Paris and London to learn the money trade. He had learned it well enough to know what he wanted to do instead. With a small loan of family money he had rented this closet of a shop, and he intended to sell the most unsellable pictures in Europe.
      </p>
      <p style={proseStyle}>
        Within a couple of years he had quietly signed up the wildest young painters in Paris: Pablo Picasso; Georges Braque; and two of the{' '}<em>Fauves</em>{' '}— the &ldquo;wild beasts,&rdquo; a movement of painters who slapped down raw, unmixed color — namely André Derain and Maurice de Vlaminck. Soon a young Spaniard named Juan Gris joined them. Kahnweiler bought their canvases when nobody else would, back when the only people who admired this work were the handful of people making it. On the side he also dealt in African and Oceanic carvings — the same kind of objects that had just rewired Picasso&rsquo;s eye.
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
        What they invented in those rope-together years is called{' '}<em>Analytic Cubism</em>{' '}(roughly 1909–1911). The idea: take an object — a violin, a bottle, a head — and shatter it into small flat{' '}<em>facets</em>, the little angled planes you see on the cut surface of a gem, then lay those facets out on the canvas as if you were seeing the thing from several sides at the same moment. And do all this in a deliberately drab, near-colourless range of browns, grays and{' '}<em>ochres</em>{' '}(the dull yellow-brown of dried clay). The color is drained out{' '}<em>on purpose</em>: with nothing pretty to look at, your eye is forced onto the only thing left — the structure.
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
        t first glance it is a gray-brown avalanche of broken planes, and it is tempting to give up. Don&rsquo;t — there is a man in here, and finding him is the whole pleasure. Start at the very top. That patch of fine diagonal hatching, almost like wood grain, is{' '}<strong>hair</strong>: wavy, carefully combed, parted on one side. It is the easiest foothold, so plant your feet there first.
      </p>
      <p style={proseStyle}>
        Drop down a little and a face assembles itself out of the rubble — two dark almond{' '}<strong>eyes</strong>, the ridge of a{' '}<strong>nose</strong>, the line of a brow. Below them, a thin dark{' '}<strong>mustache</strong>{' '}sits over the mouth. Keep going down the center and you reach the throat, where Picasso has left two of the clearest clues in the whole painting: the neat triangle of a{' '}<strong>tie knot</strong>, and, swagging across the waistcoat, the little chain of a{' '}<strong>pocket watch</strong>. Those two ordinary gentleman&rsquo;s details are the painting telling you, quietly, that this scaffold is a person, dressed for business.
      </p>
      <p style={proseStyle}>
        Now the bottom. A cluster of pale interlocking blocks resolves into a pair of{' '}<strong>clasped hands</strong>, folded in his lap. And off to the{' '}<em>lower left of the canvas</em>{' '}— which is the sitter&rsquo;s{' '}<em>right</em>{' '}side, since he faces you — sit the shards of a small{' '}<strong>still life</strong>: a bottle, and most likely a glass beside it. So Picasso pins the figure down top and bottom — hair up here, hands down there, watch chain anchoring the middle — and lets everything between explode into facets.
      </p>
      <SectionHeader accent={accent} label="The point" title="Why it stops short" />
      <p style={proseStyle}>
        Here is the thing people miss: this is{' '}<em>not</em>{' '}abstract art. Picasso could have dissolved Kahnweiler into pure pattern and walked away — and he chose not to. Analytic Cubism deliberately keeps a tether to the real world: just enough hair, eye, mustache, tie, watch chain and bottle that a patient viewer can climb back to a man. The painting&rsquo;s whole charge lives in that tension — a face on the knife-edge of vanishing, held back from the drop by five or six clues a stubborn eye can still find.
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
        Because that is the joke at the center of the whole thing: the longer Kahnweiler sat, the{' '}<em>less</em>{' '}the canvas looked like him. Most portrait painters work toward likeness — each sitting sharpens the nose, fixes the mouth, narrows the gap between paint and person. Picasso ran the engine in reverse. Each sitting he took the face further apart, prying the man into the flat planes of Analytic Cubism, trading the resemblance for structure. More looking, less likeness.
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
        y the start of 1912, Picasso and Georges Braque (a young French painter who had become his almost-daily collaborator) had spent three years doing one thing with ferocious concentration: taking the visible world apart. Their method was{' '}<em>Analytic Cubism</em>{' '}— breaking an object into small flat{' '}<em>facets</em>, the little angled planes you see on a cut gem, and laying them out from several viewpoints at once, all in a drab fog of browns and grays. They worked so closely they stopped signing the fronts of their canvases; you had to turn a picture over to learn whose it was.
      </p>
      <p style={proseStyle}>
        It was a triumph, and it was a trap. Each picture took the subject a little further apart than the last, and by 1911 the canvases had been faceted almost past reading — a shimmering gray scaffold in which you had to hunt for a mustache or the neck of a bottle to prove there was anything there at all. Set a Braque still life from these years in front of you and you can feel the problem: it is beautiful, and it is nearly illegible.
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
        The danger was abstraction — and, oddly, neither man wanted it. A few more facets and the subject would vanish entirely, leaving only a handsome arrangement of grayish shapes: decoration, pattern, wallpaper. Picasso and Braque were not trying to leave the world behind; they were trying to show it more truthfully, from more sides at once. They had climbed out onto a ledge and could feel that one more step in the same direction was a drop.
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
        ne day in the spring of 1912 — by most accounts that May — Picasso took a small{' '}<em>oval</em>{' '}canvas and did something that had almost no precedent in serious Western painting. Instead of reaching for a brush, he reached for a strip of{' '}<strong>oilcloth</strong>: cheap, waterproof, factory-printed fabric, the kind people bought by the meter to cover a kitchen table. This particular oilcloth was printed with a pattern of{' '}<em>chair caning</em>{' '}— the woven rattan mesh of a bistro chair seat. He cut a piece off and glued it straight onto the canvas.
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
        And the painted parts? They are still pure Analytic Cubism — the same brown-gray facets, the same splintered light he and Braque had been refining for three years. That is what makes this little canvas a hinge. One half of it is the last gasp of the old faceting; the other half is a glued-on scrap of the real world. The future and the past of Cubism, sharing a single oval about a foot across.
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
        Around the JOU, the rest of the meal assembles itself out of the gray facets: the bowl and stem of a{' '}<strong>wineglass</strong>, the curve of a{' '}<strong>pipe</strong>, the blade of a{' '}<strong>knife</strong>, a wedge of{' '}<strong>lemon</strong>, the fluted shell of a{' '}<strong>scallop</strong>. It is the debris of an apéritif (a pre-lunch café drink) and a light meal — the most ordinary half-hour in Paris, rendered in the most advanced painting in Europe.
      </p>
      <SectionHeader accent={accent} label="The point" title="The fake that tells the truth" />
      <p style={proseStyle}>
        Here is the move that makes the picture famous. Everything painted on this table is an{' '}<em>illusion</em>: hand-made fakery, paint pretending to be a glass or a lemon. The caning is the opposite — it is a{' '}<em>real</em>{' '}thing, an actual manufactured object stuck to the canvas. Except that the real thing is{' '}<em>itself</em>{' '}a fake: a printed picture of cane, not cane. It is as if, to explain what money is, you hung a flawless painting of a banknote beside a real banknote — and the real one turned out to be a film prop. Picasso has stacked illusion on illusion on reality in one small oval: hand-painted fakes, beside a real object, that is a machine-made fake. The picture is a little essay on the difference between a thing and a picture of a thing, and it pointedly refuses to settle the question.
      </p>
      <p style={proseStyle}>
        The Met&rsquo;s own catalog puts the whole revolution in a phrase: Picasso had found a way of{' '}<em>inserting a fragment of reality into the fictive realm of painting</em>{' '}— a scrap of the actual world, glued into the make-believe.
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
          What he had started ran straight through the century — and it began by turning Cubism inside out. Gluing a flat, ready-made shape onto the canvas taught Picasso and Braque a new lesson: a picture could be{' '}<em>built up</em>{' '}from flat pieces, instead of a real object being{' '}<em>broken down</em>{' '}into facets. That reversal became{' '}<em>Synthetic Cubism</em>{' '}— the brighter, assembled second phase of the movement, the mirror image of the gray, shattered-gem look of the Analytic years. Then the door swung wide. The German artist{' '}<strong>Kurt Schwitters</strong>{' '}(1887–1948), a few years later, built whole pictures — and eventually entire rooms — out of tram tickets, bus stubs and gutter trash, a one-man movement he named{' '}<em>Merz</em>{' '}(a nonsense syllable he had snipped from an advert for a bank,{' '}<em>Kommerz</em>).
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
        y the spring of 1909 Picasso was, by his own account, worn out. He was 27, newly able to sell his work but not yet rich, and stuck: the savage breakthrough of his{' '}<em>Les Demoiselles d&rsquo;Avignon</em>{' '}two years earlier had blown a hole in painting — it had repelled even his closest allies, and the two years since had been a restless, unresolved search for what to build in the gap it left. So he did what he often did when a problem would not move: he left the city. With his partner{' '}<strong>Fernande Olivier</strong>{' '}(his companion through these Montmartre years) he traveled south, across the Pyrenees, to a remote village in Catalonia called{' '}<strong>Horta de Ebro</strong>{' '}(today Horta de Sant Joan).
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
        ver that summer Picasso painted Horta over and over — the houses on the hill, the village reservoir, the factory on the edge of town — running the same geometric method across deliberately different subjects, as if to prove it could crack anything, not just a picturesque cluster of roofs. The method was consistent and ruthless. He took the houses and pared them down to their bare solid geometry: cubes, wedges, prisms. He tilted the planes so a wall and a roof you could never see at the same time are shown to you together. He drained the color back to dusty ochres, grays and greens, so nothing pretty distracts from the structure.
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
        t reads as a jumble of brown boxes until you realize you are looking up a hillside at a village. Start low and climb. The big pale shapes filling the foreground are{' '}<strong>houses</strong> — each one reduced to a few flat planes, a wall here, a tilted roof there, meeting at edges that don&rsquo;t quite obey real space. They stack and overlap up the slope, so you read the climb of the land without any of the usual tricks of distance.
      </p>
      <p style={proseStyle}>
        Keep going up and the{' '}<strong>hillside</strong>{' '}behind the village is broken into the very same facets as the buildings — so the mountain and the houses rhyme, made of one geometry. There is no soft, hazy background; Picasso has pulled the far hill flat against the near houses so the whole picture stands up toward you like a wall. Notice, too, the light: each plane seems lit from its own direction, which is why the blocks feel solid and flat at the same time. You can&rsquo;t find the sun, because there isn&rsquo;t one.
      </p>
      <p style={proseStyle}>
        Then look to the left edge for the one thing that breaks the spell: a soft clump of{' '}<strong>green</strong>, a tree, almost the only curve and almost the only living color in the whole baked, angular scene. Picasso leaves it deliberately loose — a single organic breath in a town made of geometry. Find it and the picture suddenly reads as a real, hot, dry place you could walk into, if the streets weren&rsquo;t made of cubes.
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
        He had first made his name as a{' '}<em>Fauve</em>{' '}— one of the &ldquo;wild beasts,&rdquo; a short-lived movement of painters whom critics mocked, around 1905, for their raw, deliberately unnatural color. Then in 1907 he saw the Demoiselles in Picasso&rsquo;s studio, was appalled and gripped in equal measure, and within a couple of years had thrown the color overboard and joined Picasso in the most demanding experiment in modern art. If Picasso was the showman with the wild ideas, Braque was the patient builder who turned them into a coherent style.
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
        He drained almost all the color out of it. The whole picture is a fog of browns, grays and soft ochres — deliberately drab, because color would only be a distraction. With nothing pretty to look at, your eye is forced onto the only thing left: the structure, the shimmer of planes sliding over and into one another. Braque even lets the facets{' '}<em>bleed</em>{' '}— an edge that should belong to the violin opens and leaks into the background, so object and air are built from the same broken light. (Painters have a name for this trick of letting one plane flow into the next: they call it{' '}<em>passage</em>.)
      </p>
      <SectionHeader accent={accent} label="Why a violin" title="Something you can almost still see" />
      <p style={proseStyle}>
        The choice of subject is not random. Musical instruments turn up again and again in Cubism, and for good reasons: a violin has strong, familiar curves you can still half-recognize even after it has been smashed into planes, which keeps the picture from tipping into pure abstraction. And Braque{' '}<em>loved</em>{' '}music — he played instruments in the studio. A violin let him work right at the edge of legibility: faceted almost past recognition, but never quite. Look long enough and the instrument keeps surfacing and dissolving — the curled scroll, then an f-hole, then nothing — like a word on the tip of your tongue.
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
        t looks, at first, like a gray avalanche — and the way in is a single odd detail at the very top. Look up there and you will find a{' '}<strong>nail</strong>, painted with old-fashioned, photographic realism, casting a small neat shadow, as if it were hammered into the wall to hang the picture from. After the shock of that one solid, real-looking thing, let your eye fall.
      </p>
      <p style={proseStyle}>
        Down in the center and lower half, the{' '}<strong>violin</strong>{' '}assembles itself out of the rubble: the little curled{' '}<em>scroll</em>{' '}(the carved spiral at the top of the neck) near the middle, a few taut{' '}<em>strings</em>, and below them the unmistakable rounded body with its two{' '}<em>f-holes</em>{' '}— the f-shaped slots cut into a violin&rsquo;s top. Up to the left, a paler cluster of planes with a rounded lip is the{' '}<strong>jug</strong>. Neither object holds still; each one swims into focus and then breaks apart again as your eye moves.
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
          It is a fitting home for a quiet masterpiece by the quieter of the two founders. Picasso got the fame, the scandals and the headlines; Braque got the deep respect of fellow painters and a slower-burning fame of his own. And this canvas — drab, patient, fiendishly built, the violin half-dissolved in its gray planes beneath that one perfect nail — is the one that other painters point to when they want to show what Analytic Cubism, at its absolute best, could do.
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

// ─────────────────────────────────────────────────────────────
// Three Women (1908) — the five chapters
// ─────────────────────────────────────────────────────────────
function TwSetting({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Winter 1907–08" title="After the bomb" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        ate in 1907 Picasso rolled up{' '}<em>Les Demoiselles d&rsquo;Avignon</em>, the jagged, savage canvas his own friends had recoiled from, and stood it against the wall. He was 26. He did not spend the next year defending it. He spent it working out what the explosion had been{' '}<em>for</em>. The Demoiselles was a collision — half its faces calm and Iberian, half gouged like masks, two styles at war in one frame. What Picasso wanted next was to take that violence and make something{' '}<em>built</em>{' '}out of it: whole, solid, deliberate.{' '}<em>Three Women</em>{' '}is the year-long working-out.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#c0a06c', '#3d3a2e', '#8a6b3a']}
        imageUrl={ART_IMG.demoiselles}
        ratio="1/1"
        alt="Picasso, Les Demoiselles d'Avignon, 1907"
        caption={<>The picture he was digesting:{' '}<em>Les Demoiselles d&rsquo;Avignon</em>, 1907. Three Women takes its shock and tries to build something solid from it.</>}
        rights={PD_RIGHTS}
      />
      <SectionHeader accent={accent} label="Two teachers" title="A dead painter and a room of masks" />
      <p style={proseStyle}>
        Two influences sat on his shoulders. One was{' '}<strong>Cézanne</strong>, the older painter whose memorial shows had stunned Paris in 1907, and whose advice — build a picture from solid blocks, the cylinder and the cone — pushed Picasso toward weighty, constructed form. The other was the{' '}<strong>carved African sculpture</strong>{' '}he had been hit by at the ethnographic museum in the Trocadéro: faces reduced to a few frontal planes, a mask instead of a likeness. Three Women fuses the two. Cézanne gives it the heft; the masks give it the faces. The result looks less painted than{' '}<em>hewn</em>. (Picasso was not alone on this road: Georges Braque, down south at L&rsquo;Estaque that same year, was reducing houses to the same kind of blunt blocks. The two men, newly acquainted, had begun circling one idea from opposite ends — figures and landscape — and would soon be inseparable.)
      </p>
    </article>
  )
}

function TwMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1907–08" title="Three figures, one block" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icasso worked this canvas for the better part of a year, and examination of the surface shows he buried earlier versions under it — a more striped, savage first attempt scraped back and rebuilt. What emerged is a single rust-red mass in which three nude women are fused so tightly you can barely prise them apart. Shoulders, thighs and arms lock together into one faceted block. The palette is fired clay: terracotta, ochre, brick, the colors of baked earth and old wood, with only thin slivers of cool green pressing in at the edges.
      </p>
      <SectionHeader accent={accent} label="The change" title="From savage to carved" />
      <p style={proseStyle}>
        Set beside the Demoiselles, the difference is the whole point. The faces lose their snarl and settle into calm, heavy masks. The jagged shards harden into broad, blunt planes, each one shaded as if catching light on a chiselled surface. Where the Demoiselles felt like an attack, Three Women feels like a carving — something a sculptor might have cut from a single trunk of reddish wood and then, almost as an afterthought, painted. The savagery has been cooled into structure, and that cooling is exactly the road that leads, the next summer, to Cubism proper. What changed in that final step was mostly subtraction: the color drained almost to gray, the planes shrank and multiplied, the heavy modelling thinned — until the solid bodies of Three Women broke up into the restless faceting of Analytic Cubism.
      </p>
    </article>
  )
}

function TwReading({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The picture" title="Find the three" first />
      <PaintingFigure
        onZoom={onZoom}
        palette={['#a8482a', '#5a2418', '#1a0c08']}
        imageUrl={ART_IMG.threeWomen}
        ratio="4/5"
        alt="Picasso, Three Women, 1908"
        caption={<>Picasso,{' '}<em>Three Women</em>, 1908 — Hermitage Museum, St Petersburg. Tap to zoom, then follow along below.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        t first it is a wall of red rock, and the three women take a moment to separate out. Start in the center: the tallest figure, head tipped back, arms lifted overhead, her face a calm mask of heavy almond eyes and a blunt nose. To her right sits a second woman, her face the clearest mask of the three — frontal, gouged, lifted straight from African carving. To the left a third figure bows her head, half-swallowed by the others. Their bodies do not so much touch as{' '}<em>merge</em>: try to follow one thigh or shoulder and it hands off to the next.
      </p>
      <p style={proseStyle}>
        Notice the light. It does not fall from any one direction; each plane is shaded on its own terms, which is why the whole group reads as solid and flat at once — carved and yet pressed up against the surface. And look to the edges for the single concession of color: thin breaths of{' '}<strong>green</strong>{' '}against all that fired red, almost the only cool note in a picture packed as tight as brickwork. Find the three women and you have found the moment Picasso turned raw shock into something monumental and deliberate.
      </p>
    </article>
  )
}

function TwPrimitivism({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The source" title="Borrowed from the carvers" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        hose mask-faces did not come from Picasso&rsquo;s imagination. They came from{' '}<strong>African sculpture</strong>{' '}— Fang and Kota and other carvings he had seen, crammed without labels, in the ethnographic museum at the Trocadéro, and a few of which he owned. What he took was a way of building a face: not a soft, naturalistic likeness but a hard arrangement of frontal planes, the face treated as a constructed{' '}<em>sign</em>{' '}rather than a portrait — exactly the gouged, frontal mask you found a moment ago on the right-hand woman and on the central tipped-back head. African carvers had solved &ldquo;a face made of geometry&rdquo; centuries before any Paris painter went looking for it.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#6b5034', '#3a2820', '#100c08']}
        imageUrl={ART_IMG.fangMask}
        ratio="3/4"
        alt="Fang mask, Gabon"
        caption={<>A Fang mask from Gabon, of the kind that hit Picasso at the Trocadéro: the face as a few carved planes, not a likeness.</>}
        rights="Photograph CC BY-SA via Wikimedia Commons; the mask itself, maker and date unrecorded."
      />
      <SectionHeader accent={accent} label="The harder part" title="Taking without crediting" />
      <p style={proseStyle}>
        It is worth saying plainly, because the older textbooks usually don&rsquo;t. The carvers were unnamed to Picasso, their work torn from its meaning and its place by the colonial trade — the looting and forced commerce of Europe&rsquo;s African empires — that filled those museum cases, and he took the{' '}<em>form</em>{' '}without the context, the credit or the belief that gave it power. The borrowing produced extraordinary art; it also has a cost that art history is still working through, and the honest thing is to hold both facts at once. Three Women is a masterpiece, and it is built on a debt to people whose names no one wrote down.
      </p>
    </article>
  )
}

function TwAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="1908–1918" title="A Russian buys the future" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>T</DropCap>
          he man who bought this brick-red slab of interlocked bodies was{' '}<strong>Sergei Shchukin</strong>, a Moscow textile magnate with one of the boldest eyes in Europe. Over six years he carried more than fifty Picassos back to Russia, along with rooms full of Matisse, and hung them in his Moscow mansion where young Russian painters came to gawp. Three Women went east. For a decade the most advanced art in Paris lived, improbably, on a wall in Moscow.
        </p>
        <p style={proseStyle}>
          Then history reached in. The{' '}<strong>1917 Revolution</strong>{' '}swept Shchukin&rsquo;s world away; his collection was nationalised and he fled to Paris, leaving his Picassos to the new Soviet state. They passed into a Museum of New Western Art — and there they became an embarrassment.
        </p>
        <SectionHeader accent={accent} label="1948–today" title="Locked in the basement" />
        <p style={proseStyle}>
          Under Stalin, modern art was branded{' '}<em>bourgeois formalism</em>, decadent and dangerous, and in 1948 the old collection was broken up and largely shut away. Three Women went to the{' '}<strong>Hermitage</strong>{' '}in Leningrad, where for much of the Cold War it sat in storage, too radical to hang. So the canvas that helped invent Cubism spent its middle age hidden in a Soviet basement — a fitting, strange afterlife for a picture about three women carved out of red rock, waiting to be seen.
        </p>
      </article>

      <MeanwhileSheet
        accent={BLUE}
        region="Moscow"
        when="1918 · ten years later"
        title="The collection is seized by a revolution."
        body="The same Russia that produced Picasso's boldest early buyer, Sergei Shchukin, also produced the revolution that took his pictures from him. Nationalised in 1918, the Shchukin Picassos became state property — and then, under Stalin, an embarrassment to be hidden away."
        palette={['#bf2f25', '#1c1c1c', '#d6cf3f']}
        ctaLabel="Read 'The Russian Revolution'"
      />
    </>
  )
}

// ─────────────────────────────────────────────────────────────
// The Portuguese (Braque, 1911) — the five chapters
// ─────────────────────────────────────────────────────────────
function PtSetting({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1911" title="Roped to Picasso, still" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        year after{' '}<em>Violin and Jug</em>, Georges Braque and Picasso were still &ldquo;roped together on a mountain,&rdquo; visiting each other&rsquo;s studios daily and pushing the same experiment one notch further each time. By 1911 that experiment —{' '}<em>Analytic Cubism</em>, the breaking of objects into small faceted planes seen from several sides at once — had reached its most extreme, sealed-off point — so abstract it was nearly a private code. The pictures were faceted so far that the subject all but evaporated into a shimmer of brown and gray.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#8a8478', '#4a463c', '#15110a']}
        imageUrl={ART_IMG.braqueViolinJug}
        ratio="3/4"
        alt="Braque, Violin and Jug, 1909–10"
        caption={<>Where Braque had just been:{' '}<em>Violin and Jug</em>, 1909–10. A year on, in The Portuguese, the faceting goes even further — and a printed word arrives.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        It was a thrilling place to be and a dangerous one. A few more facets and the picture would dissolve into pure abstract pattern, which neither painter wanted. They had been smuggling small clues back in — a curl, a string, a painted nail — to keep the work tethered to the real world. In{' '}<em>The Portuguese</em>, Braque smuggled in the most radical clue of all, and it changed what a painting could contain.
      </p>
    </article>
  )
}

function PtMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Summer 1911" title="A musician, dissolved" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he subject is a man with a guitar — a Portuguese musician Braque said he remembered from a bar years before, which is why the picture is also called{' '}<em>The Emigrant</em>. Braque painted much of it that summer in{' '}<strong>Céret</strong>, a small town in the French Pyrenees where he and Picasso spent the season working side by side. He took the seated player and broke him into a fine brown mesh of facets — so fine, so evenly spread across the canvas, that the figure nearly disappears into his own background.
      </p>
      <p style={proseStyle}>
        The palette is almost gone: ochres, tobacco browns, soft grays, drained on purpose so nothing distracts from the structure. Edges open and bleed from object into air — the Analytic trick called{' '}<em>passage</em>, one plane melting into the next — until you can no longer say where the man stops and the room begins. Only the guitar across his lap, a few taut strings on the diagonal, quite refuses to dissolve.
      </p>
      <SectionHeader accent={accent} label="The brink" title="Almost nothing left to hold" />
      <p style={proseStyle}>
        This is Analytic Cubism at the edge of the cliff. The picture is so close to pure abstraction that, without help, a viewer could stare for a long time and find no man at all. Braque knew it. And his solution — the thing that makes this canvas a turning point rather than just a very good shimmer of brown — was to hammer a few hard, flat, unmistakable letters across the top, where the haze could not swallow them.
      </p>
    </article>
  )
}

function PtReading({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The picture" title="Start at the letters" first />
      <PaintingFigure
        onZoom={onZoom}
        palette={['#9a8458', '#4a3f28', '#15110a']}
        imageUrl={ART_IMG.portuguese}
        ratio="2/3"
        alt="Braque, The Portuguese, 1911"
        caption={<>Braque,{' '}<em>The Portuguese</em>, 1911 — Kunstmuseum Basel. Tap to zoom, then follow along below.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he way into this brown fog is the one thing in it that is perfectly sharp. Look to the upper right: the stencilled capitals{' '}<strong>D BAL</strong> — the tail end of{' '}<em>GRAND BAL</em>, the wording of a dance-hall poster — and beside them a scatter of stencilled{' '}<strong>numbers</strong>. They are crisp, flat and mechanical, and they sit{' '}<em>on top</em>{' '}of the picture rather than inside its haze, like a label stuck to a misted window.
      </p>
      <p style={proseStyle}>
        Now drop your eye and let the rest assemble. Below the letters, a paler rounded mass is the musician&rsquo;s{' '}<strong>head and shoulders</strong>, tipped a little, nearly lost. Lower still, on the diagonal, you can find the taut{' '}<strong>strings</strong>{' '}and the soft curve of a sound-hole — the{' '}<strong>guitar</strong>{' '}across his lap, the firmest object in the whole picture. Everything else opens and leaks, plane into plane, so the man and the air he sits in are woven from the same broken light. The letters are the nail you hang the rest on.
      </p>
    </article>
  )
}

function PtLetters({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The point" title="The day type walked in" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tencilled letters in a painting sound like nothing. They were a revolution, for a stack of reasons at once. Braque had let letters in before, in 1910, but as things glimpsed{' '}<em>in</em>{' '}a scene — words on a real sign. Here they are different: purely flat, purely formal, belonging not to the imagined room but to the{' '}<em>surface</em>{' '}of the canvas itself. They announce, bluntly, that this is a painted board, not a window you look through. Braque himself explained the logic simply: letters are forms that cannot be distorted — they are flat, with no depth of their own — so their plain presence makes clear the rest of the picture is not pretending to have depth either.
      </p>
      <p style={proseStyle}>
        And they are{' '}<em>mechanical</em>. A stencil is a sign-painter&rsquo;s and decorator&rsquo;s tool — and Braque, remember, was a decorator&rsquo;s son, trained in exactly these tradesman&rsquo;s tricks. So the letters drag the cheap, mass-produced world of posters and price tags straight into the most rarefied painting in Europe. In a picture nearly too abstract to read, they are the one thing anyone can read instantly — a fixed, public, printed fact pinned to a private blur.
      </p>
      <SectionHeader accent={accent} label="The door it opens" title="One year from real paper" />
      <p style={proseStyle}>
        Most of all, the letters point straight ahead, to the biggest break in modern art. If a flat, mass-produced printed mark can live in a painting, why paint it at all — why not glue the real thing down? That is exactly the step Picasso took the very next year, pasting a scrap of printed oilcloth onto a canvas and inventing{' '}<em>collage</em> — and Braque, that same autumn, ran his own parallel track to it, gluing strips of printed paper into his drawings to make the first{' '}<em>papiers collés</em>. Braque&rsquo;s stencilled{' '}<em>D BAL</em>{' '}is the hinge: the last move either man made with a brush before they both reached for the glue.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#b89055', '#5a4a2a', '#1a1208']}
        imageUrl={ART_IMG.chairCaning}
        ratio="4/3"
        alt="Picasso, Still Life with Chair Caning, 1912"
        caption={<>One year later: Picasso&rsquo;s{' '}<em>Still Life with Chair Caning</em>, 1912. Braque&rsquo;s painted letters become Picasso&rsquo;s glued-on oilcloth — the brush gives way to the paste pot.</>}
        rights={PD_RIGHTS}
      />
    </article>
  )
}

function PtAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="The afterlife" title="Basel, again" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>L</DropCap>
          ike its near-twin{' '}<em>Violin and Jug</em>, The Portuguese hangs today in{' '}<strong>Basel</strong>, and for the same reason: the Swiss banker{' '}<strong>Raoul La Roche</strong>, who bought Cubism in bulk in the years after the First World War, when the market for it had collapsed and few others would touch it. He gave his great collection, in stages, to the public museum of his home city — which is how a small Swiss town on the Rhine became one of the world&rsquo;s capitals of Cubist painting.
        </p>
        <p style={proseStyle}>
          Stand in front of it in Basel and the picture still barely gives up its guitarist — a brown storm of facets with four sharp letters riding on top, as legible now as the day they were stencilled. That is the real legacy: once type could live on a canvas as pure form, it never left. Within a year it became collage; within a decade the Russian Constructivists (designers who turned hard geometry into revolutionary posters) and the German Bauhaus (the school that made clean, modern design a creed) were building whole pictures and posters out of bold printed type. Half of twentieth-century graphic design traces back, in part, to a brown haze of a guitar player with the words{' '}<em>D BAL</em>{' '}floating at the top.
        </p>
      </article>

      <MeanwhileSheet
        accent={AMBER}
        region="Everywhere"
        when="1911 · the same years"
        title="The city fills up with printed words."
        body="Braque let a poster's lettering into fine art at the exact moment the modern city was drowning in printed type — advertising hoardings, newspapers, packaging, price tags. Cubism was the first painting to notice that the visual world had become, increasingly, a world made of words."
        palette={['#6b6b6b', '#3a3a3a', '#1c1c1c']}
        ctaLabel="Read 'The age of advertising'"
      />
    </>
  )
}

// ─────────────────────────────────────────────────────────────
// Breakfast / Le Petit Déjeuner (Juan Gris, 1914) — the five chapters
// ─────────────────────────────────────────────────────────────
function GrSetting({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1912–14" title="The third man" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>E</DropCap>
        very account of Cubism stars Picasso and Braque. There was a third man, quieter, who arrived late and may have understood it best.{' '}<strong>Juan Gris</strong>{' '}— born José Victoriano González-Pérez in Madrid — moved to Paris in 1906 and took a cheap studio in the{' '}<em>Bateau-Lavoir</em>, the same ramshackle Montmartre building where Picasso lived. He scraped by as a magazine illustrator, watched the two founders invent Cubism above his head, and only around 1911 began painting it himself.
      </p>
      <p style={proseStyle}>
        Coming late turned out to be his advantage. Picasso and Braque had bulldozed the path by instinct, arguing and improvising. Gris arrived with a clear head and a draughtsman&rsquo;s discipline, and set about turning their wild experiment into something you could almost write down as a method. And when, in 1912, the founders started gluing real materials onto canvas — inventing{' '}<em>collage</em> — Gris took up the new tool and, within two years, made some of the most beautiful examples anyone would manage. Where Picasso&rsquo;s and Braque&rsquo;s surfaces shimmer and dissolve, Gris&rsquo;s would hold perfectly still — clean, bright, cool, built on a grid you can almost see.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#b89055', '#5a4a2a', '#1a1208']}
        imageUrl={ART_IMG.chairCaning}
        ratio="4/3"
        alt="Picasso, Still Life with Chair Caning, 1912"
        caption={<>The door Gris walked through: Picasso&rsquo;s{' '}<em>Still Life with Chair Caning</em>, 1912, the first collage. Two years later Gris would build a whole breakfast table the same way.</>}
        rights={PD_RIGHTS}
      />
    </article>
  )
}

function GrMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1914" title="Pasted, not painted" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        ook closely at this breakfast table and a lot of it is not paint at all. Gris built the picture by{' '}<em>gluing</em>: two different kinds of cheap, factory-printed{' '}<strong>wood-grain paper</strong>{' '}filling the lower two-thirds as the table and its turned legs, and a strip of printed{' '}<strong>decorative wallpaper</strong>{' '}across the top for the wall behind. Onto and around those pasted papers he then drew and painted the rest — the coffee pot, the cup, the glasses. The technique has a name carried over from Braque:{' '}<em>papier collé</em>, &ldquo;pasted paper.&rdquo;
      </p>
      <p style={proseStyle}>
        It is the same joke Picasso had played with his oilcloth chair-caning, raised to a whole composition. The &ldquo;wood&rdquo; of the table is not painted to look like wood and is not wood — it is a printed{' '}<em>picture</em>{' '}of wood, mass-produced by the roll, glued down flat. A manufactured fake of timber stands in for a real café table, and Gris lets the seams and edges show, so you always know you are looking at pasted paper, not an illusion.
      </p>
      <SectionHeader accent={accent} label="The layering" title="Real things, then drawing on top" />
      <p style={proseStyle}>
        What makes it{' '}<em>Gris</em>{' '}rather than Picasso is the control. The pasted papers are cut to crisp, deliberate shapes and locked into a tight grid; the drawing laid over them is precise, almost engineered. Nothing is improvised or scrubbed. He has taken the most casual-seeming gesture in art — sticking down a scrap of paper — and made it as exact as a blueprint.
      </p>
    </article>
  )
}

function GrReading({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The picture" title="A table you can actually read" first />
      <PaintingFigure
        onZoom={onZoom}
        palette={['#3a6a7a', '#8a6b3a', '#1c2a2e']}
        imageUrl={ART_IMG.grisLunch}
        ratio="3/4"
        alt="Juan Gris, Breakfast (Le Petit Déjeuner), 1914"
        caption={<>Juan Gris,{' '}<em>Breakfast (Le Petit Déjeuner)</em>, 1914 — MoMA, New York. Tap to zoom, then follow along below.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        fter the brown fog of Picasso and Braque, the first surprise here is that you can simply{' '}<em>read</em>{' '}it. This is a café tabletop, and the breakfast is all present. Center: a white{' '}<strong>coffee cup and saucer</strong>, drawn with an almost old-fashioned, rounded solidity. Left: the tall pale shape of a{' '}<strong>coffee pot</strong>, split down a clean vertical seam — light on one side, shadow on the other, a single object shown as two views without ever falling apart. Right: faceted{' '}<strong>glasses</strong>{' '}and the pink Greek-key border of a napkin.
      </p>
      <p style={proseStyle}>
        Below the cup, a torn strip of{' '}<strong>newspaper</strong>{' '}is glued in, and the legible scraps of type are a joke worth catching: it reads{' '}<em>…OURN…</em>{' '}for{' '}<em>journal</em>{' '}(the daily paper) and, just under it,{' '}<em>…ZA GRIS</em>. That last word is the painter signing his own work from inside the picture — and{' '}<em>gris</em>{' '}is simply French for &ldquo;gray,&rdquo; so the signature is a pun set in newsprint. Underneath it all runs the printed wood-grain of the table, down to its turned front legs.
      </p>
    </article>
  )
}

function GrSystem({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The point" title="Cubism made rigorous" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is what sets Gris apart from the two men who invented the style. Picasso and Braque worked from the object{' '}<em>inward</em>: they took a real guitar or jug and analyzed it into pieces, feeling their way, improvising. Gris worked the other direction — from the{' '}<em>structure</em>{' '}outward. He began with an abstract scaffold of clean verticals and locked proportions, an almost architectural plan, and only then hung the cup, the pot and the paper onto it. He once put it almost exactly that way: he started with a cylinder and made it a bottle, rather than starting with a bottle. You can see the method in the coffee pot: split down one clean vertical seam, light on the left, shadow on the right — not a loose impression of a pot but a measured proof that one is there.
      </p>
      <p style={proseStyle}>
        If the founders&rsquo; Cubism is jazz — two players trading improvisations — Gris&rsquo;s is a fugue (a piece of music where every voice enters in strict, planned order). That is why his pictures feel so calm and so clear: nothing is searching, everything has been decided. It is, by most accounts, the most{' '}<em>rigorous</em>{' '}Cubism anyone made, and that rigour would feed straight into the clean machine-age design of the 1920s — the architect Le Corbusier&rsquo;s{' '}<em>Purism</em>{' '}(a stripped-bare, ornament-free style) and the streamlined geometry of{' '}<em>Art Deco</em>.
      </p>
    </article>
  )
}

function GrAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="The afterlife" title="The short, bright career" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>G</DropCap>
          ris made this in the spring of 1914. Months later the First World War broke out, scattering the Cubist circle — Braque and many others to the front, the dealer Kahnweiler into exile as an enemy alien — and the great heroic phase of the movement was effectively over. Kahnweiler&rsquo;s entire stock, Gris&rsquo;s pictures among it, was seized by the French state as enemy property and later auctioned off cheaply, sending these works scattering through the market. Gris himself kept working, refining his clear, systematic style through the 1920s.
        </p>
        <p style={proseStyle}>
          He did not get long. Juan Gris died in 1927, of kidney and heart disease, at just{' '}<strong>forty</strong>. For years his reputation sat in the shadow of the two founders — the careful one, the follower. That has steadily corrected itself: he is now seen as the third great Cubist and, to many eyes, the most lucid of the three. This{' '}<em>Breakfast</em>{' '}hangs at the Museum of Modern Art in New York as very nearly the textbook example of what collage, handled with total discipline, could build — that calm blue-gray table, its wood-grain pasted rather than painted, its white cup unmistakably a cup.
        </p>
      </article>

      <MeanwhileSheet
        accent={BLUE}
        region="Europe"
        when="August 1914 · months later"
        title="The war scatters the painters."
        body="Gris finished his Breakfast in the spring of 1914. By August, Europe was at war. Braque and Léger were mobilised, the dealer Kahnweiler fled into exile, and the daily Montmartre conversation that had built Cubism simply stopped. The movement's heroic decade ended not with an argument but with a mobilisation order."
        palette={['#3a4a6a', '#1c1c2a', '#0a0a14']}
        ctaLabel="Read 'The First World War'"
      />
    </>
  )
}

// ─────────────────────────────────────────────────────────────
// Three Musicians (Picasso, 1921) — the five chapters
// ─────────────────────────────────────────────────────────────
function TmSetting({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1921" title="Ten years on" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y 1921 Cubism was no longer a scandal; it was a style, fourteen years old, taught and collected and copied. The world that made it was gone. The First World War had come and emptied the cafés: Braque was wounded at the front, the dealer Kahnweiler had been exiled as an enemy alien, and the poet Guillaume Apollinaire — Cubism&rsquo;s loudest champion — was dead, carried off by the 1918 influenza while still weak from a war wound. Picasso himself was rich now, married, moving in fashionable circles and even painting calm, classical nudes on the side.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#c0a06c', '#3d3a2e', '#8a6b3a']}
        imageUrl={ART_IMG.demoiselles}
        ratio="1/1"
        alt="Picasso, Les Demoiselles d'Avignon, 1907"
        caption={<>The decade he was summing up began here, in 1907, with{' '}<em>Les Demoiselles d&rsquo;Avignon</em>. Three Musicians is its bright, ceremonial farewell.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        That summer he rented a villa at{' '}<strong>Fontainebleau</strong>, outside Paris, and worked in its garage. There he sat down and, in effect, wrote Cubism&rsquo;s grand farewell — a huge, bright, ceremonial picture that gathers up everything the movement had discovered and stages it like a final curtain call.
      </p>
    </article>
  )
}

function TmMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Summer 1921" title="Painted like cut paper" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icasso painted{' '}<em>Three Musicians</em>{' '}twice that summer, in two enormous versions at once — this one, now in Philadelphia, and a near-twin now in New York. Each is over six feet tall. After a decade of small, brown, muttering Cubist canvases, these are loud: big, flat fields of orange, white, black and blue, snapped together along hard edges.
      </p>
      <p style={proseStyle}>
        And here is the lovely circularity of it. The whole picture is built to look like{' '}<em>collage</em> — like sheets of brightly colored paper cut into shapes and pasted down, the technique Picasso himself had invented nine years earlier with a scrap of oilcloth. Except not one piece of it is glued. It is all{' '}<strong>paint</strong>, brushed to imitate the look of pasting. Cubism had gone from gluing real paper to faking the look of glued paper — illusion, abstraction and collage chasing each other in a circle. This is what art historians mean by{' '}<em>Synthetic Cubism</em>: building a figure up from flat, simple, assembled shapes rather than breaking a real one down into facets.
      </p>
    </article>
  )
}

function TmReading({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The picture" title="Three masked players" first />
      <PaintingFigure
        onZoom={onZoom}
        palette={['#bf6a2a', '#3a2a4a', '#1a1208']}
        imageUrl={ART_IMG.picassoThreeMusicians}
        ratio="1/1"
        alt="Picasso, Three Musicians, 1921"
        caption={<>Picasso,{' '}<em>Three Musicians</em>, 1921 — Philadelphia Museum of Art. Tap to zoom, then follow along below.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        hree figures sit jammed together along a table in a shallow brown room, and they are made of the same flat shapes as a paper cut-out. Read them left to right. At the left, a player in a diamond-patterned costume — a{' '}<strong>Harlequin</strong>, the clown of old Italian comedy — holds a stringed instrument. In the center, a figure in white — a{' '}<strong>Pierrot</strong>, the sad-clown foil to the scheming Harlequin — raises a{' '}<strong>clarinet</strong>{' '}to a black domino mask (a half-mask covering just the eyes). At the right, a tall dark{' '}<strong>monk</strong>{' '}in a hooded robe holds a sheet of music, or perhaps an accordion.
      </p>
      <p style={proseStyle}>
        Three details reward a closer look: the three flat, frontal{' '}<strong>masks</strong>, staring straight out with no expression you can name; the actual{' '}<strong>sheet music</strong>{' '}laid on the table, drawn with real staves and notes, a small window of legibility in a wall of color; and, if you hunt, the dim shape of a dog stretched beneath the table. It is a band, posed for a portrait — bright, festive, and somehow not quite alive.
      </p>
    </article>
  )
}

function TmElegy({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The point" title="A portrait of ghosts" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        hy does a picture this colorful feel haunted? Because of who the three players are widely thought to be. The reading most often given: the{' '}<strong>Harlequin</strong>{' '}is Picasso himself — Harlequin was his lifelong alter ego — and the other two are the friends he had made Cubism with in the poor, happy Bateau-Lavoir years. The{' '}<strong>clarinet-playing Pierrot</strong>{' '}is the poet Guillaume Apollinaire, and the{' '}<strong>monk</strong>{' '}is the poet Max Jacob.
      </p>
      <p style={proseStyle}>
        Both references cut deep. Apollinaire was{' '}<em>dead</em> — three years gone when Picasso painted this. And Max Jacob had, in 1921, the very year of the picture, withdrawn from the world to live at a Benedictine monastery, lost to his old friends in a different way. So the three musicians are a band that no longer exists, reassembled for one last portrait — two of them present only as masks. Picasso never confirmed the reading, and a careful viewer should hold it as the likeliest interpretation rather than a proven fact. But it is hard to stand in front of the picture, once you know, and not see a wake dressed up as a carnival.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#3a4a6a', '#2a3048', '#0e1422']}
        imageUrl={ART_IMG.apollinaire}
        ratio="3/4"
        alt="Guillaume Apollinaire, c. 1914"
        caption={<>Guillaume Apollinaire, Cubism&rsquo;s great champion, around 1914 — dead of influenza by 1918, and, many believe, the masked clarinet-player at the heart of this picture.</>}
        rights="Photograph, public domain · Wikimedia Commons."
      />
    </article>
  )
}

function TmAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="The afterlife" title="Two versions, two cities" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>T</DropCap>
          he two giants Picasso painted that summer went their separate ways. One hangs today at the Museum of Modern Art in New York; this one, the Philadelphia version, came to the{' '}<strong>Philadelphia Museum of Art</strong>{' '}with the collection of the American collector{' '}<strong>A. E. Gallatin</strong>, who had earlier shown it at his Museum of Living Art — a gallery at New York University where students could see modern painting, for free, before America had quite decided it counted. The two are not quite twins: in the New York version the Harlequin and Pierrot trade places and instruments, and the whole picture runs darker.
        </p>
        <p style={proseStyle}>
          As a summing-up, it was also a goodbye. After 1921 Picasso largely moved on — into Surrealism (the art of dreams and the unconscious), into the monsters of the 1930s, into{' '}<em>Guernica</em> — and Cubism as a living movement was finished. But it had already won the argument. The flat planes, the multiple viewpoints, the glued and faked paper, the idea that a picture is an object you build rather than a window you look through: all of it had passed into the bloodstream of modern art, where it remains. Three Musicians is the curtain call of arguably the most consequential decade in twentieth-century painting — and the band, masked and silent, takes its bow.
        </p>
      </article>

      <MeanwhileSheet
        accent={AMBER}
        region="Paris & New York"
        when="The 1920s · just after"
        title="Everyone wants order again."
        body="After the slaughter of the war, much of European art swung back toward calm, classical order — Picasso included, painting serene nudes alongside this picture. The wild, fracturing experiments of 1907–14 had done their work; the 1920s wanted to put the pieces back together, even as jazz-age New York prepared to inherit the avant-garde."
        palette={['#c8a72a', '#7a1422', '#1c0a08']}
        ctaLabel="Read 'The Roaring Twenties'"
      />
    </>
  )
}

// ─────────────────────────────────────────────────────────────
// A Burial at Ornans (Courbet, 1849–50) — the five chapters
// ─────────────────────────────────────────────────────────────
function BuTown({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Ornans · 1848" title="A funeral nobody was supposed to paint" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n September 1848, in a small town in the French countryside, an old man was lowered into the ground, and a crowd of his neighbors stood around the hole and watched. This happens somewhere on Earth every few seconds. It is the least remarkable event a human life contains. Nobody paints it. And if anyone had, they would certainly not have painted it <em>ten feet tall</em> — a wall of canvas the size Europe kept locked away for the death of saints and kings. That is the thing you are about to look at: the most ordinary death there is, blown up to the scale of the most important deaths there are.
      </p>
      <p style={proseStyle}>
        The town was <strong>Ornans</strong> (pronounced &ldquo;or-NAHN&rdquo;), a cramped little place strung along a river in the Franche-Comté (frahnsh-kohn-TAY), the hilly region in eastern France that runs up to the Swiss border. It was the hometown of a loud, ambitious, supremely self-certain young painter named <strong>Gustave Courbet</strong> (1819–1877), whose larger story is told in the Realism overview one level up in this app (the man who would become the public face of <strong>Realism</strong> — the new school that insisted ordinary contemporary life was a fit subject for serious art, painted plain, with none of the official art establishment&rsquo;s polish). Courbet had grown up here, among these exact people. And in 1848 or so, one of them died.
      </p>

      <SectionHeader accent={accent} label="The man in the box" title="Whose burial this is" />
      <p style={proseStyle}>
        By the usual account, the dead man was Courbet&rsquo;s own <strong>great-uncle, Claude-Étienne Teste</strong>, who died in September 1848. That identification, and the date, are the standard story rather than carved-in-stone fact — they are sometimes contested, so treat them as the received version, not a closed case. What is not in doubt is the kind of funeral it was: not a king&rsquo;s, not a saint&rsquo;s, not a hero&rsquo;s. A provincial one. A market-town one. The death of exactly the sort of person history files under &ldquo;and others.&rdquo;
      </p>
      <p style={proseStyle}>
        That is the detail to hold onto, because it is the whole engine of the painting. Courbet did not go looking for a grand subject and dress it down. He took the most local, least important death imaginable — a relative in a backwater town, mourned by the people who happened to live nearby — and decided it deserved a canvas the size Europe reserved for the death of Christ.
      </p>

      <SectionHeader accent={accent} label="The decision" title="Paint my own people, full size" />
      <p style={proseStyle}>
        To feel how strange that decision was in 1849, you have to know the rule he was breaking. European art ran on a ranking system called the <strong>hierarchy of genres</strong> (an official ladder of subject-matter categories), and the Realism overview sketches it; this read can make it concrete. At the top sat grand scenes from myth and scripture and ancient legend — <strong>history painting</strong> (the prestige category; &ldquo;history&rdquo; here meant scripture, myth, and classical antiquity, <em>not</em> real events in the modern sense — nobody at the top was painting last week&rsquo;s news). Plain modern life sat at the very bottom. Gods up here; greengrocers down there. You were <em>allowed</em> to paint a peasant. You were not allowed to paint a peasant at the size of a god. Size was reserved. A big canvas was a promise that the thing on it mattered enormously, and the body that decided what was permitted to matter that much was <strong>the academy</strong> (the Academy of Fine Arts, the French state institution that set the rules of painting and ran the official exhibition where careers were made — the <strong>Salon</strong>, which you will meet properly in Chapter 3).
      </p>
      <p style={proseStyle}>
        Courbet looked at that rule and did the one thing it forbade. He went home to Ornans, and instead of painting the death of some Greek warrior he had never met, he painted the death of his great-uncle, and he painted the actual townsfolk who came to the actual grave, and he painted all of them life-size. He was not illustrating a story. He was, in effect, telling the entire ranking system that its ranks were a fiction — that a real death in a real town was as serious as anything in the Louvre. The next chapter is what that looked like.
      </p>
    </article>
  )
}

function BuFrieze({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Ten feet tall, twenty-two feet wide" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the wall it needs. <em>A Burial at Ornans</em> is roughly <strong>10 feet 4 inches tall and 21 feet 11 inches wide</strong> (about 3.15 by 6.68 meters) — call it ten feet tall and twenty-two feet wide and you are close enough to feel it. That is not a painting you hang. That is a painting you give a room to. Stand in front of it and the figures are your own height; you are not looking at a picture of a funeral so much as standing at the back of one. At the heroic scale the Realism overview describes, this acreage was the academy&rsquo;s currency for the death of kings. Courbet spent the whole sum on a country graveside.
      </p>
      <p style={proseStyle}>
        He painted it in 1849–1850, begun in Ornans, where he had to build the thing more or less by main force — there is barely a studio in the Franche-Comté big enough to back up far enough to see a canvas this size whole. The subtitle he gave it doubled down on the joke: he called it a &ldquo;historical picture of a burial at Ornans,&rdquo; deliberately borrowing the language of history painting (the prestige category) for a thing with no history in it at all, only a Tuesday in a small town.
      </p>

      <SectionHeader accent={accent} label="The frieze" title="Reading the crowd left to right" />
      <p style={proseStyle}>
        Now look along it, because the composition is doing something deliberate. The <strong>more than forty figures</strong> are not arranged in a pyramid building to a hero at the center, the way a proper history painting would marshal a crowd toward its protagonist. They are strung out in a long horizontal band — a <strong>frieze</strong> (a continuous decorated strip, the word borrowed from the carved ribbons that run along the tops of Greek temples) — shoulder to shoulder across the full twenty-two feet, every head at roughly the same height. There is no hero. There is no center of importance. Your eye just walks the line, the way it would walk a real crowd, finding no one it is told to care about more than anyone else.
      </p>
      <p style={proseStyle}>
        The format was not invented on the spot. Courbet had taken it from the <strong>Dutch 17th-century civic-guard group portrait</strong> (the genre of Rembrandt&rsquo;s <em>Night Watch</em> and Frans Hals&rsquo;s militia pictures — rows of named, equally-lit men paid to be remembered together), which he studied on a trip through Belgium and the Netherlands in 1846–47. But borrowing the format makes the move sharper, not softer: Courbet slotted the rural poor of a French market town into the exact compositional slot the Amsterdam guilds had paid to occupy. Anyone who knew the old pictures felt the swap.
      </p>
      <p style={proseStyle}>
        And these were real, specific people. The townsfolk of Ornans posed for Courbet one by one in his studio — the mayor, the justice of the peace, the priest, the gravedigger, and his own family: his father <strong>Régis Courbet</strong> among the men, his sisters <strong>Juliette</strong>, <strong>Zoé</strong>, and <strong>Zélie</strong> among the women. The result is not a generalized &ldquo;crowd of mourners&rdquo; but a row of recognizable individuals, which is exactly why it unsettled people: you could, in 1850, point at the canvas and name the butcher.
      </p>

      <SectionHeader accent={accent} label="The hole" title="The grave, the gravedigger, the skull" />
      <p style={proseStyle}>
        Walk to the front-center and you find the thing the whole crowd is gathered around, and it is not a coffin or a cross or a grieving widow. It is a hole. An <strong>open grave</strong> gapes at the foreground, dark and empty, waiting. Courbet paints it as a flat black wedge cut into the turned earth, the soil broken and pale at its lip, the inside given almost no depth at all — a void rather than a pit, a blank dropped into the dead center of a monumental canvas where a history painter would have put the hero. Your eye reaches the most important spot in the picture and finds nothing in it.
      </p>
      <p style={proseStyle}>
        Beside it a <strong>gravedigger kneels</strong>, patient, in his shirtsleeves, paused mid-job — the most unglamorous figure at any funeral, the man who actually has to do the work, given a front-row seat. And near the lip of the pit, on the turned earth, lies a <strong>skull and a scatter of bones</strong>, dug up to make room for the new occupant. It is the bluntest possible memento mori — an old artistic convention meaning, simply, that you too will die. Courbet renders it not as an allegorical skeleton with a scythe but as the actual bones of whoever was buried in this plot last, casually shoveled aside.
      </p>
      <p style={proseStyle}>
        This is the radical absence the Realism overview names: no allegory of Death, no swooning angel, no shaft of heavenly light breaking through the clouds to receive the soul. The history-painting machinery is simply switched off. There is a hole, there are bones, there is a man with a shovel, and there is a row of people who will each be in that hole soon enough.
      </p>

      <SectionHeader accent={accent} label="The jolt of red" title="Crucifix and beadles" />
      <p style={proseStyle}>
        Scan the whole twenty-two feet and you will count exactly two notes of warm color, and they are worth finding because they are nearly the only ones. Up at left-center, a <strong>crucifix is held aloft against the flat gray sky</strong>, carried by a bearer — the one upward vertical in a painting that is otherwise all horizontal, the cross standing over the crowd as the priest reads.
      </p>
      <p style={proseStyle}>
        And near the priest stand the <strong>beadles in red</strong> — a beadle being a minor church officer, a kind of parish usher who keeps order at services and processions. Courbet dressed them in vivid red robes, two slabs of hot color in a sea of funeral black and graveyard gray. The eye snags on them instantly. In a history painting that red would belong to a cardinal or a king. Here it belongs to two small-town church functionaries with frankly ordinary, ruddy, unidealized faces, and the effect is almost comic — the grandest color in the picture spent on its most minor officials.
      </p>

      <SectionHeader accent={accent} label="Men, women, and a dog who doesn't care" title="The crowd, sorted" />
      <p style={proseStyle}>
        Look at how the crowd is sorted. The <strong>men are massed on the left</strong>, the <strong>women on the right</strong> — some of the women pressing handkerchiefs to their faces, the only open grief in the painting — the social geography of a real country funeral reproduced exactly, because Courbet was painting one. Pick one face out of the line and it stops being a crowd: one of the women on the right has pressed a white handkerchief flat against her cheek and eyes, her head tipped slightly down, so that you get not a noble profile of Grief but the specific, awkward, half-hidden look of an actual woman trying not to cry in front of the neighbors. Nobody is striking a pose for the ages. Faces are tired, jowly, distracted, plain; some are frankly unflattering. This is what a crowd of real people actually looks like when it stands in a cold churchyard, which is to say: not like a frieze of noble Romans.
      </p>
      <p style={proseStyle}>
        Among the men, two of them are wearing the wrong decade. Two old fellows stand in the dark suits and <strong>knee breeches of 1793</strong> — the dress of the First Republic, the high Revolutionary years — half a century out of fashion in 1850. They are real sitters (friends of Courbet&rsquo;s grandfather), and the antique costume is a deliberate time-stamp: these are men who lived through the Revolution, planted in the front of a contemporary crowd, quietly threading France&rsquo;s republican memory into a country burial. Hold that detail; it does real work in Chapter 3.
      </p>
      <p style={proseStyle}>
        And then, down in the right foreground, the detail that tells you everything about Courbet&rsquo;s nerve: a <strong>small dog</strong>, back to the grave, sniffing off toward the edge of the canvas, completely indifferent to the solemn human business behind it. A dog has wandered into the most sacred moment a community has, and it does not care, and Courbet not only let it stay, he gave it the front row. No history painter alive would have permitted that animal. Its boredom is the painting&rsquo;s flat refusal to pretend the moment is more exalted than it is.
      </p>

      <SectionHeader accent={accent} label="The cliff" title="Ornans itself, in the background" />
      <p style={proseStyle}>
        Behind the whole crowd, closing off the top of the canvas, runs a band of low <strong>limestone cliffs</strong> under a flat, indifferent gray sky. Look at the rock itself: pale, chalky, almost the same washed-out value as the sky above it, so that cliff and sky nearly dissolve into one bright blank. It does not recede the way a landscape is supposed to — it stands up like a near-featureless wall, flat and frontal, pressing the long line of figures forward and packing them against the front of the picture and the viewer. There is no deep space to escape into; the rock simply shuts the door at the back. This is not invented scenery. It is the real escarpment of the Ornans valley, the pale rock wall that genuinely backs the town — Courbet put his actual hometown behind his actual neighbors. A history painting would open onto an idealized Italianate distance or a swirl of storm and glory. Courbet gave his mourners a hard, horizontal shelf of plain local stone. Nature here offers no comfort and no drama. It is just the rock these people live under, the rock they will be buried in, going on being rock.
      </p>
    </article>
  )
}

function BuSalon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1850–51" title="Bringing the village to the capital" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>{' '}
        painting this size is built to be seen in one place: the <strong>Salon</strong> — the official annual State exhibition, the one show in France where a career was made or buried (the academy ran it; you met it one level up). Courbet hauled the Burial to Paris and got it into the <strong>Salon of 1850–1851</strong> (the Salon ran across that winter), and there, in the official halls where the academy displayed the art the State approved of, ten feet of dead-serious country funeral went up on the wall next to the gods and the goddesses and the Roman senators.
      </p>
      <p style={proseStyle}>
        And it did not arrive alone. In the same Salon Courbet also hung <strong>The Stone Breakers</strong> (1849–50), another monumental canvas — two road laborers, life-size, breaking rock — that he had finished just before this one. Visitors met the pair as a single coordinated assault: the same radical program (heroic scale, common laborers, zero idealization) delivered twice in the same hall, the Burial as the larger and more extreme half. (The Stone Breakers itself is gone — destroyed in 1945 in the bombing of Dresden — and its story belongs to the Realism overview; here it matters only as the Burial&rsquo;s twin.) Two pictures, one program, and the program detonated.
      </p>

      <SectionHeader accent={accent} label="Why a country funeral blew up Paris" title="The Salon as detonator" />
      <p style={proseStyle}>
        Of all the pictures Courbet ever made, this is the one that turned him from a promising provincial into a national scandal. The strange part is not that critics disliked it; critics dislike things every year and Paris forgets by spring. The strange part is that a <em>funeral</em> — a flat, gray, undramatic country funeral — became, for a season, one of the most talked-about objects in France. To see why, you have to understand that the Salon&rsquo;s own structure is what turned a painting into a bomb. The Salon was <em>the</em> show, the single official stage, the one room where everything respectable in French art stood together to be ranked. A picture hung there could not be quietly ignored; it was in the room with the gods, demanding to be measured against them. Courbet had not snuck his heresy into a side gallery. He had walked it through the front door of the temple and stood it next to the altar — and the temple had to respond.
      </p>
      <p style={proseStyle}>
        So what did the room actually see? First, an assault on beauty. The faces were common, ordinary, some of them unflattering — real market-town faces, not the smooth idealized features the Salon trained its painters to produce. It helps to picture what they were comparing it against: the Salon&rsquo;s reigning style finished a painting until the brushwork vanished and the skin turned to flawless porcelain, a nude goddess sliding poreless along a wave, every surface licked smooth (the kind of academic ideal the era overview describes). Set the Burial beside that and it looked like an insult — rough, dark, heavy, full of double chins and bad posture and weather-beaten skin. Courbet had not failed to make his people beautiful; he had refused to, and to an eye trained on porcelain goddesses the refusal read as an attack on beauty itself. The critics called it ugly.
      </p>
      <p style={proseStyle}>
        But ugliness in a small picture is a private matter; ugliness across twenty-two feet of canvas is a manifesto, and that was the deeper offense — the <em>scale</em>. That much canvas, that much seriousness, that much <em>room</em>, was reserved by the hierarchy of genres for history painting&rsquo;s top rung: gods, kings, saints, the great deaths and the great deeds. To spend it on a provincial funeral full of nobodies was, in the academy&rsquo;s grammar, a category error so loud it sounded like a threat. Either thing alone the Salon could have swallowed — a small picture of a funeral, fine; a huge picture of a coronation, fine. It was the <em>combination</em> that could not be forgiven, because the combination said the whole ranking was a lie. Courbet had taken the bottom rung of the ladder and bolted it to the top, and everyone who understood the ladder understood the violence of that.
      </p>
      <p style={proseStyle}>
        And then there was the year. The Burial went up only two years after <strong>1848</strong> — the February revolution that toppled King Louis-Philippe and, for a few raw months, put the ordinary people of France (workers, peasants, the poor) briefly at the center of their own history before the army closed the experiment down (the Realism overview tells that year in full). Memories were fresh and the propertied classes were frightened. And the fear had something to fix on right there in the paint: planted in the crowd, in the dark suits and breeches of 1793, stand two old men dressed as veterans of the First Republic — Courbet&rsquo;s own choice of costume, a visible reminder, in 1850, of the last time ordinary Frenchmen had been dangerous. So when some critics read a socialist menace into the canvas, they were not only reacting to the proximity of the barricades; they were reacting to the rural poor made enormous and dignified, with the ghosts of &rsquo;93 standing among them, hung in the State&rsquo;s own exhibition.
      </p>

      <SectionHeader accent={accent} label="The voice that fought back" title="Champfleury and the name 'Realism'" />
      <p style={proseStyle}>
        The painting was not left to the hostile critics alone. Its loudest defender was the writer <strong>Champfleury</strong> (Jules Husson, 1821–1889), a friend of Courbet&rsquo;s and the critic widely credited with first using the word &ldquo;<strong>Realism</strong>&ldquo; in the new art-critical sense — naming, in print, the very thing this painting was doing. Against the charge that the Burial was political propaganda, Champfleury answered flatly: &ldquo;there is not a trace of socialism in <em>A Burial at Ornans</em>.&rdquo; (That the charge needed rebutting at all tells you how live the socialist reading was.) The point worth holding is that Realism never was one painter&rsquo;s lone stunt. It was argued into being by a circle — Courbet, Champfleury, and others who gathered at the Brasserie Andler, the Paris beer hall their friends nicknamed &ldquo;the Temple of Realism.&rdquo; Courbet painted the manifesto; his friends supplied the word for it.
      </p>
    </article>
  )
}

function BuRomanticism({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Courbet's own verdict" title="What he said he had buried" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>C</DropCap>
        ourbet, who never in his life under-explained his own importance, later wrote — or is at least widely recorded as having said — that the Burial was, in fact, &ldquo;<strong>the burial of Romanticism</strong>.&rdquo; (There is no single dated letter pinning the line down; it survives as strong secondary-source consensus, so take it as a remark genuinely his, not a quote anyone invented.) It is one of the great double meanings in art history, and worth unfolding slowly, because it is the key to why this particular painting is treated as the public birth of a movement rather than just a big sad picture.
      </p>
      <p style={proseStyle}>
        A painting of a burial — and what it buries, he says, is not only his great-uncle but an entire way of making art.
      </p>

      <SectionHeader accent={accent} label="What 'Romanticism' meant" title="The thing in the grave" />
      <p style={proseStyle}>
        To get the line you have to know what was in the coffin. <strong>Romanticism</strong> (the generation of painting just before Courbet) was, the Realism overview explains, the academy&rsquo;s opposite excess: exotic settings, heaving drama, shipwrecks and harems and battlefield agony, emotion cranked to the ceiling. Where the academy painted cold marble gods, the Romantics painted hot fevered passion. They were enemies of each other, but from Courbet&rsquo;s point of view they were the same enemy: both were ways of <em>not</em> painting the actual, ordinary, present-tense world. One escaped into antiquity; the other escaped into drama. Neither would deign to paint a Tuesday in Ornans.
      </p>
      <p style={proseStyle}>
        So when Courbet says the Burial buried Romanticism, he means this flat, gray, unbeautiful, undramatic, completely real funeral is the thing that kills the fever dream. You cannot look at this hole in the ground, this bored dog, these double chins, and still believe art&rsquo;s only proper business is gods and shipwrecks. The painting does not argue against Romanticism. It simply stands there being real at enormous scale, and makes the alternative look like costume drama.
      </p>
      <p style={proseStyle}>
        It helps that Courbet was not theorizing alone. The philosopher <strong>Pierre-Joseph Proudhon</strong> (1809–1865) — an Ornans man himself, and France&rsquo;s most famous radical thinker — was Courbet&rsquo;s friend and intellectual partner for years, and read Courbet&rsquo;s painting as social truth-telling, art with a public conscience. The self-understanding behind &ldquo;the burial of Romanticism&rdquo; was sharpened in that company, not generated in a vacuum.
      </p>

      <SectionHeader accent={accent} label="A manifesto before the manifesto" title="Realism goes public" />
      <p style={proseStyle}>
        The Realism overview tells the famous later moment: 1855, the Pavilion of Realism, the tent Courbet built across from the world&rsquo;s fair with a printed catalogue inside, the place where Realism finally got its <em>name</em> in writing and its argument on paper. That is where Realism became a stated program.
      </p>
      <p style={proseStyle}>
        But the Burial came five years earlier, and it made the argument with no words at all. It is the movement&rsquo;s public birth as a <em>fact</em> before it was a public birth as a <em>theory</em>. In 1850, before there was a tent or a catalogue or the word &ldquo;Realism&rdquo; on a sign, there was already a ten-foot wall of plain reality hanging in the official Salon, forcing every visitor in France to deal with it. The painting did the work a manifesto does — declared what art was now allowed to be about — except it declared it in oil instead of ink, and it declared it inside the enemy&rsquo;s own building. The tent of 1855 put Realism into words. The Burial of 1850 had already put it on the wall.
      </p>

      <SectionHeader accent={accent} label="What it cracked open" title="The subject of art" />
      <p style={proseStyle}>
        Step back and the size of the rupture is clear. Before the Burial, the question &ldquo;what is a serious painting allowed to be <em>about</em>?&rdquo; had an official answer, ranked and policed: gods at the top, the present at the bottom. After the Burial — and after the fight it started — that answer was permanently in doubt. Courbet had proved, on the largest possible canvas, in the most public possible room, that the ordinary contemporary world could carry the full weight and scale of the grandest art. He did not single-handedly cause everything that followed (the honest version resists hanging a whole century on one canvas). But the crack he opened — the present is a fit subject for serious art, at any scale a painter dares — is the crack the rest of modern painting pours through.
      </p>
    </article>
  )
}

function BuAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="From the artist to the nation" title="Juliette's gift" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting outlived its painter, and the way it entered the public collections is its own quiet ending. Courbet&rsquo;s later life went badly: the Realism overview tells how his politics caught up with him after the Paris Commune of 1871 (the brief revolutionary workers&rsquo; government in Paris, which Courbet publicly backed) and he died in exile in Switzerland in 1877. The Burial — this enormous, hard-to-house, once-scandalous thing — was still in the family.
      </p>
      <p style={proseStyle}>
        It was Courbet&rsquo;s sister, <strong>Juliette Courbet</strong> — one of the women you can find in the canvas itself — who handed the painting to France. By the standard account she gave it to the State in <strong>1881</strong>, four years after her brother&rsquo;s death, donating to the nation the very canvas the nation&rsquo;s official Salon had once recoiled from. Sit with that for a second. The picture the academy had treated as an assault on its values — the thing the critics called ugly and dangerous — was given, for free, by the dead painter&rsquo;s sister, into the permanent keeping of the country whose taste it had outraged. The outrage became the heirloom.
      </p>

      <SectionHeader accent={accent} label="Louvre to Orsay" title="The wall it hangs on now" />
      <p style={proseStyle}>
        For a long time the Burial hung in the <strong>Louvre</strong>, the great Paris museum, taking its place at last among the very history paintings it had once mocked. Then, in <strong>1986</strong>, the <strong>Musée d&rsquo;Orsay</strong> (the Paris museum dedicated to nineteenth-century art, installed in a converted former railway station on the Left Bank) opened, and the Louvre&rsquo;s nineteenth-century collection moved across the river to fill it. The Burial went with it.
      </p>
      <p style={proseStyle}>
        It is there now, in the Musée d&rsquo;Orsay, and you can stand at the back of that country funeral any day the museum is open. The canvas that once needed defending hangs as a fixed point of the national collection, a thing schoolchildren are walked past as obviously important — which is the strangest fate of all for a painting whose entire scandal was that it refused to be obviously important.
      </p>

      <SectionHeader accent={accent} label="Why it still matters" title="The painting where the subject cracked open" />
      <p style={proseStyle}>
        So what is the Burial today, beyond a famous big picture of a sad day in a small town? It is the canvas where the <em>subject matter</em> of modern art split open. Every later painter who pointed a serious brush at an ordinary contemporary thing — a railway carriage of the tired poor, a bottle of absinthe, a haystack at noon, a soup can — is working in the space Courbet pried open with a country funeral.
      </p>
      <p style={proseStyle}>
        The throughline is worth saying flat, one more time: he took the single most ordinary event there is, the burial of an unimportant man in a backwater town, and he painted it at the size and with the seriousness Europe reserved for the death of kings and saints. No hierarchy, no idealization, no hero — more than forty real villagers, life-size, standing around a hole in the ground, with a bored dog in front and the bones of the last occupant scattered in the dirt. That mismatch of humble subject and monumental scale was the scandal, and it was also the door. Realism walked through it first. Everything restless in modern painting walked through after.
      </p>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────
// The Stone Breakers (Courbet, 1849) — the five chapters
// Drafted by the AUTHOR agent in the gated art pipeline. Same JSX
// pattern as the BuTown…BuAfterlife functions in art-section-reader.tsx
// (helpers SectionHeader / DropCap; styles proseStyle / italicStyle;
// <strong> / <em>; <article style={{ padding: '18px 18px 40px' }}>;
// `first` + <DropCap> on the opener). NO inline figures — the work
// page already shows the hero painting (zoomable) + the Look-closer
// pointers, exactly like the Burial. Section ids: road / looking /
// salon / meaning / afterlife (match STONE_BREAKERS.sections[].id).
// ─────────────────────────────────────────────────────────────

function SbRoad({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Near Maisières · 1849" title="Two men on a road" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        ne day in the autumn of 1849, a young painter was riding his carriage out of the French countryside to go paint a landscape, and he stopped to watch two strangers break rocks by the side of the road. That is the whole origin of one of the most important paintings of the nineteenth century: a man pulled over to look at the dullest, hardest, most invisible work there is — smashing stone into gravel so that other people can have a road — and decided it was worth a canvas eight and a half feet wide.
      </p>
      <p style={proseStyle}>
        The painter was <strong>Gustave Courbet</strong> (1819–1877), the loud, supremely self-certain man who would become the public face of <strong>Realism</strong> — the new movement that insisted ordinary, contemporary, unglamorous life was a fit subject for serious art, painted plain, with none of the official art world&rsquo;s polish (his fuller story, and the movement&rsquo;s, are told one level up in this app, in the Realism overview). He grew up in <strong>Ornans</strong>, a small town in eastern France, and that autumn he was near a village called <strong>Maisières</strong>, on his way to paint a château, when the two stone breakers caught his eye. He was not working alone, either: behind him stood a whole Ornans-and-Paris Realist circle — the critic <strong>Champfleury</strong>, who would give the movement the name &ldquo;Realism,&rdquo; and Courbet&rsquo;s boyhood friend the poet <strong>Max Buchon</strong>, who was among the first to champion these very pictures and describe them in print (the Realism overview carries that circle in full).
      </p>

      <SectionHeader accent={accent} label="The letter" title="“The most complete expression of poverty”" />
      <p style={proseStyle}>
        We know how it happened because Courbet wrote it down. In a letter that November to his friend, the historian <strong>Francis Wey</strong>, he described the scene almost like a hunter describing game: he had stopped to consider two men breaking stones on the road, and, by his own account, one rarely sees &ldquo;the most complete expression of poverty&rdquo; so perfectly arranged — so, right there on the spot, he got the idea for a painting, and arranged for the two men to come to his studio the next morning to pose. He did not sketch them and invent the rest. He brought the actual road laborers indoors and painted <em>them</em>.
      </p>
      <p style={proseStyle}>
        Hold onto how he framed it, because it matters for everything the painting was later accused of. Courbet did not say &ldquo;I have found a symbol of the suffering working class.&rdquo; He said, in effect, <em>I have seen them.</em> The starting point was not a political idea looking for a picture; it was a real sight — two specific men, by a specific road — that he found so stark he couldn&rsquo;t drive past it. The politics arrived later, supplied by other people. The painting began as a stop on a country road.
      </p>

      <SectionHeader accent={accent} label="The decision" title="Paint them at the size of gods" />
      <p style={proseStyle}>
        To feel how strange Courbet&rsquo;s next move was, you have to know the rule he was about to break. European painting ran on a ranking system called the <strong>hierarchy of genres</strong> — an official ladder that sorted subjects by importance (the Realism overview lays it out in full). At the very top sat grand scenes from myth, scripture, and ancient legend: <strong>history painting</strong>, the prestige category, where &ldquo;history&rdquo; meant gods and heroes and saints, not last week&rsquo;s news. At the very bottom sat plain modern life. And the unspoken law was about <em>size</em>: a big canvas was a promise that the thing on it mattered enormously, and big canvases were reserved for the top of the ladder. You were allowed to paint a peasant. You were not allowed to paint a peasant at the scale of a god.
      </p>
      <p style={proseStyle}>
        Courbet painted his two stone breakers <strong>life-size</strong> — at, or close to, the height of real people — on a canvas roughly <strong>5 feet 5 inches tall and 8 feet 5 inches wide</strong> (about 165 by 257 centimeters). Stand where it once hung and the laborers would be your own size, breaking rock at your eye level. That is not the scale of a quaint little scene of rustic life, the sort of small, charming &ldquo;look at the simple poor folk&rdquo; picture a Salon could happily ignore. That is the scale of an altarpiece. Courbet took the two least important men he could find and gave them the room the academy kept for the death of heroes.
      </p>
      <p style={proseStyle}>
        It is worth being clear about why <em>size</em> was such a loaded weapon, because to a modern eye, where every photo on a phone is the same size, the whole fuss can seem strange. In Courbet&rsquo;s world, a picture&rsquo;s dimensions were a price tag on its importance — the bigger the canvas, the more the subject was officially declared to matter. A tiny picture of a peasant was a fine, harmless thing, the visual equivalent of a polite little anecdote. The same peasant rendered as tall as a real man, on a wall of canvas, was a public declaration that this person was as worth your serious attention as any saint or general. Courbet understood the grammar exactly, and he used it like a megaphone. The next chapter is what came out of it, inch by inch — which is the only way to read this picture, because the whole argument is in the looking.
      </p>
    </article>
  )
}

function SbLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A boy, an old man, and a road" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        efore anything else, a warning about color, because it changes how you should look. <em>The Stone Breakers</em> no longer exists — the original was lost at the end of the Second World War (Chapter 5) — and every image of it you can find, including the one on this page, is a reproduction of a reproduction. The version we show is nearly <strong>gray</strong>, drained of color, almost a black-and-white photograph. That muted, ashen look is <em>not</em> what Courbet painted; it is the fingerprint of a lost picture, a record made from poor copies. So as you look, read the shapes, the poses, the gestures, the rags — and take the grayness as the sound of an absence, not as the artist&rsquo;s palette.
      </p>
      <p style={proseStyle}>
        With that said: there are two figures, and almost nothing else. No crowd, no drama, no story unfolding. Just two men, a heap of broken stone, a few tools, and a steep bank of earth rising behind them. The composition is brutally simple, and every element earns its place.
      </p>

      <SectionHeader accent={accent} label="The boy" title="The one who carries" />
      <p style={proseStyle}>
        On the <strong>left</strong> stands a <strong>young man</strong> — really a boy, too young for this kind of work — straining to lift a heavy basket of broken stone. His whole body is wrenched by the load: knees bent, back twisted, every line of him fighting the weight. And here is the first thing to notice, because it governs the entire painting: <em>you never see his face.</em> He is turned away from you, so that you get his back, the nape of his neck, the strain in his shoulders — and nothing of his expression at all.
      </p>
      <p style={proseStyle}>
        Look at what he is wearing. His white shirt has torn open across the shoulder blade, gaping at the seam. A leather strap crosses his back to hold up trousers that are themselves falling apart, and his shoes are coming off his feet, mismatched and split. Courbet paints the poverty with the patience of an inventory clerk: not &ldquo;a ragged boy&rdquo; in general, but <em>this</em> rip, <em>this</em> strap, <em>this</em> hole. The detail is the dignity. He treats the boy&rsquo;s broken clothes with exactly the care a court painter would lavish on a duke&rsquo;s lace.
      </p>

      <SectionHeader accent={accent} label="The old man" title="The one who breaks" />
      <p style={proseStyle}>
        On the <strong>right</strong>, the boy&rsquo;s partner kneels on one knee on a little pad of straw, a long-handled hammer raised over his shoulder, caught at the very top of its arc, an instant before it comes down on the stone. Courbet said in his letter that the man was about <strong>seventy</strong>. And now the pairing does its quiet, devastating work: on one side a child too young for this labor, on the other an old man too old for it, and <em>nothing in between.</em> There is no figure in the prime of life here, no strong young worker in his element. There is only the beginning of a hard life and the end of one — the same crushing job at both ends of a human existence, as if to say: this is what the road costs, from childhood to the grave, and it never lets up.
      </p>
      <p style={proseStyle}>
        Like the boy, the old man has no visible face. His head is bent to his work and shaded under the brim of a battered <strong>straw hat</strong>, so the brim does to him what the turned back does to the boy: it hides him. His trousers are patched and re-patched; on his feet are wooden <strong>sabots</strong> (the heavy clogs French peasants wore) so cracked you can nearly see the heel through them. He is rendered with the same forensic attention to ruin — a striped waistcoat, a coarse shirt, the works.
      </p>

      <SectionHeader accent={accent} label="The faces" title="The decision that runs the picture" />
      <p style={proseStyle}>
        Put the two together and you arrive at the single most important choice Courbet made: <strong>neither man has a face you can see.</strong> One turns his back; the other&rsquo;s is lost under a hat. This was not laziness or accident — it scandalized people at the time precisely because it was so deliberate. A contemporary critic, irritated, complained that Courbet had &ldquo;suppressed the two heads,&rdquo; noting that the standing worker shows only the back of his neck and the kneeling one has hidden his head under his straw hat. He was right, and he had missed why.
      </p>
      <p style={proseStyle}>
        Think about what a visible face does. A face — especially a tired, pleading, soulful one — turns a laborer into a <em>character</em>, someone you can pity, an individual whose particular sad story you&rsquo;re invited to feel for. That is the whole engine of sentimental art: give the poor a noble, suffering face and let the comfortable viewer feel a warm, safe pang of sympathy. Courbet slams that door. By hiding both faces he refuses you the easy emotion. You don&rsquo;t get to know these men or feel sorry for them as individuals. You get only the bodies, the effort, the rags, and the work — which is far harder to feel sentimental about, and far harder to look away from. The painting doesn&rsquo;t ask for your pity. It just shows you the labor and dares you to keep watching.
      </p>

      <SectionHeader accent={accent} label="The setting" title="Tools, a pot, and a wall of earth" />
      <p style={proseStyle}>
        Around the two men, Courbet scatters the gear of the job — a pick, a basket, heaps of broken rock — with no arrangement, no grace, just the litter of actual work. Off at the far right, easy to miss, sits a small dark <strong>cooking pot</strong> with a scrap of bread beside it, presumably the men&rsquo;s lunch, set down in the dirt. It is the only soft, domestic note in the whole picture, and it is shoved to the very margin, almost out of frame, as if even eating is an afterthought to the rock.
      </p>
      <p style={proseStyle}>
        And behind everything: a <strong>wall</strong>. There is almost no sky. A steep, dark bank of earth rises across nearly the entire top of the canvas, leaving only a thin wedge of pale light in the upper-right corner. That bank does something specific and airless — it presses the two figures forward, packing them flat against the front of the picture with nowhere to recede into. A normal landscape opens a window: a horizon, distance, sky, somewhere for the eye to escape. Courbet gives his laborers no window. They are pinned between the stone they break in front and the bank of earth that shuts the door behind. There is no exit in this picture, which is rather the point of the lives it shows.
      </p>
    </article>
  )
}

function SbSalon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1850–51" title="The painting did not arrive alone" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>{' '}
        painting this size is built for one destination: the <strong>Salon</strong> — the official annual State exhibition, the single show in France where an artistic career was made or buried (the academy ran it; you meet it properly in the Realism overview). In the <strong>Salon of 1850–1851</strong> (the show ran across that winter), Courbet hauled his eight-and-a-half feet of road laborers into the official halls and hung them up among the gods, the goddesses, and the Roman senators that the State liked to look at.
      </p>
      <p style={proseStyle}>
        But <em>The Stone Breakers</em> did not arrive alone, and that is the key to its impact. In the very same Salon, Courbet also hung <strong>A Burial at Ornans</strong> — an even more enormous canvas, ten feet tall and twenty-two wide, showing a whole village funeral at the scale Europe reserved for the death of kings (it has its own deep read in this app, the twin to this one). Visitors met the two pictures as a single coordinated assault: the same radical program — heroic scale, common people, zero idealization — delivered twice in the same hall, by the same provincial troublemaker, in one season. One picture might be a curiosity. Two, hung together, deliberately, is a manifesto.
      </p>

      <SectionHeader accent={accent} label="The pairing" title="Why two pictures hit harder than one" />
      <p style={proseStyle}>
        It is worth pausing on how cleverly the pair worked, because between them they covered the whole ground. <em>A Burial at Ornans</em> took the great public ceremony — death, the church, the community gathered — and filled it with plain, unflattering, real townsfolk at monstrous scale. <em>The Stone Breakers</em> took the opposite pole: not a ceremony but pure, dull, private labor, with no event at all, just two anonymous men doing the most thankless work there is. Together they said the same thing from two directions: <strong>the ordinary, contemporary world — its funerals and its road work, its mourners and its laborers — deserves the size and seriousness art had always saved for myth.</strong> Wherever a 1851 visitor turned in that room, Courbet had a giant canvas waiting to make the argument again.
      </p>
      <p style={proseStyle}>
        And the room reacted. The press did to <em>The Stone Breakers</em> what frightened, mocking critics always do — it went after the small, undeniable detail. Caricaturists seized on the old man&rsquo;s wooden clogs and drew them comically, grotesquely huge, the sabots swelling to the size of boats. That sounds like a trivial joke, but it is a tell. You exaggerate the clogs when you can&rsquo;t quite say out loud what really bothers you: that a painter has taken the kind of poverty you normally step around on the street and made it eight feet wide and dead serious, and hung it where you came to admire beauty.
      </p>

      <SectionHeader accent={accent} label="The deeper offense" title="Bottom of the ladder, bolted to the top" />
      <p style={proseStyle}>
        The mockery covered a real alarm, and it is the same alarm the Burial set off, so the Realism overview and the Burial read both tell it in full; here it is enough to name the mechanism. The hierarchy of genres reserved big, serious canvases for the top of the ladder — gods, kings, the great deaths and deeds. To spend that scale and that seriousness on two nameless road workers was, in the academy&rsquo;s grammar, a category error so loud it sounded like a threat. Courbet had taken the bottom rung of the ladder and bolted it to the top, and everyone who understood the ladder understood the violence of the swap. The painting was not just ugly to them. It was an argument that the whole ranking was a lie — and it was making that argument inside the State&rsquo;s own building, in the one room where French art came to be told what mattered.
      </p>
      <p style={proseStyle}>
        The timing sharpened every nerve. The Salon of 1850–51 opened only two years after <strong>1848</strong> — the revolution that toppled the king and, for a few raw months, put the ordinary working people of France at the very center of their own history before the army shut the experiment down (the Realism overview tells that year in full). The barricades were a fresh, frightening memory, and the propertied classes who strolled the Salon were exactly the people who had been scared by them. So when a painter hung two giant, unsmiling laborers in the official halls — laborers given the dignity and scale of heroes, in the same year the memory of armed workers was still raw — it landed as more than a question of taste. To a nervous viewer in 1851, those two anonymous men with their hammers were not just ugly. They were, faintly, a threat. Courbet always denied he meant them that way. We will get to whether anyone believed him.
      </p>
    </article>
  )
}

function SbMeaning({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The reading" title="“The first socialist painting”" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he label that has stuck to this picture for a century and a half is &ldquo;the first socialist painting.&rdquo; It is a tidy phrase, and like most tidy phrases about art, it needs unpacking before you believe it — because it describes a <em>reading</em> of the painting, not a fact about it, and it came mostly from one very particular reader.
      </p>
      <p style={proseStyle}>
        That reader was <strong>Pierre-Joseph Proudhon</strong> (1809–1865), and he is worth a sentence of his own. Proudhon was, in his day, France&rsquo;s most famous radical thinker — the man who answered his own question &ldquo;What is property?&rdquo; with the line &ldquo;property is theft,&rdquo; and the first writer to call himself an <strong>anarchist</strong> (someone who believes society should run without rulers or the state). He was also, conveniently, an Ornans man and Courbet&rsquo;s friend. When Proudhon looked at <em>The Stone Breakers</em>, he did not see two men by a road. He saw the entire situation of the laboring poor — a society that uses people up between childhood and old age and then discards them — and he read the picture as social truth-telling, a condemnation in paint of a world that let this happen. The young worker, Proudhon wrote, stood for the whole proletariat (the class of people who own nothing and live by selling their labor). To him, the painting was a masterpiece because it was an <em>argument</em>.
      </p>

      <SectionHeader accent={accent} label="The painter's version" title="“I have seen them”" />
      <p style={proseStyle}>
        Here is the catch, and it is a good one: <strong>Courbet didn&rsquo;t say any of that.</strong> Go back to his own letter, the one from Chapter 1. He didn&rsquo;t write that he had found a symbol of class oppression; he wrote that he had stopped his carriage near Maisières, seen two real men breaking stones, been struck by the sheer completeness of their poverty, and asked them to come pose. By his own framing, he painted what he <em>saw</em>, not what he <em>believed</em>. The politics, the manifesto, the &ldquo;socialism&rdquo; — that was the meaning his friends and critics poured into the picture afterward. Proudhon supplied the theory. Courbet supplied the two men.
      </p>
      <p style={proseStyle}>
        Both things can be true at once, and the honest version holds them together rather than picking one. A painter can sincerely set out to record a sight and still choose that sight, and paint it eight feet wide, and hang it in the State&rsquo;s exhibition next to a village funeral — and those choices carry a politics whether the painter signs a manifesto or not. Courbet was no innocent: he was a man of the left, painting laborers at heroic scale two years after a revolution. But the picture is more powerful, not less, for refusing to <em>announce</em> its meaning. It doesn&rsquo;t lecture. It just puts two ruined men in front of you, at your own height, and lets the size do the arguing.
      </p>

      <SectionHeader accent={accent} label="Dignity, not pity" title="Why the hidden faces are the whole point" />
      <p style={proseStyle}>
        This is where the looking from Chapter 2 pays off. Recall the one decision that runs the whole canvas: you never see either face. That choice is exactly what separates this painting from propaganda, and it is what lets it carry weight a poster never could.
      </p>
      <p style={proseStyle}>
        A piece of pure political art — then or now — would give the laborers <em>faces</em>: noble, suffering, soulful faces lifted toward the light, the better to wring sympathy out of you. That is the art of pity, and pity is a comfortable feeling. You feel the warm pang, you feel like a good person, and nothing in your world has to change. Courbet refuses to play that game. By hiding both faces, he denies you the pity entirely. You can&rsquo;t bond with these men, can&rsquo;t read their feelings, can&rsquo;t reduce them to a sad story. And history kept the door shut the rest of the way: the two laborers were real men Courbet met by the road near Maisières, but their names were never written down, so we will never know who they were — the painting that gave them the scale of heroes preserves everything about them except the one thing pity wants, their identity. What is left is harder and stranger: their <em>bodies</em>, their <em>effort</em>, their <em>work</em>, given the full monumental seriousness of history painting. Not &ldquo;feel sorry for the poor,&rdquo; but &ldquo;look at this, and reckon with it.&rdquo; That is dignity instead of pity — and it is the reason a quiet picture of two men breaking rocks still feels, more than a century and a half later, less like a charity appeal and more like a fact you have to answer for.
      </p>
    </article>
  )
}

function SbAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Dresden · before the war" title="The painting that ended up in Germany" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>E</DropCap>
        very other deep read in this app ends with the painting hanging safely in a museum, where you can go stand in front of it. This one cannot, and that is its strange, sad distinction: <em>The Stone Breakers</em> is the famous picture you will never see, because it no longer exists. To understand why we can still talk about it at all, you have to follow it from a French road to a German city to the worst night of a long war.
      </p>
      <p style={proseStyle}>
        After it left Courbet&rsquo;s hands, the canvas eventually made its way into German collections and came to rest at the <strong>Gemäldegalerie in Dresden</strong> — the great picture gallery of that city, one of the major museums of Europe. For decades that is where <em>The Stone Breakers</em> lived: a French painting of two French laborers, hanging as a treasure in a German museum, admired and reproduced and studied. If the twentieth century had gone differently, it would be hanging there still, and this chapter would be about which wall.
      </p>

      <SectionHeader accent={accent} label="February 1945" title="Lost in the last months of the war" />
      <p style={proseStyle}>
        In February 1945, in the final months of the Second World War, the painting was lost — and here we have to be careful, because the exact circumstances are genuinely uncertain, and it would be easy to tell a cleaner story than the evidence supports. The <strong>standard account</strong> is this: as Allied bombers closed in on Dresden, the museum tried to save its treasures by moving them out of the city toward the <strong>Königstein Fortress</strong> nearby, and the transport carrying <em>The Stone Breakers</em> — along with more than 150 other pictures — was caught in a bombing raid and destroyed. The famous firebombing of Dresden, one of the most destructive air raids of the entire war, happened that same week, which is why the painting&rsquo;s loss is so often folded into that catastrophe.
      </p>
      <p style={proseStyle}>
        But not everyone accepts that version. At least one scholar (Richard Raskin, writing in 1988) has argued that the painting was <em>not</em> on the doomed transport at all — that it had already gone <strong>missing in 1944</strong>, after being moved out of the gallery, and was simply never seen again. Today the museum&rsquo;s own records do not say &ldquo;destroyed by bombing.&rdquo; They say, more cautiously, <strong>&ldquo;missing.&rdquo;</strong> The truth is probably that no one knows for certain whether <em>The Stone Breakers</em> burned in a convoy, vanished in the chaos, or met some other end. What is not in doubt is the result: the original canvas is gone, presumed destroyed, and it is not coming back.
      </p>

      <SectionHeader accent={accent} label="Only a photograph" title="Reading a work that no longer exists" />
      <p style={proseStyle}>
        So what is left? Reproductions. Photographs and printed copies made while the painting still hung in Dresden — and that is the entire reason the image on this page looks the way it does. Remember the warning from Chapter 2: it is nearly <strong>gray</strong>, drained and ashen, almost a black-and-white photo. That is not how Courbet painted it. The grayness is the trace of the loss itself — a once-living picture surviving only as a faded copy of a copy, with much of its color gone the way the canvas went. When you look at the muted image here, you are not looking at the painting. You are looking at the <em>memory</em> of the painting, which is a different and stranger thing to stand in front of.
      </p>
      <p style={proseStyle}>
        There is one small consolation. Courbet had also painted a <strong>second, smaller version</strong> — a reversed, mirror-image copy, darker and only about a third the size — and that one survives, in the Oskar Reinhart Collection in Winterthur, Switzerland. It is not the great canvas that detonated the Salon of 1851; it is a quieter echo of it. But it means the composition itself was not entirely lost when the original was.
      </p>
      <p style={proseStyle}>
        And here is the final twist, the one worth sitting with. <em>The Stone Breakers</em> is routinely called one of the founding pictures of modern art — the painting where serious art turned to face the ordinary working world without flinching, the twin that helped Realism walk through the front door of the Salon and bolt the bottom of the ladder to the top. It changed what painting was allowed to be about. And it did all of that, and goes on doing it in every art-history class in the world, as a <em>ghost</em> — a work so influential it shaped a century, and so lost that no living person has ever seen its true colors. The two anonymous men Courbet pulled over to watch on a country road have outlasted the canvas they were painted on. That is a strange kind of immortality, and it is exactly the kind Courbet&rsquo;s whole career was an argument for: that the most ordinary lives, looked at hard enough, are the ones that last.
      </p>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────
// The Painter's Studio (Courbet, 1854–55) — the five chapters
// section ids: refusal · allegory · reading · cast · afterlife
// No inline figures (matches Burial). Helpers SectionHeader / DropCap /
// proseStyle / italicStyle assumed in scope, exactly as the Bu… functions.
// ─────────────────────────────────────────────────────────────

function StRefusal({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1855" title="The biggest show on Earth says no" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1855, Paris threw a party the size of an empire. The <strong>Exposition Universelle</strong> (a world&rsquo;s fair, the kind of vast international exhibition where every nation hauls in its machines and its manufactures and its art to show off in one place) sprawled across the city, and tucked inside it was a grand official art show meant to crown the best painting in France. Getting in was the whole game. A career was made in rooms like that. And the jury that decided who got in looked at the submissions of a loud, bearded provincial named <strong>Gustave Courbet</strong> (1819&ndash;1877) &mdash; the painter at the center of the new <strong>Realism</strong> movement, the school that insisted ordinary contemporary life was a fit subject for serious art, whose larger story is told in the Realism overview one level up in this app &mdash; and they made a decision that backfired beautifully.
      </p>
      <p style={proseStyle}>
        They accepted a good number of his smaller pictures &mdash; and then they refused his <em>two largest canvases</em>, the two monumental paintings he most wanted on that wall: <em>The Painter&rsquo;s Studio</em> and <em>A Burial at Ornans</em> (the huge, scandalous funeral scene that has its own read in this app). The first of the two is the largest, strangest thing he had ever made: a canvas nearly <strong>twelve feet tall and twenty feet wide</strong> with a title so long it reads like a dare &mdash; <em>The Painter&rsquo;s Studio: A Real Allegory Summing Up Seven Years of My Artistic and Moral Life</em>. The jury looked at that wall of dim brown paint, with its naked model and its bored cat and its crowd of recognizable Parisians, and decided it would not hang in their show. The two refused giants would become the twin anchors of the building he was about to put up in answer.
      </p>

      <SectionHeader accent={accent} label="The tent across the road" title="Courbet builds his own show" />
      <p style={proseStyle}>
        Most painters, refused by the one show that mattered, would have swallowed it and waited a year. Courbet did the opposite. He had a crucial ally in <strong>Alfred Bruyas</strong> (1821&ndash;1877), a collector from Montpellier in the south of France &mdash; and Bruyas was far more than a checkbook. The two men had been writing to each other for years about exactly the ideas this painting is built on: what art was for, who it should serve, the artist&rsquo;s independence from the State and the Salon. That correspondence helped shape the Studio&rsquo;s whole conceptual program, and Bruyas put up much of the money to make the answer real. With his backing Courbet built a building of his own &mdash; the <strong>Pavilion of Realism</strong> &mdash; a temporary hall near the official fair, hung about forty of his paintings inside it with the two refused giants, the <em>Studio</em> and the <em>Burial</em>, anchoring the room, and <em>charged admission</em>. If the State would not show his masterpieces, he would stand at the door of his own one-man museum and sell tickets to them. The full story of that tent &mdash; the first artist-run solo show of its kind, the printed manifesto inside &mdash; belongs to the Realism overview. What matters here is the picture it was built around. (Bruyas himself is in the painting, over on the warm right-hand side, among the friends; the cast chapter comes back to him.)
      </p>
      <p style={proseStyle}>
        Because the tent is the famous gesture, but the painting is the actual argument. Courbet did not build a pavilion to protest a rejection in the abstract. He built it to show <em>this</em> &mdash; a single canvas into which he had tried to cram his entire world, his whole art, his friends and enemies and the society he painted, all sorted into one enormous room. The rejection only makes sense once you understand what the jury was rejecting: not just a big painting, but a painting that quietly announced it was the summary of a life.
      </p>

      <SectionHeader accent={accent} label="The puzzle in the title" title="A “real allegory”" />
      <p style={proseStyle}>
        Start with the title, because the title is the first thing that ought to stop you. Courbet called the picture a &ldquo;<strong>real allegory</strong>.&rdquo; That is a contradiction, and he meant it to be. An <strong>allegory</strong> is a picture where the things you see stand for ideas you can&rsquo;t &mdash; a blindfolded woman holding scales <em>means</em> Justice; a skeleton with a scythe <em>means</em> Death. Allegory is the opposite of realism, which paints the world as it plainly is and lets a riverbank just be a riverbank. To call something a &ldquo;real allegory&rdquo; is like advertising a true fairy tale or a documentary myth. The words fight each other on purpose.
      </p>
      <p style={proseStyle}>
        And that fight is the whole key to the painting. <em>The Painter&rsquo;s Studio</em> is, at face value, a completely real scene: a studio, a painter, his model, some visitors, the junk on the floor. Nothing in it is impossible. But every figure has also been chosen and placed to <em>mean</em> something &mdash; this person stands for poverty, that one for wealth, this group for the friends who back him, that group for the world he paints. It is a real room that is secretly a map. The jury could feel that double-game running under the brown paint, and a real allegory summing up seven years of one man&rsquo;s life was not the sort of thing the official Salon (the State-run exhibition the academy used to rank French art) knew how to award a medal to. The next chapter unpacks what those seven years were, and why the painter put himself in the dead center of all of it.
      </p>
    </article>
  )
}

function StAllegory({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The subtitle" title="Seven years, summed up" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he title promises a &ldquo;summing up of <strong>seven years</strong>,&rdquo; and the arithmetic is not idle. Painted across the winter of <strong>1854&ndash;55</strong>, the picture looks back roughly seven years to <strong>1848</strong> &mdash; the year a revolution toppled a French king and, for a few raw months, put ordinary working people at the center of their own history (the Realism overview tells that year in full). Those seven years, 1848 to 1855, are the years Realism was born and Courbet became its bruising public face. So the painting is not a random studio scene. It is Courbet stopping at a milestone, looking back over the most important stretch of his life, and trying to get the entire thing &mdash; his art, his people, his enemies, his world &mdash; onto one canvas at once.
      </p>
      <p style={proseStyle}>
        That ambition is enormous and slightly absurd, and Courbet knew it. In a letter to his friend the writer <strong>Champfleury</strong> (Jules Husson, 1821&ndash;1889, the critic credited with first using the word &ldquo;Realism&rdquo; for the new art) he tried to explain the thing, and his explanation is where almost everything we know about the painting&rsquo;s plan comes from. He described it, in the standard translation, as the whole world coming to him to be painted &mdash; society, he said, shown at its best, its worst, and its average. One room. All of it. The painter in the middle.
      </p>

      <SectionHeader accent={accent} label="The man in the middle" title="The painter, painting the wrong thing" />
      <p style={proseStyle}>
        And the painter <em>is</em> in the middle &mdash; not off to one side observing, but planted in the dead center of a nearly twenty-foot canvas, seated at his easel, palette in hand. This is a <strong>self-portrait</strong> at the very heart of his own world, which is already an enormous claim to make: in 1855 the center of a monumental painting was reserved for a saint, a hero, an emperor. Courbet gave it to a working painter in his shirtsleeves &mdash; himself.
      </p>
      <p style={proseStyle}>
        Now look at what he is painting, because it is the sharpest joke in the picture. Surrounded by a whole theatrical room of human society &mdash; the rich, the poor, the famous friends, the strange types from the street &mdash; Courbet at his easel has turned away from all of it and is painting a <em>landscape</em>. A plain green river valley, a view of the <strong>Loue</strong> (pronounced &ldquo;loo&rdquo;), the river of his home country near the town of Ornans. The most dramatic gathering of human beings is at his back, and he is calmly painting some trees and water. That is Realism&rsquo;s entire attitude folded into one gesture: the painter declines the grand human drama everyone expects him to make a picture of, and paints the unremarkable real world instead.
      </p>

      <SectionHeader accent={accent} label="The model with no job" title="The nude who isn’t needed" />
      <p style={proseStyle}>
        Just behind him stands a <strong>naked woman</strong>, a white sheet sliding off her hip to the floor. She is doing the single most traditional thing a body can do in a painting &mdash; she is the <strong>academic nude</strong>, the idealized unclothed figure that the official art schools drilled their students to draw, over and over, as the foundation of all serious art. Put a nude in a picture and you signal &ldquo;real art happening here.&rdquo;
      </p>
      <p style={proseStyle}>
        Except she has nothing to do. Courbet is painting a landscape; a landscape needs no nude model. So she stands there idle, the old kind of subject with no role to play, watching over the shoulder of a man making the new kind of art that doesn&rsquo;t need her. Some readers go further and take her as a near-allegory of Truth or of Nature herself, looking on while the painter works &mdash; and that reading fits the &ldquo;real allegory&rdquo; game perfectly, a real naked model who also <em>means</em> something. But it is worth saying plainly that before she was a symbol she was a person: a living woman who came to the studio and posed for this, an actual model whose name has simply been lost to us. We read her as Truth because the painting wants us to, but the body on the canvas belonged to someone real, the way every body Courbet painted did. Either way the point lands: the most academic thing in the room has been quietly retired, set to one side, no longer running the show.
      </p>

      <SectionHeader accent={accent} label="Why this counts as his testament" title="A life, mapped onto a floor" />
      <p style={proseStyle}>
        Step back and the structure becomes clear, and it is the reason this painting is treated as Courbet&rsquo;s <em>testament</em> &mdash; his statement of who he is and what his art is for. He has taken the inside of his own head and laid it out as a room. In the center: his art, the act of painting itself, with himself doing it. To one side: the people who believe in him. To the other side: the whole society he claims as his subject, rich and poor, powerful and wretched. It is an artist&rsquo;s self-portrait that swallows the entire world he works in.
      </p>
      <p style={proseStyle}>
        No one had really made a painting do that before &mdash; turned a studio scene into a coded summary of a career and a creed. It is why the &ldquo;real allegory&rdquo; label, contradictory as it is, is exactly right: the room is real, every brick of it, and the room is also a diagram of one man&rsquo;s mind. The next chapter is the part the whole picture is built for: actually walking across it, left to right, and seeing what Courbet sorted where.
      </p>
    </article>
  )
}

function StReading({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Look closer" title="Walking across the room" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        orget, for a moment, that this is a famous painting, and just stand in front of it. The first thing to notice is how <em>dim</em> it is &mdash; a vast, brown, cavernous studio, lit unevenly, the back wall high and almost blank, the floor bare boards. Out of that gloom three things glow: the pale body of the model in the center, the bright green landscape on the easel beside her, and the small pale smock of a boy at the painter&rsquo;s knee. Everything else you have to dig for. Courbet has built the picture so your eye lands in the middle first, on himself and his work, and then has to <em>travel</em> outward to find the rest. So let&rsquo;s travel. Center, then right, then left &mdash; the order Courbet&rsquo;s own letter to Champfleury used to explain it.
      </p>

      <SectionHeader accent={accent} label="The center" title="The painter, the nude, the boy, the cat" />
      <p style={proseStyle}>
        You already know the center from the last chapter, but now see it as a tight little group rather than a single figure. <strong>Courbet</strong> sits at the easel, half-turned, painting his green river valley. The <strong>nude model</strong> &mdash; the <strong>academic nude</strong>, the idealized unclothed figure the official art schools made students draw endlessly as the bedrock of serious art &mdash; stands close behind his chair, drapery falling away, watching. At the foot of the easel a <strong>small peasant boy</strong> in a smock tilts his head back to watch the landscape appear &mdash; and he is worth pausing on, because in a room of forty adults busy being adults, the child is the only person giving the act of painting his complete, open attention. He is the unschooled eye, the viewer Courbet actually wants: someone who just <em>looks</em>.
      </p>
      <p style={proseStyle}>
        And down on the floor, near the painter&rsquo;s feet, a <strong>white cat</strong> crouches, attending to absolutely nothing. If you read the Burial work read in this app you have met this animal&rsquo;s cousin &mdash; the small indifferent dog Courbet dropped into a solemn funeral. The cat is the same flick of nerve in the same hand: a creature that could not care less about the grand human meaning all around it, planted right at the center of a painting that is supposedly summing up the meaning of a life. It keeps the whole self-important scene honest.
      </p>

      <SectionHeader accent={accent} label="The right" title="The shareholders" />
      <p style={proseStyle}>
        Now walk right, into the warmer, better-dressed half of the room. Courbet, in his letter, had a wonderfully unromantic word for these people: he called them &ldquo;the <strong>shareholders</strong>&rdquo; &mdash; meaning, he explained, his friends, his fellow workers, the art lovers who had a stake in him. Shareholders. As if his career were a company and these were the people invested in it, which, financially and otherwise, several of them were.
      </p>
      <p style={proseStyle}>
        This side is a crowd of recognizable, contemporary Parisians, and the next chapter names them one by one. For now just register the texture: well-cut coats, a fashionably dressed couple of art collectors standing as a kind of pair of well-off admirers, a knot of writers and thinkers, and &mdash; way over at the far right edge, almost sliding off the canvas &mdash; a man bent over a big open book, reading, oblivious to everything. The right side is Courbet&rsquo;s tribe: the people who chose him, the proof that the bearded provocateur from the provinces had built himself a circle of the most interesting minds in France.
      </p>

      <SectionHeader accent={accent} label="The left" title="The other world" />
      <p style={proseStyle}>
        Now turn and walk to the left, and the temperature drops. This half is darker, shabbier, more shadowed, and Courbet&rsquo;s letter gives it a heavier name. This, he wrote, is &ldquo;the other world of trivial life &mdash; <strong>the people, misery, poverty, wealth, the exploited and the exploiters, the people who live off death</strong>.&rdquo; If the right side is the friends who back his art, the left side is the <em>subject</em> of his art: society itself, the whole cross-section, the rich and the wretched standing in the same gloom.
      </p>
      <p style={proseStyle}>
        It is a gallery of types rather than named friends. Scholars have read a great many specific roles into these figures over the years &mdash; a priest, a merchant, a laborer, a beggar &mdash; and the exact roster is genuinely debated, so hold the details loosely. What is solid is the cast Courbet himself pointed to: a <strong>Jewish man</strong> and an <strong>Irishwoman</strong> begging, both, he said, types he had seen on a trip to London in 1848. And one figure on this side is so famous it gets its own paragraph in the next chapter: a seated man in a broad-brimmed hat with hunting dogs at his feet, a <strong>poacher</strong>, whom a great many readers take for the Emperor of France himself, slipped in among &ldquo;the people who live off death.&rdquo;
      </p>
      <p style={proseStyle}>
        And there is one more thing on the left that is easy to miss in the gloom but impossible to unsee once you have it. Up behind the figures, slumped and strung up against the dark, hangs a <strong>lay figure</strong> &mdash; an <strong>artist&rsquo;s mannequin</strong>, the jointed wooden-and-stuffed dummy that academic painters posed and draped to stand in for a body while they worked. Courbet has hung his with its arms wrenched up and back, trussed and sagging, so that it reads unmistakably as a body on a cross. A crucified mannequin, pinned up in the shadows on the side of the room he gave to misery and the dead. Painters had used these dummies for centuries as the patient tool of the studio; Courbet nailed his up like a corpse. Read it the way the picture asks you to: the death of academic art itself &mdash; the old way of making pictures, the lifeless stand-in for the real body, crucified in the corner while the new kind of painting happens, alive, in the light at the center.
      </p>

      <SectionHeader accent={accent} label="The floor" title="Romanticism, in the trash" />
      <p style={proseStyle}>
        Before you leave the left side, look down at the bare boards in the lower-left corner, because Courbet left a little still life there that most viewers walk right past. Tossed on the floor lie a <strong>guitar</strong>, a <strong>dagger</strong>, and a <strong>plumed hat</strong> &mdash; the kind of swashbuckling cavalier&rsquo;s hat a hero in a costume drama would wear. These are the dressing-up props of <strong>Romanticism</strong>, the generation of painting just before Courbet&rsquo;s, all heaving drama and exotic adventure and high passion (the Realism overview tells that story). Courbet had no time for it; he thought it was costume, escapism, a refusal to paint the actual world. So here are its props &mdash; the guitar, the blade, the feathered hat &mdash; dumped on the floor of the real studio like a discarded costume, the swashbuckling fantasy laid down in the dust while the real painting happens overhead. Many readers also find a <strong>skull</strong> resting on a newspaper somewhere in this dim left half; if you can pick it out, it reads as the bluntest possible verdict &mdash; the death of the old order, set down on the daily news.
      </p>
      <p style={proseStyle}>
        That is the whole machine: a real room you could have walked into in 1855, secretly arranged into a diagram of one painter&rsquo;s entire world &mdash; his art at the center, his believers on the right, the society he paints on the left, and the dead props of the art he refused to make lying in the corner. A real allegory, exactly as advertised.
      </p>
    </article>
  )
}

function StCast({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Who’s in it" title="Putting names to the faces" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        ne of the strangest, most modern things about <em>The Painter&rsquo;s Studio</em> is that its &ldquo;allegory&rdquo; is built out of <em>real people you could have met</em>. The right side is not Justice and Wealth and Poetry in flowing robes. It is a guest list. Courbet packed the warm half of his canvas with his actual friends, painted from life or from photographs, and his letter to Champfleury runs through them almost like a man introducing you around a party. So let&rsquo;s be introduced.
      </p>

      <SectionHeader accent={accent} label="The friends" title="The right side, named" />
      <p style={proseStyle}>
        Several of them are home-country friends, and Courbet&rsquo;s letter names them in a quick warm cluster: <strong>Alphonse Promayet</strong> (1822&ndash;1872), a violinist and childhood friend from Ornans, holding his violin; <strong>Urbain Cuenot</strong>, Courbet&rsquo;s close friend from Ornans; and the poet <strong>Max Buchon</strong> (1818&ndash;1869). With them stands <strong>Alfred Bruyas</strong> &mdash; not just the collector whose money helped build the Pavilion but the friend Courbet had spent years writing to about what this very painting should mean, here taking his place among the people who shaped it. And there is <strong>Pierre-Joseph Proudhon</strong> (1809&ndash;1865), France&rsquo;s most famous radical thinker &mdash; the man who declared that property is theft &mdash; a native of the same corner of France. Proudhon wasn&rsquo;t available to sit, so Courbet worked his likeness up from a <em>photograph</em>, which in 1855 was still a young, commercial technology not yet accepted as a respectable art &mdash; faintly disreputable for exactly that reason, and a very Realist way to build a portrait.
      </p>
      <p style={proseStyle}>
        Near them sits <strong>Champfleury</strong> himself, the critic this whole explanatory letter is addressed to &mdash; and he was more than the man who coined the word &ldquo;Realism.&rdquo; Champfleury was the movement&rsquo;s working <em>theorist</em>, the writer who argued out what Realism was and defended it in print while Courbet supplied the paintings; he and Courbet were building the same case from two ends. And then there is the <strong>fashionable couple</strong> &mdash; in Courbet&rsquo;s phrase, a woman of the world and her husband, both luxuriously dressed &mdash; standing in as a pair of well-off art lovers, the kind of moneyed admirers a painter needs. The right side, in other words, is Courbet&rsquo;s entire support system in one frame: the friends from home, the patron-collaborator, the radical philosopher, the movement&rsquo;s theorist, and the rich couple who buy. A career, drawn as a crowd.
      </p>

      <SectionHeader accent={accent} label="The poet in the corner" title="Baudelaire, reading" />
      <p style={proseStyle}>
        And then, at the very far right, hunched over a large open book and ignoring the whole gathering, sits <strong>Charles Baudelaire</strong> (1821&ndash;1867) &mdash; the poet who a couple of years later would publish <em>Les Fleurs du Mal</em> (&ldquo;The Flowers of Evil&rdquo;) and be prosecuted for it, one of the defining writers of the modern city. Courbet didn&rsquo;t paint him fresh; he copied the head from a portrait he had made of Baudelaire back in 1847. There is a small, real sadness folded into the figure: Courbet and Baudelaire had once been close, and by 1855 the friendship had cooled, so the poet sits at the edge of the painting, present but turned inward, reading, a little apart from the warmth of the group. He is on the shareholders&rsquo; side, but he is keeping his own counsel in the corner &mdash; which, for Baudelaire, was about right.
      </p>

      <SectionHeader accent={accent} label="The poacher" title="Is that the Emperor on the left?" />
      <p style={proseStyle}>
        Now cross to the dark left side, to its most argued-over figure. Find him first: down in the lower-center-left foreground, seated and leaning forward in a broad-brimmed hat, with two <strong>hunting dogs</strong> resting at his feet, is a man dressed as a <strong>poacher</strong> &mdash; someone who hunts on land that isn&rsquo;t his. For more than a century, a great many viewers have looked at that hat, those dogs, that curled moustache, and seen <strong>Napoleon III</strong> &mdash; the man who had seized power in a coup in 1851 and crowned himself Emperor of France, the ruler under whose reign Courbet was painting this very picture. Read that way, it is an astonishing thing to have done: to slide the Emperor onto the side of &ldquo;the people who live off death,&rdquo; cast as a poacher illegally hunting his own country, hung where the public could see it.
      </p>
      <p style={proseStyle}>
        But this is exactly the kind of irresistible identification that the honest version of art history has to slow down for. Courbet&rsquo;s own letter to Champfleury &mdash; the document that names nearly everyone else &mdash; <em>never identifies this figure as the Emperor</em>. And technical study of the canvas (X-rays that let conservators see the layers underneath) shows the poacher was reworked and added relatively late, not part of the original plan. So the Napoleon III reading, satisfying as it is, is an <em>interpretation</em>, widely held but never confirmed by the painter &mdash; the famous story rather than a signed caption. It may well be right. It is not, on the evidence, a fact. Hold it the way Courbet left it: a poacher who looks an awful lot like the Emperor, and a painter who declined to say so out loud.
      </p>
    </article>
  )
}

function StAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="After the tent" title="A masterpiece nobody could house" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he Pavilion of Realism, the tent Courbet built when the world&rsquo;s fair refused him, was a grand gesture and a financial flop. Far fewer people paid to come in than he had hoped, and when the fair closed, Courbet was left holding the largest, least sellable painting of his career. <em>The Painter&rsquo;s Studio</em> is nearly twenty feet wide. It is not a thing a private collector hangs over the sofa. The very ambition that made it a testament &mdash; one canvas to hold a whole world &mdash; made it almost impossible to place. So it stayed with him.
      </p>
      <p style={proseStyle}>
        And Courbet&rsquo;s own story went badly from there. The Realism overview tells how his politics caught up with him &mdash; how, after the <strong>Paris Commune</strong> of 1871 (the radical revolutionary government that seized control of Paris for a couple of months that spring before it was crushed in brutal street fighting, which Courbet publicly backed), he was held responsible for the toppling of the <strong>Vendôme Column</strong> &mdash; the towering bronze victory column in central Paris that celebrated Napoleon&rsquo;s conquests, pulled down by the Communards as a hated symbol of empire and war. Courbet had argued for its removal, so when the column came down the new authorities pinned the destruction on him, ruined him with the bill for rebuilding it, and he fled into exile in Switzerland, where he died in 1877. The enormous summing-up of his seven best years outlived him, rolled up and homeless, exactly the kind of national treasure that quietly slips abroad or gets cut into sellable pieces.
      </p>

      <SectionHeader accent={accent} label="France buys it back" title="The public subscription of 1920" />
      <p style={proseStyle}>
        That it didn&rsquo;t is the quiet triumph of the painting&rsquo;s afterlife. In <strong>1920</strong> &mdash; sixty-five years after the State&rsquo;s own jury had refused it &mdash; the painting was bought for the <strong>Louvre</strong> (then France&rsquo;s great national museum) for the nation. And it was bought, fittingly, not by a single rich buyer but by a <strong>public subscription</strong>: a fundraising drive in which the public chips in, here with the help of the Society of the Friends of the Louvre. The country that had once turned the picture away now raised the money, in small pieces from many hands, to keep it.
      </p>
      <p style={proseStyle}>
        Sit with the symmetry of that for a second. The whole scandal of <em>The Painter&rsquo;s Studio</em> was that it put the people &mdash; the shareholders, the poor, the whole ordinary cross-section of society &mdash; at the center of serious art. And in the end it was bought <em>by</em> the people, collectively, exactly the audience it had insisted mattered. The refused picture became a thing the nation chose to own together.
      </p>

      <SectionHeader accent={accent} label="The wall it hangs on now" title="Courbet’s testament, on permanent view" />
      <p style={proseStyle}>
        For decades it hung in the Louvre, and then, in <strong>1986</strong>, the <strong>Musée d&rsquo;Orsay</strong> &mdash; the Paris museum dedicated to nineteenth-century art, installed in a converted former railway station on the Left Bank of the Seine &mdash; opened, and the Louvre&rsquo;s nineteenth-century collection crossed the river to fill it. The <em>Studio</em> went with it, alongside its older sibling, <em>A Burial at Ornans</em> (which has its own read in this app). The two enormous Courbets &mdash; the funeral and the studio &mdash; now hang in the same museum, the two largest arguments Realism ever made in paint.
      </p>
      <p style={proseStyle}>
        Stand in front of it today and the throughline is worth saying plainly, one last time. Refused by the most important show on Earth, Courbet built his own and made its centerpiece a single, impossible, twenty-foot painting that tried to hold his entire world: his art at the center, painting a plain green landscape while the academic nude (the idealized studio body the schools worshipped) stood idle behind him; his friends and patrons gathered warm on the right; the whole society he claimed as his subject &mdash; rich, poor, and possibly the Emperor in disguise &mdash; arranged in the gloom on the left; the academic mannequin strung up like a corpse in the shadows; and the cast-off props of the art he refused dumped on the floor. He called it a real allegory, daring the words to fight, and they do, and the fight is the point. It is the painting where an artist looked at the world, decided it was all his subject, and put himself, calmly, at the dead center of it.
      </p>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────
// The Sower (Millet, 1850) — the five chapters
// Author draft for the gated art pipeline. Matches the BuTown…BuAfterlife pattern
// exactly: SectionHeader, DropCap, proseStyle/italicStyle, <strong>/<em>,
// <article style={{ padding: '18px 18px 40px' }}>, `first` on the opener, NO
// inline figures. Section ids match sower-content.ts: barbizon · looking · salon ·
// meaning · afterlife. Movement-level material (1848 in full, the hierarchy of
// genres, Courbet's own story) is DEFERRED to the Realism overview with terse refs.
// ─────────────────────────────────────────────────────────────

function SoBarbizon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Gruchy, Normandy · 1814" title="The painter who was an actual peasant" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        lmost every painter who ever pointed a brush at a peasant did it from the outside, looking in — a city man visiting the countryside, charmed or appalled, painting the poor the way a tourist photographs them. <strong>Jean-François Millet</strong> (pronounced &ldquo;mee-LAY,&rdquo; 1814–1875) is the rare exception, and it is the single most important fact about the painting you are here to look at. Millet did not visit the rural poor. He <em>was</em> the rural poor. He was born into a Normandy farming family — at <strong>Gruchy</strong>, a hamlet near the port of <strong>Cherbourg</strong> — and grew up doing the actual labor of the fields with his own hands. When he finally painted a man flinging seed across a hillside, the gesture did not come from a hired model holding a pose in a studio. It came from his own body, from work he had done.
      </p>
      <p style={proseStyle}>
        He was born in October 1814. Gruchy (roughly &ldquo;GROO-shee&rdquo;) sits on the windy Cotentin peninsula in <strong>Normandy</strong>, the farming country of northwestern France, and his people were peasants — not the romantic, barefoot-shepherdess kind, but the real kind, who worked the land for a living and were not at all sure that one of their sons drawing pictures was a sensible use of a boy. By his late teens his obvious talent won out, and he went to study art, first in nearby Cherbourg, then, in 1837, to <strong>Paris</strong> itself.
      </p>

      <SectionHeader accent={accent} label="Paris · 1837" title="Trained at the top of a ladder he would reject" />
      <p style={proseStyle}>
        In Paris he did the respectable thing: he entered the studio of <strong>Paul Delaroche</strong> (1797–1856), a smooth and successful academic painter of grand historical scenes — exactly the kind of art the official system prized. To understand why that matters, you need one piece of background that the Realism overview one level up in this app lays out in full, and which this read will only sketch. French art ran on a strict ranking of subject matter called the <strong>hierarchy of genres</strong> (an official ladder that sorted what a painting was <em>about</em>). At the top sat <strong>history painting</strong> (grand scenes from myth, scripture, and ancient legend — &ldquo;history&rdquo; in the old sense, not last week&rsquo;s news). At the very bottom sat plain modern life: laborers, farmers, the poor. And the whole thing was policed by <strong>the academy</strong> (the State institution that set the rules) through one all-important show, the <strong>Salon</strong>, which you will meet properly in Chapter 3.
      </p>
      <p style={proseStyle}>
        So Millet trained in the prestige tradition — the gods-and-heroes business — and for years he did the expected things to survive: portraits, soft mythological scenes, the occasional nude. He was poor, and Paris was hard, and nothing he made yet was the thing he is remembered for. The man who would paint the dignity of dirt was, for the moment, painting whatever sold.
      </p>

      <SectionHeader accent={accent} label="The flight from Paris · 1849" title="Cholera, and a village in a forest" />
      <p style={proseStyle}>
        Then, in 1849, the city tried to kill him. A <strong>cholera</strong> epidemic (a fast, deadly waterborne disease that swept 19th-century cities in terrifying waves) tore through Paris, and Millet — by now with a family to protect — got out. He moved roughly 30 miles (50 km) south of the capital to a village called <strong>Barbizon</strong> (BAR-bee-zohn), a small place on the edge of the <strong>Forest of Fontainebleau</strong> (fon-ten-BLOH), the great royal woodland southeast of Paris. He meant it to be temporary. He stayed essentially the rest of his life, and died there in 1875.
      </p>
      <p style={proseStyle}>
        Barbizon was not a random refuge. It was already becoming the headquarters of a loose group of painters who would be remembered as the <strong>Barbizon School</strong> — landscape and country-life painters (Théodore Rousseau, Camille Corot, Charles-François Daubigny, and others) who came out from the city to paint the real countryside directly, instead of inventing tidy, idealized Italian-looking scenery back in a studio the way the academy preferred. They wanted actual trees, actual weather, actual light. The Realism overview names this group as one of Realism&rsquo;s parents, and you can see why: a school built on painting the real world in front of you is one short step from painting the real <em>people</em> in front of you.
      </p>
      <p style={proseStyle}>
        That short step is Millet&rsquo;s whole contribution. The other Barbizon men mostly painted the land. Millet put the peasant back into it — full size, dead center, doing the work — and turned a school of pretty landscapes into something that frightened Paris. The first big canvas he made in his new village was a single man walking a hillside, throwing seed. It is the painting in front of you, and the rest of this read is about what he did, and why a picture of farming caused a scandal.
      </p>
    </article>
  )
}

function SoLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas · 1850" title="One figure, almost life-size" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        efore the meaning, the eyes. <em>The Sower</em> is not a big painting by the standards of this app — it is about <strong>3 feet 4 inches tall and 2 feet 8 inches wide</strong> (a tall, upright, portrait-shaped canvas, taller than it is wide). Stand Courbet&rsquo;s twenty-two-foot funeral in your mind from Chapter 1 of the Realism overview, and this is the opposite kind of object: not a wall-sized panorama of a whole crowd, but a single human being, pushed almost to the edges of an upright frame, taking up nearly all the room there is. Where Courbet spread a hundred feet of canvas thin across forty people, Millet spent a tall, narrow canvas on exactly one. The whole composition is built to make that one man huge.
      </p>
      <p style={proseStyle}>
        And the first thing you notice is how <em>dark</em> he is. The peasant is painted as a near-silhouette — a heavy, shadowed shape against the gray-blue dusk — so that before you read any detail you read a looming dark mass, striding straight at you. That gloom is doing real work. A figure you can see clearly is a man. A figure sunk in shadow, large and advancing, is something closer to a force. Hold that feeling; the next chapter is about why a Paris audience found it threatening, and the threat starts right here, in how little of him you are allowed to see.
      </p>

      <SectionHeader accent={accent} label="The diagonal" title="Walking downhill, straight off the canvas" />
      <p style={proseStyle}>
        Now follow the <strong>diagonal</strong>, because the composition is one long slash from upper right to lower left, and the sower rides it like a man coming downhill fast. He is striding <em>down</em> a slope — his leading leg driving forward and downhill, bent and planted low; his trailing leg stretched back up the rise behind him; his body pitched toward you, his weight already past the point of balance, the way you walk a hill when gravity is helping. There is nothing static about him. Most painted figures stand still and pose; this one is caught mid-stride, leaning into the descent, and the slope of the ground feeds the motion. He is not posing in a field. He is crossing it, and he is crossing it toward you, and he is not going to stop.
      </p>
      <p style={proseStyle}>
        The downhill diagonal is also why the figure feels like it is about to walk out of the frame. A man standing upright in the center is contained; a man striding down and out toward the lower corner is leaving. Millet built restlessness into the geometry. Even frozen in oil, the sower is going somewhere.
      </p>

      <SectionHeader accent={accent} label="The sowing arm" title="The throw, frozen at its most violent point" />
      <p style={proseStyle}>
        Look at his <strong>right arm</strong>, and look slowly, because it is the engine of the whole picture. It is flung all the way across his body to his <em>left</em> side, the hand open, the wrist past the snap of the motion — you are seeing the follow-through of a throw, the split second after the seed has left the fingers. To sow grain by hand is to walk and fling, walk and fling, in a steady rhythm, scattering seed in a wide arc with each step, and Millet caught the gesture at its most extreme: arm whipped across, hand spent, seed already gone into the dark furrows. It is the most active thing in the painting, and he chose the most violent instant of it.
      </p>
      <p style={proseStyle}>
        And see where the seed comes from. His <strong>left hand</strong> grips a coarse sack or apron of grain slung at his hip — the supply. The motion of the whole figure is suddenly legible as one repeating loop: the left hand feeds the right, the right hand flings, the legs carry him a stride down the hill, and it begins again. Millet has painted not a pose but a <em>process</em>, the oldest agricultural process there is, mid-cycle — the mechanism of sowing, not a man holding a prop.
      </p>

      <SectionHeader accent={accent} label="The shadowed face" title="Almost no face at all" />
      <p style={proseStyle}>
        Now go to the head, and notice what is <em>missing</em>. A soft, floppy hat is pulled down low over his brow, and beneath it the face is sunk in shadow — you can make out that there is a face, but barely a feature, no clear eyes to meet, no expression to read. This is deliberate, and it is the quiet masterstroke of the picture. A clear face would make him a person — <em>this</em> man, with <em>this</em> mood, on <em>this</em> evening. The shadowed near-absence of a face makes him a type: the sower, any sower, every sower, Labor itself walking the hill. You cannot befriend him because you cannot see him. You can only watch him come.
      </p>

      <SectionHeader accent={accent} label="Boots of straw" title="The truth in the legs" />
      <p style={proseStyle}>
        Drop your eye to the lower half. He wears blue trousers and a rust-brown jacket — and his lower legs and feet are bound in <strong>straw or rag wrappings</strong>, caked with the same dark earth he is treading. This is the detail only a man who had been there would think to include. These are not the clean boots of a model in a studio. They are the makeshift protection a real field-worker ties on to walk cold, broken, muddy ground at the end of a long day — the cloth bindings wet and filthy, indistinguishable in places from the dirt itself. Millet, the actual peasant&rsquo;s son, knew exactly what a sower&rsquo;s feet looked like, and he refused to clean them up.
      </p>

      <SectionHeader accent={accent} label="The tiny world behind him" title="The ploughman, the oxen, the birds, the dusk" />
      <p style={proseStyle}>
        Finally, lift your eyes past the giant and find the little world in the background, because it sets the whole scale and the whole mood. Up the slope, far to the upper right and painted very small, a <strong>second man drives a team of oxen</strong>, finishing the ploughing — turning the soil the sower is now seeding. Behind that distant figure the sky warms to a band of pale orange: the last light of <strong>dusk</strong>, the close of the working day, the field being sown right up to dark. And at the upper left, a scatter of <strong>birds</strong> lifts into the gray air — already dropping in for the seed the moment it hits the ground, the ancient nuisance every sower fights.
      </p>
      <p style={proseStyle}>
        Those small background figures are not decoration; they are the trick that makes the painting work. A man alone on a canvas could be any size. Put a tiny ploughman and a tiny ox-team on the hill behind him, and suddenly your eye does the math: the sower in front is <em>enormous</em>. Millet shrank the rest of the world so that one field hand could fill the sky. By the time you have read the dusk, the birds, the distant plough, and come back to the dark striding figure, you understand the scale he has been given — the scale, as the next chapter explains, that Paris had reserved for gods.
      </p>
    </article>
  )
}

function SoSalon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1850–51" title="Sending the peasant to the capital" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>M</DropCap>
        illet finished the painting in his Barbizon village and then did the thing every ambitious French painter had to do: he sent it to the <strong>Salon</strong> — the official annual State exhibition in Paris, run by the academy, the one show in all of France where a career was made or buried (you met it one level up in the Realism overview). The Sower went up in the <strong>Salon of 1850–1851</strong> (the show ran across that winter), which means it hung in the official halls, in the same rooms as the smooth mythological nudes and the grand history scenes — a dirt-caked field hand walking into the temple of beautiful gods.
      </p>
      <p style={proseStyle}>
        And he did not walk in alone. In that <em>same</em> Salon — the same season, the same building — <strong>Gustave Courbet</strong> hung the two canvases that the Realism overview and the first work-reads in this chain are about: <strong>A Burial at Ornans</strong> (a whole village funeral painted ten feet tall, at the scale the Salon kept for the death of kings) and <strong>The Stone Breakers</strong> (two road laborers breaking rock, life-size and dead serious). So the Salon of 1850–51 is the hinge moment for the whole movement: in one show, Paris met both halves of Realism at once — Courbet&rsquo;s loud, monumental Paris assault and Millet&rsquo;s quiet, monumental Barbizon peasant. Two very different men, the same heresy: the ordinary working poor, made huge, hung where the gods belonged.
      </p>

      <SectionHeader accent={accent} label="Why a man with a seed-bag scared Paris" title="The fear in the room" />
      <p style={proseStyle}>
        Here is the part that is hard to feel today, when this looks like a handsome, dignified painting of a farmer: in 1850 it frightened people. Not &ldquo;the critics found it unfashionable&rdquo; frightened — genuinely, politically frightened. To understand why, you have to put two things side by side: <em>what</em> Millet painted, and <em>when</em> he painted it.
      </p>
      <p style={proseStyle}>
        The <em>what</em> is everything Chapter 2 walked you through. A single peasant, almost faceless, painted dark and looming, made nearly life-size, striding straight downhill toward the viewer — given the scale, the seriousness, and the dead-center spotlight that the hierarchy of genres reserved for heroes and gods. A field hand was supposed to be, at most, a small picturesque figure in the corner of a landscape. Millet put him in the middle, blew him up, sank his face in shadow, and aimed him at you. To an eye trained by the academy, that was already a category error loud enough to feel like an insult.
      </p>
      <p style={proseStyle}>
        The <em>when</em> is what turned the insult into a scare. The Sower went up only two years after <strong>1848</strong> — the revolution that toppled King Louis-Philippe and, for a few raw months, threw the ordinary people of France (workers, peasants, the poor) into the center of their own history before the army shut the experiment down (the Realism overview tells that year in full). In 1850 the memory was fresh, the countryside was restless, the propertied classes were nervous about the poor in a way that was not abstract, and the word &ldquo;socialism&rdquo; hung in the air like smoke. And into that nervous room walked a huge, dark, anonymous laborer, his face hidden, his arm cocked, advancing. Frightened viewers did not see a charming rustic. They saw the rural poor made monumental and faceless and <em>coming</em> — and they read a threat. The Boston museum that owns the painting today puts it plainly: viewers were shocked by Millet&rsquo;s heroic treatment of a lowly peasant, at a moment when the rural poor were suffering and socialism seemed to threaten respectable society.
      </p>

      <SectionHeader accent={accent} label="Praised and panned" title="The split verdict" />
      <p style={proseStyle}>
        The reaction was loud and divided, which is its own kind of success — a painting nobody argues about is a painting nobody remembers. Some critics admired exactly the energy Chapter 2 dwelt on: one called it an energetic study, full of movement, which is precisely right about that whipped-across sowing arm and that downhill stride. Others sneered at the surface. Millet did not finish his paint to the porcelain smoothness the Salon prized; he left it rough, dragged, and earthy, and one hostile critic dismissed the whole thing as &ldquo;trowel scrapings&rdquo; — as if the painter had simply scraped his palette onto the canvas. (That charge, &ldquo;it isn&rsquo;t even finished,&rdquo; is the same one thrown at almost every painter in this whole era who refused the academic polish; you will hear it again from here to the Impressionists.)
      </p>
      <p style={proseStyle}>
        Either way, the painting did the one thing a Salon picture exists to do: it could not be ignored. Hung in the official show, beside the gods, in the season of Courbet&rsquo;s bombshells, two years after the barricades, Millet&rsquo;s lone striding sower made the quiet half of Realism impossible to overlook — and made its painter, overnight, a name with a controversy attached.
      </p>
    </article>
  )
}

function SoMeaning({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The oldest parable in the West" title="The size of a god, the job of a farmhand" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        t matters, enormously, that Millet chose a <em>sower</em> and not, say, a man chopping wood. For anyone raised in 19th-century Europe — which is to say everyone who would ever look at this painting — the image of a man casting seed by hand was not just farming. It was scripture. The <strong>Parable of the Sower</strong> (one of the best-known stories Jesus tells in the Christian Gospels, in which a farmer scatters seed that falls on rocky, thorny, and good ground) was as familiar as a nursery rhyme, and so was the old line about how, &ldquo;as you sow, so shall you reap.&rdquo; A sower carried two thousand years of religious weight before Millet ever touched a brush.
      </p>
      <p style={proseStyle}>
        So when Millet gives his anonymous field hand the great timeless gesture of casting seed, the picture quietly fills with that echo. He takes the most ordinary act in the human economy — a man scattering seed so that next year there will be bread — and paints it with the size, the gravity, and the dead-serious attention that European art had always saved for kings, saints, and gods. There is no story, no event, no king, no miracle: just a man doing the oldest job there is, blown up to the scale of an altarpiece. The peasant becomes something close to a biblical figure — labor as a sacrament, the field as a kind of altar, the eternal rhythm of seed and harvest standing in for the eternal rhythm of life and death. This is why the painting can feel solemn and even holy. Two paintings down this same chain, Millet will do it even more openly in <em>The Angelus</em>, where two peasants stop work to pray at the evening bell. The Sower is the first and fiercest version: no church, no bell, no prayer — just a man and the ground and a gesture as old as agriculture, painted as if it were a creed.
      </p>

      <SectionHeader accent={accent} label="The menace, and the denial" title="Was Millet a socialist?" />
      <p style={proseStyle}>
        And yet the very things that make the sower feel sacred are the things that frightened Paris. Here is the hard question, the one Chapter 3 left hanging: was this a political painting? Was the dark, looming, faceless, advancing peasant a deliberate class threat — the rural poor rendered as a coming storm, two years after they had nearly overturned France?
      </p>
      <p style={proseStyle}>
        The honest answer is that the menace was largely in the eye of the frightened beholder, and that Millet himself spent years pushing the reading away. Because he kept painting peasants, and kept painting them big, he was <em>repeatedly accused of being a socialist</em> — a dangerous radical smuggling revolution onto the Salon walls. He rejected the charge. His defenders, then and since, argued that his real subject was not class war but something older and quieter: the timeless, almost classical dignity of rural life, the eternal bond between people and the soil. Millet seems to have genuinely meant the biblical, monumental reading more than the revolutionary one. He was not trying to paint a threat. He was trying to paint a truth.
      </p>

      <SectionHeader accent={accent} label="Monument and menace" title="The same brushstrokes, two ways" />
      <p style={proseStyle}>
        But — and this is the honest tension a good reading has to hold — it does not entirely matter what he meant. A painter does not get to control which feeling a frightened public reads off his canvas, and the same choices that make the sower feel <em>eternal</em> (the dark mass, the hidden face, the relentless advance, the giant scale) are exactly the choices that make him feel <em>dangerous</em>. The monument and the menace are the same brushstrokes seen by two different audiences. Millet painted reverence; a nervous Paris saw revolt; both were honestly there. That doubleness — sacred and threatening at once — is a large part of why this small painting refuses to settle down, and why people still argue about it.
      </p>
      <p style={proseStyle}>
        And it is the deep link to Courbet, the Salon-mate of Chapter 3, even though the two men could hardly be less alike. Both granted the ordinary working poor the full weight of serious art — the whole argument of Realism, the Realism overview calls it — but they did it in opposite registers. Courbet did it loud, in Paris, at twenty-two feet, with a bored dog and a public sneer; Millet did it quiet, in a forest village, at three feet, with a shadowed face and no jokes at all. Same heresy, two volumes. The Sower is the gentle, monumental, almost reverent version of the revolution — and the most unsettling precisely because it is so calm.
      </p>
    </article>
  )
}

function SoAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="An American at the Salon · 1851" title="Bought off the wall, shipped to Boston" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he afterlife of <em>The Sower</em> begins with a young American standing in front of it in the Salon and being changed. His name was <strong>William Morris Hunt</strong> (1824–1879), a painter from a well-off New England family who was studying in Europe. He saw the striding peasant on the Salon wall, was overwhelmed by it, and did two things at once: he bought it from Millet, and he went to live near Millet at Barbizon for about two years to learn from him directly.
      </p>
      <p style={proseStyle}>
        That single purchase is why this very French painting now hangs in Massachusetts. Hunt became the great early evangelist for Millet in the United States — talking him up, collecting him, steering wealthy Boston friends toward his work. Through Hunt and the collectors he influenced, an unusual amount of Millet ended up in and around Boston, which is the reason an American city, of all places, owns one of the most famous images of a French peasant ever painted.
      </p>

      <SectionHeader accent={accent} label="Hunt to Shaw to the museum" title="The road to the MFA" />
      <p style={proseStyle}>
        From Hunt the painting passed, in 1874, to the Boston collector <strong>Quincy Adams Shaw</strong> (1825–1908), who assembled one of the largest private hoards of Millet anywhere on earth. And after Shaw&rsquo;s death his heirs gave it, in <strong>1917</strong>, to the <strong>Museum of Fine Arts, Boston</strong> — the MFA, the great encyclopedic art museum of New England. It has hung there ever since. So the version of <em>The Sower</em> reproduced everywhere — the one at the top of this very page — is the Boston picture, the one that traveled from a forest village outside Paris, to a Salon wall, to an American painter&rsquo;s hands, to a Boston collector, to a public museum, where any visitor can now stand in front of the striding peasant Paris once found frightening.
      </p>

      <SectionHeader accent={accent} label="Which Sower?" title="The versions question" />
      <p style={proseStyle}>
        One honest complication, because this read does not pretend to certainties it doesn&rsquo;t have: there is more than one Sower. Millet painted the subject more than once. The Boston canvas has a <strong>near-twin</strong>, an almost identical 1850 version that now lives at the Yamanashi Prefectural Museum in Japan, plus a handful of earlier and later relatives (an earlier version in Wales with a higher horizon and a smaller, less commanding figure; other oils and pastels scattered across museums). The Boston picture is the one history treats as <em>the</em> Sower — the famous, standard version, the one that became the image. But which exact canvas hung on the Salon wall in 1850–51, the Boston one or its Japanese twin, is genuinely debated among specialists, and you should hold it as an open question rather than a settled fact. What is not in doubt is the image itself, and the image is what changed everything.
      </p>

      <SectionHeader accent={accent} label="The Dutchman who couldn't let go" title="Van Gogh's lifelong obsession" />
      <p style={proseStyle}>
        And now the largest part of the afterlife, the part that matters most for the story this whole app is telling about how one painting feeds the next. A generation later, a struggling Dutch painter named <strong>Vincent van Gogh</strong> (1853–1890) fell completely, permanently in love with Millet. Of all the artists Van Gogh revered, Millet may have been the deepest — the painter of honest peasant labor, the model for what Van Gogh wanted his own art to be. And the image he came back to, over and over, for his entire short career, was <em>The Sower</em>.
      </p>
      <p style={proseStyle}>
        Van Gogh copied and re-copied Millet&rsquo;s sower across his whole career — dozens of drawings and painted versions, returning to the striding figure again and again. But — and this is the crucial part, the part that makes it influence rather than imitation — he transformed it. Where Millet painted his sower in dusk-dark earth tones, a near-silhouette against a gray sky, Van Gogh blew the same figure open into blazing color: his great Arles sowers of 1888 set the striding peasant against searing orange fields and acid-yellow skies, sometimes with the setting sun placed like a halo right behind the worker&rsquo;s head, the religious echo Chapter 4 found in Millet now made explicit and electric. (One of the famous versions hangs at the Kröller-Müller Museum in the Netherlands.) Millet gave Van Gogh the figure and the meaning; Van Gogh gave it the light. That hand-off — a dark, monumental, half-scriptural peasant, passed from a French farmer&rsquo;s son to a Dutch preacher&rsquo;s son who set it on fire with color — is exactly the kind of line this app exists to draw.
      </p>

      <SectionHeader accent={accent} label="Why it still matters" title="The long life of a man with a seed-bag" />
      <p style={proseStyle}>
        Step back and the whole arc is one clean line. A real peasant&rsquo;s son, trained in the gods-and-heroes tradition, fled a plague into a forest village and there painted the one subject his teachers ranked dead last — a single field hand, almost faceless, walking a dusk hill and flinging seed — at the size and with the seriousness the art world kept for kings. A nervous Paris, two years after a revolution, looked at that monumental laborer and saw a threat; Millet insisted he had painted a truth; both were there in the same dark brushstrokes. An American carried it home to Boston. A Dutchman set it ablaze and carried it into modern art.
      </p>
      <p style={proseStyle}>
        That is why a small, dark painting of a man doing farm chores is one of the most important pictures of the 19th century. It is the quiet half of the moment when art decided that the ordinary working present — not myth, not kings, not glory — was a fit subject for the most serious painting a person could make. Courbet announced it at the top of his lungs. Millet walked it down a hillside at dusk, threw a handful of seed, and let it grow.
      </p>
    </article>
  )
}

// The Gleaners (Jean-François Millet, 1857) — the five chapters
// Author draft for the art-content pipeline. Match the BuTown…BuAfterlife pattern exactly:
// SectionHeader / DropCap / proseStyle / italicStyle / <strong>/<em>, <article style={{ padding: '18px 18px 40px' }}>,
// `first` on the opener. No inline figures (follow Burial). Section ids: gleaning, looking, salon, meaning, afterlife.
// Facts verified in gleaners-factpack.md. Dimensions ft/in only. Disputed readings flagged in prose, not asserted.
// ─────────────────────────────────────────────────────────────

function GlGleaning({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The custom" title="The poorest, allowed into the field" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        efore you look at the painting, you have to know the thing it is about, because the whole picture turns on a single old word: <strong>gleaning</strong>. When a field of grain was harvested, reapers cut the stalks, gathered them into bundles, and carted the bundles away. They were not careful. Stray heads of wheat fell to the ground and were left behind — too few to be worth a farmer’s time to chase, scattered across acres of stubble. <strong>Gleaning</strong> was the work of going over that stripped field afterward, on foot, bent double, and picking those dropped scraps up by hand, one at a time. It was the lowest, slowest, least rewarding kind of harvest labor there is, and it was done by the people who had nothing else: widows, orphans, the old, the landless poor.
      </p>
      <p style={proseStyle}>
        Here is the part that makes it more than just hard work. For centuries, in much of Europe, gleaning was not begging and it was not stealing — it was a <em>right</em>. The poorest had a recognized, customary entitlement to walk into someone else’s harvested field and take what the harvest had dropped. The landowner did not get to say no. It was one of the oldest pieces of the social contract there is: the people who owned the land were obliged to leave the leavings for the people who owned nothing.
      </p>

      <SectionHeader accent={accent} label="Where the right comes from" title="Older than France" />
      <p style={proseStyle}>
        The custom is genuinely ancient. It is written into the Hebrew Bible as a flat command to harvesters: do not reap the very corners of your field, and do not go back for what you dropped — <em>leave it for the poor and the stranger</em> (the instruction appears in Leviticus and again in Deuteronomy). The most famous story of it is the <strong>Book of Ruth</strong>, in which a destitute widow named Ruth survives by gleaning behind the reapers in the field of a man named Boaz, who quietly tells his workers to drop extra on purpose for her. Any educated French viewer in 1857 would have had Ruth somewhere in the back of their mind looking at three women gleaning — which matters, because it meant the subject came pre-loaded with a faint religious dignity, whether Millet wanted it there or not.
      </p>
      <p style={proseStyle}>
        And it was not just a pious memory; it was law. In France a royal edict of <strong>1554</strong> actually regulated gleaning — it permitted the poor to enter harvested fields, but only <em>between sunup and sundown</em>, hedging the right around with rules so the landowners and the gleaners both knew exactly where they stood. So by Millet’s day gleaning was two things at once: an ancient near-sacred custom <em>and</em> a regulated, on-the-books permission. The poor had a legal key to the rich man’s stubble for the daylight hours, and then they had to leave.
      </p>

      <SectionHeader accent={accent} label="A right on its way out" title="Painting something that was dying" />
      <p style={proseStyle}>
        Now the quiet sadness underneath the picture. By the middle of the nineteenth century, the gleaning right was disappearing. The reasons were the same forces remaking the whole countryside: farms were getting bigger and more business-minded, common land that the poor had used for generations was being fenced off and privatized (a long process historians call <strong>enclosure</strong> — turning shared land into private property), machinery was starting to harvest more cleanly and leave less behind, and landowners increasingly resented strangers tramping through their fields at all. The old obligation to leave the leavings was curdling into a nuisance to be policed. None of this happened on one dated afternoon — it was a slow squeeze across decades — but the direction was unmistakable: the right of the poorest to glean was being quietly strangled out of existence.
      </p>
      <p style={proseStyle}>
        Hold that, because it changes what the painting is. Millet was not just recording a timeless rural chore. He was monumentalizing a custom that was already half gone — painting, at the size and seriousness of serious art, the very poorest people exercising one of the last rights they had left, in the years that right was being taken away. That is part of why the picture feels less like a snapshot and more like an elegy. It is a portrait of a vanishing piece of mercy.
      </p>

      <SectionHeader accent={accent} label="The man who painted it" title="A peasant’s son at Barbizon" />
      <p style={proseStyle}>
        The painter was <strong>Jean-François Millet</strong> (1814–1875), and he knew this world from the inside. He was born into a farming family in Normandy, in the rural northwest of France, and grew up around exactly this kind of labor before training as a painter and, in 1849, settling in the village of <strong>Barbizon</strong> (on the edge of the great Forest of Fontainebleau, southeast of Paris). Barbizon gave its name to the <strong>Barbizon School</strong> — a loose group of painters who left the city studio to paint the countryside and country life directly, from the real thing — and Millet became its great painter of <em>people</em>.
      </p>
      <p style={proseStyle}>
        And he did not arrive at this picture in a hurry. The gleaning subject obsessed him for years before the great canvas existed. He circled it through the first half of the 1850s in drawings, in etchings and prints, even in an earlier upright, vertical version of the composition, working the same three stooped figures over and over before he finally settled them into the wide, horizontal painting he sent to the Paris Salon — the official annual State exhibition — in <strong>1857</strong>. That slow approach matters. This is not a scene Millet glimpsed once and dashed down; it is a subject he chewed on for the better part of a decade, refining it toward something monumental. That long gestation is part of what separates the picture from reportage. It is not a sketch of a thing seen. It is a considered, deliberate statement, built up over years.
      </p>
      <p style={proseStyle}>
        Where does this sit in the bigger story? Millet is one half of <strong>Realism</strong>, the movement (told in full one level up in this app) that around 1848 insisted ordinary modern life — laborers, peasants, the poor — deserved the scale and seriousness art had always saved for gods and kings. The loud, public, city-facing half of Realism was <strong>Gustave Courbet</strong>, who hung a village funeral ten feet tall and dared the Salon to flinch. Millet is the quiet, rural half: no theatrics, no manifesto, just the people of the fields painted with a gravity nobody had spent on them before. He had already made <em>The Sower</em> (1850), a lone peasant flinging seed across a dusk field, monumental and almost menacing. Now he turned to three women picking up scraps — and somehow that turned out to be the more frightening picture of the two.
      </p>
    </article>
  )
}

function GlLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Three women, bent over a stripped field" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the size, because it is part of the argument and it is easy to get wrong. <em>The Gleaners</em> is not one of those room-swallowing ten-foot canvases — it is a manageable wall picture, about <strong>2 feet 9 inches tall and 3 feet 8 inches wide</strong> (roughly a yard high, a yard and a bit across). That is the scale of a respectable landscape or a comfortable family portrait. The provocation, as we will see in the next chapter, was not that the painting was gigantic; it was that this <em>much</em> seriousness, this much care, was being spent on three of the poorest people in France doing the lowest work there is. But first, just look at it.
      </p>
      <p style={proseStyle}>
        The picture splits cleanly into two zones, and the meaning lives in the split. The bottom and front belong to three women, stooped over a flat, stripped field — the cool, shadowed, near foreground, painted in dust-browns and faded grays. Behind them, the field opens out into warm golden light and an enormous, busy, overflowing harvest. Front: poverty, bent low. Back: abundance, blazing. Between them, a wide stretch of bare stubble like a moat. Once you see that division you cannot unsee it; it is the whole sentence the painting is saying.
      </p>

      <SectionHeader accent={accent} label="The three backs" title="Labor painted as posture" />
      <p style={proseStyle}>
        Look first at the bodies, because Millet tells you everything about the work through their backs — not their faces, which are shadowed and turned away, but the lines of their spines. The two women on the left are folded almost in half, doubled over at the waist, hands down near the stubble, faces dropped toward the ground they are searching. The one in the very center reaches down with the patient, mechanical bend of someone who has done this a thousand times and will do it a thousand more before dark.
      </p>
      <p style={proseStyle}>
        The third woman, on the right, is the one to watch, because she breaks the rhythm. She is the most nearly <em>upright</em> of the three — still stooped, still bent, never standing fully straight, but rising a little, as if pausing for one second to ease a back that has been folded over all day. That half-straightened body is the most human thing in the picture. You have felt that exact motion if you have ever weeded a garden or carried something heavy too far: the involuntary little stand-up-and-stretch that the body demands. Millet builds the entire weight of the labor into that one pose. There is no grimace, no tear, no caption telling you it is hard. The aching back says it for him.
      </p>
      <p style={proseStyle}>
        And the three together make a slow, deliberate diagonal across the foreground — left, center, right; lowest, low, rising — so that your eye reads them almost like a single body moving through one full cycle of the work: bend, gather, straighten, repeat. Three women, or one woman’s whole exhausting day shown three times at once.
      </p>

      <SectionHeader accent={accent} label="The caps" title="Blue, red, yellow — the loudest thing here" />
      <p style={proseStyle}>
        Now look at color, because there is almost none, and that makes the little there is shout. The field is browns and grays, the women’s heavy clothes are muted and dull — and then, on their heads, three clean notes ring out: a <strong>blue</strong> cap on the woman at the left, a <strong>red</strong> one on the woman in the center, a warm <strong>yellow-gold</strong> kerchief on the woman at the right. Blue, red, yellow — the three primary colors, the brightest things in the entire painting, the first place your eye lands.
      </p>
      <p style={proseStyle}>
        Sit with how strange that is. In the grand paintings the Salon prized, the most saturated, most expensive color — the deep reds and brilliant blues — was reserved for the robes of kings, cardinals, the Virgin Mary. Here Millet has taken those very colors and handed them to three field-workers’ headscarves, on the heads of women bent over picking up garbage grain. It is a small, quiet, completely deliberate act of dignity: the loudest color in the room goes to the lowest people in it.
      </p>

      <SectionHeader accent={accent} label="The yield" title="What a whole day actually gets you" />
      <p style={proseStyle}>
        Follow the women’s hands down and look at what they are actually carrying, because it is the bleakest detail in the picture. The woman on the right holds a thin little bunch of stalks — a handful, no more. The center woman has another small clutch tucked at her apron. This, after hours bent double across acres of stubble, is the harvest of the gleaners: a few fistfuls of grain that the reapers happened to let fall. The meagerness is not an accident of the painting; it is the subject of the painting. They are gathering what the harvest threw away, and there is heartbreakingly little of it.
      </p>

      <SectionHeader accent={accent} label="The harvest behind" title="The abundance they’re not part of" />
      <p style={proseStyle}>
        Now lift your eyes off the three women to everything happening behind them, because Millet has loaded the distance with everything they don’t have. Out in the golden light stand <strong>tall round stacks of grain</strong>, fat and overflowing. There is a <strong>loaded cart</strong>, long rows of bundled <strong>sheaves</strong>, and a whole <strong>crew of workers</strong> busily bringing the crop in — the real harvest, the rich one, the one that fills barns. The far field is sunlit, warm, abundant, almost glowing. It is everything the foreground is not.
      </p>
      <p style={proseStyle}>
        And small, off to the right among the busy crew, sits a figure on horseback. By the usual reading he is the farm’s <strong>overseer</strong> — the mounted steward who watches the work get done. He is easy to miss, but once you find him the whole social order of the field clicks into place: someone owns this enormous harvest and supervises it from a horse, and the three women in front own none of it and gather its scraps on foot. Wealth on horseback in the warm distance; poverty bent double in the cool front. Millet did not paint a label on any of this. He just arranged the field so that you cannot look at the three women without the rich harvest sitting right behind their heads, and cannot look at the rich harvest without the three women blocking your way to it.
      </p>
      <p style={proseStyle}>
        Behind all of it: a low, flat horizon, a few farm buildings, a hazy sky — the ordinary countryside around Barbizon, refused any drama at all. No mountains, no storm, no opening heaven. Just the plain ground these people work, lit by an end-of-summer sun, going quietly on being ground. The grandeur of this painting is not in any view. It is entirely in three tired women and the dignity of the attention paid to them.
      </p>
    </article>
  )
}

function GlSalon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1857" title="Three poor women walk into the Salon" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1857 Millet sent the painting to the <strong>Salon</strong> — the official, State-run annual art exhibition in Paris, the one show in France that could make a painter’s name or bury it (you met it one level up in the Realism overview; it was run by <strong>the academy</strong>, the Academy of Fine Arts, the state institution that set the rules of what good art was). To hang in the Salon was to be measured, in public, against everything respectable in French painting at once. And into that room, among the gods and goddesses and noble Romans, Millet hung three of the poorest women in France bent over a field picking up scraps.
      </p>
      <p style={proseStyle}>
        It did not go well. The reception from the middle and upper classes was openly hostile — not the polite dislike a painting shrugs off, but something closer to alarm. To understand why three women gleaning could <em>frighten</em> people, you have to put two things next to the canvas: an old rule about what art was for, and a fresh memory about what the poor could do.
      </p>

      <SectionHeader accent={accent} label="The rule it broke" title="Peasants at the size of saints" />
      <p style={proseStyle}>
        The rule first. European art ran on a ranking system, an official ladder of subject-matter the academy enforced. At the very top sat <strong>history painting</strong> — and “history” here did not mean real events; it meant grand scenes from scripture, from Greek and Roman myth, from ancient legend, the noble and the timeless. Those subjects got the biggest canvases, the most serious treatment, the prizes, the prestige. At the very bottom of the ladder sat plain modern life: peasants, laborers, the everyday. You were <em>allowed</em> to paint a peasant — but as a small, charming, picturesque thing, a rustic decoration. You were not allowed to paint a peasant with the grave, careful, full-dress seriousness the ladder reserved for gods.
      </p>
      <p style={proseStyle}>
        Millet broke exactly that. <em>The Gleaners</em> is not a huge canvas — it is a moderate wall picture, not a ten-foot wall (that is Courbet’s game) — but it treats its three poor women with the dead-serious gravity, the monumental simplicity, the sculptural weight the academy kept for heroes. He gave field-workers the <em>dignity</em> of high art without the size, and to an eye trained on the ladder that was its own kind of provocation: he had taken the lowest possible subject and painted it as if it were among the highest. The category was being violated not by scale but by seriousness — and the Salon’s eye was finely tuned to feel that.
      </p>

      <SectionHeader accent={accent} label="The three Fates of Poverty" title="What a hostile critic saw" />
      <p style={proseStyle}>
        Now the famous insult, and it is worth quoting because it tells you exactly how the painting landed. But first, one piece of background you need, because the insult turns on it. The <strong>Three Fates</strong> are figures from Greek and Roman myth: three goddesses who between them spin, measure, and cut the thread of every human life — the implacable powers of destiny. Hold that image, because a critic reached for it. One critic looked at the three stooped women and recoiled: “his three gleaners have <strong>gigantic pretensions</strong>,” he wrote, “they pose as <strong>the Three Fates of Poverty</strong> … their ugliness and their grossness unrelieved.”
      </p>
      <p style={proseStyle}>
        Unpack that. To say Millet’s three peasants “pose as the Three Fates” was to say they loom, that they have been made too large, too grave, too <em>important</em> — that three women picking up wheat had been given the bearing of the goddesses who decide when you die. The critic meant it as ridicule (“gigantic pretensions” — who do these scraps-gatherers think they are?). But read it the other way and it is an accidental compliment, and proof Millet’s move had worked: he <em>had</em> given three nobodies the gravity of fate itself, and the critic felt it, and it scared him. The word “ugliness” is the giveaway — to the Salon eye, refusing to prettify the poor read not as honesty but as an attack on beauty.
      </p>

      <SectionHeader accent={accent} label="The shadow of 1793" title="Why scraps looked like a threat" />
      <p style={proseStyle}>
        The deeper fright was not aesthetic; it was political, and it came from the calendar. The painting went up in <strong>1857</strong>, less than a decade after <strong>1848</strong> — the February revolution that toppled the king and, for a few raw months, put the ordinary poor of France (workers, peasants, the dispossessed) briefly at the very center of their own history, before the army closed the experiment down with great violence (the Realism overview tells that year in full). The propertied classes had been genuinely frightened by 1848, and they had not forgotten it. The poor, in 1857, were not a quaint background detail. They were a recent and real political force.
      </p>
      <p style={proseStyle}>
        So when the rural poor turned up <em>monumentalized</em> in the State’s own exhibition — large, grave, dignified, undeniable — a nervous bourgeois eye did not see a tender pastoral. It saw a threat. One critic reportedly read into the canvas “an alarming intimation of the scaffolds of <strong>1793</strong>” — 1793 being the bloodiest year of the French Revolution, the year of the guillotine and the Terror, when the poor of France had cut off the heads of their betters. Three stooped women gathering wheat had, somehow, conjured the memory of the executioner’s blade. That is an astonishing thing for a picture of field-gleaning to do, and it is the clearest possible measure of how raw the nerve was. Millet had not painted a riot. He had painted three poor women with respect — and to the people who owned France in 1857, respect for the poor was itself a frightening thing to see hung on a wall.
      </p>
    </article>
  )
}

function GlMeaning({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="What Millet meant" title="Truth without prettiness — and without a sermon" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        o what was Millet actually doing? Was this a political painting — a deliberate indictment of an unjust society, a fist raised for the poor? Or was it simply an honest man painting, with great seriousness, a world he had grown up in and loved? Here it is worth being plain about the state of the argument: Millet’s politics are genuinely disputed among historians, and they have been for a long time. The art historian Robert Herbert, who did more than anyone to recover what Millet actually thought, read deep social feeling into the work; others have pushed back, warning against turning a Normandy peasant’s son into a tidy socialist. The honest answer is that the question has never been settled, that the painting holds both readings at once, and that it refuses to resolve them. We are not going to pretend otherwise here.
      </p>
      <p style={proseStyle}>
        Start with what the painting plainly is. It is sympathetic — there is no question Millet is <em>with</em> these women, not above them. But the sympathy is the unusual kind: it has no sugar in it. He does not make the gleaners pretty. He does not give them sweet faces or rosy cheeks or a single tear glistening for effect. He does not arrange a kindly farmer pressing bread into their hands, or a shaft of golden light blessing their labor, or any of the cues a Victorian picture would use to tell you exactly how to feel. He gives you three tired, anonymous, heavy bodies doing brutal work, painted with grave respect and nothing else. The sympathy is in the seriousness, not in any softening. That is the whole secret of the picture: <em>dignity without sentimentality.</em>
      </p>

      <SectionHeader accent={accent} label="Dignity, threat, and the artist’s own word" title="The same picture, three ways" />
      <p style={proseStyle}>
        That refusal to sweeten is exactly why the painting could be read in opposite directions by opposite people. To someone disposed to sympathy, the gravity reads as <em>dignity</em>: Millet has insisted that these women, doing this lowly work, are as worthy of serious art as any saint or king — that their bent backs carry real human weight. To someone disposed to fear — the propertied Salon critic of the last chapter — the very same gravity reads as <em>threat</em>: why has the painter made the poor so large, so grave, so unignorable? What is he trying to make us feel about them? The painting did not change between those two viewers. Only the nerve it touched did. A picture that can be both an icon of human dignity and an “intimation of the scaffolds of 1793,” depending only on who is looking, is doing something genuinely powerful and genuinely unstable.
      </p>
      <p style={proseStyle}>
        And then there is a third voice in the argument — Millet’s own. He resisted the political label, and we can hear him doing it: in his letters to his friend and biographer <strong>Alfred Sensier</strong>, Millet framed his peasants as a matter of sympathy and truth, the world he had grown up in and felt deeply, not a program he was pushing. He bristled at being read as an agitator and insisted he was painting human beings, not propaganda. So one honest fact is that the artist himself denied an explicit political agenda. But here is the catch, and it is a real one: a painter does not get the last word on what his picture <em>does</em> once it is on a public wall. Whatever Millet meant in his own heart, the canvas walked into the Salon and frightened the rich, and that effect is part of the work’s real history whether he aimed for it or not. The safest true thing to say is this — and it leaves the tension standing rather than pretending to settle it: Millet was a man of deep sympathy for the rural poor who insisted, in his own words, that his sympathy was human, not partisan; and the world insisted on reading partisanship into it anyway. Both of those are real. The gap between them is where the painting lives.
      </p>

      <SectionHeader accent={accent} label="The thing it may leave out" title="No biblical comfort — or is there?" />
      <p style={proseStyle}>
        One reading of the picture, and it is the freshest argument about it, turns on what Millet may have chosen <em>not</em> to include. We saw in the first chapter that gleaning carries an old religious warmth — the Book of Ruth, the biblical command to leave the leavings for the poor, the sense of a sacred mercy built into the harvest. On this reading, Millet could have leaned on all of that and pointedly refused to. There is no halo of consolation, no kindly Boaz quietly telling his reapers to drop extra grain for these women, no shaft of holy light, no sense that God or the community is reliably watching over them. The foreground poverty and the sunlit rich harvest behind it are simply set side by side, divided by bare ground, with no bridge of charity drawn between them. The Bible says: leave grain for the poor as an act of holy community. Millet’s field, on this account, shows the poor reduced to scavenging a few stalks while the real harvest is carted off behind their backs, and offers no comfort about it at all — full respect, withheld consolation, from them and from us.
      </p>
      <p style={proseStyle}>
        But it is worth being honest that this is one art-historical reading, not a settled fact, and a strong counter-current runs the other way. Other writers hear something quietly sacred in exactly this canvas — they argue that Millet treats peasant labor with a reverence that <em>is</em> the consolation, that the gravity he lends these bent women is itself a kind of blessing, an echo of Ruth’s dignity rather than its absence. The painting does not announce which is right; it carries both. Read it cold and it is a bleak field with no mercy in it; read it warm and the seriousness Millet spends on the gleaners is a mercy of its own kind. That unresolved tension — whether the picture withholds biblical comfort or quietly supplies a different one — is part of why it keeps holding the eye. And the women themselves deepen it: they are anonymous. We have no names for these three gleaners, no record of who they were, and that is its own part of Millet’s point — these are not portraits of individuals but the nameless poor made monumental, every gleaner who ever bent over a stripped field at once.
      </p>

      <SectionHeader accent={accent} label="The company it keeps" title="Millet’s other peasants — and Courbet" />
      <p style={proseStyle}>
        It helps to see <em>The Gleaners</em> among its siblings. Two years before it, in spirit, stands <em>The Sower</em> (1850) — Millet’s lone peasant striding a dusk field, flinging seed in a great dark arc, monumental and almost menacing. Two years after, in the same emotional family, comes <em>The Angelus</em> (painted 1857–59) — two peasants standing in a field at evening, heads bowed, pausing in their work to pray at the sound of the church bell, tiny under an enormous sky. Set the three together and Millet’s whole project comes clear: sowing, gleaning, praying — the elemental acts of the rural poor, each given the weight of scripture without a word of scripture spoken. And across the movement stands his opposite number, <strong>Courbet</strong>, doing the loud version of the same revolution in the city and the provincial town — a whole village funeral ten feet tall (his story is one level up). Courbet shouted Realism into being. Millet whispered it, bent over a stubble field. The whisper, it turns out, carried just as far.
      </p>
    </article>
  )
}

function GlAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The price reverses" title="Three thousand francs to three hundred thousand" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he afterlife of <em>The Gleaners</em> is one of the great reversals in art history, and you can measure it in money. When Millet first sold the painting, in 1857, he was short of cash and let it go for <strong>3,000 francs</strong> — below even his own asking price of 4,000. The despised picture, the one the critics called ugly and dangerous, went out cheap. That is where the story starts: a working painter, underpaid, parting with a masterpiece because he needed the money.
      </p>
      <p style={proseStyle}>
        Now jump forward about thirty years. By the 1880s the canvas had risen into the collection of a Paris banker, <strong>Ferdinand Bischoffsheim</strong> — already a sign that the despised had become the desirable. And in <strong>1889</strong> it went to auction and sold for <strong>300,000 francs</strong>. Read those two numbers together: three thousand francs to three hundred thousand, a hundredfold jump in a single working lifetime. The picture that frightened the bourgeoisie of 1857 had become, by 1889, exactly the kind of trophy the bourgeoisie paid fortunes to own. Within a week of that sale it was announced that the buyer was <strong>Jeanne-Alexandrine Louise Pommery</strong> — head of the great Pommery champagne house, one of the most successful businesswomen in France. The gleaners now belonged to a champagne fortune.
      </p>

      <SectionHeader accent={accent} label="From a champagne fortune to the nation" title="Pommery’s bequest" />
      <p style={proseStyle}>
        And then Mme Pommery did the thing that closes the circle. When she died, in <strong>1891</strong>, her will gave the painting to the nation: <em>The Gleaners</em> was bequeathed to the <strong>Louvre</strong>, the great Paris museum, the very heart of official French art. Sit with that for a moment. The picture the State’s own official Salon had recoiled from in 1857 — the one a critic had compared to the guillotines of the Terror — was handed, free, into the permanent keeping of the nation whose taste it had once outraged. The threat had become the heirloom. And there is a quiet symmetry worth naming: this painting of the rural female poor — three women who owned nothing — was carried into the national collection by a woman of great independent wealth, Louise Pommery, who had built and run one of France’s major champagne houses on her own account. The scandal had become a national treasure that one of the most successful businesswomen in France thought important enough to give to her country forever.
      </p>
      <p style={proseStyle}>
        (A small note for the careful: the route into the national collection runs through Pommery’s 1889 purchase and her 1891 bequest, not through any single tidy “gift” a year before — the often-repeated shorthand. The verified dates are the ones above.)
      </p>

      <SectionHeader accent={accent} label="Louvre to Orsay" title="The wall it hangs on now" />
      <p style={proseStyle}>
        For most of the twentieth century the painting hung among the national collections, and then it found its permanent home. In <strong>1986</strong> the <strong>Musée d’Orsay</strong> opened on the Left Bank of the Seine — a museum dedicated to nineteenth-century art, installed inside the converted shell of the Gare d’Orsay, a grand old Paris railway station that had been saved from demolition and rebuilt as a gallery. The Louvre’s nineteenth-century holdings crossed the river to fill it, and <em>The Gleaners</em> went with them. It is there now, on permanent view, and you can stand in front of those three bent women any day the museum is open — a few feet from Courbet’s village funeral and Millet’s own <em>Angelus</em>, the quiet half of Realism gathered in one set of rooms.
      </p>

      <SectionHeader accent={accent} label="The most reproduced poor women in the world" title="Why it never went away" />
      <p style={proseStyle}>
        But the truest measure of the painting’s afterlife is not the auction price or the museum wall. It is how completely the image escaped the frame. <em>The Gleaners</em> became one of the most reproduced pictures of the entire nineteenth century — printed and reprinted, copied, hung in countless homes, taught to schoolchildren, parodied, quoted, turned into a shorthand for rural labor and rural poverty everywhere. Three anonymous women, bent over a stripped field, gathering the grain the harvest dropped, became one of the most recognized images on Earth.
      </p>
      <p style={proseStyle}>
        It also lit a fire in other painters. The young <strong>Vincent van Gogh</strong> worshipped Millet, copied his peasant subjects again and again, and built his own early art on Millet’s example of taking field labor seriously; Millet’s name runs all through Van Gogh’s letters. Through Van Gogh and others, the gleaners’ dignity passed down into the painting of the poor for generations.
      </p>
      <p style={proseStyle}>
        So put the whole arc in one breath. Millet took the very poorest people in France, doing the very lowest work there is — gathering the scraps a vanishing right still let them gather — and painted them with the grave seriousness art had always saved for gods and kings. The Salon of 1857 saw a threat and recoiled. Within a lifetime the same world paid a hundred times the original price to own the picture, gave it to the nation, and hung it where the schoolchildren file past. The three bent women won. They are still bent, still gathering, still there on the wall in Paris — and now everyone agrees they were always worth looking at.
      </p>
    </article>
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
  'three-women': {
    setting: TwSetting,
    making: TwMaking,
    reading: TwReading,
    primitivism: TwPrimitivism,
    afterlife: TwAfterlife,
  },
  'the-portuguese': {
    setting: PtSetting,
    making: PtMaking,
    reading: PtReading,
    letters: PtLetters,
    afterlife: PtAfterlife,
  },
  'gris-breakfast': {
    setting: GrSetting,
    making: GrMaking,
    reading: GrReading,
    system: GrSystem,
    afterlife: GrAfterlife,
  },
  'three-musicians': {
    setting: TmSetting,
    making: TmMaking,
    reading: TmReading,
    elegy: TmElegy,
    afterlife: TmAfterlife,
  },
  burial: {
    town: BuTown,
    frieze: BuFrieze,
    salon: BuSalon,
    romanticism: BuRomanticism,
    afterlife: BuAfterlife,
  },
  'stone-breakers': { road: SbRoad, looking: SbLooking, salon: SbSalon, meaning: SbMeaning, afterlife: SbAfterlife },
  studio: { refusal: StRefusal, allegory: StAllegory, reading: StReading, cast: StCast, afterlife: StAfterlife },
  sower: { barbizon: SoBarbizon, looking: SoLooking, salon: SoSalon, meaning: SoMeaning, afterlife: SoAfterlife },
  gleaners: { gleaning: GlGleaning, looking: GlLooking, salon: GlSalon, meaning: GlMeaning, afterlife: GlAfterlife },
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
  const scrollRef = useScrollMemory<HTMLDivElement>()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)', ['--accent' as string]: accent }}>
      <WarBreadcrumb crumbs={crumbs} accent={accent} />
      <div ref={scrollRef} style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: 'var(--background)', color: 'var(--foreground)' }}>
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
