import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid #1E1E1E', padding: '36px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 16, fontWeight: 800, color: '#FAFAF8', marginBottom: 4 }}>
            mikael<span style={{ color: '#FF4D4D' }}>bites</span>
          </div>
          <div style={{ fontSize: 12, color: '#444' }}>AI news, reviews &amp; the weekly newsletter.</div>
        </div>
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {[
            { href: '/archive', label: 'Archive' },
            { href: '/about', label: 'About' },
            { href: '/newsletter', label: 'Newsletter' },
            { href: '#', label: 'Twitter' },
            { href: '#', label: 'RSS' },
          ].map(({ href, label }) => (
            <Link key={label} href={href} style={{ fontSize: 12, color: '#555' }} className="footer-link">
              {label}
            </Link>
          ))}
        </div>
        <div style={{ fontSize: 12, color: '#333' }}>© 2026 Mikael Bites</div>
      </div>
    </footer>
  )
}
