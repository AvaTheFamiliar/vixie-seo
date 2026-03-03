import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { getDomainConfig } from '@/config/domains'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers()
  const domain = (headersList.get('x-domain') ?? 'nudify.im').split(':')[0]
  const cfg = getDomainConfig(domain)
  const base = `https://${domain}`

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...cfg.subpages.map((sp) => ({
      url: `${base}/${sp.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
