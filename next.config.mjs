import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow all 5 custom domains + Vercel preview URLs
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ]
  },
}

export default nextConfig
