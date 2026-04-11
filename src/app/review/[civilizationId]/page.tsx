import { getAllNarrativeIds, getNarrative } from '@/lib/data'
import { ImageReview } from '@/components/image-review'

interface PageProps {
  params: Promise<{ civilizationId: string }>
}

export async function generateStaticParams() {
  return getAllNarrativeIds().map(id => ({ civilizationId: id }))
}

export default async function ReviewPage({ params }: PageProps) {
  const { civilizationId } = await params
  const narrative = getNarrative(civilizationId)

  const eventsWithImages = narrative.events
    .filter(e => e.thumbnailUrl)
    .map(e => ({
      id: e.id,
      label: e.label,
      category: e.category,
      thumbnailUrl: e.thumbnailUrl!,
    }))

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-1">{narrative.label} — Image Review</h1>
      <p className="text-sm text-foreground/60 mb-6">
        {eventsWithImages.length} images. Tap to reject. Rejected images are saved and excluded on next build.
      </p>
      <ImageReview civilizationId={civilizationId} events={eventsWithImages} />
    </div>
  )
}
