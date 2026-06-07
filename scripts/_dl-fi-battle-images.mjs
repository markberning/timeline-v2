// One-off: serial, paced, 429-proof downloader for the born-verified F&I battle
// commander/section images (manifests: audits/war-pipeline/fi-<battle>-images.md).
// PD-only sources (Wikimedia Commons + Library of Congress). Wikimedia is pulled
// through Special:FilePath?width=1600 so we self-host a sane-sized copy, not a 15MB
// original; the LOC plate is capped through its IIIF size param. Serial + paced +
// real UA + backoff on 429/403, magic-byte + size validation. Saves to public/war-img/.
import { readFileSync, writeFileSync, existsSync, statSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const OUT = `${ROOT}/public/war-img`
const UA = 'StuffHappenedBot/1.0 (https://stuffhappened.com; french-indian-war history reader; contact admin@stuffhappened.com)'
const sleep = (ms) => new Promise(r => setTimeout(r, ms))

// Wikimedia: build a width-capped Special:FilePath URL from the Commons file title.
const wm = (encodedTitle) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodedTitle}?width=1600`

const JOBS = [
  // commanders
  { file: 'fi-francois-pierre-vaudreuil.jpg', url: wm('Francois-Pierre_de_Rigaud_de_Vaudreuil.jpg') },
  { file: 'fi-abercromby.jpg', url: wm('James-abercrombie-by-ramsay-ca-1759-60.jpg') },
  { file: 'fi-howe.jpg', url: wm('Lord_Viscount_Howe.jpg') },
  { file: 'fi-levis.jpg', url: wm("Le_chevalier_de_Levis%2C_d%27apres_Mme_Haudebourt_%28HS85-10-16579%29.jpg") },
  { file: 'fi-boscawen.jpg', url: wm('Edward_Boscawen.jpg') },
  { file: 'fi-bradstreet.jpg', url: wm('Thomas_McIlworth_-_General_John_Bradstreet_-_Google_Art_Project.jpg') },
  { file: 'fi-forbes.jpg', url: wm('General_John_Forbes_from_the_Darlington_Digital_Collection_University_of_Pittsburgh.JPG') },
  { file: 'fi-grant.jpg', url: wm('British_Major_General_James_Grant%2C_circa_1770.jpg') },
  { file: 'fi-william-johnson.jpg', url: wm('Sir_William_Johnson.jpg') },
  { file: 'fi-saunders.jpg', url: wm('Richard_Brompton_-_Portrait_of_Admiral_Sir_Charles_Saunders_-_WGA03238.jpg') },
  { file: 'fi-bougainville.jpg', url: wm('Ducreux_-_Louis_Antoine_de_Bougainville.jpg') },
  { file: 'fi-murray.jpg', url: wm('General_James_Murray%2C_1722_-_1794._Governor_of_Quebec_and_Minorca.jpg') },
  { file: 'fi-vaudreuil.jpg', url: wm('Pierre_de_Rigaud%2C_marquis_de_Vaudreuil-Cavagnial.jpg') },
  // section scenes
  { file: 'fi-oswego-attaques-1756.jpg', url: 'https://tile.loc.gov/image-services/iiif/service:gmd:gmd380:g3804:g3804o:ar307300/full/!1600,1600/0/default.jpg' },
  { file: 'fi-fwh-siege-plan.jpg', url: wm('Plan_du_si%C3%A8ge_de_fort_William_Henry_en_1757.jpg') },
  { file: 'fi-fwh-massacre.jpg', url: wm('Montcalm_trying_to_stop_the_massacre.jpg') },
  { file: 'fi-fwh-attacks-map.jpg', url: wm('Carte_du_si%C3%A8ge_du_fort_William_Henry_en_1757.jpg') },
  { file: 'fi-carillon-jefferys-plan.jpg', url: wm('TiconderogaJeffreys1758.jpg') },
  { file: 'fi-louisbourg-view-lighthouse.jpg', url: wm('A_View_of_Louisburg_in_North_America%2C_taken_near_the_Light_House_when_that_City_was_besieged_in_1758_%28JCB%29.jpg') },
  { file: 'fi-louisbourg-prudent.jpg', url: wm('British_burning_warship_Prudent_and_capturing_Bienfaisant._Siege_of_Louisbourg_1758._Maritime_Museum_of_the_Atlantic%2C_M55.7.1.jpg') },
  { file: 'fi-louisbourg-siege-plan.jpg', url: wm('Plan_du_si%C3%A8ge_de_Louisbourg_en_1758_avec_positions_des_vaisseaux.jpg') },
  { file: 'fi-frontenac-cataracoui-view.jpg', url: wm('Fort_Frontenac_1759.jpg') },
  { file: 'fi-frontenac-capture-engraving.jpg', url: wm('Battle_of_Fort_Frontenac.jpg') },
  { file: 'fi-niagara-1759-view.jpg', url: wm('A_view_of_Niagara_Fort%2C_taken_by_Sir_William_Johnson%2C_on_the_25th_of_July_1759%2C_drawn_on_the_spot_in_1758_%28NYPL_NYPG94-F42-419821%29.jpg') },
  { file: 'fi-niagara-pouchot-plan.jpg', url: wm("M%C3%A9moires_sur_la_derni%C3%A8re_guerre_de_l%27Am%C3%A9rique_Septentrionale_-_entre_la_France_et_l%27Angleterre%3B_suivis_d%27observations%2C_dont_plusieurs_sont_relatives_au_th%C3%A9atre_actuel_de_la_guerre%2C_and_de_nouveaux_%2814579503317%29.jpg") },
  { file: 'fi-quebec-view-of-the-taking.jpg', url: wm('Quebec_Smyth_1760.jpg') },
  { file: 'fi-quebec-death-of-wolfe.jpg', url: wm('Benjamin_West_005.jpg') },
  { file: 'fi-sainte-foy-quebec-view.jpg', url: wm('A_General_View_of_Quebec%2C_from_Point_Levy.jpg') },
  { file: 'fi-sainte-foy-battle.jpg', url: wm('La_Bataille_de_Sainte-Foy_-_Joseph_Legare.jpg') },
  { file: 'fi-montreal-east-view.jpg', url: wm('Vue_orientale_de_Montreal%2C_en_Canada.jpg') },
  { file: 'fi-montreal-surrender.jpg', url: wm('Montreal_1760_Amherst.jpg') },
]

function isValidImage(path) {
  if (!existsSync(path)) return false
  const sz = statSync(path).size
  if (sz < 8000) return false // stub/error pages
  const fd = readFileSync(path)
  const jpg = fd[0] === 0xff && fd[1] === 0xd8
  const png = fd[0] === 0x89 && fd[1] === 0x50 && fd[2] === 0x4e && fd[3] === 0x47
  return jpg || png
}

async function fetchTo(url, dest) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': 'image/*' }, redirect: 'follow' })
      if (res.status === 429 || res.status === 403) {
        const wait = 6000 * attempt
        console.log(`   ${res.status} throttled — backoff ${wait}ms (attempt ${attempt})`)
        await sleep(wait); continue
      }
      if (!res.ok) { console.log(`   HTTP ${res.status}`); return false }
      const buf = Buffer.from(await res.arrayBuffer())
      writeFileSync(dest, buf)
      if (isValidImage(dest)) return true
      console.log(`   invalid/too-small (${buf.length}B)`); return false
    } catch (e) {
      console.log(`   error: ${e.message} (attempt ${attempt})`)
      await sleep(3000 * attempt)
    }
  }
  return false
}

const ok = [], fail = []
for (let i = 0; i < JOBS.length; i++) {
  const { file, url } = JOBS[i]
  const dest = `${OUT}/${file}`
  if (isValidImage(dest)) { console.log(`[${i + 1}/${JOBS.length}] ✓ exists ${file}`); ok.push(file); continue }
  process.stdout.write(`[${i + 1}/${JOBS.length}] ${file} ... `)
  const good = await fetchTo(url, dest)
  if (good) { const kb = Math.round(statSync(dest).size / 1024); console.log(`ok (${kb}KB)`); ok.push(file) }
  else { console.log('FAIL'); fail.push({ file, url }) }
  await sleep(1800)
}

console.log(`\nDONE. ${ok.length} ok, ${fail.length} failed.`)
if (fail.length) { console.log('FAILED:'); for (const f of fail) console.log(`  ${f.file}  <-  ${f.url}`) }
