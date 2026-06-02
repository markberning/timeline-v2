'use client'

// BATTLE dossier (Fort Donelson) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). The stat strip leads with the mass
// SURRENDER (the battle’s signature), the bar shows killed/wounded.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).
// FLAG: the old page displayed Union casualties with the annotation "killed & wounded"
// in the legend; BattleData.casualties only accepts integers. Using union:2700.
// The "killed & wounded" qualifier is lost in the conversion.

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-donelson' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Fort Donelson',
  date: 'February 11–16, 1862',
  place: 'Cumberland River, Tennessee',
  hero: {
    img: '/war-img/fort-donelson-hero.jpg',
    pal: ['#22303a', '#3a2a2a', '#0a0e10'],
    credit: 'Battle of Fort Donelson · Kurz & Allison · public domain',
    // Kurz & Allison chromolithograph (PD)
  },
  stats: [
    { label: 'Duration', value: '5 days' },
    { label: 'Captured', value: '~13,000' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Grant’s army & gunboats', str: '~25,000 troops', cmd: 'Brig. Gen. Ulysses S. Grant', note: 'Backed by Foote’s river gunboats, and willing to demand everything.' },
    { side: 'c', tag: 'Confederacy', force: 'Fort Donelson garrison', str: '~17,000 troops', cmd: 'Floyd, Pillow & Buckner', note: 'Three generals who could not agree, two of whom fled in the night.' },
  ],
  casualties: { union: 2700, csa: 2000, unionLabel: 'Union ~2,700 killed & wounded', csaLabel: 'Confederacy ~2,000' },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'Grant marched his army the dozen miles overland from Fort Henry and pressed the siege from the land side after the gunboats were beaten off the river. When the Confederate breakout broke his right, he read the captured soldiers’ packed knapsacks for what they were, ordered an attack all along the line, and the next morning demanded an unconditional surrender that bagged the whole garrison.' },
    { name: 'Andrew H. Foote', role: 'Gunboats, Union', side: 'u', img: '/war-img/cmdr/foote.jpg', bio: 'Foote brought his flotilla of ironclads and timberclads up the Cumberland on February 14 and closed to within 400 yards of the fort, the same play that had taken Fort Henry. The water batteries on the bluff poured plunging fire into his decks, shot away the steering of two ironclads, and wounded Foote in the foot as a shot tore through his flagship’s pilot house, driving the fleet back downriver.' },
    { name: 'Charles F. Smith', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/cf-smith.jpg', bio: 'Ordered by Grant to take the fort, Smith led his division up the icy slope against the outer works on the Confederate right, rode out in front where his men could see him, and seized the entrenchments held by the thinned-out 30th Tennessee. His foothold inside the outer line made the next morning’s defense look hopeless and helped force the surrender.' },
    { name: 'Simon B. Buckner', role: 'Surrendered, CSA', side: 'c', img: '/war-img/cmdr/buckner.jpg', bio: 'Left holding the garrison after Floyd and Pillow fled, Buckner sent Grant, his old West Point friend, a note asking for terms and got the demand for unconditional surrender instead. He called the terms ungenerous but bowed to the overwhelming force against him and gave up the fort and its army on February 16.' },
    { name: 'John B. Floyd', role: 'Fled, CSA', side: 'c', img: '/war-img/cmdr/floyd.jpg', bio: 'The senior commander inside the fort, Floyd had been U.S. Secretary of War before the war and feared prosecution if the North took him prisoner. Rather than face the surrender, he handed command to Pillow and escaped before dawn on February 16, taking the only steamboat and his two Virginia regiments with him.' },
    { name: 'Gideon J. Pillow', role: 'Fled, CSA', side: 'c', img: '/war-img/cmdr/pillow.jpg', bio: 'Pillow led the February 15 breakout that drove back the Union right and threw open the road to Nashville, then ordered his men to stop and march back into the trenches, closing the escape they had just opened. When Floyd passed him the command that night, Pillow passed it on to Buckner and slipped across the Cumberland in a small boat.' },
    { name: 'Nathan B. Forrest', role: 'Cavalry, CSA', side: 'c', img: '/war-img/cmdr/forrest.jpg', bio: 'Forrest screened the army with his cavalry through the siege and refused to be surrendered, saying he had not come to give up his command. On the night before the capitulation he led about 700 of his horsemen out through the waist-deep icy backwater of Lick Creek and rode clear of the trap, finding no enemy in the way.' },
  ],
  outcome: {
    verdict: 'Decisive Union victory · the West cracks open',
    text: 'Grant’s demand for “unconditional surrender” gave the North its first major victory of the war and a new hero, and bagged an entire Confederate army, the largest mass surrender on the continent to that point. With the river forts gone, the Confederacy’s western line collapsed: Nashville, the first Confederate state capital to fall, was abandoned within days. The road into the heart of the South was open.',
  },
  sections: [
    { id: 'the-rivers', eyebrow: 'The western strategy', title: 'The Rivers into the South', blurb: 'Two rivers run like highways into the Confederacy. Fort Henry falls to the gunboats; Grant marches on its sister fort, Donelson.', img: '/war-img/donelson-rivers.png' },
    { id: 'the-gunboats', eyebrow: 'February 14', title: 'The Gunboats Repulsed', blurb: 'Foote’s (North) ironclads steam up to pound the fort, and the fort’s river guns beat them back down the Cumberland.', img: '/war-img/donelson-gunboats.jpg' },
    { id: 'the-breakout', eyebrow: 'February 15', title: "The Escape That Wasn’t", blurb: 'A Confederate attack tears open an escape road, and then Pillow (South) orders his men back into the trenches, throwing it away.', img: '/war-img/cmdr/grant.jpg' },
    { id: 'unconditional-surrender', eyebrow: 'February 16', title: 'Unconditional Surrender', blurb: 'Floyd and Pillow flee in the night; Forrest rides out through icy water; Buckner (South) is left to surrender to his old friend Grant.', img: '/war-img/donelson-dover-hotel.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/fort-donelson/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function FortDonelsonPage() {
  return <BattleDossier data={DATA} />
}
