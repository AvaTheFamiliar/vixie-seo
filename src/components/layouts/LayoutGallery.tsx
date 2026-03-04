/**
 * nudify.pics — LayoutGallery
 * Vibe: Gallery-first, results-speak-for-themselves. Minimal text, maximum before/afters.
 * Source pool: H5, SH3, VP2/VP3/VP9/VP10, ST1/ST5/ST8, TR2/TR7/TR8
 */
import Image from 'next/image'
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { Timer, Zap, ImageOff, RefreshCw, Lock, Server, Share2 } from 'lucide-react'

interface Props { cfg: DomainConfig }

const VALUE_PROPS = [
  { Icon: Timer,    text: 'Your photo is deleted in 60 seconds'        },
  { Icon: Zap,      text: 'AI-powered — results in under 3 seconds'    },
  { Icon: ImageOff, text: 'No watermarks on your results'              },
  { Icon: RefreshCw,text: 'State-of-the-art AI, retrained weekly'      },
]

const STATS = [
  { value: '2M+',   label: 'Photos processed'  },
  { value: '150+',  label: 'Countries served'  },
  { value: '500K+', label: 'This week'          },
]

const TRUST = [
  { Icon: Lock,   text: 'End-to-end HTTPS encryption'    },
  { Icon: Server, text: 'Processed in isolated sandboxes' },
  { Icon: Share2, text: 'No third-party data sharing'    },
]

/* Thumbnails where CSS hover reveals the "after" image */
const THUMBNAILS = [1, 2, 4, 6]

export default function LayoutGallery({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs ?? []

  return (
    <div className="bg-[#0a0800] text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── COMPACT HEADLINE STRIP ──────────────────────────────────── */}
      <section className="pt-20 pb-5 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            {/* H5 */}
            <h1
              className="font-black leading-[0.88] tracking-tighter mb-3"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', color: 'white' }}
            >
              From clothed to nude
              <br />
              <span style={{ color: cfg.accentHex }}>in 3 seconds</span>
            </h1>
            {/* SH3 */}
            <p className="text-gray-500 text-sm max-w-sm">
              The most realistic AI undress tool available.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="md" />
            <p className="text-[10px] text-gray-600 font-mono">
              {STATS.map((s, i) => (
                <span key={s.label}>
                  {i > 0 && ' · '}
                  <strong style={{ color: cfg.accentHex }}>{s.value}</strong> {s.label}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── HERO GALLERY — 2 large sliders ──────────────────────────── */}
      <section className="px-4 md:px-8 pb-3">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] text-gray-600 mb-2 text-right font-mono">← drag sliders to compare</p>
          <div className="grid grid-cols-2 gap-2">
            <BeforeAfterSlider
              beforeSrc="/images/before-3.webp"
              afterSrc="/images/after-3.webp"
              aspectRatio="2/3"
              className="rounded-xl"
            />
            <BeforeAfterSlider
              beforeSrc="/images/before-5.webp"
              afterSrc="/images/after-5.webp"
              aspectRatio="2/3"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ── THUMBNAIL STRIP — hover reveals after ───────────────────── */}
      <section className="px-4 md:px-8 pb-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] text-gray-600 mb-2 font-mono">hover to reveal AI result →</p>
          <div className="grid grid-cols-4 gap-2">
            {THUMBNAILS.map(n => (
              <div
                key={n}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                style={{ aspectRatio: '2/3' }}
              >
                {/* Before */}
                <Image
                  src={`/images/before-${n}.webp`}
                  alt={`Before ${n}`}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  sizes="(max-width: 768px) 25vw, 12vw"
                />
                {/* After — revealed on hover */}
                <Image
                  src={`/images/after-${n}.webp`}
                  alt={`After (AI) ${n}`}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  sizes="(max-width: 768px) 25vw, 12vw"
                />
                {/* Before label */}
                <span className="absolute bottom-2 left-2 text-[9px] font-bold uppercase tracking-wider bg-black/60 text-white px-1.5 py-0.5 rounded group-hover:opacity-0 transition-opacity">
                  Before
                </span>
                {/* After label */}
                <span className="absolute bottom-2 right-2 text-[9px] font-bold uppercase tracking-wider bg-black/60 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  After
                </span>
                {/* Hover hint overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BELOW GALLERY ───────────────────────────────────────── */}
      <section className="px-4 md:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <CTAButton href={cfg.ctaUrl} label="Generate yours — free" hex={cfg.primaryHex} size="lg" />
          <p className="text-xs text-gray-600 mt-3">No sign-up · No watermarks · Deleted in 60s</p>
        </div>
      </section>

      {/* ── STATS BAND ──────────────────────────────────────────────── */}
      <section className="py-8 border-y border-white/5" style={{ background: `${cfg.primaryHex}06` }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/8">
            {STATS.map(s => (
              <div key={s.label} className="text-center py-2 px-4">
                <p className="font-black text-2xl md:text-3xl tabular-nums" style={{ color: cfg.accentHex }}>
                  {s.value}
                </p>
                <p className="text-[10px] text-gray-600 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPS ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-black uppercase tracking-widest mb-8" style={{ color: cfg.accentHex }}>
            Why {cfg.brandName}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {VALUE_PROPS.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition"
              >
                <Icon size={15} className="flex-shrink-0 mt-0.5" style={{ color: cfg.accentHex }} />
                <p className="text-xs text-gray-400 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="py-12 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black mb-8">How to generate nude AI pics</h2>
          <div className="space-y-3">
            {[
              { n: '01', t: 'Upload',      d: 'Any JPG, PNG or WebP photo. No account needed.' },
              { n: '02', t: 'AI processes', d: 'Results in under 3 seconds on dedicated servers.' },
              { n: '03', t: 'Download',    d: 'No watermarks. Photo auto-deleted in 60 seconds.' },
            ].map(step => (
              <div
                key={step.n}
                className="flex items-center gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.03] transition"
              >
                <span
                  className="text-2xl font-black font-mono tabular-nums opacity-25 flex-shrink-0"
                  style={{ color: cfg.accentHex }}
                >
                  {step.n}
                </span>
                <div>
                  <p className="font-semibold text-sm text-white">{step.t}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAND ──────────────────────────────────────────────── */}
      <section className="py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {TRUST.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-xs text-gray-500">
                <Icon size={13} style={{ color: cfg.accentHex }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-16 px-4 md:px-8 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-black mb-8">FAQ</h2>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
