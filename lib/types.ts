import {
  INFORMATIONAL,
  SUCCESS,
  REDIRECTION,
  CLIENT_ERROR,
  SERVER_ERROR,
} from './httpCodes'

export interface IMakeMessage {
  code: TInformational | TSuccess | TRedirection | TClientError | TServerError
}

export interface IMakeRes {
  code: TInformational | TSuccess | TRedirection
  message?: string
  data?: [] | object
}

export interface IMakeErr {
  code: TClientError | TServerError
  detail: string
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

export type TInformational = keyof typeof INFORMATIONAL
export type TSuccess = keyof typeof SUCCESS
export type TRedirection = keyof typeof REDIRECTION
export type TClientError = keyof typeof CLIENT_ERROR
export type TServerError = keyof typeof SERVER_ERROR
