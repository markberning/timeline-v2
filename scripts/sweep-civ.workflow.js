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

// args = a tlId string ("prehistoric-japan"), OR a JSON object/string
// { tl, model } where `model` (e.g. 'sonnet') overrides the model for the content
// agents (card-writers, photo-finders, pickers). The deterministic phase agents
// (prep/gather/finish/commit/merge) always inherit the default.
let A = args
if (typeof A === 'string') { const s = A.trim(); A = s.startsWith('{') ? JSON.parse(s) : { tl: s } }
const tl = A && A.tl
// Content agents default to Sonnet (validated 2026-06-03: comparable writing, all
// gates green, ~faster) UNLESS args overrides (e.g. {tl,model:'opus'}). The
// deterministic runPhase agents always inherit the session default — they only shell out.
const MODEL = (A && A.model) || 'sonnet'
if (!tl) throw new Error('sweep-civ workflow needs a tlId (args="prehistoric-japan" or {tl,model})')

const EVENT = { type: 'object', properties: { id: { type: 'string' }, label: { type: 'string' }, wikiSlug: { type: 'string' } }, required: ['id', 'label'] }
const PREP_SCHEMA = { type: 'object', properties: { totalEvents: { type: 'number' }, chapters: { type: 'array', items: { type: 'object', properties: { chapter: { type: 'number' }, title: { type: 'string' }, eventCount: { type: 'number' }, events: { type: 'array', items: EVENT } }, required: ['chapter', 'eventCount', 'events'] } } }, required: ['chapters', 'totalEvents'] }
const GATHER_SCHEMA = { type: 'object', properties: { events: { type: 'number' }, withCandidates: { type: 'number' }, none: { type: 'array', items: { type: 'string' } }, rateLimited: { type: 'boolean' } }, required: ['events', 'withCandidates'] }
const NOPHOTO = { type: 'object', properties: { id: { type: 'string' }, label: { type: 'string' }, recoverable: { type: 'boolean' } }, required: ['id'] }
const CH_COV = { type: 'object', properties: { chapter: { type: 'number' }, total: { type: 'number' }, withPhoto: { type: 'number' }, pct: { type: 'number' }, thin: { type: 'boolean' }, recoverable: { type: 'number' }, noPhoto: { type: 'array', items: NOPHOTO } }, required: ['chapter', 'pct', 'thin'] }
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
// ONE per-chapter agent does BOTH jobs that used to be split across separate card +
// finder agents: it writes each event's 2-part card AND names that event's born-verified
// photo candidates inline (the card output's photoCandidates field, which sweep-photos
// reads directly). Merging halves the Author-phase agent count and — because the agent
// already opens each event's wiki page to fact-check the card — reuses that page to grab
// the lead image instead of a second agent re-fetching it. Same parallel barrier before
// gather (cards + finds both blocked it before).
const authorThunks = prep.chapters.map(ch => () => agent(
  `Event sweep, civ \`${tl}\`, Chapter ${ch.chapter}${ch.title ? ` (${ch.title})` : ''}. Read \`/tmp/${tl}-bundles/ch${ch.chapter}.json\` (\`{tl,chapter,chapterTitle,narrative,events:[{id,label,year,endYear,description,wikiSlug,commonsFile}]}\`). For EVERY event do BOTH of the following.\n\n`
  + `PART A — the 2-part card:\n1. \`description\` — tight house-voice "what this is", 1-2 sentences, replaces the current description.\n2. \`exploreFurther\` — a HARD CAP of 2-4 sentences (NEVER 5+) of interesting BORN-VERIFIED facts the narrative does NOT give. Be disciplined: pick the 2-4 most surprising facts and STOP - do not list everything you find, do not pad. Tight beats exhaustive. Web-search to confirm every date/name/number. NO hallucination - a missing detail beats a wrong one. Don't repeat description/narrative.\n\n`
  + `PART B — photo candidates: while you have each event's wiki page open to fact-check, also grab 1-3 REAL, VERIFIED Wikimedia Commons image filenames that genuinely depict its subject (good candidates here mean the sweep clears its 70% photo floor on the FIRST pass, no slow gap-fill round). VERIFY each exists: read the wiki page's real lead-image filename, and/or confirm \`https://commons.wikimedia.org/wiki/File:<name>\` resolves to the right subject (or search \`https://commons.wikimedia.org/w/index.php?search=<terms>&title=Special:MediaSearch&type=image\`). Do NOT invent or guess filenames - only confirmed-real files showing the right thing. Prefer the iconic artifact/site/person/manuscript; a representative artifact/site/map is fine for portraitless people. OMIT genuinely ABSTRACT events (trade *networks*, "decline/collapse" processes, oral traditions, clan systems, ceremonies with no photo) - leave their photoCandidates empty (honest-reject; never force).\n\n`
  + `${VOICE}\n\nWrite \`/tmp/${tl}-out/ch${ch.chapter}.json\`: \`{"chapter":${ch.chapter},"cards":[{"eventId":"<id>","description":"...","exploreFurther":"...","photoCandidates":["File:Foo.jpg", ...]}]}\` (best candidate first; \`[]\` for abstract events). One card per event, exact ids, none skipped. Reply with the count, how many got photo candidates, and any uncertainty.`,
  { label: `author:ch${ch.chapter}`, phase: 'Author', agentType: 'general-purpose', model: MODEL },
))
await parallel(authorThunks)

phase('Gather')
const gather = await runPhase(`gather:${tl}`, `node scripts/sweep-civ.mjs gather ${tl}`, GATHER_SCHEMA, 600000)
log(`${tl}: gathered - ${gather.withCandidates}/${gather.events} events have candidates`)

phase('Pick')
// PARALLEL per-chapter vision pick: each picker views ONLY its chapter's candidate
// images and picks the best per event, writing /tmp/<tl>-photos/picks-ch<N>.json.
// This replaces a single agent that read every image serially (the slowest step) —
// same per-image judgment, just fanned out. _merge-picks.mjs then unions the chapter
// files and resolves cross-chapter image collisions deterministically into picks.json
// (the GLOBAL distinctness finish requires).
const pickThunks = prep.chapters.map(ch => () => agent(
  `Vision photo-pick for the \`${tl}\` event sweep, Chapter ${ch.chapter}${ch.title ? ` (${ch.title})` : ''}. Candidate images are downloaded locally - NO network.\n\n`
  + `Read \`/tmp/${tl}-photos/manifest.json\` (\`{events:{"<id>":{label,wikiSlug,candidates:[{file:"File:..",localPath,w,h}]}}}\`). Pick photos for ONLY these event ids (this chapter's events):\n${ch.events.map(e => e.id).join(', ')}\n\n`
  + `For each of those events WITH candidates, VIEW its candidate files (Read tool on each \`localPath\` - real local images) and pick the SINGLE best photo that ACCURATELY depicts the subject.\n\n`
  + `HARD RULES:\n1. Distinctness within your chapter - do not assign the same commonsFile to two of your events (cross-chapter duplicates are resolved automatically afterward, so you only need your own picks distinct).\n2. Accuracy floor - the image must show the right thing (right person/site/artifact/era). If candidates are wrong-subject or you can't tell, REJECT. A missing photo beats a wrong one. Maps are OK only when nothing better exists.\n3. Every event in your list gets a decision; an event with no candidates -> \`"reject"\`, reason "no apt born-verified photo".\n\n`
  + `For each pick write a one-sentence English house-voice caption. OUTPUT: write \`/tmp/${tl}-photos/picks-ch${ch.chapter}.json\` = \`{"<id>":{"decision":"override","commonsFile":"Foo.jpg","caption":"..."}}\` or \`{"<id>":{"decision":"reject","reason":"..."}}\`. Include EVERY event id from the list above and ONLY those. commonsFile = exact manifest \`file\` minus the \`File:\` prefix (preserve accents/apostrophes/case). Reply with your chapter's override/reject tally.`,
  { label: `pick:ch${ch.chapter}`, phase: 'Pick', agentType: 'general-purpose', model: MODEL },
))
await parallel(pickThunks)
// (the per-chapter pick union + cross-chapter dedup is folded into `finish` below —
// it runs scripts/_merge-picks.mjs itself, so no separate agent is needed here.)

phase('Finish')
let fin = await runPhase(`finish:${tl}`, `node scripts/sweep-civ.mjs finish ${tl}`, FINISH_SCHEMA, 420000)
log(`${tl}: photos ${fin.coverage}% - thin: ${fin.thinChapters.map(c => `ch${c.chapter}(${c.pct}%)`).join(', ') || 'none'} - G14 ${fin.gates.g14} - G15 new-thin ${fin.gates.g15NewThin} - fix-links ${fin.gates.fixLinksClean}`)

// Gap-fill ONLY recoverable (zero-candidate) events — the ones the picker never had a
// real image to judge. Picker-REJECTED events (it saw candidates, none apt) are honest
// rejects: re-searching Commons almost never beats what was already rejected, so we must
// not burn a slow serial regather on them. `tried` then drops any recoverable event a
// prior round's finder already attempted-and-failed, so a fruitless finder can't make us
// loop a second time. Net: image-poor civs (maya/hittite) do ZERO gap-fill rounds.
// See memory/project_sweep_gapfill_optimization.
const tried = new Set()
let round = 0
while (round < 2) {
  const todo = fin.thinChapters
    .flatMap(c => (c.noPhoto || []).filter(e => e.recoverable).map(e => ({ ...e, chapter: c.chapter })))
    .filter(e => !tried.has(e.id))
  if (!todo.length) {
    if (fin.thinChapters.length) log(`${tl}: ${fin.thinChapters.length} thin chapter(s) but no recoverable (zero-candidate) events left — shortfall is genuine rejects (image-poor); skipping gap-fill.`)
    break
  }
  round++
  phase('Gapfill')
  const thinEvents = todo
  thinEvents.forEach(e => tried.add(e.id))
  log(`${tl}: gap-fill round ${round} - ${thinEvents.length} recoverable event(s) across ${fin.thinChapters.length} thin chapter(s) (skipping genuine rejects)`)
  await agent(
    `Targeted photo gap-fill for the \`${tl}\` sweep, round ${round} - lift thin chapters over the 70% photo floor. Find REAL, VERIFIED, DISTINCT Wikimedia Commons filenames ONLY for events that genuinely have an apt image (a representative artifact/site/map is fine for portraitless people / abstract-but-illustratable events). Do NOT force - if no apt distinct image exists, OMIT it (honest-reject).\n\n`
    + `VERIFY each file exists (open the Commons File: page or the Wikipedia page) and shows the right subject.\n\n`
    + `CRITICAL distinctness: read \`/tmp/${tl}-photos/picks.json\` first and do NOT reuse any commonsFile already chosen there (each file used by ONE event app-wide). Also .svg/.ogg/.pdf are excluded by the gatherer - don't propose vector/audio files.\n\n`
    + `EVENTS needing a photo (eventId | label):\n` + thinEvents.map(e => `${e.id} | ${e.label}`).join('\n')
    + `\n\nOUTPUT: write \`/tmp/${tl}-gapfill2.json\` = \`{"<eventId>":["File:..."], ...}\` (only events you filled). Reply with which filled, which left empty (why), any borderline.`,
    { label: `gapfill:r${round}`, phase: 'Gapfill', agentType: 'general-purpose', model: MODEL },
  )
  await runPhase(`regather:${tl}:r${round}`, `node scripts/sweep-civ.mjs gather ${tl}`, GATHER_SCHEMA, 600000)
  // re-pick ONLY the gap-fill events (few) as a single agent → repick-r<round>.json,
  // which finish merges over the existing picks.json (keeps every prior pick).
  await agent(
    `Vision photo-pick (gap-fill round ${round}) for the \`${tl}\` event sweep. Candidate images are downloaded locally - NO network.\n\n`
    + `Read \`/tmp/${tl}-photos/manifest.json\`. Pick photos for ONLY these gap-fill event ids (newly gathered this round):\n${thinEvents.map(e => e.id).join(', ')}\n\n`
    + `For each that HAS candidates, VIEW its candidate files (Read tool on each \`localPath\`) and pick the SINGLE best ACCURATE photo. Accuracy floor: the right subject or REJECT (a missing photo beats a wrong one).\n\n`
    + `CRITICAL distinctness: read \`/tmp/${tl}-photos/picks.json\` first and do NOT reuse any commonsFile already chosen there (each file used by ONE event app-wide).\n\n`
    + `For each pick write a one-sentence house-voice caption. OUTPUT: write \`/tmp/${tl}-photos/repick-r${round}.json\` = \`{"<id>":{"decision":"override","commonsFile":"Foo.jpg","caption":"..."}}\` or \`{"<id>":{"decision":"reject","reason":"..."}}\`, for ONLY the gap-fill events listed above. commonsFile = exact manifest \`file\` minus the \`File:\` prefix. Reply with the tally.`,
    { label: `repick:r${round}`, phase: 'Gapfill', agentType: 'general-purpose', model: MODEL },
  )
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
