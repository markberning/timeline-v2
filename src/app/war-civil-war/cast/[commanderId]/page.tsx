import { CommanderPage } from '@/components/mode/commander-page'
import { commanderIds } from '@/lib/civil-war-commanders'

export function generateStaticParams() {
  return commanderIds.map(commanderId => ({ commanderId }))
}

export default async function Page({ params }: { params: Promise<{ commanderId: string }> }) {
  const { commanderId } = await params
  return <CommanderPage id={commanderId} />
}
