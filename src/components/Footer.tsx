import Link from 'next/link'
import type { DomainConfig } from '@/config/domains'

export default function Footer({ cfg }: { cfg: DomainConfig }) {
  return (
    <footer className="border-t border-white/10 mt-24 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-white font-bold mb-3">{cfg.brandName}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{cfg.tagline}</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Explore</p>
            <ul className="space-y-2">
              {cfg.subpages.slice(0, 5).map((sp) => (
                <li key={sp.slug}>
                  <Link href={`/${sp.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {sp.h1.slice(0, 32)}{sp.h1.length > 32 ? '…' : ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">More</p>
            <ul className="space-y-2">
              {cfg.subpages.slice(5).map((sp) => (
                <li key={sp.slug}>
                  <Link href={`/${sp.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {sp.h1.slice(0, 32)}{sp.h1.length > 32 ? '…' : ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Legal</p>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/dmca" className="text-sm text-gray-400 hover:text-white transition-colors">DMCA</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {cfg.brandName}. Adults 18+ only. All content is AI-generated.
            Only upload photos you have rights to. By using this service you agree to our{' '}
            <Link href="/terms" className="underline">Terms</Link>.
          </p>
        </div>
      </div>
    </footer>
  )
}
