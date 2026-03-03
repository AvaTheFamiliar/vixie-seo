import { headers } from 'next/headers'
import { getDomainConfig as _get, DEFAULT_DOMAIN, DOMAIN_CONFIGS } from '@/config/domains'
import type { DomainConfig } from '@/config/domains'

export async function getDomainConfigFromHeaders(): Promise<DomainConfig> {
  const headersList = await headers()
  const domain = headersList.get('x-domain') ?? DEFAULT_DOMAIN
  return _get(domain)
}

export { getDomainConfig, getAllSubpageSlugs, DOMAIN_CONFIGS, DEFAULT_DOMAIN } from '@/config/domains'
export type { DomainConfig, SubPage } from '@/config/domains'
