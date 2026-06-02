'use client'

// BATTLE dossier (Battle of Mansfield / Sabine Crossroads). Same shape as
// Port Hudson/Shiloh: hero · collapsible At-a-glance · outcome card ·
// commanders strip · section list. Content produced through the war content
// pipeline (audits/war-content-pipeline.md): audits/war-pipeline/mansfield-final.md
// + mansfield-factpack.md.

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero credit — /war-img/mansfield-hero.jpg has no source/PD comment in the original; credit left blank pending verification.
// FLAG: original stat strip used ['Date', 'Apr 8, 1864'] / ['Captured', '~1,500'] / ['Winner', 'Confederacy']
// rather than the standard Duration/Casualties/Winner pattern; mapped verbatim as label/value pairs.
// FLAG: original CasBlock had a disclaimer footnote below the bar:
// "Union ≈ 2,100–2,235, with some 1,500 captured or missing, the fingerprint of a rout, not a stand-up fight.
// Confederate ≈ 1,000 (Kirby Smith’s estimate; no precise returns were recorded)."
// That sub-bar text is not representable in the casualties schema; preserved verbatim in `note`.
const DATA: BattleData = {
  theatre: 'tmis',
  crumbs: civilWarCrumbs({ theatre: 'tmis', battleId: 't-mansfield' }),
  backHref: '/war-civil-war/trans-mississippi',
  eyebrow: 'Battle · Trans-Mississippi',
  title: 'The Battle of Mansfield',
  date: 'April 8, 1864',
  place: 'De Soto Parish, Louisiana (Sabine Crossroads)',
  hero: {
    img: '/war-img/mansfield-hero.jpg',
    pal: ['#3a3320', '#4a2a1a', '#100806'],
    credit: '', // FLAG: no source/PD confirmed for this image
  },
  stats: [
    { label: 'Date', value: 'Apr 8, 1864' },
    { label: 'Captured', value: '~1,500' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Red River expedition', str: '~12,000 engaged troops', cmd: 'Maj. Gen. Nathaniel P. Banks', note: 'An army strung out for miles on one road; only its head could fight.' },
    { side: 'c', tag: 'Confederacy', force: 'District of West Louisiana', str: '~8,800–11,000 troops', cmd: 'Maj. Gen. Richard Taylor', note: 'Outnumbered overall, but waiting where the road let him be bigger.' },
  ],
  casualties: { union: 2235, csa: 1000, unionLabel: 'Union ~2,235', csaLabel: 'Confederacy ~1,000' },
  note: <>Union ≈ 2,100–2,235, with some 1,500 captured or missing, the fingerprint of a rout, not a stand-up fight. Confederate ≈ 1,000 (Kirby Smith&apos;s estimate; no precise returns were recorded).</>,
  commanders: [
    { name: 'Nathaniel P. Banks', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/banks.jpg', bio: 'Banks pushed his army up a single road toward Shreveport against the warnings of his own cavalry commander and decided to fight at the clearing south of Mansfield even after being told a full battle there would go badly. When the front collapsed he rode into the retreat and pleaded with his men to stand, and they ran past him; the defeat broke his Red River Campaign and effectively ended his military career.' },
    { name: 'William B. Franklin', role: 'XIX Corps, Union', side: 'u', img: '/war-img/cmdr/franklin.jpg', bio: 'Franklin commanded the XIX Corps and was the senior field general under Banks during the advance. He was wounded in the leg in the fighting but stayed on the field in command, and the bulk of his corps, including Emory’s division, was still intact to backstop the rout down the road.' },
    { name: 'Thomas E. G. Ransom', role: 'XIII Corps, Union', side: 'u', img: '/war-img/cmdr/ransom.jpg', bio: 'Ransom led the leading infantry detachment, the XIII Corps troops at the head of the column who took the worst of the assault. He was wounded trying to rally the wreck as the Confederate crescent folded his line in from both flanks.' },
    { name: 'David Dixon Porter', role: 'Fleet, Union', side: 'u', img: '/war-img/cmdr/dd-porter.jpg', bio: 'Porter’s gunboat fleet had carried the expedition up the Red River, but Banks left the river for the inland road, so the fleet was not present at the battle. After the defeat the falling river nearly stranded his squadron, which escaped only when soldiers dammed the rapids to float the boats over.' },
    { name: 'Richard Taylor', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/richard-taylor.jpg', bio: 'Taylor chose the clearing south of Mansfield as the place to make his stand and waited for two hours while the Union column piled up in front of his crescent. When he ordered the assault around four o’clock, his concentrated army wrecked the head of a force that outnumbered him across the theater, winning one of the most lopsided victories of the Trans-Mississippi war.' },
    { name: 'Alfred Mouton †', role: 'Division, CSA', side: 'c', img: '/war-img/cmdr/mouton.jpg', bio: 'Mouton led the opening Confederate charge east of the road, straight into the Union line on Honeycutt Hill, and was killed in the first rush along with several of his regimental commanders. A Louisiana native and slaveholding sugar planter, he died about three miles from the town he was defending.' },
    { name: 'Prince de Polignac', role: 'Division, CSA', side: 'c', img: '/war-img/cmdr/polignac.jpg', bio: 'Camille de Polignac, a French nobleman who had crossed an ocean to fight for the Confederacy, inherited Mouton’s division by battlefield promotion the moment Mouton fell. He pressed the shattered division onward and helped drive the broken Union front south into its own jammed wagon train.' },
  ],
  outcome: {
    verdict: 'Confederate victory · the campaign breaks',
    text: 'On April 8, 1864, Maj. Gen. Richard Taylor (South), outnumbered across the theater, concentrated his army against the head of Maj. Gen. Nathaniel Banks’s (North) strung-out column and shattered it on a single narrow road through the Louisiana pines. The disproportion flipped the usual Civil War arithmetic: the attacker lost roughly half what the defender did, who saw some 1,500 men marched off as prisoners. Mansfield broke the Union’s Red River Campaign, and every one of its four aims died with it: no Shreveport, no flag planted in Texas, no 100,000 bales of slave-grown cotton, no expanded pro-Union government. The whole bungled expedition effectively ended Banks’s military career.',
  },
  sections: [
    { id: 'the-river-and-the-cotton', eyebrow: 'Red River, 1864', title: 'The River and the Cotton', blurb: 'Why a Union army was 150 miles up a Louisiana river: to take Shreveport, warn off the French in Mexico, and seize the slave-grown cotton Banks (North) reached for.', img: '/war-img/cmdr/banks.jpg' },
    { id: 'the-narrow-road', eyebrow: 'April 8, morning', title: 'One Road Through the Pines', blurb: 'Banks’s column strung out for miles on a single stage road; Taylor (South) waited at a clearing, counting not the totals but the road, where a smaller army could be bigger at the point of contact.', img: '/war-img/mansfield-overview.png' },
    { id: 'the-rout', eyebrow: 'April 8, ~4 p.m.', title: 'The Crescent Closes', blurb: 'Two hours of waiting, then Mouton (South) charges and falls; Walker (South) wraps the flank; the Union line breaks and slams into its own wagon train on the one road.', img: '/war-img/mansfield-the-rout.png' },
    { id: 'what-it-cost', eyebrow: 'The reckoning', title: 'The Campaign Breaks on a Back Road', blurb: 'A lopsided Confederate win, Mouton dead three miles from home, Emory’s (North) backstop the only southern edge, and every aim of the campaign, cotton included, gone.', img: '/war-img/cmdr/richard-taylor.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/trans-mississippi/mansfield/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function MansfieldPage() {
  return <BattleDossier data={DATA} />
}
