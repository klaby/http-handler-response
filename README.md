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

The http-handler-response provides two main functions. `makeError` and `makeResponse`.

#### Parameters

```js
  code: number,
  message: string,
  data: array | object
```

#### makeError

The `makeError` function is the function responsible for formulating your return messages in unsuccessful requisitions.

```js
import { makeError } from 'http-handler-response'
import User from 'models/User'

class UserController {
  async index(request, response) {
    try {
      const user = await User.find(1)

      if (!user) makeError({ code: 404, message: 'User not found' })

      return user
    } catch (error) {
      response.status(error.status).send(error)
    }
  }
}
```

#### makeResponse

The `makeResponse` function is the function responsible for formulating your return messages in successful requisitions.

```js
import { makeResponse } from 'http-handler-response'
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
        makeResponse({
          code: 201,
          message: 'Successful registered user.',
          data: user,
        }),
      )
    } catch (error) {
      response.status(error.status).send(error)
    }
  }
}
```

## Response

The answer model is quite simple. It contains the following properties, `title`, `status`, `message` and `data`.

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
