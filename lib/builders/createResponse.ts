import { ICreateResponse, IResponse } from '../types/builders'
import createModelMessage from './createModelMessage'

/**
 * @function createResponse
 *
 * Simple model for successful responses.
 *
 * @param code - HTTP status code 1xx to 3xx
 * @param message - Legible action response
 * @param data - Back Data
 * @param title - Short and descriptive information
 */
const createResponse = ({
  code,
  data,
  message,
  title,
}: ICreateResponse): IResponse =>
  Object.assign(createModelMessage({ code, title }), { data, message })

export default createResponse
