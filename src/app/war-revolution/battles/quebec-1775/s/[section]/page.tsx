import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-fourteenth-colony', 'two-columns-in-the-snow', 'the-colony-that-never-was']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
