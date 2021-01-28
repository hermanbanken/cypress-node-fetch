// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

import { NodeJSRequestOptions, ServerOptions } from './commands'

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
  interface Chainable {
    /**
     * Custom command to perform native NodeJS HTTP requests
     * @example
     * cy.startServer({
     *   port: 8080,
     *   response: {
     *     status: 200,
     *     body: "<p>Foo</p>"
     *     headers: {
     *       "Content-Type": "text/html",
     *     },
     *   }
     * })
     */
    startServer(options: ServerOptions): Chainable<Element>
  }
}
