import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-gibraltar-of-the-north', 'the-guns-that-never-fired', 'shoot-a-general']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
