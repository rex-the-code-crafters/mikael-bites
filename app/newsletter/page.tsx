'use client'

import { useState } from 'react'
import Link from 'next/link'
import { newsletterIssues } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export default function NewsletterPage() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = e.currentTarget.querySelector<HTMLInputElement>('input[type="email"]')
    if (!input?.value || !input.value.includes('@')) return
    setStatus('success')
    input.value = ''
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#111', padding: '80px 40px 72px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }} className="animate-fade-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF4D4D18', border: '1px solid #FF4D4D40', padding: '6px 14px', borderRadius: 20, marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, background: '#FF4D4D', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#FF4D4D' }}>Weekly Newsletter</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px,5vw,54px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1px', color: '#FAFAF8', marginBottom: 20 }}>
            The AI week, distilled<br />into <em style={{ color: '#FF4D4D', fontStyle: 'italic' }}>5 minutes.</em>
          </h1>
          <p style={{ fontSize: 17, fontWeight: 300, color: '#888', lineHeight: 1.7, marginBottom: 40 }}>
            Every Sunday — top AI news, honest tool reviews, and one thing you can actually try this week. 4,200+ readers.
          </p>
          <form id="signup" onSubmit={handleSubmit} style={{ display: 'flex', maxWidth: 420, margin: '0 auto 16px', borderRadius: 8, overflow: 'hidden', border: '1px solid #2A2A2A', background: '#1A1A1A' }}>
            <input type="email" placeholder={status === 'success' ? "You're in!" : 'your@email.com'} style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '14px 18px', fontSize: 14, color: '#F5F5F5', fontFamily: 'inherit', minWidth: 0 }} />
            <button type="submit" style={{ background: status === 'success' ? '#22C55E' : '#FF4D4D', color: '#fff', border: 'none', padding: '14px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', transition: 'background 0.2s' }}>
              {status === 'success' ? 'Subscribed ✓' : 'Subscribe →'}
            </button>
          </form>
          <p style={{ fontSize: 12, color: '#555' }}>Free forever · No spam · Unsubscribe anytime</p>
        </div>
      </section>

      {/* What's inside */}
      <section style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '56px 40px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
          {[
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
              title: 'Top 3 AI stories',
              desc: 'The most important AI news of the week, explained clearly.',
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>,
              title: 'One tool review',
              desc: "A deep-dive into one AI tool — what it's good for, what it's not.",
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,11 12,14 22,4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
              title: 'One thing to try',
              desc: 'A practical tip or workflow you can use immediately.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: '#FF4D4D12', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{icon}</div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 17, fontWeight: 700, color: 'var(--t1)', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past issues */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '64px 40px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF4D4D', marginBottom: 8 }}>Archive</div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--t1)' }}>Past Issues</h2>
          </div>
          <span style={{ fontSize: 13, color: 'var(--t3)' }}>{newsletterIssues.length} issues</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {newsletterIssues.map((issue, i) => (
            <Link
              key={issue.num}
              href="#"
              style={{ display: 'flex', alignItems: 'flex-start', gap: 20, padding: '20px 0', borderBottom: i < newsletterIssues.length - 1 ? '1px solid var(--border2)' : 'none', transition: 'opacity 0.18s' }}
              className="issue-row"
            >
              <div style={{ flexShrink: 0, minWidth: 80 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--t3)' }}>{issue.date}</div>
                <div style={{ fontSize: 11, color: 'var(--t4)', marginTop: 2 }}>Issue #{issue.num}</div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 17, fontWeight: 700, lineHeight: 1.4, color: 'var(--t1)', marginBottom: 6 }}>{issue.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.55 }}>{issue.preview}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 10 }}>
                  <span style={{ fontSize: 11, color: 'var(--t4)' }}>{issue.openRate} open rate</span>
                  <span style={{ fontSize: 11, color: 'var(--border)' }}>·</span>
                  <span style={{ fontSize: 11, color: 'var(--t4)' }}>{issue.readers} readers</span>
                </div>
              </div>
              <ArrowRight size={14} color="var(--t3)" style={{ flexShrink: 0, marginTop: 4 }} />
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}
