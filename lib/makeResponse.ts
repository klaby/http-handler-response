import {
  TInformational,
  TSuccess,
  TRedirection,
  INFORMATIONAL,
  SUCCESS,
  REDIRECTION,
} from './httpStatus'

export interface IMakeResponse {
  status: TInformational | TSuccess | TRedirection
}

interface IResponseModel {
  title: string
  status: number
  message?: string
}

const makeResponseModel = ({ status }: IMakeResponse): IResponseModel => {
  var response: IResponseModel = {
    title: SUCCESS[200],
    status: 200,
  }
  var _status = Number(status)

  if (_status >= 100 && _status < 200) {
    response = {
      title: INFORMATIONAL[status as TInformational],
      status: _status,
    }
  } else if (_status >= 200 && _status < 300) {
    response = {
      title: SUCCESS[status as TSuccess],
      status: _status,
    }
  } else {
    response = {
      title: REDIRECTION[status as TRedirection],
      status: _status,
    }
  }

  return response
}

const makeResponse = ({ status }: IMakeResponse): IResponseModel => {
  return makeResponseModel({ status })
}

export default makeResponse
