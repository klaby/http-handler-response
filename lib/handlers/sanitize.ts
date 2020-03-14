import createError from '../builders/createError'
import { ISchemeError } from '../types'

/**
 * @function sanitise
 *
 * Error sanitizer
 *
 * @param error
 */

const sanitize = ({ error }: ISchemeError) =>
  createError({
    code: error.status ?? 500,
    ...error,
  })

export default sanitize
