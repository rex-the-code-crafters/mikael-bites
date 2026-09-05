'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import SearchOverlay from './SearchOverlay'

const navLinks = [
  { href: '/#news', label: 'News' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  const isActive = (href: string) => {
    const path = href.split('#')[0]
    if (path === '') return pathname === '/'
    return pathname === path
  }

  return (
    <>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s',
      }}>
        {/* ── Main bar ── */}
        <div className="nav-inner" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--page-px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <Link
            href="/"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 20, fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--t1)' }}
          >
            mikael<span style={{ color: '#FF4D4D' }}>bites</span>
          </Link>

          {!isMobile ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ fontSize: 13, fontWeight: 500, color: isActive(href) ? '#FF4D4D' : 'var(--t3)' }}
                  className="nav-link"
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={() => setSearchOpen(true)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: 'var(--t3)', display: 'flex', alignItems: 'center' }}
                className="nav-icon-btn"
                aria-label="Search"
              >
                <Search size={17} />
              </button>
              <button
                onClick={toggleTheme}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: 'var(--t3)', display: 'flex', alignItems: 'center' }}
                className="nav-icon-btn"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <Link
                href="/#newsletter"
                style={{ fontSize: 13, fontWeight: 600, color: '#fff', background: '#FF4D4D', padding: '7px 18px', borderRadius: 6 }}
                className="subscribe-btn"
              >
                Subscribe free
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <button
                onClick={() => setSearchOpen(true)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--t3)', display: 'flex', alignItems: 'center' }}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                onClick={toggleTheme}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--t3)', display: 'flex', alignItems: 'center' }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: menuOpen ? 0 : 5, width: 40, height: 40, position: 'relative' }}
                aria-label="Menu"
                aria-expanded={menuOpen}
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ width: 22, height: 2, background: 'var(--t1)', display: 'block', borderRadius: 2, position: menuOpen ? 'absolute' : 'relative', top: menuOpen ? '50%' : 'auto', left: menuOpen ? 9 : 'auto' }}
                />
                {!menuOpen && (
                  <span style={{ width: 22, height: 2, background: 'var(--t1)', display: 'block', borderRadius: 2 }} />
                )}
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{ width: menuOpen ? 22 : 16, height: 2, background: 'var(--t1)', display: 'block', borderRadius: 2, position: menuOpen ? 'absolute' : 'relative', top: menuOpen ? '50%' : 'auto', left: menuOpen ? 9 : 'auto' }}
                />
              </button>
            </div>
          )}
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {isMobile && menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', overflow: 'hidden', padding: '8px var(--page-px) 20px' }}
            >
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    style={{ display: 'block', fontSize: 16, fontWeight: 500, color: isActive(href) ? '#FF4D4D' : 'var(--t1)', padding: '13px 0', borderBottom: '1px solid var(--border2)' }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/#newsletter"
                  onClick={() => setMenuOpen(false)}
                  style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#fff', background: '#FF4D4D', padding: '13px 20px', borderRadius: 8, textAlign: 'center', marginTop: 16 }}
                >
                  Subscribe free
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
