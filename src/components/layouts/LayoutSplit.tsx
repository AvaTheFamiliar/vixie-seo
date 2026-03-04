/**
 * nudify.im — Brutalist split. Violent violet, massive stacked type, slider dominates right.
 * Data-readout stats, shimmer CTA, zero softness.
 */
'use client'
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

interface Props { cfg: DomainConfig }

export default function LayoutSplit({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs.slice(0, 6) ?? []

  return (
    <div className="bg-[#05040d] text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="min-h-screen grid lg:grid-cols-[1fr_520px] relative">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-24 relative z-10">
          {/* Glow blob */}
          <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: `${cfg.primaryHex}20` }} />

          <div className="relative">
            <p className="text-xs font-black tracking-[0.3em] uppercase mb-8"
              style={{ color: cfg.accentHex }}>
              ■ AI NUDIFIER &nbsp;·&nbsp; FREE &nbsp;·&nbsp; INSTANT
            </p>

            <h1 className="font-black leading-[0.88] tracking-tight mb-8"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}>
              {cfg.heroHeadline.split(' ').map((w, i) => (
                <span key={i} className={`block ${i % 2 === 1 ? 'pl-4 md:pl-8' : ''}`}
                  style={i === 1 ? { WebkitTextStroke: `2px ${cfg.accentHex}`, color: 'transparent' } : {}}>
                  {w}
                </span>
              ))}
            </h1>

            <p className="text-gray-500 text-base max-w-sm mb-10 leading-relaxed">
              {cfg.heroSubheadline}
            </p>

            {/* Shimmer CTA */}
            <div className="relative inline-block mb-12">
              <div className="absolute inset-0 rounded-xl blur-xl opacity-60 animate-pulse"
                style={{ background: `linear-gradient(90deg, ${cfg.primaryHex}, ${cfg.accentHex})` }} />
              <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
            </div>

            {/* Stats — data readouts */}
            <div className="grid grid-cols-2 gap-px border border-white/10">
              {cfg.stats.map((s, i) => (
                <div key={i} className="p-4 border-white/5" style={{ borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <p className="font-black text-xl font-mono" style={{ color: cfg.accentHex }}>{s.value}</p>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — slider full height */}
        <div className="relative min-h-[60vh] lg:min-h-0 flex">
          <BeforeAfterSlider
            beforeSrc="/images/before-3.webp"
            afterSrc="/images/after-3.webp"
            aspectRatio="2/3"
            className="w-full"
          />
          {/* Left edge fade into bg */}
          <div className="absolute inset-y-0 left-0 w-16 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to right, #05040d, transparent)' }} />
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────── */}
      <section id="examples" className="py-24 px-8 md:px-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: cfg.accentHex }}>Results</p>
            <h2 className="text-4xl font-black">Before / After</h2>
          </div>
          <p className="text-xs text-gray-600 hidden md:block">← drag to reveal</p>
        </div>
        <BeforeAfterSlider beforeSrc="/images/before-5.webp" afterSrc="/images/after-5.webp" aspectRatio="2/3" className="mb-3" />
        <div className="grid grid-cols-2 gap-3">
          {[4,6].map(n => (
            <BeforeAfterSlider key={n} beforeSrc={`/images/before-${n}.webp`} afterSrc={`/images/after-${n}.webp`} aspectRatio="2/3" />
          ))}
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16 border-t border-white/5">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-12" style={{ color: cfg.accentHex }}>
          WHY {cfg.brandName.toUpperCase()}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {cfg.features.map(f => (
            <div key={f.title} className="p-8 bg-[#05040d] hover:bg-white/[0.03] transition group">
              <span className="text-2xl block mb-4">{f.icon}</span>
              <h3 className="font-black text-sm uppercase tracking-wider mb-2 group-hover:text-white transition" style={{ color: cfg.accentHex }}>{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${cfg.primaryHex}15 0%, transparent 60%)` }} />
        <div className="relative max-w-xl">
          <h2 className="text-5xl font-black mb-4 leading-tight">Free to<br/>Start.</h2>
          <p className="text-gray-500 mb-8">5 credits every day. No card. No sign-up.</p>
          <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-20 px-8 md:px-16 border-t border-white/5">
          <h2 className="text-2xl font-black mb-10">FAQ</h2>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
