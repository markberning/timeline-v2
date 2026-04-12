import type { NavigatorRegion } from './navigator-tls'

export type BarStyle = 'filled' | 'stripe-left' | 'carved'

export interface NavigatorTheme {
  id: string
  name: string
  appBg: string
  headerBg: string
  headerBorder: string
  textPrimary: string
  textSecondary: string
  axisBg: string
  axisText: string
  axisGridLine: string
  axisBottomBorder: string
  rowStripe: string
  rowBorder: string
  regionColors: Record<NavigatorRegion, string>
  rowLayout?: 'overlay' | 'split'
  bar: {
    style: BarStyle
    fill?: string
    border?: string
    shadow?: string
    radius: number
    opacity: number
    accentWidth?: number
  }
  label: {
    color: string
    shadow: string
  }
  zoomBtn: {
    border: string
    color: string
    bg: string
  }
  toggle: {
    offText: string
    offBorder: string
    onText: string
    onBgAlpha: string
  }
}

export const NAVIGATOR_THEMES: NavigatorTheme[] = [
  {
    id: 'default',
    name: 'Default',
    appBg: '#0a0a0c',
    headerBg: '#0d0d10',
    headerBorder: 'rgba(255,255,255,0.06)',
    textPrimary: '#e5e5e5',
    textSecondary: '#888',
    axisBg: '#0d0d10',
    axisText: '#888',
    axisGridLine: 'rgba(255,255,255,0.08)',
    axisBottomBorder: 'rgba(255,255,255,0.08)',
    rowStripe: 'rgba(255,255,255,0.02)',
    rowBorder: 'rgba(255,255,255,0.04)',
    regionColors: {
      'near-east': '#c2410c',
      'africa': '#a16207',
      'asia': '#7c3aed',
      'europe': '#1d4ed8',
      'americas': '#047857',
    },
    bar: {
      style: 'filled',
      border: '1px solid rgba(255,255,255,0.18)',
      radius: 3,
      opacity: 0.88,
    },
    label: {
      color: '#f1f1f4',
      shadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)',
    },
    zoomBtn: {
      border: '1px solid rgba(255,255,255,0.18)',
      color: '#e5e5e5',
      bg: 'transparent',
    },
    toggle: {
      offText: '#888',
      offBorder: 'rgba(255,255,255,0.2)',
      onText: '#fff',
      onBgAlpha: '33',
    },
  },
  {
    id: 'parchment',
    name: 'Parchment',
    appBg: '#efe5c8',
    headerBg: '#e4d6ad',
    headerBorder: 'rgba(60,40,20,0.22)',
    textPrimary: '#3a2c1a',
    textSecondary: '#7a5e3a',
    axisBg: '#e4d6ad',
    axisText: '#6b5236',
    axisGridLine: 'rgba(60,40,20,0.18)',
    axisBottomBorder: 'rgba(60,40,20,0.35)',
    rowStripe: 'rgba(80,50,20,0.05)',
    rowBorder: 'rgba(60,40,20,0.12)',
    regionColors: {
      'near-east': '#a64a26',
      'africa': '#8f6418',
      'asia': '#5d4e85',
      'europe': '#345779',
      'americas': '#4d6e3c',
    },
    bar: {
      style: 'filled',
      border: '1px solid rgba(40,25,10,0.55)',
      radius: 2,
      opacity: 0.95,
    },
    label: {
      color: '#f7eed7',
      shadow: '0 1px 2px rgba(20,10,0,0.85)',
    },
    zoomBtn: {
      border: '1px solid rgba(60,40,20,0.45)',
      color: '#3a2c1a',
      bg: 'rgba(255,250,235,0.45)',
    },
    toggle: {
      offText: '#7a5e3a',
      offBorder: 'rgba(60,40,20,0.35)',
      onText: '#fff8e6',
      onBgAlpha: 'd0',
    },
  },
  {
    id: 'museum',
    name: 'Museum',
    appBg: '#1a1410',
    headerBg: '#221a14',
    headerBorder: 'rgba(212,180,120,0.14)',
    textPrimary: '#d4c5a8',
    textSecondary: '#8a7a5c',
    axisBg: '#221a14',
    axisText: '#9a8866',
    axisGridLine: 'rgba(212,180,120,0.1)',
    axisBottomBorder: 'rgba(212,180,120,0.18)',
    rowStripe: 'rgba(212,180,120,0.03)',
    rowBorder: 'rgba(212,180,120,0.07)',
    regionColors: {
      'near-east': '#8a3f1f',
      'africa': '#7a5618',
      'asia': '#4a3a6a',
      'europe': '#2a4060',
      'americas': '#2e5a3a',
    },
    bar: {
      style: 'filled',
      border: '1px solid rgba(212,180,120,0.32)',
      radius: 2,
      opacity: 0.94,
    },
    label: {
      color: '#f0e4c8',
      shadow: '0 1px 2px rgba(0,0,0,0.85)',
    },
    zoomBtn: {
      border: '1px solid rgba(212,180,120,0.3)',
      color: '#d4c5a8',
      bg: 'transparent',
    },
    toggle: {
      offText: '#8a7a5c',
      offBorder: 'rgba(212,180,120,0.25)',
      onText: '#f0e4c8',
      onBgAlpha: '40',
    },
  },
  {
    id: 'stone',
    name: 'Stone',
    rowLayout: 'split',
    appBg: '#2a2520',
    headerBg: '#322c26',
    headerBorder: 'rgba(0,0,0,0.45)',
    textPrimary: '#d6cdbe',
    textSecondary: '#8c8174',
    axisBg: '#322c26',
    axisText: '#9c907f',
    axisGridLine: 'rgba(255,255,255,0.05)',
    axisBottomBorder: 'rgba(0,0,0,0.5)',
    rowStripe: 'rgba(0,0,0,0.14)',
    rowBorder: 'rgba(0,0,0,0.3)',
    regionColors: {
      'near-east': '#c2602e',
      'africa': '#b07e26',
      'asia': '#8270a8',
      'europe': '#4a76a3',
      'americas': '#549162',
    },
    bar: {
      style: 'filled',
      border: 'none',
      radius: 0,
      opacity: 1,
    },
    label: {
      color: '#e8dfd0',
      shadow: '0 1px 0 rgba(0,0,0,0.9)',
    },
    zoomBtn: {
      border: '1px solid rgba(0,0,0,0.45)',
      color: '#d6cdbe',
      bg: 'rgba(0,0,0,0.2)',
    },
    toggle: {
      offText: '#8c8174',
      offBorder: 'rgba(255,255,255,0.14)',
      onText: '#fff',
      onBgAlpha: '40',
    },
  },
  {
    id: 'editorial',
    name: 'Editorial',
    appBg: '#1c1a17',
    headerBg: '#232120',
    headerBorder: 'rgba(255,255,255,0.06)',
    textPrimary: '#d8d4cc',
    textSecondary: '#7a766e',
    axisBg: '#232120',
    axisText: '#7a766e',
    axisGridLine: 'rgba(255,255,255,0.05)',
    axisBottomBorder: 'rgba(255,255,255,0.1)',
    rowStripe: 'rgba(255,255,255,0.018)',
    rowBorder: 'rgba(255,255,255,0.04)',
    regionColors: {
      'near-east': '#d97755',
      'africa': '#c89042',
      'asia': '#9b7fc7',
      'europe': '#5b8ac9',
      'americas': '#4fa67c',
    },
    bar: {
      style: 'stripe-left',
      fill: '#3a3631',
      border: '1px solid rgba(255,255,255,0.07)',
      radius: 2,
      opacity: 1,
      accentWidth: 4,
    },
    label: {
      color: '#ece8df',
      shadow: 'none',
    },
    zoomBtn: {
      border: '1px solid rgba(255,255,255,0.18)',
      color: '#d8d4cc',
      bg: 'transparent',
    },
    toggle: {
      offText: '#7a766e',
      offBorder: 'rgba(255,255,255,0.18)',
      onText: '#fff',
      onBgAlpha: '33',
    },
  },
]

export const DEFAULT_THEME_ID = 'default'

export function getTheme(id: string): NavigatorTheme {
  return NAVIGATOR_THEMES.find(t => t.id === id) ?? NAVIGATOR_THEMES[0]
}
