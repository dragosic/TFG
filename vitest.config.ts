import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',     
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/unit/**/*.test.ts'],
    globals: true,
    //  browser: {
    //   provider: 'playwright', // or 'webdriverio'
    //   enabled: true,
    //   // at least one instance is required
    //   instances: [
    //     { browser: 'chromium' },
    //   ],
    // },
  }
})