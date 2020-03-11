import {
  TInformational,
  TSuccess,
  TRedirection,
  TClientError,
  TServerError,
  TInformationalCode,
  TSuccessCode,
  TRedirectionCode,
  TClientErrorCode,
  TServerErrorCode,
} from './httpCodes'

export interface ICreateModelMessage {
  code:
    | TInformationalCode
    | TSuccessCode
    | TRedirectionCode
    | TClientErrorCode
    | TServerErrorCode
  title?: string
}

export interface ICreateResponse {
  code: TInformationalCode | TSuccessCode | TRedirectionCode
  ref?: TInformational | TSuccess | TRedirection
  message?: string
  title?: string
  data?: [] | object
}

export interface ICreateError {
  code: TClientErrorCode | TServerErrorCode
  ref?: TClientError | TServerError
  detail: string
  title?: string
  type?: string
  instance?: string
}

export interface IResponse {
  title: string
  status: number
  message?: string
  data?: [] | object
}

export interface IError {
  title: string
  status: number
  detail: string
  type?: string
  instance?: string
}
