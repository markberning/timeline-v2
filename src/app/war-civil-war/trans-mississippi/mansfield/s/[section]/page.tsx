import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-river-and-the-cotton', 'the-narrow-road', 'the-rout', 'what-it-cost']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
