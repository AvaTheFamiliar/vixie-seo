import type { MetadataRoute } from 'next'
import { getDomainConfigFromEnv } from '@/lib/getDomainConfig'

export default function robots(): MetadataRoute.Robots {
  const cfg = getDomainConfigFromEnv()
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `https://${cfg.domain}/sitemap.xml`,
  }
}
