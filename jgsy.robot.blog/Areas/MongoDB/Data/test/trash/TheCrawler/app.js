

var express = require('express');
var path = require('path');
var app = express();

//使用中间件 
 var bodyParser=require('body-parser');

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }));// extended: true 可解析nested json
app.use(express.static(path.join(__dirname,'static')));//指定静态文件站点资源路径

 


app.get('/',  (req, res) =>{
    //request respone
    // console.log(req) 
    // console.log(res) 


  res.send('测试成功!');
});

var server = app.listen(3000,  () =>{
  var host = server.address().address;
  var port = server.address().port;
  console.log('服务启动成功',);
  console.log('访问服务测试路径> http://%s:%s', host=='::'?'localhost':host, port);
});







































// var express = require('express');
// var app = express();

// app.get('/',  (req, res) =>{
//   res.send('测试成功!');
// });

// var server = app.listen(3000,   () =>{
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('服务启动成功',);
//   console.log('访问服务测试路径> http://%s:%s', host=='::'?'localhost':host, port);
// });