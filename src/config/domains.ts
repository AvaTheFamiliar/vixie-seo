export interface SubPage {
  slug: string
  title: string
  metaDescription: string
  h1: string
  intro: string
  body: string[]
  faqs: Array<{ q: string; a: string }>
}

export interface DomainConfig {
  domain: string
  brandName: string
  tagline: string
  metaTitle: string
  metaDescription: string
  /** Tailwind bg class for hero/accents */
  primaryColor: string
  /** Hex for inline styles */
  primaryHex: string
  accentHex: string
  heroHeadline: string
  heroSubheadline: string
  layout: 'split' | 'centered' | 'gallery' | 'app' | 'editorial'
  ctaUrl: string
  ctaText: string
  stats: Array<{ value: string; label: string }>
  features: Array<{ icon: string; title: string; desc: string }>
  subpages: SubPage[]
}

const BASE_URL = 'https://vixie-avas.vercel.app'

// ---------------------------------------------------------------------------
// nudify.im
// ---------------------------------------------------------------------------
const nudifyIm: DomainConfig = {
  domain: 'nudify.im',
  layout: 'split',
  brandName: 'Nudify.im',
  tagline: 'AI Nudifier — Instant, Private, Free',
  metaTitle: 'Nudify.im — AI Nudify Any Photo Online Free',
  metaDescription:
    'Nudify any photo with cutting-edge AI. Upload a picture, choose a style, and get photorealistic nude results in seconds. Private & secure.',
  primaryColor: 'bg-violet-700',
  primaryHex: '#6d28d9',
  accentHex: '#7c3aed',
  heroHeadline: 'Nudify Any Photo with AI',
  heroSubheadline:
    'Upload a photo and watch our AI remove clothing instantly. Photorealistic results in under 10 seconds. No sign-up required.',
  ctaUrl: `${BASE_URL}/?utm_source=nudify.im&utm_medium=landing`,
  ctaText: 'Nudify Now — It\'s Free',
  stats: [
    { value: '2M+', label: 'Photos nudified' },
    { value: '< 10s', label: 'Average processing time' },
    { value: '19', label: 'Styles available' },
    { value: '4.9★', label: 'User rating' },
  ],
  features: [
    { icon: '⚡', title: 'Instant Results', desc: 'AI processes your photo in under 10 seconds on dedicated GPU servers.' },
    { icon: '🔒', title: 'Private & Secure', desc: 'Your uploads are encrypted and automatically deleted within 24 hours.' },
    { icon: '🎨', title: '19 Nude Styles', desc: 'From tasteful to explicit — choose exactly the look you want.' },
    { icon: '🆓', title: 'Free Daily Credits', desc: 'Get 5 free nudifications every day. No credit card needed.' },
    { icon: '📱', title: 'Works Everywhere', desc: 'Nudify photos from any device — phone, tablet, or desktop.' },
    { icon: '✨', title: 'Photorealistic AI', desc: 'Cutting-edge AI models trained on millions of images for lifelike results.' },
  ],
  subpages: [
    {
      slug: 'nudify-online',
      title: 'Nudify Photos Online Free — No Sign-Up | Nudify.im',
      metaDescription: 'The easiest way to nudify photos online. No registration, no watermarks on previews. Instant AI nudification.',
      h1: 'Nudify Photos Online — No Registration Required',
      intro: 'Looking for the best way to nudify photos online? Nudify.im uses cutting-edge AI to remove clothing from photos in seconds — no sign-up, no software to install, no hassle.',
      body: [
        'Our online nudifier works directly in your browser. Simply upload a JPG, PNG or WebP image, select a nudity style, and our AI does the rest. The entire process takes under 10 seconds on our dedicated GPU servers.',
        'Unlike other tools that produce blurry, unrealistic results, Nudify.im uses state-of-the-art AI models that understand body proportions, skin tone, lighting, and perspective — delivering photorealistic nudifications that look completely natural.',
        'We take privacy seriously. Your uploaded photo is processed on our secure servers and automatically deleted within 24 hours. We never share your images with third parties or use them for training.',
        'Whether you want to nudify a selfie, a portrait photo, or a full-body shot, our AI handles it with impressive accuracy. Try it free with 5 daily credits — no credit card required.',
      ],
      faqs: [
        { q: 'Can I nudify photos online without registering?', a: 'Yes. You can nudify up to 5 photos per day with no account. Create a free account to save your gallery and access more options.' },
        { q: 'How long does nudification take?', a: 'Typically 5–10 seconds. During peak hours it may take slightly longer.' },
        { q: 'What file formats are supported?', a: 'JPG, PNG, and WebP up to 10MB.' },
        { q: 'Is the result watermarked?', a: 'Free-tier results include a subtle watermark. Paid plans produce clean, watermark-free images.' },
        { q: 'Are my photos stored?', a: 'Input photos are deleted within 24 hours. Processed results are stored in your gallery until you delete them.' },
      ],
    },
    {
      slug: 'nudify-photos',
      title: 'Nudify Photos — AI Clothes Removal | Nudify.im',
      metaDescription: 'Nudify photos with AI clothes removal technology. Realistic results, instant processing, full privacy.',
      h1: 'Nudify Photos with AI Clothes Removal',
      intro: 'Nudify.im\'s AI clothes removal technology transforms any clothed photo into a realistic nude image. Our advanced models handle lighting, skin tone, and body shape with extraordinary detail.',
      body: [
        'Traditional photo editing tools require hours of manual work to convincingly remove clothing from a photo. Nudify.im\'s AI does it in seconds, producing results that are indistinguishable from real photography.',
        'Our clothes-removal AI was trained on a massive dataset of before/after image pairs, teaching it to understand how fabric falls, how skin reacts to light, and how body shapes vary — resulting in photorealistic nudifications across all body types.',
        'You can nudify any type of photo: portraits, full-body shots, outdoor scenes, studio photos. The AI adapts to the background lighting and scene context to ensure the final image looks completely natural.',
      ],
      faqs: [
        { q: 'Does the AI work on all body types?', a: 'Yes — our model handles diverse body shapes, skin tones, and ages (18+) with equal quality.' },
        { q: 'Can I nudify multiple photos at once?', a: 'Yes — paid plans support batch processing of up to 10 images per request.' },
        { q: 'What styles can I choose?', a: 'We offer 19 styles ranging from tasteful nude to more explicit options. You can also enter a custom prompt.' },
        { q: 'Can I try before I buy?', a: 'Absolutely. You get 5 free nudifications every day with no credit card.' },
        { q: 'Is there a mobile app?', a: 'Nudify.im works on all browsers including mobile. A Chrome extension is also available.' },
      ],
    },
    {
      slug: 'ai-nudifier',
      title: 'AI Nudifier — Best AI Nudify Tool 2025 | Nudify.im',
      metaDescription: 'The best AI nudifier tool in 2025. Photorealistic clothes removal, 19 styles, fast processing.',
      h1: 'The Best AI Nudifier Tool in 2025',
      intro: 'Nudify.im is rated the #1 AI nudifier by thousands of users. Our cutting-edge AI delivers photorealistic nudifications faster and more accurately than any other tool available.',
      body: [
        'What makes an AI nudifier great? Realism, speed, and privacy. Nudify.im excels at all three. Our AI models produce results with accurate skin texture, natural lighting, and realistic body proportions that outclass every competitor.',
        'We process over 50,000 nudifications per day across our dedicated GPU cluster, ensuring fast response times even during peak hours. Most requests complete in under 10 seconds.',
        'Your privacy is paramount. We use end-to-end encryption for all uploads, store input images for no longer than 24 hours, and never share your data with third parties.',
      ],
      faqs: [
        { q: 'How does AI nudification work?', a: 'Our AI analyzes the input photo to identify clothing regions, then synthesizes realistic nude skin based on the body shape, lighting, and scene context visible in the image.' },
        { q: 'Is Nudify.im better than DeepNude alternatives?', a: 'Yes — our model is significantly more advanced than legacy tools, producing sharper, more realistic results with better handling of complex poses and clothing types.' },
        { q: 'How many free nudifications do I get?', a: '5 per day, refreshed at midnight UTC. No credit card required.' },
        { q: 'What payment methods are accepted?', a: 'Credit/debit card and cryptocurrency (Bitcoin, Ethereum, and more).' },
        { q: 'Can I cancel anytime?', a: 'We don\'t have subscriptions — you buy diamond credits that never expire.' },
      ],
    },
    {
      slug: 'how-it-works',
      title: 'How AI Nudification Works — Step by Step | Nudify.im',
      metaDescription: 'Learn how Nudify.im\'s AI nudification works. Upload, select style, get results in 3 simple steps.',
      h1: 'How Nudify.im Works — 3 Simple Steps',
      intro: 'Getting your nudified photo takes just 30 seconds. Here\'s exactly how Nudify.im\'s AI nudification process works from upload to result.',
      body: [
        'Step 1 — Upload Your Photo: Click "Nudify Now" and upload any JPG, PNG, or WebP photo up to 10MB. You can also paste a URL or drag-and-drop directly onto the app. For best results, use a high-resolution photo with clear, well-lit subject.',
        'Step 2 — Choose a Style: Browse our 19 nudification styles ranging from tasteful to explicit. You can also pick a colour for garments that remain, or enter a custom text prompt for full creative control.',
        'Step 3 — Get Your Result: Hit Create and our AI gets to work. In under 10 seconds your nudified image is ready to view, save, or share. Compare before and after with the built-in slider.',
        'Your input photo is automatically deleted within 24 hours. Your results are stored privately in your gallery and only visible to you.',
      ],
      faqs: [
        { q: 'What makes a good input photo?', a: 'Clear, well-lit photos with visible clothing and a focused subject work best. Blurry or heavily cropped images may reduce quality.' },
        { q: 'Can I use any photo?', a: 'Only photos you have rights to use. All subjects must be 18 or older. We have strict safeguards against misuse.' },
        { q: 'What happens to my photo after processing?', a: 'Input photos are deleted within 24 hours. Results stay in your private gallery until you delete them.' },
        { q: 'Can I retry if I\'m not happy with the result?', a: 'Yes — paid users get one free retry within 1 hour of generation at no extra cost.' },
        { q: 'Is there a size or resolution limit?', a: 'Maximum file size is 10MB. For best results use images at least 512×512px.' },
      ],
    },
    {
      slug: 'examples',
      title: 'AI Nudify Examples — Before & After Gallery | Nudify.im',
      metaDescription: 'See real AI nudify before and after examples. View the quality of Nudify.im\'s clothes removal AI across different styles.',
      h1: 'AI Nudify Before & After Examples',
      intro: 'See the power of Nudify.im\'s AI in action. The gallery below shows real before/after comparisons across our most popular nudification styles.',
      body: [
        'Every result you see below was generated by our AI in under 10 seconds. No manual retouching, no Photoshop — pure AI inference from a single uploaded photo.',
        'We offer 19 distinct styles. The examples below showcase a selection from our casual, lingerie, nude, and NSFW categories. Use the sliders to compare before and after.',
        'Quality varies with input photo resolution and clarity. For best results, upload a high-resolution photo with good lighting and a clearly visible subject.',
      ],
      faqs: [
        { q: 'Are these examples real AI results?', a: 'Yes — all examples are genuine outputs from our AI, unretouched.' },
        { q: 'Can I get results like these?', a: 'Yes — upload a similarly quality photo and select the matching style for comparable results.' },
        { q: 'How do I get started?', a: 'Click the "Try It Free" button below. You get 5 free credits daily, no account required.' },
        { q: 'What styles are shown here?', a: 'The gallery shows examples from Nude, Lingerie, Bikini, and NSFW styles.' },
        { q: 'Can I share my results?', a: 'Yes — each result has a public sharing option that generates a shareable link.' },
      ],
    },
    {
      slug: 'free-nudify',
      title: 'Free AI Nudify — 5 Free Credits Daily | Nudify.im',
      metaDescription: 'Get 5 free AI nudifications every day at Nudify.im. No credit card, no sign-up needed. Upgrade for unlimited.',
      h1: 'Free AI Nudify — 5 Credits Every Day',
      intro: 'Nudify.im gives you 5 free AI nudifications every single day. No credit card, no registration required. Just open the app and start nudifying.',
      body: [
        'Our free tier is genuinely free — not a trial, not a limited preview. Every day at midnight UTC, your balance refreshes to 5 diamonds (credits). Each diamond = one AI nudification.',
        'Free users get access to all 19 styles, the full before/after gallery, and public sharing. The only difference is a subtle watermark on downloaded images.',
        'Need more? Diamond packs start at just $4.99 for 60 nudifications. Credits never expire, so buy once and use at your own pace.',
      ],
      faqs: [
        { q: 'Do free credits expire?', a: 'Daily free credits reset every midnight UTC. They do not roll over — use them or lose them.' },
        { q: 'Do I need a credit card for the free plan?', a: 'No. Just open the app and start nudifying.' },
        { q: 'What\'s the difference between free and paid?', a: 'Free plan: 5/day, watermarked downloads. Paid: no watermarks, batch processing, free retries.' },
        { q: 'How cheap are the paid plans?', a: 'Diamond packs start at $4.99 for 60 nudifications (~$0.08 each). Credits never expire.' },
        { q: 'Can I earn free credits without paying?', a: 'Yes — refer a friend and earn 50 diamonds when they make their first purchase.' },
      ],
    },
    {
      slug: 'faq',
      title: 'Frequently Asked Questions — Nudify.im',
      metaDescription: 'All your questions about Nudify.im answered. How it works, pricing, privacy, safety and more.',
      h1: 'Nudify.im — Frequently Asked Questions',
      intro: 'Everything you need to know about Nudify.im. Can\'t find your answer? Email us at hello@vixie.art.',
      body: [],
      faqs: [
        { q: 'What is Nudify.im?', a: 'Nudify.im is an AI-powered tool that removes clothing from photos to produce realistic nude images. It uses cutting-edge generative AI models running on dedicated GPU servers.' },
        { q: 'Is Nudify.im free?', a: 'Yes — you get 5 free nudifications every day with no sign-up or credit card required.' },
        { q: 'How realistic are the results?', a: 'Very. Our AI produces photorealistic results with accurate skin texture, lighting, and body proportions.' },
        { q: 'Is my data private?', a: 'Yes. Input images are deleted within 24 hours. We never share your data with third parties.' },
        { q: 'What content is not allowed?', a: 'Minors (under 18), non-consensual real persons, public figures, and illegal content are strictly prohibited.' },
        { q: 'Can I use Nudify.im on my phone?', a: 'Yes — works on all modern mobile browsers. No app download required.' },
        { q: 'How do I pay?', a: 'Credit/debit card via Stripe, or cryptocurrency (Bitcoin, ETH, USDT and more) via NOWPayments.' },
        { q: 'Do credits expire?', a: 'Paid credits never expire. Free daily credits reset at midnight UTC.' },
        { q: 'Can I get a refund?', a: 'Credits are non-refundable once purchased. If there\'s a technical issue, contact support within 24 hours.' },
        { q: 'Is there a Chrome extension?', a: 'Yes — install the Nudify.im Chrome extension to nudify photos from any website with one click.' },
      ],
    },
    {
      slug: 'privacy-safe',
      title: 'Privacy & Safety — How We Protect You | Nudify.im',
      metaDescription: 'Learn how Nudify.im protects your privacy. Encrypted uploads, 24-hour auto-deletion, no data sharing.',
      h1: 'Privacy & Safety at Nudify.im',
      intro: 'We built Nudify.im with privacy as a core principle, not an afterthought. Here\'s exactly how we keep your photos and data secure.',
      body: [
        'All uploads are transmitted over HTTPS with TLS encryption. Your photo never touches any third-party server — it goes directly from your device to our processing infrastructure and nowhere else.',
        'Input images are automatically and permanently deleted within 24 hours of upload. This is enforced by an automated cron job, not a manual process.',
        'We use Storj decentralised cloud storage — a distributed network where your data is encrypted and split across multiple nodes, making it practically impossible to intercept or reconstruct without your keys.',
        'We never sell your data. We never use your images for AI training. We never share with advertisers or data brokers. Our business model is selling credits, not selling your data.',
      ],
      faqs: [
        { q: 'Who can see my nudified photos?', a: 'Only you. Photos in your gallery are private by default. You choose if you want to share a result.' },
        { q: 'Do you train AI on my photos?', a: 'No. Your photos are never used for AI training or model improvement.' },
        { q: 'How long are my photos stored?', a: 'Input photos: deleted within 24 hours. Output results: stored in your private gallery until you delete them.' },
        { q: 'Is my payment information safe?', a: 'We never store card details. All payments go through PCI-DSS compliant processors (Stripe/Chargebee).' },
        { q: 'Can I delete my account and all data?', a: 'Yes — email privacy@vixie.art and we will delete all your data within 48 hours.' },
      ],
    },
    {
      slug: 'nudify-app',
      title: 'Nudify App — AI Nudifier for Web & Chrome | Nudify.im',
      metaDescription: 'Use the Nudify.im app on any device. Web app plus Chrome extension for nudifying photos from any website.',
      h1: 'The Nudify App — Web & Chrome Extension',
      intro: 'Nudify.im is available as a full-featured web app and a Chrome extension. Nudify photos from anywhere — no software installation required.',
      body: [
        'The Nudify.im web app works on any device with a modern browser — phone, tablet, laptop, or desktop. Navigate to nudify.im, upload your photo, and you\'re done. Nothing to install.',
        'Power users love our Chrome extension. Install it once and get a "Nudify" option whenever you right-click any image on the web. The extension opens in a side panel so you can nudify without leaving the page you\'re on.',
        'Both the web app and extension share your account, diamonds, and gallery — switch between them seamlessly.',
      ],
      faqs: [
        { q: 'Is there an iOS or Android app?', a: 'Not yet — but the web app is fully responsive and works excellently on mobile browsers.' },
        { q: 'Where can I install the Chrome extension?', a: 'Search "Nudify.im" in the Chrome Web Store, or click the Install button in the app.' },
        { q: 'Does the extension access my browsing history?', a: 'No. The extension only activates when you explicitly right-click an image to nudify it.' },
        { q: 'Can I use both the web app and extension with the same account?', a: 'Yes — they share your balance and gallery.' },
        { q: 'Will there be a desktop app?', a: 'We\'re considering it. For now the web app covers all use cases effectively.' },
      ],
    },
    {
      slug: 'compare',
      title: 'Nudify.im vs Other AI Nudifiers — Comparison | Nudify.im',
      metaDescription: 'How does Nudify.im compare to other AI nudifiers? See why thousands choose Nudify.im for quality, speed, and privacy.',
      h1: 'Nudify.im vs Other AI Nudifiers',
      intro: 'There are dozens of AI nudifiers online. Here\'s why Nudify.im consistently comes out on top for quality, speed, privacy, and price.',
      body: [
        'Most AI nudifiers use outdated models that produce blurry, unrealistic results with obvious artefacts. Nudify.im uses cutting-edge generative AI running on dedicated A100 GPU hardware — the same chip used by leading AI research labs.',
        'Privacy is where most competitors fail. Many free nudifiers collect and sell user data, or use your photos to train their models. Nudify.im deletes your input photos within 24 hours and never uses them for training.',
        'Pricing is transparent and fair. No subscriptions, no hidden fees. Buy diamond credits once and use them whenever you want — they never expire.',
        'Speed matters. Nudify.im processes most photos in under 10 seconds. We operate a multi-GPU cluster with load balancing to maintain this speed even during peak demand.',
      ],
      faqs: [
        { q: 'Why is Nudify.im better than free alternatives?', a: 'Free alternatives typically use inferior models, have poor privacy practices, and produce watermarked, low-quality results. Nudify.im offers genuinely superior quality even on the free tier.' },
        { q: 'Is Nudify.im faster than competitors?', a: 'Yes — our average processing time is 5–10 seconds. Many competitors take 30 seconds to several minutes.' },
        { q: 'Does Nudify.im work better on certain photo types?', a: 'It works on all photo types but performs best with clear, well-lit, high-resolution images.' },
        { q: 'How does Nudify.im handle edge cases?', a: 'Our AI handles difficult poses, multiple people, complex clothing, and challenging lighting better than most alternatives.' },
        { q: 'Is there a trial so I can compare myself?', a: 'Yes — 5 free nudifications daily with no account required. Judge the quality yourself.' },
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// nudify.my
// ---------------------------------------------------------------------------
const nudifyMy: DomainConfig = {
  domain: 'nudify.my',
  layout: 'centered',
  brandName: 'Nudify.my',
  tagline: 'Nudify My Photo — AI Clothes Removal',
  metaTitle: 'Nudify.my — Nudify My Photo with AI in Seconds',
  metaDescription:
    'Want to nudify your photo? Upload it to Nudify.my and our AI removes clothing in under 10 seconds. Realistic, private, free to try.',
  primaryColor: 'bg-rose-700',
  primaryHex: '#be123c',
  accentHex: '#e11d48',
  heroHeadline: 'Nudify My Photo — Instantly',
  heroSubheadline:
    'Upload your photo and our AI removes clothing in seconds. Photorealistic results. Completely private. Free to try.',
  ctaUrl: `${BASE_URL}/?utm_source=nudify.my&utm_medium=landing`,
  ctaText: 'Nudify My Photo Free',
  stats: [
    { value: '2M+', label: 'Photos processed' },
    { value: '10s', label: 'Average result time' },
    { value: '24h', label: 'Auto-delete on uploads' },
    { value: 'Free', label: '5 daily credits' },
  ],
  features: [
    { icon: '📸', title: 'Any Photo', desc: 'Works on selfies, portraits, full-body shots, and everything in between.' },
    { icon: '⚡', title: 'Instant Processing', desc: 'AI results in under 10 seconds on dedicated GPU hardware.' },
    { icon: '🔒', title: '100% Private', desc: 'Your photo is automatically deleted within 24 hours. No exceptions.' },
    { icon: '🎨', title: 'Choose Your Style', desc: '19 styles — from subtle to explicit. You\'re in control.' },
    { icon: '💎', title: 'Free Daily Credits', desc: '5 free nudifications per day, no credit card needed.' },
    { icon: '🔄', title: 'Free Retries', desc: 'Not happy? Retry once for free within 1 hour.' },
  ],
  subpages: [
    {
      slug: 'nudify-my-photo',
      title: 'Nudify My Photo — AI Clothes Removal | Nudify.my',
      metaDescription: 'Nudify my photo with AI. Upload any photo and get realistic nude results in seconds. Private, fast, free.',
      h1: 'How to Nudify My Photo with AI',
      intro: 'Nudify.my makes it simple to nudify your own photos. In three clicks, our AI removes clothing from any photo and produces a photorealistic nude result.',
      body: [
        'Upload your photo, choose a style, and hit Create. That\'s it. Our AI does the rest in under 10 seconds — no editing skills, no Photoshop, no manual work.',
        'We support JPG, PNG, and WebP formats up to 10MB. For best results, use a clear, well-lit photo with a visible subject. The AI handles the rest.',
        'All processing happens on our private, encrypted servers. Your photo is never shared, never used for training, and automatically deleted within 24 hours.',
      ],
      faqs: [
        { q: 'Can I nudify my own selfie?', a: 'Yes — selfies work great. For best results, use a well-lit photo with a clear, facing-forward pose.' },
        { q: 'How quickly will I get my nudified photo?', a: 'Usually under 10 seconds. During busy periods it may take up to 30 seconds.' },
        { q: 'Will my photo be seen by anyone?', a: 'No. Your photo is processed privately and automatically deleted within 24 hours.' },
        { q: 'Is it really free?', a: 'Yes — 5 free nudifications every day with no credit card.' },
        { q: 'Can I nudify photos of others?', a: 'Only with their full consent. Non-consensual nudification is prohibited and may be illegal in your jurisdiction.' },
      ],
    },
    {
      slug: 'ai-nude-selfie',
      title: 'AI Nude Selfie Generator — Nudify My Selfie | Nudify.my',
      metaDescription: 'Turn any selfie into an AI nude photo. Nudify.my produces realistic results from any selfie in seconds.',
      h1: 'AI Nude Selfie Generator',
      intro: 'Nudify.my is the best AI nude selfie generator available. Upload a selfie and our AI produces a realistic nude version in under 10 seconds.',
      body: [
        'Selfies are ideal inputs for our AI nudifier. The front-facing perspective with clear subject framing gives our model everything it needs to produce accurate, realistic results.',
        'Choose from 19 nudification styles to control the final look. You can also select a custom colour or enter a text prompt for full creative control over the output.',
        'Your selfie is never shared or stored beyond 24 hours. Nudify.my is built for complete privacy.',
      ],
      faqs: [
        { q: 'Does it work on phone selfies?', a: 'Yes — modern phone cameras produce more than enough resolution for great results.' },
        { q: 'What\'s the best selfie pose for nudification?', a: 'Clear, well-lit, front-facing photos with visible clothing produce the best results.' },
        { q: 'Can I save the result to my phone?', a: 'Yes — tap Save on the result to download it directly to your device.' },
        { q: 'Is there a mobile app for nude selfies?', a: 'The web app works perfectly on mobile. A Chrome extension is available for desktop.' },
        { q: 'How do I get started?', a: 'Click "Nudify My Photo Free" above. You get 5 free daily nudifications with no account needed.' },
      ],
    },
    {
      slug: 'how-it-works',
      title: 'How to Nudify My Photo — Step by Step | Nudify.my',
      metaDescription: 'Step-by-step guide to nudifying your photo with Nudify.my. Upload, style, result — done in 30 seconds.',
      h1: 'How to Nudify My Photo — Step by Step',
      intro: 'Nudifying your photo with Nudify.my takes about 30 seconds from start to finish. Here\'s the exact process.',
      body: [
        '1. Open Nudify.my and click "Nudify My Photo Free". You don\'t need to create an account — we give you 5 free daily credits automatically.',
        '2. Upload your photo. Drag and drop, click to browse, or paste a URL. Supported formats: JPG, PNG, WebP. Max size: 10MB.',
        '3. Pick your style from 19 options. You can also select a colour accent or write a custom prompt if you want specific details.',
        '4. Click Create and wait about 10 seconds. Your nudified photo appears in the gallery with a before/after comparison slider.',
        '5. Download, share, or retry. If the first result isn\'t perfect, you get one free retry within an hour.',
      ],
      faqs: [
        { q: 'Do I need an account to nudify my photo?', a: 'No — just open the app and you\'re given 5 free daily credits automatically.' },
        { q: 'What if the AI doesn\'t do it right?', a: 'You get one free retry per generation within 1 hour. After that, each retry costs 1 diamond.' },
        { q: 'Can I nudify the same photo in multiple styles?', a: 'Yes — each style costs 1 diamond (credit).' },
        { q: 'How is my privacy protected?', a: 'Input photos are deleted within 24 hours. Results are private to your account.' },
        { q: 'What makes a good input photo?', a: 'Clear, well-lit, at least 512px wide, with the subject clearly visible.' },
      ],
    },
    {
      slug: 'examples',
      title: 'Nudify My Photo — Before & After Examples | Nudify.my',
      metaDescription: 'Real before and after examples of AI nudification. See what Nudify.my can do with your photos.',
      h1: 'Before & After: Nudify My Photo Examples',
      intro: 'Real results from real photos. Every before/after pair below was generated by our AI in under 10 seconds with no manual editing.',
      body: [
        'The quality of your nudification depends on the quality of your input photo. High-resolution, well-lit photos with clear subjects produce the most realistic results.',
        'Use the sliders below to compare before and after. All examples are genuine AI outputs from Nudify.my.',
        'Try it yourself — click "Nudify My Photo Free" and upload your own photo for personalised results.',
      ],
      faqs: [
        { q: 'Are these real results?', a: 'Yes — all examples are genuine outputs from Nudify.my, unretouched.' },
        { q: 'Can my results look this good?', a: 'With a good input photo, yes. Match the resolution and lighting of the example inputs.' },
        { q: 'What styles are shown?', a: 'The gallery includes Nude, Lingerie, Bikini, and explicit NSFW styles.' },
        { q: 'How do I get the best result?', a: 'Use a clear, well-lit, high-resolution photo with the subject facing forward.' },
        { q: 'Is this safe to try?', a: 'Yes — 5 free daily nudifications with no account and no credit card.' },
      ],
    },
    {
      slug: 'free',
      title: 'Free AI Photo Nudifier — 5 Daily Credits | Nudify.my',
      metaDescription: 'Nudify photos for free. Get 5 AI nudifications every day at Nudify.my. No sign-up, no credit card.',
      h1: 'Free AI Nudification — 5 Photos Every Day',
      intro: 'Nudify.my is free to use. You receive 5 diamond credits every day at midnight — use them to nudify any photos you want, no payment needed.',
      body: [
        'Free credits refresh every day. If you don\'t use them, they reset — so check back daily for your 5 free nudifications.',
        'Create a free account to unlock your gallery, access sharing features, and track your history. Still no credit card required.',
        'Need more than 5 per day? Buy a diamond pack starting at just $4.99 for 60 nudifications. Credits never expire.',
      ],
      faqs: [
        { q: 'How many free nudifications per day?', a: '5 per day, resetting at midnight UTC.' },
        { q: 'Do I need a credit card?', a: 'No. Free credits are given automatically to every user.' },
        { q: 'What\'s limited on the free plan?', a: 'Downloads include a subtle watermark. Create an account and buy diamonds for watermark-free exports.' },
        { q: 'How cheap are paid credits?', a: 'Diamond packs from $4.99 for 60 nudifications. One nudification = $0.08 at that rate.' },
        { q: 'Do unused daily free credits carry over?', a: 'No — free daily credits reset each midnight and don\'t roll over.' },
      ],
    },
    {
      slug: 'faq',
      title: 'FAQ — Nudify My Photo Questions Answered | Nudify.my',
      metaDescription: 'FAQ for Nudify.my. How it works, privacy, pricing, and more answered.',
      h1: 'Nudify.my FAQ',
      intro: 'Common questions about Nudify.my answered. Still have questions? Email hello@vixie.art.',
      body: [],
      faqs: [
        { q: 'What is Nudify.my?', a: 'Nudify.my is an AI tool that removes clothing from photos to create realistic nude images. It\'s designed to be fast, private, and easy to use.' },
        { q: 'Is it free?', a: '5 free nudifications per day, no account or credit card required.' },
        { q: 'How realistic are the results?', a: 'Very realistic. Our AI produces photorealistic results with accurate skin, lighting, and body proportions.' },
        { q: 'Is my photo private?', a: 'Completely. Input photos are deleted within 24 hours. We never share your data.' },
        { q: 'What photo formats work?', a: 'JPG, PNG, and WebP up to 10MB.' },
        { q: 'Can I nudify a photo of someone else?', a: 'Only with their explicit consent. Non-consensual use is prohibited.' },
        { q: 'Is there a Chrome extension?', a: 'Yes — available in the Chrome Web Store.' },
        { q: 'Can I use this on my phone?', a: 'Yes — the web app works on all mobile browsers.' },
        { q: 'Do credits expire?', a: 'Free daily credits reset daily. Paid credits never expire.' },
        { q: 'How do I delete my data?', a: 'Email privacy@vixie.art and we\'ll delete everything within 48 hours.' },
      ],
    },
    {
      slug: 'privacy',
      title: 'Privacy First AI Nudifier — How We Protect You | Nudify.my',
      metaDescription: 'How Nudify.my protects your privacy. Encrypted uploads, 24-hour auto-deletion, zero data sharing.',
      h1: 'Privacy-First AI Nudification',
      intro: 'Privacy is the foundation of Nudify.my. When you nudify your photo, it\'s processed privately, stored securely, and deleted automatically. Here\'s how.',
      body: [
        'Your upload travels over an encrypted HTTPS connection and lands directly on our processing servers — it never passes through third-party infrastructure.',
        'Input photos are deleted within 24 hours via an automated process. We don\'t keep originals. Ever.',
        'We use Storj decentralised cloud storage for output images. Data is encrypted at rest and split across distributed nodes — practically impossible to intercept.',
        'We never sell user data. Our revenue comes from diamond credits, not advertising or data brokerage.',
      ],
      faqs: [
        { q: 'Who can see my nudified photo?', a: 'Only you — photos are private by default.' },
        { q: 'Do you use my photo for AI training?', a: 'No. Never.' },
        { q: 'Is payment information secure?', a: 'We never store card details. Payments go through PCI-DSS compliant processors.' },
        { q: 'Can I delete my account?', a: 'Yes — email privacy@vixie.art.' },
        { q: 'Do you comply with GDPR?', a: 'Yes — you have the right to access, correct, and delete your personal data at any time.' },
      ],
    },
    {
      slug: 'styles',
      title: 'AI Nudify Styles — 19 Options | Nudify.my',
      metaDescription: 'Explore all 19 AI nudification styles on Nudify.my. From tasteful to explicit — you choose the look.',
      h1: 'All 19 AI Nudify Styles',
      intro: 'Nudify.my offers 19 distinct nudification styles across casual, swimwear, lingerie, nude, and NSFW categories. Here\'s what each one delivers.',
      body: [
        'Casual & Everyday: Transform photos with casual clothing styles. Great starting point for realistic, everyday looks.',
        'Swimwear & Athletic: Bikinis, swimsuits, sports bras, and athletic wear. Perfect for summer vibes.',
        'Lingerie & Intimate: A wide range of lingerie styles from tasteful to more daring — babydolls, corsets, lace teddies, and more.',
        'Nude: Full nudity styles ranging from soft and artistic to more explicit NSFW options.',
        'Custom: Enter your own prompt to describe exactly what you want. The AI follows your creative vision.',
        'Each style is selectable with one click. You can also choose a colour accent to influence garment colour where applicable.',
      ],
      faqs: [
        { q: 'Are NSFW styles available on the free plan?', a: 'Yes — all styles including NSFW are accessible with free daily credits. NSFW must be enabled in account settings.' },
        { q: 'Can I mix styles?', a: 'Not currently — one style per generation. You can run the same photo through different styles.' },
        { q: 'What does the colour picker do?', a: 'It influences the colour of any retained garments in the output. Select from presets or use a custom hex.' },
        { q: 'Can I use a custom prompt?', a: 'Yes — tap the custom prompt option and describe exactly what you want instead of selecting a preset style.' },
        { q: 'Are new styles added over time?', a: 'Yes — we add new styles regularly based on user feedback.' },
      ],
    },
    {
      slug: 'nudify-girlfriend',
      title: 'Nudify My Girlfriend Photo with AI | Nudify.my',
      metaDescription: 'AI nudify any photo with consent. Nudify.my creates realistic nude images from any photo in seconds.',
      h1: 'AI Nudify Any Photo — Realistic Results',
      intro: 'Nudify.my\'s AI creates photorealistic nude images from any consented photo. Upload, choose a style, and get results in seconds.',
      body: [
        'Our AI is trained to produce natural, realistic results across all body types and skin tones. The output matches the lighting, background, and proportions of the original photo seamlessly.',
        'This feature must only be used with the full knowledge and consent of the person in the photo. Non-consensual use is a violation of our Terms of Service and may be illegal.',
        'Results are completely private — stored in your encrypted gallery and never visible to anyone else.',
      ],
      faqs: [
        { q: 'Is consent required?', a: 'Yes — absolutely required. Only nudify photos with the explicit consent of the person depicted.' },
        { q: 'What if I upload a photo without consent?', a: 'This violates our Terms of Service. Accounts found doing so will be permanently banned.' },
        { q: 'How realistic is the result?', a: 'Very realistic. Our AI produces photorealistic results that match the original photo\'s lighting and proportions.' },
        { q: 'Is the result private?', a: 'Yes — results are stored in your private gallery, encrypted, and only visible to you.' },
        { q: 'How many free nudifications do I get?', a: '5 per day, no account required.' },
      ],
    },
    {
      slug: 'compare',
      title: 'Best AI Nudifier Comparison 2025 | Nudify.my',
      metaDescription: 'How Nudify.my compares to other AI nudifiers. Speed, quality, privacy, and price compared.',
      h1: 'Nudify.my vs Other AI Nudifiers — 2025 Comparison',
      intro: 'There are many AI nudifiers to choose from. Here\'s a straight comparison of what matters most: quality, speed, privacy, and price.',
      body: [
        'Quality: Nudify.my uses state-of-the-art AI models running on NVIDIA A100 GPUs. The results are sharper, more realistic, and more accurate than older tools.',
        'Speed: Our average processing time is 5–10 seconds. Most competitors take 30 seconds to several minutes.',
        'Privacy: Unlike many competitors, Nudify.my auto-deletes input photos within 24 hours and never uses your images for AI training.',
        'Price: Our free plan gives you 5 nudifications per day. Paid plans from $4.99/60 credits — significantly cheaper than most alternatives.',
      ],
      faqs: [
        { q: 'Is Nudify.my the cheapest option?', a: 'Our free tier (5/day) and lowest paid pack ($4.99/60) are among the most competitive in the market.' },
        { q: 'Is the quality really better?', a: 'Try the free plan and judge for yourself. Most users notice immediately the difference in realism.' },
        { q: 'Do competitors delete my photos?', a: 'Many don\'t. Nudify.my auto-deletes input photos within 24 hours — a standard most competitors don\'t meet.' },
        { q: 'Which tool is fastest?', a: 'Nudify.my consistently processes in under 10 seconds. Competitors often take much longer.' },
        { q: 'Can I switch from a competitor?', a: 'Yes — just create an account at Nudify.my. No import needed, start fresh with 5 free daily credits.' },
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// nudify.pics
// ---------------------------------------------------------------------------
const nudifyPics: DomainConfig = {
  domain: 'nudify.pics',
  layout: 'gallery',
  brandName: 'Nudify.pics',
  tagline: 'AI Nude Pics Generator — Instant & Free',
  metaTitle: 'Nudify.pics — AI Nude Pics Generator Online',
  metaDescription:
    'Generate AI nude pics from any photo. Upload an image and our AI creates photorealistic nude pictures in seconds. Free to try.',
  primaryColor: 'bg-amber-700',
  primaryHex: '#b45309',
  accentHex: '#d97706',
  heroHeadline: 'Generate AI Nude Pics Instantly',
  heroSubheadline:
    'Upload any photo and get photorealistic AI nude pictures in seconds. 19 styles, private processing, free credits daily.',
  ctaUrl: `${BASE_URL}/?utm_source=nudify.pics&utm_medium=landing`,
  ctaText: 'Generate Nude Pics Free',
  stats: [
    { value: '2M+', label: 'Nude pics generated' },
    { value: '19', label: 'AI styles' },
    { value: '< 10s', label: 'Per result' },
    { value: '4.9★', label: 'Rating' },
  ],
  features: [
    { icon: '🖼️', title: 'Photorealistic Pics', desc: 'AI-generated nude pics indistinguishable from real photography.' },
    { icon: '⚡', title: '10-Second Results', desc: 'No waiting. Results in under 10 seconds on our A100 GPU cluster.' },
    { icon: '🔐', title: 'Encrypted & Private', desc: 'All uploads encrypted. Input photos deleted within 24 hours.' },
    { icon: '🎭', title: '19 Styles', desc: 'From tasteful nude to explicit NSFW — choose your level.' },
    { icon: '📦', title: 'Batch Processing', desc: 'Generate nude pics from up to 10 photos at once (paid plans).' },
    { icon: '💎', title: '5 Free Daily', desc: 'Free nude pic generation every day. No card needed.' },
  ],
  subpages: [
    {
      slug: 'nude-ai-pics',
      title: 'Nude AI Pics — Generate Realistic AI Nudes | Nudify.pics',
      metaDescription: 'Generate nude AI pics from any photo. Realistic, fast, private. Try free at Nudify.pics.',
      h1: 'Nude AI Pics — Generate Realistic Results',
      intro: 'Nudify.pics generates photorealistic nude AI pics from any uploaded photo. Our AI understands lighting, skin tone, and body proportions to produce results that look completely natural.',
      body: [
        'Generating nude AI pics has never been easier or more realistic. Upload your photo, select a style, and our AI produces a nude version in under 10 seconds.',
        'We offer 19 styles across nude, lingerie, swimwear, and NSFW categories. You can also enter a custom text prompt for full creative control.',
        'Privacy is built in: input photos are deleted within 24 hours, results are private by default, and we never use your images for training.',
      ],
      faqs: [
        { q: 'How realistic are the AI nude pics?', a: 'Very realistic. Our model produces accurate skin texture, lighting, and body proportions.' },
        { q: 'Is it free to generate nude AI pics?', a: '5 free generations per day, no account required.' },
        { q: 'Can I generate nude pics of myself?', a: 'Yes — selfies and personal photos work great. Always ensure you have rights to the photos you upload.' },
        { q: 'Are there different styles?', a: '19 styles from tasteful nude to explicit NSFW.' },
        { q: 'Are my pics private?', a: 'Yes — your gallery is private and input photos are auto-deleted within 24 hours.' },
      ],
    },
    {
      slug: 'ai-nude-photo-generator',
      title: 'AI Nude Photo Generator — Create Nude Photos | Nudify.pics',
      metaDescription: 'The best AI nude photo generator. Upload any photo, choose a style, get realistic nude photos instantly.',
      h1: 'AI Nude Photo Generator',
      intro: 'Nudify.pics is an AI nude photo generator that transforms any clothed photo into a realistic nude image. No editing skills required — just upload and create.',
      body: [
        'Our AI nude photo generator uses cutting-edge generative AI running on dedicated GPU hardware. The result is a photorealistic nude photo generated from your input in under 10 seconds.',
        'Unlike crude editing tools, our AI understands context: it reads the original photo\'s lighting, background, skin tone, and body shape, then synthesizes a realistic nude interpretation that fits naturally.',
        'Try it free with 5 daily credits. No account, no credit card, no commitment.',
      ],
      faqs: [
        { q: 'What makes a good input for the nude photo generator?', a: 'Clear, well-lit photos with visible clothing and a focused subject at least 512px wide.' },
        { q: 'Can I generate nude photos in bulk?', a: 'Yes — paid plans support batches of up to 10 photos per request.' },
        { q: 'How does the AI generate nude photos?', a: 'It analyzes the input to identify clothing regions, body proportions, and lighting, then synthesizes realistic nude skin using our trained generative model.' },
        { q: 'Is there a watermark on generated nude photos?', a: 'Free plan includes a subtle watermark. Paid plans produce clean, watermark-free results.' },
        { q: 'How do I get started?', a: 'Click "Generate Nude Pics Free". 5 daily credits given automatically.' },
      ],
    },
    {
      slug: 'how-it-works',
      title: 'How the AI Nude Pic Generator Works | Nudify.pics',
      metaDescription: 'How Nudify.pics AI nude generator works. 3 simple steps to generate nude pics from any photo.',
      h1: 'How It Works — Generate Nude Pics in 3 Steps',
      intro: 'Generating nude AI pics with Nudify.pics takes about 30 seconds. Here\'s exactly how the process works.',
      body: [
        'Step 1 — Upload: Drag, drop, or click to upload any JPG, PNG, or WebP image (max 10MB). You can also paste a URL.',
        'Step 2 — Style: Choose from 19 nudification styles. Pick a colour accent for remaining garments. Or write a custom prompt.',
        'Step 3 — Generate: Click Create. In under 10 seconds, your AI nude pic is ready in the gallery with a before/after slider.',
        'Save, share, or retry. Free retry within 1 hour if the first result isn\'t what you wanted.',
      ],
      faqs: [
        { q: 'How long does it take?', a: 'Under 10 seconds for most photos.' },
        { q: 'What resolution is the output?', a: 'Output resolution matches the input, processed at up to 1024×1024px.' },
        { q: 'Can I generate multiple styles from one photo?', a: 'Yes — each style selection costs 1 diamond (credit).' },
        { q: 'Is there a mobile version?', a: 'Yes — the web app works on all mobile browsers.' },
        { q: 'What if I\'m not happy with the result?', a: 'One free retry per generation within 1 hour.' },
      ],
    },
    {
      slug: 'examples',
      title: 'AI Nude Pics Examples — Before & After Gallery | Nudify.pics',
      metaDescription: 'See real AI nude pic examples from Nudify.pics. Before and after comparisons across all major styles.',
      h1: 'AI Nude Pics — Before & After Gallery',
      intro: 'Real before and after examples generated by Nudify.pics AI. Use the sliders to compare results across different styles.',
      body: [
        'Every example below was generated in under 10 seconds with no manual editing. What you see is what you get.',
        'Results are best with high-resolution, well-lit input photos. The examples below represent typical quality at standard input resolutions.',
        'Try it yourself — 5 free AI nude pics per day, no account needed.',
      ],
      faqs: [
        { q: 'Are these real AI results?', a: 'Yes — genuine outputs, unedited.' },
        { q: 'Can I match this quality?', a: 'Yes — with a similar quality input photo.' },
        { q: 'What styles are shown?', a: 'Nude, Lingerie, Bikini, and NSFW explicit styles.' },
        { q: 'How do I get results this good?', a: 'Use a clear, well-lit, high-resolution image with a forward-facing subject.' },
        { q: 'Is it free?', a: '5 free nude pics per day, no account required.' },
      ],
    },
    {
      slug: 'free-nude-pics',
      title: 'Free AI Nude Pics — 5 Daily Free | Nudify.pics',
      metaDescription: 'Get 5 free AI nude pics every day at Nudify.pics. No credit card, no registration required.',
      h1: 'Free AI Nude Pics — 5 Every Day',
      intro: 'Nudify.pics gives you 5 free AI nude picture generations every single day. No account, no credit card — just open the app and create.',
      body: [
        'Free credits refresh at midnight UTC every day. Each credit generates one AI nude pic in any of our 19 styles.',
        'Free plan features: all 19 styles including NSFW, full gallery access, public sharing. Downloads include a subtle watermark.',
        'Need more? Paid packs from $4.99 for 60 nude pic generations. Credits never expire.',
      ],
      faqs: [
        { q: 'How many free nude pics per day?', a: '5 per day, refreshed at midnight UTC.' },
        { q: 'Do I need an account?', a: 'No — free credits are given automatically.' },
        { q: 'What\'s limited on the free plan?', a: 'Downloads have a watermark. Paid plans are watermark-free.' },
        { q: 'How cheap are paid credits?', a: '$4.99 for 60 credits (~$0.08 per nude pic).' },
        { q: 'Do free credits roll over?', a: 'No — they reset daily.' },
      ],
    },
    {
      slug: 'realistic-nudes',
      title: 'Realistic AI Nude Photos — How Real Can AI Get? | Nudify.pics',
      metaDescription: 'How realistic are AI nude photos? See Nudify.pics\' photorealistic results and learn what makes them so convincing.',
      h1: 'How Realistic Are AI Nude Photos?',
      intro: 'AI nude photo generation has advanced dramatically. Nudify.pics produces results that are genuinely photorealistic — indistinguishable from real photography in many cases. Here\'s how.',
      body: [
        'Realism comes from the model understanding context. Our AI doesn\'t just paste skin texture onto a photo — it reads the original image\'s lighting direction, body shape, skin tone, background, and perspective, then synthesizes a nude interpretation that fits all of these naturally.',
        'We run our AI on NVIDIA A100 80GB GPUs — the same hardware used by leading AI research labs. This allows us to use larger, more accurate models than services running on consumer-grade hardware.',
        'The result is AI nude photos that hold up to close inspection: correct skin texture, natural highlights and shadows, realistic body proportions, and seamless integration with the original photo\'s background.',
      ],
      faqs: [
        { q: 'Can you tell an AI nude from a real nude?', a: 'With Nudify.pics, it\'s very difficult. Our AI produces realistic skin texture, lighting, and proportions that closely match real photography.' },
        { q: 'What affects result quality?', a: 'Input photo resolution, lighting, and subject clarity are the biggest factors. High-quality input = high-quality output.' },
        { q: 'What GPU hardware do you use?', a: 'NVIDIA A100 80GB PCIe — among the most powerful AI inference hardware available.' },
        { q: 'Do you use SDXL or a custom model?', a: 'We use cutting-edge proprietary AI models for our nude generation pipeline.' },
        { q: 'How does the AI handle different skin tones?', a: 'Our model was trained on diverse datasets and handles all skin tones with equal quality.' },
      ],
    },
    {
      slug: 'faq',
      title: 'FAQ — AI Nude Pics Questions | Nudify.pics',
      metaDescription: 'Answers to all common questions about Nudify.pics AI nude pic generation.',
      h1: 'Nudify.pics FAQ',
      intro: 'Everything you need to know about generating AI nude pics at Nudify.pics.',
      body: [],
      faqs: [
        { q: 'What is Nudify.pics?', a: 'An AI tool that generates realistic nude photos from any uploaded image.' },
        { q: 'Is it free?', a: '5 free generations per day. No account or credit card needed.' },
        { q: 'What formats are supported?', a: 'JPG, PNG, WebP up to 10MB.' },
        { q: 'Are my pics private?', a: 'Yes — input deleted in 24h, output gallery is private to you.' },
        { q: 'Can I batch-generate?', a: 'Yes — up to 10 photos per request on paid plans.' },
        { q: 'Is there a watermark?', a: 'Free: yes. Paid: no.' },
        { q: 'What styles are available?', a: '19 styles across casual, swimwear, lingerie, nude, and NSFW.' },
        { q: 'Do credits expire?', a: 'Free credits reset daily. Paid credits never expire.' },
        { q: 'Is there a Chrome extension?', a: 'Yes — nudify from any website with one right-click.' },
        { q: 'How do I delete my data?', a: 'Email privacy@vixie.art.' },
      ],
    },
    {
      slug: 'privacy',
      title: 'Privacy & Security — AI Nude Pic Generator | Nudify.pics',
      metaDescription: 'How Nudify.pics keeps your nude pic generation private. Encrypted, auto-deleted, zero data sharing.',
      h1: 'Privacy & Security at Nudify.pics',
      intro: 'We understand that generating nude pics is an intimate activity. Privacy is our highest priority.',
      body: [
        'Every upload is encrypted over HTTPS and processed exclusively on our private servers. Your photos never touch third-party infrastructure.',
        'Input photos are automatically deleted within 24 hours — enforced by automated systems, not manual processes.',
        'Output images are stored on Storj decentralised cloud, encrypted at rest, private to your account.',
        'We generate revenue from credits, not data. We never sell user data or use photos for advertising.',
      ],
      faqs: [
        { q: 'Can anyone else see my generated nude pics?', a: 'No — your gallery is entirely private.' },
        { q: 'Do you use my photos for AI training?', a: 'Never.' },
        { q: 'What happens to my original photo?', a: 'Auto-deleted within 24 hours.' },
        { q: 'Is payment secure?', a: 'Yes — we use PCI-DSS compliant processors and never store card details.' },
        { q: 'Can I delete my account?', a: 'Yes — email privacy@vixie.art.' },
      ],
    },
    {
      slug: 'compare',
      title: 'Best AI Nude Pic Generator Comparison | Nudify.pics',
      metaDescription: 'Nudify.pics vs other AI nude generators. Compare quality, speed, privacy, and price.',
      h1: 'Nudify.pics vs Other AI Nude Generators',
      intro: 'Why choose Nudify.pics over the dozens of other AI nude generators online? Here\'s the honest comparison.',
      body: [
        'Quality: We run on dedicated A100 GPUs with state-of-the-art models. Results are sharper and more realistic than competitors running on consumer hardware.',
        'Privacy: Auto-delete within 24 hours, no data selling, no training on your images. Most competitors don\'t offer this.',
        'Speed: Under 10 seconds per generation. Many tools take 30+ seconds.',
        'Price: Free plan with 5 daily credits. Paid from $4.99/60 credits. Better value than most.',
      ],
      faqs: [
        { q: 'Is Nudify.pics the best quality?', a: 'Our A100-powered models produce industry-leading realism. Try the free plan and compare.' },
        { q: 'Is it the cheapest?', a: '5 free/day and $4.99/60 credits makes it one of the best-value options available.' },
        { q: 'Is it the fastest?', a: 'Sub-10-second average is faster than most competitors.' },
        { q: 'How does privacy compare?', a: '24-hour auto-delete and no data selling is a higher standard than most alternatives.' },
        { q: 'Can I try it free?', a: '5 free daily nude pic generations, no account needed.' },
      ],
    },
    {
      slug: 'nude-ai-app',
      title: 'Nude AI App — Web & Chrome Extension | Nudify.pics',
      metaDescription: 'Use the Nudify.pics nude AI app on any device. Full web app and Chrome extension available.',
      h1: 'Nude AI App — Web & Chrome Extension',
      intro: 'Nudify.pics works on every device with no installation. Open the web app or install the Chrome extension for one-click nude AI generation from any webpage.',
      body: [
        'The web app is fully responsive and works on iPhone, Android, tablet, and desktop browsers. No app download required — just navigate to nudify.pics.',
        'The Chrome extension adds a "Nudify" option to any right-clicked image on the web. Perfect for power users who want to nudify images without leaving their current page.',
        'Both share your account, diamonds, and gallery seamlessly.',
      ],
      faqs: [
        { q: 'Is there an iOS or Android app?', a: 'The web app works on mobile browsers. Native apps are planned.' },
        { q: 'Where is the Chrome extension?', a: 'Search "Nudify" in the Chrome Web Store.' },
        { q: 'Does the extension track my browsing?', a: 'No — it only activates when you explicitly nudify an image.' },
        { q: 'Can I use web app and extension with one account?', a: 'Yes — fully synced.' },
        { q: 'Is there a desktop app?', a: 'Not yet. The web app handles all use cases.' },
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// nudie.app
// ---------------------------------------------------------------------------
const nudieApp: DomainConfig = {
  domain: 'nudie.app',
  layout: 'app',
  brandName: 'Nudie.app',
  tagline: 'The #1 Nude AI App — Fast, Realistic, Private',
  metaTitle: 'Nudie.app — AI Nude Generator App Online',
  metaDescription:
    'The best nude AI app online. Transform any photo with our AI nude generator. Free to start, incredibly realistic, completely private.',
  primaryColor: 'bg-emerald-700',
  primaryHex: '#047857',
  accentHex: '#059669',
  heroHeadline: 'The AI Nude App That Actually Works',
  heroSubheadline:
    'Photorealistic AI nudification in under 10 seconds. 19 styles. Private by design. Try it free — no credit card needed.',
  ctaUrl: `${BASE_URL}/?utm_source=nudie.app&utm_medium=landing`,
  ctaText: 'Open the App Free',
  stats: [
    { value: '2M+', label: 'Users' },
    { value: '10s', label: 'Average result' },
    { value: '19', label: 'AI styles' },
    { value: '5', label: 'Free daily credits' },
  ],
  features: [
    { icon: '📱', title: 'Works on Any Device', desc: 'Full web app on mobile, tablet, and desktop. Chrome extension available.' },
    { icon: '🤖', title: 'Advanced AI', desc: 'Cutting-edge AI models running on A100 GPUs for truly photorealistic results.' },
    { icon: '🔒', title: 'Private by Design', desc: 'Input photos deleted in 24h. End-to-end encryption. Zero data selling.' },
    { icon: '🎨', title: '19 Nude Styles', desc: 'From lingerie to full nude to NSFW — choose the exact look you want.' },
    { icon: '💎', title: 'Credits, Not Subscriptions', desc: 'Buy once, use forever. Credits never expire. No monthly fees.' },
    { icon: '⚡', title: 'Blazing Fast', desc: 'Sub-10-second processing on our dedicated multi-GPU cluster.' },
  ],
  subpages: [
    {
      slug: 'nude-ai-app',
      title: 'Nude AI App — Best AI Nude Generator 2025 | Nudie.app',
      metaDescription: 'The best nude AI app in 2025. Photorealistic AI nude generation in seconds. Free to try at Nudie.app.',
      h1: 'The Best Nude AI App in 2025',
      intro: 'Nudie.app is rated the top nude AI app by users worldwide. Our cutting-edge AI produces photorealistic nude images from any photo in under 10 seconds.',
      body: [
        'What separates a great nude AI app from a mediocre one? Realism, speed, privacy, and ease of use. Nudie.app leads on all four.',
        'Our AI runs on NVIDIA A100 80GB GPUs — the most advanced AI inference hardware available — to deliver consistently high-quality results regardless of input complexity.',
        'The app works on every device: iPhone, Android, desktop browser, and via Chrome extension. No downloads, no installs — just open and go.',
        '5 free credits every day. No credit card, no sign-up required. The best nude AI experience, absolutely free to try.',
      ],
      faqs: [
        { q: 'Is Nudie.app a real app or web app?', a: 'A progressive web app — works on every device via browser. Plus a Chrome extension for desktop.' },
        { q: 'How good is the AI?', a: 'We use cutting-edge generative AI on A100 GPUs. Results are photorealistic and highly accurate.' },
        { q: 'Is it free?', a: '5 free nude generations per day. No card, no account needed.' },
        { q: 'Is it safe and private?', a: 'Yes — encrypted uploads, 24-hour auto-delete, no data selling.' },
        { q: 'What makes it the best nude AI app?', a: 'The combination of realism (A100 GPU models), speed (<10s), privacy (24h delete), and price (free tier + affordable credits).' },
      ],
    },
    {
      slug: 'how-it-works',
      title: 'How Nudie.app Works — AI Nude Generator Guide | Nudie.app',
      metaDescription: 'How Nudie.app\'s AI nude generator works. Upload, pick a style, get realistic results in 10 seconds.',
      h1: 'How Nudie.app Works',
      intro: 'Getting your AI nude result takes 30 seconds. Here\'s the exact process from upload to final image.',
      body: [
        '1. Open Nudie.app — no sign-up needed. You\'re given 5 free daily credits automatically.',
        '2. Upload your photo — drag and drop, click to browse, or paste a URL. JPG, PNG, WebP up to 10MB.',
        '3. Choose a style — 19 options from tasteful to explicit. Or enter a custom text prompt.',
        '4. Click Create — results appear in under 10 seconds. View with a before/after comparison slider.',
        '5. Save or share — download directly, or generate a shareable link.',
      ],
      faqs: [
        { q: 'Do I need to create an account?', a: 'No — just open the app for 5 free daily credits.' },
        { q: 'How long does it take?', a: 'Under 10 seconds for most photos.' },
        { q: 'Can I try multiple styles on one photo?', a: 'Yes — each style costs 1 credit.' },
        { q: 'What if the result isn\'t right?', a: 'One free retry per generation within 1 hour.' },
        { q: 'Is there a size limit?', a: 'Max 10MB per image. Minimum 512×512px recommended.' },
      ],
    },
    {
      slug: 'features',
      title: 'Nudie.app Features — Full AI Nude App Feature List | Nudie.app',
      metaDescription: 'Explore all Nudie.app features. AI nude generation, 19 styles, batch processing, gallery, sharing, and more.',
      h1: 'Nudie.app — Full Feature List',
      intro: 'Nudie.app is a fully-featured AI nude app. Here\'s everything you get.',
      body: [
        'Core: AI nude generation from any photo in 19 styles, before/after comparison slider, downloadable results, public sharing.',
        'Quality: Cutting-edge AI on A100 GPUs, custom text prompts, colour picker for garment colour, photorealistic output up to 1024px.',
        'Productivity: Batch processing (up to 10 photos, paid plans), free retry within 1 hour, gallery with cursor-based pagination.',
        'Privacy: End-to-end encryption, input auto-delete in 24h, no third-party data sharing.',
        'Payments: Diamond credits (no subscriptions), card and crypto accepted, referral system (50 diamonds per referral).',
        'Platforms: Web app, Chrome extension (right-click any image), mobile-optimised.',
      ],
      faqs: [
        { q: 'Is batch processing available on the free plan?', a: 'No — batch processing (up to 10 photos) is a paid feature.' },
        { q: 'What is the custom prompt feature?', a: 'Instead of selecting a preset style, describe exactly what you want in text. The AI follows your instructions.' },
        { q: 'How does the referral system work?', a: 'Share your referral link. When someone makes their first purchase, you earn 50 diamonds.' },
        { q: 'What crypto can I use to pay?', a: 'Bitcoin, Ethereum, USDT, and dozens more via NOWPayments.' },
        { q: 'Is the gallery searchable?', a: 'You can browse with pagination. Search is planned for a future update.' },
      ],
    },
    {
      slug: 'examples',
      title: 'AI Nude App Examples — Before & After | Nudie.app',
      metaDescription: 'See Nudie.app AI nude generation results. Real before and after comparisons from our AI nude app.',
      h1: 'AI Nude App Results — Before & After Examples',
      intro: 'Real results from Nudie.app\'s AI. Every before/after pair below was generated in under 10 seconds with no manual editing.',
      body: [
        'Use the sliders to compare original and AI-generated nude photos. These are genuine outputs from our production AI, unretouched.',
        'Result quality scales with input photo quality. High-resolution, well-lit images produce the most realistic nude generations.',
        'Try it yourself — 5 free AI nude generations per day, no account needed.',
      ],
      faqs: [
        { q: 'Are these real AI results?', a: 'Yes — genuine, unedited outputs from Nudie.app.' },
        { q: 'Can I get results this good?', a: 'Yes — with a similar quality input photo.' },
        { q: 'What styles are shown?', a: 'Nude, Lingerie, Bikini, and NSFW explicit.' },
        { q: 'How do I get the best results?', a: 'Use clear, well-lit, high-resolution photos with a forward-facing subject.' },
        { q: 'Is it really free?', a: '5 free AI nude generations per day, no card needed.' },
      ],
    },
    {
      slug: 'free',
      title: 'Free Nude AI App — 5 Daily Credits | Nudie.app',
      metaDescription: 'Use the Nudie.app nude AI app for free. 5 free AI nude generations every day. No credit card.',
      h1: 'Free Nude AI App — 5 Credits Every Day',
      intro: 'Nudie.app is free to use. Every day you receive 5 diamond credits — enough for 5 AI nude generations in any style.',
      body: [
        'Free credits are given automatically — no account, no credit card, no commitment. Open the app and start immediately.',
        'Free plan includes all 19 styles, full gallery, and public sharing. Downloads include a subtle watermark.',
        'Paid diamond packs start at $4.99 for 60 generations (credits never expire). The most affordable nude AI credits available.',
      ],
      faqs: [
        { q: 'Is Nudie.app really free?', a: 'Yes — 5 free nude AI generations per day, no card needed.' },
        { q: 'What\'s the catch?', a: 'Free downloads have a watermark. That\'s it.' },
        { q: 'How much are paid credits?', a: '$4.99 for 60 (~$0.08 each). Never expire.' },
        { q: 'Do free credits carry over?', a: 'No — they reset at midnight UTC daily.' },
        { q: 'Can I earn free credits?', a: 'Yes — refer a friend and earn 50 diamonds on their first purchase.' },
      ],
    },
    {
      slug: 'faq',
      title: 'Nudie.app FAQ — All Questions Answered | Nudie.app',
      metaDescription: 'FAQ for Nudie.app AI nude generator. How it works, pricing, privacy, safety and more.',
      h1: 'Nudie.app Frequently Asked Questions',
      intro: 'All your Nudie.app questions answered in one place.',
      body: [],
      faqs: [
        { q: 'What is Nudie.app?', a: 'An AI web app that generates realistic nude images from any uploaded photo.' },
        { q: 'Is it free to use?', a: 'Yes — 5 free generations per day, no account required.' },
        { q: 'How does the AI work?', a: 'Cutting-edge generative AI on A100 GPUs synthesizes realistic nude skin based on the input photo.' },
        { q: 'Is it private?', a: 'Yes — input photos deleted in 24h, output gallery is private.' },
        { q: 'What styles are available?', a: '19 styles from casual to NSFW explicit.' },
        { q: 'Is there a Chrome extension?', a: 'Yes — nudify any image from any website with one right-click.' },
        { q: 'Can I pay with crypto?', a: 'Yes — Bitcoin, ETH, USDT and more.' },
        { q: 'Do credits expire?', a: 'Free daily: yes (resets midnight). Paid: never.' },
        { q: 'What\'s the minimum age?', a: '18+. We actively enforce this.' },
        { q: 'How do I contact support?', a: 'Email hello@vixie.art.' },
      ],
    },
    {
      slug: 'privacy',
      title: 'Privacy — Nudie.app AI Nude App | Nudie.app',
      metaDescription: 'How Nudie.app protects your privacy. Encrypted, auto-deleted, zero data sharing.',
      h1: 'Privacy at Nudie.app',
      intro: 'Nudie.app is built privacy-first. Here\'s exactly how we protect you.',
      body: [
        'Encrypted transmission: all uploads use HTTPS/TLS end-to-end.',
        'Auto-deletion: input photos deleted within 24 hours, automated.',
        'Decentralised storage: output images on Storj, encrypted at rest.',
        'No data selling: our revenue is credits, not advertising or data.',
        'No AI training on your photos: ever.',
      ],
      faqs: [
        { q: 'Can anyone see my results?', a: 'No — private by default. Share is opt-in.' },
        { q: 'Do you sell my data?', a: 'Never.' },
        { q: 'Do you train AI on my photos?', a: 'Never.' },
        { q: 'Can I delete my account?', a: 'Yes — email privacy@vixie.art.' },
        { q: 'Is payment info stored?', a: 'No — never. PCI-DSS compliant processors handle all payments.' },
      ],
    },
    {
      slug: 'chrome-extension',
      title: 'Nudie Chrome Extension — Nudify Any Image | Nudie.app',
      metaDescription: 'Install the Nudie.app Chrome extension. Nudify any image on any website with one right-click.',
      h1: 'Nudie Chrome Extension',
      intro: 'The Nudie.app Chrome extension lets you nudify any image on any website with a single right-click. No need to open the web app — it runs in a side panel.',
      body: [
        'Install the extension from the Chrome Web Store. Once installed, right-click any image on any webpage and select "Nudify with Nudie.app".',
        'The extension opens in a side panel, letting you nudify the image while keeping your current tab open. Results appear in under 10 seconds.',
        'The extension shares your Nudie.app account, diamonds, and gallery — everything synced across web app and extension.',
        'Privacy note: the extension only activates when you explicitly use it. It does not track your browsing or access any data without your action.',
      ],
      faqs: [
        { q: 'Where can I install the extension?', a: 'Search "Nudie.app" in the Chrome Web Store.' },
        { q: 'Does it work on Firefox?', a: 'Chrome and Chromium-based browsers (Edge, Brave) are supported. Firefox version is planned.' },
        { q: 'Does it track my browsing?', a: 'No — it only activates when you explicitly nudify an image.' },
        { q: 'Does it use my Nudie.app credits?', a: 'Yes — each nudification via the extension costs 1 diamond, same as the web app.' },
        { q: 'Can I use it without a Nudie.app account?', a: 'Yes — you get 5 free daily credits automatically, no account needed.' },
      ],
    },
    {
      slug: 'download',
      title: 'Download Nudie App — Web & Chrome | Nudie.app',
      metaDescription: 'Get the Nudie.app AI nude app. No download needed — works in browser. Chrome extension available.',
      h1: 'Get the Nudie.app AI Nude App',
      intro: 'Nudie.app requires no download or installation. It\'s a full-featured web app that works in any modern browser — phone, tablet, or desktop.',
      body: [
        'Open nudie.app in your browser and you\'re ready to go. The web app is fully optimised for mobile.',
        'For desktop power users, install the Chrome extension for one-click nudification from any website. Available in the Chrome Web Store.',
        'An Android and iOS app is planned. Bookmark nudie.app on your home screen in the meantime for an app-like experience.',
      ],
      faqs: [
        { q: 'Is there a downloadable app?', a: 'The web app requires no download. A native mobile app is planned.' },
        { q: 'Can I add it to my phone home screen?', a: 'Yes — use your browser\'s "Add to Home Screen" option for an app-like experience.' },
        { q: 'Is the mobile experience good?', a: 'Yes — fully responsive design optimised for mobile browsers.' },
        { q: 'Where is the Chrome extension?', a: 'Search "Nudie.app" in the Chrome Web Store.' },
        { q: 'Does it work on Safari?', a: 'Yes — works on Safari on iPhone, iPad, and Mac.' },
      ],
    },
    {
      slug: 'compare',
      title: 'Best Nude AI App Comparison 2025 | Nudie.app',
      metaDescription: 'Nudie.app vs other nude AI apps. Which is the best? See how we compare on quality, speed, privacy, and price.',
      h1: 'Best Nude AI App — 2025 Comparison',
      intro: 'Which nude AI app is actually the best? Here\'s how Nudie.app stacks up against the competition on the metrics that matter.',
      body: [
        'Realism: Our A100 GPU models produce photorealistic results that consistently outperform competitor tools.',
        'Speed: Sub-10-second generation. Competitors average 30–60 seconds.',
        'Privacy: 24-hour input auto-delete, zero data selling. Competitors often fall short here.',
        'Price: 5 free/day + $4.99/60 credits. Competitive with the best-value alternatives.',
        'Ease of use: No sign-up required. Web app plus Chrome extension. Works on every device.',
      ],
      faqs: [
        { q: 'Is Nudie.app the best quality nude AI app?', a: 'Our A100-powered models deliver industry-leading realism. Try free and compare.' },
        { q: 'Is it the cheapest?', a: '5 free/day and $4.99/60 credits — among the best-value options.' },
        { q: 'Is it the fastest?', a: 'Sub-10-second average is faster than most alternatives.' },
        { q: 'What about privacy vs competitors?', a: '24h auto-delete and no data selling is a higher standard than most.' },
        { q: 'Can I try before committing?', a: '5 free nude AI generations per day — no card, no account.' },
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// undress.cat
// ---------------------------------------------------------------------------
const undressCat: DomainConfig = {
  domain: 'undress.cat',
  layout: 'editorial',
  brandName: 'Undress.cat',
  tagline: 'AI Undress Tool — Remove Clothes with AI',
  metaTitle: 'Undress.cat — AI Undress Any Photo Online Free',
  metaDescription:
    'Undress any photo with AI. Upload a picture and our undress AI removes clothing in seconds. Photorealistic, private, free to try.',
  primaryColor: 'bg-indigo-700',
  primaryHex: '#4338ca',
  accentHex: '#4f46e5',
  heroHeadline: 'Undress Any Photo with AI',
  heroSubheadline:
    'The most realistic undress AI online. Upload a photo, choose a style, and watch our AI remove clothing in under 10 seconds.',
  ctaUrl: `${BASE_URL}/?utm_source=undress.cat&utm_medium=landing`,
  ctaText: 'Undress a Photo Free',
  stats: [
    { value: '2M+', label: 'Photos undressed' },
    { value: '< 10s', label: 'Per result' },
    { value: '19', label: 'Undress styles' },
    { value: '5/day', label: 'Free credits' },
  ],
  features: [
    { icon: '👗', title: 'AI Clothes Removal', desc: 'Advanced AI that realistically removes any type of clothing from any photo.' },
    { icon: '⚡', title: 'Instant Results', desc: 'Results in under 10 seconds on dedicated A100 GPU servers.' },
    { icon: '🔐', title: 'Private & Secure', desc: 'Input photos deleted within 24 hours. Zero third-party sharing.' },
    { icon: '🎨', title: '19 Undress Styles', desc: 'From tasteful to explicit — full control over the output.' },
    { icon: '🆓', title: '5 Free Daily', desc: 'Undress 5 photos every day for free. No sign-up.' },
    { icon: '📱', title: 'All Devices', desc: 'Works on phone, tablet, and desktop. Chrome extension available.' },
  ],
  subpages: [
    {
      slug: 'undress-ai',
      title: 'Undress AI — Remove Clothes from Photos with AI | Undress.cat',
      metaDescription: 'The best undress AI tool online. Remove clothes from any photo with AI in seconds. Free at Undress.cat.',
      h1: 'Undress AI — Remove Clothes from Photos',
      intro: 'Undress.cat is the most advanced undress AI tool available. Our AI removes clothing from any photo in under 10 seconds, producing photorealistic results that accurately match the original photo\'s lighting and proportions.',
      body: [
        'Undress AI technology has advanced rapidly. Undress.cat uses state-of-the-art generative AI running on NVIDIA A100 GPUs to produce results that are genuinely photorealistic.',
        'Our AI understands body structure, skin tone, lighting direction, and scene context — it doesn\'t just fill in pixels, it synthesizes a complete nude interpretation that looks natural within the original photo.',
        'Privacy is built in: input photos are deleted within 24 hours, results are private by default, and we never use your photos for AI training.',
        '5 free undress AI results per day — no account, no credit card required.',
      ],
      faqs: [
        { q: 'How does undress AI work?', a: 'The AI identifies clothing regions in the photo, analyzes body shape, skin tone, and lighting, then synthesizes realistic nude skin to replace the clothing.' },
        { q: 'How realistic is the undress AI?', a: 'Very realistic. Our model produces accurate skin texture, lighting, and body proportions indistinguishable from real photography in many cases.' },
        { q: 'Is undress AI free?', a: 'Yes — 5 free undress AI results per day, no sign-up needed.' },
        { q: 'Is undress AI private?', a: 'Yes — input photos are deleted within 24 hours. We never share your data.' },
        { q: 'What photos work best with undress AI?', a: 'Clear, well-lit photos with visible clothing and a focused subject at least 512px wide.' },
      ],
    },
    {
      slug: 'undress-photos',
      title: 'Undress Photos with AI — AI Photo Undresser | Undress.cat',
      metaDescription: 'Undress photos with AI clothes removal. Realistic results in seconds. Try free at Undress.cat.',
      h1: 'Undress Photos with AI Clothes Removal',
      intro: 'Undress.cat\'s AI photo undresser removes clothing from any photo in seconds. Upload, select a style, and get realistic undressed results instantly.',
      body: [
        'Our AI photo undresser works on any type of clothed photo: portraits, full-body shots, outdoor scenes, studio photos. The AI adapts to lighting and background context automatically.',
        'You get 19 undress styles to choose from — ranging from tasteful (lingerie, swimwear) to explicit nude and NSFW. Choose the level you want.',
        'Results are processed on our private servers and automatically deleted after 24 hours. Your undressed photos are never shared with anyone.',
      ],
      faqs: [
        { q: 'Does the undresser work on all body types?', a: 'Yes — our model handles diverse body shapes, skin tones, and features with equal quality.' },
        { q: 'Can I undress multiple photos at once?', a: 'Yes — batch processing up to 10 photos is available on paid plans.' },
        { q: 'What clothing types can be removed?', a: 'All types — casual clothing, dresses, swimwear, lingerie, jackets, etc.' },
        { q: 'Is there a free plan?', a: '5 free undress results per day, no account needed.' },
        { q: 'How is the output quality?', a: 'Photorealistic with accurate skin, lighting, and body proportions.' },
      ],
    },
    {
      slug: 'how-it-works',
      title: 'How the AI Undresser Works — Step by Step | Undress.cat',
      metaDescription: 'How Undress.cat\'s AI undresser works. Upload a photo, choose a style, get undressed results in 10 seconds.',
      h1: 'How Undress.cat Works — 3 Steps',
      intro: 'Undressing a photo with AI takes about 30 seconds. Here\'s the exact process.',
      body: [
        '1. Upload your photo — JPG, PNG, or WebP up to 10MB. Drag and drop, click to browse, or paste a URL.',
        '2. Choose an undress style — 19 options from tasteful (bikini, lingerie) to explicit nude and NSFW. You can also write a custom prompt.',
        '3. Click Create — results appear in under 10 seconds with a before/after comparison slider. Save, share, or retry.',
      ],
      faqs: [
        { q: 'Do I need an account?', a: 'No — 5 free daily credits given automatically.' },
        { q: 'How long does it take?', a: 'Under 10 seconds typically.' },
        { q: 'Can I get a refund of credits if I don\'t like the result?', a: 'One free retry per generation within 1 hour at no cost.' },
        { q: 'What\'s the maximum image size?', a: '10MB. Minimum 512×512px recommended.' },
        { q: 'Can I apply multiple styles to one photo?', a: 'Yes — each style costs 1 credit.' },
      ],
    },
    {
      slug: 'examples',
      title: 'AI Undress Examples — Before & After | Undress.cat',
      metaDescription: 'Real AI undress before and after examples from Undress.cat. See the quality across different undress styles.',
      h1: 'AI Undress Examples — Before & After',
      intro: 'Real before and after examples from Undress.cat\'s AI. Every result below was generated in under 10 seconds, no manual editing.',
      body: [
        'Use the sliders to compare the original clothed photo with the AI-undressed result. All examples are genuine AI outputs, unretouched.',
        'Styles shown include Nude, Lingerie, Bikini, and NSFW explicit. Quality scales with input resolution and clarity.',
        'Try it yourself — 5 free AI undress results per day, no account required.',
      ],
      faqs: [
        { q: 'Are these real results?', a: 'Yes — genuine, unedited outputs from Undress.cat.' },
        { q: 'Can I get results this good?', a: 'With a similar quality input, yes.' },
        { q: 'What styles are shown?', a: 'Nude, Lingerie, Bikini, and NSFW explicit.' },
        { q: 'How do I get the best results?', a: 'Use a clear, well-lit, high-resolution forward-facing photo.' },
        { q: 'Is it free?', a: '5 free undress results daily.' },
      ],
    },
    {
      slug: 'undress-online',
      title: 'Undress Online — AI Photo Undresser Online | Undress.cat',
      metaDescription: 'Undress photos online with AI. No download, no installation — instant AI undressing in your browser.',
      h1: 'Undress Photos Online — No Download Required',
      intro: 'Undress.cat lets you undress any photo online with AI — no download, no installation, no account required. Just open the website and upload your photo.',
      body: [
        'Our online AI undresser runs entirely in the cloud. You don\'t need a powerful computer — all the AI processing happens on our server-side GPU infrastructure.',
        'Works on every device: iPhone, Android, tablet, laptop, desktop. Any modern browser supported.',
        '5 free online undress results per day. No credit card, no registration.',
      ],
      faqs: [
        { q: 'Does online undressing require software?', a: 'No — everything runs in your browser.' },
        { q: 'Does it work on mobile?', a: 'Yes — fully optimised for mobile browsers.' },
        { q: 'Is there latency with online processing?', a: 'Under 10 seconds on our GPU cluster — faster than most local solutions.' },
        { q: 'Does it work on slow internet?', a: 'Yes — only the image upload and result download use bandwidth. Processing is server-side.' },
        { q: 'Is it free online?', a: '5 free undress results per day, no account needed.' },
      ],
    },
    {
      slug: 'free',
      title: 'Free AI Undress Tool — 5 Free Daily | Undress.cat',
      metaDescription: 'Undress photos with AI for free. 5 free AI undress results every day at Undress.cat. No credit card.',
      h1: 'Free AI Undress Tool — 5 Photos Every Day',
      intro: 'Undress.cat is free to use. Every day you receive 5 diamond credits — each good for one AI undress result in any of our 19 styles.',
      body: [
        'Free credits refresh every day at midnight UTC. No account, no credit card, no sign-up needed.',
        'Free plan includes: all 19 undress styles including NSFW, full gallery, public sharing. Downloads include a subtle watermark.',
        'Need more? Packs from $4.99 for 60 undress results. Credits never expire.',
      ],
      faqs: [
        { q: 'How many free undress results per day?', a: '5 per day, reset at midnight UTC.' },
        { q: 'Do I need a credit card?', a: 'No.' },
        { q: 'Is the free plan watermarked?', a: 'Downloads include a subtle watermark. Paid plans are clean.' },
        { q: 'How cheap are paid credits?', a: '$4.99 for 60 (~$0.08 each).' },
        { q: 'Do unused credits roll over?', a: 'Free daily credits reset — they don\'t roll over.' },
      ],
    },
    {
      slug: 'faq',
      title: 'Undress AI FAQ — All Questions Answered | Undress.cat',
      metaDescription: 'FAQ for Undress.cat. How undress AI works, privacy, pricing, safety and more.',
      h1: 'Undress.cat FAQ',
      intro: 'Everything you need to know about Undress.cat\'s AI undress tool.',
      body: [],
      faqs: [
        { q: 'What is Undress.cat?', a: 'An AI tool that removes clothing from photos to produce realistic nude images.' },
        { q: 'Is it free?', a: '5 free undress results per day, no account required.' },
        { q: 'How realistic are the results?', a: 'Very — photorealistic with accurate skin, lighting, and proportions.' },
        { q: 'Is my photo private?', a: 'Yes — input deleted in 24h, gallery private to you.' },
        { q: 'What formats work?', a: 'JPG, PNG, WebP up to 10MB.' },
        { q: 'What styles are available?', a: '19 styles from swimwear to NSFW explicit.' },
        { q: 'Can I undress in bulk?', a: 'Yes — up to 10 photos per batch on paid plans.' },
        { q: 'Is there a Chrome extension?', a: 'Yes — right-click any image to undress it.' },
        { q: 'Do credits expire?', a: 'Free: resets daily. Paid: never.' },
        { q: 'What\'s not allowed?', a: 'Minors, non-consensual real persons, and public figures without consent.' },
      ],
    },
    {
      slug: 'privacy',
      title: 'Privacy — How Undress.cat Protects You | Undress.cat',
      metaDescription: 'How Undress.cat keeps your undress AI use private. Encrypted, auto-deleted, zero data sharing.',
      h1: 'Privacy at Undress.cat',
      intro: 'We built Undress.cat with privacy as a core principle. Here\'s how we protect you.',
      body: [
        'All uploads are encrypted over HTTPS. Your photo goes directly to our processing infrastructure and nowhere else.',
        'Input photos are deleted within 24 hours — automatically, every time, without exception.',
        'Output images are encrypted at rest on Storj decentralised storage, private to your account.',
        'We never sell data. Revenue comes from diamond credits only.',
      ],
      faqs: [
        { q: 'Who sees my undressed photos?', a: 'Only you.' },
        { q: 'Do you train AI on my photos?', a: 'Never.' },
        { q: 'How long is my original stored?', a: '24 hours maximum, then permanently deleted.' },
        { q: 'Is payment secure?', a: 'PCI-DSS compliant processors. We never store card details.' },
        { q: 'Can I request data deletion?', a: 'Yes — email privacy@vixie.art.' },
      ],
    },
    {
      slug: 'safety',
      title: 'Safe & Legal Use of AI Undress Tools | Undress.cat',
      metaDescription: 'How to use AI undress tools safely and legally. Undress.cat\'s safety policy and consent guidelines.',
      h1: 'Safe & Legal Use of Undress.cat',
      intro: 'AI undress tools can be used safely and legally. Here\'s how — and what we do to prevent misuse.',
      body: [
        'Consent is non-negotiable. Only undress photos of yourself or people who have given you explicit consent. Non-consensual use is a violation of our Terms of Service and may be a criminal offence in your jurisdiction.',
        'Age restriction: all subjects must be 18 or older. We have automated safeguards to detect and block images of minors. Accounts found attempting to circumvent these are permanently banned.',
        'We do not endorse using AI undress tools to harass, humiliate, or harm others. Any such use is strictly prohibited.',
        'Public figure protection: we take extra steps to prevent the undressing of identifiable public figures. Attempting to do so will result in account termination.',
      ],
      faqs: [
        { q: 'Is it illegal to use AI undress tools?', a: 'Legality varies by jurisdiction and use case. Using it on yourself or with consent is generally legal. Non-consensual use is illegal in many countries.' },
        { q: 'How do you prevent misuse?', a: 'Automated detection of minors, public figures, and non-consensual content. User reports reviewed by our moderation team.' },
        { q: 'What happens if I violate the terms?', a: 'Immediate permanent account ban and, where required, reporting to authorities.' },
        { q: 'Is consent required?', a: 'Yes — always, for photos of real identifiable people.' },
        { q: 'Can I report misuse?', a: 'Yes — email dmca@vixie.art or report from within the app.' },
      ],
    },
    {
      slug: 'compare',
      title: 'Best AI Undress Tool Comparison 2025 | Undress.cat',
      metaDescription: 'How Undress.cat compares to other AI undress tools. Speed, quality, privacy, and price.',
      h1: 'Best AI Undress Tool — 2025 Comparison',
      intro: 'Which AI undress tool is actually the best? Here\'s how Undress.cat compares on the criteria that matter.',
      body: [
        'Quality: A100 GPU models producing photorealistic results. Better than legacy tools on realistic skin and proportions.',
        'Speed: Sub-10-second average. Competitors often take 30–90 seconds.',
        'Privacy: 24h auto-delete, no data selling. A higher standard than most.',
        'Price: 5 free/day + $4.99/60 credits. Credits never expire.',
      ],
      faqs: [
        { q: 'Is Undress.cat the best quality?', a: 'Our A100 models deliver industry-leading realism. Try free and compare.' },
        { q: 'Is it cheaper than undress.app alternatives?', a: '5 free/day and $4.99/60 makes it highly competitive.' },
        { q: 'Is it faster?', a: 'Sub-10 seconds is faster than most competitors.' },
        { q: 'Better privacy than competitors?', a: '24h auto-delete and no data selling exceeds most alternatives.' },
        { q: 'Free trial available?', a: '5 free undress results per day, no account.' },
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// Domain registry
// ---------------------------------------------------------------------------
export const DOMAIN_CONFIGS: Record<string, DomainConfig> = {
  'nudify.im': nudifyIm,
  'nudify.my': nudifyMy,
  'nudify.pics': nudifyPics,
  'nudie.app': nudieApp,
  'undress.cat': undressCat,
}

/** Fallback for local dev / unknown hosts */
export const DEFAULT_DOMAIN = 'nudify.im'

export function getDomainConfig(host: string): DomainConfig {
  const domain = host.split(':')[0]
  return DOMAIN_CONFIGS[domain] ?? DOMAIN_CONFIGS[DEFAULT_DOMAIN]
}

export function getAllSubpageSlugs(): Array<{ domain: string; slug: string }> {
  return Object.values(DOMAIN_CONFIGS).flatMap((cfg) =>
    cfg.subpages.map((sp) => ({ domain: cfg.domain, slug: sp.slug }))
  )
}
