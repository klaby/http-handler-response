import { createError } from '../lib/builder'

describe('Create error', () => {
  it('Must return a 401 error for a failed login attempt.', () => {
    try {
      createError({
        code: 401,
        detail: 'Informed credentials are invalidated.',
        instance: '/auth/user',
        type: 'https://example.com/docs/auth',
      })
    } catch (error) {
      expect(error).toEqual({
        status: 401,
        title: 'Unauthorized',
        detail: 'Informed credentials are invalidated.',
        instance: '/auth/user',
        type: 'https://example.com/docs/auth',
      })
    }
  })

  it('You must mount an error message with a custom title.', () => {
    try {
      createError({
        code: 401,
        title: 'Credentials invalid',
        detail: 'Informed credentials are invalidated.',
        instance: '/auth/user',
        type: 'https://example.com/docs/auth',
      })
    } catch (error) {
      expect(error).toEqual({
        status: 401,
        title: 'Credentials invalid',
        detail: 'Informed credentials are invalidated.',
        instance: '/auth/user',
        type: 'https://example.com/docs/auth',
      })
    }
  })

  it('Must create a type 500 error using codeText', () => {
    try {
      createError({
        code: '500 - Internal Server Error',
        title: 'Internal Server Error',
        detail: 'There was an internal problem on the server.',
        instance: '/auth/user',
        type: 'https://example.com/docs/auth',
      })
    } catch (error) {
      expect(error).toEqual({
        status: 500,
        title: 'Internal Server Error',
        detail: 'There was an internal problem on the server.',
        instance: '/auth/user',
        type: 'https://example.com/docs/auth',
      })
    }
  })

  it('Must create a type 500 error using codeText and a custom title.', () => {
    try {
      createError({
        code: '500 - Internal Server Error',
        title: 'Server Error',
        detail: 'There was an internal problem on the server.',
        instance: '/auth/user',
        type: 'https://example.com/docs/auth',
      })
    } catch (error) {
      expect(error).toEqual({
        status: 500,
        title: 'Server Error',
        detail: 'There was an internal problem on the server.',
        instance: '/auth/user',
        type: 'https://example.com/docs/auth',
      })
    }
  })
})
