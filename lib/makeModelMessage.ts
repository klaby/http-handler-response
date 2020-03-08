import {
  INFORMATIONAL,
  SUCCESS,
  REDIRECTION,
  CLIENT_ERROR,
  SERVER_ERROR,
} from './httpCodes'
import {
  IMakeMessage,
  TInformational,
  TSuccess,
  TRedirection,
  TClientError,
  TServerError,
} from './types'

/**
 * @function makeModelMessage
 *
 * Assemble the default message header.
 *
 * @param code - HTTP status code 1xx to 5xx
 */
const makeModelMessage = ({ code }: IMakeMessage) => {
  const _code = Number(code)

  if (_code >= 100 && _code < 200) {
    return { title: INFORMATIONAL[code as TInformational], status: _code }
  } else if (_code >= 200 && _code < 300) {
    return { title: SUCCESS[code as TSuccess], status: _code }
  } else if (_code >= 300 && _code < 400) {
    return { title: REDIRECTION[code as TRedirection], status: _code }
  } else if (_code >= 400 && _code < 500) {
    return { title: CLIENT_ERROR[code as TClientError], status: _code }
  } else {
    return { title: SERVER_ERROR[code as TServerError], status: _code }
  }
}

export default makeModelMessage
