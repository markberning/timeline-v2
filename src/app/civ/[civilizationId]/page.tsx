import type { Metadata } from 'next'
import { getAllNarrativeIds, getNarrative } from '@/lib/data'
import { NarrativeReader } from '@/components/narrative-reader'
import { CivBreadcrumb } from '@/components/civ-breadcrumb'
import { ThreadBar } from '@/components/thread-bar'
import { MinCivHeader } from '@/components/min-civ-header'
import { getChainsForTimeline, getChainPosition } from '../../../../reference-data/tl-chains'
import { NAVIGATOR_TLS } from '@/lib/navigator-tls'
import { formatYearRange } from '@/lib/chronology-data'
import { getCivEmblemPath } from '@/lib/civ-icons'

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
  const currentTl = NAVIGATOR_TLS.find(t => t.id === civilizationId)
  const dateRange = currentTl ? formatYearRange(currentTl.startYear, currentTl.endYear) : null
  const iconPath = getCivEmblemPath(civilizationId)

  return (
    <div className="max-w-prose mx-auto px-5">
      <div data-top-nav className="sticky top-0 z-20 -mx-5">
        <ThreadBar />
        <CivBreadcrumb
          civId={civilizationId}
          civLabel={narrative.label}
          region={currentTl?.region ?? 'near-east'}
          chapters={narrative.chapters.map(c => ({ number: c.number, title: c.title }))}
        />
      </div>

      <div className="pt-4 pb-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Accent vertical bar */}
            <div className="shrink-0 w-[3.5px] self-stretch rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <h1 className="text-[22px] font-bold font-[family-name:var(--font-lora)] leading-tight">
              {narrative.label}
            </h1>
            {iconPath && (
              <img src={iconPath} alt="" className="h-11 w-auto opacity-80 dark:opacity-30 dark:brightness-[1.3]" draggable={false} />
            )}
          </div>
          <span className="shrink-0 text-[13px] font-semibold px-2.5 py-0.5 rounded-full text-white" style={{ backgroundColor: 'var(--accent)' }}>
            {narrative.chapters.length} CH
          </span>
        </div>
        {currentTl?.subtitle && (
          <p className="text-[14px] text-foreground/55 mt-1 italic font-[family-name:var(--font-lora)] pl-[16.5px]">{currentTl.subtitle}</p>
        )}
        {/* Second sticky tier: a compact civ header that pins just BELOW
            the unchanging nav line once the hero scrolls past it. Constant
            height + real position:sticky, so the chapter header stacks
            below it at a fixed offset and never jolts. Chain prev/next
            lives here now (removed from the hero to avoid duplication). */}
        <MinCivHeader
          label={narrative.label}
          dates={dateRange}
          prev={prevTl ? { id: prevId!, label: prevTl.label, hasContent: !!prevTl.hasContent } : null}
          next={nextTl ? { id: nextId!, label: nextTl.label, hasContent: !!nextTl.hasContent } : null}
        />

        <NarrativeReader civilizationId={civilizationId} chapters={narrative.chapters} events={narrative.events} glossary={narrative.glossary ?? []} crossLinks={narrative.crossLinks ?? []} />
      </div>
    </div>
  )
}
