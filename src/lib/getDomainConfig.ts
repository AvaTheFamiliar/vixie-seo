import { getDomainConfig as _get, DEFAULT_DOMAIN, DOMAIN_CONFIGS } from '@/config/domains'
import type { DomainConfig } from '@/config/domains'

/**
 * Build-time domain resolution.
 * Each Vercel project sets NEXT_PUBLIC_DOMAIN=nudify.im (etc.) as an env var.
 * This is baked in at build time — no runtime header reads, fully static output.
 */
export function getDomainConfigFromEnv(): DomainConfig {
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? DEFAULT_DOMAIN
  return _get(domain)
}

export { getDomainConfig, getAllSubpageSlugs, DOMAIN_CONFIGS, DEFAULT_DOMAIN } from '@/config/domains'
export type { DomainConfig, SubPage } from '@/config/domains'
