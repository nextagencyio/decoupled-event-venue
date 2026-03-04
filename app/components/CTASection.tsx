'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps { homepageContent: DrupalHomepage | null | undefined }

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Get in Touch'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Contact Us'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Learn More'

  return (
    <section className="py-24 bg-primary-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-primary-800 rounded-xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">{title}</h2>
          {description && <div className="text-gray-400 mb-10 max-w-2xl mx-auto font-light" dangerouslySetInnerHTML={{ __html: description }} />}
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="/contact" className="px-8 py-3 border border-accent-500 text-accent-400 rounded hover:bg-accent-500 hover:text-primary-950 transition-all duration-200 font-medium tracking-wide">{primaryLabel}</a>
            <a href="/about" className="px-8 py-3 border border-primary-600 text-gray-300 rounded hover:border-gray-400 hover:text-white transition-all duration-200 font-medium tracking-wide">{secondaryLabel}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
