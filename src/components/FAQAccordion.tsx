'use client'

import { useState } from 'react'

interface FAQ { q: string; a: string }

export default function FAQAccordion({ faqs, hex }: { faqs: FAQ[]; hex: string }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
          <button
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-white text-sm md:text-base">{faq.q}</span>
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform"
              style={{ background: hex, transform: open === i ? 'rotate(45deg)' : undefined }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
