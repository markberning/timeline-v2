import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllNarrativeIds, getNarrative } from '@/lib/data'
import { NarrativeReader } from '@/components/narrative-reader'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { TextSizeControl } from '@/components/text-size-control'
import { getChainsForTimeline, getChainPosition } from '../../../reference-data/tl-chains'
import { NAVIGATOR_TLS } from '@/lib/navigator-tls'

interface PageProps {
  params: Promise<{ civilizationId: string }>
}

export async function generateStaticParams() {
  return getAllNarrativeIds().map(id => ({ civilizationId: id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { civilizationId } = await params
  const narrative = getNarrative(civilizationId)
  return {
    title: `${narrative.label} | Stuff Happened`,
    description: `${narrative.chapters.length} chapters on ${narrative.label}`,
  }
}

export default async function CivilizationPage({ params }: PageProps) {
  const { civilizationId } = await params
  const narrative = getNarrative(civilizationId)

  const chains = getChainsForTimeline(civilizationId)
  const chain = chains[0] ?? null
  const pos = chain ? getChainPosition(chain, civilizationId) : null

  const prevId = pos && pos.index > 0 ? chain!.entries[pos.index - 1].timelineId : null
  const nextId = pos && pos.index < pos.total - 1 ? chain!.entries[pos.index + 1].timelineId : null
  const prevTl = prevId ? NAVIGATOR_TLS.find(t => t.id === prevId) : null
  const nextTl = nextId ? NAVIGATOR_TLS.find(t => t.id === nextId) : null

  return (
    <div className="max-w-prose mx-auto px-5">
      <div data-top-nav className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm -mx-5 px-5 pt-3 pb-2 border-b-2" style={{ borderBottomColor: 'var(--accent)' }}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 text-sm hover:opacity-80 transition-opacity" style={{ color: 'var(--accent-text)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Stuff Happened
          </Link>
          <div className="flex items-center gap-1">
            <TextSizeControl />
            <DarkModeToggle />
          </div>
        </div>
      </div>

      <div className="pt-4 pb-8">
        {chain && pos && pos.index !== -1 && (
          <div className="flex items-center justify-between text-xs text-foreground/50 mb-2">
            <div>
              {prevTl ? (
                prevTl.hasContent ? (
                  <a href={`/${prevId}`} className="hover:opacity-80 transition-opacity" style={{ color: 'var(--accent-text)' }}>
                    ← {prevTl.label}
                  </a>
                ) : (
                  <span className="opacity-40">← {prevTl.label}</span>
                )
              ) : (
                <span className="italic opacity-40">{chain.shortLabel} chain</span>
              )}
            </div>
            <div>
              {nextTl ? (
                nextTl.hasContent ? (
                  <a href={`/${nextId}`} className="hover:opacity-80 transition-opacity" style={{ color: 'var(--accent-text)' }}>
                    {nextTl.label} →
                  </a>
                ) : (
                  <span className="opacity-40">{nextTl.label} →</span>
                )
              ) : (
                <span className="italic opacity-40">{chain.shortLabel} chain</span>
              )}
            </div>
          </div>
        )}
        <h1 className="text-2xl font-bold" style={{ color: 'var(--accent-text)' }}>{narrative.label}</h1>
        <p className="text-sm text-foreground/60 mt-1 mb-6">
          {narrative.chapters.length} chapters
        </p>

        <NarrativeReader civilizationId={civilizationId} chapters={narrative.chapters} events={narrative.events} glossary={narrative.glossary ?? []} crossLinks={narrative.crossLinks ?? []} />
      </div>
    </div>
  )
}
