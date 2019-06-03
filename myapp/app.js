const express=require('express');
const path=require('path');
const app=express();//创建一个服务器

var login=false;
app.get('/login',function(req,res){
    res.set("content-type","text/plain;charset=utf8")
    res.end("请登录");
})

app.get("/add/:id/:num",function(req,res){
    res.set("content-type","text/plain;charset=utf8")
    if(!login){
        res.redirect("/login")
    }
    

    res.end("可以购物");



    //console.log(req.query);
    //console.log(req.originalUrl);
    //console.log(req.route);
    //console.log(req.path);
    //console.log(req.params)
   // res.write();//string  buffer
    //array  object

    res.status(200);
   // res.type("text/html");
    // res.set({
    //     "content-type",
    //     "content-length"
    // })
   // res.end("add");
//    res.json({
//        username:"123",
//        password:"456"
//    })
//res.sendFile(path.join(__dirname,"package.json"));
//res.send([1,2,3,4,5,6])
  //res.download("./package.json","1.json")

})
app.get('/delete',function(req,res){
    res.end('delete')
})
app.post("/",function(req,res){
    res.end('123');
})
app.post('/add',function(req,res){
    res.end('456')
})
app.listen(4000);