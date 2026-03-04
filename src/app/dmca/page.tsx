import { getDomainConfigFromHeaders } from '@/lib/getDomainConfig'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const runtime = 'edge'
export const metadata = { title: 'DMCA Policy' }

export default async function DmcaPage() {
  const cfg = await getDomainConfigFromHeaders()
  return (
    <>
      <Nav cfg={cfg} />
      <main className="max-w-3xl mx-auto px-4 py-16 text-gray-300">
        <h1 className="text-3xl font-black text-white mb-2">DMCA Policy</h1>
        <p className="text-gray-500 mb-8 text-sm">Last updated: March 2026</p>
        <p className="mb-4">We respect intellectual property rights. To report copyright infringement, send a DMCA notice to:</p>
        <p className="mb-8 text-gray-400">Send DMCA notices via the contact form on the main site.</p>
        <h2 className="text-white font-bold mt-8 mb-3">Your Notice Must Include</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Identification of the copyrighted work claimed to have been infringed</li>
          <li>Identification of the infringing material and its location</li>
          <li>Your contact information (name, address, phone, email)</li>
          <li>A statement of good faith belief that the use is not authorised</li>
          <li>A statement, under penalty of perjury, that the information is accurate</li>
          <li>Your physical or electronic signature</li>
        </ul>
        <h2 className="text-white font-bold mt-8 mb-3">Repeat Infringers</h2>
        <p className="text-sm">Accounts of repeat infringers are terminated in accordance with the DMCA.</p>
      </main>
      <Footer cfg={cfg} />
    </>
  )
}
