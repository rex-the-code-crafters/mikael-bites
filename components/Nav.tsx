'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Sun, Moon, Menu, X } from 'lucide-react'
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

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const isActive = (href: string) => {
    const path = href.split('#')[0]
    if (path === '') return pathname === '/'
    return pathname === path
  }

  return (
    <>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--nav-bg)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <Link href="/" style={{ fontFamily: 'var(--font-playfair)', fontSize: 20, fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--t1)' }}>
            mikael<span style={{ color: '#FF4D4D' }}>bites</span>
          </Link>

          {!isMobile ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ fontSize: 13, fontWeight: 500, color: isActive(href) ? '#FF4D4D' : 'var(--t3)', transition: 'color 0.18s' }}
                  className="nav-link"
                >
                  {label}
                </Link>
              ))}
              <button onClick={() => setSearchOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: 'var(--t3)', display: 'flex', alignItems: 'center', transition: 'color 0.18s' }} className="nav-icon-btn">
                <Search size={17} />
              </button>
              <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: 'var(--t3)', display: 'flex', alignItems: 'center', transition: 'color 0.18s' }} className="nav-icon-btn">
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <Link href="/#newsletter" style={{ fontSize: 13, fontWeight: 600, color: '#fff', background: '#FF4D4D', padding: '7px 18px', borderRadius: 6, transition: 'opacity 0.18s' }} className="subscribe-btn">
                Subscribe free
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button onClick={() => setSearchOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: 'var(--t3)', display: 'flex', alignItems: 'center' }}>
                <Search size={17} />
              </button>
              <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: 'var(--t3)', display: 'flex', alignItems: 'center' }}>
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, width: 36, height: 36 }}>
                <span style={{ width: 22, height: 2, background: 'var(--t1)', display: 'block', borderRadius: 2 }} />
                <span style={{ width: 22, height: 2, background: 'var(--t1)', display: 'block', borderRadius: 2 }} />
                <span style={{ width: 16, height: 2, background: 'var(--t1)', display: 'block', borderRadius: 2 }} />
              </button>
            </div>
          )}
        </div>

        {isMobile && menuOpen && (
          <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '8px 40px 20px' }}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontSize: 15, fontWeight: 500, color: isActive(href) ? '#FF4D4D' : 'var(--t1)', padding: '12px 0', borderBottom: '1px solid var(--border2)' }}
              >
                {label}
              </Link>
            ))}
            <Link href="/#newsletter" onClick={() => setMenuOpen(false)} style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#fff', background: '#FF4D4D', padding: '12px 20px', borderRadius: 7, textAlign: 'center', marginTop: 14 }}>
              Subscribe free
            </Link>
          </div>
        )}
      </nav>

    </>
  )
}
