

var express = require('express');
var path = require('path');
var url = require('url')
 var gbk = require('gbk');
// var Segment = require('segment');
var fs = require('fs')
var app = express();
// var seg = new Segment();
// seg.useDefault();
//使用中间件 
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));// extended: true 可解析nested json
app.use(express.static(path.join(__dirname,'static')));//指定静态文件站点资源路径

 /**
  * 全局参数 统计重定向次数  如淘宝
  */
var redirectCount=0;
app.get('/',  (req, res) =>{ 
  // console.log(req,res) 
res.send(path.join(__dirname, '/static', '/index.html'));
});
app.get('/',  (req, res) =>{ 
    // console.log(req,res) 
  res.send('测试成功!');
});
app.get('/api/cralwer/get',(req,res)=>{
  
    var urlpath=req.body.urlpath
    //console.log("urlpath---->",urlpath)
   requestByUrl(urlpath,(data)=>{
    // console.log( gbk.toString('utf-8',"data"))
     console.log(gbk.toString('utf-8',data))
    console.log(data)
     fs.writeFile('1.html',data);
  })
});
var server = app.listen(3000,  () =>{
  var host = server.address().address;
  var port = server.address().port;
  console.log('服务启动成功',);
  console.log('访问服务测试路径> http://%s:%s', host=='::'?'localhost':host, port);
});

/**
 * 服务端 请求
 * */
 function requestByUrl(sourceUrl,success)
 {
   /**
    * 获取路径及处理请求协议类型处理
    */
var urlObject = url.parse(sourceUrl);
var http = '';
if(urlObject.protocol == 'http:'){
  http = require('http');
 }else{
  http = require('https');
 }
console.log(urlObject)

 var req=http.request({
   "hostname":urlObject.hostname,
   "path":urlObject.path
  },res=>{
  //  console.log('进来了')
                if(res.statusCode == 200)
                {
                  var str = '';
                  var arr = [];
                  res.on('data',buffer=>{
                    str += buffer ;
                    arr.push(buffer)
                    // console.log(str)
                  });

                  res.on('end',()=>{
                    var b = Buffer.concat(arr);
                    success && success(b);
                  });

                }
                else
                {
                  console.log(`这是第${redirectCount}个重定向。`);
                  requestByUrl(res.headers.location,success);
                }
           });
           req.end();
           req.on('error',err=>{
          console.log('404')
           });
           
 }


/**
 * 开始
 * 
 * 测试搭建环境
 * 基础框架
 */

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
/**
 * 结束
 * 
 * 测试搭建环境
 * 基础框架
 */

































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