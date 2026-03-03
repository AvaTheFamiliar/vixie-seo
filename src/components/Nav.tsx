import Link from 'next/link'
import type { DomainConfig } from '@/config/domains'

export default function Nav({ cfg }: { cfg: DomainConfig }) {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
          {cfg.brandName}
        </Link>
        <a
          href={cfg.ctaUrl}
          className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
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
