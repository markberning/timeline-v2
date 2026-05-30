// Deterministic builder: converts a gated war-theme final.md (audits/war-pipeline/
// <slug>-final.md) into the reader page (src/app/war-civil-war/off-the-battlefield/
// <slug>/page.tsx). Prose ships VERBATIM — no model rewriting. Figures from the
// verified PD manifest are injected at editorial anchors (after/before a heading, or
// replacing a [FIGURE] marker). Run: node scripts/_build-war-themes.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// repo root = one level up from scripts/ (worktree-agnostic; was hardcoded to the
// retired phase-2 worktree)
const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
const f = (file, cap, credit) => ({ file, cap, credit })

// ---- figure libraries (caption/credit are house-voice, from the verified manifests) ----
const RW = {
  map:    f('road-to-war-fig1-missouri-compromise-map.jpg', `The deal that held for thirty-four years, drawn on a ruler and a map. The 36°30′ line split the West into two futures — until someone tore it up.`, `McConnell Map Co. · 1919 · public domain`),
  clay:   f('road-to-war-fig2-henry-clay-brady.jpg', `Henry Clay, photographed by Mathew Brady a month before he rose to propose the Compromise of 1850 — his last and greatest gamble. Seventy-two years old, already "the Great Compromiser," and running out of time.`, `Mathew Brady · 1849 · Beinecke Rare Book & Manuscript Library, Yale University · public domain`),
  senate: f('road-to-war-fig3-senate-1850-rothermel.jpg', `The last act of a generation: Henry Clay on the Senate floor, 1850, with John C. Calhoun and Daniel Webster in the chamber. Three men who between them had run the Senate for thirty years — one dying, one about to become a traitor to his region, and one who thought a railroad could fix everything.`, `Peter F. Rothermel (artist) · Robert Whitechurch (engraver) · c. 1855 · public domain`),
  calhoun:f('road-to-war-fig4-calhoun-brady.jpg', `John C. Calhoun, photographed by Mathew Brady in 1849 — one year before he sat wrapped in his coat in the Senate chamber, too ill to speak his own ultimatum. He died March 31, 1850, his final architecture of ideas outlasting him by a decade.`, `Mathew Brady · 1849 · Sotheby's · public domain`),
  caning: f('road-to-war-fig5-southern-chivalry-caning.jpg', `"Southern Chivalry — Argument versus Clubs," 1856. Preston Brooks beats Senator Charles Sumner senseless at his Senate desk while Lawrence Keitt waves a pistol to keep anyone from interfering. Half the country sent Brooks commemorative canes. The other half sent Sumner back to the Senate as a martyr.`, `After John L. Magee (lithographer) · 1856 · public domain`),
  douglas:f('road-to-war-fig6-douglas-vannerson.jpg', `Stephen A. Douglas, "the Little Giant," photographed in 1859. He saved the Union in 1850 by splitting Clay's omnibus into five manageable bills. He nearly broke it in 1854 by erasing the Missouri Compromise line to build a railroad. Not a villain of this story — something more interesting: a man whose ambition outran his conscience.`, `Julian Vannerson · 1859 · Library of Congress · public domain`),
  ruffians:f('road-to-war-fig7-border-ruffians-kansas.jpg', `"Border ruffians" from Missouri cross into Kansas to vote — and to make sure the other side doesn't. Popular sovereignty, in practice, meant whoever brought more guns to the polling place.`, `Scribner, Armstrong & Co. (illustrator) · 1880 · public domain`),
  dred:   f('road-to-war-fig8-dred-scott-1857.jpg', `Dred Scott, photographed around 1857 — the year the Supreme Court ruled he had no right to sue, no right to be free, and no claim to citizenship the law was bound to respect. He was freed eighteen months later anyway, by a private man's signature. He died of tuberculosis on September 17, 1858.`, `Photographer uncredited · c. 1857 · public domain`),
  brown:  f('road-to-war-fig9-john-brown-1859.jpg', `John Brown, May 1859 — six months before Harpers Ferry. He believed himself the instrument of a wrathful God. Looking at this photograph, it is difficult to argue he didn't believe it absolutely.`, `Martin M. Lawrence (photographer) · May 1859 · Library of Congress · public domain`),
  marines:f('road-to-war-fig10-harpers-ferry-marines.jpg', `U.S. Marines storming John Brown's engine house at Harpers Ferry, October 18, 1859 — from a sketch made on the spot. The officer commanding the Marines was Colonel Robert E. Lee; his aide carrying the surrender demand was Lieutenant J.E.B. Stuart. Both would be in Confederate uniform eighteen months later.`, `Frank Leslie's Illustrated Newspaper · October 29, 1859 · public domain`),
}
const LR = {
  byers:   f('lincolns-rise-lincoln-1858-byers.jpg', `Lincoln in 1858, the year of the Senate race — photographed in Beardstown, Illinois, months before the debates with Douglas made him a national name. Lean, unglamorous, and still beardless.`, `Abraham Byers · ambrotype · May 7, 1858 · Library of Congress · public domain`),
  cooper:  f('lincolns-rise-hero-cooper-union-brady.jpg', `Lincoln photographed by Mathew Brady the afternoon of February 27, 1860, before he delivered the Cooper Union address. The image spread across Republican newspapers nationwide within days.`, `Mathew B. Brady · photograph · February 27, 1860 · Library of Congress · public domain`),
  douglas: f('lincolns-rise-douglas-anthony-1860.jpg', `Stephen A. Douglas, senator from Illinois, photographed in 1860. His "popular sovereignty" doctrine — let the settlers vote on slavery — was the big idea Lincoln spent the debates dismantling.`, `E. Anthony · carte de visite · 1860 · Library of Congress · public domain`),
  wigwam:  f('lincolns-rise-wigwam-convention-1860.jpg', `The Republican National Convention, Chicago, May 1860 — the Wigwam, a vast temporary wooden hall built for the occasion. Lincoln stayed home in Springfield; his managers worked the floor through the night.`, `Library of Congress Prints & Photographs Division · wood engraving · 1860 · public domain`),
  wideawake:f('lincolns-rise-wide-awake-certificate-1860.jpg', `A Wide-Awake Club membership certificate, 1860. Lincoln and Hamlin preside from the upper corners; uniformed members with torches march below. The Wide-Awakes were the Republican youth movement that electrified the Northern campaign.`, `Library of Congress Prints & Photographs Division · lithograph · 1860 · public domain`),
  quadrille:f('lincolns-rise-political-quadrille-1860.jpg', `"The Political Quadrille," 1860 — all four presidential candidates dancing to Dred Scott's fiddle. The four-way race handed Lincoln the presidency on less than 40 percent of the popular vote.`, `Popular Graphic Arts / Library of Congress · lithograph · 1860 · public domain`),
  game:    f('lincolns-rise-national-game-1860.jpg', `"The National Game. Three Outs and One Run," Currier & Ives, September 1860. Lincoln's bat is labeled "Equal Rights and Free Territory." The other three struck out.`, `Currier & Ives (attr. Louis Maurer) · lithograph · September 1860 · Library of Congress · public domain`),
  emap:    f('lincolns-rise-electoral-map-1860.png', `The 1860 electoral map. Lincoln swept the free North and won 180 electoral votes — well past the 152 needed — without a single electoral vote from any slave state.`, `ElectoralCollege1860 · Wikimedia Commons · public domain`),
  buchanan:f('lincolns-rise-buchanan-1860.jpg', `President James Buchanan in 1860 — the lame-duck commander in chief who declared secession illegal and then spent four months doing nothing to stop it.`, `Meade Brothers · photograph · 1860 · public domain`),
  mercury: f('lincolns-rise-charleston-mercury-1860.jpg', `The Charleston Mercury "Extra," December 20, 1860 — the day South Carolina voted 169 to 0 to dissolve its bond to the United States. They printed the headline the same afternoon.`, `Charleston Mercury · broadside · December 20, 1860 · public domain`),
}
const TG = {
  mont:   f('two-governments-montgomery-inaugural.jpg', `The inauguration of Jefferson Davis as provisional Confederate president on the steps of the Alabama State Capitol, Montgomery — February 18, 1861.`, `A.C. McIntyre · Montgomery, Alabama · 1861 · Boston Athenaeum · public domain`),
  davis:  f('two-governments-davis-portrait.jpg', `Jefferson Davis, Confederate president — Mississippi planter, West Point graduate, and former U.S. Secretary of War. The seasoned insider everyone expected to outshine Lincoln.`, `Mathew Brady · c. 1859 · National Archives (528293) · public domain`),
  stephens:f('two-governments-stephens-portrait.jpg', `Alexander H. Stephens, vice president of the Confederacy. In March 1861 he stood before a crowd in Savannah and named slavery the "corner-stone" of the new government — not as a confession, but as a boast.`, `Mathew Brady · c. 1860–65 · National Archives (528288) · public domain`),
  lincoln:f('two-governments-lincoln-portrait.jpg', `Abraham Lincoln six days before Fort Sumter — Brady's April 1861 portrait of the new president, the "backwoods curiosity" the men in Montgomery had underestimated.`, `Mathew Brady · April 6, 1861 · Library of Congress · public domain`),
  inaug:  f('two-governments-lincoln-inaugural.jpg', `Lincoln's first inauguration at the U.S. Capitol, March 4, 1861 — the unfinished dome still under construction above him, seven states already gone from the Union.`, `Library of Congress · 1861 · public domain`),
  interior:f('two-governments-sumter-interior.jpg', `Inside Fort Sumter after the bombardment, 1861 — more than 3,000 Confederate shells in thirty-four hours reduced the walls and left the fort on fire.`, `Osborn & Durbec, Charleston · 1861 · Library of Congress · public domain`),
  anderson:f('two-governments-anderson-portrait.jpg', `Major Robert Anderson, photographed inside Fort Sumter on February 8, 1861 — two months before the Confederate guns opened. The Union commander who moved his garrison to the fort by night and refused to leave.`, `E. Anthony, New York · February 8, 1861 · Missouri Historical Society · public domain`),
  beau:   f('two-governments-beauregard-portrait.jpg', `General P.G.T. Beauregard, who commanded the Confederate guns ringing Charleston harbor. His old artillery instructor from West Point, Major Anderson, was inside the fort he was ordered to take.`, `Mathew Brady · c. 1861–65 · National Archives (528596) · public domain`),
  baltimore:f('two-governments-baltimore-riot.jpg', `Massachusetts troops fire into a pro-Confederate mob on Pratt Street, Baltimore, April 19, 1861 — the first street deaths of the war, five days after Fort Sumter fell. Five soldiers and twelve civilians killed.`, `Wood engraving · published April 30, 1861 · Library of Congress · public domain`),
  map:    f('two-governments-secession-map.jpg', `The secession crisis, 1860–1861: the seven Deep South states that left before Fort Sumter, the four border slave states that stayed, and the free Union states. Maryland nearly surrounds Washington.`, `Charles O. Paullin · Atlas of the Historical Geography of the United States · 1932 · public domain`),
  lee:    f('two-governments-lee-portrait.jpg', `Robert E. Lee, who turned down command of the Union army and resigned to follow Virginia out of the Union — one of the U.S. Army's most capable officers, now the Confederacy's.`, `Mathew Brady · National Archives (529894) · public domain`),
}

const CONFIGS = [
  {
    slug: 'road-to-war', battleId: 'th-road', battleName: 'The Road to War',
    eyebrow: `How the peace came apart, deal by deal`,
    hero: { image: '/war-img/road-to-war-hero-reynolds-map.jpg', palette: ['#5b3a1c', '#2c3a24', '#0f0c06'], credit: `William C. Reynolds & J. C. Jones · 1856 · Library of Congress Geography & Map Division · public domain` },
    end: { kicker: `The peace is gone`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the election of 1860`, title: `Lincoln's Rise & the Election of 1860`, body: `With the Whigs dead and the Democrats splitting along the same North–South seam that had broken everything else, the election of 1860 became a referendum on whether the Union could hold at all. The story turns to the prairie lawyer the Republicans nominated, the four-way race that broke the back of the old politics, and the night the Deep South began, at last, to leave.` },
    markers: [RW.map, RW.senate, RW.marines],
    afterHeading: {
      'The Last Great Bargain': [RW.clay],
      'The Match on the Powder': [RW.douglas],
      'Bleeding Kansas': [RW.ruffians],
      'The Caning': [RW.caning],
      'The Court Tries to End the Argument': [RW.dred],
      'The Spark at Harpers Ferry': [RW.brown],
    },
    beforeHeading: { 'The Match on the Powder': [RW.calhoun] },
  },
  {
    slug: 'lincolns-rise', battleId: 'th-lincoln1860', battleName: `Lincoln's Rise & the Election of 1860`,
    eyebrow: `The outsider the South would not abide`,
    hero: { image: '/war-img/lincolns-rise-hero-cooper-union-brady.jpg', palette: ['#2b2218', '#3a3026', '#0c0a07'], credit: `Mathew B. Brady · February 27, 1860 · Library of Congress · public domain`, focus: 'center 20%', scale: 1.0 },
    end: { kicker: `The outsider wins`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `Montgomery, Alabama`, title: `Two Governments`, body: `While Lincoln waits powerless in Springfield, the seven seceded states are already gathering in Montgomery to build a government, write a constitution, and choose a president of their own — and to name, out loud, exactly what the new nation is for.` },
    markers: [LR.byers, null, LR.cooper],
    afterHeading: {
      'The Little Giant and the house divided': [LR.douglas],
      'The dark horse in the Wigwam': [LR.wigwam, LR.wideawake],
      'Four men, one ballot, no center': [LR.quadrille],
      'A clear majority, a divided country': [LR.emap],
      'Secession winter': [LR.mercury],
    },
    beforeHeading: {
      'A clear majority, a divided country': [LR.game],
      'Secession winter': [LR.buchanan],
    },
  },
  // ── Wave-2 themes (figures hydrated from <slug>-figures.json via the manifest
  //    parser; hero image + credit + per-figure caption/credit come from the JSON).
  {
    slug: 'cotton-diplomacy', battleId: 'th-diplomacy', battleName: 'Britain, France & Cotton', fromJson: true,
    eyebrow: `The war for Europe's blessing`,
    hero: { palette: ['#2a3438', '#1c2426', '#0a0c0d'], focus: 'center 40%', scale: 1.1 },
    end: { kicker: `No foreign friend ever came`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `Hampton Roads`, title: `Ironclads & the Blockade`, body: `Diplomacy fought over the blockade in drawing rooms; out on the water, the blockade was real ships choking real ports — and the South's answer to it, an iron monster called the *Virginia*, was about to make every wooden navy on earth obsolete in a single afternoon.` },
  },
  {
    slug: 'ironclads', battleId: 'th-ironclads', battleName: 'Ironclads & the Blockade', fromJson: true,
    eyebrow: `The day wooden navies died`,
    hero: { palette: ['#3a2c1e', '#23201a', '#0a0806'], focus: 'center 42%', scale: 1.08 },
    end: { kicker: `Naval war, remade overnight`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the rail and the wire`, title: `The New Way of War`, body: `Iron ships were only one front of a wider revolution. On land, the rifled musket, the railroad, and the telegraph were remaking how armies marched, supplied, and killed — and the old tactics hadn't caught up.` },
  },
  {
    slug: 'new-way-of-war', battleId: 'th-tech', battleName: 'The New Way of War', fromJson: true,
    eyebrow: `When the tools outran the tactics`,
    hero: { palette: ['#4a3a26', '#2c2418', '#0d0a06'], focus: 'center 55%', scale: 1.06 },
    end: { kicker: `A preview of the century to come`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the field hospital`, title: `Medicine & Disease`, body: `New weapons made new wounds faster than anyone could heal them — and behind the firing line, the war's quietest killer wasn't the rifle at all. Two men died of disease for every one shot.` },
  },
  {
    slug: 'home-front', battleId: 'th-homefront', battleName: 'The Home Front', fromJson: true,
    eyebrow: `The war the civilians fought`,
    hero: { palette: ['#2c2a26', '#1c1a17', '#0a0908'], focus: 'center 42%', scale: 1.1 },
    end: { kicker: `Rich man's war, poor man's fight`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the contraband camps`, title: `Freedom Seekers & the USCT`, body: `While white families North and South argued over who had to fight, four million enslaved people were settling the question for themselves — walking off the plantations toward the Union lines, and turning a war for union into a war for freedom.` },
  },
  {
    slug: 'medicine', battleId: 'th-medicine', battleName: 'Medicine & Disease', fromJson: true,
    eyebrow: `The war's quietest killer`,
    hero: { palette: ['#2a2826', '#1a1917', '#080808'], focus: 'center 50%', scale: 1.06 },
    end: { kicker: `Two died of sickness for every one shot`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `behind the lines`, title: `The Home Front`, body: `The same war that filled the hospitals emptied the farms and the shops. Back home, two societies were mobilizing everything they had — and the burden fell hardest on the people with the least.` },
  },
  {
    slug: 'usct', battleId: 'th-usct', battleName: 'Freedom Seekers & the USCT', fromJson: true,
    eyebrow: `They freed themselves, then fought`,
    hero: { palette: ['#2e2616', '#1e1a12', '#0a0806'], focus: 'center 32%', scale: 1.12 },
    end: { kicker: `The war's meaning, changed for good`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `Washington`, title: `The Emancipation Proclamation`, body: `The enslaved forced the question onto the battlefield; Lincoln answered it from his desk. On January 1, 1863, the Emancipation Proclamation changed what the entire war was for — and opened the door for Black men to fight for their own freedom.` },
  },
  {
    slug: 'two-governments', battleId: 'th-twogov', battleName: 'Two Governments',
    eyebrow: `Two presidents, two constitutions, one spring`,
    hero: { image: '/war-img/two-governments-hero.jpg', palette: ['#1a1208', '#2a2418', '#0a0806'], credit: `Currier & Ives · 1861 · Library of Congress Prints & Photographs · public domain` },
    end: { kicker: `The talking is over`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `a creek in Virginia`, title: `Bull Run`, body: `The talking is finished; what remains is the fighting. Two amateur nations now scramble to raise armies from almost nothing — and within weeks they collide near a Virginia creek called Bull Run, where a North expecting a quick, glorious afternoon learns exactly how long and how terrible this war is going to be.` },
    markers: [TG.mont],
    afterHeading: {
      'The Government in Montgomery': [TG.davis],
      'In Their Own Words': [TG.stephens],
      '"We Are Not Enemies, but Friends"': [TG.lincoln, TG.inaug],
      'The Fort in the Harbor': [TG.anderson, TG.beau],
      'Choose': [TG.lee],
      'The Hinge': [TG.map],
    },
    beforeHeading: {
      'Choose': [TG.interior],
      'Two Governments, One Verdict': [TG.baltimore],
    },
  },
]

function parse(md) {
  const cut = md.indexOf('\n## MEANWHILE HANDOFF')
  const lines = (cut >= 0 ? md.slice(0, cut) : md).split('\n')
  const blocks = []
  let para = [], quote = []
  const flushP = () => { if (para.length) { blocks.push({ type: 'p', text: para.join(' ').trim() }); para = [] } }
  const flushQ = () => { if (quote.length) { blocks.push({ type: 'q', text: quote.join(' ').trim() }); quote = [] } }
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim()
    if (t === '') { flushP(); flushQ(); continue }
    if (t.startsWith('# ')) { flushP(); flushQ(); continue }
    if (t.startsWith('## ')) {
      flushP(); flushQ()
      const h = t.slice(3).trim()
      let eyebrow
      let j = i + 1
      while (j < lines.length && lines[j].trim() === '') j++
      if (j < lines.length && /^>\s*EYEBROW:/i.test(lines[j].trim())) {
        eyebrow = lines[j].trim().replace(/^>\s*EYEBROW:\s*/i, '').trim(); i = j
      }
      blocks.push({ type: 'h', text: h, eyebrow }); continue
    }
    if (/^>\s*EYEBROW:/i.test(t)) { flushP(); flushQ(); continue }
    if (t.startsWith('>')) { flushP(); const q = t.replace(/^>\s?/, ''); if (q !== '') quote.push(q); continue }
    if (t.startsWith('[FIGURE:')) { flushP(); flushQ(); blocks.push({ type: 'figmarker' }); continue }
    flushQ(); para.push(t)
  }
  flushP(); flushQ()
  return blocks
}

function build(cfg) {
  const md = readFileSync(`${ROOT}/audits/war-pipeline/${cfg.slug}-final.md`, 'utf8')
  const title = (md.match(/^# (.+)$/m) || [])[1].trim()
  const parsed = parse(md)
  let mi = 0, figCount = 0
  const out = []
  for (const b of parsed) {
    if (b.type === 'figmarker') { const fg = cfg.markers[mi++]; if (fg) { out.push({ type: 'fig', ...fg }); figCount++ }; continue }
    if (b.type === 'h' && cfg.beforeHeading?.[b.text]) for (const fg of cfg.beforeHeading[b.text]) { out.push({ type: 'fig', ...fg }); figCount++ }
    out.push(b)
    if (b.type === 'h' && cfg.afterHeading?.[b.text]) for (const fg of cfg.afterHeading[b.text]) { out.push({ type: 'fig', ...fg }); figCount++ }
  }
  const blockLines = out.map((b) => {
    if (b.type === 'h') return b.eyebrow
      ? `      { h: \`${esc(b.text)}\`, eyebrow: \`${esc(b.eyebrow)}\` },`
      : `      { h: \`${esc(b.text)}\` },`
    if (b.type === 'q') return `      { p: \`${esc(b.text)}\`, q: true },`
    if (b.type === 'fig') return `      { fig: '/war-img/${b.file}', cap: \`${esc(b.cap)}\`, credit: \`${esc(b.credit)}\` },`
    return `      { p: \`${esc(b.text)}\` },`
  }).join('\n')

  const comp = cfg.slug.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('') + 'ThemePage'
  const page = `'use client'

// THEME section — ${cfg.battleName} (Off the Battlefield, kind=theme). Built through
// the war content pipeline (fact pack → author(Opus) → five gates [fact-check +
// storytelling + comprehensiveness + clarity + Lost Cause/framing] → revise → images).
// Source + gate records: audits/war-pipeline/${cfg.slug}-*.md. Green accent; no stat
// block, no map. 'use client' is REQUIRED (reads ACCENTS from a client module).
// GENERATED from ${cfg.slug}-final.md by scripts/_build-war-themes.mjs — do not hand-edit
// the prose here; edit the final.md and rebuild.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'
import { ACCENTS } from '@/components/mode/war-chrome'

const NARR: Record<string, Narr> = {
  main: {
    eyebrow: \`${esc(cfg.eyebrow)}\`,
    title: \`${esc(title)}\`,
    blocks: [
${blockLines}
    ],
    meanwhile: {
      region: \`${esc(cfg.meanwhile.region)}\`,
      title: \`${esc(cfg.meanwhile.title)}\`,
      body: \`${esc(cfg.meanwhile.body)}\`,
    },
  },
}

export default function ${comp}() {
  return (
    <BattleSectionReader
      sections={NARR}
      id="main"
      slug="${cfg.slug}"
      battleName="${cfg.battleName.replace(/"/g, '\\"')}"
      theatreId="offfield"
      battleId="${cfg.battleId}"
      theatreHref="/war-civil-war/off-the-battlefield"
      accent={ACCENTS.green}
      heroImage="${cfg.hero.image}"
      heroPalette={${JSON.stringify(cfg.hero.palette)}}
      heroCredit={\`${esc(cfg.hero.credit)}\`}${cfg.hero.focus ? `\n      heroFocus="${cfg.hero.focus}"` : ''}${cfg.hero.scale ? `\n      heroScale={${cfg.hero.scale}}` : ''}
      endHref="/war-civil-war/off-the-battlefield"
      endKicker={\`${esc(cfg.end.kicker)}\`}
      endLabel={\`${esc(cfg.end.label)}\`}
    />
  )
}
`
  const dest = `${ROOT}/src/app/war-civil-war/off-the-battlefield/${cfg.slug}/page.tsx`
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, page)
  const proseWords = out.filter(b => b.type === 'p').reduce((n, b) => n + b.text.split(/\s+/).length, 0)
  console.log(`${cfg.slug}: ${out.length} blocks, ${figCount} figures, ~${proseWords} prose words -> ${dest.replace(ROOT + '/', '')}`)
}

// Hydrate fromJson configs: pull the hero image+credit and per-figure caption/credit
// from <slug>-figures.json (produced by scripts/_parse-img-manifests.mjs), and build
// the afterHeading/beforeHeading placement maps the figure injector expects.
function hydrate(cfg) {
  const p = `${ROOT}/audits/war-pipeline/${cfg.slug}-figures.json`
  if (!existsSync(p)) throw new Error(`missing figures JSON for ${cfg.slug} — run scripts/_parse-img-manifests.mjs`)
  const { hero, figs } = JSON.parse(readFileSync(p, 'utf8'))
  cfg.hero = { ...cfg.hero, image: `/war-img/${hero.file}`, credit: hero.credit }
  cfg.afterHeading = {}; cfg.beforeHeading = {}; cfg.markers = []
  for (const f of figs) {
    const bucket = f.type === 'before' ? cfg.beforeHeading : cfg.afterHeading
    ;(bucket[f.heading] ||= []).push({ file: f.file, cap: f.caption, credit: f.credit })
  }
  return cfg
}

for (const c of CONFIGS) build(c.fromJson ? hydrate(c) : c)
console.log('done')
