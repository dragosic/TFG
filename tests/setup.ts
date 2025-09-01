import { vi } from 'vitest'

// Mocks globales
vi.mock('#imports', () => ({
  $fetch: vi.fn((url: string) => {
    if (url === '/api/home/datos') {
      return Promise.resolve({
        projects: 3,
        partnerships: 3,
        offers: 3
      })
    }
    return Promise.reject(new Error('API not found'))
  })
}))

vi.mock('~/components/carousel.vue', () => ({
  default: {
    template: '<div>Carousel Mock</div>'
  }
}))

vi.mock('nuxt-icon', () => ({
  default: {
    template: '<span>Icon Mock</span>'
  }
}))

vi.mock('~/components/newsletter-subscribe.vue', () => ({
  default: {
    template: '<div>Newsletter Mock</div>'
  }
}))

// Mock de NuxtLink
vi.stubGlobal('defineNuxtLink', () => ({
  template: '<a :href="to || href"><slot /></a>',
  props: ['to', 'href']
}))