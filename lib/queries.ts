import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredSpacesTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Venue Spaces
export const GET_VENUE_SPACES = gql`
  query GetVenueSpaces($first: Int = 20) {
    nodeVenueSpaces(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeVenueSpace {
          body {
            processed
            summary
          }
          capacity
          squareFootage
          spaceType {
            ... on TermInterface {
              id
              name
            }
          }
          amenities
          priceRange
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_VENUE_SPACE_BY_PATH = gql`
  query GetVenueSpaceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeVenueSpace {
            id
            title
            path
            body {
              processed
            }
            capacity
            squareFootage
            spaceType {
              ... on TermInterface {
                id
                name
              }
            }
            amenities
            priceRange
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endDate {
            timestamp
          }
          venueLocation
          eventCategory {
            ... on TermInterface {
              id
              name
            }
          }
          ticketPrice
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            venueLocation
            eventCategory {
              ... on TermInterface {
                id
                name
              }
            }
            ticketPrice
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Packages
export const GET_PACKAGES = gql`
  query GetPackages($first: Int = 20) {
    nodePackages(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodePackage {
          body {
            processed
            summary
          }
          price
          guestCount
          duration
          includes
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_PACKAGE_BY_PATH = gql`
  query GetPackageByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePackage {
            id
            title
            path
            body {
              processed
            }
            price
            guestCount
            duration
            includes
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Testimonials
export const GET_TESTIMONIALS = gql`
  query GetTestimonials($first: Int = 20) {
    nodeTestimonials(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeTestimonial {
          body {
            processed
          }
          clientName
          eventTypeName
          rating
          eventDateHeld {
            timestamp
          }
        }
      }
    }
  }
`

export const GET_TESTIMONIAL_BY_PATH = gql`
  query GetTestimonialByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTestimonial {
            id
            title
            path
            body {
              processed
            }
            clientName
            eventTypeName
            rating
            eventDateHeld {
              timestamp
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeVenueSpace {
            id
            title
            path
            body {
              processed
            }
            capacity
            squareFootage
            spaceType {
              ... on TermInterface {
                id
                name
              }
            }
            amenities
            priceRange
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            venueLocation
            eventCategory {
              ... on TermInterface {
                id
                name
              }
            }
            ticketPrice
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodePackage {
            id
            title
            path
            body {
              processed
            }
            price
            guestCount
            duration
            includes
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeTestimonial {
            id
            title
            path
            body {
              processed
            }
            clientName
            eventTypeName
            rating
            eventDateHeld {
              timestamp
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredSpacesTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured venue spaces for homepage (limit to 3)
export const GET_FEATURED_VENUE_SPACES = gql`
  query GetFeaturedVenueSpaces {
    nodeVenueSpaces(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeVenueSpace {
          capacity
          spaceType {
            ... on TermInterface {
              id
              name
            }
          }
          priceRange
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured testimonials for homepage
export const GET_FEATURED_TESTIMONIALS = gql`
  query GetFeaturedTestimonials {
    nodeTestimonials(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeTestimonial {
          body {
            processed
          }
          clientName
          eventTypeName
          rating
        }
      }
    }
  }
`

// Upcoming events for homepage
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    nodeEvents(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          eventDate {
            timestamp
          }
          venueLocation
          eventCategory {
            ... on TermInterface {
              id
              name
            }
          }
          ticketPrice
        }
      }
    }
  }
`
