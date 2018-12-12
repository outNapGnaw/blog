
## CHANGELOG

###  TODO

- Tag 删除时需要更新相关文章的 tag 字段
- Category 也是同样的操作
- 删除一条存在子级评论的评论时，子级评论的 PID 需要置空
- 集成 [Analytics Reporting API](https://developers.google.com/analytics/devguides/reporting/core/v4/quickstart/web-js?hl=zh-cn) 供管理员使用
- 集成 [RSS](https://github.com/dylang/node-rss) 订阅接口
- sitemap，tags CUD 时进行缓存更新，使用 redis.promise

### v2.2.0

- opeitime logic
- add constants api

### v2.1.4

- 增加统计数据接口
- 优化密码更新机制

### v2.1.2

- 升级完善全站缓存机制
- 增加时间定点任务库

### v2.1.0

- 优化编码风格
- 完善项目信息
- 完善 JsDoc 信息
- Music 控制器增加 Limit 参数
- Github 控制器优化数据
- 增加 bing-wallpaper API 服务
- 使用更友好的 consola 日志模块
- 为控制器和 Model 抽象出单独的状态常量

### v2.0.0

- 文章增加原创、转载字段
- 优化评论系统的业务
  * submitSpam 与移至黑名单功能映射
  * 移黑功能，会自动将 SPAM 信息提交至 akismet，同时添加至系统黑名单
- 升级 akismet-api 库，增加两项功能
- 升级 geoip-lite 库
- 升级 helmet 库
- 升级 jsonwebtoken 库，根据版本调整逻辑
- 升级 marked
- 升级 mongoose 库
- 升级 nodemailer 库，更新逻辑，去除 nodemailer-smtp-transport 库
- 升级 redis 库
- 升级 request 库
- 升级 sitemap 库，优化部分逻辑
- 升级 yargs 库
- fork mongoose-paginate 修复旧方法警告问题
- 更新密码加密机制
- 增加检查 Token 有效性接口

### v1.2.0

- 重构了播放器 API

### v1.1.0

- 修复了评论数 bug

### v1.0.0

- 驱动搜索引擎 ping 接口 文章发布后自动ping给搜索引擎  xml
- 增加评论功能+黑名单，评论可自动校验spam，及黑名单（ip、邮箱、关键字的校验）
- 使用 helmet + 手动优化，优化程序安全性
- 优化 mongoose 实例
- 优化数据表结构
- 更新数据时时间更新
- 修复时间检索失效
- 增加 idle-gc 内存回收
- 增加百度搜索引擎的实时提交
- 更新模块化别名
- 更新 README.md
- 加入网站地图接口
- 网站地图由于缓存或者 primise 不能及时更新
- 网站地图的数据构成中文章需要筛选公开一发布的文章
- 对接百度统计开放平台api
- 密码存储需要使用 md5 加密机制
- token... 等 config 信息使用 node 命令参数在 shell 中配置覆盖
- lean 和 翻页插件一起使用，返回的 id 字段是 _id bug
- 整理统一 result 的返回结构
- 围观后计数功能
- 多说转发热门文章接口
- 相关文章接口
- 使用 Redis 缓存标签、播放器、Github 数据
