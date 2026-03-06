// @ts-check
const { defineConfig, devices } = require('@playwright/test')

/**
 * Full integration (E2E) tests.
 * Requires app to be running: docker compose up -d
 * Frontend: http://localhost:3001, Backend: http://localhost:5000
 */
module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3001',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  timeout: 15000,
})
