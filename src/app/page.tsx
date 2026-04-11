import { getAllNarrativeIds, getNarrative } from '@/lib/data'
import { CivilizationCard } from '@/components/civilization-card'
import { DarkModeToggle } from '@/components/dark-mode-toggle'

export default function Home() {
  const ids = getAllNarrativeIds()
  const narratives = ids.map(id => getNarrative(id))

  return (
    <div className="max-w-prose mx-auto px-5 py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold">Stuff Happened</h1>
          <p className="text-foreground/60 mt-2">
            Long-form historical narratives, one civilization at a time.
          </p>
        </div>
        <DarkModeToggle />
      </div>

      <div className="flex flex-col gap-4">
        {narratives.map(n => (
          <CivilizationCard
            key={n.id}
            id={n.id}
            label={n.label}
            accentColor={n.accentColor}
            chapterCount={n.chapters.length}
          />
        ))}
      </div>
    </div>
  )
}
