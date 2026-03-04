'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Calendar, Users, Music, Star, Camera, Sparkles } from 'lucide-react'

interface HomepageRendererProps { homepageContent: DrupalHomepage | null | undefined }

const features = [
  { icon: Calendar, title: 'Custom Events', desc: 'Tailored celebrations for every occasion' },
  { icon: Users, title: 'Expert Staff', desc: 'Dedicated team ensuring flawless execution' },
  { icon: Music, title: 'Entertainment', desc: 'State-of-the-art sound and lighting' },
  { icon: Star, title: 'Premium Catering', desc: 'Exquisite cuisine crafted by top chefs' },
  { icon: Camera, title: 'Photo Spaces', desc: 'Stunning backdrops for memorable photos' },
  { icon: Sparkles, title: 'Decor Services', desc: 'Elegant styling and floral arrangements' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80&fit=crop', alt: 'Grand Ballroom' },
  { src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80&fit=crop', alt: 'Event Setup' },
  { src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80&fit=crop', alt: 'Lighting Design' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80&fit=crop', alt: 'Celebration' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-primary-950">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      {/* Features */}
      <section className="py-20 bg-primary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6"><div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" /></div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">Why Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Every detail is crafted to create unforgettable moments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-primary-700 group-hover:border-accent-500/50 flex items-center justify-center transition-colors">
                  <item.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">Gallery</h2>
            <p className="text-gray-400">A glimpse into The Obsidian Hall experience</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] overflow-hidden group">
                <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-primary-950/20 group-hover:bg-primary-950/0 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-primary-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-light">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-primary-950 border-t border-primary-800/50 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl text-white mb-4 tracking-wide">The Obsidian Hall</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">A premier event venue where elegance meets unforgettable celebration. From intimate gatherings to grand galas.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent-400 mb-4 font-medium">Explore</h4>
              <nav className="flex flex-col gap-2">
                <a href="/spaces" className="text-sm text-gray-400 hover:text-white transition-colors">Venue Spaces</a>
                <a href="/events" className="text-sm text-gray-400 hover:text-white transition-colors">Events</a>
                <a href="/packages" className="text-sm text-gray-400 hover:text-white transition-colors">Packages</a>
                <a href="/testimonials" className="text-sm text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </nav>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent-400 mb-4 font-medium">Contact</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>100 Obsidian Boulevard</p>
                <p>New York, NY 10012</p>
                <p className="text-accent-400">(555) 987-6543</p>
                <p>events@obsidianhall.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-800/50 pt-8 text-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} The Obsidian Hall. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
