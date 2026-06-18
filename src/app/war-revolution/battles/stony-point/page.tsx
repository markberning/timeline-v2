'use client'

// BATTLE dossier (The Battle of Stony Point, night of July 15–16, 1779), American
// Revolution. Thin data wrapper over the shared <BattleDossier>. Content produced
// through the war content pipeline (audits/war-content-pipeline.md): fact pack →
// author → critic gates (fact + storytelling + newcomer-clarity + framing, parallel)
// → reconcile → revise. Three lean sections (a small, perfect battle, not a
// flagship). Sides: American (rev blue rail) / British (red rail); the win marker
// rides the American rail. Portrait honesty per the final: Fleury, Febiger, Butler,
// Murfree, and Johnson all ship with NO image (img: '', no born-verified portrait of
// any of them was found — a missing portrait beats a wrong one). The prisoner total
// is honest only as a range (~470–540); British killed = the official ~20, with the
// period American claim of 63 noted as inflated and not used. Image prefix
// rev-stony-point-* (+ born-verified in-repo portrait reuses for Wayne and Clinton).
// Sources: audits/war-pipeline/rev-stony-point-final.md (+ rev-stony-point-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-stony-point' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1779',
  title: 'Stony Point',
  date: 'Night of July 15–16, 1779',
  place: 'Stony Point, New York (west bank of the Hudson at King\'s Ferry, the main river crossing between New England and the mid-Atlantic states, about 12 miles below West Point)',
  note: 'Washington sent his picked light infantry on a thirteen-mile night march with unloaded muskets to storm a point the British called close to impregnable; it fell in about twenty-five minutes, the garrison asked for mercy and got it, and then Washington decided the ground was not worth holding and hauled off the guns.',
  hero: { img: '/war-img/rev-stony-point-hero.jpg', pal: ['#46392a', '#8a7659', '#16110a'], credit: 'Constantino Brumidi · fresco · 1871 · United States Capitol / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'about 25–30 minutes of fighting, after a 13-mile night approach march; the columns stepped off around 11:30 p.m. and Wayne\'s victory dispatch is dated 2 o\'clock in the morning' },
    { label: 'Casualties', value: '~15 killed, ~83 wounded American · about 20 killed British (American claims ran as high as 63), with roughly 470–540 of the garrison taken prisoner' },
    { label: 'Winner', value: 'United States: the army\'s picked light infantry took the point with unloaded muskets, and the surrendering garrison asked for quarter and got it; the trophy was the proof, not the ground, and Washington abandoned the point three days later', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The Corps of Light Infantry', str: '~1,200–1,350 engaged (of a corps about 1,500 strong)', cmd: 'Brig. Gen. Anthony Wayne', note: 'The army\'s elite, re-formed from the picked light companies of the Continental line and drilled to Steuben\'s standard; two columns went in with muskets unloaded and bayonets fixed, only a center detachment allowed to fire as a diversion.' },
    { side: 'c', tag: 'British', force: 'The Stony Point garrison', str: 'about 600–700', cmd: 'Lt. Col. Henry Johnson', note: 'The 17th Regiment of Foot at its core, with a Highland grenadier company, Loyalists, and Royal Artillery, holding a rock surrounded by water on three sides behind gun batteries, earthworks, and two belts of abatis; British engineers called it close to impregnable.' },
  ],
  casualties: {
    union: 98, csa: 566,
    unionLabel: 'American ~98 (about 15 killed, 83 wounded)',
    csaLabel: 'British ~20 killed · 74 wounded · ~470–540 captured',
    footnote: 'American: about 15 killed and 83 wounded, roughly 98; many fell in the twenty-man forlorn-hope parties hacking lanes through the abatis. British: about 20 killed by the official return (period American claims ran to 63, the low official figure is what historians accept), 74 wounded, and roughly 470 to 540 captured; quarter was asked and given, and contemporaries on both sides said so.',
  },
  commanders: [
    { name: 'Anthony Wayne', role: 'Cmdr., Corps of Light Infantry, American', side: 'u', img: '/war-img/rev-stony-point-wayne.jpg', bio: 'A Pennsylvania tanner\'s son and surveyor turned brigadier, whose division had been bayoneted in the dark at Paoli in September 1777. He demanded the court of inquiry and then the court-martial that cleared him "with the highest honor," and took command of the new light corps on July 1, 1779. At Stony Point he marched with the south column and was grazed across the head by a musket ball at the inner abatis and knocked down. Minutes later he was inside the fort, writing to Washington at two in the morning with a bandaged head. His two-sentence dispatch is the battle in his own words.' },
    { name: 'François-Louis Teissèdre de Fleury', role: 'Cmdr., south column van, American', side: 'u', img: '', bio: 'A French career engineer-officer who had volunteered with the Continentals since 1777 and already been cited for gallantry at Fort Mifflin. At Stony Point he led the 150-man advance party of the south column and was officially judged the first man into the works, striking the British colors with his own hand. Congress voted him a silver medal: the first medal it had struck actually fabricated, made in Paris, and the only one of the war\'s medals given to a foreign junior officer.' },
    { name: 'Christian Febiger', role: 'Cmdr., 1st Light Regiment, American', side: 'u', img: '', bio: 'A Danish-born veteran of Bunker Hill and the march on Quebec, nicknamed "Old Denmark," colonel of the 1st light regiment and in the thick of the south column\'s assault. By one standard account he steadied the column for the moment Wayne went down.' },
    { name: 'Richard Butler', role: 'Cmdr., north column, American', side: 'u', img: '', bio: 'An Irish-born Pennsylvania frontier officer who led the north column with the 2nd regiment along the river, cut through the abatis with light losses, and met the south column at the summit. He was killed years later, in 1791, at St. Clair\'s Defeat on the western frontier.' },
    { name: 'Hardy Murfree', role: 'Cmdr., center diversion, American', side: 'u', img: '', bio: 'A North Carolina major whose two companies fired the only American shots of the night, the noisy diversion at the center that pulled Johnson and a large part of the 17th Foot out of position. Murfreesboro, North Carolina, and through his family Murfreesboro, Tennessee, carry his name.' },
    { name: 'Henry Johnson', role: 'Cmdr., Stony Point garrison, British', side: 'c', img: '', bio: 'An Irish-born career officer of the 17th Regiment of Foot, about thirty, commanding the garrison. Murfree\'s firing drew him with a large part of the 17th down toward the center; by the time he turned back, the flag was down and the watchword was being shouted behind him, and he was taken with the rest. After his exchange he demanded a court-martial, testifying in February 1781, and his career went on. He died a full general and a baronet.' },
    { name: 'Henry Clinton', role: 'Cmdr. in chief, British', side: 'c', img: '/war-img/rev-stony-point-clinton.jpg', bio: 'The British commander in chief in America. The seizure of King\'s Ferry and the raids that burned the Connecticut coast that summer were his attempt to pry Washington out of the Highlands and into a battle on open ground. Stony Point cost him the campaign\'s one trophy and any momentum. He reoccupied the point on July 19, then gave up both ends of the ferry that October as the war\'s center of gravity moved south.' },
  ],
  outcome: {
    verdict: 'American victory · the trophy that was never the point',
    text: 'Wayne\'s corps took "little Gibraltar" in the dark, by the bayonet, in under half an hour, and then did the thing the night is actually remembered for: with Paoli in their memory, they gave the surrendering garrison quarter when it asked for mercy. Washington rode down, looked at the ground, and decided what he had suspected all along: holding the point would tie down fifteen hundred men under the guns of the Royal Navy, exactly as Johnson had been. So he hauled off the captured guns and stores, razed the works, and withdrew within three days. The British walked back in on the 19th. The raid had done its work anyway. Clinton\'s lure had failed, the Connecticut raids were broken off, and Congress voted three medals (a gold one for Wayne, silver for Fleury and Stewart) out of only about a dozen struck in the whole war. The proof that the army could do this was the prize.',
  },
  sections: [
    { id: 'little-gibraltar', eyebrow: 'The lure', title: 'Little Gibraltar', blurb: 'The war in the north had gone static: Clinton in New York, Washington watching him from the Highlands, neither able to force a fight. So Clinton lunged up the Hudson, took the crossing at King\'s Ferry, and fortified a rock the British called close to impregnable, hoping Washington would come down and bleed for it. Washington refused the bait and planned something else entirely.' },
    { id: 'unloaded-muskets', eyebrow: 'The storming', title: 'Unloaded muskets', blurb: 'A thirteen-mile night march, two columns with their muskets unloaded so no nervous shot could give the surprise away, twenty-man parties hacking lanes through the abatis ahead of each, and one center detachment firing to pull the garrison the wrong way. It went in around midnight and it was over in about twenty-five minutes.' },
    { id: 'the-quarter', eyebrow: 'What it meant', title: 'The quarter they gave', blurb: 'An army with every grievance in its hands took five hundred prisoners and gave quarter, and both sides said so. Three of the war\'s dozen medals, a French volunteer with the first one ever struck, a copycat raid a month later, and a fort Washington took the trouble to capture and then deliberately threw away.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/stony-point/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function StonyPointPage() {
  return <BattleDossier data={DATA} />
}
