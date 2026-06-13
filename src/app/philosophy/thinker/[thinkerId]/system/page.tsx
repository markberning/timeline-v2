// Thinker deep read — "walk the whole system". Renders the shared PhilosophyReader
// from the reads registry. Only thinkers with a shipped read are generated; the hub
// shows "Soon" for the rest, so this route is never reached for an unbuilt thinker.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PhilosophyReader } from '@/components/philosophy-reader'
import { thinkerById } from '@/lib/philosophy-data'
import { THINKER_READS, READ_IDS } from '../../_reads'

export function generateStaticParams() {
  return READ_IDS.map(thinkerId => ({ thinkerId }))
}

export async function generateMetadata({ params }: { params: Promise<{ thinkerId: string }> }): Promise<Metadata> {
  const { thinkerId } = await params
  const t = thinkerById(thinkerId)
  return { title: `${t?.name ?? 'Thinker'} — the whole system · Philosophy · Stuff Happened`, description: t?.epithet }
}

export default async function ThinkerSystemPage({ params }: { params: Promise<{ thinkerId: string }> }) {
  const { thinkerId } = await params
  const entry = THINKER_READS[thinkerId]
  if (!entry) notFound()
  return <PhilosophyReader narr={entry.narr} eyebrow={entry.eyebrow} backHref={`/philosophy/thinker/${thinkerId}`} />
}
