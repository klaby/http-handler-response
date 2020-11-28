import { HTTP_CODES } from '../constants'
import { ICreateModelMessage, IModelMessage } from '../types'

/**
 * @function createModelMessage
 *
 * @desc Assemble the default message header.
 *
 * @param code - HTTP status code 1xx to 5xx
 * @param title - Short and descriptive information
 */
export const createModelMessage = ({
  code,
  title,
}: ICreateModelMessage): IModelMessage => {
  let model = { title: '', status: 0 }

  Object.entries(HTTP_CODES).forEach(([_code, _title]) => {
    if (Number(_code) === code || code === _title) {
      model = {
        status: Number(_code),
        title: title ?? _title.split(' - ')[1],
      }
    }
  })

  return model
}
