import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['white-paper-in-their-hats', 'a-castle-in-the-rear', 'a-glorious-day']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
