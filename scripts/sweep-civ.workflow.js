// sweep-civ workflow — drives ONE civ end-to-end through the event-upgrade sweep.
// RUN IT INLINE via the Workflow tool: Workflow({ script: <contents of this file>, args: "<tlId>" })
// (the `.claude/workflows/` dir is harness-guarded, so this lives in scripts/ as the durable
// copy; pass it inline or via scriptPath). Run waves 2-wide — see
// audits/event-upgrade-sweep-progress.md. Deterministic phases live in scripts/sweep-civ.mjs.
export const meta = {
  name: 'sweep-civ',
  description: 'Run one civ end-to-end through the event-upgrade sweep (cards + born-verified photos, all gates)',
  phases: [
    { title: 'Prep' }, { title: 'Author' }, { title: 'Gather' }, { title: 'Pick' }, { title: 'Finish' }, { title: 'Gapfill' }, { title: 'Commit' },
  ],
}

const tl = typeof args === 'string' ? args.trim() : (args && args.tl)
if (!tl) throw new Error('sweep-civ workflow needs a tlId as args (e.g. "prehistoric-japan")')

const EVENT = { type: 'object', properties: { id: { type: 'string' }, label: { type: 'string' }, wikiSlug: { type: 'string' } }, required: ['id', 'label'] }
const PREP_SCHEMA = { type: 'object', properties: { totalEvents: { type: 'number' }, chapters: { type: 'array', items: { type: 'object', properties: { chapter: { type: 'number' }, title: { type: 'string' }, eventCount: { type: 'number' }, events: { type: 'array', items: EVENT } }, required: ['chapter', 'eventCount', 'events'] } } }, required: ['chapters', 'totalEvents'] }
const GATHER_SCHEMA = { type: 'object', properties: { events: { type: 'number' }, withCandidates: { type: 'number' }, none: { type: 'array', items: { type: 'string' } }, rateLimited: { type: 'boolean' } }, required: ['events', 'withCandidates'] }
const NOPHOTO = { type: 'object', properties: { id: { type: 'string' }, label: { type: 'string' } }, required: ['id'] }
const CH_COV = { type: 'object', properties: { chapter: { type: 'number' }, total: { type: 'number' }, withPhoto: { type: 'number' }, pct: { type: 'number' }, thin: { type: 'boolean' }, noPhoto: { type: 'array', items: NOPHOTO } }, required: ['chapter', 'pct', 'thin'] }
const FINISH_SCHEMA = { type: 'object', properties: { override: { type: 'number' }, reject: { type: 'number' }, coverage: { type: 'number' }, perChapter: { type: 'array', items: CH_COV }, thinChapters: { type: 'array', items: CH_COV }, gates: { type: 'object', properties: { g14: { type: 'boolean' }, g15NewThin: { type: ['number', 'null'] }, fixLinksClean: { type: 'boolean' } } }, dups: { type: 'array' } }, required: ['coverage', 'perChapter', 'thinChapters', 'gates'] }

const runPhase = (label, cmd, schema, timeoutMs = 180000) => agent(
  `Run EXACTLY this one command with the Bash tool, from the repo root, and nothing else:\n\n    ${cmd}\n\n`
  + `CRITICAL: pass the Bash tool a \`timeout\` of ${timeoutMs} (milliseconds) for this command — it can legitimately run for minutes (it may queue on a global lock and then download images serially), so do NOT let it hit the default 2-minute timeout. `
  + `It prints progress to stderr and exactly one line to stdout that starts with "RESULT " followed by a JSON object. `
  + `Parse the JSON that follows "RESULT " and return it as your structured output. Do NOT modify the command, do NOT run anything else, do NOT summarize — just return the parsed RESULT object. If the command exits non-zero or prints no RESULT line, return the closest structured object you can and note it.`,
  { label, phase: label.split(':')[0], schema },
)

phase('Prep')
const prep = await runPhase(`prep:${tl}`, `node scripts/sweep-civ.mjs prep ${tl}`, PREP_SCHEMA)
log(`${tl}: ${prep.chapters.length} chapters, ${prep.totalEvents} events`)

phase('Author')
const VOICE = `VOICE: informal popular-history (conversational, vivid, never academic); inline-define terms on first use; miles before km (km in parens); parentheses for definitions not em-dashes; vary uncertainty language; reader has zero prior knowledge.`
const cardThunks = prep.chapters.map(ch => () => agent(
  `Event-card sweep, civ \`${tl}\`, Chapter ${ch.chapter}${ch.title ? ` (${ch.title})` : ''}. Read \`/tmp/${tl}-bundles/ch${ch.chapter}.json\` (\`{tl,chapter,chapterTitle,narrative,events:[{id,label,year,endYear,description,wikiSlug,commonsFile}]}\`).\n\n`
  + `For EVERY event write a 2-part card:\n1. \`description\` — tight house-voice "what this is", 1-2 sentences, replaces the current description.\n2. \`exploreFurther\` — 2-4 sentences of interesting BORN-VERIFIED facts the narrative does NOT give. Web-search to confirm every date/name/number. NO hallucination - a missing detail beats a wrong one. Don't repeat description/narrative.\n\n`
  + `${VOICE}\n\nWrite \`/tmp/${tl}-out/ch${ch.chapter}.json\`: \`{"chapter":${ch.chapter},"cards":[{"eventId":"<id>","description":"...","exploreFurther":"...","photoCandidates":[]}]}\`. One card per event, exact ids, none skipped. Reply with the count and any uncertainty.`,
  { label: `cards:ch${ch.chapter}`, phase: 'Author', agentType: 'general-purpose' },
))
const allEvents = prep.chapters.flatMap(c => c.events)
const seenIds = new Set(); const uniqEvents = allEvents.filter(e => !seenIds.has(e.id) && seenIds.add(e.id))
const FINDER_SIZE = 14
const finderGroups = []
for (let i = 0; i < uniqEvents.length; i += FINDER_SIZE) finderGroups.push(uniqEvents.slice(i, i + FINDER_SIZE))
const finderThunks = finderGroups.map((grp, gi) => () => agent(
  `Photo-finder for the \`${tl}\` event sweep (group ${gi + 1}/${finderGroups.length}). This runs BEFORE image download - good candidates here mean the sweep clears its 70% photo floor on the FIRST pass.\n\n`
  + `For each event below, find 1-3 REAL, VERIFIED Wikimedia Commons image filenames that genuinely depict its subject. VERIFY each exists: open the event's wiki slug page (\`https://en.wikipedia.org/wiki/<slug>\`) to read its real lead-image filename, and/or confirm \`https://commons.wikimedia.org/wiki/File:<name>\` resolves to a real image of the right subject (or search \`https://commons.wikimedia.org/w/index.php?search=<terms>&title=Special:MediaSearch&type=image\`). Do NOT invent or guess filenames - only return confirmed-real files showing the right thing.\n\n`
  + `RULES: one file per event (distinctness - prefer the iconic artifact/site/person/manuscript). A representative artifact/site/map is fine for portraitless people. OMIT genuinely ABSTRACT events (trade *networks*, "decline/collapse" processes, oral traditions, clan systems, market "shadows", ceremonies with no photo) - those honest-reject; never force.\n\n`
  + `EVENTS (eventId | label | wikiSlug):\n` + grp.map(e => `${e.id} | ${e.label} | ${e.wikiSlug || '(none)'}`).join('\n')
  + `\n\nOUTPUT: write \`/tmp/${tl}-gapfill-g${gi + 1}.json\` = \`{"<eventId>":["File:Foo.jpg", ...], ...}\` (only events you filled; best-candidate first). Reply with which you filled, which you omitted (why), any borderline file.`,
  { label: `finder:g${gi + 1}`, phase: 'Author', agentType: 'general-purpose' },
))
await parallel([...cardThunks, ...finderThunks])

phase('Gather')
const gather = await runPhase(`gather:${tl}`, `node scripts/sweep-civ.mjs gather ${tl}`, GATHER_SCHEMA, 600000)
log(`${tl}: gathered - ${gather.withCandidates}/${gather.events} events have candidates`)

phase('Pick')
const visionPick = (note) => agent(
  `Vision photo-pick for the \`${tl}\` event sweep. Candidate images are downloaded locally - NO network.\n\n`
  + `Read \`/tmp/${tl}-photos/manifest.json\` (\`{events:{"<id>":{label,wikiSlug,candidates:[{file:"File:..",localPath,w,h}]}}}\`). For each event WITH candidates, VIEW its candidate files (Read tool on each \`localPath\` - real local images) and pick the SINGLE best photo that ACCURATELY depicts the subject.\n\n`
  + `HARD RULES:\n1. Global distinctness - each commonsFile used AT MOST ONCE across all events. When several events share an iconic image, assign it to the ONE best-fit event and pick a different candidate (or reject) for the others.\n2. Accuracy floor - the image must show the right thing (right person/site/artifact/era). If candidates are wrong-subject or you can't tell, REJECT. A missing photo beats a wrong one. Maps are OK only when nothing better exists.\n3. Every event gets a decision; events with no candidates -> \`"reject"\`, reason "no apt born-verified photo".\n`
  + `${note || ''}\n`
  + `For each pick write a one-sentence English house-voice caption. OUTPUT: write \`/tmp/${tl}-photos/picks.json\` = \`{"<id>":{"decision":"override","commonsFile":"Foo.jpg","caption":"..."}}\` or \`{"decision":"reject","reason":"..."}\`. commonsFile = exact manifest \`file\` minus the \`File:\` prefix (preserve accents/apostrophes/case). Include EVERY eventId in the manifest. Reply with the override/reject tally and CONFIRM no commonsFile repeats.`,
  { label: `pick:${tl}`, phase: 'Pick', agentType: 'general-purpose' },
)
await visionPick()

phase('Finish')
let fin = await runPhase(`finish:${tl}`, `node scripts/sweep-civ.mjs finish ${tl}`, FINISH_SCHEMA, 420000)
log(`${tl}: photos ${fin.coverage}% - thin: ${fin.thinChapters.map(c => `ch${c.chapter}(${c.pct}%)`).join(', ') || 'none'} - G14 ${fin.gates.g14} - G15 new-thin ${fin.gates.g15NewThin} - fix-links ${fin.gates.fixLinksClean}`)

let round = 0
while (fin.thinChapters.length && round < 2) {
  round++
  phase('Gapfill')
  const thinEvents = fin.thinChapters.flatMap(c => (c.noPhoto || []).map(e => ({ ...e, chapter: c.chapter })))
  log(`${tl}: gap-fill round ${round} - ${thinEvents.length} no-photo events in ${fin.thinChapters.length} thin chapter(s)`)
  await agent(
    `Targeted photo gap-fill for the \`${tl}\` sweep, round ${round} - lift thin chapters over the 70% photo floor. Find REAL, VERIFIED, DISTINCT Wikimedia Commons filenames ONLY for events that genuinely have an apt image (a representative artifact/site/map is fine for portraitless people / abstract-but-illustratable events). Do NOT force - if no apt distinct image exists, OMIT it (honest-reject).\n\n`
    + `VERIFY each file exists (open the Commons File: page or the Wikipedia page) and shows the right subject.\n\n`
    + `CRITICAL distinctness: read \`/tmp/${tl}-photos/picks.json\` first and do NOT reuse any commonsFile already chosen there (each file used by ONE event app-wide). Also .svg/.ogg/.pdf are excluded by the gatherer - don't propose vector/audio files.\n\n`
    + `EVENTS needing a photo (eventId | label):\n` + thinEvents.map(e => `${e.id} | ${e.label}`).join('\n')
    + `\n\nOUTPUT: write \`/tmp/${tl}-gapfill2.json\` = \`{"<eventId>":["File:..."], ...}\` (only events you filled). Reply with which filled, which left empty (why), any borderline.`,
    { label: `gapfill:r${round}`, phase: 'Gapfill', agentType: 'general-purpose' },
  )
  await runPhase(`regather:${tl}:r${round}`, `node scripts/sweep-civ.mjs gather ${tl}`, GATHER_SCHEMA, 600000)
  await visionPick(`This is a re-pick after a gap-fill round. KEEP every good photo already chosen in the existing \`/tmp/${tl}-photos/picks.json\` (read it first and carry those overrides forward unchanged); only ADD picks for the newly-gathered gap-fill events, staying distinct from all already-chosen files.`)
  fin = await runPhase(`finish:${tl}:r${round}`, `node scripts/sweep-civ.mjs finish ${tl}`, FINISH_SCHEMA, 420000)
  log(`${tl}: after round ${round} - photos ${fin.coverage}% - thin: ${fin.thinChapters.map(c => `ch${c.chapter}(${c.pct}%)`).join(', ') || 'none'}`)
}

phase('Commit')
if (!fin.gates.g14 || fin.gates.g15NewThin !== 0 || !fin.gates.fixLinksClean || (fin.dups && fin.dups.length)) {
  log(`${tl}: NOT committing - gates not green (G14 ${fin.gates.g14}, G15 new-thin ${fin.gates.g15NewThin}, fix-links ${fin.gates.fixLinksClean}, dups ${fin.dups?.length || 0}). Left staged for human review.`)
  return { tl, committed: false, ...fin }
}
const commit = await runPhase(`commit:${tl}`, `node scripts/sweep-civ.mjs commit ${tl}`, { type: 'object', properties: { sha: { type: 'string' } }, required: ['sha'] })
log(`${tl}: committed ${commit.sha} (photos ${fin.coverage}%)`)
return { tl, committed: true, sha: commit.sha, coverage: fin.coverage, thinChapters: fin.thinChapters.map(c => `ch${c.chapter}`), gates: fin.gates }
