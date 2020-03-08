import makeErr from '../lib/makeErr'

describe('Make error', () => {
  it('Must return a 401 error for a failed login attempt.', () => {
    const error = makeErr({
      code: '401',
      detail: 'Informed credentials are invalidated.',
      instance: '/auth/user',
      type: 'https://example.com/docs/auth',
    })

    expect(error).toEqual({
      status: 401,
      title: 'Unauthorized',
      detail: 'Informed credentials are invalidated.',
      instance: '/auth/user',
      type: 'https://example.com/docs/auth',
    })
  })
})
