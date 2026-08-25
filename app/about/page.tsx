'use client'

import { useState } from 'react'
import Link from 'next/link'
import NewsletterSection from '@/components/NewsletterSection'

export default function AboutPage() {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success'>('idle')

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = e.currentTarget.querySelector<HTMLInputElement>('input[type="email"]')
    if (!input?.value || !input.value.includes('@')) return
    setSubscribeStatus('success')
    input.value = ''
    setTimeout(() => setSubscribeStatus('idle'), 3000)
  }

  return (
    <main>
      {/* Header */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '72px 40px 0' }} className="animate-fade-up">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ width: 24, height: 2, background: '#FF4D4D' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF4D4D' }}>About</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(40px,5vw,60px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-1.5px', color: 'var(--t1)', marginBottom: 28 }}>
          Honest takes on <em style={{ color: '#FF4D4D', fontStyle: 'italic' }}>AI tools</em> — nothing more.
        </h1>
        <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--t2)', lineHeight: 1.75 }}>
          Mikael Bites is an independent blog covering AI tools, models, and the news that shapes how we work. No PR spin. No affiliate bias. Just genuine usage and honest opinions.
        </p>
      </section>

      {/* Author card */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '56px 40px' }}>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 40, display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'var(--ph)', border: '3px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-playfair)', fontWeight: 800, fontSize: 36, color: '#FF4D4D' }}>M</div>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'var(--t4)', textAlign: 'center', marginTop: 8 }}>author photo</div>
          </div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 26, fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--t1)', marginBottom: 4 }}>Mikael</h2>
            <div style={{ fontSize: 13, color: '#FF4D4D', fontWeight: 500, marginBottom: 20 }}>Founder &amp; Editor, Mikael Bites</div>
            <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 16 }}>
              I started Mikael Bites in 2022 because I was frustrated with AI coverage — too much hype, too little substance. Most reviews were written by people who&apos;d used a tool for 20 minutes. I wanted something different.
            </p>
            <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 24 }}>
              Everything on this site is based on real, sustained usage. When I review a tool, I use it daily for weeks. I&apos;m not always right — but I&apos;m always honest.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--t1)', background: 'var(--bg2)', padding: '8px 16px', borderRadius: 7, transition: 'background 0.15s, color 0.15s' }} className="social-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                Twitter / X
              </Link>
              <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--t1)', background: 'var(--bg2)', padding: '8px 16px', borderRadius: 7, transition: 'background 0.15s, color 0.15s' }} className="social-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg>
                RSS Feed
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll find */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '0 40px 64px' }}>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--t1)', marginBottom: 32 }}>What you&apos;ll find here</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {[
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>,
              title: 'Deep-dive reviews',
              desc: 'Weeks of real usage, not 20-minute first impressions.',
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
              title: 'AI news, explained',
              desc: 'Stories that matter, written for people who use AI.',
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" /></svg>,
              title: 'Comparisons & rankings',
              desc: 'Head-to-head tests so you know which tool to pick.',
            },
            {
              icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
              title: 'Weekly newsletter',
              desc: 'The AI week in 5 minutes — every Sunday.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 24 }}>
              <div style={{ width: 36, height: 36, background: '#FF4D4D12', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 17, fontWeight: 700, color: 'var(--t1)', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '56px 40px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, textAlign: 'center' }}>
          {[
            { value: '4.2k', label: 'Subscribers' },
            { value: '200+', label: 'Tools reviewed' },
            { value: '4yr', label: 'Covering AI' },
            { value: '0', label: 'Sponsored reviews' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 40, fontWeight: 800, color: 'var(--t1)', letterSpacing: '-1px' }}>{value}</div>
              <div style={{ fontSize: 13, color: 'var(--t3)', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSection variant="compact" />

    </main>
  )
}
