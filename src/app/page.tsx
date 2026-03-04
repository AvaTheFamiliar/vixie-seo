import type { Metadata } from 'next'
import { getDomainConfigFromHeaders } from '@/lib/getDomainConfig'

// Run at Vercel's global edge network — renders in ~10ms worldwide,
// no cold starts, no single-region Lambda latency.
export const runtime = 'edge'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LayoutSplit from '@/components/layouts/LayoutSplit'
import LayoutCentered from '@/components/layouts/LayoutCentered'
import LayoutGallery from '@/components/layouts/LayoutGallery'
import LayoutApp from '@/components/layouts/LayoutApp'
import LayoutEditorial from '@/components/layouts/LayoutEditorial'

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getDomainConfigFromHeaders()
  return {
    title: cfg.metaTitle,
    description: cfg.metaDescription,
    openGraph: { title: cfg.metaTitle, description: cfg.metaDescription, type: 'website' },
    alternates: { canonical: `https://${cfg.domain}/` },
  }
}

export default async function HomePage() {
  const cfg = await getDomainConfigFromHeaders()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: cfg.brandName,
    description: cfg.metaDescription,
    url: `https://${cfg.domain}`,
    applicationCategory: 'MultimediaApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: '5 free daily credits' },
  }

  const layout = (() => {
    switch (cfg.layout) {
      case 'centered':   return <LayoutCentered cfg={cfg} />
      case 'gallery':    return <LayoutGallery cfg={cfg} />
      case 'app':        return <LayoutApp cfg={cfg} />
      case 'editorial':  return <LayoutEditorial cfg={cfg} />
      default:           return <LayoutSplit cfg={cfg} />
    }
  })()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav cfg={cfg} />
      {layout}
      <Footer cfg={cfg} />
    </>
  )
}
