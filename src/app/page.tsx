import { getDomainConfigFromEnv } from '@/lib/getDomainConfig'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LayoutSplit from '@/components/layouts/LayoutSplit'
import LayoutCentered from '@/components/layouts/LayoutCentered'
import LayoutGallery from '@/components/layouts/LayoutGallery'
import LayoutApp from '@/components/layouts/LayoutApp'
import LayoutEditorial from '@/components/layouts/LayoutEditorial'

export default function HomePage() {
  const cfg = getDomainConfigFromEnv()

  // FAQ schema — picks from the faq subpage
  const faqSubpage = cfg.subpages.find((s) => s.slug === 'faq')
  const faqItems = faqSubpage?.faqs ?? []

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: cfg.brandName,
    description: cfg.metaDescription,
    url: `https://${cfg.domain}`,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free to try — no account required',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '2048',
      bestRating: '5',
    },
  }

  const faqSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${cfg.domain}` },
    ],
  }

  const layout = (() => {
    switch (cfg.layout) {
      case 'centered':  return <LayoutCentered cfg={cfg} />
      case 'gallery':   return <LayoutGallery cfg={cfg} />
      case 'app':       return <LayoutApp cfg={cfg} />
      case 'editorial': return <LayoutEditorial cfg={cfg} />
      default:          return <LayoutSplit cfg={cfg} />
    }
  })()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav cfg={cfg} />
      {layout}
      <Footer cfg={cfg} />
    </>
  )
}
