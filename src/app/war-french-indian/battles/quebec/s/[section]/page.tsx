import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-summer-before-the-walls', 'the-path-up-the-cliff', 'the-plains-of-abraham', 'the-fall-of-new-france']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
