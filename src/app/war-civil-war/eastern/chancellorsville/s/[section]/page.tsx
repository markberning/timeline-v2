import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-plan', 'lee-divides', 'the-flank-march', 'jackson-falls', 'hooker-quits']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
