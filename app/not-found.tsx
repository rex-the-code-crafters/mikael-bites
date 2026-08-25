import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
      <div style={{ textAlign: 'center', maxWidth: 520 }} className="animate-fade-up">
        <div style={{ marginBottom: 32 }} className="animate-float">
          <span style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(100px,18vw,160px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-6px', color: 'var(--ph)' }}>404</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ width: 24, height: 2, background: '#FF4D4D' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF4D4D' }}>Page not found</span>
          <span style={{ width: 24, height: 2, background: '#FF4D4D' }} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(26px,4vw,36px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.8px', color: 'var(--t1)', marginBottom: 16 }}>
          This page got <em style={{ color: '#FF4D4D', fontStyle: 'italic' }}>deprecated.</em>
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 40 }}>
          Like a model that got quietly sunset, this page no longer exists. Try heading back to the homepage or browse everything we&apos;ve published.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#fff', background: 'var(--t1)', padding: '12px 24px', borderRadius: 8, transition: 'background 0.18s' }} className="home-btn">
            ← Go home
          </Link>
          <Link href="/archive" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--t1)', background: 'var(--card)', border: '1px solid var(--border)', padding: '12px 24px', borderRadius: 8, transition: 'border-color 0.18s, color 0.18s' }} className="archive-btn">
            Browse archive →
          </Link>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 24, textAlign: 'left' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--t3)', marginBottom: 16 }}>Popular reads</div>
          {[
            { label: 'Claude 4 vs GPT-5: Which AI Actually Wins in 2026?', slug: 'claude-4-vs-gpt-5' },
            { label: 'Google Gemini Ultra 2: Is the Hype Finally Justified?', slug: 'gemini-ultra-2' },
            { label: 'Cursor AI: The Code Editor That Changed My Workflow', slug: 'cursor-ai-review' },
          ].map(({ label, slug }, i, arr) => (
            <Link
              key={slug}
              href={`/${slug}`}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border2)' : 'none', transition: 'color 0.15s' }}
              className="popular-link"
            >
              <span style={{ fontSize: 14, fontWeight: 500 }}>{label}</span>
              <ArrowRight size={13} style={{ flexShrink: 0, marginLeft: 12 }} />
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
