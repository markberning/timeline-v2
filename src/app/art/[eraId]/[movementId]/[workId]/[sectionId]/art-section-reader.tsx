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

// ─────────────────────────────────────────────────────────────
// The Angelus (Jean-François Millet, 1857–59) — the five chapters
// Author draft for the art-content pipeline. Match the BURIAL JSX shape exactly:
// helpers SectionHeader / DropCap, proseStyle / italicStyle, <strong>/<em>,
// <article style={{ padding: '18px 18px 40px' }}>, `first` on the opener.
// NO inline figures (follow Burial). HTML entities for all quotes/apostrophes.
// Section ids: bell · looking · reception · meaning · afterlife.
// ─────────────────────────────────────────────────────────────

function AnBell({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The evening bell" title="The sound that stops the work" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        omewhere off in the distance, too far to see clearly, a church bell starts to ring. It is the end of the working day. Two people standing in a half-dug potato field hear it, stop what they are doing, drop their heads, and pray. That is the entire event. Nobody dies, nobody marries, no army marches. Two tired field-workers pause for the length of a short prayer in the failing light — and Jean-François Millet (1814–1875), the painter the Realism overview one level up in this app calls the quiet half of the movement, decided that this nothing of a moment was worth a painting that would end up one of the most famous images on Earth.
      </p>
      <p style={proseStyle}>
        To feel why, you first have to know what that bell is for, because the prayer it calls is the whole hidden engine of the picture.
      </p>

      <SectionHeader accent={accent} label="What the Angelus is" title="A prayer rung from the steeple, three times a day" />
      <p style={proseStyle}>
        The painting is named after the prayer, and the prayer is called the <strong>Angelus</strong> (AN-juh-luss). It is an old Catholic devotion — a short, fixed prayer recalling the moment in the Christian story when the angel Gabriel told Mary she would bear Christ (the <strong>Annunciation</strong>). It takes its name from its opening Latin words, <em>Angelus Domini</em> (&ldquo;the angel of the Lord&rdquo;). The crucial thing for the painting is <em>when</em> it is said: traditionally three times a day — at dawn, at noon, and in the evening — each time announced across the countryside by the ringing of the church bell. When the <strong>Angelus bell</strong> sounded, the faithful were meant to stop whatever they were doing, wherever they were, and pray.
      </p>
      <p style={proseStyle}>
        So the bell is a kind of public clock with a religious face. In a world before wristwatches and factory whistles, the steeple told a whole village what time it was and, three times a day, told it to pause. Picture a school bell that, instead of moving you to the next class, simply freezes everyone in place for a minute of quiet — that is roughly the social machine Millet is painting. The two figures are not in a church. They are in the middle of a field at the far edge of the parish, and the bell has reached out across the open ground and stopped them anyway. The painting is set at the <em>evening</em> Angelus, the last one of the day, which is why the light is going and the work is being packed up.
      </p>

      <SectionHeader accent={accent} label="The seed of the picture" title="A grandmother, a field, and a cap in hand" />
      <p style={proseStyle}>
        Where did the idea come from? Millet told us himself, in one of the rare cases where we have the artist&rsquo;s own account rather than a critic&rsquo;s guess. By his own recollection, the painting grew straight out of a childhood memory. &ldquo;<strong>The idea for The Angelus came to me because I remembered that my grandmother, hearing the church bell ringing while we were working in the fields, always made us stop work to say the Angelus prayer for the poor departed, very religiously and with cap in hand.</strong>&rdquo;
      </p>
      <p style={proseStyle}>
        Hold onto two details in that sentence, because they are both in the paint. The first is &ldquo;<em>with cap in hand</em>&rdquo; — and sure enough, the man in the painting has taken his hat off and is holding it at his waist, exactly as Millet&rsquo;s grandmother insisted. The second is &ldquo;<em>for the poor departed</em>&rdquo; — this was not, in Millet&rsquo;s memory, a sunny prayer of thanks but a prayer for the dead, said in the cooling evening. That is a darker, plainer thing than the gushing piety the picture would later be saddled with, and it matters for the meaning chapter. The Angelus, to the man who painted it, was a remembered family habit out in the dirt, not a stained-glass window.
      </p>

      <SectionHeader accent={accent} label="Millet's world" title="The peasant painter of Barbizon" />
      <p style={proseStyle}>
        This was the one subject Millet painted his whole life: peasants — the rural poor who worked the land — taken completely seriously. He came by it honestly. He was born in 1814 at <strong>Gruchy</strong>, a tiny farming hamlet in Normandy in the north of France, into a real working farm family. He trained as a painter and, in 1849, settled in <strong>Barbizon</strong> — a village on the edge of the Forest of Fontainebleau, about thirty miles southeast of Paris, that gave its name to a whole loose group of landscape painters (the <strong>Barbizon School</strong>) who left the studio to work close to real countryside. Out there Millet painted the people he had grown up among: sowers, gleaners, shepherds, reapers — labor, plain and unadorned.
      </p>
      <p style={proseStyle}>
        If you have read the other Millet works in this chain, you already know the company The Angelus keeps. There is <strong>The Sower</strong> (1850) — a single peasant striding downhill flinging seed, painted so large and dark he reads almost as a threat. And there is <strong>The Gleaners</strong> (1857) — three of the poorest women bent double over a stripped field, gathering the few grains the harvest left behind. The Angelus is their evening counterpart: where the Sower is all violent forward motion and the Gleaners is all aching, bent-over labor, the Angelus is the moment the labor <em>stops</em>. Same world, same poor, same dignity insisted on — but here, stillness. The other two pictures are work; this one is the held breath in the middle of work.
      </p>
      <p style={proseStyle}>
        That is the strange ambition of the thing. Millet took the least eventful instant in a hard day — a pause for a prayer no one would have thought to record — and built a picture around it. The next chapter is what that pause looks like when you actually stand in front of it and slow down.
      </p>
    </article>
  )
}

function AnLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Smaller than you think, and mostly sky" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        irst, a surprise about the size. For a painting this famous you might expect a wall-filler, the way Courbet&rsquo;s <em>Burial at Ornans</em> in this same chain is literally ten feet tall. The Angelus is the opposite. It is <strong>tiny</strong> — about <strong>1 foot 10 inches tall and 2 feet 2 inches wide</strong> (55.5 by 66 centimeters), no bigger than a serving tray you could carry under one arm. Almost every reproduction you have ever seen of it — and you have seen many, even if you did not know their name — is printed larger than the original. The whole monumental feeling of the picture is achieved on a surface the size of a place setting. Hold that against the Sower and the Gleaners, both of which use real scale to make their peasants loom; here Millet makes two small figures feel enormous on a small canvas, purely by composition.
      </p>
      <p style={proseStyle}>
        Now look, and notice what most of the painting actually is: <strong>sky</strong>. A vast, pale, dusk-flushed expanse of evening sky fills roughly the top two-thirds of the canvas, with a faint warm flush of the set sun at the upper left and a few birds high up. The two human beings are crushed down into a thin band of dark, turned earth along the bottom. That ratio is the first decision Millet made and the most important one. He gave the people barely a third of the picture and handed the rest to empty air. The effect is exactly how small a person feels standing alone in an open field as the light goes — the sky just keeps going, indifferent, and you are a speck under it. Two-thirds sky pressing on one-third earth is not decoration. It is the whole mood, built into the proportions.
      </p>

      <SectionHeader accent={accent} label="The man" title="Hat in his hands, stopped mid-job" />
      <p style={proseStyle}>
        Come down to the figures. On the <strong>left</strong> stands the man. His head is dropped, his shoulders slightly rounded, and — the detail to find first — his <strong>hat is off, held in both hands down at his waist</strong>. This is the &ldquo;cap in hand&rdquo; from Millet&rsquo;s grandmother, and it is the painting&rsquo;s quietest, most eloquent gesture. He has not knelt, not folded into some grand devotional pose; he has simply stopped where he was, bared his head, and let his hands hang. His face is barely there in the dusk — a smudge of shadow under his hair — and that is deliberate. Millet does not want you to read a particular man&rsquo;s particular piety. He wants the <em>act of stopping</em> itself, which is why the man is almost a silhouette: anyone, every laborer, caught in the habit of the prayer.
      </p>

      <SectionHeader accent={accent} label="The woman" title="Hands clasped, head bowed lower" />
      <p style={proseStyle}>
        Across the field from him, on the <strong>right</strong>, stands the woman, facing him. Her head is bent even lower than his, and her <strong>hands are pressed together at her chest</strong> in the plainest gesture of prayer there is — the one a child draws when asked to draw someone praying. She wears a white cap, a dark dress, a worn apron over a reddish bodice. The two of them form a matched pair: both stilled, both bowed, both faceless, both poor. And look at the gap between them — a small stretch of empty, dug field separating the man on the left from the woman on the right. That little moat of silence is doing real work. They are together in the prayer but not touching, each sunk into a private quiet, and the gap between them is where the whole hush of the painting pools.
      </p>

      <SectionHeader accent={accent} label="The tools" title="The basket, the fork, the barrow — work, paused" />
      <p style={proseStyle}>
        Now look at the ground, because Millet has scattered the evidence of exactly what was happening one second before the bell. Between the two figures, set down on the turned earth at their feet, sits a low woven <strong>basket of potatoes</strong> — the day&rsquo;s dug crop. (Remember that basket; in the afterlife chapter it becomes the single most argued-over object in the painting.) Down at the lower left, jammed upright in the broken soil, stands a <strong>digging fork</strong>, left exactly where the man stopped using it. And off to the right, half in shadow behind the woman, sit a <strong>wheelbarrow and sacks</strong> already loaded with the harvest.
      </p>
      <p style={proseStyle}>
        Take those three things together — fork, basket, barrow — and they tell you the whole story with no words: <em>work was happening here a heartbeat ago, and will start again the heartbeat the prayer ends.</em> The tools are dropped, not packed. The prayer is an interruption, not a conclusion. This is the same trick Millet plays in the Sower (the seed still in the air) and the Gleaners (the day&rsquo;s meagre handful in their fists): he freezes a moment of real labor so precisely that you can feel time about to start moving again.
      </p>

      <SectionHeader accent={accent} label="The church" title="The speck on the horizon that explains everything" />
      <p style={proseStyle}>
        Finally, do the one thing the painting rewards most: look hard at the far, flat horizon, slightly right of center, behind and between the two figures. Almost lost in the dusk haze, no taller than a pin, is a <strong>tiny church spire</strong>. It is easy to miss entirely, and missing it means missing the cause of the whole scene — because that distant steeple is where the bell is ringing from. The sound has crossed all that open ground to reach two people at the far edge of the parish and stop them where they stand. By most accounts Millet added that little tower when he reworked the canvas, and you can see why he bothered: without it, this is two tired people standing oddly still in a potato field. With it, the painting suddenly has a reason — a cause out on the edge of the world, pulling a thread of devotion all the way back to the foreground. One pin-sized detail turns a field into a prayer.
      </p>
      <p style={proseStyle}>
        Step back and take it whole. Two small, dark, bowed figures; their dropped tools; a distant steeple; and above them an enormous evening sky that swallows two-thirds of the picture. Nothing is happening, and everything is. That is the looking. The next three chapters are about what people <em>made</em> of it — which turned out to be far stranger than anything in the paint.
      </p>
    </article>
  )
}

function AnReception({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="A quiet start" title="A job for a Bostonian who never showed up" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he most famous things often begin as the least promising, and The Angelus begins as a commission that fell apart. It started life not as a great statement but as a job. A wealthy Boston art collector named <strong>Thomas Gold Appleton</strong> commissioned Millet to paint a peasant scene, and the painting&rsquo;s first title had nothing of prayer in it at all. It was called <strong>&ldquo;Prayer for the Potato Crop&rdquo;</strong> (in French, a prayer for the potato harvest), and some accounts suggest Appleton, with the recent and catastrophic <strong>Irish potato famine</strong> fresh in mind, wanted exactly that — a scene of poor people and a failing root crop. The painting&rsquo;s whole origin, in other words, is potatoes and want, not piety.
      </p>
      <p style={proseStyle}>
        And then Appleton simply never came for it. The deal fell through; the Bostonian declined to take the picture. Millet was left holding a finished-ish canvas with no buyer — a very ordinary problem for a chronically broke painter, which Millet, supporting a large family on the edge of poverty out at Barbizon, certainly was.
      </p>

      <SectionHeader accent={accent} label="The rework" title="Adding the steeple, changing the name" />
      <p style={proseStyle}>
        So Millet did what a working painter does with an unsold canvas: he reworked it for the open market. By most accounts this is the moment the small <strong>church tower</strong> went onto the horizon — the pin-sized steeple from the looking chapter — and the painting got its new, resonant name: <em>The Angelus</em>. The change is small in paint and enormous in meaning. &ldquo;Prayer for the Potato Crop&rdquo; is about hunger and a harvest; <em>The Angelus</em> is about the bell, the prayer, the devotion. The same two figures, the same dropped tools, but reframed — from a scene of rural want into a scene of rural faith. It is worth being honest that a commercial calculation (an unsellable picture made sellable) sits right at the center of this most beloved of religious images. The steeple that &ldquo;turns a field into a prayer&rdquo; also turned a dead commission into a saleable painting.
      </p>
      <p style={proseStyle}>
        None of which makes the painting cynical. Millet had carried the grandmother memory for years; the prayer was real to him. But the romantic idea that great art descends fully formed from pure inspiration takes a useful dent here. The Angelus is what it is partly because a Boston customer flaked and a broke painter needed to eat — and that double origin, hunger renamed as faith, is stitched into the picture more deeply than its admirers ever wanted to admit. The potatoes never left; Millet just stopped putting them in the title.
      </p>

      <SectionHeader accent={accent} label="A slow fame" title="Not a Salon bomb — a long, quiet climb" />
      <p style={proseStyle}>
        Here is where The Angelus parts ways with its siblings in this chain. The big Realist pictures tend to have a single explosive public moment — Courbet&rsquo;s <em>Burial</em> detonating in the Salon (the official State exhibition that made or broke a French career, which the movement overview describes in full); Millet&rsquo;s own <em>Sower</em> and <em>Gleaners</em> frightening a Paris still raw from the revolution of 1848, when the poor briefly toppled a king. The Angelus had no such bomb. It did not arrive as a scandal. Its fame came the slow way, and then, decades later, all at once.
      </p>
      <p style={proseStyle}>
        For a while it was simply a small Millet among other small Millets, changing hands among private collectors. But across the 1860s and especially after Millet&rsquo;s death in 1875, his reputation began a steep climb. A taste for his grave, dignified peasants spread — first in France, and powerfully in the United States and Britain, where Millet became something close to a cult. As demand rose, the price of The Angelus rose with it, passing from owner to owner at numbers that would have stunned the painter who first could not find anyone to buy it. The canvas was quietly becoming valuable.
      </p>
      <p style={proseStyle}>
        It is worth pausing on how unusual that trajectory is. Most pictures are most valuable the day a famous artist signs them and drift slowly into obscurity afterward; The Angelus did the reverse, gaining value and fame for decades after its maker was dead and could profit from none of it. Part of that was a genuine swing of taste back toward Millet&rsquo;s grave peasants, and part was the new machinery of fame: cheap reproduction was beginning to put copies of popular pictures into ordinary homes, and a much-reproduced image becomes a famous image, and a famous image becomes an expensive one.
      </p>
      <p style={proseStyle}>
        That slow climb is the runway for everything in the afterlife chapter. A painting that no Boston collector wanted, that a broke man renamed to sell, was turning into a national treasure — and the moment that fact became undeniable, in the summer of 1889, would be one of the loudest art-world spectacles of the century. But the painting also acquired, in those same years, a <em>meaning</em> the public attached to it: warm, pious, sentimental, a little gauzy. Whether that is what Millet painted is the next chapter&rsquo;s fight. And the deepest irony sits underneath the whole climb: The Angelus was being lifted by exactly the modern, industrial forces it seems, on its surface, to know nothing about.
      </p>
    </article>
  )
}

function AnMeaning({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="What it means" title="The most sentimental painting in the world?" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or a long stretch of its life, The Angelus had a reputation problem of an unusual kind: it was too loved. By the late nineteenth century it had become the very image of cozy, comforting, lump-in-the-throat religious feeling — humble folk, golden light, heads bowed, all is well with God and the soil. It hung, in cheap reproduction, in more parlors and schoolrooms and chapels than almost any picture in the world (the afterlife chapter gets to the staggering numbers). And when an image becomes that universally adored, sophisticated people start to find it embarrassing — the way a song everyone&rsquo;s grandmother loves gets dismissed as schmaltz. For decades The Angelus was treated by serious critics as a piece of beautiful, slightly cloying sentiment: the painting equivalent of a greeting card.
      </p>
      <p style={proseStyle}>
        The question worth sitting with is whether that is fair — whether it is actually what Millet put on the canvas, or a warm coat the public draped over it later.
      </p>

      <SectionHeader accent={accent} label="What Millet said it was" title="A memory, and a prayer for the dead" />
      <p style={proseStyle}>
        Go back to Millet&rsquo;s own account, the one from the first chapter. He did not describe a glowing devotional uplift. He described a <em>memory</em>: his grandmother making the children stop work in the fields to say the Angelus — and crucially, to say it &ldquo;<em>for the poor departed</em>.&rdquo; That is a prayer <em>for the dead</em>, said in the cooling evening at the end of a working day. There is grief folded into it, and tiredness, and the long habit of the poor who pray because that is what their grandmothers made them do, not because the light is pretty. Read that way, the painting is far closer to its grim siblings than to a greeting card. It belongs with the bent backs of the Gleaners and the dark, looming Sower: the rural poor, taken seriously, in the actual texture of their hard days — and here, in the texture of their faith, which was as much a fact of that life as the potatoes.
      </p>
      <p style={proseStyle}>
        Notice, too, what the painting refuses to do. There is no shaft of divine light breaking through to bless the couple, no glimpse of heaven, no angel. The religion is entirely <em>in the people</em> — in a bared head and two clasped hands — and not at all in the sky, which, for all its enormousness, stays empty. A sentimental religious painter would have opened that sky. Millet left it blank. The faith here is a human habit performed in the dirt, not a miracle delivered from above.
      </p>
      <p style={proseStyle}>
        The sweetness, in other words, was largely added by the audience. Strip the warm associations off and look at the bare facts of the scene: two exhausted people, at the end of a day of digging roots out of cold ground, stopping for a prayer for the dead under a sky going dark. That is not a comforting picture; it is a sober one. The cult of cheap reproductions sanded it down — brightened it in the mind&rsquo;s eye, fitted it for the parlor wall, made it the painting your great-grandmother found <em>soothing</em>. The original is closer to the bone than that. It is a picture about endurance: the small fixed rituals that get the poor through, performed without complaint and without reward, in the same flat fields where they will be buried.
      </p>

      <SectionHeader accent={accent} label="Piety or poverty" title="The argument that never settles" />
      <p style={proseStyle}>
        So which is it — a painting about <em>God</em> or a painting about <em>the poor</em>? This is the fight that has trailed The Angelus its whole life, and it is the same fight that trailed the Sower and the Gleaners, where the propertied classes of a nervous Paris kept reading a political menace into pictures of field-workers. Some have always seen The Angelus as pure piety: faith sustaining the humble. Others see it the other way around — that the real subject is the crushing labor and the want, and the prayer is the small dignity these people are allowed at the end of a day of digging up roots to survive. The empty basket of potatoes, the dropped fork, the bent exhausted bodies: this is not a comfortable life being blessed. It is a hard one, briefly stilled.
      </p>
      <p style={proseStyle}>
        Millet himself was cagey about politics — like in the Sower&rsquo;s story, he kept insisting he was no socialist, only a man painting the truth of the soil. And that is probably the most honest reading: the painting is not <em>either</em> a sermon <em>or</em> a protest. It is both faith and poverty at once, because in the world Millet grew up in they were not separable. The poor prayed; the prayer was part of being poor; the bell stopped the work and then the work resumed. The sentimental version that conquered the world&rsquo;s parlors took the faith and threw away the poverty. The painting Millet actually made kept both, which is exactly why it is better than its reputation as a tear-jerker — and exactly why, in the next chapter, one very strange Spaniard would come along and insist the whole thing was secretly about a dead child.
      </p>
    </article>
  )
}

function AnAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1 July 1889" title="The bidding war that gripped a nation" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he small painting nobody had wanted in 1857 became, on a single day in 1889, the object of one of the loudest art spectacles of the century. By then it belonged to a French copper magnate, <strong>Eugène Secrétan</strong>, whose collection went up for auction on <strong>1 July 1889</strong> at the Galerie Sedelmeyer in Paris. The timing was no accident: the sale was set to coincide with the <strong>Exposition Universelle of 1889</strong> — the great Paris world&rsquo;s fair that unveiled the Eiffel Tower — which had filled the city with rich foreigners, the Americans especially.
      </p>
      <p style={proseStyle}>
        What followed was a national drama. On one side stood <strong>Antonin Proust</strong>, a former French arts minister, fighting to keep The Angelus in France and get it into the <strong>Louvre</strong> (the great Paris museum). On the other stood the <strong>American Art Association</strong> of New York, a powerful dealership, bidding through its man <strong>James F. Sutton</strong> to carry the picture off to America. The bidding climbed and climbed, past anything a Millet had ever fetched, all the way to a stunning <strong>553,000 francs</strong> — a fortune, for a painting the size of a tray. France appeared to win it. And then the most French thing imaginable happened: the government refused to actually pay. With no public money forthcoming and unable to cover the sum himself, Proust had to let it go. The painting passed to the under-bidding Americans, who packed it up and shipped it across the Atlantic.
      </p>

      <SectionHeader accent={accent} label="To America and back" title="A touring marvel, then a tycoon buys it home" />
      <p style={proseStyle}>
        In the United States the American Art Association did what you do with a half-million-franc trophy: they put it on show, and crowds paid to file past a single small canvas as if it were a visiting celebrity. For a brief season in 1889–1890, the most reproduced devotional image in the Western world was an American attraction.
      </p>
      <p style={proseStyle}>
        It did not stay. In 1890 a French buyer brought it home — <strong>Alfred Chauchard</strong>, a Paris department-store magnate who had helped found the <strong>Grands Magasins du Louvre</strong> (a giant Paris department store, no relation to the museum despite the shared name). Chauchard bought The Angelus back for France for an even more eye-watering figure — about <strong>800,000 francs</strong> (some sources say 750,000) — roughly half again what the auction had reached the year before. The painting that France could not find the money to buy at auction was now home, in private hands, at an even higher price. There is a lasting footnote here: the gulf between these dizzying resale prices and the near-poverty of Millet&rsquo;s surviving family was one of the scandals that, years later, helped push France toward the <strong>droit de suite</strong> — the &ldquo;resale right,&rdquo; a law giving artists or their heirs a cut when their work is resold for a fortune they never saw.
      </p>
      <p style={proseStyle}>
        Chauchard, who died in 1909, left his collection to the State, and on <strong>15 January 1910</strong> The Angelus was formally accepted into the <strong>Louvre</strong> — given, free, to the nation that had failed to buy it across the table twenty-one years before. In <strong>1986</strong>, when the <strong>Musée d&rsquo;Orsay</strong> (the Paris museum of nineteenth-century art, installed in a converted railway station) opened, the Louvre&rsquo;s nineteenth-century holdings crossed the river to fill it, and The Angelus went too. It hangs there now, a small, dark, quiet canvas in a busy gallery — joined, just down the wall, by the Gleaners, which had taken almost exactly the same road from despised to priceless to bequeathed.
      </p>

      <SectionHeader accent={accent} label="Dalí's obsession" title="The basket that might be a coffin" />
      <p style={proseStyle}>
        And then there is the strangest chapter of all, which belongs to <strong>Salvador Dalí</strong> (1904–1989, the Spanish Surrealist — the melting-clocks painter). Dalí was haunted by The Angelus his entire life. He claimed it had unsettled him since childhood, when a reproduction hung on the wall of his school; he said the bowed woman looked to him less like a praying wife than like a <strong>praying mantis</strong> — the insect that devours its mate after pairing — coiled and predatory over the stilled man. Where the world saw cozy piety, Dalí saw dread, sex, and death, and he could not let it go: he built an entire personal theory around it and made several paintings warping the image, among them <em>The Architectonic Angelus of Millet</em> and <em>Gala and the Angelus of Millet…</em>, both in 1933.
      </p>
      <p style={proseStyle}>
        His central, sensational claim was about that basket of potatoes between the two figures. Dalí insisted it was no basket at all but a small <strong>child&rsquo;s coffin</strong> — that the couple are not pausing over a harvest but mourning a dead, perhaps stillborn, child, the whole picture a scene of buried grief disguised as rural calm.
      </p>
      <p style={proseStyle}>
        Here the story takes a genuinely odd turn, and it has to be told carefully. At some point the <strong>Louvre</strong> examined the painting with imaging tools — an <strong>X-ray</strong> (which sees through the top layers of paint to what lies beneath, like a medical X-ray seeing through skin) and infrared. The examination reportedly revealed that beneath or in place of the present basket there was an earlier, painted-over shape — described as a small <em>&ldquo;oblong geometrical&rdquo;</em>, more <em>box-like</em> form. Dalí seized on this as proof: there it was, he said, the hidden coffin, painted over to disguise the grief.
      </p>
      <p style={proseStyle}>
        But proof of <em>what</em>, exactly? That is where it has to stop. That an earlier, more box-like shape may lurk under the basket is one thing; that the shape <em>is</em> a coffin, and that the painting <em>is</em> about a dead child, is a leap that the art-history world has never accepted. An overpainted form could be a coffin — or it could be a basket Millet simply drew differently the first time, or a compositional element he changed his mind about, which painters do constantly. So take the whole episode as exactly what it is: <strong>Dalí&rsquo;s reading</strong>, vivid and unforgettable and possibly entirely wrong, attached to <strong>a real but contested technical finding</strong>. The romance of the secret coffin is a piece of legend, not a settled fact — but it is a measure of the painting&rsquo;s grip that the greatest Surrealist of the century spent decades unable to look away from two peasants praying in a field.
      </p>

      <SectionHeader accent={accent} label="The most reproduced image of its age" title="Why you already knew this painting" />
      <p style={proseStyle}>
        Strip away the auction drama and the coffin theory and you are left with the plainest fact about The Angelus, which is also the most extraordinary: more people have seen it than almost any painting ever made. It became <strong>one of the most widely reproduced images of the nineteenth century</strong>. Cheap prints — made affordable by the same Industrial Revolution that was emptying the countryside the picture mourns — hung in tens of thousands of French homes, schools, and churches. It spread onto postcards, devotional cards, plates, coffee cups. It was the kind of image that did not stay in museums; it went into ordinary life and lived on the wall above the kitchen table. The young Dutch painter <strong>Vincent van Gogh</strong>, who treated Millet as a personal hero, copied it like a devotee. There is a real chance you have seen The Angelus somewhere — a relative&rsquo;s hallway, an old print, a parody — without ever learning what it was called.
      </p>
      <p style={proseStyle}>
        That is the final irony of this small, dark canvas. Millet took the least eventful moment in a poor person&rsquo;s day — a pause for a prayer, heads bowed, tools dropped, the bell fading from a steeple too far to see — and painted it so truly that the moment escaped the frame entirely. It outgrew its commission, its title, its painter, its country, and even its meaning, until two anonymous peasants stopped forever in a potato field became something the whole world recognized. Not bad for a job a Boston collector turned down.
      </p>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────
// Gargantua (Daumier, 1831) — the five chapters
// Drop these into art-section-reader.tsx alongside BuTown…BuAfterlife.
// Section ids: king · looking · trial · meaning · afterlife
// HTML entities used for all quotes/apostrophes in JSX text.
// ─────────────────────────────────────────────────────────────

function GaKing({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1830–31" title="The king who came in a top hat" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n July 1830, for three days, Paris belonged to the barricades. Crowds had thrown out the last hard-line Bourbon king, Charles X, who had been trying to wind the clock back to before the great Revolution of 1789 (the upheaval that toppled the absolute monarchy and beheaded Louis XVI). And then, with the old man gone and the throne empty, the men who actually ran France — the bankers, the deputies, the propertied middle class — did something clever. Instead of declaring a republic, they handed the crown to the dead king&rsquo;s liberal cousin, <strong>Louis-Philippe</strong> of the house of Orléans, and rebranded the whole institution. He would not be &ldquo;King of France&rdquo; — too lordly. He would be <strong>King of the French</strong>, the <strong>roi citoyen</strong>, the &ldquo;<strong>Citizen King</strong>&rdquo;: a modern, modest, businesslike monarch who walked the boulevards in a frock coat, carried an umbrella, and shook hands. The regime he headed (1830–1848) is called the <strong>July Monarchy</strong>, after the month it was born in. (The full politics of 1830 lives in the Realism overview one level up; here we need only the shape of it.)
      </p>
      <p style={proseStyle}>
        The marketing was that France finally had a king for everybody. The reality was that France had a king for the people who owned things. The vote was tied to wealth, so a tiny sliver of rich men chose the parliament; the government governed for banks and investors; and the workers and the poor who had actually fought on the July barricades got the bill and none of the bargain. Within a year the hope had soured into a sour, specific feeling that the whole revolution had been pocketed by the comfortable. That feeling is the fuel this entire story runs on. Somebody just had to draw it.
      </p>

      <SectionHeader accent={accent} label="Philipon&rsquo;s war" title="A weekly paper that printed insults" />
      <p style={proseStyle}>
        Enter <strong>Charles Philipon</strong> (1800–1862), the most dangerous man in France with a pencil — not because he drew best, but because he saw, before almost anyone, that a <em>picture</em> could do political damage a thousand articles could not. In 1831 Philipon founded a satirical weekly called <strong>La Caricature</strong> — a journal whose entire purpose was to mock the powerful in print (the word &ldquo;caricature&rdquo; means a drawing that exaggerates someone&rsquo;s features or character to ridicule them). He ran it as open war on the July Monarchy. He gathered a stable of young artists, pointed them at the government, and dared the censors to do something about it.
      </p>
      <p style={proseStyle}>
        Philipon&rsquo;s own masterstroke was a doodle. Hauled into court late in 1831 for insulting the king, he is famously said to have defended himself by sketching, right there for the jury, the king&rsquo;s round face <em>metamorphosing in four steps into a pear</em> — proving, he argued, that you could not ban a resemblance, because anything could be made to look like the king. The pear stuck. <strong>La poire</strong> — &ldquo;the pear,&rdquo; also French slang for &ldquo;fathead&rdquo; or &ldquo;simpleton&rdquo; — became the inescapable mocking shorthand for Louis-Philippe, scrawled on walls all over Paris. And Philipon was no mere bystander to the danger he aimed his artists at: he too was repeatedly prosecuted, convicted, and jailed for his attacks on the king — Daumier was not the only one who paid for this war in prison. (The courtroom pear-drawing is the famous traditional account of how the gag was born; treat the live-in-court details as received legend, not a verbatim transcript. That the pear became the regime&rsquo;s tormenting emblem is not in doubt.) Hold the pear in your mind — you are about to meet it on a giant&rsquo;s shoulders.
      </p>

      <SectionHeader accent={accent} label="A new kind of weapon" title="Why the stone mattered" />
      <p style={proseStyle}>
        What made Philipon&rsquo;s war possible was a fairly new printing trick called <strong>lithography</strong> (lith-OG-ruh-fee). Here is the whole thing in one breath: an artist draws directly onto a flat slab of limestone with a greasy crayon; the stone is then wetted and inked, and because grease and water repel each other, the ink sticks only where the crayon went; press paper to the stone and you have a print — and you can pull it again and again. The point that matters politically is the <em>directness</em> and the <em>cheapness</em>. A lithograph carries the artist&rsquo;s own hand, every line exactly as he drew it, and it can be churned out by the hundred for pennies. For the first time, a single furious image could be in shop windows across Paris by the weekend, affordable to people who could barely read. Philipon had a printing press for outrage. He needed a giant.
      </p>
      <p style={proseStyle}>
        The young man who supplied it was <strong>Honoré Daumier</strong> (1808–1879), a stocky, good-humored Marseillais then in his early twenties and not yet famous for anything. Over his life Daumier would draw something like <strong>four thousand lithographs</strong> — he is the great visual satirist of the whole century, and decades later, with a brush instead of a crayon, he would become a serious painter of the city&rsquo;s poor (the Realism overview tells that long arc; you will meet the painter again in Chapter 5). But all of that is ahead of him. In December 1831 he was a hired hand at Philipon&rsquo;s shop, and he was about to draw the single most reckless picture of his life — a cartoon so direct it would put him in prison. The next chapter is the drawing itself.
      </p>
    </article>
  )
}

function GaLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The print" title="One machine, drawn as a fat man" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>R</DropCap>
        emember what you are looking at: not a painting but a <strong>lithograph</strong>, a black-and-white printed sheet, wider than it is tall — a <strong>landscape</strong> image about <strong>a foot wide and eight and a half inches high</strong> (roughly 30 centimeters across by 21 high) — small enough to hold, cheap enough to sell on the street, drawn entirely in greasy crayon on stone. Judge it as a print, not a picture: no color to seduce you, no oil to admire, just line and shadow doing argument. And the argument is brutally simple. Daumier has drawn the whole economy of the July Monarchy as a single picture of a giant being fed. Once you see how the parts connect, you cannot un-see it.
      </p>

      <SectionHeader accent={accent} label="The giant" title="The king as Gargantua" />
      <p style={proseStyle}>
        Up at the left sits the giant, and the giant is the king. Daumier has drawn <strong>Louis-Philippe as Gargantua</strong> — the enormous, insatiable glutton of <strong>François Rabelais&rsquo;s</strong> sixteenth-century comic satire (Rabelais&rsquo;s 1534 giant is the figure who gave English the word <em>gargantuan</em>; in 1831 every reader knew the name as a byword for monstrous, bottomless appetite). He is a mountain of a man slumped in a low armchair on a platform, legs splayed, his belly a vast pale dome, and he is doing the only thing this version of him ever does: <strong>eating</strong>. His mouth hangs open to receive. And crowning the whole bloated body — the detail that named names — is <strong>the pear</strong>: that round-cheeked, top-tufted head from Philipon&rsquo;s courtroom gag, so the dimmest viewer in Paris could not miss who the giant was. The biggest thing in the picture is the king, and he is pure mouth.
      </p>

      <SectionHeader accent={accent} label="The plank" title="The ramp into the mouth" />
      <p style={proseStyle}>
        Now follow the one bold diagonal that organizes everything: a long <strong>plank, a steep ramp or gangway</strong>, runs from the ground at the lower right all the way up to the king&rsquo;s open mouth. This is the spine of the cartoon. Cover it with your thumb and you have a fat man in a chair; uncover it and you have a feeding machine. The plank turns the giant from a person into a <em>system</em> — a thing with an intake. Everything the picture cares about travels up this board and vanishes into him. Daumier did the entire politics of the regime with a single drawn line propped against a chin.
      </p>

      <SectionHeader accent={accent} label="The bearers" title="Who carries the food" />
      <p style={proseStyle}>
        Look at who is on the plank. Tiny, bent figures — <strong>laborers hauling baskets and sacks of coins</strong> — trudge up the ramp toward the mouth, and at the bottom of it one of them doubles over a great hamper, loading the king&rsquo;s next mouthful. The size gap is the whole joke and the whole accusation: the king is a giant, the people feeding him are insects, and the food is the public&rsquo;s money. These are the taxpayers, drawn as ants carrying their own substance up a ramp into a creature that will never, ever be full. Their coins go up. Watch what does <em>not</em> come back down to them.
      </p>

      <SectionHeader accent={accent} label="The crowd" title="Where the money comes from" />
      <p style={proseStyle}>
        Off to the right, massed and shabby, stands the <strong>crowd of the poor</strong> — the source of all this squeezed wealth. Daumier draws them thin and ragged and many, a worn human reservoir being drained to fill one bottomless belly. The contrast does the moral work without a caption: gorged giant on one side, a whole emptied population on the other, and a plank carrying the difference from them to him. This is what the Citizen King&rsquo;s &ldquo;monarchy for everybody&rdquo; actually looked like, the cartoon says — the everybody pays, and the king eats.
      </p>

      <SectionHeader accent={accent} label="The other end" title="What the giant excretes" />
      <p style={proseStyle}>
        And here is the detail that turned a rude joke into a crime. Look <em>beneath</em> the king, at what comes out the other end of the giant. It is not waste. It is <strong>paper</strong> — a shower of <strong>patents, commissions, ribbons, decorations, official honors</strong> — and a scrum of <strong>well-dressed officials and cronies</strong> is scrambling on the ground to gather them up and carry them off, toward a <strong>government building</strong> at the lower left — widely identified as the <strong>Palais Bourbon</strong>, the seat of the Chamber of Deputies (the lower house of France&rsquo;s parliament). Hold the whole circuit in your head at once, because that is the masterpiece of it: the poor&rsquo;s taxes go <em>up</em> the plank into the king&rsquo;s mouth, and out his backside drop the jobs, medals, and favors — for the rich. Money in from the bottom; rewards out to the top. It is trickle-<em>up</em> economics, drawn with a literalness so crude and so clear that no one could pretend to misread it. Daumier did not write &ldquo;the king devours the nation and feeds his friends.&rdquo; He drew it, digestively, and made the viewer&rsquo;s own eye complete the insult.
      </p>
      <p style={proseStyle}>
        That is the engine of the print: appetite at the top, exhaustion at the bottom, a single plank carrying wealth one way and a rain of honors falling the other. It is filthy, it is funny, and it is an argument about how a whole state distributes its money — all of it sketched in greasy crayon on a stone, in a sheet you could buy for pocket change. Down in the corner, the signature: <strong>h. Daumier</strong>. He had just signed a confession.
      </p>
    </article>
  )
}

function GaTrial({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="December 1831" title="Banned before breakfast" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he print went up in the window of <strong>Gabriel Aubert&rsquo;s</strong> caricature shop — a fashionable little storefront in the <strong>Galerie Véro-Dodat</strong>, one of the glass-roofed shopping arcades of central Paris, and the public face of Philipon&rsquo;s satirical press. And it came down almost as fast. The authorities seized it on appearance. This is a detail worth getting right, because it is often blurred: <em>Gargantua</em> was made for Philipon&rsquo;s world and sold as a separate sheet through Aubert&rsquo;s shop, but it was suppressed so quickly that, by the careful scholarly account, it never actually ran in the pages of <strong>La Caricature</strong> at all. It was strangled in the window. (The journal attribution still persists in some museum catalogues — Yale&rsquo;s impression, for one, is filed as &ldquo;from the journal La Caricature&rdquo; — but the scholarship argues the print was a separately-sold sheet that the seizure kept out of the magazine.) The police did not merely ban the sheet; they ordered the <strong>lithographic stone destroyed</strong> and the remaining <strong>proofs</strong> (printed copies pulled from the stone) confiscated — they went after the means of making more. That is why, today, the cartoon that helped launch modern political art survives in only a handful of impressions. The state very nearly erased it on the spot.
      </p>

      <SectionHeader accent={accent} label="The charge" title="Insulting the king&rsquo;s body" />
      <p style={proseStyle}>
        Three men were dragged into court for the picture: <strong>Daumier</strong> for drawing it, the printer <strong>Hippolyte Delaporte</strong> for printing it, and the publisher <strong>Aubert</strong> for displaying and selling it. The charge, under the press law of November 1830, came in two parts — &ldquo;arousing hatred and contempt of the king&rsquo;s government,&rdquo; and the heavier one, <strong>offending the king&rsquo;s person</strong>. That second charge has an old, ominous name: <strong>lèse-majesté</strong> (lez-mazh-es-TAY), a treason-class crime meaning an injury to the dignity of the sovereign — the legal idea that the monarch&rsquo;s body is sacred and to mock it is to attack the state itself. Which is exactly why the cartoon&rsquo;s digestive humor was so explosive: Daumier had not merely criticized a policy. He had drawn the king&rsquo;s sacred royal body as a fat man eating money and excreting medals. The whole majesty of the throne, rendered as a bowel.
      </p>

      <SectionHeader accent={accent} label="The sentence" title="Six months — eventually" />
      <p style={proseStyle}>
        At the trial in <strong>February 1832</strong>, Daumier was held chiefly responsible and convicted. The sentence: <strong>six months in prison and a five-hundred-franc fine</strong>. But here the story has a twist that the shorthand &ldquo;jailed for a cartoon&rdquo; flattens, and it is worth telling straight, because the truth is sharper than the slogan. The sentence was at first <strong>suspended</strong> — held over his head rather than served. Daumier walked out of court a free man and did the most Daumier thing imaginable: he went straight back to his stone and kept right on savaging the regime. He did not learn the lesson. He doubled down.
      </p>
      <p style={proseStyle}>
        It caught up with him. After a later lithograph needled the government once too often, the suspended term was activated. He was <strong>arrested at his parents&rsquo; apartment in August 1832</strong>, and on <strong>30 August 1832</strong> the doors of <strong>Sainte-Pélagie</strong> — a Paris prison that held debtors and political offenders — closed behind him. He served his six months there and was <strong>released on 14 February 1833</strong>. And here is the detail that tells you everything about the man: in prison, he kept drawing. You cannot censor a hand that refuses to stop. So &ldquo;Daumier went to jail for <em>Gargantua</em>&rdquo; is true — that one print is the crime that put the sentence on the books — but the full version is better: the cartoon earned the sentence, his own incorrigible nerve triggered it, and prison did not slow him down for a day.
      </p>

      <SectionHeader accent={accent} label="The bigger machine" title="Censorship&rsquo;s answer" />
      <p style={proseStyle}>
        Step back and see what the episode really demonstrates: how frightened power was of a cheap picture. A government does not smash a stone and jail an artist over a drawing it finds merely tasteless. It does so over a drawing it finds <em>effective</em> — a thing that puts a true, ugly idea into ten thousand heads faster than any pamphlet. The seizure was a backhanded review. It conceded that <em>Gargantua</em> worked. And the regime kept conceding it: as the satirical press kept up its war, the July Monarchy finally cut to the root and, with the <strong>September Laws of 1835</strong>, simply <em>banned political caricature outright</em>, requiring drawings to be approved before printing. (That blanket ban comes a few years after this case — read it as the war&rsquo;s endgame, not the punishment for this one sheet.) Daumier and Philipon had drawn so dangerously that the state eventually outlawed the entire art form. Few cartoonists in history can claim a clearer compliment.
      </p>
    </article>
  )
}

function GaMeaning({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="What it invented" title="The cartoon as a political act" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        hy give a whole deep-dive to a small banned print, when this app is otherwise full of ten-foot oil paintings? Because <em>Gargantua</em> is one of the founding documents of something we now take completely for granted: the <strong>modern political cartoon</strong>. Open any newspaper, anywhere, and somewhere on the opinion page a politician is drawn fat, or tiny, or as an animal, or as a machine — one savage exaggerated image that lands an argument faster than a column of print. That reflex, that whole genre, has an origin, and this is very near the source of it.
      </p>

      <SectionHeader accent={accent} label="The weapon" title="A fine-art medium turned cheap" />
      <p style={proseStyle}>
        Here is the deeper move, and it is exactly why this print belongs in a story about <strong>Realism</strong> — the nineteenth-century revolt that insisted ordinary, contemporary, unglamorous life was a fit subject for serious art (the Realism overview tells the movement whole). Lithography was a respectable artists&rsquo; technique; serious painters used it for serious prints. Daumier and Philipon took that fine-art medium and aimed it straight at last week&rsquo;s news, on behalf of the people with no other voice. The taxes of the poor, the favors of the rich, the greed of a sitting king — the actual mechanics of who-pays-and-who-eats in <em>this</em> regime, <em>this</em> year — rendered with all the directness of an artist&rsquo;s own hand and sold for pennies in a shop window. That is the Realist instinct before Courbet ever lifted a brush: point real art at the real present, especially the ugly part of it, and especially on the side of the powerless. Courbet would later do it with a village funeral ten feet tall. Daumier did it first, on a stone, with a fat king.
      </p>
      <p style={proseStyle}>
        And the <em>form</em> of the argument is the lasting invention. Daumier did not describe the July Monarchy&rsquo;s corruption; he <strong>diagrammed</strong> it. He found a single visual metaphor — a body that eats money and excretes honors — that compressed a whole political-economic complaint into one glance. That is the cartoonist&rsquo;s essential trick, the thing the genre is <em>made of</em>: take an abstract grievance (the rich rig the system; the powerful feed off the weak) and give it a body, a plank, a basket, a mouth, so the viewer&rsquo;s eye does the accusing. Two hundred years of editorial cartoons — the bloated banker, the puppet politician, the tax-vampire, the trickle-down/trickle-up gag redrawn a thousand ways — are working the exact territory Daumier mapped here.
      </p>
      <p style={proseStyle}>
        It is worth being precise about what was genuinely new, because political mockery itself is ancient — Romans scrawled rude verses about emperors, and English print-shops had savaged kings for a century before Daumier. What lithography changed was the <em>reach</em> and the <em>hand</em>. The old satirical print was an expensive engraving, laboriously cut into a copper plate by a specialist craftsman, sold to people who could afford prints. Daumier&rsquo;s stone carried <em>his own</em> drawing, line for line, and could be sold for a coin to a clerk on his lunch break. So the modern cartoon fuses two older things — the satirist&rsquo;s venom and the daily newspaper&rsquo;s timeliness — into one disposable, reproducible, devastating sheet that is <em>cheap enough to reach the very people the politician governs</em>. That fusion is the thing on the opinion page today, and <em>Gargantua</em> is one of its loudest early proofs of concept.
      </p>

      <SectionHeader accent={accent} label="The other half" title="Why a banned drawing beats a free one" />
      <p style={proseStyle}>
        There is a paradox worth naming. <em>Gargantua</em> barely circulated — the police saw to that. By the brute measure of how many people saw it in 1831, it almost failed. And yet it is the most famous thing Daumier made before he was a painter, and one of the most reproduced cartoons in the world. Why? Because the <strong>act</strong> outlived the <strong>image</strong>. The seizure, the smashed stone, the trial, the prison cell — that whole drama is itself the message, and it is a message about what a drawing can be <em>worth</em>. The state treated a one-franc print as a threat to the throne. In doing so it certified the cartoonist&rsquo;s power forever. Every artist who has ever drawn a leader as a pig or a clown and dared the censor to respond is standing in the spot Daumier marked: the place where a cheap funny picture is taken seriously enough to be dangerous.
      </p>
      <p style={proseStyle}>
        That is the real meaning of this sheet. It is not just a good joke about a greedy king. It is the moment the political cartoon announced itself as a genuine weapon — cheap, fast, true, reproducible, and frightening to power — and it is the moment one young artist proved he would go to prison rather than put the crayon down.
      </p>
    </article>
  )
}

function GaAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The few that survived" title="A banned sheet becomes a treasure" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he police were good at their job. They smashed the stone, swept up the proofs, and very nearly turned <em>Gargantua</em> into a print that had never existed. They did not quite manage it. A small number of impressions slipped through, and those survivors made an unlikely journey: from a banned object the state wanted erased, to a treasured one museums now keep under archival glass. The <strong>Bibliothèque nationale de France</strong> in Paris holds the print, and scattered impressions live in museum print rooms around the world (Yale, San Francisco, and others). Exactly how many survive, nobody can say with confidence — the honest word is &ldquo;<em>very few</em>.&rdquo; A cartoon that almost vanished is now one of the most carefully preserved drawings of its century. The state tried to destroy it; the state&rsquo;s descendants put it in the national library.
      </p>
      <p style={proseStyle}>
        There is a small irony folded into that rarity. A lithograph is, by its whole nature, the <em>opposite</em> of rare — the medium exists precisely to make thousands of identical cheap copies. Daumier chose it because it could flood the city. And censorship turned that flood into a trickle: the one print built to be mass-produced became, by force, nearly unique. So the surviving sheets carry a double meaning. Each is at once an example of the most democratic image-making of its day and a relic of the state&rsquo;s attempt to choke it off — the people&rsquo;s cheap weapon, kept as a precious thing because the powerful tried so hard to erase it. A fittingly Daumier kind of joke for the print to get the last laugh with.
      </p>

      <SectionHeader accent={accent} label="The cartoonist&rsquo;s long war" title="Thousands more stones" />
      <p style={proseStyle}>
        Prison did not reform Daumier; it seasoned him. Out in February 1833, he went back to the press and kept drawing — and when the <strong>September Laws of 1835</strong> finally banned political caricature outright (Chapter 3), he simply changed targets. Forbidden to mock the king, he turned his crayon on <em>everyone else</em>: pompous lawyers, quack doctors, grasping landlords, the whole comedy of the modern bourgeois city. Over a career he produced something on the order of <strong>four thousand lithographs</strong> — an immense, daily, decades-long portrait of nineteenth-century French society, drawn one stone at a time. He is, simply, the greatest caricaturist of the age, and <em>Gargantua</em> is where the legend starts.
      </p>

      <SectionHeader accent={accent} label="Crayon to brush" title="The Realist who became a painter" />
      <p style={proseStyle}>
        But the part of Daumier&rsquo;s story that lands him in <em>this</em> chain of Realist works is what he did away from the press, quietly, for himself: he painted. In his later years Daumier turned to oil, and pointed the same unsentimental eye that had skewered the king at the ordinary poor of the modern city — not to mock them now, but to <em>see</em> them. The masterpiece of that turn is <strong>The Third-Class Carriage</strong> (about 1862–64, now in the Metropolitan Museum in New York), a painting of the cheapest class of a railway car packed with the urban poor: an old woman, a nursing mother, a sleeping boy, tired and dignified and utterly without pity or sentiment. It is the same Realist instinct as <em>Gargantua</em>, grown up and gone gentle — point real art at real contemporary life, especially the part of it nobody else thinks worth painting. (That painting has its own deep-dive in this chain; the man you met here jailed for a cartoon is the man who painted it.)
      </p>
      <p style={proseStyle}>
        So Daumier holds a strange and singular place in <strong>Realism</strong>. Where Courbet is the Realist of the province and Millet the Realist of the field, Daumier is the <strong>Realist of the modern city</strong> — its crowds, its swindlers, its politicians, its third-class poor. And he reached that subject by a road none of the others traveled: through the cheap printed cartoon and through a prison cell. The movement&rsquo;s grand statement is usually told as a ten-foot oil painting hung in the Salon. But part of it began smaller and dirtier and braver than that — as a one-franc lithograph of a king eating his people&rsquo;s money, in a shop window the police shut down by the weekend, drawn by a young man who would rather go to jail than stop.
      </p>
      <p style={proseStyle}>
        That is the throughline, said flat one last time: Daumier took a fine-art print medium, aimed it at a living king on behalf of the powerless, compressed a whole corrupt economy into one image of a giant being fed, and paid for it with six months of his freedom. In doing so he helped invent the political cartoon — and proved, before Realism even had its name, that serious art could be cheap, current, furious, and on the side of the people carrying the baskets up the plank.
      </p>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────
// The Third-Class Carriage (Daumier, c.1862–64) — the five chapters
// Drop into art-section-reader.tsx; register the five functions in
// NARRATIVES.carriage. Matches the BURIAL JSX exactly (SectionHeader,
// DropCap, proseStyle, <strong>/<em>, <article style={{ padding: ... }}>,
// `first` on the opener). No inline figures. HTML entities for quotes.
// Section ids: rail · looking · unfinished · meaning · afterlife.
// ─────────────────────────────────────────────────────────────

function TcRail({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · the railway age" title="A new machine for the poor to sit in" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or most of human history, a poor person travelled the way their grandparents had: on foot, or not at all. Then, in the space of about thirty years, France laced itself with iron. The <strong>railway</strong> — steam engines hauling long strings of carriages along metal tracks — went from a curiosity in the 1830s to the ordinary spine of the country by the 1860s, and suddenly a laborer, a market-woman, a tired mother with a baby could buy a ticket and sit in a moving box with a hundred strangers, going somewhere. It is hard, now, to feel how strange that was. A whole new kind of human experience had been invented: being crammed together with people you will never see again, in transit, going nowhere in particular together. That experience is the subject of this painting.
      </p>
      <p style={proseStyle}>
        And it had a price tier. Railways sold tickets in three grades. <strong>First class</strong> meant an upholstered, enclosed compartment — padding, privacy, comfort. <strong>Second class</strong> was plainer. <strong>Third class</strong> — the title of this picture — was the cheapest seat there was: <strong>hard wooden benches</strong>, the most crowded car, sometimes barely sheltered, the carriage where the poor rode because it was all they could afford. To name a painting <em>The Third-Class Carriage</em> in 1860s France was to point, very specifically, at the bottom of the new system. Everyone knew exactly which seats those were, and who sat in them.
      </p>

      <SectionHeader accent={accent} label="The cartoonist" title="The man the public did NOT know as a painter" />
      <p style={proseStyle}>
        Now the strange part: the man who painted this was, to all of France, not a painter at all. He was a <em>cartoonist</em>. <strong>Honoré Daumier</strong> (1808–1879) earned his living for some forty years drawing for the satirical newspapers — <em>La Caricature</em> and <em>Le Charivari</em> — and he was magnificent at it, turning out more than <strong>four thousand lithographs</strong> over his career. A <strong>lithograph</strong> (the cheap mass-printing method of the day: you draw with a greasy crayon on a flat slab of limestone, then run off hundreds of identical copies) was the engine of the illustrated press, and Daumier was its great talent — the sharpest pen in Paris, skewering politicians, lawyers, landlords, the smug and the powerful, week after week, for decades. If you lived in nineteenth-century France and you knew the name Daumier, you knew it from the newspaper, the way you might know a great editorial cartoonist today.
      </p>
      <p style={proseStyle}>
        That fame came at a cost. As a young man in <strong>1831</strong> he drew his most notorious cartoon, <strong>Gargantua</strong> — the king, Louis-Philippe, as a bloated giant on a throne, swallowing the people&rsquo;s taxes shoveled up a ramp into his mouth and excreting favors to his cronies — and the regime threw him in jail for it (six months, by the standard account). That drawing has its own deep read one shelf over in this app; it is the Daumier you are <em>supposed</em> to know, the fearless caricaturist. The man who quietly painted <em>The Third-Class Carriage</em> in oil is the same person, twenty years on, doing something almost nobody saw him do.
      </p>

      <SectionHeader accent={accent} label="The brush nobody watched" title="A private second life in oil" />
      <p style={proseStyle}>
        Because here is the thing that makes Daumier&rsquo;s paintings so strange and so moving: he made them almost in secret, and almost nobody bought them. From the 1840s onward he painted seriously — small, dark, hand-worked oils of the people he saw every day: laundresses hauling washing up the riverbank, lawyers preening in court, families on the move, crowds in the street. But these were not his job. His job was the newspaper. The paintings piled up in the studio, exhibited rarely, sold barely at all. The public that adored Daumier the cartoonist had no idea that Daumier the painter existed. He was, in effect, running a second, invisible career in oil paint — the one that, a century later, would turn out to matter most.
      </p>
      <p style={proseStyle}>
        He did not arrive at the railway cold, either. Daumier had been drawing train travel for years in the newspaper — a whole lithograph series on <strong>the railways</strong> (<em>Les Chemins de fer</em>) ran in <em>Le Charivari</em> across the 1840s and 50s, the modern machine treated as the comic, crowded, slightly absurd new fact of life it was. The painting grew out of that long looking. By the early 1860s he had moved the third-class carriage from the funny pages onto a canvas, and stopped joking. What had been a gag about the crush and chaos of modern travel became, in oil, something quiet and grave — a picture of the people in those cheap seats, painted as if they mattered. The next chapter is what that looks like.
      </p>
    </article>
  )
}

function TcLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A box of brown, and a fall of light" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the dark, because the painting does. <em>The Third-Class Carriage</em> is not large — about <strong>two feet tall and three feet wide</strong> (65 by 90 centimeters), a picture you could carry under one arm — and almost the whole of it is a low, brown, enclosed space, the inside of a railway car packed shoulder to shoulder. The only real light comes from <strong>two pale windows in the upper left</strong>, two bright rectangles cut into the murk. That light falls forward, onto the front bench, and it decides everything: your eye goes straight to the three people it lands on before you have even registered the crowd behind them. Daumier has lit his stage so that three of the poorest passengers in France are, for a moment, the most important people in the room.
      </p>

      <SectionHeader accent={accent} label="The front bench" title="Three ages of the poor, on one hard seat" />
      <p style={proseStyle}>
        Look at the front bench, left to right, because it is composed with great care. At the left sits a <strong>young mother</strong>, head bowed, <strong>cradling an infant</strong> wrapped against her lap. Hers is one of the most tenderly painted passages in the picture — the soft downturn of the head, the curve of the arm around the child — and it is doing the painting&rsquo;s quiet emotional work without raising its voice. This is not a Madonna, not a symbol of Motherhood with a capital M. It is a tired woman holding her baby on a long ride, painted as though that were as worth painting as any saint.
      </p>
      <p style={proseStyle}>
        In the center — the most finished face in the whole canvas — sits an <strong>old woman</strong>. She is the one you remember, and the first thing your eye actually finds is the <strong>pale cream head-wrap</strong> framing her face — a hood or kerchief of light cloth that is the single brightest thing in this dark painting. In a box of browns and shadow, that soft patch of near-white pulls the eye straight to her before anything else, and Daumier knew it: he made the lightest passage in the picture the head of his most important figure. Beneath it he has worked her face hardest — deeply lined, jaw set, eyes forward and a thousand miles away, the face of someone who has done a great deal of waiting in her life and is doing some more now. Her hands are folded over the handle of a <strong>woven wicker basket</strong> on her lap — whatever she owns or is carrying, kept close. She is not grieving, not pleading, not telling a story. She is simply <em>sitting</em>, the way people actually sit on a long journey, and Daumier paints that flat, unremarkable endurance as if it were the most dignified thing in the world. Which, the painting quietly insists, it is.
      </p>
      <p style={proseStyle}>
        At the right end of the bench, a <strong>boy has fallen asleep</strong>, slumped sideways, head dropped — the way children always give out somewhere in the middle of a trip. A dark box or chest, the family&rsquo;s luggage, sits in the lower-right corner beside him. Now stand back and read the bench as a whole: a baby at the breast, a mother, an old woman, a sleeping child. It is the <strong>three ages of a poor family</strong> — infancy, working adulthood, old age — lined up across a single hard wooden seat. Daumier did not have to spell out a moral; he just arranged the figures so that the whole arc of a hard life rides together on one bench.
      </p>

      <SectionHeader accent={accent} label="The crowd behind" title="A hundred faces dissolving into the dark" />
      <p style={proseStyle}>
        Then look up and back, into the rest of the car, and watch the painting do its most modern thing. Behind the front three sit <strong>rows and rows of other passengers</strong> — men in tall dark hats and workmen&rsquo;s caps, women in bonnets — and the farther back they go, the less they are. The faces near the front bench are still people; a little deeper in they become sketches; deeper still they are smudges and silhouettes, a few brushstrokes suggesting a head, a shoulder, the brim of a hat. By the back of the car they have dissolved almost entirely into the brown dark. (The painting is unfinished, which sharpens the effect — but the design is doing it on purpose.) The man directly behind the mother, in a tall dark hat at the left, is little more than a black shape.
      </p>
      <p style={proseStyle}>
        This is the heart of the picture&rsquo;s subject, and it is a brand-new subject: <strong>anonymity</strong>. These people are strangers. They did not choose each other; the railway threw them together; they will get off and never meet again. Nobody in the back of that car is anybody in particular — they are simply <em>the crowd</em>, the mass of the modern city, packed into a moving box. Daumier paints the front three as individuals and the rest as an undifferentiated human tide, and the contrast is the whole point. Modern life means being a specific, sitting, breathing person <em>and</em> an interchangeable unit in a crowd, both at once. No painter had quite shown that before, because before the railway, that was not yet how life felt.
      </p>

      <SectionHeader accent={accent} label="Dignity without pity" title="What the painting refuses to do" />
      <p style={proseStyle}>
        Here is the hardest thing to see, and the best. A painting of the poor in 1862 had two easy, expected moves available, and Daumier refuses both. He could have made them <em>pitiable</em> — gaunt, weeping, ragged, a tug at the comfortable viewer&rsquo;s conscience, the poor as a charity appeal. Or he could have made them <em>charming</em> — picturesque rustics, lovable and quaint, poverty made cozy. The nineteenth century produced oceans of both. Daumier does neither. His passengers are not victims and they are not adorable. They are just <em>people on a train</em>, tired and self-contained and getting through it, given exactly the gravity and the solid, sculptural weight he would have given a senator.
      </p>
      <p style={proseStyle}>
        That refusal is the painting&rsquo;s moral spine. There is real tenderness here — you feel it in the bowed mother, in the worn old face — but it never curdles into sentimentality, never asks you to weep, never strikes a pose. Daumier simply grants the people in the cheapest seats the one thing that art had always reserved for the important: he takes them <em>seriously</em>. He paints their ordinary endurance as a subject worthy of oil paint and careful light, and he trusts you to feel its weight without being told to. Look again at the old woman&rsquo;s face. Nobody is performing for you. That is the whole achievement.
      </p>
    </article>
  )
}

function TcUnfinished({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Behind the paint" title="A picture caught half-built" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the secret hiding in plain sight, and it is the reason this particular version of <em>The Third-Class Carriage</em> is the famous one: <strong>it is unfinished</strong>. Daumier started it and stopped — left it abandoned, the paint thin in places, whole passages barely worked up, the dark only roughed in. Normally an unfinished painting is just a sad fragment, a thing the artist would not have wanted you to see. But this one is unfinished in a way that turns into a gift, because Daumier was caught mid-process, and the canvas froze with all of his scaffolding still showing. You are looking at a picture you can see <em>through</em> — down to the bones of how it was made.
      </p>
      <p style={proseStyle}>
        Lean in on the unfinished areas, especially up near the two windows at the left, and you will see something most paintings hide forever: <strong>straight ruled lines</strong>, a faint grid of squares, and the bare drawn contours of the figures, showing right through the thin oil. That grid is not damage and it is not decoration. It is the machinery of the painting, left bare because the paint that was supposed to cover it never arrived.
      </p>

      <SectionHeader accent={accent} label="The grid explained" title="What 'squaring for transfer' means" />
      <p style={proseStyle}>
        To understand what you are seeing, you need one technique, and it is a beautifully simple one that artists have used for centuries. Suppose you have a small drawing or watercolor you love, and you want to copy it accurately onto a much bigger canvas — bigger than you can just eyeball. You draw a grid of squares over the small version, and then you draw a matching grid — same number of squares, scaled up — onto the big canvas. Now you copy the picture one square at a time: whatever is in the little square here goes into the big square there. The grid keeps everything in proportion as you enlarge it. This is called <strong>squaring up</strong>, or <strong>squaring for transfer</strong>, and the grid is supposed to be the first thing you draw and the last thing you think about — you paint right over it and it disappears.
      </p>
      <p style={proseStyle}>
        On the Met&rsquo;s canvas, it never disappeared. The painting is, in the museum&rsquo;s own words, &ldquo;still squared for transfer&rdquo; — Daumier had ruled his grid, drawn his figures square by square, begun laying in the paint, and then put it down before the surface was finished. So the grid is still there, faint but unmistakable, a ghost of straight lines under the people. He was almost certainly enlarging from a smaller study — most likely a <strong>watercolor</strong> of the same scene (more on that in a moment) — and we have caught him with the enlargement only half-done.
      </p>

      <SectionHeader accent={accent} label="An X-ray of the method" title="Why a flaw became the prize" />
      <p style={proseStyle}>
        Think about how rare this is. A finished painting is a sealed object; it shows you the result and hides the labor. To see <em>how</em> an old master actually built a picture, museums normally have to shoot it with <strong>X-rays</strong> or infrared cameras to peer beneath the top layer at the drawing underneath. Here you need no machine. Daumier&rsquo;s abandoned canvas is, in effect, a free X-ray — the underdrawing and the grid sitting right on the surface where anyone can read them. You can watch a great picture in the act of being made: the ruled scaffolding, the drawn search for each figure, the paint beginning to climb over the drawing in the most worked passages (the old woman&rsquo;s face) and not yet arriving in the least (the dark back of the car).
      </p>
      <p style={proseStyle}>
        And here is the irony that makes art historians smile: this is exactly the version everyone reproduces. A perfectly finished <em>Third-Class Carriage</em> exists — it would have buried its grid like every other painting — but it is the broken, half-built one that became iconic, precisely <em>because</em> it is broken. The unfinish is not a defect to apologize for; it is the most interesting thing in the room. The painting lets you see Daumier thinking.
      </p>

      <SectionHeader accent={accent} label="One subject, many tries" title="The family of versions" />
      <p style={proseStyle}>
        That smaller study the grid points back to is real, and it opens up an honest complication worth knowing: there is no single <em>The Third-Class Carriage</em>. Daumier worked the subject more than once. There is a finished <strong>oil painting</strong> in the <strong>National Gallery of Canada</strong>, in Ottawa, very close in composition to this one. There is a <strong>watercolor</strong> of 1864 in the <strong>Walters Art Museum</strong> in Baltimore — commissioned by the American collector <strong>William T. Walters</strong> (the Baltimore businessman whose private collection later became that museum) as part of a set showing first-, second-, and third-class carriages — and the squaring grid on the Met&rsquo;s canvas may well have been taken straight off it. There is an even earlier <strong>oil on a wooden panel</strong> in San Francisco, with the three main figures arranged differently. He kept returning to the cheap seats, in print and in paint, for the better part of two decades.
      </p>
      <p style={proseStyle}>
        So the honest way to say it is this: the Met owns one member of a family — the unfinished one, the one whose machinery shows. It is not the &ldquo;original&rdquo; and the others &ldquo;copies&rdquo;; it is one pass at a subject Daumier could not leave alone. And it became the most beloved of them all by an accident of incompletion — because the version where the paint stops short is the version where you can see, with your own eye and no apparatus at all, exactly how a man builds a picture of the poor.
      </p>
    </article>
  )
}

function TcMeaning({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="What it’s doing" title="Realism climbs aboard the train" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        his painting belongs to a movement, and knowing which one tells you what it is up to. It is a work of <strong>Realism</strong> — the mid-century revolt, told in full in the Realism overview one level up in this app, that insisted the real, ordinary, contemporary world deserved to be painted at the same scale and seriousness art had always saved for gods, kings, and saints. The Realists threw out the rule that only the grand and the antique were worth a serious canvas. They painted the present, and they painted the poor, and they refused to prettify either. <em>The Third-Class Carriage</em> is that program applied to a railway bench.
      </p>
      <p style={proseStyle}>
        But within Realism, Daumier is doing a particular job, and it helps to see him beside his two great siblings. <strong>Gustave Courbet</strong>, the movement&rsquo;s loud public face, painted the <em>village</em> — a country funeral, two laborers breaking rock — the rural community at heroic size. <strong>Jean-François Millet</strong> painted the <em>fields</em> — peasants sowing, gleaning, praying at dusk — the timeless rhythm of rural labor. Both looked to the countryside. Daumier looked the other way. He painted the <strong>city</strong>: its courtrooms, its street crowds, its laundresses on the riverbank, and here its third-class poor in motion. If Courbet and Millet are the rural half of Realism, Daumier is its urban half — the one who saw that the truly new subject was not the eternal peasant but the modern crowd.
      </p>

      <SectionHeader accent={accent} label="The new subject" title="Anonymity, painted for the first time" />
      <p style={proseStyle}>
        And the railway car gave him the perfect machine for that subject. Think about what a third-class carriage actually <em>is</em>: a small box that takes a random scoop of strangers — a nursing mother, an old woman, a sleeping boy, a hundred others — and presses them together for an hour, close as family, with no relation to one another at all. That is the defining experience of the modern city distilled into one room on wheels: <strong>intimacy without connection</strong>, crowding without community. Before the industrial age, that experience barely existed; you knew the people you were close to. The railway invented the everyday crowd of strangers, and Daumier was the painter who looked at it head-on and said: <em>this</em> is what life is now.
      </p>
      <p style={proseStyle}>
        That is why the dissolving faces in the back of the car matter so much. Daumier is not being lazy or merely leaving the picture unfinished; he is painting <strong>anonymity itself</strong> — the way, in a modern crowd, most people are nobody to you, a blur of hats and shoulders, while the few right in front of you are heartbreakingly specific. He found a way to put both halves of city life into one image: the individual and the mass, the face you could love and the crowd you could never know, sharing the same brown air. The <strong>Impressionists</strong> — the generation just after, Monet, Renoir, Degas and the rest, who in the 1870s would paint modern life in quick, bright, broken strokes of color — would fill their canvases with exactly these anonymous urban crowds: boulevards, cafés, train stations. Daumier got there first, in the dark.
      </p>

      <SectionHeader accent={accent} label="Tenderness, held in check" title="The opposite of a sob story" />
      <p style={proseStyle}>
        The deepest thing this painting does, though, is hold a hard line between two feelings that are easy to confuse: <strong>tenderness</strong> and <strong>sentimentality</strong>. Tenderness is real care, honestly observed. Sentimentality is feeling worked up for effect, the manipulative tug — the starving orphan with the enormous wet eyes, painted to make you reach for your handkerchief and feel good about it. The nineteenth century was drowning in the second kind; pictures of the deserving poor, milked for tears, were a whole industry. Daumier had every tool to join that industry and pointedly declined.
      </p>
      <p style={proseStyle}>
        His passengers are treated with obvious, deep tenderness — you cannot look at that bowed mother or that worn old face without feeling it — but he never <em>cashes it in</em>. Nobody weeps. Nobody is gaunt for your benefit. Nobody looks up at you, the comfortable viewer, asking for anything. The people in the cheap seats are simply allowed to exist, with dignity and weight, going about the dull business of getting somewhere. That restraint is the whole achievement, and it is harder than tears. Daumier the cartoonist had spent forty years making people feel things on command; Daumier the painter, here, does the much rarer thing — he makes you feel the worth of three strangers on a bench, and then trusts you enough to leave it at that.
      </p>
    </article>
  )
}

function TcAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The painter’s decline" title="Famous, going blind, and broke" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he story of what happened to this painting only lands if you know what happened to its painter, and it is a hard story. By the mid-1860s — right around when he was working this very canvas — Daumier was sinking. The newspaper work that had kept him afloat for decades was drying up; money ran short. He left Paris for a small house in the village of <strong>Valmondois</strong>, north of the city, and there he might well have been evicted but for a friend. The great landscape painter <strong>Camille Corot</strong> — a gentle, generous man and a fellow traveler of the Realists — stepped in to help; by the well-known account, Corot quietly arranged the house so that Daumier would have a roof for the rest of his life. One painter the public adored, kept off the street by another painter&rsquo;s charity.
      </p>
      <p style={proseStyle}>
        Then the cruelest blow for a man who lived by his eyes: he went <strong>blind</strong>. Through the 1870s Daumier&rsquo;s sight failed, and by about 1873 he could barely see. The hand that had drawn four thousand of the sharpest images in France could no longer draw. He spent his last years in the country, nearly sightless and very poor, the oils he had painted in private still piled up, still unsold, still unseen.
      </p>

      <SectionHeader accent={accent} label="Recognition, almost too late" title="The 1878 show" />
      <p style={proseStyle}>
        In <strong>1878</strong>, one year before he died, the art world finally turned to look. A <strong>retrospective exhibition</strong> of his work — held at the Durand-Ruel gallery in Paris — gathered the paintings and drawings together and let people see, perhaps for the first time, that the famous cartoonist had been a major artist all along. It was the recognition he had earned and never received. It came decades late, and it came in a body going blind, and — the final indignity — the exhibition lost money. Daumier died the next year, in <strong>1879</strong>, poor to the end. He never knew that the quiet oils nobody would buy would one day be treasured above almost everything he had drawn.
      </p>

      <SectionHeader accent={accent} label="An ocean away" title="How New York got the cheapest seats in France" />
      <p style={proseStyle}>
        The rescue, when it finally came, came from across an ocean. In <strong>1913</strong>, more than thirty years after Daumier&rsquo;s death, the American collector <strong>Louisine Havemeyer</strong> bought <em>The Third-Class Carriage</em> — reportedly for around forty thousand dollars, an enormous sum for a picture its own painter could not sell. Havemeyer was no ordinary buyer. Her husband was <strong>H. O. Havemeyer</strong>, the American sugar magnate (the family fortune came from refining sugar), and his money paid for the art — but the eye was hers, sharpened by her friend the painter <strong>Mary Cassatt</strong> (an American painter who championed French Impressionism and steered great American collections toward it). Guided by Cassatt for years, the Havemeyers assembled one of the greatest collections of modern French art anywhere, and made it their mission to bring that art to the United States. A canvas painted for nobody, by a man the public knew only as a newspaper cartoonist, ended up a prize of one of America&rsquo;s grandest collections.
      </p>
      <p style={proseStyle}>
        And then she gave it away. On her death, the painting came to the <strong>Metropolitan Museum of Art</strong> in New York as a <strong>bequest</strong> — that is, a gift left in her will — in <strong>1929</strong>, part of the celebrated H. O. Havemeyer Collection. (The provenance has one honest gap: the exact chain of owners between Daumier&rsquo;s studio and Havemeyer&rsquo;s purchase is not securely documented — but the two ends, the broke painter and the New York museum, are certain.) So the unfinished picture of the poorest seats on a French train now hangs, permanently, in one of the richest museums in the world. You can stand in front of it any day the Met is open.
      </p>

      <SectionHeader accent={accent} label="Why it still matters" title="The dignity of the people in the cheap seats" />
      <p style={proseStyle}>
        Sit with the whole arc for a second, because it is one of art history&rsquo;s great reversals. A man known to all of France as a cartoonist painted, in private, the people nobody painted — the urban poor on a third-class bench, a nursing mother, an old woman with her basket, a sleeping boy, a crowd of strangers dissolving into the dark. He never finished it; he never sold it; he died blind and broke; and the picture became famous precisely <em>because</em> it was broken, its working grid showing through. Then it crossed an ocean to become a treasure of New York.
      </p>
      <p style={proseStyle}>
        What survives all of that is the thing Daumier actually put on the canvas: the radical, quiet idea that the people in the cheapest seats are worth the most careful looking. No pity, no charm, no sob story — just three strangers on a hard bench, granted the full weight and seriousness of serious art. That was Realism&rsquo;s whole wager, made by Courbet in a village graveyard and by Millet in a stubble field; Daumier made it on a train. Every later artist who has pointed a serious brush, or lens, at an anonymous crowd in a modern city — at the people history files under <em>and others</em> — is riding in the carriage Daumier painted first.
      </p>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────
// The Horse Fair (Rosa Bonheur, 1852–55) — the five chapters
// Section ids: market · looking · salon · bonheur · afterlife
// Drop into <work>-narratives.tsx and register under NARRATIVES['horse-fair'].
// Signatures match BuTown… exactly. HTML entities for quotes/apostrophes.
// ─────────────────────────────────────────────────────────────
function HfMarket({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1850–52" title="The trousers were a work permit" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        wice a week, for about a year and a half, a small, short-haired figure in a man&rsquo;s smock and trousers stood at the edge of the Paris horse market with a sketchbook, drawing animals nobody else thought worth drawing. The figure was a woman named <strong>Rosa Bonheur</strong> (1822&ndash;1899), and she was not in disguise for the fun of it. She was at work. The market she had chosen &mdash; loud, filthy, crowded with stamping draft horses and the men who wrangled them &mdash; was no place a respectable Frenchwoman in a wide skirt could stand for hours without becoming the spectacle herself. So Bonheur did the practical thing: she got the clothes that let her do the job.
      </p>
      <p style={proseStyle}>
        That meant a trip to the police. Under a French law on the books since 1800, a woman could not legally wear trousers in Paris without official permission &mdash; a literal government document called a <strong>permission de travestissement</strong> (a &ldquo;permit to cross-dress,&rdquo; which had to be renewed every six months). Bonheur applied for one and got it, on the entirely reasonable grounds that men&rsquo;s clothing let her move through the markets, the slaughterhouses, the stockyards and the riding schools where she studied animals &mdash; places a long skirt made impossible. This detail gets told, far too often, as a quirky costume anecdote. It is better understood as what it was: a working professional acquiring the right equipment. Painters need to see their subject up close. Hers happened to live in places the law dressed her out of.
      </p>

      <SectionHeader accent={accent} label="What an animalière is" title="The painter who only painted animals" />
      <p style={proseStyle}>
        Bonheur was an <strong>animalière</strong> &mdash; the feminine form of <em>animalier</em>, the name for a painter who specializes in animals as the main subject, not as scenery behind a person. It was a real specialty with a real ranking, and the ranking was low. European art ran on an official ladder of subject matter, the <strong>hierarchy of genres</strong> (the Realism overview one level up in this app lays it out in full): grand scenes from myth and scripture and ancient history at the top, plain modern life at the bottom, and animals down there near the floor with the still lifes. A painter of cows and horses was, by the academy&rsquo;s own arithmetic, doing humble work. Bonheur&rsquo;s whole career is the story of taking that humble category and making it pay, and matter, like the grand one.
      </p>
      <p style={proseStyle}>
        She came to it honestly. Her father, Raymond Bonheur, was a drawing teacher and a believer in a utopian sect that preached the equality of women &mdash; an unusual household to grow up in, and one that took her ambition seriously when most families would have steered a daughter toward a husband. By the time she set up at the horse market she was already a name. Her <strong>Ploughing in the Nivernais</strong> (1849), a great frieze of oxen dragging a plough through heavy earth, had been commissioned by the French state and had won a First Medal at the Salon (the Salon&rsquo;s top prize) &mdash; the Salon being the official annual exhibition that made and broke careers (Chapter 3 gets into the Salon properly). So the woman in trousers at the horse market in 1850 was not an unknown trying to break in. She was a decorated professional going after a harder subject.
      </p>

      <SectionHeader accent={accent} label="The Boulevard de l'Hôpital" title="The rawest horse subject in Paris" />
      <p style={proseStyle}>
        And horses were a harder subject. Oxen plod; you can draw a plodding ox at leisure. The Paris <strong>horse market</strong>, held twice a week on the tree-lined <strong>Boulevard de l&rsquo;Hôpital</strong> on the Left Bank, was the opposite of leisure: heavy draft horses led, reared, wheeled and fought against their handlers while buyers haggled and the whole churning mass kicked up dust. To paint that, you cannot work from a calm model standing in a studio. You have to be <em>there</em>, in the noise, catching the motion of an animal that will not hold still for thirty seconds, and then doing it again, and again, for eighteen months, until you have hundreds of studies of how a panicking half-ton horse actually moves its legs.
      </p>
      <p style={proseStyle}>
        Bonheur went further than sketching the living animals. To get the muscle right &mdash; the way a haunch bunches, the way a foreleg takes weight &mdash; she studied dead ones, dissecting carcasses and working in the abattoirs (the slaughterhouses), the same places her trousers permit let her enter. It is not a delicate way to learn to paint a horse. It is an anatomist&rsquo;s way, and it is exactly why her horses, when you finally see the finished canvas, have a weight and a correctness that a prettier painter&rsquo;s never would. She earned that ton of muscle the hard way, by the ounce, in the dust and the slaughterhouse, in clothes the law made her ask permission to wear.
      </p>
      <p style={proseStyle}>
        The result of those eighteen months is the largest, most ambitious thing she ever made &mdash; a canvas eight feet tall and over sixteen feet wide, built to put the whole churning market on a single wall. The next chapter is what it actually looks like.
      </p>
    </article>
  )
}

function HfLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Eight feet tall, sixteen feet wide" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the size, because the size is the first argument the painting makes. <em>The Horse Fair</em> is about <strong>eight feet tall and over sixteen feet wide</strong> (244.5 by 506.7 centimeters, if you want the museum&rsquo;s number) &mdash; wider than two cars parked end to end, taller than the room you are probably in. That is not a picture you hang over a sofa. That is a picture you give a wall to. And it is the same acreage the academy reserved for its grandest subjects: the death of a king, a battle from antiquity, a saint ascending into heaven. Bonheur spent the whole enormous sum on horse-dealers and their animals at a market. Hold that mismatch &mdash; it is the engine of the whole work, and Chapter 3 is about what it did to Paris.
      </p>
      <p style={proseStyle}>
        Now actually look at it. Stand back far enough to take in the whole sixteen feet and the first thing you feel is not a scene but a <em>force</em> &mdash; a wave of animals coming at you from the upper left and breaking toward the lower right, all motion, all muscle, all dust. Then your eye finds the parts.
      </p>

      <SectionHeader accent={accent} label="The center" title="The dark horse and the rolling greys" />
      <p style={proseStyle}>
        Go to the middle first, because everything points there. Just left of center, the most violent thing in the painting is happening: a <strong>dark, near-black horse</strong> rears straight up, hauled half off its front hooves, head flung back, forelegs clawing the air, a handler dragging at its head. That is the painting&rsquo;s sharpest spike of motion &mdash; the single animal that has truly gone vertical &mdash; cutting a black silhouette against the pale dust behind it. Your eye snags on it first because nothing else in the canvas is reared up that high.
      </p>
      <p style={proseStyle}>
        Then, just to the right of it, comes the brightest mass on the whole canvas: two big, pale, <strong>dappled-grey horses</strong> &mdash; the heavy French farm breed called a <strong>Percheron</strong> (a powerful draft horse from the Perche region, bred to pull, not to race). These two aren&rsquo;t rearing; they are being led and wheeled at a hard trot, heads tossing, hides catching the strongest light in the painting and glowing grey-white against the darker animals and the dim trees. The dark horse gives you the rear; the greys give you the rolling, unstoppable bulk &mdash; a ton of pale muscle the handlers can steer but not really stop. Between them they own the center &mdash; the spot a history painter would have given a hero. Bonheur put panicking workhorses there, and lit them like gods.
      </p>
      <p style={proseStyle}>
        It is worth dwelling on how <em>convincing</em> these animals are, because it is the payoff of all those slaughterhouse hours. The dark horse&rsquo;s neck arches under real tension; the greys&rsquo; chests are slabs of weight; every leg takes the strain of an animal fighting the men around it. These are not decorative rocking-horses but thousands of pounds of frightened muscle, rendered by someone who had taken a horse apart to learn how it was put together. You can almost hear the hooves &mdash; and that is not a figure of speech the painting hasn&rsquo;t earned.
      </p>

      <SectionHeader accent={accent} label="The diagonal" title="A river of muscle, left to right" />
      <p style={proseStyle}>
        Now pull back and watch how the whole thing <em>moves</em>. The horses and handlers don&rsquo;t stand in a tidy row; they pour across the canvas in one long churning <strong>diagonal</strong>, surging from the upper left toward the lower right: the dark horse rearing just left of center, the grey Percherons wheeling and rolling beside it, a chestnut straining into the mass, more animals crowding off into the haze at the right. Your eye doesn&rsquo;t rest on any one figure for long; it gets swept along the current, the way it would scanning a real crowd of spooked animals.
      </p>
      <p style={proseStyle}>
        Look, too, for the people, because they are nearly drowned in the animals. Scattered through the center are the <strong>handlers</strong> &mdash; men in blue smocks and rolled shirtsleeves, gripping halters and leaning their whole bodyweight back against the horses. Down at the lower left a handler in a red cap throws his weight against a halter; he is the one warm spot of color low in the churn. But the figure that really arrests you sits right in the thick of it: a <strong>mounted handler in a blue smock, twisting around in his saddle</strong>, one arm reaching back, his whole torso wrenched against the pull of the animals he is trying to hold. He is the human pivot of the picture &mdash; the still axis the stampede turns around &mdash; and Bonheur paints his strain as carefully as she paints the horses&rsquo;. He is not posing for us; he has his back half-turned, lost in the work, and mostly losing. That is the quiet second subject of the painting under the spectacle of horseflesh: <em>labor</em> &mdash; the brute physical job of moving a ton of frightened animal down a public street, given the same dignity Courbet gave his stone-breakers one wall over.
      </p>
      <p style={proseStyle}>
        There is a long-running tradition about that twisting rider, worth knowing even though it can&rsquo;t be proven. Bonheur is often said to have slipped a <strong>self-portrait</strong> into the crowd of handlers, and the figure on horseback near the center is the one most often pointed to &mdash; the National Gallery in London, which owns the half-size version you&rsquo;ll meet later, even invites visitors to play spot-the-painter. Treat it as the kind of inviting suggestion that gathers around a famous picture, not settled fact. But it is a tempting thought: the woman in trousers who spent eighteen months in this market, painting herself into it on horseback, in the thick of the work.
      </p>
      <p style={proseStyle}>
        Put the parts back together &mdash; the vertical spike of the dark horse, the rolling greys, the twisting rider, the animals running off into the dust &mdash; and you realize the composition <em>is</em> the stampede. Bonheur didn&rsquo;t paint a picture of motion; she built motion into the way you are forced to look.
      </p>

      <SectionHeader accent={accent} label="The ground" title="Dust, and the proof of speed" />
      <p style={proseStyle}>
        Drop your eye to the bottom, to the horses&rsquo; legs, and watch the ground come apart. Around the churning hooves the dirt dissolves into <strong>clouds of pale, kicked-up dust</strong>, painted loose and smudged, so that the legs of some horses seem to vanish into it. This is the painting&rsquo;s cleverest trick: a still object has crisp edges, a fast one blurs the air around it. By letting the footing dissolve into grit, Bonheur tells you, below the level of conscious looking, that all of this is happening <em>now</em> and happening <em>fast</em>. The dust is the receipt for the motion &mdash; you don&rsquo;t just see the horses move, you see what their moving throws into the air.
      </p>

      <SectionHeader accent={accent} label="The back wall" title="Trees, sky, and a real Paris street" />
      <p style={proseStyle}>
        Finally, look at what closes the scene off behind: a long screen of <strong>plane trees</strong> &mdash; the kind that lined the boulevard &mdash; running across the whole background in a band of dusty green and brown, under a heavy, blown, grey-blue sky. Those trees do a job. They stop your eye from escaping into a deep, pretty distance and press the whole stampede forward, up against you, so the horses feel about to come off the canvas and into your lap. (Courbet did the same thing with a cliff in his <em>Burial</em>, one work along this chain.)
      </p>
      <p style={proseStyle}>
        And then, far off at the upper left, almost lost in the haze behind the trees, there is a faint pale <strong>dome and turret</strong> &mdash; the chapel dome of the <strong>Salpêtrière</strong>, a huge old Paris hospital and asylum on the Left Bank. It nails the whole scene to a real address: the market really was held just outside it, on the Boulevard de l&rsquo;Hôpital. This is not an invented Roman arena with idealized steeds. It is a specific, dusty, ordinary Tuesday on a specific Paris street, painted at the size of an altarpiece. That, exactly, is the move the next chapter is about.
      </p>
    </article>
  )
}

function HfSalon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The Salon · 1853" title="The one room that mattered" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>{' '}
        painting this size is built for one place: the <strong>Salon</strong> &mdash; the official annual state art exhibition in Paris, run by the academy (the government&rsquo;s art authority), and the single show in France where a career was made or buried. Everyone who was anyone hung there; everyone who wanted to be someone fought to get in. To show at the Salon was to put your work in the one room where all of respectable French art stood together to be ranked against each other, in public, in the newspapers. Bonheur hauled her sixteen feet of horse market to the <strong>Salon of 1853</strong>, and it went up on the wall next to the gods and the senators and the saints.
      </p>
      <p style={proseStyle}>
        Now, by the logic of the place, this should have been a disaster. The Salon&rsquo;s whole grammar was the <strong>hierarchy of genres</strong> &mdash; that official ranking of subjects, gods and heroes at the top, animals near the bottom &mdash; and the unbreakable rule underneath it was about <em>scale</em>. Size was reserved. A big canvas was a public promise that the thing on it mattered enormously, and the right to make a thing matter that much belonged to history painting&rsquo;s top rung. You were allowed to paint a horse. You were not allowed to paint a horse at the size of a dying emperor. To spend eight by sixteen feet on draft animals and the men who sell them was, in the academy&rsquo;s arithmetic, a category error loud enough to sound like a provocation.
      </p>

      <SectionHeader accent={accent} label="The twist" title="They cheered instead" />
      <p style={proseStyle}>
        And here is the twist that makes <em>The Horse Fair</em> a different kind of story from the <em>Burial</em> hanging a few works back along this chain. Courbet&rsquo;s village funeral, painted at the same heretical scale three years earlier, had detonated &mdash; critics called it ugly, dangerous, an assault on beauty itself. Bonheur&rsquo;s horse market, just as enormous and just as far down the ladder, got the opposite reception. <strong>The critics cheered.</strong> The picture was widely praised when it was unveiled in 1853, and rather than recoiling from the scale, the Salon was carried away by it. Where Courbet&rsquo;s monumental commoners read as a threat, Bonheur&rsquo;s monumental horses read as a triumph.
      </p>
      <p style={proseStyle}>
        Why the difference? Partly subject. A funeral full of plain, unflattering peasants made a political argument the propertied classes found menacing two years after a revolution. Horses make no such argument; nobody fears a Percheron. You could thrill to the scale and the skill and the sheer animal power without feeling that your social order was being threatened. And partly it was the simple, undeniable virtuosity. The horses were <em>magnificently</em> done, alive and weighty and correct, and even a conservative critic could see that the woman could flat-out paint. The scale that looked like insolence on Courbet&rsquo;s funeral looked like grandeur on Bonheur&rsquo;s herd.
      </p>

      <SectionHeader accent={accent} label="The back-handed praise" title="'Masculine,' they called it" />
      <p style={proseStyle}>
        There was, though, a barb folded into the applause, and it is the barb that tells you what it cost to be a woman doing this in 1853. Again and again the critics reached for the same word of praise: the painting was <strong>masculine</strong>. They meant it as the highest compliment they had &mdash; vigorous, powerful, large, none of the daintiness they expected from a woman&rsquo;s brush. But sit with what that compliment assumes. To call the work &ldquo;masculine&rdquo; was to say it was good <em>despite</em> being made by a woman, that its strength was a kind of borrowed manliness, that the natural state of a woman&rsquo;s art was small and soft and that Bonheur had heroically escaped it. It was praise and cage at once: the highest thing they could say was that she painted like a man.
      </p>
      <p style={proseStyle}>
        Bonheur, to her great credit, mostly ignored the frame and banked the fame. Because that is the other thing the Salon of 1853 did: it made her, overnight, internationally famous. The reputation she&rsquo;d built with the oxen of the <em>Nivernais</em> became, with the horses of the market, a household name &mdash; not just in France but, very soon, across the Channel and the Atlantic. The next chapter is who that household name actually was. The chapter after that is how the painting itself conquered two continents.
      </p>
    </article>
  )
}

function HfBonheur({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Rosa Bonheur · 1822–1899" title="A working professional, not a curiosity" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        t is tempting, and wrong, to file Rosa Bonheur under &ldquo;the lady who painted animals and wore trousers.&rdquo; The trousers and the animals are real, but that filing makes her sound like a curiosity, a footnote, a charming exception. She was none of those things. She was, by wide agreement, <strong>the most internationally celebrated woman painter of the nineteenth century</strong> &mdash; and she got there not as a sheltered hobbyist but as a hard-nosed working professional who out-earned most of the men in her field, ran her own large household, and arranged her life, with remarkable nerve, exactly as she wanted it. The right frame for Bonheur is not &ldquo;impressive, for a woman.&rdquo; It is simply: one of the most successful painters, of either sex, then alive.
      </p>

      <SectionHeader accent={accent} label="The money" title="She out-earned the men" />
      <p style={proseStyle}>
        Start with the money, because money is where the agency is. Bonheur was a commercial juggernaut. Her animal paintings sold for sums that made her, by some distance, the best-paid woman artist of her century and the equal of the era&rsquo;s most successful men. <em>The Horse Fair</em> alone bankrolled a different life: with the proceeds of her painting she bought, in <strong>1859</strong>, the <strong>Château de By</strong>, a country estate at the edge of the Fontainebleau forest &mdash; reportedly the first woman in France to buy property in her own name on the strength of her own earnings. There she built a studio, kept a private menagerie of the animals she painted (sheep, horses, deer, even a pair of lions she let wander the grounds), and ran the whole operation herself. This is not a woman granted a comfortable life by a man. This is a woman who bought her own château with her own brush.
      </p>

      <SectionHeader accent={accent} label="The medal" title="Decorated by the Empress" />
      <p style={proseStyle}>
        Then there is the official honor, which she also took first. In <strong>1865</strong>, the <strong>Empress Eugénie</strong> &mdash; the wife of Napoleon III, then ruling France &mdash; personally brought Bonheur the cross of the <strong>Légion d&rsquo;honneur</strong> (the French state&rsquo;s highest order of merit, founded by the first Napoleon), making her the <strong>first woman artist ever to receive it</strong>. The story that has come down is that Eugénie chose Bonheur deliberately to make a point &mdash; that genius, in the line usually attributed to her, &ldquo;has no sex.&rdquo; (Take the exact wording as the kind of perfect quote that gets polished in the retelling; the decoration and the gesture are solid fact.) Decades later, in <strong>1894</strong>, France raised her again, to Officer of the same order &mdash; once more the first woman to be promoted to that rank. She did not merely succeed in a man&rsquo;s field. She collected the field&rsquo;s top trophies before any other woman was allowed near them.
      </p>

      <SectionHeader accent={accent} label="The household" title="Nathalie Micas, and a life on her own terms" />
      <p style={proseStyle}>
        The most important relationship of Bonheur&rsquo;s life belongs in the honest record, stated plainly and without drama. For more than forty years she shared her home and her life with <strong>Nathalie Micas</strong>, a fellow painter she had known since girlhood. They lived together at the Château de By until Micas died in 1889; Micas helped Bonheur with her work (including the smaller London version of <em>The Horse Fair</em> you&rsquo;ll meet in the next chapter); the two are buried together at <strong>Père-Lachaise</strong> (the famous Paris cemetery where many of France&rsquo;s great artists are buried). Micas, like Bonheur, held her own police permit to wear trousers. After Micas&rsquo;s death, Bonheur&rsquo;s companion in her final years was the American painter <strong>Anna Klumpke</strong>, whom she made her sole heir. None of this needs to be sensationalized or coyly hinted at; it is simply how Bonheur built her household &mdash; around the women she chose &mdash; and she built it openly, in a country estate she had paid for herself.
      </p>
      <p style={proseStyle}>
        Put it all together and the &ldquo;curiosity&rdquo; framing collapses. A woman in trousers might sound like a stunt until you notice that the trousers were a work permit, the work made her rich, the riches bought a château, the château held a household she ran on her own terms, and the brush that paid for all of it had hung a horse where Europe kept its kings. Bonheur did not slip through a gap in a man&rsquo;s world. She walked into the middle of it, out-earned most of its men, took its top medal first, and dressed for the job she was doing. <em>The Horse Fair</em> is the canvas where all of that announced itself to the world.
      </p>
    </article>
  )
}

function HfAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The dealer · 1854" title="Gambart turns one canvas into thousands" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he afterlife of <em>The Horse Fair</em> is, before it is anything else, a business story &mdash; and the businessman is <strong>Ernest Gambart</strong>, a Belgian-born art dealer based in London who became Bonheur&rsquo;s promoter and, in effect, her impresario. In <strong>1854</strong> Gambart bought the great canvas from her for <strong>40,000 French francs</strong>, a serious sum, and then did something cleverer than simply reselling it. He <em>toured</em> it. He took the painting around Britain as a paying attraction, charging the public to come and stand in front of it &mdash; and the public came, in numbers, because there was nothing else like it. (By the well-worn story, even Queen Victoria asked to see it privately; treat the royal detail as the kind of flourish that attaches itself to a famous picture, while the tour itself is solid.)
      </p>
      <p style={proseStyle}>
        Gambart&rsquo;s real genius, though, was in the copy. He was a pioneer of what we would now call reproduction rights &mdash; the idea that the money in a painting isn&rsquo;t only in the one canvas but in the thousands of prints you can pull from it. He had <em>The Horse Fair</em> turned into an <strong>engraving</strong> (a print made from an image cut into a metal plate, the era&rsquo;s technology for mass-producing a picture), the work done by the engraver <strong>Thomas Landseer</strong> from a smaller half-size copy. The print sold and sold. Within a few years, the composition &mdash; the rearing greys, the diagonal, the dust &mdash; hung in parlors all over Britain and America, in the form of a print, in homes whose owners would never see the original. Bonheur became famous in two countries before most of her fans had stood in front of a single brushstroke she made.
      </p>

      <SectionHeader accent={accent} label="The London sister" title="A half-size twin in Trafalgar Square" />
      <p style={proseStyle}>
        That half-size copy has its own life. To make the engraving possible, Bonheur painted a <strong>reduced version</strong> of <em>The Horse Fair</em> &mdash; about four feet tall and eight feet wide, half the dimensions of the original &mdash; and she had help with it from <strong>Nathalie Micas</strong>. That smaller twin ended up in England, <strong>bequeathed by the collector Jacob Bell</strong> &mdash; who died in 1859 &mdash; and entered the <strong>National Gallery in London</strong>&rsquo;s collection in <strong>1865</strong> (where it still hangs). So there are, in effect, two authentic <em>Horse Fair</em>s on public view on opposite sides of an ocean: the colossal original in New York, and its half-size sister in Trafalgar Square &mdash; the very canvas that launched the print that made the image famous.
      </p>

      <SectionHeader accent={accent} label="To New York" title="Vanderbilt's gift" />
      <p style={proseStyle}>
        The original, meanwhile, kept climbing the ladder of rich owners. After Gambart it passed to the English collector <strong>William Parkinson Wright</strong> in 1857, and then, in 1866, it crossed the Atlantic into the collection of <strong>Alexander Turney Stewart</strong>, the New York department-store magnate and one of the wealthiest men in America. When Stewart&rsquo;s widow&rsquo;s estate was auctioned in <strong>1887</strong>, the painting fetched <strong>$53,000</strong> &mdash; an astonishing price &mdash; and the buyer was <strong>Cornelius Vanderbilt II</strong>, of the railroad dynasty. Vanderbilt did not keep it. He immediately gave it to the <strong>Metropolitan Museum of Art</strong>, the great public museum then taking shape on Fifth Avenue, just steps from his own mansion.
      </p>
      <p style={proseStyle}>
        It has hung there ever since &mdash; &ldquo;Gift of Cornelius Vanderbilt, 1887&rdquo; &mdash; one of the most popular paintings in the building. There is a tidy irony in the whole journey. A woman who had to ask the police for permission to wear the clothes she sketched in painted a market full of farm horses at the scale of a coronation, and that canvas was cheered at the Salon, toured for profit through Britain, engraved into a print in a hundred thousand parlors, copied for London, and finally handed to the American public by a railroad heir &mdash; the humblest possible subject, raised to the grandest possible scale, and carried clear around the world by its own undeniable force.
      </p>

      <SectionHeader accent={accent} label="Why it still matters" title="The horse where the king should be" />
      <p style={proseStyle}>
        Step back from the business and the biography and the painting&rsquo;s argument is simple, and it is the Realism argument in a different key. Courbet, a few works back along this chain, took the most ordinary <em>death</em> there is and painted it at the scale of kings. Bonheur took the most ordinary <em>work</em> there is &mdash; men moving animals at a market &mdash; and did the same. No myth, no allegory, no hero: just draft horses and the dust they kick up, rendered with anatomist&rsquo;s precision and given the eight-by-sixteen-foot wall the academy kept for gods. That the Salon cheered it instead of recoiling only proves the argument worked. The present, ordinary and unglamorous, could carry the full weight of the grandest art &mdash; and a woman in a borrowed pair of trousers had proved it on the biggest canvas in the room.
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
// ── Impression, Sunrise (Monet, 1872) — the first Impressionism WORK read.
// Authored gates-first via the art content pipeline; see audits/art-pipeline/sunrise-*.
// ── Impression, Sunrise · Home port at war's end ──
function IsLeHavre({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Le Havre · dawn" title="The man at the window" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icture a man at a hotel window on the Normandy coast, before the town is fully awake, looking out at a gray harbor coming alive in the dawn. There is smoke already, and the dark shapes of ships at anchor, and a small orange sun pushing up through the mist over the water. The man has come home from running away from a war, and he is about to paint what he sees, fast, in one sitting, before the light changes. The picture he makes will be small, cheap, and so unfinished-looking that a critic will say wallpaper has more polish &mdash; and it will end up naming an entire movement in art, getting stolen at gunpoint, and becoming one of the most famous paintings on the planet. But all of that is later. Right now there is just the window, the harbor, and the painter.
      </p>
      <p style={proseStyle}>
        The painter is <strong>Claude Monet</strong> (1840&ndash;1926), and this is no exotic scene he traveled to find. He grew up here. Not in Paris among the salons and the art schools, but in <strong>Le Havre</strong> (pronounced &ldquo;luh AHV-ruh&rdquo;), a busy port on the Normandy coast of northern France, where the river Seine meets the English Channel. His family moved there when he was about five, so the working harbor &mdash; the masts, the smoke, the gray Channel light, the sea fog rolling in off the water &mdash; was the view out the window of his childhood. When Monet paints Le Havre at dawn, he is painting home. (And he is not painting it alone, even if he is the one at the window: a loose band of like-minded young painters &mdash; Pissarro, Renoir, Sisley, and others we will meet properly in Paris &mdash; were already at work on the same problem of catching light fast and outdoors. Hold that thread; it matters for who gets the credit.)
      </p>

      <SectionHeader accent={accent} label="1870 · the war" title="A war, and a flight to London" />
      <p style={proseStyle}>
        But between the boy at the window and the man who made this picture, something happened, and it happened across the Channel. In 1870 the <strong>Franco-Prussian War</strong> broke out &mdash; France against the German states led by Prussia, a short, disastrous war that France lost badly, toppling its government in the process. Monet, who had no appetite for getting conscripted into a collapsing army, did what a lot of young men do when the world catches fire: he left. He went to <strong>London</strong>, and he sat out the war in exile in a foggy foreign city.
      </p>
      <p style={proseStyle}>
        London turned out to be the most important thing that could have happened to his eye. Because in London he looked at English painting, and English painting had already done something French painting was still afraid to do: it had let solid things dissolve. He saw the work of <strong>J. M. W. Turner</strong> (1775&ndash;1851), who painted storms and sunsets and steam as if the whole world were melting into colored light, edges gone, forms barely hanging together. He saw <strong>James McNeill Whistler</strong> (1834&ndash;1903), an American painter living in London who made hushed, near-abstract studies of the Thames at night &mdash; the river, the bridges, the mist, all reduced to a few soft bands of tone. And he saw the actual thing those painters were painting: the <strong>Thames</strong> under coal smoke and river fog, a great modern city dissolved into haze, where you could not tell exactly where a building ended and the smoke began.
      </p>
      <p style={proseStyle}>
        That is the lesson Monet brought home. Not a subject &mdash; he already had his subject, the harbor &mdash; but a permission. The permission to paint the haze instead of fighting through it. The permission to let a smokestack be a soft gray smear rather than a crisp drawn object, because a soft gray smear is, in fact, what a smokestack looks like at dawn through fog from across the water. (Years later a French critic, <strong>Ernest Chesneau</strong>, would look at <em>Impression, Sunrise</em> and see Turner and Whistler in it plainly. He was right.)
      </p>

      <SectionHeader accent={accent} label="1872 · home" title="A working port, not a postcard" />
      <p style={proseStyle}>
        So Monet came back. He traveled home through the Netherlands and was back painting his home harbor by <strong>1872</strong>. And here is the part that matters, the part it is easy to skate past: he did not come home and paint a pretty seaside. Le Havre in 1872 was not a postcard. It was one of the great working ports of France, a place of cranes and derricks (the tall arms that swing cargo on and off ships), of steamships and coal smoke, of factory chimneys going day and night. The traditional way to paint the sea &mdash; the <strong>marine</strong> (a seascape, a recognized respectable category of painting) &mdash; was clean, noble, timeless: tall ships, glittering water, maybe a heroic storm. Monet pointed his attention at the opposite of that. He pointed it at the smoke and the machinery, the modern, half-awake, industrial port at first light.
      </p>
      <p style={proseStyle}>
        That choice is the whole quiet argument of the picture before it ever gets to Paris. A painter who learned in London that fog and smoke could <em>be</em> the subject, standing at a window over his own childhood harbor, deciding that the cranes and the chimneys and the gray morning haze were worth a serious canvas &mdash; not in spite of being unglamorous, but because they were the real, present-tense, working world. He just had to wait for the right morning.
      </p>
    </article>
  )
}

// ── Impression, Sunrise · 7:35 a.m., a hotel window ──
function IsMorning({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Gray water, gray sky, an orange sun" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the canvas, because it is gloriously little, and because the whole point of this painting is what your eye does when it lands on it.
      </p>
      <p style={proseStyle}>
        The water and the sky take up almost the whole surface, and they are nearly the same thing &mdash; a soft, muted blue-gray, brushed in loose horizontal strokes, the kind of wet, slithery marks you make when you are working fast and not stopping to clean up. There is barely a horizon; sea and air blur into each other in the haze. Set into the upper part of the picture, a little above center and <strong>slightly to the right</strong>, is a small <strong>orange disk</strong>: the sun, sitting low over the water through the morning mist. Running straight down from it toward you, broken into choppy dabs of orange on the gray water, is <strong>the sun&rsquo;s reflection</strong> &mdash; not a smooth column of light but a flickering, interrupted streak, the way a real reflection breaks up on moving water. (The museum that owns the painting notes that the sun and its reflections were the very last things Monet added, the final warm notes dropped onto a cool gray field.)
      </p>
      <p style={proseStyle}>
        Down in the foreground float <strong>two dark little boats</strong>, near silhouettes, each with a figure aboard &mdash; somebody rowing or standing. Don&rsquo;t try to count them too precisely; even the experts disagree on exactly what&rsquo;s there, and the picture is deliberately vague about it. The nearer boat is a touch sharper, the farther one fainter, dissolving into the morning. And then, behind everything, the working port: on the <strong>left</strong>, a ghost-fleet of <strong>masts</strong> rising against the misty sky (the tall poles of sailing ships, including the slim raked masts of the fast cargo clippers) and a <strong>drifting plume of smoke</strong> leaning across the picture on a faint wind; on the <strong>right</strong>, a cluster of <strong>dockside cranes and derricks</strong> and <strong>factory chimneys</strong> trailing more smoke into the sky. It is an industrial harbor on both sides &mdash; left and right &mdash; all blue-gray, all hazed, all barely-there, but unmistakably a working port, not a beach. The smoke and the cranes are not clutter behind the scene. They <em>are</em> the scene.
      </p>
      <p style={proseStyle}>
        That is the entire painting: gray water, gray sky, an orange sun, a broken orange reflection, two dark boats, and a smoky port fading into fog on either side. And it is sketched &mdash; thin, rapid, unfinished by every rule of the time.
      </p>

      <SectionHeader accent={accent} label="The method" title="Plein air, before the light changes" />
      <p style={proseStyle}>
        Now the context, because the looseness is not laziness; it is a method. Monet painted <em>Impression, Sunrise</em> in <strong>oil on canvas</strong>, from a hotel room in Le Havre, looking out over the <strong>avant-port</strong> &mdash; the &ldquo;outer harbor,&rdquo; the open stretch of sheltered water just outside the inner docks where big ships ride at anchor. His window faced roughly southeast, toward the rising sun. He painted what was in front of him, fast, in one sitting, before the light could change &mdash; which at dawn it does, minute by minute. This is <strong>plein air</strong> painting taken to its limit: <em>plein air</em> (French for &ldquo;open air&rdquo;) means painting outdoors, on the spot, in front of the real light, rather than back in a studio from sketches and memory. A studio painter can fuss a marine for months. A dawn lasts about twenty minutes. Oil paint worked wet-into-wet &mdash; fresh color dragged straight through color that is still wet, so the strokes smear and blend on the canvas itself &mdash; is exactly the tool for that speed. Monet did not run out of time to finish it. He decided this <em>was</em> finished, that the impression of the morning was the point and polish would only kill it. Hold that thought; in the next chapter it gets him in trouble.
      </p>

      <SectionHeader accent={accent} label="The science" title="The sun isn't the brightest thing on the canvas" />
      <p style={proseStyle}>
        Now, the strangest fact about this picture &mdash; and the most beautiful piece of science in any painting you&rsquo;ll meet. <strong>That orange sun is not actually the brightest thing on the canvas.</strong>
      </p>
      <p style={proseStyle}>
        This sounds insane, because the sun absolutely <em>pops</em> &mdash; it&rsquo;s the one thing your eye goes to. But &ldquo;pop&rdquo; and &ldquo;bright&rdquo; are not the same thing. A scientist named <strong>Margaret Livingstone</strong>, who studies how the brain sees at Harvard University, put <em>Impression, Sunrise</em> under a light meter and measured it. The orange sun has almost exactly the same <strong>luminance</strong> as the gray sky right behind it &mdash; luminance being the plain physical brightness of a thing, the gray-value it would have if you drained all the color out. Measured as pure brightness, sun and sky are nearly identical. The sun stands out only because of its <em>color</em>: warm orange against cool gray-blue. Its punch is a color punch, not a brightness punch.
      </p>
      <p style={proseStyle}>
        You can prove it with a photocopier. Make a black-and-white copy of <em>Impression, Sunrise</em> &mdash; strip out the color and leave only the brightness &mdash; and the sun <strong>nearly vanishes.</strong> It melts into the sky it was sitting in, because in brightness terms it was always the same as that sky. The famous blazing sun of the most famous sunrise in art disappears the instant you take the color away. (Livingstone&rsquo;s careful word is &ldquo;almost&rdquo; vanishes &mdash; equiluminant means <em>nearly equal in brightness</em>, not identical to the last unit, and we should be honest about that. But the effect is real and dramatic.)
      </p>
      <p style={proseStyle}>
        Here&rsquo;s why this matters, why the sun seems to faintly <em>shimmer</em>. Your visual system runs on two crews that don&rsquo;t fully talk to each other. One &mdash; the old one, shared with most animals &mdash; handles brightness, position, depth, and motion; it&rsquo;s the crew that tells you <em>where</em> things are, but it&rsquo;s effectively color-blind, working only in grays. The other team handles color and recognizing objects. Because Monet&rsquo;s sun is the same brightness as the sky, the <em>where</em>-crew can&rsquo;t find it &mdash; to that crew, in its colorless world, there&rsquo;s nothing there to locate. Only the color side sees the sun. So one part of your brain is shouting &ldquo;bright orange sun, right there!&rdquo; and the other is shrugging &ldquo;I don&rsquo;t see anything.&rdquo; And here is the bridge to the shimmer: the where-crew is also the part that pins down <em>position</em>, and it can never quite lock onto a sun it can&rsquo;t even detect, so your eye keeps trying to re-aim at the disk and never settles. That endless, unsettled re-aiming reads as a faint flicker &mdash; the sun seems to quietly vibrate or pulse. Which is <em>exactly</em> what a low sun looks like through morning haze. Monet, who knew none of this neuroscience, painted the shimmer of a real dawn by pure observation &mdash; he painted what he saw, and what he saw happened to be a perfect trap for the human eye.
      </p>

      <SectionHeader accent={accent} label="The date" title="7:35 a.m., November 13, 1872" />
      <p style={proseStyle}>
        Last thing, the date. How does anyone claim &ldquo;7:35 a.m., November 13, 1872&rdquo; about a vague little sketch &mdash; and, while we&rsquo;re at it, how does anyone even know it&rsquo;s a sunrise and not a sunset? Both answers come from the same detective. An astronomer named <strong>Donald Olson</strong> treated the painting like a crime scene. The sun&rsquo;s height above the horizon told him roughly how long after sunrise it was (about 20 to 30 minutes). The southeast view fixed the direction &mdash; Monet&rsquo;s window looked east, toward where the sun <em>comes up</em>, so this is a sun on the way up, not down: a sunrise, settling a debate that had run for a century. Then he cross-checked tide tables (big ships could only enter Le Havre&rsquo;s shallow harbor at high tide, which narrowed the possible days to a handful), local weather reports (to throw out the stormy mornings), and even the direction the painted smoke is drifting (which told him the wind). That left him with <strong>two finalist mornings</strong> &mdash; November 13, 1872, and January 25, 1873. The tiebreaker came from an art historian, <strong>G&eacute;raldine Lefebvre</strong>, who weighed Monet&rsquo;s known movements and the telltale &ldquo;72&rdquo; the painter later added to the canvas &mdash; and that &ldquo;72&rdquo; is itself the seed of an old quarrel, because Monet inscribed it after the fact rather than at the easel, which let a minority of scholars (notably <strong>Daniel Wildenstein</strong>, who compiled the great catalogue of Monet&rsquo;s work) argue the picture was really painted in 1873, or even early 1874, and back-dated. Lefebvre&rsquo;s case lands with Olson&rsquo;s astronomy on the earlier date: <strong>November 13, 1872, around 7:35 a.m.</strong> It is detective work, not certainty &mdash; a best, beautifully reasoned estimate, narrowed from two candidates to one, not a timestamp on a photograph. But it is a very good guess.
      </p>
    </article>
  )
}

// ── Impression, Sunrise · Wallpaper more finished than that seascape ──
function IsName({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · April 1874" title="Going around the Salon" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n April 1874, in Paris, a group of painters who were sick of being rejected decided to stop asking permission.
      </p>
      <p style={proseStyle}>
        To understand why that was a revolt, you have to know what they were revolting against: the <strong>Salon</strong>. The Salon was the official annual art exhibition of France, run by the state&rsquo;s art establishment, and it was effectively the only door in town. Get accepted and hung at the Salon, and critics reviewed you, buyers found you, a career was possible. Get rejected &mdash; and a jury of conservative academic painters did the rejecting, year after year &mdash; and you were nobody. Monet and his friends had been getting rejected, or hung badly, for years. Their loose, bright, unfinished-looking work was exactly what the Salon jury despised.
      </p>
      <p style={proseStyle}>
        So they went around it. Crucially, this was not Monet&rsquo;s solo gesture &mdash; it was a self-organized <strong>cooperative</strong>. About thirty painters banded together and formed their own society with a deliberately boring bureaucratic name, the <em>Soci&eacute;t&eacute; Anonyme des artistes peintres, sculpteurs, graveurs</em> (the &ldquo;Anonymous Society of Painters, Sculptors, and Engravers&rdquo;). It was structured like a business cooperative on purpose: no jury, no establishment, members pooling resources to hang their own work on their own terms. <strong>Camille Pissarro</strong> &mdash; older, steady, the group&rsquo;s organizational backbone &mdash; was central to making it run, alongside <strong>Edgar Degas, Pierre-Auguste Renoir, Alfred Sisley, Paul C&eacute;zanne, Berthe Morisot</strong>, Monet, and the rest. They rented a space and hung the work themselves: the <strong>former studio of the photographer Nadar</strong>, at 35 boulevard des Capucines, in the heart of Paris. The show ran from April 15 to May 15, 1874, and a few thousand people came through over its run. This was the <strong>First Impressionist Exhibition</strong> &mdash; except nobody called it that yet, because the word &ldquo;Impressionist&rdquo; did not exist as the name of anything. That&rsquo;s what this chapter is about: where the word came from.
      </p>

      <SectionHeader accent={accent} label="No. 98" title="A picture that needed a title" />
      <p style={proseStyle}>
        Monet hung <strong>several</strong> paintings in that show &mdash; not just the little Le Havre dawn scene but a clutch of canvases, including a <em>Boulevard des Capucines</em> and other coastal and everyday subjects. This matters, because the famous story tends to shrink the whole exhibition down to one tiny sketch, as if the entire revolt hung on a single picture. It didn&rsquo;t. But one of Monet&rsquo;s entries, listed in the catalogue as <strong>No. 98</strong>, was that Le Havre dawn scene. And it needed a title.
      </p>
      <p style={proseStyle}>
        By Monet&rsquo;s own account, told years later, when they were filling in the catalogue he couldn&rsquo;t honestly call it a straight &ldquo;View of Le Havre,&rdquo; because it plainly wasn&rsquo;t a careful topographical view of anything &mdash; it was a sketch of a passing moment. So, he remembered saying, &ldquo;Put <em>Impression</em>.&rdquo; That&rsquo;s the famous story, and it&rsquo;s charming, but treat it gently: it is Monet&rsquo;s recollection from much later, not a record made at the time. The French record actually credits <strong>Edmond Renoir</strong> &mdash; the painter <strong>Pierre-Auguste Renoir&rsquo;s brother</strong>, who was helping compile the catalogue &mdash; with reaching for the word &ldquo;Impression&rdquo; in the rush of getting titles down. Who exactly said it first is genuinely unsettled. What&rsquo;s solid is that the title that went into the catalogue, next to No. 98, was <em>Impression, soleil levant</em> &mdash; <em>Impression, Sunrise</em>.
      </p>

      <SectionHeader accent={accent} label="Le Charivari · April 25" title="The wallpaper jibe" />
      <p style={proseStyle}>
        Enter the villain, who is really the accidental godfather. A satirical critic named <strong>Louis Leroy</strong> went to the show and wrote it up for a humor newspaper, <em>Le Charivari</em>, on April 25, 1874. He hated the work, and he wrote his review as a comic skit: he tours the exhibition alongside a stuffy, horrified old academic painter he calls Monsieur Joseph Vincent, who gets more and more outraged at each unfinished canvas. They arrive at No. 98. What, demands the old painter, is that supposed to be? <em>Impression, Sunrise</em>, comes the answer. And Leroy delivers the line that accidentally made history:
      </p>
      <p style={proseStyle}>
        &ldquo;Impression &mdash; I was certain of it. I was just telling myself that, since I was impressed, there had to be some impression in it... and what freedom, what ease of workmanship! <strong>Wallpaper in its embryonic state is more finished than that seascape.</strong>&rdquo;
      </p>
      <p style={proseStyle}>
        That wallpaper jibe &mdash; that an unprinted, half-made roll of wallpaper has more <em>finish</em> than Monet&rsquo;s painting &mdash; is the whole sneer in one line. (<strong>&ldquo;Finish,&rdquo;</strong> or <em>fini</em>, was the era&rsquo;s word for the high polish a proper painting was supposed to have: every brushstroke blended away, every detail rendered, the surface licked smooth like porcelain. By that standard a rapid gray sketch with a few dabs of orange wasn&rsquo;t a painting at all. It was a doodle that had wandered onto a wall.) Leroy titled his whole hostile review &ldquo;The Exhibition of the <strong>Impressionists</strong>&rdquo; &mdash; turning Monet&rsquo;s painting title into a mocking label for the entire group. <em>You want to paint impressions? Fine. You&rsquo;re the Impressionists, then.</em> He meant it as an insult. He was naming a punchline.
      </p>

      <SectionHeader accent={accent} label="The badge wins" title="An insult that became a name" />
      <p style={proseStyle}>
        Now here is the nuance that absolutely must survive, because the lazy version of this story is wrong. <strong>Leroy did not coin the word &ldquo;Impressionism.&rdquo;</strong> He didn&rsquo;t pull it from nowhere as a clever put-down. He lifted it straight off the catalogue &mdash; it was already there, in Monet&rsquo;s own title, and Monet had used &ldquo;impression&rdquo; in titles before. Leroy&rsquo;s contribution was to popularize it, to weaponize a word that already existed: to take one picture&rsquo;s title and fling it at a whole movement as a slur.
      </p>
      <p style={proseStyle}>
        And it didn&rsquo;t even stay a slur for long. Just four days after Leroy&rsquo;s hatchet job, on April 29, a sympathetic critic named <strong>Jules-Antoine Castagnary</strong> used &ldquo;impressionists&rdquo; in print <em>approvingly</em>, in the newspaper <em>Le Si&egrave;cle</em>. He defined them, rather beautifully, as painters who render not the landscape but the <em>sensation produced by</em> the landscape &mdash; the feeling of seeing it, not a catalogue of its parts. So within a single week the same word was doing two opposite jobs: an insult in one paper, a badge of honor in another.
      </p>
      <p style={proseStyle}>
        The badge won. The painters, with the contrarian good sense of people who have just been called a rude name, picked it up and wore it. By their 1877 exhibition they were calling <em>themselves</em> Impressionists, on purpose. A grumpy critic&rsquo;s joke about a foggy little harbor sketch had become the permanent name of one of the most beloved movements in the history of art. Leroy got his immortality &mdash; as the man who tried to bury Impressionism and accidentally christened it instead.
      </p>
    </article>
  )
}

// ── Impression, Sunrise · Not the first, but the one that named it ──
function IsBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The honest claim" title="It named Impressionism, it didn't found it" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is where we have to be careful, because this is exactly the kind of painting people tell flattering lies about. <em>Impression, Sunrise</em> did not invent Impressionism. It was not the first Impressionist painting. It is not the moment a new way of seeing was born. By the time this canvas hung in Nadar&rsquo;s old studio, Monet and Pissarro and Renoir and the rest had already been painting like this for years &mdash; outdoors, fast, in broken patches of bright color, chasing the look of light rather than the catalogue of facts. The style existed. The painting did not found it.
      </p>
      <p style={proseStyle}>
        What it did was <em>name</em> it. And naming, it turns out, is its own kind of power &mdash; a movement without a name is just a bunch of people who paint a bit alike, but a movement with a name is a flag people can rally to and critics can argue about. This is the single most important thing to keep straight: <strong>this is the painting that named Impressionism, not the first Impressionist painting.</strong> Those are very different claims, and only the first one is true.
      </p>
      <p style={proseStyle}>
        So if it didn&rsquo;t break the rules first, what rules was it breaking? Four, mainly, and they&rsquo;re worth taking one at a time, because together they&rsquo;re the whole argument of Impressionism, made visible in one small frame. And because this is a <em>painting</em>, each break is sitting right there on the canvas &mdash; so for each one, look at the thing.
      </p>

      <SectionHeader accent={accent} label="The first break" title="Impression over finish" />
      <p style={proseStyle}>
        The reigning rule said a serious painting must be <em>finished</em> &mdash; polished, blended, detailed, every mark smoothed away. <em>Impression, Sunrise</em> is openly, defiantly unfinished, and you can see it in the water: those quick, loose, slithery horizontal strokes that don&rsquo;t pretend to be individual waves, with the bare canvas-speed visible in every mark. Monet&rsquo;s claim, baked into the paint, is that the rapid sketch caught something true that the slow polish would have killed &mdash; the <em>liveness</em> of a real moment, which dies the instant you start fussing it. The roughness isn&rsquo;t failure. It&rsquo;s the message.
      </p>

      <SectionHeader accent={accent} label="The second break" title="Sensation over description" />
      <p style={proseStyle}>
        A traditional marine described the harbor &mdash; here are the ships, here are their rigging lines, here is the architecture of the docks, all legible. Monet didn&rsquo;t describe the harbor; he painted the <em>experience</em> of looking at it on a hazy morning. Look at the masts on the left and the cranes on the right: they aren&rsquo;t drawn, they&rsquo;re barely suggested, pale gray-blue ghosts with no rigging and no hard edges, exactly as a forest of masts looks across the water through fog when your eye genuinely cannot resolve them. He painted what the eye really receives in that light, not what the mind knows is there. That&rsquo;s Castagnary&rsquo;s &ldquo;the sensation, not the landscape.&rdquo; The painting is faithful to seeing, not to facts.
      </p>

      <SectionHeader accent={accent} label="The third break" title="The modern industrial subject" />
      <p style={proseStyle}>
        A respectable seascape was timeless and noble &mdash; tall ships, clean water, eternal sea. Monet painted smokestacks. The proof is the drifting smoke-plume on the left and the cranes and chimneys on the right: he put the machinery of a working port, at the unglamorous hour of dawn, where a noble ship or a heroic wave was supposed to go. He treated the messy modern present &mdash; industry, the actual economy of his hometown &mdash; as worthy of a serious painting. That was a quiet provocation, and a deliberate one: it sat squarely inside the new program that the poet Charles Baudelaire and the painter &Eacute;douard Manet had been pushing, the idea that the painter&rsquo;s true job was to paint <em>modern life</em> &mdash; the present-tense city, not the eternal past.
      </p>

      <SectionHeader accent={accent} label="The fourth break" title="Color contrast over brightness" />
      <p style={proseStyle}>
        This is the one that&rsquo;s pure Monet, and it ties straight back to the science. The old way to make something glow on canvas was to make it <em>bright</em> &mdash; pile on the lightest paint, the whitest highlight. Monet made his sun glow without making it bright at all: it&rsquo;s a small, saturated-orange disk, no whiter or lighter than the gray sky around it, and yet it burns. He matched its brightness to the sky and let pure <em>color contrast</em> &mdash; warm orange against cool gray &mdash; do all the work (Chapter 2). It&rsquo;s a fundamentally different idea of how a painting carries light: not by brightness, but by the relationships between colors. That idea is the engine room of everything Impressionism became, and here it is in its first famous demonstration.
      </p>

      <SectionHeader accent={accent} label="The verdict" title="The right painting in the right room" />
      <p style={proseStyle}>
        Put those four together and you have the case for why this small, cheap, mocked sketch became the icon of a movement. Not because it was first &mdash; it wasn&rsquo;t. Not because it was the best or biggest thing any of them ever painted &mdash; it wasn&rsquo;t that either. But because it happened to be the painting that was hanging on the wall, with the perfect honest title, when the critic reached for an insult. It became the example. The name landed on it, and stuck, and dragged the whole revolution along behind it. The honest version is the better story anyway: not the founding masterpiece, but the right painting in the right room at the right moment, christened by an enemy who didn&rsquo;t know what he was doing.
      </p>
    </article>
  )
}

// ── Impression, Sunrise · Sold for a song, stolen at gunpoint, immortal ──
function IsAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="A paper trail like a novel" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting that named Impressionism was, for most of its early life, worth almost nothing. Its journey from cheap sketch to priceless icon is a story of bargains, a bankruptcy, an inheritance, and &mdash; best of all &mdash; an armed robbery. To follow it you need one plain word: <strong>provenance</strong>, which just means the documented chain of who owned a work of art, from the artist&rsquo;s hand to wherever it sits now. Provenance is the painting&rsquo;s paper trail, and this one&rsquo;s reads like a novel.
      </p>
      <p style={proseStyle}>
        First owner: <strong>Ernest Hosched&eacute;</strong>, a department-store magnate and one of the early collectors brave (or rich) enough to buy this strange new work. He bought <em>Impression, Sunrise</em> in 1874, around the time of that first exhibition, for <strong>800 francs.</strong> Not a fortune, but a real price &mdash; somebody believed in it.
      </p>

      <SectionHeader accent={accent} label="1878 · the fire sale" title="Sold for a song" />
      <p style={proseStyle}>
        Then the story takes its first turn. Hosched&eacute;&rsquo;s fortune collapsed; he went bankrupt, and in <strong>1878</strong> his collection was sold off at a forced auction at the H&ocirc;tel Drouot, the big Paris auction house. At that fire sale, <em>Impression, Sunrise</em> &mdash; the future emblem of a whole movement &mdash; went for <strong>210 francs.</strong> It had lost nearly three-quarters of its value in four years. The buyer was <strong>Dr. Georges de Bellio</strong>, a Romanian-born homeopathic doctor in Paris who was one of the earliest and most loyal collectors of the Impressionists, a man who quietly bought their work when almost no one else would. He got the most important painting of the movement for the price of, roughly, a nice piece of furniture. That 210-franc bargain is the &ldquo;sold for a song&rdquo; fact, and it&rsquo;s true, and it&rsquo;s a useful corrective every time someone tells you the great art of the past was always recognized as great. It wasn&rsquo;t. For 210 francs you could have owned the painting that named Impressionism.
      </p>

      <SectionHeader accent={accent} label="1940 · the Marmottan" title="Into the family, then a museum" />
      <p style={proseStyle}>
        From de Bellio it stayed in the family. When he died in 1894 it passed down to his daughter <strong>Victorine</strong> and her husband, <strong>Eug&egrave;ne Donop de Monchy</strong> (some sources call him Ernest; the museum&rsquo;s own record says Eug&egrave;ne). And in <strong>1940</strong>, the Donop de Monchys gave the painting away &mdash; they donated it to the <strong>Mus&eacute;e Marmottan</strong> in Paris, the museum that holds it to this day. (One persistent error worth nailing down, because you&rsquo;ll see it repeated even in respectable places: the painting is <strong>not</strong> in Le Havre. There&rsquo;s a fine museum in Le Havre, Monet&rsquo;s home city, that has <em>borrowed</em> it for shows &mdash; but its permanent home is the Mus&eacute;e Marmottan Monet in Paris. The painting of Le Havre lives in the capital.)
      </p>

      <SectionHeader accent={accent} label="October 27, 1985" title="Robbed at gunpoint" />
      <p style={proseStyle}>
        And it might have stayed a quiet, treasured fixture of that museum forever, except for what happened on a Sunday morning in 1985.
      </p>
      <p style={proseStyle}>
        On <strong>October 27, 1985</strong>, in broad daylight, a group of armed men walked into the Mus&eacute;e Marmottan, pulled out guns, held the staff and visitors at gunpoint, and robbed the place like a bank. They walked out with <strong>nine paintings.</strong> Five of them were Monets &mdash; and the prize, the one the theft is remembered for, was <em>Impression, Sunrise</em> itself. The painting that named Impressionism was now a stolen object, gone, somewhere out in the criminal underworld, its whereabouts unknown. (The police would later tie the robbery to organized crime, with reported links to the Japanese underworld &mdash; though &ldquo;reported&rdquo; is the right word for that part; the museum-heist details are solid, the mob backstory was the kind of thing that circulates around a famous theft.)
      </p>

      <SectionHeader accent={accent} label="1990 · Corsica" title="Found, and nursed back to health" />
      <p style={proseStyle}>
        It was missing for five years. Then, in <strong>December 1990</strong>, French police recovered the whole haul &mdash; the nine Marmottan paintings &mdash; in a villa in <strong>Porto-Vecchio</strong>, in southern Corsica, the French island in the Mediterranean. But the painting did not come back clean. Hidden away for half a decade in a damp Mediterranean villa, <em>Impression, Sunrise</em> had suffered from the humidity; its varnish had discolored and the surface needed work. So before it could go back on the wall, conservators &mdash; the specialists who clean and repair paintings &mdash; treated it: they removed the dulled, discolored varnish and brought the colors back. Only then, in <strong>1991</strong>, repaired and restored, did it return to the Mus&eacute;e Marmottan and back onto public view, where it hangs now.
      </p>

      <SectionHeader accent={accent} label="The arc" title="The foggy little dawn, immortal" />
      <p style={proseStyle}>
        So sit with the arc of this object. It began as a rapid little sketch of a smoky home harbor, painted in one dawn from a hotel window, by a man fresh back from dodging a war. A critic said wallpaper was more finished than it. It sold for 800 francs, then crashed to 210 at a bankruptcy sale, a bargain even then. It accidentally lent its title to a movement that would become one of the best-loved in all of art. It was donated to a museum, stolen at gunpoint, lost for five years, found in a Corsican villa, and nursed back to health. And today it is one of the most famous paintings on the planet &mdash; the foggy little dawn that gave Impressionism its name, hanging safe in Paris, still doing the one trick no one taught it: making a sun glow without ever being bright.
      </p>
    </article>
  )
}

// ── Impressionism Batch A (4 works × 5 chapters = 20 components).
// Authored gates-first via the art content pipeline; see audits/art-pipeline/imp-batch-a-*.
// La Grenouillère (Monet, 1869) — Gre… ───────────────────
function GreSeine({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Croissy &middot; summer 1869" title="The frog pond on a Sunday" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icture a slack arm of the river on a hot afternoon &mdash; a stretch of the Seine just west of Paris, slow-moving and lazy where it widens around a small wooded island. The island sits a few yards offshore, roped to the bank by a wooden gangplank that runs out to a flat floating platform of planks and lattice. The platform is a caf&eacute; and dance hall and bathing spot all bolted together, half-on-the-water, and on any given Sunday in 1869 it is packed with Parisians who have come out for the day in their best dark clothes &mdash; clerks, shopgirls, students, soldiers on leave &mdash; drinking, splashing, gawking, and trying to get out of the city heat for a few francs. The place is called <strong>La Grenouill&egrave;re</strong>, which translates roughly as &ldquo;the frog pond.&rdquo; Now stand on the riverbank in front of it and put two easels there, side by side, and behind those easels put two men in their late twenties who are nearly broke. That&rsquo;s the whole setup of this picture. The rest of this read is what those two men figured out across that summer, while they were standing there.
      </p>

      <SectionHeader accent={accent} label="The railway" title="What put Parisians on the Seine" />
      <p style={proseStyle}>
        The two men are <strong>Claude Monet</strong> (1840&ndash;1926) and <strong>Pierre-Auguste Renoir</strong> (1841&ndash;1919), and the reason they&rsquo;re at the Seine and not in Paris is a story about a railway. Until about a generation before this, going from Paris out to a riverside village for an afternoon&rsquo;s bathing was a serious expedition &mdash; the kind of trip a working person could not afford the day off to make. Then the Saint-Lazare line, the western train line running out of one of Paris&rsquo;s big terminus stations, reached the Seine villages &mdash; <strong>Bougival</strong>, <strong>Chatou</strong>, <strong>Croissy-sur-Seine</strong>, a cluster of riverside towns about ten miles downstream from Paris where the river loops slowly through orchards and meadows. With the train, those villages became a same-day trip for ordinary Parisians: cheap fare, an hour out, an hour back, a whole afternoon on the water in between. That&rsquo;s the engine behind this picture. La Grenouill&egrave;re is one of the most-painted spots of the entire <strong>Seine resort</strong> boom &mdash; the cluster of pop-up caf&eacute;s and bathing pavilions that the new railway invented along the riverbanks of the western suburbs.
      </p>
      <p style={proseStyle}>
        It&rsquo;s worth being honest about what kind of place it actually was, because the legend has scrubbed it up over the years into something it wasn&rsquo;t. La Grenouill&egrave;re was not a respectable bourgeois retreat where polite families took the air. It was rowdy. It was a little dubious. The same year Monet and Renoir were painting there, Napoleon III himself &mdash; the emperor of France &mdash; had paid a visit (the year before, in fact), which gives you the upper edge of its fame; the lower edge is that everyone knew the bathing girls and their company. It was a working-class pleasure-spot &mdash; caf&eacute;, dance pavilion, bathing dock, and pickup joint, all on planks above the river. The dark-suited day-trippers Monet paints on the platform aren&rsquo;t aristocrats; they&rsquo;re clerks on Sunday. The whole place hummed with the slightly louche energy of a beach resort with no parents around.
      </p>

      <SectionHeader accent={accent} label="Two broke friends" title="Monet and Renoir, walking distance away" />
      <p style={proseStyle}>
        The two painters were not visiting in style either. Monet was holed up in <strong>Saint-Michel</strong>, a tiny hamlet just upriver near Bougival, with his partner <strong>Camille Doncieux</strong> and their infant son <strong>Jean</strong> &mdash; the family was nearly out of money and Monet was writing begging letters to friends to send a few francs so they could eat. Renoir was a couple of villages over, in <strong>Voisins</strong>, staying with his parents because he too could not afford his own place. They had been friends for years, both stubborn, both ambitious, both more or less locked out of the official French art world. So when the weather got warm, the two broke friends did what broke friends in their twenties have always done: they walked. From wherever they were sleeping over to La Grenouill&egrave;re, where the entertainment was free if you stayed on the bank and the subject matter was endless.
      </p>
      <p style={proseStyle}>
        And they did it not once but <strong>across the summer of 1869</strong> &mdash; over and over, week after week, several painting sessions strung out across the season. (This is the most-repeated misreading of the story, the one to nail down right now: people love to say Monet and Renoir set up their easels next to each other one sunny morning and made these canvases the same day, in a single golden burst. They did not. The side-by-side canvases are the product of <em>weeks</em> of company at the same spot &mdash; many afternoons, not one. That&rsquo;s the difference between a romantic flash of inspiration and a slow, deliberate, summer-long thinking-out-loud between two painters who knew each other&rsquo;s work as well as their own.)
      </p>
      <p style={proseStyle}>
        So that&rsquo;s the setting. A working-class river resort an hour out of Paris, made possible by a railway. A floating caf&eacute;-bathing-deck called the frog pond. Two friends in their late twenties, broke and ambitious, stuck on the same problem &mdash; how to paint a moving, dappled, sun-struck riverside in a way that didn&rsquo;t kill it. And one slow afternoon after another, with their easels close enough to talk over, they began to figure something out together.
      </p>
    </article>
  )
}

function GreMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Tableau vs pochade" title="The rule that ran the industry" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o understand what changed at La Grenouill&egrave;re, you need one word that ran the entire 19th-century art world: <strong>tableau</strong>. A <em>tableau</em> (pronounced &ldquo;tah-BLOH&rdquo;) was a <em>finished picture</em> &mdash; the kind of painting you spent six months on in a studio, blending every stroke smooth, polishing the surface to porcelain. A tableau was what you sent to the <strong>Salon</strong>, the official annual art exhibition in Paris where careers were made; it was the only thing that counted as a Real Painting. Set against it was a humbler creature called the <strong>pochade</strong> (pronounced &ldquo;po-SHAHD&rdquo;) &mdash; French painters&rsquo; word for a quick oil sketch, made fast, in front of the real motif, usually outdoors. Pochades were preparation, a tool. You made one to figure out a tableau. You did not show a pochade, you did not finish it, you did not sign it. A pochade was scratch paper that happened to be in oil. That distinction was the bedrock of the whole industry.
      </p>
      <p style={proseStyle}>
        The whole point of what Monet and Renoir did at La Grenouill&egrave;re is that they treated the pochade as the finished picture.
      </p>

      <SectionHeader accent={accent} label="Plein air" title="Cutting out the studio" />
      <p style={proseStyle}>
        Start with the practical conditions. The two friends were painting <strong>en plein air</strong> &mdash; French for &ldquo;in the open air,&rdquo; meaning outdoors, on the spot, in front of the real light, rather than back in a studio from sketches and memory. Plein air wasn&rsquo;t new &mdash; an earlier generation, the <strong>Barbizon painters</strong>, had popularized going outside with portable paint boxes &mdash; but the Barbizon men still came home and worked their outdoor sketches up into finished tableaux in the studio. Monet and Renoir cut out the studio. Whatever they made on the riverbank was going to be the final object.
      </p>
      <p style={proseStyle}>
        That changes how you paint, because the river won&rsquo;t sit still for six months. The light shifts every fifteen minutes; the water moves constantly; the breeze ripples the surface; the trees dapple and re-dapple. You cannot blend a painting smooth at that speed. So both painters worked <strong>wet-into-wet</strong> (fresh color dragged straight through color still wet on the canvas, so the strokes smear and blend on the surface itself), in fast, separate touches of pure pigment laid down side by side. They didn&rsquo;t premix a &ldquo;water color&rdquo; on the palette; they laid down a stroke of slate blue, then a stroke of olive green next to it, then a stroke of dirty white next to that, and trusted the viewer&rsquo;s eye to do the mixing. This technique has a name: <strong>broken color</strong> &mdash; small, separate strokes of unblended pure color, side by side, instead of smoothly mixed tones, so the picture surface stays alive with the individual marks. It is the technical headline of <em>La Grenouill&egrave;re</em>.
      </p>
      <p style={proseStyle}>
        And it matters for <em>this</em> subject in particular, because moving water under bright sun is the one thing in nature broken color is built to paint. A flat smooth lake reflects like a mirror &mdash; you can blend that. But choppy water under direct light is a thousand tiny tilted surfaces flashing different colors at once: blue here, white-glare there, dark-shadow-green here, ochre-reflection there, all changing every second. The only honest way to put that on canvas is in tiny separate strokes of different colors next to each other, fast, and not blended. Sit Monet and Renoir on the bank and you get <em>paint that reads as moving sun-struck water</em> &mdash; because the marks behave the way the real water behaves. That is the discovery, and it was found at this exact spot.
      </p>

      <SectionHeader accent={accent} label="Two easels" title="A tiny research lab on the bank" />
      <p style={proseStyle}>
        The reason it took both of them is that working against the entire training of the era is harder alone than in pairs. Two easels next to each other, week after week &mdash; two painters who could see each other&rsquo;s canvases, talk between strokes, watch each other&rsquo;s solutions &mdash; was a tiny research lab. Monet would put down a stroke; Renoir would try one of his own; one would push the pure-color side, the other the soft-pearl side. They weren&rsquo;t copying each other. They were thinking together. (Renoir&rsquo;s twin canvas of nearly the same view, made on the same bank that summer, is now at the <strong>Nationalmuseum</strong> in Stockholm. The two pictures are best read as sibling experiments, not as a master and a follower &mdash; trading notes, not ranks.)
      </p>

      <SectionHeader accent={accent} label="The letter to Bazille" title="Monet calls his own picture a bad sketch" />
      <p style={proseStyle}>
        There is one piece of paper that proves Monet himself did not yet think any of this was finished work. In September 1869 he wrote to his friend the painter <strong>Fr&eacute;d&eacute;ric Bazille</strong>: <em>&ldquo;I do have a dream, a painting (</em>tableau<em>), the baths of La Grenouill&egrave;re, for which I have made some bad sketches (</em>pochades<em>), but it is only a dream.&rdquo;</em> That is the whole pivot of this picture&rsquo;s status. Monet, in 1869, is calling the canvases he is making at La Grenouill&egrave;re &ldquo;bad sketches&rdquo; &mdash; <em>pochades</em> &mdash; that he hopes to work up someday into a real tableau. He thinks the Met&rsquo;s picture is a scratch. He thinks the <em>real</em> painting is the larger, finished version he plans to make from these sketches and submit to the Salon.
      </p>
      <p style={proseStyle}>
        And he tried. Monet started that larger version: a bigger, more worked-up canvas that he in fact submitted to the <strong>Salon of 1870</strong> &mdash; and the Salon jury <strong>rejected it</strong>. The picture later passed into the <strong>Arnhold collection</strong> in Berlin, a major German Jewish art collection assembled by the banker Eduard Arnhold in the early 20th century. When the Nazis dismantled that collection during the Second World War, the painting <strong>disappeared</strong> &mdash; presumed destroyed sometime between 1939 and 1945. So the tableau Monet had dreamed of in his letter to Bazille was made, rejected by the official system it was made for, sold off, and then lost in a war seventy years later. What survived, and what changed painting, was the so-called bad sketch he had been making on the bank.
      </p>
    </article>
  )
}

function GreLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The water" title="Broken strokes that refuse to mirror" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        ook at the river first. Nearly two-thirds of this canvas is water, and the water is the part that makes the picture famous: <strong>horizontal broken strokes</strong> in slate blue, emerald, white, ochre, and dark brown, slashed across in jabs and dashes &mdash; short, choppy, separate touches of unmixed pigment laid down side by side. No smooth blending. No glassy mirror. Where the trees on the far bank reflect into the water, Monet does not paint a mirrored shape &mdash; he paints continuous <em>horizontal bars</em> in the colors of those reflections. The reflections of the boats aren&rsquo;t boat-shaped either; they&rsquo;re bands of dark and pale running flat across the water. That refusal to mirror is the picture&rsquo;s quietest joke. A real choppy river surface doesn&rsquo;t reflect like a mirror &mdash; every little tilt of the surface re-aims the light somewhere else, so what you actually <em>see</em> is a horizontal smear of color, not a clean upside-down copy of the bank. Monet paints what the eye gets, not what the mind expects.
      </p>
      <p style={proseStyle}>
        The painting itself is small for what it does &mdash; about two and a half feet tall and a little over three feet wide (the museum&rsquo;s catalogue number is 74.6 by 99.7 centimeters, the source-of-truth measurement; in plain feet and inches that&rsquo;s roughly <strong>2 ft 5&frac12; in &times; 3 ft 3&frac14; in</strong>). Oil on canvas, signed and dated lower right <em>Claude Monet 69</em>. The view looks across that wide, slack stretch of the Seine on a hot summer afternoon. Now work out from the water, piece by piece.
      </p>

      <SectionHeader accent={accent} label="Le Camembert" title="The island and the floating pavilion" />
      <p style={proseStyle}>
        Middle distance, dead center: a small round island, fat with summer trees, sitting in the river like a fat green hat. The locals called it <strong>the Camembert</strong>, after the round French cheese, because of its shape (some called it the Flowerpot Island for the same reason). A narrow wooden gangplank runs from the island out to a rectangular floating platform of planks and lattice &mdash; the bathing-and-dance pavilion of La Grenouill&egrave;re itself, the floating caf&eacute; where everyone is hanging out. Monet paints the platform and the island as broad slabs of olive green and warm gray, no fussy detail, the planking suggested by horizontal bands rather than drawn board-by-board. The whole pavilion is a stage; the people on it are the cast.
      </p>

      <SectionHeader accent={accent} label="The cast" title="Day-trippers as silhouettes" />
      <p style={proseStyle}>
        And the cast is not painted as people. On the platform and gangplank &mdash; where, in a proper Salon picture, you&rsquo;d expect to find individuals with hats and faces and stories &mdash; Monet gives you nothing of the kind. Small standing figures in dark dress clothes, day-trippers in their Sunday best, are sketched in as paint-strokes only a few inches high: wedges of dark and pale paint, leaning, clustering, gesturing, with <strong>no faces</strong> at all. You can read postures and body language, who&rsquo;s pausing for a drink and who&rsquo;s heading for the gangplank, the way you read a crowd at a distance. But not one of them has eyes you can find, not one has a hat brim drawn in. They are <em>silhouettes</em>, brilliantly placed and deliberately left that way &mdash; what a crowd actually looks like across a sunlit river from forty feet off, not what crowds look like in Salon paintings.
      </p>

      <SectionHeader accent={accent} label="Boats and bathers" title="Heavy dark wedges, and figures in the water on the left" />
      <p style={proseStyle}>
        Sweep to the lower left, in close. Along the riverbank in the foreground a knot of <strong>rowboats and skiffs</strong> are tied up, prow-out, painted as tilted dark wedges with pale ribs &mdash; long-bellied wooden river boats, the kind you&rsquo;d rent for the afternoon for a few sous. Monet renders them as solid dark masses with little pale highlights along the gunwale (the boat&rsquo;s upper edge) catching the light. They are the picture&rsquo;s heaviest, darkest paint &mdash; anchoring the corner.
      </p>
      <p style={proseStyle}>
        Now look further out, into the water at the LEFT side of the canvas, in the middle distance just past the boats and over toward the pavilion. There &mdash; half-immersed in the river &mdash; are the <strong>bathers</strong>: a small cluster of men and women in white or dark shirts, each sketched as a few broken brushstrokes. They have no faces either. They aren&rsquo;t posed; they&rsquo;re standing waist-deep in the river on a hot day, painted with the same loose dabs Monet uses for the boats and the trees. (You will sometimes see captions place them in the right foreground; they&rsquo;re not there &mdash; they are small figures in the <em>water on the left</em>, set well back from the bank, and easy to miss if you&rsquo;re scanning for a tableau-style group portrait.) That&rsquo;s the giveaway: in this picture, <em>people are not a special category of paint</em>. A bather is just another thing the eye catches in the dazzle.
      </p>

      <SectionHeader accent={accent} label="The trees" title="No sky, only foliage and the bounce off the water" />
      <p style={proseStyle}>
        Above all that, filling the upper third, are the <strong>trees</strong> on the far bank &mdash; dense summer foliage in unblended greens and yellow-greens, with dapples of warm light and pockets of dark shadow stitched into them. There is essentially no sky visible. The picture&rsquo;s light isn&rsquo;t coming down out of a band of blue at the top; it&rsquo;s bouncing off the water at the bottom. The sun is high and slightly off to the upper left &mdash; you can tell by the way the pavilion casts its clear dark reflection beneath it. The whole palette is high-contrast: saturated olive greens, slate blue, white, warm ochre, dark brown &mdash; not the pastel haze the late Impressionist work would shade into. Full midsummer color, dropped onto the canvas in separate touches.
      </p>
    </article>
  )
}

function GreBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The four breaks" title="What La Grenouill&egrave;re actually opened" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        o what did <em>La Grenouill&egrave;re</em> break open? Four things, mainly, and they&rsquo;re worth taking one at a time, because together they&rsquo;re the whole quiet argument of what would later be named Impressionism &mdash; and each one is sitting right there on the Met&rsquo;s canvas, in paint.
      </p>

      <SectionHeader accent={accent} label="One" title="The sketch is the painting" />
      <p style={proseStyle}>
        <strong>One: the sketch is the painting.</strong> The biggest rule this picture breaks is the one that ran the entire industry &mdash; the rule that says a real painting (<em>tableau</em>) is something you finish smooth and slow back in the studio, and a sketch made outdoors (<em>pochade</em>) is the cheap practice piece you toss out afterward. Monet thought he was making pochades that summer; the letter to Bazille proves it. But what he and Renoir actually made, in front of the river, was a <em>finished</em> picture in pochade form &mdash; fast, loose, on-the-spot, signed <em>Claude Monet 69</em>, and held by its own painter as a complete object even as he kept calling it a sketch. The status flipped under their feet. The picture you can see in the Met today, with the choppy horizontal water-strokes left visibly as separate marks, is <em>being shown to you finished in exactly the state a previous generation would have called unfinished</em>. The roughness isn&rsquo;t an accident. It&rsquo;s the message. The slow polish would have killed the dazzle, so they skipped the slow polish. The &ldquo;bad sketch&rdquo; is the work.
      </p>

      <SectionHeader accent={accent} label="Two" title="Paint that reads as moving water" />
      <p style={proseStyle}>
        <strong>Two: paint that reads as moving water.</strong> The water is the technical headline, and the proof that broken color found its perfect subject here. Look at it: slate blue and emerald and white and ochre slashed across the surface in short, separate, mostly-horizontal jabs. Stand close and you see only the strokes &mdash; pure colors next to each other, not blended. Step back and your eye does the mixing on its own, and <em>the water moves</em>. That illusion of movement isn&rsquo;t a trick of fancy drawing; it&rsquo;s a physical property of unmixed paint laid down in separate marks, matching the way the painters worked (in separate touches) to the way the actual water surface was behaving (in separate tilted facets each reflecting differently). Painting could now <em>do</em> the riverbank in a way no smooth-blended tableau ever had. That is the seed of nearly everything Monet would spend the rest of his life on &mdash; the <em>Water Lilies</em>, the haystacks, the cathedrals, the long Thames series. The lily ponds at Giverny are a long way down this same road, and the road starts here.
      </p>

      <SectionHeader accent={accent} label="Three" title="Figures as marks" />
      <p style={proseStyle}>
        <strong>Three: figures as marks.</strong> A proper tableau gave you faces &mdash; even a crowd scene drew the foreground figures with enough detail to know who was who. Monet does the opposite: day-trippers as silhouettes and dabs, bathers as broken brushstrokes, faces nowhere to be found. The argument is the same as the one about water &mdash; he is painting what the eye actually gets across a river of glare on a hot day, not what the mind knows is there. You don&rsquo;t see your fellow Sunday-tripper&rsquo;s expression from forty feet across a sunlit pavilion; you see a wedge of dark suit and a posture. Monet paints the wedge. That decision will scale up later, in whole crowds of Impressionist boulevards, dance halls, racecourses, and caf&eacute;s, where the marks of the brush do the work of human bodies. It is first deployed at full strength right here.
      </p>

      <SectionHeader accent={accent} label="Four" title="A working-class subject worth a serious painting" />
      <p style={proseStyle}>
        <strong>Four: a working-class subject treated as worth a serious painting.</strong> A Salon-grade Seine picture in 1869 would have been a noble river scene &mdash; boatmen, mythological figures, maybe a tall poetic willow on a calm bank. Monet pointed his canvas at a rowdy floating caf&eacute;, full of clerks and bathing girls and Sunday-trippers in cheap dress clothes, and treated <em>that</em> as worth a real painting. The Frog Pond was almost a punchline of a subject for a serious artist &mdash; and he made it the subject. That choice belongs to a bigger conversation already running in Paris: the poet <strong>Charles Baudelaire</strong> and the painter <strong>&Eacute;douard Manet</strong> had been pushing for a decade the idea that the painter&rsquo;s true job was to paint <strong>modern life</strong> &mdash; the present-tense, here-and-now, city-and-suburb world, including the parts that were not noble or eternal. La Grenouill&egrave;re is the Seine-resort wing of that program, planted on a wooden gangplank above the river.
      </p>

      <SectionHeader accent={accent} label="A method, not a movement yet" title="The name came later. The picture came first." />
      <p style={proseStyle}>
        Put those four together and what you have is, in 1869, <em>a working method</em>. Not a fully-formed movement, not yet &mdash; the word &ldquo;Impressionism&rdquo; wouldn&rsquo;t exist for five more years, and that name would land on a different Monet picture (a dawn over the harbor at Le Havre, painted in 1872) at a critic&rsquo;s mocking review of an 1874 exhibition. But the <em>method</em> &mdash; broken color, plein air, sketch-as-finished-painting, modern subjects, figures and reflections as marks &mdash; is on the canvas at the Met. It is not the day Impressionism was born; you cannot point at any one day for that. But it is one of the moments where the future method first shows up, in paint, in front of you, as a working solution to a problem two friends were thinking out loud about together on the bank of a river one slow summer. The name came later. The picture came first.
      </p>
    </article>
  )
}

function GreAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The quiet decades" title="A picture nobody much noticed at first" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or a picture that ended up doing all that, <em>La Grenouill&egrave;re</em> spent most of its first three decades in nobody&rsquo;s spotlight. Monet did not show it at the 1874 First Impressionist Exhibition (a persistent legend says he did; the museum&rsquo;s catalogue does not confirm it and you should treat any &ldquo;Grenouill&egrave;re was at the 1874 show&rdquo; claim with skepticism). It did not appear at any other major Impressionist show in the years when it would have mattered most for Monet&rsquo;s career. It mostly sat. Where, exactly, gets a little hard to pin down, which is appropriate for a sketch its own painter once dismissed as a bad one.
      </p>

      <SectionHeader accent={accent} label="From Manet to Mme Manet" title="A friend buys it; his widow inherits it" />
      <p style={proseStyle}>
        The first owner the museum tentatively names is, of all people, <strong>&Eacute;douard Manet</strong> (1832&ndash;1883) &mdash; the older Paris painter whose <em>Olympia</em> and <em>Le D&eacute;jeuner sur l&rsquo;herbe</em> had scandalized the Salon in the 1860s and made him the unofficial elder of the modern-life painters. Manet was Monet&rsquo;s friend and informal patron and occasionally bought a friend&rsquo;s canvas off the easel to keep the rent paid. Manet&rsquo;s role here is uncertain &mdash; the Met&rsquo;s catalogue says &ldquo;possibly&rdquo; his &mdash; but it fits the story: Monet was broke that summer, broke the next year too, and Manet was the kind of friend who quietly helped. From Manet, the picture seems to have passed to his widow <strong>Suzanne Manet</strong> (1829&ndash;1906) &mdash; Suzanne Leenhoff, the Dutch piano teacher who had taught &Eacute;douard and his brothers as boys and quietly married &Eacute;douard in 1863. Mme Manet inherited her husband&rsquo;s stock of paintings after his death in 1883. From her, <em>La Grenouill&egrave;re</em> appears to have moved to <strong>Durand-Ruel</strong> &mdash; the great Paris dealer who became the Impressionists&rsquo; agent and lifeline &mdash; possibly bought from her in 1886, certainly in Durand-Ruel&rsquo;s stock by 1891.
      </p>

      <SectionHeader accent={accent} label="To Fifth Avenue" title="The Havemeyers buy it, the Met inherits it" />
      <p style={proseStyle}>
        Durand-Ruel is the hinge of this story, because Durand-Ruel had a new market in mind. By the 1890s American collectors had begun to discover the Impressionists in earnest, and Durand-Ruel was selling them work as fast as he could supply it. On <strong>27 September 1897</strong>, <em>La Grenouill&egrave;re</em> sold from Durand-Ruel&rsquo;s stock for <strong>12,500 francs</strong> to <strong>H. O. Havemeyer</strong> &mdash; Henry Osborne Havemeyer, the New York sugar-refining magnate, and his wife <strong>Louisine Havemeyer</strong>, who together were assembling one of the great American art collections of the era. (Louisine in particular was the eye and the engine of the collection; she had been buying Impressionists since the 1870s, when she was still in her twenties and the painters were nobodies.) The painting went to New York. It sat in the Havemeyers&rsquo; Fifth Avenue mansion for the next thirty-odd years, alongside Manets and Degases and Cassatts and El Grecos. When Louisine died in 1929, she left the entire collection to the Metropolitan Museum of Art &mdash; the <strong>Havemeyer Bequest</strong> of 1929, one of the most generous single gifts in the museum&rsquo;s history &mdash; and <em>La Grenouill&egrave;re</em> (accession number <strong>29.100.112</strong>) joined the Met&rsquo;s permanent collection. It has been there ever since.
      </p>

      <SectionHeader accent={accent} label="The lost tableau" title="What the Salon rejected, the war finished" />
      <p style={proseStyle}>
        Meanwhile, what Monet himself thought was the <em>real</em> picture &mdash; the larger, finished tableau he had told Bazille about in his September 1869 letter &mdash; went the other way. Monet did work it up, did submit it to the <strong>Salon of 1870</strong>, and the Salon <strong>turned it down</strong>. That rejected canvas passed eventually into the <strong>Arnhold collection</strong> in Berlin, the great pre-war collection assembled by the banker Eduard Arnhold; when the Nazis broke that collection apart during the Second World War, the painting <strong>vanished</strong>, almost certainly destroyed. The tableau Monet had dreamed of, that the official system had refused, that the next century&rsquo;s war had finally killed &mdash; is gone. The pochade is famous.
      </p>

      <SectionHeader accent={accent} label="Three transcripts" title="The other canvases from the same summer" />
      <p style={proseStyle}>
        That summer&rsquo;s work in fact survives in more than two canvases. Renoir&rsquo;s twin &mdash; his version of nearly the same view, painted the same summer from a slightly different vantage on the same bank, set up next to Monet&rsquo;s easel through that long warm season of work &mdash; went on its own journey and ended up at the <strong>Nationalmuseum</strong> in Stockholm. And a second small Monet from the same summer, <em>Bathers at La Grenouill&egrave;re</em> &mdash; focused tighter on the bathing pontoon and the figures in the water &mdash; is at the <strong>National Gallery in London</strong> today. Read in that company, the Met picture is not a one-off; it is one of at least three sibling pochades the two friends pulled off the same bank that summer, talking to each other across their easels. There is no master version and no copy. They were the joint product of two painters thinking through the same problem in real time, in the same place, day after day. Treat them like a conversation that happened to leave three transcripts.
      </p>
      <p style={proseStyle}>
        So the painting you can stand in front of today at the Met, the small dazzling canvas of the Frog Pond, is a painting its own painter once thought was a scratch &mdash; a sketch toward a finished picture he actually made, submitted, lost the Salon over, and lost again to a war. It is a quiet joke at the expense of the tableau-pochade hierarchy that the 19th-century art world ran on. The big polished tableau is dust. The bad sketch named the future. Monet would spend the next sixty years painting Seine surfaces and lily pads and cathedrals and London fog with the method he and Renoir worked out on a wooden platform on the Frog Pond, across the summer of 1869. The pochade kept its strokes visible. It&rsquo;s still moving.
      </p>
    </article>
  )
}

// Bal du moulin de la Galette (Renoir, 1876) — Mg… ───────
function MgMontmartre({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Montmartre · 1876" title="Sunday at the windmill" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icture a hill on the north edge of Paris, the kind of hill you climb on a Sunday afternoon when you want to get out of the city without leaving it. At the top sits a working windmill &mdash; an actual mill, with sails &mdash; and tucked beside it, in an open-air garden ringed with trees, hundreds of young people are dancing. Round paper-globe lanterns hang in the branches overhead, strung on wires between the trees, not yet lit because it is still daylight. The band is playing. The wine is cheap. The house specialty &mdash; the <strong>galette</strong>, a flat round biscuit-cake baked from the mill&rsquo;s own flour and sold with a glass of milk for almost nothing &mdash; is laid out at the counter. The crowd is mostly working-class: laundresses, seamstresses, clerks, students, the sons and daughters of the carpenters and stonemasons who live on the hill. Mixed in among them is a thin scattering of broke young painters from the neighborhood, watching.
      </p>
      <p style={proseStyle}>
        This is <strong>Montmartre</strong> in 1876. Not yet the clich&eacute; tourist Montmartre of Sacr&eacute;-C&oelig;ur and accordion players &mdash; the big white basilica at the top of the hill hasn&rsquo;t been built yet &mdash; but the real working Montmartre, still half a village, only recently absorbed into the city itself. Paris had eaten its surrounding villages in 1860, swallowing Montmartre and a clutch of other communes into its expanded city limits, and the hill was now technically the <strong>18th arrondissement</strong> (one of the twenty numbered districts the new Paris was divided into, spiraling out from the center like a snail shell). Technically inside Paris; in practice still its own place. Working windmills still ground flour up there. Small farms still grew cabbages. The rents were cheap. The light was good. Painters lived there because painters could afford to.
      </p>

      <SectionHeader accent={accent} label="The guinguette" title="The Debrays&rsquo; dance garden" />
      <p style={proseStyle}>
        The dance garden in question was called the <strong>Moulin de la Galette</strong> &mdash; literally &ldquo;the windmill of the galette&rdquo; &mdash; and it was a real, working family business that the <strong>Debray family</strong>, the local millers, had turned into something more profitable than flour alone. The Debrays in fact owned <strong>two</strong> windmills on this stretch of the Butte: the older <strong>Blute-Fin</strong> (built 1622, the tall sailed mill that you can see in the painting itself), and the <strong>Radet</strong> (built 1717, a few yards downhill). They kept milling, and they spun the site into a <em>guinguette</em> &mdash; French for &ldquo;open-air caf&eacute; and dance hall.&rdquo; (The word originally meant a cheap suburban tavern selling the bad local wine of the same name.) A <em>guinguette</em> was a Sunday-afternoon institution: not a nightclub, not a salon, but the cheap outdoor place ordinary Parisians went to drink wine, eat the galette the place had been named after, and dance to a small band, in daylight, in a garden, with their friends. The Debrays&rsquo; was the most famous of them.
      </p>

      <SectionHeader accent={accent} label="A new leisure" title="Why Sunday afternoons existed at all" />
      <p style={proseStyle}>
        Sunday afternoons mattered, and here is the part that&rsquo;s easy to skate past: this whole world of cheap mass leisure was new. Two changes had only just made it possible. First, the <strong>railways</strong> &mdash; the great new train lines fanning out from the central Paris stations across the 1850s and 1860s &mdash; had stitched the city together internally and pulled the suburbs in close, turning a Sunday trip from a logistical project into a casual outing. Second, and more quietly, the working day was shifting: by the 1870s the French half-day Saturday and the free Sunday were becoming a normal expectation for clerks and shop assistants in Paris, even if factory workers were still some way from it. A clerk in 1830 worked from dark to dark. A clerk in 1876 had a Sunday off, a few francs in his pocket, and a railway-and-omnibus network that would put him at the bottom of the Butte Montmartre by lunchtime. From there it was a walk uphill. Leisure, in the modern sense &mdash; the idea that ordinary people had whole days that were their own &mdash; was being invented in real time, on the ground, in places exactly like this one.
      </p>

      <SectionHeader accent={accent} label="Enter the painter" title="Renoir, 35 and broke" />
      <p style={proseStyle}>
        Now enter the painter. <strong>Pierre-Auguste Renoir</strong> (1841&ndash;1919) was 35 years old in 1876 and broke. Don&rsquo;t write him in your head as the celebrated Renoir of the late portraits and the warm-honey bathers; in 1876 he was a struggling thirtysomething painter whose work the official annual exhibition kept hanging badly or rejecting outright. His main patron was a young fellow painter named <strong>Gustave Caillebotte</strong> (1848&ndash;1894), independently wealthy and quietly buying his friends&rsquo; work to keep them in paint and rent. Renoir had been painting in and around Montmartre for years, but in 1875 he made a deliberate move. He rented a studio nearby on the <strong>rue Cortot</strong>, a small street just downhill from the Moulin de la Galette, and he rented it on purpose &mdash; to work on a single big picture about the dance garden up the hill.
      </p>
      <p style={proseStyle}>
        That picture is the one we&rsquo;re about to look at. It is over five feet wide &mdash; almost six &mdash; and it has named friends of Renoir&rsquo;s in it, sitting at a table, dancing in the crowd. The 35-year-old broke painter is going to put the windmill, the lanterns, the pink-and-blue dresses, the dappled afternoon sun, and the whole new Sunday of the new city on a canvas the size that the establishment reserved for the deaths of kings. Hold that scale in mind. It&rsquo;s the quiet provocation of the entire picture.
      </p>
    </article>
  )
}

function MgMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="History-painting scale for a dance" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the canvas, because the first fact about this picture is its size.
      </p>
      <p style={proseStyle}>
        <em>Bal du moulin de la Galette</em> is <strong>about 4 ft 3&frac34; in tall by 5 ft 9 in wide</strong>. That doesn&rsquo;t sound enormous on the page; it is enormous in a room. Imagine a canvas wider than a tall person is tall, mounted on a stretcher, then imagine carrying that out of a small Paris studio and back. Now imagine what such a canvas was <em>for</em> by the rules of the time. A canvas this big was a <strong>history painting</strong> &mdash; the grandest category of subject in the academic hierarchy: ancient battles, the death of Caesar, mythology, biblical drama, the great noble themes. Sunday afternoons did not get six feet of canvas. Renoir&rsquo;s first decision, before he ever loaded a brush, was to take history-painting scale and aim it at a dance.
      </p>
      <p style={proseStyle}>
        And not just any dance. Look again at who is on the floor. These are not aristocrats and not the haute-bourgeoisie of the new Paris boulevards; these are <strong>seamstresses, milliners, laundresses, shop clerks, and the journeymen of Montmartre&rsquo;s workshops</strong>, in their cheap Sunday best, holding each other under a working mill on their one day off. The provocation isn&rsquo;t only that Renoir scaled up a leisure subject. It&rsquo;s that he scaled up the leisure of a class that history painting had never depicted at six feet wide. Salon canvases of this size went to gods, generals, and kings. Renoir gave the size to a working girl in a striped dress and her partner in a straw hat. That substitution is the political content of the picture, and it&rsquo;s deliberate.
      </p>

      <SectionHeader accent={accent} label="Plein air" title="Painting in the garden, finishing in the studio" />
      <p style={proseStyle}>
        The second decision was where to work. He rented his small studio on <strong>rue Cortot</strong> in Montmartre in 1875 specifically so the dance garden would be a short walk away. Then he did something the <strong>plein air</strong> painters &mdash; <em>plein air</em> is French for &ldquo;open air,&rdquo; meaning painting outdoors in front of the real light rather than from sketches and memory in a studio &mdash; were starting to do as a method: he carried his canvas, his palette, and his easel up the hill on Sunday afternoons and painted at the <em>guinguette</em> itself, on the spot, with the dance going on around him. Across weeks of Sundays, sitting in the garden under the trees, he worked from life: real faces, real hats, the real fall of leaf-shadow on real shoulders. (Be careful with the legend here. The romantic story that he painted the whole thing <em>en plein air</em> in the garden, every brushstroke laid down outdoors, is partly true and partly tidied up. He painted <em>on site</em> over many sessions; he carried the canvas back to the rue Cortot studio and finished it indoors. &ldquo;Painted partly on site, finished in the studio&rdquo; is the honest phrasing. A big crowd scene with dozens of figures was never going to be wholly resolved in a noisy garden full of dancers.)
      </p>

      <SectionHeader accent={accent} label="The cast" title="Real friends, named in the corners" />
      <p style={proseStyle}>
        The third decision was the cast. Renoir didn&rsquo;t try to paint anonymous strangers; he painted the people he knew. The figures sitting at the small round caf&eacute; table in the front-right of the picture are his friends, named in his own and others&rsquo; accounts of the work. The man in the dark suit and straw boater (the stiff flat-brimmed summer hat), seen in profile facing right with his arm draped over the chair, is the painter <strong>Norbert Goeneutte</strong> (some sources read this seated figure instead as another painter, <strong>Pierre-Franc Lamy</strong> &mdash; they look similar in this group, and the identification isn&rsquo;t airtight). Opposite him, facing us and leaning forward toward the young woman, is the writer <strong>Georges Rivi&egrave;re</strong>, Renoir&rsquo;s friend and the chronicler who would later write up this whole circle. The young woman herself, leaning back against the bench in a striped pink-and-blue dress, is <strong>Estelle Samary</strong>, a young model from the neighborhood. And in the dancing crowd around them are more of the regulars &mdash; the painters <strong>Henri Gervex</strong>, <strong>Fr&eacute;d&eacute;ric Cordey</strong>, <strong>Pierre-Franc Lamy</strong>, the journalist <strong>Paul Lhote</strong>, and at lower left, a favorite Renoir model named <strong>Margot</strong> (Marguerite Legrand), in another striped pink-and-blue dress, dancing with a Cuban-painter friend called <strong>Pedro Vidal de Solares y C&aacute;rdenas</strong>. Most of the dancing crowd in the middle distance is <em>not</em> individually named &mdash; it&rsquo;s a soft crowd, faceless on purpose &mdash; but the front of the picture is a portrait of Renoir&rsquo;s actual Sunday afternoons.
      </p>

      <SectionHeader accent={accent} label="Dappled light" title="Painting the spots themselves" />
      <p style={proseStyle}>
        And now the trick. The hardest problem in this painting, the one Renoir solved on the spot in front of the dancers and that nobody had quite solved before him, is <strong>dappled light</strong>. Dappled light is what happens when sunlight comes down through leaves and branches: the leaves break the light up into discrete round patches, so that what falls on the people below isn&rsquo;t a smooth wash of sun but a scattered constellation of bright spots, with cool shadow in between. Stand under a tree on a sunny afternoon and look at your own arm and you&rsquo;ll see it &mdash; small round coins of warm light, edges soft, all over you. The traditional way to paint this in 1876 was to fudge it: a general golden glow over everything, the shadows toned down, the spots ironed out. Renoir refused. He painted the <strong>spots themselves</strong>, as discrete dabs of warm pink, lilac, pale violet, and straw-yellow, sitting visibly on top of the cool gray-blue of the shadow. He matched the bouncing color of the real garden &mdash; not the <em>idea</em> of sunlight, but the <em>actual</em> messy patchwork it makes on a jacket.
      </p>
      <p style={proseStyle}>
        Look at the man in the dark suit in the lower foreground, the one with his back partly to us. There is a clear <strong>pink-violet patch on his back</strong> that is the same color as nothing else in the picture except other sunspots &mdash; it doesn&rsquo;t match his suit, it doesn&rsquo;t match the wall behind him, it doesn&rsquo;t match his neighbor&rsquo;s hat. It&rsquo;s a discrete dab of color, sitting on the dark cloth, that reads from across a room as a coin of afternoon sun on the man&rsquo;s shoulder. Up close it looks like a bizarre mauve smear. Across the room it looks like sunshine through a tree. That mismatch &mdash; paint that is doing one thing close up and a completely different thing at distance &mdash; is the engine of the whole picture.
      </p>

      <SectionHeader accent={accent} label="The palette" title="No pure white, no hard black" />
      <p style={proseStyle}>
        The <strong>palette</strong> is the other half of the answer. Look at what isn&rsquo;t there: there is almost no pure white anywhere on the canvas, and there are almost no hard black shadows. The dresses that read as white are actually pale pink, lilac, and pale blue. The &ldquo;black&rdquo; suits are warm grays and soft, slightly-purpled blacks. The shadows on the ground are warm, not cold. By keeping pure white and pure black out of the picture, Renoir lets every color <em>belong</em> to the warm afternoon air &mdash; there are no jarring extremes pulling the eye out of the garden. Everything is pitched in the warm middle, which is exactly the register of a real sunlit Sunday afternoon at four o&rsquo;clock. Polish has been refused on purpose; the soft, blurred edges of dancers and faces are the trick that says &ldquo;this is what a crowded garden in moving light actually looks like, not the catalogue of who is wearing what.&rdquo;
      </p>
      <p style={proseStyle}>
        He signed it lower right: <em>Renoir. 76.</em>
      </p>
    </article>
  )
}

function MgLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="At the canvas" title="Five feet of Sunday afternoon" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of the canvas. The first thing that hits you is not any single figure but the <strong>warm air</strong> of the whole thing &mdash; a wash of pinks, lilacs, and pale blues, pricked all over with bright round coins of sunlight, with the soft suggestion of a crowd dancing inside it. Then your eye starts finding things. Slow down and find them on purpose, because the picture is busy and a casual glance reads it as a happy blur.
      </p>

      <SectionHeader accent={accent} label="Middle ground" title="A couple dancing at the heart" />
      <p style={proseStyle}>
        Start where the painting wants you to start, which is the <strong>middle ground</strong>, just behind the seated friends &mdash; the area roughly at the center of the canvas, slightly to the left. A <strong>couple is dancing</strong>. The woman has her back partly turned to us, in a pale pink dress; her partner faces her. They are not the loudest figures in the picture (Renoir is too good for that obvious move), but they are the structural anchor: the painting is <em>about</em> dancing, and there, almost at dead center, is a couple dancing. (Don&rsquo;t try to name them &mdash; Renoir&rsquo;s named friends are at the table and at lower left; this central couple is part of the soft crowd, deliberately unspecified.) Around them, fanning out into the middle distance, is the <strong>sea of dancers</strong> &mdash; a crowd of couples, painted as soft blurs with no facial detail, a wash of bowler hats and pale dresses receding into the garden. A few of the women&rsquo;s dresses pick up pure pink and pure pale-blue strokes that read as the strongest, freshest colors in the whole picture &mdash; bright coins of saturated color floating in the warm haze.
      </p>

      <SectionHeader accent={accent} label="Front right" title="The table of friends, in sharp focus" />
      <p style={proseStyle}>
        Drop your eye now to the <strong>front right</strong>, the lower-right corner, where the picture pulls into sharp focus. Here is the table group: a small <strong>round caf&eacute; table</strong> with a <strong>green wine bottle</strong> and <strong>glasses</strong>, three of Renoir&rsquo;s friends sitting around it, and Estelle Samary leaning back against the bench in her striped pink-and-blue dress. The painter Norbert Goeneutte is in profile in his boater, his arm draped over the chair. The writer Georges Rivi&egrave;re faces us, leaning forward toward Estelle. These three are painted with markedly more definition than the dancing crowd behind them &mdash; sharper edges, more individual feature, more weight. They are the front-of-house, the picture&rsquo;s pinned-down corner, the figures Renoir wants you to recognize as specific people, before the rest of the world dissolves into atmosphere.
      </p>

      <SectionHeader accent={accent} label="Front left" title="Margot, Don Pedro, and the sunspot" />
      <p style={proseStyle}>
        Now drift to the <strong>front left</strong>. Lower-left corner: another figure group, more loosely painted. A young woman is dancing &mdash; this is <strong>Margot</strong>, Renoir&rsquo;s model &mdash; with her Cuban-painter friend Don Pedro. She&rsquo;s in a striped pink-and-blue dress (yes, two pink-and-blue striped dresses, one seated and one dancing &mdash; a rhyme across the front of the picture). Just to the right of them, a man in a dark suit and a straw boater leans into the picture with his back partly to us, a young woman beside him. This is the dark-jacketed man with the famous <strong>pink-violet sunspot</strong> on his back. Find it. It looks utterly wrong as a piece of cloth color and completely right as a coin of sunlight through leaves.
      </p>

      <SectionHeader accent={accent} label="Above" title="Lanterns waiting for nightfall" />
      <p style={proseStyle}>
        Lift your eye now to the <strong>upper third of the canvas</strong>, above the heads. This is the <strong>canopy of trees</strong> &mdash; acacias, by the look of them &mdash; closing over the garden. <strong>Round paper-globe lanterns</strong> are strung overhead between the trees on wires, the kind that get lit at night for dancing into the evening. They are <strong>unlit</strong>: it is still daylight, mid-afternoon. They sit in the leaves as cool pale spheres, decorative now, working later. (These lanterns are the <em>only</em> light fixtures on the canvas &mdash; no gas lamps on posts, no standing fixtures, just paper globes strung overhead. The painting is doing one specific lighting effect: sunlight through leaves, with the lanterns as a quiet reminder that this place is set up to keep going after the sun goes down.) Light falls <em>through</em> the leaves in scattered round patches all over the canvas, and this is the dappled light from the last chapter &mdash; once you start seeing it, you can&rsquo;t stop. It&rsquo;s on the man&rsquo;s back. It&rsquo;s on the women&rsquo;s hats. It&rsquo;s on the wood of the bench. It&rsquo;s on the ground between feet. It&rsquo;s everywhere, the warm pale-violet and pink dabs of it, sitting on top of cool gray-blue shadow.
      </p>

      <SectionHeader accent={accent} label="Edges" title="The deliberate blur" />
      <p style={proseStyle}>
        One more thing to find. Look at how Renoir paints <strong>edges</strong>. Almost nothing in the painting has a hard, drawn edge. Faces are soft. Dresses bleed into the air around them. The far crowd is dissolved into atmosphere. The whole canvas has a slight, beautiful, deliberate <strong>out-of-focus quality</strong>, the way your own vision works at a crowded garden in shifting light: you focus on one face at a time, and the rest blurs at the edges of your attention. Renoir painted the way the eye really sees a moving crowd, not the way the mind catalogues it.
      </p>
      <p style={proseStyle}>
        Step back. The whole picture works as a wedge: sharply-drawn named friends at the front-right corner, softening through Margot&rsquo;s dancing group at the front-left, dissolving into the anonymous warm crowd in the middle distance, vanishing into the lantern-hung canopy of trees at the top. Your eye starts pinned to the named people, drifts inward into the dance, and is finally let go up into the soft canopy. The whole composition is a slow exhale from foreground reality into background atmosphere &mdash; a piece of crowd painting organized like a piece of music, six feet of Sunday afternoon arranged with the structural rigor of an oratorio and the surface of a casual snapshot.
      </p>
    </article>
  )
}

function MgShow({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="April 1877" title="The third Impressionist exhibition" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>April 1877</strong>, the painting went on the wall.
      </p>
      <p style={proseStyle}>
        The Impressionists were by this point already three years into running their own counter-shows to the <strong>Salon</strong> &mdash; the state-run annual exhibition that was effectively the only door into a French painting career, with a jury of conservative academics deciding who got in. (The 1874 founding story &mdash; the Nadar studio, the Monet sunrise, the critic Louis Leroy turning &ldquo;Impressionists&rdquo; into a sneering label that the painters then wore on purpose &mdash; belongs to the movement read; this picture sits inside its third year, not its first.) By 1877 they were calling themselves Impressionists on purpose, and they were holding their <strong>third</strong> exhibition.
      </p>
      <p style={proseStyle}>
        That third exhibition opened in <strong>April 1877</strong> in a rented apartment at <strong>6 rue Le Peletier</strong> in Paris, and <em>Bal du moulin de la Galette</em> was one of its centerpieces. Renoir hung it as one of his major entries. (Mark this carefully, because the older story used to say the painting &ldquo;first showed at the 1877 Salon.&rdquo; That is wrong, and it gets repeated even in respectable books, so it&rsquo;s worth flagging. The picture was at the breakaway <strong>3rd Impressionist Exhibition</strong> of April 1877 &mdash; not the official Salon, the establishment show whose jury had been giving the Impressionists a hard time for years. Different show, different room, different politics.)
      </p>

      <SectionHeader accent={accent} label="The reception" title="Half scorn, half delight" />
      <p style={proseStyle}>
        The reception was, predictably, split. Some critics were scornful. The picture was too unfinished, too loose, the figures too blurred, the light too strange. The discrete pink-violet sunspots on dark suits, which we just spent a chapter admiring, struck a number of reviewers as plain wrong: paint dabs in colors no cloth ever was, smeared on cloth where no light could plausibly fall. (The complaint isn&rsquo;t completely silly. Up close, those spots <em>do</em> look like errors. You have to step back to see them resolve into sunshine. Some critics didn&rsquo;t step back.) Other reviewers were delighted. <strong>Georges Rivi&egrave;re</strong> &mdash; the writer leaning forward in the front-right corner of the picture itself, Renoir&rsquo;s friend and built-in PR department &mdash; wrote a glowing defense in his short-lived journal <em>L&rsquo;Impressionniste</em>, calling the painting a page out of real life and praising exactly the dappled light and atmospheric softness that the hostile critics were calling sloppy. The split &mdash; half scorn, half delight &mdash; was the standard temperature of any Impressionist work in the 1870s, and <em>Bal du moulin de la Galette</em> sat near the center of the year&rsquo;s argument.
      </p>

      <SectionHeader accent={accent} label="1879" title="Caillebotte writes a check" />
      <p style={proseStyle}>
        Now the part of the story that matters longest. The painting did not sell on the floor of the exhibition. Renoir was still broke after the show closed, still struggling for income, still leaning on the small group of patrons who kept buying his work. Two years later, in <strong>1879</strong>, <strong>Gustave Caillebotte</strong> &mdash; the wealthy young engineer-painter we met in Chapter 1, Renoir&rsquo;s friend and quiet patron &mdash; bought <em>Bal du moulin de la Galette</em> directly from him. The price isn&rsquo;t securely documented, but the meaning of the purchase is. Caillebotte was buying his struggling friend a year of breathing room, and he was assembling, deliberately, a private collection of his Impressionist friends&rsquo; work &mdash; Renoirs, Monets, Pissarros, Sisleys, C&eacute;zannes &mdash; that he intended to give to the French State on his death. He was building the future of the Luxembourg&rsquo;s modern-art collection one canvas at a time, using his own money to drag the Impressionists onto the museum walls that the Salon would never give them.
      </p>
      <p style={proseStyle}>
        It&rsquo;s a key point, and easy to misunderstand. Caillebotte <strong>did not commission</strong> the picture. Renoir made it on his own initiative, hauled his canvas up the hill to the <em>guinguette</em> on his own Sundays, finished it in his own studio, and exhibited it in April 1877. Three years passed. Only <strong>in 1879</strong> did Caillebotte step in and buy the finished, exhibited, already-existing painting from his friend &mdash; a private sale, after the fact, to keep Renoir in rent. Anything that says Caillebotte ordered the picture or paid for it up front is wrong. He was a collector and patron, not a commissioner.
      </p>
      <p style={proseStyle}>
        So at the end of the show&rsquo;s run, this is where the picture stood: hung in a rented apartment in Paris through April 1877, called sloppy by some critics and brilliant by others, then carried home unsold and quietly hung on Renoir&rsquo;s own wall until the day, two years later, when Caillebotte&rsquo;s offer arrived and the painting moved across town to a private collection that already had several of its neighbors. From there &mdash; but here we get ahead of ourselves. The 1879 purchase is the hinge. What it opens onto is the long afterlife in the museums.
      </p>
    </article>
  )
}

function MgAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="February 1894" title="A friend dies in his garden" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        hen Caillebotte died in February <strong>1894</strong>, at the age of 45, he had been quietly preparing for years. He had a will, and the will gave his Impressionist collection to <strong>France</strong>. The death itself was sudden and physical: <strong>pulmonary congestion</strong> &mdash; a sudden, severe fluid build-up in the lungs &mdash; caught him while he was working in his garden at <strong>Petit-Gennevilliers</strong>, the suburban riverside property where he had moved to paint and to grow flowers. He went down in the garden and didn&rsquo;t recover. He was 45.
      </p>
      <p style={proseStyle}>
        That bequest sounds simple. In practice it nearly broke. The state was, at this point in the 1890s, still very much the state of the <strong>Salon</strong> &mdash; of the conservative academic taste that had been rejecting and bad-hanging the Impressionists for two decades. To be handed a free gift of sixty-seven major Impressionist canvases by a young dead collector who insisted, in the will, that they be hung in the national museums was, for the establishment, somewhere between an insult and a public-relations problem. The negotiation dragged for years. The state&rsquo;s representatives haggled over which works it would accept, eventually agreeing in 1894 to take a portion of the bequest (the full story of <em>that</em> fight belongs to the movement read &mdash; it&rsquo;s the big set-piece of the whole institutional history of Impressionism). The Caillebotte bequest, including <em>Bal du moulin de la Galette</em>, was finally accepted and entered the national collections by <strong>1896</strong>.
      </p>

      <SectionHeader accent={accent} label="Luxembourg, Louvre, Jeu de Paume, d&rsquo;Orsay" title="The slow walk across Paris" />
      <p style={proseStyle}>
        Where they put it was the <strong>Mus&eacute;e du Luxembourg</strong> in Paris. The Luxembourg, at the time, was the state&rsquo;s museum of <strong>contemporary art</strong> &mdash; the working museum for living and recently-dead artists, separate from the eternal masterworks at the Louvre across the river. The rule was a kind of waiting room: a work entered the Luxembourg, and then, a decade or so after the artist&rsquo;s death, if its reputation held, it might be &ldquo;consecrated&rdquo; &mdash; promoted across town to the Louvre. <em>Bal du moulin de la Galette</em> went into the Luxembourg in 1896, where it stayed for over thirty years. Renoir died in 1919; in <strong>1929</strong>, ten years after his death and right on the standard schedule, the painting was transferred to the <strong>Louvre</strong>. Consecrated.
      </p>
      <p style={proseStyle}>
        It didn&rsquo;t stay at the Louvre forever. In <strong>1947</strong>, after the upheavals of the Second World War, the Impressionist collection at the Louvre was moved across the Tuileries Gardens into its own dedicated home, the <strong>Jeu de Paume</strong> (an old indoor real-tennis hall, on the corner of the Tuileries, converted into a museum). For nearly forty years the Jeu de Paume was where you went in Paris to see Impressionism. <em>Bal du moulin de la Galette</em> hung there. And then, in <strong>1986</strong>, the French state opened a new museum specifically for 19th-century art &mdash; the <strong>Mus&eacute;e d&rsquo;Orsay</strong>, built inside the magnificent old Beaux-Arts railway station on the left bank of the Seine &mdash; and the entire Impressionist collection moved with it. Renoir&rsquo;s dance has hung there ever since. Its accession number, if you ever want to find it in the d&rsquo;Orsay&rsquo;s catalogue, is <strong>RF 2739</strong>.
      </p>

      <SectionHeader accent={accent} label="The other one" title="A contested smaller version" />
      <p style={proseStyle}>
        Now, an important detail, because it&rsquo;s the one most people get wrong. The painting on the d&rsquo;Orsay wall is <strong>the primary version</strong>, the one we&rsquo;ve been describing through this whole read &mdash; about 4 ft 3&frac34; in by 5 ft 9 in, the one Renoir made in 1876, the one Caillebotte bought in 1879 and left to France in 1894. But there is also a <strong>smaller version</strong>, roughly <strong>2 ft 6&frac34; in by 3 ft 9 in</strong>, of the same composition. Its status is contested. It has been variously catalogued, by different scholars, as (a) Renoir&rsquo;s preparatory study for the big canvas, (b) a later replica painted by Renoir himself, or (c) a copy by another hand. Nobody agrees. Phrase it as the museum world does: &ldquo;a smaller version exists, attributed to Renoir but contested.&rdquo;
      </p>
      <p style={proseStyle}>
        Wherever it came from, the smaller version had its own dramatic afterlife. It eventually entered the great American collection of <strong>John Hay Whitney</strong>, the publisher and ambassador, and on his estate&rsquo;s sale at <strong>Sotheby&rsquo;s New York in May 1990</strong> it sold for <strong>$78.1 million</strong> &mdash; a price that, at the time, was a world record for any painting at auction. The buyer was reported as a private Swiss collection, where the painting has stayed since. <strong>It is not in the Barnes Foundation</strong>, the famous Pennsylvania collection that holds an extraordinary number of Renoirs; the Barnes does not own any version of <em>Bal du moulin de la Galette</em>. That misattribution circulates, especially online, and should be refused on contact.
      </p>

      <SectionHeader accent={accent} label="The arc" title="A six-foot Sunday that never quite ends" />
      <p style={proseStyle}>
        So sit with the arc of this object. A 35-year-old broke painter rents a small studio in Montmartre. For weeks of Sundays in 1876 he carries a canvas the size that history paintings get up the hill to a working-class dance garden under a windmill. He puts his named friends in it, finishes it in the studio, signs it lower right <em>Renoir. 76</em>, and hangs it the next April in a rented apartment on the rue Le Peletier where some critics call it sloppy and one of his friends defends it in print. He carries it home unsold. Two years later another friend writes him a private check that keeps him in paint. That friend dies young, fifteen years after that, struck down in his own garden, and the painting passes to the French state against the state&rsquo;s own reluctance. Then it works its way slowly across the museums of Paris &mdash; Luxembourg, then Louvre, then Jeu de Paume, then the d&rsquo;Orsay, where it has hung since 1986: a six-foot Sunday afternoon at a working-class dance garden, with its pink-violet sunspots and its two pink-and-blue striped dresses and its lanterns waiting to be lit, that never quite ends.
      </p>
    </article>
  )
}

// Paris Street; Rainy Day (Caillebotte, 1877) — Ps… ──────
function PsHaussmann({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris &middot; 1877" title="A city less than a decade old" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand on a Paris street corner in 1877 and almost every direction you look, the city is brand new. The cream-stone apartment building on your right was finished maybe five years ago. The wide pavement under your feet was laid the year before that. The avenue running straight away from you for half a mile, ruler-straight, ending at the cast-iron sheds of a railway station &mdash; that didn&rsquo;t exist when your parents were children. Paris in 1877 is one of the youngest-looking old cities on Earth. The medieval city it replaced has been gone for less than a decade. And the man responsible is not a king, or an architect, or even a Parisian. He is a tall, blunt, much-loathed civil-service prefect named <strong>Georges-Eug&egrave;ne Haussmann</strong> (1809&ndash;1891), and what he did to Paris between 1853 and 1870 is the reason the city you can still walk through today looks the way it does.
      </p>
      <p style={proseStyle}>
        Here is the short version. The emperor <strong>Napoleon III</strong> &mdash; nephew of the famous one, ruler of France 1852&ndash;1870 &mdash; looked at Paris in the early 1850s and saw a problem. The city was medieval. Narrow, twisting lanes. Open sewers. Cholera outbreaks. Tenements stacked five and six stories around courtyards the sun never reached. And, awkwardly, those same crooked little streets had a habit of filling up with revolutionary barricades every twenty years or so &mdash; 1830, 1848 &mdash; because they were impossible to clear with cavalry. Napoleon III had spent his exile years in <strong>London</strong>, which had been modernizing for a generation, and he wanted Paris to do the same. So in 1853 he put Haussmann, a career bureaucrat with a flair for ruthless project management, in charge of the largest urban-renewal program in European history. The brief was simple, and it was carried out for seventeen years straight: gut the medieval core, drive long straight <strong>boulevards</strong> (a <em>boulevard</em> is a wide, tree-lined, multi-laned avenue, the wider sibling of an ordinary street) through whatever was in the way, line them with new buildings to a uniform code, and put a new sewer and a new water system underneath.
      </p>

      <SectionHeader accent={accent} label="The look" title="The city as a single coordinated artwork" />
      <p style={proseStyle}>
        The result is what every tourist photo of Paris is secretly a picture of. You know the look without knowing the name. Long axial avenues that hit each other at big star-shaped intersections. Six-story cream limestone apartment blocks, all to roughly the same height (because the regulation said so), with <strong>mansard roofs</strong> &mdash; that distinctive double-pitched gray attic roof, named for an earlier architect, that sits like a square hat on top of every Haussmann block. <strong>Wrought-iron balconies</strong> on the second floor and the fifth, never the others (because the regulation said so). Identical chimneys. Identical window ratios. Block after block of it for miles, with the occasional church steeple or train-station roof poking up to remind you which neighborhood you&rsquo;re actually in. The effect, walking through it, is a city as a single coordinated artwork &mdash; beautiful in a faintly tyrannical way, because <em>one man</em> made all these decisions. Which is exactly what people hated about it at the time, and exactly why it still photographs so well.
      </p>
      <p style={proseStyle}>
        The cost was enormous, in both senses. Roughly <strong>twenty thousand buildings</strong> were demolished. Whole neighborhoods of working-class Parisians were pushed out &mdash; they couldn&rsquo;t afford the new apartments going up in the streets where their old apartments used to be, and they ended up in the cheaper suburbs. The price tag bankrupted the city repeatedly, and in 1870 Haussmann was finally fired for the creative accounting that had kept the project going. A few months later Napoleon III lost a war to Prussia, lost his throne, and the empire that had hired Haussmann collapsed too. But the work was done. The medieval city was gone. The new Paris was &mdash; give or take a few unfinished stretches &mdash; standing.
      </p>

      <SectionHeader accent={accent} label="The intersection" title="Five streets, a wedge, a pale stone block" />
      <p style={proseStyle}>
        Now, the intersection in the picture. Walk west from the center of Paris, cross the river, climb the gentle slope of the right bank, and just east of one of Haussmann&rsquo;s brand-new railway terminals &mdash; the <strong>Gare Saint-Lazare</strong>, the great commuter station that swallowed the western suburbs &mdash; you arrive at a place called the <strong>Place de Dublin</strong>. In 1877 they called it the <strong>Carrefour de Moscou</strong> (<em>carrefour</em> is the French word for an intersection or crossroads). It sits in the <strong>Quartier de l&rsquo;Europe</strong> &mdash; the &ldquo;European Quarter,&rdquo; named because the streets that meet there are all named after European capitals: rue de Moscou (Moscow), rue de Saint-P&eacute;tersbourg (St. Petersburg), rue de Bucarest (Bucharest), and the others. Five streets converge on this one spot. The buildings around it are so new the stone is still pale. The pavement is so new the cobblestones are still nearly level. And rising from the wedge of land between two of those streets &mdash; where rue de Turin and rue de Moscou peel away from each other &mdash; is a single tall <strong>Haussmann apartment block</strong>, narrower at the front than the back, shaped like the prow of a ship, six floors and a mansard, balconies on the regulation floors. The wedge building is still there. You can stand on the Place de Dublin today and see it, more or less unchanged, with a caf&eacute; on the ground floor where Caillebotte painted a doorway.
      </p>
      <p style={proseStyle}>
        This is the setting of the picture. Not &ldquo;a Paris street.&rdquo; A <em>specific</em> Paris street, in the freshest, newest, most aggressively rebuilt neighborhood in the freshest, newest, most aggressively rebuilt city in Europe. The morning after rain. Painted by a man who lived a few blocks away, and who looked at Haussmann&rsquo;s geometry &mdash; the long perspective lines, the uniform fa&ccedil;ades, the wedge &mdash; the way an engineer looks at a good piece of work. Approvingly.
      </p>
    </article>
  )
}

function PsMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The painter" title="An engineer who could afford to paint" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>M</DropCap>
        ost of the Impressionists were broke. That is a thing worth saying out loud, because it shapes how they painted, what they painted, and what they let themselves try. Monet famously begged loans from friends to keep eating. Renoir was thirty-five, unmarried, sleeping in studios. Pissarro had a family to feed and no buyers. A picture had to be a size you could carry up to a buyer&rsquo;s apartment. A canvas had to be a size you could afford to prime. Big canvases cost money the way big anything costs money &mdash; proportional to surface area &mdash; and a Salon-scale history painting on stretched linen could cost more than a month&rsquo;s rent before you&rsquo;d put a single mark on it.
      </p>
      <p style={proseStyle}>
        <strong>Gustave Caillebotte</strong> (1848&ndash;1894) had none of these problems. His father owned a military-textile firm &mdash; he made beds, blankets, and uniforms for the French army, in industrial quantities &mdash; and when the father died in 1874, Gustave inherited at twenty-six. Independently, comfortably, <em>seriously</em> wealthy. The version of him you sometimes see floating around &mdash; &ldquo;Caillebotte, the wealthy amateur&rdquo; &mdash; is wrong on two counts at once. He was wealthy, yes. He was not an amateur. He had trained as a <strong>civil engineer</strong> (a profession devoted to designing roads, bridges, water systems, the unglamorous infrastructure that makes a modern city run), and he painted with the discipline of someone who&rsquo;d been taught to draft straight lines and calculate angles. He was also, increasingly, the financial backbone of the Impressionist movement: when the group&rsquo;s exhibitions needed rent for the hall, somebody to underwrite the catalogue, somebody to buy a Renoir or a Pissarro from the back wall so the painter could pay his butcher, Caillebotte was the somebody. Several of the Impressionist exhibitions happened because he wrote checks for them. Call him an <em>engineer-painter who could afford to paint without selling</em>, and you have the shape of him right.
      </p>

      <SectionHeader accent={accent} label="The canvas" title="History-painting scale on a street corner" />
      <p style={proseStyle}>
        What he did with that freedom, on this particular canvas, was paint very large. <em>Paris Street; Rainy Day</em> is <strong>about 6 ft 11&frac12; in tall by 9 ft 0&frac34; in wide</strong> (the Art Institute of Chicago, which owns it, gives the metric measurement as 212.2 &times; 276.2 cm). For scale: this picture is wider than two refrigerators set side by side, and taller than most doorways. It is <strong>history-painting scale</strong> &mdash; meaning the canvas size that the Paris art establishment reserved for ancient battles, the death of kings, classical myth, and similar serious matters. To paint a <em>contemporary Paris street corner</em> on a canvas this size was a quiet provocation. You could fit a real-life couple on this picture at almost half their actual height. Stand close to it in the gallery and the bourgeois man in his top hat is looking at you from very near his real size.
      </p>
      <p style={proseStyle}>
        Then the question of <em>how</em> he painted it, because this is where the engineer steps to the front. Caillebotte did what almost no other Impressionist would have bothered to do for a street scene: he worked out the <strong>perspective</strong> in advance, on paper, with the kind of geometric precision you&rsquo;d use to design a railway viaduct. Perspective, briefly, is the trick painters use to make a flat canvas feel like it has depth. <strong>One-point perspective</strong> &mdash; the simplest version &mdash; works by picking a single point on the horizon (the <strong>vanishing point</strong>) and drawing every line that runs <em>away from you</em> toward that point. Train tracks running into the distance, the edges of a long hallway, the curbs of a straight boulevard: in real life they&rsquo;re parallel, but on a flat picture they appear to converge on one spot, and if you draw them as if they do, the picture pops into depth. Renaissance painters figured this out in fifteenth-century Florence. By Caillebotte&rsquo;s day every art student knew it. Almost nobody bothered to <em>flaunt</em> it.
      </p>
      <p style={proseStyle}>
        Caillebotte flaunted it. Look at the picture and follow the curbs of the wet pavement, the rooflines of the apartment blocks on the right, the cornices, the upper-window courses &mdash; they all run, ruler-straight, toward a single point a little above and to the right of the central gas lamppost. You can almost see his preparatory grid. Surviving studies for the picture confirm he made detailed drawings of the architecture and the figures before he ever touched the big canvas. This is not a fast plein-air sketch caught in a moment of light. (<em><strong>Plein air</strong></em> means &ldquo;open air&rdquo; &mdash; painting outdoors, in front of the real scene, the way Monet worked. The opposite of studio work.) This is a designed picture, built indoors from studies, with the architecture worked out the way you&rsquo;d work out a bridge.
      </p>

      <SectionHeader accent={accent} label="The surface" title="Cool, smooth, almost photographic" />
      <p style={proseStyle}>
        And the paint surface itself is <em>cool</em>. This is the headline difference between Caillebotte and the painters hanging in the same rooms with him. A Monet from this year reads as a vibrating mosaic of broken brushstrokes, every patch of color a separate dab, the whole canvas alive with visible paint. A Renoir from this year is a haze of pink and blue dappling, surfaces dissolved into atmosphere. Caillebotte&rsquo;s <em>Paris Street</em>, by contrast, has a smooth, even, almost photographic finish &mdash; the brushwork is mostly invisible at viewing distance. The cobblestones are individual cobblestones, painted one by one. The top hats are sharp-edged. The wet shine on the pavement is rendered, not suggested. If Monet was painting how an eye genuinely <em>receives</em> a scene through hazy air, Caillebotte was painting how an engineer&rsquo;s mind <em>knows</em> a scene is constructed. The cool quiet of the surface &mdash; no warm tone anywhere, no visible bravura brushwork, no sketch-like passages &mdash; is the picture&rsquo;s whole emotional register. It is the most Impressionist subject (modern Paris, an unimportant moment, ordinary people) painted with the <em>least</em> Impressionist hand.
      </p>
      <p style={proseStyle}>
        Which is going to be a problem in April. Hold that thought.
      </p>
    </article>
  )
}

function PsLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Wet stone, one umbrella, a lamppost down the middle" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he bottom quarter of the canvas is wet stone. Above it, a couple walks toward you under one umbrella. Above them, a single dark-green lamppost rises straight up the middle of a nine-foot picture and splits it neatly in half. Above that, six floors of cream Haussmann apartment block fade away into a flat, even, overcast sky. There is no sun anywhere. There is no shouting, no story, no event. A few dozen bourgeois Parisians are crossing a wet intersection on a gray morning, and that is the whole picture.
      </p>
      <p style={proseStyle}>
        Start at the <strong>center</strong> and go outward. Running straight up the middle of the canvas, splitting it into two near-equal halves, is a single tall dark-green <strong>cast-iron gas lamppost</strong> &mdash; the standard Haussmann street fixture, slim ribbed column, ornamental crown at the top, the kind of lamppost you still see all over Paris today. (Gas lampposts: the streetlights of nineteenth-century cities, lit at dusk by a man with a long pole, fueled by a gas main running under the pavement.) Caillebotte places the lamppost in the <em>exact</em> middle. He could have hidden it, softened it, painted around it. He chose to put it there like a plumb line, dividing his composition with engineering frankness. The lamppost is the vertical axis. Everything else is arranged around it.
      </p>

      <SectionHeader accent={accent} label="The figures" title="The couple, and the cropped man" />
      <p style={proseStyle}>
        Now the <strong>couple</strong>. Just right of center, walking toward you, the picture&rsquo;s two most-looked-at people: a bourgeois man and woman under a single <strong>lavender-grey umbrella</strong> &mdash; pale blue-grey when the light catches it, not the dead black it has sometimes been called. (The Art Institute&rsquo;s varnish-removal work on the picture confirmed the cool, light-toned umbrella; under a century of yellowed varnish it had looked nearly black, but the cleaned canvas reads pale.) &ldquo;Bourgeois&rdquo; &mdash; the wealthy, settled, professional middle class of a nineteenth-century European city, the lawyers and doctors and shop-owners and rentiers who lived in the Haussmann apartment buildings the picture shows. The man is on the woman&rsquo;s right, looking out into the rain past her shoulder. He wears a tall <strong>black top hat</strong>, a long dark overcoat over a buttoned waistcoat, a fresh white shirt, a small bow tie, and has a trim dark mustache. The woman wears a small dark hat with a <strong>soft veil pulled down over her face</strong> &mdash; fashionable in the 1870s, a thin black mesh that filters the face slightly, the way a sheer curtain filters a window. A single <strong>pearl or diamond earring</strong> catches a tiny dab of light at her ear. Her coat is dark blue-gray with <strong>fur trim</strong> at the collar and cuffs. Her <strong>right hand is hooked into the crook of his left arm</strong>; he is holding the umbrella in his left hand, angled so it shelters them both. They are not looking at each other. They are not looking at us. They are walking &mdash; past us, through us, toward the edge of the canvas &mdash; with the slightly bored, slightly far-away expression of two people who do this every morning. Their identities are unknown. They are not specific people. They are <em>a</em> bourgeois Parisian couple, the type, dressed for the type of day. Treat anyone who tells you otherwise with the polite skepticism reserved for storytellers who like a tidy fact better than a true one.
      </p>
      <p style={proseStyle}>
        Now the <strong>cropped man</strong>. This one is the picture&rsquo;s nerviest move. At the <strong>right edge</strong>, walking past the central couple in the opposite direction (away from you, into the right margin), a third figure &mdash; a man in a top hat and dark overcoat &mdash; is sliced abruptly by the edge of the canvas. You see his left side, his umbrella, his right arm. The other half of him is simply <em>gone</em>, lopped off as if the painter had cut the canvas with scissors. Up until the 1860s no respectable European picture did this. A figure on the edge of a painting was always shown whole, or pushed inward, or framed by something. To crop a person in half on the canvas edge was the kind of accident that happened in <strong>photographs</strong> &mdash; those new cheap <strong>prints from a camera</strong> that were everywhere in Paris by the 1870s, where a passerby would wander into the lens and end up bisected at the edge of the frame because the photographer couldn&rsquo;t ask him to step back. Caillebotte, an engineer-painter looking hard at the new technology, lifted the trick. The cropped figure is a deliberate quotation from the photographic accident. It tells you, in one move, that this picture is paying attention to how a modern eye actually catches a busy street: you don&rsquo;t see neat compositions, you see fragments. (You will, occasionally, see this figure identified as Caillebotte himself. The Art Institute&rsquo;s own catalogue does not agree. Treat the cropped man as anonymous.)
      </p>
      <p style={proseStyle}>
        The <strong>middle ground</strong>, behind the couple, has smaller figures: a lone walker, also under an umbrella, head down; two or three more umbrellas crossing the intersection from left to right; way back to the left a <strong>horse-drawn cart</strong> (some readings call it a green wagon) climbing the slope of one of the streets. Tiny against the buildings, half-dissolved in the wet air. The Quartier de l&rsquo;Europe was a respectable neighborhood, not a busy commercial one &mdash; what you&rsquo;re seeing is a normal weekday morning&rsquo;s foot traffic in a quiet bourgeois district, not a crowd.
      </p>

      <SectionHeader accent={accent} label="The setting" title="Buildings, ground, and the wedge" />
      <p style={proseStyle}>
        Then the <strong>buildings</strong>. The whole upper half of the canvas is Haussmann&rsquo;s Paris. On the right, a row of cream apartment blocks running into the distance &mdash; six floors, mansard roofs, regulation balconies, identical fa&ccedil;ades disappearing toward the vanishing point. On the left, more of the same on the far side of the intersection. And in the <strong>upper center</strong>, behind the lamppost, the headline piece of architecture: a single <strong>wedge-shaped Haussmann apartment block</strong>, narrower at its front (where two of the converging streets pinch together) than at its back. You can see two streets peeling away from each other around it &mdash; the apex of the wedge points straight at you. Six floors, balconies on the regulation floors, mansard roof on top. This is the building still standing on the Place de Dublin today, with a caf&eacute; on the ground floor where Caillebotte painted a stretch of stone. Find a photograph of the intersection now and the building is recognizable instantly. The picture is a piece of accurate Parisian topography.
      </p>
      <p style={proseStyle}>
        Then the <strong>ground</strong>. Roughly the bottom fourth of the canvas is paving, painted as a careful field of individual gray-blue stones, slick with rain that has fallen and stopped, each stone catching a faint dab of light reflected off the overcast sky. There is no puddle, no streaming water &mdash; the storm has passed, the morning is over its weather, but the city hasn&rsquo;t dried yet. Look closely at the stones along the foreground edge and you&rsquo;ll see exactly how Caillebotte makes the wet shine read: he lightens the top edge of each stone by a single value, and that one-value lift is enough for your eye to register the whole foreground as reflective. No highlight blobs. No sparkle. Just a top-of-stone touch, stone by stone, across the lower fourth of a nine-foot canvas. It is the patient, methodical, slightly mad work of someone who would happily have painted a thousand cobblestones if the picture had needed a thousand.
      </p>

      <SectionHeader accent={accent} label="The light" title="Cool gray, no warm color, no shadows" />
      <p style={proseStyle}>
        And then the <strong>light</strong>. There is no sun. There are no <strong>cast shadows</strong> anywhere of any consequence &mdash; meaning the dark patches a person or a building would normally throw on the ground in direct sunlight are absent. The sky is a flat, even, overcast pale gray, and it lights everything from all directions at once, so the figures and the buildings sit in the air without dark anchors at their feet. The umbrellas, accordingly, are not protecting against rain in progress &mdash; they&rsquo;re protecting against the dampness of the sky and probably the threat of more rain shortly. This is a specific kind of Paris morning: stratus overcast, after a passed shower, the city under a single soft pearl-gray dome.
      </p>
      <p style={proseStyle}>
        The <strong>palette</strong> confirms it. Cool grays, slate blue, oyster white, dull black, the dark green of the lamppost, the pale lavender-grey of the central umbrella, a single dab or two of muted green on the wagon. <strong>No warm color anywhere.</strong> No orange, no yellow, no pink, no red. After fifteen minutes in front of the Caillebotte your eye gets so used to the cool palette that the first warm picture you see afterward looks gaudy. The painting tells you, by elimination, what kind of light it is: the kind that drains color out of the city and leaves only its values, the way a wet Paris morning genuinely does.
      </p>
      <p style={proseStyle}>
        That&rsquo;s the canvas. Quiet, geometric, photographic, cool. Nine feet of well-dressed strangers walking past each other under umbrellas.
      </p>
    </article>
  )
}

function PsShow({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris &middot; April 1877" title="A wall the city had no category for" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n April 1877 Caillebotte hung this picture on a wall in Paris and a city that thought it had seen the Impressionists&rsquo; worst saw something it didn&rsquo;t have a category for.
      </p>
      <p style={proseStyle}>
        The show the picture debuted at was the <strong>3rd Impressionist Exhibition</strong>, held in a rented apartment on rue Le Peletier &mdash; the third of what would eventually be eight breakaway exhibitions the group held between 1874 and 1886, organized by themselves outside the official <strong>Salon</strong> (the annual state-run exhibition that, by long custom, was the only door in town for a serious painting career). The third show was, by quiet consensus, the most coherent and the most ambitious of the eight. About eighteen painters showed. The catalogue listed over two hundred works. Monet hung canvases of the Gare Saint-Lazare &mdash; the same railway station whose neighborhood Caillebotte&rsquo;s picture sat in &mdash; done that same year. Renoir hung <em>Bal du moulin de la Galette</em>, the big Sunday-afternoon dance-garden picture, also from 1876. Pissarro, Sisley, Degas, Berthe Morisot, C&eacute;zanne &mdash; they were all in it. And <strong>Gustave Caillebotte</strong> hung a clutch of his own canvases, with <em>Paris Street; Rainy Day</em> as the centerpiece. He was not only an exhibitor: he was one of the show&rsquo;s organizers and one of its financial backers. The third Impressionist exhibition happened, in part, because Caillebotte&rsquo;s checkbook made it happen.
      </p>

      <SectionHeader accent={accent} label="The wall" title="The least Impressionist picture in the room" />
      <p style={proseStyle}>
        So the picture had a prominent spot. Imagine the wall: Monets to the left of it, Renoirs to the right, the boldest experimental color of the era hanging on the same plaster. And then this thing &mdash; nine feet wide, gray and white and slate-blue, cool as a stone slab, every cobblestone rendered, every top-hat brim sharp-edged, the whole canvas about the <em>quietness</em> of a wet morning rather than the <em>vibration</em> of a sunny one. Caillebotte was the youngest serious figure in the room. He was twenty-eight years old. He had hung <strong>one of the largest</strong> and most thoroughly designed pictures in the show &mdash; Renoir&rsquo;s <em>Galette</em>, a few rooms over, was nearly six feet wide and not far behind on scale, so this is not a tallest-canvas-in-the-room claim; it&rsquo;s a most-engineered-canvas-in-the-room claim.
      </p>
      <p style={proseStyle}>
        Here is the punch of it: in the company of the most aggressively Impressionist painting being made in Paris, Caillebotte&rsquo;s <em>Paris Street; Rainy Day</em> was the <strong>least Impressionist picture in the room</strong>. No broken brushwork. No riot of pure color. No dissolved edges. No vibrating dappled light. By the standards the rest of the show was setting, this was almost a return to the old, polished, finished surface the Impressionists were supposed to be rebelling against. And yet the <em>subject</em> &mdash; a perfectly unimportant moment on an ordinary Paris street corner, with no story, no myth, no drama, no obvious meaning, just people walking past each other under umbrellas &mdash; was as Impressionist as a subject could get. The picture split itself down the middle. Modern subject; classical surface. New eye; old hand. (Some viewers, looking back, would call this a <em>photographic</em> sharpness &mdash; meaning that the cropped figures, the deep one-point perspective, and the flat diffuse light reminded them of the cheap photographic prints flooding Paris in the 1870s. The comparison stuck.)
      </p>

      <SectionHeader accent={accent} label="The reception" title="Mixed reviews, and one fact often confused" />
      <p style={proseStyle}>
        The reviews were mixed, in the way reviews of Caillebotte tended to be his whole career. Some critics were intrigued by the cool surface and the photographic geometry; others were baffled that a man who could clearly draw was bothering to do it for a wet intersection. What the fact pack does <em>not</em> preserve is named-critic, picture-specific quotes &mdash; a lot of 1877 review writing is paragraph-level commentary on the whole exhibition rather than verdicts on individual canvases, and <em>Paris Street; Rainy Day</em> mostly got commented on as part of Caillebotte&rsquo;s overall presence in the show. What is documented is that the picture was visibly there: a big cool wedge of a canvas in the middle of the most argued-about exhibition of the year, signed by a painter most of Paris had not yet decided how to take seriously.
      </p>
      <p style={proseStyle}>
        There is one piece of post-1877 record-keeping that needs gentle correction. You will, occasionally, see this picture described as having been &ldquo;exhibited at the 1877 Paris Salon.&rdquo; That is wrong. The picture was at the <strong>3rd Impressionist Exhibition</strong> in April 1877, which is a completely different event from the Salon &mdash; in fact, the Impressionist exhibitions existed <em>because</em> the Salon kept rejecting work like this. The two shows happened in different rooms, organized by different people, judged by different juries (or in the Impressionists&rsquo; case, no jury at all), held on different streets, with very different stakes. Anyone who tells you Caillebotte showed <em>Paris Street; Rainy Day</em> at the Salon has mixed up two facts that should never have touched.
      </p>
      <p style={proseStyle}>
        Caillebotte was twenty-eight. He had organized one of the most important exhibitions in nineteenth-century French painting, written checks to keep it solvent, and hung a nine-foot picture of a wet Paris intersection in the middle of it. He would keep painting, and keep collecting his friends&rsquo; work, for seventeen more years before dying suddenly of a stroke at forty-five in 1894. By then his collection was the most important private hoard of Impressionist painting on Earth, and his bequest of it to the French State would set off a fight that would shape what the Louvre and (eventually) the Mus&eacute;e d&rsquo;Orsay would look like for the next century. But that fight is a story about <em>other</em> paintings &mdash; about the Monets and Renoirs and Pissarros he had bought. <em>Paris Street; Rainy Day</em> itself, the picture in this chapter, was not part of that fight. It stayed home.
      </p>
    </article>
  )
}

function PsAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1894" title="Not in the bequest" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the part most often gotten wrong, so we start by separating it cleanly. When Gustave Caillebotte died in 1894, he left a famous bequest of paintings to the French State &mdash; about <strong>sixty-seven canvases</strong> of work by his friends and the painters he&rsquo;d quietly been keeping afloat for two decades: Monet, Renoir, Pissarro, C&eacute;zanne, Sisley, Manet, Degas, and Morisot. The state, after months of haggling with Caillebotte&rsquo;s executors, eventually accepted about forty of the sixty-seven works and turned down the rest. (This is the <strong>Caillebotte bequest</strong>, and the fight over it is one of the great squabbles in the history of nineteenth-century French museum-keeping. The full story belongs in the movement read, not here.) Renoir&rsquo;s <em>Bal du moulin de la Galette</em> &mdash; the giant sunlit Sunday-dance picture &mdash; was one of the works the state accepted, and it has been on public view in Paris ever since.
      </p>
      <p style={proseStyle}>
        <em>Paris Street; Rainy Day</em> was <strong>not</strong> in that bequest. This is the single most important factual point in this chapter, because the confusion is so common it deserves the chapter&rsquo;s opening line: <em>the picture in this chapter is not one of the Caillebotte-bequest pictures</em>. It stayed in the family. The bequest was the paintings Caillebotte had <em>bought from other people</em> &mdash; his collection. The pictures he had painted himself, including this one, stayed his own family&rsquo;s property. Don&rsquo;t mix the two.
      </p>

      <SectionHeader accent={accent} label="1894&ndash;1954" title="Half a century on private walls" />
      <p style={proseStyle}>
        So the picture&rsquo;s actual story after 1894 is quieter and more private than the bequest fight would suggest. It went, by inheritance, to Caillebotte&rsquo;s brother <strong>Martial Caillebotte</strong> and his wife Marie. In 1900 it was deposited at a country house called the Ch&acirc;teau de Montglat, in Provins, southeast of Paris, in the care of Martial&rsquo;s brother-in-law <strong>Georges Minoret</strong>. In 1950 it passed by inheritance to Martial&rsquo;s daughter <strong>Genevi&egrave;ve Chardeau</strong> and her husband Albert. Until that year &mdash; fifty-six years after the painter&rsquo;s death &mdash; the canvas had never left the family. It had been hung in Paris apartments, deposited in country houses, looked at by relatives and the rare invited guest. It had not been to a major exhibition in any meaningful sense since 1894. Almost nobody outside the family had seen it for two generations.
      </p>
      <p style={proseStyle}>
        Which means that when, in <strong>1954 or 1955</strong>, the painting was finally sold out of the Caillebotte family for the first time &mdash; to the American industrialist <strong>Walter P. Chrysler Jr.</strong> (1909&ndash;1988), son of the automobile magnate Walter P. Chrysler, and a major and slightly ill-disciplined collector who at one point owned what he claimed was the largest private art collection in the United States &mdash; the picture&rsquo;s reentry into the wider world was almost like a rediscovery. <em>Paris Street; Rainy Day</em> had been famous in 1877, then privately remembered for half a century, then near-invisible. Now it was suddenly in New York, in a private collection, and people who knew about Caillebotte realized one of his masterpieces had just changed continents.
      </p>

      <SectionHeader accent={accent} label="1964&ndash;today" title="To Chicago, on the Grand Staircase" />
      <p style={proseStyle}>
        It moved one more time. In <strong>1964</strong> the painting passed from Chrysler to the New York art dealer <strong>Wildenstein &amp; Co.</strong>, and Wildenstein resold it the same year to the <strong>Art Institute of Chicago</strong> through the Charles H. and Mary F. S. Worcester Collection fund. The Art Institute logged it under accession number <strong>1964.336</strong>. There the painting has stayed. It hangs in Gallery 201, on the east side of the Grand Staircase of the Art Institute &mdash; one of the first paintings most Chicago museum-goers encounter, and the picture the Institute most often uses on its posters and tote bags. The painting that was almost invisible for sixty years is now one of the most-photographed Impressionist works in America.
      </p>
      <p style={proseStyle}>
        Stand back from the arc of this. A wealthy young engineer in Paris paints a nine-foot picture of his own neighborhood on a wet morning. He hangs it at a breakaway exhibition where it is, paradoxically, the <em>least</em> Impressionist canvas in the show. The critics aren&rsquo;t sure what to make of it. The painter dies young, and the picture stays in the family for over half a century &mdash; kept by a brother, then a niece, then a great-niece, hanging on private walls in private houses. An American industrialist with a habit of swallowing collections buys it. A New York dealer flips it. And it ends up in Chicago, on permanent view, becoming one of the most recognized images of nineteenth-century Paris in the world. The picture&rsquo;s whole afterlife is the long swing from private to public &mdash; a private commission of a private morning, kept privately for two generations, finally sold across an ocean and turned into a public icon of a city it hadn&rsquo;t lived in for nearly a century. Caillebotte&rsquo;s bequest, the famous one, is in Paris. His own great picture of Paris is in Chicago. Sit with that for a second. The historical irony is the picture&rsquo;s last quiet joke.
      </p>
    </article>
  )
}

// The Cradle (Morisot, 1872) — Cr… ──────────────────────
function CrSister({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris &middot; mid-1800s" title="Two sisters, one painting" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with two girls at the same easel.
      </p>
      <p style={proseStyle}>
        In a respectable bourgeois household in mid-1800s Paris &mdash; <strong>bourgeois</strong> meaning the solid, comfortable upper-middle class of professionals and civil servants, not aristocracy and not the working poor &mdash; there were two Morisot sisters who painted. Their names were <strong>Berthe Morisot</strong> (1841&ndash;1895) and her elder sister <strong>Edma Morisot</strong> (1839&ndash;1921). They trained together, side by side, under a series of working painters. The decisive teachers were <strong>Joseph Guichard</strong>, a competent academic instructor, and then &mdash; far more importantly &mdash; <strong>Camille Corot</strong> (1796&ndash;1875), one of the great French landscape painters of the century, a hinge figure between the old studio tradition and the open-air realism that was about to detonate into Impressionism. Corot taught the Morisot sisters to paint outdoors, fast, from observation. He treated them as serious students. They were.
      </p>
      <p style={proseStyle}>
        Both sisters got into the <strong>Salon</strong> in the 1860s. The Salon &mdash; capital S &mdash; was the official annual art exhibition of the French state, juried by a panel of conservative academic painters, and it was effectively the only door in town: get hung at the Salon and you had a career, get rejected and you didn&rsquo;t. Berthe and Edma both got hung, repeatedly, in the 1860s. They were not amateurs decorating a parlour. They were two working professional painters at the start of what looked, on the evidence, like two real careers.
      </p>

      <SectionHeader accent={accent} label="1869" title="The career that stopped" />
      <p style={proseStyle}>
        Here is the part it would be sentimental to skate past: Edma was, in the eyes of several of the people who saw them at work, <strong>the more naturally talented of the two</strong>. That was the early read. It is not a tidy underdog-becomes-genius story; it&rsquo;s two equally serious sisters with comparable training and comparable Salon credentials, one of whom &mdash; Edma &mdash; seemed to several observers to have the slightly more obvious gift. Then, in <strong>1869</strong>, that career stopped.
      </p>
      <p style={proseStyle}>
        It stopped because Edma got married. Her husband was <strong>Adolphe Pontillon</strong>, a naval officer &mdash; a steady, respectable match, exactly the sort of marriage a young bourgeois Frenchwoman of her class was expected to make. And in 1869 marriage, for a woman of that class, was effectively a career-ending event for any <em>other</em> career she happened to be running on the side. A naval wife in Cherbourg (the port town on the Channel coast where Pontillon was posted) was supposed to keep a house, receive callers, manage a household, and &mdash; when the time came &mdash; have children. She was not supposed to keep working professionally at an easel. So Edma, who by every indication loved painting and was good at it, put her brushes down. The family letters from this period are heartbreaking on this point: Edma writes to Berthe missing the work, missing the studio life, missing the way the two of them used to argue over the canvas. She doesn&rsquo;t go back to it. That door closes.
      </p>

      <SectionHeader accent={accent} label="The choice" title="The sister who didn&rsquo;t quit" />
      <p style={proseStyle}>
        Berthe &mdash; and this is the choice the picture is built on &mdash; did not close that door.
      </p>
      <p style={proseStyle}>
        It would have been the path of least resistance. She was 28 in 1869, unmarried, living with her parents in Paris, in exactly the same class as her sister, under exactly the same expectations. Every social pressure was pointing her the same way Edma had just gone. She didn&rsquo;t go. She kept painting. She kept showing at the Salon. She started spending time with the loose group of young painters around <strong>&Eacute;douard Manet</strong> (1832&ndash;1883) &mdash; the most notorious modern painter in Paris, the one whose work the Salon kept either rejecting outright or hanging where nobody could see it &mdash; and she modelled for one of his most important pictures (<em>The Balcony</em>, 1868&ndash;69), which is how she ended up close to the circle that was about to become the Impressionists. She was working. She was a professional. She was, in the language of the time, <em>not behaving</em>.
      </p>
      <p style={proseStyle}>
        And in 1871, Edma had a daughter. <strong>Blanche Pontillon</strong> was born that year in Cherbourg. The next year &mdash; 1872 &mdash; Berthe traveled to visit, set up an easel in Edma&rsquo;s house, and painted her sister sitting beside her sleeping infant niece in a white-draped cradle.
      </p>

      <SectionHeader accent={accent} label="Who is who" title="Not Berthe. Edma." />
      <p style={proseStyle}>
        Read that sentence again, because the standard cradle blurb gets it wrong almost every time. The seated woman in <em>The Cradle</em> is <strong>not Berthe Morisot.</strong> It is her sister <strong>Edma Pontillon</strong>. The baby is <strong>not Berthe&rsquo;s daughter.</strong> It is Edma&rsquo;s daughter <strong>Blanche</strong>. Berthe, in 1872, was unmarried and childless &mdash; she didn&rsquo;t marry until <strong>December 1874</strong> (and to <strong>Eug&egrave;ne Manet</strong>, &Eacute;douard&rsquo;s younger brother, never to &Eacute;douard himself; &Eacute;douard was already married). Her own daughter, <strong>Julie Manet</strong>, wouldn&rsquo;t be born until <strong>1878</strong>, six years after this canvas. There is no version of <em>The Cradle</em> in which Morisot is painting herself as the mother. She is painting her sister &mdash; the sister who quit &mdash; watching the child whose arrival ended the painting career.
      </p>
      <p style={proseStyle}>
        That&rsquo;s the personal core of the picture before a single brushstroke is on the canvas. One sister, with brushes in her hand, painting the other sister, who put hers down. The Cradle is not a generic Madonna of Impressionism. It is a portrait of the life Berthe is, very deliberately, choosing not to have &mdash; painted with all the tenderness in the world for the sister who chose it.
      </p>
      <p style={proseStyle}>
        Hold that. The next chapter is about <em>why</em> a respectable Frenchwoman in 1872 painted a nursery in the first place, and why that choice was not a preference.
      </p>
    </article>
  )
}

function CrMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1872 &middot; Paris" title="The room she could observe" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o understand what <em>The Cradle</em> is actually a picture of, you have to understand what a woman of Morisot&rsquo;s class was allowed to look at in 1872 Paris. Because the answer is: not a lot.
      </p>
      <p style={proseStyle}>
        A respectable bourgeois Frenchwoman in 1872 &mdash; Morisot&rsquo;s exact class &mdash; could not walk into a Paris caf&eacute; alone. (A woman alone in a caf&eacute; was assumed to be a prostitute; this was not a metaphor, it was the operating social rule.) She could not stand at the rail of a racetrack alone the way <strong>Edgar Degas</strong>&rsquo;s men did &mdash; Degas (1834&ndash;1917) was the Parisian painter of the modern city&rsquo;s working surfaces (the racetrack, the laundry, the backstage of the opera), and he is the cleanest comparison case, because he and Morisot were class peers and exact contemporaries: he could go to those places, and she could not. She could not loiter at the bar of the <strong>Folies-Berg&egrave;re</strong>, the great Paris music hall where Manet would, ten years later, paint his last masterpiece &mdash; the picture of a barmaid behind the counter that Manet got to spend hours in front of, sketching, because he was a man. Morisot could not have stood in that bar. She could not go alone to the working-river bathing-spot at La Grenouill&egrave;re &mdash; the Seine-side caf&eacute; on a barge just outside Paris &mdash; and paint in the open next to Renoir and Monet the way they painted each other there in 1869. She could not paint a brothel interior the way Degas did. She could not paint a backstage dressing room at the opera the way Degas did. She could not paint laundresses in a working laundry the way Degas did. The entire menu of subjects we now associate with the casual, modern, masculine Impressionist eye &mdash; the caf&eacute;, the racetrack, the music hall, the brothel, the working city after dark &mdash; was, simply, off the menu for her. Not &ldquo;discouraged.&rdquo; Off it. A woman of her class who walked alone into those spaces would not be a painter recording a scene; she would be a scandal.
      </p>

      <SectionHeader accent={accent} label="The wall" title="A wall of access" />
      <p style={proseStyle}>
        This is what people mean &mdash; when they mean it precisely &mdash; by a <strong>wall of access</strong>. It is not a gentle preference for the domestic. It is a hard outer ring of places a respectable woman of Morisot&rsquo;s class was not permitted to be, and therefore not permitted to see, and therefore not permitted to paint. The wall is the point.
      </p>
      <p style={proseStyle}>
        What was inside the wall? The interior. The garden. The drawing room. The boudoir. The nursery. The respectable bourgeois interior with respectable bourgeois women in it, doing respectable bourgeois things &mdash; reading, sewing, mothering, receiving guests. That was the field she had. That was the entire field she had.
      </p>

      <SectionHeader accent={accent} label="The method" title="Turning the wall into a technique" />
      <p style={proseStyle}>
        Here is where the picture gets quietly radical. Morisot did not treat that field as a consolation prize. She treated it as her <em>subject</em>. She painted the interior with the same modern eye Monet was bringing to the harbor &mdash; the same speed of brushwork, the same attention to how light actually moves through a real room at a real hour, the same refusal to over-finish, the same trust in observation over invention. And then she went one step further. She turned the access-wall itself into a <em>method</em>. Because the domestic interior is exactly the kind of subject where the light is filtered, gauzy, soft &mdash; sunlight through a sheer curtain, daylight through window glass, a candle through muslin &mdash; and the painter who could paint that filtered light fastest and lightest would own the room.
      </p>
      <p style={proseStyle}>
        Morisot painted it lighter than anyone. By common agreement &mdash; including from the men who showed alongside her &mdash; her brushwork in this period was the most translucent, the most <em>barely-there</em>, in the entire Impressionist circle. The most rapid touch. The most willing to leave a passage of bare canvas peeking through. The most willing to let a swathe of white fabric be done in three or four breaths of paint and trust the viewer&rsquo;s eye to do the rest. Where Monet was building up a harbor in dense, choppy layers of gray and orange, Morisot was making a curtain by <em>not quite painting</em> one &mdash; a few sketched strokes of oyster white and you read <em>netting</em>, <em>light</em>, <em>air</em>. That handling is the picture&rsquo;s signature. It is the look-closer headline. We will see exactly how it works on the canvas in the next chapter.
      </p>

      <SectionHeader accent={accent} label="Against the wall" title="The wall is still a wall" />
      <p style={proseStyle}>
        So when Morisot, in 1872, set up an easel in her sister Edma&rsquo;s house in Cherbourg and chose to paint Edma beside the cradle of her infant daughter, she was making three choices at once, and they were all the same choice. She was painting <em>the field she was allowed to paint</em> (the nursery), with <em>the model she was allowed to observe at length</em> (her sister), and <em>the technique that field rewarded best</em> (the lightest, most translucent handling in the room). She was not retreating into the domestic. She was taking the only territory the wall left her and turning it into the most distinctive visual signature anyone in the group had.
      </p>
      <p style={proseStyle}>
        None of which means the wall stopped being a wall. Morisot still couldn&rsquo;t paint a caf&eacute; or a racetrack in 1872 (and couldn&rsquo;t in 1882, and couldn&rsquo;t in 1892 either; the access rule didn&rsquo;t relax over her working life). She was a serious modern painter who would have painted those subjects if she could have, who knew exactly what her male colleagues were getting to look at, and who made the only material she was allowed to observe into a style sharper than any of theirs. That isn&rsquo;t the wall ennobling her work. That&rsquo;s her work being made <em>against</em> the wall, with the wall still operating, every day of her career.
      </p>
    </article>
  )
}

function CrLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="At the canvas" title="A woman, a baby, a veil of paint" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of the canvas. It is small &mdash; about <strong>1 ft 10 in tall by 1 ft 6&frac14; in wide</strong>, vertical, the size of a generous laptop screen &mdash; and at first it looks like one hushed gray-white field. Give it ten seconds. The picture sorts itself out under your eye.
      </p>
      <p style={proseStyle}>
        The <strong>right third</strong> of the canvas is taken up by a softly glowing, almost weightless white shape &mdash; the <strong>cradle</strong>, draped entirely in <strong>translucent white gauze netting</strong> (a thin sheer fabric, the period&rsquo;s standard cradle netting, hung over the cot to keep flies and dust off a sleeping infant). The gauze cascades from a peak on the <strong>right</strong> edge of the picture down across the cradle in folds, lit softly from above. Look at how it is <em>painted</em>. The gauze is not described. It is not drawn. It is sketched in with what looks, on close inspection, like a handful of rapid, translucent strokes &mdash; a few sweeping passes of pale oyster-white paint, dragged thin enough that in places the warmer ground color underneath shows through. Read at arm&rsquo;s length, those few thin strokes resolve into <strong>fabric</strong> &mdash; into the unmistakable softness of real gauze hanging in folds. Step closer and the strokes come back to being strokes. Step back and they&rsquo;re gauze again. That oscillation is the trick. (A note on what we can and can&rsquo;t claim: people sometimes say Morisot painted this drape <em>alla prima</em>, &ldquo;all at once&rdquo; in one wet sitting; the documentary record doesn&rsquo;t actually confirm her process for this canvas. What we can say honestly is what&rsquo;s on the surface &mdash; a few translucent passes that read as fabric.)
      </p>
      <p style={proseStyle}>
        And then the move that makes the picture famous: the baby is visible <strong>through</strong> the gauze. Not behind it &mdash; <em>through</em> it. Look hard at the upper part of the draped cradle, on the right side of the picture. You can pick out a small softer area, a paler oval, that resolves under the veil into the sleeping infant&rsquo;s <strong>closed eyes</strong> and, lower, the suggestion of a tiny <strong>fisted hand</strong>. That is <strong>Blanche Pontillon</strong>, born 1871, asleep at perhaps a year old. Morisot has done a thing oil paint is not supposed to be able to do: she has painted a sheer fabric <em>and</em> the thing on the other side of it, in the same passage, with neither canceling the other. The gauze stays gauzy. The baby stays a baby. Both are there. The veil is real, and you still see through it. That single passage &mdash; that translucent glimpse &mdash; is what every serious painter who looked at this canvas in 1874 noticed first. It is the headline.
      </p>

      <SectionHeader accent={accent} label="The figure" title="Edma in the dark blue jacket" />
      <p style={proseStyle}>
        Now move your eye across to the <strong>left two-thirds</strong> of the canvas. Seated there in three-quarter profile, facing toward the viewer&rsquo;s right (toward the cradle), is a young dark-haired woman &mdash; <strong>Edma Pontillon</strong>, Morisot&rsquo;s elder sister, on her own chair, in her own house, looking across at her own sleeping infant. (Not Morisot. Edma. Hold the distinction; it is the whole picture.) She is wearing a <strong>dark blue jacket</strong> &mdash; a saturated navy-indigo, not black, the colour reading clearly against the pale surrounding field &mdash; with a <strong>white lace ruffle at the collar</strong> and a thin <strong>black ribbon tied at her throat</strong>. It is a plain, practical mid-day dress, the kind a young mother actually wore at home, not a posing-for-the-Salon costume. Against the soft pale field of the rest of the canvas, that dark blue mass reads as the single anchoring quiet note in the picture &mdash; the gravitational center, the dark colour that lets all the white air around it sing.
      </p>
      <p style={proseStyle}>
        Now look at how she&rsquo;s posed, because Morisot has built the whole picture on it. <strong>Her near arm &mdash; the one closer to us &mdash; is bent up so that her hand rests against her cheek</strong>, fingers loosely curled, propping her chin. <strong>Her other arm reaches forward toward the cradle, the hand coming to rest on the cradle&rsquo;s lower rail.</strong> One hand at her face, one hand on the rail of her daughter&rsquo;s crib. It is a thinking posture and a tired posture and a watching posture, all at once. It is a pose you have seen, exactly, on every parent who has ever just gotten a baby to sleep and is now sitting beside the crib for one quiet minute before the next thing. It is not idealized maternity. There is no halo, no soft heroic glow, no glycerine of sentiment. Edma looks, very specifically, like <em>Edma</em> &mdash; like a real young woman, in a real chair, in a real afternoon, with a real baby asleep beside her.
      </p>

      <SectionHeader accent={accent} label="The geometry" title="One act of looking" />
      <p style={proseStyle}>
        Follow her <strong>gaze</strong> next, because the whole picture is built on it. Her eyes are aimed <strong>down and to the viewer&rsquo;s right, into the cradle</strong>. The diagonal of that gaze, and the matching diagonal of the cradle&rsquo;s draped gauze sloping up to its peak on the right, form an X &mdash; the picture&rsquo;s main compositional spine. Without the gaze, <em>The Cradle</em> is a still life of a piece of furniture and a person. With it, the whole picture is one act of looking. Everything in the painting is happening because Edma is watching her daughter sleep.
      </p>
      <p style={proseStyle}>
        Look at the baby&rsquo;s arm again once you&rsquo;ve found Edma&rsquo;s pose, because Morisot has built a quiet visual rhyme into the picture and rewarded the viewer for catching it. <strong>Blanche&rsquo;s small bent arm under the gauze</strong> matches, almost exactly, <strong>the bent arm Edma raises to her cheek</strong> &mdash; both elbows tucked, both small hands lifted up toward the face. Mother and child make the same shape. The bond is not declared in a sentimental glow; it&rsquo;s encoded in geometry. Two matched bent arms, mirrored across the divide of the gauze. Once you see it you can&rsquo;t un-see it.
      </p>

      <SectionHeader accent={accent} label="The room" title="A nursery with the door shut" />
      <p style={proseStyle}>
        Now the rest of the room, which is deliberately almost nothing. <strong>Upper left:</strong> a pale <strong>vertical curtain</strong> falls into the picture from somewhere off-frame above, sheer and nearly weightless, painted in the same translucent handling as the gauze &mdash; so the curtain&rsquo;s drape and the cradle&rsquo;s drape echo each other, two veils of paint in the same breath, framing Edma between them. <strong>Background, behind Edma:</strong> a darker wall, almost monochromatic, no specific detail &mdash; no wallpaper pattern, no picture frame, no mantel, nothing to compete with the white of the cradle. Morisot has kept the background empty on purpose. She wants the gauze to read as <strong>pure light</strong>, and a background full of objects would steal it. <strong>Light direction:</strong> soft daylight comes from somewhere upper-left, falling on the cradle and on Edma&rsquo;s face. There is <strong>no hard shadow</strong> anywhere in the picture. The whole interior is in the same diffuse, filtered, indoor afternoon light a sleeping baby needs &mdash; the exact light a nursery actually has. <strong>Palette:</strong> dark blue, white, oyster, pale grey, and exactly one warm note &mdash; a single flesh tone on Edma&rsquo;s face and Blanche&rsquo;s small visible hand. That&rsquo;s the whole color list. A picture made of almost nothing but one navy mass, some greys and whites, and one breath of warmth, and somehow it doesn&rsquo;t read as empty. It reads as <em>enclosed</em> &mdash; a small intimate room, with the door shut, and the afternoon hush of a household where someone has finally fallen asleep.
      </p>
      <p style={proseStyle}>
        That&rsquo;s what&rsquo;s on the canvas: a woman in a dark blue jacket watching a baby through a curtain of white paint, in a room with the noise turned off. The next chapter is what happened when Morisot took it to Paris and hung it on a wall.
      </p>
    </article>
  )
}

function CrShow({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="April 1874" title="Nadar&rsquo;s studio" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n April 1874, a group of painters who had spent years getting rejected by the Salon rented the former Paris studio of the photographer <strong>Nadar</strong>, at <strong>35 boulevard des Capucines</strong>, and hung their own show &mdash; the <strong>First Impressionist Exhibition</strong>, organized as a cooperative society of about thirty artists so that no jury could throw anyone out. (The blow-by-blow of that founding &mdash; the cooperative&rsquo;s name, the Leroy review, the naming &mdash; lives in the movement-level read. The point here is what <em>Morisot</em> was doing in that room.)
      </p>
      <p style={proseStyle}>
        What Morisot was doing in that room was <strong>being the only woman in it</strong>. Of those roughly thirty exhibiting artists, she was the only one. Not &ldquo;the only well-known woman&rdquo; &mdash; the only woman, period. She hung <strong>nine works</strong> of her own &mdash; a serious presentation, not a token entry &mdash; and the centerpiece, the picture most of the visitors and most of the critics stopped at, was <em>Le Berceau</em>. The catalogue listed it for sale at <strong>800 francs</strong>.
      </p>

      <SectionHeader accent={accent} label="800 francs" title="What the number meant" />
      <p style={proseStyle}>
        A note on what 800 francs meant, because the number is meaningless without it. Eight hundred francs in 1874 Paris was a real but not a triumphant price &mdash; somewhere in the range of an upper-middle-class clerk&rsquo;s annual salary, the kind of price a serious collector would pay for a serious mid-career picture, not a Salon trophy. It was the asking price of someone who knew her work, knew her market, and priced herself as the working professional she was. Monet, the same week, in the same show, sold <em>Impression, Sunrise</em> &mdash; the picture that was about to lend its title to the entire movement &mdash; for the same <strong>800 francs</strong>.
      </p>
      <p style={proseStyle}>
        Here is the part the standard cradle story gets wrong, and gets wrong in a particular direction. <em>Le Berceau</em> <strong>did not sell.</strong> It was <em>listed</em> at 800 francs. The price was on the catalogue. The picture stayed on the wall, then came off the wall, then went home unsold with Morisot. You will see the claim, sometimes in respectable places, that <em>The Cradle</em> &ldquo;sold for 800 francs at the First Impressionist Exhibition.&rdquo; It didn&rsquo;t. It was <em>offered</em> at 800 francs. There is a difference, and that difference is the difference between a painting that found a buyer in 1874 and a painting that didn&rsquo;t. <em>The Cradle</em> didn&rsquo;t. Refuse the conflation; the gap between <em>listed</em> and <em>sold</em> is the whole texture of an artist&rsquo;s actual career.
      </p>

      <SectionHeader accent={accent} label="The reviews" title="Noticed, praised, not bought" />
      <p style={proseStyle}>
        The reviews were a mixed bag tipping toward warm. <em>The Cradle</em> was, almost universally, the picture by Morisot that critics in 1874 singled out &mdash; they noticed the gauze, they noticed the lightness, they registered (with varying degrees of comfort) that the only woman in the room had painted one of the most technically distinctive things on the wall. But &ldquo;noticed and praised&rdquo; is not &ldquo;bought,&rdquo; and the picture went home. Morisot, to her enormous credit, took none of this as a verdict on the work. She kept showing. She would show at every subsequent Impressionist exhibition for the rest of her life &mdash; all eight of them, more than any other Impressionist except Pissarro. <em>The Cradle</em> was not her career. It was her opening move.
      </p>

      <SectionHeader accent={accent} label="December 1874" title="Eug&egrave;ne, not &Eacute;douard" />
      <p style={proseStyle}>
        And then, eight months after the show came down, in <strong>December 1874</strong>, she got married. The man she married was <strong>Eug&egrave;ne Manet</strong> &mdash; &Eacute;douard Manet&rsquo;s <em>younger</em> brother. Hold that detail tight, because the most common wrong fact about Morisot in print is that she married &Eacute;douard. She did not. &Eacute;douard was already married &mdash; to <strong>Suzanne Leenhoff</strong>, a Dutch pianist who&rsquo;d been with him since the 1850s &mdash; and was therefore not available for Morisot to marry, even if she&rsquo;d wanted to (the evidence is mixed about whether she did). She married his brother Eug&egrave;ne, who is the often-overlooked Manet: not a painter himself, generally supportive of her career rather than competitive with it, and the man who was, three and a half years later in 1878, the father of Morisot&rsquo;s daughter <strong>Julie Manet</strong>. Julie is the daughter who genuinely existed in Berthe&rsquo;s life &mdash; but in <em>The Cradle</em>, six years before Julie was born, the baby is not Julie. The baby is still, forever, Blanche Pontillon &mdash; Edma&rsquo;s daughter &mdash; and the woman in the chair is still, forever, Edma. The standard error gets the picture exactly backwards: it tries to put Berthe and Julie into a painting that is, by date alone, impossible for either of them to be in.
      </p>
      <p style={proseStyle}>
        So: April 1874, the only woman in a room of thirty male painters, nine pictures up, one centerpiece listed at 800 francs and not sold, the gauze noticed, the picture admired, the picture taken home unsold. December 1874, married. <em>The Cradle</em> &mdash; the picture of the sister who <em>did</em> quit, painted by the sister who <em>didn&rsquo;t</em> &mdash; goes home to Edma&rsquo;s parlour in Cherbourg, and falls quietly out of public view for fifty-six years.
      </p>
    </article>
  )
}

function CrAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="After 1874" title="From Edma&rsquo;s parlour to the Louvre" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        hat happened to <em>The Cradle</em> after the 1874 show is the thing nobody tells you about the picture, and it is the part of the story where the painting almost disappears.
      </p>
      <p style={proseStyle}>
        Morisot, after the show, didn&rsquo;t keep it. She gave it to her sister. <em>Le Berceau</em> &mdash; the portrait of <strong>Edma</strong> and Blanche &mdash; went home, after 1874, to <strong>Edma Pontillon</strong>, the woman in the chair. There is something exactly right about that: the picture of the sister who quit, kept by the sister who quit. It hung in her house. It was a family picture. Not a &ldquo;family picture&rdquo; in the sense of &ldquo;a picture about a family,&rdquo; which it was, but in the sense the words actually mean in real life &mdash; a picture, on a wall, in a relative&rsquo;s house, that the relatives walk past. Edma kept it. When she died in <strong>1921</strong>, the picture passed down within the family to her daughter <strong>Blanche</strong> &mdash; by then <strong>Blanche Forget</strong> by marriage &mdash; who had been the sleeping infant under the gauze. The baby in the painting inherited the painting.
      </p>

      <SectionHeader accent={accent} label="Fifty-six years" title="Out of the public record" />
      <p style={proseStyle}>
        For <strong>fifty-six years</strong> &mdash; from 1874 to 1930 &mdash; <em>The Cradle</em> was, effectively, not in the public record. Not in a museum. Not on a wall anyone could buy a ticket to see. Not loaned out. Not catalogued by the new generation of Impressionist scholars who were, across that same half-century, building up the canon that would put Monet and Renoir into every major museum in the world. The picture that we now call one of the masterpieces of Impressionism was, in those fifty-six years, a private family heirloom hanging in a Pontillon-Forget drawing room, almost entirely unseen. The whole reception history of <em>The Cradle</em> begins not in 1874 but in 1930. The picture has effectively two lives: a brief month of public view in 1874, and then everything that happens after 1930.
      </p>

      <SectionHeader accent={accent} label="1930" title="The Louvre buys it" />
      <p style={proseStyle}>
        What happened in 1930 was that the <strong>Mus&eacute;e du Louvre</strong> &mdash; yes, <em>that</em> Louvre, the great state museum of France &mdash; bought it.
      </p>
      <p style={proseStyle}>
        The Louvre bought <em>Le Berceau</em> from <strong>Blanche Forget</strong>, the now-grown daughter of Edma Pontillon, in <strong>1930</strong>, for <strong>300,000 francs</strong>. The price is worth sitting with for a second. Eight hundred francs offered in 1874, no buyer. Three hundred thousand francs paid in 1930, by the national museum of France, to acquire it for the nation. That is the arc of an Impressionist picture&rsquo;s value in fifty-six years: from an unsold asking-price on a cooperative show&rsquo;s catalogue to a six-figure state purchase. (Yes, inflation between 1874 and 1930 closes part of that gap &mdash; but only part; the rest is the movement winning, posthumously, the argument it lost on the wall in 1874.) Three hundred thousand francs is also, plainly, the price you pay when the picture has stopped being &ldquo;a Morisot the family kept&rdquo; and become <em>the Morisot</em> &mdash; the work that, in the museum&rsquo;s view, has to be in the national collection.
      </p>
      <p style={proseStyle}>
        From 1930 on, the picture is institutional. It enters the Louvre&rsquo;s Impressionist holdings. In <strong>1947</strong>, after the Second World War, those Impressionist holdings get moved across the Seine into the <strong>Mus&eacute;e du Jeu de Paume</strong> &mdash; a smaller museum in the Tuileries gardens that, for several decades, was where Paris kept its Impressionists. <em>Le Berceau</em> hangs there from 1947 to 1986. Then in <strong>1986</strong> Paris opens the <strong>Mus&eacute;e d&rsquo;Orsay</strong>, the new flagship museum for nineteenth-century French art, housed in a converted railway station on the Left Bank. Every major Impressionist in the city moves across to the new house. <em>Le Berceau</em> moves with them. It has been on the walls of the <strong>Mus&eacute;e d&rsquo;Orsay</strong> since 1986, on permanent view, and that is where it lives now (accession number <strong>RF 2849</strong>). If you are in Paris and you walk through the d&rsquo;Orsay&rsquo;s Impressionist galleries, you will find it.
      </p>

      <SectionHeader accent={accent} label="Reintroduction" title="A 20th-century reputation" />
      <p style={proseStyle}>
        And here is where this picture&rsquo;s afterlife diverges from almost every other famous Impressionist canvas, and where the line between the painting and the movement gets interesting. <em>The Cradle</em> did not become famous because the public found it. It became famous because the Louvre bought it. Most of the iconic Impressionist works &mdash; <em>Sunrise</em>, the Renoirs, the Degas dancers &mdash; have a public reception trail that runs continuously from the 1870s onward: critics writing about them, dealers selling them, collectors fighting over them, museums chasing them. <em>The Cradle</em> doesn&rsquo;t have that trail. It went to <strong>Edma</strong> in 1874 and effectively vanished from criticism until the 1930 purchase, and then it had to be reintroduced to the public <em>as</em> a masterpiece, half a century after the fact. The picture&rsquo;s reputation is, in a real sense, <strong>a twentieth-century reputation built on a nineteenth-century painting that the nineteenth century barely got to look at.</strong> The 1930 purchase isn&rsquo;t just an acquisition. It&rsquo;s a reintroduction.
      </p>
      <p style={proseStyle}>
        The reintroduction stuck. <em>Le Berceau</em> is now, by common consent, the picture by which Morisot is most often known to a general reader &mdash; the one on the postcards, the one in the textbooks, the one anyone who has been through the d&rsquo;Orsay can probably picture in their head. (Whether the picture <em>should</em> be the one she&rsquo;s most known for is another question; the case is at least as strong for any of several other Morisots. But <em>The Cradle</em> is the one that landed.) It hangs there, that small vertical canvas of <strong>Edma</strong> and her niece Blanche and a veil of white paint, in the same building as the <em>Sunrise</em> that named the movement and the Manets the movement was orbiting, and it does what it always did on the wall in Nadar&rsquo;s studio in 1874: it stops you, because nobody else in the room ever painted a piece of gauze that you could see through quite like that.
      </p>
      <p style={proseStyle}>
        The sister who quit got her likeness into the Louvre. The sister who didn&rsquo;t quit put it there.
      </p>
    </article>
  )
}

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
  angelus: { bell: AnBell, looking: AnLooking, reception: AnReception, meaning: AnMeaning, afterlife: AnAfterlife },
  gargantua: { king: GaKing, looking: GaLooking, trial: GaTrial, meaning: GaMeaning, afterlife: GaAfterlife },
  carriage: { rail: TcRail, looking: TcLooking, unfinished: TcUnfinished, meaning: TcMeaning, afterlife: TcAfterlife },
  'horse-fair': { market: HfMarket, looking: HfLooking, salon: HfSalon, bonheur: HfBonheur, afterlife: HfAfterlife },
  'impression-sunrise': {
    'le-havre': IsLeHavre,
    'the-morning': IsMorning,
    'the-name': IsName,
    'the-break': IsBreak,
    'afterlife': IsAfterlife,
  },
  grenouillere: { seine: GreSeine, making: GreMaking, looking: GreLooking, break: GreBreak, afterlife: GreAfterlife },
  cradle: { sister: CrSister, making: CrMaking, looking: CrLooking, show: CrShow, afterlife: CrAfterlife },
  'moulin-galette': { montmartre: MgMontmartre, making: MgMaking, looking: MgLooking, show: MgShow, afterlife: MgAfterlife },
  'paris-street': { haussmann: PsHaussmann, making: PsMaking, looking: PsLooking, show: PsShow, afterlife: PsAfterlife },
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
