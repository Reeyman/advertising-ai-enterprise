import { describe, it, expect } from 'vitest'

describe('Basic functionality', () => {
  it('should pass a simple test', () => {
    expect(2 + 2).toBe(4)
  })

  it('should handle async operations', async () => {
    const result = await Promise.resolve('hello')
    expect(result).toBe('hello')
  })
})
