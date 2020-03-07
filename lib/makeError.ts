import {
  TClientError,
  TServerError,
  CLIENT_ERROR,
  SERVER_ERROR,
} from './httpStatus'

export interface IMakeError {
  status: TClientError | TServerError
}

interface IErrorModel {
  title: string
  status: number
}

const makeError = ({ status }: IMakeError): void => {
  var error: IErrorModel = {
    title: SERVER_ERROR[500],
    status: 500,
  }

  if (Number(status) >= 400 && Number(status) < 500) {
    error = {
      title: CLIENT_ERROR[status as TClientError],
      status: Number(status),
    }
  } else {
    error = {
      title: SERVER_ERROR[status as TServerError],
      status: 500,
    }
  }

  throw error
}

export default makeError
