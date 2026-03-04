import { ImageResponse } from 'next/og'
import { getDomainConfigFromEnv } from '@/lib/getDomainConfig'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'AI Nudifier'

export default function OGImage() {
  const cfg = getDomainConfigFromEnv()

  return new ImageResponse(
    (
      <div
        style={{
          background: '#080c14',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '-200px',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${cfg.primaryHex}30 0%, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '80px',
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          {/* Top: Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                background: cfg.primaryHex,
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 900,
                fontSize: '18px',
              }}
            >
              {cfg.brandName.replace(/[^a-zA-Z]/g, '')[0]?.toUpperCase() ?? 'N'}
            </div>
            <span style={{ color: cfg.primaryHex, fontSize: '22px', fontWeight: 700 }}>
              {cfg.brandName}
            </span>
          </div>

          {/* Middle: Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                color: 'white',
                fontSize: '72px',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-2px',
                maxWidth: '800px',
              }}
            >
              {cfg.heroHeadline}
            </div>
            <div
              style={{
                color: '#94a3b8',
                fontSize: '28px',
                lineHeight: 1.4,
                maxWidth: '700px',
              }}
            >
              {cfg.tagline}
            </div>
          </div>

          {/* Bottom: CTA + stats */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div
              style={{
                background: cfg.primaryHex,
                color: 'white',
                padding: '16px 40px',
                borderRadius: '10px',
                fontSize: '22px',
                fontWeight: 700,
              }}
            >
              {cfg.ctaText}
            </div>
            <div style={{ color: '#64748b', fontSize: '18px' }}>
              2M+ photos processed · No account needed
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
