import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-thicket', 'the-two-roads', 'longstreet-attacks', 'the-turn', 'what-it-was-for']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
