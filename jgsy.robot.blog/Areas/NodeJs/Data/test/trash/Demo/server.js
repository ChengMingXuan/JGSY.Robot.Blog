
//创建一个服务
var http = require("http");
http.createServer(function(request,respone){
    respone.writeHead(200,{'Content-Type':'text/plain'});
    respone.end("Hello World!\n");
}).listen(9999);
console.log("Server running at http://127.0.0.1:9999/");