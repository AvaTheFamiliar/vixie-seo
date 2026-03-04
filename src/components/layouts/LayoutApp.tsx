/**
 * nudie.app — LayoutApp
 * Vibe: Clean product page, Linear/Vercel aesthetic. Tech-focused. Feels like a real app.
 * Source pool: H9, SH9, VP1/VP3/VP6/VP10, ST2/ST6/ST10, TR2/TR5/TR9
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { Upload, Zap, CreditCard, RefreshCw, Lock, Eye, Activity, CheckCircle, ArrowUpRight } from 'lucide-react'

interface Props { cfg: DomainConfig }

const VALUE_PROPS = [
  { Icon: Upload,     title: 'No account needed',       desc: 'Upload and go — no sign-up, no friction.' },
  { Icon: Zap,        title: 'Results in under 3s',      desc: 'AI-powered inference on A100 80GB GPUs.' },
  { Icon: CreditCard, title: 'Free to try',              desc: 'No credit card required. 5 free credits/day.' },
  { Icon: RefreshCw,  title: 'Retrained weekly',         desc: 'State-of-the-art AI, always improving.' },
]

const STATUS_ITEMS = [
  { key: 'avg_time',    label: 'avg_time',   value: '< 3 seconds',  ok: true  },
  { key: 'active_now',  label: 'active_now', value: '50K+ users',   ok: true  },
  { key: 'uptime',      label: 'uptime',     value: '99.9%',        ok: true  },
]

const TRUST = [
  { Icon: Lock,        text: 'End-to-end HTTPS encryption'              },
  { Icon: Eye,         text: 'Anonymous processing — we never see who you are' },
  { Icon: Activity,    text: 'Open about our infrastructure'            },
]

const GRID_IMAGES = [2, 3, 4, 5]

export default function LayoutApp({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs ?? []

  return (
    <div className="bg-[#020c08] text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pt-28 pb-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left — product copy */}
          <div>
            {/* Status indicator */}
            <div className="flex items-center gap-2.5 mb-8">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: cfg.accentHex }}
              />
              <span className="text-xs font-mono text-gray-500">
                v2.1 · running on A100 80GB · all systems normal
              </span>
            </div>

            {/* H9: "One-click AI undress" */}
            <h1
              className="font-black mb-5 leading-[1.02] tracking-tight"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
            >
              One-click
              <br />
              <span style={{ color: cfg.accentHex }}>AI undress</span>
            </h1>

            {/* SH9 */}
            <p className="text-gray-400 mb-8 leading-relaxed text-base max-w-md">
              Upload once, results instantly. Auto-deleted, no traces.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
              <a
                href="#demo"
                className="px-5 py-3.5 rounded-xl border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/20 transition font-medium flex items-center gap-1.5"
              >
                See examples <ArrowUpRight size={14} />
              </a>
            </div>

            {/* System status bar — compact "status page" feel */}
            <div className="border border-white/10 rounded-xl overflow-hidden font-mono text-xs">
              {/* Title bar */}
              <div className="px-4 py-2.5 border-b border-white/5 flex items-center gap-2 bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="ml-3 text-gray-600">nudie.app — system status</span>
              </div>

              {/* Status rows */}
              <div className="divide-y divide-white/5 bg-black/20">
                {STATUS_ITEMS.map(item => (
                  <div key={item.key} className="px-4 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle
                        size={12}
                        className="flex-shrink-0"
                        style={{ color: cfg.accentHex }}
                      />
                      <span className="text-gray-500">{item.label}</span>
                    </div>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — hero slider */}
          <div>
            <BeforeAfterSlider
              beforeSrc="/images/before-6.webp"
              afterSrc="/images/after-6.webp"
              aspectRatio="2/3"
              className="rounded-2xl shadow-2xl"
            />
            <p className="text-[10px] text-gray-600 text-center mt-3 font-mono">
              ← drag to reveal AI result
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-[10px] font-black uppercase tracking-widest mb-8 font-mono"
            style={{ color: cfg.accentHex }}
          >
            // features
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {VALUE_PROPS.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all cursor-default"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-colors"
                  style={{ background: `${cfg.primaryHex}20` }}
                >
                  <Icon size={16} style={{ color: cfg.accentHex }} />
                </div>
                <p className="font-semibold text-sm text-white mb-1.5 group-hover:text-white transition">
                  {title}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO GRID ─────────────────────────────────────────────────── */}
      <section id="demo" className="px-6 md:px-12 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p
              className="text-sm font-black font-mono"
              style={{ color: cfg.accentHex }}
            >
              // results
            </p>
            <span className="text-[10px] text-gray-600 font-mono">
              generated in &lt;3s each · drag to compare
            </span>
          </div>

          {/* Panel frame */}
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-black/20 p-3">
            <div className="grid grid-cols-2 gap-3">
              {GRID_IMAGES.map(n => (
                <BeforeAfterSlider
                  key={n}
                  beforeSrc={`/images/before-${n}.webp`}
                  afterSrc={`/images/after-${n}.webp`}
                  aspectRatio="2/3"
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
            <p className="text-xs text-gray-600 mt-3 font-mono">
              free · no account · auto-deleted
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST BAND ──────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {TRUST.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.015]"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cfg.primaryHex}18` }}
                >
                  <Icon size={14} style={{ color: cfg.accentHex }} />
                </div>
                <p className="text-xs text-gray-400 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black mb-2">Open the app free.</h2>
            <p className="text-gray-500 text-sm">
              5 free credits daily. No subscription. No credit card.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <CTAButton href={cfg.ctaUrl} label="Try Free" hex={cfg.primaryHex} size="lg" />
            <p className="text-[10px] text-gray-600 font-mono">no account required</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="px-6 md:px-12 py-16 border-t border-white/5">
          <div className="max-w-3xl">
            <p
              className="text-sm font-black font-mono mb-8"
              style={{ color: cfg.accentHex }}
            >
              // faq
            </p>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
