//导入express path模块
const express = require('express')
const path = require('path')
//创建路由对象
const accountRouter = express.Router()
const accountCTRL = require(path.join(__dirname,'../controllers/accountController'))
//当浏览器发送了 http://127.0.0.1:3000/account/login 交给对应的控制器 accountCTRL 的 getLoginPage 方法处理
accountRouter.get('/login',accountCTRL.getLoginPage)
accountRouter.get('/vcode',accountCTRL.getImageVcode)
module.exports = accountRouter