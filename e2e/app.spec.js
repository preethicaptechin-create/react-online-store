// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('Full integration - React Online Store', () => {
  test('home page loads', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/volt-card|react|store/i)
  })

  test('products page loads and shows product grid', async ({ page }) => {
    await page.goto('/products')
    await expect(page.getByRole('heading', { name: /all products/i })).toBeVisible({ timeout: 10000 })
  })

  test('admin login page loads', async ({ page }) => {
    await page.goto('/admin-login')
    await expect(page.getByRole('heading', { name: /admin login/i })).toBeVisible({ timeout: 10000 })
    await expect(page.getByPlaceholder(/username/i)).toBeVisible()
    await expect(page.getByPlaceholder(/password/i)).toBeVisible()
  })

  test('admin login with valid credentials redirects to dashboard', async ({ page }) => {
    await page.goto('/admin-login')
    await page.getByPlaceholder(/username/i).fill('preethi')
    await page.getByPlaceholder(/password/i).fill('admin123')
    await page.getByRole('button', { name: /login/i }).click()
    await expect(page).toHaveURL(/admin\/dashboard/, { timeout: 10000 })
  })
})
