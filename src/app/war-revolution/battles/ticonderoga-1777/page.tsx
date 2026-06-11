'use client'

// BATTLE dossier (The Fall of Fort Ticonderoga, July 2–8, 1777), American Revolution.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact + storytelling + newcomer-clarity + framing, parallel) →
// reconcile → revise. Sides are war-aware: American (Continental blue) /
// British & German on the British red rail (Burgoyne's army was roughly 40%
// Brunswick and Hesse-Hanau regulars), set via sideNames + sideColors from the
// rev skin vars; the win marker rides the BRITISH rail (the fort fell without a
// battle at its walls; the evacuation saved the garrison for Saratoga). Portrait
// honesty per the final: Warner has NO authentic life portrait (img: '', the bio
// states the fact); Fraser's canvas is catalogued only as POSSIBLY Fraser, the
// caveat carried as an <em>Image:> note in his bio. The registry id is
// 'rev-ticonderoga' (no year suffix); the route slug is 'ticonderoga-1777'.
// Image prefix rev-ticonderoga1777-* (the fi-carillon-* originals are never touched).
// Sources: audits/war-pipeline/rev-ticonderoga-1777-final.md (+ rev-ticonderoga-1777-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-ticonderoga' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'The Fall · 1777',
  title: 'Fort Ticonderoga',
  date: 'July 2–8, 1777',
  place: 'Ticonderoga, New York',
  note: 'The third famous moment at America\'s most famous fort (a British army wrecked itself here against the fort\'s French defenders in 1758; the American Ethan Allen seized it from the British in 1775). In July 1777 the British general John Burgoyne\'s invasion army hauled guns up the one hill nobody had fortified, and the American garrison (the troops holding the fort) of the "Gibraltar of the North" walked away in the night without a battle at its walls.',
  hero: { img: '/war-img/rev-ticonderoga1777-hero.jpg', pal: ['#2e3a30', '#5a6e5c', '#131a14'], credit: 'Anne LaBastille · photograph · 1973 · EPA Documerica, National Archives / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH & GERMAN' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'July 2–8, 1777 · a one-week episode (the fort itself fell in four days; evacuation night July 5–6; Hubbardton July 7; Fort Anne July 8)' },
    { label: 'Casualties', value: 'a handful at the fort; the bill came at Hubbardton · American ≈40 killed, ≈100 wounded, ≈230–300 captured (Fort Anne losses uncertain) · British/German ~235–270 across the week' },
    { label: 'Winner', value: 'Britain · the fort taken without a fight at its walls; the garrison escaped to fight at Saratoga (the campaign-ending American victory, three months later)', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The Ticonderoga garrison', str: '~2,500 effectives (men fit for duty); ~3,000–3,500 total with short-term militia and artificers (military craftsmen)', cmd: 'Maj. Gen. Arthur St. Clair', note: 'A garrison of about 2,500 effective soldiers holding sprawling works (the old fort, the 1758 French lines, and Mount Independence across the lake) that needed roughly 10,000 men to defend properly. Their commander had been in post three weeks. When British guns appeared on the undefended hill above them, they evacuated by night rather than be trapped.' },
    { side: 'c', tag: 'British & German', force: 'Burgoyne\'s invasion army', str: '~7,800–8,000 fighting men (≈3,981 British and ≈3,116 Brunswick and Hesse-Hanau regulars, the full-time professionals, plus gunners, Canadians, and loyalists), and several hundred Native allies; 10,000+ counting followers', cmd: 'Lt. Gen. John Burgoyne', note: 'The army of the 1777 Canada invasion, advancing south along Lake Champlain in two wings: Simon Fraser\'s Advanced Corps and the British division on the west shore, Baron Riedesel\'s Germans on the east. Its engineers won the fort with a road and two cannon on a hilltop.' },
  ],
  casualties: {
    union: 405, csa: 250,
    unionLabel: 'American ≈40 killed · ≈100 wounded · ≈230–300 captured',
    csaLabel: 'British/German ~235–270',
    footnote: 'There was no battle at the fort itself. Nearly the entire butcher\'s bill of the episode was paid at Hubbardton on July 7, where the rearguard (the detachment covering the army\'s escape) turned and fought, the only pitched battle of the week. American: at the fort, roughly 7 killed and 11 wounded in skirmishing, a handful. At Hubbardton, ~41 killed (some counts run to 150 by folding in later deaths and stragglers), ~96 wounded, ~230–270 captured (prisoner hauls reported to ~300 with sick stragglers), roughly 40% of the rearguard. Fort Anne losses uncertain (sources spread 50–200 including captured). Materiel was the real loss: dozens of cannon (period claims ran to 70 and beyond), the Lake Champlain flotilla, and mountains of provisions. British/German: a handful at the fort (~5 killed, never formally tallied). At Hubbardton, ~50–60 killed and ~140–170 wounded, over 20% of Fraser\'s engaged force. At Fort Anne, the 9th Foot lost ~13 killed, ~22 wounded, 3 captured.',
  },
  commanders: [
    { name: 'Arthur St. Clair', role: 'Cmdr., Ticonderoga garrison, American', side: 'u', img: '/war-img/rev-ticonderoga1777-stclair.jpg', bio: 'Scottish-born, he fought FOR Britain in the French and Indian War, at Louisbourg and Quebec, then settled in western Pennsylvania and became one of its biggest landholders. A major general in the Continental Army (the full-time American army) from February 1777, he had commanded Ticonderoga barely three weeks when Burgoyne arrived. The retreat made him a national villain; a court-martial (a military trial) acquitted him "with the highest honor" (1778). Later: president of the Confederation Congress, first governor of the Northwest Territory, and commander at St. Clair\'s Defeat (1791), the worst rout Native forces ever inflicted on a US army. Died poor, 1818.' },
    { name: 'Seth Warner', role: 'Rearguard cmdr. at Hubbardton, American', side: 'u', img: '', bio: 'Connecticut-born leader of the Green Mountain Boys in the Vermont land wars against New York. He took Crown Point two days after Ethan Allen took Ticonderoga (May 1775), fought in the Canada invasion, and was elected colonel of his own Continental regiment. At Hubbardton he chose the ground and ran the fight; a month later his regiment helped win Bennington. Health broken by the war, he died at 41. No authentic portrait of him exists.' },
    { name: 'Philip Schuyler', role: 'Cmdr., Northern Department (at Albany), American', side: 'u', img: '/war-img/rev-ticonderoga1777-schuyler.jpg', bio: 'Albany\'s Dutch-patrician major general, commander of the Northern Department, not present at the fort. He was the man whose axemen made Burgoyne\'s road south a nightmare, and the man Congress sacked anyway (replaced by Horatio Gates, August 1777). Court-martialed at his own demand for the fort\'s loss; acquitted in 1778; resigned his commission in 1779. Later a US senator, and Alexander Hamilton\'s father-in-law.' },
    { name: 'John Burgoyne', role: 'Cmdr., invasion army, British', side: 'c', img: '/war-img/rev-ticonderoga1777-burgoyne.jpg', bio: '"Gentleman Johnny": cavalryman, playwright, gambler, member of Parliament, celebrated for dashing raids in Portugal in 1762. He sold London the Canada invasion plan and got command of it over Carleton. Ticonderoga was his career\'s high-water mark: Parliament cheered, and the King was (reportedly) ecstatic. Three months later he surrendered the same army at Saratoga. He spent his last years writing successful comedies for the London stage.' },
    { name: 'Simon Fraser', role: 'Cmdr., Advanced Corps, British', side: 'c', img: '/war-img/rev-ticonderoga1777-fraser.jpg', bio: <>A Scottish professional from Balnain who had been inside this story before: he served at Louisbourg and Quebec in the French and Indian War. As brigadier he led Burgoyne&apos;s Advanced Corps, the army&apos;s cutting edge: first onto Mount Hope, the driving force (with Phillips) behind the Mount Defiance road, and commander of the dawn attack at Hubbardton. Mortally wounded at Bemis Heights that October, buried at dusk in the Great Redoubt. No certain life portrait of him exists. <em>Image: a 1790 canvas catalogued only as &ldquo;possibly&rdquo; Simon Fraser of Balnain (UK Government Art Collection); this is the closest thing, and the uncertainty is part of the record.</em></> },
    { name: 'Friedrich Adolph, Baron Riedesel', role: 'Cmdr., German division', side: 'c', img: '/war-img/rev-ticonderoga1777-riedesel.jpg', bio: 'The Brunswick general commanding the roughly 3,000 German troops the Duke of Brunswick rented to George III. A Seven Years\' War veteran, he led the eastern pincer against Mount Independence and force-marched to save Fraser at Hubbardton, sending his grenadiers in singing, with the band playing, to sound like an army. His wife Friederike followed the campaign with their three small daughters; her journal is one of its best sources. Captured with Burgoyne at Saratoga.' },
  ],
  outcome: {
    verdict: 'British victory · the evacuation that saved an army',
    text: 'Burgoyne took the most famous fortress in America in four days without storming it, along with dozens of cannon, the Lake Champlain flotilla, and a depot\'s worth of supplies. But St. Clair\'s night retreat preserved roughly 2,500 Continentals (soldiers of the full-time American army) who reassembled down the road and became part of the army that trapped Burgoyne at Saratoga three months later. The "victory" cost Britain a garrison of 900-plus men detached to hold the fort and a supply line that lengthened with every mile south.',
  },
  sections: [
    { id: 'the-gibraltar-of-the-north', eyebrow: 'The third time', title: 'The Gibraltar of the North', blurb: 'The most famous fort in America had already had two famous moments (a British army wrecked itself against its French defenders in 1758, the American Ethan Allen at its gate in 1775). Now the British general Burgoyne\'s 8,000 were coming down the lake at an American garrison of 2,500, and the one hill that overlooked everything still had no guns on it.' },
    { id: 'the-guns-that-never-fired', eyebrow: 'The week', title: 'The guns that never fired', blurb: 'British engineers cut a road up Mount Defiance and hauled two cannon to the summit; they never had to fire. A night evacuation lit up by a burning house, a flotilla destroyed at Skenesborough, and the real battle fought by the rearguard at Hubbardton, where the German troops came in singing.' },
    { id: 'shoot-a-general', eyebrow: 'What it meant', title: '"Shoot a general"', blurb: 'Congress stunned, two generals vilified and both acquitted, a king (the story goes) crowing that he had beat all the Americans. And the inversion underneath it all: the "disaster" saved the garrison for Saratoga, while every mile of Burgoyne\'s march stretched the rope behind his army.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/ticonderoga-1777/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function Ticonderoga1777Page() {
  return <BattleDossier data={DATA} />
}
