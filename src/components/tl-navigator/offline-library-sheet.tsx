'use client'

import { useEffect } from 'react'
import type { NavigatorTl } from '@/lib/navigator-tls'
import type { NavigatorTheme } from '@/lib/navigator-themes'
import { useAllOfflineStatus, downloadTl, deleteTl } from '@/lib/offline'

interface Props {
  tls: NavigatorTl[]
  theme: NavigatorTheme
  onClose: () => void
}

export function OfflineLibrarySheet({ tls, theme, onClose }: Props) {
  const status = useAllOfflineStatus()
  const downloadableTls = tls.filter(t => t.hasContent)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      onPointerDown={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.55)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        touchAction: 'none',
      }}
    >
      <div
        onPointerDown={(e) => e.stopPropagation()}
        style={{
          background: theme.headerBg,
          color: theme.textPrimary,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderTop: `1px solid ${theme.headerBorder}`,
          maxHeight: '80svh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 -10px 30px rgba(0,0,0,0.4)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 18px 12px',
            borderBottom: `1px solid ${theme.headerBorder}`,
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '0.02em' }}>Offline Library</div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'transparent',
              border: 'none',
              color: theme.textPrimary,
              fontSize: 22,
              cursor: 'pointer',
              padding: 4,
              lineHeight: 1,
              opacity: 0.7,
            }}
          >
            ×
          </button>
        </div>
        <div style={{ padding: '10px 18px 6px', fontSize: 12, opacity: 0.6, lineHeight: 1.5 }}>
          Download a timeline to read it without a connection. Each download is ~15–20 MB.
          Tap a downloaded timeline to remove its offline copy.
        </div>
        <div
          style={{
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            padding: '4px 0 24px',
            touchAction: 'pan-y',
          }}
        >
          {downloadableTls.map(tl => {
            const s = status[tl.id]
            const state = s?.status ?? 'none'
            const done = s?.done ?? 0
            const total = s?.total ?? 0
            const pct = total > 0 ? Math.round((done / total) * 100) : 0
            const onTap = () => {
              if (state === 'downloaded') deleteTl(tl.id)
              else if (state !== 'downloading') downloadTl(tl.id)
            }
            return (
              <button
                key={tl.id}
                onClick={onTap}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  width: '100%',
                  padding: '14px 18px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `1px solid ${theme.headerBorder}`,
                  color: theme.textPrimary,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {tl.label}
                  </div>
                  {tl.subtitle && (
                    <div
                      style={{
                        fontSize: 12,
                        opacity: 0.55,
                        fontStyle: 'italic',
                        marginTop: 2,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {tl.subtitle}
                    </div>
                  )}
                  {state === 'downloading' && total > 0 && (
                    <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>
                      Downloading… {pct}% ({done} / {total})
                    </div>
                  )}
                  {state === 'downloaded' && (
                    <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>Saved for offline · tap to remove</div>
                  )}
                  {state === 'error' && (
                    <div style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>Download failed · tap to retry</div>
                  )}
                </div>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    flexShrink: 0,
                    color:
                      state === 'downloaded' ? 'var(--accent, #fbbf24)'
                      : state === 'error' ? '#f87171'
                      : theme.textPrimary,
                    opacity:
                      state === 'none' ? 0.55
                      : state === 'downloading' ? 0.85
                      : 1,
                    transition: 'opacity 150ms, color 150ms',
                  }}
                >
                  {state === 'downloaded' ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      <path d="m9 12 2 2 4-4" stroke="var(--background, #22201e)" fill="none" strokeWidth="2" />
                    </svg>
                  ) : state === 'error' ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      <path d="m10 11 4 4 m0-4-4 4" />
                    </svg>
                  ) : state === 'downloading' ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      <circle cx="12" cy="14" r="2" fill="currentColor" />
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      <path d="M12 10v6 m-2.5-2.5L12 16l2.5-2.5" />
                    </svg>
                  )}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
