'use client'

import { use, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allPosts, tocSections } from '@/lib/data'
import NewsletterSection from '@/components/NewsletterSection'

type Props = { params: Promise<{ slug: string }> }

export default function BlogPost({ params }: Props) {
  const { slug } = use(params)

  const [activeSection, setActiveSection] = useState('')
  const [copyLabel, setCopyLabel] = useState('Copy link')
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (progressRef.current) {
        progressRef.current.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%'
      }
      let active = ''
      for (const { id } of tocSections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) active = id
      }
      setActiveSection(active)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' })
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopyLabel('Copied!')
      setTimeout(() => setCopyLabel('Copy link'), 2000)
    })
  }

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Claude 4 vs GPT-5: Which AI Actually Wins in 2026? — via @mikaelbites')}`, '_blank')
  }

  const post = allPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Reading progress bar */}
      <div ref={progressRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 200, height: 3, background: '#FF4D4D', width: '0%', transition: 'width 0.08s linear', pointerEvents: 'none' }} />

      <main>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 40px 80px', display: 'grid', gridTemplateColumns: '1fr 240px', gap: 64, alignItems: 'start' }} className="animate-fade-up">
          <article>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 13, color: 'var(--t3)' }}>
              <Link href="/" style={{ transition: 'color 0.15s' }} className="breadcrumb-link">Home</Link>
              <span>›</span>
              <Link href="/archive" style={{ transition: 'color 0.15s' }} className="breadcrumb-link">Reviews</Link>
              <span>›</span>
              <span style={{ color: 'var(--t1)', fontWeight: 500 }}>Claude 4 vs GPT-5</span>
            </div>

            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#FF4D4D', background: '#FF4D4D12', padding: '4px 10px', borderRadius: 4 }}>Review</span>
              <span style={{ width: 1, height: 14, background: 'var(--border)' }} />
              <span style={{ fontSize: 13, color: 'var(--t3)' }}>August 24, 2026</span>
              <span style={{ width: 1, height: 14, background: 'var(--border)' }} />
              <span style={{ fontSize: 13, color: 'var(--t3)' }}>12 min read</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(34px,3.8vw,50px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1px', color: 'var(--t1)', marginBottom: 20 }}>
              Claude 4 vs GPT-5: Which AI Tool Actually Wins in <em style={{ color: '#FF4D4D', fontStyle: 'italic' }}>2026?</em>
            </h1>
            <p style={{ fontSize: 19, fontWeight: 300, color: 'var(--t2)', lineHeight: 1.7, marginBottom: 28 }}>
              We ran both models through 200+ real-world tasks — coding, writing, reasoning, and creative work. The results are not what we expected.
            </p>

            {/* Author row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--ph)', border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 16, color: '#FF4D4D' }}>M</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--t1)' }}>Mikael</div>
                  <div style={{ fontSize: 12, color: 'var(--t3)' }}>Founder, Mikael Bites</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button onClick={shareTwitter} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, color: 'var(--t2)', background: 'var(--card)', border: '1px solid var(--border)', padding: '7px 13px', borderRadius: 6, cursor: 'pointer', transition: 'border-color 0.15s, color 0.15s', fontFamily: 'inherit' }} className="share-btn-twitter">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  Share
                </button>
                <button onClick={copyLink} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, color: 'var(--t2)', background: 'var(--card)', border: '1px solid var(--border)', padding: '7px 13px', borderRadius: 6, cursor: 'pointer', transition: 'border-color 0.15s, color 0.15s', fontFamily: 'inherit' }} className="share-btn-copy">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                  {copyLabel}
                </button>
              </div>
            </div>

            {/* Hero image */}
            <div style={{ aspectRatio: '16/9', background: 'var(--ph)', borderRadius: 10, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 44 }}>
              <div style={{ textAlign: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 32 32" fill="none" style={{ marginBottom: 8 }}><rect x="4" y="4" width="24" height="24" rx="4" stroke="var(--border)" strokeWidth="1.5" /><circle cx="12" cy="13" r="3" stroke="var(--border)" strokeWidth="1.5" /><path d="M4 22l6-5 5 4 4-4 9 7" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--ph-t)' }}>featured article image · 1280×720</div>
              </div>
            </div>

            {/* Body */}
            <div style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--t1)' }}>
              <p style={{ marginBottom: 24, color: 'var(--t2)' }}>The AI landscape changed faster in the first half of 2026 than in the entire decade before it. With the release of Claude 4 and GPT-5 within weeks of each other, users finally had a genuine choice — two top-tier models, both capable, both expensive, and both making bold claims.</p>
              <p style={{ marginBottom: 40, color: 'var(--t2)' }}>We spent three weeks testing both models across eight distinct task categories. This is not a benchmark comparison — it&apos;s a real-world usage review designed for people who actually have to decide which subscription to pay for.</p>

              {/* TL;DR */}
              <div style={{ background: 'var(--bg2)', borderLeft: '3px solid #FF4D4D', borderRadius: '0 8px 8px 0', padding: '20px 24px', marginBottom: 44 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#FF4D4D', marginBottom: 8 }}>TL;DR</div>
                <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.7, margin: 0 }}>Claude 4 wins for writing, analysis, and long-context tasks. GPT-5 leads on coding, tool use, and speed. Your ideal choice depends entirely on your primary use case.</p>
              </div>

              <h2 id="how-we-tested" style={{ fontFamily: 'var(--font-playfair)', fontSize: 27, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--t1)', marginBottom: 16, marginTop: 48 }}>How We Tested</h2>
              <p style={{ marginBottom: 24, color: 'var(--t2)' }}>Our methodology covered 200+ tasks across eight categories: creative writing, technical writing, code generation, debugging, data analysis, long-document summarization, instruction following, and conversational fluency.</p>

              {/* Comparison table */}
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden', marginBottom: 44 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t3)', background: 'var(--bg2)', padding: '12px 20px', borderBottom: '1px solid var(--border)' }}>
                  <span>Category</span><span style={{ textAlign: 'center' }}>Claude 4</span><span style={{ textAlign: 'center' }}>GPT-5</span>
                </div>
                {[
                  { cat: 'Creative Writing', c4: '9.2 ★', gpt: '7.8', c4Win: true },
                  { cat: 'Code Generation', c4: '7.9', gpt: '9.4 ★', c4Win: false },
                  { cat: 'Long Context', c4: '9.6 ★', gpt: '8.1', c4Win: true },
                  { cat: 'Tool Use', c4: '8.0', gpt: '9.1 ★', c4Win: false },
                  { cat: 'Reasoning', c4: '9.0 ★', gpt: '8.7', c4Win: true },
                ].map(({ cat, c4, gpt, c4Win }, i) => (
                  <div key={cat} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '13px 20px', borderBottom: i < 4 ? '1px solid var(--border2)' : 'none', fontSize: 14, alignItems: 'center', background: i % 2 === 1 ? 'var(--bg2)' : 'transparent' }}>
                    <span style={{ fontWeight: 500, color: 'var(--t1)' }}>{cat}</span>
                    <span style={{ textAlign: 'center', color: c4Win ? '#FF4D4D' : 'var(--t3)', fontWeight: c4Win ? 700 : 400 }}>{c4}</span>
                    <span style={{ textAlign: 'center', color: !c4Win ? '#FF4D4D' : 'var(--t3)', fontWeight: !c4Win ? 700 : 400 }}>{gpt}</span>
                  </div>
                ))}
              </div>

              <h2 id="claude-4" style={{ fontFamily: 'var(--font-playfair)', fontSize: 27, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--t1)', marginBottom: 16, marginTop: 48 }}>Claude 4: What It Does Best</h2>
              <p style={{ marginBottom: 24, color: 'var(--t2)' }}>Claude 4 is the better writer — by a significant margin. Long-form content, nuanced edits, and document-level reasoning are where it truly shines. Its 1M token context window lets you throw an entire codebase or research paper at it and get coherent, useful responses.</p>

              <h2 id="gpt-5" style={{ fontFamily: 'var(--font-playfair)', fontSize: 27, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--t1)', marginBottom: 16, marginTop: 48 }}>GPT-5: Where It Leads</h2>
              <p style={{ marginBottom: 40, color: 'var(--t2)' }}>GPT-5 is the developer&apos;s pick. Code generation, debugging, and agentic tasks with tools and APIs are noticeably faster and more reliable. The function-calling API is best-in-class.</p>

              <h2 id="verdict" style={{ fontFamily: 'var(--font-playfair)', fontSize: 27, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--t1)', marginBottom: 16, marginTop: 48 }}>The Verdict</h2>
              <p style={{ marginBottom: 24, color: 'var(--t2)' }}>Neither model is a clear winner across the board. Pick based on your primary use case, not headline benchmarks.</p>

              {/* Verdict cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 48 }}>
                {[
                  { name: 'Claude 4', score: '8.9', stars: 4, desc: 'Best for writing, research & long-context work.' },
                  { name: 'GPT-5', score: '8.7', stars: 4, desc: 'Best for coding, tool integrations & speed.' },
                ].map(({ name, score, stars, desc }) => (
                  <div key={name} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: 24 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t3)', marginBottom: 12 }}>{name}</div>
                    <div style={{ fontSize: 36, fontFamily: 'var(--font-playfair)', fontWeight: 800, color: 'var(--t1)', marginBottom: 4 }}>{score}<span style={{ fontSize: 20, color: 'var(--t3)' }}>/10</span></div>
                    <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
                      <span style={{ color: '#FF4D4D', fontSize: 16 }}>{'★'.repeat(stars)}</span>
                      <span style={{ color: 'var(--border)', fontSize: 16 }}>{'★'.repeat(5 - stars)}</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 28, borderTop: '1px solid var(--border)', marginBottom: 40 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t3)', marginRight: 4, lineHeight: 2 }}>Tags:</span>
              {['LLMs', 'Claude', 'GPT-5', 'Review'].map((tag) => (
                <Link key={tag} href="#" style={{ fontSize: 12, fontWeight: 500, background: 'var(--bg2)', color: 'var(--t2)', padding: '5px 12px', borderRadius: 20, transition: 'background 0.15s, color 0.15s' }} className="tag-pill">
                  {tag}
                </Link>
              ))}
            </div>

            {/* Author bio */}
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 28, marginBottom: 60, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: '50%', background: 'var(--ph)', border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 22, color: '#FF4D4D' }}>M</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--t1)', marginBottom: 2 }}>Written by Mikael</div>
                <div style={{ fontSize: 12, color: '#FF4D4D', marginBottom: 10 }}>Founder, Mikael Bites</div>
                <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.65 }}>I&apos;ve been covering AI tools since 2022. Every review is based on real usage — no PR samples, no affiliate bias.</p>
                <Link href="/about" style={{ display: 'inline-block', marginTop: 12, fontSize: 12, fontWeight: 600, color: '#FF4D4D' }} className="author-link">More about Mikael →</Link>
              </div>
            </div>
          </article>

          {/* TOC Sidebar */}
          <aside style={{ position: 'sticky', top: 80 }}>
            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--t3)', marginBottom: 16 }}>Table of Contents</div>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {tocSections.map(({ id, label }) => {
                  const isActive = activeSection === id
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={scrollTo(id)}
                      style={{ fontSize: 13, fontWeight: 500, color: isActive ? '#FF4D4D' : 'var(--t2)', padding: '7px 10px', borderRadius: 6, background: isActive ? 'var(--bg2)' : 'transparent', display: 'block', lineHeight: 1.4, transition: 'color 0.15s' }}
                      className="toc-link"
                    >
                      {label}
                    </a>
                  )
                })}
              </nav>
            </div>
            <div style={{ background: '#111', borderRadius: 10, padding: 20, marginTop: 16, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 15, fontWeight: 700, color: '#FAFAF8', marginBottom: 8, lineHeight: 1.4 }}>Get the weekly AI digest</div>
              <p style={{ fontSize: 12, color: '#888', marginBottom: 14, lineHeight: 1.5 }}>Every Sunday. Free.</p>
              <Link href="/#newsletter" style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#fff', background: '#FF4D4D', padding: '9px 16px', borderRadius: 7, transition: 'opacity 0.18s' }} className="sidebar-subscribe">
                Subscribe free →
              </Link>
            </div>
          </aside>
        </div>

        {/* Related articles */}
        <div style={{ background: 'var(--card)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 40px' }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF4D4D', marginBottom: 8 }}>Keep Reading</div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 26, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--t1)', marginBottom: 32 }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/${post.slug}`} style={{ display: 'block', transition: 'opacity 0.2s' }} className="related-card">
                  <div style={{ aspectRatio: '16/9', background: 'var(--ph)', borderRadius: 8, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--ph-t)' }}>thumbnail</span>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: post.tagColor === '#FF4D4D' ? '#FF4D4D' : 'var(--t1)', display: 'block', marginBottom: 6 }}>{post.tag}</span>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 17, fontWeight: 700, lineHeight: 1.4, color: 'var(--t1)' }}>{post.title}</h3>
                  <span style={{ fontSize: 12, color: 'var(--t4)', display: 'block', marginTop: 8 }}>{post.date} · {post.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <NewsletterSection variant="compact" />
      </main>

    </>
  )
}
