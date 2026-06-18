'use client'

// BATTLE dossier (The Battle of Quebec, December 31, 1775), American Revolution.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates → reconcile → revise. Sides are war-aware: American (Continental
// blue) / British (redcoat red), set via sideNames + sideColors from the rev skin
// vars. Commander bios are gated, born-verified prose; Maclean has no verified
// portrait (img: ''). NOT the F&I vertical's 1759 Quebec page; this is the 1775
// battle; image prefix rev-quebec1775-*. Sources: audits/war-pipeline/rev-quebec-final.md.

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-quebec' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · December 1775',
  title: 'The Battle of Quebec (1775)',
  date: 'December 31, 1775',
  place: 'Quebec City, Province of Quebec',
  note: 'The two-pronged gamble to make Canada the fourteenth colony ended before dawn in a blizzard, with the war\'s first American general dead in the snow.',
  hero: { img: '/war-img/rev-quebec1775-hero.jpg', pal: ['#2e2c26', '#4a3a2e', '#11100c'], credit: 'John Trumbull · oil on canvas · 1786 · Yale University Art Gallery / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: '~4–6 hours (signal rockets ~4–5 am, last surrenders ~10 am)' },
    { label: 'Forces', value: '~900–1,200 Americans vs ~1,800 defenders' },
    { label: 'Winner', value: 'Britain, decisively', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The invasion army before the walls', str: '~900–1,200 effectives', cmd: 'Maj. Gen. Richard Montgomery', note: 'Two feints at the western walls covered two real columns converging on the Lower Town in a blizzard; the attack was forced by the calendar, as most enlistments expired at midnight on December 31.' },
    { side: 'c', tag: 'British', force: 'The Quebec garrison', str: '~1,800 (a few regulars, ~200 Royal Highland Emigrants, marines, 400+ sailors, and a majority of French- and English-speaking militia)', cmd: 'Gov. Guy Carleton', note: 'A scratch garrison behind real walls with some 150 cannon and food for months; Carleton\'s plan was simple and correct: arm the town, expel the unwilling, never come out, and wait for the river to open.' },
  ],
  casualties: {
    union: 485, csa: 15,
    unionLabel: 'American ~50–60 killed or wounded + ~400–430 captured',
    csaLabel: 'British/Canadian ~5–20',
    footnote: 'American: roughly 30–51 killed and 30–36 wounded, plus ~400–430 captured (Carleton counted 431 prisoners); some dead not recovered until the spring thaw. British: Carleton\'s official return counted about 5 killed and 13 to 14 wounded, the firmest figure despite some witness accounts running higher.',
  },
  commanders: [
    { name: 'Richard Montgomery', role: 'Cmdr., American', side: 'u', img: '/war-img/rev-quebec1775-montgomery.jpg', bio: 'Irish-born and a British regular (a full-time professional soldier) for sixteen years, fighting in Britain\'s previous war against France in North America (Louisbourg in 1758, Amherst\'s Lake Champlain campaign in 1759), Montgomery sold his officer\'s commission (British officer ranks were bought and sold) after being passed over, emigrated to New York, married Janet Livingston, and wanted to farm. He accepted a commission in Congress\'s new Continental Army reluctantly, writing that the will of an oppressed people must be obeyed. He took Montreal without a fight, was promoted major general without ever learning it, and died at 37 in the defenders\' first blast of grapeshot (a cannon charge of small iron balls), the cause\'s first martyred general.' },
    { name: 'Benedict Arnold', role: 'Cmdr., Kennebec corps, American', side: 'u', img: '/war-img/rev-quebec1775-arnold.jpg', bio: 'As 1775 knew him: a New Haven merchant-captain, co-captor of Fort Ticonderoga (the British fort on Lake Champlain seized in May 1775), and after his starving march to Quebec through the Maine wilderness one of the most admired soldiers in America (the period press called him the American Hannibal). Shot in the left leg in the first minutes of his column\'s attack, he was carried to the rear urging his men on, then kept the siege lines going from a hospital bed. Promoted brigadier general for Quebec in January 1776. Brave, driven, ambitious, indispensable.' },
    { name: 'Daniel Morgan', role: 'Cmdr., Virginia riflemen, American', side: 'u', img: '/war-img/rev-quebec1775-morgan.jpg', bio: 'A Virginia frontier teamster who drove wagons on Braddock\'s 1755 campaign (a British expedition against the French in the previous war), and who told on himself the tale of the 499 lashes (a British sentence of 500 for striking an officer, one miscounted, so Britain still owed him a lash; he showed the scars, though no record survives). At Quebec he took command when Arnold fell, fought deepest into the Lower Town, and surrendered his sword to a priest rather than a British officer. Five years later, at Cowpens in South Carolina, he handed Britain one of its worst small-battle defeats of the war.' },
    { name: 'Guy Carleton', role: 'Cmdr., British', side: 'c', img: '/war-img/rev-quebec1775-carleton.jpg', bio: 'An Anglo-Irish professional who had been quartermaster general (chief supply officer) to General Wolfe in the 1759 campaign for this same city and was wounded on the Plains of Abraham (the battlefield just outside the city\'s walls). Governor of Quebec from 1768 and architect of the Quebec Act (the 1774 law that protected French Canadians\' Catholic Church and French civil law), he lost Montreal, escaped downriver, and then conducted the defense of Quebec exactly right: he armed the townspeople, expelled the unwilling, refused every temptation to come out, and waited for the river to open. He beat the invasion with patience.' },
    { name: 'Allan Maclean', role: 'Cmdr., Royal Highland Emigrants, British', side: 'c', img: '', bio: 'Commander of the Royal Highland Emigrants, roughly two hundred strong, Maclean got his regiment into the city in mid-November 1775, ahead of the Americans, and became the backbone professional of Carleton\'s scratch garrison of regulars, marines, sailors, and militia. On the night of the assault his men were among the troops Carleton fed to the second Sault-au-Matelot barricade, the twelve-foot wall with guns that stopped Morgan\'s column cold.' },
  ],
  outcome: {
    verdict: 'Decisive British victory · the first major American defeat of the war',
    text: 'The attack on the Lower Town collapsed in minutes at one end and in a trap at the other. Montgomery was dead, Arnold wounded, and some 400 to 430 Americans were prisoners; the smallpox-wracked blockade that limped on through the winter dissolved when the British relief fleet arrived in May 1776. Canada stayed British, the fourteenth colony never materialized, and the war\'s northern frontier settled back onto Lake Champlain.',
  },
  sections: [
    { id: 'the-fourteenth-colony', eyebrow: 'The invasion of Canada', title: 'The fourteenth colony', blurb: 'Ticonderoga opened the water road north, and Congress sent two armies up it to make Canada the fourteenth colony. One took Montreal without a fight; the other staggered out of the Maine woods eating its shoes. By December they stood together before walls they could not break, with the army\'s enlistments expiring at midnight on New Year\'s Eve.' },
    { id: 'two-columns-in-the-snow', eyebrow: 'The blizzard assault', title: 'Two columns in the snow', blurb: 'Two feints at the walls, two real columns converging on the Lower Town in a blizzard. Montgomery died in the defenders\' first blast of grapeshot; Arnold fell wounded at the first barricade; Morgan fought deepest into the city and surrendered his sword to a priest.' },
    { id: 'the-colony-that-never-was', eyebrow: 'After the storm', title: 'The colony that never was', blurb: 'Carleton buried his dead enemy with honors while Congress voted Montgomery the first national monument. The blockade that lingered till spring was broken by smallpox and silver, not bayonets, and when the king\'s ships came up the river in May, the Canadian adventure was over.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/quebec-1775/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function Quebec1775Page() {
  return <BattleDossier data={DATA} />
}
