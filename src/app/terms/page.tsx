import { getDomainConfigFromHeaders } from '@/lib/getDomainConfig'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = { title: 'Terms of Service' }

export default async function TermsPage() {
  const cfg = await getDomainConfigFromHeaders()
  return (
    <>
      <Nav cfg={cfg} />
      <main className="max-w-3xl mx-auto px-4 py-16 text-gray-300">
        <h1 className="text-3xl font-black text-white mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8 text-sm">Last updated: March 2026</p>
        <h2 className="text-white font-bold mt-8 mb-3">Acceptable Use</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>You must be 18 or older to use this service</li>
          <li>Only upload photos you have the rights to use</li>
          <li>Non-consensual use involving real identifiable people is strictly prohibited</li>
          <li>No images of minors under any circumstances</li>
        </ul>
        <h2 className="text-white font-bold mt-8 mb-3">Credits & Payments</h2>
        <p className="text-sm mb-4">Credits (diamonds) are non-refundable once purchased. They never expire. There are no subscriptions.</p>
        <h2 className="text-white font-bold mt-8 mb-3">Enforcement</h2>
        <p className="text-sm">Violations result in immediate permanent account termination. We cooperate with law enforcement where required.</p>
        <h2 className="text-white font-bold mt-8 mb-3">Contact</h2>
        <p className="text-sm">Questions: <a href="mailto:hello@vixie.art" className="underline">hello@vixie.art</a></p>
      </main>
      <Footer cfg={cfg} />
    </>
  )
}
