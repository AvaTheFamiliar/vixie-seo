import type { Metadata } from 'next'
import { getDomainConfigFromHeaders } from '@/lib/getDomainConfig'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getDomainConfigFromHeaders()
  return {
    title: cfg.metaTitle,
    description: cfg.metaDescription,
    openGraph: {
      title: cfg.metaTitle,
      description: cfg.metaDescription,
      type: 'website',
    },
    alternates: {
      canonical: `https://${cfg.domain}/`,
    },
  }
}

// Placeholder image paths — replace with real images when available
const PLACEHOLDER_PAIRS = [
  { before: '/images/before-1.jpg', after: '/images/after-1.jpg' },
  { before: '/images/before-2.jpg', after: '/images/after-2.jpg' },
  { before: '/images/before-3.jpg', after: '/images/after-3.jpg' },
]

export default async function HomePage() {
  const cfg = await getDomainConfigFromHeaders()

  // Check if placeholder images exist (they won't until E drops them in)
  const hasImages = false // flip to true once /public/images/ is populated

  // FAQs from first FAQ subpage
  const faqPage = cfg.subpages.find((sp) => sp.slug === 'faq')
  const homeFaqs = faqPage?.faqs.slice(0, 6) ?? []

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: cfg.brandName,
            description: cfg.metaDescription,
            url: `https://${cfg.domain}`,
            applicationCategory: 'MultimediaApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: '5 free daily credits',
            },
          }),
        }}
      />

      <Nav cfg={cfg} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 py-20">
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${cfg.primaryHex}, transparent)`,
          }}
        />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left — copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-white mb-6"
              style={{ background: `${cfg.primaryHex}33`, border: `1px solid ${cfg.primaryHex}66` }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Free — 5 credits daily
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {cfg.heroHeadline}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
              {cfg.heroSubheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
              <a href="#how-it-works" className="px-8 py-5 rounded-xl border border-white/20 text-white font-semibold text-center hover:bg-white/5 transition-colors">
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cfg.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-white" style={{ color: cfg.accentHex }}>{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero before/after slider */}
          <div className="w-full max-w-sm mx-auto md:max-w-none">
            {hasImages ? (
              <BeforeAfterSlider
                beforeSrc={PLACEHOLDER_PAIRS[0].before}
                afterSrc={PLACEHOLDER_PAIRS[0].after}
                height={500}
                className="shadow-2xl"
              />
            ) : (
              <div className="rounded-xl overflow-hidden shadow-2xl grid grid-cols-2 gap-1">
                <ImagePlaceholder label="BEFORE" className="rounded-none" />
                <ImagePlaceholder label="AFTER (AI)" className="rounded-none" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">How It Works</h2>
          <p className="text-gray-400">Three simple steps to your AI result</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { n: '1', title: 'Upload Your Photo', desc: 'Drop any JPG, PNG, or WebP image. Max 10MB.' },
            { n: '2', title: 'Choose a Style', desc: '19 styles from tasteful to explicit. Or write a custom prompt.' },
            { n: '3', title: 'Get Your Result', desc: 'Results in under 10 seconds. Download, share, or retry free.' },
          ].map((step) => (
            <div key={step.n} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div
                className="w-14 h-14 rounded-full text-white text-2xl font-black flex items-center justify-center mx-auto mb-5"
                style={{ background: cfg.primaryHex }}
              >
                {step.n}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Why {cfg.brandName}?</h2>
            <p className="text-gray-400">Everything you need, nothing you don&apos;t</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cfg.features.map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE/AFTER GALLERY ─────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Before &amp; After Results</h2>
            <p className="text-gray-400">Real AI results — drag the sliders to compare</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLACEHOLDER_PAIRS.map((pair, i) => (
              <div key={i}>
                {hasImages ? (
                  <BeforeAfterSlider
                    beforeSrc={pair.before}
                    afterSrc={pair.after}
                    height={400}
                  />
                ) : (
                  <div className="rounded-xl overflow-hidden grid grid-cols-2 gap-1">
                    <ImagePlaceholder label="BEFORE" aspectRatio="3/4" className="rounded-none" />
                    <ImagePlaceholder label="AFTER" aspectRatio="3/4" className="rounded-none" />
                  </div>
                )}
                <p className="text-center text-xs text-gray-600 mt-2">Example result {i + 1}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <CTAButton href={cfg.ctaUrl} label={`Try ${cfg.brandName} Free`} hex={cfg.primaryHex} size="lg" />
          </div>
        </div>
      </section>

      {/* ── PRICING / CREDITS ────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Simple, Fair Pricing</h2>
          <p className="text-gray-400 mb-12">No subscriptions. Buy credits once, use them forever.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { diamonds: '5/day', price: 'Free', label: 'Daily Free Credits', highlight: false },
              { diamonds: '60', price: '$4.99', label: 'Starter Pack', highlight: false },
              { diamonds: '140', price: '$9.99', label: 'Plus Pack', highlight: true },
              { diamonds: '400', price: '$24.99', label: 'Pro Pack', highlight: false },
              { diamonds: '1,000', price: '$49.99', label: 'Power Pack', highlight: false },
              { diamonds: '3,000', price: '$99.99', label: 'Ultimate Pack', highlight: false },
            ].map((pack) => (
              <a
                key={pack.label}
                href={cfg.ctaUrl}
                target="_blank"
                rel="noopener"
                className="block rounded-2xl p-6 border transition-all hover:scale-105"
                style={{
                  background: pack.highlight ? `${cfg.primaryHex}22` : 'rgba(255,255,255,0.04)',
                  borderColor: pack.highlight ? cfg.primaryHex : 'rgba(255,255,255,0.1)',
                }}
              >
                <p className="text-3xl font-extrabold text-white mb-1">💎 {pack.diamonds}</p>
                <p className="text-sm text-gray-400 mb-3">{pack.label}</p>
                <p className="text-xl font-bold" style={{ color: pack.highlight ? cfg.accentHex : 'white' }}>{pack.price}</p>
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-600">Credits never expire · Card &amp; crypto accepted · Discrete billing</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {homeFaqs.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion faqs={homeFaqs} hex={cfg.primaryHex} />
            <div className="text-center mt-8">
              <a href="/faq" className="text-sm underline" style={{ color: cfg.accentHex }}>View all FAQs →</a>
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section
        className="py-24 px-4 text-center"
        style={{ background: `linear-gradient(135deg, ${cfg.primaryHex}22, transparent)` }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to Try?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Start free — 5 daily credits, no credit card needed.
          </p>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
          <p className="text-xs text-gray-600 mt-6">
            18+ only · Only upload photos you have rights to · By using this service you agree to our{' '}
            <a href="https://vixie.art/public/terms.html" className="underline" target="_blank" rel="noopener">Terms</a>
          </p>
        </div>
      </section>

      <Footer cfg={cfg} />
    </>
  )
}
