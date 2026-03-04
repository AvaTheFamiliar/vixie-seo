/**
 * nudify.im — LayoutSplit
 * Redesign v2: portrait-image-aware hero.
 * Left 50%: aggressive copy + stats + CTA.
 * Right 50%: TWO portrait sliders side-by-side (each ~half the column = ~380px max).
 * This prevents any single slider from stretching beyond natural image size.
 * Source pool: H7, SH4, VP3/VP1/VP4/VP9, ST1/ST2/ST6, TR1/TR3/TR5
 */
'use client'

import { useState, useEffect } from 'react'
import type { DomainConfig } from '@/config/domains'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { Check, Zap, Upload, ImageOff, ShieldCheck, ArrowRight, Users, Clock } from 'lucide-react'

interface Props { cfg: DomainConfig }

const VALUE_PROPS = [
  { Icon: Zap,        text: 'Results in under 3 seconds' },
  { Icon: Upload,     text: 'No account needed — upload and go' },
  { Icon: ImageOff,   text: 'No watermarks on results' },
  { Icon: ShieldCheck, text: 'Realistic, not plastic filters' },
]

const STATS = [
  { value: '2M+',  label: 'photos processed' },
  { value: '<3s',  label: 'average time' },
  { value: '50K+', label: 'users today' },
]

const TRUST = [
  'Photos auto-deleted after processing',
  'No logs, no tracking, no BS',
  'Anonymous — we never see who you are',
]

// Ticker phrases
const TICKER = [
  'Undress any photo. Instantly.',
  '2M+ results generated.',
  'No account needed.',
  'Zero data retained.',
  'Under 3 seconds.',
]

export default function LayoutSplit({ cfg }: Props) {
  const faqs = cfg.subpages.find(sp => sp.slug === 'faq')?.faqs ?? []
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % TICKER.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-[#05040d] text-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="min-h-screen max-w-[1600px] mx-auto grid lg:grid-cols-2 items-center gap-0">

        {/* Left — copy */}
        <div className="relative flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-28 lg:py-20 overflow-hidden">

          {/* Blob glow */}
          <div
            className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${cfg.primaryHex}18 0%, transparent 70%)` }}
          />

          <div className="relative z-10">

            {/* Live ticker badge */}
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3 py-1.5 mb-8 text-xs text-gray-400 bg-white/[0.03] overflow-hidden max-w-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span className="truncate transition-all duration-500">{TICKER[tick]}</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[0.93] tracking-tight mb-6">
              <span className="block text-white">Undress</span>
              <span className="block" style={{
                WebkitTextStroke: `2px ${cfg.primaryHex}`,
                color: 'transparent',
              }}>
                any photo.
              </span>
              <span className="block text-white">Instantly.</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg max-w-sm mb-10 leading-relaxed">
              Professional-grade AI. No watermarks. No account. Just results.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
              <span className="text-xs text-gray-600 flex items-center gap-1.5">
                <ShieldCheck size={12} style={{ color: cfg.accentHex }} />
                Free — no credit card needed
              </span>
            </div>

            {/* Value props */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-10">
              {VALUE_PROPS.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs text-gray-500">
                  <Check size={11} className="flex-shrink-0" style={{ color: cfg.primaryHex }} strokeWidth={3} />
                  {text}
                </div>
              ))}
            </div>

            {/* Stat row */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/[0.06]">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-xl font-black tabular-nums" style={{ color: cfg.primaryHex }}>{value}</div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — two portrait sliders side by side */}
        <div className="relative px-6 md:px-10 lg:px-8 xl:px-12 py-16 lg:py-20 flex items-center justify-center">
          <div className="w-full grid grid-cols-2 gap-4 max-w-[760px]">

            {/* Primary slider — slightly larger */}
            <div className="col-span-1">
              <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-medium">Example 01</div>
              <BeforeAfterSlider
                beforeSrc="/images/before-3.webp"
                afterSrc="/images/after-3.webp"
                aspectRatio="2/3"
              />
            </div>

            {/* Secondary slider — offset down for visual rhythm */}
            <div className="col-span-1 mt-12">
              <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-2 font-medium">Example 02</div>
              <BeforeAfterSlider
                beforeSrc="/images/before-5.webp"
                afterSrc="/images/after-5.webp"
                aspectRatio="2/3"
              />
              {/* Trust pill below second slider */}
              <div className="mt-4 flex flex-col gap-1.5">
                {TRUST.map(t => (
                  <div key={t} className="flex items-center gap-1.5 text-[10px] text-gray-600">
                    <Check size={9} style={{ color: cfg.accentHex }} strokeWidth={3} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subtle right glow */}
          <div
            className="absolute top-1/3 right-0 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${cfg.primaryHex}12 0%, transparent 70%)` }}
          />
        </div>
      </section>

      {/* ── VALUE PROPS BAR ─────────────────────────────────────────── */}
      <section className="py-10 px-8 md:px-16 border-t border-white/5 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {VALUE_PROPS.map(({ Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/5"
            >
              <Icon size={15} style={{ color: cfg.primaryHex }} className="flex-shrink-0" />
              <span className="text-xs text-gray-400">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXAMPLES — 3 MORE SLIDERS ──────────────────────────────── */}
      <section id="examples" className="py-20 px-8 md:px-16 max-w-[1600px] mx-auto">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Results</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">See it work</h2>
          </div>
          <CTAButton href={cfg.ctaUrl} label="Try free" hex={cfg.primaryHex} size="sm" />
        </div>

        {/* 3-col grid — each portrait slider naturally sized */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Example 03</div>
            <BeforeAfterSlider
              beforeSrc="/images/before-2.webp"
              afterSrc="/images/after-2.webp"
              aspectRatio="2/3"
            />
          </div>
          <div className="sm:mt-8">
            <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Example 04</div>
            <BeforeAfterSlider
              beforeSrc="/images/before-4.webp"
              afterSrc="/images/after-4.webp"
              aspectRatio="2/3"
            />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Example 05</div>
            <BeforeAfterSlider
              beforeSrc="/images/before-6.webp"
              afterSrc="/images/after-6.webp"
              aspectRatio="2/3"
            />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16 border-t border-white/5 max-w-[1600px] mx-auto">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">How it works</p>
          <h2 className="text-3xl font-black tracking-tight mb-12">Three steps. Done.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Upload, n: '01', title: 'Upload', desc: 'Drop any photo. No signup, no waiting.' },
              { Icon: Zap,    n: '02', title: 'Process', desc: 'Our AI runs in under 3 seconds.' },
              { Icon: ImageOff, n: '03', title: 'Download', desc: 'Full-res result. No watermark. Auto-deleted.' },
            ].map(({ Icon, n, title, desc }) => (
              <div key={n} className="relative pl-14">
                <div
                  className="absolute left-0 top-0 w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black"
                  style={{ background: `${cfg.primaryHex}18`, color: cfg.primaryHex }}
                >
                  {n}
                </div>
                <h3 className="font-bold text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className="py-20 px-8 md:px-16 border-t border-white/5 max-w-[1600px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden px-10 py-16 text-center"
          style={{ background: `linear-gradient(135deg, ${cfg.primaryHex}20, ${cfg.accentHex}12)`, border: `1px solid ${cfg.primaryHex}25` }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${cfg.primaryHex}15, transparent)` }} />
          <div className="relative z-10">
            <p className="text-gray-400 text-sm mb-4 uppercase tracking-widest">Ready?</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Try it free. Right now.
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
              No account. No credit card. Results in under 3 seconds.
            </p>
            <CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} size="lg" />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-8 md:px-16 border-t border-white/5 max-w-[1600px] mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-black tracking-tight mb-8">Frequently asked</h2>
          <FAQAccordion faqs={faqs} hex={cfg.primaryHex} />
        </div>
      </section>

      {/* ── TRUST FOOTER BAR ─────────────────────────────────────────── */}
      <section className="py-6 px-8 md:px-16 border-t border-white/5 max-w-[1600px] mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {TRUST.map(t => (
            <div key={t} className="flex items-center gap-2 text-xs text-gray-700">
              <Check size={10} style={{ color: cfg.accentHex }} strokeWidth={3} />
              {t}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
