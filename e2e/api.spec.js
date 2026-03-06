// @ts-check
const { test, expect } = require('@playwright/test')

const API_BASE = process.env.API_URL || 'http://localhost:5000'

test.describe('API integration', () => {
  test('GET /api/products returns 200', async ({ request }) => {
    const res = await request.get(`${API_BASE}/api/products`)
    expect(res.ok()).toBeTruthy()
    const data = await res.json()
    expect(data).toHaveProperty('success', true)
    expect(data).toHaveProperty('data')
    expect(Array.isArray(data.data)).toBe(true)
  })

  test('POST /api/admin/login with valid credentials returns token', async ({ request }) => {
    const res = await request.post(`${API_BASE}/api/admin/login`, {
      data: { username: 'preethi', password: 'admin123' },
    })
    expect(res.ok()).toBeTruthy()
    const data = await res.json()
    expect(data).toHaveProperty('token')
    expect(typeof data.token).toBe('string')
  })

  test('POST /api/admin/login with invalid credentials returns 401', async ({ request }) => {
    const res = await request.post(`${API_BASE}/api/admin/login`, {
      data: { username: 'invalid', password: 'wrong' },
    })
    expect(res.status()).toBe(401)
  })
})
