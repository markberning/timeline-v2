// Reserve: the previous Civ home (swim-lane ribbon + civ list). Kept reachable
// at /classic in case we want to fall back from the redesigned home at /.
import { ModeShell } from '@/components/mode/mode-shell'

export default function Classic() {
  return <ModeShell initialMode="civ" />
}
