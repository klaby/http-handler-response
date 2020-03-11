import {
  TRootCode,
  TRootResponse,
  TRootResponseCode,
  TRootError,
  TRootErrorCode,
} from './httpCodes'

export interface ICreateModelMessage {
  code: TRootCode
  title?: string
}

export interface ICreateResponse {
  code: TRootResponseCode
  ref?: TRootResponse
  message?: string
  title?: string
  data?: [] | object
}

export interface ICreateError {
  code: TRootErrorCode
  ref?: TRootError
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
