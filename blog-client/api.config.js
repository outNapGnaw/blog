/**
 * @file Api config / Commonjs module
 * @module api.config
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

const { isProdMode } = require('./environment')

module.exports = {
  // cdnUrl: isProdMode ? 'https://peytonblog.aitboy.cn' : '',
  cdnUrl: isProdMode ? '' : '',
  proxyUrl: isProdMode ? 'https://peytonblog.aitboy.cn/proxy/' : '/proxy/',
  baseUrl: isProdMode ? 'https://peytonblogapi.aitboy.cn' : 'http://localhost:8000',
  socketHost: isProdMode ? 'https://peytonblog.aitboy.cn' : 'http://localhost:3000'
}
