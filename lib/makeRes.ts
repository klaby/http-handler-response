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
 * @param title - Short and descriptive information
 */
const makeRes = ({ code, data, message, title }: IMakeRes): IResponse =>
  Object.assign(makeModelMessage({ code, title }), { data, message })

export default makeRes
