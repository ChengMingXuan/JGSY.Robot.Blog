var number=0;
const url= require('url');
const fs= require('fs');
const gbk= require('gbk');
const JSDOM = require("jsdom").JSDOM;
// const { JSDOM } = jsdom;
// const http= require('http');
var tbao='https://detail.tmall.com/item.htm?id=45276509091&ali_refid=a3_430673_1006:1103581458:N:%E7%94%B5%E8%84%91%E6%A4%85:8dbe4d1dc539f5bdac6cb5c81c09177d&ali_trackid=1_8dbe4d1dc539f5bdac6cb5c81c09177d&spm=a2e15.8261149.07626516002.1';

  GetUrl("https://www.xs8.cn/chapter/10276842904403703/27586841842480316",data=>{
            console.log("终于走出来了");  
             console.log(data.toString())   
            var utf8String = gbk.toString('utf-8', data);
           // console.log(utf8String)  
            // fs.writeFileSync("taobao.html",utf8String,(err)=>{
            //      console.log(data,"\n\n\n\n",err.stack)
            //     });
 
            let DOM = new JSDOM(utf8String);
            let document=DOM.window.document;
           console.log(document.querySelector('.tm-count').innerHTML)
            // console.log(document.querySelector('.tm-price').innerHtml)
   

});

function GetUrl(sUrl,success){
    number++;
        var urlObj=url.parse(sUrl);
        var http;
        if(urlObj.protocol == "http:")
        {
            http=require("http")
        }else if(urlObj.protocol == "https:"){
            http=require("https")
        }
        var req=http.request({
            'hostname':urlObj.hostname,
            'path':urlObj.path
            },res=>{
                // console.log(res.headers.location:)
                if(res.statusCode == 200)
                {
                var arr=[];
                var str=''
                res.on('data',buffer=>{
                    arr.push(buffer)
                    str+=buffer; 
                });
                res.on('end',()=>{
                    let b = Buffer.concat(arr);
                    success && success(b);
                });
                }
                else if(res.statusCode == 302 || res.statusCode == 301 )
                {
                    console.log(`第${number}次重定向` ,res.headers.location)
                    GetUrl(res.headers.location,success)
                }
                });
        req.end();
        req.on('error',err=>{   console.log("恭喜 恭喜 恭喜 恭喜....出错了!!!!!!!" , err.stack);    });
}


