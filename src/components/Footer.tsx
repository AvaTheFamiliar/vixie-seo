import Link from 'next/link'
import type { DomainConfig } from '@/config/domains'

// Priority slugs that should always appear first in footer
const PRIORITY_SLUGS = ['how-it-works', 'examples', 'free', 'free-nudify', 'nudify-for-free', 'compare', 'faq']

export default function Footer({ cfg }: { cfg: DomainConfig }) {
  const year = new Date().getFullYear()

  // Split subpages: priority first, then rest — take up to 10 total across two cols
  const priority = cfg.subpages.filter((sp) => PRIORITY_SLUGS.includes(sp.slug))
  const rest = cfg.subpages.filter((sp) => !PRIORITY_SLUGS.includes(sp.slug) && !['privacy', 'terms', 'dmca'].includes(sp.slug))
  const col1 = [...priority, ...rest].slice(0, 7)
  const col2 = [...priority, ...rest].slice(7, 14)

  return (
    <footer
      className="border-t border-white/10 py-14 px-4"
      style={{ fontFamily: "'DM Sans', sans-serif", background: '#050408' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-black text-white tracking-tight">
              {cfg.brandName}
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mt-3 max-w-[220px]">
              {cfg.tagline}. AI-powered nudify tool — results in under 3 seconds, no account needed.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              {(['2M+ processed', 'Free', 'Private', '3s avg'].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-gray-500"
                >
                  {badge}
                </span>
              )))}
            </div>
          </div>

          {/* Explore col 1 */}
          <div>
            <p className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              Explore
            </p>
            <ul className="space-y-2.5">
              {col1.map((sp) => (
                <li key={sp.slug}>
                  <Link
                    href={`/${sp.slug}`}
                    className="text-sm text-gray-500 hover:text-white transition-colors leading-snug"
                  >
                    {sp.h1.length > 38 ? sp.h1.slice(0, 36) + '…' : sp.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore col 2 */}
          {col2.length > 0 && (
            <div>
              <p className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
                More guides
              </p>
              <ul className="space-y-2.5">
                {col2.map((sp) => (
                  <li key={sp.slug}>
                    <Link
                      href={`/${sp.slug}`}
                      className="text-sm text-gray-500 hover:text-white transition-colors leading-snug"
                    >
                      {sp.h1.length > 38 ? sp.h1.slice(0, 36) + '…' : sp.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal */}
          <div>
            <p className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              Legal
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-sm text-gray-500 hover:text-white transition-colors">
                  DMCA
                </Link>
              </li>
            </ul>

            <p className="text-white font-semibold mb-3 mt-8 text-xs uppercase tracking-widest">
              Resources
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/faq" className="text-sm text-gray-500 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-gray-700 leading-relaxed max-w-lg">
            © {year} {cfg.brandName}. Adults 18+ only. All results are AI-generated.
            Only upload photos you have legal rights to.{' '}
            <Link href="/terms" className="underline hover:text-gray-500 transition-colors">Terms apply</Link>.
          </p>
          <p className="text-xs text-gray-800 tabular-nums whitespace-nowrap">
            {cfg.domain}
          </p>
        </div>
      </div>
    </footer>
  )
}
