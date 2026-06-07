import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-prize-on-the-lake', 'the-siege', 'the-killings-and-the-cost']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
