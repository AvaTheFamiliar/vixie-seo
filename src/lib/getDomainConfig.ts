import { headers } from 'next/headers'
import { getDomainConfig as _get, DEFAULT_DOMAIN, DOMAIN_CONFIGS } from '@/config/domains'
import type { DomainConfig } from '@/config/domains'

export async function getDomainConfigFromHeaders(): Promise<DomainConfig> {
  const headersList = await headers()
  // Read the native Host header directly — always reliable in both
  // edge and Node runtimes. No middleware injection needed.
  const host = (headersList.get('host') ?? DEFAULT_DOMAIN).split(':')[0]
  return _get(host)
}

export { getDomainConfig, getAllSubpageSlugs, DOMAIN_CONFIGS, DEFAULT_DOMAIN } from '@/config/domains'
export type { DomainConfig, SubPage } from '@/config/domains'
