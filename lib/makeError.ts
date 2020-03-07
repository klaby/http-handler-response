import {
  TClientError,
  TServerError,
  CLIENT_ERROR,
  SERVER_ERROR,
} from './httpCodes'

export interface IMakeError {
  code: TClientError | TServerError
  message?: string
  data?: [] | object
}

interface IError {
  title: string
  status: number
  message?: string
  data?: [] | object
}

const makeErrorModel = ({ code }: IMakeError): IError => {
  var _code = Number(code)
  var _title = SERVER_ERROR[500]

  if (_code >= 400 && _code < 500) {
    _title = CLIENT_ERROR[code as TClientError]
  } else {
    _title = SERVER_ERROR[code as TServerError]
  }

  return { title: _title, status: _code }
}

const makeError = ({ code, message, data }: IMakeError): void => {
  throw Object.assign(makeErrorModel({ code }), { message, data })
}

export default makeError
