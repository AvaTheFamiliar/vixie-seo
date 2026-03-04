/**
 * undress.cat — LayoutEditorial
 * Vibe: Premium editorial magazine. Serious brand, not a sketchy tool.
 * Source pool: H6, SH8, VP4/VP5/VP7/VP2, ST1/ST3/ST7, TR1/TR4/TR6
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { Sparkles, Shield, Users, Timer, CheckCircle2, Database, Award } from 'lucide-react'

interface Props { cfg: DomainConfig }

const VALUE_PROPS = [
  { Icon: Sparkles,  title: 'Realistic results',     desc: 'Not plastic filters — genuine AI synthesis of skin, light, and body structure.' },
  { Icon: Shield,    title: '100% private',           desc: 'Processed on secure servers. Never shared, never stored beyond processing.' },
  { Icon: Users,     title: 'Any body type',          desc: 'Our model is trained across diverse body shapes and skin tones.' },
  { Icon: Timer,     title: 'Deleted in 60 seconds',  desc: 'Your photo is auto-deleted the moment processing completes.' },
]

const STATS = [
  { value: '2M+',  label: 'Photos processed'  },
  { value: '98%',  label: 'Satisfaction rate' },
  { value: '4.8★', label: 'Average rating'    },
]

const TRUST = [
  { Icon: CheckCircle2, text: 'Photos auto-deleted after processing' },
  { Icon: Database,     text: 'Zero data retention policy'           },
  { Icon: Award,        text: 'GDPR compliant'                       },
]

export default function LayoutEditorial({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs ?? []

  return (
    <div className="bg-[#05060f] text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── MASTHEAD ─────────────────────────────────────────────────── */}
      <section className="border-b border-white/8 px-6 md:px-14 pt-20 pb-12 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">

          {/* Pull stat + headline */}
          <div className="max-w-3xl">
            {/* Big pull stat — dominates the masthead */}
            <div className="flex items-baseline gap-5 mb-8">
              <span
                className="font-black tabular-nums leading-none"
                style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', color: cfg.accentHex }}
              >
                2M+
              </span>
              <div>
                <p className="text-gray-400 text-base leading-snug max-w-[200px]">
                  people have trusted us with their photos
                </p>
              </div>
            </div>

            {/* H6: "The internet's most trusted nudify tool" */}
            <h1
              className="font-black leading-[1.0] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}
            >
              The internet&apos;s most trusted
              <br />
              <span style={{ color: cfg.accentHex }}>nudify tool</span>
            </h1>

            {/* SH8 */}
            <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
              Join 2M+ who&apos;ve tried the world&apos;s best AI nudifier.
            </p>
          </div>

          {/* CTA block */}
          <div className="flex flex-col gap-3 shrink-0">
            <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
            <p className="text-xs text-gray-600 text-center">Free · Private · No sign-up</p>
            {/* Inline trust */}
            <div className="flex flex-col gap-1.5 mt-1">
              {TRUST.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[10px] text-gray-600">
                  <Icon size={11} style={{ color: cfg.accentHex }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL SPREAD — slider left, copy right ─────────────────── */}
      <section className="px-6 md:px-14 py-14 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_380px] gap-12 items-start">

          {/* Left — "Exhibit A" — framed, captioned */}
          <div>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-mono mb-3">
              Exhibit A — AI result · drag to compare
            </p>
            <BeforeAfterSlider
              beforeSrc="/images/before-4.webp"
              afterSrc="/images/after-4.webp"
              aspectRatio="2/3"
              className="rounded-2xl"
            />
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/8" />
              <p className="text-[10px] text-gray-600 font-mono whitespace-nowrap">
                generated in &lt;3s · standard nude style
              </p>
              <div className="h-px flex-1 bg-white/8" />
            </div>
          </div>

          {/* Right — editorial copy + stats */}
          <div className="pt-6">
            <h2 className="text-2xl font-black mb-5 leading-tight">
              Trusted by millions.
              <br />
              <span className="text-gray-500 font-normal">Built differently.</span>
            </h2>

            <div className="space-y-4 text-gray-400 text-sm leading-relaxed mb-8">
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

            {/* Stat grid */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map(s => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl border border-white/8 bg-white/[0.02] text-center"
                >
                  <p className="font-black text-lg" style={{ color: cfg.accentHex }}>{s.value}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SIDE GALLERY — editorial spread ─────────────────────────── */}
      <section id="examples" className="px-6 md:px-14 py-10 border-t border-white/5 max-w-6xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-widest text-gray-600 font-mono mb-8">
          Before / After Gallery
        </h2>
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
          <CTAButton href={cfg.ctaUrl} label="Undress a photo free" hex={cfg.primaryHex} size="lg" />
        </div>
      </section>

      {/* ── VALUE PROPS — editorial layout ──────────────────────────── */}
      <section className="px-6 md:px-14 py-14 border-t border-white/5 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[220px_1fr] gap-12">
          <div>
            <h2 className="text-xl font-black mb-2">{cfg.brandName}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{cfg.tagline}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {VALUE_PROPS.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${cfg.primaryHex}20` }}
                >
                  <Icon size={15} style={{ color: cfg.accentHex }} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white mb-1">{title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST FOOTER BAND ────────────────────────────────────────── */}
      <section
        className="py-10 border-t border-white/8"
        style={{ background: `linear-gradient(to right, ${cfg.primaryHex}0c, transparent 70%)` }}
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

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black mb-1.5">Ready to try?</h2>
            <p className="text-gray-500 text-sm">
              5 free credits every day — no credit card, no account, no risk.
            </p>
          </div>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="px-6 md:px-14 py-16 border-t border-white/5 max-w-6xl mx-auto">
          <h2 className="text-2xl font-black mb-10">Frequently asked</h2>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
