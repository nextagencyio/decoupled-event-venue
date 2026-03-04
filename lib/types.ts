// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename?: string
  id: string
  title: string
  path: string
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredSpacesTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Venue Space
export interface DrupalVenueSpace extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  capacity?: number
  squareFootage?: number
  spaceType?: DrupalTerm[]
  amenities?: string[]
  priceRange?: string
  image?: DrupalImage
}

export interface VenueSpacesData {
  nodeVenueSpaces: {
    nodes: DrupalVenueSpace[]
  }
}

// Event
export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  venueLocation?: string
  eventCategory?: DrupalTerm[]
  ticketPrice?: string
  image?: DrupalImage
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// Event Package
export interface DrupalPackage extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  price?: string
  guestCount?: string
  duration?: string
  includes?: string[]
  image?: DrupalImage
}

export interface PackagesData {
  nodePackages: {
    nodes: DrupalPackage[]
  }
}

// Testimonial
export interface DrupalTestimonial extends DrupalNode {
  body?: {
    processed: string
  }
  clientName?: string
  eventTypeName?: string
  rating?: number
  eventDateHeld?: {
    timestamp: number
  }
}

export interface TestimonialsData {
  nodeTestimonials: {
    nodes: DrupalTestimonial[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
