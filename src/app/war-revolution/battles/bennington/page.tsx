'use client'

// BATTLE dossier (The Battle of Bennington, August 16, 1777), American Revolution.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact + storytelling + newcomer-clarity + framing, parallel) →
// reconcile → revise. Sides are war-aware: American (Continental blue) /
// British-German on the British red rail (a British expedition built mostly of
// German troops in British service), set via sideNames + sideColors from the rev
// skin vars; the win marker rides the AMERICAN rail (decisive militia victory).
// Portrait honesty per the final: Baum and Breymann have no verified portrait
// (img: '', the bios say so); Warner has no portrait from life, so his card
// carries the statue photo with the imagined-engravings caveat as an <em>Image:>
// note; Stark reuses the born-verified in-repo Tenney copy from Bunker Hill.
// Image prefix rev-bennington-*. The battlefield is in NEW YORK, not Vermont;
// the battle is named for its objective, the depot.
// Sources: audits/war-pipeline/rev-bennington-final.md (+ rev-bennington-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-bennington' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1777',
  title: 'Bennington',
  date: 'August 16, 1777',
  place: 'Walloomsac, New York',
  note: 'Burgoyne sent a column of horseless German cavalry to seize an American supply depot; the militia they were told would scatter destroyed the column twice in one afternoon, on a battlefield not in Bennington and not in Vermont.',
  hero: { img: '/war-img/rev-bennington-hero.jpg', pal: ['#3b342a', '#6e5638', '#15110c'], credit: 'engraving after Alonzo Chappel · 1874 · National Archives and Records Administration / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH-GERMAN' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'two fights, ~3:00 p.m. to dusk, August 16' },
    { label: 'Casualties', value: '~900–1,000 British-German (about 700 captured) · ~70 American' },
    { label: 'Winner', value: 'America, decisively', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'Stark\'s militia army', str: '~2,000–2,500 engaged across the day', cmd: 'Brig. Gen. John Stark', note: 'About 1,500 New Hampshire militia raised in roughly a week, plus Vermont rangers, Massachusetts militia, and Stockbridge Mohican allies; Warner\'s ~330-man Continental regiment marched from Manchester and decided the second fight.' },
    { side: 'c', tag: 'British-German', force: 'Burgoyne\'s foraging expedition', str: '~800 under Baum, then ~550–650 relief under Breymann', cmd: 'Lt. Col. Friedrich Baum', note: 'A polyglot column of dismounted Brunswick dragoons, British marksmen, German light infantry and gunners with two cannon, Loyalists, Canadians, and about 100 Native warriors; roughly half did not speak English.' },
  ],
  casualties: {
    union: 70, csa: 950,
    unionLabel: 'American ~70',
    csaLabel: 'British-German ~900–1,000',
    footnote: 'British-German: about 900 to 1,000 total lost across both fights, roughly 200–230 killed and wounded plus about 700 captured (the firmest single number), all four cannon taken, and Baum dead of wounds. American: about 70, commonly given as roughly 30 killed and 40 wounded.',
  },
  commanders: [
    { name: 'John Stark', role: 'Cmdr., New Hampshire militia, American', side: 'u', img: '/war-img/rev-bennington-stark.jpg', bio: 'The Bunker Hill veteran whose New Hampshire men held the rail fence in 1775 (his fuller story lives on that page). In early 1777 Congress promoted junior officers over him; Stark resigned his Continental commission and went home. When New Hampshire raised a militia brigade in July he took command only on the condition that he answer to New Hampshire alone, which is why, days before the battle, he refused orders to march to the Hudson and stayed to cover Bennington. Congress made him a brigadier general on October 4, 1777.' },
    { name: 'Seth Warner', role: 'Cmdr., Green Mountain Boys (Continental), American', side: 'u', img: '/war-img/rev-bennington-warner-statue.jpg', bio: <>A Connecticut-born leader of the original Green Mountain Boys (the Grants settlers&apos; militia in their land feud with New York), Warner helped take Ticonderoga in May 1775 and fought the rearguard action at Hubbardton in July 1777. At Bennington his Continental regiment of about 330 marched from Manchester and arrived at the critical moment to stop Breymann&apos;s relief column. His health broke during the war; he died in 1784, at 41. No portrait of him from life exists; his statue stands at Bennington. <em>Image: his statue in front of the Bennington Battle Monument (the 19th-century engravings of him are inventions); the statue is how Vermont chose to remember him.</em></> },
    { name: 'Friedrich Baum', role: 'Cmdr., the expedition, British-German', side: 'c', img: '', bio: 'Lieutenant colonel commanding the Brunswick dragoon regiment Prinz Ludwig, the horseless German cavalry the expedition was meant to mount. By the standard account he spoke no English, in a column where roughly half the men did not either. Out of ammunition on his hilltop, he led his dragoons\' broadsword charge down the slope and fell shot through the body; he died of his wounds within two days and was buried near the field in a grave nobody has ever found. No portrait of him survives.' },
    { name: 'Heinrich von Breymann', role: 'Cmdr., relief column, British-German', side: 'c', img: '', bio: 'Lieutenant colonel commanding the Brunswick grenadiers (heavy assault infantry) and light infantry of Burgoyne\'s advance guard, Breymann led the relief column whose march became notorious: roughly 25 miles in over a day and a half through rain and mud, the ammunition carts bogging on the roads. He arrived to find Baum\'s force already destroyed, fought to dusk, was wounded, and escaped in the dark with perhaps two-thirds to three-quarters of his men. Seven weeks later he was killed at Saratoga defending the redoubt that still bears his name. No portrait of him survives.' },
  ],
  outcome: {
    verdict: 'Decisive American victory · militia destroy two columns of regulars',
    text: 'Stark\'s militia destroyed both halves of the expedition: about 900 to 1,000 of Burgoyne\'s men killed, wounded, or captured, with all four cannon taken, for roughly 70 American casualties. Burgoyne got nothing he sent for (no horses, no cattle, no flour), most of his Native allies abandoned the campaign afterward, and the road that ended two months later with Burgoyne\'s surrender at Saratoga got shorter. Militia raised in about a week had beaten European regulars in the open field.',
  },
  sections: [
    { id: 'marching-for-horses', eyebrow: 'The expedition', title: 'Marching for horses', blurb: 'Burgoyne\'s invasion army had outrun its food, and its German cavalry regiment had no horses. The fix was a raid on a lightly held depot in supposedly friendly country. The depot was Bennington, the country was not friendly, and waiting in front of it were 1,500 New Hampshire militia under a Bunker Hill veteran with a grievance.' },
    { id: 'one-continued-clap-of-thunder', eyebrow: 'The two fights', title: '"One continued clap of thunder"', blurb: 'After a day of rain, Stark\'s militia circled through the woods and swallowed Baum\'s hilltop whole; the dragoons\' saber charge died on the slope. Then a second German column marched into the wreckage, and the battle had to be won all over again before dark.' },
    { id: 'a-gathering-storm', eyebrow: 'What it meant', title: 'A gathering storm', blurb: 'Burgoyne lost a seventh of his field army and got nothing back: no horses, no flour, no Loyalist rising. What rose instead was the militia, and the road from Bennington ran straight downhill to Saratoga.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/bennington/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function BenningtonPage() {
  return <BattleDossier data={DATA} />
}
