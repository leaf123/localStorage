
cookie：

用户端保存请求信息的机制
分号分隔的多个key-value字段
存储在本地的加密文件里
域名和路径的限制

相关字段
name:cookie名称
domain:cookie生效的域名
path:cookie生效的路径
expires:cookie过期时间
HttpOnly:用户端不可更改

session：

服务端保存请求信息的机制
sessionId通常存放在cookie里
会话由浏览器控制，会话结束，session失效

localStorage：

H5新特性
有域名限制，不存在作用域概念
只有key-value
没有过期时间
浏览器关闭后不消失

sessionStorage:
和localStorage及其相似
浏览器关闭后消失