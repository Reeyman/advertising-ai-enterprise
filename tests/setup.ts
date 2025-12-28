import { beforeAll, afterAll } from 'vitest'

// Global test setup
beforeAll(() => {
  // Mock environment variables for testing
  process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321'
  process.env.SUPABASE_ANON_KEY = 'test-anon-key'
})

afterAll(() => {
  // Cleanup after all tests
})
