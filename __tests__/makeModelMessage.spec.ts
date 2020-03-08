import makeModelMessage from '../lib/makeModelMessage'

describe('Make message model', () => {
  it('Must mount a base header with status 500 and title Internal Server Error', () => {
    const model = makeModelMessage({ code: '500' })

    expect(model).toEqual({ status: 500, title: 'Internal Server Error' })
  })
})
