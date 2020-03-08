import { IMakeRes, IResponse } from './types'
import makeModelMessage from './makeModelMessage'

/**
 * @function makeRes
 *
 * Simple model for successful responses.
 *
 * @param code - HTTP status code 1xx to 3xx
 * @param message - Legible action response
 * @param data - Back Data
 */
const makeRes = ({ code, data, message }: IMakeRes): IResponse => {
  return Object.assign(makeModelMessage({ code }), { data, message })
}

export default makeRes
