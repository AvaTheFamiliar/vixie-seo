import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDomainConfigFromEnv } from '@/lib/getDomainConfig'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import Image from 'next/image'
// Maps slug keywords to SEO images (unique per topic)
const SEO_IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  'how-it-works': { src: '/images/seo/ai-processing.png', alt: 'AI processing visualization showing neural network nodes for nudify AI' },
  'privacy': { src: '/images/seo/privacy-shield.png', alt: 'Privacy shield concept for anonymous AI nudify processing' },
  'privacy-safe': { src: '/images/seo/anonymous-private.png', alt: 'Anonymous private AI nudify processing — zero data retention' },
  'private-nudify': { src: '/images/seo/anonymous-private.png', alt: 'Private AI nudify — your photos are never stored' },
  'compare': { src: '/images/seo/comparison.png', alt: 'AI nudify tool comparison chart 2026' },
  'best-nudify-tool-2026': { src: '/images/seo/comparison.png', alt: 'Best nudify AI tools comparison 2026' },
  'best-undress-ai-2026': { src: '/images/seo/comparison.png', alt: 'Best undress AI tools comparison 2026' },
  'examples': { src: '/images/seo/before-after-concept.png', alt: 'AI nudify before and after results comparison' },
  'realistic-nudify': { src: '/images/seo/realistic-ai.png', alt: 'Realistic AI nudify results — true skin texture' },
  'nudify-no-watermark': { src: '/images/seo/no-watermark.png', alt: 'AI nudify with no watermark — full quality output' },
  'mobile-nudify': { src: '/images/seo/mobile-ai.png', alt: 'AI nudify on mobile — works in any browser' },
  'nudify-iphone': { src: '/images/seo/mobile-ai.png', alt: 'Nudify AI on iPhone — no app install required' },
  'nudify-android': { src: '/images/seo/mobile-ai.png', alt: 'Nudify AI on Android — browser-based tool' },
  'nudify-for-free': { src: '/images/seo/free-tool.png', alt: 'Free AI nudify tool — no cost, no account' },
  'free': { src: '/images/seo/free-tool.png', alt: 'Free nudify AI — zero cost results' },
}

function getSeoImage(slug: string): { src: string; alt: string } | null {
  // Exact match
  if (SEO_IMAGE_MAP[slug]) return SEO_IMAGE_MAP[slug]
  // Partial match
  for (const [key, val] of Object.entries(SEO_IMAGE_MAP)) {
    if (slug.includes(key) || key.includes(slug.split('-')[0])) return val
  }
  return null
}


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

  const domain = cfg.domain
  const url = `https://${domain}/${slug}`

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url,
      siteName: cfg.brandName,
      type: 'article',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.metaDescription,
    },
    robots: { index: true, follow: true },
  }
}

// Pick a random before/after pair per slug (deterministic via hash)
function sliderIndexForSlug(slug: string): number {
  let hash = 0
  for (const ch of slug) hash = (hash * 31 + ch.charCodeAt(0)) & 0xffff
  return (hash % 5) + 1 // 1..5 (keep before-6 for examples)
}

export default async function SubPage({ params }: Props) {
  const { slug } = await params
  const cfg = getDomainConfigFromEnv()
  const page = cfg.subpages.find((sp) => sp.slug === slug)
  if (!page) notFound()

  const isExamples = slug === 'examples'
  const isHowItWorks = slug === 'how-it-works'
  const domain = cfg.domain
  const url = `https://${domain}/${slug}`
  const imgIdx = sliderIndexForSlug(slug)

  // Pick 3 related pages (excluding current)
  const related = cfg.subpages
    .filter((sp) => sp.slug !== slug && sp.slug !== 'faq' && sp.slug !== 'privacy' && sp.slug !== 'dmca')
    .slice(0, 3)

  // ── JSON-LD schemas ──────────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${domain}` },
      { '@type': 'ListItem', position: 2, name: page.h1, item: url },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.metaDescription,
    url,
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    publisher: {
      '@type': 'Organization',
      name: cfg.brandName,
      url: `https://${domain}`,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const faqSchema = page.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null

  // HowTo schema for how-it-works pages
  const howToSchema = isHowItWorks ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: page.h1,
    description: page.metaDescription,
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Upload your photo',
        text: `Go to ${domain} and click the upload button. Select any photo from your device. No account or login is required.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'AI processes your photo',
        text: 'Our AI analyzes the photo and generates a realistic result in under 3 seconds using state-of-the-art diffusion model technology.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Download your result',
        text: 'Download your full-resolution result with no watermark. Your original photo is automatically deleted from our servers within 60 seconds.',
      },
    ],
    totalTime: 'PT3S',
    tool: [{ '@type': 'HowToTool', name: 'AI nudify tool', url: `https://${domain}` }],
  } : null

  return (
    <>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}

      <Nav cfg={cfg} />

      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <section className="relative pt-20 pb-14 px-4 overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${cfg.primaryHex}, transparent)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white transition-colors">{cfg.brandName}</a>
            <span>/</span>
            <span className="text-gray-400">{page.h1}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[1, 2, 3].map((n) => (
                <BeforeAfterSlider
                  key={n}
                  beforeSrc={`/images/before-${n}.webp`}
                  afterSrc={`/images/after-${n}.webp`}
                  aspectRatio="2/3"
                />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
              {[4, 5, 6].map((n) => (
                <BeforeAfterSlider
                  key={n}
                  beforeSrc={`/images/before-${n}.webp`}
                  afterSrc={`/images/after-${n}.webp`}
                  aspectRatio="2/3"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BODY CONTENT ─────────────────────────────────────── */}
      {page.body.length > 0 && (
        <section className="py-14 px-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <div className="max-w-3xl mx-auto">
            {/* Inline slider — deterministic per slug */}
            {!isExamples && (
              <div className="mb-12 max-w-sm mx-auto">
                <BeforeAfterSlider
                  beforeSrc={`/images/before-${imgIdx}.webp`}
                  afterSrc={`/images/after-${imgIdx}.webp`}
                  aspectRatio="2/3"
                  className="rounded-2xl"
                />
                <p className="text-center text-xs text-gray-600 mt-3">
                  Before &amp; after — AI result in under 3s
                </p>
              </div>
            )}

            {/* SEO topic image */}
            {(() => { const seoImg = getSeoImage(slug); return seoImg ? (
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={seoImg.src}
                  alt={seoImg.alt}
                  width={1200}
                  height={675}
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
            ) : null; })()}
            <div className="space-y-6">
              {page.body.map((para, i) => (
                <p key={i} className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {page.faqs.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={page.faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}

      {/* ── RELATED PAGES (internal linking) ─────────────────── */}
      {related.length > 0 && (
        <section className="py-12 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
              Related guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((sp) => (
                <a
                  key={sp.slug}
                  href={`/${sp.slug}`}
                  className="block p-4 rounded-xl border border-white/8 hover:border-white/20 transition-colors group"
                  style={{ background: `${cfg.primaryHex}08` }}
                >
                  <div
                    className="text-sm font-semibold text-white group-hover:underline mb-1 leading-snug"
                  >
                    {sp.title}
                  </div>
                  <div className="text-xs text-gray-600 line-clamp-2">
                    {sp.metaDescription}
                  </div>
                </a>
              ))}
            </div>
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
          <p className="text-gray-400 mb-8">Free — no account, no credit card needed.</p>
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
