//1. 引入express
const express = require('express');
const path = require('path');
const formidable = require('formidable');
var arr = [{
        title: '123',
        price: '1',
        fee: '1',
        description: '111',
        pic: '/upload_14db99a2cdb31ecb0112ff5936e78357.png',
        date: '2019-05-05T07:04:05.220Z'
    },
    {
        title: '2',
        price: '2',
        fee: '2',
        description: '222',
        pic: '/upload_cd21714889e240fd1922c61b1ca62879.png',
        date: '2019-05-05T07:04:23.026Z'
    }
];
//2.创建路由
const router = express.Router();
//3.匹配客户端路由，给与响应
router.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname,"../","views","add.ejs"))

    res.render("add");
})

router.post('/', function (req, res) {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, "../", "uploads");
    form.parse(req, function (err, fields, files) {
        if (err) throw err;
        //图片路径切割
        // path:'C:\\Users\\ky\\Desktop\\2016-node.js\\PPT\\04.express框架+第三方模块\\demo\\learn\\uploads\\upload_8c8a3d82bb64708f4d53492ecd855c52.png',
        //var att = files.pic.path.split('\\');
        var obj = {
            ...fields,
            pic: "/" + path.basename(files.pic.path),
            date: new Date()
        }
        arr.push(obj);
        res.redirect('/add/list');
    })
})
router.get('/list', function (req, res) {
    res.render("list", {
        arr
    })
})

//4.路由 模块暴露
module.exports = router;