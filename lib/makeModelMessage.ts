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
 * @param title - Short and descriptive information
 */
const makeModelMessage = ({ code, title }: IMakeMessage) => {
  const _code = Number(code)
  var _title

  if (_code >= 100 && _code < 200) {
    _title = title ?? INFORMATIONAL[code as TInformational]
  } else if (_code >= 200 && _code < 300) {
    _title = title ?? SUCCESS[code as TSuccess]
  } else if (_code >= 300 && _code < 400) {
    _title = title ?? REDIRECTION[code as TRedirection]
  } else if (_code >= 400 && _code < 500) {
    _title = title ?? CLIENT_ERROR[code as TClientError]
  } else {
    _title = title ?? SERVER_ERROR[code as TServerError]
  }

  return { title: _title, status: _code }
}

export default makeModelMessage
