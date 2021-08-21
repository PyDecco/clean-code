import { MissingParamError } from '../errors/missign-param-error'
import { badRequest } from '../helpers/http-helper'
import { httpResponse, httpRequest } from '../protocols/http'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: httpRequest): httpResponse {
    const requiredField = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredField) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return { statusCode: 200, body: 'created!' }
  }
}
