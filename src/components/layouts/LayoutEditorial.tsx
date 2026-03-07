/**
 * undress.cat — LayoutEditorial
 * Vibe: Flirty, seductive, conversion-focused. Built for NSFW traffic.
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import Image from 'next/image'
import { Shield, Timer, CheckCircle2, Database, Award, Zap, Eye, Heart } from 'lucide-react'

interface Props { cfg: DomainConfig }

const VALUE_PROPS = [
  { Icon: Eye,    title: 'Stunningly realistic',   desc: 'Not blurry filters — genuine AI synthesis of skin, light, and body structure that looks completely natural.' },
  { Icon: Shield, title: '100% private',            desc: 'Encrypted in transit, processed in an isolated sandbox, auto-deleted the moment your result is ready.' },
  { Icon: Heart,  title: 'Any body type',           desc: 'Our model is trained across diverse body shapes, sizes, and skin tones. Everyone looks amazing.' },
  { Icon: Timer,  title: 'Deleted in 60 seconds',  desc: 'Your photo is auto-deleted the moment processing completes. Zero data retention. Zero tracking.' },
]

const TRUST = [
  { Icon: CheckCircle2, text: 'Photos auto-deleted after processing' },
  { Icon: Database,     text: 'Zero data retention policy'           },
  { Icon: Award,        text: 'GDPR compliant'                       },
]

const HOW_IT_WORKS = [
  { num: '1', emoji: '📸', title: 'Upload any photo',  desc: 'Selfie, full-body, clothed — anyone, any angle.' },
  { num: '2', emoji: '✨', title: 'Click Undress',      desc: 'One button. Our AI handles the rest in seconds.' },
  { num: '3', emoji: '🔥', title: 'Download your result', desc: 'Photorealistic. Private. Auto-deleted after.' },
]

export default function LayoutEditorial({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs ?? []

  return (
    <div className="text-white" style={{ background: '#080810', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative px-6 md:px-14 pt-24 pb-14 max-w-6xl mx-auto overflow-hidden">
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: `radial-gradient(ellipse, ${cfg.accentHex}, transparent 70%)` }}
        />

        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-12">

          {/* Left — headline + CTA */}
          <div className="max-w-2xl">
            {/* Trust pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-6 border"
              style={{ background: `${cfg.accentHex}15`, borderColor: `${cfg.accentHex}30`, color: cfg.accentHex }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: cfg.accentHex }}
              />
              2,000,000+ photos processed
            </div>

            <h1
              className="font-black leading-[1.0] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              Undress Anyone.
              <br />
              <span style={{ color: cfg.accentHex }}>One Click.</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              The world&apos;s most realistic AI nudifier. Upload any photo and see the result in seconds.
              Free, private, no sign-up required.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <CTAButton href={cfg.ctaUrl} label="✨ Start for Free →" hex={cfg.primaryHex} size="lg" />
            </div>
            <p className="text-xs text-gray-700 mt-3">No credit card · No account · Photos auto-deleted</p>

            {/* Inline trust */}
            <div className="flex flex-col gap-1.5 mt-5">
              {TRUST.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[11px] text-gray-600">
                  <Icon size={11} style={{ color: cfg.accentHex }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — before/after preview */}
          <div className="w-full lg:w-[340px] shrink-0">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-mono mb-3">
              Exhibit A — AI result · drag to compare
            </p>
            <BeforeAfterSlider
              beforeSrc="/images/before-4.webp"
              afterSrc="/images/after-4.webp"
              aspectRatio="2/3"
              className="rounded-2xl"
            />
            <p className="text-[10px] text-gray-600 font-mono mt-2 text-center">
              generated in &lt;3s · standard nude style
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────── */}
      <section className="border-y px-6 md:px-14 py-5" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs text-gray-500">
          <span>🔒 <strong className="text-gray-300">100% private</strong></span>
          <span className="hidden md:inline text-gray-800">|</span>
          <span>⚡ <strong className="text-gray-300">Results in &lt;10s</strong></span>
          <span className="hidden md:inline text-gray-800">|</span>
          <span>🗑️ <strong className="text-gray-300">Auto-deleted after processing</strong></span>
          <span className="hidden md:inline text-gray-800">|</span>
          <span>⭐ <strong className="text-gray-300">4.8★ avg rating</strong></span>
          <span className="hidden md:inline text-gray-800">|</span>
          <span>✅ <strong className="text-gray-300">GDPR compliant</strong></span>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black mb-2">As easy as it sounds</h2>
          <p className="text-gray-600 text-sm">Three steps. Ten seconds. Done.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {HOW_IT_WORKS.map((s) => (
            <div
              key={s.num}
              className="p-7 rounded-2xl border text-center group hover:border-opacity-50 transition-colors"
              style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-full text-white text-lg font-black flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ background: `linear-gradient(135deg, ${cfg.primaryHex}, ${cfg.accentHex})` }}
              >
                {s.num}
              </div>
              <div className="text-2xl mb-2">{s.emoji}</div>
              <h3 className="font-bold text-sm mb-1 text-white">{s.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <CTAButton href={cfg.ctaUrl} label="✨ Undress a Photo Free" hex={cfg.primaryHex} size="lg" />
          <p className="text-xs text-gray-700 mt-3">No sign-up required</p>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────── */}
      <section
        id="examples"
        className="px-6 md:px-14 py-14 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[10px] uppercase tracking-widest text-gray-600 font-mono mb-2">Before / After Gallery</p>
            <h2 className="text-2xl font-black">See it in action</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { n: 5, caption: 'Natural style · Generated in 7s' },
              { n: 6, caption: 'NSFW style · Generated in 9s'   },
            ].map(({ n, caption }) => (
              <div key={n}>
                <BeforeAfterSlider
                  beforeSrc={`/images/before-${n}.webp`}
                  afterSrc={`/images/after-${n}.webp`}
                  aspectRatio="2/3"
                  className="rounded-2xl mb-3"
                />
                <p className="text-[10px] text-gray-600 font-mono">{caption}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton href={cfg.ctaUrl} label="Try it on your photo →" hex={cfg.primaryHex} size="lg" />
          </div>
        </div>
      </section>

      {/* ── EDITORIAL COPY — "Trusted by millions" ───────────────────── */}
      <section className="px-6 md:px-14 py-16 border-t max-w-6xl mx-auto" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="grid md:grid-cols-[1fr_1fr] gap-14 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-5 leading-tight">
              Trusted by millions.
              <br />
              <span className="text-gray-500 font-normal">Built differently.</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                Most AI tools in this space produce blurry, unrealistic results. We built {cfg.brandName}{' '}
                to actually work — understanding body structure, lighting, skin tone, and
                scene context to produce results that look completely natural.
              </p>
              <p>
                Privacy is non-negotiable. Your photo is encrypted in transit, processed in an
                isolated sandbox, and auto-deleted the moment your result is ready. Zero data
                retention. Zero tracking.
              </p>
              <p>
                98% of our users say the results exceeded their expectations. That&apos;s not marketing
                — that&apos;s from the satisfaction surveys we run every month.
              </p>
            </div>
          </div>

          {/* Stats + value props */}
          <div>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { value: '2M+', label: 'Photos processed' },
                { value: '98%', label: 'Satisfaction rate' },
                { value: '4.8★', label: 'Average rating' },
              ].map(s => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl border text-center"
                  style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}
                >
                  <p className="font-black text-lg" style={{ color: cfg.accentHex }}>{s.value}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {VALUE_PROPS.map(({ Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${cfg.primaryHex}20` }}
                  >
                    <Icon size={14} style={{ color: cfg.accentHex }} />
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-white mb-0.5">{title}</p>
                    <p className="text-[10px] text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAND ───────────────────────────────────────────────── */}
      <section
        className="py-8 border-t border-b"
        style={{
          borderColor: 'rgba(255,255,255,0.06)',
          background: `linear-gradient(to right, ${cfg.primaryHex}0c, transparent 70%)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-14">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="text-xs text-gray-600 font-mono mr-4">SECURITY &amp; TRUST</p>
            {TRUST.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-xs text-gray-500">
                <Icon size={12} style={{ color: cfg.accentHex }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-20 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <Image src="/cat-logo.svg" alt="" width={56} height={56} className="mx-auto mb-6 opacity-70" />
          <h2
            className="font-black mb-3 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: cfg.accentHex }}
          >
            Ready to see everything?
          </h2>
          <p className="text-gray-500 text-lg mb-8">Free. Private. No sign-up. Just upload and go.</p>
          <CTAButton href={cfg.ctaUrl} label="✨ Undress Anyone Free" hex={cfg.primaryHex} size="lg" />
          <p className="text-xs text-gray-700 mt-4">Photos auto-deleted after processing · Zero data retention · GDPR compliant</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="px-6 md:px-14 py-16 border-t max-w-6xl mx-auto" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <h2 className="text-2xl font-black mb-10">Got questions?</h2>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
