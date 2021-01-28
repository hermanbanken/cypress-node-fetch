/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import fetch from 'node-fetch'
import type { ServerOptions } from '../support/index'
import { createServer } from 'http'

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
    fetch(opts) {
      const { url, ...rest } = opts
      return fetch(url, rest).then((resp) => {
        return resp.text().then((text) => ({
          status: resp.status,
          statusText: resp.statusText,
          headers: resp.headers,
          body: text,
          ok: resp.ok,
        }))
      })
    },
    pid() {
      console.log('NodeJS info')
      return {
        pid: process.pid,
      }
    },
    server(opts: ServerOptions) {
      createServer((req, res) => {
        for (const key in opts.response.headers || {}) {
          res.setHeader(key, opts.response.headers[key])
        }
        res.writeHead(opts.response.status)
        res.write(opts.response.body)
        res.end()
      }).listen(opts.port || 8080)
      return {}
    },
  })
}
