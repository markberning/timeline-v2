import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-key', 'the-failed-approaches', 'the-gamble', 'the-siege', 'emancipation-made-real', 'the-surrender']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
