import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from './ProductCard'

const mockProduct = {
  _id: '123',
  name: 'Test Phone',
  price: 25000,
  category: 'mobile',
  image: 'test-image.png',
}

function renderProductCard(product = mockProduct, props = {}) {
  return render(
    <MemoryRouter>
      <ProductCard product={product} {...props} />
    </MemoryRouter>
  )
}

describe('ProductCard', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => '[]'),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    })
  })

  it('renders product name', () => {
    renderProductCard()
    expect(screen.getByText('Test Phone')).toBeInTheDocument()
  })

  it('renders product price with ₹', () => {
    renderProductCard()
    expect(screen.getByText('₹25000')).toBeInTheDocument()
  })

  it('renders Add to Cart button', () => {
    renderProductCard()
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })

  it('does not show size selector for mobile category', () => {
    renderProductCard()
    expect(screen.queryByText('6')).not.toBeInTheDocument()
  })

  it('shows size selector for shoes category', () => {
    renderProductCard({ ...mockProduct, category: 'shoes' })
    expect(screen.getByText('6')).toBeInTheDocument()
  })
})
