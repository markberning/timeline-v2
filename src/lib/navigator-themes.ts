import type { NavigatorRegion } from './navigator-tls'

export type BarStyle = 'line'

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
  rowHeight?: number
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

export const STONE_THEME: NavigatorTheme = {
  id: 'stone',
  name: 'Stone',
  rowHeight: 56,
  appBg: '#22201e',
  headerBg: '#2a2724',
  headerBorder: 'rgba(0,0,0,0.45)',
  textPrimary: '#d6cdbe',
  textSecondary: '#8c8174',
  axisBg: '#2a2724',
  axisText: '#9c907f',
  axisGridLine: 'rgba(255,255,255,0.05)',
  axisBottomBorder: 'rgba(0,0,0,0.5)',
  rowStripe: 'transparent',
  rowBorder: 'transparent',
  regionColors: {
    'near-east': '#c2602e',
    'africa': '#b07e26',
    'asia': '#8270a8',
    'europe': '#4a76a3',
    'americas': '#549162',
  },
  bar: {
    style: 'line',
    radius: 0,
    opacity: 1,
    accentWidth: 3,
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
}
