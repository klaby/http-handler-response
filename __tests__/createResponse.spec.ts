import mocks from 'node-mocks-http'

import { handlerResponse } from '../lib/builder'

describe('Create response', () => {
  it('Must mount a successful response with status code 201', () => {
    const Response = mocks.createResponse()

    const response = handlerResponse(Response, {
      code: 201,
      message: 'Successfully registered',
      data: {
        id: 1,
        name: 'Foo',
      },
    }) as any

    expect(response._getJSONData()).toEqual({
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
    const Response = mocks.createResponse()

    const response = handlerResponse(Response, {
      code: 201,
      title: 'Success',
      message: 'Successfully registered',
      data: {
        id: 1,
        name: 'Foo',
      },
    }) as any

    expect(response._getJSONData()).toEqual({
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
