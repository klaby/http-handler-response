import { createModelMessage, handler } from './core'
import { ICreateError, ICreateResponse, IResponse, IModelError } from './types'

/**
 * @function createError
 *
 * Creates an error response following the RFC 7807 pattern.
 *
 * @param code - HTTP status code 4xx to 5xx
 * @param codeText - HTTP status code text 4xx to 5xx
 * @param type - URL for a document describing the error condition
 * @param detail - Legible error description
 * @param instance - URI exclusive for or specific error
 * @param title - Short and descriptive information
 */
export const createError = ({
  code,
  codeText,
  title,
  type = 'about:blank',
  detail,
  instance,
}: ICreateError): never => {
  throw Object.assign(createModelMessage({ code, codeText, title }), {
    type,
    detail,
    instance,
  })
}

/**
 * @function createResponse
 *
 * Simple model for successful responses.
 *
 * @param code - HTTP status code 1xx to 3xx
 * @param codeText - HTTP status code text 1xx to 3xx
 * @param message - Legible action response
 * @param data - Back Data
 * @param title - Short and descriptive information
 */
export const createResponse = (
  response: IResponse,
  { code, codeText, message, data, title }: ICreateResponse,
) =>
  handler({
    response,
    json: Object.assign(createModelMessage({ code, codeText, title }), {
      data,
      message,
    }),
  })

/**
 * @function handlerError
 *
 * Error handler
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
