'use client'

// BATTLE dossier (The Battle of Bunker Hill, June 17, 1775), American Revolution.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates → reconcile → revise. Sides are war-aware: American (Continental
// blue) / British (red), set via sideNames + sideColors. Commander bios are gated,
// born-verified prose; Clinton and Gage ship without portraits (no candidates in
// the fact pack). Sources: audits/war-pipeline/rev-bunker-hill-final.md.

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-bunker-hill' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1775',
  title: 'The Battle of Bunker Hill',
  date: 'June 17, 1775',
  place: 'Charlestown peninsula, Massachusetts',
  note: 'Britain took the hill in three assaults and lost more men doing it than in any other battle of the war, and the battle is named for the wrong hill.',
  hero: { img: '/war-img/rev-bunkerhill-hero.jpg', pal: ['#3b2d20', '#64402a', '#170f08'], credit: 'Millar/Lodge engraving · 1783 · The Metropolitan Museum of Art / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: '~2 hours of infantry combat (naval cannonade from dawn)' },
    { label: 'Casualties', value: '1,054 British · ~420–450 American' },
    { label: 'Winner', value: 'Britain, at crippling cost', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The redoubt (their overnight-dug dirt fort) and the rail-fence line', str: '~2,400–3,000 engaged across the day, men rotating in and out', cmd: 'Col. William Prescott (in the redoubt)', note: 'No clean command structure: Prescott held the redoubt, Stark ran his own flank at the rail fence and beach, and Putnam rode the field without authority over either; the men dug their fort overnight and fought it nearly out of powder.' },
    { side: 'c', tag: 'British', force: 'The Boston garrison', str: '~2,200–3,000 engaged across the day, with reinforcements', cmd: 'Maj. Gen. William Howe', note: 'Professional regulars who re-formed twice and walked up the hill three times into the heaviest infantry fire of the era, Howe leading every assault on foot; they took the position with the bayonet when the defenders\' powder ran out.' },
  ],
  casualties: { union: 435, csa: 1054, unionLabel: 'American ~420–450', csaLabel: 'British 1,054', footnote: 'British: firm from Gage\'s official return, 226 killed and 828 wounded, roughly 40 to 50 percent of those engaged, about a hundred of them officers. American: ~115–140 killed (including Maj. Gen. Joseph Warren), ~270–305 wounded, ~30 captured; most casualties came in the retreat across the Neck, not in the redoubt.' },
  commanders: [
    { name: 'William Prescott', role: 'Cmdr. in the redoubt, American', side: 'u', img: '/war-img/rev-bunkerhill-prescott.jpg', bio: <>A Pepperell man and veteran of the 1745 Louisbourg expedition (a colonial assault on a French fortress in Canada), Prescott led the fortifying force and commanded in the redoubt (the earth fort his men dug overnight) all day. At dawn, with the warships firing and his exhausted men flinching, he climbed onto the parapet (the flat top of the fort’s earth wall) and walked it deliberately in a light linen gown, giving directions, to show the cannonballs could be ignored. In the final melee he parried bayonets with his sword and got out, his clothes pierced through, he untouched. No authentic life portrait of him exists. <em>Image: W. W. Story’s 1881 bronze at the Bunker Hill Monument · photo by Mys 721tx · CC BY-SA 3.0 · Wikimedia Commons.</em></> },
    { name: 'Joseph Warren', role: 'Volunteer (commissioned major general), American', side: 'u', img: '/war-img/rev-bunkerhill-warren.jpg', bio: 'A Boston physician, president of the Massachusetts Provincial Congress (the rebels’ stand-in legislature for the colony), and the patriot movement’s operating chief since April, Warren had been commissioned a major general three days before the battle (the commission not yet acted on). On June 17 he asked Putnam where the fighting would be heaviest and went there. When both Putnam and Prescott offered him command he refused it, saying he had come to serve as a volunteer, and took a musket in the ranks. He was killed in the battle’s final moments.' },
    { name: 'John Stark', role: 'Cmdr. on the left flank, American', side: 'u', img: '/war-img/rev-bunkerhill-stark.jpg', bio: 'A New Hampshire veteran of Rogers’ Rangers (a scouting force of the French and Indian War), Stark arrived at midday, walked his big regiment across the shot-swept Neck (the narrow land bridge onto the peninsula) at a deliberate pace, and took the open left flank: the rail fence and, crucially, the narrow Mystic River beach below it, where he had a stone wall thrown across the strand. His men’s rotating volleys destroyed the British light-infantry column on the beach and killed the flanking plan. He recalled the British dead lying “as thick as sheep in a fold.”' },
    { name: 'Israel Putnam', role: 'Senior officer on the field, American', side: 'u', img: '/war-img/rev-bunkerhill-putnam.jpg', bio: 'A celebrated Connecticut veteran of the French and Indian War (the previous war, against France) and the senior general present, Putnam rode between Bunker and Breed’s Hills all day, moving men and tools, trying to entrench Bunker Hill proper as a fallback, and declining command in the redoubt when Prescott offered it. Whether he was the battle’s commander, its energetic odd-job man, or an obstruction became a genuine nineteenth-century argument. Who “commanded the battle” has no clean answer.' },
    { name: 'William Howe', role: 'Field cmdr., British', side: 'c', img: '/war-img/rev-bunkerhill-howe.jpg', bio: 'Howe led all three assaults in person, on foot, in the front line, and by the end of the day every member of his personal staff had been killed or wounded. Watching his line stagger back, he wrote that “there was a moment that I never felt before.” Many historians read Bunker Hill as the trauma behind his later caution as a commander, an interpretation that is widely held but not provable. He succeeded Gage in overall command that October.' },
    { name: 'Henry Clinton', role: 'Maj. Gen., British', side: 'c', img: '', bio: 'Clinton urged a landing at Charlestown Neck behind the Americans, which would have trapped the whole force on the peninsula; he was overruled in favor of a direct assault. Watching from the Copp’s Hill battery (a British cannon position in Boston, facing the battlefield across the water), he crossed the water on his own initiative to help rally the shaken units for the third assault. That evening he wrote the battle’s epitaph: “A dear bought victory, another such would have ruined us.”' },
    { name: 'Thomas Gage', role: 'Cmdr. in chief at Boston, British', side: 'c', img: '', bio: 'The commander of the besieged garrison, Gage had finalized a plan on June 12 to break out and seize the heights around Boston, with the move set for June 18. The Americans, tipped off, moved first by three days. He directed the battle from Boston while Howe led it in the field, and his report home, that the loss was greater than the army could bear, ended his career. London recalled him within weeks; Howe succeeded him in October.' },
  ],
  outcome: {
    verdict: 'British tactical victory · the costliest battle of Britain’s war',
    text: 'Britain took the hill, and the taking cost 1,054 casualties, the bloodiest single battle of the entire war for the British army. The news ended Gage’s command, convinced London this was a real war requiring a real army, and taught the Americans a dangerously seductive lesson about militia behind earthworks. The British fortified the peninsula, held it nine months, and handed it back when they evacuated Boston in March 1776.',
  },
  sections: [
    { id: 'the-wrong-hill', eyebrow: 'The night dig', title: 'The wrong hill', blurb: 'A leaked British plan, a midnight march, and by dawn a fort standing on the wrong hill, lower, closer, and impossible for the British to ignore. Whether that was a blunder or a dare has never been settled.', img: '/war-img/rev-bunkerhill-page-plan.jpg' },
    { id: 'three-times-up-the-hill', eyebrow: 'The assaults', title: 'Three times up the hill', blurb: 'A beach as wide as a wagon, a burning town, and three British assaults walking uphill into massed fire until the defenders’ powder ran out and the bayonets came over the wall.', img: '/war-img/rev-bunkerhill-pyle.jpg' },
    { id: 'a-dear-bought-victory', eyebrow: 'What it cost', title: 'A dear bought victory', blurb: 'Britain won the hill and lost a fifth of an army taking it. The shock ended one general’s career, haunted another, fooled the losers into overconfidence, and handed Washington an army convinced of itself and almost out of powder.', img: '/war-img/rev-bunkerhill-homer-coppshill.jpg' },
  ],
  sectionHref: (id) => `/war-revolution/battles/bunker-hill/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function BunkerHillPage() {
  return <BattleDossier data={DATA} />
}
