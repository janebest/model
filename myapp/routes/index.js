//1. 引入express
const express = require('express');
//2.创建路由
const router = express.Router();
//3.匹配客户端路由，给与响应
router.get("/", function (req, res) {
    res.end('index')
})
router.get("/add", function (req, res) {
    res.end('index add');
})
router.get("/update", function (req, res) {
    res.end('index update');
})
router.get("/delete", function (req, res) {
    res.end('index delete');
})
router.get("/find", function (req, res) {
    res.end('index find');
})
//4.路由 模块暴露
module.exports = router;