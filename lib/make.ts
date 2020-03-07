import {
  INFORMATIONAL,
  SUCCESS,
  REDIRECTION,
  CLIENT_ERROR,
  SERVER_ERROR,
} from './httpCodes'

interface IMakeMessage {
  code: TInformational | TSuccess | TRedirection | TClientError | TServerError
}

interface IMake {
  message?: string
  data?: [] | object
}

interface IMakeErr extends IMake {
  code: TClientError | TServerError
}

interface IMakeRes extends IMake {
  code: TInformational | TSuccess | TRedirection
}

interface IResponse {
  title: string
  status: number
  message?: string
  data?: [] | object
}

type TInformational = keyof typeof INFORMATIONAL
type TSuccess = keyof typeof SUCCESS
type TRedirection = keyof typeof REDIRECTION
type TClientError = keyof typeof CLIENT_ERROR
type TServerError = keyof typeof SERVER_ERROR

/**
 * @function makeModelMessage
 * @param code
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

/**
 * @function makeRes
 * @param code
 * @param message
 * @param data
 */
export const makeRes = ({ code, ...rest }: IMakeRes): IResponse => {
  return Object.assign(makeModelMessage({ code }), { ...rest })
}

/**
 * @function makeErr
 * @param code
 * @param message
 * @param data
 */
export const makeErr = ({ code, ...rest }: IMakeErr): IResponse => {
  return Object.assign(makeModelMessage({ code }), { ...rest })
}
