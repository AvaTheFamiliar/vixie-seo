import { ImageResponse } from 'next/og'
import { getDomainConfigFromEnv } from '@/lib/getDomainConfig'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const cfg = getDomainConfigFromEnv()
  const letter = cfg.brandName.replace(/[^a-zA-Z]/g, '')[0]?.toUpperCase() ?? 'N'

  return new ImageResponse(
    (
      <div
        style={{
          background: cfg.primaryHex,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: 900,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.5px',
          }}
        >
          {letter}
        </span>
      </div>
    ),
    { ...size }
  )
}
