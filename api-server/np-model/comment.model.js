/**
 * Comment model module.
 * @file 评论数据模型
 * @module model/comment
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

const { mongoose } = require('np-core/np-mongodb')
const mongoosePaginate = require('mongoose-paginate')
const autoIncrement = require('mongoose-auto-increment')
const { COMMENT_STATE, COMMENT_PARENT_TYPE } = require('np-core/np-constants')

// 标签模型
const commentSchema = new mongoose.Schema({

	// 第三方评论 ID
	third_id: { type: Number },

	// 评论所在的文章 ID，0 代表系统留言板
	post_id: { type: Number, required: true },

	// pid，0 代表默认留言
	pid: { type: Number, default: COMMENT_PARENT_TYPE.self },

	// content
	content: { type: String, required: true, validate: /\S+/ },

	// 是否置顶
	is_top: { type: Boolean, default: false },

	// 被赞数
	likes: { type: Number, default: 0 },

	// 评论产生者
	author: {
		name: { type: String, required: true, validate: /\S+/ },
		email: { type: String, required: true, validate: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/ },
		site: { type: String, validate: /^((https|http):\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/ }
	},

	// IP地址
	ip: { type: String },

	// IP物理地址
	ip_location: { type: Object },

	// 用户UA
	agent: { type: String, validate: /\S+/ },

	// 状态 => 0 待审核 / 1 通过正常 / -1 已删除 / -2 垃圾评论
	state: { type: Number, default: COMMENT_STATE.published },

	// 发布日期
	create_at: { type: Date, default: Date.now },

	// 最后修改日期
	update_at: { type: Date },

	// 自定义扩展
	extends: [{ 
		name: { type: String, validate: /\S+/ },
		value: { type: String, validate: /\S+/ }
	}]
})

// 翻页 + 自增 ID 插件配置
commentSchema.plugin(mongoosePaginate)
commentSchema.plugin(autoIncrement.plugin, {
	model: 'Comment',
	field: 'id',
	startAt: 1,
	incrementBy: 1
})

// 时间更新
commentSchema.pre('findOneAndUpdate', function(next) {
	this.findOneAndUpdate({}, { update_at: Date.now() })
	next()
})

// 标签模型
module.exports = mongoose.model('Comment', commentSchema)
