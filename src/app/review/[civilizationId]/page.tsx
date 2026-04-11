import { getAllNarrativeIds, getNarrative } from '@/lib/data'
import { ImageReview } from '@/components/image-review'

interface PageProps {
  params: Promise<{ civilizationId: string }>
}

export async function generateStaticParams() {
  return getAllNarrativeIds().map(id => ({ civilizationId: id }))
}

function formatYear(year: number): string {
  return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`
}

export default async function ReviewPage({ params }: PageProps) {
  const { civilizationId } = await params
  const narrative = getNarrative(civilizationId)

  const eventsWithImages = narrative.events
    .filter(e => e.thumbnailUrl)
    .map(e => ({
      id: e.id,
      label: e.label,
      year: e.year,
      description: e.description,
      category: e.category,
      thumbnailUrl: e.thumbnailUrl!,
      imageCaption: e.imageCaption ?? null,
    }))

  const eventsWithoutImages = narrative.events
    .filter(e => !e.thumbnailUrl)

  return (
    <div className="mx-auto px-4 py-6 overflow-x-hidden" style={{ maxWidth: '100%' }}>
      <h1 className="text-xl font-bold mb-1">{narrative.label} — Image Review</h1>
      <p className="text-sm text-foreground/60 mb-6">
        {eventsWithImages.length} with images · {eventsWithoutImages.length} without
      </p>
      <ImageReview civilizationId={civilizationId} events={eventsWithImages} />

      {eventsWithoutImages.length > 0 && (
        <div className="mt-10 pt-6 border-t border-foreground/10">
          <h2 className="text-lg font-bold mb-1">Events Without Images</h2>
          <p className="text-sm text-foreground/50 mb-4">{eventsWithoutImages.length} events have no image</p>
          <div className="space-y-2">
            {eventsWithoutImages.map(e => (
              <div key={e.id} className="py-2 border-b border-foreground/5 last:border-b-0">
                <p className="text-sm font-medium">{e.label}</p>
                <p className="text-xs text-foreground/50">{formatYear(e.year)} · {e.category}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
