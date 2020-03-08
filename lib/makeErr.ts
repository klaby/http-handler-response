import { IMakeErr, IError } from './types'
import makeModelMessage from './makeModelMessage'

/**
 * @function makeErr
 *
 * Creates an error response following the RFC 7807 pattern.
 *
 * @param code - HTTP status code 4xx to 5xx
 * @param type - URL for a document describing the error condition
 * @param detail - Legible error description
 * @param instance - URI exclusive for or specific error
 */
const makeErr = ({
  code,
  type = 'about:blank',
  detail,
  instance,
}: IMakeErr): IError => {
  return Object.assign(makeModelMessage({ code }), { type, detail, instance })
}

export default makeErr
