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
        The town was <strong>Ornans</strong> (pronounced "or-NAHN"), a cramped little place strung along a river in the Franche-Comté (frahnsh-kohn-TAY), the hilly region in eastern France that runs up to the Swiss border. It was the hometown of a loud, ambitious, supremely self-certain young painter named <strong>Gustave Courbet</strong> (1819–1877), whose larger story is told in the Realism overview one level up in this app (the man who would become the public face of <strong>Realism</strong> — the new school that insisted ordinary contemporary life was a fit subject for serious art, painted plain, with none of the official art establishment's polish). Courbet had grown up here, among these exact people. And in 1848 or so, one of them died.
      </p>

      <SectionHeader accent={accent} label="The man in the box" title="Whose burial this is" />
      <p style={proseStyle}>
        By the usual account, the dead man was Courbet's own <strong>great-uncle, Claude-Étienne Teste</strong>, who died in September 1848. That identification, and the date, are the standard story rather than carved-in-stone fact — they are sometimes contested, so treat them as the received version, not a closed case. What is not in doubt is the kind of funeral it was: not a king's, not a saint's, not a hero's. A provincial one. A market-town one. The death of exactly the sort of person history files under "and others."
      </p>
      <p style={proseStyle}>
        That is the detail to hold onto, because it is the whole engine of the painting. Courbet did not go looking for a grand subject and dress it down. He took the most local, least important death imaginable — a relative in a backwater town, mourned by the people who happened to live nearby — and decided it deserved a canvas the size Europe reserved for the death of Christ.
      </p>

      <SectionHeader accent={accent} label="The decision" title="Paint my own people, full size" />
      <p style={proseStyle}>
        To feel how strange that decision was in 1849, you have to know the rule he was breaking. European art ran on a ranking system called the <strong>hierarchy of genres</strong> (an official ladder of subject-matter categories), and the Realism overview sketches it; this read can make it concrete. At the top sat grand scenes from myth and scripture and ancient legend — <strong>history painting</strong> (the prestige category; "history" here meant scripture, myth, and classical antiquity, <em>not</em> real events in the modern sense — nobody at the top was painting last week's news). Plain modern life sat at the very bottom. Gods up here; greengrocers down there. You were <em>allowed</em> to paint a peasant. You were not allowed to paint a peasant at the size of a god. Size was reserved. A big canvas was a promise that the thing on it mattered enormously, and the body that decided what was permitted to matter that much was <strong>the academy</strong> (the Academy of Fine Arts, the French state institution that set the rules of painting and ran the official exhibition where careers were made — the <strong>Salon</strong>, which you will meet properly in Chapter 3).
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
        tart with the wall it needs. <em>A Burial at Ornans</em> is roughly <strong>10 feet 4 inches tall and 21 feet 11 inches wide</strong> (about 3.15 by 6.68 meters) — call it ten feet tall and twenty-two feet wide and you are close enough to feel it. That is not a painting you hang. That is a painting you give a room to. Stand in front of it and the figures are your own height; you are not looking at a picture of a funeral so much as standing at the back of one. At the heroic scale the Realism overview describes, this acreage was the academy's currency for the death of kings. Courbet spent the whole sum on a country graveside.
      </p>
      <p style={proseStyle}>
        He painted it in 1849–1850, begun in Ornans, where he had to build the thing more or less by main force — there is barely a studio in the Franche-Comté big enough to back up far enough to see a canvas this size whole. The subtitle he gave it doubled down on the joke: he called it a "historical picture of a burial at Ornans," deliberately borrowing the language of history painting (the prestige category) for a thing with no history in it at all, only a Tuesday in a small town.
      </p>

      <SectionHeader accent={accent} label="The frieze" title="Reading the crowd left to right" />
      <p style={proseStyle}>
        Now look along it, because the composition is doing something deliberate. The <strong>more than forty figures</strong> are not arranged in a pyramid building to a hero at the center, the way a proper history painting would marshal a crowd toward its protagonist. They are strung out in a long horizontal band — a <strong>frieze</strong> (a continuous decorated strip, the word borrowed from the carved ribbons that run along the tops of Greek temples) — shoulder to shoulder across the full twenty-two feet, every head at roughly the same height. There is no hero. There is no center of importance. Your eye just walks the line, the way it would walk a real crowd, finding no one it is told to care about more than anyone else.
      </p>
      <p style={proseStyle}>
        The format was not invented on the spot. Courbet had taken it from the <strong>Dutch 17th-century civic-guard group portrait</strong> (the genre of Rembrandt's <em>Night Watch</em> and Frans Hals's militia pictures — rows of named, equally-lit men paid to be remembered together), which he studied on a trip through Belgium and the Netherlands in 1846–47. But borrowing the format makes the move sharper, not softer: Courbet slotted the rural poor of a French market town into the exact compositional slot the Amsterdam guilds had paid to occupy. Anyone who knew the old pictures felt the swap.
      </p>
      <p style={proseStyle}>
        And these were real, specific people. The townsfolk of Ornans posed for Courbet one by one in his studio — the mayor, the justice of the peace, the priest, the gravedigger, and his own family: his father <strong>Régis Courbet</strong> among the men, his sisters <strong>Juliette</strong>, <strong>Zoé</strong>, and <strong>Zélie</strong> among the women. The result is not a generalized "crowd of mourners" but a row of recognizable individuals, which is exactly why it unsettled people: you could, in 1850, point at the canvas and name the butcher.
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
        Among the men, two of them are wearing the wrong decade. Two old fellows stand in the dark suits and <strong>knee breeches of 1793</strong> — the dress of the First Republic, the high Revolutionary years — half a century out of fashion in 1850. They are real sitters (friends of Courbet's grandfather), and the antique costume is a deliberate time-stamp: these are men who lived through the Revolution, planted in the front of a contemporary crowd, quietly threading France's republican memory into a country burial. Hold that detail; it does real work in Chapter 3.
      </p>
      <p style={proseStyle}>
        And then, down in the right foreground, the detail that tells you everything about Courbet's nerve: a <strong>small dog</strong>, back to the grave, sniffing off toward the edge of the canvas, completely indifferent to the solemn human business behind it. A dog has wandered into the most sacred moment a community has, and it does not care, and Courbet not only let it stay, he gave it the front row. No history painter alive would have permitted that animal. Its boredom is the painting's flat refusal to pretend the moment is more exalted than it is.
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
        And it did not arrive alone. In the same Salon Courbet also hung <strong>The Stone Breakers</strong> (1849–50), another monumental canvas — two road laborers, life-size, breaking rock — that he had finished just before this one. Visitors met the pair as a single coordinated assault: the same radical program (heroic scale, common laborers, zero idealization) delivered twice in the same hall, the Burial as the larger and more extreme half. (The Stone Breakers itself is gone — destroyed in 1945 in the bombing of Dresden — and its story belongs to the Realism overview; here it matters only as the Burial's twin.) Two pictures, one program, and the program detonated.
      </p>

      <SectionHeader accent={accent} label="Why a country funeral blew up Paris" title="The Salon as detonator" />
      <p style={proseStyle}>
        Of all the pictures Courbet ever made, this is the one that turned him from a promising provincial into a national scandal. The strange part is not that critics disliked it; critics dislike things every year and Paris forgets by spring. The strange part is that a <em>funeral</em> — a flat, gray, undramatic country funeral — became, for a season, one of the most talked-about objects in France. To see why, you have to understand that the Salon's own structure is what turned a painting into a bomb. The Salon was <em>the</em> show, the single official stage, the one room where everything respectable in French art stood together to be ranked. A picture hung there could not be quietly ignored; it was in the room with the gods, demanding to be measured against them. Courbet had not snuck his heresy into a side gallery. He had walked it through the front door of the temple and stood it next to the altar — and the temple had to respond.
      </p>
      <p style={proseStyle}>
        So what did the room actually see? First, an assault on beauty. The faces were common, ordinary, some of them unflattering — real market-town faces, not the smooth idealized features the Salon trained its painters to produce. It helps to picture what they were comparing it against: the Salon's reigning style finished a painting until the brushwork vanished and the skin turned to flawless porcelain, a nude goddess sliding poreless along a wave, every surface licked smooth (the kind of academic ideal the era overview describes). Set the Burial beside that and it looked like an insult — rough, dark, heavy, full of double chins and bad posture and weather-beaten skin. Courbet had not failed to make his people beautiful; he had refused to, and to an eye trained on porcelain goddesses the refusal read as an attack on beauty itself. The critics called it ugly.
      </p>
      <p style={proseStyle}>
        But ugliness in a small picture is a private matter; ugliness across twenty-two feet of canvas is a manifesto, and that was the deeper offense — the <em>scale</em>. That much canvas, that much seriousness, that much <em>room</em>, was reserved by the hierarchy of genres for history painting's top rung: gods, kings, saints, the great deaths and the great deeds. To spend it on a provincial funeral full of nobodies was, in the academy's grammar, a category error so loud it sounded like a threat. Either thing alone the Salon could have swallowed — a small picture of a funeral, fine; a huge picture of a coronation, fine. It was the <em>combination</em> that could not be forgiven, because the combination said the whole ranking was a lie. Courbet had taken the bottom rung of the ladder and bolted it to the top, and everyone who understood the ladder understood the violence of that.
      </p>
      <p style={proseStyle}>
        And then there was the year. The Burial went up only two years after <strong>1848</strong> — the February revolution that toppled King Louis-Philippe and, for a few raw months, put the ordinary people of France (workers, peasants, the poor) briefly at the center of their own history before the army closed the experiment down (the Realism overview tells that year in full). Memories were fresh and the propertied classes were frightened. And the fear had something to fix on right there in the paint: planted in the crowd, in the dark suits and breeches of 1793, stand two old men dressed as veterans of the First Republic — Courbet's own choice of costume, a visible reminder, in 1850, of the last time ordinary Frenchmen had been dangerous. So when some critics read a socialist menace into the canvas, they were not only reacting to the proximity of the barricades; they were reacting to the rural poor made enormous and dignified, with the ghosts of '93 standing among them, hung in the State's own exhibition.
      </p>

      <SectionHeader accent={accent} label="The voice that fought back" title="Champfleury and the name 'Realism'" />
      <p style={proseStyle}>
        The painting was not left to the hostile critics alone. Its loudest defender was the writer <strong>Champfleury</strong> (Jules Husson, 1821–1889), a friend of Courbet's and the critic widely credited with first using the word "<strong>Realism</strong>" in the new art-critical sense — naming, in print, the very thing this painting was doing. Against the charge that the Burial was political propaganda, Champfleury answered flatly: "there is not a trace of socialism in <em>A Burial at Ornans</em>." (That the charge needed rebutting at all tells you how live the socialist reading was.) The point worth holding is that Realism never was one painter's lone stunt. It was argued into being by a circle — Courbet, Champfleury, and others who gathered at the Brasserie Andler, the Paris beer hall their friends nicknamed "the Temple of Realism." Courbet painted the manifesto; his friends supplied the word for it.
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
        ourbet, who never in his life under-explained his own importance, later wrote — or is at least widely recorded as having said — that the Burial was, in fact, "<strong>the burial of Romanticism</strong>." (There is no single dated letter pinning the line down; it survives as strong secondary-source consensus, so take it as a remark genuinely his, not a quote anyone invented.) It is one of the great double meanings in art history, and worth unfolding slowly, because it is the key to why this particular painting is treated as the public birth of a movement rather than just a big sad picture.
      </p>
      <p style={proseStyle}>
        A painting of a burial — and what it buries, he says, is not only his great-uncle but an entire way of making art.
      </p>

      <SectionHeader accent={accent} label="What 'Romanticism' meant" title="The thing in the grave" />
      <p style={proseStyle}>
        To get the line you have to know what was in the coffin. <strong>Romanticism</strong> (the generation of painting just before Courbet) was, the Realism overview explains, the academy's opposite excess: exotic settings, heaving drama, shipwrecks and harems and battlefield agony, emotion cranked to the ceiling. Where the academy painted cold marble gods, the Romantics painted hot fevered passion. They were enemies of each other, but from Courbet's point of view they were the same enemy: both were ways of <em>not</em> painting the actual, ordinary, present-tense world. One escaped into antiquity; the other escaped into drama. Neither would deign to paint a Tuesday in Ornans.
      </p>
      <p style={proseStyle}>
        So when Courbet says the Burial buried Romanticism, he means this flat, gray, unbeautiful, undramatic, completely real funeral is the thing that kills the fever dream. You cannot look at this hole in the ground, this bored dog, these double chins, and still believe art's only proper business is gods and shipwrecks. The painting does not argue against Romanticism. It simply stands there being real at enormous scale, and makes the alternative look like costume drama.
      </p>
      <p style={proseStyle}>
        It helps that Courbet was not theorizing alone. The philosopher <strong>Pierre-Joseph Proudhon</strong> (1809–1865) — an Ornans man himself, and France's most famous radical thinker — was Courbet's friend and intellectual partner for years, and read Courbet's painting as social truth-telling, art with a public conscience. The self-understanding behind "the burial of Romanticism" was sharpened in that company, not generated in a vacuum.
      </p>

      <SectionHeader accent={accent} label="A manifesto before the manifesto" title="Realism goes public" />
      <p style={proseStyle}>
        The Realism overview tells the famous later moment: 1855, the Pavilion of Realism, the tent Courbet built across from the world's fair with a printed catalogue inside, the place where Realism finally got its <em>name</em> in writing and its argument on paper. That is where Realism became a stated program.
      </p>
      <p style={proseStyle}>
        But the Burial came five years earlier, and it made the argument with no words at all. It is the movement's public birth as a <em>fact</em> before it was a public birth as a <em>theory</em>. In 1850, before there was a tent or a catalogue or the word "Realism" on a sign, there was already a ten-foot wall of plain reality hanging in the official Salon, forcing every visitor in France to deal with it. The painting did the work a manifesto does — declared what art was now allowed to be about — except it declared it in oil instead of ink, and it declared it inside the enemy's own building. The tent of 1855 put Realism into words. The Burial of 1850 had already put it on the wall.
      </p>

      <SectionHeader accent={accent} label="What it cracked open" title="The subject of art" />
      <p style={proseStyle}>
        Step back and the size of the rupture is clear. Before the Burial, the question "what is a serious painting allowed to be <em>about</em>?" had an official answer, ranked and policed: gods at the top, the present at the bottom. After the Burial — and after the fight it started — that answer was permanently in doubt. Courbet had proved, on the largest possible canvas, in the most public possible room, that the ordinary contemporary world could carry the full weight and scale of the grandest art. He did not single-handedly cause everything that followed (the honest version resists hanging a whole century on one canvas). But the crack he opened — the present is a fit subject for serious art, at any scale a painter dares — is the crack the rest of modern painting pours through.
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
        he painting outlived its painter, and the way it entered the public collections is its own quiet ending. Courbet's later life went badly: the Realism overview tells how his politics caught up with him after the Paris Commune of 1871 (the brief revolutionary workers' government in Paris, which Courbet publicly backed) and he died in exile in Switzerland in 1877. The Burial — this enormous, hard-to-house, once-scandalous thing — was still in the family.
      </p>
      <p style={proseStyle}>
        It was Courbet's sister, <strong>Juliette Courbet</strong> — one of the women you can find in the canvas itself — who handed the painting to France. By the standard account she gave it to the State in <strong>1881</strong>, four years after her brother's death, donating to the nation the very canvas the nation's official Salon had once recoiled from. Sit with that for a second. The picture the academy had treated as an assault on its values — the thing the critics called ugly and dangerous — was given, for free, by the dead painter's sister, into the permanent keeping of the country whose taste it had outraged. The outrage became the heirloom.
      </p>

      <SectionHeader accent={accent} label="Louvre to Orsay" title="The wall it hangs on now" />
      <p style={proseStyle}>
        For a long time the Burial hung in the <strong>Louvre</strong>, the great Paris museum, taking its place at last among the very history paintings it had once mocked. Then, in <strong>1986</strong>, the <strong>Musée d'Orsay</strong> (the Paris museum dedicated to nineteenth-century art, installed in a converted former railway station on the Left Bank) opened, and the Louvre's nineteenth-century collection moved across the river to fill it. The Burial went with it.
      </p>
      <p style={proseStyle}>
        It is there now, in the Musée d'Orsay, and you can stand at the back of that country funeral any day the museum is open. The canvas that once needed defending hangs as a fixed point of the national collection, a thing schoolchildren are walked past as obviously important — which is the strangest fate of all for a painting whose entire scandal was that it refused to be obviously important.
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
