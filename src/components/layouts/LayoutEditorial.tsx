/**
 * undress.cat — LayoutEditorial
 * Vibe: Flirty, seductive, conversion-focused. Built for NSFW traffic.
 * Value props: Undress with one click · Private · Fast
 */
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import Image from 'next/image'

interface Props { cfg: DomainConfig }

const VALUE_PROPS = [
  {
    emoji: '👆',
    title: 'Undress with one click',
    desc: 'Upload any photo, hit undress. Our AI does the rest — no settings, no fuss, just results.',
  },
  {
    emoji: '🔒',
    title: 'Private',
    desc: 'Processed on our servers, never shared. Your photos are yours alone.',
  },
  {
    emoji: '⚡',
    title: 'Fast',
    desc: 'Results in under 10 seconds on dedicated GPU hardware. No waiting around.',
  },
]

const STEPS = [
  { num: '1', emoji: '📸', title: 'Upload any photo',   desc: 'Anyone, any angle, fully clothed.' },
  { num: '2', emoji: '✨', title: 'Click Undress',       desc: 'One button. That\'s it.' },
  { num: '3', emoji: '🔥', title: 'Download your result', desc: 'Photorealistic. In seconds.' },
]

export default function LayoutEditorial({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs ?? []

  return (
    <div className="text-white" style={{ background: '#080810', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative px-6 md:px-14 pt-24 pb-14 max-w-6xl mx-auto overflow-hidden">
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: `radial-gradient(ellipse, ${cfg.accentHex}, transparent 70%)` }}
        />

        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-12">

          {/* Left — headline + CTA */}
          <div className="max-w-2xl">
            {/* Pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-6 border"
              style={{ background: `${cfg.accentHex}15`, borderColor: `${cfg.accentHex}30`, color: cfg.accentHex }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: cfg.accentHex }} />
              2,000,000+ photos undressed
            </div>

            <h1
              className="font-black leading-none tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              Undress Anyone.
              <br />
              <span style={{ color: cfg.accentHex }}>One Click.</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              The world&apos;s most realistic AI nudifier. Upload any photo and see the result in seconds.
              Free to start — no account required.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
              <a
                href={cfg.ctaUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 hover:scale-105 shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${cfg.primaryHex}, ${cfg.accentHex})`,
                  boxShadow: `0 0 40px ${cfg.primaryHex}40`,
                }}
              >
                ✨ Start for Free
                <span style={{ opacity: 0.7 }}>→</span>
              </a>
            </div>

            <p className="text-xs text-gray-700 mb-6">No credit card · No account needed</p>

            {/* Chrome extension callout */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs border"
              style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" fill={cfg.accentHex}/>
                <path d="M12 2L12 8M12 16L12 22M2 12L8 12M16 12L22 12" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
              </svg>
              <span className="text-gray-400">Also available as a <strong className="text-white">Chrome Extension</strong> — right-click any photo on the web</span>
            </div>
          </div>

          {/* Right — before/after */}
          <div className="w-full lg:w-[320px] shrink-0">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-mono mb-3">
              AI result · drag to compare
            </p>
            <BeforeAfterSlider
              beforeSrc="/images/before-4.webp"
              afterSrc="/images/after-4.webp"
              aspectRatio="2/3"
              className="rounded-2xl"
            />
            <p className="text-[10px] text-gray-600 font-mono mt-2 text-center">generated in &lt;3s</p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────── */}
      <section className="border-y px-6 md:px-14 py-5" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs text-gray-500">
          <span><strong className="text-gray-200">2M+</strong> photos processed</span>
          <span className="hidden md:inline text-gray-800">·</span>
          <span><strong className="text-gray-200">98%</strong> satisfaction rate</span>
          <span className="hidden md:inline text-gray-800">·</span>
          <span><strong className="text-gray-200">4.8★</strong> average rating</span>
          <span className="hidden md:inline text-gray-800">·</span>
          <span><strong className="text-gray-200">&lt;10s</strong> avg result time</span>
        </div>
      </section>

      {/* ── 3 VALUE PROPS ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {VALUE_PROPS.map((v) => (
            <div
              key={v.title}
              className="p-8 rounded-2xl border text-center group hover:border-opacity-40 transition-colors"
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.06)',
              }}
            >
              <div className="text-4xl mb-4">{v.emoji}</div>
              <h3 className="font-black text-lg mb-2 text-white">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section
        className="px-6 md:px-14 py-16 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-2">As easy as it sounds</h2>
          <p className="text-gray-600 text-sm mb-12">Three steps. Ten seconds. Done.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="p-7 rounded-2xl border group hover:border-opacity-50 transition-colors"
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

          <div className="mt-10">
            <a
              href={cfg.ctaUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${cfg.primaryHex}, ${cfg.accentHex})` }}
            >
              ✨ Undress a Photo Free
            </a>
            <p className="text-xs text-gray-700 mt-3">No sign-up required</p>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────── */}
      <section id="examples" className="px-6 md:px-14 py-14 border-t max-w-6xl mx-auto" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-widest text-gray-600 font-mono mb-2">Before / After</p>
          <h2 className="text-2xl font-black">See it in action</h2>
          <p className="text-gray-600 text-sm mt-1">Drag to reveal the AI result</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { n: 5, caption: 'Natural style · Generated in 7s' },
            { n: 6, caption: 'NSFW style · Generated in 9s' },
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
        <div className="text-center mt-10">
          <a
            href={cfg.ctaUrl}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all hover:opacity-90 hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${cfg.primaryHex}, ${cfg.accentHex})` }}
          >
            Try it on your photo →
          </a>
        </div>
      </section>

      {/* ── CHROME EXTENSION CALLOUT ──────────────────────────────────── */}
      <section
        className="px-6 md:px-14 py-12 border-t border-b"
        style={{
          borderColor: 'rgba(255,255,255,0.06)',
          background: `linear-gradient(to right, ${cfg.primaryHex}0a, transparent 60%)`,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-600 font-mono mb-2">Chrome Extension</p>
            <h2 className="text-xl md:text-2xl font-black mb-2">Undress any photo on the web</h2>
            <p className="text-gray-500 text-sm max-w-lg">
              Install our Chrome extension and right-click any photo on any site to undress it instantly — without leaving the page.
            </p>
          </div>
          <a
            href={cfg.ctaUrl}
            className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90 shrink-0 border"
            style={{ borderColor: cfg.accentHex, color: cfg.accentHex }}
          >
            Get the Extension →
          </a>
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
          <p className="text-gray-500 text-lg mb-8">Free to start. No account. No commitment.</p>
          <a
            href={cfg.ctaUrl}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-black transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${cfg.primaryHex}, ${cfg.accentHex})`,
              boxShadow: `0 0 60px ${cfg.primaryHex}40`,
            }}
          >
            ✨ Undress Anyone Free
          </a>
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
