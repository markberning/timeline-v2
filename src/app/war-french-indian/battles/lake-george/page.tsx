'use client'

// BATTLE dossier (Lake George, September 8, 1755), French and Indian War.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author → five critic
// gates → reconcile → revise. Sides are war-aware: British (red) / French (blue), set
// via sideNames + sideColors. Commander bios are gated, born-verified prose.

import { BattleDossier, type BattleData } from '../../../war-civil-war/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-lake-george' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1755',
  title: 'Lake George',
  date: 'September 8, 1755',
  place: 'Lake George, New York',
  note: 'A rare British victory in a disastrous year.',
  hero: {
    img: '/war-img/fi-lake-champlain-corridor-map.jpg',
    pal: ['#23282b', '#33454a', '#0c1012'],
  },
  locator: {
    eyebrow: 'Where and when · September 1755',
    caption: 'The battle was fought at the south end of Lake George, on the war road between Albany on the Hudson and the French forts on Lake Champlain. Johnson was driving north toward Crown Point; Dieskau marched south to stop him.',
    frame: { lonMin: -74.7, lonMax: -72.7, latMin: 42.4, latMax: 44.3 },
    states: [
      { name: 'New York', tone: 'focus', label: 'NEW YORK', labelLon: -74.4, labelLat: 43.0 },
      { name: 'Vermont', label: 'VERMONT', labelLon: -72.92, labelLat: 43.6, labelSize: 13 },
      { name: 'Massachusetts' },
    ],
    lakes: [
      { name: 'Lake George', label: 'Lake George', labelLon: -73.58, labelLat: 43.58, labelAnchor: 'start', labelSize: 11 },
      { name: 'Lake Champlain', label: 'Lake Champlain', labelLon: -73.16, labelLat: 44.05, labelAnchor: 'start', labelSize: 11 },
    ],
    dots: [
      { name: 'Lake George', date: 'Sept 8, 1755', lat: 43.42, lon: -73.71, heavy: true, anchor: 'end', dateBelow: true },
      { name: 'Crown Point', lat: 44.03, lon: -73.43, color: '#8a8175', anchor: 'start' },
      { name: 'Ticonderoga', lat: 43.84, lon: -73.39, color: '#8a8175', anchor: 'start' },
      { name: 'Fort Edward', lat: 43.27, lon: -73.58, color: '#8a8175', anchor: 'end' },
      { name: 'Albany', lat: 42.65, lon: -73.75, color: '#8a8175', anchor: 'end' },
    ],
  },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: 'One day, three fights' },
    { label: 'Casualties', value: '~330 British' },
    { label: 'Winner', value: 'Britain & Mohawk', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'Johnson\'s provincial army', str: '~1,500 provincials + Mohawk allies', cmd: 'Maj. Gen. William Johnson', note: 'Held a barricade of wagons and logs with cannon at the head of the lake.' },
    { side: 'c', tag: 'French', force: 'Dieskau\'s detachment', str: '~1,500 regulars, militia & allies', cmd: 'Baron Jean-Armand Dieskau', note: 'Ambushed the morning column, then broke against the guns and was captured.' },
  ],
  casualties: { union: 330, csa: 285, unionLabel: 'British & Mohawk ~330', csaLabel: 'French & allies ~230–340', footnote: 'Counts are contested and Native losses on both sides were under-recorded; the Mohawk took disproportionate losses in the morning ambush.' },
  commanders: [
    {
      name: 'William Johnson',
      role: 'Cmdr., British',
      side: 'u',
      img: '',
      bio: 'An Irish-born New York agent to the Iroquois, not a professional soldier, Johnson brought to the Lake George campaign the Mohawk alliance that Braddock had thrown away on the Ohio. He was wounded early in the hip and carried from the field; he built Fort William Henry after the battle, was made a baronet, and was voted five thousand pounds by Parliament.',
    },
    {
      name: 'Phineas Lyman',
      role: 'Second in command, British',
      side: 'u',
      img: '',
      bio: 'A Connecticut general who took effective command after Johnson was wounded in the first rush and directed the barricade defense through the long afternoon that finally broke Dieskau\'s grenadiers. The men of New England held that it was Lyman who actually won the day, and that he was cheated of the credit when all the rewards went to Johnson.',
    },
    {
      name: 'Hendrick Theyanoguin',
      role: 'Mohawk sachem',
      side: 'n',
      sideLabel: 'MOHAWK',
      img: '/war-img/fi-king-hendrick.jpg',
      bio: 'An eminent and elderly Mohawk leader who brought the Mohawk warriors to Johnson\'s campaign and warned plainly against splitting the force before the morning march. He led the morning column on horseback, was killed when his horse was shot from under him in the ambush, and his death was an irreplaceable loss to the Mohawk and to the British alliance.',
    },
    {
      name: 'Baron Jean-Armand Dieskau',
      role: 'Cmdr., French',
      side: 'c',
      img: '',
      bio: 'A French professional general who marched south to pre-empt the British and set the morning ambush that killed Williams and Hendrick. He then threw his grenadiers in column against the British cannon, was badly wounded in the legs and then again in a wound he said pierced his bladder, was abandoned by his retreating men, and was taken prisoner.',
    },
  ],
  outcome: {
    verdict: 'British victory · the south end of the corridor secured',
    text: 'Lake George was a real victory after the catastrophe on the Monongahela, but its reach was limited from the start. Johnson had no siege artillery to take the stone fort at Crown Point, the lakes were closing for the season, his Mohawk allies were withdrawing, and the French were already fortifying Ticonderoga to the north. He built Fort William Henry at the south end of Lake George and finished Fort Edward on the Hudson, anchoring the British end of the corridor. The French held Crown Point and Ticonderoga; the door was not opened, only locked from the British side. The Mohawk, who had been central to the victory, paid a price out of all proportion, losing Hendrick and dozens of fighters in the morning ambush, a loss a small people could not easily absorb.',
  },
  sections: [
    {
      id: 'the-bloody-morning-scout',
      eyebrow: 'The march south',
      title: 'The Bloody Morning Scout',
      blurb: 'Johnson sends a thousand men and the Mohawk south to meet the French, and they walk into a trap in a ravine three miles from camp.',
      img: '/war-img/fi-king-hendrick.jpg',
    },
    {
      id: 'the-wagons-and-the-guns',
      eyebrow: 'The camp stands',
      title: 'The wagons and the guns',
      blurb: 'Behind a barricade of wagons and cannon, the provincials hold while Dieskau\'s grenadiers march into the grapeshot and the Mohawk kin on both sides refuse to kill each other.',
    },
    {
      id: 'bloody-pond-and-after',
      eyebrow: 'The reckoning',
      title: 'Bloody Pond and after',
      blurb: 'A victory that stops short of its objective: Johnson builds two forts, collects a baronetcy, and leaves the corridor half open for two more years of fighting.',
    },
  ],
  sectionHref: (id) => `/war-french-indian/battles/lake-george/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function LakeGeorgePage() {
  return <BattleDossier data={DATA} />
}
