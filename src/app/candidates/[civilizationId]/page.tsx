import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { CandidateReview } from '@/components/candidate-review'

interface PageProps {
  params: Promise<{ civilizationId: string }>
}

interface Candidate {
  eventId: string
  label: string
  filename: string
  caption: string
}

export async function generateStaticParams() {
  return [{ civilizationId: 'mesopotamia' }, { civilizationId: 'indus-valley' }]
}

export const dynamic = 'force-dynamic'

export default async function CandidatesPage({ params }: PageProps) {
  const { civilizationId } = await params
  const path = join(process.cwd(), 'content', '.image-candidates.json')
  if (!existsSync(path)) {
    return <div className="p-6">No candidates file found.</div>
  }
  const all = JSON.parse(readFileSync(path, 'utf-8')) as Record<string, Candidate[]>
  const candidates = all[civilizationId] ?? []

  // Fetch thumbnail URLs for each filename via Commons API at request time
  const filenames = candidates.map(c => c.filename)
  const urlMap = await fetchThumbnails(filenames)

  const withThumbs = candidates.map(c => ({
    ...c,
    thumbnailUrl: urlMap[c.filename] ?? null,
  }))

  return (
    <div className="mx-auto px-4 py-6 max-w-2xl">
      <h1 className="text-xl font-bold mb-1">{civilizationId} — Image Candidates</h1>
      <p className="text-sm text-foreground/60 mb-6">
        {candidates.length} candidates · approve or reject each one
      </p>
      <CandidateReview civilizationId={civilizationId} candidates={withThumbs} />
    </div>
  )
}

async function fetchThumbnails(filenames: string[]): Promise<Record<string, string>> {
  if (filenames.length === 0) return {}
  const result: Record<string, string> = {}
  for (let i = 0; i < filenames.length; i += 20) {
    const batch = filenames.slice(i, i + 20)
    const titles = batch.map(f => `File:${f}`).join('|')
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=url&iiurlwidth=500&format=json`
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'StuffHappened/2.0 (mebernin@gmail.com)' } })
      const data = await res.json() as {
        query: {
          pages: Record<string, { title: string; imageinfo?: Array<{ thumburl: string }> }>
          normalized?: Array<{ from: string; to: string }>
        }
      }
      const normalizedMap = new Map<string, string>()
      for (const f of batch) {
        normalizedMap.set(`File:${f}`.replace(/_/g, ' '), f)
        normalizedMap.set(`File:${f}`, f)
      }
      if (data.query?.normalized) {
        for (const n of data.query.normalized) {
          const origFile = normalizedMap.get(n.from)
          if (origFile) normalizedMap.set(n.to, origFile)
        }
      }
      for (const page of Object.values(data.query?.pages ?? {})) {
        const filename = normalizedMap.get(page.title)
        if (!filename) continue
        const thumb = page.imageinfo?.[0]?.thumburl
        if (thumb) result[filename] = thumb
      }
    } catch (e) {
      console.error('thumb fetch failed', e)
    }
  }
  return result
}
