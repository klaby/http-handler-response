import { IRootResponse } from '../types'
import { IError } from '../types'

/**
 * defaultError
 *
 * @param response
 * @param error
 */
const defaultError = {
  status: 500,
  title: 'Internal Server Error',
  detail: 'There was an internal problem on the server.',
}

/**
 * @function handlerError
 *
 * Error handler
 *
 * @param response - Response object instance
 * @param error - Error object instance
 */
const handlerError = (response: IRootResponse, error: IError) => {
  try {
    error = error.status ? error : defaultError

    // Status
    response.status && typeof response.status === 'function'
      ? response.status(error.status)
      : (response.status = error.status)

    // Body
    response.type = 'json'
    response.body = error

    // Json
    response.json && response.json(error)

    return response
  } catch (error) {
    throw new Error('The informed Response instance is not a valid model.')
  }
}

export default handlerError
