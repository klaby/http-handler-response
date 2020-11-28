import { createModelMessage, handler } from './core'
import {
  ICreateException,
  ICreateResponse,
  IResponse,
  IModelError,
} from './types'

/**
 * @function createException
 *
 * @desc Creates an error response following the RFC 7807 pattern.
 *
 * @param code - HTTP status code 4xx to 5xx
 * @param type - URL for a document describing the error condition
 * @param detail - Legible error description
 * @param instance - URI exclusive for or specific error
 * @param title - Short and descriptive information
 */
export const createException = ({
  code,
  title,
  type = 'about:blank',
  detail,
  instance,
}: ICreateException): never => {
  throw Object.assign(createModelMessage({ code, title }), {
    type,
    detail,
    instance,
  })
}

/**
 * @function createResponse
 *
 * @desc Simple model for successful responses.
 *
 * @param response - HTTP Response Object
 * @param payload.code - HTTP status code 1xx to 3xx
 * @param payload.message - Legible action response
 * @param payload.data - Back Data
 * @param payload.title - Short and descriptive information
 */
export const createResponse = (
  response: IResponse,
  { code, message, data, title }: ICreateResponse,
) =>
  handler({
    response,
    json: Object.assign(createModelMessage({ code, title }), {
      data,
      message,
    }),
  })

/**
 * @function handlerError
 *
 * @desc Error handler.
 *
 * @param response - Response object instance
 * @param error - Error object instance
 */
export const handlerError = (response: IResponse, error: IModelError) =>
  handler({
    response,
    json: error.status
      ? error
      : {
          status: 500,
          title: 'Internal Server Error',
          detail: 'There was an internal problem on the server.',
        },
  })
