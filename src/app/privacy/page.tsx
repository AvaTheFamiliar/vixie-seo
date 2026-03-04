import { getDomainConfigFromHeaders } from '@/lib/getDomainConfig'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = { title: 'Privacy Policy' }

export default async function PrivacyPage() {
  const cfg = await getDomainConfigFromHeaders()
  return (
    <>
      <Nav cfg={cfg} />
      <main className="max-w-3xl mx-auto px-4 py-16 text-gray-300">
        <h1 className="text-3xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8 text-sm">Last updated: March 2026</p>
        <p className="mb-4">{cfg.brandName} is committed to protecting your privacy. We collect only the minimum data needed to operate the service.</p>
        <h2 className="text-white font-bold mt-8 mb-3">Data We Collect</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Images you upload for processing — auto-deleted within 24 hours</li>
          <li>Email address (optional, for sign-in only)</li>
          <li>Anonymous usage statistics</li>
        </ul>
        <h2 className="text-white font-bold mt-8 mb-3">What We Don&apos;t Do</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>We never sell your data</li>
          <li>We never use your photos to train AI models</li>
          <li>We never share your data with advertisers</li>
        </ul>
        <h2 className="text-white font-bold mt-8 mb-3">Contact</h2>
        <p className="text-sm">Privacy enquiries: <a href="mailto:privacy@vixie.art" className="underline">privacy@vixie.art</a></p>
      </main>
      <Footer cfg={cfg} />
    </>
  )
}
