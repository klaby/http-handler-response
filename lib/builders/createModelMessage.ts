import { ROOT_CODES } from '../types/httpCodes'
import { ICreateModelMessage, IResponse, IError } from '../types/builders'

/**
 * @function createModelMessage
 *
 * Assemble the default message header.
 *
 * @param code - HTTP status code 1xx to 5xx
 * @param title - Short and descriptive information
 */
const createModelMessage = ({
  code,
  title,
}: ICreateModelMessage): IResponse | IError => {
  var model = { title: 'Internal Server Error', status: 500 }

  Object.entries(ROOT_CODES).filter(([key]) => {
    let _code = key.split(' - ')

    if (Number(_code[0]) === code) {
      return (model = {
        status: Number(_code[0]),
        title: title ?? _code[1],
      })
    }

    return
  })

  return model
}

export default createModelMessage
