import Link from 'next/link'
import { DrupalTestimonial } from '@/lib/types'
import { ArrowRight } from 'lucide-react'

interface TestimonialCardProps { item: DrupalTestimonial }

export default function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <Link href={item.path || '#'} className="group bg-primary-900 border border-primary-800 rounded-xl hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/5 transition-all duration-300 overflow-hidden">
      <div className="relative h-48 bg-primary-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 text-gray-600 text-4xl font-serif font-bold">{item.title?.charAt(0)}</div>
        </div>
      </div>
      <div className="p-6">
        {(item as any).clientName && <p className="text-sm text-accent-400 font-medium mb-2">{(item as any).clientName}</p>}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">{item.title}</h3>
        {(item as any).body?.processed && <p className="text-gray-400 text-sm mb-4 line-clamp-2">{(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}</p>}
        <div className="flex items-center text-accent-400 font-medium text-sm group-hover:gap-2 transition-all">Learn more<ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></div>
      </div>
    </Link>
  )
}
