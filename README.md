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

The http-handler-response provides two main functions. `createError` and `createResponse`.

### createError

The `createError` function is the function responsible for formulating your return messages in unsuccessful requests. It follows the [RFC-7807](https://tools.ietf.org/html/rfc7807) standard.

#### Parameters

```js
  code: number
  type: string,
  title: string,
  detail: string,
  instance: string,
```

#### Example

```js
import { createError, handlerErrorAdonis } from 'http-handler-response'
import User from 'models/User'

class UserController {
  async index(request, response) {
    try {
      const user = await User.find(1)

      if (!user)
        createError({
          code: 404,
          detail: 'The user informed is not registered.',
          instance: '/user/1',
          type: 'https://example.com/docs/users',
        })

      return user
    } catch (error) {
      handlerErrorAdonis({ response, error })
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
  instance: '/user/1',
  type: 'https://example.com/docs/users',
}

```

### createResponse

The `createResponse` function is the function responsible for formulating your return messages in successful requisitions.

#### Parameters

```js
  code: number,
  message: string,
  title: string
  data: array | object
```

#### Example

```js
import { createResponse, handlerErrorAdonis } from 'http-handler-response'
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
      handlerErrorAdonis({ response, error })
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
    name: 'Foo',
    email: 'foo@email.com'
  }
}

```

### handlerError

The http-handler-response has custom handlers for handling errors for various web frameworks such as `AdonisJs`, `Express` and `KoaJs`. The functions have a default prefix `handlerError` followed by the name of the framework . Ex: `handlerErrorExpress`.

#### Parameters

Some parameters vary in nomenclature, depending on the framework. The idea is to avoid desessentiary statements like `{ response: res }` to simply `{ res }`.

##### AdonisJs

```js
  response: Response,
  error: Error,
```

##### Express

```js
  res: Response,
  error: Error,
```

##### KoaJs

```js
  ctx: Context,
  error: Error,
```

#### Example

```js
import { handlerErrorAdonis } from 'http-handler-response'
import User from 'models/User'

class UserController {
  async store(request, response) {
    try {
      // Your code..
    } catch (error) {
      handlerErrorAdonis({ response, error })
    }
  }
}
```
