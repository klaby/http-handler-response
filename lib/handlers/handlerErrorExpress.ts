import { IExpressErrorHandler } from '../types/handlers'
import defaultError from './defaultError'

/**
 * @function handlerErrorExpress
 *
 * Express Error handler
 *
 * @param res - Express response object instance
 * @param error - Error object instance
 */
const handlerErrorExpress = ({ res, error }: IExpressErrorHandler) => {
  error = error?.status ? error : defaultError
  return res.status(error.status).json(error)
}

export default handlerErrorExpress
