import makeRes from '../lib/makeRes'

describe('Make response', () => {
  it('Must mount a successful response with status code 201', () => {
    const response = makeRes({
      code: '201',
      message: 'Successfully registered',
      data: {
        id: 1,
        name: 'Foo',
      },
    })

    expect(response).toEqual({
      status: 201,
      title: 'Created',
      message: 'Successfully registered',
      data: {
        id: 1,
        name: 'Foo',
      },
    })
  })

  it('You must assemble a response with a personalized title', () => {
    const response = makeRes({
      code: '201',
      title: 'Success',
      message: 'Successfully registered',
      data: {
        id: 1,
        name: 'Foo',
      },
    })

    expect(response).toEqual({
      status: 201,
      title: 'Success',
      message: 'Successfully registered',
      data: {
        id: 1,
        name: 'Foo',
      },
    })
  })
})
