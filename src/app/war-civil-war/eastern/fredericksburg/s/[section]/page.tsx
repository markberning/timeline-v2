import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-bridges-that-came-late', 'crossing-under-fire', 'the-gap-and-the-wall', 'the-frozen-field', 'tactical-win-strategic-nothing']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
