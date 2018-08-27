// // 载入模块
// var Segment = require('segment');
// // 创建实例
// var segment = new Segment();
// // 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
// segment.useDefault();

// 开始分词
// console.log(segment.doSegment('这是一个基于Node.jssss,.,,,,,的中文分词模块。',{
//     stripPunctuation: true
//   }))
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
            //   var utf8String = gbk.toString('utf-8', data);
        //    // console.log(utf8String)  
        //     // fs.writeFileSync("taobao.html",utf8String,(err)=>{
        //     //      console.log(data,"\n\n\n\n",err.stack)
        //     //     });
 
            let DOM = new JSDOM(data);
            let document=DOM.window.document;
            let textContent=document.querySelector('.read-content').innerHTML.replace(/<[^>]+>/g,' ');
           console.log(textContent) 
          // // 载入模块
var Segment = require('segment');
var segment = new Segment();
segment.useDefault();

var arrText=segment.doSegment(textContent)
// var arrText=segment.doSegment(textContent,{stripPunctuation: true})
// console.log(arrText);
var myarr=[];
arrText.forEach(element => {
    if(element.p!=2048)
    {
        myarr.push(element.w) 
    }
   
});
// console.log(myarr)
var myJson={};
myarr.forEach(element => {
    if(!myJson[element])
    {
        myJson[element]=1;
    }else{
       myJson[element]++;
    }
   
});
//   console.log(myJson)

let arr2=[];
for (let word in myJson){
if(word<=1) {
   continue
}
arr2.push({c:myJson[word],w: word})
}
console.log(arr2)
arr2.sort((a,b)=>b.c-a.c);
console.log(arr2)
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
                    success && success(str);
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


