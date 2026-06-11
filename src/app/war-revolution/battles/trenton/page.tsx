'use client'

// BATTLE dossier (The Battle of Trenton, December 26, 1776), American Revolution.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates → reconcile → revise. Sides are war-aware: American (Continental
// blue) / Hessian garrison on the British red rail (German auxiliary troops in
// British service), set via sideNames + sideColors from the rev skin vars.
// Commander bios are gated, born-verified prose; Glover and Rall ship without
// portraits (img: '' — no rights-safe / no authentic likeness verified).
// Image prefix rev-trenton-*. Sources: audits/war-pipeline/rev-trenton-final.md.

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-trenton' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1776',
  title: 'Trenton',
  date: 'December 26, 1776',
  place: 'Trenton, New Jersey',
  note: 'Eight days after Washington wrote that the game was pretty near up, his dissolving army crossed an ice-choked river through a nor\'easter (a violent winter coastal storm) and took a brigade of Hessians (German soldiers fighting for Britain) in a morning.',
  hero: { img: '/war-img/rev-trenton-hero.jpg', pal: ['#3a3026', '#6e4a30', '#15110b'], credit: 'John Trumbull · oil painting · 1786–1828 · Yale University Art Gallery / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'HESSIAN' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: '~90 min–2 hrs first shot to last surrender; the decisive street fight under an hour' },
    { label: 'Casualties', value: '~1,000 Hessian (most captured) · 4–6 American wounded' },
    { label: 'Winner', value: 'America, decisively', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The army that crossed the Delaware', str: '~2,400 crossed, with 18 guns', cmd: 'Gen. George Washington', note: 'An army eight days from legally dissolving (most enlistments expired December 31) crossed an ice-choked river through a nor\'easter, marched nine miles in sleet, and hit both ends of Trenton within minutes of each other. The two supporting crossings, ~2,200–2,600 more men, never got over the river.' },
    { side: 'c', tag: 'Hessian', force: 'The Trenton garrison', str: '~1,500, with 6 light guns', cmd: 'Col. Johann Rall', note: 'Three veteran German regiments in British service (Rall\'s grenadiers and the von Lossberg and von Knyphausen fusiliers; grenadier and fusilier were by then mostly regimental titles), the most exposed post in Britain\'s New Jersey outpost chain. Exhausted by weeks of militia alarms, not drunk; their commander had refused to fortify despite repeated warnings, trusting the bayonet (close assault with fixed blades).' },
  ],
  casualties: {
    union: 5, csa: 1000,
    unionLabel: 'American 4–6 wounded',
    csaLabel: 'Hessian ~1,000 (most captured)',
    footnote: 'Hessian: about 22 killed (including Rall, mortally wounded; ranges 21–23), roughly 90 wounded (ranges 83–95), and roughly 900 captured (ranges 890–920); ~250–500 escaped south over the Assunpink bridge. All six guns, ~1,000 muskets, the regimental colors (battle flags), wagons, and supplies taken. American: 4–6 wounded (Lt. James Monroe and Capt. William Washington among them), no one killed by enemy fire in the assault per the standard account. The battle figures hide the real American cost: exposure and illness after the double winter crossing killed men in the days that followed, by some accounts more than the battle cost the Hessians in dead.',
  },
  commanders: [
    { name: 'George Washington', role: 'Cmdr. in chief, American', side: 'u', img: '/war-img/rev-trenton-washington.jpg', bio: 'Forty-four years old, with six months of unbroken defeat behind him and an army that would legally dissolve on December 31, Washington conceived the triple crossing and led the main column in person. He had written days before that "necessity, dire necessity" justified the gamble; the operation\'s password was "Victory or Death." After the battle he went back to the expiring regiments in person and asked them to stay six more weeks for a ten-dollar bounty. Enough stayed.' },
    { name: 'Henry Knox', role: 'Artillery chief, American', side: 'u', img: '/war-img/rev-trenton-knox.jpg', bio: 'A 280-pound Boston bookseller turned artillery chief, twenty-six years old, Knox had hauled the captured cannon of Fort Ticonderoga overland to Boston the winter before. At the Delaware his booming voice ran the embarkation, and he crossed an unusually heavy 18 guns for ~2,400 men. Those guns, massed at the heads of Trenton\'s two main streets, decided the fight. He crossed as Colonel Knox; his promotion to brigadier general carries the date December 27, 1776, the day after the battle.' },
    { name: 'Nathanael Greene', role: 'Cmdr., left column, American', side: 'u', img: '/war-img/rev-trenton-greene.jpg', bio: 'A Rhode Island Quaker-raised ex-ironmaster, thirty-four, self-taught from books and Washington\'s most trusted subordinate even though he bore blame for the loss of Fort Washington (the Manhattan fort whose fall in November cost about 2,800 prisoners) a month earlier. At Trenton he led the left column down the Pennington Road with Washington riding alongside, sealing the town\'s upper end. Years later he would be the strategist who reconquered the South.' },
    { name: 'John Sullivan', role: 'Cmdr., right column, American', side: 'u', img: '/war-img/rev-trenton-sullivan.jpg', bio: 'A New Hampshire lawyer\'s son, thirty-six, and a former delegate to the Continental Congress (the rebelling colonies\' assembly), Sullivan had been captured at Long Island and exchanged. When Gen. Charles Lee was captured on December 13 Sullivan took over his division and marched it to Washington. At Trenton he led the right column down the River Road into the lower town and sealed the Assunpink bridge. No from-life portrait of him exists; the period print is an invention.' },
    { name: 'John Glover', role: 'Cmdr., 14th Continental, American', side: 'u', img: '', bio: 'A Marblehead, Massachusetts fisherman-shipowner, forty-four, whose 14th Continental Regiment (the "Marbleheaders," amphibious soldier-mariners) had already rowed the army to safety after Long Island in August. On Christmas night his men poled the army, its horses, and all 18 guns across an ice-choked river in big Durham cargo boats, through a nor\'easter, without a recorded loss of a man or a gun.' },
    { name: 'James Monroe', role: 'Lieutenant, 3rd Virginia, American', side: 'u', img: '/war-img/rev-trenton-monroe.jpg', bio: 'An eighteen-year-old lieutenant in the 3rd Virginia, Monroe rushed the Hessian guns on King Street beside Capt. William Washington (the general\'s cousin); both were wounded there. A musket ball severed an artery in Monroe\'s left shoulder, and Dr. John Riker clamped it and saved his life. He lived to become the fifth president of the United States.' },
    { name: 'Johann Rall', role: 'Cmdr., Trenton garrison, Hessian', side: 'c', img: '', bio: 'A career soldier since 1740 (the War of the Austrian Succession, the Seven Years\' War, a year fighting the Turks for Russia), Rall was brave and battle-proven; six weeks before Trenton he led the decisive assault at Fort Washington. But he was contemptuous of the rebels, spoke no English, and built no fortifications at Trenton despite his officers\' urging, trusting the bayonet. Shot twice leading his counterattack, he died within a day. No authentic portrait of him survives.' },
  ],
  outcome: {
    verdict: 'Decisive American victory · the revolution survives its worst month',
    text: 'At almost no cost in battle, Washington destroyed the Hessian garrison at Trenton, took roughly 900 prisoners, and was recrossing the Delaware by noon. The victory broke the spell of the invincible Hessians, helped hold the dissolving army together past the December 31 enlistment cliff, and opened the ten days that ended with Princeton and the British abandoning most of New Jersey. The Hessian colonel who had refused to fortify was dead, and a Hessian court-martial (a military court) later fixed the blame on him.',
  },
  sections: [
    { id: 'the-game-pretty-near-up', eyebrow: 'The collapse', title: '"The game is pretty near up"', blurb: 'Six months of defeat, an army melting away as enlistments (the soldiers\' fixed-term contracts) ran out, and a commander writing privately that the game was pretty near up. Then a printer in Philadelphia set the times that try men\'s souls in type, and Washington fixed a date: Christmas night, one hour before day.' },
    { id: 'victory-or-death', eyebrow: 'The night and the morning', title: 'Victory or death', blurb: 'A nor\'easter, an ice-choked river, nine miles of sleet, and two of three crossings failed. On the far side, a garrison that was exhausted rather than drunk, a colonel who had laughed off every warning, and a fight in the streets that was over in under an hour.' },
    { id: 'ten-dollars-and-six-weeks', eyebrow: 'What it meant', title: 'Ten dollars and six weeks', blurb: 'Nine hundred prisoners paraded through Philadelphia, a dying colonel\'s last request, and an army still set to dissolve in five days. What the victory actually bought was sold man by man, for ten dollars and six more weeks.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/trenton/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function TrentonPage() {
  return <BattleDossier data={DATA} />
}
