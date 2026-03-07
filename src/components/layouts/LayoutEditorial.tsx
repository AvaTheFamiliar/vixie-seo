/**
 * undress.cat — LayoutEditorial
 * Ported from vixie-landing@0e82cef. 3 sliders, 3 value props.
 */
import type { DomainConfig } from '@/config/domains'
import Image from 'next/image'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import FAQAccordion from '@/components/FAQAccordion'

interface Props { cfg: DomainConfig }

/* ─── HERO ─── */
function Hero({ cfg }: { cfg: DomainConfig }) {
  return (
    <section className="relative pt-28 pb-10 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'rgba(159,18,57,0.2)' }} />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl scale-150" style={{ background: 'rgba(244,114,182,0.2)' }} />
            <Image src="/cat-logo.svg" alt="" width={80} height={80} className="relative" />
          </div>
        </div>

        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs mb-6 border"
          style={{ background: 'rgba(131,24,67,0.3)', borderColor: 'rgba(190,18,60,0.3)', color: '#f9a8d4' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#f472b6' }} />
          2,000,000+ photos processed
        </div>

        <h1 className="font-black mb-5 leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">Undress Anyone.</span>
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-transparent">One Click.</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          The world&apos;s most realistic AI nudifier. Upload any photo — see the result in seconds.
          Free, private, no sign-up.
        </p>

        <a
          href={cfg.ctaUrl}
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(to right, #be123c, #be185d)',
            boxShadow: '0 25px 50px rgba(136,19,55,0.5)',
          }}
        >
          <span>✨ Start for Free</span>
          <span style={{ color: '#fecdd3' }}>→</span>
        </a>

        <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.25)' }}>No credit card · No account needed</p>
      </div>
    </section>
  )
}

/* ─── TRUST BAR ─── */
function TrustBar() {
  return (
    <section className="py-4 px-6 border-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
        <span>🔒 <strong style={{ color: 'rgba(255,255,255,0.6)' }}>100% private</strong></span>
        <span className="hidden md:inline" style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
        <span>⚡ <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Results in &lt;10s</strong></span>
        <span className="hidden md:inline" style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
        <span>⭐ <strong style={{ color: 'rgba(255,255,255,0.6)' }}>4.8★</strong> avg rating</span>
        <span className="hidden md:inline" style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
        <span>🧩 <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Chrome Extension</strong> available</span>
      </div>
    </section>
  )
}

/* ─── 3 SLIDERS ─── */
function SliderSection({ cfg }: { cfg: DomainConfig }) {
  return (
    <section className="py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">See it in action</h2>
        <p className="text-sm mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>Drag to reveal the AI result</p>

        {/* Main slider — large, centered */}
        <div className="max-w-sm mx-auto mb-8">
          <BeforeAfterSlider
            beforeSrc="/images/before-4.webp"
            afterSrc="/images/after-4.webp"
            aspectRatio="3/4"
            className="rounded-2xl"
          />
        </div>

        {/* Two more side by side */}
        <div className="grid grid-cols-2 gap-5 max-w-2xl mx-auto mb-8">
          <BeforeAfterSlider
            beforeSrc="/images/before-5.webp"
            afterSrc="/images/after-5.webp"
            aspectRatio="3/4"
            className="rounded-2xl"
          />
          <BeforeAfterSlider
            beforeSrc="/images/before-6.webp"
            afterSrc="/images/after-6.webp"
            aspectRatio="3/4"
            className="rounded-2xl"
          />
        </div>

        <a
          href={cfg.ctaUrl}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(to right, #be123c, #be185d)',
            boxShadow: '0 10px 30px rgba(136,19,55,0.4)',
          }}
        >
          Try it on your photo →
        </a>
      </div>
    </section>
  )
}

/* ─── HOW IT WORKS ─── */
function HowItWorks({ cfg }: { cfg: DomainConfig }) {
  const steps = [
    { num: '1', emoji: '📸', title: 'Upload any photo',    desc: 'Selfie, full-body shot, clothed photo — anyone, any angle.' },
    { num: '2', emoji: '✨', title: 'Click Undress',        desc: 'One button. Our AI understands body shape, skin tone, and lighting.' },
    { num: '3', emoji: '🔥', title: 'Download your result', desc: 'Photorealistic in seconds. Saved only to you.' },
  ]

  return (
    <section className="py-16 px-6" style={{ background: '#0e0e14' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">As easy as it sounds</h2>
        <p className="text-sm mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>Three steps. Ten seconds. Done.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative p-7 rounded-2xl border hover:border-pink-800/30 transition-colors group"
              style={{ background: '#1a1a22', borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-full text-white text-lg font-black flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ background: 'linear-gradient(135deg, #9f1239, #be123c)', boxShadow: '0 8px 20px rgba(136,19,55,0.3)' }}
              >
                {s.num}
              </div>
              <div className="text-2xl mb-2">{s.emoji}</div>
              <h3 className="font-bold text-base mb-1">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={cfg.ctaUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #be123c, #be185d)',
              boxShadow: '0 25px 50px rgba(136,19,55,0.4)',
            }}
          >
            ✨ Undress a Photo Free
          </a>
          <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.25)' }}>No sign-up required</p>
        </div>
      </div>
    </section>
  )
}

/* ─── FEATURES ─── */
function Features() {
  const items = [
    { icon: '👆', title: 'Undress with one click',  desc: 'Upload any photo, hit undress. No settings, no fuss — just results.' },
    { icon: '⚡', title: 'Under 10 seconds',         desc: 'Fast enough that you won\'t look away. Results delivered while you\'re still excited.' },
    { icon: '🔒', title: 'Private',                  desc: 'Processed on our servers, never shared. Your photos are yours alone.' },
    { icon: '💋', title: 'Any body, any style',      desc: 'Our model is trained across all body types, sizes, and skin tones. Everyone looks amazing.' },
    { icon: '🆓', title: 'Free to start',            desc: 'No credit card, no account. Just upload and go. Upgrade only when you want more.' },
    { icon: '😻', title: 'Built for this',           desc: 'Not a watered-down tool — undress.cat is purpose-built for exactly this.' },
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Why undress.cat is different</h2>
        <p className="text-sm text-center mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Most AI nudifiers produce garbage. We don&apos;t.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((f) => (
            <div
              key={f.title}
              className="p-5 rounded-xl border hover:border-pink-800/30 transition-colors"
              style={{ background: '#1a1a22', borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <span className="text-2xl">{f.icon}</span>
              <h3 className="font-semibold mt-3 mb-1 text-sm">{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SOCIAL PROOF ─── */
function SocialProof() {
  const stats = [
    { value: '2M+',  label: 'Photos processed'      },
    { value: '98%',  label: 'Satisfaction rate'      },
    { value: '4.8★', label: 'Average rating'         },
    { value: '<10s', label: 'Avg. generation time'   },
  ]

  return (
    <section className="py-14 px-6" style={{ background: '#0e0e14' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-xs uppercase tracking-widest mb-8" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Trusted by millions worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-5 rounded-xl border"
              style={{ background: '#1a1a22', borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ background: 'linear-gradient(to right, #f472b6, #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {s.value}
              </div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  const quotes = [
    {
      text: "I didn't expect it to be this realistic. It actually looks like a real photo. Used it on a few people from my feed and I'm hooked.",
      detail: '⭐⭐⭐⭐⭐',
    },
    {
      text: "Way better than the other sites I've tried. The body shapes actually look natural and the skin tone matching is insane.",
      detail: '⭐⭐⭐⭐⭐',
    },
    {
      text: "Was skeptical at first but the results completely blew me away. The quality is on another level compared to anything else I've found.",
      detail: '⭐⭐⭐⭐⭐',
    },
  ]

  return (
    <section className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">People can&apos;t stop talking about it</h2>
        <p className="text-sm text-center mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
          From our monthly satisfaction surveys
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border hover:border-pink-800/20 transition-colors"
              style={{ background: '#1a1a22', borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                &ldquo;{q.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>Anonymous</span>
                <span className="text-xs" style={{ color: 'rgba(250,204,21,0.8)' }}>{q.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CHROME EXTENSION ─── */
function ChromeExtension({ cfg }: { cfg: DomainConfig }) {
  return (
    <section
      className="py-12 px-6 border-y"
      style={{
        borderColor: 'rgba(255,255,255,0.06)',
        background: 'linear-gradient(to right, rgba(159,18,57,0.08), transparent 60%)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest font-mono mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Chrome Extension
          </p>
          <h2 className="text-xl md:text-2xl font-black mb-2">Undress any photo on the web</h2>
          <p className="text-sm max-w-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Install our Chrome extension and right-click any photo on any site — undress it instantly without leaving the page.
          </p>
        </div>
        <a
          href={cfg.ctaUrl}
          className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90 shrink-0 border"
          style={{ borderColor: '#f43f5e', color: '#f43f5e' }}
        >
          Get the Extension →
        </a>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTA({ cfg }: { cfg: DomainConfig }) {
  return (
    <section className="py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl"
          style={{ background: 'rgba(159,18,57,0.2)' }}
        />
      </div>
      <div className="relative max-w-2xl mx-auto">
        <Image src="/cat-logo.svg" alt="" width={56} height={56} className="mx-auto mb-6 opacity-80" />
        <h2
          className="font-black mb-4 leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', background: 'linear-gradient(to right, #f472b6, #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Ready to see everything?
        </h2>
        <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Free. Private. No sign-up. Just upload and go.
        </p>
        <a
          href={cfg.ctaUrl}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-black transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(to right, #be123c, #be185d)',
            boxShadow: '0 25px 50px rgba(136,19,55,0.5)',
          }}
        >
          ✨ Undress Anyone Free
        </a>
      </div>
    </section>
  )
}

/* ─── LAYOUT ─── */
export default function LayoutEditorial({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs ?? []

  return (
    <div className="min-h-screen text-white" style={{ background: '#0a0a0f', fontFamily: "'DM Sans', sans-serif" }}>
      <Hero cfg={cfg} />
      <TrustBar />
      <SliderSection cfg={cfg} />
      <HowItWorks cfg={cfg} />
      <Features />
      <SocialProof />
      <Testimonials />
      <ChromeExtension cfg={cfg} />
      <CTA cfg={cfg} />

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-14 px-6 border-t" style={{ background: '#0e0e14', borderColor: 'rgba(255,255,255,0.05)' }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Got questions?</h2>
            <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
          </div>
        </section>
      )}
    </div>
  )
}
