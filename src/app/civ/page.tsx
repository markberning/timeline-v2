// Civ home — the redesigned timeline/chains experience. Moved here from the app
// root when the four-thread launcher took `/`. The legacy ModeShell home (swim-
// lane ribbon + civ list) is kept in reserve at /classic.
import { CivHome } from '@/components/civ-home/civ-home'

export default function CivLib() {
  return <CivHome />
}
