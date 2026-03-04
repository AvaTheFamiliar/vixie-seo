/**
 * nudify.my — LayoutCentered
 * Vibe: Personal, intimate, privacy-forward. Centered editorial. Trustworthy not seedy.
 * Source pool: H8, SH6, VP5/VP6/VP7/VP8, ST3/ST4/ST7, TR4/TR6/TR10
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { Shield, CreditCard, Users, Smartphone, Star, Database, CheckCircle2, Lock, Globe } from 'lucide-react'

interface Props { cfg: DomainConfig }

const VALUE_PROPS = [
  { Icon: Shield,      title: '100% Private',           desc: 'Processed on secure servers — never exposed.' },
  { Icon: CreditCard,  title: 'Free to Try',            desc: 'No credit card required, ever.' },
  { Icon: Users,       title: 'Any Body Type',          desc: 'Our AI adapts to every shape and size.' },
  { Icon: Smartphone,  title: 'Mobile Friendly',        desc: 'No app to install — works in any browser.' },
]

const STATS = [
  { Icon: Star,     value: '98%',         label: 'Satisfaction rate'       },
  { Icon: Database, value: '0 bytes',     label: 'Data stored after 60s'  },
  { Icon: Star,     value: '4.8★',        label: 'Average user rating'    },
]

const TRUST = [
  { Icon: Lock,         text: 'Zero data retention policy'       },
  { Icon: CheckCircle2, text: 'GDPR compliant'                   },
  { Icon: Globe,        text: 'Trusted by 50,000+ people today' },
]

export default function LayoutCentered({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs ?? []

  return (
    <div className="bg-[#0d0608] text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-12 px-6 text-center overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 55% at 50% 0%, ${cfg.primaryHex}20, transparent)` }}
        />

        <div className="relative max-w-2xl mx-auto">
          {/* Privacy badge */}
          <span
            className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full mb-8 font-semibold border"
            style={{
              borderColor: `${cfg.primaryHex}40`,
              color: cfg.accentHex,
              background: `${cfg.primaryHex}10`,
            }}
          >
            <Shield size={12} />
            Privacy-first · Free · No sign-up
          </span>

          {/* H8: "AI that respects your privacy" */}
          <h1
            className="font-black mb-6 leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)' }}
          >
            AI that respects
            <br />
            <span style={{ color: cfg.accentHex }}>your privacy</span>
          </h1>

          {/* SH6 */}
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            Privacy-first. Results-focused. No bullshit.
          </p>

          {/* Soft CTA */}
          <CTAButton
            href={cfg.ctaUrl}
            label="Try it free — no account needed"
            hex={cfg.primaryHex}
            size="lg"
          />

          {/* Privacy stats with visual emphasis */}
          <div className="flex justify-center flex-wrap gap-6 mt-12">
            {STATS.map(({ Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-1">
                  <Icon size={14} style={{ color: cfg.accentHex }} />
                </div>
                <p className="text-xl font-black" style={{ color: cfg.accentHex }}>{value}</p>
                <p className="text-xs text-gray-600 mt-0.5 max-w-[100px]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO SLIDER — centered, vignette ─────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="max-w-sm mx-auto relative">
          <div
            className="absolute inset-y-0 left-0 w-10 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0d0608, transparent)' }}
          />
          <div
            className="absolute inset-y-0 right-0 w-10 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0d0608, transparent)' }}
          />
          <BeforeAfterSlider
            beforeSrc="/images/before-2.webp"
            afterSrc="/images/after-2.webp"
            aspectRatio="2/3"
            className="rounded-3xl shadow-2xl"
          />
          <p className="text-xs text-gray-600 text-center mt-3">← drag to compare</p>
        </div>
      </section>

      {/* ── VALUE PROPS — glassmorphism cards ───────────────────────── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-3">Built around your privacy</h2>
          <p className="text-center text-gray-500 text-sm mb-12 max-w-md mx-auto leading-relaxed">
            Every feature is designed with your security in mind — from the first upload to the final delete.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {VALUE_PROPS.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-6 rounded-2xl border transition-all hover:border-white/15"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cfg.primaryHex}20` }}
                >
                  <Icon size={16} style={{ color: cfg.accentHex }} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white mb-1">{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAND — highlighted boxes ──────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="grid sm:grid-cols-3 gap-3 rounded-2xl overflow-hidden border border-white/8 p-6"
            style={{ background: `${cfg.primaryHex}08` }}
          >
            {TRUST.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-3 py-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cfg.primaryHex}25` }}
                >
                  <Icon size={14} style={{ color: cfg.accentHex }} />
                </div>
                <p className="text-xs text-gray-400 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-10">Three steps. Ten seconds. Done.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Upload',     d: 'Any JPG, PNG or WebP. No sign-up.' },
              { n: '02', t: 'Process',    d: 'AI runs in under 3 seconds on secure servers.' },
              { n: '03', t: 'Your result',d: 'Auto-deleted after 60s. Truly private.' },
            ].map(step => (
              <div key={step.n} className="flex flex-col items-center text-center">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black mb-4 border-2"
                  style={{ borderColor: cfg.accentHex, color: cfg.accentHex }}
                >
                  {step.n}
                </div>
                <p className="font-semibold text-sm text-white mb-1">{step.t}</p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[140px]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY — proof below the fold ──────────────────────────── */}
      <section id="examples" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-2">See the results</h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            Real AI output · drag the sliders to compare
          </p>
          <BeforeAfterSlider
            beforeSrc="/images/before-4.webp"
            afterSrc="/images/after-4.webp"
            aspectRatio="2/3"
            className="mb-4 rounded-2xl"
          />
          <div className="grid grid-cols-2 gap-4">
            <BeforeAfterSlider
              beforeSrc="/images/before-6.webp"
              afterSrc="/images/after-6.webp"
              aspectRatio="2/3"
              className="rounded-xl"
            />
            {/* Stat callout */}
            <div
              className="rounded-xl border border-white/8 flex flex-col items-center justify-center p-6 text-center"
              style={{ aspectRatio: '2/3', background: `${cfg.primaryHex}0a` }}
            >
              <Shield size={28} className="mb-4" style={{ color: cfg.accentHex }} />
              <p className="font-black text-3xl mb-1" style={{ color: cfg.accentHex }}>98%</p>
              <p className="text-xs text-gray-500 leading-snug mb-6">satisfaction rate</p>
              <p className="font-black text-2xl mb-1" style={{ color: cfg.accentHex }}>4.8★</p>
              <p className="text-xs text-gray-500">average rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 100%, ${cfg.primaryHex}18, transparent)`,
        }}
      >
        <div className="max-w-lg mx-auto">
          <h2 className="text-4xl font-black mb-4 leading-tight">
            Try it free today.
            <br />
            <span className="text-gray-500 text-2xl font-medium">No strings attached.</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">
            5 free results every day. No subscription, no credit card, no commitment.
            Your photos stay private — always.
          </p>
          <CTAButton
            href={cfg.ctaUrl}
            label="Try it free — no account needed"
            hex={cfg.primaryHex}
            size="lg"
          />
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-center mb-10">Common questions</h2>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
