// The war registry — the multi-war entry point. Shared components resolve their war
// from the route (warForRoute) instead of importing the Civil War singletons.

import type { WarConfig } from './types'
import { CIVIL_WAR } from './civil-war'
import { FRENCH_INDIAN } from './french-indian'
import { REVOLUTION } from './revolution'

export type { WarConfig } from './types'

export const WARS: WarConfig[] = [CIVIL_WAR, FRENCH_INDIAN, REVOLUTION]

export const warById = (id: string): WarConfig | undefined => WARS.find(w => w.id === id)

// Resolve the active war from a pathname by its routeBase prefix (longest match
// wins, so a future '/war-civil-war-x' could never shadow '/war-civil-war').
export function warForRoute(pathname: string): WarConfig | undefined {
  // Strip any query string / hash so hrefs like '/war-revolution?theatre=x' still
  // resolve (the query form has no trailing slash, so the raw prefix match missed it
  // and the war silently fell back to the Civil War).
  const path = pathname.split('?')[0].split('#')[0]
  return WARS
    .filter(w => path === w.routeBase || path.startsWith(w.routeBase + '/'))
    .sort((a, b) => b.routeBase.length - a.routeBase.length)[0]
}
