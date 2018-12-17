/**
 * @file Api config / Commonjs module
 * @module api.config
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

const { isProdMode } = require('./environment')
const httpORhttps = process.env.protocol || 'http'
module.exports = {
  // cdnUrl: isProdMode ? 'https://peytonblog.aitboy.cn' : '',
  cdnUrl: isProdMode ? '' : '',
  proxyUrl: isProdMode ? `${httpORhttps}://peytonis.aitboy.cn/proxy/` : 'http://localhost:3000/proxy/',
  baseUrl: isProdMode ? `${httpORhttps}://peytonblogapi.aitboy.cn` : 'http://localhost:8000',
  socketHost: isProdMode ? `${httpORhttps}://peytonis.aitboy.cn` : 'http://localhost:3000'
}
