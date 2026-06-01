import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-breadbasket', 'the-spy', 'the-canyon', 'the-flank', 'whirling-through-winchester']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
