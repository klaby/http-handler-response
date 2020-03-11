// 1xx
export const INFORMATIONAL = {
  100: '100 - Continue',
  101: '101 - Switching Protocols',
  102: '102 - Processing',
} as const

// 2xx
export const SUCCESS = {
  200: '200 - OK',
  201: '201 - Created',
  202: '202 - Accepted',
  203: '203 - Non-authoritative Information',
  204: '204 - No Content',
  205: '205 - Reset Content',
  206: '206 - Partial Content',
  207: '207 - Multi-Status',
  208: '208 - Already Reported',
  209: '209 - IM Used',
} as const

// 3xx
export const REDIRECTION = {
  300: '300 - Multiple Choices',
  301: '301 - Moved Permanently',
  302: '302 - Found',
  303: '303 - See Other',
  304: '304 - Not Modified',
  305: '305 - Use Proxy',
  307: '307 - Temporary Redirect',
  308: '308 - Permanent Redirect',
} as const

// 4xx
export const CLIENT_ERROR = {
  400: '400 - Bad Request',
  401: '401 - Unauthorized',
  402: '402 - Payment Required',
  403: '403 - Forbidden',
  404: '404 - Not Found',
  405: '405 - Method Not Allowed',
  406: '406 - Not Acceptable',
  407: '407 - Proxy Authentication Required',
  408: '408 - Request Timeout',
  409: '409 - Conflict',
  410: '410 - Gone',
  411: '411 - Length Required',
  412: '412 - Precondition Failed',
  413: '413 - Payload Too Large',
  414: '414 - Request-URI Too Long',
  415: '415 - Unsupported Media Type',
  416: '416 - Requested Range Not Satisfiable',
  417: '417 - Expectation Failed',
  418: "418 - I'm a teapot",
  421: '421 - Misdirected Request',
  422: '422 - Unprocessable Entity',
  423: '423 - Locked',
  424: '424 - Failed Dependency',
  426: '426 - Upgrade Required',
  428: '428 - Precondition Required',
  429: '429 - Too Many Requests',
  431: '431 - Request Header Fields Too Large',
  444: '444 - Connection Closed Without Response',
  451: '451 - Unavailable For Legal Reasons',
  499: '499 - Client Closed Request',
} as const

// 5xx
export const SERVER_ERROR = {
  500: '500 - Internal Server Error',
  501: '501 - Not Implemented',
  502: '502 - Bad Gateway',
  503: '503 - Service Unavailable',
  504: '504 - Gateway Timeout',
  505: '505 - HTTP Version Not Supported',
  506: '506 - Variant Also Negotiates',
  507: '507 - Insufficient Storage',
  508: '508 - Loop Detected',
  510: '510 - Not Extended',
  511: '511 - Network Authentication Required',
  599: '599 - Network Connect Timeout Error',
} as const

// Code number
export type TInformationalCode = keyof typeof INFORMATIONAL
export type TSuccessCode = keyof typeof SUCCESS
export type TRedirectionCode = keyof typeof REDIRECTION
export type TClientErrorCode = keyof typeof CLIENT_ERROR
export type TServerErrorCode = keyof typeof SERVER_ERROR

// Code text
export type TInformational = typeof INFORMATIONAL[TInformationalCode]
export type TSuccess = typeof SUCCESS[TSuccessCode]
export type TRedirection = typeof REDIRECTION[TRedirectionCode]
export type TClientError = typeof CLIENT_ERROR[TClientErrorCode]
export type TServerError = typeof SERVER_ERROR[TServerErrorCode]

// Root Response codes
export type TRootResponseCode =
  | TInformationalCode
  | TSuccessCode
  | TRedirectionCode

export type TRootResponse = TInformational | TSuccess | TRedirection

// Root Error codes
export type TRootErrorCode = TClientErrorCode | TServerErrorCode

export type TRootError = TClientError | TServerError

// Root codes
export type TRootCode = TRootResponseCode | TRootErrorCode

export const HTTP_CODES = {
  ...INFORMATIONAL,
  ...SUCCESS,
  ...REDIRECTION,
  ...CLIENT_ERROR,
  ...SERVER_ERROR,
}
