/**
 * undress.cat — Long-form editorial, indigo. Magazine layout.
 * Big pull stat at top, two large sliders with captions, dense readable prose.
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

interface Props { cfg: DomainConfig }

export default function LayoutEditorial({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs.slice(0, 6) ?? []

  return (
    <div className="bg-[#05060f] text-white">

      {/* ── MASTHEAD ─────────────────────────────────────────────────── */}
      <section className="border-b border-white/10 px-6 md:px-12 pt-20 pb-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            {/* Pull stat */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-black text-6xl md:text-8xl tabular-nums"
                style={{ color: cfg.accentHex }}>2M+</span>
              <span className="text-gray-500 text-lg leading-tight max-w-[160px]">
                photos undressed with AI
              </span>
            </div>
            <h1 className="font-black leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {cfg.heroHeadline}
            </h1>
            <p className="text-gray-400 leading-relaxed max-w-xl text-base">
              {cfg.heroSubheadline}
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
            <p className="text-xs text-gray-600 text-center">Free · Private · No sign-up</p>
          </div>
        </div>
      </section>

      {/* ── HERO SLIDER + INTRO ───────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-14 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_360px] gap-10 items-start">
          <div>
            <BeforeAfterSlider
              beforeSrc="/images/before-4.webp"
              afterSrc="/images/after-4.webp"
              aspectRatio="2/3"
              className="rounded-2xl"
            />
            <p className="text-xs text-gray-600 mt-2">← Drag to reveal AI result</p>
          </div>
          <div className="pt-4">
            <h2 className="text-2xl font-black mb-4 leading-tight">The most realistic undress AI available</h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>Our AI doesn't just erase pixels — it understands body structure, lighting, skin tone, and scene context to synthesize a result that looks completely natural.</p>
              <p>Running on dedicated NVIDIA A100 80GB GPUs, we process over 50,000 photos every day with sub-10-second response times.</p>
              <p>Privacy is built in: your photo is encrypted in transit, never shared with third parties, and automatically deleted within 24 hours.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
              {cfg.stats.slice(0,4).map(s => (
                <div key={s.label} className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
                  <p className="font-black text-lg" style={{ color: cfg.accentHex }}>{s.value}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO LARGE SLIDERS — editorial spread ───────────────────────── */}
      <section id="examples" className="px-6 md:px-12 py-10 border-t border-white/5 max-w-6xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-gray-600 mb-8">Before / After Gallery</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[5,6].map((n, i) => (
            <div key={n}>
              <BeforeAfterSlider
                beforeSrc={`/images/before-${n}.webp`}
                afterSrc={`/images/after-${n}.webp`}
                aspectRatio="2/3"
                className="rounded-2xl mb-3"
              />
              <p className="text-xs text-gray-600">
                {i === 0 ? 'Standard nude style · Generated in 8s' : 'NSFW style · Generated in 11s'}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAButton href={cfg.ctaUrl} label="Undress a Photo Free" hex={cfg.primaryHex} size="lg" />
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-14 border-t border-white/5 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          <div>
            <h2 className="text-xl font-black mb-2">{cfg.brandName}</h2>
            <p className="text-gray-600 text-sm">{cfg.tagline}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {cfg.features.map(f => (
              <div key={f.title} className="flex gap-3">
                <span className="text-lg flex-shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-white">{f.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 border-t border-white/5"
        style={{ background: `linear-gradient(to right, ${cfg.primaryHex}10, transparent)` }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black mb-1">Ready to try?</h2>
            <p className="text-gray-500 text-sm">5 free credits every day — no credit card needed.</p>
          </div>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="px-6 md:px-12 py-16 border-t border-white/5 max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-10">Frequently asked</h2>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
