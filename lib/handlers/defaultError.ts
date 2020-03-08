import makeErr from '../builders/makeErr'
import { IError } from '../types/makeResponse'

/**
 * Default Server error
 */

const defaultError: IError = makeErr({
  code: '500',
  detail: 'There was an internal server error.',
})

export default defaultError
