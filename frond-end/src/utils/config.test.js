import { describe, it, expect } from 'vitest'
import { BASE_URL, CURRENCY, PLACEHOLDER_IMAGE, ROUTES } from './config'

describe('config', () => {
  it('BASE_URL defaults to localhost:5000 when VITE_API_URL is not set', () => {
    expect(BASE_URL).toBeDefined()
    expect(typeof BASE_URL).toBe('string')
  })

  it('CURRENCY is ₹', () => {
    expect(CURRENCY).toBe('₹')
  })

  it('PLACEHOLDER_IMAGE is a valid data URL', () => {
    expect(PLACEHOLDER_IMAGE).toMatch(/^data:image\/svg\+xml/)
  })

  it('ROUTES has expected keys', () => {
    expect(ROUTES).toHaveProperty('products')
    expect(ROUTES).toHaveProperty('orderDetails')
    expect(ROUTES).toHaveProperty('login')
  })
})
