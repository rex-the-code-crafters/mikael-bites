'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {
  variant?: 'full' | 'compact'
}

export default function NewsletterSection({ variant = 'full' }: Props) {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = e.currentTarget.querySelector<HTMLInputElement>('input[type="email"]')
    if (!input?.value || !input.value.includes('@')) return
    setStatus('success')
    input.value = ''
    setTimeout(() => setStatus('idle'), 3000)
  }

  if (variant === 'compact') {
    return (
      <section style={{ background: '#111', padding: 'clamp(40px,7vh,64px) var(--page-px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}
        >
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(26px,4vw,36px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.8px', color: '#FAFAF8', marginBottom: 14 }}>
            The AI week, distilled into <em style={{ color: '#FF4D4D' }}>5 minutes.</em>
          </h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: '#777', lineHeight: 1.7, marginBottom: 28 }}>Every Sunday. No hype.</p>
          <form
            onSubmit={handleSubmit}
            className="newsletter-form"
            style={{ display: 'flex', maxWidth: 400, margin: '0 auto 14px', borderRadius: 8, overflow: 'hidden', border: '1px solid #2A2A2A', background: '#1A1A1A' }}
          >
            <input
              type="email"
              placeholder={status === 'success' ? "You're in!" : 'your@email.com'}
              style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '13px 16px', fontSize: 14, color: '#F5F5F5', fontFamily: 'inherit', minWidth: 0 }}
            />
            <button
              type="submit"
              style={{ background: status === 'success' ? '#22C55E' : '#FF4D4D', color: '#fff', border: 'none', padding: '13px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', transition: 'background 0.2s' }}
            >
              {status === 'success' ? 'Subscribed ✓' : 'Subscribe →'}
            </button>
          </form>
          <p style={{ fontSize: 12, color: '#444' }}>Free · 4,200+ readers</p>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="newsletter" style={{ background: '#111', padding: 'clamp(48px,8vh,80px) var(--page-px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-8%' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF4D4D18', border: '1px solid #FF4D4D40', padding: '6px 14px', borderRadius: 20, marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, background: '#FF4D4D', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#FF4D4D' }}>Weekly Newsletter</span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.8px', color: '#FAFAF8', marginBottom: 16 }}>
          The AI week, distilled into{' '}
          <em style={{ color: '#FF4D4D', fontStyle: 'italic' }}>5 minutes.</em>
        </h2>

        <p style={{ fontSize: 'clamp(14px,1.1vw,16px)', fontWeight: 300, color: '#888', lineHeight: 1.7, marginBottom: 36 }}>
          Every Sunday — top AI news, honest tool reviews, and one thing you can try this week.
        </p>

        <form
          onSubmit={handleSubmit}
          className="newsletter-form"
          style={{ display: 'flex', maxWidth: 440, margin: '0 auto 16px', borderRadius: 8, overflow: 'hidden', border: '1px solid #2A2A2A', background: '#1A1A1A' }}
        >
          <input
            type="email"
            placeholder={status === 'success' ? "You're in!" : 'your@email.com'}
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '14px 18px', fontSize: 14, color: '#F5F5F5', fontFamily: 'inherit', minWidth: 0 }}
          />
          <button
            type="submit"
            style={{ background: status === 'success' ? '#22C55E' : '#FF4D4D', color: '#fff', border: 'none', padding: '14px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', transition: 'background 0.2s' }}
          >
            {status === 'success' ? 'Subscribed ✓' : 'Subscribe →'}
          </button>
        </form>

        <p style={{ fontSize: 12, color: '#444' }}>
          Free forever · No spam · 4,200+ readers ·{' '}
          <Link href="/newsletter" style={{ color: '#666', textDecoration: 'underline', textUnderlineOffset: 3 }} className="nl-archive-link">
            Browse past issues
          </Link>
        </p>
      </motion.div>
    </section>
  )
}
