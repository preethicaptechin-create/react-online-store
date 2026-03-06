import { describe, it, expect } from 'vitest'
import { getProductImageUrl, PLACEHOLDER_IMAGE } from './productImage'

describe('productImage', () => {
  it('returns PLACEHOLDER_IMAGE for null/undefined', () => {
    expect(getProductImageUrl(null)).toBe(PLACEHOLDER_IMAGE)
    expect(getProductImageUrl(undefined)).toBe(PLACEHOLDER_IMAGE)
  })

  it('returns URL as-is when image starts with http', () => {
    const url = 'https://example.com/image.png'
    expect(getProductImageUrl(url)).toBe(url)
  })

  it('returns full URL for relative filename', () => {
    const result = getProductImageUrl('123-image.png')
    expect(result).toContain('/uploads/123-image.png')
  })
})
