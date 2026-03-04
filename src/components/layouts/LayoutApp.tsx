/**
 * nudie.app — App-store style. Dark, minimal, badge-heavy.
 * Emerald/teal theme. Feels like a product page.
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const HAS_IMAGES = true

export default function LayoutApp({ cfg }: { cfg: DomainConfig }) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs.slice(0, 6) ?? []

  return (
    <div className="bg-[#030d0a] text-white">
      {/* HERO — app card style */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${cfg.primaryHex}20, transparent)` }} />

        <div className="max-w-5xl mx-auto w-full relative z-10">
          {/* App icon area */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg"
              style={{ background: `linear-gradient(135deg, ${cfg.primaryHex}, ${cfg.accentHex})` }}>
              N
            </div>
            <div>
              <p className="font-bold text-white text-lg">{cfg.brandName}</p>
              <p className="text-xs text-gray-500">AI Nude Generator</p>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-2xl">
            {cfg.heroHeadline}
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-lg">{cfg.heroSubheadline}</p>

          {/* Badge row */}
          <div className="flex flex-wrap gap-3 mb-10">
            {cfg.stats.map(s => (
              <div key={s.label} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm">
                <span className="font-bold" style={{ color: cfg.accentHex }}>{s.value}</span>
                <span className="text-gray-500 ml-1.5">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
            <p className="text-sm text-gray-600">Free forever · No subscription</p>
          </div>
        </div>
      </section>

      {/* COMPARISON — single big slider */}
      <section className="px-6 pb-20">
        <div className="max-w-xl mx-auto">
          <p className="text-center text-sm text-gray-600 mb-4">Real AI result · Drag to compare</p>
          {HAS_IMAGES
            ? <BeforeAfterSlider beforeSrc="/images/before-1.webp" afterSrc="/images/after-1.webp" height={480} className="rounded-2xl shadow-2xl" />
            : <div className="rounded-2xl overflow-hidden grid grid-cols-2 gap-1 shadow-2xl">
                <ImagePlaceholder label="BEFORE" aspectRatio="3/4" className="rounded-none" />
                <ImagePlaceholder label="AFTER (AI)" aspectRatio="3/4" className="rounded-none" />
              </div>
          }
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-20 px-6 bg-white/[0.025]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">Built different</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {cfg.features.map(f => (
              <div key={f.title} className="p-6 rounded-2xl border border-white/8 bg-black/30 flex gap-5 items-start">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">See it in action</h2>
          <p className="text-gray-500 text-sm text-center mb-10">Slide to reveal the AI-generated result</p>
          {/* 2×2 square grid */}
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map(n => (
              <BeforeAfterSlider key={n} beforeSrc={`/images/before-${n}.webp`} afterSrc={`/images/after-${n}.webp`} height={320} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-8 text-center">Get started in 30 seconds</h2>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Open the app', detail: 'No download, works in any browser' },
              { label: 'Upload a photo', detail: 'JPG, PNG or WebP · Max 10MB' },
              { label: 'Choose a style', detail: '19 options from tasteful to explicit' },
              { label: 'Download your result', detail: 'Ready in under 10 seconds' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.02]">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: `${cfg.primaryHex}40`, color: cfg.accentHex }}>
                  {i+1}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{s.label}</p>
                  <p className="text-gray-600 text-xs">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center"
        style={{ background: `linear-gradient(to bottom, ${cfg.primaryHex}15, transparent)` }}>
        <h2 className="text-4xl font-black mb-3">Open the app free</h2>
        <p className="text-gray-500 mb-8">5 free results daily. No subscription ever.</p>
        <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black mb-8 text-center">FAQ</h2>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
