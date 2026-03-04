import Link from 'next/link'
import type { DomainConfig } from '@/config/domains'

const NAV_SLUGS = ['how-it-works', 'examples', 'compare', 'faq']

export default function Nav({ cfg }: { cfg: DomainConfig }) {
  const navPages = cfg.subpages.filter((sp) => NAV_SLUGS.includes(sp.slug)).slice(0, 4)

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-6">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-white flex-shrink-0">
          {cfg.brandName}
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 flex-1">
          {navPages.map((sp) => (
            <Link
              key={sp.slug}
              href={`/${sp.slug}`}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {sp.slug === 'how-it-works' ? 'How it works'
                : sp.slug === 'examples' ? 'Examples'
                : sp.slug === 'compare' ? 'Compare'
                : sp.slug === 'faq' ? 'FAQ'
                : sp.h1.split(' ').slice(0, 3).join(' ')}
            </Link>
          ))}
        </div>

        <a
          href={cfg.ctaUrl}
          className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90 flex-shrink-0"
          style={{ background: cfg.primaryHex }}
          target="_blank"
          rel="noopener"
        >
          {cfg.ctaText}
        </a>
      </div>
    </nav>
  )
}
