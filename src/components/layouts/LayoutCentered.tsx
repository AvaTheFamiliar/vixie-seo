/**
 * nudify.my — Intimate, editorial, rose. Centered everything. Glassmorphism cards.
 * Personal tone, breathing slider, soft vignette.
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

interface Props { cfg: DomainConfig }

export default function LayoutCentered({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs.slice(0, 6) ?? []

  return (
    <div className="bg-[#0d0608] text-white">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${cfg.primaryHex}22, transparent)` }} />

        <div className="relative max-w-2xl mx-auto">
          <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-8 font-medium border"
            style={{ borderColor: `${cfg.primaryHex}40`, color: cfg.accentHex, background: `${cfg.primaryHex}12` }}>
            Private · Free · Instant results
          </span>

          <h1 className="font-black mb-6 leading-[1.0]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}>
            {cfg.heroHeadline}
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            {cfg.heroSubheadline}
          </p>

          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />

          <div className="flex justify-center gap-8 mt-10">
            {cfg.stats.slice(0,3).map(s => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-black" style={{ color: cfg.accentHex }}>{s.value}</p>
                <p className="text-xs text-gray-600 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO SLIDER — wide, breathing ────────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="max-w-xl mx-auto relative">
          {/* Vignette edges */}
          <div className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0d0608, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0d0608, transparent)' }} />
          <BeforeAfterSlider
            beforeSrc="/images/before-2.webp"
            afterSrc="/images/after-2.webp"
            aspectRatio="2/3"
            className="rounded-3xl overflow-hidden shadow-2xl"
          />
        </div>
      </section>

      {/* ── FEATURES — glassmorphism cards ──────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-12">Everything you need</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cfg.features.map(f => (
              <div key={f.title}
                className="rounded-2xl p-6 border transition-all hover:border-white/20 hover:bg-white/[0.06]"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}>
                <span className="text-2xl block mb-3">{f.icon}</span>
                <h3 className="font-semibold text-white mb-1.5 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-12">Three steps, ten seconds</h2>
          <div className="flex flex-col md:flex-row items-center gap-0">
            {['Upload your photo', 'Choose your style', 'Get your result'].map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black mb-3 border-2"
                  style={{ borderColor: cfg.accentHex, color: cfg.accentHex }}>
                  {i + 1}
                </div>
                {i < 2 && <div className="hidden md:block w-full h-px bg-white/10 absolute" />}
                <p className="text-sm text-gray-400 max-w-[120px] text-center leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────── */}
      <section id="examples" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">Before &amp; After</h2>
          <p className="text-gray-500 text-center text-sm mb-10">Real AI results · Drag to compare</p>
          <BeforeAfterSlider beforeSrc="/images/before-4.webp" afterSrc="/images/after-4.webp" aspectRatio="2/3" className="mb-4 rounded-2xl" />
          <div className="grid grid-cols-2 gap-4">
            {[5,6].map(n => (
              <BeforeAfterSlider key={n} beforeSrc={`/images/before-${n}.webp`} afterSrc={`/images/after-${n}.webp`} aspectRatio="2/3" className="rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE CTA ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center"
        style={{ background: `radial-gradient(ellipse 60% 40% at 50% 100%, ${cfg.primaryHex}18, transparent)` }}>
        <div className="max-w-lg mx-auto">
          <h2 className="text-4xl font-black mb-4">Try it free today</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">5 free nudifications every day. No subscription, no credit card, no commitment.</p>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-center mb-10">Common questions</h2>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
