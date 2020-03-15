import { IHandler, IResponse } from '../types'

/**
 * @function responseValidator
 *
 * HTTP Response Instance Validator
 *
 * @param response
 */
const validator = (response: IResponse) => ({
  status: {
    exist: response.status,
    isFunc: typeof response.status === 'function',
  },
  json: {
    exist: response.status && response.json,
    isFunc: typeof response.json === 'function',
  },
  body: {
    exist: response.status && response.body,
    isFunc: typeof response.body === 'function',
  },
  send: {
    exist: response.status && response.send,
    isFunc: typeof response.send === 'function',
  },
})

/**
 * @function handler
 *
 * @param response
 */
const handler = ({ response, json }: IHandler) => {
  try {
    const validation = validator(response)

    if (validation.status.exist) {
      validation.status.isFunc
        ? response.status(json.status)
        : (response.status = json.status)
    }

    if (validation.json.exist) {
      validation.json.isFunc ? response.json(json) : (response.json = json)
    } else if (validation.body.exist) {
      response.type = 'json'
      validation.body.isFunc ? response.body(json) : (response.body = json)
    } else {
      validation.send.isFunc ? response.send(json) : (response.send = json)
    }

    return response
  } catch (error) {
    throw new Error('The informed Response instance is not a valid model.')
  }
}

export default handler
