import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-crossroads-hill', 'the-jackson-road', 'the-hill-changes-hands', 'the-lost-division']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
