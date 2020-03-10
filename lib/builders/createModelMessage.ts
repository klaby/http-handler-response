import {
  INFORMATIONAL,
  SUCCESS,
  REDIRECTION,
  CLIENT_ERROR,
  SERVER_ERROR,
} from '../utils/httpCodes'
import {
  ICreateModelMessage,
  TInformational,
  TSuccess,
  TRedirection,
  TClientError,
  TServerError,
} from '../types/builders'

/**
 * @function createModelMessage
 *
 * Assemble the default message header.
 *
 * @param code - HTTP status code 1xx to 5xx
 * @param title - Short and descriptive information
 */
const createModelMessage = ({ code, title }: ICreateModelMessage) => {
  var _title

  if (code >= 100 && code < 200) {
    _title = INFORMATIONAL[code as TInformational]
  } else if (code >= 200 && code < 300) {
    _title = SUCCESS[code as TSuccess]
  } else if (code >= 300 && code < 400) {
    _title = REDIRECTION[code as TRedirection]
  } else if (code >= 400 && code < 500) {
    _title = CLIENT_ERROR[code as TClientError]
  } else {
    _title = SERVER_ERROR[code as TServerError]
  }

  return { title: title ?? _title, status: code }
}

export default createModelMessage
