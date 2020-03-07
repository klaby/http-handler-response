import {
  TInformational,
  TSuccess,
  TRedirection,
  INFORMATIONAL,
  SUCCESS,
  REDIRECTION,
} from './httpCodes'

export interface IMakeResponse {
  code: TInformational | TSuccess | TRedirection
  message?: string
  data?: [] | object
}

interface IResponse {
  title: string
  status: number
  message?: string
  data?: [] | object
}

const makeResponseModel = ({ code }: IMakeResponse): IResponse => {
  var _title = SUCCESS[200]
  var _code = Number(code)

  if (_code >= 100 && _code < 200) {
    _title = INFORMATIONAL[code as TInformational]
  } else if (_code >= 200 && _code < 300) {
    _title = SUCCESS[code as TSuccess]
  } else {
    _title = REDIRECTION[code as TRedirection]
  }

  return { title: _title, status: _code }
}

const makeResponse = ({ code, message, data }: IMakeResponse): IResponse => {
  return Object.assign(makeResponseModel({ code }), { message, data })
}

export default makeResponse
