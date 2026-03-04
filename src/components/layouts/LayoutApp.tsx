/**
 * nudie.app — Product landing (Linear/Vercel aesthetic). Dark emerald.
 * Monospaced accents, glowing feature cards, panel-framed 2x2 grid.
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

interface Props { cfg: DomainConfig }

export default function LayoutApp({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs.slice(0, 6) ?? []

  return (
    <div className="bg-[#020c08] text-white">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pt-28 pb-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: cfg.accentHex }} />
              <span className="text-xs font-mono" style={{ color: cfg.accentHex }}>v2.1 — Now on A100 80GB</span>
            </div>

            <h1 className="font-black mb-6 leading-[1.05]"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
              {cfg.heroHeadline}
            </h1>

            <p className="text-gray-400 mb-8 leading-relaxed">{cfg.heroSubheadline}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
              <a href="#demo"
                className="px-6 py-3.5 rounded-lg border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/20 transition font-medium">
                See demo ↓
              </a>
            </div>

            {/* Inline stats — terminal style */}
            <div className="font-mono text-xs border border-white/10 rounded-lg overflow-hidden">
              <div className="px-4 py-2 border-b border-white/5 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="p-4 space-y-1 bg-black/30">
                {cfg.stats.map(s => (
                  <p key={s.label}>
                    <span style={{ color: cfg.accentHex }}>{'>'} </span>
                    <span className="text-white">{s.value}</span>
                    <span className="text-gray-600"> // {s.label}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right — hero slider */}
          <div>
            <BeforeAfterSlider
              beforeSrc="/images/before-6.webp"
              afterSrc="/images/after-6.webp"
              aspectRatio="2/3"
              className="rounded-2xl shadow-2xl"
            />
            <p className="text-xs text-gray-600 text-center mt-3 font-mono">← drag to reveal AI result</p>
          </div>
        </div>
      </section>

      {/* ── 2×2 GRID — panel aesthetic ──────────────────────────────── */}
      <section id="demo" className="px-6 md:px-12 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-black font-mono" style={{ color: cfg.accentHex }}>// results</h2>
            <span className="text-xs text-gray-600 font-mono">generated in &lt;10s each</span>
          </div>
          {/* Panel frame */}
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/20 p-3">
            <div className="grid grid-cols-2 gap-3">
              {[2,3,4,5].map(n => (
                <BeforeAfterSlider key={n} beforeSrc={`/images/before-${n}.webp`} afterSrc={`/images/after-${n}.webp`} aspectRatio="2/3" className="rounded-lg" />
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
          </div>
        </div>
      </section>

      {/* ── FEATURES — glowing cards ─────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-8">Built for serious users</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cfg.features.map(f => (
              <div key={f.title}
                className="group p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-200 cursor-default">
                <span className="text-xl block mb-3">{f.icon}</span>
                <p className="font-semibold text-sm mb-1 group-hover:text-emerald-300 transition-colors">{f.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE CTA ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black mb-2">Open the app free</h2>
            <p className="text-gray-500 text-sm">5 free credits daily. No subscription. No credit card.</p>
          </div>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="px-6 md:px-12 py-16 border-t border-white/5">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-black mb-8 font-mono">// faq</h2>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
