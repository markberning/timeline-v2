'use client'

// BATTLE dossier (Gettysburg) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). The bespoke interactive fishhook
// battlefield diagram is preserved and passed through `extra` (rendered in the
// At-a-glance tab). Content produced through the war content pipeline.

import { useState } from 'react'
import { SANS, SERIF, ACCENTS, CIVIL_WAR_ACCENT as ACCENT, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'
import { BattleDossier, type BattleData } from '../../battle-dossier'

const num = (n: number) => n.toLocaleString('en-US')

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{children}</div>
}

// Per-day explanations shown below the map; also drive the interactive filter.
const DAYS = [
  { n: 1, title: 'Day 1 · July 1', sub: 'McPherson’s Ridge', text: 'Confederate divisions marching in from the northwest blunder into Union cavalry along McPherson’s Ridge. Both armies rush troops toward the sound of the guns; Maj. Gen. John Reynolds (North) is killed early. By evening the outnumbered Union forces are driven back through the town, but they rally onto the high ground south of it, the hills and ridges that form the fishhook.' },
  { n: 2, title: 'Day 2 · July 2', sub: 'The hooks', text: 'Lee strikes both ends of the fishhook at once. On the south, Longstreet (South) drives his men into Devil’s Den, the Wheatfield, the Peach Orchard, and Little Round Top, where Chamberlain (North) and his 20th Maine hold the very end of the Union line. On the northern barb, Ewell (South) claws at Culp’s Hill. The line bends everywhere and breaks nowhere.' },
  { n: 3, title: 'Day 3 · July 3', sub: 'Pickett’s Charge', text: 'After the largest artillery bombardment of the war, Lee gambles on the center. Roughly 12,500 men, Pickett’s Charge, step off across three-quarters of a mile of open ground toward the Angle on Cemetery Ridge. Canister and rifle fire shred them; the handful who reach the wall (the “high-water mark”) are killed or captured. The charge fails, and Lee’s invasion with it.' },
]

// Interactive SVG fishhook battlefield diagram — tap a day to spotlight its
// attacks; per-day text below. Themeable, offline, no deps. Not to scale.
function Fishhook() {
  const MONO = 'var(--font-geist-mono)'
  const fg = 'var(--foreground)'
  const blue = ACCENTS.blue, rust = ACCENTS.rust
  const [active, setActive] = useState(1) // always one day selected
  const dayOp = (n: number) => (active === n ? 1 : 0.12)
  const TOWN = { x: 150, y: 64 }
  const roads = [-40, -10, 35, 80, 120, 160, 205, 250, 300]
  type Anchor = 'start' | 'middle' | 'end'
  const Lbl = ({ x, y, children, color, op = 0.62, size = 7.5, anchor = 'start' as Anchor }: { x: number; y: number; children: string; color?: string; op?: number; size?: number; anchor?: Anchor }) => (
    <text x={x} y={y} fontFamily={MONO} fontSize={size} fill={color || fg} opacity={color ? 1 : op} textAnchor={anchor}>{children}</text>
  )
  const grp: React.CSSProperties = { transition: 'opacity 220ms ease' }
  const dot = 'color-mix(in srgb, var(--foreground) 58%, transparent)' // neutral "key fighting" marker
  return (
    <div style={{ padding: '8px 0 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Eyebrow color={ACCENT}>The battlefield · the fishhook</Eyebrow>
        <span style={{ fontFamily: MONO, fontSize: 9, color: 'color-mix(in srgb, var(--foreground) 42%, transparent)' }}>tap a day · not to scale</span>
      </div>
      <svg viewBox="0 0 360 300" style={{ width: '100%', height: 'auto', marginTop: 10, borderRadius: 6, background: 'color-mix(in srgb, var(--foreground) 4%, transparent)', border: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)' }}>
        <defs>
          {([['rust', ACCENTS.rust], ['blue', ACCENTS.blue]] as const).map(([id, c]) => (
            <marker key={id} id={`ah-${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill={c} />
            </marker>
          ))}
        </defs>

        {/* roads radiating from town */}
        {roads.map((deg, i) => { const r = deg * Math.PI / 180; return <line key={i} x1={TOWN.x} y1={TOWN.y} x2={TOWN.x + Math.cos(r) * 26} y2={TOWN.y + Math.sin(r) * 26} stroke={fg} strokeOpacity={0.16} strokeWidth={1.2} /> })}

        {/* Confederate lines (rust): Seminary Ridge + outer arc north of town */}
        <path d="M92,92 C118,66 168,62 224,92" fill="none" stroke={rust} strokeWidth={4} strokeLinecap="round" />
        <path d="M92,92 L98,250" fill="none" stroke={rust} strokeWidth={4} strokeLinecap="round" />
        {/* Union fishhook (blue): Culp's Hill barb → Cemetery Hill → ridge → Round Tops */}
        <path d="M196,114 C206,96 188,86 168,92 C160,95 165,104 164,112 L161,234 L156,250" fill="none" stroke={blue} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />

        {/* Round Tops */}
        <path d="M150,250 l6,-9 l6,9 z" fill={fg} opacity={0.32} />
        <path d="M153,273 l7,-11 l7,11 z" fill={fg} opacity={0.28} />

        {/* town */}
        <circle cx={TOWN.x} cy={TOWN.y} r={6} fill="var(--background)" stroke={fg} strokeOpacity={0.6} strokeWidth={1.4} />

        {/* static terrain labels */}
        <Lbl x={132} y={50} color="color-mix(in srgb, var(--foreground) 62%, transparent)">GETTYSBURG</Lbl>
        <Lbl x={202} y={118}>Culp’s Hill</Lbl>
        <Lbl x={172} y={86}>Cemetery Hill</Lbl>
        <Lbl x={167} y={182}>Cemetery Ridge</Lbl>
        <Lbl x={32} y={176}>Seminary Ridge</Lbl>

        {/* Day 1 — Confederates attack from the NW */}
        <g opacity={dayOp(1)} style={grp}>
          <line x1="48" y1="42" x2="118" y2="60" stroke={rust} strokeWidth={2.4} markerEnd="url(#ah-rust)" />
          {[[58, 46], [86, 55]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={dot} stroke="rgba(0,0,0,0.3)" strokeWidth={0.8} />)}
          <Lbl x={20} y={38}>McPherson’s Ridge</Lbl>
        </g>

        {/* Day 2 — Longstreet (south) & Ewell (barb) attack; Union counter at LRT */}
        <g opacity={dayOp(2)} style={grp}>
          <line x1="104" y1="208" x2="150" y2="242" stroke={rust} strokeWidth={2.4} markerEnd="url(#ah-rust)" />
          <line x1="218" y1="100" x2="200" y2="112" stroke={rust} strokeWidth={2.4} markerEnd="url(#ah-rust)" />
          <line x1="160" y1="246" x2="145" y2="240" stroke={blue} strokeWidth={2.2} markerEnd="url(#ah-blue)" />
          {[[132, 254], [138, 236], [122, 222], [156, 248]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={dot} stroke="rgba(0,0,0,0.3)" strokeWidth={0.8} />)}
          <Lbl x={98} y={252} anchor="end">Little Round Top</Lbl>
        </g>

        {/* Day 3 — Pickett's Charge (Confederate) into the Angle */}
        <g opacity={dayOp(3)} style={grp}>
          <line x1="102" y1="158" x2="156" y2="158" stroke={rust} strokeWidth={3} markerEnd="url(#ah-rust)" />
          <rect x="157" y="154.5" width="6.5" height="6.5" transform="rotate(45 160.25 157.75)" fill={rust} />
          <Lbl x={168} y={150} color={rust}>the Angle · high-water mark</Lbl>
        </g>

        {/* compass */}
        <path d="M334,18 l2.4,7 l-2.4,-2 l-2.4,2 z" fill={fg} opacity={0.5} />
        <Lbl x={331} y={36} op={0.5} size={9}>N</Lbl>
      </svg>

      {/* day filter pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
        {[1, 2, 3].map(n => {
          const on = active === n
          return (
            <button key={n} onClick={() => setActive(n)} style={{
              cursor: 'pointer', fontFamily: SANS, fontSize: 11, fontWeight: 600, padding: '5px 13px', borderRadius: 999,
              border: `1px solid ${on ? ACCENT : 'color-mix(in srgb, var(--foreground) 18%, transparent)'}`,
              background: on ? alpha(ACCENT, 0.14) : 'transparent', color: on ? ACCENT : 'color-mix(in srgb, var(--foreground) 65%, transparent)',
            }}>
              Day {n}
            </button>
          )
        })}
      </div>

      {/* legend / key for every glyph on the map */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginTop: 10, fontFamily: SANS, fontSize: 10.5, color: 'color-mix(in srgb, var(--foreground) 68%, transparent)', alignItems: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <svg width="22" height="10"><line x1="1" y1="5" x2="21" y2="5" stroke={blue} strokeWidth="3" strokeLinecap="round" /></svg>Union line
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <svg width="22" height="10"><line x1="1" y1="5" x2="21" y2="5" stroke={rust} strokeWidth="3" strokeLinecap="round" /></svg>Confederate line
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <svg width="26" height="10"><line x1="1" y1="5" x2="16" y2="5" stroke={rust} strokeWidth="2.4" /><path d="M15,1 L24,5 L15,9 z" fill={rust} /></svg>Confederate attack
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <svg width="26" height="10"><line x1="1" y1="5" x2="16" y2="5" stroke={blue} strokeWidth="2.4" /><path d="M15,1 L24,5 L15,9 z" fill={blue} /></svg>Union attack
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <svg width="12" height="10"><circle cx="6" cy="5" r="4" fill={dot} /></svg>Key fighting
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <svg width="14" height="12"><path d="M2,11 L7,2 L12,11 z" fill={fg} opacity="0.4" /></svg>Hill (the Round Tops)
        </span>
      </div>
      <div style={{ fontFamily: SANS, fontSize: 9.5, color: 'color-mix(in srgb, var(--foreground) 45%, transparent)', marginTop: 6 }}>Lines = each army’s position; arrows = attacks, in the attacking side’s colour.</div>

      {/* selected day's explanation */}
      {(() => {
        const d = DAYS.find(x => x.n === active)
        if (!d) return null
        const c = ACCENT
        return (
          <div style={{ marginTop: 14, border: `1px solid ${alpha(c, 0.4)}`, background: alpha(c, 0.06), borderRadius: 8, padding: '12px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 9, height: 9, borderRadius: 999, background: c }} />
              <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', color: c }}>{d.title}</span>
              <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)' }}>{d.sub}</span>
            </div>
            <p style={{ fontFamily: SERIF, fontSize: 14, lineHeight: 1.55, margin: '8px 0 0', color: 'color-mix(in srgb, var(--foreground) 85%, transparent)' }}>{d.text}</p>
          </div>
        )
      })()}
    </div>
  )
}

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-gettysburg' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of Gettysburg',
  date: 'July 1–3, 1863',
  place: 'Adams County, Pennsylvania',
  hero: {
    img: '/war-img/gettysburg-hero.jpg',
    pal: ['#3a2a1c', '#7a1422', '#100506'],
    credit: 'Battle of Gettysburg · Thure de Thulstrup, 1887 · public domain',
  },
  stats: [
    { label: 'Duration', value: '3 days' },
    { label: 'Casualties', value: '51k' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac', str: '93,921 troops', cmd: 'Maj. Gen. George G. Meade', note: 'Newly in command. Meade took over the army just three days before the battle.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '71,699 troops', cmd: 'Gen. Robert E. Lee', note: 'On the offensive: Lee’s second and deepest invasion of the North.' },
  ],
  casualties: { union: 23055, csa: 28063, civ: 1 },
  commanders: [
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: "Fresh off a smashing victory at Chancellorsville and deep in Northern territory, Lee gambled on breaking the Union line head-on. When the second day's attacks failed, he ordered a frontal assault on the center over Longstreet's objections, and never invaded the North again." },
    { name: 'James Longstreet', role: 'Lt. Gen., CSA', side: 'c', img: '/war-img/cmdr/longstreet.jpg', bio: "Lee's senior corps commander argued for swinging around the Union left and fighting on the defensive rather than attacking the heights. Overruled, he reluctantly launched the second-day assault and then the doomed charge on the third." },
    { name: 'George Pickett', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/pickett.jpg', bio: "His fresh Virginia division spearheaded the climactic third-day assault on Cemetery Ridge, joined by Pettigrew's and Trimble's divisions, that still bears his name. Of the roughly 12,500 men who stepped off across three-quarters of a mile of open ground, about half never came back." },
    { name: 'George G. Meade', role: 'Cmdr., Potomac', side: 'u', img: '/war-img/cmdr/meade.jpg', bio: "Handed command of the Army of the Potomac just three days before the battle, Meade fought a careful defensive fight on excellent ground, holding the fishhook line against three days of attacks to win the biggest battle of the war." },
    { name: 'Winfield S. Hancock', role: 'Corps, Union', side: 'u', img: '/war-img/cmdr/hancock.jpg', bio: "Sent ahead on the first day to judge the ground, Hancock chose the high ground south of town and steadied the broken line. He anchored the Union center and was badly wounded helping repulse Pickett's Charge." },
    { name: 'John Buford', role: 'Cav., Union', side: 'u', img: '/war-img/cmdr/buford.jpg', bio: "His cavalry division reached Gettysburg first and fought a dismounted delaying action on the ridges west of town, buying the hours the Union infantry needed to reach and hold the heights." },
    { name: 'Joshua L. Chamberlain', role: 'Col., 20th Maine', side: 'u', img: '/war-img/cmdr/chamberlain.jpg', bio: "A college professor in uniform, Chamberlain held the far Union left at Little Round Top on the second day. Out of ammunition and about to be overrun, his 20th Maine fixed bayonets and charged downhill, saving the flank." },
  ],
  outcome: {
    verdict: 'Union victory · the Confederacy’s high-water mark',
    text: 'The Army of Northern Virginia had marched north to win foreign recognition and breathing room for a Confederacy built on slavery. Instead Lee’s deepest invasion was broken in three days, at a cost of roughly 50,000 casualties on both sides, and the next day, July 4th, far to the west, the Confederate river stronghold of Vicksburg surrendered to Grant. The two defeats together are remembered as the war’s turning point: the Army of Northern Virginia never mounted a major offensive into Union territory again. Yet Meade let Lee’s wrecked army slip back across the Potomac, the chance to end the war that summer went with it, and the fighting ground on for nearly two more years.',
  },
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', title: 'How they got there', blurb: 'Lee marches north. The armies converge blindly toward a Pennsylvania crossroads town with ten roads.', img: '/war-img/gettysburg-setting.jpg' },
    { id: 'mcpherson', eyebrow: 'Day 1 · July 1', title: 'McPherson’s Ridge', blurb: 'Heth (South) blunders into Buford (North). Reynolds (North) is killed. By evening the Union has been pushed back to Cemetery Hill.', img: '/war-img/gettysburg-day1-photo.jpg' },
    { id: 'hooks', eyebrow: 'Day 2 · July 2', title: 'The Hooks', blurb: 'Longstreet (South) swings around to hit the Union left. The 20th Maine holds at the end of the line.', img: '/war-img/gettysburg-day2-photo.jpg' },
    { id: 'pickett', eyebrow: 'Day 3 · July 3', title: 'Pickett’s Charge', blurb: 'Twelve thousand five hundred men across three-quarters of a mile of open ground. About half do not come back.', img: '/war-img/gettysburg-day3-photo.jpg' },
    { id: 'aftermath', eyebrow: 'Aftermath', title: 'The retreat & the Address', blurb: 'Lee withdraws south through ten days of rain. Five months later Lincoln dedicates the cemetery in two minutes.', img: '/war-img/gettysburg-aftermath-photo.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/gettysburg/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
  extra: <Fishhook />,
}

export default function GettysburgPage() {
  return <BattleDossier data={DATA} />
}
