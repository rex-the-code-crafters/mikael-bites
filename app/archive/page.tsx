'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { allPosts } from '@/lib/data'

const filters = ['All', 'News', 'Review', 'Tools', 'List'] as const
type Filter = typeof filters[number]

const filterLabels: Record<Filter, string> = {
  All: 'All',
  News: 'News',
  Review: 'Reviews',
  Tools: 'Tools',
  List: 'Lists',
}

const easeOut = [0.22, 1, 0.36, 1] as const

export default function ArchivePage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const filtered = allPosts.filter((p) => {
    const matchCat = activeFilter === 'All' || p.tag === activeFilter
    const matchQ = !query || p.title.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  const visible = filtered.slice(0, page * 9)

  return (
    <main>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(40px,7vh,56px) var(--page-px) clamp(48px,8vh,80px)' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOut }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}
        >
          <span style={{ width: 24, height: 2, background: '#FF4D4D' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#FF4D4D' }}>All Posts</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}
        >
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, letterSpacing: '-1px', color: 'var(--t1)' }}>Archive</h1>
          <div style={{ position: 'relative', width: 'min(100%, 240px)' }}>
            <input
              type="text"
              placeholder="Search posts…"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1) }}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 16px 10px 38px', fontSize: 14, color: 'var(--t1)', fontFamily: 'inherit', outline: 'none', width: '100%', transition: 'border-color 0.18s' }}
              className="archive-search"
            />
            <Search size={15} color="var(--t3)" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          </div>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}
        >
          {filters.map((f) => {
            const active = activeFilter === f
            return (
              <button
                key={f}
                onClick={() => { setActiveFilter(f); setPage(1) }}
                style={{ fontSize: 12, fontWeight: 600, padding: '7px 16px', borderRadius: 20, border: `1px solid ${active ? '#FF4D4D' : 'var(--border)'}`, background: active ? '#FF4D4D' : 'var(--card)', color: active ? '#fff' : 'var(--t2)', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}
              >
                {filterLabels[f]}
              </button>
            )
          })}
        </motion.div>

        <div style={{ fontSize: 13, color: 'var(--t3)', marginBottom: 24 }}>Showing {visible.length} posts</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, marginBottom: 64 }} className="news-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((post, i) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: (i % 9) * 0.06, ease: easeOut }}
              >
                <Link href={`/${post.slug}`} style={{ display: 'block' }} className="archive-card">
                  <div style={{ aspectRatio: '16/9', background: 'var(--ph)', borderRadius: 8, marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', overflow: 'hidden' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--ph-t)' }}>thumbnail</span>
                  </div>
                  <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: post.tagColor === '#FF4D4D' ? '#FF4D4D' : 'var(--t1)', marginBottom: 6 }}>{post.tag}</span>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 17, fontWeight: 700, lineHeight: 1.4, color: 'var(--t1)', marginBottom: 6 }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--t2)', lineHeight: 1.6, marginBottom: 10 }}>{post.excerpt}</p>
                  <span style={{ fontSize: 12, color: 'var(--t4)' }}>{post.date} · {post.readTime}</span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visible.length < filtered.length && (
          <div style={{ textAlign: 'center', paddingBottom: 32 }}>
            <button
              onClick={() => setPage((p) => p + 1)}
              style={{ fontSize: 14, fontWeight: 600, color: 'var(--t1)', background: 'var(--card)', border: '1px solid var(--border)', padding: '12px 32px', borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 0.18s, color 0.18s' }}
              className="load-more-btn"
            >
              Load more posts
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
