// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

interface NodeJSRequestOptions {
  url: string
  method: 'GET' | 'PUT' | 'POST' | 'DELETE'
  headers: Record<string, string>
  body: FormData | object
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to perform native NodeJS HTTP requests
     * @example
     * cy.fetchNodeJS({
     *   url: "https://example.org",
     *   method: "PUT",
     *   headers: {
     *     "Accept": "text/html",
     *     "Authorization": "Bearer TOKEN"
     *   },
     *   body: {
     *     "foo": "bar"
     *   }
     * })
     */
    fetchNodeJS(options: NodeJSRequestOptions): Chainable<Element>
  }
}
