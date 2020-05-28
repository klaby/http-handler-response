import mocks from 'node-mocks-http'

import { handlerError, createError } from '../lib/builder'

describe('handler Error', () => {
  it('Must return a standard answer with error 500 for an untreated error.', () => {
    const Response = mocks.createResponse()

    try {
      throw new Error('Error')
    } catch (error) {
      error = handlerError(Response, error)

      expect(error._getJSONData()).toEqual({
        status: 500,
        title: 'Internal Server Error',
        detail: 'There was an internal problem on the server.',
      })
    }
  })

  it('Must return an error with status 400.', () => {
    const Response = mocks.createResponse()

    try {
      createError({
        code: '400 - Bad Request',
        detail: 'Incorrect Socilicitation.',
      })
    } catch (error) {
      error = handlerError(Response, error)

      expect(error._getJSONData()).toEqual({
        status: 400,
        title: 'Bad Request',
        type: 'about:blank',
        detail: 'Incorrect Socilicitation.',
      })
    }
  })
})
