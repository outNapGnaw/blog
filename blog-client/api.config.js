/**
 * @file Api config / Commonjs module
 * @module api.config
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

const { isProdMode, httpOrHttps } = require('./environment')
module.exports = {
  // cdnUrl: isProdMode ? 'https://peytonblog.aitboy.cn' : '',
  cdnUrl: isProdMode ? '' : '',
  proxyUrl: isProdMode ? `${httpOrHttps}://peytonis.aitboy.cn/proxy/` : 'http://localhost:3000/proxy/',
  baseUrl: isProdMode ? `${httpOrHttps}://peytonblogapi.aitboy.cn` : 'http://localhost:8000',
  socketHost: isProdMode ? `${httpOrHttps}://peytonis.aitboy.cn` : 'http://localhost:3000'
}
