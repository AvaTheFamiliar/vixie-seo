/**
 * nudify.pics — Gallery IS the hero. Amber/warm. Images dominate. Zero fluff above fold.
 * Compact headline strip → immediate 2+4 grid. CTA floats bottom of gallery.
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

interface Props { cfg: DomainConfig }

export default function LayoutGallery({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs.slice(0, 6) ?? []

  return (
    <div className="bg-[#0a0800] text-white">

      {/* ── COMPACT HEADLINE STRIP ───────────────────────────────────── */}
      <section className="pt-20 pb-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="font-black leading-none mb-2"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white' }}>
              {cfg.heroHeadline}
            </h1>
            <p className="text-gray-500 text-sm max-w-sm">{cfg.heroSubheadline}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="md" />
            <p className="text-xs text-gray-600">
              {cfg.stats.slice(0,2).map((s,i) => (
                <span key={i}>{i > 0 && ' · '}<strong style={{ color: cfg.accentHex }}>{s.value}</strong> {s.label}</span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY — 2-col hero + 4-col strip ──────────────────────── */}
      <section className="px-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-600 mb-3 text-right">← drag sliders to compare</p>
          {/* Hero row — 2 large */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            {[3,5].map(n => (
              <BeforeAfterSlider key={n} beforeSrc={`/images/before-${n}.webp`} afterSrc={`/images/after-${n}.webp`} aspectRatio="2/3" className="rounded-xl" />
            ))}
          </div>
          {/* Strip — 4 compact */}
          <div className="grid grid-cols-4 gap-2">
            {[1,2,4,6].map(n => (
              <BeforeAfterSlider key={n} beforeSrc={`/images/before-${n}.webp`} afterSrc={`/images/after-${n}.webp`} aspectRatio="2/3" className="rounded-lg" />
            ))}
          </div>
          {/* Floating CTA below gallery */}
          <div className="text-center mt-8">
            <CTAButton href={cfg.ctaUrl} label="Generate Your Own Free" hex={cfg.primaryHex} size="lg" />
            <p className="text-xs text-gray-600 mt-3">No sign-up · 5 free daily credits</p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-black mb-8" style={{ color: cfg.accentHex }}>Why {cfg.brandName}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cfg.features.map(f => (
              <div key={f.title} className="flex gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition">
                <span className="text-xl flex-shrink-0">{f.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-8">How to generate nude AI pics</h2>
          <div className="space-y-3">
            {[
              { n: '01', t: 'Upload', d: 'Any JPG, PNG or WebP up to 10MB.' },
              { n: '02', t: 'Pick style', d: '19 styles from tasteful to explicit.' },
              { n: '03', t: 'Done', d: 'AI result in under 10 seconds.' },
            ].map(step => (
              <div key={step.n} className="flex items-center gap-6 p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                <span className="text-3xl font-black font-mono opacity-30">{step.n}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{step.t}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-16 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-black mb-8">FAQ</h2>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
