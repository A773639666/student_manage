//导入express模块
const express = require('express')
const path = require('path')
//创建APP
const app = express()
//node中处理静态资源
app.use(express.static(path.join(__dirname,'statics')))
//集成路由中间件
const accountRouter = require(path.join(__dirname,'./routers/accountRouter'))
app.use('/account',accountRouter)

//开启
app.listen(6688,'127.0.0.1',err=>{
    if (err) {
        console.log(err)
    }
    console.log('Start OK')
})