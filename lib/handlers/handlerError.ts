import { IRootResponse } from '../types'
import { IError } from '../types'
import sanitize from './sanitize'

/**
 * @function handlerError
 *
 * Error handler
 *
 * @param response - Response object instance
 * @param error - Error object instance
 */
const handlerError = (response: IRootResponse, error: IError) => {
  error = sanitize({ error })

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
}

export default handlerError
