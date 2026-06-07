import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-lynchpin-on-the-lake', 'bradstreets-raid', 'the-blow-to-the-west']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
