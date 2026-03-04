/**
 * nudify.im — Split hero: text left, big slider right
 * Bold, direct, high-contrast violet theme
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const HAS_IMAGES = false

interface Props { cfg: DomainConfig }

export default function LayoutSplit({ cfg }: Props) {
  const faqPage = cfg.subpages.find(sp => sp.slug === 'faq')
  const faqs = faqPage?.faqs.slice(0, 6) ?? []

  return (
    <div className="bg-[#08080e] text-white">
      {/* HERO — text left / slider right */}
      <section className="relative min-h-[92vh] flex items-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 80% at -10% 50%, ${cfg.primaryHex}30, transparent)` }} />
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_480px] gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-8"
              style={{ background: `${cfg.primaryHex}25`, border: `1px solid ${cfg.primaryHex}50`, color: cfg.accentHex }}>
              ✦ Free — 5 credits every day
            </span>
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              {cfg.heroHeadline.split(' ').map((word, i) => (
                <span key={i} style={i === 1 ? { color: cfg.accentHex } : {}}>{word} </span>
              ))}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">{cfg.heroSubheadline}</p>
            <div className="flex flex-wrap gap-4 mb-10">
              <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
              <a href="#examples" className="px-8 py-4 rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition text-base font-semibold">
                See examples ↓
              </a>
            </div>
            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {cfg.stats.map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold" style={{ color: cfg.accentHex }}>{s.value}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right — slider */}
          <div className="relative">
            {HAS_IMAGES
              ? <BeforeAfterSlider beforeSrc="/images/before-1.jpg" afterSrc="/images/after-1.jpg" height={560} className="shadow-2xl" />
              : <div className="rounded-2xl overflow-hidden grid grid-cols-2 gap-1 shadow-2xl">
                  <ImagePlaceholder label="BEFORE" aspectRatio="3/4" className="rounded-none" />
                  <ImagePlaceholder label="AFTER (AI)" aspectRatio="3/4" className="rounded-none" />
                </div>
            }
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">Three steps. Ten seconds.</h2>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { n: '01', title: 'Upload', desc: 'Any JPG, PNG or WebP. Max 10MB.' },
              { n: '02', title: 'Style', desc: '19 AI styles — tasteful to explicit.' },
              { n: '03', title: 'Done', desc: 'Results in under 10 seconds.' },
            ].map(step => (
              <div key={step.n} className="p-8 border border-white/10 first:rounded-l-2xl last:rounded-r-2xl bg-white/[0.03]">
                <p className="text-5xl font-black mb-4" style={{ color: `${cfg.primaryHex}60` }}>{step.n}</p>
                <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES grid */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">Why {cfg.brandName}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cfg.features.map(f => (
              <div key={f.title} className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition">
                <span className="text-2xl block mb-3">{f.icon}</span>
                <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="examples" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-4 text-center">Real Results</h2>
          <p className="text-gray-500 text-center mb-12">Drag the sliders to compare before and after</p>
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

      {/* FREE callout */}
      <section className="py-16 px-6" style={{ background: `linear-gradient(135deg, ${cfg.primaryHex}18, transparent)` }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Free to Start</h2>
          <p className="text-gray-400 mb-8">5 free results every day. No subscription. No credit card. Just open the app and go.</p>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-10 text-center">FAQs</h2>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
