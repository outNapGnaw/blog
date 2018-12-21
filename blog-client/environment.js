/**
 * @file Environment / Commonjs module
 * @module environment
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

const environment = process.env
const isDevMode = Object.is(environment.NODE_ENV, 'development')
const isProdMode = Object.is(environment.NODE_ENV, 'production')

const isStatic = process && process.static
const isServer = process && process.server
const isBrowser = process && process.browser

const httpOrHttps = environment.protocol || 'http'

module.exports = {
  isDevMode,
  isProdMode,
  environment,
  
  isStatic,
  isBrowser,
  isServer,

  httpOrHttps
}
