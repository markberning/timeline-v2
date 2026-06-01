import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-last-railroad', 'hardees-stand', 'the-line-breaks', 'atlanta-is-ours', 'what-it-decided']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
