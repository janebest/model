const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const moment=require('moment');
const app = express();
app.locals.moment=moment;

//框架内置的静态资源读取中间件
app.use(express.static(path.join(__dirname,"public")));//静态文件处理
app.use(express.static(path.join(__dirname,"uploads")));//静态文件处理

//自己封装静态资源读取中间件
// app.use(function (req, res, next) {
//     var router = path.join(__dirname, "public", req.url);
//     if (fs.existsSync(router)) {
//         res.end(fs.readFileSync(router)); //存在读取相应文件
//     } else {
//         next(); //不存在接着往下判断
//     }
// })
//bodyparser加载
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

//模板引擎设置
//模板文件位置
app.set('views',path.join(__dirname,"views"));
//模板类型  ejs
app.set('view engine','ejs');


//路由引入
//index 首页
    //add  update  delete   find

    //  /index/add 首页增
    //  /index/update 首页改
    //  /index/delete 首页删
    //  /index/find 首页查

//server  服务窗
    //add  update  delete   find
//search  探索
    //add  update  delete   find
//rich   财富
    //add  update  delete   find
app.use("/index",require('./routes/index.js'))
app.use("/server",require('./routes/server.js'))
app.use("/search",require('./routes/search.js'))
app.use("/rich",require('./routes/rich.js'))
app.use("/add",require('./routes/add.js'))



















app.use(function(err,req,res,next){
    res.setHeader('content-type',"text/plain;charset=utf8");
    res.end("页面没有找到");
})
app.listen(4000);