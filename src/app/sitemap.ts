import type { MetadataRoute } from 'next'
import { getDomainConfigFromEnv } from '@/lib/getDomainConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const cfg = getDomainConfigFromEnv()
  const base = `https://${cfg.domain}`

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
