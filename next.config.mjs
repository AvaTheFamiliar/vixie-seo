/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1600, 1920],
    imageSizes: [64, 128, 256, 384, 512],
    minimumCacheTTL: 86400,
  },

  // Compress output
  compress: true,

  async headers() {
    return [
      {
        // All pages — CDN cache 1h, stale-while-revalidate 24h
        source: '/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' },
          // Security headers (trust signals for Google)
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
      {
        // Static images — immutable long-term cache
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // SEO files — short cache for crawlers to pick up updates quickly
        source: '/(sitemap.xml|robots.txt|llms.txt)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        // Generated icons/OG images — cache 24h
        source: '/(icon|opengraph-image|twitter-image)(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
    ]
  },

  // Redirect www → apex (handled at Vercel level, but as fallback)
  async redirects() {
    return []
  },
}

export default nextConfig
