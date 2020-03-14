<div align="center">
  <h1> ... http-handler-response ... </h1>
  <sub>Built with ❤︎ by
  <a href="https://github.com/hiukky">Hiukky</a>
  <br><br>
</div>

  <h3 align="center">A simple handler to standardize and handle HTTP request errors and responses in APIs.</h3>

## Installation

```sh
  # Using NPM
  npm install http-handler-response --save

  # Using YARN
  yarn add http-handler-response
```

## Using

The http-handler-response provides three main functions. `createError`, `createresponse` and `handlerError`.

### createError

The `createError` function is the function responsible for formulating your return messages in unsuccessful requests. It follows the [RFC-7807](https://tools.ietf.org/html/rfc7807) standard.

#### Parameters

```js
  // HTTP status code 4xx to 5xx
  code: number,

  // URL for a document describing the error condition
  type: string,

  // Short and descriptive information
  title: string,

  // Legible error description
  detail: string,

  // URI exclusive for or specific error
  instance: string,

  // HTTP Code Reference
  ref: string,
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
          code: 404,
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
  //  HTTP status code 1xx to 3xx
  code: number,

  // Legible action response
  message: string,

  // Short and descriptive information
  title: string

  // Back Data
  data: array | object

  // HTTP Code Reference
  ref: string
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

      return response.status(201).send(
        createResponse({
          code: 201,
          message: 'Successful registered user.',
          data: user,
        }),
      )
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
