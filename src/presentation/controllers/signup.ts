import { MissingParamError } from '../errors/missign-param-error'
import { badRequest } from '../helpers/http-helper'
import { httpResponse, httpRequest } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: httpRequest): httpResponse {
    const requiredField = ['name', 'email']
    for (const field of requiredField) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return { statusCode: 200, body: 'created!' }
  }
}
