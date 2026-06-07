import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-road-to-the-forks', 'the-crossing', 'the-slaughter-on-the-road', 'buried-in-the-road']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
