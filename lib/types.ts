import {
  INFORMATIONAL,
  REDIRECTION,
  SUCCESS,
  CLIENT_ERROR,
  SERVER_ERROR,
} from './constants'

/**
 * H T T P
 */
// Code number
export type TInformationalCode = keyof typeof INFORMATIONAL
export type TSuccessCode = keyof typeof SUCCESS
export type TRedirectionCode = keyof typeof REDIRECTION
export type TClientErrorCode = keyof typeof CLIENT_ERROR
export type TServerErrorCode = keyof typeof SERVER_ERROR

// Code text
export type TInformational = typeof INFORMATIONAL[TInformationalCode]
export type TSuccess = typeof SUCCESS[TSuccessCode]
export type TRedirection = typeof REDIRECTION[TRedirectionCode]
export type TClientError = typeof CLIENT_ERROR[TClientErrorCode]
export type TServerError = typeof SERVER_ERROR[TServerErrorCode]

// Root Response codes
export type TRootResponseCode =
  | TInformationalCode
  | TSuccessCode
  | TRedirectionCode

export type TRootResponse = TInformational | TSuccess | TRedirection

// Root Error codes
export type TRootErrorCode = TClientErrorCode | TServerErrorCode

export type TRootError = TClientError | TServerError

// Root codes
export type TRootCode = TRootResponseCode | TRootErrorCode

/**
 * B U I L D E R S
 */
export interface ICreateModelMessage {
  code: number | string
  title?: string
}

export interface IModelMessage {
  status: number
  title: string
}

export interface ICreateResponse {
  code: TRootResponse | TRootResponseCode
  message?: string
  title?: string
  data?: [] | object
}

export interface ICreateException {
  code: TRootError | TRootErrorCode
  detail: string
  title?: string
  type?: string
  instance?: string
}

export interface IModelResponse extends IModelMessage {
  message?: string
  data?: object
}

export interface IModelError extends IModelMessage {
  detail: string
  type?: string
  instance?: string
}

/**
 * H A N D L E R S
 */
export interface IHandler {
  response: IResponse
  json: IModelResponse | IModelError
}
export interface IResponse {
  status: any
  json?: any
  body?: any
  type?: any
  send: any
  app?: any
}
