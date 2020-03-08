import { IAdonisErrorHandler } from '../types/errorHandler'
import defaultError from './defaultError'

/**
 * @function handlerErrorAdonis
 *
 * Adonis Error handler
 *
 * @param response - Adonis response object instance
 * @param error - Error object instance
 */
const handlerErrorAdonis = ({ response, error }: IAdonisErrorHandler) => {
  error = error?.status ? error : defaultError
  return response.status(error.status).json(error)
}

export default handlerErrorAdonis
