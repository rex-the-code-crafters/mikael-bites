import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import NewsletterSection from '@/components/NewsletterSection'
import { allPosts } from '@/lib/data'

const latestNews = allPosts.slice(0, 3)

function ImagePlaceholder({ label, style }: { label: string; style?: React.CSSProperties }) {
  return (
    <div style={{ background: 'var(--ph)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, ...style }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="var(--border)" strokeWidth="1.5" />
        <circle cx="12" cy="13" r="3" stroke="var(--border)" strokeWidth="1.5" />
        <path d="M4 22l6-5 5 4 4-4 9 7" stroke="var(--border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--ph-t)' }}>{label}</span>
    </div>
  )
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 40px 64px' }} className="animate-fade-up">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
          <span style={{ width: 28, height: 2, background: '#FF4D4D', flexShrink: 0 }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF4D4D' }}>Featured Story</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(36px,4vw,54px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1px', color: 'var(--t1)', marginBottom: 24 }}>
              Claude 4 vs GPT-5: Which AI Actually Wins in <em style={{ color: '#FF4D4D', fontStyle: 'italic' }}>2026?</em>
            </h1>
            <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 32 }}>
              We ran both models through 200+ real-world tasks — coding, writing, reasoning, and creative work. The results are not what we expected.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <Link href="/claude-4-vs-gpt-5" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#fff', background: 'var(--t1)', padding: '12px 24px', borderRadius: 7, transition: 'background 0.18s' }} className="hero-cta">
                Read the review <ArrowRight size={14} />
              </Link>
              <span style={{ fontSize: 13, color: 'var(--t3)' }}>12 min read</span>
            </div>
          </div>
          <ImagePlaceholder label="featured hero image" style={{ aspectRatio: '4/3', borderRadius: 12 }} />
        </div>
      </section>

      {/* TOPICS BAR */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--card)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#FF4D4D', padding: '12px 20px 12px 0', borderRight: '1px solid var(--border)', whiteSpace: 'nowrap', flexShrink: 0 }}>Topics</span>
          <div style={{ display: 'flex', alignItems: 'center', overflow: 'auto', padding: '0 20px', gap: 4 }}>
            {['All', 'LLMs', 'Image Gen', 'Code Assistants', 'AI Agents', 'Productivity', 'Video AI'].map((topic) => (
              <Link
                key={topic}
                href={topic === 'All' ? '/archive' : '#'}
                style={{ fontSize: 12, fontWeight: 500, color: 'var(--t2)', padding: '10px 14px', whiteSpace: 'nowrap', borderRadius: 6, transition: 'color 0.15s' }}
                className="topic-link"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* LATEST NEWS */}
      <section id="news" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF4D4D', marginBottom: 8 }}>Latest</div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 30, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--t1)' }}>AI News This Week</h2>
          </div>
          <Link href="/archive" style={{ fontSize: 13, fontWeight: 500, color: 'var(--t3)', transition: 'color 0.18s' }} className="view-all-link">View all →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {latestNews.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`} style={{ display: 'block', transition: 'opacity 0.2s' }} className="news-card">
              <div style={{ aspectRatio: '16/9', background: 'var(--ph)', borderRadius: 8, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--ph-t)' }}>article thumbnail</span>
              </div>
              <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: post.tagColor === '#FF4D4D' ? '#FF4D4D' : 'var(--t1)', marginBottom: 8 }}>{post.tag}</span>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 18, fontWeight: 700, lineHeight: 1.4, color: 'var(--t1)', marginBottom: 8 }}>{post.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.65, marginBottom: 12 }}>{post.excerpt}</p>
              <span style={{ fontSize: 12, color: 'var(--t4)' }}>{post.date} · {post.readTime}</span>
            </Link>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ height: 1, background: 'var(--border)' }} />
      </div>

      {/* TOOL REVIEWS */}
      <section id="reviews" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF4D4D', marginBottom: 8 }}>Deep Dives</div>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 30, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--t1)' }}>Tool Reviews</h2>
          </div>
          <Link href="/archive" style={{ fontSize: 13, fontWeight: 500, color: 'var(--t3)', transition: 'color 0.18s' }} className="view-all-link">View all →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* Featured review card */}
          <Link href="/gemini-ultra-2" style={{ display: 'grid', gridTemplateRows: 'auto 1fr', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s, box-shadow 0.2s' }} className="featured-review-card">
            <div style={{ height: 220, background: 'var(--ph)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--ph-t)' }}>review screenshot</span>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#FF4D4D' }}>Review</span>
                <div style={{ display: 'flex', gap: 2 }}>
                  <span style={{ color: '#FF4D4D', fontSize: 13 }}>★★★★</span>
                  <span style={{ color: 'var(--border)', fontSize: 13 }}>★</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--t3)' }}>4.2 / 5</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, fontWeight: 700, lineHeight: 1.3, color: 'var(--t1)', marginBottom: 10 }}>Google Gemini Ultra 2: Is the Hype Finally Justified?</h3>
              <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.65 }}>Three weeks of daily use reveals a formidable model — but with surprising blind spots.</p>
            </div>
          </Link>

          {/* Review list */}
          <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            {[
              { title: 'Cursor AI: The Code Editor That Changed My Workflow', stars: 5, meta: '8 min · Editor\'s Pick', slug: 'cursor-ai-review' },
              { title: 'Midjourney v7 vs DALL·E 4: Full Image Quality Test', stars: 4, meta: '10 min', slug: 'midjourney-dalle-test' },
              { title: 'Perplexity Pro vs You.com: Which AI Search Wins?', stars: 3, meta: '7 min', slug: 'perplexity-youcom' },
            ].map(({ title, stars, meta, slug }, i, arr) => (
              <Link key={slug} href={`/${slug}`} style={{ display: 'flex', gap: 16, padding: 20, borderBottom: i < arr.length - 1 ? '1px solid var(--border2)' : 'none', transition: 'background 0.15s' }} className="review-list-item">
                <div style={{ flexShrink: 0, width: 64, height: 64, background: 'var(--ph)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'var(--t4)', textAlign: 'center', lineHeight: 1.3 }}>tool<br />logo</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--t3)' }}>Review</span>
                    <span style={{ color: '#FF4D4D', fontSize: 11 }}>{'★'.repeat(stars)}</span>
                    {stars < 5 && <span style={{ color: 'var(--border)', fontSize: 11 }}>{'★'.repeat(5 - stars)}</span>}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-playfair)', fontSize: 15, fontWeight: 700, lineHeight: 1.4, color: 'var(--t1)', marginBottom: 4 }}>{title}</h4>
                  <span style={{ fontSize: 12, color: 'var(--t4)' }}>{meta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection variant="full" />

    </main>
  )
}
