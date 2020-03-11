import createError from '../builders/createError'
import { IError } from '../types/builders'

/**
 * Default Server error
 */

const defaultError: IError = createError({
  code: 500,
  detail: 'There was an internal server error.',
})

export default defaultError
