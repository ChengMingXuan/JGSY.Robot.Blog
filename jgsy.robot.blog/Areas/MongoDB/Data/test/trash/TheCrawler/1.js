var express = require('express');

var path = require('path');
var url = require('url');
var fs = require('fs')
var app = express();
//使用中间件 bodyParser
var bodyParser = require('body-parser');
var gbk = require('gbk');
// 载入模块
var Segment = require('segment');
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();

  var JSOM =require('jsdom').JSDOM;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));// extended: true 可解析nested json
app.use(express.static(path.join(__dirname,'static')));//指定静态文件站点资源路径

var redirectCount=0;//

app.get('/api/cralwer/get',(req,res)=>{
    var urlpath=req.query.urlpath;
    requestByUrl(urlpath,(data)=>{
    //     fs.writeFile('1.html',data,function(err){
    //         if(err) throw err;
    //             console.log('页面抓取成功')
    //     });
      wordByDomToSegment(data,res);
   
 
    });
});
var server = app.listen(3000,  () =>{
  var host = server.address().address;
  var port = server.address().port; 
  console.log('服务启动成功 http://%s:%s', host=='::'?'localhost':host, port);
});

 function requestByUrl(sourceUrl,success){
    redirectCount++;
    var urlObject = url.parse(sourceUrl);
    var http = '';
    if(urlObject.protocol == 'http:'){
    http = require('http');
    }else{
    http = require('https');
    }

    var req=http.request({"hostname":urlObject.hostname,"path":urlObject.path},res=>{
                if(res.statusCode == 200)
                {
                    var str = '';
                    var arr = [];
                    res.on('data',buffer=>{  str += buffer ;  arr.push(buffer);  });
                    res.on('end',()=>{  var b = Buffer.concat(arr);  success && success(b); });
                } else if(res.statusCode == 302 || res.statusCode == 301)
                {
                    console.log(`这是第${redirectCount}个重定向。`);
                    requestByUrl(res.headers.location,success);
                }
        });
        req.end();
        req.on('error',err=>{  console.log('404!!!!!!!!!!!!!!!!!!!!!!!!!'); });
           
 }

 function wordByDomToSegment(data,res)
 {
      var DOM = new JSOM(data); //虚拟浏览器document
      var getDocument = DOM.window.document;
 
// var score = getDocument.querySelector('.tm-count').innerHTML;//获取淘宝积分
// console.log(score)

// var myHtml = getDocument.querySelector('.chapter-main').innerHTML;
//  console.log(myHtml)

 var myword = getDocument.querySelector('.chapter-main').innerHTML.replace(/<[^>]+>/g,'')//去除标签 获取小说内容
//  console.log(myword)

//  盘古分词组件
var arr = segment.doSegment(myword);//w 表示词的内容，p 表示词性
// console.log(arr);
var myArr=[];//去除标点符号 即 p=2048
for(let i=0;i<arr.length;i++){
        if(arr[i].p!=2048)
        myArr.push(arr[i].w);
}
////// var result = segment.doSegment(myword, {  stripPunctuation: true });//去除标点符号
//////console.log(result);
var arrCount={};
myArr.forEach(element => {
    if(!arrCount[element])
    {
        arrCount[element]=1;
    }else
    {
        arrCount[element]++;
    }
});
var getNewArr=[];
for(let i in arrCount){
    if(arrCount[i]<=1) continue;
    getNewArr.push({w:i,c:arrCount[i]})
} 
    
 
// console.log(arrCount);
//排序
getNewArr.sort((a,b)=>b.c-a.c);
// console.log(getNewArr);
console.log({data:getNewArr});
// res.send({data:getNewArr});
// res.end();
res.send({data:getNewArr});

res.end();

 }
