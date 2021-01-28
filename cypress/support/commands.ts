Cypress.Commands.add('fetchNodeJS', (options) => {
  return cy.task('fetch', options)
})

Cypress.Commands.add('startServer', (options) => {
  return cy.task('server', options)
})

export interface NodeJSRequestOptions {
  url: string
  method: 'GET' | 'PUT' | 'POST' | 'DELETE'
  headers: Record<string, string>
  body: FormData | object
}

export interface ServerOptions {
  port: number
  response: {
    status: number
    body: string
    headers: Record<string, string>
  }
}
