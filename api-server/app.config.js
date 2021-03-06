/**
 * App config module.
 * @file 应用运行配置
 * @module app.config
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

const { isProdMode, isDevMode } = require('environment')
const path = require('path')
// const { argv } = require('yargs')
const argv = process.env
const package = require('package')
exports.APP = {
	LIMIT: 16,
	PORT: 8000,
	ROOT_PATH: __dirname,
	NAME: 'peytonis.aitboy.cn',
	URL: 'https://peytonis.aitboy.cn',
	FRONT_END_PATH: path.join(__dirname, '..', 'peytonis.aitboy.cn')
}

exports.CROSS_DOMAIN = {
	allowedOrigins: ['https://peytonis.aitboy.cn', 'https://cdn.aitboy.cn', 'https://peytonblogadmin.aitboy.cn'],
	allowedReferer: 'aitboy.cn'
}

exports.MONGODB = {
	uri: `mongodb://${isProdMode ? 'mongo' : '127.0.0.1'}:${argv.dbport || '27017'}/NodePress`,
	username: argv.db_username || 'DB_username',
	password: argv.db_password || 'DB_password'
}

exports.REDIS = {
  host: `${isProdMode ? 'redis' : '127.0.0.1'}`,
  port: 6379,
  password: '',
  db: 1
}
exports.AUTH = {
	data: argv.auth_data || { user: 'root' },
	jwtTokenSecret: argv.auth_key || 'nodepress',
	defaultPassword: argv.auth_default_password || 'root'
}

exports.EMAIL = {
	smtp: argv.email_smtp || 'smtp.163.com',
	account: argv.email_account || 'email here',
	password: argv.email_password || 'password here',
	from: '"outNapGnaw" <wptwwj@163.com>',
	admin: 'outNapGnaw'
}

exports.AKISMET = {
	key: argv.akismet_key || 'akismet_key here',
	blog: argv.akismet_blog || 'blog site url here'
}

exports.GITHUB = {
	username: 'outNapGnaw',
}

exports.ALIYUN = {
	ip: argv.aliyun_ip_auth
}

exports.BAIDU = {
	site: argv.baidu_site || 'your baidu site domain like : peytonis.aitboy.cn',
	token: argv.baidu_token || 'your baidu seo push token'
}

exports.QINIU = {
	accessKey: argv.qn_accessKey || 'your access key',
	secretKey: argv.qn_secretKey || 'your secret key',
	bucket: argv.qn_bucket || 'your bucket name',
	origin: argv.qn_origin || 'http://nodepress.u.qiniudn.com',
	uploadURL: argv.qn_uploadURL || 'http://up.qiniu.com/'
}

exports.INFO = {
	name: package.name,
	version: package.version,
	author: package.author,
	site: exports.APP.URL,
	github: 'https://github.com/outNapGnaw',
	powered: ['Vue', 'Nuxt.js', 'ReactNative', 'Angular', 'Bootstrap', 'Nodejs', 'MongoDB', 'Express', 'Nginx']
}
