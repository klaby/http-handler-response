import { IKoaErrorHandler } from '../types/handlers'
import defaultError from './defaultError'

/**
 * @function handlerErrorKoa
 *
 * Koa Error handler
 *
 * @param ctx - Koa CTX object instance
 * @param error - Error object instance
 */
const handlerErrorKoa = ({ ctx, error }: IKoaErrorHandler) => {
  error = error?.status ? error : defaultError

  ctx.type = 'json'
  ctx.status = error.status
  ctx.body = error
  return ctx
}

export default handlerErrorKoa
