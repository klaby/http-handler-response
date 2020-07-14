<h1 align="center">http-handler-response</h1>

<p align="center">
  <a href="https://github.com/hiukky/http-handler-response/blob/master/LICENSE">
    <img alt="GitHub license" src="https://img.shields.io/github/license/hiukky/http-handler-response?color=%236BF178&style=flat-square" />
  </a>
    <a href="https://www.npmjs.com/package/http-handler-response">
    <img alt="npm" src="https://img.shields.io/npm/dt/http-handler-response?color=%2300CECB&style=flat-square" />
  </a>
  <a href="https://github.com/hiukky/http-handler-response/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/hiukky/http-handler-response?color=%23a29bfe&style=flat-square" />
  </a>
  <a href="https://github.com/hiukky/http-handler-response/network">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/hiukky/http-handler-response?color=%23ff595e&style=flat-square" />
  </a>
  <a href="https://github.com/hiukky/http-handler-response/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/hiukky/http-handler-response?color=%23eab464&style=flat-square" />
  </a>
</p>

<p align="center">
  <sub>Built with ❤︎ by <a href="https://hiukky.com">Hiukky</a>
  <br/>
</p>

  <h3 align="center">A simple handler to standardize and handle HTTP request errors and responses in APIs.</h3>

## Installation

```sh
  # Using NPM
  npm i http-handler-response

  # Using YARN
  yarn add http-handler-response
```

## Using

The http-handler-response provides three main functions. `createError`, `createresponse` and `handlerError`.

### createError

The `createError` function is the function responsible for formulating your return messages in unsuccessful requests. It follows the [RFC-7807](https://tools.ietf.org/html/rfc7807) standard.

#### Parameters

```js
  // Object with response specifications
  payload: {
    code: number | string,   // HTTP status code 4xx to 5xx
    type: string,            // URL for a document describing the error condition
    title: string,           // Short and descriptive information
    detail: string,          // Legible error description
    instance: string,        // URI exclusive for or specific error
  }
```

#### Example

```js
import { createError, handlerError } from 'http-handler-response'
import User from 'models/User'

class UserController {
  async index(request, response) {
    try {
      const user = await User.find(1)

      if (!user)
        createError({
          code: 404, // 404 or '404 - Not Found'
          detail: 'The user informed is not registered.',
          instance: '/users/1',
          type: 'https://example.com/docs/users',
        })

      return user
    } catch (error) {
      handlerError(response, error)
    }
  }
}
```

#### Response

```js
{
  status: 404,
  title: 'Not found',
  detail: 'The user informed is not registered.',
  instance: '/users/1',
  type: 'https://example.com/docs/users',
}

```

### createResponse

The `createResponse` function is the function responsible for formulating your return messages in successful requisitions.

#### Parameters

```js
  // HTTP Response Object
  response: object

  // Object with response specifications
  payload: {
    code: number | string,   // HTTP status code 1xx to 3xx
    title: string,           // Short and descriptive information
    message: string,         // Legible action response
    instance: string,        // URI exclusive for or specific error
    data: object             // Back Data
  }
```

#### Example

```js
import { createResponse, handlerError } from 'http-handler-response'
import User from 'models/User'

class UserController {
  async store(request, response) {
    try {
      const data = request.only(['name', 'email'])

      const user = new User()
      user.name = data.name
      user.email = data.email
      await user.save()

      return createResponse(response, {
        code: 201, // 201 or '201 - Created'
        message: 'Successful registered user.',
        data: user,
      }),
    } catch (error) {
      handlerError(response, error)
    }
  }
}
```

#### Response

```js
{
  status: 201,
  title: 'Created'
  message: 'Successful registered user.'
  data: {
    id: 1,
    name: 'User',
    email: 'user@email.com'
  }
}
```

### handlerError

The http-handler-response has custom handlers for handling errors for various web frameworks such as `AdonisJs`, `Express` and `KoaJs`.

#### Example

```js
import { handlerError } from 'http-handler-response'
import User from 'models/User'

class UserController {
  async store(request, response) {
    try {
      // Your code..
    } catch (error) {
      handlerError(response, error)
    }
  }
}
```
