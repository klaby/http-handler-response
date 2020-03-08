import { IError } from './builders'
import { IAdonisResponse, IExpressResponse, IKoaContext } from './contextHttp'

// Koa
export interface IKoaErrorHandler {
  ctx: IKoaContext
  error?: IError
}

// Express
export interface IExpressErrorHandler {
  res: IExpressResponse
  error?: IError
}

// AdonisJs
export interface IAdonisErrorHandler {
  response: IAdonisResponse
  error?: IError
}
