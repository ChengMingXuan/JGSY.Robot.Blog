//npm install express --save
// 以上命令会将Express框架安装在当期目录的node_modules目录中， node_modules目录下会自动创建express目录。以下几个重要的模块是需要与express框架一起安装的：

// body-parser - node.j中间件，用于处理JSON, Raw, Text和URL编码的数据。

// cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。

// multer - node.js中间件，用于处理enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

// $ npm install body-parser --save
// $ npm install cookie-parser --save
// $ npm install multer --save
var ex=require('express');

var app=ex();
app.get('/',function(req,rep){
    console.log("获取路由当前安装的URL路径"+req.baseUrl)
    console.log("获得「请求主体」/ Cookies"+req.body )
    console.log(""+req.cookies)
    console.log("判断请求是否还「新鲜」"+req.fresh )
    console.log(""+req.stale)
    console.log("获取主机名和IP地址"+req.hostname )
    console.log(""+req.ip)
    console.log("获取原始请求URL"+req.originalUrl)
    console.log("获取路由的parameters"+req.params)
    console.log("获取请求路径"+req.path)
    console.log("获取协议类型"+req.protocol)
    console.log("获取URL的查询参数串"+req.query)
    // console.log("获取子域名"+req.subdomains)
    // console.log("检查请求的Accept头的请求类型"+req.accpets())
    // console.log(""+req.acceptsCharsets )
    // console.log(""+req.acceptsEncodings )
    // console.log(""+req.acceptsLanguages)
    // console.log("获取指定的HTTP请求头"+req.get())
    // console.log("判断请求头Content-Type的MIME类型"+req.is())
    console.log("-------------------------------------------------")
  
  
    rep.send("Hello World!!!!!!");
});

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
  
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})