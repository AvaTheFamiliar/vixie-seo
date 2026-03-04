import type { Metadata } from 'next'
import './globals.css'
import { getDomainConfigFromEnv } from '@/lib/getDomainConfig'

export function generateMetadata(): Metadata {
  const cfg = getDomainConfigFromEnv()
  const domain = cfg.domain
  const base = `https://${domain}`

  return {
    title: cfg.metaTitle,
    description: cfg.metaDescription,
    metadataBase: new URL(base),
    alternates: {
      canonical: base,
    },
    openGraph: {
      title: cfg.metaTitle,
      description: cfg.metaDescription,
      url: base,
      siteName: cfg.brandName,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: cfg.metaTitle,
      description: cfg.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
    other: {
      'theme-color': cfg.primaryHex,
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
