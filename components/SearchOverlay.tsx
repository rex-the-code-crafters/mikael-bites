'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, FileText, Mail, User, X } from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function SearchOverlay({ open, onClose }: Props) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClose()
      router.push('/archive')
    }
  }

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 500, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 120 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, width: '100%', maxWidth: 560, margin: '0 20px', overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.2)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 20px', borderBottom: '1px solid var(--border)' }}>
          <Search size={18} color="var(--t3)" />
          <input
            ref={inputRef}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Search articles, tools, news…"
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: 16, color: 'var(--t1)', fontFamily: 'inherit' }}
          />
          <button
            onClick={onClose}
            style={{ background: 'var(--bg2)', border: 'none', cursor: 'pointer', fontSize: 12, color: 'var(--t3)', fontFamily: 'inherit', padding: '4px 8px', borderRadius: 4 }}
          >
            ESC
          </button>
        </div>
        <div style={{ padding: '12px 20px 20px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--t3)', marginBottom: 12 }}>Quick links</div>
          {[
            { href: '/archive', icon: <FileText size={14} color="var(--t3)" />, label: 'Browse all posts' },
            { href: '/newsletter', icon: <Mail size={14} color="var(--t3)" />, label: 'Newsletter archive' },
            { href: '/about', icon: <User size={14} color="var(--t3)" />, label: 'About Mikael' },
          ].map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="search-quick-link"
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 8px', borderRadius: 8, transition: 'background 0.15s' }}
            >
              {icon}
              <span style={{ fontSize: 14, color: 'var(--t1)' }}>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
