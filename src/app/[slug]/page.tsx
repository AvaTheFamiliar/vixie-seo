import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDomainConfigFromEnv } from '@/lib/getDomainConfig'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

export function generateStaticParams() {
  const cfg = getDomainConfigFromEnv()
  return cfg.subpages.map((sp) => ({ slug: sp.slug }))
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cfg = getDomainConfigFromEnv()
  const page = cfg.subpages.find((sp) => sp.slug === slug)
  if (!page) return {}
  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: 'website',
    },
    alternates: {
      canonical: `https://${cfg.domain}/${slug}`,
    },
  }
}

export default async function SubPage({ params }: Props) {
  const { slug } = await params
  const cfg = getDomainConfigFromEnv()
  const page = cfg.subpages.find((sp) => sp.slug === slug)
  if (!page) notFound()

  const isExamples = slug === 'examples'
  const hasImages = true

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: page.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />

      <Nav cfg={cfg} />

      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <section className="relative pt-20 pb-14 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${cfg.primaryHex}, transparent)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <a href="/" className="text-sm mb-6 inline-block" style={{ color: cfg.accentHex }}>
            ← {cfg.brandName}
          </a>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            {page.h1}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
            {page.intro}
          </p>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="md" />
        </div>
      </section>

      {/* ── EXAMPLES GALLERY (only on /examples) ────────────── */}
      {isExamples && (
        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Featured large slider */}
            <BeforeAfterSlider beforeSrc="/images/before-1.webp" afterSrc="/images/after-1.webp" aspectRatio="2/3" className="mb-4" />
            {/* Two smaller below */}
            <div className="grid grid-cols-2 gap-4">
              <BeforeAfterSlider beforeSrc="/images/before-2.webp" afterSrc="/images/after-2.webp" aspectRatio="2/3" />
              <BeforeAfterSlider beforeSrc="/images/before-3.webp" afterSrc="/images/after-3.webp" aspectRatio="2/3" />
            </div>
          </div>
        </section>
      )}

      {/* ── BODY CONTENT ─────────────────────────────────────── */}
      {page.body.length > 0 && (
        <section className="py-14 px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {page.body.map((para, i) => (
              <p key={i} className="text-gray-300 leading-relaxed text-base md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* ── INLINE BEFORE/AFTER ─────────────────────────────── */}
      {!isExamples && (
        <section className="py-6 px-4">
          <div className="max-w-2xl mx-auto">
            <BeforeAfterSlider
              beforeSrc="/images/before-4.webp"
              afterSrc="/images/after-4.webp"
              height={420}
              className="rounded-2xl"
            />
            <p className="text-center text-xs text-gray-600 mt-3">Before &amp; after — AI result</p>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {page.faqs.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={page.faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}

      {/* ── CTA STRIP ────────────────────────────────────────── */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: `linear-gradient(135deg, ${cfg.primaryHex}22, transparent)` }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Try?</h2>
          <p className="text-gray-400 mb-8">5 free credits daily — no credit card needed.</p>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
          <p className="text-xs text-gray-600 mt-6">
            18+ only · Only upload photos you have rights to
          </p>
        </div>
      </section>

      <Footer cfg={cfg} />
    </>
  )
}
