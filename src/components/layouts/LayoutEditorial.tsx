/**
 * undress.cat — Editorial / magazine style.
 * Indigo theme. Big typography, lots of whitespace, less hype.
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const HAS_IMAGES = true

export default function LayoutEditorial({ cfg }: { cfg: DomainConfig }) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs.slice(0, 6) ?? []

  return (
    <div className="bg-[#04040e] text-white">
      {/* EDITORIAL HERO — huge type, minimal chrome */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-10"
          style={{ background: `linear-gradient(to left, ${cfg.primaryHex}, transparent)` }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: cfg.accentHex }}>
            AI-Powered · Private · Free to Start
          </p>
          <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.9] tracking-tight mb-8 max-w-4xl">
            {cfg.heroHeadline}
          </h1>
          <div className="flex flex-col md:flex-row gap-10 md:items-end">
            <div className="max-w-lg">
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {cfg.heroSubheadline}
              </p>
              <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
              <p className="text-xs text-gray-600 mt-4">5 free uses daily · No subscription · No credit card</p>
            </div>
            {/* Inline stats — editorial table style */}
            <div className="md:ml-auto border-t border-b border-white/10 py-6 min-w-[200px]">
              {cfg.stats.map(s => (
                <div key={s.label} className="flex justify-between gap-8 py-2 border-b border-white/5 last:border-0">
                  <span className="text-gray-500 text-sm">{s.label}</span>
                  <span className="font-extrabold text-sm" style={{ color: cfg.accentHex }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BIG BEFORE/AFTER */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            {HAS_IMAGES
              ? <BeforeAfterSlider beforeSrc="/images/before-4.webp" afterSrc="/images/after-4.webp" aspectRatio="2/3" className="rounded-2xl shadow-2xl" />
              : <div className="rounded-2xl overflow-hidden grid grid-cols-2 gap-1 shadow-2xl">
                  <ImagePlaceholder label="BEFORE" aspectRatio="3/4" className="rounded-none" />
                  <ImagePlaceholder label="AFTER (AI)" aspectRatio="3/4" className="rounded-none" />
                </div>
            }
          </div>
          <div className="md:w-60 space-y-6">
            <p className="text-sm text-gray-500 leading-relaxed">
              Drag the slider to reveal the AI-generated undressed result. Produced in under 10 seconds by our GPU inference pipeline.
            </p>
            <div className="border-l-2 pl-4" style={{ borderColor: cfg.primaryHex }}>
              <p className="text-xs text-gray-600">All content is AI-generated. Only upload photos you have rights to use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL FEATURE LIST */}
      <section className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-12">
            <div>
              <h2 className="text-3xl font-black mb-4">Why choose {cfg.brandName}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every detail built for quality, privacy, and ease of use.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-white/10">
              {cfg.features.map((f, i) => (
                <div key={f.title} className="bg-[#04040e] p-6">
                  <p className="text-xl mb-3">{f.icon}</p>
                  <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-3xl font-black">Results</h2>
            <p className="text-sm text-gray-600">Drag sliders to compare</p>
          </div>
          {/* 2 large side-by-side */}
          <div className="grid md:grid-cols-2 gap-6">
            {[5,6].map(n => (
              <BeforeAfterSlider key={n} beforeSrc={`/images/before-${n}.webp`} afterSrc={`/images/after-${n}.webp`} aspectRatio="2/3" />
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-10">How it works</h2>
          <div className="space-y-8">
            {[
              { n: '—01', title: 'Upload a photo', body: 'Any JPG, PNG or WebP image up to 10MB. Works on desktop and mobile.' },
              { n: '—02', title: 'Choose a style', body: '19 undress styles from swimwear to explicit NSFW. Or write a custom prompt.' },
              { n: '—03', title: 'Receive your result', body: 'Under 10 seconds. View with before/after slider, download or share privately.' },
            ].map(step => (
              <div key={step.n} className="flex gap-6">
                <p className="text-gray-700 font-mono text-sm flex-shrink-0 pt-1">{step.n}</p>
                <div className="border-t border-white/10 pt-5 flex-1">
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-white/10 pt-16">
          <div>
            <h2 className="text-3xl font-black mb-2">Start free today</h2>
            <p className="text-gray-500 text-sm">5 free results daily. No subscription. No credit card.</p>
          </div>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="md" />
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 px-6 md:px-12 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black mb-8">Questions</h2>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
