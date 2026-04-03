import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and shows venue name', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Obsidian Hall/i)
    // Check for page content - either Sterling Estate (Drupal) or Obsidian Hall (demo)
    const body = await page.textContent('body')
    expect(body).toBeTruthy()
  })

  test('shows navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('header a[href="/spaces"]').first()).toBeVisible()
    await expect(page.locator('header a[href="/events"]').first()).toBeVisible()
    await expect(page.locator('header a[href="/packages"]').first()).toBeVisible()
  })

  test('displays hero section', async ({ page }) => {
    await page.goto('/')
    // The hero section should have some heading text
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
  })
})

test.describe('Venue Spaces listing', () => {
  test('loads and shows venue spaces', async ({ page }) => {
    await page.goto('/spaces')
    await expect(page.locator('h1')).toContainText('Venue Spaces')
    // Should have at least one venue space card
    const cards = page.locator('[class*="grid"] > div, [class*="grid"] > a')
    await expect(cards.first()).toBeVisible()
  })

  test('contains imported content', async ({ page }) => {
    await page.goto('/spaces')
    const body = await page.textContent('body')
    // Check for at least one imported venue space
    expect(body).toMatch(/Grand Ballroom|Garden Terrace|Rooftop Lounge|Chapel/i)
  })
})

test.describe('Events listing', () => {
  test('loads and shows events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    const cards = page.locator('[class*="grid"] > div, [class*="grid"] > a')
    await expect(cards.first()).toBeVisible()
  })

  test('contains imported content', async ({ page }) => {
    await page.goto('/events')
    const body = await page.textContent('body')
    expect(body).toMatch(/Spring Gala|Jazz Series|Bridal Showcase/i)
  })
})

test.describe('Packages listing', () => {
  test('loads and shows packages', async ({ page }) => {
    await page.goto('/packages')
    await expect(page.locator('h1')).toContainText('Packages')
    const cards = page.locator('[class*="grid"] > div, [class*="grid"] > a')
    await expect(cards.first()).toBeVisible()
  })

  test('contains imported content', async ({ page }) => {
    await page.goto('/packages')
    const body = await page.textContent('body')
    expect(body).toMatch(/Signature Wedding|Corporate Event|Social Celebration/i)
  })
})

test.describe('Testimonials listing', () => {
  test('loads and shows testimonials', async ({ page }) => {
    await page.goto('/testimonials')
    await expect(page.locator('h1')).toContainText('Testimonials')
    const cards = page.locator('[class*="grid"] > div, [class*="grid"] > a')
    await expect(cards.first()).toBeVisible()
  })

  test('contains imported content', async ({ page }) => {
    await page.goto('/testimonials')
    const body = await page.textContent('body')
    expect(body).toMatch(/Dream Wedding|Corporate Event|Unforgettable/i)
  })
})

test.describe('Detail pages', () => {
  test('venue space detail loads', async ({ page }) => {
    await page.goto('/spaces/grand-ballroom')
    const body = await page.textContent('body')
    expect(body).toMatch(/Grand Ballroom/i)
  })

  test('event detail loads', async ({ page }) => {
    await page.goto('/events/spring-gala')
    const body = await page.textContent('body')
    expect(body).toMatch(/Spring Gala/i)
  })

  test('package detail loads', async ({ page }) => {
    await page.goto('/packages/signature-wedding')
    const body = await page.textContent('body')
    expect(body).toMatch(/Signature Wedding/i)
  })

  test('testimonial detail loads', async ({ page }) => {
    await page.goto('/testimonials/dream-wedding')
    const body = await page.textContent('body')
    expect(body).toMatch(/Dream Wedding/i)
  })

  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    const body = await page.textContent('body')
    expect(body).toMatch(/Sterling Estate|About/i)
  })
})

test.describe('Navigation', () => {
  test('can navigate from homepage to spaces', async ({ page }) => {
    await page.goto('/')
    await page.click('a[href="/spaces"]')
    await expect(page).toHaveURL('/spaces')
    await expect(page.locator('h1')).toContainText('Venue Spaces')
  })

  test('can navigate from homepage to events', async ({ page }) => {
    await page.goto('/')
    await page.click('a[href="/events"]')
    await expect(page).toHaveURL('/events')
    await expect(page.locator('h1')).toContainText('Events')
  })
})

test.describe('HTTP status codes', () => {
  const paths = ['/', '/spaces', '/events', '/packages', '/testimonials',
    '/spaces/grand-ballroom', '/events/spring-gala',
    '/packages/signature-wedding', '/testimonials/dream-wedding', '/about']

  for (const path of paths) {
    test(`${path} returns 200`, async ({ request }) => {
      const response = await request.get(path)
      expect(response.status()).toBe(200)
    })
  }
})
