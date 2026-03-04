/**
 * nudify.my — Centered hero with full-width slider below the fold
 * Rose/red theme. Personal, conversational tone ("my photo")
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const HAS_IMAGES = false

export default function LayoutCentered({ cfg }: { cfg: DomainConfig }) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs.slice(0, 6) ?? []

  return (
    <div className="bg-[#0d0608] text-white">
      {/* HERO — centered */}
      <section className="relative pt-28 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 100% 60% at 50% -10%, ${cfg.primaryHex}35, transparent)` }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-8 border"
            style={{ borderColor: `${cfg.primaryHex}50`, color: cfg.accentHex, background: `${cfg.primaryHex}15` }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            5 free uses daily — no sign-up needed
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            {cfg.heroHeadline}
          </h1>
          <p className="text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            {cfg.heroSubheadline}
          </p>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
          <p className="text-xs text-gray-600 mt-4">No subscription · No credit card · Results in 10 seconds</p>
        </div>
      </section>

      {/* FULL-WIDTH SLIDER */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          {HAS_IMAGES
            ? <BeforeAfterSlider beforeSrc="/images/before-1.jpg" afterSrc="/images/after-1.jpg" height={500} className="shadow-2xl rounded-2xl" />
            : <div className="rounded-2xl overflow-hidden grid grid-cols-2 gap-1 shadow-2xl">
                <ImagePlaceholder label="BEFORE" aspectRatio="3/4" className="rounded-none" />
                <ImagePlaceholder label="AFTER (AI)" aspectRatio="3/4" className="rounded-none" />
              </div>
          }
          <p className="text-center text-xs text-gray-600 mt-3">← Drag to compare · Real AI result</p>
        </div>
      </section>

      {/* HOW IT WORKS — horizontal timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-14">How to Nudify My Photo</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-white/10" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '📤', title: 'Upload your photo', desc: 'JPG, PNG or WebP. Max 10MB.' },
                { icon: '🎨', title: 'Pick a style', desc: '19 AI styles from tasteful to explicit.' },
                { icon: '✨', title: 'Get your result', desc: 'Under 10 seconds. Download or share.' },
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl mx-auto mb-4 bg-[#0d0608] relative z-10"
                    style={{ borderColor: cfg.primaryHex }}>
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — 2-col cards */}
      <section className="py-16 px-6 bg-white/[0.025]">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {cfg.features.map(f => (
            <div key={f.title} className="flex gap-4 p-5 rounded-xl border border-white/10">
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <div>
                <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">Before &amp; After</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">Real AI results · Drag sliders to compare</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[1,2,3].map(n => HAS_IMAGES
              ? <BeforeAfterSlider key={n} beforeSrc={`/images/before-${n}.jpg`} afterSrc={`/images/after-${n}.jpg`} height={380} />
              : <div key={n} className="rounded-xl overflow-hidden grid grid-cols-2 gap-1">
                  <ImagePlaceholder label="BEFORE" aspectRatio="3/4" className="rounded-none" />
                  <ImagePlaceholder label="AFTER" aspectRatio="3/4" className="rounded-none" />
                </div>
            )}
          </div>
        </div>
      </section>

      {/* FREE CTA */}
      <section className="py-20 px-6 text-center"
        style={{ background: `linear-gradient(to bottom, ${cfg.primaryHex}15, transparent)` }}>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Try it free today</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">5 free nudifications every day. No subscription, no credit card, no commitment.</p>
        <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-10 text-center">Common Questions</h2>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
