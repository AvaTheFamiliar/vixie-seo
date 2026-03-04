/**
 * nudify.im — LayoutSplit
 * Vibe: Aggressive, conversion-focused, brutalist energy.
 * Split hero: big copy left, slider right.
 * Source pool: H7, SH4, VP3/VP1/VP4/VP9, ST1/ST2/ST6, TR1/TR3/TR5
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { Check, Zap, Upload, Sparkles, ImageOff, ChevronRight, ArrowRight } from 'lucide-react'

interface Props { cfg: DomainConfig }

const VALUE_PROPS = [
  { Icon: Zap,       text: 'AI-powered — results in under 3 seconds' },
  { Icon: Upload,    text: 'No account needed — upload and go' },
  { Icon: Sparkles,  text: 'Realistic results, not plastic filters' },
  { Icon: ImageOff,  text: 'No watermarks on your results' },
]

const STATS = [
  { value: '2M+',  label: 'Photos processed' },
  { value: '<3s',  label: 'Average time'     },
  { value: '50K+', label: 'Users today'      },
]

const TRUST = [
  'Photos auto-deleted after processing',
  'No logs, no tracking, no BS',
  'Anonymous processing — we never see who you are',
]

export default function LayoutSplit({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs ?? []

  return (
    <div className="bg-[#05040d] text-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="min-h-screen max-w-[1600px] mx-auto grid lg:grid-cols-[54%_46%]">

        {/* Left — copy */}
        <div className="relative flex flex-col justify-center px-8 md:px-14 lg:px-20 py-28 overflow-hidden">
          {/* Blob glow */}
          <div
            className="absolute -left-40 top-1/3 w-[480px] h-[480px] rounded-full pointer-events-none blur-[120px]"
            style={{ background: `${cfg.primaryHex}18` }}
          />

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-px opacity-70" style={{ background: cfg.accentHex }} />
              <p className="text-[10px] font-black tracking-[0.45em] uppercase" style={{ color: cfg.accentHex }}>
                AI NUDIFIER · FREE · INSTANT
              </p>
            </div>

            {/* H7: "Undress any photo. Instantly." */}
            <h1
              className="font-black leading-[0.82] tracking-tighter mb-8"
              style={{ fontSize: 'clamp(3.6rem, 9.5vw, 7.8rem)' }}
            >
              <span className="block">Undress</span>
              <span
                className="block"
                style={{ WebkitTextStroke: `2px ${cfg.accentHex}`, color: 'transparent' }}
              >
                any photo.
              </span>
              <span className="block">Instantly.</span>
            </h1>

            {/* SH4 */}
            <p className="text-gray-500 text-sm md:text-base max-w-[400px] mb-10 leading-relaxed">
              Professional-grade AI. No watermarks. No account. Just results.
            </p>

            {/* Glowing pulsing CTA */}
            <div className="relative inline-block mb-12">
              <div
                className="absolute -inset-2 rounded-2xl blur-2xl opacity-50 animate-pulse pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${cfg.primaryHex}, ${cfg.accentHex})` }}
              />
              <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
            </div>

            {/* Stats — giant monospace data readouts */}
            <div className="grid grid-cols-3 border border-white/10 rounded-xl overflow-hidden mb-12">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-4 py-5 ${i < STATS.length - 1 ? 'border-r border-white/10' : ''}`}
                >
                  <p
                    className="font-black text-2xl md:text-3xl font-mono tabular-nums leading-none"
                    style={{ color: cfg.accentHex }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Trust signals — tight inline row with checkmarks */}
            <div className="flex flex-col gap-2.5">
              {TRUST.map(t => (
                <div key={t} className="flex items-center gap-2.5 text-xs text-gray-500">
                  <Check
                    size={12}
                    className="flex-shrink-0"
                    style={{ color: cfg.accentHex }}
                    strokeWidth={3}
                  />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — slider, full height */}
        <div className="relative min-h-[60vh] lg:min-h-0">
          <BeforeAfterSlider
            beforeSrc="/images/before-3.webp"
            afterSrc="/images/after-3.webp"
            aspectRatio="2/3"
            className="w-full h-full"
          />
          {/* Left edge fade into bg */}
          <div
            className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to right, #05040d, transparent)' }}
          />
        </div>
      </section>

      {/* ── VALUE PROPS ─────────────────────────────────────────────── */}
      <section className="py-14 px-8 md:px-16 border-t border-white/5 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {VALUE_PROPS.map(({ Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-3 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all group"
            >
              <Icon
                size={16}
                className="flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                style={{ color: cfg.accentHex }}
              />
              <p className="text-xs text-gray-400 leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────── */}
      <section id="examples" className="py-24 px-8 md:px-16 max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: cfg.accentHex }}>
              Real Results
            </p>
            <h2 className="text-4xl md:text-5xl font-black">Before &amp; After</h2>
          </div>
          <p className="text-xs text-gray-600 hidden md:block font-mono">← drag to reveal</p>
        </div>

        {/* Full-width hero slider */}
        <BeforeAfterSlider
          beforeSrc="/images/before-5.webp"
          afterSrc="/images/after-5.webp"
          aspectRatio="2/3"
          className="mb-3 rounded-xl"
        />

        {/* Secondary row */}
        <div className="grid grid-cols-2 gap-3">
          <BeforeAfterSlider
            beforeSrc="/images/before-1.webp"
            afterSrc="/images/after-1.webp"
            aspectRatio="2/3"
            className="rounded-xl"
          />
          {/* CTA panel */}
          <div
            className="relative flex items-center justify-center rounded-xl border border-white/10 overflow-hidden"
            style={{ aspectRatio: '2/3', background: `${cfg.primaryHex}0a` }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${cfg.primaryHex}18, transparent)` }}
            />
            <div className="relative text-center px-6">
              <p className="font-black text-5xl md:text-7xl font-mono tabular-nums mb-2" style={{ color: cfg.accentHex }}>
                2M+
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-8">Photos processed</p>
              <CTAButton href={cfg.ctaUrl} label="Try Free" hex={cfg.primaryHex} size="sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 border-t border-white/5 relative overflow-hidden max-w-[1600px] mx-auto">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 90% at 0% 60%, ${cfg.primaryHex}10, transparent)` }}
        />
        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-black leading-[0.9] tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)' }}
            >
              Free to<br />start.
              <span
                className="block"
                style={{ WebkitTextStroke: `1px ${cfg.accentHex}`, color: 'transparent' }}
              >
                Always.
              </span>
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-sm">
              5 credits every day. No card. No sign-up. No compromises.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
              <a
                href="#examples"
                className="px-6 py-3 rounded-xl border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/20 transition flex items-center gap-1.5"
              >
                See examples <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Terminal readout panel */}
          <div className="border border-white/8 rounded-2xl overflow-hidden font-mono text-sm bg-black/30">
            <div className="px-4 py-2.5 border-b border-white/5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 text-[10px] text-gray-600">nudify.im status</span>
            </div>
            <div className="p-5 space-y-2.5">
              <p><span style={{ color: cfg.accentHex }}>$ </span><span className="text-white">status</span></p>
              <p><span className="text-gray-600">  system</span>    <span className="text-green-400">online</span></p>
              <p><span className="text-gray-600">  queue</span>     <span className="text-white">{'<5s wait'}</span></p>
              <p><span className="text-gray-600">  cost</span>      <span className="text-white">free</span></p>
              <p><span className="text-gray-600">  account</span>   <span className="text-white">not required</span></p>
              <p><span style={{ color: cfg.accentHex }}>$ </span><span className="text-gray-600 animate-pulse">█</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-20 px-8 md:px-16 border-t border-white/5 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-6 h-px opacity-40" style={{ background: cfg.accentHex }} />
            <h2 className="text-2xl font-black">FAQ</h2>
          </div>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}

      {/* Bottom CTA strip */}
      <section className="py-6 px-8 md:px-16 border-t border-white/5 max-w-[1600px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">{cfg.brandName} — {cfg.tagline}</p>
          <a
            href={cfg.ctaUrl}
            className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition"
            style={{ color: cfg.accentHex }}
            target="_blank"
            rel="noopener"
          >
            Open app <ChevronRight size={12} />
          </a>
        </div>
      </section>
    </div>
  )
}
