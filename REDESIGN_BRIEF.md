# vixie-seo Redesign Brief

## Goal
Redesign all 5 landing page layouts from scratch. Each must be visually unique, compelling, and conversion-optimised. Use the assigned source picks below — do NOT use the leftovers.

## Repo
`/home/ubuntu/.openclaw/workspace/vixie-seo`

## Design System
See `/home/ubuntu/.openclaw/workspace/design-system/vixie-seo/MASTER.md`
Base: dark (`#0F172A` bg, `#F8FAFC` text, `#22C55E` CTA). Vibrant & Block-based. Funnel pattern.
Font: DM Sans (import from Google Fonts — Satoshi/General Sans not available, DM Sans is the closest approved).

## Images
All images are in `public/images/`:
- `before-{1-6}.webp` + `after-{1-6}.webp` — portrait 2:3 (512×768)
- Use `<BeforeAfterSlider beforeSrc="/images/before-N.webp" afterSrc="/images/after-N.webp" aspectRatio="2/3" />`

## Keep These (do NOT change)
- `src/components/BeforeAfterSlider.tsx` — leave as-is
- `src/components/CTAButton.tsx` — leave as-is
- `src/components/FAQAccordion.tsx` — leave as-is  
- `src/components/Nav.tsx` — leave as-is
- `src/components/Footer.tsx` — leave as-is
- `src/config/domains.ts` — leave as-is
- `src/app/page.tsx` — leave as-is
- `src/app/[slug]/page.tsx` — leave as-is

## Files to Rewrite
- `src/components/layouts/LayoutSplit.tsx` → nudify.im
- `src/components/layouts/LayoutCentered.tsx` → nudify.my
- `src/components/layouts/LayoutGallery.tsx` → nudify.pics
- `src/components/layouts/LayoutApp.tsx` → nudie.app
- `src/components/layouts/LayoutEditorial.tsx` → undress.cat

## Props Interface (all layouts receive this)
```typescript
interface Props {
  cfg: DomainConfig; // from src/config/domains.ts
}
// DomainConfig has: domain, name, tagline, headline, subheadline, ctaText, ctaUrl, features[], faq[]
```
Import: `import { DomainConfig } from "@/config/domains";`

## Tools to Use
1. **21st.dev Magic MCP** — use it for any polished component you need (hero section, feature cards, testimonials, stat blocks, etc.)
2. **Google Stitch MCP** — for design system and cross-platform components
3. Keep Tailwind only — no new npm packages

---

## SOURCE POOL (full list — pick only what's assigned per layout)

### Value Props (VP)
1. "No account needed — upload and go"
2. "Your photo is deleted in 60 seconds"
3. "AI-powered — results in under 3 seconds"
4. "Realistic results, not plastic filters"
5. "100% private — processed on secure servers"
6. "Free to try — no credit card required"
7. "Works on any body type"
8. "Mobile-friendly — no app to install"
9. "No watermarks on your results"
10. "State-of-the-art AI, retrained weekly"

### Stats (ST)
1. "2M+ photos processed"
2. "< 3 seconds average"
3. "98% satisfaction rate"
4. "Zero data stored after 60s"
5. "150+ countries"
6. "50K+ users today"
7. "4.8★ average rating"
8. "500K+ this week"
9. "AI trained on 10M+ images"
10. "99.9% uptime"

### Trust Signals (TR)
1. "Photos auto-deleted after processing"
2. "End-to-end HTTPS encryption"
3. "No logs, no tracking, no BS"
4. "Zero data retention policy"
5. "Anonymous processing — we never see who you are"
6. "GDPR compliant"
7. "Processed in isolated sandboxes"
8. "No third-party data sharing"
9. "Open about our infrastructure"
10. "Trusted by 50,000+ people today"

### Headlines (H)
1. "AI nudify in seconds"
2. "See the real body underneath"
3. "Instant, realistic, private"
4. "The AI nudifier that actually works"
5. "From clothed to nude in 3 seconds"
6. "The internet's most trusted nudify tool"
7. "Undress any photo. Instantly."
8. "AI that respects your privacy"
9. "One-click AI undress"
10. "The fastest AI nudifier, period"

### Subheadlines (SH)
1. "Upload a photo. Get results in seconds. No signup required."
2. "Our AI removes clothing from any photo — fast, private, free."
3. "The most realistic AI undress tool available."
4. "Professional-grade AI. No watermarks. No account. Just results."
5. "3 seconds to stunning results. No account, no traces."
6. "Privacy-first. Results-focused. No bullshit."
7. "The nudify tool millions trust. Built different."
8. "Join 2M+ who've tried the world's best AI nudifier."
9. "Upload once, results instantly. Auto-deleted, no traces."
10. "The nudify AI with zero compromises."

---

## PER-DOMAIN ASSIGNMENTS

### 1. LayoutSplit.tsx → nudify.im
**Vibe:** Aggressive, conversion-focused, brutalist energy. Split hero: big copy left, slider right.
**Headline:** H7 — "Undress any photo. Instantly."
**Subheadline:** SH4 — "Professional-grade AI. No watermarks. No account. Just results."
**Value Props:** VP3, VP1, VP4, VP9
**Stats:** ST1 (2M+), ST2 (<3s), ST6 (50K today)
**Trust:** TR1, TR3, TR5
**Images:** Hero slider: before-3/after-3. Secondary row: before-5/after-5 + before-1/after-1
**Style notes:** 
- Big bold stacked headline, almost full viewport
- Stats displayed as giant numbers in a horizontal ticker or grid
- CTA is loud — oversized button, glowing or pulsing
- Trust signals as a tight inline row with checkmarks
- Dark with a pop of accent on the CTA only

### 2. LayoutCentered.tsx → nudify.my
**Vibe:** Personal, intimate, privacy-forward. Centered editorial. Feels trustworthy not seedy.
**Headline:** H8 — "AI that respects your privacy"
**Subheadline:** SH6 — "Privacy-first. Results-focused. No bullshit."
**Value Props:** VP5, VP6, VP7, VP8
**Stats:** ST3 (98% satisfaction), ST4 (zero data), ST7 (4.8★)
**Trust:** TR4, TR6, TR10
**Images:** Hero slider: before-2/after-2. Below: before-4/after-4 + before-6/after-6 side-by-side
**Style notes:**
- Centered layout, generous white space
- Headline is warm not aggressive
- Privacy stats get visual emphasis (shield icons, highlight boxes)
- Gallery sits below the fold as "proof"
- Softer CTA copy ("Try it free — no account needed")

### 3. LayoutGallery.tsx → nudify.pics
**Vibe:** Gallery-first, results-speak-for-themselves. Minimal text, maximum before/afters.
**Headline:** H5 — "From clothed to nude in 3 seconds"
**Subheadline:** SH3 — "The most realistic AI undress tool available."
**Value Props:** VP2, VP3, VP9, VP10
**Stats:** ST1 (2M+), ST5 (150 countries), ST8 (500K this week)
**Trust:** TR2, TR7, TR8
**Images:** Top row: before-3/after-3 (large) + before-5/after-5 (large). Strip: before-1, before-2, before-4, before-6 (before only thumbnails with hover-to-reveal after)
**Style notes:**
- Headline + CTA visible above fold in compact strip
- Everything else is images — let results do the talking
- Hover effect on thumbnail strip reveals after
- Stats appear as a subtle band between gallery and CTA section
- Minimal nav chrome

### 4. LayoutApp.tsx → nudie.app
**Vibe:** Clean product page, Linear/Vercel aesthetic. Tech-focused. Feels like a real app.
**Headline:** H9 — "One-click AI undress"
**Subheadline:** SH9 — "Upload once, results instantly. Auto-deleted, no traces."
**Value Props:** VP1, VP3, VP6, VP10
**Stats:** ST2 (<3s avg), ST6 (50K today), ST10 (99.9% uptime)
**Trust:** TR2, TR5, TR9
**Images:** Hero: before-6/after-6. Feature grid: before-2/after-2, before-3/after-3, before-4/after-4, before-5/after-5
**Style notes:**
- App-store-like hero with a big device/UI mockup feel
- Feature cards are clean boxes with icon + headline + one-liner
- Stats shown as a compact "status bar" (like a system status page)
- CTA is minimal and confident ("Try Free")
- No hyperbole — let specs sell it

### 5. LayoutEditorial.tsx → undress.cat
**Vibe:** Premium editorial magazine. Feels like a serious brand, not a sketchy tool.
**Headline:** H6 — "The internet's most trusted nudify tool"
**Subheadline:** SH8 — "Join 2M+ who've tried the world's best AI nudifier."
**Value Props:** VP4, VP5, VP7, VP2
**Stats:** ST1 (2M+), ST3 (98% satisfaction), ST7 (4.8★)
**Trust:** TR1, TR4, TR6
**Images:** Hero: before-4/after-4 (large). Side gallery: before-5/after-5 + before-6/after-6
**Style notes:**
- Magazine masthead layout — big pull quote / stat dominates top
- Hero slider is "exhibit A" — framed, captioned
- Two-column editorial body (copy left, slider right)
- Trust signals in a compact footer-style band
- Feels like a product review, not an ad

---

## Implementation Rules

1. **Each layout is a standalone React component** — `'use client'` only if needed (if using hooks/useState). Pure JSX layouts don't need it.
2. **Use `cfg.ctaUrl`, `cfg.ctaText`, `cfg.name`, `cfg.tagline`, `cfg.headline`, `cfg.subheadline`** from props where it makes sense — but the assigned source picks above OVERRIDE the cfg values visually (hardcode them in the component)
3. **BeforeAfterSlider always gets `aspectRatio="2/3"`** — never a fixed height
4. **CTA buttons use the CTAButton component**: `<CTAButton href={cfg.ctaUrl} label={cfg.ctaText} hex={cfg.primaryHex} />`
5. **FAQ section at bottom of every layout**: Use `cfg.subpages[0].faqs` — find the FAQ subpage and use its faqs array: `<FAQAccordion faqs={cfg.subpages.find(s => s.slug === 'faq')?.faqs ?? []} hex={cfg.primaryHex} />`
6. **DomainConfig fields**: `domain`, `brandName`, `tagline`, `primaryHex`, `accentHex`, `heroHeadline`, `heroSubheadline`, `ctaUrl`, `ctaText`, `stats[]` (value+label), `features[]` (icon+title+desc), `subpages[]`
6. **Nav and Footer wrap every page** — already handled in page.tsx, don't add them in layouts
7. **DM Sans from Google Fonts** — add the import to each layout or rely on globals.css
8. **No emojis as icons** — use Lucide icons (already in project) or inline SVGs
9. **Responsive at 375px, 768px, 1280px** — test each breakpoint mentally
10. **Commit after all 5 are done**: `git add -A && git commit -m "redesign: fresh layouts with source pool" && git push origin main`
11. **Notify when done**: `openclaw system event --text "Done: vixie-seo redesign complete, all 5 layouts pushed" --mode now`
