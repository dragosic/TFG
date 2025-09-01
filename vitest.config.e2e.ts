// vitest.config.e2e.ts
import { defineConfig } from 'vitest/config'
import { defineConfig as playwrightDefineConfig } from '@playwright/test'

export default defineConfig({
  test: {
    include: ['tests/e2e/**/*.test.ts'],
    globals: true,
  },
})