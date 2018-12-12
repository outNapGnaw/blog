/**
 * @file Webpack CDN 解析器 / Commonjs module
 * @module extend/html-cdn-loader
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

const { cdnUrl } = require('../api.config')
const { isProdMode } = require('../environment')

module.exports = source => {
  if (isProdMode) {
    source = source.replace(/src="\/images\//g, `src="${cdnUrl}/images/`)
    // source = source.replace(/src="\/partials\//g, `src="${cdnUrl}/partials/`)
  }
  return source
}
