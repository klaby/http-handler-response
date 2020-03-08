// Koa
export interface IKoaContext {
  type: string
  status: number
  body: object
}

// Express
export interface IExpressResponse {
  status(code: number): this
  json(body: any): void
}

// AdonisJs
export interface IAdonisResponse {
  status(code: number): this
  json(body: any, generateEtag?: boolean): void
}
