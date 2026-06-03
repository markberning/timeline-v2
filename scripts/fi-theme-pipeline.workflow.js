// F&I Off-the-Battlefield THEME pipeline — runs ONE theme through the mandatory war
// content pipeline (audits/war-content-pipeline.md): fact pack → Opus author → 5
// parallel Sonnet critics. It writes every gated artifact to audits/war-pipeline/ and
// returns the critics' verdicts. It does NOT reconcile, does NOT revise, does NOT
// commit — the coordinator (me) reads the critics critically, sources any new material
// into the fact pack, runs the revise author, builds the final, and integrates.
//
// RUN INLINE: Workflow({ scriptPath: 'scripts/fi-theme-pipeline.workflow.js', args: {THEME} })
// where {THEME} = { slug, name, type, date, brief, mustInclude:[...], pills:[...] }.
// Run 2-3 themes concurrent (independent topics, no shared files).
export const meta = {
  name: 'fi-theme-pipeline',
  description: 'Run one F&I off-the-battlefield theme through the gated war pipeline (fact pack → author → 5 critics)',
  phases: [{ title: 'Factpack' }, { title: 'Author' }, { title: 'Critics' }],
}

const T = typeof args === 'string' ? JSON.parse(args) : args
if (!T || !T.slug || !T.name) throw new Error('fi-theme-pipeline needs args = { slug, name, type, date, brief, mustInclude, pills }')
const slug = T.slug
const AUD = `audits/war-pipeline/fi-${slug}`

// ---- shared house-voice + framing rules (every F&I section) ----
const VOICE = `LOCKED HOUSE VOICE (the storytelling + clarity critics enforce these; a passing-but-violating draft is NOT done):
1. Informal popular-history voice — conversational, vivid, never academic. The reader has ZERO prior knowledge; inline-define every term on first use.
2. NO em-dashes (—) anywhere. Use commas, periods, or parentheses, or restructure. Ordinary hyphens in compounds are fine. The ONLY exception is a quote-attribution line ("..." — Name).
3. NO meta-narrator: do not tell the reader what to think/remember/expect or narrate the chapter's own machinery ("here is the fact that reframes everything", "hold onto that"). State the thing; don't herald it.
4. Little or no bold. Don't bold key terms for emphasis.
5. Full rank/title spelled out on first appearance ("Lieutenant Colonel George Washington"), abbreviate after. Never the double form "Lt. Col. (Lieutenant Colonel)".
6. Don't over-gloss common English — gloss genuine jargon only (cession, speculator, regulars, etc.).
7. Miles first, km in parens.
8. Parentheses for definitions, not em-dashes. Vary uncertainty language.`

const SIDETAGS = `SIDE-TAGS (F&I): tag every named person who is on a side with it on FIRST mention in this section — "(British)" / "(French)". Native individuals are tagged by their NATION ("Tanaghrisson (Mingo)", "a Shawnee war leader"), never "Indian" as a side. These 7 MARQUEE names take NO side-tag: George Washington, James Wolfe, the Marquis de Montcalm, William Pitt, Benjamin Franklin, Edward Braddock, Jeffery Amherst. Everyone else on a side gets the tag once.`

const FRAMING = `F&I FRAMING FIRST-CHECK (the analog of the Civil War "name the cause" rule — this is SHIP-BLOCKING):
- Native nations must be FIRST-CLASS ACTORS with their own aims and leverage, never props of Britain or France. They fought for their own sovereignty and land, and played the empires against each other. If the section reduces them to a backdrop or a tool, that is an automatic MUST-FIX.
- The HUMAN COST and dispossession must be named plainly in the section's own prose: the contest was ultimately over Native land, and the war's outcome was a catastrophe for Native nations (and, where relevant, the Acadian expulsion). Omission, not euphemism, is the default failure mode — if the cost/dispossession never appears, MUST-FIX.
- The name "French and Indian War" centers the British-colonial point of view; where natural, acknowledge it (the British colonists named the war for their enemies). Do not erase that the "Indians" fought on all sides and for themselves.`

const CONV = `MARKDOWN OUTPUT CONVENTIONS (a deterministic build script parses this — follow EXACTLY):
- First non-blank line: \`# <Section title>\`
- Immediately after, an optional \`> eyebrow: <short kicker>\` (a distinct phase label, NOT a repeat of the title).
- Section headings: \`## <Heading>\`, each optionally followed by its own \`> eyebrow: <kicker>\` on the next line.
- A pull-quote: a line \`> quote: <the quote text, with attribution as "..." — Name>\`.
- A CROSS-REFERENCE to another battle/theme is its OWN standalone line that is JUST a markdown link: \`[Label](/war-french-indian/...)\` — the builder turns it into a "Read the full story" pill. One pill per referenced story, at its natural beat; never stack two pills with no prose between; never bury a cross-ref inline in a parenthetical.
- A figure anchor (images are added in a later born-verified pass, so just mark good spots): a line \`[FIGURE: <what should go here> | <house-voice caption> | <credit if known>]\`. Propose 6-10 figure anchors spread across DIFFERENT headings.
- Everything else is a normal paragraph (inline **bold**/*italic* and inline [x](/y) links are allowed in paragraphs, but cross-ref pills must be on their own line).`

const PILLS = (T.pills && T.pills.length)
  ? `CROSS-REFERENCE PILLS this section should carry (each as its own standalone link line at the natural beat; the target may be unbuilt and 404 for now — that's fine, link it anyway):\n` + T.pills.map(p => `- [${p.label}](${p.href})`).join('\n')
  : `No required cross-reference pills for this section.`

// ---------------------------------------------------------------------------
phase('Factpack')
const factpack = await agent(
  `You are the FACT-PACK researcher for a gated history-app section: the French and Indian War off-the-battlefield theme "${T.name}" (${T.date || ''}), kind=theme (${T.type || 'theme'}).\n\n`
  + `Your job: assemble the VERIFIABLE ground truth the author will write from — and ONLY from. The author writes nothing from memory, so anything you omit cannot be written. Web-search and verify every specific against authoritative sources (Wikipedia + the topic's standard scholarship; for people, the Dictionary of Canadian Biography is excellent for this war). The single biggest hallucination-killer is this pack.\n\n`
  + `SUBJECT BRIEF:\n${T.brief}\n\n`
  + `MUST establish (verified, each tied to a source):\n${(T.mustInclude || []).map(m => `- ${m}`).join('\n')}\n\n`
  + `For EVERY item give: the fact, the specific (date/number/name/place/quote), and the source. Flag anything contested or uncertain as [CONTESTED] with the scholarly range. Include verbatim primary-source QUOTES where they exist (with speaker + source) — these make the section, but only if real. Prefer a missing detail to a guessed one.\n\n`
  + `Pay special attention to: the Native nations involved (correct nation names, leaders, their OWN aims and leverage — they are first-class actors, not props), the human cost / dispossession, and any numbers (acres, dates, forces, prices).\n\n`
  + `Write the pack to \`${AUD}-factpack.md\` (organized by topic, source-tagged). Do NOT write prose narrative, do NOT commit anything to git. Reply with a 3-4 sentence summary of what you assembled and any [CONTESTED] items or gaps the author should know about.`,
  { label: `factpack:${slug}`, phase: 'Factpack', agentType: 'general-purpose' },
)
log(`${slug}: fact pack assembled`)

phase('Author')
const draft = await agent(
  `You are the AUTHOR (storytelling-first) of a French and Indian War off-the-battlefield theme section for a mobile history-reading app. Model yourself on popular narrative history: a genuinely good story is priority #1; factual accuracy with ZERO hallucination is the hard floor it may never cross.\n\n`
  + `Section: "${T.name}" (${T.date || ''}). kind = THEME (non-battle). Theme shape: a thematic ARC — pressure builds → a turning point → the consequence. NO stat block, NO box score, NO tactical map. One arc-driven narrative.\n\n`
  + `WRITE ONLY FROM THE FACT PACK at \`${AUD}-factpack.md\`. Read it fully. If a beat you want needs a fact the pack doesn't have, write around it or mark it \`[VERIFY: ...]\` — never invent a date/name/number/quote. There is NO length limit; length is an output of good storytelling, never a target. Lead with stakes and people; make the human cost felt, not listed.\n\n`
  + `SUBJECT BRIEF (the arc to tell):\n${T.brief}\n\n`
  + `${VOICE}\n\n${SIDETAGS}\n\n${FRAMING}\n\n${PILLS}\n\n${CONV}\n\n`
  + `Write the draft to \`${AUD}-draft.md\` (following the conventions exactly). ALSO write a Fact Ledger to \`${AUD}-ledger.md\`: every concrete claim in your draft → which fact-pack item supports it, with any \`[VERIFY]\` flags listed. Do NOT commit anything to git. Reply with the section title, the heading list, and any [VERIFY] flags you raised.`,
  { label: `author:${slug}`, phase: 'Author', agentType: 'general-purpose', model: 'opus' },
)
log(`${slug}: draft authored`)

phase('Critics')
const VERDICT = {
  type: 'object',
  properties: {
    gate: { type: 'string' },
    verdict: { type: 'string', enum: ['PASS', 'FAIL'] },
    mustFix: { type: 'array', items: { type: 'string' } },
    shouldFix: { type: 'array', items: { type: 'string' } },
    notes: { type: 'string' },
  },
  required: ['gate', 'verdict', 'mustFix'],
}
const readBrief = `Read the draft at \`${AUD}-draft.md\` and the fact pack at \`${AUD}-factpack.md\`. This is a THEME section of the French and Indian War (kind=theme, no battle stat block). Do NOT edit any file and do NOT commit. Write your full report to the path given, AND return the structured verdict.`

const critics = [
  {
    label: 'factcheck', web: true,
    brief: `You are the FACT-CHECKER (web-enabled). Independently verify EVERY date, number, name, rank, place, acreage, price, and quote in the draft against authoritative sources — do NOT trust the draft or the ledger. For each: ✅ CONFIRMED / ❌ WRONG (give the correct fact + source) / ⚠️ UNSUPPORTED. Resolve every [VERIFY] flag the author raised (confirm or cut). A single fabricated specific FAILS the section. Write the report to \`${AUD}-factcheck.md\`. verdict=FAIL if any ❌ remains; list each ❌ (and each must-resolve ⚠️) as a mustFix string.`,
  },
  {
    label: 'story',
    brief: `You are the STORYTELLING critic. Judge this as a STORY: hook & stakes, human dimension, pacing, voice, and whether it avoids dry play-by-play / list-of-facts tedium. Grade each heading STRONG / GOOD / NEEDS WORK / REWRITE and give quoted, actionable rewrite notes. Also enforce the locked house voice: NO em-dashes, no meta-narrator, little bold, full-rank-first, cross-refs as standalone pill lines. Write the report to \`${AUD}-story.md\`. verdict=FAIL if any heading is NEEDS WORK/REWRITE or any house-voice rule is violated; list each as a mustFix.`,
  },
  {
    label: 'comprehensive', web: true,
    brief: `You are the COMPREHENSIVENESS critic (web-enabled). Independently build the must-cover checklist for "${T.name}" in the French and Indian War, then mark each item COVERED / THIN / MISSING in the draft. Flag genuinely ESSENTIAL omissions and underweighting (storytelling-first means SELECTIVE is fine — never demand an encyclopedia), and any blind spots in the FACT PACK itself. Pay special attention to whether the Native nations' own perspective and aims are present and correctly weighted. Write the report to \`${AUD}-comprehensive.md\`. verdict=FAIL only if an ESSENTIAL beat is MISSING; list each MUST-ADD as a mustFix (note if it needs new facts → fact pack first).`,
  },
  {
    label: 'clarity',
    brief: `You are the NEWCOMER/CLARITY critic. Read the draft COLD as a sharp 15-year-old with zero prior knowledge. Flag every undefined GENUINE-jargon term, every named actor introduced without a side-tag (except the 7 marquee names) or scene-set, every unexplained leap, and any wall-of-text/overwhelming passage. Mark CLEAR / NEEDS-GLOSS / LOST. Do NOT demand glosses on common English (over-glossing is itself a defect). Write the report to \`${AUD}-clarity.md\`. verdict=FAIL if any genuine comprehension-breaker (LOST) remains; list each MUST-FIX as a mustFix.`,
  },
  {
    label: 'framing', web: true,
    brief: `You are the FRAMING critic (web-enabled) for the French and Indian War. ${FRAMING}\n\nFIRST CHECK, ALWAYS: (a) are Native nations first-class actors with their own aims, not props? (b) is the human cost / dispossession named in the section's OWN prose? If either fails, that is an automatic MUST-FIX. Then hunt any other distortion: false balance, romanticization of empire, erasure of Native agency, presentism, sanitized or gratuitous violence. Mark FAIR / TILTED / DISTORTED per finding. Write the report to \`${AUD}-framing.md\`. verdict=FAIL if the first-check fails or any DISTORTED finding stands; list each as a mustFix.`,
  },
]

const verdicts = await parallel(critics.map(c => () => agent(
  `${c.brief}\n\n${readBrief}`,
  { label: `${c.label}:${slug}`, phase: 'Critics', agentType: 'general-purpose', schema: VERDICT },
)))

const result = { slug, name: T.name, verdicts: verdicts.filter(Boolean) }
const fails = result.verdicts.filter(v => v.verdict === 'FAIL')
log(`${slug}: critics done — ${result.verdicts.length} reports, ${fails.length} FAIL (${fails.map(v => v.gate).join(', ') || 'all pass'})`)
return result
